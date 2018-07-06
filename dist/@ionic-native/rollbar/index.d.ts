import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @beta
 * @name Rollbar
 * @description
 * This plugin adds Rollbar App monitoring to your application
 *
 * @usage
 * ```typescript
 * import { Rollbar } from '@ionic-native/rollbar';
 *
 * constructor(private rollbar: Rollbar) { }
 *
 * ...
 *
 * this.rollbar.init();
 *
 * ```
 */
export declare class Rollbar extends IonicNativePlugin {
    /**
     * This function initializes the monitoring of your application
     * @return {Promise<any>} Returns a promise that resolves when the plugin successfully initializes
     */
    init(): Promise<any>;
}
