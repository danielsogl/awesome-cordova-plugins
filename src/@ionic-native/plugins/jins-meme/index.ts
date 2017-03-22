import { Plugin, Cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

declare var cordova: any;

/**
 * @name jins-meme
 * @description
 * This plugin does something
 *
 * @usage
 * ```
 * import { jins-meme } from 'ionic-native';
 *
 * jins-meme.functionName('Hello', 123)
 *   .then((something: any) => doSomething(something))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'JinsMeme',
  plugin: 'JinsMemeSDK-Plugin-Cordova', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.JinsMemePlugin', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/jins-meme/JinsMemeSDK-Plugin-Cordova.git', // the github repository URL for the plugin
  install: '' // OPTIONAL install command, in case the plugin requires variables
})
@Injectable()
export class JinsMeme {

  /**
  * Authentication and authorization of App and SDK.
  * Must call this method at first.
  *
  *@param {string} setAppClientID
  *@param {string} clientSecret
  *@returns {Promise<any>}
  */
  @Cordova()
  static setAppClientID(appClientId: string, clientSecret: string): Promise<any> { return; }

  /**
  * Starts scanning for JINS MEME.
  * @returns {Observable<any>}
  */
  @Cordova({
    observable: true,
    clearFunction: 'stopScan',
    clearWithArgs: true
  })
  static startScan(): Observable<any> { return; }

  /**
   * Stops scanning JINS MEME.
   * @returns {Promise<any>}
   */
  @Cordova()
  static stopScan(): Promise<any> { return; }

  /**
  * Establishes connection to JINS MEME.
  * @param {string} target
  */
  // @Cordova({observable: true})
  static connect(target: string): Observable<any> {
     return new Observable<any> ((observer: any) => {
       let data = cordova.plugins.JinsMemePlugin.connect(target, observer.next.bind(observer), observer.complete.bind(observer), observer.error.bind(observer));
       return () => console.log(data);
     });
    }

  /**
   * Set auto connection.
   *@param {Boolean} flag
   *@returns {Promise<any>}
   */
  @Cordova()
  static setAutoConnect(flag: boolean): Promise<any> { return; }

  /**
  * Returns whether a connection to JINS MEME has been established.
  *@returns {Promise<any>}
  */
  @Cordova()
  static isConnected(): Promise<any> { return; }

  /**
   * Disconnects from JINS MEME.
   *@returns {Promise<any>}
   */
  @Cordova()
  static disconnect(): Promise<any> { return; }

  /**
 * Starts receiving realtime data.
 * @returns {Observable<any>}
 */
 @Cordova({
   observable: true,
   clearFunction: 'stopDataReport',
   clearWithArgs: true
 })
 static startDataReport(): Observable<any> { return; }

  /**
 * Stops receiving data.
 *@returns {Promise<any>}
 */
  @Cordova()
  static stopDataReport(): Promise<any> { return; }

  /**
  * Returns SDK version.
  *
  *@returns {Promise<any>}
  */
  @Cordova()
  static getSDKVersion(): Promise<any> { return; }

  /**
  * Returns JINS MEME connected with other apps.
  *@returns {Promise<any>}
  */
  @Cordova()
  static getConnectedByOthers(): Promise<any> { return; }


  /**
  * Returns calibration status
  *@returns {Promise<any>}
  */
  @Cordova()
  static isCalibrated(): Promise<any> { return; }

  /**
  * Returns device type.
  *@returns {Promise<any>}
  */
  @Cordova()
  static getConnectedDeviceType(): Promise<any> { return; }

  /**
  * Returns hardware version.
  *@returns {Promise<any>}
  */
  @Cordova()
  static getConnectedDeviceSubType(): Promise<any> { return; }

  /**
  * Returns FW Version.
  *@returns {Promise<any>}
  */
  @Cordova()
  static getFWVersion(): Promise<any> { return; }

  /**
  * Returns HW Version.
  *@returns {Promise<any>}
  */
  @Cordova()
  static getHWVersion(): Promise<any> { return; }

  /**
  * Returns response about whether data was received or not.
  *@returns {Promise<any>}
  */
  @Cordova()
  static isDataReceiving(): Promise<any> { return; }
}
