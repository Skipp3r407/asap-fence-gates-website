import fs from "node:fs";

const s = fs.readFileSync(process.argv[2] ?? "post-377.css", "utf8");
for (const id of ["87cce20", "09c1c63", "c365107", "e6f3741"]) {
  const i = s.indexOf(`elementor-element-${id}`);
  console.log("\n---", id, "---\n");
  console.log(i >= 0 ? s.slice(i, i + 900) : "not found");
}
