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
   * Close the keyboard if open
   */
  @Cordova({
    sync: true
  })
  static close() : void {}

  @Cordova({
    sync: true
  })
  static disableScroll(disable : boolean) : void {}

  @Cordova({
    sync: true
  })
  static show() : void {}

  // TODO add event listener

}