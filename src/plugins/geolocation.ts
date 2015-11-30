import {Plugin, Cordova} from './plugin';

declare var window;

@Plugin({
  name: 'Geolocation',
  plugin: 'cordova-plugin-geolocation',
  pluginRef: 'navigator.geolocation'
})
export class Device {
  @Cordova()
  static getCurrentPosition(options:any){};


  // Do this with observables
  // @Cordova()
  // static watchPosition;
}
