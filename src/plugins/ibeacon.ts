import {Plugin, Cordova} from './plugin';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

declare var cordova: any;

export interface Beacon {
  uuid: string;
  major: string;
  minor: string;
  proximity: string;
  tx: number;
  rssi: number;
  accuracy: number;
}
export interface BeaconRegion {
  identifer: string;
  uuid: string;
  major?: number;
  minor?: number;
  notifyEntryStateOnDisplay?: boolean;
}
export interface CircularRegion {
  identifier: string;
  latitude: number;
  longitude: number;
  radius: number;
}
export interface PluginResult {
  eventType: string;
  region: BeaconRegion;
  beacons: Beacon[];
  authorizationStatus: string;
  state: string;
}
export interface Delegate {
  didDetermineStateForRegion(pluginResult?: PluginResult): Observable<PluginResult>;
  didStartMonitoringForRegion(pluginResult?: PluginResult): Observable<PluginResult>;
  didExitRegion(pluginResult?: PluginResult): Observable<PluginResult>;
  didEnterRegion(pluginResult?: PluginResult): Observable<PluginResult>;
  didRangeBeaconsInRegion(pluginResult?: PluginResult): Observable<PluginResult>;
  peripheralManagerDidStartAdvertising(pluginResult?: PluginResult): Observable<PluginResult>;
  peripheralManagerDidUpdateState(pluginResult?: PluginResult): Observable<PluginResult>;
  didChangeAuthorizationStatus(authorizationStatus?: string): Observable<string>;
  monitoringDidFailForRegionWithError(pluginResult?: PluginResult): Observable<PluginResult>;
}

@Plugin({
    plugin: 'cordova-plugin-ibeacon',
    pluginRef: 'cordova.plugins.locationManager',
    repo: 'https://github.com/petermetz/cordova-plugin-ibeacon',
    platforms: ['Android', 'iOS']
})
export class IBeacon {
  delegate: Delegate;
  constructor() {
    console.log('IBeacon constructor ran');
  }

  static init(): Delegate {
    let delegate = new cordova.plugins.locationManager.Delegate();

    // let didEnterRegionSubject = new Subject<PluginResult>();
    // delegate.didEnterRegion$ = didEnterRegionSubject.asObservable();
    // delegate.didEnterRegion = (pluginResult: PluginResult) => didEnterRegionSubject.next(pluginResult);
    delegate.didEnterRegion = (pluginResult?: PluginResult) => {
      console.log('inside didStartMonitoringForRegion function');
      return new Observable<PluginResult>(
        (observer: any) => {
          console.log('inside didEnterRegion observer function');
          let cb = (data: PluginResult) => observer.next(data);
          return delegate.didEnterRegion = cb;
        }
      );
    };

    delegate.didStartMonitoringForRegion = (pluginResult?: PluginResult) => {
      console.log('inside didStartMonitoringForRegion function');

      return new Observable<PluginResult>(
        (observer: any) => {
          console.log('inside didStartMonitoringForRegion observer function');
          let cb = (data: PluginResult) => observer.next(data);
          return delegate.didStartMonitoringForRegion = cb;
        }
      );
    };

    // delegate.didRangeBeaconsInRegion = (pluginResult: PluginResult) => { return () => pluginResult; };
    let funSubject = new Subject<PluginResult>();

    delegate.didRangeBeaconsInRegion = function(pluginResult){
      funSubject.next(pluginResult);
      return funSubject.asObservable();
    };

    delegate.didDetermineStateForRegion = function(pluginResult): void {
      console.debug('didDetermineStateForRegion pluginResult: ', pluginResult);
    };

    cordova.plugins.locationManager.setDelegate(delegate);
    return delegate;
  }

  static init2(): Delegate {
    let delegate = new cordova.plugins.locationManager.Delegate();

    let newDel: Delegate;
    newDel.didEnterRegion = (): Observable<PluginResult> => {
      return new Observable<PluginResult>(
        (observer: any) => {
          console.log('init()2 inside didEnterRegion observer function');
          let cb = (data: PluginResult) => observer.next(data);
          return delegate.didEnterRegion = cb;
        }
      );
    };
    newDel.didStartMonitoringForRegion = () => {
      return new Observable<PluginResult>(
        (observer: any) => {
          console.log('init()2 inside didStartMonitoringForRegion observer function');
          let cb = (data: PluginResult) => observer.next(data);
          return delegate.didStartMonitoringForRegion = cb;
        }
      );
    };
    newDel.didRangeBeaconsInRegion = () => {
      return new Observable<PluginResult>(
        (observer: any) => {
          console.log('init()2 inside didStartMonitoringForRegion observer function');
          let cb = (data: PluginResult) => observer.next(data);
          return delegate.didRangeBeaconsInRegion = cb;
        }
      );
    };
    delegate.didDetermineStateForRegion = function(pluginResult): void {
      console.debug('init()2 didDetermineStateForRegion pluginResult: ', pluginResult);
    };

    cordova.plugins.locationManager.setDelegate(delegate);
    return newDel;
   }

   static BeaconRegion(beaconRegion: BeaconRegion): BeaconRegion {
     return new cordova.plugins.locationManager.BeaconRegion(beaconRegion.identifer, beaconRegion.uuid);
   }

  static startMonitoringForRegion(region: BeaconRegion): void {
    cordova.plugins.locationManager.startMonitoringForRegion(region)
      .fail(function(e) { console.error(e); })
      .done(() => console.log('started monitoring'));
    return;
  }

  @Cordova()
  static stopMonitoringForRegion(region: BeaconRegion): Promise<void> { return; }

  @Cordova()
  static startRangingBeaconsInRegion(region: BeaconRegion): void {
    cordova.plugins.locationManager.startRangingBeaconsInRegion(region)
      .fail(function(e) { console.error(e); })
      .done(() => console.log('started ranging'));
    return;
  }

  // @Cordova()
  // Q promises dont play nicely
  static enableDebugLogs(): Promise<void> {
    cordova.plugins.locatiionManager.enableDebugLogs()
      .fail(function(e) { console.error(e); })
      .done(() => console.log('enabled debug logs'));
    return;
  }

  @Cordova()
  static disableDebugLogs(): Promise<void> { return; }

  // @Cordova()
  // Q promises dont play nicely
  static enableDebugNotifications(): Promise<void> {
    cordova.plugins.locatiionManager.enableDebugNotifications()
      .fail(function(e) { console.error(e); })
      .done(() => console.log('enabled debug notifications'));
    return;
  }

  @Cordova()
  static disableDebugNotifications(): Promise<void> { return; }

  @Cordova()
  static appendToDeviceLog(message: string): Promise<void> { return; }

}