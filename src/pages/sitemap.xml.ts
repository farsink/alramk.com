import type { APIRoute } from 'astro';

const routes = ['/', '/features/', '/how-it-works/', '/about/', '/contact/'];

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://alramk.com');
  const urls = routes.map((route) => `<url><loc>${new URL(route, base).href}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
