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
 * @name Gyroscope
 * @description Read Gyroscope sensor data
 * @usage
 * ```typescript
 * import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';
 *
 *
 * constructor(private gyroscope: Gyroscope) { }
 *
 * ...
 *
 *
 * let options: GyroscopeOptions = {
 *    frequency: 1000
 * };
 *
 * this.gyroscope.getCurrent(options)
 *   .then((orientation: GyroscopeOrientation) => {
 *      console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
 *    })
 *   .catch()
 *
 *
 * this.gyroscope.watch()
 *    .subscribe((orientation: GyroscopeOrientation) => {
 *       console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
 *    });
 *
 * ```
 * @interfaces
 * GyroscopeOrientation
 * GyroscopeOptions
 */
var Gyroscope = (function (_super) {
    __extends(Gyroscope, _super);
    function Gyroscope() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Watching for gyroscope sensor changes
     * @param {GyroscopeOptions} [options]
     * @return {Observable<GyroscopeOrientation>} Returns an Observable that resolves GyroscopeOrientation
     */
    Gyroscope.prototype.watch = function (options) {
        return new Observable(function (observer) {
            var watchId = navigator.gyroscope.watch(observer.next.bind(observer), observer.next.bind(observer), options);
            return function () { return navigator.gyroscope.clearWatch(watchId); };
        });
    };
    /**
     * Get current data from gyroscope sensor
     * @param {GyroscopeOptions} [options]
     * @return {Promise<GyroscopeOrientation>} Returns a promise that resolves GyroscopeOrientation
     */
    Gyroscope.prototype.getCurrent = function (options) { return; };
    return Gyroscope;
}(IonicNativePlugin));
Gyroscope.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Gyroscope.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Gyroscope.prototype, "getCurrent", null);
Gyroscope = __decorate([
    Plugin({
        pluginName: 'Gyroscope',
        plugin: 'cordova-plugin-gyroscope',
        pluginRef: 'navigator.gyroscope',
        repo: 'https://github.com/NeoLSN/cordova-plugin-gyroscope',
        platforms: ['Android', 'iOS']
    })
], Gyroscope);
export { Gyroscope };
//# sourceMappingURL=index.js.map