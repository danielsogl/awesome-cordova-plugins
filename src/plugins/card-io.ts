import { Cordova, Plugin } from './plugin';


/**
 * @name CardIO
 * @description
 * @usage
 * ```
 * import { CardIO } from 'ionic-native';
 *
 *
 * CardIO.canScan()
 *   .then(
 *     (res: boolean) => {
 *       if(res){
 *         let options = {
 *           requireExpiry: true,
 *           requireCCV: false,
 *           requirePostalCode: false
 *         };
 *         CardIO.scan(options);
 *       }
 *     }
 *   );
 * ```
 */
@Plugin({
  plugin: 'https://github.com/card-io/card.io-Cordova-Plugin',
  pluginRef: 'CardIO',
  repo: 'https://github.com/card-io/card.io-Cordova-Plugin',
  platforms: ['iOS', 'Android']
})
export class CardIO {
  /**
   * Check whether card scanning is currently available. (May vary by
   * device, OS version, network connectivity, etc.)
   *
   */
  @Cordova()
  static canScan(): Promise<boolean> { return; }

  /**
   * Scan a credit card with card.io.
   * @param {CardIOOptions} options Options for configuring the plugin
   */
  @Cordova()
  static scan(options?: CardIOOptions): Promise<any> { return; }

  /**
   * Retrieve the version of the card.io library. Useful when contacting support.
   */
  @Cordova()
  static version(): Promise<string> { return; }

}

export interface CardIOOptions {
  requireExpiry?: boolean;
  requireCCV?: boolean;
  requirePostalCode?: boolean;
  supressManual?: boolean;
  restrictPostalCodeToNumericOnly?: boolean;
  keepApplicationTheme?: boolean;
  requireCardholderName?: boolean;
  scanInstructions?: string;
  noCamera?: boolean;
  scanExpiry?: boolean;
  languageOrLocale?: string;
  guideColor?: string;
  supressConfirmation?: boolean;
  hideCardIOLogo?: boolean;
  useCardIOLogo?: boolean;
  supressScan?: boolean;
}
