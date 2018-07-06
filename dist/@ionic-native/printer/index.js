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
import { Cordova, CordovaCheck, Plugin, IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Printer
 * @description Prints documents or HTML rendered content
 * @usage
 * ```typescript
 * import { Printer, PrintOptions } from '@ionic-native/printer';
 *
 * constructor(private printer: Printer) { }
 *
 * ...
 *
 * this.printer.isAvailable().then(onSuccess, onError);
 *
 * let options: PrintOptions = {
 *      name: 'MyDocument',
 *      printerId: 'printer007',
 *      duplex: true,
 *      landscape: true,
 *      grayscale: true
 *    };
 *
 * this.printer.print(content, options).then(onSuccess, onError);
 * ```
 * @interfaces
 * PrintOptions
 */
var Printer = Printer_1 = (function (_super) {
    __extends(Printer, _super);
    function Printer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Checks whether to device is capable of printing.
     * @returns {Promise<boolean>}
     */
    Printer.prototype.isAvailable = function () {
        return this.check()
            .then(function (res) { return Promise.resolve(res.avail); });
    };
    /**
     * Checks if the printer service is available (iOS) or if printer services are installed and enabled (Android).
     * @return {Promise<any>} returns a promise that resolve with an object indicating whether printing is available, and providing the number of printers available
     */
    Printer.prototype.check = function () {
        return new Promise(function (resolve) {
            Printer_1.getPlugin()
                .check(function (avail, count) {
                resolve({ avail: avail, count: count });
            });
        });
    };
    /**
     * Displays a system interface allowing the user to select an available printer. To speak with a printer directly you need to know the network address by picking them before via `printer.pick`.
     * @returns {Promise<any>}
     */
    Printer.prototype.pick = function () { return; };
    /**
     * Sends content to the printer.
     * @param content {string | HTMLElement} The content to print. Can be a URL or an HTML string. If a HTML DOM Object is provided, its innerHtml property value will be used.
     * @param options {PrintOptions} optional. The options to pass to the printer
     * @returns {Promise<any>}
     */
    Printer.prototype.print = function (content, options) { return; };
    return Printer;
}(IonicNativePlugin));
Printer.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Printer.ctorParameters = function () { return []; };
__decorate([
    CordovaCheck(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Printer.prototype, "check", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Printer.prototype, "pick", null);
__decorate([
    Cordova({
        successIndex: 2,
        errorIndex: 4
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], Printer.prototype, "print", null);
Printer = Printer_1 = __decorate([
    Plugin({
        pluginName: 'Printer',
        plugin: 'de.appplant.cordova.plugin.printer',
        pluginRef: 'cordova.plugins.printer',
        repo: 'https://github.com/katzer/cordova-plugin-printer',
        platforms: ['Android', 'iOS', 'Windows']
    })
], Printer);
export { Printer };
var Printer_1;
//# sourceMappingURL=index.js.map