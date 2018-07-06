import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name App Update
 * @description
 * This plugin does self-update for android
 *
 * @usage
 *
 * You should first host an XML file on your server with the following data in it:
 * ```xml
 * <update>
 *     <version>302048</version>
 *     <name>APK Name</name>
 *     <url>https://your-remote-api.com/YourApp.apk</url>
 * </update>
 * ```
 *
 * Then use the following code:
 *
 * ```typescript
 * import { AppUpdate } from '@ionic-native/app-update';
 *
 * constructor(private appUpdate: AppUpdate) {
 *
 *    const updateUrl = 'http://your-remote-api.com/update.xml';
 *    this.appUpdate.checkAppUpdate(updateUrl);
 *
 * }
 * ```
 *
 * The plugin will compare the app version and update it automatically if the API has a newer version to install.
 */
export declare class AppUpdate extends IonicNativePlugin {
    /**
     * Check and update
     * @param updateUrl {string} update api url
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    checkAppUpdate(updateUrl: string): Promise<any>;
}
