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
 * @name Pin Dialog
 * @description
 *
 * @usage
 * ```typescript
 * import { PinDialog } from '@ionic-native/pin-dialog';
 *
 *
 * constructor(private pinDialog: PinDialog) { }
 *
 * ...
 *
 * this.pinDialog.prompt('Enter your PIN', 'Verify PIN', ['OK', 'Cancel'])
 *   .then(
 *     (result: any) => {
 *       if (result.buttonIndex == 1) console.log('User clicked OK, value is: ', result.input1);
 *       else if(result.buttonIndex == 2) console.log('User cancelled');
 *     }
 *   );
 * ```
 */
var PinDialog = (function (_super) {
    __extends(PinDialog, _super);
    function PinDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Show pin dialog
     * @param {string} message Message to show the user
     * @param {string} title Title of the dialog
     * @param {string[]} buttons Buttons to show
     * @returns {Promise<{ buttonIndex: number, input1: string }>}
     */
    PinDialog.prototype.prompt = function (message, title, buttons) { return; };
    return PinDialog;
}(IonicNativePlugin));
PinDialog.decorators = [
    { type: Injectable },
];
/** @nocollapse */
PinDialog.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        successIndex: 1,
        errorIndex: 4 // no error callback
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Array]),
    __metadata("design:returntype", Promise)
], PinDialog.prototype, "prompt", null);
PinDialog = __decorate([
    Plugin({
        pluginName: 'PinDialog',
        plugin: 'cordova-plugin-pin-dialog',
        pluginRef: 'plugins.pinDialog',
        repo: 'https://github.com/Paldom/PinDialog',
        platforms: ['Android', 'iOS']
    })
], PinDialog);
export { PinDialog };
//# sourceMappingURL=index.js.map