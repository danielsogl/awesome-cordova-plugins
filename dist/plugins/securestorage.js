"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Secure Storage
 * @description
 * This plugin gets, sets and removes key,value pairs from a device's secure storage.
 *
 * Requires Cordova plugin: `cordova-plugin-secure-storage`. For more info, please see the [Cordova Secure Storage docs](https://github.com/Crypho/cordova-plugin-secure-storage).
 *
 * @usage
 *
 * ```typescript
 * import { SecureStorage } from 'ionic-native';
 *
 * let secureStorage: SecureStorage = new SecureStorage();
 * secureStorage.create('my_store_name')
 *  .then(
 *    () => console.log('Storage is ready!'),
 *    error => console.log(error)
 * );
 *
 * secureStorage.get('myitem')
 *  .then(
 *    data => console.log(data),
 *    error => console.log(error)
 * );
 *
 * secureStorage.set('myitem', 'myvalue')
 *  .then(
 *    data => console.log(data),
 *    error => console.log(error)
 * );
 *
 * secureStorage.remove('myitem')
 * .then(
 *    data => console.log(data),
 *    error => console.log(error)
 * );
 * ```
 */
var SecureStorage = (function () {
    function SecureStorage() {
    }
    /**
     * Creates a namespaced storage.
     * @param store {string}
     */
    SecureStorage.prototype.create = function (store) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this._objectInstance = new cordova.plugins.SecureStorage(res, rej, store);
        });
    };
    /**
     * Gets a stored item
     * @param reference {string}
     */
    SecureStorage.prototype.get = function (reference) { return; };
    /**
     * Stores a value
     * @param reference {string}
     * @param value {string}
     */
    SecureStorage.prototype.set = function (reference, value) { return; };
    /**
     * Removes a single stored item
     * @param reference {string}
     */
    SecureStorage.prototype.remove = function (reference) { return; };
    __decorate([
        plugin_1.CordovaInstance({
            callbackOrder: 'reverse'
        })
    ], SecureStorage.prototype, "get", null);
    __decorate([
        plugin_1.CordovaInstance({
            callbackOrder: 'reverse'
        })
    ], SecureStorage.prototype, "set", null);
    __decorate([
        plugin_1.CordovaInstance({
            callbackOrder: 'reverse'
        })
    ], SecureStorage.prototype, "remove", null);
    SecureStorage = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-secure-storage',
            pluginRef: 'plugins.securestorage',
            repo: 'https://github.com/Crypho/cordova-plugin-secure-storage',
            platforms: ['Android', 'iOS', 'Windows Phone', 'Browser']
        })
    ], SecureStorage);
    return SecureStorage;
}());
exports.SecureStorage = SecureStorage;
//# sourceMappingURL=securestorage.js.map