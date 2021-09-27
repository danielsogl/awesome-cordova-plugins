import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name Native Geocoder
 * @description
 * Cordova plugin for native forward and reverse geocoding
 * @usage
 * ```typescript
 * import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@awesome-cordova-plugins/native-geocoder/ngx';
 *
 * constructor(private nativeGeocoder: NativeGeocoder) { }
 *
 * ...
 *
 * let options: NativeGeocoderOptions = {
 *     useLocale: true,
 *     maxResults: 5
 * };
 *
 * this.nativeGeocoder.reverseGeocode(52.5072095, 13.1452818, options)
 *   .then((result: NativeGeocoderResult[]) => console.log(JSON.stringify(result[0])))
 *   .catch((error: any) => console.log(error));
 *
 * this.nativeGeocoder.forwardGeocode('Berlin', options)
 *   .then((result: NativeGeocoderResult[]) => console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude))
 *   .catch((error: any) => console.log(error));
 * ```
 * @interfaces
 * NativeGeocoderResult
 * NativeGeocoderOptions
 */
@Plugin({
  pluginName: 'NativeGeocoder',
  plugin: 'cordova-plugin-nativegeocoder',
  pluginRef: 'nativegeocoder',
  repo: 'https://github.com/sebastianbaar/cordova-plugin-nativegeocoder',
  platforms: ['iOS', 'Android'],
})
@Injectable()
export class NativeGeocoder extends AwesomeCordovaNativePlugin {
  /**
   * Reverse geocode a given latitude and longitude to find location address
   *
   * @param latitude {number} The latitude
   * @param longitude {number} The longitude
   * @param options {NativeGeocoderOptions} The options
   * @returns {Promise<NativeGeocoderResult[]>}
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  reverseGeocode(
    latitude: number,
    longitude: number,
    options?: NativeGeocoderOptions
  ): Promise<NativeGeocoderResult[]> {
    return;
  }

  /**
   * Forward geocode a given address to find coordinates
   *
   * @param addressString {string} The address to be geocoded
   * @param options {NativeGeocoderOptions} The options
   * @returns {Promise<NativeGeocoderResult[]>}
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  forwardGeocode(addressString: string, options?: NativeGeocoderOptions): Promise<NativeGeocoderResult[]> {
    return;
  }
}

/**
 * Encapsulates format information about a geocoding result.
 * more Info:
 *  - https://developer.apple.com/documentation/corelocation/clplacemark
 *  - https://developer.android.com/reference/android/location/Address.html
 */
export interface NativeGeocoderResult {
  /**
   * The latitude.
   */
  latitude: string;
  /**
   * The longitude.
   */
  longitude: string;
  /**
   * The country code.
   */
  countryCode: string;
  /**
   * The country name.
   */
  countryName: string;
  /**
   * The postal code.
   */
  postalCode: string;
  /**
   * The administrativeArea.
   */
  administrativeArea: string;
  /**
   * The subAdministrativeArea.
   */
  subAdministrativeArea: string;
  /**
   * The locality.
   */
  locality: string;
  /**
   * The subLocality.
   */
  subLocality: string;
  /**
   * The thoroughfare.
   */
  thoroughfare: string;
  /**
   * The subThoroughfare.
   */
  subThoroughfare: string;
  /**
   * The areasOfInterest
   */
  areasOfInterest: string[];
}

/**
 * Options for reverse and forward geocoding.
 */
export interface NativeGeocoderOptions {
  /**
   * The locale to use when returning the address information.
   * If set to 'false' the locale will always be 'en_US'.
   * Default is 'true'
   */
  useLocale: boolean;
  /**
   * The default locale to use when returning the address information.
   * e.g.: 'fa-IR' or 'de_DE'.
   */
  defaultLocale?: string;
  /**
   * The maximum number of result to return (max is 5).
   * Default is 1
   */
  maxResults: number;
}
