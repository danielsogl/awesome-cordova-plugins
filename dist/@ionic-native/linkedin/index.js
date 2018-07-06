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
 * @name LinkedIn
 * @description
 * A Cordova plugin that lets you use LinkedIn Native SDKs for Android and iOS.
 *
 * Please see the [plugin's repo](https://github.com/zyramedia/cordova-plugin-linkedin#installation) for detailed installation steps.
 *
 * @usage
 * ```typescript
 * import { LinkedIn } from '@ionic-native/linkedin';
 *
 * constructor(private linkedin: LinkedIn) { }
 *
 * ...
 *
 * // check if there is an active session
 * this.linkedin.hasActiveSession().then((active) => console.log('has active session?', active));
 *
 * // login
 * const scopes = ['r_basicprofile', 'r_emailaddress', 'rw_company_admin', 'w_share'];
 * this.linkedin.login(scopes, true)
 *   .then(() => console.log('Logged in!')
 *   .catch(e => console.log('Error logging in', e));
 *
 *
 * // get connections
 * this.linkedin.getRequest('people/~')
 *   .then(res => console.log(res))
 *   .catch(e => console.log(e));
 *
 * // share something on profile
 * const body = {
 *   comment: 'Hello world!',
 *   visibility: {
 *     code: 'anyone'
 *   }
 * };
 *
 * this.linkedin.postRequest('~/shares', body)
 *   .then(res => console.log(res))
 *   .catch(e => console.log(e));
 *
 *
 * ```
 */
var LinkedIn = (function (_super) {
    __extends(LinkedIn, _super);
    function LinkedIn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Login with the LinkedIn App
     * @param scopes {string[]} Scopes to authorize
     * @param promptToInstall {boolean} set to true to prompt the user to download the LinkedIn app if it's not installed
     * @return {Promise<any>}
     */
    LinkedIn.prototype.login = function (scopes, promptToInstall) { return; };
    /**
     * Clears the current session
     */
    LinkedIn.prototype.logout = function () { };
    /**
     * Make a get request
     * @param path {string} request path
     * @return {Promise<any>}
     */
    LinkedIn.prototype.getRequest = function (path) { return; };
    /**
     * Make a post request
     * @param path {string} request path
     * @param body {Object} request body
     * @return {Promise<any>}
     */
    LinkedIn.prototype.postRequest = function (path, body) { return; };
    /**
     * Opens a member's profile
     * @param memberId {string} Member id
     * @return {Promise<any>}
     */
    LinkedIn.prototype.openProfile = function (memberId) { return; };
    /**
     * Checks if there is already an existing active session. This should be used to avoid unnecessary login.
     * @return {Promise<boolean>} returns a promise that resolves with a boolean that indicates whether there is an active session
     */
    LinkedIn.prototype.hasActiveSession = function () { return; };
    /**
     * Checks if there is an active session and returns the access token if it exists.
     * @return {Promise<any>} returns a promise that resolves with an object that contains an access token if there is an active session
     */
    LinkedIn.prototype.getActiveSession = function () { return; };
    return LinkedIn;
}(IonicNativePlugin));
LinkedIn.decorators = [
    { type: Injectable },
];
/** @nocollapse */
LinkedIn.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Boolean]),
    __metadata("design:returntype", Promise)
], LinkedIn.prototype, "login", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LinkedIn.prototype, "logout", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LinkedIn.prototype, "getRequest", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], LinkedIn.prototype, "postRequest", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LinkedIn.prototype, "openProfile", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LinkedIn.prototype, "hasActiveSession", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LinkedIn.prototype, "getActiveSession", null);
LinkedIn = __decorate([
    Plugin({
        pluginName: 'LinkedIn',
        plugin: 'cordova-plugin-linkedin',
        pluginRef: 'cordova.plugins.LinkedIn',
        repo: 'https://github.com/zyra/cordova-plugin-linkedin',
        install: 'ionic cordova plugin add cordova-plugin-linkedin --variable APP_ID=YOUR_APP_ID',
        installVariables: ['APP_ID'],
        platforms: ['Android', 'iOS']
    })
], LinkedIn);
export { LinkedIn };
//# sourceMappingURL=index.js.map