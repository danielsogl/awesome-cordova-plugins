import {Plugin, Cordova} from './plugin';

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
   * @returns {Promise} returns a promise that resolves with a number indicating
   *   which button was pressed (1 for first, 2 for second).
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
  }){
    // This returned Promise is replaced by one from the @Cordova decorator,
    // but since there's no way for TypeScript to know the return type from a
    // decorator we provide it. See https://github.com/Microsoft/TypeScript/issues/4881.
    return new Promise<any>((s, e) => {});
  };


  /**
   * Hide the ActionSheet.
   * @param {options}
   */
  @Cordova()
  static hide(options:any){
    // This returned Promise is replaced by one from the @Cordova decorator,
    // but since there's no way for TypeScript to know the return type from a
    // decorator we provide it. See https://github.com/Microsoft/TypeScript/issues/4881.
    return new Promise<any>((s, e) => {});
  };
}
