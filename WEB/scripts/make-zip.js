import path from "node:path";
import fs from "node:fs";
const { default: AdmZip } = await import("adm-zip");

const root = process.cwd();
// ащита от BOM:
const pkgText = fs.readFileSync(path.join(root, "package.json"), "utf8").replace(/^\uFEFF/, "");
const pkg = JSON.parse(pkgText);

const outDir = path.join(root, "releases");
fs.mkdirSync(outDir, { recursive: true });

const zipName = `PROMPT_ROOM-${pkg.version}.zip`;
const zipPath = path.join(outDir, zipName);
const zip = new AdmZip();

const include = [
  "RULES","PROMPTS","TOOLS","WEB","docs",
  "package.json","tsconfig.json","README.md","README_EN.md","DONATE.md"
];

for (const it of include) {
  const full = path.join(root, it);
  if (!fs.existsSync(full)) continue;
  if (fs.statSync(full).isDirectory()) zip.addLocalFolder(full, it);
  else zip.addLocalFile(full);
}

zip.writeZip(zipPath);
console.log(`ZIP created → ${zipPath}`);
