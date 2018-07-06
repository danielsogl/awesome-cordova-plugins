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
 * @name Card IO
 * @description
 * @usage
 * ```typescript
 * import { CardIO } from '@ionic-native/card-io';
 *
 * constructor(private cardIO: CardIO) { }
 *
 * ...
 *
 *
 * this.cardIO.canScan()
 *   .then(
 *     (res: boolean) => {
 *       if(res){
 *         let options = {
 *           requireExpiry: true,
 *           requireCCV: false,
 *           requirePostalCode: false
 *         };
 *         CardIO.scan(options);
 *       }
 *     }
 *   );
 * ```
 * @interfaces
 * CardIOOptions
 * CardIOResponse
 */
var CardIO = (function (_super) {
    __extends(CardIO, _super);
    function CardIO() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Check whether card scanning is currently available. (May vary by
     * device, OS version, network connectivity, etc.)
     *
     * @returns {Promise<boolean>}
     */
    CardIO.prototype.canScan = function () { return; };
    /**
     * Scan a credit card with card.io.
     * @param {CardIOOptions} options Options for configuring the plugin
     * @returns {Promise<any>}
     */
    CardIO.prototype.scan = function (options) { return; };
    /**
     * Retrieve the version of the card.io library. Useful when contacting support.
     * @returns {Promise<string>}
     */
    CardIO.prototype.version = function () { return; };
    return CardIO;
}(IonicNativePlugin));
CardIO.decorators = [
    { type: Injectable },
];
/** @nocollapse */
CardIO.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CardIO.prototype, "canScan", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CardIO.prototype, "scan", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CardIO.prototype, "version", null);
CardIO = __decorate([
    Plugin({
        pluginName: 'CardIO',
        plugin: 'card.io.cordova.mobilesdk',
        pluginRef: 'CardIO',
        repo: 'https://github.com/card-io/card.io-Cordova-Plugin',
        platforms: ['Android', 'iOS']
    })
], CardIO);
export { CardIO };
//# sourceMappingURL=index.js.map