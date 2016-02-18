/**
 * The ActionSheet plugin shows a native list of options the user can choose from.
 *
 * Requires Cordova plugin: `cordova-plugin-actionsheet`. For more info, please see the [ActionSheet plugin docs](https://github.com/phonegap/phonegap-plugin-barcodescanner).
 *
 * @usage
 *
 * ```
 * import {ActionSheet} from 'ionic-native';
 *
 * let buttonLabels = ['Share via Facebook', 'Share via Twitter'];
 * ActionSheet.show({
 *   'title': 'What do you want with this image?',
 *   'buttonLabels': buttonLabels,
 *   'addCancelButtonWithLabel': 'Cancel',
 *   'addDestructiveButtonWithLabel' : 'Delete'
 * }).then(buttonIndex => {
 *   console.log('Button pressed: ' + buttonLabels[buttonIndex - 1]);
 * });
 * ```
 *
 */
export declare class ActionSheet {
    /**
     * Show the ActionSheet.
     * @param {options} options
     *   `buttonLabels`: string[]
     *   `title`: string
     *   `androidTheme` (Android only): number 1-5
     *   `androidEnableCancelButton` (Android only): boolean, default false
     *   `winphoneEnableCancelButton` (WP only): boolean, default false
     *   `addCancelButtonWithLabel`: string
     *   `addDestructiveButtonWithLabel`: string
     *   `position`: [x, y] (iPad pass in [x, y] coords of popover)
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
     * Hide the ActionSheet.
     */
    static hide(): Promise<any>;
}
