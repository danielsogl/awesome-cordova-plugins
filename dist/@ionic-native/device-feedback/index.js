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
 * @name Device Feedback
 * @description
 *
 * Plugin that lets you provide haptic or acoustic feedback on Android devices.
 *
 * @usage
 * ```typescript
 * import { DeviceFeedback } from '@ionic-native/device-feedback';
 *
 * constructor(private deviceFeedback: DeviceFeedback) { }
 *
 * ...
 *
 *
 * this.deviceFeedback.acoustic();
 *
 * this.deviceFeedback.haptic(0);
 *
 * this.deviceFeedback.isFeedbackEnabled()
 *   .then((feedback) => {
 *     console.log(feedback);
 *     // {
 *     //   acoustic: true,
 *     //   haptic: true
 *     // }
 *   });
 *
 * ```
 */
var DeviceFeedback = (function (_super) {
    __extends(DeviceFeedback, _super);
    function DeviceFeedback() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Provide sound feedback to user, nevertheless respect user's settings and current active device profile as native feedback do.
     */
    DeviceFeedback.prototype.acoustic = function () { };
    /**
     * Provide vibrate feedback to user, nevertheless respect user's tactile feedback setting as native feedback do.
     * @param type {Number} Specify type of vibration feedback. 0 for long press, 1 for virtual key, or 3 for keyboard tap.
     */
    DeviceFeedback.prototype.haptic = function (type) { };
    /**
     * Check if haptic and acoustic feedback is enabled by user settings.
     * @returns {Promise<any>}
     */
    DeviceFeedback.prototype.isFeedbackEnabled = function () { return; };
    return DeviceFeedback;
}(IonicNativePlugin));
DeviceFeedback.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DeviceFeedback.ctorParameters = function () { return []; };
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeviceFeedback.prototype, "acoustic", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DeviceFeedback.prototype, "haptic", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DeviceFeedback.prototype, "isFeedbackEnabled", null);
DeviceFeedback = __decorate([
    Plugin({
        pluginName: 'DeviceFeedback',
        plugin: 'cordova-plugin-velda-devicefeedback',
        pluginRef: 'plugins.deviceFeedback',
        repo: 'https://github.com/VVelda/device-feedback',
        platforms: ['Android']
    })
], DeviceFeedback);
export { DeviceFeedback };
//# sourceMappingURL=index.js.map