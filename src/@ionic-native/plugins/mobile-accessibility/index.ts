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
 * if(this.mobileAccessibility.isScreenReaderRunningCallback) { console.log(true) }
 *
 * ```
 */
@Plugin({
  pluginName: 'MobileAccessibility',
  plugin: 'https://github.com/phonegap/phonegap-mobile-accessibility.git',
  pluginRef: 'MobileAccessibilityNotifications',
  repo: 'https://github.com/phonegap/phonegap-mobile-accessibility',
  platforms: ['Amazon Fire OS', 'Android', 'iOS']
})
@Injectable()
export class MobileAccessibility extends IonicNativePlugin {

  MobileAccessibilityNotifications = {
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
  }

  /**
   * Makes an asynchronous call to native MobileAccessibility to determine if a screen reader is running.
   * @return result {boolean}  A result method to receive the boolean result asynchronously from the native MobileAccessibility plugin.
   */
  @Cordova({ sync: true })
  isScreenReaderRunning(): boolean { return }

  /**
   * An iOS-specific proxy for the MobileAccessibility.isScreenReaderRunning method
   * @return result {boolean} A result method to receive the boolean result asynchronously from the native MobileAccessibility plugin.
   */
  @Cordova({ sync: true, platforms: ['iOS'] })
  isVoiceOverRunningCallback(): boolean { return }

  /**
   * An Android/Amazon Fire OS-specific proxy for the MobileAccessibility.isScreenReaderRunning method.
   * @return result {boolean}  A result method to receive the boolean result asynchronously from the native MobileAccessibility plugin.
   */
  @Cordova({ sync: true, platforms: ['Amazon Fire OS', 'Android'] })
  isTalkBackRunningCallback(): boolean { return }

  /**
   * On Android, this method returns true if ChromeVox is active and properly initialized with access to the text to speech API in the WebView.
   * If TalkBack is running but ChromeVox is not active, this method is useful to alert the user of a potential problem.
   * @return result {boolean} Returns the result
   */
  @Cordova({ sync: true, platforms: ['Amazon Fire OS', 'Android'] })
  isChromeVoxActive(): boolean { return }

  /**
   *
   * @return result {boolean} Returns the result
   */
  @Cordova({ sync: true, platforms: ['iOS'] })
  isBoldTextEnabledCallback(): boolean { return }

  /**
   *
   * @return result {boolean} Returns the result
   */
  @Cordova({ sync: true })
  isClosedCaptioningEnabledCallback(): boolean { return }

  /**
   *
   * @return result {boolean} Returns the result
   */
  @Cordova({ sync: true, platforms: ['iOS'] })
  isDarkerSystemColorsEnabledCallback(): boolean { return }

  /**
   *
   * @return result {boolean} Returns the result
   */
  @Cordova({ sync: true, platforms: ['iOS'] })
  isGrayscaleEnabledCallback(): boolean { return }

  /**
   *
   * @return result {boolean} Returns the result
   */
  @Cordova({ sync: true, platforms: ['iOS'] })
  isGuidedAccessEnabledCallback(): boolean { return }

  /**
   *
   * @return result {boolean} Returns the result
   */
  @Cordova({ sync: true, platforms: ['iOS'] })
  isInvertColorsEnabledCallback(): boolean { return }

  /**
   *
   * @return result {boolean} Returns the result
   */
  @Cordova({ sync: true, platforms: ['iOS'] })
  isMonoAudioEnabledCallback(): boolean { return }

  /**
   *
   * @return result {boolean} Returns the result
   */
  @Cordova({ sync: true, platforms: ['iOS'] })
  isReduceMotionEnabledCallback(): boolean { return }

  /**
   *
   * @return result {boolean} Returns the result
   */
  @Cordova({ sync: true, platforms: ['iOS'] })
  isReduceTransparencyEnabledCallback(): boolean { return }

  /**
   *
   * @return result {boolean} Returns the result
   */
  @Cordova({ sync: true, platforms: ['iOS'] })
  isSpeakScreenEnabledCallback(): boolean { return }

  /**
   *
   * @return result {boolean} Returns the result
   */
  @Cordova({ sync: true, platforms: ['iOS'] })
  isSpeakSelectionEnabledCallback(): boolean { return }

  /**
   *
   * @return result {boolean} Returns the result
   */
  @Cordova({ sync: true, platforms: ['iOS'] })
  isSwitchControlRunningCallback(): boolean { return }

  /**
   *
   * @return result {boolean} Returns the result
   */
  @Cordova({ sync: true, platforms: ['Amazon Fire OS', 'Android'] })
  isTouchExplorationEnabledCallback(): boolean { return }

  /**
   *
   * @return result {number} Returns the result
   */
  @Cordova({ sync: true })
  getTextZoomCallback(): number { return }

  /**
   * @param textZoom {nuber} A percentage value by which text in the WebView should be scaled.
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
   * @param string {string} A string to be announced by a screen reader.
   * @return result {boolean} Returns the result
   */
  @Cordova({ sync: true, platforms: ['iOS'] })
  postNotification(mobileAccessibilityNotification: any, string: string): boolean { return }

  /**
   * Speaks a given string through the screenreader. On Android, if ChromeVox is active, it will use the specified queueMode and properties.
   * @param string {string}
   * @param queueMode {mumber}
   * @param properties {any}
   */
  @Cordova({ sync: true })
  speak(string: string, queueMode?: number, properties?: any): void { }

  /**
   * Stops speech.
   */
  @Cordova({ sync: true })
  stop(): void { }

}
