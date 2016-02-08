/**
 * Get geolocation data.
 *
 * @usage
 * ```js
 * Geolocation.getCurrentPosition().then((resp) => {
 *  //resp.coords.latitude
 *  //resp.coords.longitude
 * })
 *
 * let watch = Geolocation.watchPosition();
 * watch.subscribe((data) => {
 *  //data.coords.latitude
 *  //data.coords.longitude
 * })
 * ```
 */
export declare class Geolocation {
    static getCurrentPosition(options: any): void;
    static watchPosition(options: any): void;
}
