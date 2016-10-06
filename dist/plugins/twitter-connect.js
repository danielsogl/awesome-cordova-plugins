"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Twitter Connect
 * @description
 * Plugin to use Twitter Single Sign On
 * Uses Twitter's Fabric SDK
 * ```typescript
 * import {TwitterConnect} from 'ionic-native';
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
 * TwitterConnect.login().then(onSuccess, onError);
 *
 * TwitterConnect.logout().then(onLogoutSuccess, onLogoutError);
 * ```
 */
var TwitterConnect = (function () {
    function TwitterConnect() {
    }
    /**
     * Logs in
     * @return {Promise<TwitterConnectResponse>} returns a promise that resolves if logged in and rejects if failed to login
     */
    TwitterConnect.login = function () { return; };
    /**
     * Logs out
     * @return {Promise<any>} returns a promise that resolves if logged out and rejects if failed to logout
     */
    TwitterConnect.logout = function () { return; };
    /**
     * Returns user's profile information
     * @return {Promise<any>} returns a promise that resolves if user profile is successfully retrieved and rejects if request fails
     */
    TwitterConnect.showUser = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], TwitterConnect, "login", null);
    __decorate([
        plugin_1.Cordova()
    ], TwitterConnect, "logout", null);
    __decorate([
        plugin_1.Cordova()
    ], TwitterConnect, "showUser", null);
    TwitterConnect = __decorate([
        plugin_1.Plugin({
            plugin: 'twitter-connect-plugin',
            pluginRef: 'TwitterConnect',
            repo: 'https://github.com/ManifestWebDesign/twitter-connect-plugin',
            install: 'ionic plugin add twitter-connect-plugin --variable FABRIC_KEY=fabric_API_key'
        })
    ], TwitterConnect);
    return TwitterConnect;
}());
exports.TwitterConnect = TwitterConnect;
//# sourceMappingURL=twitter-connect.js.map