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
 * @name Native Storage
 * @description Native storage of variables in Android and iOS
 *
 * @usage
 * ```typescript
 * import { NativeStorage } from '@ionic-native/native-storage';
 *
 * constructor(private nativeStorage: NativeStorage) { }
 *
 * ...
 *
 * this.nativeStorage.setItem('myitem', {property: 'value', anotherProperty: 'anotherValue'})
 *   .then(
 *     () => console.log('Stored item!'),
 *     error => console.error('Error storing item', error)
 *   );
 *
 * this.nativeStorage.getItem('myitem')
 *   .then(
 *     data => console.log(data),
 *     error => console.error(error)
 *   );
 * ```
 */
var NativeStorage = (function (_super) {
    __extends(NativeStorage, _super);
    function NativeStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Stores a value
     * @param reference {string}
     * @param value
     * @returns {Promise<any>}
     */
    NativeStorage.prototype.setItem = function (reference, value) { return; };
    /**
     * Gets a stored item
     * @param reference {string}
     * @returns {Promise<any>}
     */
    NativeStorage.prototype.getItem = function (reference) { return; };
    /**
     * Retrieving all keys
     * @returns {Promise<any>}
     */
    NativeStorage.prototype.keys = function () { return; };
    /**
     * Removes a single stored item
     * @param reference {string}
     * @returns {Promise<any>}
     */
    NativeStorage.prototype.remove = function (reference) { return; };
    /**
     * Removes all stored values.
     * @returns {Promise<any>}
     */
    NativeStorage.prototype.clear = function () { return; };
    return NativeStorage;
}(IonicNativePlugin));
NativeStorage.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NativeStorage.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], NativeStorage.prototype, "setItem", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NativeStorage.prototype, "getItem", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NativeStorage.prototype, "keys", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NativeStorage.prototype, "remove", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NativeStorage.prototype, "clear", null);
NativeStorage = __decorate([
    Plugin({
        pluginName: 'NativeStorage',
        plugin: 'cordova-plugin-nativestorage',
        pluginRef: 'NativeStorage',
        repo: 'https://github.com/TheCocoaProject/cordova-plugin-nativestorage',
        platforms: ['Android', 'Browser', 'iOS', 'macOS', 'Windows']
    })
], NativeStorage);
export { NativeStorage };
//# sourceMappingURL=index.js.map