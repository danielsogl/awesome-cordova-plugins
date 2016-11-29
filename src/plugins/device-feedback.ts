import { Plugin, Cordova } from './plugin';
/**
 * @name DeviceFeedback
 * @description
 *
 * Plugin that lets you provide haptic or acoustic feedback on Android devices.
 *
 * @usage
 * ```
 * import { DeviceFeedback } from 'ionic-native';
 *
 * DeviceFeedback.acoustic();
 *
 * DeviceFeedback.haptic(0);
 *
 * DeviceFeedback.isFeedbackEnabled()
 *   .then((feedback) => {
 *     console.log(feedback);
 *     // {
 *     //   acoustic: true,
 *     //   haptic: true
 *     // }
 *   });
 *
 * ```
 */
@Plugin({
  pluginName: 'DeviceFeedback',
  plugin: 'cordova-plugin-velda-devicefeedback',
  pluginRef: 'plugins.deviceFeedback',
  repo: 'https://github.com/VVelda/device-feedback',
  platforms: ['Android']
})
export class DeviceFeedback {

  /**
   * Provide sound feedback to user, nevertheless respect user's settings and current active device profile as native feedback do.
   */
  @Cordova({ sync: true })
  static acoustic(): void { }

  /**
   * Provide vibrate feedback to user, nevertheless respect user's tactile feedback setting as native feedback do.
   * @param type {Number} Specify type of vibration feedback. 0 for long press, 1 for virtual key, or 3 for keyboard tap.
   */
  @Cordova({ sync: true })
  static haptic(type: number): void { }

  /**
   * Check if haptic and acoustic feedback is enabled by user settings.
   * @returns {Promise<any>}
   */
  @Cordova()
  static isFeedbackEnabled(): Promise<{ haptic: boolean; acoustic: boolean; }> { return; }

}
