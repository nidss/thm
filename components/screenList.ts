/*
 * รายชื่อหน้าจอทั้งหมดของแอป ThaiMove อ้างอิงจากไฟล์ Figma หน้า "Screen Draft"
 * แยกตาม section เดียวกับที่ดีไซเนอร์จัดไว้ รวม 57 หน้า
 *
 * ไฟล์นี้เก็บแค่ "ข้อมูล" ของหน้าจอ (slug / ชื่อ / node id / มีเมนูล่างไหม)
 * ส่วนการผูกเข้ากับ component จริงอยู่ที่ components/registry.tsx
 * แยกกันเพื่อให้ nav.tsx import ได้โดยไม่ต้องดึง component ทุกตัวมาด้วย
 */

export type SectionKey = 'auth' | 'setup' | 'home' | 'rewards' | 'draw' | 'events' | 'social' | 'profile';

export type ScreenMeta = {
  slug: string;
  /** ชื่อหน้าจอตามที่ตั้งไว้ใน Figma */
  title: string;
  section: SectionKey;
  /** node id ใน Figma ไว้เทียบดีไซน์ */
  node: string;
  /** true = แสดงเมนูลอยด้านล่าง (เป็นหนึ่งใน 5 แท็บหลัก) */
  tab?: boolean;
};

export const SECTIONS: { key: SectionKey; title: string }[] = [
  { key: 'auth', title: '1. สมัคร เข้าสู่ระบบ และความยินยอม' },
  { key: 'setup', title: '2. ตั้งค่าเริ่มต้นและการซิงก์' },
  { key: 'home', title: '3. หน้าหลักและกิจกรรม' },
  { key: 'rewards', title: '4. แต้มและของรางวัล' },
  { key: 'draw', title: '5. ลุ้นรางวัลและการรับรางวัล' },
  { key: 'events', title: '6. อีเวนต์และชาเลนจ์' },
  { key: 'social', title: '7. อันดับ คลับ และเพื่อน' },
  { key: 'profile', title: '8. โปรไฟล์และการตั้งค่า' },
];

export const SCREENS = [
  // 1. สมัคร เข้าสู่ระบบ และความยินยอม
  { slug: 'hero', title: 'Hero', section: 'auth', node: '191:2' },
  { slug: 'signup', title: 'Create an account', section: 'auth', node: '212:1619' },
  { slug: 'login', title: 'Login', section: 'auth', node: '212:1823' },
  { slug: 'pdpa-consent', title: 'PDPA - Consent', section: 'auth', node: '262:1777' },
  { slug: 'pdpa-declined', title: 'PDPA - Declined', section: 'auth', node: '269:712' },
  { slug: 'otp-verify', title: 'Auth - OTP Verify', section: 'auth', node: '262:1816' },
  { slug: 'forgot-password', title: 'Auth - Forgot Password', section: 'auth', node: '262:1847' },
  { slug: 'forgot-password-error', title: 'Auth - Forgot Password (error)', section: 'auth', node: '262:1873' },
  { slug: 'reset-password', title: 'Auth - Reset Password', section: 'auth', node: '262:1902' },

  // 2. ตั้งค่าเริ่มต้นและการซิงก์
  { slug: 'connect-apps', title: 'Connect apps', section: 'setup', node: '195:2' },
  { slug: 'set-goals', title: 'Set goals', section: 'setup', node: '196:2' },
  { slug: 'permission-notification', title: 'Permission - Notification', section: 'setup', node: '262:1944' },
  { slug: 'sync-loading', title: 'Sync - Loading', section: 'setup', node: '220:320' },
  { slug: 'sync-success', title: 'Sync - Success', section: 'setup', node: '220:384' },
  { slug: 'sync-error', title: 'Sync - Error', section: 'setup', node: '220:448' },

  // 3. หน้าหลักและกิจกรรม
  { slug: 'dashboard', title: 'Dashboard', section: 'home', node: '198:2', tab: true },
  { slug: 'activity', title: 'Activity - Detail', section: 'home', node: '201:2', tab: true },
  { slug: 'activity-item-detail', title: 'Activity - Item Detail', section: 'home', node: '262:2080' },
  { slug: 'activity-manual-upload', title: 'Activity - Manual Upload', section: 'home', node: '270:735' },
  { slug: 'notifications', title: 'Notifications', section: 'home', node: '270:813' },
  { slug: 'empty-no-activity', title: 'Empty - No Activity', section: 'home', node: '224:407' },
  { slug: 'error-no-internet', title: 'Error - No Internet', section: 'home', node: '224:365' },
  { slug: 'skeleton', title: 'Skeleton', section: 'home', node: '258:1287' },

  // 4. แต้มและของรางวัล
  { slug: 'rewards', title: 'Points & Rewards', section: 'rewards', node: '202:2', tab: true },
  { slug: 'reward-detail', title: 'Reward - Detail', section: 'rewards', node: '260:1601' },
  { slug: 'redeem-confirm', title: 'Redeem - Confirm', section: 'rewards', node: '216:245' },
  { slug: 'redeem-success', title: 'Redeem - Success', section: 'rewards', node: '218:260' },
  { slug: 'redeem-error', title: 'Redeem - Error', section: 'rewards', node: '218:313' },
  { slug: 'my-coupons', title: 'My Coupons', section: 'rewards', node: '260:1645' },
  { slug: 'points-history', title: 'Points - History', section: 'rewards', node: '260:1541' },

  // 5. ลุ้นรางวัลและการรับรางวัล
  { slug: 'lucky-draw', title: 'Lucky Draw', section: 'draw', node: '203:2' },
  { slug: 'lucky-draw-my-tickets', title: 'Lucky Draw - My Tickets', section: 'draw', node: '262:2151' },
  { slug: 'lucky-draw-result', title: 'Lucky Draw - Result', section: 'draw', node: '262:2206' },
  { slug: 'lucky-draw-all-results', title: 'Lucky Draw - All Results', section: 'draw', node: '275:869' },
  { slug: 'claim-verify-identity', title: 'Claim - Verify Identity', section: 'draw', node: '272:775' },
  { slug: 'claim-shipping-address', title: 'Claim - Shipping Address', section: 'draw', node: '272:852' },
  { slug: 'claim-tax-payment', title: 'Claim - Tax Payment', section: 'draw', node: '273:823' },
  { slug: 'claim-submitted', title: 'Claim - Submitted', section: 'draw', node: '273:914' },

  // 6. อีเวนต์และชาเลนจ์
  { slug: 'events', title: 'Events', section: 'events', node: '205:2', tab: true },
  { slug: 'event-detail-joined', title: 'Event - Detail (Joined)', section: 'events', node: '262:2268' },
  { slug: 'event-join-confirm', title: 'Event - Join Confirm', section: 'events', node: '219:290' },
  { slug: 'event-joined', title: 'Event - Joined', section: 'events', node: '219:354' },
  { slug: 'event-leave-confirm', title: 'Event - Leave Confirm', section: 'events', node: '277:955' },
  { slug: 'event-invite-friends', title: 'Event - Invite Friends', section: 'events', node: '277:1035' },

  // 7. อันดับ คลับ และเพื่อน
  { slug: 'ranking', title: 'Ranking - Leaderboard', section: 'social', node: '204:2', tab: true },
  { slug: 'club-detail', title: 'Club - Detail', section: 'social', node: '275:976' },
  { slug: 'club-manage-members', title: 'Club - Manage Members', section: 'social', node: '276:915' },
  { slug: 'friends-find-add', title: 'Friends - Find & Add', section: 'social', node: '276:1023' },

  // 8. โปรไฟล์และการตั้งค่า
  { slug: 'profile-settings', title: 'Profile - Settings', section: 'profile', node: '206:2' },
  { slug: 'profile-edit', title: 'Profile - Edit', section: 'profile', node: '262:2389' },
  { slug: 'connected-app-manage', title: 'Connected App - Manage', section: 'profile', node: '262:2565' },
  { slug: 'connected-app-disconnect-confirm', title: 'Connected App - Disconnect', section: 'profile', node: '283:1071' },
  { slug: 'help-point-rules', title: 'Help & Point Rules', section: 'profile', node: '262:2623' },
  { slug: 'support-contact', title: 'Support - Contact', section: 'profile', node: '279:1125' },
  { slug: 'account-pause', title: 'Account - Pause', section: 'profile', node: '278:1091' },
  { slug: 'account-delete', title: 'Account - Delete', section: 'profile', node: '262:2674' },
  { slug: 'account-delete-scheduled', title: 'Account - Delete Scheduled', section: 'profile', node: '279:1047' },
] as const satisfies readonly ScreenMeta[];

export type ScreenSlug = (typeof SCREENS)[number]['slug'];

export const DEFAULT_SCREEN: ScreenSlug = 'hero';

const SLUGS = new Set<string>(SCREENS.map((s) => s.slug));

export function isScreenSlug(value: string): value is ScreenSlug {
  return SLUGS.has(value);
}

export function screenMeta(slug: ScreenSlug): ScreenMeta {
  return SCREENS.find((s) => s.slug === slug) as ScreenMeta;
}
