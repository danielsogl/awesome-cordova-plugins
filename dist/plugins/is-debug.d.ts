/**
 * @name IsDebug
 * @description
 * Detect if the app is running in debug mode or not.
 * Debug mode is when the app is built and installed locally via xcode / eclipse / the cordova cli etc, compared to release mode when the app was downloaded from the app / play store via an end user.
 *
 * @usage
 * ```
 * import {IsDebug} from 'ionic-native';
 *
 * IsDebug.getIsDebug()
 *   .then((isDebug: boolean) => console.log('Is debug:', isDebug))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class IsDebug {
    /**
     * Determine if an app was installed via xcode / eclipse / the ionic CLI etc
     * @return {Promise<boolean>} Returns a promise that resolves with true if the app was installed via xcode / eclipse / the ionic CLI etc. It will resolve to false if the app was downloaded from the app / play store by the end user.
     */
    static getIsDebug(): Promise<boolean>;
}
