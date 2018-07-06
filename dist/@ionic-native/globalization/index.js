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
/**
 * @name Globalization
 * @description
 * @usage
 * ```typescript
 * import { Globalization } from '@ionic-native/globalization';
 *
 * constructor(private globalization: Globalization) { }
 *
 *
 * ...
 *
 *
 * this.globalization.getPreferredLanguage()
 *   .then(res => console.log(res))
 *   .catch(e => console.log(e));
 *
 *
 * ```
 */
var Globalization = (function (_super) {
    __extends(Globalization, _super);
    function Globalization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns the BCP-47 compliant language identifier tag to the successCallback with a properties object as a parameter. That object should have a value property with a String value.
     * @returns {Promise<{value: string}>}
     */
    Globalization.prototype.getPreferredLanguage = function () { return; };
    /**
     * Returns the BCP 47 compliant locale identifier string to the successCallback with a properties object as a parameter.
     * @returns {Promise<{value: string}>}
     */
    Globalization.prototype.getLocaleName = function () { return; };
    /**
     * Converts date to string
     * @param {Date} date Date you wish to convert
     * @param options Options for the converted date. Length, selector.
     * @returns {Promise<{value: string}>} Returns a promise when the date has been converted.
     */
    Globalization.prototype.dateToString = function (date, options) { return; };
    /**
     * Parses a date formatted as a string, according to the client's user preferences and calendar using the time zone of the client, and returns the corresponding date object.
     * @param {string} dateString Date as a string to be converted
     * @param options Options for the converted date. Length, selector.
     * @returns {Promise<{ year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number }>} Returns a promise when the date has been converted.
     */
    Globalization.prototype.stringToDate = function (dateString, options) { return; };
    /**
     * Returns a pattern string to format and parse dates according to the client's user preferences.
     * @param options Object with the format length and selector
     * @returns {Promise<{ pattern: string, timezone: string, utf_offset: number, dst_offset: number }>} Returns a promise.
     */
    Globalization.prototype.getDatePattern = function (options) { return; };
    /**
     * Returns an array of the names of the months or days of the week, depending on the client's user preferences and calendar.
     * @param options Object with type (narrow or wide) and item (month or days).
     * @returns {Promise<{value: Array<string>}>} Returns a promise.
     */
    Globalization.prototype.getDateNames = function (options) { return; };
    /**
     * Indicates whether daylight savings time is in effect for a given date using the client's time zone and calendar.
     * @param {data} date Date to process
     * @returns {Promise<{dst: string}>} reutrns a promise with the value
     */
    Globalization.prototype.isDayLightSavingsTime = function (date) { return; };
    /**
     * Returns the first day of the week according to the client's user preferences and calendar.
     * @returns {Promise<{value: string}>} returns a promise with the value
     */
    Globalization.prototype.getFirstDayOfWeek = function () { return; };
    /**
     * Returns a number formatted as a string according to the client's user preferences.
     * @param numberToConvert {Number} The number to convert
     * @param options {Object} Object with property `type` that can be set to: decimal, percent, or currency.
     */
    Globalization.prototype.numberToString = function (numberToConvert, options) { return; };
    /**
     *
     * @param {string} stringToConvert String you want to conver to a number
     * @param options  The type of number you want to return. Can be decimal, percent, or currency.
     * @returns {Promise<{ value: number | string }>} Returns a promise with the value.
     */
    Globalization.prototype.stringToNumber = function (stringToConvert, options) { return; };
    /**
     * Returns a pattern string to format and parse numbers according to the client's user preferences.
     * @param options Can be decimal, percent, or currency.
     * @returns {Promise<{ pattern: string, symbol: string, fraction: number, rounding: number, positive: string, negative: string, decimal: string, grouping: string }>}
     */
    Globalization.prototype.getNumberPattern = function (options) { return; };
    /**
     * Returns a pattern string to format and parse currency values according to the client's user preferences and ISO 4217 currency code.
     * @param {string} currencyCode Currency Code.A
     * @returns {Promise<{ pattern: string, code: string, fraction: number, rounding: number, decimal: number, grouping: string }>}
     */
    Globalization.prototype.getCurrencyPattern = function (currencyCode) { return; };
    return Globalization;
}(IonicNativePlugin));
Globalization.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Globalization.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Globalization.prototype, "getPreferredLanguage", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Globalization.prototype, "getLocaleName", null);
__decorate([
    Cordova({
        successIndex: 1,
        errorIndex: 2
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date, Object]),
    __metadata("design:returntype", Promise)
], Globalization.prototype, "dateToString", null);
__decorate([
    Cordova({
        successIndex: 1,
        errorIndex: 2
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], Globalization.prototype, "stringToDate", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Globalization.prototype, "getDatePattern", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Globalization.prototype, "getDateNames", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", Promise)
], Globalization.prototype, "isDayLightSavingsTime", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Globalization.prototype, "getFirstDayOfWeek", null);
__decorate([
    Cordova({
        successIndex: 1,
        errorIndex: 2
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], Globalization.prototype, "numberToString", null);
__decorate([
    Cordova({
        successIndex: 1,
        errorIndex: 2
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], Globalization.prototype, "stringToNumber", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Globalization.prototype, "getNumberPattern", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Globalization.prototype, "getCurrencyPattern", null);
Globalization = __decorate([
    Plugin({
        pluginName: 'Globalization',
        plugin: 'cordova-plugin-globalization',
        pluginRef: 'navigator.globalization',
        repo: 'https://github.com/apache/cordova-plugin-globalization',
        platforms: ['Amazon Fire OS', 'Android', 'BlackBerry 10', 'Browser', 'Firefox OS', 'iOS', 'Tizen', 'Ubuntu', 'Windows', 'Windows Phone']
    })
], Globalization);
export { Globalization };
//# sourceMappingURL=index.js.map