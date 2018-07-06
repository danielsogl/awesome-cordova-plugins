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
 * @name Device Motion
 * @description
 * Requires Cordova plugin: `cordova-plugin-device-motion`. For more info, please see the [Device Motion docs](https://github.com/apache/cordova-plugin-device-motion).
 *
 * @usage
 * ```typescript
 * import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';
 *
 * constructor(private deviceMotion: DeviceMotion) { }
 *
 * ...
 *
 * // Get the device current acceleration
 * this.deviceMotion.getCurrentAcceleration().then(
 *   (acceleration: DeviceMotionAccelerationData) => console.log(acceleration),
 *   (error: any) => console.log(error)
 * );
 *
 * // Watch device acceleration
 * var subscription = this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
 *   console.log(acceleration);
 * });
 *
 * // Stop watch
 * subscription.unsubscribe();
 *
 * ```
 * @interfaces
 * DeviceMotionAccelerationData
 * DeviceMotionAccelerometerOptions
 */
var DeviceMotion = (function (_super) {
    __extends(DeviceMotion, _super);
    function DeviceMotion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get the current acceleration along the x, y, and z axes.
     * @returns {Promise<DeviceMotionAccelerationData>} Returns object with x, y, z, and timestamp properties
     */
    DeviceMotion.prototype.getCurrentAcceleration = function () { return; };
    /**
     * Watch the device acceleration. Clear the watch by unsubscribing from the observable.
     * @param {AccelerometerOptions} options list of options for the accelerometer.
     * @returns {Observable<DeviceMotionAccelerationData>} Observable returns an observable that you can subscribe to
     */
    DeviceMotion.prototype.watchAcceleration = function (options) { return; };
    return DeviceMotion;
}(IonicNativePlugin));
DeviceMotion.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DeviceMotion.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DeviceMotion.prototype, "getCurrentAcceleration", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse',
        observable: true,
        clearFunction: 'clearWatch'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Observable)
], DeviceMotion.prototype, "watchAcceleration", null);
DeviceMotion = __decorate([
    Plugin({
        pluginName: 'DeviceMotion',
        plugin: 'cordova-plugin-device-motion',
        pluginRef: 'navigator.accelerometer',
        repo: 'https://github.com/apache/cordova-plugin-device-motion',
        platforms: ['Android', 'BlackBerry 10', 'Browser', 'Firefox OS', 'iOS', 'Tizen', 'Ubuntu', 'Windows', 'Windows Phone 8']
    })
], DeviceMotion);
export { DeviceMotion };
//# sourceMappingURL=index.js.map