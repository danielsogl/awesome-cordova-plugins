import { Cordova, Plugin } from './plugin';

export const TransitionType = {
  ENTER: 1,
  EXIT: 2,
  BOTH: 3
};

@Plugin({
  plugin: 'cordova-plugin-geofence',
  pluginRef: 'geofence',
  repo: 'https://github.com/cowbell/cordova-plugin-geofence/',
  platforms: ['Android', 'iOS', 'Windows Phone 8', 'Windows Phone']
})

export class Geofence {

  @Cordova()
  static initialize(): Promise<any> { return };
  
  @Cordova()
  static addOrUpdate(geofences: Object | Array<Object>): Promise<any> { return };
  
  @Cordova()
  static remove(geofenceId: string | Array<string>, onSuccess, onError): Promise<any> { return };
  
  @Cordova()
  static removeAll(): Promise<any> { return };
  
  @Cordova()
  static getWatched(): Promise<any> { return };

  @Cordova()
  static onTrasitionReceived(geofences: string | Array<string>): Promise<any> { return };

}