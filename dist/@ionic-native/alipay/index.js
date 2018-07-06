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
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';
/**
 * @name Alipay
 * @description
 * This plugin is used for Alipay APP support. Integrated with the latest SDK.
 *
 * Requires Cordova plugin: `cordova-alipay-base`. For more info, please see the [Alipay plugin docs](https://github.com/xueron/cordova-alipay-base).
 *
 * @usage
 * ```typescript
 * import { Alipay, AlipayOrder } from '@ionic-native/alipay';
 *
 * constructor(private alipay: Alipay) {
 *
 * // Should get from server side with sign.
 * const alipayOrder: AlipayOrder = {
 *       ...
 *     };
 *
 *
 * this.alipay.pay(alipayOrder)
 *    .then(result => {
 *       console.log(result); // Success
 *    })
 *    .catch(error => {
 *       console.log(error); // Failed
 *    });
 *
 * }
 *
 *
 * ```
 *
 * @interfaces
 * AlipayOrder
 */
var Alipay = (function (_super) {
    __extends(Alipay, _super);
    function Alipay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Open Alipay to perform App pay
     * @param order { AlipayOrder } alipay options
     * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
     */
    Alipay.prototype.pay = function (order) { return; };
    return Alipay;
}(IonicNativePlugin));
Alipay.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Alipay.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Alipay.prototype, "pay", null);
Alipay = __decorate([
    Plugin({
        pluginName: 'Alipay',
        plugin: 'cordova-alipay-base',
        pluginRef: 'Alipay.Base',
        repo: 'https://github.com/xueron/cordova-alipay-base',
        install: 'ionic cordova plugin add cordova-alipay-base --variable APP_ID=your_app_id',
        installVariables: ['APP_ID'],
        platforms: ['Android', 'iOS']
    })
], Alipay);
export { Alipay };
//# sourceMappingURL=index.js.map