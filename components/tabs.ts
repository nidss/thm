import type { ComponentType, SVGProps } from 'react';
import { IconCalendar, IconChartBar, IconGift, IconHome, IconMedal } from './icons';

export type TabKey = 'home' | 'challenge' | 'activity' | 'ranking' | 'reward';

export type TabDef = {
  key: TabKey;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  /** node id ของหน้าจอใน Figma ไว้อ้างอิงตอนเทียบดีไซน์ */
  figmaNodeId: string;
};

/** ลำดับแท็บตรงกับ component menu-light (281:2105) ใน Figma */
export const TABS: TabDef[] = [
  { key: 'home', label: 'หน้าหลัก', icon: IconHome, figmaNodeId: '198:2' },
  { key: 'challenge', label: 'ชาเลนจ์', icon: IconMedal, figmaNodeId: '205:2' },
  { key: 'activity', label: 'กิจกรรม', icon: IconCalendar, figmaNodeId: '201:2' },
  { key: 'ranking', label: 'อันดับ', icon: IconChartBar, figmaNodeId: '204:2' },
  { key: 'reward', label: 'รางวัล', icon: IconGift, figmaNodeId: '202:2' },
];
