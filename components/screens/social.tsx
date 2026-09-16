'use client';

import { motion } from 'framer-motion';
import { CountUp } from '../motion';
import { Block, Button, Screen } from '../ui';

/** อวาตาร์ตัวอักษรย่อ ใช้แทนรูปโปรไฟล์ที่ยังไม่มีไฟล์จริง */
function Initial({ text, tone = 'plain' }: { text: string; tone?: 'plain' | 'primary' | 'amber' }) {
  const tones = {
    plain: 'bg-white/10',
    primary: 'bg-primary/10',
    amber: 'bg-amber/10',
  } as const;
  return (
    <span
      className={`grid size-[38px] shrink-0 place-items-center rounded-full text-[13px] font-bold text-white/80 ${tones[tone]}`}
    >
      {text}
    </span>
  );
}

/* ---------- Club - Detail (275:976) ---------- */

const CLUB_RANKS = [
  { rank: '1', name: 'นิดา ร.', km: '34.2 กม.', me: false },
  { rank: '2', name: 'บีม ส.', km: '27.5 กม.', me: false },
  { rank: '3', name: 'ต้าร์ ว.', km: '25.1 กม.', me: false },
  { rank: '18', name: 'คุณ', km: '12.4 กม.', me: true },
];

export function ClubDetailScreen() {
  return (
    <div className="flex min-h-[736px] flex-col">
      <Screen padded={false} className="gap-4 px-4 pt-2">
        <Block>
          <div className="rounded-[24px] bg-primary/10 p-[18px]">
            <div className="flex items-center gap-3">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-primary/25 text-[15px] font-bold text-primary">
                วอ
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[17px] font-bold text-white">วิ่งเพื่ออาหารเปียก</p>
                <p className="truncate text-[11.5px] text-white/50">
                  คลับสาธารณะ · 12,480 สมาชิก · เข้าร่วมแล้ว
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-2.5">
              {[
                { value: '#4', label: 'อันดับคลับเดือนนี้', hi: true },
                { value: '15.6', unit: 'กม./คน', label: 'ระยะเฉลี่ยต่อสมาชิก' },
                { value: '62', unit: 'ก.ม.', label: 'ระยะของคุณ' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex flex-1 flex-col items-center gap-0.5 rounded-[18px] bg-surface px-2.5 py-3.5"
                >
                  <span className="flex items-baseline gap-[3px]">
                    <span
                      className={`text-lg font-bold ${s.hi ? 'text-primary' : 'text-white'}`}
                    >
                      {s.value}
                    </span>
                    {s.unit ? <span className="text-[11px] text-white/45">{s.unit}</span> : null}
                  </span>
                  <span className="text-center text-[11px] text-white/45">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Block>

        <Block>
          <div className="rounded-[24px] bg-surface p-4">
            <div className="flex items-center gap-2 pb-3">
              <span className="flex-1 text-xs font-semibold text-white/55">นัดซ้อมของคลับ</span>
              <button type="button" className="text-[11.5px] font-medium text-primary">
                ดูทั้งหมด
              </button>
            </div>
            {[
              {
                title: 'ซ้อมกลุ่มเช้าวันอาทิตย์',
                meta: 'พรุ่งนี้ 06:00 · สวนรถไฟ · สนใจ 84 คน',
                cta: 'เข้าร่วม',
              },
              {
                title: 'ปั่นเลียบคลอง 30 กม.',
                meta: '15 ต.ค. 05:30 · คลองประปา · สนใจ 32 คน',
                cta: 'สนใจ',
              },
            ].map((s, i) => (
              <div key={s.title}>
                <div className="flex items-center gap-3 py-2">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13.5px] font-medium text-white">{s.title}</p>
                    <p className="truncate text-[11.5px] text-white/45">{s.meta}</p>
                  </div>
                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.94 }}
                    className="shrink-0 rounded-full bg-white/10 px-[14px] py-[7px] text-[11.5px] font-medium text-white"
                  >
                    {s.cta}
                  </motion.button>
                </div>
                {i === 0 ? <div className="h-px bg-white/[0.08]" /> : null}
              </div>
            ))}
          </div>
        </Block>

        <Block>
          <div className="rounded-[24px] bg-surface p-4">
            <p className="pb-3 text-xs font-semibold text-white/55">อันดับในคลับ · เดือนกันยายน</p>
            {CLUB_RANKS.map((r, i) => (
              <div key={r.name}>
                <div className="flex items-center gap-3 py-2">
                  <span
                    className={`text-[12.5px] font-bold ${r.me ? 'text-primary' : 'text-white/40'}`}
                  >
                    {r.rank}
                  </span>
                  <span
                    className={`min-w-0 flex-1 truncate text-[13.5px] text-white ${
                      r.me ? 'font-semibold' : ''
                    }`}
                  >
                    {r.name}
                  </span>
                  <span className="shrink-0 text-[12.5px] text-white/60">{r.km}</span>
                </div>
                {i < CLUB_RANKS.length - 1 ? <div className="h-px bg-white/[0.08]" /> : null}
              </div>
            ))}
          </div>
        </Block>
      </Screen>

      <div className="mt-auto flex flex-col gap-2.5 px-4 pb-6 pt-6">
        <Block>
          <Button to="friends-find-add" className="h-12 text-lg">
            ชวนเพื่อนเข้าคลับ
          </Button>
        </Block>
        <Block>
          <Button to="club-manage-members" variant="ghost" className="h-12 text-lg">
            จัดการคลับและสมาชิก
          </Button>
        </Block>
      </div>
    </div>
  );
}

/* ---------- Club - Manage Members (276:915) ---------- */

const JOIN_REQUESTS = [
  { initial: 'แน', name: 'แน็ต ธ.', meta: '@nat_run · วิ่ง 42 กม./เดือน' },
  { initial: 'เอ', name: 'เอ็ม พ.', meta: '@m_pace · วิ่ง 28 กม./เดือน' },
];

const MEMBERS = [
  { initial: 'นิ', name: 'นิดา ร.', km: '34.2 กม. เดือนนี้', admin: true },
  { initial: 'บี', name: 'บีม ส.', km: '27.5 กม. เดือนนี้', admin: false },
  { initial: 'ต้', name: 'ต้าร์ ว.', km: '25.1 กม. เดือนนี้', admin: false },
  { initial: 'คุ', name: 'คุณ', km: '12.4 กม. เดือนนี้', admin: true },
];

export function ClubManageMembersScreen() {
  return (
    <div className="flex min-h-[736px] flex-col">
      <Screen padded={false} className="gap-4 px-4 pt-2">
        <Block>
          <h1 className="text-xl font-bold leading-[1.3] text-white">จัดการคลับ</h1>
          <p className="pt-1.5 text-[13px] leading-[1.45] text-white/55">
            วิ่งเพื่ออาหารเปียก · คุณเป็นแอดมิน
          </p>
        </Block>

        <Block>
          <div className="rounded-full border border-hairline bg-surface px-4 py-[13px] text-[13.5px] text-white/35">
            ค้นหาสมาชิกจากชื่อหรือ @username
          </div>
        </Block>

        <Block>
          <div className="rounded-[24px] bg-amber/10 p-4">
            <div className="flex items-center gap-2 pb-3">
              <span className="flex-1 text-xs font-semibold text-amber">คำขอเข้าคลับ</span>
              <span className="text-[11.5px] text-white/50">2 รายการ</span>
            </div>
            {JOIN_REQUESTS.map((r, i) => (
              <div key={r.name}>
                <div className="flex items-center gap-3 py-2">
                  <Initial text={r.initial} tone="amber" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13.5px] font-medium text-white">{r.name}</p>
                    <p className="truncate text-[11px] text-white/45">{r.meta}</p>
                  </div>
                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.94 }}
                    className="shrink-0 rounded-full bg-primary px-3 py-[7px] text-[11.5px] font-semibold text-ink"
                  >
                    รับ
                  </motion.button>
                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.94 }}
                    className="shrink-0 rounded-full bg-white/10 px-3 py-[7px] text-[11.5px] font-medium text-white/70"
                  >
                    ปฏิเสธ
                  </motion.button>
                </div>
                {i === 0 ? <div className="h-px bg-white/[0.08]" /> : null}
              </div>
            ))}
          </div>
        </Block>

        <Block>
          <div className="rounded-[24px] bg-surface p-4">
            <div className="flex items-center gap-2 pb-3">
              <span className="flex-1 text-xs font-semibold text-white/55">สมาชิก 12,480 คน</span>
              <button type="button" className="text-[11.5px] font-medium text-primary">
                เรียงตามระยะ
              </button>
            </div>
            {MEMBERS.map((m, i) => (
              <div key={m.name}>
                <div className="flex items-center gap-3 py-2">
                  <Initial text={m.initial} />
                  <div className="min-w-0 flex-1">
                    <span className="flex items-center gap-1.5">
                      <span className="truncate text-[13.5px] font-medium text-white">{m.name}</span>
                      {m.admin ? (
                        <span className="shrink-0 rounded-full bg-primary/[0.16] px-2.5 py-[5px] text-[11px] font-medium text-primary">
                          แอดมิน
                        </span>
                      ) : null}
                    </span>
                    <p className="truncate text-[11px] text-white/45">{m.km}</p>
                  </div>
                  <span className="shrink-0 text-[15px] text-white/35">···</span>
                </div>
                {i < MEMBERS.length - 1 ? <div className="h-px bg-white/[0.08]" /> : null}
              </div>
            ))}
          </div>
        </Block>

        <Block>
          <div className="rounded-[24px] border border-coral/40 bg-coral/[0.08] p-4">
            <p className="text-[13px] font-semibold text-coral">ออกจากคลับนี้</p>
            <p className="pt-1.5 text-[11.5px] leading-[1.45] text-white/50">
              อันดับคลับและกิจกรรมกลุ่มของคุณจะหายไป แต้มส่วนตัวยังอยู่ครบ ·
              ต้องมีแอดมินเหลืออย่างน้อย 1 คน
            </p>
          </div>
        </Block>
      </Screen>

      <div className="mt-auto px-4 pb-6 pt-6">
        <Block>
          <Button to="friends-find-add" className="h-12 text-lg">
            ชวนเพื่อนเข้าคลับ
          </Button>
        </Block>
      </div>
    </div>
  );
}

/* ---------- Friends - Find & Add (276:1023) ---------- */

const FRIEND_REQUESTS = [
  { initial: 'โบ', name: 'โบว์ ก.', meta: '@bow_k · อยู่คลับเดียวกัน' },
  { initial: 'แน', name: 'แน็ต ธ.', meta: '@nat_run · เพื่อนของบีม' },
];

const SUGGESTED = [
  { initial: 'บี', name: 'บีม ส.', meta: 'อยู่คลับ วิ่งเพื่ออาหารเปียก' },
  { initial: 'ต้', name: 'ต้าร์ ว.', meta: 'เคยแข่งอีเวนต์เดียวกัน 3 ครั้ง' },
  { initial: 'เอ', name: 'เอ็ม พ.', meta: 'จากรายชื่อติดต่อของคุณ' },
];

export function FriendsFindAddScreen() {
  return (
    <div className="flex min-h-[736px] flex-col">
      <Screen padded={false} className="gap-4 px-4 pt-2">
        <Block>
          <h1 className="text-xl font-bold leading-[1.3] text-white">เพื่อน</h1>
          <p className="pt-1.5 text-[13px] leading-[1.45] text-white/55">
            เพิ่มเพื่อนเพื่อเทียบอันดับเฉพาะกลุ่มของคุณ ไม่กระทบอันดับรวม
          </p>
        </Block>

        <Block>
          <div className="rounded-full border border-hairline bg-surface px-4 py-[13px] text-[13.5px] text-white/35">
            ค้นหาด้วย @username หรือเบอร์โทร
          </div>
        </Block>

        <Block className="flex items-center gap-2">
          {['แนะนำ', 'คำขอ 2', 'เพื่อน 18'].map((c, i) => (
            <span
              key={c}
              className={`rounded-full px-[14px] py-[7px] text-[12.5px] font-medium ${
                i === 0 ? 'bg-primary text-ink' : 'bg-surface text-white/70'
              }`}
            >
              {c}
            </span>
          ))}
        </Block>

        <Block>
          <div className="rounded-[24px] bg-surface p-4">
            <p className="pb-3 text-xs font-semibold text-white/55">คำขอเป็นเพื่อน</p>
            {FRIEND_REQUESTS.map((f, i) => (
              <div key={f.name}>
                <div className="flex items-center gap-3 py-2">
                  <Initial text={f.initial} tone="primary" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13.5px] font-medium text-white">{f.name}</p>
                    <p className="truncate text-[11px] text-white/45">{f.meta}</p>
                  </div>
                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.94 }}
                    className="shrink-0 rounded-full bg-primary px-3 py-[7px] text-[11.5px] font-semibold text-ink"
                  >
                    ตอบรับ
                  </motion.button>
                </div>
                {i === 0 ? <div className="h-px bg-white/[0.08]" /> : null}
              </div>
            ))}
          </div>
        </Block>

        <Block>
          <div className="rounded-[24px] bg-surface p-4">
            <p className="pb-3 text-xs font-semibold text-white/55">คนที่คุณอาจรู้จัก</p>
            {SUGGESTED.map((f, i) => (
              <div key={f.name}>
                <div className="flex items-center gap-3 py-2">
                  <Initial text={f.initial} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13.5px] font-medium text-white">{f.name}</p>
                    <p className="truncate text-[11px] text-white/45">{f.meta}</p>
                  </div>
                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.94 }}
                    className="shrink-0 rounded-full bg-white/10 px-3 py-[7px] text-[11.5px] font-medium text-white"
                  >
                    เพิ่มเพื่อน
                  </motion.button>
                </div>
                {i < SUGGESTED.length - 1 ? <div className="h-px bg-white/[0.08]" /> : null}
              </div>
            ))}
          </div>
        </Block>

        <Block>
          <div className="rounded-[24px] bg-white/[0.04] p-4">
            <p className="text-[12.5px] font-semibold text-white">ใครค้นหาคุณเจอบ้าง</p>
            <p className="pt-1 text-[11.5px] leading-[1.45] text-white/50">
              ตอนนี้ปิดการค้นหาด้วยเบอร์โทรอยู่ เปลี่ยนได้ที่ โปรไฟล์ › ความเป็นส่วนตัว
            </p>
          </div>
        </Block>
      </Screen>

      <div className="mt-auto px-4 pb-6 pt-6">
        <Block>
          <Button className="h-12 text-lg">ส่งลิงก์ชวนเพื่อน</Button>
        </Block>
      </div>
    </div>
  );
}

export { Initial, CountUp };
