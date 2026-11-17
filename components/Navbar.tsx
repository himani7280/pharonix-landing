"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BRAND, NAV_CTA, NAV_LINKS } from "@/data/data";
import { ArrowRightIcon, CloseIcon, MenuIcon } from "@/lib/icons";
import { AnimBtn } from "./Motion";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(`#${entry.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV_LINKS.forEach((link) => {
      const el = document.getElementById(link.href.slice(1));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when drawer is open; close on Escape
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 bg-white transition-shadow duration-300 ${scrolled ? "shadow-[0_8px_30px_-12px_rgba(60,10,30,0.25)]" : "shadow-[0_6px_24px_-14px_rgba(60,10,30,0.18)]"}`}
      >
<<<<<<< HEAD
        <div className="mx-auto flex h-[58px] max-w-[1349px] items-center justify-between px-3 sm:px-4 sm:h-[62px] lg:h-[calc(96*var(--u))] lg:gap-[calc(20*var(--u))] lg:px-[calc(28*var(--u))]">
=======
        <div className="mx-auto flex h-[58px] max-w-[1349px] items-center justify-between px-3 sm:px-4 sm:h-[62px] lg:h-[calc(96*var(--u))] lg:max-w-none lg:gap-[calc(20*var(--u))] lg:px-[calc(28*var(--u))]">
>>>>>>> e3913ea1a12cc633f691f7e7c96415d662cc2acc
          <div className="flex items-center">
            <a href="#home" aria-label="Pharonix home" onClick={() => setOpen(false)} className="shrink-0">
              <Logo priority className="w-[130px] sm:w-[150px] lg:w-[calc(198*var(--u))]" />
            </a>
            <span className="hidden w-px bg-[#c9b3ba] lg:mx-[calc(24*var(--u))] lg:block lg:h-[calc(46*var(--u))]" aria-hidden="true" />
          </div>

          <nav className="hidden items-center lg:flex lg:gap-[calc(28*var(--u))]" aria-label="Main">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href;
              return (
                <a key={link.href} href={link.href} className={`relative whitespace-nowrap py-2 text-[15px] font-medium lg:text-[length:calc(16.5*var(--u))] transition-colors ${isActive ? "text-[#86213f]" : "text-[#23232b] hover:text-[#86213f]"}`}>
                  {link.label}
                  <span className={`absolute inset-x-0 -bottom-[7px] h-[3px] origin-left rounded bg-[#86213f] transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0"}`} />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <AnimBtn href={NAV_CTA.href} className="hidden h-[38px] items-center gap-2.5 rounded-[7px] bg-[#86213f] px-5 text-[15px] font-medium text-white lg:h-[calc(42*var(--u))] lg:px-[calc(24*var(--u))] lg:text-[length:calc(17*var(--u))] shadow-[0_8px_18px_-8px_rgba(134,33,63,0.7)] transition hover:bg-[#6c1a32] sm:inline-flex">
              {NAV_CTA.label}
              <ArrowRightIcon size={16} />
            </AnimBtn>
            <AnimBtn
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid size-9 place-items-center rounded-md border border-[#86213f]/25 text-[#86213f] transition-colors hover:bg-[#86213f] hover:text-white lg:hidden"
            >
              <MenuIcon size={20} />
            </AnimBtn>
          </div>
        </div>
      </header>

      {/* Mobile side drawer */}
      <AnimatePresence>
        {open && (
          <div className="lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs"
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-50 flex h-full w-[84vw] max-w-[340px] flex-col justify-between bg-white shadow-[-10px_0_35px_rgba(0,0,0,0.25)]"
              aria-label="Mobile Navigation"
            >
              {/* Drawer header */}
              <div className="flex h-[58px] items-center justify-between border-b border-[#f0e4e7] px-5">
                <Logo className="w-[130px]" />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="grid size-9 place-items-center rounded-lg border border-[#86213f]/20 bg-[#fbf3f5] text-[#86213f] transition-all hover:bg-[#86213f] hover:text-white"
                >
                  <CloseIcon size={18} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-4 py-4" aria-label="Mobile Links">
                <ul className="space-y-1.5">
                  {NAV_LINKS.map((link) => {
                    const isActive = active === link.href;
                    return (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className={`flex items-center justify-between rounded-xl px-4 py-3 text-[15.5px] font-medium transition-all ${
                            isActive
                              ? "bg-[#f5e6ea] font-semibold text-[#86213f]"
                              : "text-[#23232b] hover:bg-[#fbf3f5] hover:text-[#86213f]"
                          }`}
                        >
                          <span>{link.label}</span>
                          <span
                            className={`size-2 rounded-full transition-transform ${
                              isActive ? "scale-100 bg-[#86213f]" : "scale-0 bg-transparent"
                            }`}
                          />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Drawer footer — CTA + contact */}
              <div className="border-t border-[#f0e4e7] p-5">
                <AnimBtn
                  href={NAV_CTA.href}
                  className="flex h-11 w-full items-center justify-center gap-2.5 rounded-xl bg-[#86213f] text-[16px] font-semibold text-white shadow-[0_8px_20px_-6px_rgba(134,33,63,0.5)] transition hover:bg-[#6c1a32]"
                >
                  <span>{NAV_CTA.label}</span>
                  <ArrowRightIcon size={18} />
                </AnimBtn>

                <div className="mt-4 flex flex-col gap-1.5 text-[13px] text-[#55555e]">
                  <a href={`tel:${BRAND.phone.replace(/[^+\d]/g, "")}`} className="transition hover:text-[#86213f]">
                    📞 {BRAND.phone}
                  </a>
                  <a href={`mailto:${BRAND.email}`} className="break-all transition hover:text-[#86213f]">
                    ✉️ {BRAND.email}
                  </a>
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
