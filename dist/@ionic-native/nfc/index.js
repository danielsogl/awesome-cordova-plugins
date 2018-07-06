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
 * @name NFC
 * @description
 * The NFC plugin allows you to read and write NFC tags. You can also beam to, and receive from, other NFC enabled devices.
 *
 * Use to
 * - read data from NFC tags
 * - write data to NFC tags
 * - send data to other NFC enabled devices
 * - receive data from NFC devices
 *
 * This plugin uses NDEF (NFC Data Exchange Format) for maximum compatibilty between NFC devices, tag types, and operating systems.
 *
 * @usage
 * ```typescript
 * import { NFC, Ndef } from '@ionic-native/nfc';
 *
 * constructor(private nfc: NFC, private ndef: Ndef) { }
 *
 * ...
 *
 * let message = this.ndef.textRecord('Hello world');
 * this.nfc.share([message]).then(onSuccess).catch(onError);
 *
 * ```
 */
var NFC = (function (_super) {
    __extends(NFC, _super);
    /**
    *@{ NFC } class methods
    */
    function NFC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Registers an event listener for any NDEF tag.
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    NFC.prototype.addNdefListener = function (onSuccess, onFailure) { return; };
    /**
     * Registers an event listener for tags matching any tag type.
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    NFC.prototype.addTagDiscoveredListener = function (onSuccess, onFailure) { return; };
    /**
     * Registers an event listener for NDEF tags matching a specified MIME type.
     * @param mimeType
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    NFC.prototype.addMimeTypeListener = function (mimeType, onSuccess, onFailure) { return; };
    /**
     * Registers an event listener for formatable NDEF tags.
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    NFC.prototype.addNdefFormatableListener = function (onSuccess, onFailure) { return; };
    /**
     * Writes an NdefMessage(array of ndef records) to a NFC tag.
     * @param message {any[]}
     * @returns {Promise<any>}
     */
    NFC.prototype.write = function (message) { return; };
    /**
     * Makes a NFC tag read only. **Warning** this is permanent.
     * @returns {Promise<any>}
     */
    NFC.prototype.makeReadyOnly = function () { return; };
    /**
     * Shares an NDEF Message(array of ndef records) via peer-to-peer.
     * @param message An array of NDEF Records.
     * @returns {Promise<any>}
     */
    NFC.prototype.share = function (message) { return; };
    /**
     * Stop sharing NDEF data via peer-to-peer.
     * @returns {Promise<any>}
     */
    NFC.prototype.unshare = function () { return; };
    /**
     * Erase a NDEF tag
     */
    NFC.prototype.erase = function () { return; };
    /**
     * Send a file to another device via NFC handover.
     * @param uris A URI as a String, or an array of URIs.
     * @returns {Promise<any>}
     */
    NFC.prototype.handover = function (uris) { return; };
    /**
     * Stop sharing NDEF data via NFC handover.
     * @returns {Promise<any>}
     */
    NFC.prototype.stopHandover = function () { return; };
    /**
     * Opens the device's NFC settings.
     * @returns {Promise<any>}
     */
    NFC.prototype.showSettings = function () { return; };
    /**
     * Check if NFC is available and enabled on this device.
     * @returns {Promise<any>}
     */
    NFC.prototype.enabled = function () { return; };
    /**
    * @{ NFC } class utility methods
    * for use with
    */
    /**
     * Convert byte array to string
     * @param bytes {number[]}
     * @returns {string}
     */
    NFC.prototype.bytesToString = function (bytes) { return; };
    /**
     * Convert string to byte array.
     * @param str {string}
     * @returns {number[]}
     */
    NFC.prototype.stringToBytes = function (str) { return; };
    ;
    /**
     * Convert byte array to hex string
     *
     * @param bytes {number[]}
     * @returns {string}
     */
    NFC.prototype.bytesToHexString = function (bytes) { return; };
    ;
    return NFC;
}(IonicNativePlugin));
NFC.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NFC.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        observable: true,
        successIndex: 0,
        errorIndex: 3,
        clearFunction: 'removeNdefListener',
        clearWithArgs: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Function]),
    __metadata("design:returntype", Observable)
], NFC.prototype, "addNdefListener", null);
__decorate([
    Cordova({
        observable: true,
        successIndex: 0,
        errorIndex: 3,
        clearFunction: 'removeTagDiscoveredListener',
        clearWithArgs: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Function]),
    __metadata("design:returntype", Observable)
], NFC.prototype, "addTagDiscoveredListener", null);
__decorate([
    Cordova({
        observable: true,
        successIndex: 1,
        errorIndex: 4,
        clearFunction: 'removeMimeTypeListener',
        clearWithArgs: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Function, Function]),
    __metadata("design:returntype", Observable)
], NFC.prototype, "addMimeTypeListener", null);
__decorate([
    Cordova({
        observable: true,
        successIndex: 0,
        errorIndex: 3
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Function]),
    __metadata("design:returntype", Observable)
], NFC.prototype, "addNdefFormatableListener", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], NFC.prototype, "write", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NFC.prototype, "makeReadyOnly", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], NFC.prototype, "share", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NFC.prototype, "unshare", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NFC.prototype, "erase", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], NFC.prototype, "handover", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NFC.prototype, "stopHandover", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NFC.prototype, "showSettings", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NFC.prototype, "enabled", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", String)
], NFC.prototype, "bytesToString", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Array)
], NFC.prototype, "stringToBytes", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", String)
], NFC.prototype, "bytesToHexString", null);
NFC = __decorate([
    Plugin({
        pluginName: 'NFC',
        plugin: 'phonegap-nfc',
        pluginRef: 'nfc',
        repo: 'https://github.com/chariotsolutions/phonegap-nfc',
        platforms: ['Android', 'BlackBerry 10', 'Windows', 'Windows Phone 8']
    })
    /**
    *@{ NFC } class methods
    */
], NFC);
export { NFC };
/**
 * @hidden
 */
var Ndef = (function (_super) {
    __extends(Ndef, _super);
    /**
    *@{ Ndef } class methods
    *@description
    * Utility methods for creating ndef records for the ndef tag format.
    * Move records into array before usage. Then pass an array to methods as parameters.
    * Do not pass bytes as parameters for these methods, conversion is built in.
    * For usage with nfc.write() and nfc.share()
    */
    function Ndef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ndef.prototype.uriRecord = function (uri) { return; };
    Ndef.prototype.textRecord = function (text) { return; };
    Ndef.prototype.mimeMediaRecord = function (mimeType, payload) { return; };
    Ndef.prototype.androidApplicationRecord = function (packageName) { return; };
    return Ndef;
}(IonicNativePlugin));
Ndef.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Ndef.ctorParameters = function () { return []; };
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], Ndef.prototype, "uriRecord", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], Ndef.prototype, "textRecord", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Object)
], Ndef.prototype, "mimeMediaRecord", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], Ndef.prototype, "androidApplicationRecord", null);
Ndef = __decorate([
    Plugin({
        pluginName: 'NFC',
        plugin: 'phonegap-nfc',
        pluginRef: 'ndef'
    })
    /**
    *@{ Ndef } class methods
    *@description
    * Utility methods for creating ndef records for the ndef tag format.
    * Move records into array before usage. Then pass an array to methods as parameters.
    * Do not pass bytes as parameters for these methods, conversion is built in.
    * For usage with nfc.write() and nfc.share()
    */
], Ndef);
export { Ndef };
//# sourceMappingURL=index.js.map