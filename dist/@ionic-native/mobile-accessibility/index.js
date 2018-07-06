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
 * @name Mobile Accessibility
 * @description
 * This plugin exposes information on the status of various accessibility features of mobile operating systems, including, for example, whether a screen reader is running, invert colors is enabled, and the preferred scaling for text.
 * It also allows an application to send a string to be spoken by the screen reader, or a command to stop the screen reader from speaking.
 *
 * @usage
 * ```typescript
 * import { MobileAccessibility } from 'ionic-native';
 *
 *
 * constructor(private mobileAccessibility: MobileAccessibility) { }
 *
 * ...
 *
 * if(this.mobileAccessibility.isScreenReaderRunningCallback();
 *
 * ```
 */
var MobileAccessibility = (function (_super) {
    __extends(MobileAccessibility, _super);
    function MobileAccessibility() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Makes an asynchronous call to native MobileAccessibility to determine if a screen reader is running.
     * @returns {Promise<boolean>}  A result method to receive the boolean result asynchronously from the native MobileAccessibility plugin.
     */
    MobileAccessibility.prototype.isScreenReaderRunning = function () { return; };
    /**
     * An iOS-specific proxy for the MobileAccessibility.isScreenReaderRunning method
     * @returns {Promise<boolean>} A result method to receive the boolean result asynchronously from the native MobileAccessibility plugin.
     */
    MobileAccessibility.prototype.isVoiceOverRunningCallback = function () { return; };
    /**
     * An Android/Amazon Fire OS-specific proxy for the MobileAccessibility.isScreenReaderRunning method.
     * @returns {Promise<boolean>}  A result method to receive the boolean result asynchronously from the native MobileAccessibility plugin.
     */
    MobileAccessibility.prototype.isTalkBackRunningCallback = function () { return; };
    /**
     * On Android, this method returns true if ChromeVox is active and properly initialized with access to the text to speech API in the WebView.
     * If TalkBack is running but ChromeVox is not active, this method is useful to alert the user of a potential problem.
     * @returns {Promise<boolean>} Returns the result
     */
    MobileAccessibility.prototype.isChromeVoxActive = function () { return; };
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    MobileAccessibility.prototype.isBoldTextEnabledCallback = function () { return; };
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    MobileAccessibility.prototype.isClosedCaptioningEnabledCallback = function () { return; };
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    MobileAccessibility.prototype.isDarkerSystemColorsEnabledCallback = function () { return; };
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    MobileAccessibility.prototype.isGrayscaleEnabledCallback = function () { return; };
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    MobileAccessibility.prototype.isGuidedAccessEnabledCallback = function () { return; };
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    MobileAccessibility.prototype.isInvertColorsEnabledCallback = function () { return; };
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    MobileAccessibility.prototype.isMonoAudioEnabledCallback = function () { return; };
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    MobileAccessibility.prototype.isReduceMotionEnabledCallback = function () { return; };
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    MobileAccessibility.prototype.isReduceTransparencyEnabledCallback = function () { return; };
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    MobileAccessibility.prototype.isSpeakScreenEnabledCallback = function () { return; };
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    MobileAccessibility.prototype.isSpeakSelectionEnabledCallback = function () { return; };
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    MobileAccessibility.prototype.isSwitchControlRunningCallback = function () { return; };
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    MobileAccessibility.prototype.isTouchExplorationEnabledCallback = function () { return; };
    /**
     *
     * * @returns {Promise<number>} Returns the result
     */
    MobileAccessibility.prototype.getTextZoomCallback = function () { return; };
    /**
     * @param textZoom {number} A percentage value by which text in the WebView should be scaled.
     */
    MobileAccessibility.prototype.setTextZoom = function (textZoom) { };
    /**
     *
     */
    MobileAccessibility.prototype.updateTextZoom = function () { };
    /**
     * A Boolean value which specifies whether to use the preferred text zoom of a default percent value of 100.
     * @param value {boolean} Returns the result
     */
    MobileAccessibility.prototype.usePreferredTextZoom = function (value) { };
    /**
     * Posts a notification with a string for the screen reader to announce if it is running.
     * @param mobileAccessibilityNotification {any}
     * @param value {string} A string to be announced by a screen reader.
     * @returns {Promise<boolean>} Returns the result
     */
    MobileAccessibility.prototype.postNotification = function (mobileAccessibilityNotification, value) { return; };
    /**
     * Speaks a given string through the screenreader. On Android, if ChromeVox is active, it will use the specified queueMode and properties.
     * @param value {string}
     * @param queueMode {mumber}
     * @param properties {any}
     */
    MobileAccessibility.prototype.speak = function (value, queueMode, properties) { };
    /**
     * Stops speech.
     */
    MobileAccessibility.prototype.stop = function () { };
    return MobileAccessibility;
}(IonicNativePlugin));
MobileAccessibility.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MobileAccessibility.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MobileAccessibility.prototype, "isScreenReaderRunning", null);
__decorate([
    Cordova({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MobileAccessibility.prototype, "isVoiceOverRunningCallback", null);
__decorate([
    Cordova({ platforms: ['Amazon Fire OS', 'Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MobileAccessibility.prototype, "isTalkBackRunningCallback", null);
__decorate([
    Cordova({ platforms: ['Amazon Fire OS', 'Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MobileAccessibility.prototype, "isChromeVoxActive", null);
__decorate([
    Cordova({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MobileAccessibility.prototype, "isBoldTextEnabledCallback", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MobileAccessibility.prototype, "isClosedCaptioningEnabledCallback", null);
__decorate([
    Cordova({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MobileAccessibility.prototype, "isDarkerSystemColorsEnabledCallback", null);
__decorate([
    Cordova({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MobileAccessibility.prototype, "isGrayscaleEnabledCallback", null);
__decorate([
    Cordova({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MobileAccessibility.prototype, "isGuidedAccessEnabledCallback", null);
__decorate([
    Cordova({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MobileAccessibility.prototype, "isInvertColorsEnabledCallback", null);
__decorate([
    Cordova({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MobileAccessibility.prototype, "isMonoAudioEnabledCallback", null);
__decorate([
    Cordova({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MobileAccessibility.prototype, "isReduceMotionEnabledCallback", null);
__decorate([
    Cordova({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MobileAccessibility.prototype, "isReduceTransparencyEnabledCallback", null);
__decorate([
    Cordova({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MobileAccessibility.prototype, "isSpeakScreenEnabledCallback", null);
__decorate([
    Cordova({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MobileAccessibility.prototype, "isSpeakSelectionEnabledCallback", null);
__decorate([
    Cordova({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MobileAccessibility.prototype, "isSwitchControlRunningCallback", null);
__decorate([
    Cordova({ platforms: ['Amazon Fire OS', 'Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MobileAccessibility.prototype, "isTouchExplorationEnabledCallback", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MobileAccessibility.prototype, "getTextZoomCallback", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MobileAccessibility.prototype, "setTextZoom", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MobileAccessibility.prototype, "updateTextZoom", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], MobileAccessibility.prototype, "usePreferredTextZoom", null);
__decorate([
    Cordova({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], MobileAccessibility.prototype, "postNotification", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Object]),
    __metadata("design:returntype", void 0)
], MobileAccessibility.prototype, "speak", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MobileAccessibility.prototype, "stop", null);
MobileAccessibility = __decorate([
    Plugin({
        pluginName: 'MobileAccessibility',
        plugin: 'phonegap-plugin-mobile-accessibility',
        pluginRef: 'MobileAccessibility',
        repo: 'https://github.com/phonegap/phonegap-mobile-accessibility',
        platforms: ['Android Fire OS', 'Android', 'iOS', 'Windows']
    })
], MobileAccessibility);
export { MobileAccessibility };
//# sourceMappingURL=index.js.map