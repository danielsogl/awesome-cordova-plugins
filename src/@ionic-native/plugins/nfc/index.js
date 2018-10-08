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
import { Cordova, CordovaProperty, IonicNativePlugin, Plugin } from '@ionic-native/core';
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
 * this.nfc.addNdefListener(() => {
 *   console.log('successfully attached ndef listener');
 * }, (err) => {
 *   console.log('error attaching ndef listener', err);
 * }).subscribe((event) => {
 *   console.log('received ndef message. the tag contains: ', event.tag);
 *   console.log('decoded tag id', this.nfc.bytesToHexString(event.tag.id));
 *
 *   let message = this.ndef.textRecord('Hello world');
 *   this.nfc.share([message]).then(onSuccess).catch(onError);
 * });
 *
 * ```
 */
var NFC = (function (_super) {
    __extends(NFC, _super);
    function NFC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Starts the NFCNDEFReaderSession allowing iOS to scan NFC tags.
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    /**
       * Starts the NFCNDEFReaderSession allowing iOS to scan NFC tags.
       * @param onSuccess
       * @param onFailure
       * @returns {Observable<any>}
       */
    NFC.prototype.beginSession = /**
       * Starts the NFCNDEFReaderSession allowing iOS to scan NFC tags.
       * @param onSuccess
       * @param onFailure
       * @returns {Observable<any>}
       */
    function (onSuccess, onFailure) {
        return;
    };
    /**
     * Registers an event listener for any NDEF tag.
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    /**
       * Registers an event listener for any NDEF tag.
       * @param onSuccess
       * @param onFailure
       * @returns {Observable<any>}
       */
    NFC.prototype.addNdefListener = /**
       * Registers an event listener for any NDEF tag.
       * @param onSuccess
       * @param onFailure
       * @returns {Observable<any>}
       */
    function (onSuccess, onFailure) {
        return;
    };
    /**
     * Registers an event listener for tags matching any tag type.
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    /**
       * Registers an event listener for tags matching any tag type.
       * @param onSuccess
       * @param onFailure
       * @returns {Observable<any>}
       */
    NFC.prototype.addTagDiscoveredListener = /**
       * Registers an event listener for tags matching any tag type.
       * @param onSuccess
       * @param onFailure
       * @returns {Observable<any>}
       */
    function (onSuccess, onFailure) {
        return;
    };
    /**
     * Registers an event listener for NDEF tags matching a specified MIME type.
     * @param mimeType
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    /**
       * Registers an event listener for NDEF tags matching a specified MIME type.
       * @param mimeType
       * @param onSuccess
       * @param onFailure
       * @returns {Observable<any>}
       */
    NFC.prototype.addMimeTypeListener = /**
       * Registers an event listener for NDEF tags matching a specified MIME type.
       * @param mimeType
       * @param onSuccess
       * @param onFailure
       * @returns {Observable<any>}
       */
    function (mimeType, onSuccess, onFailure) {
        return;
    };
    /**
     * Registers an event listener for formatable NDEF tags.
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    /**
       * Registers an event listener for formatable NDEF tags.
       * @param onSuccess
       * @param onFailure
       * @returns {Observable<any>}
       */
    NFC.prototype.addNdefFormatableListener = /**
       * Registers an event listener for formatable NDEF tags.
       * @param onSuccess
       * @param onFailure
       * @returns {Observable<any>}
       */
    function (onSuccess, onFailure) {
        return;
    };
    /**
     * Writes an NdefMessage(array of ndef records) to a NFC tag.
     * @param message {any[]}
     * @returns {Promise<any>}
     */
    /**
       * Writes an NdefMessage(array of ndef records) to a NFC tag.
       * @param message {any[]}
       * @returns {Promise<any>}
       */
    NFC.prototype.write = /**
       * Writes an NdefMessage(array of ndef records) to a NFC tag.
       * @param message {any[]}
       * @returns {Promise<any>}
       */
    function (message) {
        return;
    };
    /**
     * Makes a NFC tag read only. **Warning** this is permanent.
     * @returns {Promise<any>}
     */
    /**
       * Makes a NFC tag read only. **Warning** this is permanent.
       * @returns {Promise<any>}
       */
    NFC.prototype.makeReadyOnly = /**
       * Makes a NFC tag read only. **Warning** this is permanent.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Shares an NDEF Message(array of ndef records) via peer-to-peer.
     * @param message An array of NDEF Records.
     * @returns {Promise<any>}
     */
    /**
       * Shares an NDEF Message(array of ndef records) via peer-to-peer.
       * @param message An array of NDEF Records.
       * @returns {Promise<any>}
       */
    NFC.prototype.share = /**
       * Shares an NDEF Message(array of ndef records) via peer-to-peer.
       * @param message An array of NDEF Records.
       * @returns {Promise<any>}
       */
    function (message) {
        return;
    };
    /**
     * Stop sharing NDEF data via peer-to-peer.
     * @returns {Promise<any>}
     */
    /**
       * Stop sharing NDEF data via peer-to-peer.
       * @returns {Promise<any>}
       */
    NFC.prototype.unshare = /**
       * Stop sharing NDEF data via peer-to-peer.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Erase a NDEF tag
     */
    /**
       * Erase a NDEF tag
       */
    NFC.prototype.erase = /**
       * Erase a NDEF tag
       */
    function () {
        return;
    };
    /**
     * Send a file to another device via NFC handover.
     * @param uris A URI as a String, or an array of URIs.
     * @returns {Promise<any>}
     */
    /**
       * Send a file to another device via NFC handover.
       * @param uris A URI as a String, or an array of URIs.
       * @returns {Promise<any>}
       */
    NFC.prototype.handover = /**
       * Send a file to another device via NFC handover.
       * @param uris A URI as a String, or an array of URIs.
       * @returns {Promise<any>}
       */
    function (uris) {
        return;
    };
    /**
     * Stop sharing NDEF data via NFC handover.
     * @returns {Promise<any>}
     */
    /**
       * Stop sharing NDEF data via NFC handover.
       * @returns {Promise<any>}
       */
    NFC.prototype.stopHandover = /**
       * Stop sharing NDEF data via NFC handover.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Opens the device's NFC settings.
     * @returns {Promise<any>}
     */
    /**
       * Opens the device's NFC settings.
       * @returns {Promise<any>}
       */
    NFC.prototype.showSettings = /**
       * Opens the device's NFC settings.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Check if NFC is available and enabled on this device.
     * @returns {Promise<any>}
     */
    /**
       * Check if NFC is available and enabled on this device.
       * @returns {Promise<any>}
       */
    NFC.prototype.enabled = /**
       * Check if NFC is available and enabled on this device.
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * @{ NFC } class utility methods
     * for use with
     */
    /**
     * Convert byte array to string
     * @param bytes {number[]}
     * @returns {string}
     */
    /**
       * @{ NFC } class utility methods
       * for use with
       */
    /**
       * Convert byte array to string
       * @param bytes {number[]}
       * @returns {string}
       */
    NFC.prototype.bytesToString = /**
       * @{ NFC } class utility methods
       * for use with
       */
    /**
       * Convert byte array to string
       * @param bytes {number[]}
       * @returns {string}
       */
    function (bytes) {
        return;
    };
    /**
     * Convert string to byte array.
     * @param str {string}
     * @returns {number[]}
     */
    /**
       * Convert string to byte array.
       * @param str {string}
       * @returns {number[]}
       */
    NFC.prototype.stringToBytes = /**
       * Convert string to byte array.
       * @param str {string}
       * @returns {number[]}
       */
    function (str) {
        return;
    };
    /**
     * Convert byte array to hex string
     *
     * @param bytes {number[]}
     * @returns {string}
     */
    /**
       * Convert byte array to hex string
       *
       * @param bytes {number[]}
       * @returns {string}
       */
    NFC.prototype.bytesToHexString = /**
       * Convert byte array to hex string
       *
       * @param bytes {number[]}
       * @returns {string}
       */
    function (bytes) {
        return;
    };
    NFC.decorators = [
        { type: Injectable },
    ];
    __decorate([
        Cordova({
            observable: true,
            successIndex: 0,
            errorIndex: 3,
            clearFunction: 'invalidateSession',
            clearWithArgs: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Function]),
        __metadata("design:returntype", Observable)
    ], NFC.prototype, "beginSession", null);
    __decorate([
        Cordova({
            observable: true,
            successIndex: 0,
            errorIndex: 3,
            clearFunction: 'removeNdefListener',
            clearWithArgs: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function,
            Function]),
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
        __metadata("design:paramtypes", [Function,
            Function]),
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
        __metadata("design:paramtypes", [String, Function,
            Function]),
        __metadata("design:returntype", Observable)
    ], NFC.prototype, "addMimeTypeListener", null);
    __decorate([
        Cordova({
            observable: true,
            successIndex: 0,
            errorIndex: 3
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function,
            Function]),
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
     * this.nfc.addNdefListener(() => {
     *   console.log('successfully attached ndef listener');
     * }, (err) => {
     *   console.log('error attaching ndef listener', err);
     * }).subscribe((event) => {
     *   console.log('received ndef message. the tag contains: ', event.tag);
     *   console.log('decoded tag id', this.nfc.bytesToHexString(event.tag.id));
     *
     *   let message = this.ndef.textRecord('Hello world');
     *   this.nfc.share([message]).then(onSuccess).catch(onError);
     * });
     *
     * ```
     */
    NFC = __decorate([
        Plugin({
            pluginName: 'NFC',
            plugin: 'phonegap-nfc',
            pluginRef: 'nfc',
            repo: 'https://github.com/chariotsolutions/phonegap-nfc',
            platforms: ['Android', 'BlackBerry 10', 'Windows', 'Windows Phone 8']
        })
        /**
         * @{ NFC } class methods
         */
    ], NFC);
    return NFC;
}(IonicNativePlugin));
export { NFC };
/**
 * @hidden
 */
var Ndef = (function (_super) {
    __extends(Ndef, _super);
    function Ndef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ndef.prototype.record = function (tnf, type, id, payload) {
        return;
    };
    Ndef.prototype.textRecord = function (text, languageCode, id) {
        return;
    };
    Ndef.prototype.uriRecord = function (uri, id) {
        return;
    };
    Ndef.prototype.absoluteUriRecord = function (uri, payload, id) {
        return;
    };
    Ndef.prototype.mimeMediaRecord = function (mimeType, payload) {
        return;
    };
    Ndef.prototype.smartPoster = function (ndefRecords, id) {
        return;
    };
    Ndef.prototype.emptyRecord = function () {
        return;
    };
    Ndef.prototype.androidApplicationRecord = function (packageName) {
        return;
    };
    Ndef.prototype.encodeMessage = function (ndefRecords) {
        return;
    };
    Ndef.prototype.decodeMessage = function (bytes) {
        return;
    };
    Ndef.prototype.docodeTnf = function (tnf_byte) {
        return;
    };
    Ndef.prototype.encodeTnf = function (mb, me, cf, sr, il, tnf) {
        return;
    };
    Ndef.prototype.tnfToString = function (tnf) {
        return;
    };
    Ndef.decorators = [
        { type: Injectable },
    ];
    __decorate([
        CordovaProperty,
        __metadata("design:type", Number)
    ], Ndef.prototype, "TNF_EMPTY", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", Number)
    ], Ndef.prototype, "TNF_WELL_KNOWN", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", Number)
    ], Ndef.prototype, "TNF_MIME_MEDIA", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", Number)
    ], Ndef.prototype, "TNF_ABSOLUTE_URI", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", Number)
    ], Ndef.prototype, "TNF_EXTERNAL_TYPE", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", Number)
    ], Ndef.prototype, "TNF_UNKNOWN", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", Number)
    ], Ndef.prototype, "TNF_UNCHANGED", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", Number)
    ], Ndef.prototype, "TNF_RESERVED", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", Array)
    ], Ndef.prototype, "RTD_TEXT", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", Array)
    ], Ndef.prototype, "RTD_URI", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", Array)
    ], Ndef.prototype, "RTD_SMART_POSTER", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", Array)
    ], Ndef.prototype, "RTD_ALTERNATIVE_CARRIER", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", Array)
    ], Ndef.prototype, "RTD_HANDOVER_CARRIER", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", Array)
    ], Ndef.prototype, "RTD_HANDOVER_REQUEST", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", Array)
    ], Ndef.prototype, "RTD_HANDOVER_SELECT", void 0);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Object, Object, Object]),
        __metadata("design:returntype", Object)
    ], Ndef.prototype, "record", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object]),
        __metadata("design:returntype", Object)
    ], Ndef.prototype, "textRecord", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Object)
    ], Ndef.prototype, "uriRecord", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, Object]),
        __metadata("design:returntype", Object)
    ], Ndef.prototype, "absoluteUriRecord", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Object)
    ], Ndef.prototype, "mimeMediaRecord", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array, Object]),
        __metadata("design:returntype", Object)
    ], Ndef.prototype, "smartPoster", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], Ndef.prototype, "emptyRecord", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Object)
    ], Ndef.prototype, "androidApplicationRecord", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], Ndef.prototype, "encodeMessage", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], Ndef.prototype, "decodeMessage", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], Ndef.prototype, "docodeTnf", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object]),
        __metadata("design:returntype", Object)
    ], Ndef.prototype, "encodeTnf", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", String)
    ], Ndef.prototype, "tnfToString", null);
    __decorate([
        CordovaProperty,
        __metadata("design:type", TextHelper)
    ], Ndef.prototype, "textHelper", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", UriHelper)
    ], Ndef.prototype, "uriHelper", void 0);
    /**
     * @hidden
     */
    Ndef = __decorate([
        Plugin({
            pluginName: 'NFC',
            plugin: 'phonegap-nfc',
            pluginRef: 'ndef'
        })
        /**
         * @description
         * Utility methods for creating ndef records for the ndef tag format.
         * Move records into array before usage. Then pass an array to methods as parameters.
         * Do not pass bytes as parameters for these methods, conversion is built in.
         * For usage with nfc.write() and nfc.share()
         */
    ], Ndef);
    return Ndef;
}(IonicNativePlugin));
export { Ndef };
/**
 * @hidden
 */
var NfcUtil = (function (_super) {
    __extends(NfcUtil, _super);
    function NfcUtil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NfcUtil.prototype.toHex = function (i) {
        return;
    };
    NfcUtil.prototype.toPrintable = function (i) {
        return;
    };
    NfcUtil.prototype.bytesToString = function (i) {
        return;
    };
    NfcUtil.prototype.stringToBytes = function (s) {
        return;
    };
    NfcUtil.prototype.bytesToHexString = function (bytes) {
        return;
    };
    NfcUtil.prototype.isType = function (record, tnf, type) {
        return;
    };
    NfcUtil.decorators = [
        { type: Injectable },
    ];
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", String)
    ], NfcUtil.prototype, "toHex", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", String)
    ], NfcUtil.prototype, "toPrintable", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", String)
    ], NfcUtil.prototype, "bytesToString", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Array)
    ], NfcUtil.prototype, "stringToBytes", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", String)
    ], NfcUtil.prototype, "bytesToHexString", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Number, Object]),
        __metadata("design:returntype", Boolean)
    ], NfcUtil.prototype, "isType", null);
    /**
     * @hidden
     */
    NfcUtil = __decorate([
        Plugin({
            pluginName: 'NFC',
            plugin: 'phonegap-nfc',
            pluginRef: 'util'
        })
    ], NfcUtil);
    return NfcUtil;
}(IonicNativePlugin));
export { NfcUtil };
var TextHelper = (function (_super) {
    __extends(TextHelper, _super);
    function TextHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextHelper.prototype.decodePayload = function (data) {
        return;
    };
    TextHelper.prototype.encodePayload = function (text, lang) {
        return;
    };
    return TextHelper;
}(IonicNativePlugin));
export { TextHelper };
var UriHelper = (function (_super) {
    __extends(UriHelper, _super);
    function UriHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UriHelper.prototype.decodePayload = function (data) {
        return;
    };
    UriHelper.prototype.encodePayload = function (uri) {
        return;
    };
    return UriHelper;
}(IonicNativePlugin));
export { UriHelper };
//# sourceMappingURL=index.js.map