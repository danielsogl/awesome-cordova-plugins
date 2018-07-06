import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name App Version
 * @description
 * Reads the version of your app from the target build settings.
 *
 * Requires Cordova plugin: `cordova-plugin-app-version`. For more info, please see the [Cordova App Version docs](https://github.com/whiteoctober/cordova-plugin-app-version).
 *
 * @usage
 * ```typescript
 * import { AppVersion } from '@ionic-native/app-version';
 *
 * constructor(private appVersion: AppVersion) { }
 *
 * ...
 *
 *
 * this.appVersion.getAppName();
 * this.appVersion.getPackageName();
 * this.appVersion.getVersionCode();
 * this.appVersion.getVersionNumber();
 *
 * ```
 */
export declare class AppVersion extends IonicNativePlugin {
    /**
     * Returns the name of the app
     * @returns {Promise<any>}
     */
    getAppName(): Promise<any>;
    /**
     * Returns the package name of the app
     * @returns {Promise<any>}
     */
    getPackageName(): Promise<any>;
    /**
     * Returns the build identifier of the app
     * @returns {Promise<any>}
     */
    getVersionCode(): Promise<any>;
    /**
     * Returns the version of the app
     * @returns {Promise<any>}
     */
    getVersionNumber(): Promise<any>;
}
