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
 * @name Stepcounter
 * @description
 * Cordova plugin for using device's stepcounter on Android (API > 19)
 *
 * Use to
 * - start and stop stepcounter service
 * - read device's stepcounter data
 *
 * @usage
 * ```typescript
 * import { Stepcounter } from '@ionic-native/stepcounter';
 *
 * constructor(private stepcounter: Stepcounter) { }
 *
 * ...
 *
 * let startingOffset = 0;
 * this.stepcounter.start(startingOffset).then(onSuccess => console.log('stepcounter-start success', onSuccess), onFailure => console.log('stepcounter-start error', onFailure));
 *
 * this.stepcounter.getHistory().then(historyObj => console.log('stepcounter-history success', historyObj), onFailure => console.log('stepcounter-history error', onFailure));
 *
 * ```
 */
var Stepcounter = (function (_super) {
    __extends(Stepcounter, _super);
    function Stepcounter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Start the step counter
     *
     * @param startingOffset {number} will be added to the total steps counted in this session
     * @returns {Promise<any | number>} Returns a Promise that resolves on success or rejects on failure
     */
    Stepcounter.prototype.start = function (startingOffset) { return; };
    /**
     * Stop the step counter
     * @returns {Promise<any | number>} Returns a Promise that resolves on success with the amount of steps since the start command has been called, or rejects on failure
     */
    Stepcounter.prototype.stop = function () { return; };
    /**
     * Get the amount of steps for today (or -1 if it no data given)
     * @returns {Promise<any | number>} Returns a Promise that resolves on success with the amount of steps today, or rejects on failure
     */
    Stepcounter.prototype.getTodayStepCount = function () { return; };
    /**
     * Get the amount of steps since the start command has been called
     * @returns {Promise<any | number>} Returns a Promise that resolves on success with the amount of steps since the start command has been called, or rejects on failure
     */
    Stepcounter.prototype.getStepCount = function () { return; };
    /**
     * Returns true/false if Android device is running >API level 19 && has the step counter API available
     * @returns {Promise<any | boolean>} Returns a Promise that resolves on success, or rejects on failure
     */
    Stepcounter.prototype.deviceCanCountSteps = function () { return; };
    /**
     * Get the step history (JavaScript object)
     * @returns {Promise<any>} Returns a Promise that resolves on success, or rejects on failure
     */
    Stepcounter.prototype.getHistory = function () { return; };
    return Stepcounter;
}(IonicNativePlugin));
Stepcounter.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Stepcounter.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], Stepcounter.prototype, "start", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Stepcounter.prototype, "stop", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Stepcounter.prototype, "getTodayStepCount", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Stepcounter.prototype, "getStepCount", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Stepcounter.prototype, "deviceCanCountSteps", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Stepcounter.prototype, "getHistory", null);
Stepcounter = __decorate([
    Plugin({
        pluginName: 'Stepcounter',
        plugin: 'cordova-plugin-stepcounter',
        pluginRef: 'stepcounter',
        repo: 'https://github.com/ihadeed/cordova-plugin-stepcounter',
        platforms: ['Android']
    })
], Stepcounter);
export { Stepcounter };
//# sourceMappingURL=index.js.map