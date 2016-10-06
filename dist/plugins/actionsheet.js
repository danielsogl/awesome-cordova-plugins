"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Action Sheet
 * @description
 * The ActionSheet plugin shows a native list of options the user can choose from.
 *
 * Requires Cordova plugin: `cordova-plugin-actionsheet`. For more info, please see the [ActionSheet plugin docs](https://github.com/EddyVerbruggen/cordova-plugin-actionsheet).
 *
 * @usage
 * ```typescript
 * import { ActionSheet } from 'ionic-native';
 *
 *
 * let buttonLabels = ['Share via Facebook', 'Share via Twitter'];
 * ActionSheet.show({
 *   'title': 'What do you want with this image?',
 *   'buttonLabels': buttonLabels,
 *   'addCancelButtonWithLabel': 'Cancel',
 *   'addDestructiveButtonWithLabel' : 'Delete'
 * }).then((buttonIndex: number) => {
 *   console.log('Button pressed: ' + buttonIndex);
 * });
 * ```
 *
 * @advanced
 * ActionSheet options
 *
 * | Option                        | Type      | Description                                  |
 * |-------------------------------|-----------|----------------------------------------------|
 * | title                         |`string`   | The title for the actionsheet                |
 * | buttonLabels                  |`string[]` | the labels for the buttons. Uses the index x |
 * | androidTheme                  |`number`   | Theme to be used on Android                  |
 * | androidEnableCancelButton     |`boolean`  | Enable a cancel on Android                   |
 * | winphoneEnableCancelButton    |`boolean`  | Enable a cancel on Windows Phone             |
 * | addCancelButtonWithLabel      |`string`   | Add a cancel button with text                |
 * | addDestructiveButtonWithLabel |`string`   | Add a destructive button with text           |
 * | position                      |`number[]` | On an iPad, set the X,Y position             |
 *
 *
 */
var ActionSheet = (function () {
    function ActionSheet() {
    }
    /**
     * Show a native ActionSheet component. See below for options.
     * @param {options} Options See table below
     * @returns {Promise} Returns a Promise that resolves with the index of the
     *   button pressed (1 based, so 1, 2, 3, etc.)
     */
    ActionSheet.show = function (options) { return; };
    /**
     * Progamtically hide the native ActionSheet
     * @returns {Promise} Returns a Promise that resolves when the actionsheet is closed
     */
    ActionSheet.hide = function (options) { return; };
    __decorate([
        plugin_1.Cordova()
    ], ActionSheet, "show", null);
    __decorate([
        plugin_1.Cordova()
    ], ActionSheet, "hide", null);
    ActionSheet = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-actionsheet',
            pluginRef: 'plugins.actionsheet',
            repo: 'https://github.com/EddyVerbruggen/cordova-plugin-actionsheet',
            platforms: ['Android', 'iOS', 'Windows Phone 8']
        })
    ], ActionSheet);
    return ActionSheet;
}());
exports.ActionSheet = ActionSheet;
//# sourceMappingURL=actionsheet.js.map