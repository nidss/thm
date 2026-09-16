/*
 * ชุด gradient ที่ Figma ใช้แทนรูปโปรไฟล์/รูปปกทั่วทั้งไฟล์
 * (ในไฟล์ต้นทางหลายจุดก็เป็น gradient จริง ๆ ไม่ใช่รูป)
 */
export const GRADIENTS = {
  green: 'linear-gradient(135deg, rgb(77,140,89) 7.14%, rgb(31,56,36) 64.29%)',
  navy: 'linear-gradient(135deg, rgb(89,102,166) 7.14%, rgb(36,41,66) 64.29%)',
  brown: 'linear-gradient(135deg, rgb(166,128,77) 7.14%, rgb(66,51,31) 64.29%)',
  maroon: 'linear-gradient(135deg, rgb(153,77,89) 7.14%, rgb(61,31,36) 64.29%)',
  purple: 'linear-gradient(135deg, rgb(140,115,178) 7.14%, rgb(56,46,71) 64.29%)',
  violet: 'linear-gradient(53.95deg, rgb(107,99,255) 14.6%, rgb(71,66,219) 87.59%)',
  violetUp: 'linear-gradient(35.05deg, rgb(107,99,255) 14.6%, rgb(71,66,219) 87.59%)',
  /* พื้นของการ์ด Monthly Challenge (198:47) */
  challenge: 'linear-gradient(154.14deg, rgb(77,140,89) 7.14%, rgb(31,56,36) 64.29%)',
} as const;

export type GradientName = keyof typeof GRADIENTS;

/**
 * บล็อกสี่เหลี่ยม/วงกลมที่ใช้แทนรูปภาพ
 * label เป็นตัวอักษรย่อที่วางทับไว้ ใช้กับโลโก้ร้านค้าในหน้ารางวัล
 */
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
