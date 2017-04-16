import { Injectable } from '@angular/core';
import { Plugin, Cordova } from '@ionic-native/core';


export interface FingerprintOptions {
  /**
   * Key for platform keychain
   */
  clientId: string;

  /**
   * Secret password. Only for android
   */
  clientSecret?: string;

  /**
   * Disable 'use backup' option. Only for android (optional)
   */
  disableBackup?: boolean;
}

/**
 * @beta
 * @name Fingerprint AIO
 * @description
 * Use simple fingerprint authentication on Android and iOS.
 * Requires Cordova plugin: cordova-plugin-fingerprint-aio. For more info about plugin, vist: https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio
 *
 * @usage
 * ```typescript
 * import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
 *
 * constructor(private faio: FingerprintAIO) { }
 *
 * ...
 *
 * this.faio.show({
 *     clientId: "Fingerprint-Demo",
 *     clientSecret: "password", //Only necessary for Android
 *     disableBackup:true  //Only for Android(optional)
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
  platforms: ['Android', 'iOS']
})
@Injectable()
export class FingerprintAIO {

  /**
   * Check if fingerprint authentication is available
   * @return {Promise<any>} Returns a promise with result
   */
  @Cordova()
  isAvailable(): Promise<any> { return; }

  /**
   * Show authentication dialogue
   * @param options {FingerprintOptions} options for platform specific fingerprint API
   * @return {Promise<any>} Returns a promise that resolves when authentication was successfull
   */
  @Cordova()
  show(options: FingerprintOptions): Promise<any> { return; }

}
