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
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';
/**
 * @name File Encryption
 * @description
 * Simple file encryption for Cordova.
 *
 * @usage
 * ```typescript
 * import { FileEncryption } from '@ionic-native/file-encryption';
 *
 *
 * constructor(private fileEncryption: FileEncryption) { }
 *
 * ...
 *
 * this.fileEncryption.decrypt('assets/json/topSecret.json', 'secretKey');
 *
 * this.fileEncryption.encrypt('assets/json/topSecret.json', 'secretKey');
 *
 * ```
 */
var FileEncryption = (function (_super) {
    __extends(FileEncryption, _super);
    function FileEncryption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Enrcypt a file
     * @param file {string} A string representing a local URI
     * @param key {string} A key for the crypto operations
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    FileEncryption.prototype.encrypt = function (file, key) { return; };
    /**
     * Decrypt a file
     * @param file {string} A string representing a local URI
     * @param key {string} A key for the crypto operations
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    FileEncryption.prototype.decrypt = function (file, key) { return; };
    return FileEncryption;
}(IonicNativePlugin));
FileEncryption.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FileEncryption.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], FileEncryption.prototype, "encrypt", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], FileEncryption.prototype, "decrypt", null);
FileEncryption = __decorate([
    Plugin({
        pluginName: 'FileEncryption',
        plugin: 'cordova-safe',
        pluginRef: 'cordova.plugins.disusered',
        repo: 'https://github.com/disusered/cordova-safe',
        platforms: ['Android', 'iOS']
    })
], FileEncryption);
export { FileEncryption };
//# sourceMappingURL=index.js.map