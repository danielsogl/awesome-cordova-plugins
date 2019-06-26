import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

export interface AnylineOptions {
  // Valid License Key
  licenseKey: string;

  // Scanning options
  config: any;
}

/**
 * @name Anyline
 * @description
 * Anyline provides an easy-to-use SDK for applications to enable Optical Character Recognition (OCR) on mobile devices.
 *
 * @usage
 * ```typescript
 * import { Anyline } from '@ionic-native/anyline/ngx';
 *
 *
 * constructor(private anyline: Anyline) { }
 *
 * ...
 *
 *
 * this.anyline.scan(options)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'Anyline',
  plugin: 'cordova-plugin-anyline', // npm package name, example: cordova-plugin-camera
  pluginRef: 'window.Anyline', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/niconaso/anyline-ocr-cordova-module', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android', 'iOS', 'Windows'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class Anyline extends IonicNativePlugin {
  /**
   * Scan
   * @param options {AnylineOptions} Scanning options
   * @return {Promise<any>} Returns a promise that resolves when Code is captured
   */
  @Cordova()
  scan(options: AnylineOptions): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
}
