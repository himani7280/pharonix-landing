import { NAV_CTA, IMG, HEADING_FONT } from "@/data/data";
import { ArrowRightIcon, NamedIcon } from "@/lib/icons";
import { Photo } from "./Photo";

type ExpertiseCardProps = { icon: string; title: string; text: string; image: string };

export function ExpertiseCard({ icon, title, text, image }: ExpertiseCardProps) {
  return (
    <a href={NAV_CTA.href} className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#eadde1] bg-[linear-gradient(180deg,#fbf3f5_0%,#fff_100%)] shadow-[0_12px_30px_-18px_rgba(80,20,40,0.35)] transition duration-500 hover:-translate-y-1.5">
      <div className="relative h-[172px] overflow-hidden">
        <Photo src={IMG[image]} alt={title} sizes="304px" className="object-top" />
      </div>
      <div className="relative flex flex-1 flex-col px-[22px] pb-[26px]">
        <span className="-mt-[14px] mb-0 grid transition duration-500 group-hover:-translate-y-1 group-hover:rotate-[-6deg] group-hover:bg-[#86213f] group-hover:text-white h-[65px] w-[63px] place-items-center rounded-[14px] bg-[#f6e3e8] text-[#86213f] shadow-sm">
          <NamedIcon name={icon} size={34} strokeWidth={1.5} />
        </span>
        <div className="flex items-start justify-between gap-2">
          <h3 style={{ fontFamily: HEADING_FONT }} className="max-w-[170px] text-[22px] font-bold leading-[27px] text-[#23232b] xl:text-[24px]">{title}</h3>
          <span className="mt-[18px] grid size-[34px] shrink-0 place-items-center rounded-full border border-[#e4c3cc] text-[#86213f] transition group-hover:bg-[#86213f] group-hover:text-white">
            <ArrowRightIcon size={14} />
          </span>
        </div>
        <p className="mt-2.5 pl-px text-[16px] leading-[22px] text-[#3b3b44] xl:text-[16.8px]">{text}</p>
      </div>
      <span className="mt-auto h-[5px] w-full rounded-b-2xl bg-[#86213f]" />
    </a>
  );
}

type ProductCardProps = { icon: string; label: string; image: string };

export function ProductCard({ icon, label, image }: ProductCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-[#eadde1] bg-white shadow-[0_8px_22px_-16px_rgba(80,20,40,0.35)] transition duration-500 hover:-translate-y-1.5">
      <div className="relative aspect-[309/157] overflow-hidden">
        <Photo src={IMG[image]} alt={label} sizes="309px" />
      </div>
      <div className="relative flex h-[62px] items-center gap-4 bg-[linear-gradient(180deg,#fbf3f5_0%,#f8eef1_100%)] pl-[24px] pr-4">
        <span className="grid h-[40px] w-[50px] shrink-0 place-items-center rounded-[9px] bg-[#86213f] text-white transition duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]">
          <NamedIcon name={icon} size={22} strokeWidth={1.6} />
        </span>
        <h3 style={{ fontFamily: HEADING_FONT }} className=" text-[18px] font-bold text-[#23232b] xl:text-[20.5px]">{label}</h3>
        <svg className="absolute bottom-0 right-0 h-[26px] w-[64px] text-[#86213f]" viewBox="0 0 64 26" aria-hidden="true">
          <path d="M64 0C52 14 36 24 10 26H64Z" fill="currentColor" />
        </svg>
      </div>
    </article>
  );
}
