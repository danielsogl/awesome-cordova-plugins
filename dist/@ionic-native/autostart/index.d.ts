import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Autostart
 * @description
 * This plugin will start automatically your Android app after the every boot or the auto-update of your application.
 * You can enable or disable the autostart function in your app.
 *
 * @usage
 * ```typescript
 * import { Autostart } from '@ionic-native/autostart';
 *
 *
 * constructor(private autostart: Autostart) { }
 *
 * ...
 *
 * this.autostart.enable();
 *
 * this.autostart.disable();
 *
 * ```
 */
export declare class Autostart extends IonicNativePlugin {
    /**
     * Enable the automatic startup after the boot
     */
    enable(): void;
    /**
     * Disable the automatic startup after the boot
     */
    disable(): void;
}
