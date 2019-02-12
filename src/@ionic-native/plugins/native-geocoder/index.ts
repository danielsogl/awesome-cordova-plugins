import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @name Native Geocoder
 * @description
 * Cordova plugin for native forward and reverse geocoding
 *
 * @usage
 * ```typescript
 * import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
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
 *   .then((result: NativeGeocoderReverseResult[]) => console.log(JSON.stringify(result[0])))
 *   .catch((error: any) => console.log(error));
 *
 * this.nativeGeocoder.forwardGeocode('Berlin', options)
 *   .then((coordinates: NativeGeocoderForwardResult[]) => console.log('The coordinates are latitude=' + coordinates[0].latitude + ' and longitude=' + coordinates[0].longitude))
 *   .catch((error: any) => console.log(error));
 * ```
 * @interfaces
 * NativeGeocoderReverseResult
 * NativeGeocoderForwardResult
 * NativeGeocoderOptions
 */
@Plugin({
  pluginName: 'NativeGeocoder',
  plugin: 'cordova-plugin-nativegeocoder',
  pluginRef: 'nativegeocoder',
  repo: 'https://github.com/sebastianbaar/cordova-plugin-nativegeocoder',
  platforms: ['iOS', 'Android']
})
@Injectable()
export class NativeGeocoder extends IonicNativePlugin {

  /**
   * Reverse geocode a given latitude and longitude to find location address
   * @param latitude {number} The latitude
   * @param longitude {number} The longitude
   * @param options {NativeGeocoderOptions} The options
   * @return {Promise<NativeGeocoderReverseResult[]>}
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  reverseGeocode(latitude: number, longitude: number, options?: NativeGeocoderOptions): Promise<NativeGeocoderReverseResult[]> { return; }

  /**
   * Forward geocode a given address to find coordinates
   * @param addressString {string} The address to be geocoded
   * @param options {NativeGeocoderOptions} The options
   * @return {Promise<NativeGeocoderForwardResult[]>}
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  forwardGeocode(addressString: string, options?: NativeGeocoderOptions): Promise<NativeGeocoderForwardResult[]> { return; }
}

/**
 * Encapsulates format information about a reverse geocoding result.
 * more Info:
 *  - https://developer.apple.com/documentation/corelocation/clplacemark
 *  - https://developer.android.com/reference/android/location/Address.html
 */
export interface NativeGeocoderReverseResult {
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
}

/**
 * Encapsulates format information about a forward geocoding result.
 */
export interface NativeGeocoderForwardResult {
  /**
   * The latitude.
   */
  latitude: string;
  /**
   * The longitude.
   */
  longitude: string;
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
