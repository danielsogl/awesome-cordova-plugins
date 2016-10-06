"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Printer
 * @description Prints documents or HTML rendered content
 * @usage
 * ```typescript
 * import {Printer, PrintOptions} from 'ionic-native';
 *
 * Printer.isAvailable().then(onSuccess, onError);
 *
 * let options: PrintOptions = {
 *      name: 'MyDocument',
 *      printerId: 'printer007',
 *      duplex: true,
 *      landscape: true,
 *      grayscale: true
 *    };
 *
 * Printer.print(content, options).then(onSuccess, onError);
 * ```
 */
var Printer = (function () {
    function Printer() {
    }
    /**
     * Checks whether to device is capable of printing.
     */
    Printer.isAvailable = function () { return; };
    /**
     * Sends content to the printer.
     * @param {content} The content to print. Can be a URL or an HTML string. If a HTML DOM Object is provided, its innerHtml property value will be used.
     * @param {options} The options to pass to the printer
     */
    Printer.print = function (content, options) { return; };
    __decorate([
        plugin_1.Cordova()
    ], Printer, "isAvailable", null);
    __decorate([
        plugin_1.Cordova()
    ], Printer, "print", null);
    Printer = __decorate([
        plugin_1.Plugin({
            plugin: 'de.appplant.cordova.plugin.printer',
            pluginRef: 'cordova.plugins.printer',
            repo: 'https://github.com/katzer/cordova-plugin-printer.git',
            platforms: ['Android', 'iOS']
        })
    ], Printer);
    return Printer;
}());
exports.Printer = Printer;
//# sourceMappingURL=printer.js.map