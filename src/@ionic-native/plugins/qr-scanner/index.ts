import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

export interface QRScannerStatus {
  /**
   * On iOS and Android 6.0+, camera access is granted at runtime by the user (by clicking "Allow" at the dialog).
   * The authorized property is a boolean value which is true only when the user has allowed camera access to your app (AVAuthorizationStatus.Authorized).
   * On platforms with permissions granted at install (Android pre-6.0, Windows Phone) this property is always true.
   */
  authorized: boolean;
  /**
   * A boolean value which is true if the user permanently denied camera access to the app (AVAuthorizationStatus.Denied).
   * Once denied, camera access can only be gained by requesting the user change their decision (consider offering a link to the setting via openSettings()).
   */
  denied: boolean;
  /**
   * A boolean value which is true if the user is unable to grant permissions due to parental controls, organization security configuration profiles, or similar reasons.
   */
  restricted: boolean;
  /**
   * A boolean value which is true if QRScanner is prepared to capture video and render it to the view.
   */
  prepared: boolean;
  /**
   * A boolean value which is true when the preview layer is visible (and on all platforms but browser, the native webview background is transparent).
   */
  showing: boolean;
  /**
   * A boolean value which is true if QRScanner is actively scanning for a QR code.
   */
  scanning: boolean;
  /**
   * A boolean value which is true if QRScanner is displaying a live preview from the device's camera. Set to false when the preview is paused.
   */
  previewing: boolean;
  /**
   * A boolean value which is true if the light is enabled.
   */
  lightEnabled: boolean;
  /**
   * A boolean value which is true only if the users' operating system is able to QRScanner.openSettings().
   */
  canOpenSettings: boolean;
  /**
   * A boolean value which is true only if the users' device can enable a light in the direction of the currentCamera.
   */
  canEnableLight: boolean;
  /**
   * A boolean value which is true only if the current device "should" have a front camera.
   * The camera may still not be capturable, which would emit error code 3, 4, or 5 when the switch is attempted.
   * (On the browser platform, this value is false until the prepare method is called.)
   */
  canChangeCamera: boolean;
  /**
   * A number representing the index of the currentCamera. 0 is the back camera, 1 is the front.
   */
  currentCamera: number;
}

/**
 * @name QR Scanner
 * @description
 * A fast, energy efficient, highly-configurable QR code scanner for Cordova apps.
 *
 * Requires Cordova plugin: `cordova-plugin-qrscanner`. For more info, please see the [QR Scanner plugin docs](https://github.com/bitpay/cordova-plugin-qrscanner).
 *
 * @usage
 * ```typescript
 * import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
 *
 *
 * constructor(private qrScanner: QRScanner) { }
 *
 * ...
 *
 * // Optionally request the permission early
 * this.qrScanner.prepare()
 *   .then((status: QRScannerStatus) => {
 *      if (status.authorized) {
 *        // camera permission was granted
 *
 *
 *        // start scanning
 *        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
 *          console.log('Scanned something', text);
 *
 *          this.qrScanner.hide(); // hide camera preview
 *          scanSub.unsubscribe(); // stop scanning
 *        });
 *
 *      } else if (status.denied) {
 *        // camera permission was permanently denied
 *        // you must use QRScanner.openSettings() method to guide the user to the settings page
 *        // then they can grant the permission from there
 *      } else {
 *        // permission was denied, but not permanently. You can ask for permission again at a later time.
 *      }
 *   })
 *   .catch((e: any) => console.log('Error is', e));
 *
 *
 * ```
 * @interfaces
 * QRScannerStatus
 */
@Plugin({
  pluginName: 'QRScanner',
  plugin: 'cordova-plugin-qrscanner',
  pluginRef: 'QRScanner',
  repo: 'https://github.com/bitpay/cordova-plugin-qrscanner',
  platforms: ['Android', 'Browser', 'iOS', 'Windows']
})
@Injectable()
export class QRScanner extends IonicNativePlugin {
  /**
   * Request permission to use QR scanner.
   * @return {Promise<QRScannerStatus>}
   */
  @Cordova({
    callbackStyle: 'node'
  })
  prepare(): Promise<QRScannerStatus> {
    return;
  }

  /**
   * Call this method to enable scanning. You must then call the `show` method to make the camera preview visible.
   * @return {Observable<string>} returns an Observable that emits the scanned text. Unsubscribe from the observable to stop scanning.
   */
  @Cordova({
    callbackStyle: 'node',
    observable: true,
    clearFunction: 'cancelScan'
  })
  scan(): Observable<string> {
    return;
  }

  /**
   * Configures the native webview to have a transparent background, then sets the background of the <body> and <html> DOM elements to transparent, allowing the webview to re-render with the transparent background.
   * @returns {Promise<QRScannerStatus>}
   */
  @Cordova()
  show(): Promise<QRScannerStatus> {
    return;
  }

  /**
   * Configures the native webview to be opaque with a white background, covering the video preview.
   * @returns {Promise<QRScannerStatus>}
   */
  @Cordova()
  hide(): Promise<QRScannerStatus> {
    return;
  }

  /**
   * Enable the device's light (for scanning in low-light environments).
   * @returns {Promise<QRScannerStatus>}
   */
  @Cordova({
    callbackStyle: 'node'
  })
  enableLight(): Promise<QRScannerStatus> {
    return;
  }

  /**
   * Destroy the scanner instance.
   * @returns {Promise<QRScannerStatus>}
   */
  @Cordova()
  destroy(): Promise<QRScannerStatus> {
    return;
  }

  /**
   * Disable the device's light.
   * @return {Promise<QRScannerStatus>}
   */
  @Cordova({
    callbackStyle: 'node'
  })
  disableLight(): Promise<QRScannerStatus> {
    return;
  }

  /**
   * Use front camera
   * @return {Promise<QRScannerStatus>}
   */
  @Cordova({
    callbackStyle: 'node'
  })
  useFrontCamera(): Promise<QRScannerStatus> {
    return;
  }

  /**
   * Use back camera
   * @return {Promise<QRScannerStatus>}
   */
  @Cordova({
    callbackStyle: 'node'
  })
  useBackCamera(): Promise<QRScannerStatus> {
    return;
  }

  /**
   * Set camera to be used.
   * @param camera {number} Provide `0` for back camera, and `1` for front camera.
   * @return {Promise<QRScannerStatus>}
   */
  @Cordova({
    callbackStyle: 'node'
  })
  useCamera(camera: number): Promise<QRScannerStatus> {
    return;
  }

  /**
   * Pauses the video preview on the current frame and pauses scanning.
   * @return {Promise<QRScannerStatus>}
   */
  @Cordova()
  pausePreview(): Promise<QRScannerStatus> {
    return;
  }

  /**
   * Resumse the video preview and resumes scanning.
   * @return {Promise<QRScannerStatus>}
   */
  @Cordova()
  resumePreview(): Promise<QRScannerStatus> {
    return;
  }

  /**
   * Returns permission status
   * @return {Promise<QRScannerStatus>}
   */
  @Cordova()
  getStatus(): Promise<QRScannerStatus> {
    return;
  }

  /**
   * Opens settings to edit app permissions.
   */
  @Cordova({
    sync: true
  })
  openSettings(): void {}
}
