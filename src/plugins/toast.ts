import { Cordova, Plugin } from './plugin';


export interface ToastOptions {
  /**
   * Message to display
   */
  message?: string;
  /**
   * Duration in ms to show
   */
  duration?: number;
  /**
   * Position
   */
  position?: string;
  /**
   * Add negative value to move it up a bit
   */
  addPixelsY?: number;
  /**
   * Pass JSON object to be sent back in success callback
   */
  data?: any;
  /**
   * Styling
   */
  styling?: {
    opacity?: number;
    backgroundColor?: string;
    textColor?: string;
    cornerRadius?: number;
    horizontalPadding?: number;
    verticalPadding?: number;
  };
}
/**
 * @name Toast
 * @description
 * This plugin allows you to show a native Toast (a little text popup) on iOS, Android and WP8. It's great for showing a non intrusive native notification which is guaranteed always in the viewport of the browser.
 *
 * Requires Cordova plugin: `cordova-plugin-x-toast`. For more info, please see the [Toast plugin docs](https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin).
 *
 * @usage
 * ```typescript
 * import { Toast } from 'ionic-native';
 *
 *
 * Toast.show("I'm a toast", '5000', 'center').then(
 *   toast => {
 *     console.log(toast);
 *   }
 * );
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-x-toast',
  pluginRef: 'plugins.toast',
  repo: 'https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin',
  platforms: ['Android', 'iOS', 'Windows Phone 8']
})
export class Toast {

  /**
   * Show a native toast for the given duration at the specified position.
   *
   * @param {string} message  The message to display.
   * @param {string} duration  Duration to show the toast, either 'short', 'long' or any number of milliseconds: '1500'.
   * @param {string} position  Where to position the toast, either 'top', 'center', or 'bottom'.
   * @return {Promise}  Returns a promise that resolves when the toast is visible, rejects on error.
   */
  @Cordova()
  static show(
    message: string,
    duration: string,
    position: string
  ): Promise<any> { return; }

  /**
   * Hides any visible toasts
   * @return {Promise}
   */
  @Cordova()
  static hide(): Promise<any> { return; }

  /**
   * Manually hide any currently visible toast.
   * @return {Promise} Returns a Promise that resolves on success.
   */
  @Cordova()
  static hide(): Promise<any> { return; }

  /**
   * Show a native toast with the given options.
   *
   * @param {Object} options  Options for showing a toast. Available options:
   *   message  The message to display.
   *   duration  Duration to show the toast, either 'short', 'long' or any number of milliseconds: '1500'.
   *   position  Where to position the toast, either 'top', 'center', or 'bottom'.
   *   addPixelsY  Offset in pixels to move the toast up or down from its specified position.
   *
   * @return {Promise}  Returns a promise that resolves when the toast is visible, rejects on error.
   */
  @Cordova()
  static showWithOptions(options: ToastOptions): Promise<any> { return; }

  /**
   * Shorthand for `show(message, 'short', 'top')`.
   * @return {Promise}  Returns a promise that resolves when the toast is visible, rejects on error.
   */
  @Cordova()
  static showShortTop(message: string): Promise<any> { return; }

  /**
   * Shorthand for `show(message, 'short', 'center')`.
   * @return {Promise}  Returns a promise that resolves when the toast is visible, rejects on error.
   */
  @Cordova()
  static showShortCenter(message: string): Promise<any> { return; }


  /**
   * Shorthand for `show(message, 'short', 'bottom')`.
   * @return {Promise}  Returns a promise that resolves when the toast is visible, rejects on error.
   */
  @Cordova()
  static showShortBottom(message: string): Promise<any> { return; }


  /**
   * Shorthand for `show(message, 'long', 'top')`.
   * @return {Promise}  Returns a promise that resolves when the toast is visible, rejects on error.
   */
  @Cordova()
  static showLongTop(message: string): Promise<any> { return; }


  /**
   * Shorthand for `show(message, 'long', 'center')`.
   * @return {Promise}  Returns a promise that resolves when the toast is visible, rejects on error.
   */
  @Cordova()
  static showLongCenter(message: string): Promise<any> { return; }


  /**
   * Shorthand for `show(message, 'long', 'bottom')`.
   * @return {Promise}  Returns a promise that resolves when the toast is visible, rejects on error.
   */
  @Cordova()
  static showLongBottom(message: string): Promise<any> { return; }

}
