import {Plugin, Cordova} from './plugin';

export interface datePickerOptions {
  /**
   * Platforms: iOS, Android, Windows
   * The mode of the date picker
   * Values: date | time | datetime
   */
  mode: string,

  /**
   * Platforms: iOS, Android, Windows
   * Selected date
   */
  date: Date,

  /**
   * Platforms: iOS, Android, Windows
   * Minimum date
   * Type: Date | empty String
   * Default: empty String
   */
  minDate: Date,

  /**
   * Platforms: iOS, Android, Windows
   * Maximum date
   * Type: Date | empty String
   * Default: empty String
   */
  maxDate: Date,

  /**
   * Platforms: Android
   * Label for the dialog title. If empty, uses android default (Set date/Set time).
   * Type: String
   * Default: empty String
   */
  titleText: string,

  /**
   * Platforms: Android
   * Label of BUTTON_POSITIVE (done button) on Android
   */
  okText: string,

  // TODO complete documentation here, and copy params & docs to main plugin docs
  cancelText: string,
  todayText: string,
  nowText: string,
  is24Hour: boolean,
  androidTheme: number,
  allowOldDate: boolean,
  allowFutureDates: boolean,
  doneButtonLabel: string,
  doneButtonColor: string,
  cancelButtonLabel: string,
  cancelButtonColor: string,
  x: number,
  y: number,
  minuteInterval: number,
  popoverArrowDirection: string,
  locale: string
}

/**
 * The DatePicker plugin allows the user to fetch date or time using native dialogs.
 *
 * Platforms supported: iOS, Android, Windows
 *
 * Requires Cordova plugin: `cordova-plugin-datepicker`. For more info, please see the [DatePicker plugin docs](https://github.com/VitaliiBlagodir/cordova-plugin-datepicker).
 *
 * Install the plugin by running the following command:
 * ```shell
 * cordova plugin add https://github.com/VitaliiBlagodir/cordova-plugin-datepicker.git
 * ```
 *
 * @usage
 * ```js
 * DatePicker.show({
 *   date: new Date(),
 *   mode: 'date'
 * }).then(
 *   date => console.log("Got date: ", date),
 *   err => console.log("Error occurred while getting date:", err)
 * );
 * ```
 *
 */
@Plugin({
  plugin: 'https://github.com/VitaliiBlagodir/cordova-plugin-datepicker.git',
  pluginRef: 'datePicker'
})
export class DatePicker {

  /**
   * Shows the date and/or time picker dialog(s)
   * @param options
   * @returns {Promise<Date>} Returns a promise that resolves with the picked date and/or time, or rejects with an error.
   */
  @Cordova()
  static show(options: datePickerOptions): Promise<Date> {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<Date>((res, rej) => {});
  }

}