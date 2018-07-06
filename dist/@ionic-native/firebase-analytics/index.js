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
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
/**
 * @beta
 * @name Firebase Analytics
 * @description
 * Cordova plugin for Firebase Analytics
 *
 * Go yo firebase console and export google-services.json and GoogleService-Info.plist. Put those files into the root of your cordova app folder.
 *
 * NOTE: on iOS in order to collect demographic, age, gender data etc. you should additionally include AdSupport.framework into your project.
 *
 * @usage
 * ```typescript
 * import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
 *
 *
 * constructor(private firebaseAnalytics: FirebaseAnalytics) { }
 *
 * ...
 *
 * this.firebaseAnalytics.logEvent('page_view', {page: "dashboard"})
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
var FirebaseAnalytics = (function (_super) {
    __extends(FirebaseAnalytics, _super);
    function FirebaseAnalytics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Logs an app event.
     * Be aware of automatically collected events.
     * @param name {string} The name of the event
     * @param params {any} Some param to configure something
     * @return {Promise<any>} Returns a promise
     */
    FirebaseAnalytics.prototype.logEvent = function (name, params) { return; };
    /**
     * Sets the user ID property.
     * This feature must be used in accordance with Google's Privacy Policy.
     * @param id {string} THe user ID
     * @return {Promise<any>} Returns a promise
     */
    FirebaseAnalytics.prototype.setUserId = function (id) { return; };
    /**
     * This feature must be used in accordance with Google's Privacy Policy.
     * Be aware of automatically collected user properties.
     * @param name {string} The property name
     * @param value {string} The property value
     * @return {Promise<any>} Returns a promise
     */
    FirebaseAnalytics.prototype.setUserProperty = function (name, value) { return; };
    /**
     * Sets whether analytics collection is enabled for this app on this device.
     * @param enabled {boolean}
     * @return {Promise<any>} Returns a promise
     */
    FirebaseAnalytics.prototype.setEnabled = function (enabled) { return; };
    /**
     * Sets the current screen name, which specifies the current visual context in your app.
     * This helps identify the areas in your app where users spend their time and how they interact with your app.
     * @param name {string} The name of the screen
     * @return {Promise<any>} Returns a promise
     */
    FirebaseAnalytics.prototype.setCurrentScreen = function (name) { return; };
    return FirebaseAnalytics;
}(IonicNativePlugin));
FirebaseAnalytics.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FirebaseAnalytics.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FirebaseAnalytics.prototype, "logEvent", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FirebaseAnalytics.prototype, "setUserId", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], FirebaseAnalytics.prototype, "setUserProperty", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], FirebaseAnalytics.prototype, "setEnabled", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FirebaseAnalytics.prototype, "setCurrentScreen", null);
FirebaseAnalytics = __decorate([
    Plugin({
        pluginName: 'FirebaseAnalytics',
        plugin: 'cordova-plugin-firebase-analytics',
        pluginRef: 'cordova.plugins.firebase.analytics',
        repo: 'https://github.com/chemerisuk/cordova-plugin-firebase-analytics',
        platforms: ['Android', 'iOS']
    })
], FirebaseAnalytics);
export { FirebaseAnalytics };
//# sourceMappingURL=index.js.map