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
 * @name User Agent
 * @description
 * The UserAgent plugin provides functions to set the HTTP  user-agent header. For more info about User-Agents, please [see the HTTP User-Agent docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent).
 *
 * Requires Cordova plugin: `cordova-useragent`. For more info, please see the [User-Agent plugin docs](https://github.com/LouisT/cordova-useragent).
 *
 * @usage
 * ```typescript
 * import { UserAgent } from '@ionic-native/user-agent';
 *
 *
 * constructor(private userAgent: UserAgent) { }
 *
 * ...
 *
 *
 * this.userAgent.set('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * * this.userAgent.get()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * * this.userAgent.reset()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
var UserAgent = (function (_super) {
    __extends(UserAgent, _super);
    function UserAgent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Changes the current user-agent to the one sent by argument.
     * @param userAgent {string} User-Agent
     * @return {Promise<any>} Returns a promise that resolves when the user-agent changes
     */
    UserAgent.prototype.set = function (userAgent) {
        return;
    };
    /**
     * Returns the current user-agent string.
     * @return {Promise<any>} Returns a promise that resolves when the user-agent is returned
     */
    UserAgent.prototype.get = function () {
        return;
    };
    /**
     * Sets the user-agent back to default
     * @return {Promise<any>} Returns a promise that resolves when the user-agent resets
     */
    UserAgent.prototype.reset = function () {
        return;
    };
    return UserAgent;
}(IonicNativePlugin));
UserAgent.decorators = [
    { type: Injectable },
];
/** @nocollapse */
UserAgent.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserAgent.prototype, "set", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserAgent.prototype, "get", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserAgent.prototype, "reset", null);
UserAgent = __decorate([
    Plugin({
        pluginName: 'UserAgent',
        plugin: 'cordova-plugin-useragent',
        pluginRef: 'plugins.useragent',
        repo: 'https://github.com/danielsogl/cordova-plugin-useragent',
        platforms: ['Android', 'iOS']
    })
], UserAgent);
export { UserAgent };
//# sourceMappingURL=index.js.map