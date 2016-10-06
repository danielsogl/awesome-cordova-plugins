"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
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
var OneSignal = (function () {
    function OneSignal() {
    }
    /**
     * Only required method you need to call to setup OneSignal to receive push notifications. Call this from the `deviceready` event.
     *
     * @param {appId} Your AppId from your OneSignal app
     * @param {options} The Google Project Number (which you can get from the Google Developer Potal) and the autoRegister option.
     * @returns {Observable} when a notification is received. Handle your notification action here.
     */
    OneSignal.init = function (appId, options) { return; };
    /**
     * Call this when you would like to prompt an iOS user to accept push notifications with the default system prompt.
     * Only use if you passed false to autoRegister when calling init.
     */
    OneSignal.registerForPushNotifications = function () { };
    /**
     * Tag a user based on an app event of your choosing so later you can create segments on [onesignal.com](https://onesignal.com/) to target these users.
     * Recommend using sendTags over sendTag if you need to set more than one tag on a user at a time.
     *
     * @param {key} Key of your choosing to create or update.
     * @param {value} Value to set on the key. NOTE: Passing in a blank String deletes the key, you can also call deleteTag.
     */
    OneSignal.sendTag = function (key, value) { };
    /**
   * Tag a user based on an app event of your choosing so later you can create segments on [onesignal.com](https://onesignal.com/) to target these users.
   * Recommend using sendTags over sendTag if you need to set more than one tag on a user at a time.
   *
   * @param {json} Pass a json object with key/value pairs like: {key: "value", key2: "value2"}
   */
    OneSignal.sendTags = function (json) { };
    /**
    * Retrieve a list of tags that have been set on the user from the OneSignal server.
    *
    * @returns {Promise} Returns a Promise that resolves when tags are recieved.
    */
    OneSignal.getTags = function () { return; };
    /**
    * Deletes a tag that was previously set on a user with `sendTag` or `sendTags`. Use `deleteTags` if you need to delete more than one.
    *
    * @param {key} Key to remove.
    */
    OneSignal.deleteTag = function (key) { };
    /**
    * Deletes tags that were previously set on a user with `sendTag` or `sendTags`.
    *
    * @param {keys} Keys to remove.
    */
    OneSignal.deleteTags = function (keys) { };
    /**
    * Lets you retrieve the OneSignal user id and device token.
    * Your handler is called after the device is successfully registered with OneSignal.
    *
    * @returns {Promise} Returns a Promise that reolves if the device was successfully registered.
    * It returns a JSON with `userId`and `pushToken`.
    */
    OneSignal.getIds = function () { return; };
    /**
    * Warning:
    * Only applies to Android and Amazon. You can call this from your UI from a button press for example to give your user's options for your notifications.
    *
    * By default OneSignal always vibrates the device when a notification is displayed unless the device is in a total silent mode.
    * Passing false means that the device will only vibrate lightly when the device is in it's vibrate only mode.
    *
    * @param {enable} false to disable vibrate, true to re-enable it.
    */
    OneSignal.enableVibrate = function (enable) { };
    /**
    * Warning:
    * Only applies to Android and Amazon. You can call this from your UI from a button press for example to give your user's options for your notifications.
    *
    * By default OneSignal plays the system's default notification sound when the device's notification system volume is turned on.
    * Passing false means that the device will only vibrate unless the device is set to a total silent mode.
    *
    * @param {enable} false to disable sound, true to re-enable it.
    */
    OneSignal.enableSound = function (enable) { };
    /**
    * Warning:
    * Only applies to Android and Amazon devices.
    *
    * By default this is false and notifications will not be shown when the user is in your app, instead the notificationOpenedCallback is fired.
    * If set to true notifications will always show in the notification area and notificationOpenedCallback will not fire until the user taps on the notification.
    *
    * @param {enable} enable
    */
    OneSignal.enableNotificationsWhenActive = function (enable) { };
    /**
    * By default this is false and notifications will not be shown when the user is in your app, instead the notificationOpenedCallback is fired.
    * If set to true notifications will be shown as native alert boxes if a notification is received when the user is in your app.
    * The notificationOpenedCallback is then fired after the alert box is closed.
    *
    * @param {enable} enable
    */
    OneSignal.enableInAppAlertNotification = function (enable) { };
    /**
    * You can call this method with false to opt users out of receiving all notifications through OneSignal.
    * You can pass true later to opt users back into notifications.
    *
    * @param {enable} enable
    */
    OneSignal.setSubscription = function (enable) { };
    /**
    *
    * @param {notificationObj} Parameters see POST [documentation](https://documentation.onesignal.com/v2.0/docs/notifications-create-notification)
    * @returns {Promise} Returns a Promise that resolves if the notification was send successfully.
    */
    OneSignal.postNotification = function (notificationObj) { return; };
    /**
    * Prompts the user for location permission to allow geotagging based on the "Location radius" filter on the OneSignal dashboard.
    */
    OneSignal.promptLocation = function () { };
    /**
    * Enable logging to help debug if you run into an issue setting up OneSignal.
    * The logging levels are as follows: 0 = None, 1= Fatal, 2 = Errors, 3 = Warnings, 4 = Info, 5 = Debug, 6 = Verbose
  
    * The higher the value the more information is shown.
    *
    * @param {loglevel} contains two properties: logLevel (for console logging) and visualLevel (for dialog messages)
    */
    OneSignal.setLogLevel = function (logLevel) { };
    __decorate([
        plugin_1.Cordova({ observable: true })
    ], OneSignal, "init", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], OneSignal, "registerForPushNotifications", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], OneSignal, "sendTag", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], OneSignal, "sendTags", null);
    __decorate([
        plugin_1.Cordova()
    ], OneSignal, "getTags", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], OneSignal, "deleteTag", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], OneSignal, "deleteTags", null);
    __decorate([
        plugin_1.Cordova()
    ], OneSignal, "getIds", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], OneSignal, "enableVibrate", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], OneSignal, "enableSound", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], OneSignal, "enableNotificationsWhenActive", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], OneSignal, "enableInAppAlertNotification", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], OneSignal, "setSubscription", null);
    __decorate([
        plugin_1.Cordova()
    ], OneSignal, "postNotification", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], OneSignal, "promptLocation", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], OneSignal, "setLogLevel", null);
    OneSignal = __decorate([
        plugin_1.Plugin({
            plugin: 'onesignal-cordova-plugin',
            pluginRef: 'plugins.OneSignal',
            repo: 'https://github.com/OneSignal/OneSignal-Cordova-SDK'
        })
    ], OneSignal);
    return OneSignal;
}());
exports.OneSignal = OneSignal;
//# sourceMappingURL=onesignal.js.map