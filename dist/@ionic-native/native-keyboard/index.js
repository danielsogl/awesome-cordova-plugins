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
import { Plugin, IonicNativePlugin, Cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';
/**
 * @name Native Keyboard
 * @description
 * A cross platform WhatsApp / Messenger / Slack -style keyboard even. For your Cordova app.
 *
 *
 * IMPORTANT NOTICE: this plugin is paid, please read more about this at the [plugin's repo](https://github.com/EddyVerbruggen/cordova-plugin-native-keyboard#i-like-it-hook-me-up).
 *
 *
 * @usage
 * ```
 * import { NativeKeyboard } from '@ionic-native/native-keyboard';
 *
 *
 * constructor(private nativeKeyboard: NativeKeyboard) { }
 *
 * ...
 *
 *
 * ```
 * @interfaces
 * NativeKeyboardOptions
 * NativeKeyboardButton
 * NativeKeyboardLeftButton
 * NativeKeyboardUpdateMessengerOptions
 */
var NativeKeyboard = (function (_super) {
    __extends(NativeKeyboard, _super);
    function NativeKeyboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Show messenger
     * @param options {NativeKeyboardOptions}
     */
    NativeKeyboard.prototype.showMessenger = function (options) { };
    /**
     * Hide messenger
     * @param options {NativeKeyboardOptions}
     */
    NativeKeyboard.prototype.hideMessenger = function (options) { };
    /**
     * Programmatically pop up the keyboard again if the user dismissed it.
     * @return {Promise<any>}
     */
    NativeKeyboard.prototype.showMessengerKeyboard = function () { return; };
    /**
     * Programmatically hide the keyboard (but not the messenger bar)
     */
    NativeKeyboard.prototype.hideMessengerKeyboard = function () { return; };
    /**
     * Manipulate the messenger while it's open. For instance if you want to update the text programmatically based on what the user typed.
     * @param options
     */
    NativeKeyboard.prototype.updateMessenger = function (options) { return; };
    return NativeKeyboard;
}(IonicNativePlugin));
NativeKeyboard.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NativeKeyboard.ctorParameters = function () { return []; };
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NativeKeyboard.prototype, "showMessenger", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NativeKeyboard.prototype, "hideMessenger", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NativeKeyboard.prototype, "showMessengerKeyboard", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NativeKeyboard.prototype, "hideMessengerKeyboard", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NativeKeyboard.prototype, "updateMessenger", null);
NativeKeyboard = __decorate([
    Plugin({
        pluginName: 'NativeKeyboard',
        plugin: 'cordova-plugin-native-keyboard',
        pluginRef: 'NativeKeyboard',
        repo: 'https://github.com/EddyVerbruggen/cordova-plugin-native-keyboard',
        platforms: ['Android', 'iOS']
    })
], NativeKeyboard);
export { NativeKeyboard };
//# sourceMappingURL=index.js.map