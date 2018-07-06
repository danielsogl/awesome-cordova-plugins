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
 * @name Dialogs
 * @description
 * This plugin gives you ability to access and customize the device native dialogs.
 *
 * Requires Cordova plugin: `cordova-plugin-dialogs`. For more info, please see the [Dialogs plugin docs](https://github.com/apache/cordova-plugin-dialogs).
 *
 * @usage
 * ```typescript
 * import { Dialogs } from '@ionic-native/dialogs';
 *
 * constructor(private dialogs: Dialogs) { }
 *
 * ...
 *
 * this.dialogs.alert('Hello world')
 *   .then(() => console.log('Dialog dismissed'))
 *   .catch(e => console.log('Error displaying dialog', e));
 *
 *
 * ```
 * @interfaces
 * DialogsPromptCallback
 */
var Dialogs = (function (_super) {
    __extends(Dialogs, _super);
    function Dialogs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Shows a custom alert or dialog box.
     * @param {string} message Dialog message.
     * @param {string} title Dialog title. (Optional, defaults to Alert)
     * @param {string} buttonName Button name. (Optional, defaults to OK)
     * @returns {Promise<any>} Returns a blank promise once the user has dismissed the alert.
     */
    Dialogs.prototype.alert = function (message, title, buttonName) { return; };
    /**
     * Displays a customizable confirmation dialog box.
     * @param {string} message Dialog message.
     * @param {string} title Dialog title. (Optional, defaults to Confirm)
     * @param {Array<string>} buttonLabels Array of strings specifying button labels. (Optional, defaults to [OK,Cancel])
     * @returns {Promise<number>} Returns a promise that resolves the button index that was clicked, or 0 if the user has dismissed the dialog by clicking outside the dialog box. Note that the index use one-based indexing.
     */
    Dialogs.prototype.confirm = function (message, title, buttonLabels) { return; };
    /**
     * Displays a native dialog box that is more customizable than the browser's prompt function.
     * @param {string} message Dialog message.
     * @param {string} title Dialog title. (Optional, defaults to Prompt)
     * @param {Array<string>} buttonLabels  Array of strings specifying button labels. (Optional, defaults to ["OK","Cancel"])
     * @param {string} defaultText Default textbox input value.  (Optional, Default: empty string)
     * @returns {Promise<DialogsPromptCallback>} Returns a promise that resolves an object with the button index clicked and the text entered
     */
    Dialogs.prototype.prompt = function (message, title, buttonLabels, defaultText) { return; };
    /**
     * The device plays a beep sound.
     * @param {numbers} times The number of times to repeat the beep.
     */
    Dialogs.prototype.beep = function (times) { };
    return Dialogs;
}(IonicNativePlugin));
Dialogs.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Dialogs.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        successIndex: 1,
        errorIndex: 4
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], Dialogs.prototype, "alert", null);
__decorate([
    Cordova({
        successIndex: 1,
        errorIndex: 4
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Array]),
    __metadata("design:returntype", Promise)
], Dialogs.prototype, "confirm", null);
__decorate([
    Cordova({
        successIndex: 1,
        errorIndex: 5
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Array, String]),
    __metadata("design:returntype", Promise)
], Dialogs.prototype, "prompt", null);
__decorate([
    Cordova({
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Dialogs.prototype, "beep", null);
Dialogs = __decorate([
    Plugin({
        pluginName: 'Dialogs',
        plugin: 'cordova-plugin-dialogs',
        pluginRef: 'navigator.notification',
        repo: 'https://github.com/apache/cordova-plugin-dialogs',
        platforms: ['Amazon Fire OS', 'Android', 'BlackBerry 10', 'Browser', 'Firefox OS', 'iOS', 'Tizen', 'Ubuntu', 'Windows', 'Windows Phone']
    })
], Dialogs);
export { Dialogs };
//# sourceMappingURL=index.js.map