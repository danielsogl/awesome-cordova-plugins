/**
 * @name Market
 * @description
 * Opens an app's page in the market place (Google Play, App Store)
 *
 * @usage
 * ```
 * import {Market} from 'ionic-native';
 *
 * Market.open('your.package.name');
 *
 * ```
 */
export declare class Market {
    /**
     * Opens an app in Google Play / App Store
     * @param appId {string} Package name
     * @param callbacks {Object} Optional callbacks
     */
    static open(appId: string, callbacks?: {
        success?: Function;
        failure?: Function;
    }): void;
}
