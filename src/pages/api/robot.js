export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/plain');

  const robotsTxt = `
    User-agent: *
    Allow: /

    Sitemap: https://eternal-intern-blogs.vercel.app/sitemap.xml
  `;

  res.write(robotsTxt);
  res.end();
}
