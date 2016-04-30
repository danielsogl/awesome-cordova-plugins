import {Plugin, Cordova} from './plugin';
import {Observable} from 'rxjs/Observable';
/**
 * @name DB Meter
 * @description This plugin defines a global DBMeter object, which permits to get the decibel values from the microphone.
 * @usage
 * ```ts
 * import {DBMeter} from 'ionic-native';
 *
 *
 *
 * // Start listening
 * let subscription = DBMeter.start().subscribe(
 *   data => console.log(data)
 * );
 *
 * // Check if we are listening
 * DBMeter.isListening().then(
 *   (isListening : boolean) => console.log(isListening)
 * );
 *
 * // Stop listening
 * subscription.unsubscribe();
 *
 * // Delete DBMeter instance from memory
 * DBMeter.delete().then(
 *   () => console.log("Deleted DB Meter instance"),
 *   error => console.log("Error occurred while deleting DB Meter instance")
 * );
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-dbmeter',
  pluginRef: 'DBMeter',
  repo: 'https://github.com/akofman/cordova-plugin-dbmeter',
  platforms: ['iOS', 'Android']
})
export class DBMeter {

  /**
   * Starts listening
   * @return {Observable<string>} Returns an observable. Subscribe to start listening. Unsubscribe to stop listening.
   */
  @Cordova({
    observable: true,
    clearFunction: 'stop'
  })
  static start (): Observable<any> {return; }

  /**
   * Stops listening
   * @private
   */
  @Cordova()
  static stop (): Promise<any> {return; }

  /**
   * Check if the DB Meter is listening
   * @return {Promise<boolean>} Returns a promise that resolves with a boolean that tells us whether the DB meter is listening
   */
  @Cordova()
  static isListening(): Promise<boolean> {return; }

  /**
   * Delete the DB Meter instance
   * @return {Promise<any>} Returns a promise that will resolve if the instance has been deleted, and rejects if errors occur.
   */
  @Cordova()
  static delete(): Promise<any> {return; }

}