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
import { Injectable } from '@angular/core';
/**
 * @name Health Kit
 * @description
 * The HealthKit plugin allows you to read data from and write data to the iOS 8+ HealthKit framework.
 * Any data saved shows up in the iOS Health app and is available for other iOS apps.
 *
 * @usage
 * ```typescript
 * import { HealthKit } from '@ionic-native/health-kit';
 *
 *
 * constructor(private healthKit: HealthKit) { }
 *
 * ...
 * ```
 *
 * @interfaces
 * HealthKitOptions
 */
var HealthKit = (function (_super) {
    __extends(HealthKit, _super);
    function HealthKit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
   * Check if HealthKit is supported (iOS8+, not on iPad)
   * @returns {Promise<any>}
   */
    HealthKit.prototype.available = function () { return; };
    /**
   * Pass in a type and get back on of undetermined | denied | authorized
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    HealthKit.prototype.checkAuthStatus = function (options) { return; };
    /**
   * Ask some or all permissions up front
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    HealthKit.prototype.requestAuthorization = function (options) { return; };
    /**
   * Formatted as yyyy-MM-dd
   * @returns {Promise<any>}
   */
    HealthKit.prototype.readDateOfBirth = function () { return; };
    /**
   * Output = male|female|other|unknown
   * @returns {Promise<any>}
   */
    HealthKit.prototype.readGender = function () { return; };
    /**
   * Output = A+|A-|B+|B-|AB+|AB-|O+|O-|unknown
   * @returns {Promise<any>}
   */
    HealthKit.prototype.readBloodType = function () { return; };
    /**
   * Output = I|II|III|IV|V|VI|unknown
   * @returns {Promise<any>}
   */
    HealthKit.prototype.readFitzpatrickSkinType = function () { return; };
    /**
   * Pass in unit (g=gram, kg=kilogram, oz=ounce, lb=pound, st=stone) and amount
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    HealthKit.prototype.saveWeight = function (options) { return; };
    /**
   * Pass in unit (g=gram, kg=kilogram, oz=ounce, lb=pound, st=stone)
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    HealthKit.prototype.readWeight = function (options) { return; };
    /**
   * Pass in unit (mm=millimeter, cm=centimeter, m=meter, in=inch, ft=foot) and amount
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    HealthKit.prototype.saveHeight = function (options) { return; };
    /**
   * Pass in unit (mm=millimeter, cm=centimeter, m=meter, in=inch, ft=foot)
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    HealthKit.prototype.readHeight = function (options) { return; };
    /**
   * no params yet, so this will return all workouts ever of any type
   * @returns {Promise<any>}
   */
    HealthKit.prototype.findWorkouts = function () { return; };
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    HealthKit.prototype.saveWorkout = function (options) { return; };
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    HealthKit.prototype.querySampleType = function (options) { return; };
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    HealthKit.prototype.querySampleTypeAggregated = function (options) { return; };
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    HealthKit.prototype.deleteSamples = function (options) { return; };
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    HealthKit.prototype.monitorSampleType = function (options) { return; };
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    HealthKit.prototype.sumQuantityType = function (options) { return; };
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    HealthKit.prototype.saveQuantitySample = function (options) { return; };
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    HealthKit.prototype.saveCorrelation = function (options) { return; };
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    HealthKit.prototype.queryCorrelationType = function (options) { return; };
    return HealthKit;
}(IonicNativePlugin));
HealthKit.decorators = [
    { type: Injectable },
];
/** @nocollapse */
HealthKit.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealthKit.prototype, "available", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HealthKit.prototype, "checkAuthStatus", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HealthKit.prototype, "requestAuthorization", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealthKit.prototype, "readDateOfBirth", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealthKit.prototype, "readGender", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealthKit.prototype, "readBloodType", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealthKit.prototype, "readFitzpatrickSkinType", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HealthKit.prototype, "saveWeight", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HealthKit.prototype, "readWeight", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HealthKit.prototype, "saveHeight", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HealthKit.prototype, "readHeight", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealthKit.prototype, "findWorkouts", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HealthKit.prototype, "saveWorkout", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HealthKit.prototype, "querySampleType", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HealthKit.prototype, "querySampleTypeAggregated", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HealthKit.prototype, "deleteSamples", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HealthKit.prototype, "monitorSampleType", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HealthKit.prototype, "sumQuantityType", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HealthKit.prototype, "saveQuantitySample", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HealthKit.prototype, "saveCorrelation", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HealthKit.prototype, "queryCorrelationType", null);
HealthKit = __decorate([
    Plugin({
        pluginName: 'HealthKit',
        plugin: 'com.telerik.plugins.healthkit',
        pluginRef: 'window.plugins.healthkit',
        repo: 'https://github.com/Telerik-Verified-Plugins/HealthKit',
        platforms: ['iOS']
    })
], HealthKit);
export { HealthKit };
//# sourceMappingURL=index.js.map