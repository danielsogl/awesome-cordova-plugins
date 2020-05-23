import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export interface FingerprintOptions {
  /**
   * Title in biometric prompt (android only)
   * @default {APP_NAME} Biometric Sign On
   */
  title?: string;

  /**
   * Subtitle in biometric Prompt (android only)
   * @default null
   */
  subtitle?: string;

  /**
   * Description in biometric Prompt
   * @default null
   */
  description?: string;

  /**
   * Title of fallback button.
   * @default "Use Pin"
   */
  fallbackButtonTitle?: string;

  /**
   * Title for cancel button on Android
   * @default "Cancel"
   */
  cancelButtonTitle?: string;

  /**
   * Disable 'use backup' option.
   * @default false
   */
  disableBackup?: boolean;
}

/**
 * @name Fingerprint AIO
 * @description
 * Use simple fingerprint authentication on Android and iOS.
 * Requires Cordova plugin: cordova-plugin-fingerprint-aio. For more info about plugin, vist: https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio
 *
 * @usage
 * ```typescript
 * import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
 *
 * constructor(private faio: FingerprintAIO) { }
 *
 * ...
 *
 * this.faio.show().then((result: any) => console.log(result)).catch((error: any) => console.log(error));
 *
 *  OR with options...
 *
 * this.faio.show({
 *     title: 'Biometric Authentication', // (Android Only) | optional | Default: "<APP_NAME> Biometric Sign On"
 *     subtitle: 'Coolest Plugin ever' // (Android Only) | optional | Default: null
 *     description: 'Please authenticate' // optional | Default: null
 *     fallbackButtonTitle: 'Use Backup', // optional | When disableBackup is false defaults to "Use Pin".
 *                                        // When disableBackup is true defaults to "Cancel"
 *     disableBackup:true,  // optional | default: false
 * })
 * .then((result: any) => console.log(result))
 * .catch((error: any) => console.log(error));
 *
 * ```
 * @interfaces
 * FingerprintOptions
 */
@Plugin({
  pluginName: 'FingerprintAIO',
  plugin: 'cordova-plugin-fingerprint-aio',
  pluginRef: 'Fingerprint',
  repo: 'https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class FingerprintAIO extends IonicNativePlugin {
  /**
   * Convenience constant
   * @type {number}
   */
  BIOMETRIC_UNKNOWN_ERROR = -100;
  /**
   * Convenience constant
   * @type {number}
   */
  BIOMETRIC_UNAVAILABLE = -101;
  /**
   * Convenience constant
   * @type {number}
   */
  BIOMETRIC_AUTHENTICATION_FAILED = -102;
  /**
   * Convenience constant
   * @type {number}
   */
  BIOMETRIC_SDK_NOT_SUPPORTED = -103;
  /**
   * Convenience constant
   * @type {number}
   */
  BIOMETRIC_HARDWARE_NOT_SUPPORTED = -104;
  /**
   * Convenience constant
   * @type {number}
   */
  BIOMETRIC_PERMISSION_NOT_GRANTED = -105;
  /**
   * Convenience constant
   * @type {number}
   */
  BIOMETRIC_NOT_ENROLLED = -106;
  /**
   * Convenience constant
   * @type {number}
   */
  BIOMETRIC_INTERNAL_PLUGIN_ERROR = -107;
  /**
   * Convenience constant
   * @type {number}
   */
  BIOMETRIC_DISMISSED = -108;
  /**
   * Convenience constant
   * @type {number}
   */
  BIOMETRIC_PIN_OR_PATTERN_DISMISSED = -109;
  /**
   * Convenience constant
   * @type {number}
   */
  BIOMETRIC_SCREEN_GUARD_UNSECURED = -110;
  /**
   * Convenience constant
   * @type {number}
   */
  BIOMETRIC_LOCKED_OUT = -111;
  /**
   * Convenience constant
   * @type {number}
   */
  BIOMETRIC_LOCKED_OUT_PERMANENT = -112;

  /**
   * Check if fingerprint authentication is available
   * @return {Promise<any>} Returns a promise with result
   */
  @Cordova()
  isAvailable(): Promise<any> {
    return;
  }

  /**
   * Show authentication dialogue
   * @param {FingerprintOptions} options Options for platform specific fingerprint API
   * @return {Promise<any>} Returns a promise that resolves when authentication was successful
   */
  @Cordova()
  show(options: FingerprintOptions): Promise<any> {
    return;
  }
}
