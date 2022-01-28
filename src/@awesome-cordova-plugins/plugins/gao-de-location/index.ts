import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

/**
 * @name Gao De Location
 * @description
 * Because the original GPS positioning uses Google Browser positioning, and Google withdraws from China, resulting in GPS Android positioning can not be positioned.
 * Gaode location can directly return address informationGaode location can directly return address information
 * @usage
 * ```typescript
 * import { GaoDeLocation } from '@awesome-cordova-plugins/gao-de-location/ngx';
 *
 *
 * constructor(private gaoDeLocation: GaoDeLocation) { }
 *
 *
 * const positionOptions: PositionOptions = {
 *     androidOption: {
 *      locationMode: LocationModeEnum.Hight_Accuracy,
 *      gpsFirst: false,
 *       HttpTimeOut: 30000,
 *       interval: 2000,
 *       needAddress: true,
 *       onceLocation: false,
 *       onceLocationLatest: false,
 *       locationProtocol: LocationProtocolEnum.HTTP,
 *       sensorEnable: false,
 *       wifiScan: true,
 *       locationCacheEnable: true
 *     }, iosOption: {
 *       desiredAccuracy: DesiredAccuracyEnum.kCLLocationAccuracyBest,
 *       pausesLocationUpdatesAutomatically: 'YES',
 *       allowsBackgroundLocationUpdates: 'NO',
 *       locationTimeout: 10,
 *       reGeocodeTimeout: 5,
 *     }
 *   };
 * const positionRes: PositionRes = await this.gaoDeLocation.getCurrentPosition(positionOptions).catch((e: any) => {
 *     console.log(e);
 *   }) || null;
 * console.log(JSON.stringify(positionRes));
 *
 *
 * this.gaoDeLocation.startSerialLocation(positionOptions).subscribe((positionRes: PositionRes) => {
 *    console.log(JSON.stringify(positionRes));
 * });
 *
 * const positionRes: any = this.gaoDeLocation.stopSerialLocation().catch((e) => {
 *     console.log(e);
 *   }) || null;
 * console.log(JSON.stringify(positionRes));
 *
 * ```
 */
@Plugin({
  pluginName: 'GaoDeLocation',
  plugin: 'cordova-plugin-gaodelocation-chenyu',
  pluginRef: 'GaoDe',
  repo: 'https://github.com/waliu/cordova-plugin-gaodelocation-chenyu.git',
  install:
    'ionic cordova plugin add cordova-plugin-gaodelocation-chenyu --variable  ANDROID_API_KEY=your android key --variable  IOS_API_KEY=your ios key',
  installVariables: ['ANDROID_API_KEY', 'IOS_API_KEY'],
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class GaoDeLocation extends AwesomeCordovaNativePlugin {
  /**
   * Single location
   *
   * @param positionOptions
   * @returns Promise<PositionRes>
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  getCurrentPosition(positionOptions: PositionOptions): Promise<PositionRes> {
    return;
  }

  /**
   * Start serial location
   *
   * @param positionOptions
   * @returns Promise<PositionRes>
   */
  @Cordova({
    callbackOrder: 'reverse',
    observable: true,
  })
  startSerialLocation(positionOptions: PositionOptions): Observable<PositionRes> {
    return;
  }

  /**
   * Stop Serial Location
   *
   * @returns Promise<any>
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  stopSerialLocation(): Promise<any> {
    return;
  }
}

/**
 * Location parameter
 */
export interface PositionOptions {
  /**
   * android options
   */
  androidOption: AndroidOptions;
  /**
   * ios options
   */
  iosOption: IosOptions;
}

/**
 * android positioning accuracy
 */
export interface AndroidOptions {
  /**
   * location mode
   */
  locationMode: LocationModeEnum;
  /**
   * gps first
   */
  gpsFirst: boolean;
  /**
   * Http timeOut
   */
  HttpTimeOut: number;
  /**
   * Location interval
   */
  interval: number;
  /**
   * Open reverse address
   */
  needAddress: boolean;
  /**
   * once location
   */
  onceLocation: boolean;
  /**
   * once location latest
   */
  onceLocationLatest: boolean;
  /**
   * location protocol
   */
  locationProtocol: LocationProtocolEnum;
  /**
   * sensor enable
   */
  sensorEnable: boolean;
  /**
   * wifi scan
   */
  wifiScan: boolean;
  /**
   * location cache enable
   */
  locationCacheEnable: boolean;
}

/**
 *
 * IOS positioning parameters
 *
 */
export interface IosOptions {
  /**
   * desired accuracy
   */
  desiredAccuracy?: DesiredAccuracyEnum;
  /**
   * pauses location updates automatically
   */
  pausesLocationUpdatesAutomatically: IosBoolean;
  /**
   * allows background location updates
   */
  allowsBackgroundLocationUpdates: IosBoolean;
  /**
   * location timeout
   */
  locationTimeout: number;
  /**
   * re geocode timeout
   */
  reGeocodeTimeout?: number;
  /**
   * locating with re geocode
   */
  locatingWithReGeocode?: IosBoolean;
}

/**
 * ios positioning accuracy
 * https://developer.apple.com/documentation/corelocation/kcllocationaccuracybestfornavigation
 */
export enum DesiredAccuracyEnum {
  /**
   * The highest possible accuracy that uses additional sensor data to facilitate navigation apps.
   */
  kCLLocationAccuracyBestForNavigation = 1,
  /**
   * The best level of accuracy available.
   */
  kCLLocationAccuracyBest = 2,
  /**
   * Accurate to within ten meters of the desired target.
   */
  kCLLocationAccuracyNearestTenMeters = 3,
  /**
   * Accurate to within one hundred meters.
   */
  kCLLocationAccuracyHundredMeters = 4,
  /**
   * Accurate to the nearest kilometer.
   */
  kCLLocationAccuracyKilometer = 5,
  /**
   * Accurate to the nearest three kilometers.
   */
  kCLLocationAccuracyThreeKilometers = 6,
}

/**
 * locationModeEnum
 */
export enum LocationModeEnum {
  Hight_Accuracy = 1,
  Battery_Saving = 2,
  Device_Sensors = 3,
}

/**
 * locationProtocolEnum
 */
export enum LocationProtocolEnum {
  HTTP = 1,
  HTTPS = 2,
}

/**
 * ios boolean
 */
export declare type IosBoolean = 'YES' | 'NO';

/**
 * Positioning return result
 */
export interface PositionRes {
  /**
   * Status code
   */
  code: number;
  /**
   * latitude
   */
  latitude: string;
  /**
   * longitude
   */
  longitude: string;
  /**
   * accuracy
   */
  accuracy: string;
  /**
   * address
   */
  formattedAddress: string;
  /**
   * country
   */
  country: string;
  /**
   * province
   */
  province: string;
  /**
   * city
   */
  city: string;
  /**
   * district
   */
  district: string;
  /**
   * citycode
   */
  citycode: string;
  /**
   * adcode
   */
  adcode: string;
  /**
   * street
   */
  street: string;
  /**
   * Street number information
   */
  number: string;
  /**
   * POI name
   */
  POIName: string;
  /**
   * AOI Name
   */
  AOIName: string;
  /**
   * altitude
   */
  altitude?: string;
  /**
   * speed
   */
  speed?: string;
  /**
   * bearing
   */
  bearing?: string;
  /**
   * building id
   */
  buildingId?: string;
  /**
   * floor
   */
  floor?: string;
  /**
   * gps accuracy status
   */
  gpsAccuracyStatus?: string;
  /**
   * Get location result source
   */
  locationType?: string;
  /**
   * Location detail
   */
  locationDetail?: string;
}
