import Image from "next/image";
import type { CSSProperties } from "react";
import { HOME, IMG, HEADING_FONT } from "@/data/data";
import { ArrowRightIcon } from "@/lib/icons";
import { AnimBtn } from "./Motion";

const { hero } = HOME;

// 1 design unit = 1px on 1349px wide viewport
<<<<<<< HEAD
const unit = { "--u": "calc(min(100vw, 1349px) / 1349)" } as CSSProperties;
=======
const unit = { "--u": "calc(100vw / 1349)" } as CSSProperties;
>>>>>>> e3913ea1a12cc633f691f7e7c96415d662cc2acc

export function HomeHero() {
  return (
    <section id="home" style={unit} className="relative isolate overflow-hidden bg-[#fcf3f6] min-h-[340px] sm:min-h-[400px] md:min-h-[480px] lg:h-[calc(720*var(--u))] lg:min-h-0">
      {/* Background image — starts below fixed navbar so girl's head isn't hidden */}
      <div className="absolute inset-x-0 bottom-0 top-[58px] sm:top-[62px] lg:top-[calc(96*var(--u))] -z-10">
        <Image src={IMG.heroBg} alt="Scientist examining samples under a microscope" fill priority unoptimized sizes="100vw" className="object-cover object-[78%_0%] lg:object-cover lg:object-[75%_0%]" />
      </div>
      {/* White fade overlay — mobile only */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.6)_100%)] lg:hidden" />

<<<<<<< HEAD
      {/* Hero content container */}
      <div className="relative mx-auto h-full w-full max-w-[1349px]">
        {/* Hero content — pt offsets fixed navbar, px matches navbar */}
        <div className="relative z-10 px-3 pt-[100px] pb-7 sm:px-4 sm:pt-[120px] sm:pb-10 md:pb-12 lg:absolute lg:inset-x-auto lg:left-[calc(28*var(--u))] lg:top-[calc(200*var(--u))] lg:p-0">
          <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#23232b] sm:gap-x-3.5 sm:text-[12px] sm:tracking-[0.16em] md:text-[13px] md:tracking-[0.2em] lg:flex-nowrap lg:gap-[calc(18*var(--u))] lg:text-[length:calc(18.5*var(--u))] lg:tracking-[0.26em] xl:text-[18.5px]">
            <span aria-hidden="true" className="h-[2.5px] w-6 shrink-0 rounded bg-[#86213f] sm:h-[3px] sm:w-10 lg:h-[calc(3.5*var(--u))] lg:w-[calc(50*var(--u))] xl:w-[48px]" />
            <span>{hero.eyebrow}</span>
          </p>

          <h1 style={{ fontFamily: HEADING_FONT }} className="mt-3 max-w-[640px] text-[clamp(1.6rem,6vw,3rem)] font-bold leading-[1.18] tracking-tight text-[#23232b] sm:leading-[1.15] md:leading-[1.1] lg:mt-[calc(36*var(--u))] lg:max-w-none lg:whitespace-nowrap lg:text-[length:calc(78*var(--u))] lg:leading-[calc(74*var(--u))]">
            <span className="block">{hero.titleLine1}</span>
            <span className="block text-[#86213f] lg:mt-[calc(4*var(--u))] lg:text-[length:calc(66*var(--u))] lg:leading-[calc(70*var(--u))]">
              {hero.titleLine2}
            </span>
          </h1>

          <p className="mt-4 max-w-[590px] text-base font-normal leading-[1.55] text-[#23232b] sm:text-lg lg:mt-[calc(18*var(--u))] lg:max-w-[calc(590*var(--u))] lg:text-[length:calc(22*var(--u))] lg:leading-[calc(32*var(--u))]">
            {hero.text}
          </p>

          <div className="mt-6 flex flex-wrap gap-3 lg:mt-[calc(28*var(--u))] lg:gap-[calc(23*var(--u))]">
            <AnimBtn href={hero.primaryCta.href} className="inline-flex h-[46px] items-center gap-3 rounded-[7px] bg-[#86213f] px-[24px] text-[15px] font-medium text-white shadow-[0_10px_22px_-10px_rgba(134,33,63,0.7)] transition hover:bg-[#6c1a32] sm:h-[50px] sm:px-[28px] sm:text-[17px] lg:h-[calc(52*var(--u))] lg:gap-[calc(12*var(--u))] lg:px-[calc(31*var(--u))] lg:text-[length:calc(20.5*var(--u))]">
              <span>{hero.primaryCta.label}</span>
              <ArrowRightIcon size={18} className="lg:size-[calc(20*var(--u))]" />
            </AnimBtn>
            <AnimBtn href={hero.secondaryCta.href} className="inline-flex h-[46px] items-center rounded-[7px] border border-[#86213f] bg-white px-[28px] text-[15px] font-semibold text-[#23232b] transition hover:bg-[#86213f] hover:text-white sm:h-[50px] sm:px-[34px] sm:text-[17px] lg:h-[calc(52*var(--u))] lg:px-[calc(39*var(--u))] lg:text-[length:calc(20.5*var(--u))]">
              {hero.secondaryCta.label}
            </AnimBtn>
          </div>
=======
      {/* Hero content — pt offsets fixed navbar, px matches navbar */}
      <div className="relative z-10 px-3 pt-[100px] pb-7 sm:px-4 sm:pt-[120px] sm:pb-10 md:pb-12 lg:absolute lg:inset-x-auto lg:left-[calc(28*var(--u))] lg:top-[calc(200*var(--u))] lg:p-0">
        <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#23232b] sm:gap-x-3.5 sm:text-[12px] sm:tracking-[0.16em] md:text-[13px] md:tracking-[0.2em] lg:flex-nowrap lg:gap-[calc(18*var(--u))] lg:text-[length:calc(18.5*var(--u))] lg:tracking-[0.26em] xl:text-[18.5px]">
          <span aria-hidden="true" className="h-[2.5px] w-6 shrink-0 rounded bg-[#86213f] sm:h-[3px] sm:w-10 lg:h-[calc(3.5*var(--u))] lg:w-[calc(50*var(--u))] xl:w-[48px]" />
          <span>{hero.eyebrow}</span>
        </p>

        <h1 style={{ fontFamily: HEADING_FONT }} className="mt-3 max-w-[640px] text-[clamp(1.6rem,6vw,3rem)] font-bold leading-[1.18] tracking-tight text-[#23232b] sm:leading-[1.15] md:leading-[1.1] lg:mt-[calc(36*var(--u))] lg:max-w-none lg:whitespace-nowrap lg:text-[length:calc(78*var(--u))] lg:leading-[calc(74*var(--u))]">
          <span className="block">{hero.titleLine1}</span>
          <span className="block text-[#86213f] lg:mt-[calc(4*var(--u))] lg:text-[length:calc(66*var(--u))] lg:leading-[calc(70*var(--u))]">
            {hero.titleLine2}
          </span>
        </h1>

        <p className="mt-4 max-w-[590px] text-base font-normal leading-[1.55] text-[#23232b] sm:text-lg lg:mt-[calc(18*var(--u))] lg:max-w-[calc(590*var(--u))] lg:text-[length:calc(22*var(--u))] lg:leading-[calc(32*var(--u))]">
          {hero.text}
        </p>

        <div className="mt-6 flex flex-wrap gap-3 lg:mt-[calc(28*var(--u))] lg:gap-[calc(23*var(--u))]">
          <AnimBtn href={hero.primaryCta.href} className="inline-flex h-[46px] items-center gap-3 rounded-[7px] bg-[#86213f] px-[24px] text-[15px] font-medium text-white shadow-[0_10px_22px_-10px_rgba(134,33,63,0.7)] transition hover:bg-[#6c1a32] sm:h-[50px] sm:px-[28px] sm:text-[17px] lg:h-[calc(52*var(--u))] lg:gap-[calc(12*var(--u))] lg:px-[calc(31*var(--u))] lg:text-[length:calc(20.5*var(--u))]">
            <span>{hero.primaryCta.label}</span>
            <ArrowRightIcon size={18} className="lg:size-[calc(20*var(--u))]" />
          </AnimBtn>
          <AnimBtn href={hero.secondaryCta.href} className="inline-flex h-[46px] items-center rounded-[7px] border border-[#86213f] bg-white px-[28px] text-[15px] font-semibold text-[#23232b] transition hover:bg-[#86213f] hover:text-white sm:h-[50px] sm:px-[34px] sm:text-[17px] lg:h-[calc(52*var(--u))] lg:px-[calc(39*var(--u))] lg:text-[length:calc(20.5*var(--u))]">
            {hero.secondaryCta.label}
          </AnimBtn>
>>>>>>> e3913ea1a12cc633f691f7e7c96415d662cc2acc
        </div>
      </div>
    </section>
  );
}
