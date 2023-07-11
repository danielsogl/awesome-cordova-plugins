import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

export interface AnylineConfig {
  [key: string]: any;
}

/**
 * @name Anyline
 * @description
 * Anyline provides an easy-to-use SDK for applications to enable Optical Character Recognition (OCR) on mobile devices.
 * @usage
 * ```typescript
 * import { Anyline } from '@awesome-cordova-plugins/anyline/ngx';
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
  plugin: 'io-anyline-cordova',
  pluginRef: 'Anyline',
  repo: 'https://github.com/Anyline/anyline-ocr-cordova-module',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Anyline extends AwesomeCordovaNativePlugin {
  @Cordova()
  checkLicense(licenseKey: string): Promise<any> {
    return;
  }

  @Cordova()
  initAnylineSDK(licenseKey: string): Promise<any> {
    return;
  }

  @Cordova()
  getSDKVersion(): Promise<any> {
    return;
  }

  /**
   * Scan
   *
   * @param config {AnylineConfig} Scanning options
   * @returns {Promise<any>} Returns a promise that resolves when Code is captured
   */
  @Cordova()
  scan(config: AnylineConfig): Promise<any> {
    return;
  }
}
