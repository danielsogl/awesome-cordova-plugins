"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Httpd
 * @description
 * Embedded httpd for Cordova apps. Light weight HTTP server.
 * @usage
 * ```typescript
 * import {Httpd, HttpdOptions} from 'ionic-native';
 *
 * let options: HttpdOptions = {
 *      www_root: 'httpd_root', // relative path to app's www directory
 *      port: 80,
 *      localhost_only: false
 *  };
 *
 * Httpd.startServer(options).subscribe((data) => {
 *  console.log('Server is live');
 * });
 *
 * ```
 */
var Httpd = (function () {
    function Httpd() {
    }
    /**
     * Starts a web server.
     * @returns {Observable<string>} Returns an Observable. Subscribe to receive the URL for your web server (if succeeded). Unsubscribe to stop the server.
     * @param options {HttpdOptions}
     */
    Httpd.startServer = function (options) { return; };
    /**
     * Gets the URL of the running server
     * @returns {Promise<string>} Returns a promise that resolves with the URL of the web server.
     */
    Httpd.getUrl = function () { return; };
    /**
     * Get the local path of the running webserver
     * @returns {Promise<string>} Returns a promise that resolves with the local path of the web server.
      */
    Httpd.getLocalPath = function () { return; };
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'stopServer'
        })
    ], Httpd, "startServer", null);
    __decorate([
        plugin_1.Cordova()
    ], Httpd, "getUrl", null);
    __decorate([
        plugin_1.Cordova()
    ], Httpd, "getLocalPath", null);
    Httpd = __decorate([
        plugin_1.Plugin({
            plugin: 'https://github.com/floatinghotpot/cordova-httpd.git',
            pluginRef: 'cordova.plugins.CorHttpd',
            repo: 'https://github.com/floatinghotpot/cordova-httpd',
            platforms: ['iOS', 'Android']
        })
    ], Httpd);
    return Httpd;
}());
exports.Httpd = Httpd;
//# sourceMappingURL=httpd.js.map