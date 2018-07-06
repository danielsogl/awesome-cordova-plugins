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
 * @name Keyboard
 * @description
 * @usage
 * ```typescript
 * import { Keyboard } from '@ionic-native/keyboard';
 *
 * constructor(private keyboard: Keyboard) { }
 *
 * ...
 *
 * this.keyboard.show();
 *
 * this.keyboard.close();
 *
 * ```
 */
var Keyboard = (function (_super) {
    __extends(Keyboard, _super);
    function Keyboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Hide the keyboard accessory bar with the next, previous and done buttons.
     * @param hide {boolean}
     */
    Keyboard.prototype.hideKeyboardAccessoryBar = function (hide) { };
    /**
     * Force keyboard to be shown.
     */
    Keyboard.prototype.show = function () { };
    /**
     * Close the keyboard if open.
     */
    Keyboard.prototype.close = function () { };
    /**
     * Prevents the native UIScrollView from moving when an input is focused.
     * @param disable {boolean}
     */
    Keyboard.prototype.disableScroll = function (disable) { };
    /**
     * Creates an observable that notifies you when the keyboard is shown. Unsubscribe to observable to cancel event watch.
     * @returns {Observable<any>}
     */
    Keyboard.prototype.onKeyboardShow = function () { return; };
    /**
     * Creates an observable that notifies you when the keyboard is hidden. Unsubscribe to observable to cancel event watch.
     * @returns {Observable<any>}
     */
    Keyboard.prototype.onKeyboardHide = function () { return; };
    return Keyboard;
}(IonicNativePlugin));
Keyboard.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Keyboard.ctorParameters = function () { return []; };
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Keyboard.prototype, "hideKeyboardAccessoryBar", null);
__decorate([
    Cordova({
        sync: true,
        platforms: ['Android', 'BlackBerry 10', 'Windows']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Keyboard.prototype, "show", null);
__decorate([
    Cordova({
        sync: true,
        platforms: ['iOS', 'Android', 'BlackBerry 10', 'Windows']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Keyboard.prototype, "close", null);
__decorate([
    Cordova({
        sync: true,
        platforms: ['iOS', 'Windows']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Keyboard.prototype, "disableScroll", null);
__decorate([
    Cordova({
        eventObservable: true,
        event: 'native.keyboardshow',
        platforms: ['iOS', 'Android', 'BlackBerry 10', 'Windows']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], Keyboard.prototype, "onKeyboardShow", null);
__decorate([
    Cordova({
        eventObservable: true,
        event: 'native.keyboardhide',
        platforms: ['iOS', 'Android', 'BlackBerry 10', 'Windows']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], Keyboard.prototype, "onKeyboardHide", null);
Keyboard = __decorate([
    Plugin({
        pluginName: 'Keyboard',
        plugin: 'ionic-plugin-keyboard',
        pluginRef: 'cordova.plugins.Keyboard',
        repo: 'https://github.com/ionic-team/ionic-plugin-keyboard',
        platforms: ['Android', 'BlackBerry 10', 'iOS', 'Windows']
    })
], Keyboard);
export { Keyboard };
//# sourceMappingURL=index.js.map