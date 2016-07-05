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
  didChangeAuthorizationStatus(): Observable<string>;
  didDetermineStateForRegion(): Observable<PluginResult>;
  didEnterRegion(): Observable<PluginResult>;
  didExitRegion(): Observable<PluginResult>;
  didRangeBeaconsInRegion(): Observable<PluginResult>;
  didStartMonitoringForRegion(): Observable<PluginResult>;
  monitoringDidFailForRegionWithError(): Observable<PluginResult>;
  peripheralManagerDidStartAdvertising(): Observable<PluginResult>;
  peripheralManagerDidUpdateState(): Observable<PluginResult>;
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

  static Delegate(): Delegate {
    let delegate = new cordova.plugins.locationManager.Delegate();

    delegate.didChangeAuthorizationStatus = (pluginResult?: PluginResult) => {
      return new Observable<PluginResult>(
        (observer: any) => {
          let cb = (data: PluginResult) => observer.next(data);
          return delegate.didChangeAuthorizationStatus = cb;
        }
      );
    };

    delegate.didDetermineStateForRegion = (pluginResult?: PluginResult) => {
      return new Observable<PluginResult>(
        (observer: any) => {
          let cb = (data: PluginResult) => observer.next(data);
          return delegate.didDetermineStateForRegion = cb;
        }
      );
    };

    delegate.didEnterRegion = (pluginResult?: PluginResult) => {
      return new Observable<PluginResult>(
        (observer: any) => {
          let cb = (data: PluginResult) => observer.next(data);
          return delegate.didEnterRegion = cb;
        }
      );
    };

    delegate.didExitRegion = (pluginResult?: PluginResult) => {
      return new Observable<PluginResult>(
        (observer: any) => {
          let cb = (data: PluginResult) => observer.next(data);
          return delegate.didExitRegion = cb;
        }
      );
    };

    delegate.didRangeBeaconsInRegion = (pluginResult?: PluginResult) => {
      return new Observable<PluginResult>(
        (observer: any) => {
          let cb = (data: PluginResult) => observer.next(data);
          return delegate.didRangeBeaconsInRegion = cb;
        }
      );
    };

    delegate.didStartMonitoringForRegion = (pluginResult?: PluginResult) => {
      return new Observable<PluginResult>(
        (observer: any) => {
          let cb = (data: PluginResult) => observer.next(data);
          return delegate.didStartMonitoringForRegion = cb;
        }
      );
    };

    delegate.monitoringDidFailForRegionWithError = (pluginResult?: PluginResult) => {
      return new Observable<PluginResult>(
        (observer: any) => {
          let cb = (data: PluginResult) => observer.next(data);
          return delegate.monitoringDidFailForRegionWithError = cb;
        }
      );
    };

    delegate.peripheralManagerDidStartAdvertising = (pluginResult?: PluginResult) => {
      return new Observable<PluginResult>(
        (observer: any) => {
          let cb = (data: PluginResult) => observer.next(data);
          return delegate.peripheralManagerDidStartAdvertising = cb;
        }
      );
    };

    delegate.peripheralManagerDidUpdateState = (pluginResult?: PluginResult) => {
      return new Observable<PluginResult>(
        (observer: any) => {
          let cb = (data: PluginResult) => observer.next(data);
          return delegate.peripheralManagerDidUpdateState = cb;
        }
      );
    };

    cordova.plugins.locationManager.setDelegate(delegate);
    return delegate;
  }

  static BeaconRegion(identifer: string, uuid: string, minor?: number, major?: number, notifyEntryStateOnDisplay?: boolean): BeaconRegion {
    return new cordova.plugins.locationManager.BeaconRegion(identifer, uuid, minor, major, notifyEntryStateOnDisplay);
  }

  @Cordova({sync: true})
  static startMonitoringForRegion(region: BeaconRegion): Promise<string> { return; }

  @Cordova({sync: true})
  static stopMonitoringForRegion(region: BeaconRegion): Promise<void> { return; }

  @Cordova({sync: true})
  static startRangingBeaconsInRegion(region: BeaconRegion): void { return; }

  @Cordova({sync: true})
  static stopRangingBeaconsInRegion(region: BeaconRegion): void { return; }

  @Cordova({sync: true})
  static enableDebugLogs(): Promise<void> { return; }

  @Cordova({sync: true})
  static disableDebugLogs(): Promise<void> { return; }

  @Cordova({sync: true})
  static enableDebugNotifications(): Promise<void> { return; }

  @Cordova({sync: true})
  static disableDebugNotifications(): Promise<void> { return; }

  @Cordova({sync: true})
  static appendToDeviceLog(message: string): Promise<void> { return; }

  @Cordova()
  static requestAlwaysAuthorization(): Promise<void> { return; }

}