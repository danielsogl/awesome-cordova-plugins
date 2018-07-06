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
 * @name Zeroconf
 * @description
 * This plugin allows you to browse and publish Zeroconf/Bonjour/mDNS services.
 * @usage
 * ```typescript
 * import { Zeroconf } from '@ionic-native/zeroconf';
 *
 * constructor(private zeroconf: Zeroconf) { }
 *
 * ...
 *
 * // watch for services of a specified type
 * this.zeroconf.watch('_http._tcp.', 'local.').subscribe(result => {
 *   if (result.action == 'added') {
 *     console.log('service added', result.service);
 *   } else {
 *     console.log('service removed', result.service);
 *   }
 * });
 *
 * // publish a zeroconf service of your own
 * this.zeroconf.register('_http._tcp.', 'local.', 'Becvert\'s iPad', 80, {
 *   'foo': 'bar'
 * }).then(result => {
 *   console.log('Service registered', result.service);
 * });
 *
 *
 * // unregister your service
 * this.zeroconf.unregister('_http._tcp.', 'local.', 'Becvert\'s iPad');
 * ```
 */
var Zeroconf = (function (_super) {
    __extends(Zeroconf, _super);
    function Zeroconf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns this device's hostname.
     * @return {Promise<string>}
     */
    Zeroconf.prototype.getHostname = function () { return; };
    /**
     * Publishes a new service.
     * @param type {string} Service type name, e.g. "_http._tcp".
     * @param domain {string} Domain scope of the service, typically "local.".
     * @param name {string} Unqualified service instance name.
     * @param port {number} Local port on which the service runs.
     * @param txtRecord {any} Arbitrary key/value pairs describing the service.
     * @return {Promise<ZeroconfResult>} Returns a Promise that resolves with the registered service.
     */
    Zeroconf.prototype.register = function (type, domain, name, port, txtRecord) { return; };
    /**
     * Unregisters a service.
     * @param type {string} Service type name, e.g. "_http._tcp".
     * @param domain {string} Domain scope of the service, typically "local.".
     * @param name {string} Unqualified service instance name.
     * @return {Promise<void>}
     */
    Zeroconf.prototype.unregister = function (type, domain, name) { return; };
    /**
     * Unregisters all published services.
     * @return {Promise<void>}
     */
    Zeroconf.prototype.stop = function () { return; };
    /**
     * Starts watching for services of the specified type.
     * @param type {string} Service type name, e.g. "_http._tcp".
     * @param domain {string} Domain scope of the service, typically "local.".
     * @return {Observable<ZeroconfResult>} Returns an Observable that notifies of each service added or removed.
     */
    Zeroconf.prototype.watch = function (type, domain) { return; };
    /**
     * Stops watching for services of the specified type.
     * @param type {string} Service type name, e.g. "_http._tcp".
     * @param domain {string} Domain scope of the service, typically "local.".
     * @return {Promise<void>}
     */
    Zeroconf.prototype.unwatch = function (type, domain) { return; };
    /**
     * Closes the service browser and stops watching.
     * @return {Promise<void>}
     */
    Zeroconf.prototype.close = function () { return; };
    return Zeroconf;
}(IonicNativePlugin));
Zeroconf.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Zeroconf.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Zeroconf.prototype, "getHostname", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, Object]),
    __metadata("design:returntype", Promise)
], Zeroconf.prototype, "register", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], Zeroconf.prototype, "unregister", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Zeroconf.prototype, "stop", null);
__decorate([
    Cordova({
        observable: true,
        clearFunction: 'unwatch',
        clearWithArgs: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Observable)
], Zeroconf.prototype, "watch", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], Zeroconf.prototype, "unwatch", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Zeroconf.prototype, "close", null);
Zeroconf = __decorate([
    Plugin({
        pluginName: 'Zeroconf',
        plugin: 'cordova-plugin-zeroconf',
        pluginRef: 'cordova.plugins.zeroconf',
        repo: 'https://github.com/becvert/cordova-plugin-zeroconf',
        platforms: ['Android', 'iOS']
    })
], Zeroconf);
export { Zeroconf };
//# sourceMappingURL=index.js.map