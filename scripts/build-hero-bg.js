// Builds a text-free hero background (public/images/hero-bg.webp) from the design mockup:
// the headline, paragraph and buttons are repainted with a smooth pink-to-photo blend taken from clean neighbouring pixels.
const path = require("path");
const sharp = require("sharp");

const SOURCE = path.join(__dirname, "design", "home.jpg");
const OUT = path.join(__dirname, "..", "public", "images", "hero-bg.webp");
const W = 1349;
const TOP = 116;
const H = 672;

(async () => {
  const { data } = await sharp(SOURCE).extract({ left: 0, top: TOP, width: W, height: H }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const px = (x, y, c) => data[(y * W + x) * 3 + c];
  const out = Buffer.from(data);
  const set = (x, y, c, v) => (out[(y * W + x) * 3 + c] = Math.max(0, Math.min(255, Math.round(v))));
  const mix = (a, b, t) => a + (b - a) * t;
  const smooth = (t) => t * t * (3 - 2 * t);
  const avg = (x0, x1, y, c) => {
    let s = 0;
    let n = 0;
    for (let yy = y - 6; yy <= y + 6; yy++) for (let x = x0; x <= x1; x++) { s += px(x, Math.max(0, Math.min(H - 1, yy)), c); n++; }
    return s / n;
  };

  const X0 = 40;
  const X1 = 745;
  const Y0 = 100;
  const Y1 = 500;
  for (let y = Y0; y <= Y1; y++) {
    const fade = Math.min(1, Math.min(y - Y0, Y1 - y) / 16);
    for (let c = 0; c < 3; c++) {
      const left = avg(4, 24, y, c);
      const right = avg(750, 770, y, c);
      for (let x = X0; x <= X1; x++) {
        const t = smooth((x - X0) / (X1 - X0));
        const edge = Math.min(1, Math.min(x - X0, X1 - x) / 16) * fade;
        set(x, y, c, mix(px(x, y, c), mix(left, right, t), edge));
      }
    }
  }

  const blurred = await sharp(out, { raw: { width: W, height: H, channels: 3 } }).blur(8).raw().toBuffer();
  const mask = Buffer.alloc(W * H);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) mask[y * W + x] = y >= Y0 && y <= Y1 && x >= X0 && x <= X1 ? 255 : 0;
  const soft = await sharp(mask, { raw: { width: W, height: H, channels: 1 } }).blur(12).raw().toBuffer();
  const softChannels = soft.length / (W * H);
  const final = Buffer.alloc(W * H * 3);
  for (let i = 0; i < W * H; i++) {
    const k = soft[i * softChannels] / 255;
    for (let c = 0; c < 3; c++) final[i * 3 + c] = Math.round(mix(out[i * 3 + c], blurred[i * 3 + c], k));
  }
  await sharp(final, { raw: { width: W, height: H, channels: 3 } }).webp({ quality: 93, effort: 6 }).toFile(OUT);
  console.log("saved hero-bg.webp", `${W}x${H}`);
})();
