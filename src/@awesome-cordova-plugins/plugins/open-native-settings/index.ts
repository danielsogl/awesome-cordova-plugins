import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name Open Native Settings
 * @description
 * Plugin to open native screens of iOS/android settings
 * @usage
 * You can open any of these settings:
 * ```
 *  "about", // ios
 *  "accessibility", // ios, android
 *  "account", // ios, android
 *  "airplane_mode", // ios, android
 *  "apn", // android
 *  "application_details", // ios, android
 *  "application_development", // android
 *  "application", // android
 *  "autolock", // ios
 *  "battery_optimization", // android
 *  "bluetooth", // ios, android
 *  "castle", // ios
 *  "captioning", // android
 *  "cast", // android
 *  "cellular_usage", // ios
 *  "configuration_list", // ios
 *  "data_roaming", // android
 *  "date", // ios, android
 *  "display", // ios, android
 *  "dream", // android
 *  "facetime", // ios
 *  "home", // android
 *  "keyboard", // ios, android
 *  "keyboard_subtype", // android
 *  "locale", // ios, android
 * "location", // ios, android
 * "locations", // ios
 * "manage_all_applications", // android
 * "manage_applications", // android
 * "memory_card", // android
 * "music", // ios
 * "music_equalizer", // ios
 * "music_volume", // ios
 * "network", // ios, android
 * "nike_ipod", // ios
 * "nfcsharing", // android
 * "nfc_payment", // android
 * "nfc_settings", // android
 * "notes", // ios
 * "notification_id", // ios
 * "passbook", // ios
 * "phone", // ios
 * "photos", // ios
 * "print", // android
 * "privacy", // android
 * "quick_launch", // android
 * "reset", // ios
 * "ringtone", // ios
 * "browser", // ios
 * "search", // ios, android
 * "security", // android
 * "settings", // ios, android
 * "show_regulatory_info",
 * "sound", // ios, android
 * "software_update", // ios
 * "storage", // ios, android
 * "store", // ios, android
 * "sync", // android
 * "tethering", // ios
 * "twitter", // ios
 * "touch", // ios
 * "usage", // ios, android
 * "user_dictionary", // android
 * "video", // ios
 * "voice_input", // android
 * "vpn", // ios
 * "wallpaper", // ios
 * "wifi_ip", // android
 * "wifi", // ios, android
 * "wireless" // android
 *  ```
 * ```typescript
 * import { OpenNativeSettings } from '@awesome-cordova-plugins/open-native-settings/ngx';
 *
 *
 * constructor(private openNativeSettings: OpenNativeSettings) { }
 *
 * ...
 *
 *
 * ```
 */
@Plugin({
  pluginName: 'OpenNativeSettings',
  plugin: 'cordova-open-native-settings',
  pluginRef: 'cordova.plugins.settings',
  repo: 'https://github.com/guyromb/Cordova-open-native-settings',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class OpenNativeSettings extends AwesomeCordovaNativePlugin {
  /**
   * Opens a setting dialog
   *
   * @param setting {string|array} setting name
   * @returns {Promise<any>}
   */
  @Cordova()
  open(setting: string | [string, boolean]): Promise<any> {
    return;
  }
}
