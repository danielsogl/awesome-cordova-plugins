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
/**
 * @name Keychain
 * @description
 * Get and set data in the iOS Keychain
 *
 * Requires Cordova plugin: `cordova-plugin-ios-keychain`. For more info, please see the [Keychain plugin docs](https://github.com/ionic-team/cordova-plugin-ios-keychain).
 *
 * @usage
 * ```typescript
 * import { Keychain } from '@ionic-native/keychain';
 *
 * constructor(private keychain: Keychain) { }
 *
 * ...
 *
 * this.keychain.set(key, value).then(() => {
 *   this.keychain.get(key)
 *     .then(value => console.log('Got value', value))
 *     .catch(err => console.error('Error getting', err));
 * })
 * .catch(err => console.error('Error setting', err));
 * ```
 */
var Keychain = (function (_super) {
    __extends(Keychain, _super);
    function Keychain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves a value for a key
     *
     * @param {string} key the key to retrieve
     * @param {string} [touchIDMessage] the message to show underneath the TouchID prompt (if any)
     */
    Keychain.prototype.get = function (key, touchIDMessage) { return; };
    /**
     * Sets a value for a key
     *
     * @param {string} key the key to set
     * @param {string|number|boolean} value the value to set
     * @param {boolean} [useTouchID] whether to store the value with security such that TouchID will be needed to grab it
     */
    Keychain.prototype.set = function (key, value, useTouchID) { return; };
    /**
     * Gets a JSON value for a key
     *
     * @param {string} key the key to retrieve
     * @param {string} touchIDMessage the message to show underneath the TouchID prompt (if any)
     */
    Keychain.prototype.getJson = function (key, touchIDMessage) { return; };
    /**
     * Sets a JSON value for a key
     *
     * @param {string} key the key to set
     * @param {any} obj value the value to set
     * @param {boolean} [useTouchId] Wether to store the value with security such that TouchID will be needed to grab it
     */
    Keychain.prototype.setJson = function (key, obj, useTouchId) { return; };
    /**
     * Removes a value for a key
     *
     * @param {string} key the key to remove
     */
    Keychain.prototype.remove = function (key) { return; };
    return Keychain;
}(IonicNativePlugin));
Keychain.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Keychain.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], Keychain.prototype, "get", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Boolean]),
    __metadata("design:returntype", Promise)
], Keychain.prototype, "set", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], Keychain.prototype, "getJson", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Boolean]),
    __metadata("design:returntype", Promise)
], Keychain.prototype, "setJson", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Keychain.prototype, "remove", null);
Keychain = __decorate([
    Plugin({
        pluginName: 'Keychain',
        plugin: 'cordova-plugin-ios-keychain',
        pluginRef: 'window.Keychain',
        repo: 'https://github.com/ionic-team/cordova-plugin-ios-keychain',
        platforms: ['iOS']
    })
], Keychain);
export { Keychain };
//# sourceMappingURL=index.js.map