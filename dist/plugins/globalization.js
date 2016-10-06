"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Globalization
 * @description
 * @usage
 * ```typescript
 * import { Globalization } from 'ionic-native';
 *
 *
 * ```
 */
var Globalization = (function () {
    function Globalization() {
    }
    /**
     * Returns the BCP-47 compliant language identifier tag to the successCallback with a properties object as a parameter. That object should have a value property with a String value.
     * @return {Promise<{value: string}>}
     */
    Globalization.getPreferredLanguage = function () { return; };
    /**
     * Returns the BCP 47 compliant locale identifier string to the successCallback with a properties object as a parameter.
     * @return {Promise<{value: string}>}
     */
    Globalization.getLocaleName = function () { return; };
    /**
     * Converts date to string
     * @param {Date} date Date you wish to convert
     * @param options Options for the converted date. Length, selector.
     * @return {Promise<{value: string}>} Returns a promise when the date has been converted.
     */
    Globalization.dateToString = function (date, options) { return; };
    /**
     * Parses a date formatted as a string, according to the client's user preferences and calendar using the time zone of the client, and returns the corresponding date object.
     * @param {string} dateString Date as a string to be converted
     * @param options Options for the converted date. Length, selector.
     * @return {Promise<{value: string}>} Returns a promise when the date has been converted.
     */
    Globalization.stringToDate = function (dateString, options) { return; };
    /**
     * Returns a pattern string to format and parse dates according to the client's user preferences.
     * @param options Object with the format length and selector
     * @return {Promise<{value: string}>} Returns a promise.
     */
    Globalization.getDatePattern = function (options) { return; };
    /**
     * Returns an array of the names of the months or days of the week, depending on the client's user preferences and calendar.
     * @param options Object with type (narrow or wide) and item (month or days).
     * @return {Promise<{value: string}>} Returns a promise.
     */
    Globalization.getDateNames = function (options) { return; };
    /**
     * Indicates whether daylight savings time is in effect for a given date using the client's time zone and calendar.
     * @param {data} date Date to process
     * @returns {Promise<dst>} reutrns a promise with the value
     */
    Globalization.isDayLightSavingsTime = function (date) { return; };
    /**
     * Returns the first day of the week according to the client's user preferences and calendar.
     * @returns {Promise<value>} reutrns a promise with the value
     */
    Globalization.getFirstDayOfWeek = function () { return; };
    /**
     * Returns a number formatted as a string according to the client's user preferences.
     * @param options
     */
    Globalization.numberToString = function (options) { return; };
    /**
     *
     * @param {string} stringToConvert String you want to conver to a number
     * @param options  The type of number you want to return. Can be decimal, percent, or currency.
     * @returns {Promise} Returns a promise with the value.
     */
    Globalization.stringToNumber = function (stringToConvert, options) { return; };
    /**
     * Returns a pattern string to format and parse numbers according to the client's user preferences.
     * @param options Can be decimal, percent, or currency.
     * @returns {Promise} returns a promise with the value.
     */
    Globalization.getNumberPattern = function (options) { return; };
    /**
     * Returns a pattern string to format and parse currency values according to the client's user preferences and ISO 4217 currency code.
     * @param {string} currencyCode Currency Code.A
     * @returns {Promise} returns a promise with the value
     */
    Globalization.getCurrencyPattern = function (currencyCode) { return; };
    __decorate([
        plugin_1.Cordova()
    ], Globalization, "getPreferredLanguage", null);
    __decorate([
        plugin_1.Cordova()
    ], Globalization, "getLocaleName", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 2
        })
    ], Globalization, "dateToString", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 2
        })
    ], Globalization, "stringToDate", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], Globalization, "getDatePattern", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], Globalization, "getDateNames", null);
    __decorate([
        plugin_1.Cordova()
    ], Globalization, "isDayLightSavingsTime", null);
    __decorate([
        plugin_1.Cordova()
    ], Globalization, "getFirstDayOfWeek", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 2
        })
    ], Globalization, "numberToString", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 2
        })
    ], Globalization, "stringToNumber", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], Globalization, "getNumberPattern", null);
    __decorate([
        plugin_1.Cordova()
    ], Globalization, "getCurrencyPattern", null);
    Globalization = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-globalization',
            pluginRef: 'navigator.globalization',
            repo: 'https://github.com/apache/cordova-plugin-globalization'
        })
    ], Globalization);
    return Globalization;
}());
exports.Globalization = Globalization;
//# sourceMappingURL=globalization.js.map