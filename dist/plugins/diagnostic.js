"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Diagnostic
 * @description
 * Checks whether device hardware features are enabled or available to the app, e.g. camera, GPS, wifi
 *
 * @usage
 * ```typescript
 * import { Diagnostic } from 'ionic-native';
 *
 * let successCallback = (isAvailable) => { console.log('Is available? ' + isAvailable); };
 * let errorCallback = (e) => console.error(e);
 *
 * Diagnostic.isCameraAvailable().then(successCallback).catch(errorCallback);
 *
 * Diagnostic.isBluetoothAvailable().then(successCallback, errorCallback);
 *
 *
 * Diagnostic.getBluetoothState()
 *   .then((state) => {
 *     if (state == Diagnostic.bluetoothStates.POWERED_ON){
 *       // do something
 *     } else {
 *       // do something else
 *     }
 *   }).catch(e => console.error(e));
 *
 * ```
 */
var Diagnostic = (function () {
    function Diagnostic() {
    }
    /**
     * Checks if app is able to access device location.
     * @returns {Promise<any>}
     */
    Diagnostic.isLocationAvailable = function () { return; };
    /**
     * Checks if Wifi is connected/enabled. On iOS this returns true if the device is connected to a network by WiFi. On Android and Windows 10 Mobile this returns true if the WiFi setting is set to enabled.
     * On Android this requires permission. `<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />`
     * @returns {Promise<any>}
     */
    Diagnostic.isWifiAvailable = function () { return; };
    /**
     * Checks if the device has a camera. On Android this returns true if the device has a camera. On iOS this returns true if both the device has a camera AND the application is authorized to use it. On Windows 10 Mobile this returns true if both the device has a rear-facing camera AND the
     * application is authorized to use it.
     * @returns {Promise<any>}
     */
    Diagnostic.isCameraAvailable = function () { return; };
    /**
     * Checks if the device has Bluetooth capabilities and if so that Bluetooth is switched on (same on Android, iOS and Windows 10 Mobile)
     * On Android this requires permission <uses-permission android:name="android.permission.BLUETOOTH" />
     * @returns {Promise<any>}
     */
    Diagnostic.isBluetoothAvailable = function () { return; };
    /**
     * Displays the device location settings to allow user to enable location services/change location mode.
     */
    Diagnostic.switchToLocationSettings = function () { };
    /**
     * Displays mobile settings to allow user to enable mobile data.
     */
    Diagnostic.switchToMobileDataSettings = function () { };
    /**
     * Displays Bluetooth settings to allow user to enable Bluetooth.
     */
    Diagnostic.switchToBluetoothSettings = function () { };
    /**
     * Displays WiFi settings to allow user to enable WiFi.
     */
    Diagnostic.switchToWifiSettings = function () { };
    /**
     * Returns true if the WiFi setting is set to enabled, and is the same as `isWifiAvailable()`
     * @returns {Promise<boolean>}
     */
    Diagnostic.isWifiEnabled = function () { return; };
    /**
     * Enables/disables WiFi on the device.
     * Requires `ACCESS_WIFI_STATE` and `CHANGE_WIFI_STATE` permissions on Android
     * @param state {boolean}
     */
    Diagnostic.setWifiState = function (state) { return; };
    /**
     * Enables/disables Bluetooth on the device.
     * Requires `BLUETOOTH` and `BLUETOOTH_ADMIN` permissions on Android
     * @param state {boolean}
     */
    Diagnostic.setBluetoothState = function (state) { return; };
    /**
     * Returns true if the device setting for location is on. On Android this returns true if Location Mode is switched on. On iOS this returns true if Location Services is switched on.
     * @returns {Promise<boolean>}
     */
    Diagnostic.isLocationEnabled = function () { return; };
    /**
     * Checks if the application is authorized to use location.
     * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     * @returns {Promise<any>}
     */
    Diagnostic.isLocationAuthorized = function () { return; };
    /**
     * Returns the location authorization status for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.getLocationAuthorizationStatus = function () { return; };
    /**
     * Returns the location authorization status for the application.
     * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     *
     * mode - (iOS-only / optional) location authorization mode: "always" or "when_in_use". If not specified, defaults to "when_in_use".
     * @returns {Promise<any>}
     */
    Diagnostic.requestLocationAuthorization = function (mode) { return; };
    /**
     * Checks if camera hardware is present on device.
     * @returns {Promise<any>}
     */
    Diagnostic.isCameraPresent = function () { return; };
    /**
     * Checks if the application is authorized to use the camera.
     * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
     * @returns {Promise<any>}
     */
    Diagnostic.isCameraAuthorized = function () { return; };
    /**
     * Returns the camera authorization status for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.getCameraAuthorizationStatus = function () { return; };
    /**
     * Requests camera authorization for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.requestCameraAuthorization = function () { return; };
    /**
     * Checks if the application is authorized to use the microphone.
     * @returns {Promise<boolean>}
     */
    Diagnostic.isMicrophoneAuthorized = function () { return; };
    /**
     * Returns the microphone authorization status for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.getMicrophoneAuthorizationStatus = function () { return; };
    /**
     * Requests microphone authorization for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.requestMicrophoneAuthorization = function () { return; };
    /**
     * Checks if the application is authorized to use contacts (address book).
     * @returns {Promise<boolean>}
     */
    Diagnostic.isContactsAuthorized = function () { return; };
    /**
     * Returns the contacts authorization status for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.getContactsAuthroizationStatus = function () { return; };
    /**
     * Requests contacts authorization for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.requestContactsAuthorization = function () { return; };
    /**
     * Checks if the application is authorized to use the calendar.
     *
     * Notes for Android:
     *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
     *
     * Notes for iOS:
     *   - This relates to Calendar Events (not Calendar Reminders)
     * @returns {Promise<any>}
     */
    Diagnostic.isCalendarAuthorized = function () { return; };
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
    Diagnostic.getCalendarAuthorizationStatus = function () { return; };
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
    Diagnostic.requestCalendarAuthorization = function () { return; };
    /**
     * Opens settings page for this app.
     * On Android, this opens the "App Info" page in the Settings app.
     * On iOS, this opens the app settings page in the Settings app. This works only on iOS 8+ - iOS 7 and below will invoke the errorCallback.
     * @returns {Promise<any>}
     */
    Diagnostic.switchToSettings = function () { return; };
    /**
     * Returns the state of Bluetooth on the device.
     * @returns {Promise<any>}
     */
    Diagnostic.getBluetoothState = function () { return; };
    /**
     * Registers a function to be called when a change in Bluetooth state occurs.
     * @param handler
     */
    Diagnostic.registerBluetoothStateChangeHandler = function (handler) { };
    /**
     * Registers a function to be called when a change in Location state occurs.
     * @param handler
     */
    Diagnostic.registerLocationStateChangeHandler = function (handler) { };
    /**
     * Checks if high-accuracy locations are available to the app from GPS hardware.
     * Returns true if Location mode is enabled and is set to "Device only" or "High accuracy" AND if the app is authorised to use location.
     * @returns {Promise<any>}
     */
    Diagnostic.isGpsLocationAvailable = function () { return; };
    /**
     * Checks if location mode is set to return high-accuracy locations from GPS hardware.
     *   Returns true if Location mode is enabled and is set to either:
     *   - Device only = GPS hardware only (high accuracy)
     *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
     */
    Diagnostic.isGpsLocationEnabled = function () { return; };
    /**
     * Checks if low-accuracy locations are available to the app from network triangulation/WiFi access points.
     * Returns true if Location mode is enabled and is set to "Battery saving" or "High accuracy" AND if the app is authorised to use location.
     * @returns {Promise<any>}
     */
    Diagnostic.isNetworkLocationAvailable = function () { return; };
    /**
     * Checks if location mode is set to return low-accuracy locations from network triangulation/WiFi access points.
     * Returns true if Location mode is enabled and is set to either:
     *   - Battery saving = network triangulation and Wifi network IDs (low accuracy)
     *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
     * @returns {Promise<any>}
     */
    Diagnostic.isNetworkLocationEnabled = function () { return; };
    /**
     * Returns the current location mode setting for the device.
     * @returns {Promise<any>}
     */
    Diagnostic.getLocationMode = function () { return; };
    /**
     * Returns the current authorisation status for a given permission.
     * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     * @param permission
     * @returns {Promise<any>}
     */
    Diagnostic.getPermissionAuthorizationStatus = function (permission) { return; };
    /**
     * Returns the current authorisation status for multiple permissions.
     * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     * @param permissions
     * @returns {Promise<any>}
     */
    Diagnostic.getPermissionsAuthorizationStatus = function (permissions) { return; };
    /**
     * Requests app to be granted authorisation for a runtime permission.
     * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will have no effect as the permissions are already granted at installation time.
     * @param permission
     * @returns {Promise<any>}
     */
    Diagnostic.requestRuntimePermission = function (permission) { return; };
    /**
     * Requests app to be granted authorisation for multiple runtime permissions.
     * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     * @param permissions
     * @returns {Promise<any>}
     */
    Diagnostic.requestRuntimePermissions = function (permissions) { return; };
    /**
     * Checks if the device setting for Bluetooth is switched on.
     * This requires `BLUETOOTH` permission on Android
     * @returns {Promise<boolean>}
     */
    Diagnostic.isBluetoothEnabled = function () { return; };
    /**
     * Checks if the device has Bluetooth capabilities.
     * @returns {Promise<boolean>}
     */
    Diagnostic.hasBluetoothSupport = function () { return; };
    /**
     * Checks if the device has Bluetooth Low Energy (LE) capabilities.
     * @returns {Promise<boolean>}
     */
    Diagnostic.hasBluetoothLESupport = function () { return; };
    /**
     * Checks if the device supports Bluetooth Low Energy (LE) Peripheral mode.
     * @returns {Promise<boolean>}
     */
    Diagnostic.hasBluetoothLEPeripheralSupport = function () { return; };
    /**
     * Checks if the application is authorized to use the Camera Roll in Photos app.
     * @returns {Promise<boolean>}
     */
    Diagnostic.isCameraRollAuthorized = function () { return; };
    /**
     * Returns the authorization status for the application to use the Camera Roll in Photos app.
     * @returns {Promise<boolean>}
     */
    Diagnostic.getCameraRollAuthorizationStatus = function () { return; };
    /**
     * Requests camera roll authorization for the application.
     * Should only be called if authorization status is NOT_REQUESTED.
     * Calling it when in any other state will have no effect.
     * @returns {Promise<any>}
     */
    Diagnostic.requestCameraRollAuthorization = function () { return; };
    /**
     * Checks if remote (push) notifications are enabled.
     * @returns {Promise<boolean>}
     */
    Diagnostic.isRemoteNotificationsEnabled = function () { return; };
    /**
     * Indicates if the app is registered for remote (push) notifications on the device.
     * @returns {Promise<boolean>}
     */
    Diagnostic.isRegisteredForRemoteNotifications = function () { return; };
    /**
     * Indicates the current setting of notification types for the app in the Settings app.
     * Note: on iOS 8+, if "Allow Notifications" switch is OFF, all types will be returned as disabled.
     * @returns {Promise<any>}
     */
    Diagnostic.getRemoteNotificationTypes = function () { return; };
    /**
     * Checks if the application is authorized to use reminders.
     * @returns {Promise<boolean>}
     */
    Diagnostic.isRemindersAuthorized = function () { return; };
    /**
     * Returns the reminders authorization status for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.getRemindersAuthorizationStatus = function () { return; };
    /**
     * Requests reminders authorization for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.requestRemindersAuthorization = function () { return; };
    /**
     * Checks if the application is authorized for background refresh.
     * @returns {Promise<boolean>}
     */
    Diagnostic.isBackgroundRefreshAuthorized = function () { return; };
    /**
     * Returns the background refresh authorization status for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.getBackgroundRefreshStatus = function () { return; };
    Diagnostic.permission = {
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
        BODY_SENSORS: 'BODY_SENSORS'
    };
    Diagnostic.permissionStatus = {
        GRANTED: 'GRANTED',
        GRANTED_WHEN_IN_USE: 'GRANTED_WHEN_IN_USE',
        RESTRICTED: 'RESTRICTED',
        DENIED: 'DENIED',
        DENIED_ALWAYS: 'DENIED_ALWAYS',
        NOT_REQUESTED: 'NOT_REQUESTED'
    };
    Diagnostic.locationAuthorizationMode = {
        ALWAYS: 'ALWAYS',
        WHEN_IN_USE: 'WHEN_IN_USE'
    };
    Diagnostic.permissionGroups = {
        CALENDAR: ['READ_CALENDAR', 'WRITE_CALENDAR'],
        CAMERA: ['CAMERA'],
        CONTACTS: ['READ_CONTACTS', 'WRITE_CONTACTS', 'GET_ACCOUNTS'],
        LOCATION: ['ACCESS_FINE_LOCATION', 'ACCESS_COARSE_LOCATION'],
        MICROPHONE: ['RECORD_AUDIO'],
        PHONE: ['READ_PHONE_STATE', 'CALL_PHONE', 'ADD_VOICEMAIL', 'USE_SIP', 'PROCESS_OUTGOING_CALLS', 'READ_CALL_LOG', 'WRITE_CALL_LOG'],
        SENSORS: ['BODY_SENSORS'],
        SMS: ['SEND_SMS', 'RECEIVE_SMS', 'READ_SMS', 'RECEIVE_WAP_PUSH', 'RECEIVE_MMS'],
        STORAGE: ['READ_EXTERNAL_STORAGE', 'WRITE_EXTERNAL_STORAGE']
    };
    Diagnostic.locationMode = {
        HIGH_ACCURACY: 'high_accuracy',
        DEVICE_ONLY: 'device_only',
        BATTERY_SAVING: 'battery_saving',
        LOCATION_OFF: 'location_off'
    };
    Diagnostic.bluetoothState = {
        UNKNOWN: 'unknown',
        RESETTING: 'resetting',
        UNSUPPORTED: 'unsupported',
        UNAUTHORIZED: 'unauthorized',
        POWERED_OFF: 'powered_off',
        POWERED_ON: 'powered_on',
        POWERING_OFF: 'powering_off',
        POWERING_ON: 'powering_on'
    };
    __decorate([
        plugin_1.Cordova()
    ], Diagnostic, "isLocationAvailable", null);
    __decorate([
        plugin_1.Cordova()
    ], Diagnostic, "isWifiAvailable", null);
    __decorate([
        plugin_1.Cordova()
    ], Diagnostic, "isCameraAvailable", null);
    __decorate([
        plugin_1.Cordova()
    ], Diagnostic, "isBluetoothAvailable", null);
    __decorate([
        plugin_1.Cordova({ sync: true, platforms: ['Android', 'Windows 10'] })
    ], Diagnostic, "switchToLocationSettings", null);
    __decorate([
        plugin_1.Cordova({ sync: true, platforms: ['Android', 'Windows 10'] })
    ], Diagnostic, "switchToMobileDataSettings", null);
    __decorate([
        plugin_1.Cordova({ sync: true, platforms: ['Android', 'Windows 10'] })
    ], Diagnostic, "switchToBluetoothSettings", null);
    __decorate([
        plugin_1.Cordova({ sync: true, platforms: ['Android', 'Windows 10'] })
    ], Diagnostic, "switchToWifiSettings", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'Windows 10'] })
    ], Diagnostic, "isWifiEnabled", null);
    __decorate([
        plugin_1.Cordova({ callbackOrder: 'reverse', platforms: ['Android', 'Windows 10'] })
    ], Diagnostic, "setWifiState", null);
    __decorate([
        plugin_1.Cordova({ callbackOrder: 'reverse', platforms: ['Android', 'Windows 10'] })
    ], Diagnostic, "setBluetoothState", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "isLocationEnabled", null);
    __decorate([
        plugin_1.Cordova()
    ], Diagnostic, "isLocationAuthorized", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "getLocationAuthorizationStatus", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "requestLocationAuthorization", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "isCameraPresent", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "isCameraAuthorized", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "getCameraAuthorizationStatus", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "requestCameraAuthorization", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "isMicrophoneAuthorized", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "getMicrophoneAuthorizationStatus", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "requestMicrophoneAuthorization", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "isContactsAuthorized", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "getContactsAuthroizationStatus", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "requestContactsAuthorization", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "isCalendarAuthorized", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "getCalendarAuthorizationStatus", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "requestCalendarAuthorization", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "switchToSettings", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "getBluetoothState", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'], sync: true })
    ], Diagnostic, "registerBluetoothStateChangeHandler", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'], sync: true })
    ], Diagnostic, "registerLocationStateChangeHandler", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android'] })
    ], Diagnostic, "isGpsLocationAvailable", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android'] })
    ], Diagnostic, "isGpsLocationEnabled", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android'] })
    ], Diagnostic, "isNetworkLocationAvailable", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android'] })
    ], Diagnostic, "isNetworkLocationEnabled", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android'] })
    ], Diagnostic, "getLocationMode", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android'], callbackOrder: 'reverse' })
    ], Diagnostic, "getPermissionAuthorizationStatus", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android'], callbackOrder: 'reverse' })
    ], Diagnostic, "getPermissionsAuthorizationStatus", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android'], callbackOrder: 'reverse' })
    ], Diagnostic, "requestRuntimePermission", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android'], callbackOrder: 'reverse' })
    ], Diagnostic, "requestRuntimePermissions", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android'] })
    ], Diagnostic, "isBluetoothEnabled", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android'] })
    ], Diagnostic, "hasBluetoothSupport", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android'] })
    ], Diagnostic, "hasBluetoothLESupport", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android'] })
    ], Diagnostic, "hasBluetoothLEPeripheralSupport", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['iOS'] })
    ], Diagnostic, "isCameraRollAuthorized", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['iOS'] })
    ], Diagnostic, "getCameraRollAuthorizationStatus", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['iOS'] })
    ], Diagnostic, "requestCameraRollAuthorization", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['iOS'] })
    ], Diagnostic, "isRemoteNotificationsEnabled", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['iOS'] })
    ], Diagnostic, "isRegisteredForRemoteNotifications", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['iOS'] })
    ], Diagnostic, "getRemoteNotificationTypes", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['iOS'] })
    ], Diagnostic, "isRemindersAuthorized", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['iOS'] })
    ], Diagnostic, "getRemindersAuthorizationStatus", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['iOS'] })
    ], Diagnostic, "requestRemindersAuthorization", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['iOS'] })
    ], Diagnostic, "isBackgroundRefreshAuthorized", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['iOS'] })
    ], Diagnostic, "getBackgroundRefreshStatus", null);
    Diagnostic = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova.plugins.diagnostic',
            pluginRef: 'cordova.plugins.diagnostic',
            repo: 'https://github.com/dpa99c/cordova-diagnostic-plugin'
        })
    ], Diagnostic);
    return Diagnostic;
}());
exports.Diagnostic = Diagnostic;
//# sourceMappingURL=diagnostic.js.map