const pages = ['', 'brand'];
const langs = ['', '/ko', '/ja', '/zh'];
export function GET() {
  const urls = langs.flatMap((l) => pages.map((p) => `https://www.mindmapmarkdown.org${l}/${p ? p + '/' : ''}`));
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
