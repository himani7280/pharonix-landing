import { BRAND, FOOTER, HOME, HEADING_FONT } from "@/data/data";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "@/lib/icons";
import { Logo } from "./Logo";

const ADDRESS_LINES = HOME.contact.cards[0].lines;

/** Map social keys from data.json → icon component */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SOCIAL_ICON_MAP: Record<string, React.FC<{ size?: number; className?: string }>> = {
  facebook:  FacebookIcon,
  instagram: InstagramIcon,
  linkedin:  LinkedinIcon,
};

const Heading = ({ title }: { title: string }) => {
  const [plain, ...rest] = title.split(" ");
  const accent = rest.join(" ");
  return (
    <>
      <h3 style={{ fontFamily: HEADING_FONT }} className="text-[28px] font-bold leading-none text-[#23232b] xl:text-[32px]">
        {plain} <span className="text-[#86213f]">{accent}</span>
      </h3>
      <span className="mt-[14px] block h-[3px] w-[70px] rounded bg-[#86213f]" />
    </>
  );
};

const Chevron = () => (
  <svg width="12" height="14" viewBox="0 0 12 14" className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
    <path d="M3 2l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconBox = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`grid h-[52px] w-[56px] shrink-0 place-items-center rounded-[12px] bg-[#f1dde3] text-[#86213f] shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:bg-[#86213f] group-hover:text-white group-hover:shadow-[0_8px_20px_-4px_rgba(134,33,63,0.45)] ${className}`}>
    {children}
  </span>
);

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white pt-5 sm:pt-6 md:pt-7 lg:pt-[calc(26*var(--u))] xl:pt-7">
      <div className="relative mx-auto grid max-w-[1349px] gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_auto_auto] xl:grid-cols-[493px_323px_1fr] xl:gap-0 xl:px-[52px]">
        <div className="pr-0 xl:pr-[40px]">
          <Logo className="w-[260px] xl:w-[430px]" />
          <p className="mt-5 max-w-[400px] text-[18px] leading-[28px] text-[#16161b] xl:ml-[8px] xl:mt-[16px] xl:text-[21px]">{FOOTER.blurb}</p>
          <span className="mt-5 block h-[4px] w-[74px] rounded bg-[#86213f] xl:ml-[8px] xl:mt-[22px]" />

          {/* Social icons — keys and hrefs from data.json */}
          <div className="mt-6 flex items-center gap-3 xl:ml-[8px] xl:mt-7">
            {FOOTER.socials.map((item) => {
              const Icon = SOCIAL_ICON_MAP[item.key];
              if (!Icon) return null;
              return (
                <a
                  key={item.key}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="group grid size-10 place-items-center rounded-[10px] bg-[#f1dde3] text-[#86213f] shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-115 hover:bg-[#86213f] hover:text-white hover:shadow-[0_8px_18px_rgba(134,33,63,0.4)]"
                >
                  <Icon size={18} className="transition-transform duration-300 group-hover:scale-110" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="border-[#ecd2d9] lg:border-l lg:pl-10 xl:pl-[51px]">
          {/* quickLinksTitle from data.json */}
          <Heading title={FOOTER.quickLinksTitle} />
          <ul className="mt-[22px] space-y-[14px] leading-[23px]">
            {FOOTER.quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="group inline-flex items-center gap-3 text-[18px] text-[#16161b] transition-all duration-200 hover:translate-x-1.5 hover:text-[#86213f] xl:text-[20px]">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#f8ebef] text-[#86213f] shadow-sm transition-all duration-200 group-hover:scale-115 group-hover:bg-[#86213f] group-hover:text-white group-hover:shadow-[0_4px_10px_rgba(134,33,63,0.3)]">
                    <Chevron />
                  </span>
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-[#ecd2d9] lg:border-l lg:pl-10 xl:pl-[63px]">
          {/* contactTitle from data.json */}
          <Heading title={FOOTER.contactTitle} />
          <ul className="mt-[20px] space-y-[14px] text-[17px] text-[#16161b] xl:text-[18px]">
            <li className="group">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(BRAND.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-[19px] transition-colors"
              >
                <IconBox>
                  <PinIcon size={24} className="transition-transform duration-300 group-hover:scale-110" />
                </IconBox>
                <address className="not-italic leading-[25px] text-[#16161b] transition-colors group-hover:text-[#86213f]">
                  {ADDRESS_LINES.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </address>
              </a>
            </li>
            <li className="group">
              <a href={`tel:${BRAND.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-[19px] transition-colors">
                <IconBox>
                  <PhoneIcon size={24} className="transition-transform duration-300 group-hover:scale-110" />
                </IconBox>
                <span className="text-[#16161b] transition-colors group-hover:text-[#86213f]">{BRAND.phone}</span>
              </a>
            </li>
            <li className="group">
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-[19px] transition-colors">
                <IconBox>
                  <MailIcon size={24} className="transition-transform duration-300 group-hover:scale-110" />
                </IconBox>
                <span className="break-all text-[#16161b] transition-colors group-hover:text-[#86213f]">{BRAND.email}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Waves */}
      <div className="relative mt-0 h-[60px] sm:h-[81px]">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1349 88" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="waveR" x1="0" x2="1">
              <stop offset="0" stopColor="#c58a9b" stopOpacity=".55" />
              <stop offset="1" stopColor="#86213f" />
            </linearGradient>
          </defs>
          <path d="M0 22C220 -4 440 14 560 88H0Z" fill="#f4e4e9" />
          <path d="M0 40C190 18 360 30 520 88H0Z" fill="#ecd2da" opacity=".7" />
          <path d="M1349 0V88H1000C1130 70 1230 40 1349 0Z" fill="#ecd2da" opacity=".6" />
          <path d="M1349 24V88H990C1120 76 1230 56 1349 24Z" fill="url(#waveR)" />
        </svg>
      </div>

      <div className="bg-[#86213f] text-white">
        <p className="mx-auto max-w-[1349px] px-4 py-5 text-[15px] sm:px-6 xl:px-[52px] xl:py-[21px] xl:text-[19.5px]">{FOOTER.copyright}</p>
      </div>
    </footer>
  );
}
