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
 * @name Bluetooth Serial
 * @description This plugin enables serial communication over Bluetooth. It was written for communicating between Android or iOS and an Arduino.
 * @usage
 * ```typescript
 * import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
 *
 * constructor(private bluetoothSerial: BluetoothSerial) { }
 *
 *
 * // Write a string
 * this.bluetoothSerial.write('hello world').then(success, failure);
 *
 * // Array of int or bytes
 * this.bluetoothSerial.write([186, 220, 222]).then(success, failure);
 *
 * // Typed Array
 * var data = new Uint8Array(4);
 * data[0] = 0x41;
 * data[1] = 0x42;
 * data[2] = 0x43;
 * data[3] = 0x44;
 * this.bluetoothSerial.write(data).then(success, failure);
 *
 * // Array Buffer
 * this.bluetoothSerial.write(data.buffer).then(success, failure);
 * ```
 */
var BluetoothSerial = (function (_super) {
    __extends(BluetoothSerial, _super);
    function BluetoothSerial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Connect to a Bluetooth device
     * @param {string} macAddress_or_uuid Identifier of the remote device
     * @returns {Observable<any>} Subscribe to connect, unsubscribe to disconnect.
     */
    BluetoothSerial.prototype.connect = function (macAddress_or_uuid) { return; };
    /**
     * Connect insecurely to a Bluetooth device
     * @param {string} macAddress Identifier of the remote device
     * @returns {Observable<any>} Subscribe to connect, unsubscribe to disconnect.
     */
    BluetoothSerial.prototype.connectInsecure = function (macAddress) { return; };
    /**
     * Disconnect from the connected device
     * @returns {Promise<any>}
     */
    BluetoothSerial.prototype.disconnect = function () { return; };
    /**
     * Writes data to the serial port
     * @param {any} data ArrayBuffer of data
     * @returns {Promise<any>} returns a promise when data has been written
     */
    BluetoothSerial.prototype.write = function (data) { return; };
    /**
     * Gets the number of bytes of data available
     * @returns {Promise<any>} returns a promise that contains the available bytes
     */
    BluetoothSerial.prototype.available = function () { return; };
    /**
     * Reads data from the buffer
     * @returns {Promise<any>} returns a promise with data from the buffer
     */
    BluetoothSerial.prototype.read = function () { return; };
    /**
     * Reads data from the buffer until it reaches a delimiter
     * @param {string} delimiter string that you want to search until
     * @returns {Promise<any>} returns a promise
     */
    BluetoothSerial.prototype.readUntil = function (delimiter) { return; };
    /**
     * Subscribe to be notified when data is received
     * @param {string} delimiter the string you want to watch for
     * @returns {Observable<any>} returns an observable.
     */
    BluetoothSerial.prototype.subscribe = function (delimiter) { return; };
    /**
     * Subscribe to be notified when data is received
     * @returns {Observable<any>} returns an observable
     */
    BluetoothSerial.prototype.subscribeRawData = function () { return; };
    /**
     * Clears data in buffer
     * @returns {Promise<any>} returns a promise when completed
     */
    BluetoothSerial.prototype.clear = function () { return; };
    /**
     * Lists bonded devices
     * @returns {Promise<any>} returns a promise
     */
    BluetoothSerial.prototype.list = function () { return; };
    /**
     * Reports if bluetooth is enabled
     * @returns {Promise<any>} returns a promise
     */
    BluetoothSerial.prototype.isEnabled = function () { return; };
    /**
     * Reports the connection status
     * @returns {Promise<any>} returns a promise
     */
    BluetoothSerial.prototype.isConnected = function () { return; };
    /**
     * Reads the RSSI from the connected peripheral
     * @returns {Promise<any>} returns a promise
     */
    BluetoothSerial.prototype.readRSSI = function () { return; };
    /**
     * Show the Bluetooth settings on the device
     * @returns {Promise<any>} returns a promise
     */
    BluetoothSerial.prototype.showBluetoothSettings = function () { return; };
    /**
     * Enable Bluetooth on the device
     * @returns {Promise<any>} returns a promise
     */
    BluetoothSerial.prototype.enable = function () { return; };
    /**
     * Discover unpaired devices
     * @returns {Promise<any>} returns a promise
     */
    BluetoothSerial.prototype.discoverUnpaired = function () { return; };
    /**
     * Subscribe to be notified on Bluetooth device discovery. Discovery process must be initiated with the `discoverUnpaired` function.
     * @returns {Observable<any>} Returns an observable
     */
    BluetoothSerial.prototype.setDeviceDiscoveredListener = function () { return; };
    /**
     * Sets the human readable device name that is broadcasted to other devices
     * @param {string} newName Desired name of device
     */
    BluetoothSerial.prototype.setName = function (newName) { };
    /**
     * Makes the device discoverable by other devices
     * @param {number} discoverableDuration Desired number of seconds device should be discoverable for
     */
    BluetoothSerial.prototype.setDiscoverable = function (discoverableDuration) { };
    return BluetoothSerial;
}(IonicNativePlugin));
BluetoothSerial.decorators = [
    { type: Injectable },
];
/** @nocollapse */
BluetoothSerial.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        platforms: ['Android', 'iOS', 'Windows Phone'],
        observable: true,
        clearFunction: 'disconnect'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Observable)
], BluetoothSerial.prototype, "connect", null);
__decorate([
    Cordova({
        platforms: ['Android'],
        observable: true,
        clearFunction: 'disconnect'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Observable)
], BluetoothSerial.prototype, "connectInsecure", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BluetoothSerial.prototype, "disconnect", null);
__decorate([
    Cordova({
        platforms: ['Android', 'iOS', 'Windows Phone']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BluetoothSerial.prototype, "write", null);
__decorate([
    Cordova({
        platforms: ['Android', 'iOS', 'Windows Phone']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BluetoothSerial.prototype, "available", null);
__decorate([
    Cordova({
        platforms: ['Android', 'iOS', 'Windows Phone']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BluetoothSerial.prototype, "read", null);
__decorate([
    Cordova({
        platforms: ['Android', 'iOS', 'Windows Phone']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BluetoothSerial.prototype, "readUntil", null);
__decorate([
    Cordova({
        platforms: ['Android', 'iOS', 'Windows Phone'],
        observable: true,
        clearFunction: 'unsubscribe'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Observable)
], BluetoothSerial.prototype, "subscribe", null);
__decorate([
    Cordova({
        platforms: ['Android', 'iOS', 'Windows Phone'],
        observable: true,
        clearFunction: 'unsubscribeRawData'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], BluetoothSerial.prototype, "subscribeRawData", null);
__decorate([
    Cordova({
        platforms: ['Android', 'iOS', 'Windows Phone']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BluetoothSerial.prototype, "clear", null);
__decorate([
    Cordova({
        platforms: ['Android', 'iOS', 'Windows Phone']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BluetoothSerial.prototype, "list", null);
__decorate([
    Cordova({
        platforms: ['Android', 'iOS', 'Windows Phone']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BluetoothSerial.prototype, "isEnabled", null);
__decorate([
    Cordova({
        platforms: ['Android', 'iOS', 'Windows Phone']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BluetoothSerial.prototype, "isConnected", null);
__decorate([
    Cordova({
        platforms: ['Android', 'iOS', 'Windows Phone']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BluetoothSerial.prototype, "readRSSI", null);
__decorate([
    Cordova({
        platforms: ['Android', 'iOS', 'Windows Phone']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BluetoothSerial.prototype, "showBluetoothSettings", null);
__decorate([
    Cordova({
        platforms: ['Android', 'iOS', 'Windows Phone']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BluetoothSerial.prototype, "enable", null);
__decorate([
    Cordova({
        platforms: ['Android', 'iOS', 'Windows Phone']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BluetoothSerial.prototype, "discoverUnpaired", null);
__decorate([
    Cordova({
        platforms: ['Android', 'iOS', 'Windows Phone'],
        observable: true,
        clearFunction: 'clearDeviceDiscoveredListener'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], BluetoothSerial.prototype, "setDeviceDiscoveredListener", null);
__decorate([
    Cordova({
        platforms: ['Android'],
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BluetoothSerial.prototype, "setName", null);
__decorate([
    Cordova({
        platforms: ['Android'],
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BluetoothSerial.prototype, "setDiscoverable", null);
BluetoothSerial = __decorate([
    Plugin({
        pluginName: 'BluetoothSerial',
        repo: 'https://github.com/don/BluetoothSerial',
        plugin: 'cordova-plugin-bluetooth-serial',
        pluginRef: 'bluetoothSerial',
        platforms: ['Android', 'iOS', 'Windows Phone 8']
    })
], BluetoothSerial);
export { BluetoothSerial };
//# sourceMappingURL=index.js.map