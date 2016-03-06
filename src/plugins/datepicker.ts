import {Plugin, Cordova} from './plugin';

/**
 * The DatePicker plugin allows the user to fetch date or time using native dialogs.
 *
 * Platforms supported: iOS, Android, Windows
 *
 * Requires Cordova plugin: `cordova-plugin-datepicker`. For more info, please see the [Datepicker plugin docs](https://github.com/VitaliiBlagodir/cordova-plugin-datepicker).
 *
 * Install the plugin by running the following command:
 * ```shell
 * ionic plugin add cordova-plugin-datepicker
 * ```
 *
 * @usage
 * ```js
 * DatePicker.
 * ```
 *
 */
@Plugin({
  plugin: 'cordova-plugin-datepicker',
  pluginRef: 'plugins.datePicker'
})
export class DatePicker {

  /**
   * Shows the date and/or time picker dialog(s)
   * @param options
   * @returns {Promise<Date>} Returns a promise that resolves with the picked date and/or time, or rejects with an error.
   */
  @Cordova()
  static show(options?: {
    mode?: string,
    date?: Date,
    minDate?: Date,
    maxDate?: Date,
    titleText?: string,
    okText?: string,
    cancelText?: string,
    todayText?: string,
    nowText?: string,
    is24Hour?: boolean,
    androidTheme?: number,
    allowOldDate?: boolean,
    allowFutureDates?: boolean,
    doneButtonLabel?: string,
    doneButtonColor?: string,
    cancelButtonLabel?: string,
    cancelButtonColor?: string,
    x?: number,
    y?: number,
    minuteInterval?: number,
    popoverArrowDirection?: string,
    locale?: string
  }): Promise<Date> {
    return new Promise<Date>((res, rej) => {});
  }

}