export interface DatePickerOptions {
    /**
     * Platforms: iOS, Android, Windows
     * The mode of the date picker
     * Values: date | time | datetime
     */
    mode: string;
    /**
     * Platforms: iOS, Android, Windows
     * Selected date
     */
    date: Date | string | number;
    /**
     * Platforms: iOS, Android, Windows
     * Minimum date
     * Type: Date | empty String
     * Default: empty String
     */
    minDate?: Date | string | number;
    /**
     * Platforms?: iOS, Android, Windows
     * Maximum date
     * Type?: Date | empty String
     * Default?: empty String
     */
    maxDate?: Date | string | number;
    /**
     * Platforms?: Android
     * Label for the dialog title. If empty, uses android default (Set date/Set time).
     * Type?: String
     * Default?: empty String
     */
    titleText?: string;
    /**
     * Platforms?: Android
     * Label of BUTTON_POSITIVE (done button) on Android
     */
    okText?: string;
    cancelText?: string;
    todayText?: string;
    nowText?: string;
    is24Hour?: boolean;
    androidTheme?: number;
    allowOldDate?: boolean;
    allowFutureDates?: boolean;
    doneButtonLabel?: string;
    doneButtonColor?: string;
    cancelButtonLabel?: string;
    cancelButtonColor?: string;
    x?: number;
    y?: number;
    minuteInterval?: number;
    popoverArrowDirection?: string;
    locale?: string;
}
/**
 * @name Date Picker
 * @description
 * The DatePicker plugin allows the user to fetch date or time using native dialogs.
 *
 * Platforms supported: iOS, Android, Windows
 *
 * Requires Cordova plugin: `cordova-plugin-datepicker`. For more info, please see the [DatePicker plugin docs](https://github.com/VitaliiBlagodir/cordova-plugin-datepicker).
 *
 * @usage
 * ```typescript
 * import { DatePicker } from 'ionic-native';
 *
 *
 * DatePicker.show({
 *   date: new Date(),
 *   mode: 'date'
 * }).then(
 *   date => console.log('Got date: ', date),
 *   err => console.log('Error occurred while getting date: ', err)
 * );
 * ```
 *
 */
export declare class DatePicker {
    /**
     * Shows the date and/or time picker dialog(s)
     * @param {DatePickerOptions} options Options for the date picker.
     * @returns {Promise<Date>} Returns a promise that resolves with the picked date and/or time, or rejects with an error.
     */
    static show(options: DatePickerOptions): Promise<Date>;
}
