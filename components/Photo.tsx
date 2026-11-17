import Image from "next/image";
import { Parallax } from "./Motion";

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Drift the image while scrolling (parent must be overflow-hidden). */
  parallax?: boolean;
};

/** Fills its `relative` parent. Add `group` on the parent for hover zoom. */
export function Photo({ src, alt, className = "", sizes = "(min-width: 1024px) 50vw, 100vw", priority = false, parallax = false }: PhotoProps) {
  const image = (
    <Image
      src={src}
      alt={alt}
      fill
      unoptimized
      priority={priority}
      sizes={sizes}
      className={`object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 ${className}`}
    />
  );
  return parallax ? <Parallax>{image}</Parallax> : image;
}
