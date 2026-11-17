"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { HOME, IMG, HEADING_FONT } from "@/data/data";
import { ChevronLeftIcon, ChevronRightIcon } from "@/lib/icons";

const { items } = HOME.testimonials;
const COUNT = items.length;
const EASE = [0.22, 1, 0.36, 1] as const;

const QuoteMark = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 42 32" className={className} aria-hidden="true">
    <path
      fill="currentColor"
      d="M0 32V18.5C0 7.8 5.6 1.4 16.5 0l1.4 5.2C11.4 6.6 9 9.8 8.8 14.5H16.5V32H0zm24 0V18.5C24 7.8 29.6 1.4 40.5 0l1.4 5.2c-6.5 1.4-8.9 4.6-9.1 9.3H40.5V32H24z"
    />
  </svg>
);

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 70 : -70,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -70 : 70,
    opacity: 0,
  }),
};

export function TestimonialSlider() {
  // Default to index 1 (Dr. Rohan Mehta) so the middle pagination dot is active on load, matching the design.
  const [index, setIndex] = useState(1);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);

  const select = useCallback(
    (next: number, explicitDir?: 1 | -1) => {
      const target = (next + COUNT) % COUNT;
      if (target === index) return;
      setDirection(explicitDir ?? (target > index ? 1 : -1));
      setIndex(target);
    },
    [index],
  );

  const go = useCallback(
    (delta: 1 | -1) => {
      setDirection(delta);
      setIndex((curr) => (curr + delta + COUNT) % COUNT);
    },
    [],
  );

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => go(1), 5500);
    return () => clearInterval(timer);
  }, [paused, go]);

  const item = items[index];

  return (
    <div
      className="relative mx-auto w-full lg:px-[calc(28*var(--u))]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative flex w-full items-center justify-between lg:px-[calc(23*var(--u))]">
        {/* Left faded skeleton preview card (desktop) */}
        <div
          onClick={() => go(-1)}
          aria-hidden="true"
          className="hidden cursor-pointer select-none flex-col justify-center rounded-r-[14px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(249,238,241,0.75)_32%,#f7eaee_100%)] transition-opacity hover:opacity-85 lg:flex lg:h-[calc(282*var(--u))] lg:flex-1 lg:pl-[calc(44*var(--u))] lg:pr-[calc(20*var(--u))]"
        >
          <QuoteMark className="lg:h-[calc(23*var(--u))] lg:w-[calc(30*var(--u))] text-[#cf9ca9]" />
          <div className="lg:mt-[calc(18*var(--u))] lg:space-y-[calc(10*var(--u))]">
            <div className="lg:h-[calc(11*var(--u))] lg:w-[calc(132*var(--u))] rounded-full bg-[linear-gradient(90deg,rgba(218,215,220,0.25)_0%,#dad7dc_45%,#dad7dc_100%)]" />
            <div className="lg:h-[calc(11*var(--u))] lg:w-[calc(122*var(--u))] rounded-full bg-[linear-gradient(90deg,rgba(218,215,220,0.25)_0%,#dad7dc_45%,#dad7dc_100%)]" />
            <div className="lg:h-[calc(11*var(--u))] lg:w-[calc(104*var(--u))] rounded-full bg-[linear-gradient(90deg,rgba(218,215,220,0.25)_0%,#dad7dc_45%,#dad7dc_100%)]" />
            <div className="lg:h-[calc(11*var(--u))] lg:w-[calc(58*var(--u))] rounded-full bg-[linear-gradient(90deg,rgba(218,215,220,0.25)_0%,#dad7dc_45%,#dad7dc_100%)]" />
          </div>
          <span className="block rounded bg-[linear-gradient(90deg,rgba(196,139,155,0.25)_0%,#c48b9b_100%)] lg:mt-[calc(44*var(--u))] lg:h-[calc(2.5*var(--u))] lg:w-[calc(64*var(--u))]" />
        </div>

        {/* Center active testimonial card with smooth slide + crossfade */}
        <div className="relative mx-4 grid w-full max-w-[769px] shrink-0 overflow-hidden rounded-[18px] bg-[#f7ecf0] lg:mx-[calc(24*var(--u))] lg:h-[calc(335*var(--u))] lg:w-[calc(769*var(--u))] lg:max-w-none lg:rounded-[calc(18*var(--u))]">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.figure
              key={item.name}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: EASE }}
              className="col-start-1 row-start-1 flex h-full w-full flex-col sm:flex-row"
            >
              <div className="relative z-10 flex flex-1 flex-col justify-center px-6 py-7 sm:py-6 sm:pl-9 sm:pr-2 lg:pl-[calc(46*var(--u))] lg:pr-0">
                <QuoteMark className="h-[28px] w-[36px] text-[#86213f] lg:h-[calc(31*var(--u))] lg:w-[calc(40*var(--u))]" />
                <blockquote className="mt-3 max-w-[412px] text-[17px] font-normal italic leading-[1.45] text-[#1e1e26] lg:mt-[calc(14*var(--u))] lg:max-w-[calc(412*var(--u))] lg:text-[length:calc(20.5*var(--u))] lg:leading-[calc(30*var(--u))]">
                  {item.quote}
                </blockquote>
                <span className="mt-5 block h-[2.5px] w-[62px] rounded bg-[#86213f] lg:mt-[calc(20*var(--u))] lg:h-[calc(2.5*var(--u))] lg:w-[calc(62*var(--u))]" />
                <figcaption className="mt-4 lg:mt-[calc(16*var(--u))]">
                  <p style={{ fontFamily: HEADING_FONT }} className="text-[20px] font-bold leading-tight text-[#16161b] lg:text-[length:calc(23*var(--u))]">
                    {item.name}
                  </p>
                  <p className="mt-1 text-[15px] font-normal text-[#4a4a55] lg:mt-[calc(3*var(--u))] lg:text-[length:calc(18*var(--u))]">
                    {item.role}
                  </p>
                </figcaption>
              </div>

              <div className="relative h-[280px] w-full shrink-0 sm:h-auto sm:w-[290px] lg:h-full lg:w-[calc(380*var(--u))]">
                <Image
                  src={IMG[item.image]}
                  alt={item.name}
                  width={760}
                  height={670}
                  priority
                  unoptimized
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* Right faded skeleton preview card (desktop) */}
        <div
          onClick={() => go(1)}
          aria-hidden="true"
          className="hidden cursor-pointer select-none flex-col justify-center rounded-l-[14px] bg-[linear-gradient(270deg,rgba(255,255,255,0)_0%,rgba(249,238,241,0.75)_32%,#f7eaee_100%)] transition-opacity hover:opacity-85 lg:flex lg:h-[calc(282*var(--u))] lg:flex-1 lg:pl-[calc(30*var(--u))] lg:pr-[calc(20*var(--u))]"
        >
          <QuoteMark className="lg:h-[calc(23*var(--u))] lg:w-[calc(30*var(--u))] text-[#bc8595]" />
          <div className="lg:mt-[calc(18*var(--u))] lg:space-y-[calc(10*var(--u))]">
            <div className="lg:h-[calc(11*var(--u))] lg:w-[calc(154*var(--u))] rounded-full bg-[linear-gradient(90deg,#dad7dc_0%,#dad7dc_55%,rgba(218,215,220,0.2)_100%)]" />
            <div className="lg:h-[calc(11*var(--u))] lg:w-[calc(158*var(--u))] rounded-full bg-[linear-gradient(90deg,#dad7dc_0%,#dad7dc_55%,rgba(218,215,220,0.2)_100%)]" />
            <div className="lg:h-[calc(11*var(--u))] lg:w-[calc(138*var(--u))] rounded-full bg-[linear-gradient(90deg,#dad7dc_0%,#dad7dc_55%,rgba(218,215,220,0.2)_100%)]" />
            <div className="lg:h-[calc(11*var(--u))] lg:w-[calc(82*var(--u))] rounded-full bg-[linear-gradient(90deg,#dad7dc_0%,#dad7dc_55%,rgba(218,215,220,0.2)_100%)]" />
          </div>
          <span className="block rounded bg-[linear-gradient(90deg,#bc8595_0%,rgba(188,133,149,0.35)_100%)] lg:mt-[calc(44*var(--u))] lg:h-[calc(2.5*var(--u))] lg:w-[calc(84*var(--u))]" />
        </div>
      </div>

      {/* Left & Right Navigation Arrows aligned with Header edges (28*var(--u)) */}
      <button
        type="button"
        aria-label="Previous testimonial"
        onClick={() => go(-1)}
        className="absolute left-1 top-[calc(50%-20px)] z-20 grid size-[40px] -translate-y-1/2 place-items-center rounded-full border border-[#bd8192] bg-white text-[#86213f] transition hover:bg-[#86213f] hover:text-white sm:left-3 lg:left-[calc(28*var(--u))] lg:top-[calc(167.5*var(--u))] lg:size-[calc(46*var(--u))]"
      >
        <ChevronLeftIcon size={20} strokeWidth={2.3} className="lg:size-[calc(20*var(--u))]" />
      </button>
      <button
        type="button"
        aria-label="Next testimonial"
        onClick={() => go(1)}
        className="absolute right-1 top-[calc(50%-20px)] z-20 grid size-[40px] -translate-y-1/2 place-items-center rounded-full border border-[#bd8192] bg-white text-[#86213f] transition hover:bg-[#86213f] hover:text-white sm:right-3 lg:right-[calc(28*var(--u))] lg:top-[calc(167.5*var(--u))] lg:size-[calc(46*var(--u))]"
      >
        <ChevronRightIcon size={20} strokeWidth={2.3} className="lg:size-[calc(20*var(--u))]" />
      </button>

      {/* Pagination Dots */}
      <div className="mt-6 flex justify-center gap-3 lg:mt-[calc(26*var(--u))] lg:gap-[calc(12*var(--u))]" role="tablist" aria-label="Testimonials">
        {items.map((entry, i) => (
          <button
            key={entry.name}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show testimonial by ${entry.name}`}
            onClick={() => select(i)}
            className={`size-[15px] rounded-full transition-all duration-300 lg:size-[calc(16*var(--u))] ${i === index ? "scale-110 bg-[#86213f]" : "bg-[#e3cfd5] hover:bg-[#cfaab5]"}`}
          />
        ))}
      </div>
    </div>
  );
}
