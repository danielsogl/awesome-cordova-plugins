import {Plugin, Cordova} from './plugin';
import {Observable} from 'rxjs/Observable';

export interface ToastOptions {
  message?: string;
  duration?: string;
  position?: string;
  addPixelsY?: number;
}
/**
 * This plugin allows you to show a native Toast (a little text popup) on iOS, Android and WP8. It's great for showing a non intrusive native notification which is guaranteed always in the viewport of the browser.
 *
 * Requires Cordova plugin: `cordova-plugin-x-toast`. For more info, please see the [Toast plugin docs](https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin).
 */
@Plugin({
  plugin: 'cordova-plugin-x-toast',
  pluginRef: 'plugins.toast',
  repo: 'https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin'
})
export class Toast {

  /**
   * Show a native toast for the given duration at the specified position.
   *
   * @param {string} message  The message to display.
   * @param {string} duration  Duration to show the toast, either 'short' or 'long'.
   * @param {string} position  Where to position the toast, either 'top', 'center', or 'bottom'.
   * @return {Observable}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
   */
  @Cordova({
    observable: true,
    clearFunction: 'hide'
  })
  static show(message: string, duration: string, position: string){
    // This Observable is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Observable, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Observable<any>(observer => {});
  }

  /**
   * Manually hide any currently visible toast.
   * @return {Promise} Returns a Promise that resolves on success.
   */
  @Cordova()
  static hide(){
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  }

  /**
   * Show a native toast with the given options.
   *
   * @param {Object} options  Options for showing a toast. Available options:
   *   message  The message to display.
   *   duration  Duration to show the toast, either 'short' or 'long'.
   *   position  Where to position the toast, either 'top', 'center', or 'bottom'.
   *   addPixelsY  Offset in pixels to move the toast up or down from its specified position.
   *
   * @return {Observable}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
   */
  @Cordova({
    observable: true,
    clearFunction: 'hide'
  })
  static showWithOptions(options: ToastOptions){
    // This Observable is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Observable, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Observable<any>(observer => {});
  }

  /**
   * Shorthand for `show(message, 'short', 'top')`.
   * @return {Observable}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
   */
  @Cordova({
    observable: true,
    clearFunction: 'hide'
  })
  static showShortTop(message: string){
    // This Observable is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Observable, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Observable<any>(observer => {});
  }

  /**
   * Shorthand for `show(message, 'short', 'center')`.
   * @return {Observable}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
   */
  @Cordova({
    observable: true,
    clearFunction: 'hide'
  })
  static showShortCenter(message: string){
    // This Observable is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Observable, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Observable<any>(observer => {});
  }

  /**
   * Shorthand for `show(message, 'short', 'bottom')`.
   * @return {Observable}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
   */
  @Cordova({
    observable: true,
    clearFunction: 'hide'
  })
  static showShortBottom(message: string){
    // This Observable is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Observable, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Observable<any>(observer => {});
  }

  /**
   * Shorthand for `show(message, 'long', 'top')`.
   * @return {Observable}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
   */
  @Cordova({
    observable: true,
    clearFunction: 'hide'
  })
  static showLongTop(message: string){
    // This Observable is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Observable, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Observable<any>(observer => {});
  }

  /**
   * Shorthand for `show(message, 'long', 'center')`.
   * @return {Observable}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
   */
  @Cordova({
    observable: true,
    clearFunction: 'hide'
  })
  static showLongCenter(message: string){
    // This Observable is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Observable, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Observable<any>(observer => {});
  }

  /**
   * Shorthand for `show(message, 'long', 'bottom')`.
   * @return {Observable}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
   */
  @Cordova({
    observable: true,
    clearFunction: 'hide'
  })
  static showLongBottom(message: string){
    // This Observable is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Observable, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Observable<any>(observer => {});
  }
}
