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
 * OneSignal.init('b2f7f966-d8cc-11e4-bed1-df8f05be55ba',
 *                        {googleProjectNumber: '703322744261'})
 *  .subscribe(jsonData => {
 *    console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
 *  });
 *
 * OneSignal.enableInAppAlertNotification(true);
 * ```
 *
 */
export declare class OneSignal {
    /**
     * Only required method you need to call to setup OneSignal to receive push notifications. Call this from the `deviceready` event.
     *
     * @param {appId} Your AppId from your OneSignal app
     * @param {options} The Google Project Number (which you can get from the Google Developer Potal) and the autoRegister option.
     * @returns {Observable} when a notification is received. Handle your notification action here.
     */
    static init(appId: string, options: {
        googleProjectNumber: string;
        autoRegister: boolean;
    }): Observable<any>;
    /**
     * Call this when you would like to prompt an iOS user to accept push notifications with the default system prompt.
     * Only use if you passed false to autoRegister when calling init.
     */
    static registerForPushNotifications(): void;
    /**
     * Tag a user based on an app event of your choosing so later you can create segments on [onesignal.com](https://onesignal.com/) to target these users.
     * Recommend using sendTags over sendTag if you need to set more than one tag on a user at a time.
     *
     * @param {key} Key of your choosing to create or update.
     * @param {value} Value to set on the key. NOTE: Passing in a blank String deletes the key, you can also call deleteTag.
     */
    static sendTag(key: string, value: string): void;
    /**
   * Tag a user based on an app event of your choosing so later you can create segments on [onesignal.com](https://onesignal.com/) to target these users.
   * Recommend using sendTags over sendTag if you need to set more than one tag on a user at a time.
   *
   * @param {json} Pass a json object with key/value pairs like: {key: "value", key2: "value2"}
   */
    static sendTags(json: any): void;
    /**
    * Retrieve a list of tags that have been set on the user from the OneSignal server.
    *
    * @returns {Promise} Returns a Promise that resolves when tags are recieved.
    */
    static getTags(): Promise<any>;
    /**
    * Deletes a tag that was previously set on a user with `sendTag` or `sendTags`. Use `deleteTags` if you need to delete more than one.
    *
    * @param {key} Key to remove.
    */
    static deleteTag(key: string): void;
    /**
    * Deletes tags that were previously set on a user with `sendTag` or `sendTags`.
    *
    * @param {keys} Keys to remove.
    */
    static deleteTags(keys: string[]): void;
    /**
    * Lets you retrieve the OneSignal user id and device token.
    * Your handler is called after the device is successfully registered with OneSignal.
    *
    * @returns {Promise} Returns a Promise that reolves if the device was successfully registered.
    * It returns a JSON with `userId`and `pushToken`.
    */
    static getIds(): Promise<any>;
    /**
    * Warning:
    * Only applies to Android and Amazon. You can call this from your UI from a button press for example to give your user's options for your notifications.
    *
    * By default OneSignal always vibrates the device when a notification is displayed unless the device is in a total silent mode.
    * Passing false means that the device will only vibrate lightly when the device is in it's vibrate only mode.
    *
    * @param {enable} false to disable vibrate, true to re-enable it.
    */
    static enableVibrate(enable: boolean): void;
    /**
    * Warning:
    * Only applies to Android and Amazon. You can call this from your UI from a button press for example to give your user's options for your notifications.
    *
    * By default OneSignal plays the system's default notification sound when the device's notification system volume is turned on.
    * Passing false means that the device will only vibrate unless the device is set to a total silent mode.
    *
    * @param {enable} false to disable sound, true to re-enable it.
    */
    static enableSound(enable: boolean): void;
    /**
    * Warning:
    * Only applies to Android and Amazon devices.
    *
    * By default this is false and notifications will not be shown when the user is in your app, instead the notificationOpenedCallback is fired.
    * If set to true notifications will always show in the notification area and notificationOpenedCallback will not fire until the user taps on the notification.
    *
    * @param {enable} enable
    */
    static enableNotificationsWhenActive(enable: boolean): void;
    /**
    * By default this is false and notifications will not be shown when the user is in your app, instead the notificationOpenedCallback is fired.
    * If set to true notifications will be shown as native alert boxes if a notification is received when the user is in your app.
    * The notificationOpenedCallback is then fired after the alert box is closed.
    *
    * @param {enable} enable
    */
    static enableInAppAlertNotification(enable: boolean): void;
    /**
    * You can call this method with false to opt users out of receiving all notifications through OneSignal.
    * You can pass true later to opt users back into notifications.
    *
    * @param {enable} enable
    */
    static setSubscription(enable: boolean): void;
    /**
    *
    * @param {notificationObj} Parameters see POST [documentation](https://documentation.onesignal.com/v2.0/docs/notifications-create-notification)
    * @returns {Promise} Returns a Promise that resolves if the notification was send successfully.
    */
    static postNotification(notificationObj: {
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
    }): Promise<any>;
    /**
    * Prompts the user for location permission to allow geotagging based on the "Location radius" filter on the OneSignal dashboard.
    */
    static promptLocation(): void;
    /**
    * Enable logging to help debug if you run into an issue setting up OneSignal.
    * The logging levels are as follows: 0 = None, 1= Fatal, 2 = Errors, 3 = Warnings, 4 = Info, 5 = Debug, 6 = Verbose
  
    * The higher the value the more information is shown.
    *
    * @param {loglevel} contains two properties: logLevel (for console logging) and visualLevel (for dialog messages)
    */
    static setLogLevel(logLevel: {
        logLevel: number;
        visualLevel: number;
    }): void;
}
