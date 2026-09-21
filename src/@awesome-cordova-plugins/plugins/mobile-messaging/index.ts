import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

export type OS = 'Android' | 'iOS';
export type Gender = 'Male' | 'Female';
export type Event =
  | 'messageReceived'
  | 'notificationTapped'
  | 'tokenReceived'
  | 'registrationUpdated'
  /**
   * @deprecated No longer part of the supported events list in the upstream SDK (confirmed absent as of v8.6.0, and as far back as v5.0.0).
   */
  | 'geofenceEntered'
  | 'actionTapped'
  | 'installationUpdated'
  | 'userUpdated'
  | 'personalized'
  | 'depersonalized'
  | 'inAppChat.availabilityUpdated'
  | 'inAppChat.unreadMessageCounterUpdated'
  | 'deeplink'
  /**
   * @deprecated No longer part of the supported events list in the upstream SDK (confirmed absent as of v8.6.0, and as far back as v5.0.0).
   */
  | 'inAppChat.viewStateChanged';

export interface CustomEvent {
  definitionId: string;
  properties: Record<string, string | number | boolean>;
}

export interface Configuration {
  /**
   * The application code of your Application from Push Portal website
   */
  applicationCode: string;
  userDataJwt?: string;
  geofencingEnabled?: boolean;
  inAppChatEnabled?: boolean;
  fullFeaturedInAppsEnabled?: boolean | undefined;
  /**
   * Set to true to enable debug logging.
   */
  loggingEnabled?: boolean;
  /**
   * List of trusted domain strings for web views, e.g. ['example.com', 'trusted.org']
   */
  trustedDomains?: string[];
  /**
   * Message storage save callback
   */
  messageStorage?: CustomMessageStorage;
  defaultMessageStorage?: boolean;
  ios?: {
    notificationTypes?: string[]; // ['alert', 'badge', 'sound']
    forceCleanup?: boolean;
    /**
     * @deprecated Removed upstream in v7.3.0. Replaced by the top-level `loggingEnabled` option.
     */
    logging?: boolean;
    /**
     * Set to true to disable automatic registration for remote notifications. Default: false
     */
    registeringForRemoteNotificationsDisabled?: boolean;
    /**
     * Set to true to prevent the SDK from overriding UNUserNotificationCenterDelegate. Default: false
     */
    overridingNotificationCenterDelegateDisabled?: boolean;
    /**
     * Set to true to prevent the SDK from unregistering for remote notifications when stopping the SDK or after depersonalization. Default: false
     */
    unregisteringForRemoteNotificationsDisabled?: boolean;
    /**
     * Settings for web view configuration in in-app messages
     */
    webViewSettings?: {
      title?: string;
      barTintColor?: string;
      titleColor?: string;
      tintColor?: string;
    };
  };
  android?: {
    notificationIcon?: string; // a resource name for a status bar icon (without extension), located in '/platforms/android/app/src/main/res/mipmap'
    notificationChannelId?: string; // identifier for notification channel
    notificationChannelName?: string; // user visible name for notification channel
    notificationSound?: string; // a resource name for a notification sound (without extension), located in '/platforms/android/app/src/main/res/raw'
    multipleNotifications?: boolean; // set to 'true' to enable multiple notifications
    notificationAccentColor?: string; // set to hex color value in format '#RRGGBB' or '#AARRGGBB'
    withBannerForegroundNotificationsEnabled?: boolean; // set to true to always display Push notifications as Banner
    firebaseOptions?: {
      apiKey: string;
      applicationId: string;
      databaseUrl?: string;
      gaTrackingId?: string;
      gcmSenderId?: string;
      storageBucket?: string;
      projectId: string;
    };
  };
  privacySettings?: {
    applicationCodePersistingDisabled?: boolean;
    userDataPersistingDisabled?: boolean;
    carrierInfoSendingDisabled?: boolean;
    systemInfoSendingDisabled?: boolean;
  };
  notificationCategories?: [
    {
      identifier: string;
      actions?: [
        {
          identifier: string;
          title?: string;
          foreground?: boolean;
          authenticationRequired?: boolean;
          moRequired?: boolean;
          destructive?: boolean;
          icon?: string;
          textInputActionButtonTitle?: string;
          textInputPlaceholder?: string;
        },
      ];
    },
  ];
}

export interface UserData {
  externalUserId?: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  gender?: Gender;
  birthday?: string;
  phones?: string[];
  emails?: string[];
  tags?: string[];
  customAttributes?: Record<string, string | number | boolean | any[]>;
}

export interface Installation {
  isPrimaryDevice?: boolean;
  isPushRegistrationEnabled?: boolean;
  notificationsEnabled?: boolean;
  geoEnabled?: boolean;
  sdkVersion?: string;
  appVersion?: string;
  os?: OS;
  osVersion?: string;
  deviceManufacturer?: string;
  deviceModel?: string;
  deviceSecure?: boolean;
  language?: string;
  /**
   * @deprecated Renamed upstream in v7.9.1 to `deviceTimezoneOffset`.
   */
  deviceTimezoneId?: string;
  /**
   * UTC-related timezone offset that identifies the current timezone of a device.
   */
  deviceTimezoneOffset?: string;
  applicationUserId?: string;
  deviceName?: string;
  customAttributes?: Record<string, string | number | boolean>;
}

/**
 * User's unique ID. One UserIdentity parameter must be provided if used.
 */
export interface UserIdentity {
  phones?: string[];
  emails?: string[];
  externalUserId?: string;
}

export interface PersonalizeContext {
  userIdentity: UserIdentity;
  userAttributes?: Record<string, string | number | boolean | any[]>;
  forceDepersonalize?: boolean;
  /**
   * Set to true if you want to keep the installation as a lead when personalizing it. Default: false
   */
  keepAsLead?: boolean;
  /**
   * Set to true to mark this installation as primary for the personalized user. Default: false
   */
  setDeviceAsPrimary?: boolean;
}

export interface GeoData {
  area: GeoArea;
}

export interface GeoArea {
  id: string;
  center: GeoCenter;
  radius: number;
  title: string;
}

export interface GeoCenter {
  lat: number;
  lon: number;
}

export interface Message {
  messageId: string;
  title?: string;
  body?: string;
  sound?: string;
  silent?: boolean;
  customPayload?: Record<string, string>;
  internalData?: string;
  receivedTimestamp?: number;
  seenDate?: number;
  contentUrl?: string;
  seen?: boolean;
  geo?: boolean;
  originalPayload?: Record<string, string>; // iOS only
  vibrate?: boolean; // Android only
  icon?: string; // Android only
  category?: string; // Android only
  chat?: string;
  browserUrl?: string;
  deeplink?: string;
  webViewUrl?: string;
  inAppOpenTitle?: string | undefined;
  inAppDismissTitle?: string;
  topic?: string | undefined;
}

export interface MMInbox {
  countTotal: number;
  countUnread: number;
  messages?: Message[] | undefined;
}

export interface MMInboxFilterOptions {
  fromDateTime?: string | undefined;
  toDateTime?: string | undefined;
  topic?: string | undefined;
  limit?: number | undefined;
}

export interface MobileMessagingError {
  code: string;
  description: string;
  domain?: string;
}

export interface ChatConfig {
  ios?: {
    showModally: boolean;
  };
}

export class DefaultMessageStorage {
  @Cordova({ sync: true })
  find(messageId: string, callback: (message: Message) => void) {
    return;
  }

  @Cordova({ sync: true })
  findAll(callback: (messages: Message[]) => void) {
    return;
  }

  @Cordova({ sync: true })
  delete(messageId: string, callback: () => void) {
    return;
  }

  @Cordova({ sync: true })
  deleteAll(callback: () => void) {
    return;
  }
}

export class CustomMessageStorage {
  /**
   * Will be called by the plugin when messages are received and it's time to save them to the storage
   *
   * @param array of message objects to save to storage
   */
  @Cordova({ sync: true })
  save(messages: Message[]) {
    return;
  }

  /**
   * Will be called by the plugin to find a message by message id
   *
   * @param callback has to be called on completion with one parameter - found message object
   */
  @Cordova({ sync: true })
  find(messageId: string, callback: (message: Message) => void) {
    return;
  }

  /**
   * Will be called by the plugin to find all messages in the storage
   *
   * @param callback has to be called on completion with one parameter - an array of available messages
   */
  @Cordova({ sync: true })
  findAll(callback: (messages: Message[]) => void) {
    return;
  }

  /**
   * Will be called by the plugin when its time to initialize the storage
   */
  @Cordova({ sync: true })
  start() {
    return;
  }

  /**
   * Will be called by the plugin when its time to deinitialize the storage
   */
  @Cordova({ sync: true })
  stop() {
    return;
  }
}

export interface ChatSettingsIOS {
  title: string;
  sendButtonColor: string;
  navigationBarItemsColor: string;
  navigationBarColor: string;
  navigationBarTitleColor: string;
}

/**
 * Exception raised by the in-app chat widget and passed to the handler registered via `setChatExceptionHandler`.
 */
export interface ChatException {
  code: string;
  name: string;
  message: string;
  origin: string;
  platform: string;
}

/**
 * @name Mobile Messaging
 * @description
 * Mobile Messaging SDK is designed and developed to easily enable push notification channel in your mobile application.
 * In almost no time of implementation you get push notification in your application and access to the features of [Infobip IP Messaging Platform](https://portal.infobip.com/push/).
 * This document describes library integration steps for your Cordova project.
 *
 * For more info see [Cordova plugin docs](https://github.com/infobip/mobile-messaging-cordova-plugin)
 * @usage
 * ```typescript
 * import { MobileMessaging } from '@awesome-cordova-plugins/mobile-messaging/ngx';
 *
 *
 * constructor(private mobileMessaging: MobileMessaging) { }
 *
 * ...
 *
 *
 *  this.mobileMessaging.init({
 *    applicationCode: '<your_application_code>',
 *    userDataJwt: '<user_data_jwt>',
 *    geofencingEnabled: '<true/false>',
 *    defaultMessageStorage: '<true/false>',
 *    ios: {
 *      notificationTypes: ['alert', 'badge', 'sound']
 *    },
 *    android: {
 *      notificationIcon: <String; a resource name for a status bar icon (without extension), located in '/platforms/android/app/src/main/res/mipmap'>,
 *      multipleNotifications: <Boolean; set to 'true' to enable multiple notifications>,
 *      notificationAccentColor: <String; set to hex color value in format '#RRGGBB' or '#AARRGGBB'>
 *     }}, (err) => {
 *      ...
 *    });
 *
 *  this.mobileMessaging.register('messageReceived').subscribe((message: Message) => {
 *    ...
 *  });
 *
 * ```
 */
@Plugin({
  pluginName: 'MobileMessaging',
  plugin: 'com-infobip-plugins-mobilemessaging',
  pluginRef: 'MobileMessaging',
  repo: 'https://github.com/infobip/mobile-messaging-cordova-plugin',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class MobileMessaging extends AwesomeCordovaNativePlugin {
  /**
   * Starts a new Mobile Messaging session.
   *
   * @name init
   * @param config. Configuration for Mobile Messaging
   * @param config
   * @param {Function} callback. Called after successful start of Mobile Messaging SDK initialization. Register for registrationUpdated event to know when it's ready to be used.
   * @param onInitError
   * @param {Function} onInitError. Error callback
   */
  @Cordova({ sync: true })
  init(config: Configuration, callback?: () => void, onInitError?: (error: MobileMessagingError) => void) {
    return;
  }

  /**
   * Register to event coming from MobileMessaging library.
   *
   * @name register
   * @param event
   */
  @Cordova({
    sync: true,
  })
  register(event: Event, handler: Function): void {
    return;
  }

  /**
   * Alias for `register`.
   */
  @Cordova({
    sync: true,
  })
  on(event: Event, handler: Function): void {
    return;
  }

  /**
   * Un register from MobileMessaging library event.
   *
   * @name unregister
   * @param {string} eventName
   * @param event
   * @param {Function} handler will be unregistered from event
   */
  @Cordova({
    sync: true,
  })
  unregister(event: Event, handler: Function): void {
    return;
  }

  /**
   * Alias for `unregister`.
   */
  @Cordova({
    sync: true,
  })
  off(event: Event, handler: Function): void {
    return;
  }

  /**
   * Sends an event to the server eventually, handles possible errors and do retries for you.
   *
   * @name submitEvent
   * @param {Object} eventData. An object containing event data
   * {
   *   definitionId: "eventDefinitionId"
   *   properties: {
   *     "stringAttribute": "string",
   *     "numberAttribute": 1,
   *     "dateAttribute": "2020-02-26T09:41:57Z",
   *     "booleanAttribute": true
   *   }
   * @param event
   * }
   */
  @Cordova({
    sync: true,
  })
  submitEvent(event: CustomEvent): void {
    return;
  }

  /**
   * Sends an event to the server immediately.
   * You have to handle possible connection or server errors, do retries yourself.
   *
   * @name submitEventImmediately
   * @param {Object} eventData. An object containing event data
   * {
   *   definitionId: "eventDefinitionId"
   *   properties: {
   *     "stringAttribute": "string",
   *     "numberAttribute": 1,
   *     "dateAttribute": "2020-02-26T09:41:57Z",
   *     "booleanAttribute": true
   *   }
   * }
   * @param event
   * @param {Function} callback will be called on result, you have to handle error and do retries yourself
   */
  @Cordova({
    observable: true,
  })
  submitEventImmediately(event: CustomEvent): Observable<any> {
    return;
  }

  /**
   * Saves user data to the server.
   *
   * @name saveUser
   * @param userData
   * @param {Object} userData. An object containing user data
   */
  @Cordova()
  saveUser(userData: UserData): Promise<UserData> {
    return;
  }

  /**
   * Fetch user data from the server.
   *
   * @name fetchUser
   */
  @Cordova()
  fetchUser(): Promise<UserData> {
    return;
  }

  /**
   * Gets user data from the locally stored cache.
   *
   * @name getUser
   */
  @Cordova()
  getUser(): Promise<UserData> {
    return;
  }

  /**
   * Saves installation to the server.
   *
   * @name saveInstallation
   * @param installation
   * @param {Object} installation. An object containing installation data
   */
  @Cordova()
  saveInstallation(installation: Installation): Promise<Installation> {
    return;
  }

  /**
   * Fetches installation from the server.
   *
   * @name fetchInstallation
   */
  @Cordova()
  fetchInstallation(): Promise<Installation> {
    return;
  }

  /**
   * Gets locally cached installation.
   *
   * @name getInstallation
   */
  @Cordova()
  getInstallation(): Promise<Installation> {
    return;
  }

  /**
   * Sets any installation as primary for this user.
   *
   * @name setInstallationAsPrimary
   * @param {string} pushRegistrationId of an installation
   * @param {boolean} primary or not
   */
  @Cordova()
  setInstallationAsPrimary(pushRegistrationId: string, primary: boolean): Promise<any> {
    return;
  }

  /**
   * Performs personalization of the current installation on the platform.
   *
   * @name personalize
   * @param context
   * @param {Object} context. An object containing user identity information as well as additional user attributes.
   */
  @Cordova()
  personalize(context: PersonalizeContext): Promise<PersonalizeContext> {
    return;
  }

  /**
   * Performs depersonalization of the current installation on the platform.
   *
   * @name depersonalize
   */
  @Cordova()
  depersonalize(): Promise<any> {
    return;
  }

  /**
   * Performs depersonalization of the installation referenced by pushRegistrationId.
   *
   * @param {string} pushRegistrationId of the remote installation to depersonalize
   */
  @Cordova()
  depersonalizeInstallation(pushRegistrationId: string): Promise<any> {
    return;
  }

  /**
   * Mark messages as seen
   *
   * @name markMessagesSeen
   * @param {Array} messageIds of identifiers of message to mark as seen
   */
  @Cordova()
  markMessagesSeen(messageIds: string[]): Promise<any> {
    return;
  }

  /**
   * Displays built-in error dialog so that user can resolve errors during sdk initialization.
   *
   * @name showDialogForError
   * @param {number} errorCode to display dialog for
   */
  @Cordova()
  showDialogForError(errorCode: number): Promise<any> {
    return;
  }

  @Cordova({ sync: true })
  defaultMessageStorage(): DefaultMessageStorage | undefined {
    return;
  }

  /**
   * Displays chat view.
   *
   * @name showChat
   * @param config
   * @param {ChatConfig} chat config
   */
  @Cordova()
  showChat(config?: ChatConfig): Promise<any> {
    return;
  }

  /**
   * Setup chat settings for iOS only
   *
   * @param settings
   */
  @Cordova()
  setupiOSChatSettings(settings: ChatSettingsIOS): Promise<any> {
    return;
  }

  /**
   * Returns unread in-app chat push messages counter.
   * The counter increments each time the application receives in-app chat push message
   * (this usually happens when chat screen is inactive or the application is in background/terminated state).
   */
  @Cordova({ sync: true })
  getMessageCounter(onResult: (counter: number) => void) {
    return;
  }

  /**
   * MobileMessaging plugin automatically resets the counter to 0 whenever user opens the in-app chat screen.
   * However, use the following API in case you need to manually reset the counter.
   */
  @Cordova()
  resetMessageCounter() {
    return;
  }

  /**
   * Registers for Android POST_NOTIFICATIONS permission
   * @name registerForAndroidRemoteNotifications
   */
  @Cordova()
  registerForAndroidRemoteNotifications() {
    return;
  }

  /**
   * Fetch mobile inbox data from the server.
   *
   * @name fetchInboxMessages
   * @param token access token (JWT in a strictly predefined format) required for current user to have access to the Inbox messages
   * @param externalUserId External User ID is meant to be an ID of a user in an external (non-Infobip) service
   * @param filterOptions filtering options applied to messages list in response. Nullable, will return default number of messages
   * @param callback will be called on success
   * @param {Function} errorCallback will be called on error
   */
  @Cordova()
  fetchInboxMessages(token: string, externalUserId: string, filterOptions: MMInboxFilterOptions): Promise<MMInbox> {
    return;
  }

  /**
   * Fetch mobile inbox without token from the server.
   *
   * @name fetchInboxMessagesWithoutToken
   * @param externalUserId External User ID is meant to be an ID of a user in an external (non-Infobip) service
   * @param filterOptions filtering options applied to messages list in response. Nullable, will return default number of messages
   * @param callback will be called on success
   * @param {Function} errorCallback will be called on error
   */
  @Cordova()
  fetchInboxMessagesWithoutToken(externalUserId: string, filterOptions: MMInboxFilterOptions): Promise<MMInbox> {
    return;
  }

  /**
   * Asynchronously marks inbox messages as seen
   *
   * @param externalUserId External User ID is meant to be an ID of a user in an external (non-Infobip) service
   * @param messageIds array of inbox messages identifiers that need to be marked as seen
   * @param callback will be called on success
   * @param {Function} errorCallback will be called on error
   */
  @Cordova()
  setInboxMessagesSeen(externalUserId: string, messageIds: string[]): Promise<string[]> {
    return;
  }

  /**
   * Updates JWT used for user data fetching and personalization.
   *
   * @name setUserDataJwt
   * @param jwt - JWT in a predefined format
   * @param {Function} errorCallback will be called on error
   */
  @Cordova()
  setUserDataJwt(jwt: string, errorCallback?: (error: MobileMessagingError) => void) {
    return;
  }

  /**
   * Un register all handlers for a MobileMessaging library event.
   *
   * @name unregisterAllHandlers
   * @param event
   */
  @Cordova({
    sync: true,
  })
  unregisterAllHandlers(event: Event): void {
    return;
  }

  /**
   * Sets the JWT provider used to authenticate in-app chat sessions.
   *
   * The `jwtProvider` callback returns a JSON Web Token (JWT) used for chat authentication,
   * either synchronously (returning a string) or asynchronously (returning a Promise<string>).
   * It may be invoked multiple times during the widget's lifecycle, so it should always return
   * a fresh and valid JWT.
   *
   * @param jwtProvider A callback function that returns a JWT string or a Promise that resolves to one.
   * @param errorCallback Optional error handler for catching exceptions thrown during JWT generation.
   */
  @Cordova({
    sync: true,
  })
  setChatJwtProvider(jwtProvider: () => string | Promise<string>, errorCallback?: (error: any) => void): void {
    return;
  }

  /**
   * Sets the chat exception handler in case you want to intercept and display errors coming
   * from the chat on your own (instead of relying on the prebuilt error banners).
   * Passing `null` removes the previously set handler.
   *
   * @param exceptionHandler A function called with the chat exception when it is triggered, or `null` to remove the handler.
   * @param errorCallback Optional error handler for catching exceptions thrown when handling exceptions from the native side.
   */
  @Cordova({
    sync: true,
  })
  setChatExceptionHandler(
    exceptionHandler: ((exception: ChatException) => void) | null,
    errorCallback?: (error: any) => void
  ): void {
    return;
  }

  /**
   * Checks if in-app chat is currently available.
   *
   * @name isChatAvailable
   * @param resultCallback will be called upon completion with the boolean availability value.
   */
  @Cordova({ sync: true })
  isChatAvailable(resultCallback: (available: boolean) => void): void {
    return;
  }

  /**
   * Sets chat language.
   *
   * @name setLanguage
   * @param language to be set
   * @param {Function} errorCallback will be called on error
   */
  @Cordova()
  setLanguage(language: string, errorCallback?: (error: MobileMessagingError) => void) {
    return;
  }

  /**
   * Set contextual data of the widget.
   *
   * @param data contextual data in the form of a JSON string
   * @param allMultiThreadStrategy multi-thread strategy flag, true -> ALL, false -> ACTIVE
   * @param {Function} errorCallback will be called on error
   */
  @Cordova()
  sendContextualData(
    data: string,
    allMultiThreadStrategy: boolean,
    errorCallback?: (error: MobileMessagingError) => void
  ) {
    return;
  }

  /**
   * Cleans up the SDK, removing all data and stopping all services.
   * After cleanup, you should call `init()` again with a new configuration to restart the SDK.
   * The JWT supplier is also cleared during cleanup.
   *
   * @name cleanup
   */
  @Cordova()
  cleanup(): Promise<any> {
    return;
  }

  /**
   * Sets chat customization.
   *
   * @name setChatCustomization
   * @param customization Chat customization JSON object.
   */
  @Cordova()
  setChatCustomization(customization: any): Promise<any> {
    return;
  }

  /**
   * Sets widget theme.
   *
   * @name setWidgetTheme
   * @param widgetTheme Widget theme name.
   * @param {Function} errorCallback will be called on error
   */
  @Cordova()
  setWidgetTheme(widgetTheme: string, errorCallback?: (error: MobileMessagingError) => void) {
    return;
  }
}
