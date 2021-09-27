import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

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
 * @premier dialogs
 * @description
 * This plugin gives you ability to access and customize the device native dialogs.
 *
 * Requires Cordova plugin: `cordova-plugin-dialogs`. For more info, please see the [Dialogs plugin docs](https://github.com/apache/cordova-plugin-dialogs).
 * @usage
 * ```typescript
 * import { Dialogs } from '@awesome-cordova-plugins/dialogs/ngx';
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
@Plugin({
  pluginName: 'Dialogs',
  plugin: 'cordova-plugin-dialogs',
  pluginRef: 'navigator.notification',
  repo: 'https://github.com/apache/cordova-plugin-dialogs',
  platforms: ['Amazon Fire OS', 'Android', 'Browser', 'iOS', 'Windows'],
})
@Injectable()
export class Dialogs extends AwesomeCordovaNativePlugin {
  /**
   * Shows a custom alert or dialog box.
   *
   * @param {string} message Dialog message.
   * @param {string} [title] Dialog title. (Optional, defaults to Alert)
   * @param {string} [buttonName] Button name. (Optional, defaults to OK)
   * @returns {Promise<any>} Returns a blank promise once the user has dismissed the alert.
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 4,
  })
  alert(message: string, title?: string, buttonName?: string): Promise<any> {
    return;
  }

  /**
   * Displays a customizable confirmation dialog box.
   *
   * @param {string} message Dialog message.
   * @param {string} [title] Dialog title. (Optional, defaults to Confirm)
   * @param {string[]} [buttonLabels] Array of strings specifying button labels. (Optional, defaults to [OK,Cancel])
   * @returns {Promise<number>} Returns a promise that resolves the button index that was clicked, or 0 if the user has dismissed the dialog by clicking outside the dialog box. Note that the index use one-based indexing.
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 4,
  })
  confirm(message: string, title?: string, buttonLabels?: string[]): Promise<number> {
    return;
  }

  /**
   * Displays a native dialog box that is more customizable than the browser's prompt function.
   *
   * @param {string} [message] Dialog message.
   * @param {string} [title] Dialog title. (Optional, defaults to Prompt)
   * @param {string[]} [buttonLabels]  Array of strings specifying button labels. (Optional, defaults to ["OK","Cancel"])
   * @param {string} [defaultText] Default text box input value.  (Optional, Default: empty string)
   * @returns {Promise<DialogsPromptCallback>} Returns a promise that resolves an object with the button index clicked and the text entered
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 5,
  })
  prompt(
    message?: string,
    title?: string,
    buttonLabels?: string[],
    defaultText?: string
  ): Promise<DialogsPromptCallback> {
    return;
  }

  /**
   * The device plays a beep sound.
   *
   * @param {numbers} times The number of times to repeat the beep.
   */
  @Cordova({
    sync: true,
  })
  beep(times: number): void {}
}
