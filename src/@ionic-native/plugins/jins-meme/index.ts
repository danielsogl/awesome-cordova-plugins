import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaCheck } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

declare var cordova: any;

/**
 * @name JinsMeme
 * @description
 * Implementation of the JINS MEME SDK
 *
 * @usage
 * ```
 * import { JinsMeme } from '@ionic-native/jins-meme';
 * 
 * constructor(private jinsMeme: JinsMeme) { }
 * 
 * ...
 * 
 * this.jinsMeme.functionName()
 *   .then(...)
 *   .catch(...);
 *
 * ```
 */
@Plugin({
  pluginName: 'Jins Meme',
  plugin: 'JinsMemeSDK-Plugin-Cordova',
  pluginRef: 'cordova.plugins.JinsMemePlugin',
  repo: 'https://github.com/jins-meme/JinsMemeSDK-Plugin-Cordova.git'
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
  setAppClientID(appClientId: string, clientSecret: string): Promise<any> { return; }
  /**
   * Starts scanning for JINS MEME.
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true,
    clearFunction: 'stopScan',
    clearWithArgs: true
  })
  startScan(): Observable<any> { return; }
  /**
   * Stops scanning JINS MEME.
   * @returns {Promise<any>}
   */
  @Cordova()
  stopScan(): Promise<any> { return; }
  /**
   * Establishes connection to JINS MEME.
   * @param {string} target
   * @returns {Observable<any>}
   */
  @CordovaCheck({
    observable: true
  })
  connect(target: string): Observable<any> {
     return new Observable<any>((observer: any) => {
       let data = cordova.plugins.JinsMemePlugin.connect(target, observer.next.bind(observer), observer.complete.bind(observer), observer.error.bind(observer));
       return () => console.log(data);
     });
    }
  /**
   * Set auto connection mode.
   *@param {Boolean} flag
   *@returns {Promise<any>}
   */
  @Cordova()
  setAutoConnect(flag: boolean): Promise<any> { return; }
  /**
   * Returns whether a connection to JINS MEME has been established.
   *@returns {Promise<any>}
   */
  @Cordova()
  isConnected(): Promise<any> { return; }
  /**
   * Disconnects from JINS MEME.
   *@returns {Promise<any>}
   */
  @Cordova()
  disconnect(): Promise<any> { return; }
  /**
   * Starts receiving realtime data.
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true,
    clearFunction: 'stopDataReport',
    clearWithArgs: true
  })
  startDataReport(): Observable<any> { return; }
   /**
   * Stops receiving data.
   *@returns {Promise<any>}
   */
  @Cordova()
  stopDataReport(): Promise<any> { return; }
  /**
   * Returns SDK version.
   *
   *@returns {Promise<any>}
   */
  @Cordova()
  getSDKVersion(): Promise<any> { return; }
  /**
   * Returns JINS MEME connected with other apps.
   *@returns {Promise<any>}
   */
  @Cordova()
  getConnectedByOthers(): Promise<any> { return; }
  /**
   * Returns calibration status
   *@returns {Promise<any>}
   */
  @Cordova()
  isCalibrated(): Promise<any> { return; }
  /**
   * Returns device type.
   *@returns {Promise<any>}
   */
  @Cordova()
  getConnectedDeviceType(): Promise<any> { return; }
  /**
   * Returns hardware version.
   *@returns {Promise<any>}
   */
  @Cordova()
  getConnectedDeviceSubType(): Promise<any> { return; }
  /**
   * Returns FW Version.
   *@returns {Promise<any>}
   */
  @Cordova()
  getFWVersion(): Promise<any> { return; }
  /**
   * Returns HW Version.
   *@returns {Promise<any>}
   */
  @Cordova()
  getHWVersion(): Promise<any> { return; }
  /**
   * Returns response about whether data was received or not.
   *@returns {Promise<any>}
   */
  @Cordova()
  isDataReceiving(): Promise<any> { return; }
}
