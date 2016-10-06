/**
 * @name Action Sheet
 * @description
 * The ActionSheet plugin shows a native list of options the user can choose from.
 *
 * Requires Cordova plugin: `cordova-plugin-actionsheet`. For more info, please see the [ActionSheet plugin docs](https://github.com/EddyVerbruggen/cordova-plugin-actionsheet).
 *
 * @usage
 * ```typescript
 * import { ActionSheet } from 'ionic-native';
 *
 *
 * let buttonLabels = ['Share via Facebook', 'Share via Twitter'];
 * ActionSheet.show({
 *   'title': 'What do you want with this image?',
 *   'buttonLabels': buttonLabels,
 *   'addCancelButtonWithLabel': 'Cancel',
 *   'addDestructiveButtonWithLabel' : 'Delete'
 * }).then((buttonIndex: number) => {
 *   console.log('Button pressed: ' + buttonIndex);
 * });
 * ```
 *
 * @advanced
 * ActionSheet options
 *
 * | Option                        | Type      | Description                                  |
 * |-------------------------------|-----------|----------------------------------------------|
 * | title                         |`string`   | The title for the actionsheet                |
 * | buttonLabels                  |`string[]` | the labels for the buttons. Uses the index x |
 * | androidTheme                  |`number`   | Theme to be used on Android                  |
 * | androidEnableCancelButton     |`boolean`  | Enable a cancel on Android                   |
 * | winphoneEnableCancelButton    |`boolean`  | Enable a cancel on Windows Phone             |
 * | addCancelButtonWithLabel      |`string`   | Add a cancel button with text                |
 * | addDestructiveButtonWithLabel |`string`   | Add a destructive button with text           |
 * | position                      |`number[]` | On an iPad, set the X,Y position             |
 *
 *
 */
export declare class ActionSheet {
    /**
     * Show a native ActionSheet component. See below for options.
     * @param {options} Options See table below
     * @returns {Promise} Returns a Promise that resolves with the index of the
     *   button pressed (1 based, so 1, 2, 3, etc.)
     */
    static show(options?: {
        buttonLabels: string[];
        title?: string;
        androidTheme?: number;
        androidEnableCancelButton?: boolean;
        winphoneEnableCancelButton?: boolean;
        addCancelButtonWithLabel?: string;
        addDestructiveButtonWithLabel?: string;
        position?: number[];
    }): Promise<any>;
    /**
     * Progamtically hide the native ActionSheet
     * @returns {Promise} Returns a Promise that resolves when the actionsheet is closed
     */
    static hide(options?: any): Promise<any>;
}
