import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name Android Permissions
 * @premier android-permissions
 * @description
 * This plugin is designed to support Android new permissions checking mechanism.
 *
 * You can find all permissions here: https://developer.android.com/reference/android/Manifest.permission.html
 * @usage
 * ```
 * import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
 *
 *
 * constructor(private androidPermissions: AndroidPermissions) { }
 *
 * ...
 *
 * this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
 *   result => console.log('Has permission?',result.hasPermission),
 *   err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
 * );
 *
 * this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
 *
 * ```
 *
 * Android 26 and above: due to Android 26's changes to permissions handling (permissions are requested at time of use rather than at runtime,) if your app does not include any functions (eg. other Ionic Native plugins) that utilize a particular permission, then `requestPermission()` and `requestPermissions()` will resolve immediately with no prompt shown to the user.  Thus, you must include a function utilizing the feature you would like to use before requesting permission for it.
 */
@Plugin({
  pluginName: 'AndroidPermissions',
  plugin: 'cordova-plugin-android-permissions',
  pluginRef: 'cordova.plugins.permissions',
  repo: 'https://github.com/NeoLSN/cordova-plugin-android-permissions',
  platforms: ['Android'],
})
@Injectable()
export class AndroidPermissions extends AwesomeCordovaNativePlugin {
  PERMISSION: any = {
    ACCESS_CHECKIN_PROPERTIES: 'android.permission.ACCESS_CHECKIN_PROPERTIES',
    ACCESS_COARSE_LOCATION: 'android.permission.ACCESS_COARSE_LOCATION',
    ACCESS_FINE_LOCATION: 'android.permission.ACCESS_FINE_LOCATION',
    ACCESS_LOCATION_EXTRA_COMMANDS: 'android.permission.ACCESS_LOCATION_EXTRA_COMMANDS',
    ACCESS_MOCK_LOCATION: 'android.permission.ACCESS_MOCK_LOCATION',
    ACCESS_NETWORK_STATE: 'android.permission.ACCESS_NETWORK_STATE',
    ACCESS_SURFACE_FLINGER: 'android.permission.ACCESS_SURFACE_FLINGER',
    ACCESS_WIFI_STATE: 'android.permission.ACCESS_WIFI_STATE',
    ACCOUNT_MANAGER: 'android.permission.ACCOUNT_MANAGER',
    ADD_VOICEMAIL: 'com.android.voicemail.permission.ADD_VOICEMAIL',
    AUTHENTICATE_ACCOUNTS: 'android.permission.AUTHENTICATE_ACCOUNTS',
    BATTERY_STATS: 'android.permission.BATTERY_STATS',
    BIND_ACCESSIBILITY_SERVICE: 'android.permission.BIND_ACCESSIBILITY_SERVICE',
    BIND_APPWIDGET: 'android.permission.BIND_APPWIDGET',
    BIND_CARRIER_MESSAGING_SERVICE: 'android.permission.BIND_CARRIER_MESSAGING_SERVICE',
    BIND_DEVICE_ADMIN: 'android.permission.BIND_DEVICE_ADMIN',
    BIND_DREAM_SERVICE: 'android.permission.BIND_DREAM_SERVICE',
    BIND_INPUT_METHOD: 'android.permission.BIND_INPUT_METHOD',
    BIND_NFC_SERVICE: 'android.permission.BIND_NFC_SERVICE',
    BIND_NOTIFICATION_LISTENER_SERVICE: 'android.permission.BIND_NOTIFICATION_LISTENER_SERVICE',
    BIND_PRINT_SERVICE: 'android.permission.BIND_PRINT_SERVICE',
    BIND_REMOTEVIEWS: 'android.permission.BIND_REMOTEVIEWS',
    BIND_TEXT_SERVICE: 'android.permission.BIND_TEXT_SERVICE',
    BIND_TV_INPUT: 'android.permission.BIND_TV_INPUT',
    BIND_VOICE_INTERACTION: 'android.permission.BIND_VOICE_INTERACTION',
    BIND_VPN_SERVICE: 'android.permission.BIND_VPN_SERVICE',
    BIND_WALLPAPER: 'android.permission.BIND_WALLPAPER',
    BLUETOOTH: 'android.permission.BLUETOOTH',
    BLUETOOTH_ADMIN: 'android.permission.BLUETOOTH_ADMIN',
    BLUETOOTH_ADVERTISE: 'android.permission.BLUETOOTH_ADVERTISE',
    BLUETOOTH_CONNECT: 'android.permission.BLUETOOTH_CONNECT',
    BLUETOOTH_PRIVILEGED: 'android.permission.BLUETOOTH_PRIVILEGED',
    BLUETOOTH_SCAN: 'android.permission.BLUETOOTH_SCAN',
    BODY_SENSORS: 'android.permission.BODY_SENSORS',
    BRICK: 'android.permission.BRICK',
    BROADCAST_PACKAGE_REMOVED: 'android.permission.BROADCAST_PACKAGE_REMOVED',
    BROADCAST_SMS: 'android.permission.BROADCAST_SMS',
    BROADCAST_STICKY: 'android.permission.BROADCAST_STICKY',
    BROADCAST_WAP_PUSH: 'android.permission.BROADCAST_WAP_PUSH',
    CALL_PHONE: 'android.permission.CALL_PHONE',
    CALL_PRIVILEGED: 'android.permission.CALL_PRIVILEGED',
    CAMERA: 'android.permission.CAMERA',
    CAPTURE_AUDIO_OUTPUT: 'android.permission.CAPTURE_AUDIO_OUTPUT',
    CAPTURE_SECURE_VIDEO_OUTPUT: 'android.permission.CAPTURE_SECURE_VIDEO_OUTPUT',
    CAPTURE_VIDEO_OUTPUT: 'android.permission.CAPTURE_VIDEO_OUTPUT',
    CHANGE_COMPONENT_ENABLED_STATE: 'android.permission.CHANGE_COMPONENT_ENABLED_STATE',
    CHANGE_CONFIGURATION: 'android.permission.CHANGE_CONFIGURATION',
    CHANGE_NETWORK_STATE: 'android.permission.CHANGE_NETWORK_STATE',
    CHANGE_WIFI_MULTICAST_STATE: 'android.permission.CHANGE_WIFI_MULTICAST_STATE',
    CHANGE_WIFI_STATE: 'android.permission.CHANGE_WIFI_STATE',
    CLEAR_APP_CACHE: 'android.permission.CLEAR_APP_CACHE',
    CLEAR_APP_USER_DATA: 'android.permission.CLEAR_APP_USER_DATA',
    CONTROL_LOCATION_UPDATES: 'android.permission.CONTROL_LOCATION_UPDATES',
    DELETE_CACHE_FILES: 'android.permission.DELETE_CACHE_FILES',
    DELETE_PACKAGES: 'android.permission.DELETE_PACKAGES',
    DEVICE_POWER: 'android.permission.DEVICE_POWER',
    DIAGNOSTIC: 'android.permission.DIAGNOSTIC',
    DISABLE_KEYGUARD: 'android.permission.DISABLE_KEYGUARD',
    DUMP: 'android.permission.DUMP',
    EXPAND_STATUS_BAR: 'android.permission.EXPAND_STATUS_BAR',
    FACTORY_TEST: 'android.permission.FACTORY_TEST',
    FLASHLIGHT: 'android.permission.FLASHLIGHT',
    FORCE_BACK: 'android.permission.FORCE_BACK',
    GET_ACCOUNTS: 'android.permission.GET_ACCOUNTS',
    GET_PACKAGE_SIZE: 'android.permission.GET_PACKAGE_SIZE',
    GET_TASKS: 'android.permission.GET_TASKS',
    GET_TOP_ACTIVITY_INFO: 'android.permission.GET_TOP_ACTIVITY_INFO',
    GLOBAL_SEARCH: 'android.permission.GLOBAL_SEARCH',
    HARDWARE_TEST: 'android.permission.HARDWARE_TEST',
    INJECT_EVENTS: 'android.permission.INJECT_EVENTS',
    INSTALL_LOCATION_PROVIDER: 'android.permission.INSTALL_LOCATION_PROVIDER',
    INSTALL_PACKAGES: 'android.permission.INSTALL_PACKAGES',
    INSTALL_SHORTCUT: 'com.android.launcher.permission.INSTALL_SHORTCUT',
    INTERNAL_SYSTEM_WINDOW: 'android.permission.INTERNAL_SYSTEM_WINDOW',
    INTERNET: 'android.permission.INTERNET',
    KILL_BACKGROUND_PROCESSES: 'android.permission.KILL_BACKGROUND_PROCESSES',
    LOCATION_HARDWARE: 'android.permission.LOCATION_HARDWARE',
    MANAGE_ACCOUNTS: 'android.permission.MANAGE_ACCOUNTS',
    MANAGE_APP_TOKENS: 'android.permission.MANAGE_APP_TOKENS',
    MANAGE_DOCUMENTS: 'android.permission.MANAGE_DOCUMENTS',
    MASTER_CLEAR: 'android.permission.MASTER_CLEAR',
    MEDIA_CONTENT_CONTROL: 'android.permission.MEDIA_CONTENT_CONTROL',
    MODIFY_AUDIO_SETTINGS: 'android.permission.MODIFY_AUDIO_SETTINGS',
    MODIFY_PHONE_STATE: 'android.permission.MODIFY_PHONE_STATE',
    MOUNT_FORMAT_FILESYSTEMS: 'android.permission.MOUNT_FORMAT_FILESYSTEMS',
    MOUNT_UNMOUNT_FILESYSTEMS: 'android.permission.MOUNT_UNMOUNT_FILESYSTEMS',
    NFC: 'android.permission.NFC',
    PERSISTENT_ACTIVITY: 'android.permission.PERSISTENT_ACTIVITY',
    POST_NOTIFICATIONS: 'android.permission.POST_NOTIFICATIONS',
    PROCESS_OUTGOING_CALLS: 'android.permission.PROCESS_OUTGOING_CALLS',
    READ_CALENDAR: 'android.permission.READ_CALENDAR',
    READ_CALL_LOG: 'android.permission.READ_CALL_LOG',
    READ_CONTACTS: 'android.permission.READ_CONTACTS',
    READ_EXTERNAL_STORAGE: 'android.permission.READ_EXTERNAL_STORAGE',
    READ_FRAME_BUFFER: 'android.permission.READ_FRAME_BUFFER',
    READ_HISTORY_BOOKMARKS: 'com.android.browser.permission.READ_HISTORY_BOOKMARKS',
    READ_INPUT_STATE: 'android.permission.READ_INPUT_STATE',
    READ_LOGS: 'android.permission.READ_LOGS',
    READ_MEDIA_AUDIO: 'android.permission.READ_MEDIA_AUDIO',
    READ_MEDIA_IMAGES: 'android.permission.READ_MEDIA_IMAGES',
    READ_MEDIA_VIDEO: 'android.permission.READ_MEDIA_VIDEO',
    READ_PHONE_STATE: 'android.permission.READ_PHONE_STATE',
    READ_PROFILE: 'android.permission.READ_PROFILE',
    READ_SMS: 'android.permission.READ_SMS',
    READ_SOCIAL_STREAM: 'android.permission.READ_SOCIAL_STREAM',
    READ_SYNC_SETTINGS: 'android.permission.READ_SYNC_SETTINGS',
    READ_SYNC_STATS: 'android.permission.READ_SYNC_STATS',
    READ_USER_DICTIONARY: 'android.permission.READ_USER_DICTIONARY',
    READ_VOICEMAIL: 'com.android.voicemail.permission.READ_VOICEMAIL',
    REBOOT: 'android.permission.REBOOT',
    RECEIVE_BOOT_COMPLETED: 'android.permission.RECEIVE_BOOT_COMPLETED',
    RECEIVE_MMS: 'android.permission.RECEIVE_MMS',
    RECEIVE_SMS: 'android.permission.RECEIVE_SMS',
    RECEIVE_WAP_PUSH: 'android.permission.RECEIVE_WAP_PUSH',
    RECORD_AUDIO: 'android.permission.RECORD_AUDIO',
    REORDER_TASKS: 'android.permission.REORDER_TASKS',
    RESTART_PACKAGES: 'android.permission.RESTART_PACKAGES',
    SEND_RESPOND_VIA_MESSAGE: 'android.permission.SEND_RESPOND_VIA_MESSAGE',
    SEND_SMS: 'android.permission.SEND_SMS',
    SET_ACTIVITY_WATCHER: 'android.permission.SET_ACTIVITY_WATCHER',
    SET_ALARM: 'com.android.alarm.permission.SET_ALARM',
    SET_ALWAYS_FINISH: 'android.permission.SET_ALWAYS_FINISH',
    SET_ANIMATION_SCALE: 'android.permission.SET_ANIMATION_SCALE',
    SET_DEBUG_APP: 'android.permission.SET_DEBUG_APP',
    SET_ORIENTATION: 'android.permission.SET_ORIENTATION',
    SET_POINTER_SPEED: 'android.permission.SET_POINTER_SPEED',
    SET_PREFERRED_APPLICATIONS: 'android.permission.SET_PREFERRED_APPLICATIONS',
    SET_PROCESS_LIMIT: 'android.permission.SET_PROCESS_LIMIT',
    SET_TIME: 'android.permission.SET_TIME',
    SET_TIME_ZONE: 'android.permission.SET_TIME_ZONE',
    SET_WALLPAPER: 'android.permission.SET_WALLPAPER',
    SET_WALLPAPER_HINTS: 'android.permission.SET_WALLPAPER_HINTS',
    SIGNAL_PERSISTENT_PROCESSES: 'android.permission.SIGNAL_PERSISTENT_PROCESSES',
    STATUS_BAR: 'android.permission.STATUS_BAR',
    SUBSCRIBED_FEEDS_READ: 'android.permission.SUBSCRIBED_FEEDS_READ',
    SUBSCRIBED_FEEDS_WRITE: 'android.permission.SUBSCRIBED_FEEDS_WRITE',
    SYSTEM_ALERT_WINDOW: 'android.permission.SYSTEM_ALERT_WINDOW',
    TRANSMIT_IR: 'android.permission.TRANSMIT_IR',
    UNINSTALL_SHORTCUT: 'com.android.launcher.permission.UNINSTALL_SHORTCUT',
    UPDATE_DEVICE_STATS: 'android.permission.UPDATE_DEVICE_STATS',
    USE_CREDENTIALS: 'android.permission.USE_CREDENTIALS',
    USE_SIP: 'android.permission.USE_SIP',
    VIBRATE: 'android.permission.VIBRATE',
    WAKE_LOCK: 'android.permission.WAKE_LOCK',
    WRITE_APN_SETTINGS: 'android.permission.WRITE_APN_SETTINGS',
    WRITE_CALENDAR: 'android.permission.WRITE_CALENDAR',
    WRITE_CALL_LOG: 'android.permission.WRITE_CALL_LOG',
    WRITE_CONTACTS: 'android.permission.WRITE_CONTACTS',
    WRITE_EXTERNAL_STORAGE: 'android.permission.WRITE_EXTERNAL_STORAGE',
    WRITE_GSERVICES: 'android.permission.WRITE_GSERVICES',
    WRITE_HISTORY_BOOKMARKS: 'com.android.browser.permission.WRITE_HISTORY_BOOKMARKS',
    WRITE_PROFILE: 'android.permission.WRITE_PROFILE',
    WRITE_SECURE_SETTINGS: 'android.permission.WRITE_SECURE_SETTINGS',
    WRITE_SETTINGS: 'android.permission.WRITE_SETTINGS',
    WRITE_SMS: 'android.permission.WRITE_SMS',
    WRITE_SOCIAL_STREAM: 'android.permission.WRITE_SOCIAL_STREAM',
    WRITE_SYNC_SETTINGS: 'android.permission.WRITE_SYNC_SETTINGS',
    WRITE_USER_DICTIONARY: 'android.permission.WRITE_USER_DICTIONARY',
    WRITE_VOICEMAIL: 'com.android.voicemail.permission.WRITE_VOICEMAIL',
  };

  /**
   * Check permission
   * @param {string} permission The name of the permission
   * @returns {Promise<AndroidPermissionResponse>} Returns a promise
   */
  @Cordova()
  checkPermission(permission: string): Promise<AndroidPermissionResponse> {
    return;
  }

  /**
   * Request permission
   * @param {string} permission The name of the permission to request
   * @returns {Promise<AndroidPermissionResponse>}
   */
  @Cordova()
  requestPermission(permission: string): Promise<AndroidPermissionResponse> {
    return;
  }

  /**
   * Request permissions
   * @param {string[]} permissions An array with permissions
   * @returns {Promise<any>} Returns a promise
   */
  @Cordova()
  requestPermissions(permissions: string[]): Promise<any> {
    return;
  }

  /**
   * This function still works now, will not support in the future.
   * @param {string} permission The name of the permission
   * @returns {Promise<AndroidPermissionResponse>} Returns a promise
   */
  @Cordova()
  hasPermission(permission: string): Promise<AndroidPermissionResponse> {
    return;
  }
}

export interface AndroidPermissionResponse {
  hasPermission: boolean;
}
