import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, CordovaProperty, Plugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

export enum KeyboardStyle {
  Light = 'light',
  Dark = 'dark',
}

export enum KeyboardResizeMode {
  Native = 'native',
  Ionic = 'ionic',
  Body = 'body',
  None = 'none',
}

/**
 * @name Keyboard
 * @premier keyboard
 * @capacitorincompatible true
 * @description
 * Keyboard plugin for Cordova.
 *
 * Requires Cordova plugin: `cordova-plugin-ionic-keyboard`. For more info, please see the [Keyboard plugin docs](https://github.com/ionic-team/cordova-plugin-ionic-keyboard).
 * @usage
 * ```typescript
 * import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';
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
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Keyboard extends AwesomeCordovaNativePlugin {
  /**
   * Check keyboard status visible or not.
   *
   * @returns {boolean}
   */
  @CordovaProperty()
  isVisible: boolean;

  /**
   * Hide the keyboard accessory bar with the next, previous and done buttons.
   *
   * @param hide {boolean}
   */
  @Cordova({
    sync: true,
    platforms: ['iOS'],
  })
  hideFormAccessoryBar(hide: boolean): void {}

  /**
   * Hide the keyboard if shown.
   */
  @Cordova({
    sync: true,
    platforms: ['iOS', 'Android'],
  })
  hide(): void {}

  /**
   * Force keyboard to be shown.
   */
  @Cordova({
    sync: true,
    platforms: ['Android'],
  })
  show(): void {}

  /**
   * Programatically set the resize mode
   *
   * @param mode {string}
   */
  @Cordova({
    sync: true,
    platforms: ['iOS'],
  })
  setResizeMode(mode: KeyboardResizeMode): void {}

  /**
   * Programatically set Keyboard style
   *
   * @param mode {string}
   * @param style
   */
  @Cordova({
    sync: true,
    platforms: ['iOS'],
  })
  setKeyboardStyle(style: KeyboardStyle): void {}

  /**
   * Programatically enable or disable the WebView scroll
   *
   * @param mode {string}
   * @param disable
   */
  @Cordova({
    sync: true,
    platforms: ['iOS'],
  })
  disableScroll(disable: boolean): void {}

  /**
   * Creates an observable that notifies you when the keyboard is shown. Unsubscribe to observable to cancel event watch.
   *
   * @returns {Observable<any>}
   */
  @Cordova({
    eventObservable: true,
    event: 'native.keyboardshow',
    platforms: ['iOS', 'Android'],
  })
  onKeyboardShow(): Observable<any> {
    return;
  }

  /**
   * Creates an observable that notifies you when the keyboard will show. Unsubscribe to observable to cancel event watch.
   *
   * @returns {Observable<any>}
   */
  @Cordova({
    eventObservable: true,
    event: 'keyboardWillShow',
    platforms: ['iOS', 'Android'],
  })
  onKeyboardWillShow(): Observable<any> {
    return;
  }

  /**
   * Creates an observable that notifies you when the keyboard did show. Unsubscribe to observable to cancel event watch.
   *
   * @returns {Observable<any>}
   */
  @Cordova({
    eventObservable: true,
    event: 'keyboardDidShow',
    platforms: ['iOS', 'Android'],
  })
  onKeyboardDidShow(): Observable<any> {
    return;
  }

  /**
   * Creates an observable that notifies you when the keyboard is hidden. Unsubscribe to observable to cancel event watch.
   *
   * @returns {Observable<any>}
   */
  @Cordova({
    eventObservable: true,
    event: 'native.keyboardhide',
    platforms: ['iOS', 'Android'],
  })
  onKeyboardHide(): Observable<any> {
    return;
  }

  /**
   * Creates an observable that notifies you when the keyboard will hide. Unsubscribe to observable to cancel event watch.
   *
   * @returns {Observable<any>}
   */
  @Cordova({
    eventObservable: true,
    event: 'keyboardWillHide',
    platforms: ['iOS', 'Android'],
  })
  onKeyboardWillHide(): Observable<any> {
    return;
  }

  /**
   * Creates an observable that notifies you when the keyboard did hide. Unsubscribe to observable to cancel event watch.
   *
   * @returns {Observable<any>}
   */
  @Cordova({
    eventObservable: true,
    event: 'keyboardDidHide',
    platforms: ['iOS', 'Android'],
  })
  onKeyboardDidHide(): Observable<any> {
    return;
  }
}
