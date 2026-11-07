const fs = require("fs");
const path = require("path");

const out = path.join(__dirname, "..", "public", "images", "placeholders");
fs.mkdirSync(out, { recursive: true });

// [file, width, height, bada text, chhota text]
const items = [
 ["about", 1200, 900, "YOUR CLINIC PHOTO "],
  ["clinic-1", 1200, 900, "Reception or clinic view"],
  ["clinic-2", 1200, 900, "Treatment room"],
  ["clinic-3", 1200, 900, "Dental chair"],
  ["clinic-4", 1200, 900, "other photos"],
  ["doctor", 800, 1000, "DOCTOR PHOTO HERE", "Your photo will appear here"],
 
];

for (const [name, w, h, big, small] of items) {
  const fs1 = Math.round(w * 0.045);
  const fs2 = Math.round(w * 0.025);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0f766e"/>
      <stop offset="1" stop-color="#0f172a"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <rect x="${w * 0.06}" y="${h * 0.08}" width="${w * 0.88}" height="${h * 0.84}" rx="24" fill="none" stroke="#5eead4" stroke-width="4" stroke-dasharray="18 14"/>
  <text x="50%" y="48%" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="${fs1}" fill="#ffffff">${big}</text>
  <text x="50%" y="58%" text-anchor="middle" font-family="Arial, sans-serif" font-size="${fs2}" fill="#99f6e4">${small}</text>
</svg>`;
  fs.writeFileSync(path.join(out, `${name}.svg`), svg);
}
console.log("Placeholders ban gaye:", out);