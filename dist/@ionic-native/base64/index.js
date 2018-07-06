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
/**
 * @beta
 * @name Base64
 * @description
 * This Plugin is used to encode base64 of any file, it uses js code for iOS, but in case of android it uses native code to handle android versions lower than v.3
 *
 * @usage
 * ```typescript
 * import { Base64 } from '@ionic-native/base64';
 *
 * constructor(private base64: Base64) { }
 *
 * ...
 *
 * let filePath: string = 'file:///...';
 * this.base64.encodeFile(filePath).then((base64File: string) => {
 *   console.log(base64File);
 * }, (err) => {
 *   console.log(err);
 * });
 *
 * ```
 */
var Base64 = (function (_super) {
    __extends(Base64, _super);
    function Base64() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function encodes base64 of any file
     * @param {string} filePath Absolute file path
     * @return {Promise<string>} Returns a promise that resolves when the file is successfully encoded
     */
    Base64.prototype.encodeFile = function (filePath) { return; };
    return Base64;
}(IonicNativePlugin));
Base64.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Base64.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Base64.prototype, "encodeFile", null);
Base64 = __decorate([
    Plugin({
        pluginName: 'Base64',
        plugin: 'com-badrit-base64',
        pluginRef: 'plugins.Base64',
        repo: 'https://github.com/hazemhagrass/phonegap-base64',
        platforms: ['Android', 'iOS']
    })
], Base64);
export { Base64 };
//# sourceMappingURL=index.js.map