import {Cordova, Plugin} from './plugin'
import {Observable} from "rxjs/Observable";

/**
 * @name Keyboard
 * @description
 * @usage
 * ```js
 * import {Keyboard} from 'ionic-native';
 *
 *
 *
 * ```
 */
@Plugin({
  plugin: 'ionic-plugin-keyboard',
  pluginRef: 'cordova.plugins.Keyboard',
  repo: 'https://github.com/driftyco/ionic-plugin-keyboard'
})
export class Keyboard {

  /**
   * Hide the keyboard accessory bar with the next, previous and done buttons.
   * @param hide {boolean}
   */
  //@Cordova({
  //  sync: true
  //})
  static hideKeyboardAccessoryBar(hide : boolean) : void {
    console.log("hideKeyboardAccessoryBar method has been removed temporarily.")
  }

  /**
   * Force keyboard to be shown.
   * @platforms ['Android','BlackBerry 10','Windows']
   */
  @Cordova({
    sync: true
  })
  static show() : void {}

  /**
   * Close the keyboard if open
   * @platforms ['iOS','Android','BlackBerry 10','Windows']
   */
  @Cordova({
    sync: true
  })
  static close() : void {}

  /**
   * Prevents the native UIScrollView from moving when an input is focused.
   * @platforms ['iOS','Windows']
   * @param disable
   */
  @Cordova({
    sync: true
  })
  static disableScroll(disable : boolean) : void {}



}