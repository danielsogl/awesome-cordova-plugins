import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';

/**
 * @name Mobile Accessibility
 * @description
 * This plugin exposes information on the status of various accessibility features of mobile operating systems, including, for example, whether a screen reader is running, invert colors is enabled, and the preferred scaling for text.
 * It also allows an application to send a string to be spoken by the screen reader, or a command to stop the screen reader from speaking.
 *
 * @usage
 * ```typescript
 * import { MobileAccessibility } from 'ionic-native';
 *
 *
 * constructor(private mobileAccessibility: MobileAccessibility) { }
 *
 * ...
 *
 * if(this.mobileAccessibility.isScreenReaderRunningCallback();
 *
 * ```
 */
@Plugin({
  pluginName: 'MobileAccessibility',
  plugin: 'phonegap-plugin-mobile-accessibility',
  pluginRef: 'MobileAccessibility',
  repo: 'https://github.com/phonegap/phonegap-mobile-accessibility',
  platforms: ['Android Fire OS', 'Android', 'iOS', 'Windows']
})
@Injectable()
export class MobileAccessibility extends IonicNativePlugin {

  MobileAccessibilityNotifications: {
    ANNOUNCEMENT: 'ANNOUNCEMENT',
    BOLD_TEXT_STATUS_CHANGED: 'BOLD_TEXT_STATUS_CHANGED',
    CLOSED_CAPTIONING_STATUS_CHANGED: 'CLOSED_CAPTIONING_STATUS_CHANGED',
    DARKER_SYSTEM_COLORS_STATUS_CHANGED: 'DARKER_SYSTEM_COLORS_STATUS_CHANGED',
    GRAYSCALE_STATUS_CHANGED: 'GRAYSCALE_STATUS_CHANGED',
    GUIDED_ACCESS_STATUS_CHANGED: 'GUIDED_ACCESS_STATUS_CHANGED',
    INVERT_COLORS_STATUS_CHANGED: 'INVERT_COLORS_STATUS_CHANGED',
    LAYOUT_CHANGED: 'LAYOUT_CHANGED',
    MONO_AUDIO_STATUS_CHANGED: 'MONO_AUDIO_STATUS_CHANGED',
    PAGE_SCROLLED: 'PAGE_SCROLLED',
    REDUCE_MOTION_STATUS_CHANGED: 'REDUCE_MOTION_STATUS_CHANGED',
    REDUCE_TRANSPARENCY_STATUS_CHANGED: 'REDUCE_TRANSPARENCY_STATUS_CHANGED',
    SCREEN_CHANGED: 'SCREEN_CHANGED',
    SCREEN_READER_STATUS_CHANGED: 'SCREEN_READER_STATUS_CHANGED',
    SPEAK_SCREEN_STATUS_CHANGED: 'SPEAK_SCREEN_STATUS_CHANGED',
    SPEAK_SELECTION_STATUS_CHANGED: 'SPEAK_SELECTION_STATUS_CHANGED',
    SWITCH_CONTROL_STATUS_CHANGED: 'SWITCH_CONTROL_STATUS_CHANGED',
    TOUCH_EXPLORATION_STATUS_CHANGED: 'TOUCH_EXPLORATION_STATUS_CHANGED'
  };

  /**
   * Makes an asynchronous call to native MobileAccessibility to determine if a screen reader is running.
   * @returns {Promise<boolean>}  A result method to receive the boolean result asynchronously from the native MobileAccessibility plugin.
   */
  @Cordova()
  isScreenReaderRunning(): Promise<boolean> { return; }

  /**
   * An iOS-specific proxy for the MobileAccessibility.isScreenReaderRunning method
   * @returns {Promise<boolean>} A result method to receive the boolean result asynchronously from the native MobileAccessibility plugin.
   */
  @Cordova({ platforms: ['iOS'] })
  isVoiceOverRunning(): Promise<boolean> { return; }

  /**
   * An Android/Amazon Fire OS-specific proxy for the MobileAccessibility.isScreenReaderRunning method.
   * @returns {Promise<boolean>}  A result method to receive the boolean result asynchronously from the native MobileAccessibility plugin.
   */
  @Cordova({ platforms: ['Amazon Fire OS', 'Android'] })
  isTalkBackRunning(): Promise<boolean> { return; }

  /**
   * On Android, this method returns true if ChromeVox is active and properly initialized with access to the text to speech API in the WebView.
   * If TalkBack is running but ChromeVox is not active, this method is useful to alert the user of a potential problem.
   * @returns {Promise<boolean>} Returns the result
   */
  @Cordova({ platforms: ['Amazon Fire OS', 'Android'] })
  isChromeVoxActive(): Promise<boolean> { return; }

  /**
   *
   * @returns {Promise<boolean>} Returns the result
   */
  @Cordova({ platforms: ['iOS'] })
  isBoldTextEnabled(): Promise<boolean> { return; }

  /**
   *
   * @returns {Promise<boolean>} Returns the result
   */
  @Cordova()
  isClosedCaptioningEnabled(): Promise<boolean> { return; }

  /**
   *
   * @returns {Promise<boolean>} Returns the result
   */
  @Cordova({ platforms: ['iOS'] })
  isDarkerSystemColorsEnabled(): Promise<boolean> { return; }

  /**
   *
   * @returns {Promise<boolean>} Returns the result
   */
  @Cordova({ platforms: ['iOS'] })
  isGrayscaleEnabled(): Promise<boolean> { return; }

  /**
   *
   * @returns {Promise<boolean>} Returns the result
   */
  @Cordova({ platforms: ['iOS'] })
  isGuidedAccessEnabled(): Promise<boolean> { return; }

  /**
   *
   * @returns {Promise<boolean>} Returns the result
   */
  @Cordova({ platforms: ['iOS'] })
  isInvertColorsEnabled(): Promise<boolean> { return; }

  /**
   *
   * @returns {Promise<boolean>} Returns the result
   */
  @Cordova({ platforms: ['iOS'] })
  isMonoAudioEnabled(): Promise<boolean> { return; }

  /**
   *
   * @returns {Promise<boolean>} Returns the result
   */
  @Cordova({ platforms: ['iOS'] })
  isReduceMotionEnabled(): Promise<boolean> { return; }

  /**
   *
   * @returns {Promise<boolean>} Returns the result
   */
  @Cordova({ platforms: ['iOS'] })
  isReduceTransparencyEnabled(): Promise<boolean> { return; }

  /**
   *
   * @returns {Promise<boolean>} Returns the result
   */
  @Cordova({ platforms: ['iOS'] })
  isSpeakScreenEnabled(): Promise<boolean> { return; }

  /**
   *
   * @returns {Promise<boolean>} Returns the result
   */
  @Cordova({ platforms: ['iOS'] })
  isSpeakSelectionEnabled(): Promise<boolean> { return; }

  /**
   *
   * @returns {Promise<boolean>} Returns the result
   */
  @Cordova({ platforms: ['iOS'] })
  isSwitchControlRunning(): Promise<boolean> { return; }

  /**
   *
   * @returns {Promise<boolean>} Returns the result
   */
  @Cordova({ platforms: ['Amazon Fire OS', 'Android'] })
  isTouchExplorationEnabled(): Promise<boolean> { return; }

  /**
   *
   * * @returns {Promise<number>} Returns the result
   */
  @Cordova()
  getTextZoom(): Promise<number> { return; }

  /**
   * @param textZoom {number} A percentage value by which text in the WebView should be scaled.
   */
  @Cordova({ sync: true })
  setTextZoom(textZoom: number): void { }

  /**
   *
   */
  @Cordova({ sync: true })
  updateTextZoom(): void { }

  /**
   * A Boolean value which specifies whether to use the preferred text zoom of a default percent value of 100.
   * @param value {boolean} Returns the result
   */
  @Cordova({ sync: true })
  usePreferredTextZoom(value: boolean): void { }

  /**
   * Posts a notification with a string for the screen reader to announce if it is running.
   * @param mobileAccessibilityNotification {any}
   * @param value {string} A string to be announced by a screen reader.
   * @returns {Promise<boolean>} Returns the result
   */
  @Cordova({ platforms: ['iOS'] })
  postNotification(mobileAccessibilityNotification: any, value: string): Promise<boolean> { return; }

  /**
   * Speaks a given string through the screenreader. On Android, if ChromeVox is active, it will use the specified queueMode and properties.
   * @param value {string}
   * @param queueMode {mumber}
   * @param properties {any}
   */
  @Cordova({ sync: true })
  speak(value: string, queueMode?: number, properties?: any): void { }

  /**
   * Stops speech.
   */
  @Cordova({ sync: true })
  stop(): void { }

}
