import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/Motion";
import { Navbar } from "@/components/Navbar";
import { BODY_FONT, FONT_PRECONNECT, FONT_PRECONNECT_STATIC, GOOGLE_FONTS_HREF, HOME, SITE, fonts } from "@/data/data";
export const metadata: Metadata = {
  title: HOME.metadata.title,
  description: HOME.metadata.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning style={{ "--u": "calc(100vw / 1349)" } as React.CSSProperties} className="h-full scroll-smooth scroll-pt-[76px] antialiased">
      <head>
        {/* Preconnect & font links — all URLs come from data.json */}
        <link rel="preconnect" href={FONT_PRECONNECT} />
        <link rel="preconnect" href={FONT_PRECONNECT_STATIC} crossOrigin="anonymous" />
        <link rel="stylesheet" href={GOOGLE_FONTS_HREF} />
        <link rel="stylesheet" href={fonts.heading.cdnUrl} />
      </head>
      <body style={{ fontFamily: BODY_FONT }} className="flex min-h-full flex-col overflow-x-hidden bg-white text-[15px] leading-[1.7] text-[#23232b] font-medium [text-rendering:optimizeLegibility] selection:bg-[#86213f] selection:text-white [&_:focus-visible]:rounded-md [&_:focus-visible]:outline-2 [&_:focus-visible]:outline-offset-2 [&_:focus-visible]:outline-[#86213f]">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
