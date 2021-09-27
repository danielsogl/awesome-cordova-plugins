import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

export interface OpenALPROptions {
  /** Country used for scanning the license plate */
  country?: string;

  /** Amount of results returned */
  amount?: number;
}

export interface OpenALPRResult {
  /** LicensePlate */
  number: string;
  /** Probability */
  confidence: number;
}

/**
 * @name OpenALPR
 * @description
 * This Cordova plugin adds support for the OpenALPR (Automatic License Plate Recognition) library, which provides support for retrieving the license plate from a picture.
 * @usage
 * ```typescript
 * import { OpenALPR, OpenALPROptions, OpenALPRResult } from '@awesome-cordova-plugins/openalpr/ngx';
 *
 *
 * constructor(private openALPR: OpenALPR) { }
 *
 * const scanOptions: OpenALPROptions = {
 *    country: this.openALPR.Country.EU,
 *    amount: 3
 * }
 *
 * // To get imageData, you can use the @awesome-cordova-plugins/camera module for example. It works with DestinationType.FILE_URI and DATA_URL
 *
 * this.openALPR.scan(imageData, scanOptions)
 *   .then((res: [OpenALPRResult]) => console.log(res))
 *   .catch((error: Error) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'OpenALPR',
  plugin: 'cordova-plugin-openalpr',
  pluginRef: 'cordova.plugins.OpenALPR',
  repo: 'https://github.com/iMicknl/cordova-plugin-openalpr',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class OpenALPR extends AwesomeCordovaNativePlugin {
  Country = {
    AU: 'au',
    BR: 'br',
    BR2: 'br2',
    EU: 'eu',
    IN: 'in',
    KR2: 'kr2',
    US: 'us',
    VN2: 'vn2',
  };

  /**
   * This function does something
   *
   * @param imageData {any} Base64 encoding of the image data or the image file URI
   * @param options {OpenALPROptions} Options to pass to the OpenALPR scanner
   * @returns {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  scan(imageData: any, options?: OpenALPROptions): Promise<any> {
    return;
  }
}
