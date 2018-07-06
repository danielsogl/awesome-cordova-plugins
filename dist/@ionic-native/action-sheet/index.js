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
import { Cordova, Plugin, CordovaProperty, IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Action Sheet
 * @description
 * The ActionSheet plugin shows a native list of options the user can choose from.
 *
 * Requires Cordova plugin: `cordova-plugin-actionsheet`. For more info, please see the [ActionSheet plugin docs](https://github.com/EddyVerbruggen/cordova-plugin-actionsheet).
 *
 * @usage
 * ```typescript
 * import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';
 *
 * constructor(private actionSheet: ActionSheet) { }
 *
 * ...
 *
 *
 * let buttonLabels = ['Share via Facebook', 'Share via Twitter'];
 *
 * const options: ActionSheetOptions = {
 *   title: 'What do you want with this image?',
 *   subtitle: 'Choose an action',
 *   buttonLabels: buttonLabels,
 *   addCancelButtonWithLabel: 'Cancel',
 *   addDestructiveButtonWithLabel: 'Delete',
 *   androidTheme: this.actionSheet.ANDROID_THEMES.THEME_HOLO_DARK,
 *   destructiveButtonLast: true
 * };
 *
 * this.actionSheet.show(options).then((buttonIndex: number) => {
 *   console.log('Button pressed: ' + buttonIndex);
 * });
 * ```
 * @interfaces
 * ActionSheetOptions
 */
var ActionSheet = (function (_super) {
    __extends(ActionSheet, _super);
    function ActionSheet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Show a native ActionSheet component. See below for options.
     * @param options {ActionSheetOptions} Options See table below
     * @returns {Promise<any>} Returns a Promise that resolves with the index of the
     *   button pressed (1 based, so 1, 2, 3, etc.)
     */
    ActionSheet.prototype.show = function (options) { return; };
    /**
     * Progamtically hide the native ActionSheet
     * @returns {Promise<any>} Returns a Promise that resolves when the actionsheet is closed
     */
    ActionSheet.prototype.hide = function (options) { return; };
    return ActionSheet;
}(IonicNativePlugin));
ActionSheet.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ActionSheet.ctorParameters = function () { return []; };
__decorate([
    CordovaProperty,
    __metadata("design:type", Object)
], ActionSheet.prototype, "ANDROID_THEMES", void 0);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ActionSheet.prototype, "show", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ActionSheet.prototype, "hide", null);
ActionSheet = __decorate([
    Plugin({
        pluginName: 'ActionSheet',
        plugin: 'cordova-plugin-actionsheet',
        pluginRef: 'plugins.actionsheet',
        repo: 'https://github.com/EddyVerbruggen/cordova-plugin-actionsheet',
        platforms: ['Android', 'Browser', 'iOS', 'Windows', 'Windows Phone 8']
    })
], ActionSheet);
export { ActionSheet };
//# sourceMappingURL=index.js.map