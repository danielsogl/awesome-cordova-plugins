import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

export enum FirebaseModelStatus {
  downloading = 'downloading',
  completed = 'completed',
}

export enum FirebaseModelInputType {
  path = 'path',
  base64string = 'base64string',
  blob = 'blob',
}

export class FirebaseModelConfigResult {
  /**
   * Returns the current status of the model.
   */
  status: FirebaseModelStatus;
  /**
   * Returns the current progress of the downloading model.
   */
  progress: number;
}

export class FirebaseModelClassifyResult {
  /**
   * Return the identified image label name.
   */
  label: string;
  /**
   * Returns the confidence score of the identified image.
   */
  score: number;
}

export class FirebaseModelInput {
  /**
   * Set the one of the input types defined in FirebaseModelInputType enum.
   */
  inputType: FirebaseModelInputType;
  /**
   * Set the input as string | Blob based on the `inputType`
   */
  input: string | Blob;
}

/**
 * @name Firebase Model
 * @description This plugin downloads the TensorFlow model from firebase and classify the images.
 *
 * ```typescript
 * import { FirebaseModel } from '@ionic-native/ionic-native-firebase-model';
 *
 *
 * constructor(private firebaseModel: FirebaseModel) { }
 *
 * ...
 *
 *
 * this.firebaseModel.configure('Sample_Model')
 *   .subscribe((res: FirebaseModelConfigResult) => console.log(res.status + " - " + res.progress))
 *   .catch((error: any) => console.error(error));
 *
 *
 * try {
 *    var result:FirebaseModelClassifyResult = await this.firebaseModel.classify("/Documents/input_image.png")
 *    console.log(result.label + " - " + result.score)
 *
 * }
 * catch (e) {
 *    console.log(e)
 * }
 *
 *
 * ```
 */
@Plugin({
  pluginName: 'FirebaseModel',
  plugin: 'cordova-plugin-firebase-model', // npm package name, example: cordova-plugin-camera
  pluginRef: 'FirebaseModel', // the variable reference to call the plugin, example: navigator.geolocation
  repo: '', // the github repository URL for the plugin
  install: 'ionic cordova plugin add cordova-plugin-firebase-model', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['iOS'], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class FirebaseModel extends AwesomeCordovaNativePlugin {
  /**
   * This function configure the Firebase TFLite model and downloads.
   * @param {string} arg1 Name of the TFLite model which is uploaded in the Firebase console
   * @returns {Observable<FirebaseModelConfigResult>} Returns a observable that gives the callback for downloading progress and status.
   *
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2,
    observable: true,
  })
  configure(arg1: string): Observable<FirebaseModelConfigResult> {
    return;
  }

  /**
   * This function identify the image using the Firebase TFLite model which is configured.
   * @param {FirebaseModelInput} arg1  Base64 string of the input image or .
   * @returns {Promise<FirebaseModelClassifyResult>} Returns a promise that resolves the classification result.
   *
   */
  @Cordova()
  classify(arg1: FirebaseModelInput): Promise<FirebaseModelClassifyResult> {
    return;
  }
}
