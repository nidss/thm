import type { SVGProps } from 'react';

/*
 * ไอคอนจาก Lucide (lucide.dev) — คนละชุดกับ icons.tsx ที่เป็น HugeIcons
 * จึงแยกไฟล์ไว้ไม่ให้ปนกัน เพราะ Lucide วาดบนกริด 24 และใช้ strokeWidth 2
 * ส่วน HugeIcons ใช้ 1.5 ถ้าเอามารวมกันจะดูน้ำหนักเส้นไม่เท่ากัน
 *
 * ใช้กับปุ่มเปิด/ปิดการมองเห็นรหัสผ่านใน Field / DarkField
 * path คัดลอกมาจากไฟล์ต้นทางของ Lucide ตรง ๆ (icons/eye.svg, icons/eye-off.svg)
 */

type IconProps = SVGProps<SVGSVGElement>;

const BASE = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
} as const;

/** lucide/eye — สถานะ "กำลังแสดงรหัสผ่าน" */
export function IconEye(props: IconProps) {
  return (
    <svg {...BASE} {...props}>
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

/** lucide/eye-off — สถานะ "ซ่อนรหัสผ่านอยู่" */
export function IconEyeOff(props: IconProps) {
  return (
    <svg {...BASE} {...props}>
      <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
      <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
      <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
      <path d="m2 2 20 20" />
    </svg>
  );
}
