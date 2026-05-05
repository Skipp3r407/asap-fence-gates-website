import fs from "node:fs";

const html = fs.readFileSync(process.argv[2] ?? "home-page.html", "utf8");
const re = /\/wp-content\/uploads\/[^"'\\\s>)]+/gi;
const found = new Set(
  [...html.matchAll(re)].map((m) => {
    let u = m[0];
    if (!u.startsWith("http")) u = `https://asapfenceandgate.com${u}`;
    return u.split("?")[0];
  })
);
[...found].sort().forEach((u) => console.log(u));
