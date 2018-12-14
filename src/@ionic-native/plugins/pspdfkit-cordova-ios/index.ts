import { Injectable } from '@angular/core';
import { Cordova, CordovaInstance, CordovaProperty, InstanceProperty, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

/**
 * @name PSPDFKit Cordova iOS
 * @description
 *
 * The PSPDFKit SDK is a framework that allows you to view, annotate, sign, and fill PDF forms on iOS, Android, Windows, macOS, and Web.
 * PSPDFKit Instant adds real-time collaboration features to seamlessly share, edit, and annotate PDF documents.
 *
 * Copyright 2011-2018 PSPDFKit GmbH. All rights reserved.
 * THIS SOURCE CODE AND ANY ACCOMPANYING DOCUMENTATION ARE PROTECTED BY AUSTRIAN COPYRIGHT LAW AND MAY NOT BE RESOLD OR REDISTRIBUTED. USAGE IS BOUND TO THE PSPDFKIT LICENSE AGREEMENT. UNAUTHORIZED REPRODUCTION OR DISTRIBUTION IS SUBJECT TO CIVIL AND CRIMINAL PENALTIES.
 * http://pspdfkit.com/license.html
 *
 * Please download PSPDFKit from your customer portal: https://customers.pspdfkit.com
 *
 * @usage
 * ```typescript
 * import { PSPDFKitCordovaIOS } from '@ionic-native/pspdfkit-cordova-ios';
 *
 *
 * constructor(private pspdfkit: PSPDFKitCordovaIOS) { }
 *
 * ...
 *
 *
 * this.pspdfkit.present('PDFs/document.pdf', {pageTransition: 'curl', editableAnnotationTypes: ['FreeText', 'Signature']})
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'PSPDFKitCordovaIOS',
  plugin: 'pspdfkit-cordova-ios',
  pluginRef: 'PSPDFKit',
  repo: 'https://github.com/PSPDFKit/Cordova-iOS',
  platforms: ['iOS']
})
@Injectable()
export class PSPDFKitCordovaIOS extends IonicNativePlugin {

  /**
   * Sets the license key for PSPDFKit.
   * @param licenseKey {string} Your license key can be found in your customer portal: https://customers.pspdfkit.com
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  setLicenseKey(licenseKey: string): Promise<any> {
    return;
  }

  /**
   * Presents the PDF view.
   * @param path {string} Path to the PDF document
   * @param options {number} Dictionary with options
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  present(path: string, options?: any): Promise<any> {
    return;
  }

  /**
   * Dismisses the PDF view
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  dismiss(): Promise<any> {
    return;
  }

  /**
   * Reloads the PDF View
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  reload(): Promise<any> {
    return;
  }

  /**
   * Saves annotations
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  saveAnnotations(): Promise<any> {
    return;
  }
}
