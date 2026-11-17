# Pharonix

Single-page, fully responsive site for Pharonix Pharmaceuticals & Healthcare (Next.js + Tailwind CSS 4 + Framer Motion).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

- All copy and image paths live in `data/data.json` (read through `data/data.ts`).
- Sections: Hero, About, Expertise, Products, R&D, Testimonials, FAQs, Contact.
- Photos are WebP files in `public/images`, cropped from the design mockup in `scripts/design/home.jpg`.
  Re-run `node scripts/crop-images.js` to regenerate them (needs `sharp`, already a devDependency).
- Desktop (>= 1280px) uses the pixel values measured from the design; below that the layout is fluid.
- Fonts: Product Sans (headings, via cdnfonts) and DM Sans (body, Google Fonts).
