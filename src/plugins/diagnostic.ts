import { Cordova, Plugin } from './plugin';

/**
 * @name Diagnostic
 * @description
 * Checks whether device hardware features are enabled or available to the app, e.g. camera, GPS, wifi
 *
 * @usage
 * ```typescript
 * import { Diagnostic } from 'ionic-native';
 * ```
 */
@Plugin({
  plugin: 'cordova.plugins.diagnostic',
  pluginRef: 'cordova.plugins.diagnostic',
  repo: 'https://github.com/dpa99c/cordova-diagnostic-plugin'
})
export class Diagnostic {
  /**
   * Checks if app is able to access device location.
   */
  @Cordova()
  static isLocationAvailable(): Promise<any> { return; }

  /**
   * Checks if Wifi is connected/enabled. On iOS this returns true if the device is connected to a network by WiFi. On Android and Windows 10 Mobile this returns true if the WiFi setting is set to enabled.
   * On Android this requires permission. `<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />`
   */
  @Cordova()
  static isWifiAvailable(): Promise<any> { return; }

  /**
   * Checks if the device has a camera. On Android this returns true if the device has a camera. On iOS this returns true if both the device has a camera AND the application is authorized to use it. On Windows 10 Mobile this returns true if both the device has a rear-facing camera AND the
   * application is authorized to use it.
   */
  @Cordova()
  static isCameraAvailable(): Promise<any> { return; }

  /**
   * Checks if the device has Bluetooth capabilities and if so that Bluetooth is switched on (same on Android, iOS and Windows 10 Mobile)
   * On Android this requires permission <uses-permission android:name="android.permission.BLUETOOTH" />
   */
  @Cordova()
  static isBluetoothAvailable(): Promise<any> { return; }

  /**
   * Returns the location authorization status for the application.
   * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
   *
   * mode - (iOS-only / optional) location authorization mode: "always" or "when_in_use". If not specified, defaults to "when_in_use".
   */
  @Cordova()
  static requestLocationAuthorization(mode?: string): Promise<any> { return; }

  /**
   * Checks if the application is authorized to use location.
   * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
   */
  @Cordova()
  static isLocationAuthorized(): Promise<any> { return; }

  /**
   * Checks if camera hardware is present on device.
   */
  @Cordova()
  static isCameraPresent(): Promise<any> { return; }

  /**
   * Checks if the application is authorized to use the camera.
   * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
   */
  @Cordova()
  static isCameraAuthorized(): Promise<any> { return; }
  /**
   * Checks if location mode is set to return high-accuracy locations from GPS hardware.
   *   Returns true if Location mode is enabled and is set to either:
   *   - Device only = GPS hardware only (high accuracy)
   *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
   */
  @Cordova()
  static isGpsLocationEnabled(): Promise<any> { return; }

  /**
   * Checks if location mode is set to return low-accuracy locations from network triangulation/WiFi access points.
   * Returns true if Location mode is enabled and is set to either:
   *   - Battery saving = network triangulation and Wifi network IDs (low accuracy)
   *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
   */
  @Cordova()
  static isNetworkLocationEnabled(): Promise<any> { return; }

  /**
   * Checks if remote (push) notifications are enabled.
   * On iOS 8+, returns true if app is registered for remote notifications AND "Allow Notifications" switch is ON AND alert style is not set to "None" (i.e. "Banners" or "Alerts").
   * On iOS <=7, returns true if app is registered for remote notifications AND alert style is not set to "None" (i.e. "Banners" or "Alerts") - same as isRegisteredForRemoteNotifications().
   */
  @Cordova()
  static isRemoteNotificationsEnabled(): Promise<any> { return; }

  /**
   * Indicates if the app is registered for remote (push) notifications on the device.
   * On iOS 8+, returns true if the app is registered for remote notifications and received its device token, or false if registration has not occurred, has failed, or has been denied by the user. Note that user preferences for notifications in the Settings app will not affect this.
   * On iOS <=7, returns true if app is registered for remote notifications AND alert style is not set to "None" (i.e. "Banners" or "Alerts") - same as isRemoteNotificationsEnabled().
   */
  @Cordova()
  static isRegisteredForRemoteNotifications(): Promise<any> { return; }

}
