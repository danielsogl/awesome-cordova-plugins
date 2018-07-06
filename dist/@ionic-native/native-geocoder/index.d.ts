import { IonicNativePlugin } from '@ionic-native/core';
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
 *   .then((result: NativeGeocoderReverseResult) => console.log('The address is ' + result.street + ' in ' + result.countryCode))
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
export declare class NativeGeocoder extends IonicNativePlugin {
    /**
     * Reverse geocode a given latitude and longitude to find location address
     * @param latitude {number} The latitude
     * @param longitude {number} The longitude
     * @return {Promise<any>}
     */
    reverseGeocode(latitude: number, longitude: number): Promise<NativeGeocoderReverseResult>;
    /**
     * Forward geocode a given address to find coordinates
     * @param addressString {string} The address to be geocoded
     * @return {Promise<any>}
     */
    forwardGeocode(addressString: string): Promise<NativeGeocoderForwardResult>;
}
/**
 * Encapsulates format information about a reverse geocoding result.
 */
export interface NativeGeocoderReverseResult {
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
     * The district.
     */
    district: string;
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
