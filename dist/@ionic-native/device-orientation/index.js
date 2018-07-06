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
 * @name Device Orientation
 * @description
 * Requires Cordova plugin: `cordova-plugin-device-orientation`. For more info, please see the [Device Orientation docs](https://github.com/apache/cordova-plugin-device-orientation).
 *
 * @usage
 * ```typescript
 * // DeviceOrientationCompassHeading is an interface for compass
 * import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation';
 *
 * constructor(private deviceOrientation: DeviceOrientation) { }
 *
 * ...
 *
 * // Get the device current compass heading
 * this.deviceOrientation.getCurrentHeading().then(
 *   (data: DeviceOrientationCompassHeading) => console.log(data),
 *   (error: any) => console.log(error)
 * );
 *
 * // Watch the device compass heading change
 * var subscription = this.deviceOrientation.watchHeading().subscribe(
 *   (data: DeviceOrientationCompassHeading) => console.log(data)
 * );
 *
 * // Stop watching heading change
 * subscription.unsubscribe();
 * ```
 * @interfaces
 * DeviceOrientationCompassOptions
 * DeviceOrientationCompassHeading
 */
var DeviceOrientation = (function (_super) {
    __extends(DeviceOrientation, _super);
    function DeviceOrientation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get the current compass heading.
     * @returns {Promise<DeviceOrientationCompassHeading>}
     */
    DeviceOrientation.prototype.getCurrentHeading = function () { return; };
    /**
     * Get the device current heading at a regular interval
     *
     * Stop the watch by unsubscribing from the observable
     * @param {DeviceOrientationCompassOptions} options Options for compass. Frequency and Filter. Optional
     * @returns {Observable<DeviceOrientationCompassHeading>} Returns an observable that contains the compass heading
     */
    DeviceOrientation.prototype.watchHeading = function (options) { return; };
    return DeviceOrientation;
}(IonicNativePlugin));
DeviceOrientation.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DeviceOrientation.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DeviceOrientation.prototype, "getCurrentHeading", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse',
        observable: true,
        clearFunction: 'clearWatch'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Observable)
], DeviceOrientation.prototype, "watchHeading", null);
DeviceOrientation = __decorate([
    Plugin({
        pluginName: 'DeviceOrientation',
        plugin: 'cordova-plugin-device-orientation',
        pluginRef: 'navigator.compass',
        repo: 'https://github.com/apache/cordova-plugin-device-orientation',
        platforms: ['Amazon Fire OS', 'Android', 'BlackBerry 10', 'Browser', 'Firefox OS', 'iOS', 'Tizen', 'Ubuntu', 'Windows', 'Windows Phone']
    })
], DeviceOrientation);
export { DeviceOrientation };
//# sourceMappingURL=index.js.map