import fs from "node:fs";

const j = JSON.parse(fs.readFileSync(process.argv[2] ?? "wp-page-377.json", "utf8"));
const html = j.content.rendered;
const srcImgs = [...html.matchAll(/src="([^"]+)"/g)].map((m) => m[1].replace(/\\/g, ""));
const bg = [...html.matchAll(/url\(["']?([^"')\s]+)["']?\)/gi)].map((m) => m[1]);

const all = [...new Set([...srcImgs, ...bg])].filter((u) => /uploads|nitrocdn|wp-content/i.test(u));
all.sort().forEach((u) => console.log(u));
