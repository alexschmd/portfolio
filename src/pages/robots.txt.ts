import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapUrl: URL) =>
  `User-agent: *\nAllow: /\nSitemap: ${sitemapUrl.href}\n`;

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    return new Response("User-agent: *\nAllow: /\n", {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }

  const sitemapUrl = new URL("/sitemap-index.xml", site);

  return new Response(getRobotsTxt(sitemapUrl), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
