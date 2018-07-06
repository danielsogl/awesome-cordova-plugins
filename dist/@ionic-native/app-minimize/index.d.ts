import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name App Minimize
 * @description
 * AppMinimize is a plugin to minimize the application on android devices
 *
 * @usage
 * ```typescript
 * import { Platfrom } from 'ionic-angular';
 * import { AppMinimize } from '@ionic-native/app-minimize';
 *
 *
 * constructor(private platform: Platform, private appMinimize: AppMinimize) { }
 *
 * ...
 *
 * this.platform.registerBackButtonAction(() => {
 *    this.appMinimize.minimize();
 * });
 *
 * ```
 */
export declare class AppMinimize extends IonicNativePlugin {
    /**
     * Minimizes the application
     * @return {Promise<any>}
     */
    minimize(): Promise<any>;
}
