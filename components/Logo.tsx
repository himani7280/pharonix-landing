import Image from "next/image";
import { BRAND, IMG } from "@/data/data";

type LogoProps = { className?: string; priority?: boolean };

/** Logo artwork cropped from the design (435x138). Size it with `className` width. */
export function Logo({ className = "w-[150px] xl:w-[198px]", priority = false }: LogoProps) {
  return <Image src={IMG.logo} alt={`${BRAND.name} ${BRAND.tagline}`} width={435} height={138} unoptimized priority={priority} className={`h-auto ${className}`} />;
}
