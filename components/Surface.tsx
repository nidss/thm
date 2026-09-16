import NextImage from 'next/image';

/*
 * gradient ชุดนี้คือค่าที่ไฟล์ Figma ใช้แทนรูปโปรไฟล์/รูปคลับอยู่แล้ว
 * (ในดีไซน์ต้นทางหลายจุดเป็น gradient จริง ๆ ไม่ใช่รูป)
 * ใช้ต่อกับจุดที่ยังไม่มีไฟล์รูปจริงส่งมา เช่น รูปโปรไฟล์ผู้ใช้และรูปคลับ
 */
export const GRADIENTS = {
  green: 'linear-gradient(135deg, rgb(77,140,89) 7.14%, rgb(31,56,36) 64.29%)',
  navy: 'linear-gradient(135deg, rgb(89,102,166) 7.14%, rgb(36,41,66) 64.29%)',
  brown: 'linear-gradient(135deg, rgb(166,128,77) 7.14%, rgb(66,51,31) 64.29%)',
  maroon: 'linear-gradient(135deg, rgb(153,77,89) 7.14%, rgb(61,31,36) 64.29%)',
  purple: 'linear-gradient(135deg, rgb(140,115,178) 7.14%, rgb(56,46,71) 64.29%)',
  violet: 'linear-gradient(53.95deg, rgb(107,99,255) 14.6%, rgb(71,66,219) 87.59%)',
  violetUp: 'linear-gradient(35.05deg, rgb(107,99,255) 14.6%, rgb(71,66,219) 87.59%)',
} as const;

export type GradientName = keyof typeof GRADIENTS;

/** บล็อกสี่เหลี่ยม/วงกลมที่ใช้แทนรูปในจุดที่ยังไม่มีไฟล์จริง */
export function GradientBlock({
  gradient,
  className = '',
  label,
}: {
  gradient: GradientName;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden ${className}`}
      style={{ backgroundImage: GRADIENTS[gradient] }}
    >
      {label ? (
        <span className="absolute inset-0 grid place-items-center text-[11px] font-bold tracking-wide text-white/75">
          {label}
        </span>
      ) : null}
    </div>
  );
}

/*
 * รูปจริงที่ export มาจาก Figma ทั้งหมดอยู่ใน public/img
 * ขนาดที่ใส่ไว้คือขนาดไฟล์จริง เพื่อให้ next/image คำนวณ aspect ratio ได้ถูก
 */
export const IMAGES = {
  monthlyChallenge: { src: '/img/monthly-challenge.png', width: 328, height: 156 },
  eventVirtualRun: { src: '/img/event-virtual-run-100k.png', width: 328, height: 132 },
  event7DaySteps: { src: '/img/event-7day-steps.png', width: 328, height: 290 },
  event7DayStepsWide: { src: '/img/event-7day-steps-wide.png', width: 320, height: 140 },
  luckyDraw: { src: '/img/lucky-draw-october.png', width: 328, height: 172 },
  heroBg: { src: '/img/hero-bg.png', width: 360, height: 762 },
  activityMap: { src: '/img/activity-map.png', width: 320, height: 150 },
  rewardCafeAmazon: { src: '/img/reward-cafe-amazon-detail.png', width: 320, height: 170 },
  prizeHalfMarathon: { src: '/img/prize-half-marathon.png', width: 159, height: 78 },
  prizeSmartwatch: { src: '/img/prize-smartwatch.png', width: 159, height: 78 },
  logoCafeAmazon: { src: '/img/logo-cafe-amazon.png', width: 60, height: 60 },
  logoCentral: { src: '/img/logo-central.png', width: 60, height: 60 },
  logoThaimoveStore: { src: '/img/logo-thaimove-store.png', width: 60, height: 60 },
  logoBangkokHalf: { src: '/img/logo-bangkok-half.png', width: 60, height: 60 },
  logoRamaFoundation: { src: '/img/logo-rama-foundation.png', width: 60, height: 60 },
} as const;

export type ImageKey = keyof typeof IMAGES;

/**
 * รูปที่เติมเต็มกล่องพ่อแม่ (กล่องต้องเป็น relative และกำหนดขนาดไว้แล้ว)
 * next/image เติม basePath ให้เองตอน deploy ขึ้น GitHub Pages
 */
export function Img({
  name,
  alt = '',
  className = '',
  priority = false,
}: {
  name: ImageKey;
  alt?: string;
  className?: string;
  priority?: boolean;
}) {
  const img = IMAGES[name];
  return (
    <NextImage
      src={img.src}
      alt={alt}
      fill
      sizes="360px"
      priority={priority}
      className={`object-cover ${className}`}
    />
  );
}

/** รูปที่มีขนาดตายตัว เช่น โลโก้แบรนด์ 60x60 */
export function FixedImg({
  name,
  alt = '',
  className = '',
}: {
  name: ImageKey;
  alt?: string;
  className?: string;
}) {
  const img = IMAGES[name];
  return (
    <NextImage
      src={img.src}
      alt={alt}
      width={img.width}
      height={img.height}
      className={className}
    />
  );
}
