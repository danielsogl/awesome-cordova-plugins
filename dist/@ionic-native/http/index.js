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
 * @name HTTP
 * @description
 * Cordova / Phonegap plugin for communicating with HTTP servers. Supports iOS and Android.
 *
 * Advantages over Javascript requests:
 * - Background threading - all requests are done in a background thread
 * - SSL Pinning
 *
 * @usage
 * ```typescript
 * import { HTTP } from '@ionic-native/http';
 *
 * constructor(private http: HTTP) { }
 *
 * ...
 *
 * this.http.get('http://ionic.io', {}, {})
 *   .then(data => {
 *
 *     console.log(data.status);
 *     console.log(data.data); // data received by server
 *     console.log(data.headers);
 *
 *   })
 *   .catch(error => {
 *
 *     console.log(error.status);
 *     console.log(error.error); // error message as string
 *     console.log(error.headers);
 *
 *   });
 *
 * ```
 * @interfaces
 * HTTPResponse
 */
var HTTP = (function (_super) {
    __extends(HTTP, _super);
    function HTTP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This returns an object representing a basic HTTP Authorization header of the form.
     * @param username {string} Username
     * @param password {string} Password
     * @returns {Object} an object representing a basic HTTP Authorization header of the form {'Authorization': 'Basic base64encodedusernameandpassword'}
     */
    HTTP.prototype.getBasicAuthHeader = function (username, password) { return; };
    /**
     * This sets up all future requests to use Basic HTTP authentication with the given username and password.
     * @param username {string} Username
     * @param password {string} Password
     */
    HTTP.prototype.useBasicAuth = function (username, password) { };
    /**
     * Set a header for all future requests. Takes a header and a value.
     * @param header {string} The name of the header
     * @param value {string} The value of the header
     */
    HTTP.prototype.setHeader = function (header, value) { };
    /**
     * Enable or disable SSL Pinning. This defaults to false.
     *
     * To use SSL pinning you must include at least one .cer SSL certificate in your app project. You can pin to your server certificate or to one of the issuing CA certificates. For ios include your certificate in the root level of your bundle (just add the .cer file to your project/target at the root level). For android include your certificate in your project's platforms/android/assets folder. In both cases all .cer files found will be loaded automatically. If you only have a .pem certificate see this stackoverflow answer. You want to convert it to a DER encoded certificate with a .cer extension.
     *
     * As an alternative, you can store your .cer files in the www/certificates folder.
     * @param enable {boolean} Set to true to enable
     * @returns {Promise<void>} returns a promise that will resolve on success, and reject on failure
     */
    HTTP.prototype.enableSSLPinning = function (enable) { return; };
    /**
     * Accept all SSL certificates. Or disabled accepting all certificates. Defaults to false.
     * @param accept {boolean} Set to true to accept
     * @returns {Promise<void>} returns a promise that will resolve on success, and reject on failure
     */
    HTTP.prototype.acceptAllCerts = function (accept) { return; };
    /**
     * Whether or not to validate the domain name in the certificate. This defaults to true.
     * @param validate {boolean} Set to true to validate
     * @returns {Promise<void>} returns a promise that will resolve on success, and reject on failure
     */
    HTTP.prototype.validateDomainName = function (validate) { return; };
    /**
     * Make a POST request
     * @param url {string} The url to send the request to
     * @param body {Object} The body of the request
     * @param headers {Object} The headers to set for this request
     * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
     */
    HTTP.prototype.post = function (url, body, headers) { return; };
    /**
     *
     * @param url {string} The url to send the request to
     * @param parameters {Object} Parameters to send with the request
     * @param headers {Object} The headers to set for this request
     * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
     */
    HTTP.prototype.get = function (url, parameters, headers) { return; };
    /**
     *
     * @param url {string} The url to send the request to
     * @param body {Object} The body of the request
     * @param headers {Object} The headers to set for this request
     * @param filePath {string} The local path of the file to upload
     * @param name {string} The name of the parameter to pass the file along as
     * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
     */
    HTTP.prototype.uploadFile = function (url, body, headers, filePath, name) { return; };
    /**
     *
     * @param url {string} The url to send the request to
     * @param body {Object} The body of the request
     * @param headers {Object} The headers to set for this request
     * @param filePath {string} The path to donwload the file to, including the file name.
     * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
     */
    HTTP.prototype.downloadFile = function (url, body, headers, filePath) { return; };
    return HTTP;
}(IonicNativePlugin));
HTTP.decorators = [
    { type: Injectable },
];
/** @nocollapse */
HTTP.ctorParameters = function () { return []; };
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Object)
], HTTP.prototype, "getBasicAuthHeader", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], HTTP.prototype, "useBasicAuth", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], HTTP.prototype, "setHeader", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], HTTP.prototype, "enableSSLPinning", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], HTTP.prototype, "acceptAllCerts", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], HTTP.prototype, "validateDomainName", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], HTTP.prototype, "post", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], HTTP.prototype, "get", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object, String, String]),
    __metadata("design:returntype", Promise)
], HTTP.prototype, "uploadFile", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object, String]),
    __metadata("design:returntype", Promise)
], HTTP.prototype, "downloadFile", null);
HTTP = __decorate([
    Plugin({
        pluginName: 'HTTP',
        plugin: 'cordova-plugin-http',
        pluginRef: 'cordovaHTTP',
        repo: 'https://github.com/wymsee/cordova-HTTP',
        platforms: ['Android', 'iOS']
    })
], HTTP);
export { HTTP };
//# sourceMappingURL=index.js.map