import { Injectable } from '@angular/core';
import { Cordova, CordovaInstance, CordovaProperty, InstanceProperty, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

/**
 * @name PSPDFKit Cordova Android
 * @description
 *
 * The PSPDFKit SDK is a framework that allows you to view, annotate, sign, and fill PDF forms on iOS, Android, Windows, macOS, and Web.
 * PSPDFKit Instant adds real-time collaboration features to seamlessly share, edit, and annotate PDF documents.
 *
 * Thanks for using the PSPDFKit for Cordova/Ionic wrapper. There's only on more step to get you started:
 *     1) You need to add following lines to the `local.properties` (usually inside platforms/android/):
 *     pspdfkit.password = YOUR_PASSWORD
 *     pspdfkit.license = YOUR_PSPDFKIT_LICENSE
 *     2) Inside your `project.properties` you need to set the `target` to `android-28`.
 *     Make sure to replace YOUR_PASSWORD and YOUR_PSPDFKIT_LICENSE with the actual PSPDFKit customer password
 *     and license string that you received while requesting a demo at https://pspdfkit.com/try/ or via the PSPDFKit
 *     customer portal (in case you already own a license).
 * For the complete documentation and troubleshooting, check out our documentation at https://github.com/PSPDFKit/Cordova-Android.
 * In case there are issues, feel free to reach out to our support team at https://pspdfkit.com/support/request/.
 *
 * Copyright (c) 2015-2018 PSPDFKit GmbH. All rights reserved.
 *
 * THIS SOURCE CODE AND ANY ACCOMPANYING DOCUMENTATION ARE PROTECTED BY INTERNATIONAL COPYRIGHT LAW
 * AND MAY NOT BE RESOLD OR REDISTRIBUTED. USAGE IS BOUND TO THE PSPDFKIT LICENSE AGREEMENT.
 * UNAUTHORIZED REPRODUCTION OR DISTRIBUTION IS SUBJECT TO CIVIL AND CRIMINAL PENALTIES.
 * This notice may not be removed from this file.
 *
 * @usage
 * ```typescript
 * import { PSPDFKitCordovaAndroid } from '@ionic-native/pspdfkit-cordova-PSPDFKitCordovaAndroid';
 *
 *
 * constructor(private pspdfkit: PSPDFKitCordovaAndroid) { }
 *
 * ...
 *
 *
 * this.pspdfkit.showDocumentFromAssets('PDFs/document.pdf', {scrollDirection: 'VERTICAL', scrollMode: 'CONTINUOUS'})
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'PSPDFKitCordovaAndroid',
  plugin: 'pspdfkit-cordova-android',
  pluginRef: 'PSPDFKit',
  repo: 'https://github.com/PSPDFKit/Cordova-Android',
  platforms: ['Android']
})
@Injectable()
export class PSPDFKitCordovaAndroid extends IonicNativePlugin {

  /**
   * Presents the PDF view.
   * @param uri {string} Local filesystem URI of the document to show
   * @param options {number} Dictionary with options
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  showDocument(path: uri, options?: any): Promise<any> {
    return;
  }

  /**
   * Presents the PDF view.
   * @param assetFile {string} Relative path within the app's assets folder
   * @param options {number} Dictionary with options
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  showDocumentFromAssets(path: assetFile, options?: any): Promise<any> {
    return;
  }
}
