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
import { Observable } from 'rxjs/Observable';
/**
 * @name Serial
 * @description
 * This plugin provides functions for working with Serial connections
 *
 * @usage
 * ```typescript
 * import { Serial } from '@ionic-native/serial';
 *
 * constructor(private serial: Serial) { }
 *
 * ...
 *
 * this.serial.requestPermission().then(() => {
 *   this.serial.open({
 *     baudRate: 9800
 *   }).then(() => {
 *     console.log('Serial connection opened');
 *   });
 * }).catch((error: any) => console.log(error));
 *
 * ```
 */
var Serial = (function (_super) {
    __extends(Serial, _super);
    function Serial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Request permission to connect to a serial device
     *
     * @param options {SerialPermissionOptions} Options used to request serial permissions for an unknown device
     * @return {Promise<any>} Returns a promise that resolves when permissions are granted
     */
    Serial.prototype.requestPermission = function (options) { return; };
    /**
     * Open connection to a serial device
     *
     * @param options {SerialOpenOptions} Options used to open serial connection
     * @return {Promise<any>} Returns a promise that resolves when the serial connection is opened
     */
    Serial.prototype.open = function (options) { return; };
    /**
     * Write to a serial connection
     *
     * @param data {any} data to write to the serial connection
     * @return {Promise<any>} Returns a promise that resolves when the write is complete
     */
    Serial.prototype.write = function (data) { return; };
    /**
     * Write hex to a serial connection
     *
     * @param data {any} data to write to the serial connection
     * @return {Promise<any>} Returns a promise that resolves when the write is complete
     */
    Serial.prototype.writeHex = function (data) { return; };
    /**
     * Read from a serial connection
     *
     * @return {Promise<any>} Returns a promise that resolves with data read from the serial connection
     */
    Serial.prototype.read = function () { return; };
    /**
     * Watch the incoming data from the serial connection. Clear the watch by unsubscribing from the observable
     *
     * @returns {Observable<any>} Observable returns an observable that you can subscribe to
     */
    Serial.prototype.registerReadCallback = function () { return; };
    /**
     * Close the serial connection
     *
     * @return {Promise<any>} Returns a promise that resolves when the serial connection is closed
     */
    Serial.prototype.close = function () { return; };
    return Serial;
}(IonicNativePlugin));
Serial.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Serial.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        successIndex: 1,
        errorIndex: 2
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Serial.prototype, "requestPermission", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Serial.prototype, "open", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Serial.prototype, "write", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Serial.prototype, "writeHex", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Serial.prototype, "read", null);
__decorate([
    Cordova({
        observable: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], Serial.prototype, "registerReadCallback", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Serial.prototype, "close", null);
Serial = __decorate([
    Plugin({
        pluginName: 'Serial',
        plugin: 'cordovarduino',
        pluginRef: 'serial',
        repo: 'https://github.com/xseignard/cordovarduino',
        platforms: ['Android', 'Ubuntu']
    })
], Serial);
export { Serial };
//# sourceMappingURL=index.js.map