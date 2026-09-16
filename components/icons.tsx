import type { SVGProps } from 'react';

/*
 * ชุดไอคอนของ ThaiMove
 *
 * หมายเหตุสำคัญ: ดีไซน์ใน Figma อ้างอิงชุดไอคอน HugeIcons (stroke-rounded)
 * แต่ egress policy ของ environment นี้บล็อก figma.com ทำให้ดาวน์โหลดไฟล์ SVG
 * ที่ export ไว้ไม่ได้ ไอคอนด้านล่างจึงถูกวาดขึ้นใหม่ให้ตรงกับ glyph และสไตล์เดิม
 * (viewBox 24x24, stroke 1.5, ปลายเส้นมนแบบ rounded)
 * ถ้าภายหลังดึงไฟล์จริงจาก Figma ได้ ให้แทนที่เฉพาะ path ในไฟล์นี้ได้เลย
 */

type IconProps = SVGProps<SVGSVGElement>;

/** ครอบ path ทุกอันด้วยค่า stroke มาตรฐานเดียวกัน */
function Stroke({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconHome(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M3.5 10.2 12 3.6l8.5 6.6v8.3a1.6 1.6 0 0 1-1.6 1.6H5.1a1.6 1.6 0 0 1-1.6-1.6z" />
      <path d="M9.4 20.1v-5.4a1 1 0 0 1 1-1h3.2a1 1 0 0 1 1 1v5.4" />
    </Stroke>
  );
}

export function IconMedal(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M8.3 2.8 11 8.3M15.7 2.8 13 8.3" />
      <circle cx="12" cy="14.7" r="6" />
      <path d="m12 11.5 1 2.05 2.26.33-1.63 1.6.38 2.25L12 16.66l-2.01 1.07.38-2.25-1.63-1.6 2.26-.33z" />
    </Stroke>
  );
}

export function IconCalendar(props: IconProps) {
  return (
    <Stroke {...props}>
      <rect x="3.2" y="5.1" width="17.6" height="15.7" rx="3.4" />
      <path d="M3.2 9.7h17.6M8.1 3.2v3.6M15.9 3.2v3.6" />
      <path d="M7.7 13.4h.01M12 13.4h.01M16.3 13.4h.01M7.7 17h.01M12 17h.01M16.3 17h.01" strokeWidth={2} />
    </Stroke>
  );
}

export function IconChartBar(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M3.4 20.6h17.2" />
      <rect x="4.6" y="12.2" width="4.5" height="8.4" rx="1.4" />
      <rect x="9.9" y="6.6" width="4.5" height="14" rx="1.4" />
      <rect x="15.2" y="9.8" width="4.5" height="10.8" rx="1.4" />
    </Stroke>
  );
}

export function IconGift(props: IconProps) {
  return (
    <Stroke {...props}>
      <rect x="3.2" y="8.3" width="17.6" height="4.3" rx="1.5" />
      <path d="M4.8 12.6v6.2a2 2 0 0 0 2 2h10.4a2 2 0 0 0 2-2v-6.2M12 8.3v12.5" />
      <path d="M12 8.3H8.2a2.4 2.4 0 1 1 0-4.8C10.6 3.5 12 8.3 12 8.3M12 8.3h3.8a2.4 2.4 0 1 0 0-4.8C13.4 3.5 12 8.3 12 8.3" />
    </Stroke>
  );
}

export function IconBell(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M6 10.3a6 6 0 1 1 12 0c0 3.1.7 4.9 1.4 5.9a.8.8 0 0 1-.66 1.26H5.26A.8.8 0 0 1 4.6 16.2c.7-1 1.4-2.8 1.4-5.9Z" />
      <path d="M9.7 20.2a2.5 2.5 0 0 0 4.6 0" />
    </Stroke>
  );
}

export function IconFlame(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M12 2.6c-.5 2.4-1.9 3.9-3.2 5.3C7.2 9.6 6 11.2 6 13.5a6 6 0 0 0 12 0c0-2.6-1.3-4.5-2.8-6.2-.7.7-1.4.9-1.9.7.7-2.1.2-4.1-1.3-5.4Z" />
      <path d="M12 20.3a2.7 2.7 0 0 0 2.7-2.7c0-1.3-.9-2.3-2.7-3.9-1.8 1.6-2.7 2.6-2.7 3.9a2.7 2.7 0 0 0 2.7 2.7Z" />
    </Stroke>
  );
}

export function IconTicket(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M3.2 9.1V7.4a2 2 0 0 1 2-2h13.6a2 2 0 0 1 2 2v1.7a2.9 2.9 0 0 0 0 5.8v1.7a2 2 0 0 1-2 2H5.2a2 2 0 0 1-2-2v-1.7a2.9 2.9 0 0 0 0-5.8Z" />
      <path d="M9.6 8.4v1.4M9.6 13.2v2.4" />
    </Stroke>
  );
}

export function IconTrophy(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M7.1 3.8h9.8v5.1a4.9 4.9 0 1 1-9.8 0z" />
      <path d="M7.1 5.4H4.9a1 1 0 0 0-1 1v.7a3.3 3.3 0 0 0 3.3 3.3M16.9 5.4h2.2a1 1 0 0 1 1 1v.7a3.3 3.3 0 0 1-3.3 3.3" />
      <path d="M12 13.8v3.4M8.6 20.2h6.8l-.8-3h-5.2z" />
    </Stroke>
  );
}

export function IconChevronRight(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="m9.5 5.5 6 6.5-6 6.5" />
    </Stroke>
  );
}

export function IconRun(props: IconProps) {
  return (
    <Stroke {...props}>
      <circle cx="16.1" cy="4.6" r="1.9" />
      <path d="m13.4 21-1.1-4.8 3-2.4-1.1-4.5-3.4 1.6-1.6 3" />
      <path d="m13.2 9.3-3.9-1.1-3.3 2.6M14.2 13.8l2.6 2.1 1.4 3.7" />
    </Stroke>
  );
}

export function IconBike(props: IconProps) {
  return (
    <Stroke {...props}>
      <circle cx="5.3" cy="16.6" r="3.6" />
      <circle cx="18.7" cy="16.6" r="3.6" />
      <circle cx="14.6" cy="4.9" r="1.6" />
      <path d="m5.3 16.6 4.2-4.5 2.8 2.3 1.4-4.3-3.1-1.6 3.4-1.7 2.2 2.6 2.4.8M18.7 16.6l-2.1-5.6" />
    </Stroke>
  );
}

export function IconSwim(props: IconProps) {
  return (
    <Stroke {...props}>
      <circle cx="17.2" cy="6.4" r="1.7" />
      <path d="m4.6 12.4 4.6-3.2 3.4 2.4-2.1 2.6" />
      <path d="m9.2 9.2 5.1-2.4" />
      <path d="M2.8 18.2c1.4 0 1.4 1.2 2.9 1.2s1.5-1.2 2.9-1.2 1.4 1.2 2.9 1.2 1.5-1.2 2.9-1.2 1.4 1.2 2.9 1.2 1.5-1.2 2.9-1.2" />
    </Stroke>
  );
}

export function IconUsers(props: IconProps) {
  return (
    <Stroke {...props}>
      <circle cx="9.6" cy="7.7" r="3.5" />
      <path d="M3.4 19.4a6.2 6.2 0 0 1 12.4 0" />
      <path d="M16.1 4.6a3.5 3.5 0 0 1 0 6.6M17.4 13.9a6.2 6.2 0 0 1 3.2 5.5" />
    </Stroke>
  );
}

export function IconRefresh(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M20.2 12a8.2 8.2 0 1 1-2.6-6" />
      <path d="M20.6 3.9v4.4h-4.4" />
    </Stroke>
  );
}

export function IconArrowUpRight(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M6.6 17.4 17.4 6.6M8.6 6.6h8.8v8.8" />
    </Stroke>
  );
}

export function IconClock(props: IconProps) {
  return (
    <Stroke {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.9V12l3.4 2.1" />
    </Stroke>
  );
}

export function IconClockHour4(props: IconProps) {
  return (
    <Stroke {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.2V12l3.6 2.6" />
      <path d="M12 3v1.4M21 12h-1.4M12 21v-1.4M3 12h1.4" />
    </Stroke>
  );
}

/** ไอคอนสายฟ้าแบบทึบ (icon/boltFilled ใน Figma) */
export function IconBoltFilled(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.3 2.2a.6.6 0 0 1 1.05.52l-1.2 6.06h4.5a.7.7 0 0 1 .53 1.15l-8.48 12a.6.6 0 0 1-1.06-.5l1.2-6.08h-4.5a.7.7 0 0 1-.53-1.15z" />
    </svg>
  );
}

export function IconStrava(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M10.6 2 4.3 14.3h3.72L10.6 9.2l2.55 5.1h3.7z" />
      <path d="m16.3 14.3-1.86 3.62-1.84-3.62h-2.8L14.44 22l3.86-7.7z" opacity={0.75} />
    </svg>
  );
}

export function IconApple(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.3 12.7c0-2.2 1.8-3.3 1.9-3.3-1-1.5-2.6-1.7-3.2-1.8-1.4-.1-2.7.8-3.3.8s-1.7-.8-2.8-.8c-1.5 0-2.8.8-3.5 2.1-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.7 2.2s1.5-.7 2.8-.7 1.7.7 2.8.7 1.9-1 2.6-2.1c.8-1.2 1.2-2.4 1.2-2.4s-2.3-.9-2.3-3.3" />
      <path d="M14.3 6.2c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.5 1.3-.6.6-1 1.6-.9 2.6 1 .1 2-.5 2.5-1.2" />
    </svg>
  );
}

export function IconSignal(props: IconProps) {
  return (
    <svg viewBox="0 0 17 11" fill="currentColor" aria-hidden="true" {...props}>
      <rect x="0" y="7.5" width="3" height="3.5" rx="1" />
      <rect x="4.7" y="5" width="3" height="6" rx="1" />
      <rect x="9.3" y="2.5" width="3" height="8.5" rx="1" />
      <rect x="14" y="0" width="3" height="11" rx="1" />
    </svg>
  );
}

export function IconWifi(props: IconProps) {
  return (
    <svg viewBox="0 0 15 11" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
      <path d="M1 3.8a9.5 9.5 0 0 1 13 0" strokeWidth={1.6} strokeLinecap="round" />
      <path d="M3.5 6.6a6 6 0 0 1 8 0" strokeWidth={1.6} strokeLinecap="round" />
      <path d="M6 9.3a2.4 2.4 0 0 1 3 0" strokeWidth={1.6} strokeLinecap="round" />
    </svg>
  );
}

export function IconBattery(props: IconProps) {
  return (
    <svg viewBox="0 0 24 11" fill="none" aria-hidden="true" {...props}>
      <rect x="0.6" y="0.6" width="20" height="9.8" rx="3" stroke="currentColor" strokeOpacity={0.4} strokeWidth={1} />
      <rect x="2.2" y="2.2" width="16.2" height="6.6" rx="1.8" fill="currentColor" />
      <path d="M22.2 4v3a2 2 0 0 0 0-3Z" fill="currentColor" fillOpacity={0.5} />
    </svg>
  );
}
