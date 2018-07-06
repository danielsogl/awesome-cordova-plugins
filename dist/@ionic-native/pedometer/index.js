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
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
/**
 * @name Pedometer
 * @description
 * Fetch pedestrian-related pedometer data,
 * such as step counts and other information about the distance travelled.
 *
 * @usage
 * ```typescript
 * import { Pedometer } from '@ionic-native/pedometer';
 *
 * Pedometer.isDistanceAvailable()
 *   .then((available: boolean) => console.log(available))
 *   .catch((error: any) => console.log(error));
 *
 * Pedometer.startPedometerUpdates()
 *    .subscribe((data: IPedometerData) => {
 *      console.log(data);
 *    });
 * ```
 */
var Pedometer = (function (_super) {
    __extends(Pedometer, _super);
    function Pedometer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Checks if step counting is available. Only works on iOS.
     * @return {Promise<boolean>} Returns a promise that resolves when feature is supported (true) or not supported (false)
     */
    Pedometer.prototype.isStepCountingAvailable = function () { return; };
    /**
     * Distance estimation indicates the ability to use step information to supply the approximate distance travelled by the user.
     * This capability is not supported on all devices, even with iOS 8.
     * Only works on iOS.
     * @return {Promise<boolean>} Returns a promise that resolves when feature is supported (true) or not supported (false)
     */
    Pedometer.prototype.isDistanceAvailable = function () { return; };
    /**
     * Floor counting indicates the ability to count the number of floors the user walks up or down using stairs.
     * This capability is not supported on all devices, even with iOS 8.
     * Only works on iOS.
     * @return {Promise<boolean>} Returns a promise that resolves when feature is supported (true) or not supported (false)
     */
    Pedometer.prototype.isFloorCountingAvailable = function () { return; };
    /**
    * Starts the delivery of recent pedestrian-related data to your Cordova app.
    *
    * When the app is suspended, the delivery of updates stops temporarily.
    * Upon returning to foreground or background execution, the pedometer object begins updates again.
    * @return {Observable<IPedometerData>} Returns a Observable that recieves repeatly data from pedometer in background.
    */
    Pedometer.prototype.startPedometerUpdates = function () { return; };
    /**
     * Stops the delivery of recent pedestrian data updates to your Cordova app.
     * @return {Promise<boolean>} Returns a promise that resolves when pedometer watching was stopped
     */
    Pedometer.prototype.stopPedometerUpdates = function () { return; };
    /**
     * Retrieves the data between the specified start and end dates.
     * The startDate and endDate options are required and can be constructed in any valid JavaScript way
     * (e.g. new Date(2015, 4, 1, 15, 20, 00) is also valid, as is milliseconds).
     * Only works on iOS.
     * @param {any} options  start date and en date where you want to get pedometer data
     * @return {Promise<IPedometerData>} Returns a promise that resolves when pedometer data found
     */
    Pedometer.prototype.queryData = function (options) { return; };
    return Pedometer;
}(IonicNativePlugin));
Pedometer.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Pedometer.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Pedometer.prototype, "isStepCountingAvailable", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Pedometer.prototype, "isDistanceAvailable", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Pedometer.prototype, "isFloorCountingAvailable", null);
__decorate([
    Cordova({
        observable: true,
        clearFunction: 'stopPedometerUpdates'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], Pedometer.prototype, "startPedometerUpdates", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Pedometer.prototype, "stopPedometerUpdates", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Pedometer.prototype, "queryData", null);
Pedometer = __decorate([
    Plugin({
        pluginName: 'Pedometer',
        plugin: 'cordova-plugin-pedometer',
        pluginRef: 'pedometer',
        repo: 'https://github.com/leecrossley/cordova-plugin-pedometer',
        platforms: ['Android', 'iOS']
    })
], Pedometer);
export { Pedometer };
//# sourceMappingURL=index.js.map