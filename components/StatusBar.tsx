import { IconBattery, IconSignal, IconWifi } from './icons';

/** แถบสถานะด้านบนของเครื่อง (Status Bar / 02 Transparent ใน Figma) */
export function StatusBar() {
  return (
    <div className="relative h-11 w-full shrink-0 select-none">
      <p className="absolute left-[21px] top-[14px] w-[54px] text-center text-[14px] font-semibold tracking-[-0.24px] text-white">
        09:41
      </p>
      <div className="absolute right-[65px] top-[17px] text-white">
        <IconSignal className="h-[11px] w-[17px]" />
      </div>
      <div className="absolute right-[45px] top-[17px] text-white">
        <IconWifi className="h-[11px] w-[15px]" />
      </div>
      <div className="absolute right-4 top-[17px] text-white">
        <IconBattery className="h-[11px] w-6" />
      </div>
    </div>
  );
}
