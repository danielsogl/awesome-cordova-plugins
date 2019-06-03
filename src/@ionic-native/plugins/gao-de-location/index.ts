import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @name Gao De Location
 * @description
 * Because the original GPS positioning uses Google Browser positioning, and Google withdraws from China, resulting in GPS Android positioning can not be positioned.
 * Gaode location can directly return address informationGaode location can directly return address information
 *
 * @usage
 * ```typescript
 * import { GaoDeLocation } from '@ionic-native/gao-de-location/ngx';
 *
 *
 * constructor(private gaoDeLocation: GaoDeLocation) { }
 *
 * this.gaoDeLocation.getCurrentPosition()
 * .then((res: PositionOptions) => console.log(res))
 * .catch((error) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'GaoDeLocation',
  plugin: 'cordova-plugin-gaodelocation-chenyu',
  pluginRef: 'GaoDe',
  repo: 'https://github.com/waliu/cordova-plugin-gaodelocation-chenyu.git',
  install: 'ionic cordova plugin add cordova-plugin-gaodelocation-chenyu --variable  ANDROID_API_KEY=your android key --variable  IOS_API_KEY=your ios key',
  installVariables: ['ANDROID_API_KEY', 'IOS_API_KEY'],
  platforms: ['Android', 'iOS']
})
@Injectable()
export class GaoDeLocation extends IonicNativePlugin {
  /**
   * Get longitude and latitude, country, province, city, postal code, specific address, region
   * @returns {Promise<PositionOptions>}
   */
  @Cordova()
  getCurrentPosition(): Promise<PositionOptions> {
    return;
  }

}

export interface PositionOptions {
  /*
  * latitude
  * */
  latitude: number;
  /*
   * longitude
   * */
  longitude: number;
  /*
   * ios Horizontal accuracy,android accuracy
   * */
  accuracy: string;
  /*
   * Postal Code
   * */
  adcode: string;
  /*
   * Detailed address
   * */
  address: string;
  /*
   * city
   * */
  city: string;
  /*
   * city Code
   * */
  citycode: string;
  /*
   * country
   * */
  country: string;
  /*
  * district
  * */
  district: string;
  /*
  * Address name
  * */
  poi: string;
  /*
  * province
  * */
  province: string;
  /*
  * The state of the calling plug-in
  * */
  status: string;
  /*
  * Location type
  * */
  type: string;
  /*
  * Android Location time, ios void
  * **/
  time?: string;
  /*
  * backtime, ios void
  * **/
  backtime?: string;
  /*
  * angle
  * */
  bearing?: string;
  /*
   * Number of satellites, ios void
   * */
  satellites?: string;
}
