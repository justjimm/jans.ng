// Search engines and AI search crawlers are all welcome: the firm wants to be found and cited.
export function GET() {
  const body = ['User-agent: *', 'Allow: /', '', 'Sitemap: https://jans.ng/sitemap-index.xml', ''].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
