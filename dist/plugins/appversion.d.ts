/**
 * @name App Version
 * @description
 * Reads the version of your app from the target build settings.
 *
 * Requires Cordova plugin: `cordova-plugin-app-version`. For more info, please see the [Cordova App Version docs](https://github.com/whiteoctober/cordova-plugin-app-version).
 *
 * @usage
 * ```typescript
 * import { AppVersion } from 'ionic-native';
 *
 *
 *  AppVersion.getAppName();
 *  AppVersion.getPackageName();
 *  AppVersion.getVersionCode();
 *  AppVersion.getVersionNumber();
 * ```
 */
export declare class AppVersion {
    /**
     * Returns the name of the app
     * @returns {Promise}
     */
    static getAppName(): Promise<any>;
    /**
     * Returns the package name of the app
     * @returns {Promise}
     */
    static getPackageName(): Promise<any>;
    /**
     * Returns the build identifier of the app
     * @returns {Promise}
     */
    static getVersionCode(): Promise<any>;
    /**
     * Returns the version of the app
     * @returns {Promise}
     */
    static getVersionNumber(): Promise<any>;
}
