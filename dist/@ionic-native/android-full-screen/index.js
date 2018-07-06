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
/**
 * @name Android Full Screen
 * @description
 * This plugin enables developers to offer users a true full screen experience in their Cordova and PhoneGap apps for Android.
 * Using Android 4.0+, you can use true full screen in "lean mode", the way you see in apps like YouTube, expanding the app right to the edges of the screen, hiding the status and navigation bars until the user next interacts. This is ideally suited to video or cut-scene content.
 * In Android 4.4+, however, you can now enter true full screen, fully interactive immersive mode. In this mode, your app will remain in true full screen until you choose otherwise; users can swipe down from the top of the screen to temporarily display the system UI.
 * @usage
 * ```typescript
 * import { AndroidFullScreen } from '@ionic-native/android-full-screen';
 *
 * constructor(private androidFullScreen: AndroidFullScreen) { }
 *
 * ...
 *
 * this.androidFullScreen.isImmersiveModeSupported()
 *   .then(() => this.androidFullScreen.immersiveMode())
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
var AndroidFullScreen = (function (_super) {
    __extends(AndroidFullScreen, _super);
    function AndroidFullScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Is this plugin supported?
     * @return {Promise<void>}
     */
    AndroidFullScreen.prototype.isSupported = function () { return; };
    /**
     * Is immersive mode supported?
     * @return {Promise<void>}
     */
    AndroidFullScreen.prototype.isImmersiveModeSupported = function () { return; };
    /**
     * The width of the screen in immersive mode.
     * @return {Promise<number>}
     */
    AndroidFullScreen.prototype.immersiveWidth = function () { return; };
    /**
     * The height of the screen in immersive mode.
     * @return {Promise<number>}
     */
    AndroidFullScreen.prototype.immersiveHeight = function () { return; };
    /**
     * Hide system UI until user interacts.
     * @return {Promise<void>}
     */
    AndroidFullScreen.prototype.leanMode = function () { return; };
    /**
     * Show system UI.
     * @return {Promise<void>}
     */
    AndroidFullScreen.prototype.showSystemUI = function () { return; };
    /**
     * Extend your app underneath the status bar (Android 4.4+ only).
     * @return {Promise<void>}
     */
    AndroidFullScreen.prototype.showUnderStatusBar = function () { return; };
    /**
     * Extend your app underneath the system UI (Android 4.4+ only).
     * @return {Promise<void>}
     */
    AndroidFullScreen.prototype.showUnderSystemUI = function () { return; };
    /**
     * Hide system UI and keep it hidden (Android 4.4+ only).
     * @return {Promise<void>}
     */
    AndroidFullScreen.prototype.immersiveMode = function () { return; };
    return AndroidFullScreen;
}(IonicNativePlugin));
AndroidFullScreen.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AndroidFullScreen.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AndroidFullScreen.prototype, "isSupported", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AndroidFullScreen.prototype, "isImmersiveModeSupported", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AndroidFullScreen.prototype, "immersiveWidth", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AndroidFullScreen.prototype, "immersiveHeight", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AndroidFullScreen.prototype, "leanMode", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AndroidFullScreen.prototype, "showSystemUI", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AndroidFullScreen.prototype, "showUnderStatusBar", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AndroidFullScreen.prototype, "showUnderSystemUI", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AndroidFullScreen.prototype, "immersiveMode", null);
AndroidFullScreen = __decorate([
    Plugin({
        pluginName: 'AndroidFullScreen',
        plugin: 'cordova-plugin-fullscreen',
        pluginRef: 'AndroidFullScreen',
        repo: 'https://github.com/mesmotronic/cordova-plugin-fullscreen',
        platforms: ['Android']
    })
], AndroidFullScreen);
export { AndroidFullScreen };
//# sourceMappingURL=index.js.map