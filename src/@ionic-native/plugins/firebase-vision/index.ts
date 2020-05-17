import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name Firebase Vision
 * @description
 * Cordova plugin for Firebase MLKit Vision
 *
 * @usage
 * ```typescript
 * import { FirebaseVision } from '@ionic-native/firebase-vision/ngx';
 *
 *
 * constructor(private firebaseVision: FirebaseVision) { }
 *
 * ...
 *
 *
 * this.firebaseVision.onDeviceTextRecognizer(FILE_URI)
 *   .then((res: string) => console.log(res))
 *   .catch((error: string) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'FirebaseVision',
  plugin: 'cordova-plugin-firebase-mlvision',
  pluginRef: 'FirebaseVisionPlugin',
  repo: 'https://github.com/alon22/cordova-plugin-firebase-mlvision',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class FirebaseVision extends IonicNativePlugin {
  /**
   * Recognize text in image
   * @param file_uri {string} Image URI
   * @return {Promise<string>} Returns a promise that fulfills with the text in the image
   */
  @Cordova()
  onDeviceTextRecognizer(file_uri: string): Promise<string> {
    return;
  }
}
