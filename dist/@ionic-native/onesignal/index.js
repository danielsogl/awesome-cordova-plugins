var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
/**
 * **ANDROID** - Privacy setting for how the notification should be shown on the lockscreen of Android 5+ devices.
 */
export var OSLockScreenVisibility;
(function (OSLockScreenVisibility) {
    /**
     * Fully visible (default)
     */
    OSLockScreenVisibility[OSLockScreenVisibility["Public"] = 1] = "Public";
    /**
     * Contents are hidden
     */
    OSLockScreenVisibility[OSLockScreenVisibility["Private"] = 0] = "Private";
    /**
     * Not shown
     */
    OSLockScreenVisibility[OSLockScreenVisibility["Secret"] = -1] = "Secret";
})(OSLockScreenVisibility || (OSLockScreenVisibility = {}));
/**
 * How the notification was displayed to the user. Part of OSNotification. See inFocusDisplaying for more information on how this is used.
 */
export var OSDisplayType;
(function (OSDisplayType) {
    /**
     * notification is silent, or inFocusDisplaying is disabled.
     */
    OSDisplayType[OSDisplayType["None"] = 0] = "None";
    /**
     * (**DEFAULT**) - native alert dialog display.
     */
    OSDisplayType[OSDisplayType["InAppAlert"] = 1] = "InAppAlert";
    /**
     * native notification display.
     */
    OSDisplayType[OSDisplayType["Notification"] = 2] = "Notification";
})(OSDisplayType || (OSDisplayType = {}));
export var OSActionType;
(function (OSActionType) {
    OSActionType[OSActionType["Opened"] = 0] = "Opened";
    OSActionType[OSActionType["ActionTake"] = 1] = "ActionTake";
})(OSActionType || (OSActionType = {}));
/**
 * @name OneSignal
 * @description
 * The OneSignal plugin is an client implementation for using the [OneSignal](https://onesignal.com/) Service.
 * OneSignal is a simple implementation for delivering push notifications.
 *
 * Requires Cordova plugin: `onesignal-cordova-plugin`. For more info, please see the [OneSignal Cordova Docs](https://documentation.onesignal.com/docs/phonegap-sdk-installation).
 *
 * #### Icons
 * If you want to use generated icons with command `ionic cordova resources`:
 *
 * 1. Add a file to your `hooks` directory inside the `after_prepare` folder called `030_copy_android_notification_icons.js`
 *
 * 2. Put the following code in it:
 *
 * ```
 * #!/usr/bin/env node
 *
 * var filestocopy = [{
 *     "resources/android/icon/drawable-hdpi-icon.png":
 *         "platforms/android/res/drawable-hdpi/ic_stat_onesignal_default.png"
 * }, {
 *     "resources/android/icon/drawable-mdpi-icon.png":
 *         "platforms/android/res/drawable-mdpi/ic_stat_onesignal_default.png"
 * }, {
 *     "resources/android/icon/drawable-xhdpi-icon.png":
 *         "platforms/android/res/drawable-xhdpi/ic_stat_onesignal_default.png"
 * }, {
 *     "resources/android/icon/drawable-xxhdpi-icon.png":
 *         "platforms/android/res/drawable-xxhdpi/ic_stat_onesignal_default.png"
 * }, {
 *     "resources/android/icon/drawable-xxxhdpi-icon.png":
 *         "platforms/android/res/drawable-xxxhdpi/ic_stat_onesignal_default.png"
 * } ];
 *
 * var fs = require('fs');
 * var path = require('path');
 *
 * // no need to configure below
 * var rootdir = process.argv[2];
 *
 * filestocopy.forEach(function(obj) {
 *     Object.keys(obj).forEach(function(key) {
 *         var val = obj[key];
 *         var srcfile = path.join(rootdir, key);
 *         var destfile = path.join(rootdir, val);
 *         //console.log("copying "+srcfile+" to "+destfile);
 *         var destdir = path.dirname(destfile);
 *         if (fs.existsSync(srcfile) && fs.existsSync(destdir)) {
 *             fs.createReadStream(srcfile).pipe(
 *                 fs.createWriteStream(destfile));
 *         }
 *     });
 * });
 * ```
 *
 * 3. From the root of your project make the file executable:
 * `$ chmod +x hooks/after_prepare/030_copy_android_notification_icons.js`
 *
 *
 * @usage
 * ```typescript
 * import { OneSignal } from '@ionic-native/onesignal';
 *
 * constructor(private oneSignal: OneSignal) { }
 *
 * ...
 *
 * this.oneSignal.startInit('b2f7f966-d8cc-11e4-bed1-df8f05be55ba', '703322744261');
 *
 * this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
 *
 * this.oneSignal.handleNotificationReceived().subscribe(() => {
 *  // do something when notification is received
 * });
 *
 * this.oneSignal.handleNotificationOpened().subscribe(() => {
 *   // do something when a notification is opened
 * });
 *
 * this.oneSignal.endInit();
 * ```
 * @interfaces
 * OSNotification
 * OSLockScreenVisibility
 * OSDisplayType
 * OSNotificationPayload
 * OSActionButton
 * OSBackgroundImageLayout
 * OSNotificationOpenedResult
 * OSActionType
 */
var OneSignal = (function (_super) {
    __extends(OneSignal, _super);
    function OneSignal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * constants to use in inFocusDisplaying()
         */
        _this.OSInFocusDisplayOption = {
            None: 0,
            InAppAlert: 1,
            Notification: 2
        };
        return _this;
    }
    /**
     * Start the initialization process. Once you are done configuring OneSignal, call the `endInit` function.
     *
     * @param {string} appId Your OneSignal app id
     * @param {string} googleProjectNumber **ANDROID** - your Google project number; only required for Android GCM/FCM pushes.
     * @returns {any}
     */
    OneSignal.prototype.startInit = function (appId, googleProjectNumber) { return; };
    /**
     * Callback to run when a notification is received, whether it was displayed or not.
     *
     * @return {Observable<OneSignalReceivedNotification>}
     */
    OneSignal.prototype.handleNotificationReceived = function () { return; };
    /**
     * Callback to run when a notification is tapped on from the notification shade (**ANDROID**) or notification
     * center (**iOS**), or when closing an Alert notification shown in the app (if InAppAlert is enabled in
     * inFocusDisplaying).
     *
     * @return {Observable<OneSignalOpenedNotification>}
     */
    OneSignal.prototype.handleNotificationOpened = function () { return; };
    /**
     * **iOS** - Settings for iOS apps
     *
     * @param settings
     *  kOSSettingsKeyAutoPrompt: boolean = true
     *  Auto prompt user for notification permissions.
     *
     *  kOSSettingsKeyInAppLaunchURL: boolean = false
     *  Launch notifications with a launch URL as an in app webview.
     * @returns {any}
     */
    OneSignal.prototype.iOSSettings = function (settings) { return; };
    /**
     * Must be called after `startInit` to complete initialization of OneSignal.
     *
     * @returns {any}
     */
    OneSignal.prototype.endInit = function () { return; };
    /**
     * Retrieve a list of tags that have been set on the user from the OneSignal server.
     *
     * **Quirk**: You must wait for `getTags` to resolve before calling it again, as the plugin will only process the last method call and discard any previous ones.
     *
     * @returns {Promise<any>} Returns a Promise that resolves when tags are recieved.
     */
    OneSignal.prototype.getTags = function () { return; };
    /**
     * Lets you retrieve the OneSignal user id and device token.
     * Your handler is called after the device is successfully registered with OneSignal.
     *
     * @returns {Promise<Object>} Returns a Promise that resolves if the device was successfully registered.
     *
     *  userId {string} OneSignal userId is a UUID formatted string. (unique per device per app)
     *
     *  pushToken {string} A push token is a Google/Apple assigned identifier(unique per device per app).
     */
    OneSignal.prototype.getIds = function () { return; };
    /**
     * Tag a user based on an app event of your choosing so later you can create segments on [onesignal.com](https://onesignal.com/) to target these users.
     * Recommend using sendTags over sendTag if you need to set more than one tag on a user at a time.
     *
     * @param {string} Key of your choosing to create or update.
     * @param {string} Value to set on the key. NOTE: Passing in a blank String deletes the key, you can also call deleteTag.
     */
    OneSignal.prototype.sendTag = function (key, value) { };
    /**
     * Tag a user based on an app event of your choosing so later you can create segments on [onesignal.com](https://onesignal.com/) to target these users.
     * Recommend using sendTags over sendTag if you need to set more than one tag on a user at a time.
     *
     * @param {string} Pass a json object with key/value pairs like: {key: "value", key2: "value2"}
     */
    OneSignal.prototype.sendTags = function (json) { };
    /**
     * Deletes a tag that was previously set on a user with `sendTag` or `sendTags`. Use `deleteTags` if you need to delete more than one.
     *
     * @param {string} Key to remove.
     */
    OneSignal.prototype.deleteTag = function (key) { };
    /**
     * Deletes tags that were previously set on a user with `sendTag` or `sendTags`.
     *
     * @param {Array<string>} Keys to remove.
     */
    OneSignal.prototype.deleteTags = function (keys) { };
    /**
     * Call this when you would like to prompt an iOS user to accept push notifications with the default system prompt.
     * Only works if you set `kOSSettingsAutoPrompt` to `false` in `iOSSettings`
     */
    OneSignal.prototype.registerForPushNotifications = function () { };
    /**
    * Warning:
    * Only applies to Android and Amazon. You can call this from your UI from a button press for example to give your user's options for your notifications.
    *
    * By default OneSignal always vibrates the device when a notification is displayed unless the device is in a total silent mode.
    * Passing false means that the device will only vibrate lightly when the device is in it's vibrate only mode.
    *
    * @param {boolean} false to disable vibrate, true to re-enable it.
    */
    OneSignal.prototype.enableVibrate = function (enable) { };
    /**
    * Warning:
    * Only applies to Android and Amazon. You can call this from your UI from a button press for example to give your user's options for your notifications.
    *
    * By default OneSignal plays the system's default notification sound when the device's notification system volume is turned on.
    * Passing false means that the device will only vibrate unless the device is set to a total silent mode.
    *
    * @param {boolean} false to disable sound, true to re-enable it.
    */
    OneSignal.prototype.enableSound = function (enable) { };
    /**
    *
    * Setting to control how OneSignal notifications will be shown when one is received while your app is in focus. By default this is set to inAppAlert, which can be helpful during development.
    *
    * @param {DisplayType} displayOption
    * @returns {any}
    */
    OneSignal.prototype.inFocusDisplaying = function (displayOption) { return; };
    /**
    * You can call this method with false to opt users out of receiving all notifications through OneSignal.
    * You can pass true later to opt users back into notifications.
    *
    * @param {boolean} enable
    */
    OneSignal.prototype.setSubscription = function (enable) { };
    /**
    * Get the current notification and permission state. Returns a OSPermissionSubscriptionState type described below.
    *
    * @returns {Promise<OSPermissionSubscriptionState>}
    */
    OneSignal.prototype.getPermissionSubscriptionState = function () { return; };
    /**
    *
    * @param {notificationObj} Parameters see POST [documentation](https://documentation.onesignal.com/v2.0/docs/notifications-create-notification)
    * @returns {Promise<any>} Returns a Promise that resolves if the notification was send successfully.
    */
    OneSignal.prototype.postNotification = function (notificationObj) { return; };
    /**
    * Prompts the user for location permission to allow geotagging based on the "Location radius" filter on the OneSignal dashboard.
    */
    OneSignal.prototype.promptLocation = function () { };
    /**
     *
     * @param email {string}
     */
    OneSignal.prototype.syncHashedEmail = function (email) { };
    /**
    * Enable logging to help debug if you run into an issue setting up OneSignal.
    * The logging levels are as follows: 0 = None, 1= Fatal, 2 = Errors, 3 = Warnings, 4 = Info, 5 = Debug, 6 = Verbose
  
    * The higher the value the more information is shown.
    *
    * @param {loglevel} contains two properties: logLevel (for console logging) and visualLevel (for dialog messages)
    */
    OneSignal.prototype.setLogLevel = function (logLevel) { };
    return OneSignal;
}(IonicNativePlugin));
OneSignal.decorators = [
    { type: Injectable },
];
/** @nocollapse */
OneSignal.ctorParameters = function () { return []; };
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Object)
], OneSignal.prototype, "startInit", null);
__decorate([
    Cordova({
        observable: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], OneSignal.prototype, "handleNotificationReceived", null);
__decorate([
    Cordova({
        observable: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], OneSignal.prototype, "handleNotificationOpened", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], OneSignal.prototype, "iOSSettings", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], OneSignal.prototype, "endInit", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OneSignal.prototype, "getTags", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OneSignal.prototype, "getIds", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], OneSignal.prototype, "sendTag", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OneSignal.prototype, "sendTags", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OneSignal.prototype, "deleteTag", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], OneSignal.prototype, "deleteTags", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OneSignal.prototype, "registerForPushNotifications", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], OneSignal.prototype, "enableVibrate", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], OneSignal.prototype, "enableSound", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], OneSignal.prototype, "inFocusDisplaying", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], OneSignal.prototype, "setSubscription", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OneSignal.prototype, "getPermissionSubscriptionState", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OneSignal.prototype, "postNotification", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OneSignal.prototype, "promptLocation", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OneSignal.prototype, "syncHashedEmail", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OneSignal.prototype, "setLogLevel", null);
OneSignal = __decorate([
    Plugin({
        pluginName: 'OneSignal',
        plugin: 'onesignal-cordova-plugin',
        pluginRef: 'plugins.OneSignal',
        repo: 'https://github.com/OneSignal/OneSignal-Cordova-SDK',
        platforms: ['Amazon Fire OS', 'Android', 'iOS', 'Windows']
    })
], OneSignal);
export { OneSignal };
//# sourceMappingURL=index.js.map