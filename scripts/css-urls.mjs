import fs from "node:fs";

const s = fs.readFileSync(process.argv[2] ?? "nitro-combined.css", "utf8");
const urls = [...s.matchAll(/url\(([^)]+)\)/g)]
  .map((m) => m[1].replace(/^["']|["']$/g, ""))
  .filter((x) => /\.(jpg|jpeg|png|webp)(\?|$)/i.test(x));
[...new Set(urls)].sort().forEach((u) => console.log(u));
