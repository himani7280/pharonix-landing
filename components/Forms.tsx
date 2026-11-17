"use client";

import { useState, type FormEvent } from "react";
import { HOME, HEADING_FONT } from "@/data/data";
import { ArrowRightIcon } from "@/lib/icons";
import { AnimBtn } from "./Motion";

const { form } = HOME.contact;

const fieldClass =
  "h-[41px] w-full rounded-lg border-2 border-[#e3b9c4] bg-white px-[17px] text-[16px] text-[#16161b] outline-none transition placeholder:text-[#16161b] focus:border-[#86213f]";

const Field = ({ name, label, type = "text", required = false, autoComplete }: { name: string; label: string; type?: string; required?: boolean; autoComplete?: string }) => (
  <label className="relative block">
    <input name={name} type={type} required={required} autoComplete={autoComplete} placeholder=" " className={`peer ${fieldClass} placeholder:text-transparent`} />
    <span className="pointer-events-none absolute left-[19px] top-1/2 -translate-y-1/2 text-[16px] text-[#16161b] transition peer-focus:opacity-0 peer-[:not(:placeholder-shown)]:opacity-0">
      {label}
      {required && <span className="text-[#e11d2e]"> *</span>}
    </span>
  </label>
);

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit} className="rounded-[18px] border-2 border-[#d9a0ae] bg-white px-4 pb-6 pt-5 sm:px-[30px] xl:pb-[20px] xl:pt-[14px]">
      <h3 style={{ fontFamily: HEADING_FONT }} className="text-center text-[28px] font-bold leading-[1.2] text-[#23232b] sm:text-[34px] xl:text-[43px]">
        Send Us a <span className="text-[#86213f]">Message</span>
      </h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 sm:gap-x-[22px] xl:mt-[12px]">
        <Field name="name" label="Your Name" required autoComplete="name" />
        <Field name="email" label="Your Email" type="email" required autoComplete="email" />
        <Field name="phone" label="Phone Number" type="tel" autoComplete="tel" />
        <Field name="subject" label="Subject" />
        <label className="relative block sm:col-span-2">
          <textarea name="message" required rows={3} placeholder=" " className={`peer ${fieldClass} h-[92px] resize-y py-[11px] placeholder:text-transparent`} />
          <span className="pointer-events-none absolute left-[19px] top-[11px] text-[16px] text-[#16161b] transition peer-focus:opacity-0 peer-[:not(:placeholder-shown)]:opacity-0">
            Your Message <span className="text-[#e11d2e]">*</span>
          </span>
        </label>
      </div>
      <AnimBtn type="submit" className="mt-5 inline-flex h-[46px] items-center gap-3 rounded-lg bg-[#86213f] px-[30px] text-[17px] font-medium text-white shadow-[0_8px_18px_-8px_rgba(134,33,63,0.7)] transition hover:bg-[#6c1a32] xl:mt-[20px] xl:text-[20.5px]">
        {form.submit}
        <ArrowRightIcon size={20} />
      </AnimBtn>
      {sent && (
        <p role="status" className="mt-4 rounded-md bg-[#f6e3e9] px-3 py-2 text-sm text-[#6b1030]">
          {form.success}
        </p>
      )}
    </form>
  );
}
