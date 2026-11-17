// Crops every photo used on the page out of the design mockup (scripts/design/home.jpg)
// and saves it as WebP into public/images. Run: node scripts/crop-images.js
const path = require("path");
const sharp = require("sharp");

const SOURCE = path.join(__dirname, "design", "home.jpg");
const OUT = path.join(__dirname, "..", "public", "images");

// name: [left, top, width, height] in design pixels (design is 1349px wide)
const CROPS = {
  "about-art": [0, 950, 520, 600],
  logo: [50, 6000, 435, 138],
  "expertise-manufacturing": [35, 1805, 304, 172],
  "expertise-rnd": [361, 1805, 303, 172],
  "expertise-quality": [685, 1805, 304, 172],
  "expertise-healthcare": [1010, 1805, 304, 172],
  tablets: [28, 2521, 309, 157],
  syrups: [356, 2521, 308, 157],
  capsules: [684, 2521, 308, 157],
  ointments: [1012, 2521, 309, 157],
  injectables: [28, 2759, 309, 156],
  drops: [356, 2759, 308, 156],
  inhalers: [684, 2759, 308, 156],
  powders: [1012, 2759, 309, 156],
  research: [724, 3213, 593, 420],
  doctor: [800, 3972, 255, 335],
};

(async () => {
  for (const [name, [left, top, width, height]] of Object.entries(CROPS)) {
    await sharp(SOURCE).extract({ left, top, width, height }).webp({ quality: 92, effort: 6 }).toFile(path.join(OUT, `${name}.webp`));
    console.log("saved", `${name}.webp`, `${width}x${height}`);
  }
})();
