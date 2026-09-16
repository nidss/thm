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
import * as Home from './screens/home';
import * as Rewards from './screens/rewards';
import * as Draw from './screens/draw';
import * as Events from './screens/events';
import * as Social from './screens/social';
import * as Profile from './screens/profile';

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
  'activity-item-detail': Home.ActivityItemDetailScreen,
  'activity-manual-upload': Home.ActivityManualUploadScreen,
  notifications: Home.NotificationsScreen,
  'empty-no-activity': Home.EmptyNoActivityScreen,
  'error-no-internet': Home.ErrorNoInternetScreen,
  skeleton: Home.SkeletonScreen,

  // 4. แต้มและของรางวัล
  rewards: RewardsScreen,
  'reward-detail': Rewards.RewardDetailScreen,
  'redeem-confirm': Rewards.RedeemConfirmScreen,
  'redeem-success': Rewards.RedeemSuccessScreen,
  'redeem-error': Rewards.RedeemErrorScreen,
  'my-coupons': Rewards.MyCouponsScreen,
  'points-history': Rewards.PointsHistoryScreen,

  // 5. ลุ้นรางวัลและการรับรางวัล
  'lucky-draw': Draw.LuckyDrawScreen,
  'lucky-draw-my-tickets': Draw.LuckyDrawMyTicketsScreen,
  'lucky-draw-result': Draw.LuckyDrawResultScreen,
  'lucky-draw-all-results': Draw.LuckyDrawAllResultsScreen,
  'claim-verify-identity': Draw.ClaimVerifyIdentityScreen,
  'claim-shipping-address': Draw.ClaimShippingAddressScreen,
  'claim-tax-payment': Draw.ClaimTaxPaymentScreen,
  'claim-submitted': Draw.ClaimSubmittedScreen,

  // 6. อีเวนต์และชาเลนจ์
  events: EventsScreen,
  'event-detail-joined': Events.EventDetailJoinedScreen,
  'event-join-confirm': Events.EventJoinConfirmScreen,
  'event-joined': Events.EventJoinedScreen,
  'event-leave-confirm': Events.EventLeaveConfirmScreen,
  'event-invite-friends': Events.EventInviteFriendsScreen,

  // 7. อันดับ คลับ และเพื่อน
  ranking: RankingScreen,
  'club-detail': Social.ClubDetailScreen,
  'club-manage-members': Social.ClubManageMembersScreen,
  'friends-find-add': Social.FriendsFindAddScreen,

  // 8. โปรไฟล์และการตั้งค่า
  'profile-settings': Profile.ProfileSettingsScreen,
  'profile-edit': Profile.ProfileEditScreen,
  'connected-app-manage': Profile.ConnectedAppManageScreen,
  'connected-app-disconnect-confirm': Profile.ConnectedAppDisconnectScreen,
  'help-point-rules': Profile.HelpPointRulesScreen,
  'support-contact': Profile.SupportContactScreen,
  'account-pause': Profile.AccountPauseScreen,
  'account-delete': Profile.AccountDeleteScreen,
  'account-delete-scheduled': Profile.AccountDeleteScheduledScreen,
};
