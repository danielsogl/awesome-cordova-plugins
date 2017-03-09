export interface ImageResizerOptions {
    /**
     * The URI for the image on the device to get scaled
     */
    uri: string;
    /**
     * The width of the new image
     */
    width: number;
    /**
     * The height of the new image
     */
    height: number;
    /**
     * The name of the folder the image should be put
     * (Android only)
     */
    folderName?: string;
    /**
     *
     * Quality given as Number for the quality of the new image
     * (Android and iOS only)
     */
    quality?: number;
    /**
     * A custom name for the file. Default name is a timestamp
     * (Android and Windows only)
     */
    fileName?: string;
}
/**
 * @name ImageResizer
 * @description
 * Cordova Plugin For Image Resize
 *
 * Requires plugin `info.protonet.imageresizer` - use the Ionic CLI and type in the following command:
 * `ionic plugin add https://github.com/protonet/cordova-plugin-image-resizer.git`
 *
 * For more info, please see the https://github.com/protonet/cordova-plugin-image-resizer
 *
 * @usage
 * ```typescript
 * import { ImageResizer, ImageResizerOptions } from 'ionic-native';
 *
 * let options = {
 *  uri: uri,
 *  folderName: 'Protonet',
 *  quality: 90,
 *  width: 1280,
 *  height: 1280
 * } as ImageResizerOptions;
 *
 * ImageResizer
 * .resize(options)
 * .then(
 *  (filePath: string) => { console.log('FilePath', filePath); },
 *  () => { console.log('Error occured'); }
 * )
 * ```
 */
export declare class ImageResizer {
    static resize(options: ImageResizerOptions): Promise<any>;
}
