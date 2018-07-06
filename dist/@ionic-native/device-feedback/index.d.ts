import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Device Feedback
 * @description
 *
 * Plugin that lets you provide haptic or acoustic feedback on Android devices.
 *
 * @usage
 * ```typescript
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
export declare class DeviceFeedback extends IonicNativePlugin {
    /**
     * Provide sound feedback to user, nevertheless respect user's settings and current active device profile as native feedback do.
     */
    acoustic(): void;
    /**
     * Provide vibrate feedback to user, nevertheless respect user's tactile feedback setting as native feedback do.
     * @param type {Number} Specify type of vibration feedback. 0 for long press, 1 for virtual key, or 3 for keyboard tap.
     */
    haptic(type: number): void;
    /**
     * Check if haptic and acoustic feedback is enabled by user settings.
     * @returns {Promise<any>}
     */
    isFeedbackEnabled(): Promise<{
        haptic: boolean;
        acoustic: boolean;
    }>;
}
