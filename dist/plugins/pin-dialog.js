"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Pin Dialog
 * @description
 *
 * @usage
 * ```typescript
 * import { PinDialog } from 'ionic-native';
 *
 *
 * PinDialog.prompt('Enter your PIN', 'Verify PIN', ['OK', 'Cancel'])
 *   .then(
 *     (result: any) => {
 *       if (result.buttonIndex == 1) console.log('User clicked OK, value is: ', result.input1);
 *       else if(result.buttonIndex == 2) console.log('User cancelled');
 *     }
 *   );
 * ```
 */
var PinDialog = (function () {
    function PinDialog() {
    }
    /**
     * Show pin dialog
     * @param {string} message Message to show the user
     * @param {string} title Title of the dialog
     * @param {string[]} buttons Buttons to show
     */
    PinDialog.prompt = function (message, title, buttons) { return; };
    __decorate([
        plugin_1.Cordova({
            successIndex: 1
        })
    ], PinDialog, "prompt", null);
    PinDialog = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-pin-dialog',
            pluginRef: 'plugins.pinDialog',
            repo: 'https://github.com/Paldom/PinDialog'
        })
    ], PinDialog);
    return PinDialog;
}());
exports.PinDialog = PinDialog;
//# sourceMappingURL=pin-dialog.js.map