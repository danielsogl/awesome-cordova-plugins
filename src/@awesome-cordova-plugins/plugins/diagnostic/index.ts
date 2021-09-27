import { Injectable } from '@angular/core';
import { Cordova, CordovaProperty, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name Diagnostic
 * @description
 * Checks whether device hardware features are enabled or available to the app, e.g. camera, GPS, wifi
 * @usage
 * ```typescript
 * import { Diagnostic } from '@awesome-cordova-plugins/diagnostic/ngx';
 *
 * constructor(private diagnostic: Diagnostic) { }
 *
 * ...
 *
 * let successCallback = (isAvailable) => { console.log('Is available? ' + isAvailable); }
 * let errorCallback = (e) => console.error(e);
 *
 * this.diagnostic.isCameraAvailable().then(successCallback).catch(errorCallback);
 *
 * this.diagnostic.isBluetoothAvailable().then(successCallback, errorCallback);
 *
 *
 * this.diagnostic.getBluetoothState()
 *   .then((state) => {
 *     if (state == this.diagnostic.bluetoothState.POWERED_ON){
 *       // do something
 *     } else {
 *       // do something else
 *     }
 *   }).catch(e => console.error(e));
 *
 * ```
 */
@Plugin({
  pluginName: 'Diagnostic',
  plugin: 'cordova.plugins.diagnostic',
  pluginRef: 'cordova.plugins.diagnostic',
  repo: 'https://github.com/dpa99c/cordova-diagnostic-plugin',
  platforms: ['Android', 'iOS', 'Windows'],
})
@Injectable()
export class Diagnostic extends AwesomeCordovaNativePlugin {
  permission = {
    READ_CALENDAR: 'READ_CALENDAR',
    WRITE_CALENDAR: 'WRITE_CALENDAR',
    CAMERA: 'CAMERA',
    READ_CONTACTS: 'READ_CONTACTS',
    WRITE_CONTACTS: 'WRITE_CONTACTS',
    GET_ACCOUNTS: 'GET_ACCOUNTS',
    ACCESS_FINE_LOCATION: 'ACCESS_FINE_LOCATION',
    ACCESS_COARSE_LOCATION: 'ACCESS_COARSE_LOCATION',
    RECORD_AUDIO: 'RECORD_AUDIO',
    READ_PHONE_STATE: 'READ_PHONE_STATE',
    CALL_PHONE: 'CALL_PHONE',
    ADD_VOICEMAIL: 'ADD_VOICEMAIL',
    USE_SIP: 'USE_SIP',
    PROCESS_OUTGOING_CALLS: 'PROCESS_OUTGOING_CALLS',
    READ_CALL_LOG: 'READ_CALL_LOG',
    WRITE_CALL_LOG: 'WRITE_CALL_LOG',
    SEND_SMS: 'SEND_SMS',
    RECEIVE_SMS: 'RECEIVE_SMS',
    READ_SMS: 'READ_SMS',
    RECEIVE_WAP_PUSH: 'RECEIVE_WAP_PUSH',
    RECEIVE_MMS: 'RECEIVE_MMS',
    WRITE_EXTERNAL_STORAGE: 'WRITE_EXTERNAL_STORAGE',
    READ_EXTERNAL_STORAGE: 'READ_EXTERNAL_STORAGE',
    BODY_SENSORS: 'BODY_SENSORS',
  };

  @CordovaProperty()
  permissionStatus: {
    GRANTED: string;
    /**
     * @deprecated cordova.plugins.diagnostic@5.0.0 uses DENIED_ONCE to unify DENIED* statuses across iOS/Android
     */
    DENIED: string;
    DENIED_ONCE: string;
    NOT_REQUESTED: string;
    DENIED_ALWAYS: string;
    RESTRICTED: string;
    GRANTED_WHEN_IN_USE: string;
  };

  locationAuthorizationMode = {
    ALWAYS: 'always',
    WHEN_IN_USE: 'when_in_use',
  };

  /**
   * iOS ONLY
   * Location accuracy authorization
   */
  locationAccuracyAuthorization: {
    FULL: 'full';
    REDUCED: 'reduced';
  };

  permissionGroups = {
    CALENDAR: ['READ_CALENDAR', 'WRITE_CALENDAR'],
    CAMERA: ['CAMERA'],
    CONTACTS: ['READ_CONTACTS', 'WRITE_CONTACTS', 'GET_ACCOUNTS'],
    LOCATION: ['ACCESS_FINE_LOCATION', 'ACCESS_COARSE_LOCATION'],
    MICROPHONE: ['RECORD_AUDIO'],
    PHONE: [
      'READ_PHONE_STATE',
      'CALL_PHONE',
      'ADD_VOICEMAIL',
      'USE_SIP',
      'PROCESS_OUTGOING_CALLS',
      'READ_CALL_LOG',
      'WRITE_CALL_LOG',
    ],
    SENSORS: ['BODY_SENSORS'],
    SMS: ['SEND_SMS', 'RECEIVE_SMS', 'READ_SMS', 'RECEIVE_WAP_PUSH', 'RECEIVE_MMS'],
    STORAGE: ['READ_EXTERNAL_STORAGE', 'WRITE_EXTERNAL_STORAGE'],
  };

  locationMode = {
    HIGH_ACCURACY: 'high_accuracy',
    DEVICE_ONLY: 'device_only',
    BATTERY_SAVING: 'battery_saving',
    LOCATION_OFF: 'location_off',
  };

  bluetoothState = {
    UNKNOWN: 'unknown',
    RESETTING: 'resetting', // iOS
    UNSUPPORTED: 'unsupported', // iOS
    UNAUTHORIZED: 'unauthorized', // iOS
    POWERED_OFF: 'powered_off',
    POWERED_ON: 'powered_on',
    POWERING_OFF: 'powering_off',
    POWERING_ON: 'powering_on',
  };

  @CordovaProperty()
  NFCState: {
    UNKNOWN: string;
    POWERED_OFF: string;
    POWERED_ON: string;
    POWERING_ON: string;
    POWERING_OFF: string;
  };

  @CordovaProperty()
  motionStatus: {
    NOT_REQUESTED: string;
    GRANTED: string;
    DENIED: string;
    RESTRICTED: string;
    NOT_AVAILABLE: string;
    NOT_DETERMINED: string;
    UNKNOWN: string;
  };

  /**
   * Checks if app is able to access device location.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  isLocationAvailable(): Promise<any> {
    return;
  }

  /**
   * Checks if Wifi is connected/enabled. On iOS this returns true if the device is connected to a network by WiFi. On Android and Windows 10 Mobile this returns true if the WiFi setting is set to enabled.
   * On Android this requires permission. `<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />`
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  isWifiAvailable(): Promise<any> {
    return;
  }

  /**
   * Checks if the device has a camera. On Android this returns true if the device has a camera. On iOS this returns true if both the device has a camera AND the application is authorized to use it. On Windows 10 Mobile this returns true if both the device has a rear-facing camera AND the
   * application is authorized to use it.
   *
   * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
   *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
   * @returns {Promise<any>}
   */
  @Cordova({ callbackOrder: 'reverse' })
  isCameraAvailable(externalStorage?: boolean): Promise<any> {
    return;
  }

  /**
   * Checks if the device has Bluetooth capabilities and if so that Bluetooth is switched on (same on Android, iOS and Windows 10 Mobile)
   * On Android this requires permission <uses-permission android:name="android.permission.BLUETOOTH" />
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  isBluetoothAvailable(): Promise<any> {
    return;
  }

  /**
   * Displays the device location settings to allow user to enable location services/change location mode.
   */
  @Cordova({ sync: true, platforms: ['Android', 'Windows 10', 'iOS'] })
  switchToLocationSettings(): void {}

  /**
   * Displays mobile settings to allow user to enable mobile data.
   */
  @Cordova({ sync: true, platforms: ['Android', 'Windows 10'] })
  switchToMobileDataSettings(): void {}

  /**
   * Displays Bluetooth settings to allow user to enable Bluetooth.
   */
  @Cordova({ sync: true, platforms: ['Android', 'Windows 10'] })
  switchToBluetoothSettings(): void {}

  /**
   * Displays WiFi settings to allow user to enable WiFi.
   */
  @Cordova({ sync: true, platforms: ['Android', 'Windows 10'] })
  switchToWifiSettings(): void {}

  /**
   * Returns true if the WiFi setting is set to enabled, and is the same as `isWifiAvailable()`
   *
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['Android', 'Windows 10'] })
  isWifiEnabled(): Promise<boolean> {
    return;
  }

  /**
   * Enables/disables WiFi on the device.
   * Requires `ACCESS_WIFI_STATE` and `CHANGE_WIFI_STATE` permissions on Android
   *
   * @param {boolean} state
   * @returns {Promise<any>}
   */
  @Cordova({ callbackOrder: 'reverse', platforms: ['Android', 'Windows 10'] })
  setWifiState(state: boolean): Promise<any> {
    return;
  }

  /**
   * Enables/disables Bluetooth on the device.
   * Requires `BLUETOOTH` and `BLUETOOTH_ADMIN` permissions on Android
   *
   * @param {boolean} state
   * @returns {Promise<any>}
   */
  @Cordova({ callbackOrder: 'reverse', platforms: ['Android', 'Windows 10'] })
  setBluetoothState(state: boolean): Promise<any> {
    return;
  }

  // ANDROID AND IOS ONLY

  /**
   * Returns true if the device setting for location is on. On Android this returns true if Location Mode is switched on. On iOS this returns true if Location Services is switched on.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['Android', 'iOS'] })
  isLocationEnabled(): Promise<boolean> {
    return;
  }

  /**
   * Checks if the application is authorized to use location.
   * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  isLocationAuthorized(): Promise<any> {
    return;
  }

  /**
   * Returns the location authorization status for the application.
   *
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android', 'iOS'] })
  getLocationAuthorizationStatus(): Promise<any> {
    return;
  }

  /**
   * Returns the location authorization status for the application.
   * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
   *
   * @param {string} [mode] iOS only: location authorization mode: "always" or "when_in_use". If not specified, defaults to "when_in_use".
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android', 'iOS'], callbackOrder: 'reverse' })
  requestLocationAuthorization(mode?: string): Promise<any> {
    return;
  }

  /**
   * Checks if camera hardware is present on device.
   *
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android', 'iOS'] })
  isCameraPresent(): Promise<any> {
    return;
  }

  /**
   * Checks if the application is authorized to use the camera.
   * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
   *
   * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
   *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android', 'iOS'], callbackOrder: 'reverse' })
  isCameraAuthorized(externalStorage?: boolean): Promise<any> {
    return;
  }

  /**
   * Returns the camera authorization status for the application.
   *
   * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
   *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android', 'iOS'], callbackOrder: 'reverse' })
  getCameraAuthorizationStatus(externalStorage?: boolean): Promise<any> {
    return;
  }

  /**
   * Requests camera authorization for the application.
   *
   * @param {boolean} [externalStorage] Android only: If true, requests permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
   *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android', 'iOS'], callbackOrder: 'reverse' })
  requestCameraAuthorization(externalStorage?: boolean): Promise<any> {
    return;
  }

  /**
   * Checks if the application is authorized to use the microphone.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['Android', 'iOS'] })
  isMicrophoneAuthorized(): Promise<boolean> {
    return;
  }

  /**
   * Returns the microphone authorization status for the application.
   *
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android', 'iOS'] })
  getMicrophoneAuthorizationStatus(): Promise<any> {
    return;
  }

  /**
   * Requests microphone authorization for the application.
   *
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android', 'iOS'] })
  requestMicrophoneAuthorization(): Promise<any> {
    return;
  }

  /**
   * Checks if the application is authorized to use contacts (address book).
   *
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['Android', 'iOS'] })
  isContactsAuthorized(): Promise<boolean> {
    return;
  }

  /**
   * Returns the contacts authorization status for the application.
   *
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android', 'iOS'] })
  getContactsAuthorizationStatus(): Promise<any> {
    return;
  }

  /**
   * Requests contacts authorization for the application.
   *
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android', 'iOS'] })
  requestContactsAuthorization(): Promise<any> {
    return;
  }

  /**
   * Checks if the application is authorized to use the calendar.
   *
   * Notes for Android:
   *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
   *
   * Notes for iOS:
   *   - This relates to Calendar Events (not Calendar Reminders)
   *
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['Android', 'iOS'] })
  isCalendarAuthorized(): Promise<boolean> {
    return;
  }

  /**
   * Returns the calendar authorization status for the application.
   *
   * Notes for Android:
   *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return `GRANTED` status as permissions are already granted at installation time.
   *
   * Notes for iOS:
   *   - This relates to Calendar Events (not Calendar Reminders)
   *
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android', 'iOS'] })
  getCalendarAuthorizationStatus(): Promise<any> {
    return;
  }

  /**
   * Requests calendar authorization for the application.
   *
   * Notes for iOS:
   *   - Should only be called if authorization status is NOT_DETERMINED. Calling it when in any other state will have no effect and just return the current authorization status.
   *   - This relates to Calendar Events (not Calendar Reminders)
   *
   * Notes for Android:
   *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will have no effect as the permissions are already granted at installation time.
   *   - This requests permission for `READ_CALENDAR` run-time permission
   *   - Required permissions must be added to `AndroidManifest.xml` as appropriate - see Android permissions: `READ_CALENDAR`, `WRITE_CALENDAR`
   *
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android', 'iOS'] })
  requestCalendarAuthorization(): Promise<any> {
    return;
  }

  /**
   * Opens settings page for this app.
   * On Android, this opens the "App Info" page in the Settings app.
   * On iOS, this opens the app settings page in the Settings app. This works only on iOS 8+ - iOS 7 and below will invoke the errorCallback.
   *
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android', 'iOS'] })
  switchToSettings(): Promise<any> {
    return;
  }

  /**
   * Returns the state of Bluetooth on the device.
   *
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android', 'iOS'] })
  getBluetoothState(): Promise<any> {
    return;
  }

  /**
   * Registers a function to be called when a change in Bluetooth state occurs.
   *
   * @param {Function} handler
   */
  @Cordova({ platforms: ['Android', 'iOS'], sync: true })
  registerBluetoothStateChangeHandler(handler: Function): void {}

  /**
   * Registers a function to be called when a change in Location state occurs.
   *
   * @param {Function} handler
   */
  @Cordova({ platforms: ['Android', 'iOS'], sync: true })
  registerLocationStateChangeHandler(handler: Function): void {}

  // ANDROID ONLY

  /**
   * Checks if high-accuracy locations are available to the app from GPS hardware.
   * Returns true if Location mode is enabled and is set to "Device only" or "High accuracy" AND if the app is authorized to use location.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['Android'] })
  isGpsLocationAvailable(): Promise<boolean> {
    return;
  }

  /**
   * Checks if location mode is set to return high-accuracy locations from GPS hardware.
   *   Returns true if Location mode is enabled and is set to either:
   *   - Device only = GPS hardware only (high accuracy)
   *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
   *
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android'] })
  isGpsLocationEnabled(): Promise<any> {
    return;
  }

  /**
   * Checks if low-accuracy locations are available to the app from network triangulation/WiFi access points.
   * Returns true if Location mode is enabled and is set to "Battery saving" or "High accuracy" AND if the app is authorized to use location.
   *
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android'] })
  isNetworkLocationAvailable(): Promise<any> {
    return;
  }

  /**
   * Checks if location mode is set to return low-accuracy locations from network triangulation/WiFi access points.
   * Returns true if Location mode is enabled and is set to either:
   *   - Battery saving = network triangulation and Wifi network IDs (low accuracy)
   *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
   *
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android'] })
  isNetworkLocationEnabled(): Promise<any> {
    return;
  }

  /**
   * Returns the current location mode setting for the device.
   *
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android'] })
  getLocationMode(): Promise<any> {
    return;
  }

  /**
   * Returns the current authorization status for a given permission.
   * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
   *
   * @param permission
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android'], callbackOrder: 'reverse' })
  getPermissionAuthorizationStatus(permission: any): Promise<any> {
    return;
  }

  /**
   * Returns the current authorization status for multiple permissions.
   * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
   *
   * @param {any[]} permissions
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android'], callbackOrder: 'reverse' })
  getPermissionsAuthorizationStatus(permissions: any[]): Promise<any> {
    return;
  }

  /**
   * Requests app to be granted authorization for a runtime permission.
   * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will have no effect as the permissions are already granted at installation time.
   *
   * @param permission
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android'], callbackOrder: 'reverse' })
  requestRuntimePermission(permission: any): Promise<any> {
    return;
  }

  /**
   * Requests app to be granted authorization for multiple runtime permissions.
   * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
   *
   * @param {any[]} permissions
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android'], callbackOrder: 'reverse' })
  requestRuntimePermissions(permissions: any[]): Promise<any> {
    return;
  }

  /**
   * Indicates if the plugin is currently requesting a runtime permission via the native API.
   * Note that only one request can be made concurrently because the native API cannot handle concurrent requests,
   * so the plugin will invoke the error callback if attempting to make more than one simultaneous request.
   * Multiple permission requests should be grouped into a single call since the native API is setup to handle batch requests of multiple permission groups.
   *
   * @returns {boolean}
   */
  @Cordova({ sync: true })
  isRequestingPermission(): boolean {
    return;
  }

  /**
   * Registers a function to be called when a runtime permission request has completed.
   * Pass in a falsy value to de-register the currently registered function.
   *
   * @param {Function} handler
   */
  @Cordova({ sync: true })
  registerPermissionRequestCompleteHandler(handler: Function): void {
    return;
  }

  /**
   * Checks if the device setting for Bluetooth is switched on.
   * This requires `BLUETOOTH` permission on Android
   *
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['Android'] })
  isBluetoothEnabled(): Promise<boolean> {
    return;
  }

  /**
   * Checks if the device has Bluetooth capabilities.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['Android'] })
  hasBluetoothSupport(): Promise<boolean> {
    return;
  }

  /**
   * Checks if the device has Bluetooth Low Energy (LE) capabilities.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['Android'] })
  hasBluetoothLESupport(): Promise<boolean> {
    return;
  }

  /**
   * Checks if the device supports Bluetooth Low Energy (LE) Peripheral mode.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['Android'] })
  hasBluetoothLEPeripheralSupport(): Promise<boolean> {
    return;
  }

  /**
   * Checks if the application is authorized to use external storage.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['Android'] })
  isExternalStorageAuthorized(): Promise<boolean> {
    return;
  }

  /**
   * CReturns the external storage authorization status for the application.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['Android'] })
  getExternalStorageAuthorizationStatus(): Promise<any> {
    return;
  }

  /**
   * Requests external storage authorization for the application.
   *
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android'] })
  requestExternalStorageAuthorization(): Promise<any> {
    return;
  }

  /**
   * Returns details of external SD card(s): absolute path, is writable, free space.
   *
   * The intention of this method is to return the location and details of removable external SD cards.
   * This differs from the "external directories" returned by cordova-plugin-file which return mount points relating to non-removable (internal) storage.
   *
   * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#getexternalsdcarddetails)
   *
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android'] })
  getExternalSdCardDetails(): Promise<any> {
    return;
  }

  /**
   * Switches to the wireless settings page in the Settings app. Allows configuration of wireless controls such as Wi-Fi, Bluetooth and Mobile networks.
   */
  @Cordova({
    platforms: ['Android'],
    sync: true,
  })
  switchToWirelessSettings(): void {}

  /**
   * Displays NFC settings to allow user to enable NFC.
   */
  @Cordova({
    platforms: ['Android'],
    sync: true,
  })
  switchToNFCSettings(): void {}

  /**
   * Checks if NFC hardware is present on device.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['Android'] })
  isNFCPresent(): Promise<boolean> {
    return;
  }

  /**
   * Checks if the device setting for NFC is switched on.
   * Note: this operation does not require NFC permission in the manifest.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['Android'] })
  isNFCEnabled(): Promise<boolean> {
    return;
  }

  /**
   * Checks if NFC is available to the app. Returns true if the device has NFC capabilities AND if NFC setting is switched on.
   * Note: this operation does not require NFC permission in the manifest.
   *
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['Android'] })
  isNFCAvailable(): Promise<boolean> {
    return;
  }

  /**
   * Registers a function to be called when a change in NFC state occurs. Pass in a falsy value to de-register the currently registered function.
   *
   * @param {Function} hander callback function to be called when NFC state changes
   * @param handler
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['Android'],
    sync: true,
  })
  registerNFCStateChangeHandler(handler: Function): void {}

  /**
   * Checks if the device data roaming setting is enabled.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['Android'] })
  isDataRoamingEnabled(): Promise<boolean> {
    return;
  }

  /**
   * Checks if the device setting for ADB(debug) is switched on.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['Android'] })
  isADBModeEnabled(): Promise<boolean> {
    return;
  }

  /**
   * Checks if the device is rooted.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['Android'] })
  isDeviceRooted(): Promise<boolean> {
    return;
  }

  // IOS ONLY

  /**
   * Checks if the application is authorized to use the Camera Roll in Photos app.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['iOS'] })
  isCameraRollAuthorized(): Promise<boolean> {
    return;
  }

  /**
   * Returns the authorization status for the application to use the Camera Roll in Photos app.
   *
   * @returns {Promise<string>}
   */
  @Cordova({ platforms: ['iOS'] })
  getCameraRollAuthorizationStatus(): Promise<string> {
    return;
  }

  /**
   * Requests camera roll authorization for the application.
   * Should only be called if authorization status is NOT_REQUESTED.
   * Calling it when in any other state will have no effect.
   *
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['iOS'] })
  requestCameraRollAuthorization(): Promise<any> {
    return;
  }

  /**
   * Checks if remote (push) notifications are enabled.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['iOS', 'Android'] })
  isRemoteNotificationsEnabled(): Promise<boolean> {
    return;
  }

  /**
   * Indicates if the app is registered for remote (push) notifications on the device.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['iOS'] })
  isRegisteredForRemoteNotifications(): Promise<boolean> {
    return;
  }

  /**
   * Returns the authorization status for the application to use Remote Notifications.
   * Note: Works on iOS 10+ only (iOS 9 and below will invoke the error callback).
   *
   * @returns {Promise<string>}
   */
  @Cordova({ platforms: ['iOS'] })
  getRemoteNotificationsAuthorizationStatus(): Promise<string> {
    return;
  }

  /**
   * Requests reminders authorization for the application.
   *
   * @param types
   * @param omitRegistration
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['iOS'] })
  requestRemoteNotificationsAuthorization(types?: string[], omitRegistration?: boolean): Promise<string> {
    return;
  }

  /**
   * Indicates the current setting of notification types for the app in the Settings app.
   * Note: on iOS 8+, if "Allow Notifications" switch is OFF, all types will be returned as disabled.
   *
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['iOS'] })
  getRemoteNotificationTypes(): Promise<any> {
    return;
  }

  /**
   * Checks if the application is authorized to use reminders.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['iOS'] })
  isRemindersAuthorized(): Promise<boolean> {
    return;
  }

  /**
   * Returns the reminders authorization status for the application.
   *
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['iOS'] })
  getRemindersAuthorizationStatus(): Promise<any> {
    return;
  }

  /**
   * Requests reminders authorization for the application.
   *
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['iOS'] })
  requestRemindersAuthorization(): Promise<any> {
    return;
  }

  /**
   * Checks if the application is authorized for background refresh.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['iOS'] })
  isBackgroundRefreshAuthorized(): Promise<boolean> {
    return;
  }

  /**
   * Returns the background refresh authorization status for the application.
   *
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['iOS'] })
  getBackgroundRefreshStatus(): Promise<any> {
    return;
  }

  /**
   * Requests Bluetooth authorization for the application.
   *
   * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#requestbluetoothauthorization)
   *
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['iOS'] })
  requestBluetoothAuthorization(): Promise<any> {
    return;
  }

  /**
   * Checks if motion tracking is available on the current device.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['iOS'] })
  isMotionAvailable(): Promise<boolean> {
    return;
  }

  /**
   * Checks if it's possible to determine the outcome of a motion authorization request on the current device.
   * There's no direct way to determine if authorization was granted or denied, so the Pedometer API must be used to indirectly determine this:
   * therefore, if the device supports motion tracking but not Pedometer Event Tracking, the outcome of requesting motion detection cannot be determined.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova({ platforms: ['iOS'] })
  isMotionRequestOutcomeAvailable(): Promise<boolean> {
    return;
  }

  /**
   * Requests motion tracking authorization for the application.
   *
   * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#requestmotionauthorization)
   *
   * @returns {Promise<string>}
   */
  @Cordova({ platforms: ['iOS'] })
  requestMotionAuthorization(): Promise<string> {
    return;
  }

  /**
   * Checks motion authorization status for the application.
   *
   * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#getmotionauthorizationstatus)
   *
   * @returns {Promise<string>}
   */
  @Cordova({ platforms: ['iOS'] })
  getMotionAuthorizationStatus(): Promise<string> {
    return;
  }

  /**
   * Returns the location accuracy authorization for the application on iOS 14+. Note: calling on iOS <14 will result in the Promise being rejected.
   *
   * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#getlocationaccuracyauthorization)
   *
   * @returns {Promise<string>}
   */
  @Cordova({ platform: ['iOS'] })
  getLocationAccuracyAuthorization(): Promise<string> {
    return;
  }

  /**
   * Requests temporary access to full location accuracy for the application on iOS 14+.
   *
   * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#requesttemporaryfullaccuracyauthorization)
   *
   * @param purpose
   * @returns {Promise<string>}
   */
  @Cordova({ platforms: ['iOS'] })
  requestTemporaryFullAccuracyAuthorization(purpose: string): Promise<string> {
    return;
  }

  /**
   * Registers a function to be called when a change in location accuracy authorization occurs on iOS 14+.
   *
   * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#registerLocationAccuracyAuthorizationChangeHandler)
   *
   * @param handler
   */
  @Cordova({ platforms: ['iOS'], sync: true })
  registerLocationAccuracyAuthorizationChangeHandler(handler: Function): void {}
}
