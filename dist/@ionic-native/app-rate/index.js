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
import { Cordova, CordovaProperty, Plugin, IonicNativePlugin } from '@ionic-native/core';
/**
 * @name App Rate
 * @description
 * The AppRate plugin makes it easy to prompt the user to rate your app, either now, later, or never.
 *
 * Requires Cordova plugin: cordova-plugin-apprate. For more info, please see the [AppRate plugin docs](https://github.com/pushandplay/cordova-plugin-apprate).
 *
 * @usage
 * ```typescript
 * import { AppRate } from '@ionic-native/app-rate';
 *
 * constructor(private appRate: AppRate) { }
 *
 * ...
 * // set certain preferences
 * this.appRate.preferences.storeAppURL = {
 *   ios: '<app_id>',
 *   android: 'market://details?id=<package_name>',
 *   windows: 'ms-windows-store://review/?ProductId=<store_id>'
 * };
 *
 * this.appRate.promptForRating(true);
 *
 * // or, override the whole preferences object
 * this.appRate.preferences = {
 *   usesUntilPrompt: 3,
 *   storeAppURL: {
 *    ios: '<app_id>',
 *    android: 'market://details?id=<package_name>',
 *    windows: 'ms-windows-store://review/?ProductId=<store_id>'
 *   }
 * };
 *
 * this.appRate.promptForRating(false);
 * ```
 *
 * @interfaces
 * AppRatePreferences
 * AppUrls
 * AppRateCallbacks
 *
 */
var AppRate = (function (_super) {
    __extends(AppRate, _super);
    function AppRate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Prompts the user for rating
     * @param {boolean} immediately  Show the rating prompt immediately.
     */
    AppRate.prototype.promptForRating = function (immediately) { };
    ;
    /**
     * Immediately send the user to the app store rating page
     */
    AppRate.prototype.navigateToAppStore = function () { };
    ;
    return AppRate;
}(IonicNativePlugin));
AppRate.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AppRate.ctorParameters = function () { return []; };
__decorate([
    CordovaProperty,
    __metadata("design:type", Object)
], AppRate.prototype, "preferences", void 0);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], AppRate.prototype, "promptForRating", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppRate.prototype, "navigateToAppStore", null);
AppRate = __decorate([
    Plugin({
        pluginName: 'AppRate',
        plugin: 'cordova-plugin-apprate',
        pluginRef: 'AppRate',
        repo: 'https://github.com/pushandplay/cordova-plugin-apprate',
        platforms: ['Android', 'BlackBerry 10', 'iOS', 'Windows']
    })
], AppRate);
export { AppRate };
//# sourceMappingURL=index.js.map