import { Cordova, Plugin } from './plugin';
import { Observable } from 'rxjs/Observable';

/**
 * @name OneSignal
 * @description
 * The OneSignal plugin is an client implementation for using the [OneSignal](https://onesignal.com/) Service.
 * OneSignal is a simple implementation for delivering push notifications.
 *
 * Requires Cordova plugin: `onesignal-cordova-plugin`. For more info, please see the [OneSignal Cordova Docs](https://documentation.onesignal.com/docs/phonegap-sdk-installation).
 *
 * @usage
 * ```typescript
 * import { OneSignal } from 'ionic-native';
 *
 * OneSignal.startInit('b2f7f966-d8cc-11e4-bed1-df8f05be55ba', '703322744261');
 *
 * OneSignal.inFocusDisplaying(OneSignal.OSInFocusDisplayOption.InAppAlert);
 *
 * OneSignal.handleNotificationReceived().subscribe(() => {
 *  // do something when notification is received
 * });
 *
 * OneSignal.handleNotificationOpened().subscribe(() => {
 *   // do something when a notification is opened
 * });
 *
 * OneSignal.endInit();
 * ```
 *
 */
@Plugin({
  pluginName: 'OneSignal',
  plugin: 'onesignal-cordova-plugin',
  pluginRef: 'plugins.OneSignal',
  repo: 'https://github.com/OneSignal/OneSignal-Cordova-SDK'
})
export class OneSignal {

  /**
   * constants to use in inFocusDisplaying()
   */
  static OSInFocusDisplayOption = {
    None: 0,
    InAppAlert : 1,
    Notification : 2
  };

  /**
   * Start the initialization process. Once you are done configuring OneSignal, call the endInit function.
   *
   * @param {string} appId Your AppId from your OneSignal app
   * @param {string} googleProjectNumber The Google Project Number (which you can get from the Google Developer Portal) and the autoRegister option.
   * @returns {any}
   */
  @Cordova({ sync: true })
  static startInit(appId: string, googleProjectNumber: string): any { return; }

  /**
   * Callback to run when a notification is received
   * @return {Observable<any>}
   */
  @Cordova({
    observable: true
  })
  static handleNotificationReceived(): Observable<any> { return; }

  /**
   * Callback to run when a notification is opened
   * @return {Observable<any>}
   */
  @Cordova({
    observable: true
  })
  static handleNotificationOpened(): Observable<any> { return; }

  /**
   *
   * @param settings
   * @returns {any}
   */
  @Cordova({ sync: true })
  static iOSSettings(settings: {
    kOSSettingsKeyInAppLaunchURL: boolean;
    kOSSettingsKeyAutoPrompt: boolean;
  }): any { return; }

  /**
   * @returns {any}
   */
  @Cordova({ sync: true })
  static endInit(): any { return; }

  /**
   * Retrieve a list of tags that have been set on the user from the OneSignal server.
   *
   * @returns {Promise<any>} Returns a Promise that resolves when tags are recieved.
   */
  @Cordova()
  static getTags(): Promise<any> { return; }

  /**
   * Lets you retrieve the OneSignal user id and device token.
   * Your handler is called after the device is successfully registered with OneSignal.
   *
   * @returns {Promise<any>} Returns a Promise that reolves if the device was successfully registered.
   * It returns a JSON with `userId`and `pushToken`.
   */
  @Cordova()
  static getIds(): Promise<any> { return; }


  /**
   * Tag a user based on an app event of your choosing so later you can create segments on [onesignal.com](https://onesignal.com/) to target these users.
   * Recommend using sendTags over sendTag if you need to set more than one tag on a user at a time.
   *
   * @param {string} Key of your choosing to create or update.
   * @param {string} Value to set on the key. NOTE: Passing in a blank String deletes the key, you can also call deleteTag.
   */
  @Cordova({ sync: true })
  static sendTag(key: string, value: string): void { }

  /**
   * Tag a user based on an app event of your choosing so later you can create segments on [onesignal.com](https://onesignal.com/) to target these users.
   * Recommend using sendTags over sendTag if you need to set more than one tag on a user at a time.
   *
   * @param {string} Pass a json object with key/value pairs like: {key: "value", key2: "value2"}
   */
  @Cordova({ sync: true })
  static sendTags(json: any): void { }

  /**
   * Deletes a tag that was previously set on a user with `sendTag` or `sendTags`. Use `deleteTags` if you need to delete more than one.
   *
   * @param {string} Key to remove.
   */
  @Cordova({ sync: true })
  static deleteTag(key: string): void { }

  /**
   * Deletes tags that were previously set on a user with `sendTag` or `sendTags`.
   *
   * @param {Array<string>} Keys to remove.
   */
  @Cordova({ sync: true })
  static deleteTags(keys: string[]): void { }

  /**
   * Call this when you would like to prompt an iOS user to accept push notifications with the default system prompt.
   * Only use if you passed false to autoRegister when calling init.
   */
  @Cordova({ sync: true })
  static registerForPushNotifications(): void { }

  /**
  * Warning:
  * Only applies to Android and Amazon. You can call this from your UI from a button press for example to give your user's options for your notifications.
  *
  * By default OneSignal always vibrates the device when a notification is displayed unless the device is in a total silent mode.
  * Passing false means that the device will only vibrate lightly when the device is in it's vibrate only mode.
  *
  * @param {boolean} false to disable vibrate, true to re-enable it.
  */
  @Cordova({ sync: true })
  static enableVibrate(enable: boolean): void { }

  /**
  * Warning:
  * Only applies to Android and Amazon. You can call this from your UI from a button press for example to give your user's options for your notifications.
  *
  * By default OneSignal plays the system's default notification sound when the device's notification system volume is turned on.
  * Passing false means that the device will only vibrate unless the device is set to a total silent mode.
  *
  * @param {boolean} false to disable sound, true to re-enable it.
  */
  @Cordova({ sync: true })
  static enableSound(enable: boolean): void { }

  /**
  *
  * Setting to control how OneSignal notifications will be shown when one is received while your app is in focus. By default this is set to inAppAlert, which can be helpful during development.
  *
  * @param {number} displayOption Options are 0 = None, 1 = InAppAlert, and 2 = Notification.
  */
  @Cordova({ sync: true })
  static inFocusDisplaying(displayOption: number): void { }

  /**
  * You can call this method with false to opt users out of receiving all notifications through OneSignal.
  * You can pass true later to opt users back into notifications.
  *
  * @param {boolean} enable
  */
  @Cordova({ sync: true })
  static setSubscription(enable: boolean): void { }

  /**
  *
  * @param {notificationObj} Parameters see POST [documentation](https://documentation.onesignal.com/v2.0/docs/notifications-create-notification)
  * @returns {Promise<any>} Returns a Promise that resolves if the notification was send successfully.
  */
  @Cordova()
  static postNotification(notificationObj: OneSignalNotification): Promise<any> { return; }

  /**
  * Prompts the user for location permission to allow geotagging based on the "Location radius" filter on the OneSignal dashboard.
  */
  @Cordova({ sync: true })
  static promptLocation(): void { }

  /**
   *
   * @param email {string}
   */
  @Cordova({ sync: true })
  static syncHashedEmail(email: string): void { }

  /**
  * Enable logging to help debug if you run into an issue setting up OneSignal.
  * The logging levels are as follows: 0 = None, 1= Fatal, 2 = Errors, 3 = Warnings, 4 = Info, 5 = Debug, 6 = Verbose

  * The higher the value the more information is shown.
  *
  * @param {loglevel} contains two properties: logLevel (for console logging) and visualLevel (for dialog messages)
  */
  @Cordova({ sync: true })
  static setLogLevel(logLevel: {
    logLevel: number,
    visualLevel: number
  }): void { }

}

export interface OneSignalNotification {
  app_id: string;
  contents: any;
  headings?: any;
  isIos?: boolean;
  isAndroid?: boolean;
  isWP?: boolean;
  isWP_WNS?: boolean;
  isAdm?: boolean;
  isChrome?: boolean;
  isChromeWeb?: boolean;
  isSafari?: boolean;
  isAnyWeb?: boolean;
  included_segments?: string[];
  excluded_segments?: string[];
  include_player_ids?: string[];
  include_ios_tokens?: string[];
  include_android_reg_ids?: string[];
  include_wp_uris?: string[];
  include_wp_wns_uris?: string[];
  include_amazon_reg_ids?: string[];
  include_chrome_reg_ids?: string[];
  include_chrome_web_reg_ids?: string[];
  app_ids?: string[];
  tags?: any[];
  ios_badgeType?: string;
  ios_badgeCount?: number;
  ios_sound?: string;
  android_sound?: string;
  adm_sound?: string;
  wp_sound?: string;
  wp_wns_sound?: string;
  data?: any;
  buttons?: any;
  small_icon?: string;
  large_icon?: string;
  big_picture?: string;
  adm_small_icon?: string;
  adm_large_icon?: string;
  adm_big_picture?: string;
  chrome_icon?: string;
  chrome_big_picture?: string;
  chrome_web_icon?: string;
  firefox_icon?: string;
  url?: string;
  send_after?: string;
  delayed_option?: string;
  delivery_time_of_day?: string;
  android_led_color?: string;
  android_accent_color?: string;
  android_visibility?: number;
  content_available?: boolean;
  amazon_background_data?: boolean;
  template_id?: string;
  android_group?: string;
  android_group_message?: any;
  adm_group?: string;
  adm_group_message?: any;
  ttl?: number;
  priority?: number;
  ios_category?: string;
}
