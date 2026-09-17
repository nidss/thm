# ThaiMove — UI Preview

หน้าเว็บ public หน้าเดียวที่จำลองหน้าจอแอป **ThaiMove** จากดีไซน์ใน Figma
เปิดดูได้เลยโดยไม่ต้องล็อกอิน กดเมนูลอยด้านล่างของเครื่องเพื่อสลับหน้า

## หน้าจอที่ทำไว้

ทำครบ **57 หน้า** ทุก section ตามไฟล์ Figma หน้า "Screen Draft"
รายชื่อและ node id ทั้งหมดอยู่ที่ `components/screenList.ts`

| Section | จำนวน |
| --- | --- |
| 1. สมัคร เข้าสู่ระบบ และความยินยอม | 9 |
| 2. ตั้งค่าเริ่มต้นและการซิงก์ | 6 |
| 3. หน้าหลักและกิจกรรม | 8 |
| 4. แต้มและของรางวัล | 7 |
| 5. ลุ้นรางวัลและการรับรางวัล | 8 |
| 6. อีเวนต์และชาเลนจ์ | 6 |
| 7. อันดับ คลับ และเพื่อน | 4 |
| 8. โปรไฟล์และการตั้งค่า | 9 |

5 หน้าที่เป็นแท็บหลัก (มีเมนูลอยด้านล่าง) คือ Dashboard, Events,
Activity, Ranking และ Points & Rewards ตาม component `menu-light` (`281:2105`)

## การเดินดู flow

- กดปุ่มในเครื่องเพื่อเดินตาม flow จริง (เช่น Hero → สมัคร → OTP → PDPA → เชื่อมแอป → ตั้งเป้า)
- หรือเลือกหน้าจากสารบัญใต้เครื่อง ซึ่งจัดกลุ่มตาม section เดียวกับ Figma
- ทุกหน้ามี URL ของตัวเอง เช่น `#/login` หรือ `#/lucky-draw-result` copy ไปแชร์ได้
- ปุ่ม back ของเบราว์เซอร์และปุ่มย้อนกลับในแอปใช้ได้ทั้งคู่

## Animation ที่ใส่ไว้

- สลับหน้าแบบสไลด์ตามทิศทางของแท็บ (ไปขวา/ไปซ้าย) ด้วย `AnimatePresence`
- เนื้อหาในแต่ละหน้าทยอยโผล่ไล่กันทีละชิ้น (stagger)
- ตัวเลขนับขึ้นจาก 0 เช่น 268 แต้ม, 46.8 กม., 1,240 แต้ม
- แถบ progress วิ่งจาก 0 ไปยังค่าจริง
- กราฟแท่งรายสัปดาห์งอกขึ้นจากด้านล่างทีละแท่ง
- หยดสีใต้เมนูเลื่อนตามแท็บที่เลือก และขีดใต้ของ tab filter เลื่อนตามเช่นกัน (`layoutId`)
- ปุ่ม/การ์ดมี hover และ tap feedback, โพเดียมอันดับเด้งขึ้นแบบ spring
- รองรับ `prefers-reduced-motion` — ถ้าผู้ใช้ตั้งค่าลดการเคลื่อนไหว จะไม่มี animation ที่วนซ้ำ

## Stack

- Next.js 16 (App Router) + React 19
- Tailwind CSS v4 — design token จาก Figma อยู่ใน `@theme` ที่ `app/globals.css`
- framer-motion สำหรับ animation
- ฟอนต์ Anuphan ผ่าน `next/font/google`

## รันในเครื่อง

```bash
npm install
npm run dev      # เปิด http://localhost:3000
npm run build    # build static ออกมาที่โฟลเดอร์ out/
```

## Deploy

push ขึ้น `main` แล้ว GitHub Actions (`.github/workflows/deploy.yml`) จะ build
เป็น static แล้ว deploy ขึ้น GitHub Pages ให้อัตโนมัติ

ครั้งแรกต้องไปตั้งค่าที่ **Settings → Pages → Source: GitHub Actions** ก่อนหนึ่งครั้ง
หลังจากนั้นเว็บจะอยู่ที่ <https://nidss.github.io/thm/>

`basePath` ถูกตั้งเป็น `/thm` ผ่าน env `NEXT_PUBLIC_BASE_PATH` ตอน build ใน CI
เวลารันในเครื่องจะเป็นค่าว่าง จึงเปิดที่ root ได้ตามปกติ

## หมายเหตุเรื่องรูปภาพและไอคอน

- **ไอคอน** — ใช้ไฟล์ SVG จริงทั้ง 43 ตัวที่ export มาจาก Figma
  `components/icons.tsx` ถูก generate จากไฟล์เหล่านั้น (เปลี่ยนสีตายตัวเป็น `currentColor`)
  ถ้าจะอัปเดต ให้เอาไฟล์ .svg ชุดใหม่มา generate ทับ อย่าแก้ path ด้วยมือ
- **รูปภาพ** — ใช้รูปจริง 15 ไฟล์ที่ export มา อยู่ใน `public/img`
  (รูปปกอีเวนต์ แผนที่เส้นทาง ของรางวัล และโลโก้แบรนด์)

สิ่งที่ยังไม่มีไฟล์ต้นฉบับ จึงใช้ของแทนไปก่อน

- รูปโปรไฟล์ผู้ใช้และรูปคลับ ใช้ gradient ชุดเดียวกับที่ไฟล์ Figma
  ใช้เป็น placeholder อยู่แล้ว (ดู `components/Surface.tsx`)
- โลโก้ ThaiMove ประกอบขึ้นจากตัวอักษรใน `components/ui.tsx` (`Logo`)
- ชุดไอคอนที่ให้มาไม่มี glyph medal กับ calendar แท็บ "ชาเลนจ์" จึงใช้
  `icon/target` และ "กิจกรรม" ใช้ `icon/activity`
- ฟอนต์หัวข้อในดีไซน์คือ Frick 0.3 Condensed (ฟอนต์เชิงพาณิชย์)
  จึงใช้ Anton จาก Google Fonts ที่หน้าตาใกล้เคียงแทน

ถ้าได้ไฟล์จริงมาเพิ่ม วางลง `public/img` แล้วเพิ่ม entry ใน `IMAGES`
ของ `components/Surface.tsx` ได้เลย ขนาดกล่องวางตรงตามดีไซน์ไว้แล้ว
