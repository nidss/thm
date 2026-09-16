'use client';

import type { ComponentType } from 'react';
import type { ScreenSlug } from './screenList';

import { ActivityScreen } from './screens/ActivityScreen';
import { DashboardScreen } from './screens/DashboardScreen';
import { EventsScreen } from './screens/EventsScreen';
import { RankingScreen } from './screens/RankingScreen';
import { RewardsScreen } from './screens/RewardsScreen';

import * as Auth from './screens/auth';
import * as Setup from './screens/setup';

/**
 * ผูก slug ของหน้าจอเข้ากับ component จริง
 * ถ้า slug ไหนยังไม่มี component จะใช้ Placeholder แทน (ดู PhoneFrame)
 */
export const REGISTRY: Partial<Record<ScreenSlug, ComponentType>> = {
  // 1. สมัคร เข้าสู่ระบบ และความยินยอม
  hero: Auth.HeroScreen,
  signup: Auth.SignupScreen,
  login: Auth.LoginScreen,
  'pdpa-consent': Auth.PdpaConsentScreen,
  'pdpa-declined': Auth.PdpaDeclinedScreen,
  'otp-verify': Auth.OtpVerifyScreen,
  'forgot-password': Auth.ForgotPasswordScreen,
  'forgot-password-error': Auth.ForgotPasswordErrorScreen,
  'reset-password': Auth.ResetPasswordScreen,

  // 2. ตั้งค่าเริ่มต้นและการซิงก์
  'connect-apps': Setup.ConnectAppsScreen,
  'set-goals': Setup.SetGoalsScreen,
  'permission-notification': Setup.PermissionNotificationScreen,
  'sync-loading': Setup.SyncLoadingScreen,
  'sync-success': Setup.SyncSuccessScreen,
  'sync-error': Setup.SyncErrorScreen,

  // 3. หน้าหลักและกิจกรรม
  dashboard: DashboardScreen,
  activity: ActivityScreen,
  // 'activity-item-detail': Home.ActivityItemDetailScreen,  // TODO: ยังไม่ได้ทำ
  // 'activity-manual-upload': Home.ActivityManualUploadScreen,  // TODO: ยังไม่ได้ทำ
  // notifications: Home.NotificationsScreen,  // TODO: ยังไม่ได้ทำ
  // 'empty-no-activity': Home.EmptyNoActivityScreen,  // TODO: ยังไม่ได้ทำ
  // 'error-no-internet': Home.ErrorNoInternetScreen,  // TODO: ยังไม่ได้ทำ
  // skeleton: Home.SkeletonScreen,  // TODO: ยังไม่ได้ทำ

  // 4. แต้มและของรางวัล
  rewards: RewardsScreen,
  // 'reward-detail': Rewards.RewardDetailScreen,  // TODO: ยังไม่ได้ทำ
  // 'redeem-confirm': Rewards.RedeemConfirmScreen,  // TODO: ยังไม่ได้ทำ
  // 'redeem-success': Rewards.RedeemSuccessScreen,  // TODO: ยังไม่ได้ทำ
  // 'redeem-error': Rewards.RedeemErrorScreen,  // TODO: ยังไม่ได้ทำ
  // 'my-coupons': Rewards.MyCouponsScreen,  // TODO: ยังไม่ได้ทำ
  // 'points-history': Rewards.PointsHistoryScreen,  // TODO: ยังไม่ได้ทำ

  // 5. ลุ้นรางวัลและการรับรางวัล
  // 'lucky-draw': Draw.LuckyDrawScreen,  // TODO: ยังไม่ได้ทำ
  // 'lucky-draw-my-tickets': Draw.LuckyDrawMyTicketsScreen,  // TODO: ยังไม่ได้ทำ
  // 'lucky-draw-result': Draw.LuckyDrawResultScreen,  // TODO: ยังไม่ได้ทำ
  // 'lucky-draw-all-results': Draw.LuckyDrawAllResultsScreen,  // TODO: ยังไม่ได้ทำ
  // 'claim-verify-identity': Draw.ClaimVerifyIdentityScreen,  // TODO: ยังไม่ได้ทำ
  // 'claim-shipping-address': Draw.ClaimShippingAddressScreen,  // TODO: ยังไม่ได้ทำ
  // 'claim-tax-payment': Draw.ClaimTaxPaymentScreen,  // TODO: ยังไม่ได้ทำ
  // 'claim-submitted': Draw.ClaimSubmittedScreen,  // TODO: ยังไม่ได้ทำ

  // 6. อีเวนต์และชาเลนจ์
  events: EventsScreen,
  // 'event-detail-joined': Events.EventDetailJoinedScreen,  // TODO: ยังไม่ได้ทำ
  // 'event-join-confirm': Events.EventJoinConfirmScreen,  // TODO: ยังไม่ได้ทำ
  // 'event-joined': Events.EventJoinedScreen,  // TODO: ยังไม่ได้ทำ
  // 'event-leave-confirm': Events.EventLeaveConfirmScreen,  // TODO: ยังไม่ได้ทำ
  // 'event-invite-friends': Events.EventInviteFriendsScreen,  // TODO: ยังไม่ได้ทำ

  // 7. อันดับ คลับ และเพื่อน
  ranking: RankingScreen,
  // 'club-detail': Social.ClubDetailScreen,  // TODO: ยังไม่ได้ทำ
  // 'club-manage-members': Social.ClubManageMembersScreen,  // TODO: ยังไม่ได้ทำ
  // 'friends-find-add': Social.FriendsFindAddScreen,  // TODO: ยังไม่ได้ทำ

  // 8. โปรไฟล์และการตั้งค่า
  // 'profile-settings': Profile.ProfileSettingsScreen,  // TODO: ยังไม่ได้ทำ
  // 'profile-edit': Profile.ProfileEditScreen,  // TODO: ยังไม่ได้ทำ
  // 'connected-app-manage': Profile.ConnectedAppManageScreen,  // TODO: ยังไม่ได้ทำ
  // 'connected-app-disconnect-confirm': Profile.ConnectedAppDisconnectScreen,  // TODO: ยังไม่ได้ทำ
  // 'help-point-rules': Profile.HelpPointRulesScreen,  // TODO: ยังไม่ได้ทำ
  // 'support-contact': Profile.SupportContactScreen,  // TODO: ยังไม่ได้ทำ
  // 'account-pause': Profile.AccountPauseScreen,  // TODO: ยังไม่ได้ทำ
  // 'account-delete': Profile.AccountDeleteScreen,  // TODO: ยังไม่ได้ทำ
  // 'account-delete-scheduled': Profile.AccountDeleteScheduledScreen,  // TODO: ยังไม่ได้ทำ
};
