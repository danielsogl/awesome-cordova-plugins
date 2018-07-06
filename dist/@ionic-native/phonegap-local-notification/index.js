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
import { Cordova, CordovaInstance, Plugin, IonicNativePlugin, checkAvailability } from '@ionic-native/core';
/**
 * @hidden
 */
var PLNObject = (function () {
    function PLNObject(title, options) {
        if (checkAvailability(PhonegapLocalNotification.pluginRef, null, PhonegapLocalNotification.pluginName) === true) {
            this._objectInstance = new Notification(title, options);
        }
    }
    PLNObject.prototype.close = function () { };
    return PLNObject;
}());
export { PLNObject };
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PLNObject.prototype, "close", null);
/**
 * @name Phonegap Local Notification
 * @description
 * The Local Notification plugin gives developers the ability to post notifications from their app that show up in the device’s notification area.
 * The API for the local notification plugin follows the W3C Web Notifications specification: https://www.w3.org/TR/notifications/
 *
 * @usage
 * ```
 * import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification';
 *
 *
 * constructor(private localNotification: PhonegapLocalNotifications) { }
 *
 * ...
 *
 * this.localNotification.requestPermission().then(
 *   (permission) => {
 *     if (permission === 'granted') {
 *
 *       // Create the notification
 *       this.localNotification.create('My Title', {
 *         tag: 'message1',
 *         body: 'My body',
 *         icon: 'assets/icon/favicon.ico'
 *       });
 *
 *     }
 *   }
 * );
 *
 * ```
 *
 * @interfaces
 * LocalNotificationOptions
 */
var PhonegapLocalNotification = (function (_super) {
    __extends(PhonegapLocalNotification, _super);
    function PhonegapLocalNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * A global object that lets you interact with the Notification API.
     * @param title {string} Title of the local notification.
     * @param Options {LocalNotificationOptions} An object containing optional property/value pairs.
     * @returns {PLNObject}
     */
    PhonegapLocalNotification.prototype.create = function (title, options) { return new PLNObject(title, options); };
    /**
    * requests permission from the user to show a local notification.
    * @returns {Promise<any>}
    */
    PhonegapLocalNotification.prototype.requestPermission = function () { return; };
    return PhonegapLocalNotification;
}(IonicNativePlugin));
PhonegapLocalNotification.decorators = [
    { type: Injectable },
];
/** @nocollapse */
PhonegapLocalNotification.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PhonegapLocalNotification.prototype, "requestPermission", null);
PhonegapLocalNotification = __decorate([
    Plugin({
        pluginName: 'Phonegap Local Notifications',
        plugin: 'phonegap-local-notifications',
        pluginRef: 'Notification',
        repo: 'https://github.com/phonegap/phonegap-plugin-local-notification',
        platforms: ['Android', 'Browser', 'iOS', 'Windows']
    })
], PhonegapLocalNotification);
export { PhonegapLocalNotification };
//# sourceMappingURL=index.js.map