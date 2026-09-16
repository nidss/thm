import type { SVGProps } from 'react';

/*
 * ไอคอนทั้งหมดในไฟล์นี้ถูก generate จากไฟล์ SVG จริงที่ export มาจาก Figma
 * (ชุด HugeIcons stroke-rounded) — อย่าแก้ path ด้วยมือ
 * ถ้าจะเพิ่ม/อัปเดตไอคอน ให้เอาไฟล์ .svg ใหม่มาแล้ว generate ไฟล์นี้ใหม่
 *
 * สีตายตัว (stroke/fill="white") ถูกเปลี่ยนเป็น currentColor แล้ว
 * จึงกำหนดสีผ่าน class ของ Tailwind ได้ตามปกติ เช่น className="size-6 text-primary"
 */

type IconProps = SVGProps<SVGSVGElement>;

export function IconActivity(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4.31802 19.682C3 18.364 3 16.2426 3 12C3 7.75736 3 5.63604 4.31802 4.31802C5.63604 3 7.75736 3 12 3C16.2426 3 18.364 3 19.682 4.31802C21 5.63604 21 7.75736 21 12C21 16.2426 21 18.364 19.682 19.682C18.364 21 16.2426 21 12 21C7.75736 21 5.63604 21 4.31802 19.682Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 14L9.79289 11.2071C10.1834 10.8166 10.8166 10.8166 11.2071 11.2071L12.7929 12.7929C13.1834 13.1834 13.8166 13.1834 14.2071 12.7929L17 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconAntenna(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M18.5 19C18.9659 19 19.1989 19 19.3827 18.9239C19.6277 18.8224 19.8224 18.6277 19.9239 18.3827C20 18.1989 20 17.9659 20 17.5V6.5C20 6.03406 20 5.80109 19.9239 5.61732C19.8224 5.37229 19.6277 5.17761 19.3827 5.07612C19.1989 5 18.9659 5 18.5 5M18.5 19C18.0341 19 17.8011 19 17.6173 18.9239C17.3723 18.8224 17.1776 18.6277 17.0761 18.3827C17 18.1989 17 17.9659 17 17.5V6.5C17 6.03406 17 5.80109 17.0761 5.61732C17.1776 5.37229 17.3723 5.17761 17.6173 5.07612C17.8011 5 18.0341 5 18.5 5M18.5 19V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 19C12.4659 19 12.6989 19 12.8827 18.9239C13.1277 18.8224 13.3224 18.6277 13.4239 18.3827C13.5 18.1989 13.5 17.9659 13.5 17.5V9.5C13.5 9.03406 13.5 8.80109 13.4239 8.61732C13.3224 8.37229 13.1277 8.17761 12.8827 8.07612C12.6989 8 12.4659 8 12 8M12 19C11.5341 19 11.3011 19 11.1173 18.9239C10.8723 18.8224 10.6776 18.6277 10.5761 18.3827C10.5 18.1989 10.5 17.9659 10.5 17.5V9.5C10.5 9.03406 10.5 8.80109 10.5761 8.61732C10.6776 8.37229 10.8723 8.17761 11.1173 8.07612C11.3011 8 11.5341 8 12 8M12 19V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 19C5.96594 19 6.19891 19 6.38268 18.9239C6.62771 18.8224 6.82239 18.6277 6.92388 18.3827C7 18.1989 7 17.9659 7 17.5V13.5C7 13.0341 7 12.8011 6.92388 12.6173C6.82239 12.3723 6.62771 12.1776 6.38268 12.0761C6.19891 12 5.96594 12 5.5 12M5.5 19C5.03406 19 4.80109 19 4.61732 18.9239C4.37229 18.8224 4.17761 18.6277 4.07612 18.3827C4 18.1989 4 17.9659 4 17.5V13.5C4 13.0341 4 12.8011 4.07612 12.6173C4.17761 12.3723 4.37229 12.1776 4.61732 12.0761C4.80109 12 5.03406 12 5.5 12M5.5 19V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconApple(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 5.75C12 3.75 13.5 1.75 15.5 1.75C15.5 3.75 14 5.75 12 5.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12.5 8.09001C11.9851 8.09001 11.5867 7.92646 11.1414 7.74368C10.5776 7.51225 9.93875 7.25 8.89334 7.25C7.02235 7.25 4 8.74945 4 12.7495C4 17.4016 7.10471 22.25 9.10471 22.25C9.77426 22.25 10.3775 21.9871 10.954 21.7359C11.4815 21.5059 11.9868 21.2857 12.5 21.2857C13.0132 21.2857 13.5185 21.5059 14.046 21.7359C14.6225 21.9871 15.2257 22.25 15.8953 22.25C17.2879 22.25 18.9573 19.8992 20 16.9008C18.3793 16.2202 17.338 14.618 17.338 12.75C17.338 11.121 18.2036 10.0398 19.5 9.25C18.5 7.75 17.0134 7.25 15.9447 7.25C14.8993 7.25 14.2604 7.51225 13.6966 7.74368C13.2514 7.92646 13.0149 8.09001 12.5 8.09001Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconArrowLeft(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconArrowUpRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8924 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconBarbell(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M16 8C15.7562 8.73137 15.2546 9.29277 14.5446 9.60753C12.2642 10.6185 10.6185 12.2642 9.60753 14.5446C9.29277 15.2546 8.73137 15.7562 8 16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M3.2 20.8L2 22M20.8 3.2L22 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.7881 2.422L16.2759 3.87515L20.1165 7.75162L21.5941 6.31689C22.0376 5.7945 22.1734 5.40098 21.6213 4.67621L20.5155 3.51329L19.3945 2.40749C18.6779 1.76473 18.1135 2.11058 17.7881 2.422Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.0115 3.75756C15.1221 2.58374 15.8827 3.41916 16.2733 3.88435L20.081 7.70732C20.5549 8.08726 21.4219 8.81622 20.276 9.9513C20.0911 10.1345 19.9098 10.3263 19.7089 10.4916C18.967 11.1019 18.255 10.596 17.8777 10.1311L14.002 6.25538C13.5939 5.88882 12.8888 5.22467 13.4843 4.33689C13.6448 4.13201 13.8326 3.94661 14.0115 3.75756Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.58743 21.6202L3.44609 20.4922L2.36213 19.35C1.71891 18.7068 2.09 18.0635 2.40765 17.7442L3.88972 16.2603L7.74631 20.1336L6.22834 21.6247C5.69748 22.058 5.33348 22.1907 4.6195 21.6247M6.22333 13.9244C5.83272 13.4592 5.07209 12.6238 3.96149 13.7976C3.78262 13.9866 3.59481 14.172 3.43432 14.3769C2.83883 15.2647 3.54386 15.9289 3.95194 16.2954L7.82772 20.1711C8.20497 20.636 8.91698 21.1419 9.65885 20.5316C9.85984 20.3663 10.0411 20.1745 10.226 19.9913C11.3719 18.8563 10.5049 18.1273 10.031 17.7474L6.22333 13.9244Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconBattery(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M2 12C2 9.17157 2 7.75736 2.87868 6.87868C3.75736 6 5.17157 6 8 6H13C15.8284 6 17.2426 6 18.1213 6.87868C19 7.75736 19 9.17157 19 12C19 14.8284 19 16.2426 18.1213 17.1213C17.2426 18 15.8284 18 13 18H8C5.17157 18 3.75736 18 2.87868 17.1213C2 16.2426 2 14.8284 2 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19 9.5L20.0272 9.6712C20.7085 9.78475 21.0491 9.84152 21.3076 10.0067C21.5618 10.1691 21.7612 10.4044 21.8796 10.6819C22 10.964 22 11.3093 22 12C22 12.6907 22 13.036 21.8796 13.3181C21.7612 13.5956 21.5618 13.8309 21.3076 13.9933C21.0491 14.1585 20.7085 14.2153 20.0272 14.3288L19 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 10V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 10V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 10V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M15 10V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconBell(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M16 18C16 20.2091 14.2091 22 12 22C9.79086 22 8 20.2091 8 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.43654 18H19.5625C20.2903 18 20.6542 18 20.8648 17.8951C21.274 17.6913 21.4929 17.2359 21.3964 16.789C21.3468 16.559 21.1194 16.2749 20.6648 15.7066L20.4951 15.4944C20.0392 14.9246 19.8113 14.6397 19.6184 14.3409C19.0187 13.4119 18.6477 12.354 18.5356 11.254C18.4995 10.9002 18.4995 10.5353 18.4995 9.8056V8.5C18.4995 8.03572 18.4995 7.80358 18.4867 7.60758C18.2898 4.60304 15.8965 2.20977 12.892 2.01285C12.696 2 12.4638 2 11.9995 2C11.5353 2 11.3031 2 11.1071 2.01285C8.10258 2.20977 5.70931 4.60304 5.51239 7.60758C5.49954 7.80358 5.49954 8.03572 5.49954 8.5V9.8056C5.49954 10.5353 5.49954 10.9002 5.46349 11.254C5.35143 12.354 4.98035 13.4119 4.38067 14.3409C4.18779 14.6397 3.95985 14.9246 3.50401 15.4944L3.33427 15.7066C2.87964 16.2749 2.65233 16.559 2.60268 16.789C2.50621 17.2359 2.72509 17.6913 3.13431 17.8951C3.3449 18 3.70878 18 4.43654 18Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconBike(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6 20.0027C8.20914 20.0027 10 18.2119 10 16.0027C10 13.7936 8.20914 12.0027 6 12.0027C3.79086 12.0027 2 13.7936 2 16.0027C2 18.2119 3.79086 20.0027 6 20.0027Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 20.0027C20.2091 20.0027 22 18.2119 22 16.0027C22 13.7936 20.2091 12.0027 18 12.0027C15.7909 12.0027 14 13.7936 14 16.0027C14 18.2119 15.7909 20.0027 18 20.0027Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 16.0027H10.3706C10.7302 16.0027 11.0622 15.8096 11.2399 15.4969L15.5 8.00269" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 13.0027L7 7.00269M7 7.00269H5M7 7.00269H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20.0039 6.21862C19.7999 5.64262 19.4399 4.74262 18.2399 4.32262C17.4599 4.02262 15.5399 3.90262 15.2999 4.08262C14.9527 4.16943 14.9399 4.56262 15.1079 5.10262C15.2444 5.68157 15.4559 6.42818 15.6479 7.14262C16.1399 8.97342 17.2199 12.9386 18.0239 15.9986" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconBoltFilled(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M10.0437 21H13.9563C15.6662 21 16.5211 21 17.2206 20.5856C17.9201 20.1712 18.3353 19.4188 19.1657 17.9139L20.8211 14.9139C21.607 13.4895 22 12.7774 22 12C22 11.2226 21.607 10.5105 20.8211 9.08614L19.1657 6.08614C18.3353 4.58123 17.9201 3.82877 17.2206 3.41439C16.5211 3 15.6662 3 13.9563 3H10.0437C8.33384 3 7.47888 3 6.77939 3.41439C6.0799 3.82877 5.6647 4.58123 4.83429 6.08614L3.1789 9.08614C2.39297 10.5105 2 11.2226 2 12C2 12.7774 2.39297 13.4895 3.1789 14.9139L4.83429 17.9139C5.6647 19.4188 6.0799 20.1712 6.77939 20.5856C7.47888 21 8.33384 21 10.0437 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconChartBar(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 15V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 9V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 22H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 13V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.60009 8.79993C5.23521 8.31419 4.6543 8 4 8C2.89543 8 2 8.89543 2 10C2 11.1046 2.89543 12 4 12C5.10457 12 6 11.1046 6 10C6 9.54973 5.8512 9.13421 5.60009 8.79993ZM5.60009 8.79993L10.3999 5.20007M13.7892 4.89462C13.9241 4.62543 14 4.32158 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4C10 4.45027 10.1488 4.86579 10.3999 5.20007C10.7648 5.68581 11.3457 6 12 6C12.783 6 13.4609 5.55006 13.7892 4.89462ZM13.7892 4.89462L18.2108 7.10538M18.2108 7.10538C18.0759 7.37457 18 7.67842 18 8C18 9.10457 18.8954 10 20 10C21.1046 10 22 9.10457 22 8C22 6.89543 21.1046 6 20 6C19.217 6 18.5391 6.44994 18.2108 7.10538Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M5 13.2592L7.58583 15.9568C8.2525 16.6523 8.58583 17 9.00004 17C9.41425 17 9.74759 16.6523 10.4143 15.9568L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconChevronRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M9.00005 18C9.00005 18 15 13.5811 15 12C15 10.4188 9 6 9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconClock(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconClockHour4(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M20.5 12.5C20.5 17.1944 16.6944 21 12 21C7.30558 21 3.5 17.1944 3.5 12.5C3.5 7.80558 7.30558 4 12 4C16.6944 4 20.5 7.80558 20.5 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.88 18.7031L3.5 21.0031" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.1399 18.668L20.4999 20.998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 3L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 6L19 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 8V12.5L14 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconDots(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6.00452 12.5V12M18.0045 12.5V12M12.0045 12.5V12M7.00452 12.5C7.00452 11.9477 6.5568 11.5 6.00452 11.5C5.45223 11.5 5.00452 11.9477 5.00452 12.5C5.00452 13.0523 5.45223 13.5 6.00452 13.5C6.5568 13.5 7.00452 13.0523 7.00452 12.5ZM19.0045 12.5C19.0045 11.9477 18.5568 11.5 18.0045 11.5C17.4522 11.5 17.0045 11.9477 17.0045 12.5C17.0045 13.0523 17.4522 13.5 18.0045 13.5C18.5568 13.5 19.0045 13.0523 19.0045 12.5ZM13.0045 12.5C13.0045 11.9477 12.5568 11.5 12.0045 11.5C11.4522 11.5 11.0045 11.9477 11.0045 12.5C11.0045 13.0523 11.4522 13.5 12.0045 13.5C12.5568 13.5 13.0045 13.0523 13.0045 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconEye(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M2 8C2 8 6.47715 3 12 3C17.5228 3 22 8 22 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M21.544 13.045C21.848 13.4713 22 13.6845 22 14C22 14.3155 21.848 14.5287 21.544 14.955C20.1779 16.8706 16.6892 21 12 21C7.31078 21 3.8221 16.8706 2.45604 14.955C2.15201 14.5287 2 14.3155 2 14C2 13.6845 2.15201 13.4713 2.45604 13.045C3.8221 11.1294 7.31078 7 12 7C16.6892 7 20.1779 11.1294 21.544 13.045Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15 14C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14C9 15.6569 10.3431 17 12 17C13.6569 17 15 15.6569 15 14Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconFlame(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 21.25C16.1421 21.25 19.5 17.8669 19.5 13.6935C19.5 12.8913 19.5 12.089 19.2756 11.0606C19.1017 10.2635 19.0147 9.86498 18.7651 9.64636C18.5475 9.45581 18.3598 9.38913 18.0717 9.39998C17.7412 9.41242 17.1956 9.85347 16.1046 10.7356C16.0227 10.8018 15.9817 10.8349 15.7137 10.8321C15.5671 10.8306 15.2736 10.7004 15.1735 10.5925C14.9905 10.3952 14.9807 10.2443 14.9611 9.94242C14.7677 6.95746 13.8802 5.00687 12.9275 3.77389C12.393 3.08206 12.1257 2.73615 11.6196 2.75042C11.1135 2.7647 10.7283 3.32541 9.9578 4.44682C8.04184 7.23538 4.5 8.84241 4.5 13.6935C4.5 17.8669 7.85786 21.25 12 21.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 17.432C16 19.5407 14.2091 21.2501 12 21.2501C9.79086 21.2501 8 19.5407 8 17.432C8 16.3392 9.07446 14.8337 10.1096 13.6368C10.9149 12.7058 11.3175 12.2402 12 12.2402C12.6825 12.2402 13.0851 12.7058 13.8904 13.6368C14.9255 14.8337 16 16.3392 16 17.432Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconGift(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 11V15C4 18.2998 4 19.9497 5.02513 20.9749C6.05025 22 7.70017 22 11 22H13C16.2998 22 17.9497 22 18.9749 20.9749C20 19.9497 20 18.2998 20 15V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 9C3 8.25231 3 7.87846 3.20096 7.6C3.33261 7.41758 3.52197 7.26609 3.75 7.16077C4.09808 7 4.56538 7 5.5 7H18.5C19.4346 7 19.9019 7 20.25 7.16077C20.478 7.26609 20.6674 7.41758 20.799 7.6C21 7.87846 21 8.25231 21 9C21 9.74769 21 10.1215 20.799 10.4C20.6674 10.5824 20.478 10.7339 20.25 10.8392C19.9019 11 19.4346 11 18.5 11H5.5C4.56538 11 4.09808 11 3.75 10.8392C3.52197 10.7339 3.33261 10.5824 3.20096 10.4C3 10.1215 3 9.74769 3 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6 3.78571C6 2.79949 6.79949 2 7.78571 2H8.14286C10.2731 2 12 3.7269 12 5.85714V7H9.21429C7.43908 7 6 5.56091 6 3.78571Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M18 3.78571C18 2.79949 17.2005 2 16.2143 2H15.8571C13.7269 2 12 3.7269 12 5.85714V7H14.7857C16.5609 7 18 5.56091 18 3.78571Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 11V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconGiftFilled(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 11V15C4 18.2998 4 19.9497 5.02513 20.9749C6.05025 22 7.70017 22 11 22H13C16.2998 22 17.9497 22 18.9749 20.9749C20 19.9497 20 18.2998 20 15V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 9C3 8.25231 3 7.87846 3.20096 7.6C3.33261 7.41758 3.52197 7.26609 3.75 7.16077C4.09808 7 4.56538 7 5.5 7H18.5C19.4346 7 19.9019 7 20.25 7.16077C20.478 7.26609 20.6674 7.41758 20.799 7.6C21 7.87846 21 8.25231 21 9C21 9.74769 21 10.1215 20.799 10.4C20.6674 10.5824 20.478 10.7339 20.25 10.8392C19.9019 11 19.4346 11 18.5 11H5.5C4.56538 11 4.09808 11 3.75 10.8392C3.52197 10.7339 3.33261 10.5824 3.20096 10.4C3 10.1215 3 9.74769 3 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6 3.78571C6 2.79949 6.79949 2 7.78571 2H8.14286C10.2731 2 12 3.7269 12 5.85714V7H9.21429C7.43908 7 6 5.56091 6 3.78571Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M18 3.78571C18 2.79949 17.2005 2 16.2143 2H15.8571C13.7269 2 12 3.7269 12 5.85714V7H14.7857C16.5609 7 18 5.56091 18 3.78571Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 11V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconGoogle(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 12H17C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C13.3807 7 14.6307 7.55964 15.5355 8.46447" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconHeartHandshake(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M19.6692 14.6692C21.01 12.9629 22 11.0686 22 9.19444C22 6.32563 19.8947 4 17 4C15.5 4 14 4.5 12 6.5C10 4.5 8.5 4 7 4C4.10526 4 2 6.32563 2 9.19444C2 14.2666 9.25143 19.4872 11.0835 20.7252C11.3541 20.9081 11.6734 21 12 21C12.3266 21 12.6459 20.9081 12.9165 20.7252C13.0217 20.6541 13.1449 20.5699 13.2835 20.4732C14.2796 19.7789 14.3586 18.3586 13.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M18.5 11L19.49 11.99C20.1988 12.6988 20.3483 13.795 19.7336 14.5868C18.9878 15.5474 17.5632 15.5632 16.7032 14.7032L16.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.5 14.5L16.6942 14.6942C17.5691 15.5691 17.51 17.0612 16.5833 17.8811C15.7193 18.6455 14.4965 18.4965 13.6808 17.6808L13.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.0002 6.5L9.25019 9.25C8.55983 9.94036 8.55983 11.0596 9.25019 11.75C9.94055 12.4404 11.0598 12.4404 11.7502 11.75L13.5002 10C14.0454 9.45475 14.3181 9.18212 14.6122 9.03639C15.1717 8.75911 15.8287 8.75911 16.3882 9.03639C16.6823 9.18212 16.9549 9.45475 17.5002 10L19.0002 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconHeartbeat(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M10.4107 19.9677C7.58942 17.858 2 13.0348 2 8.69444C2 5.82563 4.10526 3.5 7 3.5C8.5 3.5 10 4 12 6C14 4 15.5 3.5 17 3.5C19.8947 3.5 22 5.82563 22 8.69444C22 13.0348 16.4106 17.858 13.5893 19.9677C12.6399 20.6776 11.3601 20.6776 10.4107 19.9677Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20.001 13.0001H16.0288C15.8168 13.0001 15.7107 13.0001 15.619 12.9639C15.5691 12.9442 15.5229 12.9169 15.4821 12.8831C15.4072 12.8209 15.3598 12.7303 15.2649 12.5491C14.9921 12.0278 14.8557 11.7672 14.6597 11.7045C14.5567 11.6716 14.4453 11.6716 14.3422 11.7045C14.1462 11.7672 14.0098 12.0278 13.737 12.5491L13.1172 13.7335C12.6442 14.6372 12.4078 15.089 12.0706 15.0624C11.7335 15.0357 11.578 14.5529 11.267 13.5872L10.8024 12.1447C10.4668 11.1027 10.299 10.5817 9.95039 10.5639C9.60176 10.5462 9.377 11.0472 8.92748 12.0493L8.76073 12.4211C8.63475 12.7019 8.57176 12.8423 8.44652 12.9212C8.32129 13.0001 8.16139 13.0001 7.84158 13.0001H4.00098" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconHelpCircle(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.5 9.5C9.5 8.11929 10.6193 7 12 7C13.3807 7 14.5 8.11929 14.5 9.5C14.5 10.3569 14.0689 11.1131 13.4117 11.5636C12.7283 12.0319 12 12.6716 12 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.125 16.75H12M12.25 16.75C12.25 16.8881 12.1381 17 12 17C11.8619 17 11.75 16.8881 11.75 16.75C11.75 16.6119 11.8619 16.5 12 16.5C12.1381 16.5 12.25 16.6119 12.25 16.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconHistory(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M3.49902 14.9656C4.72475 18.4791 8.06749 21 11.999 21C16.9696 21 20.999 16.9706 20.999 12C20.999 7.02944 16.9696 3 11.999 3C8.29827 3 4.8984 5.6756 3.68943 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.999 7V12L14.999 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.49744 8.74363C7.49744 8.74363 3.81381 9.3026 3.2548 8.7436C2.69578 8.1846 3.25481 4.50098 3.25481 4.50098" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconHome(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M3 11.9896V14.5C3 17.7998 3 19.4497 4.02513 20.4749C5.05025 21.5 6.70017 21.5 10 21.5H14C17.2998 21.5 18.9497 21.5 19.9749 20.4749C21 19.4497 21 17.7998 21 14.5V11.9896C21 10.3083 21 9.46773 20.6441 8.74005C20.2882 8.01237 19.6247 7.49628 18.2976 6.46411L16.2976 4.90855C14.2331 3.30285 13.2009 2.5 12 2.5C10.7991 2.5 9.76689 3.30285 7.70242 4.90855L5.70241 6.46411C4.37533 7.49628 3.71179 8.01237 3.3559 8.74005C3 9.46773 3 10.3083 3 11.9896Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconHomeFilled(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M3 11.9896V14.5C3 17.7998 3 19.4497 4.02513 20.4749C5.05025 21.5 6.70017 21.5 10 21.5H14C17.2998 21.5 18.9497 21.5 19.9749 20.4749C21 19.4497 21 17.7998 21 14.5V11.9896C21 10.3083 21 9.46773 20.6441 8.74005C20.2882 8.01237 19.6247 7.49628 18.2976 6.46411L16.2976 4.90855C14.2331 3.30285 13.2009 2.5 12 2.5C10.7991 2.5 9.76689 3.30285 7.70242 4.90855L5.70241 6.46411C4.37533 7.49628 3.71179 8.01237 3.3559 8.74005C3 9.46773 3 10.3083 3 11.9896Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMinus(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M20 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPlus(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M11.9922 4V20M19.9922 12H3.99219" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconRefresh(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M20.4879 15C19.2524 18.4956 15.9187 21 12 21C7.02943 21 3 16.9706 3 12C3 7.02943 7.02943 3 12 3C15.7292 3 18.9286 5.26806 20.2941 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 9H18C19.4142 9 20.1213 9 20.5607 8.56066C21 8.12132 21 7.41421 21 6V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconRun(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M17 4.5C17 5.32843 16.3284 6 15.5 6C14.6716 6 14 5.32843 14 4.5C14 3.67157 14.6716 3 15.5 3C16.3284 3 17 3.67157 17 4.5Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15 21.0008L14.3359 18.3848C14.1161 17.5191 13.6615 16.7284 13.0207 16.0974L11.5 14.5998M11.5 14.5998C10.4922 13.8059 9.98834 13.409 9.79313 12.8784C9.70617 12.642 9.66463 12.3914 9.67069 12.1397C9.68429 11.5745 10.0332 11.0362 10.7309 9.95956L12 8.00136M11.5 14.5998L15 9.27743M20 8.19913C17.9627 10.4921 16.1547 10.1433 15 9.27743M15 9.27743C14.8878 9.19326 14.7664 9.06672 14.6482 8.92548C14.2356 8.43256 14.0293 8.18609 13.8282 8.09214C13.6271 7.99818 13.3747 7.99813 12.8698 7.99805C12.5444 7.99799 12.2186 7.99877 12 8.00136M12 8.00136C8.53767 8.0423 7 9.18366 6 11.1534" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 17.7303L4.67822 17.8916C6.40663 18.3028 8.20324 17.5164 9 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconSettings(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M20.7906 9.15201C21.5969 10.5418 22 11.2366 22 12C22 12.7634 21.5969 13.4582 20.7906 14.848L18.8669 18.1638C18.0638 19.548 17.6623 20.2402 17.0019 20.6201C16.3416 21 15.5402 21 13.9373 21H10.0627C8.45982 21 7.6584 21 6.99807 20.6201C6.33774 20.2402 5.93619 19.548 5.13311 18.1638L3.20942 14.848C2.40314 13.4582 2 12.7634 2 12C2 11.2366 2.40314 10.5418 3.20942 9.152L5.13311 5.83621C5.93619 4.45196 6.33774 3.75984 6.99807 3.37992C7.6584 3 8.45982 3 10.0627 3H13.9373C15.5402 3 16.3416 3 17.0019 3.37992C17.6623 3.75984 18.0638 4.45197 18.8669 5.83622L20.7906 9.15201Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 8L15 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconShieldCheck(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M20.9922 11.1833V8.28029C20.9922 6.64029 20.9922 5.82028 20.5881 5.28529C20.184 4.75029 19.2703 4.49056 17.4429 3.9711C16.1944 3.6162 15.0938 3.18863 14.2145 2.79829C13.0156 2.2661 12.4161 2 11.9922 2C11.5682 2 10.9688 2.2661 9.7699 2.79829C8.89057 3.18863 7.79002 3.61619 6.54152 3.9711C4.71411 4.49056 3.80041 4.75029 3.3963 5.28529C2.99219 5.82028 2.99219 6.64029 2.99219 8.28029V11.1833C2.99219 16.8085 8.05496 20.1835 10.5861 21.5194C11.1932 21.8398 11.4968 22 11.9922 22C12.4876 22 12.7911 21.8398 13.3982 21.5194C15.9294 20.1835 20.9922 16.8085 20.9922 11.1833Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8.49219 11.8333C8.49219 11.8333 9.36719 11.8333 10.2422 13.5C10.2422 13.5 13.0216 9.33333 15.4922 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconStrava(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12.4059 18.9923C13.4443 19.7399 13.9635 20.1137 14.5623 20.3069C15.1611 20.5 15.8008 20.5 17.0804 20.5H19C20.4142 20.5 21.1213 20.5 21.5607 20.0607C22 19.6213 22 18.9142 22 17.5H16.7902C16.1504 17.5 15.8305 17.5 15.5311 17.4034C15.2318 17.3069 14.9722 17.12 14.453 16.7461L3 8.5L2.30911 9.53634C2.10755 9.83867 2 10.1939 2 10.5572C2 11.1492 2.2847 11.705 2.76507 12.0509L12.4059 18.9923Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 8.5L6 3.5L6.30704 5.34226C6.42827 6.06965 6.89023 6.69511 7.5498 7.0249C8.64393 7.57197 9.97486 7.16899 10.5818 6.10689L11.1396 5.13069C11.3625 4.74069 11.7772 4.5 12.2264 4.5C12.7005 4.5 13.1339 4.76787 13.346 5.19193L17.2764 13.0528C17.4134 13.3269 17.6936 13.5 18 13.5C20.2091 13.5 22 15.2909 22 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.5 9.5L14.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 12L16 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 20.5H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 17.5H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconSwim(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M10.7184 6.8618L15 16C12.8333 16 12.1739 14.8571 9.91304 13.7143C8.10435 12.8 5.57971 12.9524 4.82609 13.1429L7.85739 10.9998C8.16585 10.7817 8.32008 10.6727 8.36937 10.5067C8.41866 10.3407 8.34893 10.1651 8.20947 9.81409L7.78519 8.74596C7.62654 8.34656 7.54721 8.14686 7.40384 8.002C7.35388 7.95153 7.2987 7.90653 7.23922 7.86775C7.06848 7.75643 6.8569 7.7189 6.43376 7.64382L3.18315 7.06709C2.4987 6.94565 2 6.35068 2 5.65554C2 4.78225 2.77418 4.11184 3.63851 4.23668L8.0343 4.87155C8.82604 4.98589 9.22191 5.04307 9.5521 5.2318C9.68974 5.31048 9.81754 5.40524 9.93281 5.5141C10.2093 5.77523 10.379 6.13742 10.7184 6.8618Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 13C20.6569 13 22 11.6569 22 10C22 8.34315 20.6569 7 19 7C17.3431 7 16 8.34315 16 10C16 11.6569 17.3431 13 19 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 18.0843C3.05556 14.5527 7.7685 16.1736 11.5 18.0843C15.2315 19.995 19 21.2108 21 18.0843" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconTarget(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 2.20004C13.3538 2.06886 12.6849 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12.0303 11.9624L16.5832 7.40949M19.7404 4.34451L19.1872 2.35737C19.0853 2.03 18.6914 1.89954 18.4259 2.11651C16.9898 3.29007 15.4254 4.8708 16.703 7.36408C19.2771 8.56444 20.7466 6.94573 21.8733 5.58519C22.0975 5.31449 21.9623 4.90756 21.6247 4.80994L19.7404 4.34451Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconTicket(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M2.46433 9.34375C2.21579 9.34375 1.98899 9.14229 2.00041 8.87895C2.06733 7.33687 2.25481 6.33298 2.78008 5.53884C3.08228 5.08196 3.45765 4.68459 3.88923 4.36468C5.05575 3.5 6.70139 3.5 9.99266 3.5H14.0074C17.2986 3.5 18.9443 3.5 20.1108 4.36468C20.5424 4.68459 20.9177 5.08196 21.2199 5.53884C21.7452 6.33289 21.9327 7.33665 21.9996 8.87843C22.011 9.14208 21.7839 9.34375 21.5351 9.34375C20.1493 9.34375 19.0259 10.533 19.0259 12C19.0259 13.467 20.1493 14.6562 21.5351 14.6562C21.7839 14.6562 22.011 14.8579 21.9996 15.1216C21.9327 16.6634 21.7452 17.6671 21.2199 18.4612C20.9177 18.918 20.5424 19.3154 20.1108 19.6353C18.9443 20.5 17.2986 20.5 14.0074 20.5H9.99266C6.70139 20.5 5.05575 20.5 3.88923 19.6353C3.45765 19.3154 3.08228 18.918 2.78008 18.4612C2.25481 17.667 2.06733 16.6631 2.00041 15.1211C1.98899 14.8577 2.21579 14.6562 2.46433 14.6562C3.85012 14.6562 4.97352 13.467 4.97352 12C4.97352 10.533 3.85012 9.34375 2.46433 9.34375Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 3.5V20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconTrophy(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 15V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 5H5.58088C5.03886 5 4.76785 5 4.55944 5.10228C4.36064 5.19984 4.19984 5.36064 4.10228 5.55944C4 5.76785 4 6.03886 4 6.58088C4 7.6579 4 8.19641 4.16249 8.66982C4.31812 9.12325 4.58015 9.53278 4.92663 9.8641C5.28837 10.21 5.77732 10.4357 6.7552 10.887L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 5H18.4191C18.9611 5 19.2322 5 19.4406 5.10228C19.6394 5.19984 19.8002 5.36064 19.8977 5.55944C20 5.76785 20 6.03886 20 6.58088C20 7.6579 20 8.19641 19.8375 8.66982C19.6819 9.12325 19.4198 9.53278 19.0734 9.8641C18.7116 10.21 18.2227 10.4357 17.2448 10.887L17 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 4.88889C7 4.06119 7 3.64735 7.12061 3.31596C7.32281 2.76043 7.76043 2.32281 8.31596 2.12061C8.64735 2 9.06119 2 9.88889 2H14.1111C14.9388 2 15.3527 2 15.684 2.12061C16.2396 2.32281 16.6772 2.76043 16.8794 3.31596C17 3.64735 17 4.06119 17 4.88889V10C17 12.7614 14.7614 15 12 15C9.23858 15 7 12.7614 7 10V4.88889Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 22C8 21.0681 8 20.6022 8.15224 20.2346C8.35523 19.7446 8.74458 19.3552 9.23463 19.1522C9.60218 19 10.0681 19 11 19H13C13.9319 19 14.3978 19 14.7654 19.1522C15.2554 19.3552 15.6448 19.7446 15.8478 20.2346C16 20.6022 16 21.0681 16 22H8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconUser(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M20 21.0002C19.713 17.2691 16.7289 14.3152 12.995 14.0663L12 14C11.6446 14.0097 11.3134 14.0226 11.0008 14.0379C7.3 14.2193 4.28417 17.3058 4 21.0002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconUsers(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M18.4995 20.5C18.2663 17.5685 15.8417 15.2477 12.808 15.0521L11.9995 15C11.7107 15.0076 11.4416 15.0178 11.1877 15.0298C8.18075 15.1723 5.7304 17.5974 5.49951 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.2495 9.25C15.2495 11.0449 13.7944 12.5 11.9995 12.5C10.2046 12.5 8.74951 11.0449 8.74951 9.25C8.74951 7.45507 10.2046 6 11.9995 6C13.7944 6 15.2495 7.45507 15.2495 9.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.50261 8.5C5.1792 7.99485 4.9917 7.39432 4.9917 6.75C4.9917 4.95507 6.44677 3.5 8.24169 3.5C8.68764 3.5 9.11262 3.58982 9.49951 3.75235" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.4964 8.5C18.8198 7.99485 19.0073 7.39432 19.0073 6.75C19.0073 4.95507 17.5522 3.5 15.7573 3.5C15.3114 3.5 14.8864 3.58982 14.4995 3.75235" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22.0007 17.9996C21.8208 15.7374 19.9995 13.5 17.9995 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1.99927 17.9996C2.17923 15.7374 4.00049 13.5 6.00049 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconWalk(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6 12.4999L7.73811 9.89275C7.91034 9.6344 8.14035 9.41971 8.40993 9.26566L10.599 8.01475C11.1619 7.69311 11.8483 7.67405 12.4282 7.96398C13.0851 8.29243 13.4658 8.98624 13.7461 9.6651C14.2069 10.7813 15.3984 11.9999 18 11.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.9999 9L11.7771 14.5951M10.4999 8.5L9.77451 11.7645C9.60684 12.519 9.88891 13.3025 10.499 13.777L13.9999 16.5L15.4999 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.5 16L9 17.5L6.5 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 4.5C15 5.32843 14.3284 6 13.5 6C12.6716 6 12 5.32843 12 4.5C12 3.67157 12.6716 3 13.5 3C14.3284 3 15 3.67157 15 4.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconWifi(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M8.25 14.5C10.25 12.5 13.75 12.5 15.75 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.5 11.5C14.7324 8.16667 9.5 8.16667 5.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 8.5C8.31579 3.16669 15.6842 3.16668 22 8.49989" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 19.5C12.8284 19.5 13.5 18.8284 13.5 18C13.5 17.1716 12.8284 16.5 12 16.5C11.1716 16.5 10.5 17.1716 10.5 18C10.5 18.8284 11.1716 19.5 12 19.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
