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
 * @name DB Meter
 * @description This plugin defines a global DBMeter object, which permits to get the decibel values from the microphone.
 * @usage
 * ```typescript
 * import { DBMeter } from '@ionic-native/db-meter';
 *
 * constructor(private dbMeter: DBMeter) { }
 *
 * ...
 *
 *
 * // Start listening
 * let subscription = this.dbMeter.start().subscribe(
 *   data => console.log(data)
 * );
 *
 * // Check if we are listening
 * this.dbMeter.isListening().then(
 *   (isListening: boolean) => console.log(isListening)
 * );
 *
 * // Stop listening
 * subscription.unsubscribe();
 *
 * // Delete DBMeter instance from memory
 * this.dbMeter.delete().then(
 *   () => console.log('Deleted DB Meter instance'),
 *   error => console.log('Error occurred while deleting DB Meter instance')
 * );
 * ```
 */
var DBMeter = (function (_super) {
    __extends(DBMeter, _super);
    function DBMeter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Starts listening
     * @returns {Observable<any>} Returns an observable. Subscribe to start listening. Unsubscribe to stop listening.
     */
    DBMeter.prototype.start = function () { return; };
    /**
     * Stops listening
     * @hidden
     */
    DBMeter.prototype.stop = function () { return; };
    /**
     * Check if the DB Meter is listening
     * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that tells us whether the DB meter is listening
     */
    DBMeter.prototype.isListening = function () { return; };
    /**
     * Delete the DB Meter instance
     * @returns {Promise<any>} Returns a promise that will resolve if the instance has been deleted, and rejects if errors occur.
     */
    DBMeter.prototype.delete = function () { return; };
    return DBMeter;
}(IonicNativePlugin));
DBMeter.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DBMeter.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        observable: true,
        clearFunction: 'stop'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], DBMeter.prototype, "start", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DBMeter.prototype, "stop", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DBMeter.prototype, "isListening", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DBMeter.prototype, "delete", null);
DBMeter = __decorate([
    Plugin({
        pluginName: 'DBMeter',
        plugin: 'cordova-plugin-dbmeter',
        pluginRef: 'DBMeter',
        repo: 'https://github.com/akofman/cordova-plugin-dbmeter',
        platforms: ['Android', 'iOS']
    })
], DBMeter);
export { DBMeter };
//# sourceMappingURL=index.js.map