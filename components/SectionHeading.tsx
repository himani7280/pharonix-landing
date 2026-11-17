import { GrowLine, Reveal, WordReveal } from "./Motion";
import { HEADING_FONT } from "@/data/data";

export const SECTION_TITLE_CLASS =
  "text-[clamp(1.75rem,5vw,3.1rem)] leading-[1.18] font-bold tracking-tight text-[#23232b] lg:text-[length:calc(50*var(--u))] lg:leading-[calc(56*var(--u))] xl:text-[50px] xl:leading-[56px]";

type SectionHeadingProps = {
  eyebrow: string;
  plain?: string;
  accent: string;
  text?: string;
  align?: "center" | "left";
  accentOnNewLine?: boolean;
  /** Overrides for the h2 size / line-height and the paragraph. */
  titleClass?: string;
  textClass?: string;
};

export function SectionHeading({
  eyebrow,
  plain,
  accent,
  text,
  align = "center",
  accentOnNewLine = false,
  titleClass = SECTION_TITLE_CLASS,
  textClass = "mx-auto max-w-[800px] text-base leading-[1.65] text-[#55555e] xl:text-[20px] xl:leading-[28px]",
}: SectionHeadingProps) {
  const center = align === "center";
  return (
    <Reveal className={center ? "mx-auto text-center" : ""}>
      <p className={`flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#23232b] sm:gap-x-3.5 sm:text-[12px] sm:tracking-[0.16em] md:text-[13px] md:tracking-[0.2em] lg:flex-nowrap lg:gap-[calc(18*var(--u))] lg:text-[length:calc(18.5*var(--u))] lg:tracking-[0.26em] xl:text-[18.5px] ${center ? "justify-center" : ""}`}>
        <GrowLine className="h-[2.5px] w-6 shrink-0 rounded bg-[#86213f] sm:h-[3px] sm:w-10 lg:h-[calc(3.5*var(--u))] lg:w-[calc(50*var(--u))] xl:w-[48px]" />
        <span>{eyebrow}</span>
      </p>
      <h2 style={{ fontFamily: HEADING_FONT }} className={`mt-3 sm:mt-3.5 ${titleClass}`}>
        {plain && (
          <span className={accentOnNewLine ? "block" : ""}>
            <WordReveal inView text={plain} />{" "}
          </span>
        )}
        <WordReveal inView delay={0.15} text={accent} className="text-[#86213f]" />
      </h2>
      {text && <p className={`mt-3.5 sm:mt-4 ${center ? "mx-auto" : ""} ${textClass}`}>{text}</p>}
    </Reveal>
  );
}
