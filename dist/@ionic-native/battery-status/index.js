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
 * @name Battery Status
 * @description
 * Requires Cordova plugin: cordova-plugin-batterystatus. For more info, please see the [BatteryStatus plugin docs](https://github.com/apache/cordova-plugin-battery-status).
 *
 * @usage
 * ```typescript
 * import { BatteryStatus } from '@ionic-native/battery-status';
 *
 * constructor(private batteryStatus: BatteryStatus) { }
 *
 * ...
 *
 *
 * // watch change in battery status
 * let subscription = this.batteryStatus.onChange().subscribe(
 *  (status: BatteryStatusResponse) => {
 *    console.log(status.level, status.isPlugged);
 *  }
 * );
 *
 * // stop watch
 * subscription.unsubscribe();
 *
 * ```
 * @interfaces
 * BatteryStatusResponse
 */
var BatteryStatus = (function (_super) {
    __extends(BatteryStatus, _super);
    function BatteryStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Watch the change in battery level
     * @returns {Observable<BatteryStatusResponse>} Returns an observable that pushes a status object
     */
    BatteryStatus.prototype.onChange = function () { return; };
    /**
     * Watch when the battery level goes low
     * @returns {Observable<BatteryStatusResponse>} Returns an observable that pushes a status object
     */
    BatteryStatus.prototype.onLow = function () { return; };
    /**
     * Watch when the battery level goes to critial
     * @returns {Observable<BatteryStatusResponse>} Returns an observable that pushes a status object
     */
    BatteryStatus.prototype.onCritical = function () { return; };
    return BatteryStatus;
}(IonicNativePlugin));
BatteryStatus.decorators = [
    { type: Injectable },
];
/** @nocollapse */
BatteryStatus.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        eventObservable: true,
        event: 'batterystatus'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], BatteryStatus.prototype, "onChange", null);
__decorate([
    Cordova({
        eventObservable: true,
        event: 'batterylow'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], BatteryStatus.prototype, "onLow", null);
__decorate([
    Cordova({
        eventObservable: true,
        event: 'batterycritical'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], BatteryStatus.prototype, "onCritical", null);
BatteryStatus = __decorate([
    Plugin({
        pluginName: 'BatteryStatus',
        plugin: 'cordova-plugin-battery-status',
        pluginRef: 'navigator.battery',
        repo: 'https://github.com/apache/cordova-plugin-battery-status',
        platforms: ['Amazon Fire OS', 'Android', 'BlackBerry 10', 'Browser', 'Firefox OS', 'iOS', 'Tizen', 'Ubuntu', 'Windows']
    })
], BatteryStatus);
export { BatteryStatus };
//# sourceMappingURL=index.js.map