import { Plugin, Cordova } from './plugin';

/**
 * @name NativeGeocoder
 * @description
 * Cordova plugin for native forward and reverse geocoding
 *
 * @usage
 * ```typescript
 * import { NativeGeocoder } from 'ionic-native';
 *
 * NativeGeocoder.reverseGeocode(52.5072095, 13.1452818)
 *   .then((result: ReverseResult) => console.log("The address is " + result.address + " in " + result.countryCode))
 *   .catch((error: any) => console.log(error));
 *
 * NativeGeocoder.forwardGeocode("Berlin")
 *   .then((coordinates: ForwardResult) => console.log("The coordinates are latitude=" + coordinates.latitude + " and longitude=" + coordinates.longitude))
 *   .catch((error: any) => console.log(error));
 * ```
 * @interfaces
 *
 */
@Plugin({
  name: 'NativeGeocoder',
  plugin: 'cordova-plugin-nativegeocoder',
  pluginRef: 'nativegeocoder',
  repo: 'https://github.com/sebastianbaar/cordova-plugin-nativegeocoder',
  platforms: ['iOS', 'Android']
})
export class NativeGeocoder {

  /**
   * Reverse geocode a given latitude and longitude to find location address
   * @param latitude {number} The latitude
   * @param longitude {number} The longitude
   * @return {Promise<any>}
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  static reverseGeocode(latitude: number, longitude: number): Promise<ReverseResult> { return; }

  /**
   * Forward geocode a given address to find coordinates
   * @param addressString {string} The address to be geocoded
   * @return {Promise<any>}
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  static forwardGeocode(addressString: string): Promise<ForwardResult> { return; }

}

/**
 * Encapsulates format information about a reverse geocoding result.
 */
export interface ReverseResult {
  /**
   * The street.
   */
  street: string;
  /**
   * The house number.
   */
  houseNumber: string;
  /**
   * The postal code.
   */
  postalCode: string;
  /**
   * The city.
   */
  city: string;
  /**
   * The country name.
   */
  countryName: string;
  /**
   * The country code.
   */
  countryCode: string;
}
/**
 * Encapsulates format information about a forward geocoding result.
 */
export interface ForwardResult {
  /**
   * The latitude.
   */
  latitude: string;
  /**
   * The longitude.
   */
  longitude: string;
}
