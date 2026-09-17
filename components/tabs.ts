import type { ComponentType, SVGProps } from 'react';
import {
  IconCalendarDays,
  IconGiftBox,
  IconHouse,
  IconMedal,
  IconPodium,
} from './lucideIcons';

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
  { key: 'home', label: 'หน้าหลัก', icon: IconHouse, figmaNodeId: '198:2' },
  { key: 'challenge', label: 'ชาเลนจ์', icon: IconMedal, figmaNodeId: '205:2' },
  { key: 'activity', label: 'กิจกรรม', icon: IconCalendarDays, figmaNodeId: '201:2' },
  { key: 'ranking', label: 'อันดับ', icon: IconPodium, figmaNodeId: '204:2' },
  { key: 'reward', label: 'รางวัล', icon: IconGiftBox, figmaNodeId: '202:2' },
];
