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
import { CordovaInstance, Plugin, CordovaCheck, IonicNativePlugin } from '@ionic-native/core';
/**
 * @hidden
 */
var SecureStorageObject = (function () {
    function SecureStorageObject(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    /**
     * Gets a stored item
     * @param key {string}
     * @returns {Promise<string>}
     */
    SecureStorageObject.prototype.get = function (key) { return; };
    /**
     * Stores a value
     * @param key {string}
     * @param value {string}
     * @returns {Promise<any>}
     */
    SecureStorageObject.prototype.set = function (key, value) { return; };
    /**
     * Removes a single stored item
     * @param key {string}
     * @returns {Promise<string>} returns a promise that resolves with the key that was removed
     */
    SecureStorageObject.prototype.remove = function (key) { return; };
    /**
     * Get all references from the storage.
     * @returns {Promise<string[]>} returns a promise that resolves with array of keys storage
     */
    SecureStorageObject.prototype.keys = function () { return; };
    /**
     * Clear all references from the storage.
     * @returns {Promise<any>}
     */
    SecureStorageObject.prototype.clear = function () { return; };
    /**
     * Brings up the screen-lock settings
     * @returns {Promise<any>}
     */
    SecureStorageObject.prototype.secureDevice = function () { return; };
    return SecureStorageObject;
}());
export { SecureStorageObject };
__decorate([
    CordovaInstance({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SecureStorageObject.prototype, "get", null);
__decorate([
    CordovaInstance({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], SecureStorageObject.prototype, "set", null);
__decorate([
    CordovaInstance({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SecureStorageObject.prototype, "remove", null);
__decorate([
    CordovaInstance({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SecureStorageObject.prototype, "keys", null);
__decorate([
    CordovaInstance({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SecureStorageObject.prototype, "clear", null);
__decorate([
    CordovaInstance(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SecureStorageObject.prototype, "secureDevice", null);
/**
 * @name Secure Storage
 * @description
 * This plugin gets, sets and removes key,value pairs from a device's secure storage.
 *
 * Requires Cordova plugin: `cordova-plugin-secure-storage`. For more info, please see the [Cordova Secure Storage docs](https://github.com/Crypho/cordova-plugin-secure-storage).
 *
 * The browser platform is supported as a mock only. Key/values are stored unencrypted in localStorage.
 *
 * @usage
 *
 * ```typescript
 * import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';
 *
 * constructor(private secureStorage: SecureStorage) { }
 *
 * ...
 *
 * this.secureStorage.create('my_store_name')
 *   .then((storage: SecureStorageObject) => {
 *
 *      storage.get('key')
 *        .then(
 *          data => console.log(data),
 *          error => console.log(error)
 *      );
 *
 *      storage.set('key', 'value')
 *        .then(
 *         data => console.log(data),
 *          error => console.log(error)
 *      );
 *
 *      storage.remove('key')
 *      .then(
 *          data => console.log(data),
 *          error => console.log(error)
 *      );
 *
 *   });
 *
 *
 * ```
 * @classes
 * SecureStorageObject
 */
var SecureStorage = SecureStorage_1 = (function (_super) {
    __extends(SecureStorage, _super);
    function SecureStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a namespaced storage.
     * @param store {string}
     * @returns {Promise<SecureStorageObject>}
     */
    SecureStorage.prototype.create = function (store) {
        return new Promise(function (res, rej) {
            var instance = new (SecureStorage_1.getPlugin())(function () { return res(new SecureStorageObject(instance)); }, rej, store);
        });
    };
    return SecureStorage;
}(IonicNativePlugin));
SecureStorage.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SecureStorage.ctorParameters = function () { return []; };
__decorate([
    CordovaCheck(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SecureStorage.prototype, "create", null);
SecureStorage = SecureStorage_1 = __decorate([
    Plugin({
        pluginName: 'SecureStorage',
        plugin: 'cordova-plugin-secure-storage',
        pluginRef: 'cordova.plugins.SecureStorage',
        repo: 'https://github.com/Crypho/cordova-plugin-secure-storage',
        platforms: ['Android', 'Browser', 'iOS', 'Windows']
    })
], SecureStorage);
export { SecureStorage };
var SecureStorage_1;
//# sourceMappingURL=index.js.map