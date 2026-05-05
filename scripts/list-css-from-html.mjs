import fs from "node:fs";

const h = fs.readFileSync(process.argv[2] ?? "home-page.html", "utf8");
const css = [...h.matchAll(/https:\/\/[^"'>\s]+\.css/gi)].map((m) => m[0]);
[...new Set(css)].slice(0, 80).forEach((c) => console.log(c));
