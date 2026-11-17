import Image from "next/image";
import type { CSSProperties } from "react";
import { ExpertiseCard, ProductCard } from "@/components/Cards";
import { FaqList } from "@/components/FaqSection";
import { ContactForm } from "@/components/Forms";
import { HomeHero } from "@/components/HomeHero";
import { Counter, Reveal, Stagger, StaggerItem, Tilt } from "@/components/Motion";
import { SectionHeading, SECTION_TITLE_CLASS } from "@/components/SectionHeading";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { HOME, IMG, HEADING_FONT } from "@/data/data";
import { CheckIcon, NamedIcon } from "@/lib/icons";

const { about, expertise, products, research, testimonials, faqs, contact } = HOME;

<<<<<<< HEAD
const SECTION_CONTAINER = "mx-auto max-w-[1349px] px-4 sm:px-6 lg:px-[calc(28*var(--u))] xl:px-8";
=======
const SECTION_CONTAINER = "px-4 sm:px-6 lg:px-[calc(28*var(--u))] xl:px-8";
>>>>>>> e3913ea1a12cc633f691f7e7c96415d662cc2acc
const SECTION_SPACING = "py-[clamp(28px,4vw,56px)] lg:py-[clamp(32px,calc(28*var(--u)),56px)]";
const EYEBROW_CLASS = "flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#23232b] sm:gap-x-3.5 sm:text-[12px] sm:tracking-[0.16em] md:text-[13px] md:tracking-[0.2em] lg:flex-nowrap lg:gap-[calc(18*var(--u))] lg:text-[length:calc(18.5*var(--u))] lg:tracking-[0.26em] xl:text-[18.5px]";
const EYEBROW_LINE_CLASS = "h-[2.5px] w-6 shrink-0 rounded bg-[#86213f] sm:h-[3px] sm:w-10 lg:h-[calc(3.5*var(--u))] lg:w-[calc(50*var(--u))] xl:w-[48px]";
const SUBTEXT_CLASS = "mt-3 sm:mt-3.5 text-[clamp(14px,1.8vw,20px)] font-normal leading-[1.65] text-[#55555e] xl:leading-[28px]";

<<<<<<< HEAD
const unit = { "--u": "calc(min(100vw, 1349px) / 1349)" } as CSSProperties;
=======
const unit = { "--u": "calc(100vw / 1349)" } as CSSProperties;
>>>>>>> e3913ea1a12cc633f691f7e7c96415d662cc2acc

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* ── About ── */}
      <section id="about" style={unit} className={`overflow-hidden bg-white ${SECTION_CONTAINER} ${SECTION_SPACING}`}>
        <div className="mx-auto grid items-center gap-8 lg:grid-cols-[calc(520*var(--u))_minmax(0,1fr)] lg:gap-[calc(38*var(--u))]">
          <div className="mx-auto w-full max-w-[460px] px-4 lg:max-w-none lg:px-0">
            <Image src={IMG.aboutArt} alt="Medical shield with flask, vial and capsules" width={520} height={600} priority unoptimized className="block h-auto w-full" />
          </div>

          <div className="lg:pl-0 lg:pr-[calc(50*var(--u))]">
            <div>
              <p className={EYEBROW_CLASS}>
                <span className={EYEBROW_LINE_CLASS} aria-hidden="true" />
                <span>{about.eyebrow}</span>
              </p>
              <h2 style={{ fontFamily: HEADING_FONT }} className={`mt-3 sm:mt-3.5 ${SECTION_TITLE_CLASS}`}>
                <span className="block lg:whitespace-nowrap">{about.titleLine1}</span>
                <span className="block text-[#86213f] lg:whitespace-nowrap">{about.titleLine2}</span>
              </h2>
              <p className={`max-w-[680px] lg:max-w-[calc(715*var(--u))] ${SUBTEXT_CLASS}`}>{about.text}</p>
            </div>

            <ul className="mt-5 space-y-2.5 lg:mt-[calc(24*var(--u))] lg:space-y-[calc(11*var(--u))]">
              {about.points.map((point) => (
                <li key={point} className="group flex items-center gap-3.5 text-[16px] font-normal text-[#23232b] transition-colors lg:gap-[calc(15*var(--u))] lg:text-[length:calc(19.5*var(--u))] lg:leading-[calc(28*var(--u))]">
                  <span className="grid size-7 shrink-0 place-items-center rounded-[6px] bg-[#86213f] text-white shadow-sm transition-all duration-300 ease-out group-hover:scale-115 group-hover:bg-[#5f132a] group-hover:shadow-[0_4px_12px_rgba(134,33,63,0.35)] lg:size-[calc(28*var(--u))] lg:rounded-[calc(6*var(--u))]">
                    <CheckIcon size={17} strokeWidth={2.5} className="transition-transform duration-300 group-hover:scale-110 lg:size-[calc(17*var(--u))]" />
                  </span>
                  <span className="transition-colors duration-200 group-hover:text-[#86213f]">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-[#dfd9dc] pt-6 lg:mt-[calc(28*var(--u))] lg:max-w-[calc(712*var(--u))] lg:pt-[calc(23*var(--u))]">
              <div className="flex flex-wrap items-center gap-y-5 sm:flex-nowrap">
                {about.stats.map((stat, i) => {
                  return (
                    <div key={stat.label} className={`group flex cursor-pointer items-center gap-4 transition-all lg:gap-[calc(23*var(--u))] ${i === 0 ? "w-full sm:w-auto sm:pr-7 lg:w-[calc(368*var(--u))] lg:pr-0" : "border-[#d5cfd2] pl-0 sm:border-l sm:pl-7 lg:min-h-[calc(64*var(--u))] lg:pl-[calc(32*var(--u))]"}`}>
                      <span className="grid h-[62px] w-[68px] shrink-0 place-items-center rounded-[12px] bg-[#f6e6ea] text-[#86213f] shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-[#86213f] group-hover:text-white group-hover:shadow-[0_10px_25px_-5px_rgba(134,33,63,0.45)] lg:h-[calc(66*var(--u))] lg:w-[calc(70*var(--u))] lg:rounded-[calc(12*var(--u))]">
                        <NamedIcon name={stat.icon} size={34} strokeWidth={1.6} className="transition-transform duration-300 group-hover:scale-110 lg:size-[calc(35*var(--u))]" />
                      </span>
                      <div>
                        <p style={{ fontFamily: HEADING_FONT }} className="text-[22px] font-bold leading-[1.1] text-[#86213f] transition-transform duration-300 group-hover:scale-105 lg:text-[length:calc(28*var(--u))]">
                          <Counter value={stat.value} suffix={stat.suffix} />
                        </p>
                        <p className="mt-1 text-[15px] font-normal leading-[1.2] text-[#23232b] transition-colors duration-200 group-hover:text-[#86213f] lg:mt-[calc(4*var(--u))] lg:whitespace-nowrap lg:text-[length:calc(18.5*var(--u))]">{stat.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Expertise ── */}
      <section id="expertise" style={unit} className={`bg-white ${SECTION_CONTAINER} ${SECTION_SPACING}`}>
        <div className="mx-auto w-full">
          <SectionHeading eyebrow={expertise.eyebrow} plain={expertise.titlePlain} accent={expertise.titleAccent} text={expertise.text} />
          <Stagger className="mt-6 sm:mt-8 lg:mt-[calc(30*var(--u))] xl:mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-[22px]">
            {expertise.items.map((item) => (
              <StaggerItem key={item.title} className="h-full">
                <Tilt className="h-full">
                  <ExpertiseCard {...item} />
                </Tilt>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Products ── */}
      <section id="products" style={unit} className={`bg-white ${SECTION_CONTAINER} ${SECTION_SPACING}`}>
        <div className="mx-auto w-full">
          <SectionHeading eyebrow={products.eyebrow} plain={products.titlePlain} accent={products.titleAccent} text={products.text} />
          <Stagger className="mt-6 sm:mt-8 lg:mt-[calc(30*var(--u))] xl:mt-8 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-4 xl:gap-[19px]">
            {products.items.map((item) => (
              <StaggerItem key={item.label} className="h-full">
                <Tilt className="h-full" max={9}>
                  <ProductCard {...item} />
                </Tilt>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Research & Development ── */}
      <section id="research" style={unit} className={`bg-white ${SECTION_CONTAINER} ${SECTION_SPACING}`}>
        <div className="mx-auto grid items-center gap-8 lg:grid-cols-[calc(575*var(--u))_minmax(0,1fr)] lg:gap-[calc(38*var(--u))]">
          <div>
            <p className={EYEBROW_CLASS}>
              <span className={EYEBROW_LINE_CLASS} aria-hidden="true" />
              <span>{research.eyebrow}</span>
            </p>
            <h2 style={{ fontFamily: HEADING_FONT }} className={`mt-3 sm:mt-3.5 ${SECTION_TITLE_CLASS}`}>
              <span className="block">{research.titlePlain}</span>
              <span className="block">
                Through <span className="text-[#86213f]">Innovation</span>
              </span>
            </h2>
            <p className={`max-w-[600px] lg:max-w-[calc(560*var(--u))] ${SUBTEXT_CLASS}`}>
              {research.text}
            </p>
            <div className="mt-8 sm:mt-10 lg:mt-[calc(36*var(--u))] grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-y-0">
              {research.items.map((item, i) => {
                return (
                  <div key={item.label} className={`group flex cursor-pointer flex-col items-center text-center transition-all ${i > 0 ? "sm:border-l sm:border-[#e3dcdf]" : ""} sm:min-h-[115px] lg:min-h-[calc(115*var(--u))] lg:px-[calc(8*var(--u))]`}>
                    <span className="grid h-[66px] w-[76px] place-items-center rounded-[12px] bg-[#f5e3e8] text-[#86213f] shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-1.5 group-hover:scale-110 group-hover:bg-[#86213f] group-hover:text-white group-hover:shadow-[0_10px_25px_-5px_rgba(134,33,63,0.45)] lg:h-[calc(68*var(--u))] lg:w-[calc(76*var(--u))] lg:rounded-[calc(12*var(--u))]">
                      <NamedIcon name={item.icon} size={36} strokeWidth={1.5} className="transition-transform duration-300 group-hover:scale-110 lg:size-[calc(36*var(--u))]" />
                    </span>
                    <p className="mt-2.5 max-w-[130px] whitespace-pre-line text-[15px] font-medium leading-[1.3] text-[#16161b] transition-colors duration-200 group-hover:text-[#86213f] lg:mt-[calc(10*var(--u))] lg:max-w-[calc(125*var(--u))] lg:text-[length:calc(18.5*var(--u))] lg:leading-[calc(23*var(--u))]">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full lg:mt-[calc(16*var(--u))]">
            <Image
              src={IMG[research.image]}
              alt="Laboratory research with test tubes and pipette"
              width={593}
              height={420}
              unoptimized
              className="block h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" style={unit} className={`bg-white ${SECTION_CONTAINER} ${SECTION_SPACING}`}>
        <div className="mx-auto w-full">
          <div className="mx-auto text-center">
            <p className={`justify-center ${EYEBROW_CLASS}`}>
              <span className={EYEBROW_LINE_CLASS} aria-hidden="true" />
              <span>{testimonials.eyebrow}</span>
            </p>
            <h2 style={{ fontFamily: HEADING_FONT }} className={`mt-3 sm:mt-3.5 ${SECTION_TITLE_CLASS}`}>
              {testimonials.titlePlain} <span className="text-[#86213f]">{testimonials.titleAccent}</span>
            </h2>
            <p className={`mx-auto max-w-[850px] ${SUBTEXT_CLASS}`}>
              {testimonials.text}
            </p>
          </div>
          <div className="mt-6 sm:mt-8 lg:mt-[calc(30*var(--u))] xl:mt-8">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section id="faqs" style={unit} className={`bg-white ${SECTION_CONTAINER} ${SECTION_SPACING}`}>
        <div className="mx-auto grid items-start gap-8 lg:grid-cols-[calc(440*var(--u))_minmax(0,1fr)] lg:gap-[calc(43*var(--u))]">
          <div>
            <p className={EYEBROW_CLASS}>
              <span className={EYEBROW_LINE_CLASS} aria-hidden="true" />
              <span>{faqs.eyebrow}</span>
            </p>
            <h2 style={{ fontFamily: HEADING_FONT }} className={`mt-3 sm:mt-3.5 ${SECTION_TITLE_CLASS}`}>
              <span className="block">{faqs.titlePlain}</span>
              <span className="block text-[#86213f]">{faqs.titleAccent}</span>
            </h2>
            <p className={`max-w-[370px] lg:max-w-[calc(365*var(--u))] ${SUBTEXT_CLASS}`}>
              {faqs.text}
            </p>
            <span className="mt-5 block h-[3.5px] w-[86px] rounded bg-[#86213f] lg:mt-[calc(30*var(--u))]" aria-hidden="true" />
          </div>
          <div className="lg:mt-[calc(16*var(--u))]">
            <FaqList />
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" style={unit} className={`bg-white ${SECTION_CONTAINER} ${SECTION_SPACING}`}>
        <div className="mx-auto max-w-[1204px]">
          <SectionHeading
            eyebrow={contact.eyebrow}
            plain={contact.titlePlain}
            accent={contact.titleAccent}
            text={contact.text}
          />
          <div className="mt-6 sm:mt-8 lg:mt-[calc(30*var(--u))] xl:mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:grid-cols-[406px_757px] xl:gap-[41px]">
            <Reveal className="xl:mt-[20px]">
              {contact.cards.map((card, i) => {
                return (
                  <div key={card.title} className={`group flex items-start gap-[23px] py-5 transition-all xl:py-0 ${i > 0 ? "border-t border-[#ecdde1] xl:pt-[20px]" : ""} ${i < contact.cards.length - 1 ? "xl:pb-[20px]" : ""}`}>
                    <span className="grid h-[66px] w-[72px] shrink-0 place-items-center rounded-[12px] bg-[#f4e4e8] text-[#86213f] shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-[#86213f] group-hover:text-white group-hover:shadow-[0_10px_25px_-5px_rgba(134,33,63,0.45)]">
                      <NamedIcon name={card.icon} size={30} strokeWidth={1.8} className="transition-transform duration-300 group-hover:scale-110" />
                    </span>
                    <div>
                      <h3 style={{ fontFamily: HEADING_FONT }} className="text-[22px] font-bold leading-[28px] text-[#16161b] transition-colors group-hover:text-[#86213f] xl:text-[24px]">{card.title}</h3>
                      {card.lines.map((line) => (
                        <p key={line} className="break-words text-[16px] leading-[24px] text-[#16161b] xl:text-[22px]">{line}</p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </Reveal>
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
