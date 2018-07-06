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
 * @name Browser Tab
 * @description
 * This plugin provides an interface to in-app browser tabs that exist on some mobile platforms, specifically [Custom Tabs](http://developer.android.com/tools/support-library/features.html#custom-tabs) on Android (including the [Chrome Custom Tabs](https://developer.chrome.com/multidevice/android/customtabs) implementation), and [SFSafariViewController](https://developer.apple.com/library/ios/documentation/SafariServices/Reference/SFSafariViewController_Ref/) on iOS.
 *
 * @usage
 * ```typescript
 * import { BrowserTab } from '@ionic-native/browser-tab';
 *
 * constructor(private browserTab: BrowserTab) {
 *
 *   browserTab.isAvailable()
 *     .then((isAvailable: boolean) => {
 *
 *       if (isAvailable) {
 *
 *         browserTab.openUrl('https://ionic.io');
 *
 *       } else {
 *
 *         // open URL with InAppBrowser instead or SafariViewController
 *
 *       }
 *
 *     });
 *
 *
 * }
 *
 * ```
 */
var BrowserTab = (function (_super) {
    __extends(BrowserTab, _super);
    function BrowserTab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Check if BrowserTab option is available
     * @return {Promise<any>} Returns a promise that resolves when check is successful and returns true or false
     */
    BrowserTab.prototype.isAvailable = function () { return; };
    /**
     * Opens the provided URL using a browser tab
     * @param {string} url  The URL you want to open
     * @return {Promise<any>} Returns a promise that resolves when check open was successful
     */
    BrowserTab.prototype.openUrl = function (url) { return; };
    /**
     * Closes browser tab
     * @return {Promise<any>} Returns a promise that resolves when close was finished
     */
    BrowserTab.prototype.close = function () { return; };
    return BrowserTab;
}(IonicNativePlugin));
BrowserTab.decorators = [
    { type: Injectable },
];
/** @nocollapse */
BrowserTab.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BrowserTab.prototype, "isAvailable", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BrowserTab.prototype, "openUrl", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BrowserTab.prototype, "close", null);
BrowserTab = __decorate([
    Plugin({
        pluginName: 'BrowserTab',
        plugin: 'cordova-plugin-browsertab',
        pluginRef: 'cordova.plugins.browsertab',
        repo: 'https://github.com/google/cordova-plugin-browsertab',
        platforms: ['Android', 'iOS']
    })
], BrowserTab);
export { BrowserTab };
//# sourceMappingURL=index.js.map