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
import { Observable } from 'rxjs/Observable';
/**
 * @name Httpd
 * @description
 * Embedded httpd for Cordova apps. Light weight HTTP server.
 * @usage
 * ```typescript
 * import { Httpd, HttpdOptions } from '@ionic-native/httpd';
 *
 * constructor(private httpd: Httpd) { }
 *
 * ...
 *
 *
 * let options: HttpdOptions = {
 *      www_root: 'httpd_root', // relative path to app's www directory
 *      port: 80,
 *      localhost_only: false
 *  };
 *
 * this.httpd.startServer(options).subscribe((data) => {
 *  console.log('Server is live');
 * });
 *
 * ```
 * @interfaces
 * HttpdOptions
 */
var Httpd = (function (_super) {
    __extends(Httpd, _super);
    function Httpd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Starts a web server.
     * @param options {HttpdOptions}
     * @returns {Observable<string>} Returns an Observable. Subscribe to receive the URL for your web server (if succeeded). Unsubscribe to stop the server.
     */
    Httpd.prototype.startServer = function (options) { return; };
    /**
     * Gets the URL of the running server
     * @returns {Promise<string>} Returns a promise that resolves with the URL of the web server.
     */
    Httpd.prototype.getUrl = function () { return; };
    /**
     * Get the local path of the running webserver
     * @returns {Promise<string>} Returns a promise that resolves with the local path of the web server.
      */
    Httpd.prototype.getLocalPath = function () { return; };
    return Httpd;
}(IonicNativePlugin));
Httpd.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Httpd.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        observable: true,
        clearFunction: 'stopServer'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Observable)
], Httpd.prototype, "startServer", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Httpd.prototype, "getUrl", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Httpd.prototype, "getLocalPath", null);
Httpd = __decorate([
    Plugin({
        pluginName: 'Httpd',
        plugin: 'cordova-plugin-httpd',
        pluginRef: 'cordova.plugins.CorHttpd',
        repo: 'https://github.com/floatinghotpot/cordova-httpd',
        platforms: ['Android', 'iOS', 'macOS']
    })
], Httpd);
export { Httpd };
//# sourceMappingURL=index.js.map