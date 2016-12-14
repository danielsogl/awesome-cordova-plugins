import { Plugin, Cordova } from './plugin';

/**
 * @name Broadcaster
 * @description
 * This plugin adds exchanging events between native code and your app.
 *
 * @usage
 * ```
 * import { Broadcaster } from 'ionic-native';
 *
 * // Listen to events from Native
 * Broadcaster.addEventListener('eventName').then((event) => console.log(event));
 *
 * // Send event to Native
 * Broadcaster.fireNativeEvent('eventName', {}).then(() => console.log('success'));
 *
 * ```
 */
@Plugin({
  pluginName: 'Broadcaster',
  plugin: 'cordova-plugin-broadcaster',
  pluginRef: 'broadcaster',
  repo: 'https://github.com/bsorrentino/cordova-broadcaster',
  platforms: ['Android', 'iOS'],
  install: 'ionic plugin add cordova-plugin-broadcaster'
})
export class Broadcaster {

  /**
   * This function listen to an event sent from the native code
   * @param eventName {string}
   * @return {Promise<any>} Returns a promise that resolves when an event is received
   */
  @Cordova()
  static addEventListener(eventName: string): Promise<any> { return; }

  /**
   * This function sends data to the native code
   * @param eventName {string}
   * @param eventData {any}
   * @return {Promise<any>} Returns a promise that resolves when an event is successfully fired
   */
  @Cordova()
  static fireNativeEvent(eventName: string, eventData: any): Promise<any> { return; }

}
