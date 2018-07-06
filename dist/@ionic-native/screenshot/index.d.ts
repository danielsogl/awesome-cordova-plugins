import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Screenshot
 * @description Captures a screen shot
 * @usage
 * ```typescript
 * import { Screenshot } from '@ionic-native/screenshot';
 *
 * constructor(private screenshot: Screenshot) { }
 *
 * ...
 *
 * // Take a screenshot and save to file
 * this.screenshot.save('jpg', 80, 'myscreenshot.jpg').then(onSuccess, onError);
 *
 * // Take a screenshot and get temporary file URI
 * this.screenshot.URI(80).then(onSuccess, onError);
 * ```
 */
export declare class Screenshot extends IonicNativePlugin {
    /**
     *  Takes screenshot and saves the image
     *
     * @param format {string} Format can take the value of either 'jpg' or 'png'
     * On ios, only 'jpg' format is supported
     * @param quality {number}  Determines the quality of the screenshot.
     *        Default quality is set to 100.
     * @param filename {string} Name of the file as stored on the storage
     * @returns {Promise<any>}
     */
    save(format?: string, quality?: number, filename?: string): Promise<any>;
    /**
     *  Takes screenshot and returns the image as an URI
     *
     * @param quality {number} Determines the quality of the screenshot.
     *        Default quality is set to 100.
     * @returns {Promise<any>}
     */
    URI(quality?: number): Promise<any>;
}
