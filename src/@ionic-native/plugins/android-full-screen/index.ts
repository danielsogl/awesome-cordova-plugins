import { Injectable } from '@angular/core';
import { Cordova, Plugin } from '@ionic-native/core';

/**
 * @name Android Full Screen
 * @description
 * This plugin enables developers to offer users a true full screen experience in their Cordova and PhoneGap apps for Android.
 * Using Android 4.0+, you can use true full screen in "lean mode", the way you see in apps like YouTube, expanding the app right to the edges of the screen, hiding the status and navigation bars until the user next interacts. This is ideally suited to video or cut-scene content.
 * In Android 4.4+, however, you can now enter true full screen, fully interactive immersive mode. In this mode, your app will remain in true full screen until you choose otherwise; users can swipe down from the top of the screen to temporarily display the system UI.
 * @usage
 * ```typescript
 * import { AndroidFullScreen } from '@ionic-native/android-full-screen';
 *
 * constructor(private androidFullScreen: AndroidFullScreen) { }
 *
 * ...
 *
 * this.androidFullScreen.isImmersiveModeSupported()
 *   .then(() => this.androidFullScreen.immersiveMode())
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'AndroidFullScreen',
  plugin: 'cordova-plugin-fullscreen',
  pluginRef: 'AndroidFullScreen',
  repo: 'https://github.com/mesmotronic/cordova-plugin-fullscreen',
  platforms: ['Android']
})
@Injectable()
export class AndroidFullScreen {
  /**
   * Is this plugin supported?
   * @return {Promise<void>}
   */
  @Cordova()
  isSupported(): Promise<void> { return; }

  /**
   * Is immersive mode supported?
   * @return {Promise<void>}
   */
  @Cordova()
  isImmersiveModeSupported(): Promise<void> { return; }

  /**
   * The width of the screen in immersive mode.
   * @return {Promise<number>}
   */
  @Cordova()
  immersiveWidth(): Promise<number> { return; }

  /**
   * The height of the screen in immersive mode.
   * @return {Promise<number>}
   */
  @Cordova()
  immersiveHeight(): Promise<number> { return; }

  /**
   * Hide system UI until user interacts.
   * @return {Promise<void>}
   */
  @Cordova()
  leanMode(): Promise<void> { return; }

  /**
   * Show system UI.
   * @return {Promise<void>}
   */
  @Cordova()
  showSystemUI(): Promise<void> { return; }

  /**
   * Extend your app underneath the status bar (Android 4.4+ only).
   * @return {Promise<void>}
   */
  @Cordova()
  showUnderStatusBar(): Promise<void> { return; }

  /**
   * Extend your app underneath the system UI (Android 4.4+ only).
   * @return {Promise<void>}
   */
  @Cordova()
  showUnderSystemUI(): Promise<void> { return; }

  /**
   * Hide system UI and keep it hidden (Android 4.4+ only).
   * @return {Promise<void>}
   */
  @Cordova()
  immersiveMode(): Promise<void> { return; }
}
