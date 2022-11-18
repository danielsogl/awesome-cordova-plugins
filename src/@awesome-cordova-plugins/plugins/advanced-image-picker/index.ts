import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

interface PresentOptions {
  /**
   * Which Media Types are allowed to be selected
   * default: "IMAGE"
   */
  mediaType?: 'IMAGE' | 'VIDEO' | 'ALL';
  /**
   * Show possibility to take via Camera
   * default: true
   */
  showCameraTile?: boolean;
  /**
   * On which Screen the Picker should be started (iOS only)
   * default: "LIBRARY"
   */
  startOnScreen?: 'LIBRARY' | 'IMAGE' | 'VIDEO';
  /**
   * Date format of the Scroll Indicator (Android only)
   * default: "YYYY.MM"
   */
  scrollIndicatorDateFormat?: string;
  /**
   * Show Title (Android only)
   * default: true
   */
  showTitle?: boolean;
  /**
   * Customize the Title (Android only)
   * default: "Select Image"
   */
  title?: string;
  /**
   * Show the zoomIndicator at the Images (Android only)
   * default: true
   */
  zoomIndicator?: boolean;
  /**
   * Min Count of files to be selected
   * default: 0 (android), 1 (iOS)
   */
  min?: number;
  /**
   * Message to be shown if min Count not reached (Android only)
   * default: "You need to select a minimum of ... pictures")"
   */
  minCountMessage?: string;
  /**
   * Max Count of files can selected
   * default: 0 (android), 1 (iOS)
   */
  max?: number;
  /**
   * Message to be shown if max Count is reached
   * default: "You can select a maximum of ... pictures"
   */
  maxCountMessage?: string;
  /**
   * Change Done Button Text
   */
  buttonText?: string;
  /**
   * Show Library as Dropdown (Android only)
   * default: false
   */
  asDropdown?: boolean;
  /**
   * Return the Result as base64
   * default: false
   */
  asBase64?: boolean;
  /**
   * Return the Image as JPEG
   * default: false
   */
  asJpeg?: boolean;
  /**
   * Video Compression Option (iOS only)
   * available options: https://github.com/Yummypets/YPImagePicker/blob/23158e138bd649b40762bf2e4aa4beb0d463a121/Source/Configuration/YPImagePickerConfiguration.swift#L226-L240
   * default: AVAssetExportPresetHighestQuality
   */
  videoCompression?: string;
}

interface Result {
  type: 'image' | 'video';
  isBase64: boolean;
  src: string;
}

export enum ErrorCodes {
  UnsupportedAction = 1,
  WrongJsonObject = 2,
  PickerCanceled = 3,
  UnknownError = 10,
}

/**
 * Used for every Plugin Error Callback
 */
interface AdvancedImagePickerError {
  /**
   * One of the AdvancedImagePickerErrorCodes
   */
  code: ErrorCodes;

  /**
   * If available some more info (mostly exception message)
   */
  message: string;
}

/**
 * @name AdvancedImagePicker
 * @description
 * This Cordova Plugin is for a better (multiple) ImagePicker with more options.
 *
 * @usage
 * ```typescript
 * import { AdvancedImagePicker } from '@awesome-cordova-plugins/advanced-image-picker/npx';
 *
 *
 * constructor(private advancedImagePicker: AdvancedImagePicker) { }
 *
 * ...
 *
 *
 * this.advancedImagePicker.present{
 *   // config here
 * })
 *   .then((res: Result[]) => console.log(res))
 *   .catch((error: AdvancedImagePickerError) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'AdvancedImagePicker',
  plugin: 'cordova-plugin-advanced-imagepicker',
  pluginRef: 'AdvancedImagePicker',
  repo: 'https://github.com/EinfachHans/cordova-plugin-advanced-imagepicker',
  install: 'ionic cordova plugin add cordova-plugin-advanced-imagepicker',
  installVariables: ['ANDROID_IMAGE_PICKER_VERSION'],
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class AdvancedImagePicker extends AwesomeCordovaNativePlugin {
  /**
   * Present the ImagePicker
   * @param options {PresentOptions} https://github.com/EinfachHans/cordova-plugin-advanced-imagepicker/tree/master#parameters
   * @return {Promise<Result[]>}
   */
  @Cordova()
  present(options: PresentOptions): Promise<Result[]> {
    return;
  }

  /**
   * Cleans all temp stored Files that was created by this Plugin (iOS only)
   */
  @Cordova({ platforms: ['iOS'] })
  cleanup(): Promise<void> {
    return;
  }
}
