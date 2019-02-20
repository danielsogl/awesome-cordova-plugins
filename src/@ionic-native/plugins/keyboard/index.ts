import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

/**
 * @name Keyboard
 * @description
 * Keyboard plugin for Cordova.
 *
 * Requires Cordova plugin: `cordova-plugin-ionic-keyboard`. For more info, please see the [Keyboard plugin docs](https://github.com/ionic-team/cordova-plugin-ionic-keyboard).
 *
 * @usage
 * ```typescript
 * import { Keyboard } from '@ionic-native/keyboard/ngx';
 *
 * constructor(private keyboard: Keyboard) { }
 *
 * ...
 *
 * this.keyboard.show();
 *
 * this.keyboard.hide();
 *
 * ```
 */
@Plugin({
  pluginName: 'Keyboard',
  plugin: 'cordova-plugin-ionic-keyboard',
  pluginRef: 'window.Keyboard',
  repo: 'https://github.com/ionic-team/cordova-plugin-ionic-keyboard',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class Keyboard extends IonicNativePlugin {
  /**
   * Check keyboard status visible or not.
   * @returns {boolean}
   */
  @CordovaProperty()
  isVisible: boolean;

  /**
   * Hide the keyboard accessory bar with the next, previous and done buttons.
   * @param hide {boolean}
   */
  @Cordova({ sync: true })
  hideFormAccessoryBar(hide: boolean): void {}

  /**
   * Hide the keyboard if shown.
   */
  @Cordova({
    sync: true,
    platforms: ['iOS', 'Android']
  })
  hide(): void {}

  /**
   * Force keyboard to be shown.
   */
  @Cordova({
    sync: true,
    platforms: ['Android']
  })
  show(): void {}

  /**
   * Programatically set the resize mode
   * @param mode {string}
   */
  @Cordova({
    sync: true,
    platforms: ['iOS']
  })
  setResizeMode(mode: string): void {}

  /**
   * Creates an observable that notifies you when the keyboard is shown. Unsubscribe to observable to cancel event watch.
   * @returns {Observable<any>}
   */
  @Cordova({
    eventObservable: true,
    event: 'native.keyboardshow',
    platforms: ['iOS', 'Android']
  })
  onKeyboardShow(): Observable<any> {
    return;
  }

  /**
   * Creates an observable that notifies you when the keyboard will show. Unsubscribe to observable to cancel event watch.
   * @returns {Observable<any>}
   */
  @Cordova({
    eventObservable: true,
    event: 'keyboardWillShow',
    platforms: ['iOS', 'Android']
  })
  onKeyboardWillShow(): Observable<any> {
    return;
  }

  /**
   * Creates an observable that notifies you when the keyboard is hidden. Unsubscribe to observable to cancel event watch.
   * @returns {Observable<any>}
   */
  @Cordova({
    eventObservable: true,
    event: 'native.keyboardhide',
    platforms: ['iOS', 'Android']
  })
  onKeyboardHide(): Observable<any> {
    return;
  }

  /**
   * Creates an observable that notifies you when the keyboard will hide. Unsubscribe to observable to cancel event watch.
   * @returns {Observable<any>}
   */
  @Cordova({
    eventObservable: true,
    event: 'keyboardWillHide',
    platforms: ['iOS', 'Android']
  })
  onKeyboardWillHide(): Observable<any> {
    return;
  }
}
