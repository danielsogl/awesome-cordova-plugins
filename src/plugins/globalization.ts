import {Plugin, Cordova} from './plugin';

/**
 * @name Globalization
 * @description
 * @usage
 * ```js
 * import {Globalization} from 'ionic-native';
 *
 *
 *
 * ```
 */
@Plugin({
  plugin:  'cordova-plugin-globalization',
  pluginRef:  'navigator.globalization',
  repo:  'https: //github.com/apache/cordova-plugin-globalization'
})
export class Globalization {

  /**
   * Returns the BCP-47 compliant language identifier tag to the successCallback with a properties object as a parameter. That object should have a value property with a String value.
   * @return {Promise<{value: string}>}
   */
  @Cordova()
  static getPreferredLanguage():  Promise<{value:  string}> {return; }

  /**
   * Returns the BCP 47 compliant locale identifier string to the successCallback with a properties object as a parameter.
   * @return {Promise<{value: string}>}
   */
  @Cordova()
  static getLocaleName():  Promise<{value: string}> {return; }

  /**
   * Converts date to string
   * @param date
   * @param options
   * @return {Promise<{value: string}>}
   */
  @Cordova({
    successIndex:  1,
    errorIndex:  2
  })
  static dateToString(date:  Date, options:  {formatLength: string, selector: string}):  Promise<{value: string}> {return; }

  /**
   *
   * @param dateString
   * @param options
   */
  @Cordova({
    successIndex:  1,
    errorIndex:  2
  })
  static stringToDate(dateString: string, options: {formatLength: string, selector: string}):  Promise<{year:  number, month:  number, day: number, hour: number, minute: number, second: number, millisecond: number}> {return; }


  /**
   *
   * @param options
   */
  @Cordova({
    callbackOrder:  'reverse'
  })
  static getDatePattern(options: {formatLength: string, selector: string}):  Promise<{pattern: string}> {return; }


  /**
   *
   * @param options
   */
  @Cordova({
    callbackOrder:  'reverse'
  })
  static getDateNames(options: {type: string, item: string}):  Promise<{value: Array<string>}> {return; }

  /**
   * Check if day light saving is active
   * @param date
   */
  @Cordova()
  static isDayLightSavingsTime(date: Date):  Promise<{dst: string}> {return; }

  /**
   * Get first day of week
   */
  @Cordova()
  static getFirstDayOfWeek():  Promise<{value: string}> {return; }

  /**
   *
   * @param options
   */
  @Cordova({
    successIndex:  1,
    errorIndex:  2
  })
  static numberToString(options: {type: string}):  Promise<{value: string}> {return; }

  /**
   *
   * @param stringToConvert
   * @param options
   */
  @Cordova({
    successIndex:  1,
    errorIndex:  2
  })
  static stringToNumber(stringToConvert: string, options: {type: string}): Promise<{value}> {return; }

  /**
   *
   * @param options
   */
  @Cordova({
    callbackOrder:  'reverse'
  })
  static getNumberPattern(options: {type: string}):  Promise<{pattern: string, symbol: string, fraction: number, rounding: number, positive: string, negative: string, decimal: string, grouping: string}> {return; }

  /**
   *
   * @param currencyCode
   */
  @Cordova()
  static getCurrencyPattern(currencyCode: string):  Promise<{pattern: string, code: string, fraction: number, rounding: number, decimal: number, grouping: string}> {return; }

}