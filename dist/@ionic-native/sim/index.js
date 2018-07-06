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
 * @name Sim
 * @description
 * Gets info from the Sim card like the carrier name, mcc, mnc and country code and other system dependent info.
 *
 * Requires Cordova plugin: `cordova-plugin-sim`. For more info, please see the [Cordova Sim docs](https://github.com/pbakondy/cordova-plugin-sim).
 *
 * @usage
 * ```typescript
 * import { Sim } from '@ionic-native/sim';
 *
 *
 * constructor(private sim: Sim) { }
 *
 * ...
 *
 * this.sim.getSimInfo().then(
 *   (info) => console.log('Sim info: ', info),
 *   (err) => console.log('Unable to get sim info: ', err)
 * );
 *
 * this.sim.hasReadPermission().then(
 *   (info) => console.log('Has permission: ', info)
 * );
 *
 * this.sim.requestReadPermission().then(
 *   () => console.log('Permission granted'),
 *   () => console.log('Permission denied')
 * );
 * ```
 */
var Sim = (function (_super) {
    __extends(Sim, _super);
    function Sim() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns info from the SIM card.
     * @returns {Promise<any>}
     */
    Sim.prototype.getSimInfo = function () { return; };
    /**
     * Check permission
     * @returns {Promise<any>}
     */
    Sim.prototype.hasReadPermission = function () { return; };
    /**
     * Request permission
     * @returns {Promise<any>}
     */
    Sim.prototype.requestReadPermission = function () { return; };
    return Sim;
}(IonicNativePlugin));
Sim.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Sim.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Sim.prototype, "getSimInfo", null);
__decorate([
    Cordova({
        platforms: ['Android']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Sim.prototype, "hasReadPermission", null);
__decorate([
    Cordova({
        platforms: ['Android']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Sim.prototype, "requestReadPermission", null);
Sim = __decorate([
    Plugin({
        pluginName: 'Sim',
        plugin: 'cordova-plugin-sim',
        pluginRef: 'plugins.sim',
        repo: 'https://github.com/pbakondy/cordova-plugin-sim',
        platforms: ['Android', 'iOS', 'Windows', 'Windows Phone']
    })
], Sim);
export { Sim };
//# sourceMappingURL=index.js.map