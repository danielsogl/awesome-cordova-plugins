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
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
/**
 * @name ZBar
 * @description
 * The ZBar Scanner Plugin allows you to scan 2d barcodes.
 *
 * Requires Cordova plugin: `cordova-plugin-cszbar`. For more info, please see the [zBar plugin docs](https://github.com/tjwoon/csZBar).
 *
 * @usage
 * ```typescript
 * import { ZBar, ZBarOptions } from '@ionic-native/zbar';
 *
 * constructor(private zbar: ZBar) { }
 *
 * ...
 *
 * let options: ZBarOptions = {
 *       flash: 'off',
 *       drawSight: false
 *     };
 *
 * this.zbar.scan(options)
 *    .then(result => {
 *       console.log(result); // Scanned code
 *    })
 *    .catch(error => {
 *       console.log(error); // Error message
 *    });
 *
 * ```
 *
 * @interfaces
 * ZBarOptions
 */
var ZBar = (function (_super) {
    __extends(ZBar, _super);
    function ZBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Open the scanner
     * @param options { ZBarOptions } Scan options
     * @returns {Promise<any>} Returns a Promise that resolves with the scanned string, or rejects with an error.
     */
    ZBar.prototype.scan = function (options) { return; };
    return ZBar;
}(IonicNativePlugin));
ZBar.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ZBar.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ZBar.prototype, "scan", null);
ZBar = __decorate([
    Plugin({
        pluginName: 'ZBar',
        plugin: 'cordova-plugin-cszbar',
        pluginRef: 'cloudSky.zBar',
        repo: 'https://github.com/tjwoon/csZBar',
        platforms: ['Android', 'iOS']
    })
], ZBar);
export { ZBar };
//# sourceMappingURL=index.js.map