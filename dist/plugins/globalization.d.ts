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
export declare class Globalization {
    /**
     * Returns the BCP-47 compliant language identifier tag to the successCallback with a properties object as a parameter. That object should have a value property with a String value.
     * @return {Promise<{value: string}>}
     */
    static getPreferredLanguage(): Promise<{
        value: string;
    }>;
    /**
     * Returns the BCP 47 compliant locale identifier string to the successCallback with a properties object as a parameter.
     * @return {Promise<{value: string}>}
     */
    static getLocaleName(): Promise<{
        value: string;
    }>;
    /**
     * Converts date to string
     * @param {Date} date Date you wish to convert
     * @param options Options for the converted date. Length, selector.
     * @return {Promise<{value: string}>} Returns a promise when the date has been converted.
     */
    static dateToString(date: Date, options: {
        formatLength: string;
        selector: string;
    }): Promise<{
        value: string;
    }>;
    /**
     * Parses a date formatted as a string, according to the client's user preferences and calendar using the time zone of the client, and returns the corresponding date object.
     * @param {string} dateString Date as a string to be converted
     * @param options Options for the converted date. Length, selector.
     * @return {Promise<{value: string}>} Returns a promise when the date has been converted.
     */
    static stringToDate(dateString: string, options: {
        formatLength: string;
        selector: string;
    }): Promise<{
        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
        second: number;
        millisecond: number;
    }>;
    /**
     * Returns a pattern string to format and parse dates according to the client's user preferences.
     * @param options Object with the format length and selector
     * @return {Promise<{value: string}>} Returns a promise.
     */
    static getDatePattern(options: {
        formatLength: string;
        selector: string;
    }): Promise<{
        pattern: string;
    }>;
    /**
     * Returns an array of the names of the months or days of the week, depending on the client's user preferences and calendar.
     * @param options Object with type (narrow or wide) and item (month or days).
     * @return {Promise<{value: string}>} Returns a promise.
     */
    static getDateNames(options: {
        type: string;
        item: string;
    }): Promise<{
        value: Array<string>;
    }>;
    /**
     * Indicates whether daylight savings time is in effect for a given date using the client's time zone and calendar.
     * @param {data} date Date to process
     * @returns {Promise<dst>} reutrns a promise with the value
     */
    static isDayLightSavingsTime(date: Date): Promise<{
        dst: string;
    }>;
    /**
     * Returns the first day of the week according to the client's user preferences and calendar.
     * @returns {Promise<value>} reutrns a promise with the value
     */
    static getFirstDayOfWeek(): Promise<{
        value: string;
    }>;
    /**
     * Returns a number formatted as a string according to the client's user preferences.
     * @param options
     */
    static numberToString(options: {
        type: string;
    }): Promise<{
        value: string;
    }>;
    /**
     *
     * @param {string} stringToConvert String you want to conver to a number
     * @param options  The type of number you want to return. Can be decimal, percent, or currency.
     * @returns {Promise} Returns a promise with the value.
     */
    static stringToNumber(stringToConvert: string, options: {
        type: string;
    }): Promise<{
        value: number | string;
    }>;
    /**
     * Returns a pattern string to format and parse numbers according to the client's user preferences.
     * @param options Can be decimal, percent, or currency.
     * @returns {Promise} returns a promise with the value.
     */
    static getNumberPattern(options: {
        type: string;
    }): Promise<{
        pattern: string;
        symbol: string;
        fraction: number;
        rounding: number;
        positive: string;
        negative: string;
        decimal: string;
        grouping: string;
    }>;
    /**
     * Returns a pattern string to format and parse currency values according to the client's user preferences and ISO 4217 currency code.
     * @param {string} currencyCode Currency Code.A
     * @returns {Promise} returns a promise with the value
     */
    static getCurrencyPattern(currencyCode: string): Promise<{
        pattern: string;
        code: string;
        fraction: number;
        rounding: number;
        decimal: number;
        grouping: string;
    }>;
}
