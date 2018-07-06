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
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';
/**
 * @name Intercom
 * @description
 * This is a plugin that allows your Ionic app to use Intercom for iOS and/or Intercom for Android.
 * Follow the offical documentation to setup this plugin correctly: https://developers.intercom.com/docs/cordova-phonegap-configuration
 *
 * @usage
 * ```typescript
 * import { Intercom } from '@ionic-native/intercom';
 *
 *
 * constructor(private intercom: Intercom) { }
 *
 * ...
 *
 * this.intercom.registerUnidentifiedUser();
 * ...
 * this.intercom.registerForPush();
 *
 * ```
 */
var Intercom = (function (_super) {
    __extends(Intercom, _super);
    function Intercom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Register a identified user
     * @param options {any} Options
     * @return {Promise<any>} Returns a promise
     */
    Intercom.prototype.registerIdentifiedUser = function (options) { return; };
    /**
     * Register a unidentified user
     * @param options {any} Options
     * @return {Promise<any>} Returns a promise
     */
    Intercom.prototype.registerUnidentifiedUser = function (options) { return; };
    /**
     * This resets the Intercom integration's cache of your user's identity and wipes the slate clean.
     * @return {Promise<any>} Returns a promise
     */
    Intercom.prototype.reset = function () { return; };
    /**
     *
     * @param secureHash {string}
     * @param secureData {any}
     * @return {Promise<any>} Returns a promise
     */
    Intercom.prototype.setSecureMode = function (secureHash, secureData) { return; };
    /**
     *
     * @param secureHash {string}
     * @return {Promise<any>} Returns a promise
     */
    Intercom.prototype.setUserHash = function (secureHash) { return; };
    /**
     *
     * @param attributes {any}
     * @return {Promise<any>} Returns a promise
     */
    Intercom.prototype.updateUser = function (attributes) { return; };
    /**
     *
     * @param eventName {string}
     * @param metaData {any}
     * @return {Promise<any>} Returns a promise
     */
    Intercom.prototype.logEvent = function (eventName, metaData) { return; };
    /**
     *
     * @return {Promise<any>} Returns a promise
     */
    Intercom.prototype.displayMessenger = function () { return; };
    /**
     *
     * @return {Promise<any>} Returns a promise
     */
    Intercom.prototype.displayMessageComposer = function () { return; };
    /**
     *
     * @param initialMessage {string}
     * @return {Promise<any>} Returns a promise
     */
    Intercom.prototype.displayMessageComposerWithInitialMessage = function (initialMessage) { return; };
    /**
     *
     * @return {Promise<any>} Returns a promise
     */
    Intercom.prototype.displayConversationsList = function () { return; };
    /**
     *
     * @return {Promise<any>} Returns a promise
     */
    Intercom.prototype.unreadConversationCount = function () { return; };
    /**
     *
     * @param visibility {string}
     * @return {Promise<any>} Returns a promise
     */
    Intercom.prototype.setLauncherVisibility = function (visibility) { return; };
    /**
     *
     * @param visibility {string}
     * @return {Promise<any>} Returns a promise
     */
    Intercom.prototype.setInAppMessageVisibility = function (visibility) { return; };
    /**
     *
     * @return {Promise<any>} Returns a promise
     */
    Intercom.prototype.hideMessenger = function () { return; };
    /**
     *
     * @return {Promise<any>} Returns a promise
     */
    Intercom.prototype.registerForPush = function () { return; };
    return Intercom;
}(IonicNativePlugin));
Intercom.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Intercom.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Intercom.prototype, "registerIdentifiedUser", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Intercom.prototype, "registerUnidentifiedUser", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Intercom.prototype, "reset", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], Intercom.prototype, "setSecureMode", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Intercom.prototype, "setUserHash", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Intercom.prototype, "updateUser", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], Intercom.prototype, "logEvent", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Intercom.prototype, "displayMessenger", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Intercom.prototype, "displayMessageComposer", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Intercom.prototype, "displayMessageComposerWithInitialMessage", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Intercom.prototype, "displayConversationsList", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Intercom.prototype, "unreadConversationCount", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Intercom.prototype, "setLauncherVisibility", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Intercom.prototype, "setInAppMessageVisibility", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Intercom.prototype, "hideMessenger", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Intercom.prototype, "registerForPush", null);
Intercom = __decorate([
    Plugin({
        pluginName: 'Intercom',
        plugin: 'cordova-plugin-intercom',
        pluginRef: 'intercom',
        repo: 'https://github.com/intercom/intercom-cordova',
        platforms: ['Android', 'iOS'],
    })
], Intercom);
export { Intercom };
//# sourceMappingURL=index.js.map