import { client } from '../lib/contentful/client'

const SITE_URL = 'https://eternal-intern-blogs.vercel.app';


function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${SITE_URL}</loc>
    </url>
    <url>
      <loc>${SITE_URL}/about-me</loc>
    </url>
    
    ${posts
      .map((post) => {
        return `
      <url>
        <loc>${SITE_URL}/posts/${post.fields.slug}</loc>
      </url>
    `;
      })
      .join('')}
  </urlset>`;
}

export async function getServerSideProps({ res }) {

  const response = await client.getEntries({
    content_type: 'post',
  })

  const sitemap = generateSiteMap(response?.items);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {
  return null;
}
