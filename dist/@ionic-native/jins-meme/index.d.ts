import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
/**
 * @name Jins Meme
 * @description
 * Implementation of the JINS MEME SDK
 *
 * @usage
 * ```typescript
 * import { JinsMeme } from '@ionic-native/jins-meme';
 *
 * constructor(private jinsMeme: JinsMeme) { }
 *
 * ...
 *
 * this.jinsMeme.setAppClientID(appClientId: string, clientSecret: string).then(
 *   // Bluetooth should be enabled and the JINS MEME powered on (blinking blue light)
 *   this.jinsMeme.startScan().subscribe((meme_addr) => {
 *     this.jinsMeme.connect(meme_addr).subscribe((connectResult) => {
 *       this.memeService.startDataReport().subscribe((dataReport) => {
 *         console.log(dataReport);
 *       });
 *     });
 *   });
 * .catch(console.log('jinsMeme.setAppClientID authentication error'));
 *
 * ```
 */
export declare class JinsMeme extends IonicNativePlugin {
    /**
     * Authentication and authorization of App and SDK.
     * Must call this method first.
     * Sign up for an app ID (and get an app/client secret) at developers.jins.com
     *
     *@param {string} setAppClientID
     *@param {string} clientSecret
     *@returns {Promise<any>}
     */
    setAppClientID(appClientId: string, clientSecret: string): Promise<any>;
    /**
     * Starts scanning for JINS MEME.
     * @returns {Observable<any>}
     */
    startScan(): Observable<any>;
    /**
     * Stops scanning JINS MEME.
     * @returns {Promise<any>}
     */
    stopScan(): Promise<any>;
    /**
     * Establishes connection to JINS MEME.
     * @param {string} target
     * @returns {Observable<any>}
     */
    connect(target: string): Observable<any>;
    /**
     * Set auto connection mode.
     *@param {Boolean} flag
     *@returns {Promise<any>}
     */
    setAutoConnect(flag: boolean): Promise<any>;
    /**
     * Returns whether a connection to JINS MEME has been established.
     *@returns {Promise<any>}
     */
    isConnected(): Promise<any>;
    /**
     * Disconnects from JINS MEME.
     *@returns {Promise<any>}
     */
    disconnect(): Promise<any>;
    /**
     * Starts receiving realtime data.
     * @returns {Observable<any>}
     */
    startDataReport(): Observable<any>;
    /**
    * Stops receiving data.
    *@returns {Promise<any>}
    */
    stopDataReport(): Promise<any>;
    /**
     * Returns SDK version.
     *
     *@returns {Promise<any>}
     */
    getSDKVersion(): Promise<any>;
    /**
     * Returns JINS MEME connected with other apps.
     *@returns {Promise<any>}
     */
    getConnectedByOthers(): Promise<any>;
    /**
     * Returns calibration status
     *@returns {Promise<any>}
     */
    isCalibrated(): Promise<any>;
    /**
     * Returns device type.
     *@returns {Promise<any>}
     */
    getConnectedDeviceType(): Promise<any>;
    /**
     * Returns hardware version.
     *@returns {Promise<any>}
     */
    getConnectedDeviceSubType(): Promise<any>;
    /**
     * Returns FW Version.
     *@returns {Promise<any>}
     */
    getFWVersion(): Promise<any>;
    /**
     * Returns HW Version.
     *@returns {Promise<any>}
     */
    getHWVersion(): Promise<any>;
    /**
     * Returns response about whether data was received or not.
     *@returns {Promise<any>}
     */
    isDataReceiving(): Promise<any>;
}
