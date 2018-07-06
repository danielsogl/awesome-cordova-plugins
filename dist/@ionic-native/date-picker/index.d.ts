import { IonicNativePlugin } from '@ionic-native/core';
export interface DatePickerOptions {
    /**
     * The mode of the date picker
     * Values: date | time | datetime
     */
    mode: string;
    /**
     * Selected date
     */
    date: Date | string | number;
    /**
     * Minimum date
     * Default: empty String
     */
    minDate?: Date | string | number;
    /**
     * Maximum date
     * Default?: empty String
     */
    maxDate?: Date | string | number;
    /**
     * Label for the dialog title. If empty, uses android default (Set date/Set time).
     * Default?: empty String
     */
    titleText?: string;
    /**
     * Label of BUTTON_POSITIVE (done button) on Android
     */
    okText?: string;
    /**
     * Label of BUTTON_NEGATIVE (cancel button). If empty, uses android.R.string.cancel.
     */
    cancelText?: string;
    /**
     * Label of today button. If empty, doesn't show the option to select current date.
     */
    todayText?: string;
    /**
     * Label of now button. If empty, doesn't show the option to select current time.
     */
    nowText?: string;
    /**
     * Shows time dialog in 24 hours format.
     */
    is24Hour?: boolean;
    /**
     * Choose the Android theme for the picker. You can use the DatePicker.ANDROID_THEMES property.
     * Values: 1: THEME_TRADITIONAL | 2: THEME_HOLO_DARK | 3: THEME_HOLO_LIGHT | 4: THEME_DEVICE_DEFAULT_DARK | 5: THEME_DEVICE_DEFAULT_LIGHT
     */
    androidTheme?: number;
    /**
     * Shows or hide dates earlier then selected date.
     */
    allowOldDates?: boolean;
    /**
     * Shows or hide dates after selected date.
     */
    allowFutureDates?: boolean;
    /**
     * Label of done button.
     */
    doneButtonLabel?: string;
    /**
     * Hex color of done button.
     */
    doneButtonColor?: string;
    /**
     * Label of cancel button.
     */
    cancelButtonLabel?: string;
    /**
     * Hex color of cancel button.
     */
    cancelButtonColor?: string;
    /**
     * X position of date picker. The position is absolute to the root view of the application.
     */
    x?: number;
    /**
     * Y position of date picker. The position is absolute to the root view of the application.
     */
    y?: number;
    /**
     * Interval between options in the minute section of the date picker.
     */
    minuteInterval?: number;
    /**
     * Force the UIPopoverArrowDirection enum. The value any will revert to default UIPopoverArrowDirectionAny and let the app choose the proper direction itself.
     */
    popoverArrowDirection?: string;
    /**
     * Force locale for datePicker.
     */
    locale?: string;
}
/**
 * @name Date Picker
 * @description
 * The DatePicker plugin allows the user to fetch date or time using native dialogs.
 *
 * @usage
 * ```typescript
 * import { DatePicker } from '@ionic-native/date-picker';
 *
 * constructor(private datePicker: DatePicker) { }
 *
 *
 * ...
 *
 *
 * this.datePicker.show({
 *   date: new Date(),
 *   mode: 'date',
 *   androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
 * }).then(
 *   date => console.log('Got date: ', date),
 *   err => console.log('Error occurred while getting date: ', err)
 * );
 * ```
 * @interfaces
 * DatePickerOptions
 */
export declare class DatePicker extends IonicNativePlugin {
    /**
     * @hidden
     */
    ANDROID_THEMES: {
        THEME_TRADITIONAL: number;
        THEME_HOLO_DARK: number;
        THEME_HOLO_LIGHT: number;
        THEME_DEVICE_DEFAULT_DARK: number;
        THEME_DEVICE_DEFAULT_LIGHT: number;
    };
    /**
     * Shows the date and/or time picker dialog(s)
     * @param {DatePickerOptions} options Options for the date picker.
     * @returns {Promise<Date>} Returns a promise that resolves with the picked date and/or time, or rejects with an error.
     */
    show(options: DatePickerOptions): Promise<Date>;
}
