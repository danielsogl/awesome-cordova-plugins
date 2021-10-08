import { Injectable } from '@angular/core';
import { CordovaCheck, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

declare const AbbyyRtrSdk: any;

/**
 * JSON object that you can pass as the options argument to change text
 * capture settings. All keys are optional. Omitting a key means that a
 * default setting will be used.
 */
export interface TextCaptureOptions {
  /**
   * The name of the license file. This file must be located in the
   * www/rtr_assets/ directory in your project.
   */
  licenseFileName?: string;

  /**
   * Recognition languages which can be selected by the user,
   * for example: ["English", "French", "German"]. Empty array
   * disables language selection.
   */
  selectableRecognitionLanguages?: string[];

  /**
   * Recognition language selected by default.
   */
  recognitionLanguages?: string[];

  /**
   * Width and height of the recognition area, separated by a
   * whitespace — for example: "0.8 0.3". The area of interest is
   * centered in the preview frame, its width and height are
   * relative to the preview frame size and should be in the [0.0, 1.0] range.
   */
  areaOfInterest?: string;

  /**
   * Whether to stop the plugin as soon as the result status is
   * "Stable" (see Result status). When enabled (true), the
   * recognition process can be stopped automatically. When
   * disabled (false), recognition can be stopped only manually
   * by user.
   */
  stopWhenStable?: boolean;

  /**
   * Show (true) or hide (false) the flashlight button in the text
   * capture dialog.
   */
  isFlashlightVisible?: boolean;

  /**
   * Show (true) or hide (false) the stop button in the text
   * capture dialog. When the user taps stop, RTR SDK returns
   * the latest recognition result.
   */
  isStopButtonVisible?: boolean;

  /**
   * Specify the orientation, possible values 'landscape' or 'portrait'.
   */
  orientation?: string;
}

/**
 * JSON object that represents text recognition results.
 * The callback you implement should parse this object and show results to user.
 */
export interface TextCaptureResult {
  /**
   * An array of objects representing recognized lines of text.
   * These objects have the following keys:
   * · text (string): the recognized text.
   * · quadrangle (string): vertex coordinates of the bounding quadrangle,
   *   a string of 8 integers separated with whitespaces ("x1 y1 ... x4 y4"),
   *   goes clockwise starting from the bottom left.
   * · rect (string): position and size of the bounding rectangle,
   *   a string of 4 integers separated with whitespaces ("x y width height").
   */
  textLines: { text: string; quadrangle: string; rect?: string }[];

  /**
   * Additional information. This object has the following keys:
   * · stabilityStatus (string): result stability status.
   *   See Result status for details.
   * · userAction (string): the user's action which stopped the plugin,
   *   if any. Can be "Manually Stopped" if the stop button has been used,
   *   and "Canceled" if the user canceled processing. If the plugin has
   *   stopped automatically, the userAction key is not present in resultInfo.
   * · frameSize (string): full size of the preview frame, a string
   *   with 2 integers separated with a whitespace ("720 1280").
   * · recognitionLanguages (string array): languages used for recognition,
   *   the array contains language identifiers (["English", "French", "German"]).
   */
  resultInfo: {
    stabilityStatus: string;
    userAction: string;
    frameSize: string;
    recognitionLanguages: string[];
  };

  /**
   * Error details. This key is present only if an error occurs.
   * The value is an object which has a single key:
   * · description (string): human-readable error description.
   */
  error?: {
    description: string;
  };
}

/**
 * JSON object that you can pass as the options argument to change data
 * capture settings. All keys are optional. Omitting a key means that a default
 * setting will be used, except the profile and customDataCaptureScenario
 * keys: you must specify either one of them, but not both at the same time.
 */
export interface DataCaptureOptions {
  /**
   * The predefined data capture profile to use, for example: "MRZ".
   * Note: For the list of supported documents, see Specifications — Data
   * Capture Profiles in the ABBYY Real-Time Recognition SDK 1 Developer's Guide.
   */
  profile?: string;

  /**
   * Custom data capture settings. This object has the following keys:
   * · name (string): the name of your custom data capture scenario, required.
   * · description (string): a more detailed description. This key is optional;
   *   if not given, it will be assigned the same value as name.
   * · recognitionLanguages (string array): recognition languages to use.
   *   Default is ["English"].
   * · fields (object array): describes data fields to capture. Each object
   *   in this array has a single regEx key; its value is a string containing
   *   the regular expression that should be matched when capturing a field.
   */
  customDataCaptureScenario?: {
    name: string;
    description: string;
    recognitionLanguages: string[];
    fields: { regEx: string }[];
  };

  /**
   * The name of the license file. This file must be located in the
   * www/rtr_assets/ directory in your project.
   */
  licenseFileName?: string;

  /**
   * Width and height of the recognition area, separated by a
   * whitespace — for example: "0.8 0.3". The area of interest is
   * centered in the preview frame, its width and height are
   * relative to the preview frame size and should be in the [0.0, 1.0] range.
   */
  areaOfInterest?: string;

  /**
   * Whether to stop the plugin as soon as the result status is
   * "Stable" (see Result status). When enabled (true), the
   * recognition process can be stopped automatically. When
   * disabled (false), recognition can be stopped only manually
   * by user.
   */
  stopWhenStable?: boolean;

  /**
   * Show (true) or hide (false) the flashlight button in the text
   * capture dialog.
   */
  isFlashlightVisible?: boolean;

  /**
   * Show (true) or hide (false) the stop button in the text
   * capture dialog. When the user taps stop, RTR SDK returns
   * the latest recognition result.
   */
  isStopButtonVisible?: boolean;

  /**
   * Specify the orientation, possible values 'landscape' or 'portrait'.
   */
  orientation?: string;
}

/**
 * JSON object that represents data recognition results. The callback you
 * implement should parse this object and show results to user.
 */
export interface DataCaptureResult {
  /**
   * The data scheme which was applied during data capture.
   * The value is an object which has two keys:
   * · id (string): the internal scheme identifier.
   * · name (string): the scheme name.
   * If you had defined a custom data capture scenario in options, both the
   * id and name will be the same as the scenario name you specified. If
   * you selected a predefined profile, the id and name are specified by the
   * profile. If an error occurs during processing, the dataScheme key is not
   * present in the result.
   */
  dataScheme?: {
    id: string;
    name: string;
  };

  /**
   * Recognized data fields. Each object in the array represents a separate
   * data field. The data field objects have the following keys:
   * · id (string): the internal identifier of the field.
   * · name (string): the field name.
   * Similarly to dataScheme, in custom scenarios both id and name are the same
   * as the scenario name you specified (currently custom scenarios allow
   * only 1 recognized field).
   * · text (string): full text of the field.
   * · quadrangle (string): vertex coordinates of the bounding quadrangle, a
   *   string of 8 integers separated with whitespaces ("x1 y1 ... x4 y4"),
   *   goes clockwise starting from the bottom left.
   * · components (object array): an array of objects representing field
   *   components, that is, the text fragments found on the image, which
   *   constitute the field.
   * In the components array each element is an object with the following keys:
   * · text (string): text of this fragment.
   * · quadrangle (string): vertex coordinates of the bounding quadrangle of
   *   this fragment, similar to the field's quadrangle.
   * · rect (string): position and size of the bounding rectangle, a string
   *   of 4 integers separated with whitespaces ("x y width height").
   */
  dataFields: {
    id: string;
    name: string;
    text: string;
    quadrangle: string;
    components: {
      text: string;
      quadrangle: string;
      rect: string;
    };
  };

  /**
   * Additional information. This object has the following keys:
   * · stabilityStatus (string): result stability status.
   *   See Result status for details.
   * · userAction (string): the user's action which stopped the plugin,
   *   if any. Can be "Manually Stopped" if the stop button has been used,
   *   and "Canceled" if the user canceled processing. If the plugin has
   *   stopped automatically, the userAction key is not present in resultInfo.
   * · frameSize (string): full size of the preview frame, a string
   *   with 2 integers separated with a whitespace ("720 1280").
   */
  resultInfo: {
    stabilityStatus: string;
    userAction: string;
    frameSize: string;
  };

  /**
   * Error details. This key is present only if an error occurs.
   * The value is an object which has a single key:
   * · description (string): human-readable error description.
   */
  error?: {
    description: string;
  };
}

/**
 * @name ABBYY Real-Time Recognition
 * @description
 * This plugin allows to use the Text Capture and Data Capture features of
 * ABBYY Real-Time Recognition SDK (RTR SDK) in apps.
 * @usage
 * ```typescript
 * import { AbbyyRTR } from '@awesome-cordova-plugins/abbyy-rtr/ngx';
 *
 *
 * constructor(private abbyyRTR: AbbyyRTR) { }
 *
 * ...
 *
 *
 * this.abbyyRTR.startTextCapture(options)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 *
 * this.abbyyRTR.startDataCapture(options)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'AbbyyRTR',
  plugin: 'cordova-plugin-abbyy-rtr-sdk',
  pluginRef: 'AbbyyRtrSdk',
  repo: 'https://github.com/abbyysdk/RTR-SDK.Cordova',
  install: 'ionic cordova plugin add cordova-plugin-abbyy-rtr-sdk',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class AbbyyRTR extends AwesomeCordovaNativePlugin {
  /**
   * Opens a modal dialog with controls for the Text Capture scenario.
   *
   * @param {TextCaptureOptions} options
   * @returns {Promise<TextCaptureResult>}
   */
  @CordovaCheck()
  startTextCapture(options: TextCaptureOptions): Promise<TextCaptureResult> {
    return new Promise<any>((resolve, reject) => {
      AbbyyRtrSdk.startTextCapture((result: DataCaptureResult) => {
        if (result.error) {
          reject(result);
        } else {
          resolve(result);
        }
      }, options);
    });
  }

  /**
   * Opens a modal dialog with controls for the Data Capture scenario.
   *
   * @param {DataCaptureOptions} options
   * @returns {Promise<DataCaptureResult>}
   */
  @CordovaCheck()
  startDataCapture(options: DataCaptureOptions): Promise<DataCaptureResult> {
    return new Promise<any>((resolve, reject) => {
      AbbyyRtrSdk.startDataCapture((result: DataCaptureResult) => {
        if (result.error) {
          reject(result);
        } else {
          resolve(result);
        }
      }, options);
    });
  }
}
