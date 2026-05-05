const html = await fetch("https://asapfenceandgate.com/", {
  headers: { "user-agent": "Mozilla/5.0" }
}).then((r) => r.text());

const iframes = [...html.matchAll(/<iframe[^>]+src=["']([^"']+)["']/gi)].map((m) => m[1]);
const videos = [...html.matchAll(/<video[^>]+src=["']([^"']+)["']/gi)].map((m) => m[1]);
const sources = [...html.matchAll(/<source[^>]+src=["']([^"']+)["']/gi)].map((m) => m[1]);
const dataVideos = [...html.matchAll(/data-video-url=["']([^"']+)["']/gi)].map((m) => m[1]);
const dataSrc = [...html.matchAll(/data-src=["']([^"']+)["']/gi)].map((m) => m[1]);
const bgUrls = [...html.matchAll(/url\(["']?([^"')]+)["']?\)/gi)].map((m) => m[1]);
const imgs = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)].map((m) => m[1]);
const youtube = [...html.matchAll(/youtube\.com\/(?:embed\/|watch\?v=)([a-zA-Z0-9_-]{11})/g)].map((m) => m[1]);
const wpUpload = imgs.filter((u) => /upload|cdn|video|fence|gate/i.test(u));

console.log(
  JSON.stringify(
    {
      iframeCount: iframes.length,
      iframes: iframes.slice(0, 20),
      videos,
      sources: sources.slice(0, 15),
      dataVideos,
      dataSrcUnique: [...new Set(dataSrc)].slice(0, 30),
      bgUrlsSample: [...new Set(bgUrls)].slice(0, 15),
      youtubeIds: [...new Set(youtube)],
      imgCount: imgs.length,
      imgsFenceRelated: wpUpload.slice(0, 25),
      imgsSample: imgs.slice(0, 40)
    },
    null,
    2
  )
);
