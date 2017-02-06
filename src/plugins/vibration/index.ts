import { Cordova, Plugin } from './plugin';


/**
 * @name Vibration
 * @description Vibrates the device
 * @usage
 * ```typescript
 * import { Vibration } from 'ionic-native';
 *
 *
 * // Vibrate the device for a second
 * // Duration is ignored on iOS.
 * Vibration.vibrate(1000);
 *
 * // Vibrate 2 seconds
 * // Pause for 1 second
 * // Vibrate for 2 seconds
 * // Patterns work on Android and Windows only
 * Vibration.vibrate([2000,1000,2000]);
 *
 * // Stop any current vibrations immediately
 * // Works on Android and Windows only
 * Vibration.vibrate(0);
 * ```
 */
@Plugin({
  pluginName: 'Vibration',
  plugin: 'cordova-plugin-vibration',
  pluginRef: 'navigator',
  repo: 'https://github.com/apache/cordova-plugin-vibration',
  platforms: ['Android', 'iOS', 'Windows 8.1 Phone', 'Windows 8.1', 'Windows 10']
})
export class Vibration {

  /**
   * Vibrates the device for given amount of time.
   * @param time {number|Array<number>} Milliseconds to vibrate the device. If passed an array of numbers, it will define a vibration pattern. Pass 0 to stop any vibration immediately.
   */
  @Cordova({
    sync: true
  })
  static vibrate(time: number | Array<number>) { }

}
