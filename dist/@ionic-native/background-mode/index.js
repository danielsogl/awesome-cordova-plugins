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
 * @name Background Mode
 * @description
 * Cordova plugin to prevent the app from going to sleep while in background.
 * Requires Cordova plugin: cordova-plugin-background-mode. For more info about plugin, vist: https://github.com/katzer/cordova-plugin-background-mode
 *@usage
 * ```typescript
 * import { BackgroundMode } from '@ionic-native/background-mode';
 *
 * constructor(private backgroundMode: BackgroundMode) { }
 *
 * ...
 *
 * this.backgroundMode.enable();
 * ```
 *
 * @interfaces
 * BackgroundModeConfiguration
 */
var BackgroundMode = (function (_super) {
    __extends(BackgroundMode, _super);
    function BackgroundMode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Enable the background mode.
     * Once called, prevents the app from being paused while in background.
     */
    BackgroundMode.prototype.enable = function () { };
    /**
     * Disable the background mode.
     * Once the background mode has been disabled, the app will be paused when in background.
     */
    BackgroundMode.prototype.disable = function () { return; };
    /**
     * Checks if background mode is enabled or not.
     * @returns {boolean} returns a boolean that indicates if the background mode is enabled.
     */
    BackgroundMode.prototype.isEnabled = function () { return; };
    /**
     * Can be used to get the information if the background mode is active.
     * @returns {boolean} returns a boolean that indicates if the background mode is active.
     */
    BackgroundMode.prototype.isActive = function () { return; };
    /**
     * Override the default title, ticker and text.
     * Available only for Android platform.
     * @param {BackgroundModeConfiguration} options List of option to configure. See table below
     */
    BackgroundMode.prototype.setDefaults = function (options) { return; };
    /**
     * Modify the displayed information.
     * Available only for Android platform.
     * @param {BackgroundModeConfiguration} options Any options you want to update. See table below.
     */
    BackgroundMode.prototype.configure = function (options) { };
    /**
     * Listen for events that the plugin fires. Available events are `enable`, `disable`, `activate`, `deactivate` and `failure`.
     * @param event {string} Event name
     * @returns {Observable<any>}
     */
    BackgroundMode.prototype.on = function (event) { return; };
    /**
     * Android allows to programmatically move from foreground to background.
     */
    BackgroundMode.prototype.moveToBackground = function () { };
    /**
     * Enable GPS-tracking in background (Android).
     */
    BackgroundMode.prototype.disableWebViewOptimizations = function () { };
    /**
     * Android allows to programmatically move from background to foreground.
     */
    BackgroundMode.prototype.moveToForeground = function () { };
    /**
     * Override the back button on Android to go to background instead of closing the app.
     */
    BackgroundMode.prototype.overrideBackButton = function () { };
    /**
     * Exclude the app from the recent task list works on Android 5.0+.
     */
    BackgroundMode.prototype.excludeFromTaskList = function () { };
    /**
     * The method works async instead of isActive() or isEnabled().
     */
    BackgroundMode.prototype.isScreenOff = function () { return; };
    /**
     * Turn screen on
     */
    BackgroundMode.prototype.wakeUp = function () { };
    /**
     * Turn screen on and show app even locked
     */
    BackgroundMode.prototype.unlock = function () { };
    return BackgroundMode;
}(IonicNativePlugin));
BackgroundMode.decorators = [
    { type: Injectable },
];
/** @nocollapse */
BackgroundMode.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BackgroundMode.prototype, "enable", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BackgroundMode.prototype, "disable", null);
__decorate([
    Cordova({
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], BackgroundMode.prototype, "isEnabled", null);
__decorate([
    Cordova({
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], BackgroundMode.prototype, "isActive", null);
__decorate([
    Cordova({
        platforms: ['Android']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BackgroundMode.prototype, "setDefaults", null);
__decorate([
    Cordova({
        platforms: ['Android'],
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BackgroundMode.prototype, "configure", null);
__decorate([
    Cordova({
        observable: true,
        clearFunction: 'un',
        clearWithArgs: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Observable)
], BackgroundMode.prototype, "on", null);
__decorate([
    Cordova({
        platforms: ['Android'],
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BackgroundMode.prototype, "moveToBackground", null);
__decorate([
    Cordova({
        platforms: ['Android'],
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BackgroundMode.prototype, "disableWebViewOptimizations", null);
__decorate([
    Cordova({
        platforms: ['Android'],
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BackgroundMode.prototype, "moveToForeground", null);
__decorate([
    Cordova({
        platforms: ['Android'],
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BackgroundMode.prototype, "overrideBackButton", null);
__decorate([
    Cordova({
        platforms: ['Android'],
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BackgroundMode.prototype, "excludeFromTaskList", null);
__decorate([
    Cordova({
        platforms: ['Android']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BackgroundMode.prototype, "isScreenOff", null);
__decorate([
    Cordova({
        platforms: ['Android'],
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BackgroundMode.prototype, "wakeUp", null);
__decorate([
    Cordova({
        platforms: ['Android'],
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BackgroundMode.prototype, "unlock", null);
BackgroundMode = __decorate([
    Plugin({
        pluginName: 'BackgroundMode',
        plugin: 'cordova-plugin-background-mode',
        pluginRef: 'cordova.plugins.backgroundMode',
        repo: 'https://github.com/katzer/cordova-plugin-background-mode',
        platforms: ['AmazonFire OS', 'Android', 'Browser', 'iOS', 'Windows']
    })
], BackgroundMode);
export { BackgroundMode };
//# sourceMappingURL=index.js.map