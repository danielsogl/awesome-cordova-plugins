import { IonicNativePlugin } from '@ionic-native/core';
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
 *     clientId: 'Fingerprint-Demo',
 *     clientSecret: 'password', //Only necessary for Android
 *     disableBackup:true  //Only for Android(optional)
 * })
 * .then((result: any) => console.log(result))
 * .catch((error: any) => console.log(error));
 *
 * ```
 * @interfaces
 * FingerprintOptions
 */
export declare class FingerprintAIO extends IonicNativePlugin {
    /**
     * Check if fingerprint authentication is available
     * @return {Promise<any>} Returns a promise with result
     */
    isAvailable(): Promise<any>;
    /**
     * Show authentication dialogue
     * @param options {FingerprintOptions} options for platform specific fingerprint API
     * @return {Promise<any>} Returns a promise that resolves when authentication was successfull
     */
    show(options: FingerprintOptions): Promise<any>;
}
