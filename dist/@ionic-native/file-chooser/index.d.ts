import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name File Chooser
 * @description
 *
 * Opens the file picker on Android for the user to select a file, returns a file URI.
 *
 * @usage
 * ```typescript
 * import { FileChooser } from '@ionic-native/file-chooser';
 *
 * constructor(private fileChooser: FileChooser) { }
 *
 * ...
 *
 * this.fileChooser.open()
 *   .then(uri => console.log(uri))
 *   .catch(e => console.log(e));
 *
 * ```
 */
export declare class FileChooser extends IonicNativePlugin {
    /**
     * Open a file
     * @returns {Promise<string>}
     */
    open(): Promise<string>;
}
