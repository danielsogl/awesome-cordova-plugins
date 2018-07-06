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
 * @name Toast
 * @description
 * This plugin allows you to show a native Toast (a little text popup) on iOS, Android and WP8. It's great for showing a non intrusive native notification which is guaranteed always in the viewport of the browser.
 *
 * Requires Cordova plugin: `cordova-plugin-x-toast`. For more info, please see the [Toast plugin docs](https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin).
 *
 * @usage
 * ```typescript
 * import { Toast } from '@ionic-native/toast';
 *
 * constructor(private toast: Toast) { }
 *
 * ...
 *
 * this.toast.show(`I'm a toast`, '5000', 'center').subscribe(
 *   toast => {
 *     console.log(toast);
 *   }
 * );
 * ```
 * @interfaces
 * ToastOptions
 */
var Toast = (function (_super) {
    __extends(Toast, _super);
    function Toast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Show a native toast for the given duration at the specified position.
     *
     * @param {string} message  The message to display.
     * @param {string} duration  Duration to show the toast, either 'short', 'long' or any number of milliseconds: '1500'.
     * @param {string} position  Where to position the toast, either 'top', 'center', or 'bottom'.
     * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.prototype.show = function (message, duration, position) { return; };
    /**
     * Manually hide any currently visible toast.
     * @returns {Promise<any>} Returns a Promise that resolves on success.
     */
    Toast.prototype.hide = function () { return; };
    /**
     * Show a native toast with the given options.
     *
     * @param {Object} options  Options for showing a toast. Available options:
     *   message  The message to display.
     *   duration  Duration to show the toast, either 'short', 'long' or any number of milliseconds: '1500'.
     *   position  Where to position the toast, either 'top', 'center', or 'bottom'.
     *   addPixelsY  Offset in pixels to move the toast up or down from its specified position.
     *
     * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.prototype.showWithOptions = function (options) { return; };
    /**
     * Shorthand for `show(message, 'short', 'top')`.
     * @param message {string}
     * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.prototype.showShortTop = function (message) { return; };
    /**
     * Shorthand for `show(message, 'short', 'center')`.
     * @param message {string}
     * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.prototype.showShortCenter = function (message) { return; };
    /**
     * Shorthand for `show(message, 'short', 'bottom')`.
     * @param message {string}
     * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.prototype.showShortBottom = function (message) { return; };
    /**
     * Shorthand for `show(message, 'long', 'top')`.
     * @param message {string}
     * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.prototype.showLongTop = function (message) { return; };
    /**
     * Shorthand for `show(message, 'long', 'center')`.
     * @param message {string}
     * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.prototype.showLongCenter = function (message) { return; };
    /**
     * Shorthand for `show(message, 'long', 'bottom')`.
     * @param message {string}
     * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.prototype.showLongBottom = function (message) { return; };
    return Toast;
}(IonicNativePlugin));
Toast.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Toast.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        observable: true,
        clearFunction: 'hide'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Observable)
], Toast.prototype, "show", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Toast.prototype, "hide", null);
__decorate([
    Cordova({
        observable: true,
        clearFunction: 'hide'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Observable)
], Toast.prototype, "showWithOptions", null);
__decorate([
    Cordova({
        observable: true,
        clearFunction: 'hide'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Observable)
], Toast.prototype, "showShortTop", null);
__decorate([
    Cordova({
        observable: true,
        clearFunction: 'hide'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Observable)
], Toast.prototype, "showShortCenter", null);
__decorate([
    Cordova({
        observable: true,
        clearFunction: 'hide'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Observable)
], Toast.prototype, "showShortBottom", null);
__decorate([
    Cordova({
        observable: true,
        clearFunction: 'hide'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Observable)
], Toast.prototype, "showLongTop", null);
__decorate([
    Cordova({
        observable: true,
        clearFunction: 'hide'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Observable)
], Toast.prototype, "showLongCenter", null);
__decorate([
    Cordova({
        observable: true,
        clearFunction: 'hide'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Observable)
], Toast.prototype, "showLongBottom", null);
Toast = __decorate([
    Plugin({
        pluginName: 'Toast',
        plugin: 'cordova-plugin-x-toast',
        pluginRef: 'plugins.toast',
        repo: 'https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin',
        platforms: ['Android', 'BlackBerry 10', 'iOS', 'Windows', 'Windows Phone 8']
    })
], Toast);
export { Toast };
//# sourceMappingURL=index.js.map