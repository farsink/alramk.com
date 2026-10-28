export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features/' },
  { label: 'How It Works', href: '/how-it-works/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
] as const;

export const contact = {
  name: 'Jaber Al-Nuaimi',
  role: 'Founder & CEO',
  email: 'alnaimij@alramk.com',
  phone: '+974 7062 9029',
  phoneHref: '+97470629029',
  website: 'https://alramk.com',
  location: 'Qatar',
  hours: [
    { days: 'Sun – Thu', time: '9:00 AM – 9:00 PM' },
    { days: 'Friday', time: '2:00 PM – 9:00 PM' },
    { days: 'Saturday', time: '10:00 AM – 3:00 PM' },
  ],
} as const;

export const appLinks = {
  play: 'https://play.google.com/store/apps/details?id=com.bytecraft.al_ramk',
  apple: 'https://apps.apple.com/qa/app/al-ramk/id6739287783',
} as const;

export const demoMailto =
  'mailto:alnaimij@alramk.com?subject=' +
  encodeURIComponent('Al-Ramk demo request') +
  '&body=' +
  encodeURIComponent(
    'Hello Al-Ramk team,\n\nI would like to request a demo.\n\nRace / event:\nDate and venue:\nExpected entries:\nLoops and gates:\nWhat we need (timing / heart rate / GPS / app):\n\nThank you,\n'
  );

export const stats = [
  { value: '50+', label: 'Races managed' },
  { value: '120 km/h', label: 'Max tracked speed' },
  { value: 'Real-time', label: 'Results and standings' },
  { value: 'GPS + HR', label: 'On-course insight' },
] as const;

export type IconName =
  | 'stopwatch'
  | 'transponder'
  | 'heart'
  | 'pin'
  | 'printer'
  | 'phone'
  | 'loop'
  | 'horse'
  | 'users'
  | 'shield'
  | 'flag'
  | 'check'
  | 'arrow'
  | 'chart';

export interface Feature {
  id: string;
  icon: IconName;
  eyebrow: string;
  title: string;
  short: string;
  body: string;
  bullets: string[];
  image?: string;
  imageAlt?: string;
}

export const features: Feature[] = [
  {
    id: 'ubidium',
    icon: 'stopwatch',
    eyebrow: 'Timing hardware',
    title: 'Ubidium timing',
    short: 'Accurate, reliable race results from the Ubidium timing device.',
    body: 'Ubidium is the timing core of the Al-Ramk stack. It delivers accurate, reliable race results with precision timing, so every start, gate, and finish is recorded as part of one connected race record.',
    bullets: ['Precision timing hardware', 'Built for the race venue', 'Feeds the Al-Ramk results workflow'],
    image: 'ubidium',
    imageAlt: 'Ubidium timing device showing a race result screen',
  },
  {
    id: 'transponder',
    icon: 'transponder',
    eyebrow: 'Active tracking',
    title: 'Active Transponder 3D',
    short: 'High-frequency transponder tracking at speeds up to 120 km/h.',
    body: 'The Active Transponder 3D captures fast-moving horses with dependable, high-frequency tracking. It is built for the speeds and conditions of endurance racing, where a missed read changes the result.',
    bullets: ['Horse-mounted active transponder', 'Speeds up to 120 km/h', 'Reliable reads at timing points'],
    image: 'transponder',
    imageAlt: 'Al-Ramk active transponder device',
  },
  {
    id: 'heart-rate',
    icon: 'heart',
    eyebrow: 'Veterinary',
    title: 'Heart-rate monitoring',
    short: 'Heart-rate readings and recovery information for veterinary checks.',
    body: 'Heart rate and recovery are part of the race record, not a separate clipboard. Al-Ramk records these readings alongside timing so veterinary checks remain part of one race workflow.',
    bullets: ['Heart-rate and recovery readings', 'Data alongside race timing', 'Supports veterinary checks at the gate'],
    image: 'heart',
    imageAlt: 'Veterinarian scanning a horse with a heart-rate monitoring device',
  },
  {
    id: 'gps',
    icon: 'pin',
    eyebrow: 'Tracking',
    title: 'GPS tracking',
    short: 'Precise horse positioning and accurate speed determination.',
    body: 'GPS tracking gives organizers a live view of horse position and speed on course. It adds context between timing points, so the race is visible as it unfolds — not only when a horse crosses a gate.',
    bullets: ['Live horse positioning', 'Accurate speed data', 'Course visibility between gates'],
    image: 'gps',
    imageAlt: 'GPS tracking device with a phone showing a horse route on a map',
  },
  {
    id: 'reporting',
    icon: 'printer',
    eyebrow: 'Results',
    title: 'Real-time reporting',
    short: 'Live standings plus printed reports with speed, recovery, heart rate, and vet checks.',
    body: 'Results are published as the race moves. Live standings keep officials and followers aligned, while on-demand printed reports capture speed, recovery, heart rate, and veterinary checks for every rider.',
    bullets: ['Live standings and results', 'Printed reports on demand', 'Gate-by-gate performance data'],
    image: 'final',
    imageAlt: 'Al-Ramk app final standings screen with rider, horse, status, arrival, and average speed',
  },
  {
    id: 'app',
    icon: 'phone',
    eyebrow: 'Mobile app',
    title: 'Al-Ramk mobile app',
    short: 'Upcoming races, live tracking, and finished results in your pocket.',
    body: 'The Al-Ramk app keeps riders, owners, and fans close to the race. Follow upcoming events, live positions and times, and finished results with rankings, timings, and performance summaries.',
    bullets: ['Upcoming races and schedules', 'Live positions, times, and progress', 'Rankings and performance summaries'],
    image: 'races',
    imageAlt: 'Al-Ramk app races list showing a finished endurance race',
  },
];

export const homeSteps = [
  { number: '01', title: 'Set up the race', text: 'Define the race, loops, gates, and entries before the first horse starts.' },
  { number: '02', title: 'Time every pass', text: 'Ubidium and the Active Transponder capture each timing point.' },
  { number: '03', title: 'Run the vet gate', text: 'Heart rate, recovery, hold time, and inspection status in one workflow.' },
  { number: '04', title: 'Publish the result', text: 'Live standings, printed reports, and the Al-Ramk app.' },
] as const;

export const workflowSteps = [
  {
    number: '01',
    title: 'Entries & race setup',
    happens: 'Organizers define the race, its loops and gates, and the riders and horses taking part.',
    does: 'Al-Ramk keeps the race structure and entries together so timing, veterinary checks, and results use the same record.',
  },
  {
    number: '02',
    title: 'Pre-ride inspection',
    happens: 'Horse and rider are presented before the start for the pre-ride veterinary inspection.',
    does: 'The inspection sits in the same race workflow that will carry the horse through every gate and loop.',
  },
  {
    number: '03',
    title: 'Start & loop timing',
    happens: 'The field starts, and each combination is timed through the course and its timing points.',
    does: 'Ubidium and the Active Transponder record each pass; GPS and heart-rate data add position and welfare context.',
  },
  {
    number: '04',
    title: 'Vet gate',
    happens: 'At the gate, the horse is checked for heart rate and recovery, then held for the mandatory period.',
    does: 'Readings, hold time, and inspection status are recorded alongside the horse’s timing record.',
  },
  {
    number: '05',
    title: 'Finish & verification',
    happens: 'The final timing point closes the race and the standings are verified.',
    does: 'Arrival, loop, status, and average speed come together in the final result.',
  },
  {
    number: '06',
    title: 'Publish & follow',
    happens: 'Results are shared with officials, riders, owners, and followers.',
    does: 'Live standings, printed reports, and the Al-Ramk app publish the race record.',
  },
] as const;

export const roles = [
  {
    icon: 'users' as IconName,
    title: 'Organizers',
    text: 'Set up the race, follow every loop, and publish results as they happen.',
  },
  {
    icon: 'heart' as IconName,
    title: 'Veterinarians',
    text: 'Heart-rate readings, recovery, and gate status in one workflow.',
  },
  {
    icon: 'flag' as IconName,
    title: 'Riders & owners',
    text: 'Positions, times, and final standings in the Al-Ramk app.',
  },
  {
    icon: 'chart' as IconName,
    title: 'Spectators',
    text: 'A live view of the race, from the first loop to the final result.',
  },
] as const;

export const faqs = [
  {
    q: 'What does Al-Ramk manage?',
    a: 'Al-Ramk brings timing hardware, heart-rate and GPS monitoring, real-time reporting, and the Al-Ramk mobile app together for endurance horse racing. The result is one connected race record from entries to official results.',
  },
  {
    q: 'How fast can a horse be timed?',
    a: 'The Active Transponder 3D is built to capture speeds of up to 120 km/h with dependable, high-frequency tracking.',
  },
  {
    q: 'What can riders see in the app?',
    a: 'The Al-Ramk app shows upcoming races, live race tracking with rider positions, times, and progress, plus finished results with rankings, timings, and performance summaries.',
  },
  {
    q: 'Can results be printed at the venue?',
    a: 'Yes. Al-Ramk supports real-time printing with reports that include speed, recovery, heart rate, and veterinary checks for each rider.',
  },
] as const;

export const appScreens = [
  {
    key: 'races',
    title: 'Races',
    caption: 'Upcoming and finished races, with search and filter.',
    alt: 'Al-Ramk app Races screen listing a finished endurance race',
  },
  {
    key: 'final',
    title: 'Final',
    caption: 'Position, loop, rider and horse, status, arrival, and average speed.',
    alt: 'Al-Ramk app final standings table with rider, horse, status, arrival, and average speed',
  },
  {
    key: 'summary',
    title: 'Summary',
    caption: 'Eliminated, finished, ready, and on-loop counts at a glance.',
    alt: 'Al-Ramk app summary screen with status cards and two pie charts',
  },
  {
    key: 'results',
    title: 'Results',
    caption: 'Per-gate recovery time, heart rate, speed, and average speed.',
    alt: 'Al-Ramk app detailed results screen showing gate-by-gate performance data',
  },
  {
    key: 'entries',
    title: 'Entries',
    caption: 'Rider, horse, trainer, and owner details for every entry.',
    alt: 'Al-Ramk app entries screen listing riders, horses, trainers, and owners',
  },
] as const;

export const resultData = [
  { title: 'Status', text: 'Finished, on loop, ready to go, or eliminated.' },
  { title: 'Arrival', text: 'The time each combination reaches the gate or finish.' },
  { title: 'Average speed', text: 'Speed across the loop, carried into the final standings.' },
  { title: 'Recovery & heart rate', text: 'Veterinary readings captured at the gate.' },
] as const;

export const team = [
  { initials: 'JA', name: 'Jaber Al-Nuaimi', role: 'Founder & CEO' },
  { initials: 'EA', name: 'Ehab Ali', role: 'Software Engineering Specialist' },
  { initials: 'RN', name: 'Ruzha Nedkova', role: 'Operations Manager' },
] as const;

export const principles = [
  {
    icon: 'loop' as IconName,
    title: 'Endurance-specific engineering',
    text: 'Loops, vet gates, holds, and recovery are part of the product model, not an afterthought.',
  },
  {
    icon: 'transponder' as IconName,
    title: 'One connected stack',
    text: 'Timing, heart rate, GPS, results, and the app work as one system from gate setup to official results.',
  },
  {
    icon: 'shield' as IconName,
    title: 'Race-day ready',
    text: 'Hardware, software, and support are built for the conditions organizers meet on site.',
  },
] as const;

export const dataFlow = [
  { tab: 'Final', text: 'The verified standings: position, loop, rider and horse, status, arrival, and average speed.' },
  { tab: 'Summary', text: 'The race at a glance: eliminated, finished, ready to go, and on loop.' },
  { tab: 'Results', text: 'Gate-by-gate detail: recovery time, heart rate, speed, and average speed.' },
  { tab: 'Entries', text: 'Every combination in the race, with rider, horse, trainer, and owner.' },
] as const;
