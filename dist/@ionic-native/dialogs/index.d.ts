import { IonicNativePlugin } from '@ionic-native/core';
export interface DialogsPromptCallback {
    /**
     * The index of the pressed button. (Number) Note that the index uses one-based indexing, so the value is 1, 2, 3, etc.
     */
    buttonIndex: number;
    /**
     * The text entered in the prompt dialog box. (String)
     */
    input1: string;
}
/**
 * @name Dialogs
 * @description
 * This plugin gives you ability to access and customize the device native dialogs.
 *
 * Requires Cordova plugin: `cordova-plugin-dialogs`. For more info, please see the [Dialogs plugin docs](https://github.com/apache/cordova-plugin-dialogs).
 *
 * @usage
 * ```typescript
 * import { Dialogs } from '@ionic-native/dialogs';
 *
 * constructor(private dialogs: Dialogs) { }
 *
 * ...
 *
 * this.dialogs.alert('Hello world')
 *   .then(() => console.log('Dialog dismissed'))
 *   .catch(e => console.log('Error displaying dialog', e));
 *
 *
 * ```
 * @interfaces
 * DialogsPromptCallback
 */
export declare class Dialogs extends IonicNativePlugin {
    /**
     * Shows a custom alert or dialog box.
     * @param {string} message Dialog message.
     * @param {string} title Dialog title. (Optional, defaults to Alert)
     * @param {string} buttonName Button name. (Optional, defaults to OK)
     * @returns {Promise<any>} Returns a blank promise once the user has dismissed the alert.
     */
    alert(message: string, title?: string, buttonName?: string): Promise<any>;
    /**
     * Displays a customizable confirmation dialog box.
     * @param {string} message Dialog message.
     * @param {string} title Dialog title. (Optional, defaults to Confirm)
     * @param {Array<string>} buttonLabels Array of strings specifying button labels. (Optional, defaults to [OK,Cancel])
     * @returns {Promise<number>} Returns a promise that resolves the button index that was clicked, or 0 if the user has dismissed the dialog by clicking outside the dialog box. Note that the index use one-based indexing.
     */
    confirm(message: string, title?: string, buttonLabels?: string[]): Promise<number>;
    /**
     * Displays a native dialog box that is more customizable than the browser's prompt function.
     * @param {string} message Dialog message.
     * @param {string} title Dialog title. (Optional, defaults to Prompt)
     * @param {Array<string>} buttonLabels  Array of strings specifying button labels. (Optional, defaults to ["OK","Cancel"])
     * @param {string} defaultText Default textbox input value.  (Optional, Default: empty string)
     * @returns {Promise<DialogsPromptCallback>} Returns a promise that resolves an object with the button index clicked and the text entered
     */
    prompt(message?: string, title?: string, buttonLabels?: string[], defaultText?: string): Promise<DialogsPromptCallback>;
    /**
     * The device plays a beep sound.
     * @param {numbers} times The number of times to repeat the beep.
     */
    beep(times: number): void;
}
