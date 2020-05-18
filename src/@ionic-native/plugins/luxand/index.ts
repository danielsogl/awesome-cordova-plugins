import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export interface LuxandConfig {
  /** The licence key got from Luxand */
  licence: string;
  /** The internal database name the tracker should use */
  dbname: string;
  /** the number of retry when registering of identifying a face */
  loginTryCount: number;
}

export interface OMLFacialData {
  /** The status message */
  status: string;
  /** The message returned by the plugin */
  message: string;
  /** The unique name generated and associated to a face when registering */
  name: string;
  /** The unique id Luxand Face SDK tracker associate to a face in it's internal database */
  id: number;
  /** Extra information about the face including age, expressions */
  extra: {
    AGE?: any;
    GENDER?: any;
    EYESOPENED?: any;
    SMILE: any;
  };
}

/**
 * @name Luxand
 * @description
 * This plugin let you integrat Luxand Face SDK into your ionic projects, so you can implements face authentication easily in your applications.
 *
 * @usage
 * ```typescript
 * import { Luxand } from '@ionic-native/luxand';
 *
 *
 * constructor(private luxand: Luxand) { }
 *
 * ...
 *
 * //init Luxand  Face SDK
 *
 * this.luxand.init({
 *  licence: "",
 *  dbname: "data.dat",
 *  loginTryCount: 3
 * })
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 * // register a face
 * this.luxand.register({
 *  timeout: 20000//20 seconds
 * })
 * .then(r=>{
 *  console.log("Your FACE ID:", r.id);
 *  console.log("Your AGE:", r.extra.AGE);
 *  console.log("Your GENDER:", r.extra.GENDER);
 *  console.log("SIMILING:", r.extra.SMILE>35? "YES": "NO");
 *  console.log("EYE OPENED:", r.extra.EYESOPENED>45? "YES": "NO");
 * })
 * .catch(err=>{
 *  if(err.messgae === "Already registered") {
 *    //extra data available
 *    console.log("Your AGE:", r.extra.AGE);
 *    console.log("Your GENDER:", r.extra.GENDER);
 *    console.log("SIMILING:", r.extra.SMILE>35? "YES": "NO");
 *    console.log("EYE OPENED:", r.extra.EYESOPENED>45? "YES": "NO");
 *  }
 * })
 * //to login using a face
 * this.luxand.login({
 * timeout: 20000
 * }).then(r=>console.log(r))
 * .catch(err=>console.log(err));
 *
 * ```
 * @interfaces
 * OMLFacialData
 * LuxandConfig
 */
@Plugin({
  pluginName: 'Luxand',
  plugin: 'codova-plugin-luxand',
  pluginRef: 'window.Luxand',
  repo: 'https://github.com/molobala/cordova-plugin-luxand',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Luxand extends IonicNativePlugin {
  /**
   * Initialize Luxand SDK
   * @param config {LuxandConfig} LuxandConfig configuration object to use to init the SDK
   * @return {Promise<any>} // Returns a promise that resolves if Luxand FaceSDK is initialized succesffully
   */
  @Cordova()
  init(config: LuxandConfig): Promise<any> {
    return;
  }
  /**
   * Identify methode, try to register a face in internal data base
   * @param params {any} Allow to specify the timeout value
   * @return {Promise<OMLFacialData>} // Returns a promise that resolve if a face has been detected and saved by the tracker in the internal database
   */
  @Cordova()
  register(params: { timeout: number }): Promise<OMLFacialData> {
    return;
  }
  /**
   * Login method, try to authenticated a face
   * @param params {any} Allow to specify the timeout value
   * @return {Promise<OMLFacialData>}
   */
  @Cordova()
  login(params: { timeout: number }): Promise<OMLFacialData> {
    return; // Returns a promise that resolve if a face is recognize successfully
  }
  /**
   * clear method, try to remove a face from internal database
   * @param id {number}
   * @return {Promise<any>}
   */
  @Cordova()
  clear(id: number): Promise<any> {
    return;
  }
  /**
   * clearMemory method, try to clear internal database
   * @return {Promise<any>}
   */
  @Cordova()
  clearMemory(): Promise<any> {
    return;
  }
}
