import { Injectable } from '@angular/core';
import { Plugin, Cordova } from '@ionic-native/core';
/**
 * @name Device Feedback
 * @description
 *
 * Plugin that lets you provide haptic or acoustic feedback on Android devices.
 *
 * @usage
 * ```
 * import { DeviceFeedback } from '@ionic-native/device-feedback';
 *
 * constructor(private deviceFeedback: DeviceFeedback) { }
 *
 * ...
 *
 *
 * this.deviceFeedback.acoustic();
 *
 * this.deviceFeedback.haptic(0);
 *
 * this.deviceFeedback.isFeedbackEnabled()
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
@Injectable()
export class DeviceFeedback {

  /**
   * Provide sound feedback to user, nevertheless respect user's settings and current active device profile as native feedback do.
   */
  @Cordova({ sync: true })
  acoustic(): void { }

  /**
   * Provide vibrate feedback to user, nevertheless respect user's tactile feedback setting as native feedback do.
   * @param type {Number} Specify type of vibration feedback. 0 for long press, 1 for virtual key, or 3 for keyboard tap.
   */
  @Cordova({ sync: true })
  haptic(type: number): void { }

  /**
   * Check if haptic and acoustic feedback is enabled by user settings.
   * @returns {Promise<any>}
   */
  @Cordova()
  isFeedbackEnabled(): Promise<{ haptic: boolean; acoustic: boolean; }> { return; }

}
