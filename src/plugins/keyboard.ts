import {Cordova, Plugin} from './plugin';
import {Observable} from 'rxjs/Observable';

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
  static hideKeyboardAccessoryBar(hide: boolean): void {
    console.log('hideKeyboardAccessoryBar method has been removed temporarily.');
  }

  /**
   * Force keyboard to be shown.
   */
  @Cordova({
    sync: true,
    platforms: ['Android', 'BlackBerry 10', 'Windows']
  })
  static show(): void {}

  /**
   * Close the keyboard if open.
   */
  @Cordova({
    sync: true,
    platforms: ['iOS', 'Android', 'BlackBerry 10', 'Windows']
  })
  static close(): void {}

  /**
   * Prevents the native UIScrollView from moving when an input is focused.
   * @param disable
   */
  @Cordova({
    sync: true,
    platforms: ['iOS', 'Windows']
  })
  static disableScroll(disable: boolean): void {}

  /**
   * Creates an observable that notifies you when the keyboard is shown. Unsubscribe to observable to cancel event watch.
   */
  @Cordova({
    eventObservable: true,
    event: 'native.keyboardshow',
    platforms: ['iOS', 'Android', 'BlackBerry 10', 'Windows']
  })
  static onKeyboardShow(): Observable<any> {return; }

  /**
   * Creates an observable that notifies you when the keyboard is hidden. Unsubscribe to observable to cancel event watch.
   */
  @Cordova({
    eventObservable: true,
    event: 'native.keyboardhide',
    platforms: ['iOS', 'Android', 'BlackBerry 10', 'Windows']
  })
  static onKeyboardHide(): Observable<any> {return; }

}
