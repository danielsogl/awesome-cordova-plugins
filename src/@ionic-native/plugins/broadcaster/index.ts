import { Injectable } from '@angular/core';
import { Plugin, Cordova } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

/**
 * @name Broadcaster
 * @description
 * This plugin adds exchanging events between native code and your app.
 *
 * @usage
 * ```
 * import { Broadcaster } from '@ionic-native/broadcaster';
 *
 * constructor(private broadcaster: Broadcaster) { }
 *
 * ...
 *
 * // Listen to events from Native
 * this.broadcaster.addEventListener('eventName').then((event) => console.log(event));
 *
 * // Send event to Native
 * this.broadcaster.fireNativeEvent('eventName', {}).then(() => console.log('success'));
 *
 * ```
 */
@Plugin({
  pluginName: 'Broadcaster',
  plugin: 'cordova-plugin-broadcaster',
  pluginRef: 'broadcaster',
  repo: 'https://github.com/bsorrentino/cordova-broadcaster',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class Broadcaster {

  /**
   * This function listen to an event sent from the native code
   * @param eventName {string}
   * @return {Observable<any>} Returns an observable to watch when an event is received
   */
  @Cordova({
    observable: true,
    clearFunction: 'removeEventListener',
    clearWithArgs: true
  })
  addEventListener(eventName: string): Observable<any> { return; }

  /**
   * This function sends data to the native code
   * @param eventName {string}
   * @param eventData {any}
   * @return {Promise<any>} Returns a promise that resolves when an event is successfully fired
   */
  @Cordova()
  fireNativeEvent(eventName: string, eventData: any): Promise<any> { return; }

}
