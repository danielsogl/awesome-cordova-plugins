import { Injectable } from '@angular/core';
import {
  Plugin,
  Cordova,
  AwesomeCordovaNativePlugin,
  CordovaInstance,
  InstanceProperty,
} from '@awesome-cordova-plugins/core';
import { Observable, Observer } from 'rxjs';

declare const window: Window & { Airship: any };

/**
 * @name Airship
 * @description
 * This plugin does something
 * @usage
 * ```typescript
 * import { Airship } from '@awesome-cordova-plugins/airship/ngx';
 *
 * constructor(private airShip: Airship) { }
 *
 * ...
 *
 * this.platform.ready().then(() => {
 *    this.airShip.initialize();
 *    this.airShip.setUserNotificationsEnabled(true)
 *      .then((result: any) => console.log(res))
 *      .catch((error: any) => console.error(error));
 * })
 *
 * ```
 */
@Plugin({
  pluginName: 'Airship',
  plugin: '@ua/cordova-airship',
  pluginRef: 'Airship',
  repo: 'https://www.npmjs.com/package/@ua/cordova-airship',
  install: 'ionic cordova plugin add @ua/cordova-airship',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Airship extends AwesomeCordovaNativePlugin {
  public actions: AirshipActions;
  public analytics: AirshipAnalytics;
  public channel: AirshipChannel;
  public contact: AirshipContact;
  public featureFlagManager: AirshipFeatureFlagManager;
  public inApp: AirshipInApp;
  public locale: AirshipLocale;
  public messageCenter: AirshipMessageCenter;
  public preferenceCenter: AirshipPreferenceCenter;
  public privacyManager: AirshipPrivacyManager;
  public push: AirshipPush;

  /**
   * Call after platform ready
   */
  initialize() {
    this.channel = new AirshipChannel();
    this.contact = new AirshipContact();
    this.push = new AirshipPush();
  }

  /**
   * Calls takeOff. If Airship is already configured for
   * the app session, the new config will be applied on the next
   * app init.
   */
  @Cordova({ sync: true })
  takeOff(config: AirshipConfig): Promise<boolean> {
    return;
  }

  /**
   * Checks if Airship is ready.
   */
  @Cordova()
  isFlying(): Promise<boolean> {
    return;
  }

  /**
   * Event when a deep link is received.
   */
  @Cordova({ observable: true })
  onDeepLink(): Observable<DeepLinkEvent> {
    return;
  }
}

export type JsonValue = string | number | boolean | null | JsonObject | JsonArray;

export type JsonObject = {
  [key: string]: JsonValue;
};

export type JsonArray = JsonValue[];

export interface ChannelCreatedEvent {
  /**
   * The channel ID.
   */
  channelId: string;
}

export interface PushTokenReceivedEvent {
  /**
   * The push token.
   */
  pushToken: string;
}

/**
 * Event fired when a push is received.
 */
export interface PushReceivedEvent {
  pushPayload: PushPayload;
  isForeground: boolean;
}

/**
 * The push payload.
 */
export interface PushPayload {
  /**
   * The alert.
   */
  alert?: string;
  /**
   * The title.
   */
  title?: string;
  /**
   * The subtitle.
   */
  subtitle?: string;
  /**
   * The notification ID.
   */
  notificationId?: string;
  /**
   * The notification extras.
   */
  extras: JsonObject;
}

/**
 * Event fired when the user initiates a notification response.
 */
export interface NotificationResponseEvent {
  /**
   * The push notification.
   */
  pushPayload: PushPayload;

  /**
   * The action button ID, if available.
   */
  actionId?: string;

  /**
   * Indicates whether the response was a foreground action.
   * This value is always if the user taps the main notification,
   * otherwise it is defined by the notification action button.
   */
  isForeground: boolean;
}

/**
 * Push notification status.
 */
export interface PushNotificationStatus {
  /**
   * If user notifications are enabled on [Airship.push].
   */
  isUserNotificationsEnabled: boolean;

  /**
   * If notifications are allowed at the system level for the application.
   */
  areNotificationsAllowed: boolean;

  /**
   * If the push feature is enabled on [Airship.privacyManager].
   */
  isPushPrivacyFeatureEnabled: boolean;

  /*
   * If push registration was able to generate a token.
   */
  isPushTokenRegistered: boolean;

  /*
   * If Airship is able to send and display a push notification.
   */
  isOptedIn: boolean;

  /*
   * Checks for isUserNotificationsEnabled, areNotificationsAllowed, and isPushPrivacyFeatureEnabled. If this flag
   * is true but `isOptedIn` is false, that means push token was not able to be registered.
   */
  isUserOptedIn: boolean;
}

/**
 * Event fired when the notification status changes.
 */
export interface PushNotificationStatusChangedEvent {
  /**
   * The push notification status.
   */
  status: PushNotificationStatus;
}

/**
 * Event fired when the Message Center is updated.
 */
export interface MessageCenterUpdatedEvent {
  /**
   * The unread message count.
   */
  messageUnreadCount: number;
  /**
   * The total message count.
   */
  messageCount: number;
}

/**
 * Event fired when the Message Center is requested to be displayed.
 */
export interface DisplayMessageCenterEvent {
  /**
   * The message ID, if available.
   */
  messageId?: string;
}

/**
 * Event fired when a deep link is opened.
 */
export interface DeepLinkEvent {
  /**
   * The deep link string.
   */
  deepLink: string;
}

/**
 * Event fired when a preference center is requested to be displayed.
 */
export interface DisplayPreferenceCenterEvent {
  /**
   * The preference center Id.
   */
  preferenceCenterId: string;
}

/**
 * iOS options
 */
export namespace iOS {
  /**
   * Quiet time
   */
  export interface QuietTime {
    /**
     * Start hour. Must be 0-23.
     */
    startHour: number;

    /**
     * Start minute. Must be 0-59.
     */
    startMinute: number;

    /**
     * End hour. Must be 0-23.
     */
    endHour: number;

    /**
     * End minute. Must be 0-59.
     */
    endMinute: number;
  }

  /**
   * Enum of notification options. iOS only.
   */
  export enum NotificationOption {
    /**
     * Alerts.
     */
    Alert = 'alert',
    /**
     * Sounds.
     */
    Sound = 'sound',
    /**
     * Badges.
     */
    Badge = 'badge',
    /**
     * Car play.
     */
    CarPlay = 'car_play',
    /**
     * Critical Alert.
     */
    CriticalAlert = 'critical_alert',
    /**
     * Provides app notification settings.
     */
    ProvidesAppNotificationSettings = 'provides_app_notification_settings',
    /**
     * Provisional.
     */
    Provisional = 'provisional',
  }

  /**
   * Enum of foreground notification options.
   */
  export enum ForegroundPresentationOption {
    /**
     * Play the sound associated with the notification.
     */
    Sound = 'sound',
    /**
     * Apply the notification's badge value to the app’s icon.
     */
    Badge = 'badge',

    /**
     * Show the notification in Notification Center. On iOS 13 an older,
     * this will also show the notification as a banner.
     */
    List = 'list',

    /**
     * Present the notification as a banner. On iOS 13 an older,
     * this will also show the notification in the Notification Center.
     */
    Banner = 'banner',
  }

  /**
   * Enum of authorized notification options.
   */
  export enum AuthorizedNotificationSetting {
    /**
     * Alerts.
     */
    Alert = 'alert',
    /**
     * Sounds.
     */
    Sound = 'sound',
    /**
     * Badges.
     */
    Badge = 'badge',
    /**
     * CarPlay.
     */
    CarPlay = 'car_play',
    /**
     * Lock screen.
     */
    LockScreen = 'lock_screen',
    /**
     * Notification center.
     */
    NotificationCenter = 'notification_center',
    /**
     * Critical alert.
     */
    CriticalAlert = 'critical_alert',
    /**
     * Announcement.
     */
    Announcement = 'announcement',
    /**
     * Scheduled delivery.
     */
    ScheduledDelivery = 'scheduled_delivery',
    /**
     * Time sensitive.
     */
    TimeSensitive = 'time_sensitive',
  }

  /**
   * Enum of authorized status.
   */
  export enum AuthorizedNotificationStatus {
    /**
     * Not determined.
     */
    NotDetermined = 'not_determined',

    /**
     * Denied.
     */
    Denied = 'denied',

    /**
     * Authorized.
     */
    Authorized = 'authorized',

    /**
     * Provisional.
     */
    Provisional = 'provisional',

    /**
     * Ephemeral.
     */
    Ephemeral = 'ephemeral',
  }

  export interface AuthorizedNotificationSettingsChangedEvent {
    /**
     * Authorized settings.
     */
    authorizedSettings: AuthorizedNotificationSetting[];
  }
}

/**
 * Airship config environment
 */
export interface ConfigEnvironment {
  /**
   * App key.
   */
  appKey: string;

  /**
   * App secret.
   */
  appSecret: string;

  /**
   * Optional log level.
   */
  logLevel?: LogLevel;
}

/**
 * Cancellable
 */
export interface Cancellable {
  /**
   * Cancels
   */
  cancel(): void;
}

/**
 * Possible sites.
 */
export type Site = 'us' | 'eu';

/**
 * Log levels.
 */
export type LogLevel = 'verbose' | 'debug' | 'info' | 'warning' | 'error' | 'none';

/**
 * Airship config
 */
export interface AirshipConfig {
  /**
   * Default environment.
   */
  default?: ConfigEnvironment;

  /**
   * Development environment. Overrides default environment if inProduction is false.
   */
  development?: ConfigEnvironment;

  /**
   * Production environment. Overrides default environment if inProduction is true.
   */
  production?: ConfigEnvironment;

  /**
   * Cloud site.
   */
  site?: Site;

  /**
   * Switches the environment from development or production. If the value is not
   * set, Airship will determine the value at runtime.
   */
  inProduction?: boolean;

  /**
   * URL allow list.
   */
  urlAllowList?: string[];

  /**
   * URL allow list for open URL scope.
   */
  urlAllowListScopeOpenUrl?: string[];

  /**
   * URL allow list for JS bridge injection.
   */
  urlAllowListScopeJavaScriptInterface?: string[];

  /**
   * Enables delayed channel creation.
   * Deprecated. Use the Private Manager to disable all features instead.
   */
  isChannelCreationDelayEnabled?: boolean;

  /**
   * Initial config URL for custom Airship domains. The URL
   * should also be added to the urlAllowList.
   */
  initialConfigUrl?: string;

  /**
   * Enabled features. Defaults to all.
   */
  enabledFeatures?: Feature[];

  /**
   * Enables channel capture feature.
   * This config is enabled by default.
   */
  isChannelCaptureEnabled?: boolean;

  /**
   * Whether to suppress console error messages about missing allow list entries during takeOff.
   * This config is disabled by default.
   */
  suppressAllowListError?: boolean;

  /**
   * Pauses In-App Automation on launch.
   */
  autoPauseInAppAutomationOnLaunch?: boolean;

  /**
   * iOS config.
   */
  ios?: {
    /**
     * itunesId for rate app and app store deep links.
     */
    itunesId?: string;

    /**
     * The message center style plist path.
     */
    messageCenterStyleConfig?: string;

    /**
     * If set to `true`, the SDK will use the preferred locale. Otherwise it will use the current locale.
     * Defaults to false.
     */
    useUserPreferredLocale?: boolean;
  };

  /**
   * Android config.
   */
  android?: {
    /**
     * App store URI
     */
    appStoreUri?: string;

    /**
     * Fcm app name if using multiple FCM projects.
     */
    fcmFirebaseAppName?: string;

    /**
     * Notification config.
     */
    notificationConfig?: Android.NotificationConfig;
  };
}

export namespace Android {
  /**
   * Android notification config.
   */
  export interface NotificationConfig {
    /**
     * The icon resource name.
     */
    icon?: string;
    /**
     * The large icon resource name.
     */
    largeIcon?: string;
    /**
     * The default android notification channel ID.
     */
    defaultChannelId?: string;
    /**
     * The accent color. Must be a hex value #AARRGGBB.
     */
    accentColor?: string;
  }
}

/**
 * Enum of authorized Features.
 */
export enum Feature {
  InAppAutomation = 'in_app_automation',
  MessageCenter = 'message_center',
  Push = 'push',
  Analytics = 'analytics',
  TagsAndAttributes = 'tags_and_attributes',
  Contacts = 'contacts',
}

/**
 * All available features.
 */
export const FEATURES_ALL = Object.values(Feature);

/**
 * Custom event
 */
export interface CustomEvent {
  /**
   * Event name
   */
  eventName: string;
  /**
   * Event value
   */
  eventValue?: number;
  /**
   * Event properties
   */
  properties: JsonObject;
  /**
   * Transaction ID
   */
  transactionId?: string;
  /**
   * Interaction ID
   */
  interactionId?: string;
  /**
   * Interaction type
   */
  interactionType?: string;
}

/**
 * Subscription Scope types.
 */
export enum SubscriptionScope {
  App = 'app',
  Web = 'web',
  Sms = 'sms',
  Email = 'email',
}

export interface InboxMessage {
  /**
   * The message ID. Needed to display, mark as read, or delete the message.
   */
  id: string;
  /**
   * The message title.
   */
  title: string;
  /**
   * The message sent date in milliseconds.
   */
  sentDate: number;
  /**
   * Optional - The icon url for the message.
   */
  listIconUrl: string;
  /**
   * The unread / read status of the message.
   */
  isRead: boolean;
  /**
   * String to String map of any message extras.
   */
  extras: Record<string, string>;
}

// ---
// See: https://github.com/urbanairship/web-push-sdk/blob/master/src/remote-data/preference-center.ts
// ---

/**
 * A preference center definition.
 *
 * @typedef {object} PreferenceCenter
 * @property {string} id the ID of the preference center
 * @property {Array<PreferenceCenter.CommonSection>} sections a list of sections
 * @property {?CommonDisplay} display display information
 */
export type PreferenceCenter = {
  id: string;
  sections: Section[];
  display?: CommonDisplay;
};

/**
 * Preference center display information.
 * @typedef {object} CommonDisplay
 * @property {string} name
 * @property {?string} description
 */
export type CommonDisplay = {
  name: string;
  description?: string;
};

export type Icon = {
  icon: string;
};

export type IconDisplay = CommonDisplay & Partial<Icon>;

export interface ItemBase {
  type: unknown;
  id: string;
  display: CommonDisplay;
  conditions?: Condition[];
}

/**
 * A channel subscription item.
 * @typedef {object} ChannelSubscriptionItem
 * @property {"channel_subscription"} type
 * @property {string} id the item identifier
 * @property {?CommonDisplay} display display information
 * @property {string} subscription_id the subscription list id
 */
export interface ChannelSubscriptionItem extends ItemBase {
  type: 'channel_subscription';
  subscription_id: string;
}

export interface ContactSubscriptionGroupItem extends ItemBase {
  type: 'contact_subscription_group';
  id: string;
  subscription_id: string;
  components: ContactSubscriptionGroupItemComponent[];
}

export interface ContactSubscriptionGroupItemComponent {
  scopes: SubscriptionScope[];
  display: Omit<CommonDisplay, 'description'>;
}

export interface ContactSubscriptionItem extends ItemBase {
  type: 'contact_subscription';
  scopes: SubscriptionScope[];
  subscription_id: string;
}

export interface AlertItem extends ItemBase {
  type: 'alert';
  display: IconDisplay;
  button?: Button;
}

export interface ConditionBase {
  type: unknown;
}

export interface NotificationOptInCondition extends ConditionBase {
  type: 'notification_opt_in';
  when_status: 'opt_in' | 'opt_out';
}

export type Condition = NotificationOptInCondition;

// Changed from `unknown` in spec
export type Actions = {
  [key: string]: JsonValue;
};

export interface Button {
  text: string;
  content_description?: string;
  actions: Actions;
}

export interface SectionBase {
  type: unknown;
  id: string;
  display?: CommonDisplay;
  items: Item[];
}

/**
 * @typedef {object} CommonSection
 * @property {"section"} type
 * @property {string} id the section identifier
 * @property {?CommonDisplay} display display information
 * @property {Array<PreferenceCenter.ChannelSubscriptionItem>} items list of
 *   section items
 */
export interface CommonSection extends SectionBase {
  type: 'section';
}

export interface LabeledSectionBreak extends SectionBase {
  type: 'labeled_section_break';
  items: never;
}

export type Item = ChannelSubscriptionItem | ContactSubscriptionGroupItem | ContactSubscriptionItem | AlertItem;

export type Section = CommonSection | LabeledSectionBreak;

/**
 * An interface representing the eligibility status of a flag, and optional
 * variables associated with the flag.
 */
export interface FeatureFlag {
  /**
   * A boolean representing flag eligibility; will be `true` if the current
   * contact is eligible for the flag.
   */
  readonly isEligible: boolean;
  /**
   * A variables associated with the flag, if any. Will be `null` if no data
   * is associated with the flag, or if the flag does not exist.
   */
  readonly variables: unknown | null;
  /**
   * A boolean representing if the flag exists or not. For ease of use and
   * deployment, asking for a flag by any name will return a `FeatureFlag`
   * interface, even if the flag was not found to exist. However this property
   * may be checked to determine if the flag was actually resolved to a known
   * flag name.
   */
  readonly exists: boolean;

  /**
   * Reporting Metadata, the shape of which is private and not to be relied
   * upon. When not provided, an interaction cannot be tracked on the flag.
   * @ignore
   */
  readonly _internal: unknown;
}

/**
 * Editor for tag groups.
 */
export interface TagGroupEditor {
  /**
   * Adds tags to a tag group.
   *
   * @param tagGroup The tag group.
   * @param tags Tags to add.
   * @return The tag group editor instance.
   */
  addTags(group: string, tags: string[]): TagGroupEditor;

  /**
   * Removes tags from the tag group.
   *
   * @param tagGroup The tag group.
   * @param tags Tags to remove.
   * @return The tag group editor instance.
   */
  removeTags(group: string, tags: string[]): TagGroupEditor;

  /**
   * Overwrite the current set of tags on the Tag Group.
   *
   * @param tagGroup The tag group.
   * @param tags Tags to set.
   * @return The tag group editor instance.
   */
  setTags(group: string, tags: Array<string>): TagGroupEditor;

  /**
   * Applies the tag changes.
   * @param success Success callback.
   * @param error Error callback.
   */
  apply(success?: () => void, error?: (err: string) => void): void;
}

/**
 * Editor for device tags.
 */
export interface TagEditor {
  /**
   * Adds tags to a channel.
   *
   * @param tags Tags to add.
   * @return The tag editor instance.
   */
  addTags(tags: string[]): TagEditor;

  /**
   * Removes tags from the channel.
   *
   * @param tags Tags to remove.
   * @return The tag editor instance.
   */
  removeTags(tags: string[]): TagEditor;

  /**
   * Applies the tag changes.
   * @param success Success callback.
   * @param error Error callback.
   */
  apply(success?: () => void, error?: (err: string) => void): void;
}

/**
 * Subscription list editor.
 */
export interface SubscriptionListEditor {
  /**
   * Subscribes to a list.
   *
   * @param listId The subscription list identifier.
   * @return The editor.
   */
  subscribe(listId: string): SubscriptionListEditor;

  /**
   * Unsubscribe from a list.
   *
   * @param listId The subscription list identifier.
   * @return The editor.
   */
  unsubscribe(listId: string): SubscriptionListEditor;

  /**
   * Applies the subscription list changes.
   * @param success Success callback.
   * @param error Error callback.
   */
  apply(success?: () => void, error?: (err: string) => void): void;
}

/**
 * Scoped subscription list editor.
 */
export interface ScopedSubscriptionListEditor {
  /**
   * Subscribes to a list in the given scope.
   *
   * @param listId The subscription list identifier.
   * @param scope The subscription scope to subscribe.
   */
  subscribe(listId: string, scope: SubscriptionScope): ScopedSubscriptionListEditor;

  /**
   * Unsubscribe from a list.
   *
   * @param listId The subscription list identifier.
   * @param scope The subscription scope to unsubscribe.
   */
  unsubscribe(listId: string, scope: SubscriptionScope): ScopedSubscriptionListEditor;

  /**
   * Applies the subscription list changes.
   * @param success Success callback.
   * @param error Error callback.
   */
  apply(success?: () => void, error?: (err: string) => void): void;
}

/**
 * Editor for attributes.
 */
export interface AttributeEditor {
  /**
   * Adds an attribute.
   *
   * @param value The attribute value.
   * @param name The attribute name.
   * @return The attribute editor instance.
   */
  setAttribute(name: string, value: string | number | boolean | Date): AttributeEditor;

  /**
   * Removes an attribute.
   * @param name The name of the attribute to remove.
   * @return The attribute editor instance.
   */
  removeAttribute(name: string): AttributeEditor;

  /**
   * Applies the attribute operations.
   * @param success Success callback.
   * @param error Error callback.
   */
  apply(success?: () => void, error?: (err: string) => void): void;
}

/**
 * Airship Push.
 */
class AirshipPush {
  private _objectInstance: any = window.Airship.push;

  @InstanceProperty()
  readonly android: AirshipPushAndroid;

  @InstanceProperty()
  readonly ios: AirshipPushIOS;

  /**
   * Enables/disables notifications on Airship.
   *
   * When enabled, it will cause the user to be prompted for
   * the permission on platforms that support it.
   * To get the result of the prompt, use `enableUserNotifications`.
   * @param enabled true to enable, false to disable
   */
  @CordovaInstance()
  setUserNotificationsEnabled(enabled: boolean): Promise<void> {
    return;
  }

  /**
   * Enables user notifications.
   */
  @CordovaInstance()
  isUserNotificationsEnabled(): Promise<boolean> {
    return;
  }

  /**
   * Gets the notification status.
   */
  @CordovaInstance()
  getNotificationStatus(): Promise<PushNotificationStatus> {
    return;
  }

  /**
   * Event when the notification status has changed.
   */
  onNotificationStatusChanged(): Observable<PushNotificationStatusChangedEvent> {
    return this.listenerToObservable('onNotificationStatusChanged');
  }

  /**
   * Gets the push token if generated.
   * Use the event listener `onPushTokenReceived` to be notified when its available.
   */
  @CordovaInstance()
  getPushToken(): Promise<string> {
    return;
  }

  /**
   * Gets the list of active notifications.
   *
   * On Android, this list only includes notifications
   * sent through Airship.
   */
  @CordovaInstance()
  getActiveNotifications(): Promise<PushPayload[]> {
    return;
  }

  /**
   * Clears all notifications for the app.
   */
  @CordovaInstance()
  clearNotifications(): Promise<void> {
    return;
  }

  /**
   * Clears a specific notification.
   *
   * On Android, you can use this method to clear
   * notifications outside of Airship, The identifier is in
   * the format of <tag>:<id>.
   * @param identifier The identifier.
   */
  @CordovaInstance()
  clearNotification(identifier: string): Promise<void> {
    return;
  }

  /**
   * Push received listener.
   */
  onPushReceived(): Observable<PushReceivedEvent> {
    return this.listenerToObservable('onPushReceived');
  }

  /**
   * Notification response listener.
   */
  onNotificationResponse(): Observable<NotificationResponseEvent> {
    return this.listenerToObservable('onNotificationResponse');
  }

  /**
   * Push token listener.
   */
  onPushTokenReceived(): Observable<PushTokenReceivedEvent> {
    return this.listenerToObservable('onPushTokenReceived');
  }

  private listenerToObservable<T>(fnName: string) {
    return new Observable<T>((observer) => {
      const cans: Cancellable = this._objectInstance[fnName](observer.next.bind(observer));
      return () => {
        console.log('cancel', fnName);
        cans.cancel();
      };
    });
  }
}

/**
 * iOS Push.
 */
export interface AirshipPushIOS {
  /**
   * Sets the foreground presentation options.
   * @param options The foreground options.
   * @param success Success callback.
   * @param error Error callback.
   */
  setForegroundPresentationOptions(
    options: iOS.ForegroundPresentationOption[],
    success?: () => void,
    error?: (err: string) => void
  ): void;

  /**
   * Sets the notification options.
   * @param options The notification options.
   * @param success Success callback.
   * @param error Error callback.
   */
  setNotificationOptions(options: iOS.NotificationOption[], success?: () => void, error?: (err: string) => void): void;

  /**
   * Checks if autobadge is enabled.
   * @param success Success callback.
   * @param error Error callback.
   */
  isAutobadgeEnabled(success: (enabled: boolean) => void, error?: (err: string) => void): void;

  /**
   * Enables/disables autobadge.
   * @param enabled true to enable, false to disable.
   * @param success Success callback.
   * @param error Error callback.
   */
  setAutobadgeEnabled(enabled: boolean, success?: () => void, error?: (err: string) => void): void;

  /**
   * Set the badge number.
   * @param badge The badge number.
   * @param success Success callback.
   * @param error Error callback.
   */
  setBadgeNumber(badge: number, success?: () => void, error?: (err: string) => void): void;

  /**
   * Gets the badge number.
   * @param success Success callback.
   * @param error Error callback.
   */
  getBadgeNumber(success: (badge: number) => void, error?: (err: string) => void): void;

  /**
   * Gets the list of authorized notification settings.
   * @param success Success callback.
   * @param error Error callback.
   */
  getAuthorizedNotificationSettings(
    success: (settings: iOS.AuthorizedNotificationSetting[]) => void,
    error?: (err: string) => void
  ): void;

  /**
   * Gets the authorized notification status.
   * @param success Success callback.
   * @param error Error callback.
   */
  getAuthorizedNotificationStatus(
    success: (status: iOS.AuthorizedNotificationStatus) => void,
    error?: (err: string) => void
  ): void;

  /**
   * Enables/disables quiet time.
   *
   * @param enabled true to enable, false to disable
   * @param success Success callback.
   * @param error Error callback.
   */
  setQuietTimeEnabled(enabled: boolean, success?: () => void, error?: (err: string) => void): void;

  /**
   * Checks if quiet time is enabled or not.
   * @param success Success callback.
   * @param error Error callback.
   */
  isQuietTimeEnabled(success: (enabled: boolean) => void, error?: (err: string) => void): void;

  /**
   * Sets quiet time.
   *
   * @param quietTime The quiet time.
   * @param success Success callback.
   * @param error Error callback.
   */
  setQuietTime(quietTime: iOS.QuietTime, success?: () => void, error?: (err: string) => void): void;

  /**
   * Gets the quiet time settings.
   * @param success Success callback.
   * @param error Error callback.
   */
  getQuietTime(success: (quietTime?: iOS.QuietTime) => void, error?: (err: string) => void): void;

  /**
   * An event when the authorized push settings changed.
   *
   * @param callback The callback.
   * @return A cancellable that can be used to cancel the listener.
   */
  onAuthorizedSettingsChanged(callback: (event: iOS.AuthorizedNotificationSettingsChangedEvent) => void): Cancellable;
}

/**
 * Android Push.
 */
export interface AirshipPushAndroid {
  /**
   * Checks if a notification category/channel is enabled.
   * @param channel The channel name.
   * @param success Success callback.
   * @param error Error callback.
   */
  isNotificationChannelEnabled(
    channel: string,
    success: (enabled: boolean) => void,
    error?: (err: string) => void
  ): void;

  /**
   * Sets the notification config.
   * @param config The notification config.
   * @param success Success callback.
   * @param error Error callback.
   */
  setNotificationConfig(config: Android.NotificationConfig, success?: () => void, error?: (err: string) => void): void;

  /**
   * Enables/disables showing notifications in the foreground.
   * @param enabled true to enable, false to disable.
   * @param success Success callback.
   * @param error Error callback.
   */
  setForegroundNotificationsEnabled(enabled: boolean, success?: () => void, error?: (err: string) => void): void;

  /**
   * Checks if foreground notifications are enabled.
   * @param success Success callback.
   * @param error Error callback.
   */
  setForegroundNotificationsEnabled(success: (enabled: boolean) => void, error?: (err: string) => void): void;
}
/**
 * Airship Privacy Manager.
 */
export interface AirshipPrivacyManager {
  /**
   * Sets the current set of enabled features.
   * @param features The features to set.
   * @param success Success callback.
   * @param error Error callback.
   */
  setEnabledFeatures(features: Feature[], success?: () => void, error?: (err: string) => void): void;

  /**
   * Gets the current enabled features.
   * @param success Success callback.
   * @param error Error callback.
   */
  getEnabledFeatures(success: (features: Feature[]) => void, error?: (err: string) => void): void;

  /**
   * Enables additional features.
   * @param features The features to enable.
   * @param success Success callback.
   * @param error Error callback.
   */
  enableFeatures(features: Feature[], success?: () => void, error?: (err: string) => void): void;

  /**
   * Disable features.
   * @param features The features to disable.
   * @param success Success callback.
   * @param error Error callback.
   */
  disableFeatures(features: Feature[], success?: () => void, error?: (err: string) => void): void;

  /**
   * Checks if the features are enabled or not.
   * @param features The features to check.
   * @param success Success callback to receive the check result.
   * @param error Error callback.
   */
  isFeaturesEnabled(features: Feature[], success: (isEnabled: boolean) => void, error?: (err: string) => void): void;
}

/**
 * Airship Preference Center.
 */
export interface AirshipPreferenceCenter {
  /**
   * Requests to display a preference center.
   *
   * Will either emit an event to display the
   * Preference Center if auto launch is disabled,
   * or display the OOTB UI.
   * @param preferenceCenterId The preference center Id.
   * @param success Success callback.
   * @param error Error callback.
   */
  display(preferenceCenterId: string, success?: () => void, error?: (err: string) => void): void;

  /**
   * Gets the preference center config.
   * @param preferenceCenterId The preference center Id.
   * @param success Success callback.
   * @param error Error callback.
   */
  getConfig(
    preferenceCenterId: string,
    success: (config: PreferenceCenter) => void,
    error?: (err: string) => void
  ): void;

  /**
   * Enables or disables showing the OOTB UI when requested to display by either
   * `display` or by a notification with some other action.
   * @param preferenceCenterId The preference center Id.
   * @param autoLaunch true to show OOTB UI, false to emit events.
   */
  setAutoLaunchDefaultPreferenceCenter(preferenceCenterId: string, autoLaunch: boolean): void;

  /**
   * Event when the message center a preference center is requested to display.
   *
   * @param callback The callback.
   * @return A cancellable that can be used to cancel the listener.
   */
  onDisplay(callback: (event: DisplayPreferenceCenterEvent) => void): Cancellable;
}
/**
 * Airship Message Center
 */
export interface AirshipMessageCenter {
  /**
   * Gets the unread count.
   * @param success Success callback.
   * @param error Error callback.
   */
  getUnreadCount(success: (count: number) => void, error?: (err: string) => void): void;

  /**
   * Gets the inbox messages.
   * @param success Success callback.
   * @param error Error callback.
   */
  getMessages(success: (messages: InboxMessage[]) => void, error?: (err: string) => void): void;

  /**
   * Marks a message as read.
   * @param messageId The message Id.
   * @param success Success callback.
   * @param error Error callback.
   */
  markMessageRead(messageId: string, success?: () => void, error?: (err: string) => void): void;

  /**
   * Deletes a message.
   * @param messageId The message Id.
   * @param success Success callback.
   * @param error Error callback.
   */
  deleteMessage(messageId: string, success?: () => void, error?: (err: string) => void): void;

  /**
   * Dismisses the OOTB message center if displayed.
   * @param success Success callback.
   * @param error Error callback.
   */
  dismiss(success?: () => void, error?: (err: string) => void): void;

  /**
   * Requests to display the Message Center.
   *
   * Will either emit an event to display the
   * Message Center if auto launch message center
   * is disabled, or display the OOTB message center.
   * @param messageId Optional message Id.
   * @param success Success callback.
   * @param error Error callback.
   */
  display(messageId?: string, success?: () => void, error?: (err: string) => void): void;

  /**
   * Overlays the message view. Should be used to display the actual
   * message body in a custom Message Center.
   *
   * @param messageId The message Id.
   * @param success Success callback.
   * @param error Error callback.
   */
  showMessageView(messageId: string, success?: () => void, error?: (err: string) => void): void;

  /**
   * Refreshes the messages.
   * @param success Success callback.
   * @param error Error callback.
   */
  refreshMessages(success?: () => void, error?: (err: string) => void): void;

  /**
   * Enables or disables showing the OOTB UI when requested to display by either
   * `display` or by a notification with a Message Center action.
   * @param autoLaunch true to show OOTB UI, false to emit events.
   */
  setAutoLaunchDefaultMessageCenter(autoLaunch: boolean): void;

  /**
   * Event when the message center is requested to be displayed.
   *
   * @param callback The callback.
   * @return A cancellable that can be used to cancel the listener.
   */
  onDisplay(callback: (event: DisplayMessageCenterEvent) => void): Cancellable;

  /**
   * Event when the message list is updated.
   *
   * @param callback The callback.
   * @return A cancellable that can be used to cancel the listener.
   */
  onUpdated(callback: (event: MessageCenterUpdatedEvent) => void): Cancellable;
}

/**
 * Manages locale used by Airship messaging.
 */
export interface AirshipLocale {
  /**
   * Sets the locale override.
   * @param localeIdentifier The locale identifier.
   * @param success Success callback.
   * @param error Error callback.
   */
  setLocaleOverride(localeIdentifier: string, success?: () => void, error?: (err: string) => void): void;

  /**
   * Clears the locale override.
   * @param success Success callback.
   * @param error Error callback.
   */
  clearLocaleOverride(success?: () => void, error?: (err: string) => void): void;

  /**
   * Gets the current locale.
   * @param success Success callback.
   * @param error Error callback.
   */
  getLocale(success: (locale: string) => void, error?: (err: string) => void): void;
}
/**
 * Airship InApp Experiences.
 */
export interface AirshipInApp {
  /**
   * Pauses messages.
   * @param paused `true` to pause, `false` to resume.
   * @param success Success callback.
   * @param error Error callback.
   */
  setPaused(paused: boolean, success?: () => void, error?: (err: string) => void): void;

  /**
   * Checks if messages are paused.
   * @param success Success callback.
   * @param error Error callback.
   */
  isPaused(success: (paused: boolean) => void, error?: (err: string) => void): void;

  /**
   * Sets the display interval for messages.
   * @param milliseconds Display interval.
   * @param success Success callback.
   * @param error Error callback.
   */
  setDisplayInterval(milliseconds: number, success?: () => void, error?: (err: string) => void): void;

  /**
   * Gets the display interval.
   * @param success Success callback.
   * @param error Error callback.
   */
  getDisplayInterval(success: (milliseconds: number) => void, error?: (err: string) => void): void;
}

/**
 * Airship feature flag manager.
 */
export interface AirshipFeatureFlagManager {
  /**
   * Retrieve a given flag's status and associated data by its name.
   * @param flagName The flag name
   * @param success Success callback.
   * @param error Error callback.
   */
  flag(flagName: string, success: (flag: FeatureFlag) => void, error?: (err: string) => void): void;

  /**
   * Tracks a feature flag interaction event.
   * @param flag The flag
   * @param success Success callback.
   * @param error Error callback.
   */
  trackInteraction(flag: FeatureFlag, success?: () => void, error?: (err: string) => void): void;
}

/**
 * Airship contact.
 */
class AirshipContact {
  private _objectInstance = window.Airship.contact;

  /**
   * Edits attributes.
   */
  @CordovaInstance({ sync: true })
  editAttributes(): AttributeEditor {
    return;
  }

  /**
   * Edits subscription lists.
   */
  @CordovaInstance({ sync: true })
  editSubscriptionLists(): ScopedSubscriptionListEditor {
    return;
  }

  /**
   * Edits tag groups.
   */
  @CordovaInstance({ sync: true })
  editTagGroups(): TagGroupEditor {
    return;
  }

  /**
   * Gets the named user Id.
   */
  @CordovaInstance()
  getNamedUserId(): Promise<string> {
    return;
  }

  /**
   * Gets the contacts subscription lists.
   */
  @CordovaInstance()
  getSubscriptionLists(): Promise<Record<string, SubscriptionScope[]>> {
    return;
  }

  /**
   * Identifies the contact with a named user Id.
   * @param namedUser The named user Id.
   */
  @CordovaInstance()
  identify(namedUser: string): Promise<void> {
    return;
  }

  /**
   * Notifies the contact of a remote login.
   */
  @CordovaInstance()
  notifyRemoteLogin(): Promise<void> {
    return;
  }

  /**
   * Resets the contact.
   */
  @CordovaInstance()
  reset(): Promise<void> {
    return;
  }
}

/**
 * Airship channel.
 */
class AirshipChannel {
  private _objectInstance = window.Airship.channel;

  /**
   * Enables channel creation if channel creation has been delayed.
   * It is only necessary to call this when isChannelCreationDelayEnabled
   * has been set to `true` in the airship config.
   * @deprecated. Use the Private Manager to disable all features instead.
   */
  @CordovaInstance()
  enableChannelCreation(): Promise<void> {
    return;
  }

  /**
   * Edits device tags.
   * @returns A tag editor.
   */
  @CordovaInstance({ sync: true })
  editTags(): TagEditor {
    return;
  }

  /**
   * Gets the device tags.
   */
  @CordovaInstance()
  getTags(): Promise<string[]> {
    return;
  }

  /**
   * Gets the channel Id.
   */
  @CordovaInstance()
  getChannelId(): Promise<string> {
    return;
  }

  /**
   * Gets a list of the channel's subscriptions.
   */
  @CordovaInstance()
  getSubscriptionLists(): Promise<string[]> {
    return;
  }

  /**
   * Edits tag groups.
   */
  @CordovaInstance({ sync: true })
  editTagGroups(): TagGroupEditor {
    return;
  }

  /**
   * Edits attributes.
   */
  @CordovaInstance({ sync: true })
  editAttributes(): AttributeEditor {
    return;
  }

  /**
   * Edits subscription lists.
   */
  @CordovaInstance({ sync: true })
  editSubscriptionLists(): SubscriptionListEditor {
    return;
  }

  /**
   * Event when the channel (and channel Id) is created.
   */
  @CordovaInstance({ observable: true, successIndex: 0 })
  onChannelCreated(): Observable<ChannelCreatedEvent> {
    return;
  }
}

/**
 * Airship analytics.
 */
export interface AirshipAnalytics {
  /**
   * Associates an identifier.
   *
   * @param key The key.
   * @param identifier The identifier. `null` to remove.
   * @param success Success callback.
   * @param error Error callback.
   */
  associateIdentifier(key: string, identifier?: string, success?: () => void, error?: (err: string) => void): void;

  /**
   * Tracks a screen.
   * @param screen The screen. `null` to stop tracking.
   * @param success Success callback.
   * @param error Error callback.
   */
  trackScreen(screen?: string, success?: () => void, error?: (err: string) => void): void;

  /**
   * Adds a custom event.
   * @param event The custom event.
   * @param success Success callback.
   * @param error Error callback.
   */
  addCustomEvent(event: CustomEvent, success?: () => void, error?: (err: string) => void): void;
}

/**
 * Airship actions.
 */
export interface AirshipActions {
  /**
   * Runs an Airship action.
   *
   * @param name The name of the action.
   * @param value The action's value.
   * @param success Success callback with the action result.
   * @param error Error callback.
   */
  run(
    actionName: string,
    actionValue?: JsonValue,
    success?: (result: JsonValue | null | undefined) => void,
    error?: (err: string) => void
  ): void;
}
