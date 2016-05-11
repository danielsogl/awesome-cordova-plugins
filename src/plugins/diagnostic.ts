import {Plugin, Cordova} from './plugin';

@Plugin({
  plugin: 'cordova.plugins.diagnostic',
  pluginRef: 'cordova.plugins.diagnostic',
  repo: 'https://github.com/floatinghotpot/cordova-plugin-admob'
})
export class Diagnostic {
  /**
   * Checks if app is able to access device location.
   */
  @Cordova()
  static isLocationEnabled() {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<boolean>((res, rej) => {});
  }

  /**
   * Checks if Wifi is connected/enabled. On iOS this returns true if the device is connected to a network by WiFi. On Android and Windows 10 Mobile this returns true if the WiFi setting is set to enabled.
   * On Android this requires permission. `<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />`
   */
  @Cordova()
  static isWifiEnabled() {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<boolean>((res, rej) => {});
  }

  /*
   * Checks if the device has a camera. On Android this returns true if the device has a camera. On iOS this returns true if both the device has a camera AND the application is authorized to use it. On Windows 10 Mobile this returns true if both the device has a rear-facing camera AND the
   * application is authorized to use it.
   */
  @Cordova()
  static isCameraEnabled() {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<boolean>((res, rej) => {});
  }

  /*
   * Checks if the device has Bluetooth capabilities and if so that Bluetooth is switched on (same on Android, iOS and Windows 10 Mobile)
   * On Android this requires permission <uses-permission android:name="android.permission.BLUETOOTH" />
   */
  @Cordova()
  static isBluetoothEnabled() {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<boolean>((res, rej) => {});
  }

  /*
   * Returns the location authorization status for the application.
   * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
   *
   * mode - (iOS-only / optional) location authorization mode: "always" or "when_in_use". If not specified, defaults to "when_in_use".
   */
  @Cordova()
  static requestLocationAuthorization(mode?: string) {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<string>((res, rej) => {});
  }

  /*
   * Checks if the application is authorized to use location.
   * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
   */
  @Cordova()
  static isLocationAuthorized() {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<boolean>((res, rej) => {});
  }



  /*
   * Checks if camera hardware is present on device.
   */
  @Cordova()
  static isCameraPresent() {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<boolean>((res, rej) => {});
  }

  /*
   * Checks if the application is authorized to use the camera.
   * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
   */
  @Cordova()
  static isCameraAuthorized() {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<boolean>((res, rej) => {});
  }
  /*
   * Checks if location mode is set to return high-accuracy locations from GPS hardware.
   *   Returns true if Location mode is enabled and is set to either:
   *   - Device only = GPS hardware only (high accuracy)
   *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
   */
  @Cordova()
  static isGpsLocationEnabled() {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<boolean>((res, rej) => {});
  }

  /*
   * Checks if location mode is set to return low-accuracy locations from network triangulation/WiFi access points.
   * Returns true if Location mode is enabled and is set to either:
   *   - Battery saving = network triangulation and Wifi network IDs (low accuracy)
   *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
   */
  @Cordova()
  static isNetworkLocationEnabled() {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<boolean>((res, rej) => {});
  }

  /**
   *
   * Checks if remote (push) notifications are enabled.
   * On iOS 8+, returns true if app is registered for remote notifications AND "Allow Notifications" switch is ON AND alert style is not set to "None" (i.e. "Banners" or "Alerts").
   * On iOS <=7, returns true if app is registered for remote notifications AND alert style is not set to "None" (i.e. "Banners" or "Alerts") - same as isRegisteredForRemoteNotifications().
   */
  @Cordova()
  static isRemoteNotificationsEnabled() {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<boolean>((res, rej) => {});
  }


  /**
   *
   * Indicates if the app is registered for remote (push) notifications on the device.
   * On iOS 8+, returns true if the app is registered for remote notifications and received its device token, or false if registration has not occurred, has failed, or has been denied by the user. Note that user preferences for notifications in the Settings app will not affect this.
   * On iOS <=7, returns true if app is registered for remote notifications AND alert style is not set to "None" (i.e. "Banners" or "Alerts") - same as isRemoteNotificationsEnabled().
   */
  @Cordova()
  static isRegisteredForRemoteNotifications() {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<boolean>((res, rej) => {});
  }



}
