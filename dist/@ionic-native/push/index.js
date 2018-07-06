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
import { Cordova, Plugin, CordovaInstance, checkAvailability, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
/**
 * @name Push
 * @description
 * Register and receive push notifications.
 *
 * Requires Cordova plugin: `phonegap-plugin-push`. For more info, please see the [Push plugin docs](https://github.com/phonegap/phonegap-plugin-push).
 *
 * For TypeScript users, see the [Push plugin docs about using TypeScript for custom notifications](https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/TYPESCRIPT.md).
 *
 * @usage
 * ```typescript
 * import { Push, PushObject, PushOptions } from '@ionic-native/push';
 *
 * constructor(private push: Push) { }
 *
 * ...
 *
 *
 * // to check if we have permission
 * this.push.hasPermission()
 *   .then((res: any) => {
 *
 *     if (res.isEnabled) {
 *       console.log('We have permission to send push notifications');
 *     } else {
 *       console.log('We do not have permission to send push notifications');
 *     }
 *
 *   });
 *
 * // to initialize push notifications
 *
 * const options: PushOptions = {
 *    android: {
 *        senderID: '12345679'
 *    },
 *    ios: {
 *        alert: 'true',
 *        badge: true,
 *        sound: 'false'
 *    },
 *    windows: {}
 * };
 *
 * const pushObject: PushObject = this.push.init(options);
 *
 * pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));
 *
 * pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
 *
 * pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
 *
 *
 * ```
 *
 * @interfaces
 * RegistrationEventResponse
 * NotificationEventResponse
 * NotificationEventAdditionalData
 * IOSPushOptions
 * AndroidPushOptions
 * PushOptions
 */
var Push = (function (_super) {
    __extends(Push, _super);
    function Push() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Init push notifications
     * @param options {PushOptions}
     * @return {PushObject}
     */
    Push.prototype.init = function (options) {
        return new PushObject(options);
    };
    /**
     * Check whether the push notification permission has been granted.
     * @return {Promise<{isEnabled: boolean}>} Returns a Promise that resolves with an object with one property: isEnabled, a boolean that indicates if permission has been granted.
     */
    Push.prototype.hasPermission = function () { return; };
    return Push;
}(IonicNativePlugin));
Push.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Push.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Push.prototype, "hasPermission", null);
Push = __decorate([
    Plugin({
        pluginName: 'Push',
        plugin: 'phonegap-plugin-push',
        pluginRef: 'PushNotification',
        repo: 'https://github.com/phonegap/phonegap-plugin-push',
        install: 'ionic cordova plugin add phonegap-plugin-push --variable SENDER_ID=XXXXXXXXX',
        installVariables: ['SENDER_ID'],
        platforms: ['Android', 'Browser', 'iOS', 'Windows']
    })
], Push);
export { Push };
/**
 * @hidden
 */
var PushObject = (function () {
    function PushObject(options) {
        if (checkAvailability('PushNotification', 'init', 'PushNotification') === true) {
            this._objectInstance = window.PushNotification.init(options);
        }
    }
    /**
     * Adds an event listener
     * @param event {string}
     * @return {Observable<EventResponse>}
     */
    PushObject.prototype.on = function (event) { return; };
    /**
     * The unregister method is used when the application no longer wants to receive push notifications.
     * Beware that this cleans up all event handlers previously registered,
     * so you will need to re-register them if you want them to function again without an application reload.
     */
    PushObject.prototype.unregister = function () { return; };
    /**
     * Set the badge count visible when the app is not running
     *
     * The count is an integer indicating what number should show up in the badge.
     * Passing 0 will clear the badge.
     * Each notification event contains a data.count value which can be used to set the badge to correct number.
     * @param count
     */
    PushObject.prototype.setApplicationIconBadgeNumber = function (count) { return; };
    ;
    /**
     * Get the current badge count visible when the app is not running
     * successHandler gets called with an integer which is the current badge count
     */
    PushObject.prototype.getApplicationIconBadgeNumber = function () { return; };
    /**
     * iOS only
     * Tells the OS that you are done processing a background push notification.
     * successHandler gets called when background push processing is successfully completed.
     */
    PushObject.prototype.finish = function () { return; };
    /**
     * Tells the OS to clear all notifications from the Notification Center
     */
    PushObject.prototype.clearAllNotifications = function () { return; };
    /**
     * The subscribe method is used when the application wants to subscribe a new topic to receive push notifications.
     * @param topic {string} Topic to subscribe to.
     * @return {Promise<any>}
     */
    PushObject.prototype.subscribe = function (topic) { return; };
    /**
     * The unsubscribe method is used when the application no longer wants to receive push notifications from a specific topic but continue to receive other push messages.
     * @param topic {string} Topic to unsubscribe from.
     * @return {Promise<any>}
     */
    PushObject.prototype.unsubscribe = function (topic) { return; };
    return PushObject;
}());
__decorate([
    CordovaInstance({
        observable: true,
        clearFunction: 'off',
        clearWithArgs: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Observable)
], PushObject.prototype, "on", null);
__decorate([
    CordovaInstance(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PushObject.prototype, "unregister", null);
__decorate([
    CordovaInstance({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PushObject.prototype, "setApplicationIconBadgeNumber", null);
__decorate([
    CordovaInstance(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PushObject.prototype, "getApplicationIconBadgeNumber", null);
__decorate([
    CordovaInstance(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PushObject.prototype, "finish", null);
__decorate([
    CordovaInstance(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PushObject.prototype, "clearAllNotifications", null);
__decorate([
    CordovaInstance(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PushObject.prototype, "subscribe", null);
__decorate([
    CordovaInstance(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PushObject.prototype, "unsubscribe", null);
PushObject = __decorate([
    Plugin({
        pluginName: 'Push',
        plugin: 'phonegap-plugin-push',
        pluginRef: 'PushNotification'
    }),
    __metadata("design:paramtypes", [Object])
], PushObject);
export { PushObject };
//# sourceMappingURL=index.js.map