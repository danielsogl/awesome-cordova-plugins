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
 * @name Market
 * @description
 * Opens an app's page in the market place (Google Play, App Store)
 *
 * @usage
 * ```typescript
 * import { Market } from '@ionic-native/market';
 *
 * constructor(private market: Market) { }
 *
 * ...
 *
 * this.market.open('your.package.name');
 *
 * ```
 */
var Market = (function (_super) {
    __extends(Market, _super);
    function Market() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Opens an app in Google Play / App Store
     * @param appId {string} Package name
     * @return {Promise<any>}
     */
    Market.prototype.open = function (appId) { return; };
    /**
     * Search apps by keyword
     * @param keyword {string} Keyword
     * @return {Promise<any>}
     */
    Market.prototype.search = function (keyword) { return; };
    return Market;
}(IonicNativePlugin));
Market.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Market.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        callbackStyle: 'object',
        successName: 'success',
        errorName: 'failure'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Market.prototype, "open", null);
__decorate([
    Cordova({
        callbackStyle: 'object',
        successName: 'success',
        errorName: 'failure',
        platforms: ['Android']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Market.prototype, "search", null);
Market = __decorate([
    Plugin({
        pluginName: 'Market',
        plugin: 'cordova-plugin-market',
        pluginRef: 'cordova.plugins.market',
        repo: 'https://github.com/xmartlabs/cordova-plugin-market',
        platforms: ['Android', 'iOS']
    })
], Market);
export { Market };
//# sourceMappingURL=index.js.map