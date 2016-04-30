import {Plugin, Cordova} from './plugin';

/**
 * @name Action Sheet
 * @description
 * The ActionSheet plugin shows a native list of options the user can choose from.
 *
 * Requires Cordova plugin: `cordova-plugin-actionsheet`. For more info, please see the [ActionSheet plugin docs](https://github.com/EddyVerbruggen/cordova-plugin-actionsheet).
 *
 * @usage
 * ```ts
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
@Plugin({
  plugin: 'cordova-plugin-actionsheet',
  pluginRef: 'plugins.actionsheet',
  repo: 'https://github.com/EddyVerbruggen/cordova-plugin-actionsheet',
  platforms: ['Android', 'iOS', 'Windows Phone 8']
})
export class ActionSheet {

  /**
   * Show the ActionSheet. The ActionSheet's options is an object with the following propterties.
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
   * @param {options} Options See table above
   * @returns {Promise} Returns a Promise that resolves with the index of the
   *   button pressed (1 based, so 1, 2, 3, etc.)
   */
  @Cordova()
  static show(options?: {
    buttonLabels: string[],
    title?: string,
    androidTheme?: number,
    androidEnableCancelButton?: boolean,
    winphoneEnableCancelButton?: boolean,
    addCancelButtonWithLabel?: string,
    addDestructiveButtonWithLabel?: string,
    position?: number[]
  }): Promise<any> { return; }


  /**
   * Hide the ActionSheet.
   */
  @Cordova()
  static hide(): Promise<any> { return; }
}
