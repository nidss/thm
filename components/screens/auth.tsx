'use client';

import { motion } from 'framer-motion';
import { Img } from '../Surface';
import { IconApple, IconEye, IconGoogle } from '../icons';
import { riseItem } from '../motion';
import { useNav } from '../nav';
import {
  AppBar,
  Block,
  BulletList,
  Button,
  Checkbox,
  DarkField,
  Field,
  InfoCard,
  InlineAlert,
  Logo,
  OtpBoxes,
  Screen,
  StrengthMeter,
} from '../ui';

/* ---------- Hero (191:2) ---------- */

export function HeroScreen() {
  const { go } = useNav();

  return (
    <div className="relative h-[736px] overflow-hidden">
      <Img name="heroBg" alt="กลุ่มนักวิ่ง ThaiMove" priority />
      <div className="absolute inset-0 bg-gradient-to-b from-[#4a476b]/35 via-transparent to-[#14141c]" />

      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute left-[35px] top-[46px]"
      >
        <Logo />
      </motion.div>

      <Screen padded={false} className="absolute inset-x-[35px] bottom-[42px] gap-2">
        <Block>
          <span className="inline-flex rounded-full border border-white/[0.18] bg-white/[0.14] px-3 py-2 text-lg font-semibold text-white backdrop-blur-sm">
            ทุกแอป ทุกกิจกรรม ที่เดียว
          </span>
        </Block>
        <Block>
          <h1 className="pt-2 text-[38px] font-bold leading-[1.1] text-white">
            ทุกก้าว
            <br />
            มีความหมาย
          </h1>
        </Block>
        <Block>
          <p className="pb-6 pt-2 text-sm leading-[1.5] text-white">
            รวมสถิติจากแอปที่คุณใช้อยู่ แปลงเป็น Move Point แลกของรางวัล และแข่งสนุก ๆ
            กับเพื่อนและคลับ
          </p>
        </Block>
        <Block>
          <Button to="signup" arrow className="h-[54px] text-lg">
            เริ่มต้นใช้งาน
          </Button>
        </Block>
        <Block>
          <p className="pt-3.5 text-center text-base text-white">
            มีบัญชีอยู่แล้ว?{' '}
            <button type="button" onClick={() => go('login')} className="underline">
              เข้าสู่ระบบ
            </button>
          </p>
        </Block>
      </Screen>
    </div>
  );
}

/* ---------- ส่วนที่ใช้ร่วมกันของหน้า Login / Signup ---------- */

function SocialRow() {
  return (
    <div className="flex w-[280px] flex-col items-center gap-4">
      <p className="text-lg font-semibold text-primary">sign up with</p>
      <div className="flex w-full items-center justify-between">
        {[
          { key: 'google', node: <IconGoogle className="size-8 text-[#4285f4]" /> },
          { key: 'apple', node: <IconApple className="size-8 text-ink" /> },
          { key: 'facebook', node: <IconFacebook className="size-8 text-[#1877f2]" /> },
        ].map((s) => (
          <motion.button
            key={s.key}
            type="button"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            aria-label={s.key}
            className="grid size-[60px] place-items-center rounded-full bg-white"
          >
            {s.node}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

/**
 * โลโก้ Facebook ไม่มีอยู่ในชุดไอคอน 43 ตัวที่ส่งมา จึงวาดขึ้นใหม่
 * ให้ตรงกับรูปทรง "f" มาตรฐานของแบรนด์
 */
function IconFacebook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21.9V13.9h2.7l.4-3.2h-3.1V8.7c0-.9.26-1.55 1.57-1.55h1.67V4.3c-.29-.04-1.28-.13-2.44-.13-2.41 0-4.07 1.48-4.07 4.2v2.31H7.5v3.2h2.73v8z" />
    </svg>
  );
}

/* ---------- Login (212:1823) ---------- */

export function LoginScreen() {
  const { go } = useNav();

  return (
    <div className="relative flex min-h-[736px] flex-col">
      <Screen padded={false} className="gap-[26px] px-6 pt-14">
        <Block>
          <h1 className="font-display text-[40px] leading-[1.12] text-white">
            WELCOME BACK
            <br />
            RUNNER<span className="text-primary">.</span>
          </h1>
        </Block>

        <Block className="flex flex-col gap-5">
          <Field label="Username" />
          <Field label="Password" type="password" right={<IconEye className="size-5 text-[#8c8c8c]" />} />
        </Block>

        <Block className="flex justify-end">
          <button
            type="button"
            onClick={() => go('forgot-password')}
            className="text-[13px] font-medium text-primary"
          >
            ลืมรหัสผ่าน?
          </button>
        </Block>

        <Block>
          <div className="h-px w-full bg-white/15" />
        </Block>

        <Block className="flex justify-center">
          <SocialRow />
        </Block>
      </Screen>

      <div className="mt-auto px-6 pb-11 pt-8">
        <Block>
          <Button to="pdpa-consent" arrow className="text-lg">
            LOG IN
          </Button>
        </Block>
      </div>
    </div>
  );
}

/* ---------- Create an account (212:1619) ---------- */

export function SignupScreen() {
  return (
    <div className="relative flex min-h-[736px] flex-col">
      <Screen padded={false} className="gap-[26px] px-6 pt-14">
        <Block>
          <h1 className="font-display text-[40px] leading-[1.12] text-white">
            CREATE AN
            <br />
            ACCOUNT<span className="text-primary">.</span>
          </h1>
        </Block>

        <Block className="flex flex-col gap-5">
          <Field label="Username" />
          <Field label="Password" type="password" right={<IconEye className="size-5 text-[#8c8c8c]" />} />
          <Field
            label="Repeat Password"
            type="password"
            right={<IconEye className="size-5 text-[#8c8c8c]" />}
          />
        </Block>

        <Block>
          <div className="h-px w-full bg-white/15" />
        </Block>

        <Block className="flex justify-center">
          <SocialRow />
        </Block>
      </Screen>

      <div className="mt-auto px-6 pb-11 pt-8">
        <Block>
          <Button to="otp-verify" arrow className="text-lg">
            Join Us
          </Button>
        </Block>
      </div>
    </div>
  );
}

/* ---------- PDPA - Consent (262:1777) ---------- */

export function PdpaConsentScreen() {
  return (
    <Screen className="gap-4 px-4 pb-8 pt-2.5">
      <AppBar title="" />
      <Block>
        <h1 className="text-2xl font-bold leading-[1.3] text-white">ความยินยอมข้อมูลสุขภาพ</h1>
        <p className="pt-2 text-[13px] leading-[1.45] text-white/75">
          ก่อนเชื่อมต่อแอปออกกำลังกาย เราขอความยินยอมตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล (PDPA)
        </p>
      </Block>

      <Block className="flex flex-col gap-2.5">
        <InfoCard title="ข้อมูลที่เราเก็บ" titleTone="primary">
          ก้าว ระยะทาง เวลา แคลอรี ประเภทกีฬา และเวลาที่บันทึก
        </InfoCard>
        <InfoCard title="ข้อมูลที่เราไม่เก็บ">
          ชีพจรดิบ เส้นทาง GPS แบบละเอียด และข้อมูลการแพทย์
        </InfoCard>
        <InfoCard title="ใช้ทำอะไร">คำนวณ Move Point จัดอันดับ และตรวจสอบการแลกรางวัล</InfoCard>
        <InfoCard title="เก็บไว้นานแค่ไหน">
          24 เดือน หรือจนกว่าคุณจะลบบัญชี แล้วลบภายใน 30 วัน
        </InfoCard>
      </Block>

      <Block className="flex flex-col gap-3">
        <div className="flex items-start gap-2.5">
          <Checkbox checked />
          <p className="flex-1 text-[12.5px] leading-[1.45] text-white/85">
            ยินยอมให้ประมวลผลข้อมูลสุขภาพเพื่อคำนวณแต้มและจัดอันดับ (จำเป็น)
          </p>
        </div>
        <div className="flex items-start gap-2.5">
          <Checkbox />
          <p className="flex-1 text-[12.5px] leading-[1.45] text-white/85">
            ยินยอมรับข่าวสาร โปรโมชัน และข้อเสนอทางการตลาด (ไม่บังคับ)
          </p>
        </div>
      </Block>

      <Block className="flex items-center gap-1.5 text-xs">
        <span className="font-semibold text-primary">อ่าน นโยบายความเป็นส่วนตัว</span>
        <span className="text-white/50">·</span>
        <span className="font-semibold text-primary">ข้อกำหนดการใช้งาน</span>
      </Block>

      <Block className="flex flex-col gap-4">
        <Button to="connect-apps" className="py-[15px] text-[15px]">
          ยอมรับและไปต่อ
        </Button>
        <Button to="pdpa-declined" variant="secondary" className="py-[15px] text-[15px]">
          ไม่ยอมรับ
        </Button>
      </Block>
    </Screen>
  );
}

/* ---------- PDPA - Declined (269:712) ---------- */

export function PdpaDeclinedScreen() {
  return (
    <Screen className="gap-4 px-4 pb-8 pt-2">
      <Block>
        <span className="inline-flex rounded-full bg-amber/[0.15] px-3 py-1.5 text-[11.5px] font-medium text-amber">
          ยังไม่ได้ให้ความยินยอม
        </span>
        <h1 className="pt-2 text-[22px] font-bold leading-[1.3] text-white">
          ไม่ยินยอมก็ใช้ต่อได้ แต่จะทำได้ไม่ครบ
        </h1>
        <p className="pt-2 text-sm leading-[1.45] text-white">
          Move Point คำนวณจากข้อมูลกิจกรรมของคุณ ถ้าไม่ยินยอม เราจะไม่ดึงข้อมูลจากแอปออกกำลังกาย
        </p>
      </Block>

      <Block className="rounded-[24px] bg-surface p-4">
        <p className="pb-3 text-sm font-bold text-coral">สิ่งที่จะทำไม่ได้</p>
        <BulletList
          items={[
            'ซิงก์กิจกรรมจาก Strava, Apple Health และแอปอื่น',
            'สะสม Move Point และแลกของรางวัล',
            'ลุ้นรางวัลรายเดือน และเข้าร่วมอีเวนต์',
            'ขึ้นอันดับรายบุคคล คลับ และเพื่อน',
          ]}
        />
      </Block>

      <Block className="rounded-[24px] bg-surface p-4">
        <p className="pb-3 text-sm font-bold text-primary-active">สิ่งที่ยังใช้ได้ตามปกติ</p>
        <BulletList
          tone="green"
          items={[
            'บัญชีและโปรไฟล์ของคุณยังอยู่ครบ',
            'ดูกติกาแต้มและรายละเอียดของรางวัล',
            'แต้มที่สะสมไว้แล้วไม่หายไปไหน',
          ]}
        />
      </Block>

      <Block className="rounded-[24px] bg-white/[0.04] p-4">
        <p className="text-sm font-bold text-white">เปลี่ยนใจเมื่อไหร่ก็ได้</p>
        <p className="pt-1.5 text-[12.5px] leading-[1.45] text-white">
          เปิดความยินยอมใหม่ได้ที่ โปรไฟล์ › ความยินยอมข้อมูลสุขภาพ ข้อมูลเดิมของคุณไม่ถูกลบระหว่างนี้
        </p>
      </Block>

      <Block className="flex flex-col gap-2.5 pt-2">
        <Button to="pdpa-consent" className="h-12 text-lg">
          กลับไปให้ความยินยอม
        </Button>
        <Button to="dashboard" variant="ghost" className="h-12 text-lg">
          ใช้งานแบบจำกัดก่อน
        </Button>
      </Block>
    </Screen>
  );
}

/* ---------- Auth - OTP Verify (262:1816) ---------- */

export function OtpVerifyScreen() {
  return (
    <Screen className="gap-[18px] px-4 pb-8 pt-2.5">
      <AppBar title="" />
      <Block>
        <h1 className="text-2xl font-bold leading-[1.3] text-white">ยืนยันเบอร์โทร</h1>
        <p className="pt-1.5 text-[13px] leading-[1.45] text-white/75">
          ใส่รหัส 6 หลักที่ส่งไปที่ 08X-XXX-1234
        </p>
      </Block>

      <Block>
        <OtpBoxes code="429" />
      </Block>

      <Block>
        <InlineAlert>รหัสไม่ถูกต้อง ลองใหม่อีกครั้ง (เหลือ 4 ครั้ง)</InlineAlert>
      </Block>

      <Block className="flex items-center gap-1.5 text-[12.5px]">
        <span className="text-white/60">ส่งรหัสใหม่ได้ใน</span>
        <span className="font-bold text-primary">00:45</span>
      </Block>

      <Block className="flex flex-col gap-4">
        <Button to="pdpa-consent" className="py-[15px] text-[15px]">
          ยืนยัน
        </Button>
        <Button variant="secondary" className="py-[15px] text-[15px]">
          เปลี่ยนเบอร์โทร
        </Button>
      </Block>
    </Screen>
  );
}

/* ---------- Auth - Forgot Password (262:1847 / 262:1873) ---------- */

function ForgotPasswordBody({ error }: { error?: boolean }) {
  return (
    <Screen className="gap-[18px] px-4 pb-8 pt-2.5">
      <AppBar title="" />
      <Block>
        <h1 className="text-2xl font-bold leading-[1.3] text-white">ลืมรหัสผ่าน</h1>
        <p className="pt-1.5 text-[13px] leading-[1.45] text-white/75">
          กรอกอีเมลที่ใช้สมัคร เราจะส่งลิงก์ตั้งรหัสผ่านใหม่ให้
        </p>
      </Block>

      <Block>
        <DarkField
          label="อีเมล"
          value="somchawee@email.com"
          error={error ? 'ไม่พบอีเมลนี้ในระบบ ลองตรวจการสะกดอีกครั้ง' : undefined}
          hint={error ? undefined : 'หากไม่พบ กรุณาตรวจที่กล่องจดหมายขยะ ลิงก์มีอายุ 30 นาที'}
        />
      </Block>

      {error ? (
        <Block>
          <InlineAlert>
            ส่งลิงก์ไม่สำเร็จ เพราะไม่มีบัญชีที่ผูกกับอีเมลนี้ ลองสมัครใหม่หรือติดต่อทีมงาน
          </InlineAlert>
        </Block>
      ) : null}

      <Block className="flex flex-col gap-4 pt-2">
        <Button to="reset-password" className="py-[15px] text-[15px]">
          ส่งลิงก์รีเซ็ตรหัสผ่าน
        </Button>
        <Button to="login" variant="secondary" className="py-[15px] text-[15px]">
          กลับไปเข้าสู่ระบบ
        </Button>
      </Block>
    </Screen>
  );
}

export function ForgotPasswordScreen() {
  return <ForgotPasswordBody />;
}

export function ForgotPasswordErrorScreen() {
  return <ForgotPasswordBody error />;
}

/* ---------- Auth - Reset Password (262:1902) ---------- */

export function ResetPasswordScreen() {
  return (
    <Screen className="gap-[18px] px-4 pb-8 pt-2.5">
      <AppBar title="" />
      <Block>
        <h1 className="text-2xl font-bold leading-[1.3] text-white">ตั้งรหัสผ่านใหม่</h1>
        <p className="pt-1.5 text-[13px] leading-[1.45] text-white">
          ใช้รหัสผ่านที่คาดเดายาก และไม่ซ้ำกับที่อื่น
        </p>
      </Block>

      <Block className="flex flex-col gap-[18px]">
        <DarkField label="รหัสผ่านใหม่" type="password" value="••••••••••" />
        <DarkField label="ยืนยันรหัสผ่านใหม่" type="password" value="••••••••••" />
      </Block>

      <Block>
        <StrengthMeter level={3} />
      </Block>

      <Block className="rounded-[22px] bg-surface p-[14px]">
        <p className="pb-2 text-sm font-bold text-white">ต้องมีอย่างน้อย</p>
        {[
          ['✓', '8 ตัวอักษรขึ้นไป', true],
          ['✓', 'ตัวพิมพ์ใหญ่และพิมพ์เล็ก', true],
          ['✓', 'ตัวเลขอย่างน้อย 1 ตัว', true],
          ['○', 'อักขระพิเศษ 1 ตัว (แนะนำ)', false],
        ].map(([mark, text, done]) => (
          <div key={text as string} className="flex items-center gap-2 py-1 text-xs">
            <span className={`font-bold ${done ? 'text-primary' : 'text-white'}`}>{mark}</span>
            <span className="text-white">{text}</span>
          </div>
        ))}
      </Block>

      <Block className="pt-2">
        <Button to="login" className="py-[15px] text-[15px]">
          บันทึกรหัสผ่านใหม่
        </Button>
      </Block>
    </Screen>
  );
}
