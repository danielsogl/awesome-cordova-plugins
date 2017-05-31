import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

export interface StatusObject {

  /**
   * 	On iOS and Android 6.0+, camera access is granted at runtime by the user (by clicking "Allow" at the dialog).
   * The authorized property is a boolean value which is true only when the user has allowed camera access to your app (AVAuthorizationStatus.Authorized).
   * On platforms with permissions granted at install (Android pre-6.0, Windows Phone) this property is always true.
   */
  authorized?: boolean;

  /**
   * A boolean value which is true if the user permanently denied camera access to the app (AVAuthorizationStatus.Denied).
   * Once denied, camera access can only be gained by requesting the user change their decision (consider offering a link to the setting via openSettings()).
   */
  denied?: boolean;

  /**
   * A boolean value which is true if the user is unable to grant permissions due to parental controls, organization security configuration profiles, or similar reasons.
   */
  restricted?: boolean;

  /**
   * A boolean value which is true if QRScanner is prepared to capture video and render it to the view.
   */
  prepared?: boolean;

  /**
   * A boolean value which is true when the preview layer is visible (and on all platforms but browser, the native webview background is transparent).
   */
  showing?: boolean;

  /**
   * A boolean value which is true if QRScanner is actively scanning for a QR code.
   */
  scanning?: boolean;

  /**
   * A boolean value which is true if QRScanner is displaying a live preview from the device's camera.
   * Set to false when the preview is paused.
   */
  previewing?: boolean;

  /**
   * A boolean value which is true if the light is enabled.
   */
  lightEnabled?: boolean;

  /**
   * A boolean value which is true only if the users' operating system is able to QRScanner.openSettings().
   */
  canOpenSettings?: boolean;

  /**
   * A boolean value which is true only if the users' device can enable a light in the direction of the currentCamera.
   */
  canEnableLight?: boolean;

  /**
   * A boolean value which is true only if the current device "should" have a front camera.
   * The camera may still not be capturable, which would emit error code 3, 4, or 5 when the switch is attempted.
   * (On the browser platform, this value is false until the prepare method is called.)
   */
  canChangeCamera?: boolean;

  /**
   * A number representing the index of the currentCamera. 0 is the back camera, 1 is the front.
   */
  currentCamera?: number;
}

/**
 * @name Q R Scanner
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { QRScanner } from '@ionic-native/qr-scanner';
 *
 *
 * constructor(private qRScanner: QRScanner) { }
 *
 * ...
 *
 *
 * this.qRScanner.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'QRScanner',
  plugin: 'cordova-plugin-qrscanner',
  pluginRef: 'QRScanner',
  repo: 'https://github.com/bitpay/cordova-plugin-qrscanner',
  platforms: ['Android', 'iOS', 'Windows', 'Browser']
})
@Injectable()
export class QRScanner extends IonicNativePlugin {

  /**
   * This function does something
   * @param arg1 {string} Some param to configure something
   * @param arg2 {number} Another param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  functionName(arg1: string, arg2: number): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}
