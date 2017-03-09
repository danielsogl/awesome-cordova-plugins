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
export declare class CardIO {
    /**
     * Check whether card scanning is currently available. (May vary by
     * device, OS version, network connectivity, etc.)
     *
     */
    static canScan(): Promise<boolean>;
    /**
     * Scan a credit card with card.io.
     * @param {CardIOOptions} options Options for configuring the plugin
     */
    static scan(options?: CardIOOptions): Promise<any>;
    /**
     * Retrieve the version of the card.io library. Useful when contacting support.
     */
    static version(): Promise<string>;
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
