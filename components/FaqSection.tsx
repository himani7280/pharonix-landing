"use client";

import { useState } from "react";
import { HOME, HEADING_FONT } from "@/data/data";
import { MinusIcon, PlusIcon } from "@/lib/icons";

const { items } = HOME.faqs;

export function FaqList() {
  const [open, setOpen] = useState(0);

  return (
    <ul className="space-y-2.5 lg:space-y-[calc(10*var(--u))]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q} className={`overflow-hidden rounded-[10px] lg:rounded-[calc(10*var(--u))] ${isOpen ? "bg-[#f6eaee]" : "border border-[#dfc2ca] bg-white"}`}>
            <h3 style={{ fontFamily: HEADING_FONT }}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className={`flex min-h-[54px] w-full items-center justify-between gap-4 px-5 py-3 text-left text-[17px] font-bold lg:min-h-[calc(58*var(--u))] lg:px-[calc(28*var(--u))] lg:py-[calc(12*var(--u))] lg:text-[length:calc(22*var(--u))] ${isOpen ? "bg-[#86213f] text-white" : "text-[#16161b]"}`}
              >
                <span>{item.q}</span>
                {isOpen ? (
                  <MinusIcon size={20} strokeWidth={2.5} className="shrink-0 lg:size-[calc(22*var(--u))]" />
                ) : (
                  <PlusIcon size={20} strokeWidth={2.5} className="shrink-0 text-[#16161b] lg:size-[calc(22*var(--u))]" />
                )}
              </button>
            </h3>
            <div id={`faq-${i}`} role="region" className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <p className="min-h-0 overflow-hidden px-5 text-[15px] font-normal leading-[1.55] text-[#16161b] lg:px-[calc(28*var(--u))] lg:text-[length:calc(18.5*var(--u))] lg:leading-[calc(28*var(--u))]">
                <span className="block py-3 lg:py-[calc(14*var(--u))]">{item.a}</span>
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
