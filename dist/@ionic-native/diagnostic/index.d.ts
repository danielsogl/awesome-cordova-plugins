import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Diagnostic
 * @description
 * Checks whether device hardware features are enabled or available to the app, e.g. camera, GPS, wifi
 *
 * @usage
 * ```typescript
 * import { Diagnostic } from '@ionic-native/diagnostic';
 *
 * constructor(private diagnostic: Diagnostic) { }
 *
 * ...
 *
 * let successCallback = (isAvailable) => { console.log('Is available? ' + isAvailable); };
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
 *
 */
export declare class Diagnostic extends IonicNativePlugin {
    permission: {
        READ_CALENDAR: string;
        WRITE_CALENDAR: string;
        CAMERA: string;
        READ_CONTACTS: string;
        WRITE_CONTACTS: string;
        GET_ACCOUNTS: string;
        ACCESS_FINE_LOCATION: string;
        ACCESS_COARSE_LOCATION: string;
        RECORD_AUDIO: string;
        READ_PHONE_STATE: string;
        CALL_PHONE: string;
        ADD_VOICEMAIL: string;
        USE_SIP: string;
        PROCESS_OUTGOING_CALLS: string;
        READ_CALL_LOG: string;
        WRITE_CALL_LOG: string;
        SEND_SMS: string;
        RECEIVE_SMS: string;
        READ_SMS: string;
        RECEIVE_WAP_PUSH: string;
        RECEIVE_MMS: string;
        WRITE_EXTERNAL_STORAGE: string;
        READ_EXTERNAL_STORAGE: string;
        BODY_SENSORS: string;
    };
    permissionStatus: {
        GRANTED: string;
        DENIED: string;
        NOT_REQUESTED: string;
        DENIED_ALWAYS: string;
        RESTRICTED: string;
        GRANTED_WHEN_IN_USE: string;
    };
    locationAuthorizationMode: {
        ALWAYS: string;
        WHEN_IN_USE: string;
    };
    permissionGroups: {
        CALENDAR: string[];
        CAMERA: string[];
        CONTACTS: string[];
        LOCATION: string[];
        MICROPHONE: string[];
        PHONE: string[];
        SENSORS: string[];
        SMS: string[];
        STORAGE: string[];
    };
    locationMode: {
        HIGH_ACCURACY: string;
        DEVICE_ONLY: string;
        BATTERY_SAVING: string;
        LOCATION_OFF: string;
    };
    bluetoothState: {
        UNKNOWN: string;
        RESETTING: string;
        UNSUPPORTED: string;
        UNAUTHORIZED: string;
        POWERED_OFF: string;
        POWERED_ON: string;
        POWERING_OFF: string;
        POWERING_ON: string;
    };
    NFCState: {
        UNKNOWN: string;
        POWERED_OFF: string;
        POWERED_ON: string;
        POWERING_ON: string;
        POWERING_OFF: string;
    };
    /**
     * Checks if app is able to access device location.
     * @returns {Promise<any>}
     */
    isLocationAvailable(): Promise<any>;
    /**
     * Checks if Wifi is connected/enabled. On iOS this returns true if the device is connected to a network by WiFi. On Android and Windows 10 Mobile this returns true if the WiFi setting is set to enabled.
     * On Android this requires permission. `<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />`
     * @returns {Promise<any>}
     */
    isWifiAvailable(): Promise<any>;
    /**
     * Checks if the device has a camera. On Android this returns true if the device has a camera. On iOS this returns true if both the device has a camera AND the application is authorized to use it. On Windows 10 Mobile this returns true if both the device has a rear-facing camera AND the
     * application is authorized to use it.
     * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
     *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
     * @returns {Promise<any>}
     */
    isCameraAvailable(externalStorage?: boolean): Promise<any>;
    /**
     * Checks if the device has Bluetooth capabilities and if so that Bluetooth is switched on (same on Android, iOS and Windows 10 Mobile)
     * On Android this requires permission <uses-permission android:name="android.permission.BLUETOOTH" />
     * @returns {Promise<any>}
     */
    isBluetoothAvailable(): Promise<any>;
    /**
     * Displays the device location settings to allow user to enable location services/change location mode.
     */
    switchToLocationSettings(): void;
    /**
     * Displays mobile settings to allow user to enable mobile data.
     */
    switchToMobileDataSettings(): void;
    /**
     * Displays Bluetooth settings to allow user to enable Bluetooth.
     */
    switchToBluetoothSettings(): void;
    /**
     * Displays WiFi settings to allow user to enable WiFi.
     */
    switchToWifiSettings(): void;
    /**
     * Returns true if the WiFi setting is set to enabled, and is the same as `isWifiAvailable()`
     * @returns {Promise<boolean>}
     */
    isWifiEnabled(): Promise<boolean>;
    /**
     * Enables/disables WiFi on the device.
     * Requires `ACCESS_WIFI_STATE` and `CHANGE_WIFI_STATE` permissions on Android
     * @param state {boolean}
     * @returns {Promise<any>}
     */
    setWifiState(state: boolean): Promise<any>;
    /**
     * Enables/disables Bluetooth on the device.
     * Requires `BLUETOOTH` and `BLUETOOTH_ADMIN` permissions on Android
     * @param state {boolean}
     * @returns {Promise<any>}
     */
    setBluetoothState(state: boolean): Promise<any>;
    /**
     * Returns true if the device setting for location is on. On Android this returns true if Location Mode is switched on. On iOS this returns true if Location Services is switched on.
     * @returns {Promise<boolean>}
     */
    isLocationEnabled(): Promise<boolean>;
    /**
     * Checks if the application is authorized to use location.
     * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     * @returns {Promise<any>}
     */
    isLocationAuthorized(): Promise<any>;
    /**
     * Returns the location authorization status for the application.
     * @returns {Promise<any>}
     */
    getLocationAuthorizationStatus(): Promise<any>;
    /**
     * Returns the location authorization status for the application.
     * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     *
     * @param {string} [mode] iOS only: location authorization mode: "always" or "when_in_use". If not specified, defaults to "when_in_use".
     * @returns {Promise<any>}
     */
    requestLocationAuthorization(mode?: string): Promise<any>;
    /**
     * Checks if camera hardware is present on device.
     * @returns {Promise<any>}
     */
    isCameraPresent(): Promise<any>;
    /**
     * Checks if the application is authorized to use the camera.
     * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
     * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
     *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
     * @returns {Promise<any>}
     */
    isCameraAuthorized(externalStorage?: boolean): Promise<any>;
    /**
     * Returns the camera authorization status for the application.
     * @param {boolean} [externalStorage] Android only: If true, checks permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
     *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
     * @returns {Promise<any>}
     */
    getCameraAuthorizationStatus(externalStorage?: boolean): Promise<any>;
    /**
     * Requests camera authorization for the application.
     * @param {boolean} [externalStorage] Android only: If true, requests permission for READ_EXTERNAL_STORAGE in addition to CAMERA run-time permission.
     *  cordova-plugin-camera@2.2+ requires both of these permissions. Defaults to true.
     * @returns {Promise<any>}
     */
    requestCameraAuthorization(externalStorage?: boolean): Promise<any>;
    /**
     * Checks if the application is authorized to use the microphone.
     * @returns {Promise<boolean>}
     */
    isMicrophoneAuthorized(): Promise<boolean>;
    /**
     * Returns the microphone authorization status for the application.
     * @returns {Promise<any>}
     */
    getMicrophoneAuthorizationStatus(): Promise<any>;
    /**
     * Requests microphone authorization for the application.
     * @returns {Promise<any>}
     */
    requestMicrophoneAuthorization(): Promise<any>;
    /**
     * Checks if the application is authorized to use contacts (address book).
     * @returns {Promise<boolean>}
     */
    isContactsAuthorized(): Promise<boolean>;
    /**
     * Returns the contacts authorization status for the application.
     * @returns {Promise<any>}
     */
    getContactsAuthorizationStatus(): Promise<any>;
    /**
     * Requests contacts authorization for the application.
     * @returns {Promise<any>}
     */
    requestContactsAuthorization(): Promise<any>;
    /**
     * Checks if the application is authorized to use the calendar.
     *
     * Notes for Android:
     *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
     *
     * Notes for iOS:
     *   - This relates to Calendar Events (not Calendar Reminders)
     * @returns {Promise<boolean>}
     */
    isCalendarAuthorized(): Promise<boolean>;
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
    getCalendarAuthorizationStatus(): Promise<any>;
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
    requestCalendarAuthorization(): Promise<any>;
    /**
     * Opens settings page for this app.
     * On Android, this opens the "App Info" page in the Settings app.
     * On iOS, this opens the app settings page in the Settings app. This works only on iOS 8+ - iOS 7 and below will invoke the errorCallback.
     * @returns {Promise<any>}
     */
    switchToSettings(): Promise<any>;
    /**
     * Returns the state of Bluetooth on the device.
     * @returns {Promise<any>}
     */
    getBluetoothState(): Promise<any>;
    /**
     * Registers a function to be called when a change in Bluetooth state occurs.
     * @param handler
     */
    registerBluetoothStateChangeHandler(handler: Function): void;
    /**
     * Registers a function to be called when a change in Location state occurs.
     * @param handler
     */
    registerLocationStateChangeHandler(handler: Function): void;
    /**
     * Checks if high-accuracy locations are available to the app from GPS hardware.
     * Returns true if Location mode is enabled and is set to "Device only" or "High accuracy" AND if the app is authorised to use location.
     * @returns {Promise<boolean>}
     */
    isGpsLocationAvailable(): Promise<boolean>;
    /**
     * Checks if location mode is set to return high-accuracy locations from GPS hardware.
     *   Returns true if Location mode is enabled and is set to either:
     *   - Device only = GPS hardware only (high accuracy)
     *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
     * @returns {Promise<any>}
     */
    isGpsLocationEnabled(): Promise<any>;
    /**
     * Checks if low-accuracy locations are available to the app from network triangulation/WiFi access points.
     * Returns true if Location mode is enabled and is set to "Battery saving" or "High accuracy" AND if the app is authorised to use location.
     * @returns {Promise<any>}
     */
    isNetworkLocationAvailable(): Promise<any>;
    /**
     * Checks if location mode is set to return low-accuracy locations from network triangulation/WiFi access points.
     * Returns true if Location mode is enabled and is set to either:
     *   - Battery saving = network triangulation and Wifi network IDs (low accuracy)
     *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
     * @returns {Promise<any>}
     */
    isNetworkLocationEnabled(): Promise<any>;
    /**
     * Returns the current location mode setting for the device.
     * @returns {Promise<any>}
     */
    getLocationMode(): Promise<any>;
    /**
     * Returns the current authorisation status for a given permission.
     * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     * @param permission
     * @returns {Promise<any>}
     */
    getPermissionAuthorizationStatus(permission: any): Promise<any>;
    /**
     * Returns the current authorisation status for multiple permissions.
     * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     * @param permissions
     * @returns {Promise<any>}
     */
    getPermissionsAuthorizationStatus(permissions: any[]): Promise<any>;
    /**
     * Requests app to be granted authorisation for a runtime permission.
     * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will have no effect as the permissions are already granted at installation time.
     * @param permission
     * @returns {Promise<any>}
     */
    requestRuntimePermission(permission: any): Promise<any>;
    /**
     * Requests app to be granted authorisation for multiple runtime permissions.
     * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     * @param permissions
     * @returns {Promise<any>}
     */
    requestRuntimePermissions(permissions: any[]): Promise<any>;
    /**
     * Indicates if the plugin is currently requesting a runtime permission via the native API.
     * Note that only one request can be made concurrently because the native API cannot handle concurrent requests,
     * so the plugin will invoke the error callback if attempting to make more than one simultaneous request.
     * Multiple permission requests should be grouped into a single call since the native API is setup to handle batch requests of multiple permission groups.
     * @returns {boolean}
     */
    isRequestingPermission(): boolean;
    /**
     * Registers a function to be called when a runtime permission request has completed.
     * Pass in a falsey value to de-register the currently registered function.
     * @param handler {Function}
     */
    registerPermissionRequestCompleteHandler(handler: Function): void;
    /**
     * Checks if the device setting for Bluetooth is switched on.
     * This requires `BLUETOOTH` permission on Android
     * @returns {Promise<boolean>}
     */
    isBluetoothEnabled(): Promise<boolean>;
    /**
     * Checks if the device has Bluetooth capabilities.
     * @returns {Promise<boolean>}
     */
    hasBluetoothSupport(): Promise<boolean>;
    /**
     * Checks if the device has Bluetooth Low Energy (LE) capabilities.
     * @returns {Promise<boolean>}
     */
    hasBluetoothLESupport(): Promise<boolean>;
    /**
     * Checks if the device supports Bluetooth Low Energy (LE) Peripheral mode.
     * @returns {Promise<boolean>}
     */
    hasBluetoothLEPeripheralSupport(): Promise<boolean>;
    /**
     * Checks if the application is authorized to use external storage.
     * @returns {Promise<boolean>}
     */
    isExternalStorageAuthorized(): Promise<boolean>;
    /**
     * CReturns the external storage authorization status for the application.
     * @returns {Promise<boolean>}
     */
    getExternalStorageAuthorizationStatus(): Promise<any>;
    /**
     * Requests external storage authorization for the application.
     * @returns {Promise<any>}
     */
    requestExternalStorageAuthorization(): Promise<any>;
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
    getExternalSdCardDetails(): Promise<any>;
    /**
     * Switches to the wireless settings page in the Settings app. Allows configuration of wireless controls such as Wi-Fi, Bluetooth and Mobile networks.
     */
    switchToWirelessSettings(): void;
    /**
     * Displays NFC settings to allow user to enable NFC.
     */
    switchToNFCSettings(): void;
    /**
     * Checks if NFC hardware is present on device.
     * @returns {Promise<boolean>}
     */
    isNFCPresent(): Promise<boolean>;
    /**
     * Checks if the device setting for NFC is switched on.
     * Note: this operation does not require NFC permission in the manifest.
     * @returns {Promise<boolean>}
     */
    isNFCEnabled(): Promise<boolean>;
    /**
     * Checks if NFC is available to the app. Returns true if the device has NFC capabilities AND if NFC setting is switched on.
     * Note: this operation does not require NFC permission in the manifest.
     * @returns {Promise<any>}
     */
    isNFCAvailable(): Promise<boolean>;
    /**
     * Registers a function to be called when a change in NFC state occurs. Pass in a falsey value to de-register the currently registered function.
     * @param hander {Function} callback function to be called when NFC state changes
     * @returns {Promise<any>}
     */
    registerNFCStateChangeHandler(handler: Function): void;
    /**
     * Checks if the application is authorized to use the Camera Roll in Photos app.
     * @returns {Promise<boolean>}
     */
    isCameraRollAuthorized(): Promise<boolean>;
    /**
     * Returns the authorization status for the application to use the Camera Roll in Photos app.
     * @returns {Promise<string>}
     */
    getCameraRollAuthorizationStatus(): Promise<string>;
    /**
     * Requests camera roll authorization for the application.
     * Should only be called if authorization status is NOT_REQUESTED.
     * Calling it when in any other state will have no effect.
     * @returns {Promise<any>}
     */
    requestCameraRollAuthorization(): Promise<any>;
    /**
     * Checks if remote (push) notifications are enabled.
     * @returns {Promise<boolean>}
     */
    isRemoteNotificationsEnabled(): Promise<boolean>;
    /**
     * Indicates if the app is registered for remote (push) notifications on the device.
     * @returns {Promise<boolean>}
     */
    isRegisteredForRemoteNotifications(): Promise<boolean>;
    /**
     * Indicates the current setting of notification types for the app in the Settings app.
     * Note: on iOS 8+, if "Allow Notifications" switch is OFF, all types will be returned as disabled.
     * @returns {Promise<any>}
     */
    getRemoteNotificationTypes(): Promise<any>;
    /**
     * Checks if the application is authorized to use reminders.
     * @returns {Promise<boolean>}
     */
    isRemindersAuthorized(): Promise<boolean>;
    /**
     * Returns the reminders authorization status for the application.
     * @returns {Promise<any>}
     */
    getRemindersAuthorizationStatus(): Promise<any>;
    /**
     * Requests reminders authorization for the application.
     * @returns {Promise<any>}
     */
    requestRemindersAuthorization(): Promise<any>;
    /**
     * Checks if the application is authorized for background refresh.
     * @returns {Promise<boolean>}
     */
    isBackgroundRefreshAuthorized(): Promise<boolean>;
    /**
     * Returns the background refresh authorization status for the application.
     * @returns {Promise<any>}
     */
    getBackgroundRefreshStatus(): Promise<any>;
    /**
     * Requests Bluetooth authorization for the application.
     *
     * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#requestbluetoothauthorization)
     * @return {Promise<any>}
     */
    requestBluetoothAuthorization(): Promise<any>;
    /**
     * Checks if motion tracking is available on the current device.
     * @return {Promise<boolean>}
     */
    isMotionAvailable(): Promise<boolean>;
    /**
     * Checks if it's possible to determine the outcome of a motion authorization request on the current device.
     * There's no direct way to determine if authorization was granted or denied, so the Pedometer API must be used to indirectly determine this:
     * therefore, if the device supports motion tracking but not Pedometer Event Tracking, the outcome of requesting motion detection cannot be determined.
     *
     * @return {Promise<boolean>}
     */
    isMotionRequestOutcomeAvailable(): Promise<boolean>;
    /**
     * Requests and checks motion authorization for the application: there is no way to independently request only or check only, so both must be done in one operation.
     *
     * Learn more about this method [here](https://github.com/dpa99c/cordova-diagnostic-plugin#requestandcheckmotionauthorization)
     *
     * @return {Promise<any>}
     */
    requestAndCheckMotionAuthorization(): Promise<any>;
}
