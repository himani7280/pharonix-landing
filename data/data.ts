import raw from "./data.json";

/**
 * All site content lives in data/data.json (Pharonix -> fonts, sections -> variants).
 * Edit that file to change the site; this is the only ts file that reads it.
 */
const pharonix = raw.Pharonix;
const s = pharonix.sections;

export const fonts = pharonix.fonts;
export const layout = pharonix.layout;

/** Font link/preconnect URLs — all defined in data.json, consumed by layout.tsx */
export const FONT_PRECONNECT        = fonts.preconnectHref;
export const FONT_PRECONNECT_STATIC = fonts.preconnectStaticHref;
export const GOOGLE_FONTS_HREF      = fonts.googleFontsHref;

const header = s.SiteChrome.variants.PharonixHeader1;
const footer = s.SiteChrome.variants.PharonixFooter1;

export const SITE      = header.site;
export const NAVBAR    = header.navbar;
export const BRAND     = header.brand;
export const NAV_LINKS = header.navLinks;
export const NAV_CTA   = header.cta;
export const FOOTER    = footer;
export const IMG: Record<string, string> = s.Media.variants.PharonixImages1.images;
export const HOME = s.Home.variants.PharonixHome1;

/** CSS font-family values built straight from the fonts block in data.json. */
export const BODY_FONT    = `"${fonts.body.family}", ${fonts.body.fallback}`;
export const HEADING_FONT = `"${fonts.heading.family}", ${fonts.heading.fallback}`;
