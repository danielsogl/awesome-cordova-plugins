import {Plugin, Cordova} from './plugin';

declare var Promise;

declare var window;

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
    clearFunction: 'clearWatch()'
  })
  static watchPosition(options:any){};
}
