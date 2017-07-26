import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name Native Geocoder
 * @description
 * Cordova plugin for native forward and reverse geocoding
 *
 * @usage
 * ```typescript
 * import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
 *
 * constructor(private nativeGeocoder: NativeGeocoder) { }
 *
 * ...
 *
 * this.nativeGeocoder.reverseGeocode(52.5072095, 13.1452818)
 *   .then((result: NativeGeocoderReverseResult) => console.log(JSON.stringify(result)))
 *   .catch((error: any) => console.log(error));
 *
 * this.nativeGeocoder.forwardGeocode('Berlin')
 *   .then((coordinates: NativeGeocoderForwardResult) => console.log('The coordinates are latitude=' + coordinates.latitude + ' and longitude=' + coordinates.longitude))
 *   .catch((error: any) => console.log(error));
 * ```
 * @interfaces
 * NativeGeocoderReverseResult
 * NativeGeocoderForwardResult
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
   * @return {Promise<NativeGeocoderReverseResult>}
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  reverseGeocode(latitude: number, longitude: number): Promise<NativeGeocoderReverseResult> { return; }

  /**
   * Forward geocode a given address to find coordinates
   * @param addressString {string} The address to be geocoded
   * @return {Promise<NativeGeocoderForwardResult>}
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  forwardGeocode(addressString: string): Promise<NativeGeocoderForwardResult> { return; }
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
