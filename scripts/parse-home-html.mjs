import fs from "node:fs";

const path = process.argv[2] ?? "home-page.html";
const html = fs.readFileSync(path, "utf8");

const urls = new Set(
  [...html.matchAll(/https?:\/\/[^\s"'<>]+/g)].map((m) =>
    m[0].replace(/&amp;/g, "&").replace(/\\\//g, "/").replace(/["')]$/, "")
  )
);

const media = [...urls].filter((x) =>
  /wistia|youtube|youtu\.be|wp-content\/uploads|nitrocdn\.com.*\.(jpg|jpeg|png|webp)(\?|$)/i.test(x)
);

const wistiaIds = [...html.matchAll(/wistia\.com\/embed\/iframe\/([a-z0-9]+)/gi)].map((m) => m[1]);
const wistiaMedias = [...html.matchAll(/fast\.wistia\.com\/embed\/medias\/([a-z0-9]+)/gi)].map((m) => m[1]);

const expertMatch = html.match(/Expert Fence[\s\S]{0,2000}?Sarasota and Manatee Counties[\s\S]{0,500}?<\/p>/i);
const excerpt = expertMatch ? expertMatch[0].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 800) : null;

console.log(
  JSON.stringify(
    {
      expertParagraphExcerpt: excerpt,
      wistiaEmbedIds: [...new Set(wistiaIds)],
      wistiaMediaIds: [...new Set(wistiaMedias)],
      youtubeIds: [...new Set([...html.matchAll(/youtube\.com\/(?:embed\/|watch\?v=)([a-zA-Z0-9_-]{11})/g)].map((m) => m[1]))],
      mediaUrlSample: media.slice(0, 60),
      mediaUrlCount: media.length
    },
    null,
    2
  )
);
