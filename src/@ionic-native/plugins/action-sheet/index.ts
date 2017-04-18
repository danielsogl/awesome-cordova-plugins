import { Injectable } from '@angular/core';
import { Cordova, Plugin, CordovaProperty } from '@ionic-native/core';

export interface ActionSheetOptions {

  /**
   * The labels for the buttons. Uses the index x
   */
  buttonLabels: string[];

  /**
   * The title for the actionsheet
   */
  title?: string;

  /**
   * The subtitle for the actionsheet (IOS only)
   */
  subtitle?: string;

  /**
   * Theme to be used on Android
   */
  androidTheme?: number;

  /**
   * Enable a cancel on Android
   */
  androidEnableCancelButton?: boolean;

  /**
   * Enable a cancel on Windows Phone
   */
  winphoneEnableCancelButton?: boolean;

  /**
   * Add a cancel button with text
   */
  addCancelButtonWithLabel?: string;

  /**
   * Add a destructive button with text
   */
  addDestructiveButtonWithLabel?: string;

  /**
   * On an iPad, set the X,Y position
   */
  position?: number[];

  /**
   * Choose if destructive button will be the last
   */
  destructiveButtonLast: boolean;
}

/**
 * @name Action Sheet
 * @description
 * The ActionSheet plugin shows a native list of options the user can choose from.
 *
 * Requires Cordova plugin: `cordova-plugin-actionsheet`. For more info, please see the [ActionSheet plugin docs](https://github.com/EddyVerbruggen/cordova-plugin-actionsheet).
 *
 * @usage
 * ```typescript
 * import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';
 *
 * constructor(private actionSheet: ActionSheet) { }
 *
 * ...
 *
 *
 * let buttonLabels = ['Share via Facebook', 'Share via Twitter'];
 *
 * const options: ActionSheetOptions = {
 *   title: 'What do you want with this image?',
 *   subtitle: 'Choose an action'
 *   buttonLabels: buttonLabels,
 *   addCancelButtonWithLabel: 'Cancel',
 *   addDestructiveButtonWithLabel: 'Delete',
 *   androidTheme: this.actionSheet.ANDROID_THEMES.THEME_HOLO_DARK,
 *   destructiveButtonLast: true
 * };
 *
 * this.actionSheet.show(options).then((buttonIndex: number) => {
 *   console.log('Button pressed: ' + buttonIndex);
 * });
 * ```
 * @interfaces
 * ActionSheetOptions
 */
@Plugin({
  pluginName: 'ActionSheet',
  plugin: 'cordova-plugin-actionsheet',
  pluginRef: 'plugins.actionsheet',
  repo: 'https://github.com/EddyVerbruggen/cordova-plugin-actionsheet',
  platforms: ['Android', 'iOS', 'Windows Phone 8', 'Browser']
})
@Injectable()
export class ActionSheet {

  @CordovaProperty
  ANDROID_THEMES: {
    THEME_TRADITIONAL: number;
    THEME_HOLO_DARK: number;
    THEME_HOLO_LIGHT: number;
    THEME_DEVICE_DEFAULT_DARK: number;
    THEME_DEVICE_DEFAULT_LIGHT: number;
  };

  /**
   * Show a native ActionSheet component. See below for options.
   * @param options {ActionSheetOptions} Options See table below
   * @returns {Promise<any>} Returns a Promise that resolves with the index of the
   *   button pressed (1 based, so 1, 2, 3, etc.)
   */
  @Cordova()
  show(options?: ActionSheetOptions): Promise<any> { return; }


  /**
   * Progamtically hide the native ActionSheet
   * @returns {Promise<any>} Returns a Promise that resolves when the actionsheet is closed
   */
  @Cordova()
  hide(options?: any): Promise<any> { return; }
}
