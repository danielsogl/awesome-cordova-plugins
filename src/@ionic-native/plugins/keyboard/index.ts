import { Injectable } from '@angular/core';
import { Cordova, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';


/**
 * @name Keyboard
 * @description
 * @usage
 * ```typescript
 * import { Keyboard } from '@ionic-native/keyboard';
 *
 * constructor(private keyboard: Keyboard) { }
 *
 * ...
 *
 * this.keyboard.show();
 *
 * this.keyboard.close();
 *
 * ```
 */
@Plugin({
  pluginName: 'Keyboard',
  plugin: 'ionic-plugin-keyboard',
  pluginRef: 'cordova.plugins.Keyboard',
  repo: 'https://github.com/driftyco/ionic-plugin-keyboard',
  platforms: ['Android', 'BlackBerry 10', 'iOS', 'Windows']
})
@Injectable()
export class Keyboard {

  /**
   * Hide the keyboard accessory bar with the next, previous and done buttons.
   * @param hide {boolean}
   */
   @Cordova({sync: true})
  hideKeyboardAccessoryBar(hide: boolean): void { }

  /**
   * Force keyboard to be shown.
   */
  @Cordova({
    sync: true,
    platforms: ['Android', 'BlackBerry 10', 'Windows']
  })
  show(): void { }

  /**
   * Close the keyboard if open.
   */
  @Cordova({
    sync: true,
    platforms: ['iOS', 'Android', 'BlackBerry 10', 'Windows']
  })
  close(): void { }

  /**
   * Prevents the native UIScrollView from moving when an input is focused.
   * @param disable
   */
  @Cordova({
    sync: true,
    platforms: ['iOS', 'Windows']
  })
  disableScroll(disable: boolean): void { }

  /**
   * Creates an observable that notifies you when the keyboard is shown. Unsubscribe to observable to cancel event watch.
   * @returns {Observable<any>}
   */
  @Cordova({
    eventObservable: true,
    event: 'native.keyboardshow',
    platforms: ['iOS', 'Android', 'BlackBerry 10', 'Windows']
  })
  onKeyboardShow(): Observable<any> { return; }

  /**
   * Creates an observable that notifies you when the keyboard is hidden. Unsubscribe to observable to cancel event watch.
   * @returns {Observable<any>}
   */
  @Cordova({
    eventObservable: true,
    event: 'native.keyboardhide',
    platforms: ['iOS', 'Android', 'BlackBerry 10', 'Windows']
  })
  onKeyboardHide(): Observable<any> { return; }

}
