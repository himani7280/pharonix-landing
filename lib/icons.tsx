import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const make = (paths: ReactNode) =>
  function Icon({ size = 20, ...rest }: IconProps) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>
        {paths}
      </svg>
    );
  };

export const FlaskIcon = make(
  <>
    <path d="M8.5 3h7M10 3v5.5L4.8 18.2a2 2 0 0 0 1.75 2.8h10.9a2 2 0 0 0 1.75-2.8L14 8.5V3" />
    <path d="M7.2 13.8h9.6" />
    <path d="M9.2 17.8c.4-1.2 1.2-1.8 2-1.8.5 0 .8.4.6 1-.2.5-.8.8-1.4.8H9.2Z" fill="currentColor" stroke="none" />
    <circle cx="12.3" cy="16.3" r="0.7" fill="currentColor" stroke="none" />
  </>,
);
export const MicroscopeIcon = make(<><path d="M6 18h12M8 21h8M10 3l4 2-3 7-4-2z" /><path d="M13.5 11.5A5 5 0 0 1 12 20" /></>);
export const ShieldIcon = make(<><path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6z" /><path d="M9 12l2 2 4-4" /></>);
export const PillIcon = make(<><rect x="2.5" y="8.5" width="19" height="7" rx="3.5" transform="rotate(-45 12 12)" /><path d="M9.5 9.5l5 5" /></>);
export const TabletIcon = make(<><circle cx="12" cy="12" r="8.5" /><path d="M5 12h14" /></>);
export const BottleIcon = make(<><path d="M9 3h6v3H9zM8 6h8v15H8z" /><path d="M8 12h8" /></>);
export const TubeIcon = make(<path d="M7 3h10v4H7zM8 7l-1 14h10L16 7" />);
export const SyringeIcon = make(<path d="M18 3l3 3M16 5l3 3-9 9-4 1 1-4zM5 19l-2 2M12 8l2 2" />);
export const DropIcon = make(<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />);
export const InhalerIcon = make(<path d="M8 3h5v10H8zM13 9h5a2 2 0 0 1 2 2v2h-7M8 13v6a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-6" />);
export const SachetIcon = make(<path d="M5 4h14v16H5zM5 7h14M5 17h14" />);
export const UsersIcon = make(
  <>
    <circle cx="12" cy="7.5" r="3.1" />
    <path d="M6.8 19.2c0-2.9 2.3-5 5.2-5s5.2 2.1 5.2 5H6.8Z" />
    <circle cx="5.8" cy="9.6" r="2.1" />
    <path d="M6.8 18H2.4c0-2.3 1.5-4 3.6-4 .6 0 1.2.15 1.7.4" />
    <circle cx="18.2" cy="9.6" r="2.1" />
    <path d="M17.2 18h4.4c0-2.3-1.5-4-3.6-4-.6 0-1.2.15-1.7.4" />
  </>,
);
export const NetworkIcon = make(<><circle cx="12" cy="5" r="2.5" /><circle cx="5" cy="18" r="2.5" /><circle cx="19" cy="18" r="2.5" /><path d="M11 7.3L6 15.7M13 7.3l5 8.4M7.5 18h9" /></>);
export const PinIcon = function PinIcon({ size = 20, className = "", ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
};
export const LocationIcon = PinIcon;
export const PhoneIcon = make(<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />);
export const MailIcon = make(<><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>);
export const FacebookIcon = make(<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />);
export const TwitterIcon = make(<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />);
export const LinkedinIcon = make(<><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>);
export const InstagramIcon = make(<><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>);
export const ArrowRightIcon = make(<path d="M5 12h14M13 6l6 6-6 6" />);
export const ChevronRightIcon = make(<path d="M9 6l6 6-6 6" />);
export const ChevronLeftIcon = make(<path d="M15 6l-6 6 6 6" />);
export const CheckIcon = make(<path d="M5 12.5l4.5 4.5L19 7.5" />);
export const PlusIcon = make(<path d="M12 5v14M5 12h14" />);
export const MinusIcon = make(<path d="M5 12h14" />);
export const QuoteIcon = make(<path d="M9 7H5v6h4c0 3-1 4-4 4M19 7h-4v6h4c0 3-1 4-4 4" />);
export const MenuIcon = make(<path d="M4 7h16M4 12h16M4 17h16" />);
export const CloseIcon = make(<path d="M6 6l12 12M18 6L6 18" />);

const ICONS = {
  flask: FlaskIcon, microscope: MicroscopeIcon, shield: ShieldIcon, pill: PillIcon, tablet: TabletIcon,
  bottle: BottleIcon, tube: TubeIcon, syringe: SyringeIcon, drop: DropIcon, inhaler: InhalerIcon,
  sachet: SachetIcon, users: UsersIcon, network: NetworkIcon, pin: PinIcon, location: LocationIcon, phone: PhoneIcon, mail: MailIcon,
  facebook: FacebookIcon, twitter: TwitterIcon, linkedin: LinkedinIcon, instagram: InstagramIcon,
} as const;

type IconName = keyof typeof ICONS;
export function NamedIcon({ name, ...props }: IconProps & { name: string }) {
  const Icon = ICONS[name as IconName] ?? PillIcon;
  return <Icon {...props} />;
}
