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
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
/**
 * @name App Preferences
 * @description
 * This plugin allows you to read and write app preferences
 *
 * @usage
 * ```typescript
 * import { AppPreferences } from '@ionic-native/app-preferences';
 *
 * constructor(private appPreferences: AppPreferences) { }
 *
 * ...
 *
 * this.appPreferences.fetch('key').then((res) => { console.log(res); });
 *
 * ```
 *
 */
var AppPreferences = (function (_super) {
    __extends(AppPreferences, _super);
    function AppPreferences() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get a preference value
     *
     * @param {string} dict Dictionary for key (OPTIONAL)
     * @param {string} key Key
     * @return {Promise<any>} Returns a promise
     */
    AppPreferences.prototype.fetch = function (dict, key) { return; };
    /**
     * Set a preference value
     *
     * @param {string} dict Dictionary for key (OPTIONAL)
     * @param {string} key Key
     * @param {any} value Value
     * @return {Promise<any>} Returns a promise
     */
    AppPreferences.prototype.store = function (dict, key, value) {
        return;
    };
    /**
     * Remove value from preferences
     *
     * @param {string} dict Dictionary for key (OPTIONAL)
     * @param {string} key Key
     * @return {Promise<any>} Returns a promise
     */
    AppPreferences.prototype.remove = function (dict, key) { return; };
    /**
     * Clear preferences
     *
     * @return {Promise<any>} Returns a promise
     */
    AppPreferences.prototype.clearAll = function () { return; };
    /**
     * Show native preferences interface
     *
     * @return {Promise<any>} Returns a promise
     */
    AppPreferences.prototype.show = function () { return; };
    /**
     * Show native preferences interface
     *
     * @param {boolean} subscribe true value to subscribe, false - unsubscribe
     * @return {Observable<any>} Returns an observable
     */
    AppPreferences.prototype.watch = function (subscribe) { return; };
    /**
     * Return named configuration context
     * In iOS you'll get a suite configuration, on Android — named file
     * Supports: Android, iOS
     * @param {string} suiteName suite name
     * @returns {Object} Custom object, bound to that suite
     */
    AppPreferences.prototype.suite = function (suiteName) { return; };
    AppPreferences.prototype.iosSuite = function (suiteName) { return; };
    /**
     * Return cloud synchronized configuration context
     * Currently supports Windows and iOS/macOS
     * @returns {Object} Custom object, bound to that suite
     */
    AppPreferences.prototype.cloudSync = function () { return; };
    /**
     * Return default configuration context
     * Currently supports Windows and iOS/macOS
     * @returns {Object} Custom Object, bound to that suite
     */
    AppPreferences.prototype.defaults = function () { return; };
    return AppPreferences;
}(IonicNativePlugin));
AppPreferences.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AppPreferences.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AppPreferences.prototype, "fetch", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], AppPreferences.prototype, "store", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AppPreferences.prototype, "remove", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppPreferences.prototype, "clearAll", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppPreferences.prototype, "show", null);
__decorate([
    Cordova({
        observable: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Observable)
], AppPreferences.prototype, "watch", null);
__decorate([
    Cordova({
        platforms: ['Android'],
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AppPreferences.prototype, "suite", null);
__decorate([
    Cordova({
        platforms: ['iOS'],
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AppPreferences.prototype, "iosSuite", null);
__decorate([
    Cordova({
        platforms: ['iOS', 'Windows', 'Windows Phone 8']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppPreferences.prototype, "cloudSync", null);
__decorate([
    Cordova({
        platforms: ['iOS', 'Windows', 'Windows Phone 8']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppPreferences.prototype, "defaults", null);
AppPreferences = __decorate([
    Plugin({
        pluginName: 'AppPreferences',
        plugin: 'cordova-plugin-app-preferences',
        pluginRef: 'plugins.appPreferences',
        repo: 'https://github.com/apla/me.apla.cordova.app-preferences',
        platforms: ['Android', 'BlackBerry 10', 'Browser', 'iOS', 'macOS', 'Windows 8', 'Windows Phone']
    })
], AppPreferences);
export { AppPreferences };
//# sourceMappingURL=index.js.map