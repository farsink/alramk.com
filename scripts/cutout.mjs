// One-off: convert white-background hero JPG to a trimmed transparent PNG cutout.
// Flood-fills near-white/gray background from the image border so interior whites survive.
import sharp from 'sharp';

const SRC = 'src/assets/images/hero-horses-pin.jpg';
const OUT = 'src/assets/images/hero-horses-cutout.png';

const img = sharp(SRC);
const { width, height } = await img.metadata();
const raw = await img.ensureAlpha().raw().toBuffer();
const px = width * height;
const get = (i) => [raw[i * 4], raw[i * 4 + 1], raw[i * 4 + 2]];

// Background test: near-white OR light-gray (watermark gray) and low chroma
const isBg = (i) => {
  const [r, g, b] = get(i);
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  return min >= 195 && max - min <= 26;
};

const bg = new Uint8Array(px);
const stack = [];
for (let x = 0; x < width; x++) { stack.push(x); stack.push((height - 1) * width + x); }
for (let y = 0; y < height; y++) { stack.push(y * width); stack.push(y * width + width - 1); }
while (stack.length) {
  const i = stack.pop();
  if (bg[i] || !isBg(i)) continue;
  bg[i] = 1;
  const x = i % width;
  const y = (i / width) | 0;
  if (x > 0) stack.push(i - 1);
  if (x < width - 1) stack.push(i + 1);
  if (y > 0) stack.push(i - width);
  if (y < height - 1) stack.push(i + width);
}

// Bounding box of foreground
let minX = width, minY = height, maxX = 0, maxY = 0;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    if (!bg[y * width + x]) {
      if (x < minX) minX = x; if (x > maxX) maxX = x;
      if (y < minY) minY = y; if (y > maxY) maxY = y;
    }
  }
}

// Apply alpha (feather 1 box-blur pass on the mask edge)
const alpha = new Uint8Array(px);
for (let i = 0; i < px; i++) alpha[i] = bg[i] ? 0 : 255;
const soft = new Uint8Array(px);
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    let sum = 0, n = 0;
    for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
      const nx = x + dx, ny = y + dy;
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) { sum += alpha[ny * width + nx]; n++; }
    }
    soft[y * width + x] = Math.round(sum / n);
  }
}
for (let i = 0; i < px; i++) raw[i * 4 + 3] = soft[i];

const cut = { left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1 };
await sharp(raw, { raw: { width, height, channels: 4 } })
  .extract(cut)
  .png({ compressionLevel: 9 })
  .toFile(OUT);

console.log(`cutout ${cut.width}x${cut.height} from ${width}x${height} -> ${OUT}`);
