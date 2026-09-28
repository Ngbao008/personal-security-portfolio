import { getCollection } from "astro:content";
import { site } from "../data/site";
import { withBase } from "../utils/paths";

function escapeXml(value: string): string {
  return value.replace(/[<>&'\"]/g, (character) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", "\"": "&quot;" })[character] ?? character);
}

export async function GET() {
  const posts = (await getCollection("blog"))
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const items = posts.map((post) => {
    const url = new URL(withBase(`/blog/${post.id}/`), site.url).toString();
    return `<item><title>${escapeXml(post.data.title)}</title><link>${escapeXml(url)}</link><guid>${escapeXml(url)}</guid><description>${escapeXml(post.data.description)}</description><pubDate>${post.data.date.toUTCString()}</pubDate></item>`;
  }).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8" ?><rss version="2.0"><channel><title>${escapeXml(site.name)}</title><link>${escapeXml(site.url)}</link><description>${escapeXml(site.tagline)}</description><lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${items}</channel></rss>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}

