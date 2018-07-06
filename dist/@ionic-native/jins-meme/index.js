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
import { Plugin, Cordova, CordovaCheck, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
/**
 * @name Jins Meme
 * @description
 * Implementation of the JINS MEME SDK
 *
 * @usage
 * ```typescript
 * import { JinsMeme } from '@ionic-native/jins-meme';
 *
 * constructor(private jinsMeme: JinsMeme) { }
 *
 * ...
 *
 * this.jinsMeme.setAppClientID(appClientId: string, clientSecret: string).then(
 *   // Bluetooth should be enabled and the JINS MEME powered on (blinking blue light)
 *   this.jinsMeme.startScan().subscribe((meme_addr) => {
 *     this.jinsMeme.connect(meme_addr).subscribe((connectResult) => {
 *       this.memeService.startDataReport().subscribe((dataReport) => {
 *         console.log(dataReport);
 *       });
 *     });
 *   });
 * .catch(console.log('jinsMeme.setAppClientID authentication error'));
 *
 * ```
 */
var JinsMeme = (function (_super) {
    __extends(JinsMeme, _super);
    function JinsMeme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Authentication and authorization of App and SDK.
     * Must call this method first.
     * Sign up for an app ID (and get an app/client secret) at developers.jins.com
     *
     *@param {string} setAppClientID
     *@param {string} clientSecret
     *@returns {Promise<any>}
     */
    JinsMeme.prototype.setAppClientID = function (appClientId, clientSecret) { return; };
    /**
     * Starts scanning for JINS MEME.
     * @returns {Observable<any>}
     */
    JinsMeme.prototype.startScan = function () { return; };
    /**
     * Stops scanning JINS MEME.
     * @returns {Promise<any>}
     */
    JinsMeme.prototype.stopScan = function () { return; };
    /**
     * Establishes connection to JINS MEME.
     * @param {string} target
     * @returns {Observable<any>}
     */
    JinsMeme.prototype.connect = function (target) {
        return new Observable(function (observer) {
            var data = cordova.plugins.JinsMemePlugin.connect(target, observer.next.bind(observer), observer.complete.bind(observer), observer.error.bind(observer));
            return function () { return console.log(data); };
        });
    };
    /**
     * Set auto connection mode.
     *@param {Boolean} flag
     *@returns {Promise<any>}
     */
    JinsMeme.prototype.setAutoConnect = function (flag) { return; };
    /**
     * Returns whether a connection to JINS MEME has been established.
     *@returns {Promise<any>}
     */
    JinsMeme.prototype.isConnected = function () { return; };
    /**
     * Disconnects from JINS MEME.
     *@returns {Promise<any>}
     */
    JinsMeme.prototype.disconnect = function () { return; };
    /**
     * Starts receiving realtime data.
     * @returns {Observable<any>}
     */
    JinsMeme.prototype.startDataReport = function () { return; };
    /**
    * Stops receiving data.
    *@returns {Promise<any>}
    */
    JinsMeme.prototype.stopDataReport = function () { return; };
    /**
     * Returns SDK version.
     *
     *@returns {Promise<any>}
     */
    JinsMeme.prototype.getSDKVersion = function () { return; };
    /**
     * Returns JINS MEME connected with other apps.
     *@returns {Promise<any>}
     */
    JinsMeme.prototype.getConnectedByOthers = function () { return; };
    /**
     * Returns calibration status
     *@returns {Promise<any>}
     */
    JinsMeme.prototype.isCalibrated = function () { return; };
    /**
     * Returns device type.
     *@returns {Promise<any>}
     */
    JinsMeme.prototype.getConnectedDeviceType = function () { return; };
    /**
     * Returns hardware version.
     *@returns {Promise<any>}
     */
    JinsMeme.prototype.getConnectedDeviceSubType = function () { return; };
    /**
     * Returns FW Version.
     *@returns {Promise<any>}
     */
    JinsMeme.prototype.getFWVersion = function () { return; };
    /**
     * Returns HW Version.
     *@returns {Promise<any>}
     */
    JinsMeme.prototype.getHWVersion = function () { return; };
    /**
     * Returns response about whether data was received or not.
     *@returns {Promise<any>}
     */
    JinsMeme.prototype.isDataReceiving = function () { return; };
    return JinsMeme;
}(IonicNativePlugin));
JinsMeme.decorators = [
    { type: Injectable },
];
/** @nocollapse */
JinsMeme.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], JinsMeme.prototype, "setAppClientID", null);
__decorate([
    Cordova({
        observable: true,
        clearFunction: 'stopScan',
        clearWithArgs: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], JinsMeme.prototype, "startScan", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JinsMeme.prototype, "stopScan", null);
__decorate([
    CordovaCheck({
        observable: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Observable)
], JinsMeme.prototype, "connect", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], JinsMeme.prototype, "setAutoConnect", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JinsMeme.prototype, "isConnected", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JinsMeme.prototype, "disconnect", null);
__decorate([
    Cordova({
        observable: true,
        clearFunction: 'stopDataReport',
        clearWithArgs: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], JinsMeme.prototype, "startDataReport", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JinsMeme.prototype, "stopDataReport", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JinsMeme.prototype, "getSDKVersion", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JinsMeme.prototype, "getConnectedByOthers", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JinsMeme.prototype, "isCalibrated", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JinsMeme.prototype, "getConnectedDeviceType", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JinsMeme.prototype, "getConnectedDeviceSubType", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JinsMeme.prototype, "getFWVersion", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JinsMeme.prototype, "getHWVersion", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JinsMeme.prototype, "isDataReceiving", null);
JinsMeme = __decorate([
    Plugin({
        pluginName: 'Jins Meme',
        plugin: 'JinsMemeSDK-Plugin-Cordova',
        pluginRef: 'cordova.plugins.JinsMemePlugin',
        repo: 'https://github.com/jins-meme/JinsMemeSDK-Plugin-Cordova',
        platforms: ['Android', 'iOS']
    })
], JinsMeme);
export { JinsMeme };
//# sourceMappingURL=index.js.map