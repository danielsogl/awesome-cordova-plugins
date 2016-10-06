"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name NativeStorage
 * @description Native storage of variables in Android and iOS
 *
 * @usage
 * ```typescript
 * import { NativeStorage } from 'ionic-native';
 *
 * NativeStorage.setItem('myitem', {property: 'value', anotherProperty: 'anotherValue'})
 *   .then(
 *     () => console.log('Stored item!'),
 *     error => console.error('Error storing item', error)
 *   );
 *
 * NativeStorage.getItem('myitem')
 *   .then(
 *     data => console.log(data),
 *     error => console.error(error)
 *   );
 * ```
 */
var NativeStorage = (function () {
    function NativeStorage() {
    }
    /**
     * Stores a value
     * @param reference {string}
     * @param value
     */
    NativeStorage.setItem = function (reference, value) { return; };
    /**
     * Gets a stored item
     * @param reference {string}
     */
    NativeStorage.getItem = function (reference) { return; };
    /**
     * Removes a single stored item
     * @param reference {string}
     */
    NativeStorage.remove = function (reference) { return; };
    /**
     * Removes all stored values.
     */
    NativeStorage.clear = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], NativeStorage, "setItem", null);
    __decorate([
        plugin_1.Cordova()
    ], NativeStorage, "getItem", null);
    __decorate([
        plugin_1.Cordova()
    ], NativeStorage, "remove", null);
    __decorate([
        plugin_1.Cordova()
    ], NativeStorage, "clear", null);
    NativeStorage = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-nativestorage',
            pluginRef: 'NativeStorage',
            repo: 'https://github.com/TheCocoaProject/cordova-plugin-nativestorage'
        })
    ], NativeStorage);
    return NativeStorage;
}());
exports.NativeStorage = NativeStorage;
//# sourceMappingURL=nativestorage.js.map