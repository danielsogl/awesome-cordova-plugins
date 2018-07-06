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
 * @name Twitter Connect
 * @description
 * Plugin to use Twitter Single Sign On
 * Uses Twitter's Fabric SDK
 * ```typescript
 * import { TwitterConnect } from '@ionic-native/twitter-connect';
 *
 * constructor(private twitter: TwitterConnect) { }
 *
 * ...
 *
 * function onSuccess(response) {
 *   console.log(response);
 *
 *   // Will console log something like:
 *   // {
 *   //   userName: 'myuser',
 *   //   userId: '12358102',
 *   //   secret: 'tokenSecret'
 *   //   token: 'accessTokenHere'
 *   // }
 * }
 *
 * this.twitter.login().then(onSuccess, onError);
 *
 * this.twitter.logout().then(onLogoutSuccess, onLogoutError);
 * ```
 * @interfaces
 * TwitterConnectResponse
 */
var TwitterConnect = (function (_super) {
    __extends(TwitterConnect, _super);
    function TwitterConnect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Logs in
     * @returns {Promise<TwitterConnectResponse>} returns a promise that resolves if logged in and rejects if failed to login
     */
    TwitterConnect.prototype.login = function () { return; };
    /**
     * Logs out
     * @returns {Promise<any>} returns a promise that resolves if logged out and rejects if failed to logout
     */
    TwitterConnect.prototype.logout = function () { return; };
    /**
     * Returns user's profile information
     * @returns {Promise<any>} returns a promise that resolves if user profile is successfully retrieved and rejects if request fails
     */
    TwitterConnect.prototype.showUser = function () { return; };
    return TwitterConnect;
}(IonicNativePlugin));
TwitterConnect.decorators = [
    { type: Injectable },
];
/** @nocollapse */
TwitterConnect.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TwitterConnect.prototype, "login", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TwitterConnect.prototype, "logout", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TwitterConnect.prototype, "showUser", null);
TwitterConnect = __decorate([
    Plugin({
        pluginName: 'TwitterConnect',
        plugin: 'twitter-connect-plugin',
        pluginRef: 'TwitterConnect',
        repo: 'https://github.com/ManifestWebDesign/twitter-connect-plugin',
        install: 'ionic cordova plugin add twitter-connect-plugin --variable FABRIC_KEY=fabric_API_key',
        installVariables: ['FABRIC_KEY'],
        platforms: ['Android', 'iOS']
    })
], TwitterConnect);
export { TwitterConnect };
//# sourceMappingURL=index.js.map