import {Plugin, Cordova} from './plugin';

@Plugin({
    plugin: 'cordova-plugin-brightness',
    pluginRef: 'plugins.brightness',
    repo: 'https://github.com/mgcrea/cordova-plugin-brightness',
    platforms: ['Android', 'iOS']
})
export class Brightness {

    /**
     * Sets the brightness of the display.
     *
     * @param {value} Floating number between 0 and 1 in which case 1 means 100% brightness and 0 means 0% brightness.
     * @returns {Promise} Returns a Promise that resolves if setting brightness was successful.
     */
    @Cordova()
    static setBrightness(value: number): Promise<any> { return; }

    /**
     * Reads the current brightness of the device display.
     *
     * @returns {Promise} Returns a Promise that resolves with the 
     * brightness value of the device display (floating number between 0 and 1).
     */
    @Cordova()
    static getBrightness(): Promise<any> { return; }

    /**
    * Keeps the screen on. Prevents the device from setting the screen to sleep.
    */
    @Cordova()
    static setKeepScreenOn(value: boolean): void { }


    /**
     * Hide the ActionSheet.
     */
    @Cordova()
    static hide(): Promise<any> { return; }
}
