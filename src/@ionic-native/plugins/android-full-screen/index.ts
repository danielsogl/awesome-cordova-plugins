import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';

/**
 * Bit flag values for setSystemUiVisibility()
 * @see	https://developer.android.com/reference/android/view/View.html#setSystemUiVisibility(int)
 */
export enum AndroidSystemUiFlags {
  /** View has requested the system UI (status bar) to be visible (the default). SYSTEM_UI_FLAG_VISIBLE */
  Visible = 0,
  /** View has requested the system UI to enter an unobtrusive "low profile" mode. SYSTEM_UI_FLAG_LOW_PROFILE */
  LowProfile = 1,
  /** View has requested that the system navigation be temporarily hidden. SYSTEM_UI_FLAG_HIDE_NAVIGATION */
  HideNavigation = 2,
  /** View has requested to go into the normal fullscreen mode so that its content can take over the screen while still allowing the user to interact with the application. SYSTEM_UI_FLAG_FULLSCREEN */
  Fullscreen = 4,
  /** Requests the navigation bar to draw in a mode that is compatible with light navigation bar backgrounds. SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR */
  LightNavigationBar = 16,
  /** When using other layout flags, we would like a stable view of the content insets given to fitSystemWindows(Rect). SYSTEM_UI_FLAG_LAYOUT_STABLE */
  LayoutStable = 256,
  /** View would like its window to be laid out as if it has requested SYSTEM_UI_FLAG_HIDE_NAVIGATION, even if it currently hasn't. SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION */
  LayoutHideNavigation = 512,
  /** View would like its window to be laid out as if it has requested SYSTEM_UI_FLAG_FULLSCREEN, even if it currently hasn't. SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN */
  LayoutFullscreen = 1024,
  /** View would like to remain interactive when hiding the navigation bar with SYSTEM_UI_FLAG_HIDE_NAVIGATION. SYSTEM_UI_FLAG_IMMERSIVE */
  Immersive = 2048,
  /** View would like to remain interactive when hiding the status bar with SYSTEM_UI_FLAG_FULLSCREEN and/or hiding the navigation bar with SYSTEM_UI_FLAG_HIDE_NAVIGATION. SYSTEM_UI_FLAG_IMMERSIVE_STICKY */
  ImmersiveSticky = 4096,
  /** Requests the status bar to draw in a mode that is compatible with light status bar backgrounds. SYSTEM_UI_FLAG_LIGHT_STATUS_BAR */
  LightStatusBar = 8192
}

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
export class AndroidFullScreen extends IonicNativePlugin {
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

  /**
   * Manually set the the system UI to a custom mode. This mirrors the Android method of the same name. (Android 4.4+ only).
   * @see https://developer.android.com/reference/android/view/View.html#setSystemUiVisibility(int)
   * @param {AndroidSystemUiFlags} visibility Bitwise-OR of flags in AndroidSystemUiFlags
   * @return {Promise<void>}
   */
  @Cordova()
  setSystemUiVisibility(visibility: AndroidSystemUiFlags): Promise<void> { return; }
}
