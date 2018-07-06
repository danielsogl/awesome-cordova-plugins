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
import { Injectable } from '@angular/core';
/**
 * @name Pin Check
 * @description
 * This plugin is for use with Apache Cordova and allows your application to check whether pin/keyguard or passcode is setup on iOS and Android phones.
 *
 * Requires Cordova plugin: cordova-plugin-pincheck. For more info, please see the [PinCheck plugin docs](https://github.com/ohh2ahh/AppAvailability).
 *
 * @usage
 * ```typescript
 * import { PinCheck } from '@ionic-native/pin-check';
 * import { Platform } from 'ionic-angular';
 *
 * constructor(private pinCheck: PinCheck, private platform: Platform) { }
 *
 * ...
 *
 * this.pinCheck.isPinSetup()
 *   .then(
 *     (success: string) =>  console.log("pin is setup.");,
 *     (error: string) => console.log("pin not setup.");
 *   );
 * ```
 */
var PinCheck = (function (_super) {
    __extends(PinCheck, _super);
    function PinCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *  check whether pin/keyguard or passcode is setup
     * @returns {Promise<boolean>}
     */
    PinCheck.prototype.isPinSetup = function () {
        return;
    };
    return PinCheck;
}(IonicNativePlugin));
PinCheck.decorators = [
    { type: Injectable },
];
/** @nocollapse */
PinCheck.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PinCheck.prototype, "isPinSetup", null);
PinCheck = __decorate([
    Plugin({
        pluginName: 'PinCheck',
        plugin: 'cordova-plugin-pincheck',
        pluginRef: 'cordova.plugins.PinCheck',
        repo: 'https://github.com/shangyilim/cordova-plugin-pincheck',
        platforms: ['Android', 'iOS']
    })
], PinCheck);
export { PinCheck };
//# sourceMappingURL=index.js.map