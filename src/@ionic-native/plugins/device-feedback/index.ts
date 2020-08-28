import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export interface DeviceFeedbackStatus {
  /** Haptic Feedback */
  haptic: boolean;

  /** Acoustic Feedback */
  acoustic: boolean;
}

/**
 * @name Device Feedback
 * @premier vibration
 * @description
 *
 * Plugin that lets you provide haptic or acoustic feedback on Android devices.
 *
 * @usage
 * ```typescript
 * import { DeviceFeedback } from '@ionic-native/device-feedback/ngx';
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
 * this.deviceFeedback.isFeedbackEnabled().then(feedback => {
 *     console.log(feedback);
 *     // {
 *     //   acoustic: true,
 *     //   haptic: true
 *     // }
 *   });
 *
 * ```
 * @innterfaces
 * DeviceFeedbackEnabled
 */
@Plugin({
  pluginName: 'DeviceFeedback',
  plugin: 'cordova-plugin-velda-devicefeedback',
  pluginRef: 'plugins.deviceFeedback',
  repo: 'https://github.com/VVelda/device-feedback',
  platforms: ['Android'],
})
@Injectable()
export class DeviceFeedback extends IonicNativePlugin {
  /**
   * Provide sound feedback to user, nevertheless respect user's settings and current active device profile as native feedback do.
   */
  @Cordova({ sync: true })
  acoustic(): void {}

  /**
   * Provide vibrate feedback to user, nevertheless respect user's tactile feedback setting as native feedback do.
   * @param {number} type Specify type of vibration feedback. 0 for long press, 1 for virtual key, or 3 for keyboard tap.
   */
  @Cordova({ sync: true })
  haptic(type: number): void {}

  /**
   * Check if haptic and acoustic feedback is enabled by user settings.
   * @returns {Promise<DeviceFeedbackEnabled>}
   */
  @Cordova()
  isFeedbackEnabled(): Promise<DeviceFeedbackStatus> {
    return;
  }
}
