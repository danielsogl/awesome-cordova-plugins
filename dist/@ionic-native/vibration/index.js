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
 * @name Vibration
 * @description Vibrates the device
 * @usage
 * ```typescript
 * import { Vibration } from '@ionic-native/vibration';
 *
 * constructor(private vibration: Vibration) { }
 *
 * ...
 *
 * // Vibrate the device for a second
 * // Duration is ignored on iOS.
 * this.vibration.vibrate(1000);
 *
 * // Vibrate 2 seconds
 * // Pause for 1 second
 * // Vibrate for 2 seconds
 * // Patterns work on Android and Windows only
 * this.vibration.vibrate([2000,1000,2000]);
 *
 * // Stop any current vibrations immediately
 * // Works on Android and Windows only
 * this.vibration.vibrate(0);
 * ```
 */
var Vibration = (function (_super) {
    __extends(Vibration, _super);
    function Vibration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Vibrates the device for given amount of time.
     * @param time {number|Array<number>} Milliseconds to vibrate the device. If passed an array of numbers, it will define a vibration pattern. Pass 0 to stop any vibration immediately.
     */
    Vibration.prototype.vibrate = function (time) { };
    return Vibration;
}(IonicNativePlugin));
Vibration.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Vibration.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Vibration.prototype, "vibrate", null);
Vibration = __decorate([
    Plugin({
        pluginName: 'Vibration',
        plugin: 'cordova-plugin-vibration',
        pluginRef: 'navigator',
        repo: 'https://github.com/apache/cordova-plugin-vibration',
        platforms: ['Android', 'BlackBerry 10', 'Firefox OS', 'iOS', 'Tizen', 'Ubuntu', 'Windows', 'Windows Phone']
    })
], Vibration);
export { Vibration };
//# sourceMappingURL=index.js.map