"use client";

import { animate, motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, type Variants } from "framer-motion";
import { useEffect, useRef, useState, type CSSProperties, type PointerEvent, type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = { children: ReactNode; delay?: number; className?: string; x?: number; y?: number };

/** Fade + rise + de-blur when scrolled into view. */
export function Reveal({ children, delay = 0, className, x = 0, y = 36 }: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, x, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Image that is unveiled with a clip-path wipe while it settles from a slight zoom. */
export function ImageReveal({ children, className, from = "left", delay = 0 }: { children: ReactNode; className?: string; from?: "left" | "right" | "bottom"; delay?: number }) {
  const reduce = useReducedMotion();
  const hidden = { left: "inset(0 100% 0 0 round 16px)", right: "inset(0 0 0 100% round 16px)", bottom: "inset(100% 0 0 0 round 16px)" }[from];
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { clipPath: hidden, scale: 1.06 }}
      whileInView={{ clipPath: "inset(0 0 0 0 round 0px)", scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const staggerParent: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const staggerChild: Variants = {
  hidden: { opacity: 0, y: 54, scale: 0.92, rotate: 1.5, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, scale: 1, rotate: 0, filter: "blur(0px)", transition: { duration: 0.85, ease: EASE } },
};

/** Grid/list wrapper whose `StaggerItem` children pop in one after another. */
export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} variants={staggerParent} initial={reduce ? "show" : "hidden"} whileInView="show" viewport={{ once: true, margin: "-70px" }}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={staggerChild}>
      {children}
    </motion.div>
  );
}

/** Headline whose words slide up out of a mask, one by one. */
export function WordReveal({ text, className, delay = 0, inView = false }: { text: string; className?: string; delay?: number; inView?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.12em] align-bottom" aria-hidden="true">
          <motion.span
            className="inline-block"
            initial={reduce ? false : { y: "110%" }}
            {...(inView ? { whileInView: { y: 0 }, viewport: { once: true, margin: "-40px" } } : { animate: { y: 0 } })}
            transition={{ duration: 0.8, delay: delay + i * 0.08, ease: EASE }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/** Endless slow zoom in, then back out, used on the hero photo. */
export function ZoomIn({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { scale: 1 }}
      animate={reduce ? undefined : { scale: [1, 1.14, 1] }}
      transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
    >
      {children}
    </motion.div>
  );
}

/** Slides in from the left and fades up on first paint. */
export function SlideIn({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} initial={reduce ? false : { x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.2, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}

/** Thin maroon progress bar under the header. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 24, mass: 0.3 });
  return <motion.div aria-hidden="true" style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-[linear-gradient(90deg,#86213f,#d9467a)]" />;
}

/** Gentle endless float, used for decorative elements. */
export function Float({ children, className, amount = 10, duration = 5 }: { children: ReactNode; className?: string; amount?: number; duration?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} animate={reduce ? undefined : { y: [0, -amount, 0] }} transition={{ duration, repeat: Infinity, ease: "easeInOut" }}>
      {children}
    </motion.div>
  );
}

type CounterProps = { value: number; suffix?: string };

export function Counter({ value, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, { duration: 1.8, ease: EASE, onUpdate: (v) => setShown(Math.round(v)) });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {shown}
      {suffix}
    </span>
  );
}

/** Card that tilts toward the pointer in 3D (mouse only) and springs back. */
export function Tilt({ children, className = "", max = 7 }: { children: ReactNode; className?: string; max?: number }) {
  const reduce = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const spring = { stiffness: 220, damping: 20, mass: 0.4 };
  const rotateX = useSpring(rx, spring);
  const rotateY = useSpring(ry, spring);
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const box = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - box.left) / box.width - 0.5) * max * 2);
    rx.set(-((e.clientY - box.top) / box.height - 0.5) * max * 2);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };
  return (
    <div className={className} style={{ perspective: 900 }}>
      <motion.div className="size-full" style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} onPointerMove={onMove} onPointerLeave={onLeave}>
        {children}
      </motion.div>
    </div>
  );
}

/** Moves slower than the page and fades out while the hero scrolls away. */
export function ScrollLayer({ children, className, speed = -0.5, fade = true }: { children: ReactNode; className?: string; speed?: number; fade?: boolean }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 800 * speed]);
  const opacity = useTransform(scrollY, [0, 380], [1, fade ? 0 : 1]);
  const scale = useTransform(scrollY, [0, 500], [1, fade ? 0.92 : 1]);
  return (
    <motion.div className={className} style={{ y, opacity, scale }}>
      {children}
    </motion.div>
  );
}

/** Decorative element that drifts, spins a little and breathes forever. */
export function Drift({ children, className, x = 12, y = 22, rotate = 12, duration = 7, delay = 0 }: { children?: ReactNode; className?: string; x?: number; y?: number; rotate?: number; duration?: number; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden="true"
      className={className}
      initial={reduce ? false : { opacity: 0, scale: 0.4 }}
      animate={reduce ? undefined : { opacity: 1, scale: 1, x: [0, x, 0, -x, 0], y: [0, -y, 0, y * 0.4, 0], rotate: [0, rotate, 0, -rotate, 0] }}
      transition={{ opacity: { duration: 1, delay }, scale: { duration: 1.2, delay, ease: EASE }, x: { duration, repeat: Infinity, ease: "easeInOut", delay }, y: { duration, repeat: Infinity, ease: "easeInOut", delay }, rotate: { duration, repeat: Infinity, ease: "easeInOut", delay } }}
    >
      {children}
    </motion.div>
  );
}

/** Thin line that draws itself from the left when scrolled into view. */
export function GrowLine({ className, delay = 0 }: { className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      aria-hidden="true"
      className={`origin-left ${className ?? ""}`}
      initial={reduce ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay: delay + 0.2, ease: EASE }}
    />
  );
}

/** Slides the header down on first paint. */
export function HeaderEntrance({ children, className, style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} style={style} initial={reduce ? false : { y: -120, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.1, ease: EASE }}>
      {children}
    </motion.div>
  );
}

/** Hero background that zooms in as the page scrolls, for depth. */
export function ScrollZoom({ children, className }: { children: ReactNode; className?: string }) {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 700], [1, 1.22]);
  const y = useTransform(scrollY, [0, 700], [0, 70]);
  return (
    <motion.div className={className} style={{ scale, y }}>
      {children}
    </motion.div>
  );
}

/** Scroll-linked vertical drift for an image; the parent must clip (overflow-hidden). */
export function Parallax({ children, className = "absolute inset-0", amount = 9 }: { children: ReactNode; className?: string; amount?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${-amount}%`, `${amount}%`]);
  return (
    <div ref={ref} className={className}>
      <motion.div className="absolute inset-x-0" style={{ y: reduce ? 0 : y, top: `-${amount}%`, bottom: `-${amount}%` }}>
        {children}
      </motion.div>
    </div>
  );
}

/** Consistent press + lift animation wrapper for CTA buttons and anchor tags. */
export function AnimBtn({
  children,
  className,
  href,
  type,
  onClick,
  "aria-label": ariaLabel,
  "aria-expanded": ariaExpanded,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
  "aria-label"?: string;
  "aria-expanded"?: boolean;
}) {
  const reduce = useReducedMotion();
  const anim = reduce
    ? {}
    : {
        whileHover: { scale: 1.04, y: -3 },
        whileTap: { scale: 0.97, y: 0 },
        transition: { type: "spring" as const, stiffness: 380, damping: 22 },
      };

  if (href) {
    return (
      <motion.a href={href} className={className} {...anim}>
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button
      type={type ?? "button"}
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      {...anim}
    >
      {children}
    </motion.button>
  );
}

/** Pulls its child slightly toward the pointer. */
export function Magnetic({ children, className = "inline-block", strength = 0.3 }: { children: ReactNode; className?: string; strength?: number }) {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 16, mass: 0.3 });
  const y = useSpring(my, { stiffness: 220, damping: 16, mass: 0.3 });
  const onMove = (e: PointerEvent<HTMLSpanElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const box = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - box.left - box.width / 2) * strength);
    my.set((e.clientY - box.top - box.height / 2) * strength);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };
  return (
    <motion.span className={className} style={{ x, y }} onPointerMove={onMove} onPointerLeave={onLeave}>
      {children}
    </motion.span>
  );
}
