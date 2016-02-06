import {Plugin, Cordova} from './plugin';

/**
 * The ActionSheet plugin shows a native list of options the user can choose from.
 */
@Plugin({
  name: 'ActionSheet',
  plugin: 'cordova-plugin-actionsheet',
  pluginRef: 'plugins.actionsheet',
  repo: 'https://github.com/EddyVerbruggen/cordova-plugin-actionsheet'
})
export class ActionSheet {

  /**
   * Show the ActionSheet.
   * @param {options}
   * Available options:
   *   buttonLabels: string[]
   *   title: string
   *   androidTheme (Android only): number 1-5
   *   androidEnableCancelButton (Android only): boolean, default false
   *   winphoneEnableCancelButton (WP only): boolean, default false
   *   addCancelButtonWithLabel: string
   *   addDestructiveButtonWithLabel: string
   *   position: [x, y] (iPad pass in [x, y] coords of popover)
   * @returns {Promise} returns a promise that resolves with the index of the
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
  }) {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  };


  /**
   * Hide the ActionSheet.
   */
  @Cordova()
  static hide() {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  };
}
