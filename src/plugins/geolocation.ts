import {Plugin, Cordova} from './plugin';

declare var Promise;

declare var window;


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
@Plugin({
  name: 'Geolocation',
  plugin: 'cordova-plugin-geolocation',
  pluginRef: 'navigator.geolocation'
})
export class Geolocation {
  @Cordova()
  static getCurrentPosition(options:any){};


  @Cordova({
    callbackOrder: 'reverse',
    observable: true,
    clearFunction: 'clearWatch'
  })
  static watchPosition(options:any){};
}
