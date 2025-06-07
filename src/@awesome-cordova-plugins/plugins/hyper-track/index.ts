import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, Cordova, Plugin } from '@awesome-cordova-plugins/core';

const hypertrackIonicPluginVersion = '0.2.0';
// Minimal cordova-plugin-hypertrack-v3 version: 0.5.0
@Plugin({
  pluginName: 'cordova-plugin-hypertrack-v3',
  plugin: 'cordova-plugin-hypertrack-v3',
  pluginRef: 'hypertrack',
  repo: 'https://github.com/hypertrack/cordova-plugin-hypertrack.git',
  platforms: ['Android, iOS'],
})
@Injectable()
export class HyperTrackPlugin extends AwesomeCordovaNativePlugin {
  @Cordova()
  initialize(publishableKey: string): Promise<HyperTrackCordova> {
    return;
  }

  @Cordova()
  getBlockers(): Promise<Set<Blocker>> {
    return;
  }

  @Cordova()
  enableDebugLogging(): Promise<any> {
    return;
  }
}

// Interfaces for Cordova Plugin callbacks
interface DeviceIdReceiver {
  (deviceId: string): any;
}
interface TrackingStateReceiver {
  (isRunning: boolean): any;
}
interface FailureHandler {
  (error: Error): any;
}
interface SuccessHandler {
  (): any;
}
interface LocationReceiver {
  (location: CordovaLatestLocationResult): any;
}

// SDK instance that exposed from Cordova utilizes usage of callbacks, so we
// wrap it with adapter to avoid mix of callbacks and Promises
interface HyperTrackCordova {
  getDeviceId(success: DeviceIdReceiver, error: FailureHandler): void;
  isRunning(success: TrackingStateReceiver, error: FailureHandler): void;
  setDeviceName(name: string, success: SuccessHandler, error: FailureHandler): void;
  setDeviceMetadata(metadata: Object, success: SuccessHandler, error: FailureHandler): void;
  setTrackingNotificationProperties(
    title: string,
    message: string,
    success: SuccessHandler,
    error: FailureHandler
  ): void;
  addGeoTag(
    geotagData: Object,
    expectedLocation: Coordinates | undefined,
    success: SuccessHandler,
    error: FailureHandler
  ): void;
  requestPermissionsIfNecessary(success: SuccessHandler, error: FailureHandler): void;
  allowMockLocations(success: SuccessHandler, error: FailureHandler): void;
  syncDeviceSettings(success: SuccessHandler, error: FailureHandler): void;
  start(success: SuccessHandler, error: FailureHandler): void;
  stop(success: SuccessHandler, error: FailureHandler): void;
  getLatestLocation(success: LocationReceiver, error: FailureHandler): void;
  getCurrentLocation(success: LocationReceiver, error: FailureHandler): void;
}

export class CoordinatesValidationError extends Error {}

/** Wrapper class for passing spatial geoposition as a geotag's expected location */
export class Coordinates {
  constructor(
    public latitude: number,
    public longitude: number
  ) {
    if (latitude < -90.0 || latitude > 90.0 || longitude < -180.0 || longitude > 180.0) {
      throw new CoordinatesValidationError('latitude and longitude should be of correct values');
    }
  }

  public toString = (): string => {
    return JSON.stringify(this);
  };
}

/** A blocker is an obstacle that needs to be resolved to achieve reliable tracking. */
export interface Blocker {
  /** Recommended name for a user action, that needs to be performed to resolve the blocker. */
  userActionTitle: string;
  /** Recommended name for a button, that will navigate user to the place where he can resolve the blocker */
  userActionCTA: string;
  /** User action explanation */
  userActionExplanation: string;
  /** An action that navigates user to the dedicated settings menu. */
  resolve: () => void;
}

export type CordovaLatestLocationResult =
  | {
      type: 'location';
      location: Coordinates;
    }
  | {
      type: 'outage';
      outage: {
        code: number;
        name: keyof typeof Outage;
      };
    };

export type LocationResult =
  | {
      type: LocationResultType.LOCATION;
      value: Coordinates;
    }
  | {
      type: LocationResultType.OUTAGE;
      value: Outage;
    };

export enum LocationResultType {
  LOCATION,
  OUTAGE,
}

export enum Outage {
  MISSING_LOCATION_PERMISSION,
  MISSING_ACTIVITY_PERMISSION,
  LOCATION_SERVICE_DISABLED,
  NOT_TRACKING,
  START_HAS_NOT_FINISHED,
  NO_GPS_SIGNAL,
  RESTART_REQUIRED,
}

/**
 * @usage
 * ```typescript
 *   import { HyperTrack } from '@awesome-cordova-plugins/hyper-track';
 *
 *   initializeHypertrack() {
 *     HyperTrack.enableDebugLogging();
 *     HyperTrack.initialize('YOUR_PUBLISHING_KEY')
 *     .then( this.onSdkInstanceReceived )
 *     .catch( (err) => console.error("HyperTrack init failed with error " + err) );
 *   }
 *   onSdkInstanceReceived(sdkInstance: HyperTrack) {
 *       sdkInstance.getDeviceId()
 *      .then((id) => console.log("Got device id " + id))
 *      .then(() => sdkInstance.setDeviceName("Elvis Ionic"))
 *      .then(() => console.log("Device name was changed"))
 *      .then(() => sdkInstance.setDeviceMetadata({platform: "Ionic Android"}))
 *      .then(() => console.log("Device metadata was changed"))
 *      .then(() => sdkInstance.setTrackingNotificationProperties("Tracking On", "Ionic SDK is tracking"))
 *      .then(() => console.log("Notification properties were changed"))
 *      .catch((err) => console.error("Got error in HyperTrack " + err));
 *   }
 *
 * ```
 */
export class HyperTrack {
  /** Enables debug log in native HyperTrack SDK. */
  static enableDebugLogging(): void {
    new HyperTrackPlugin().enableDebugLogging();
  }

  /**
   * Entry point into SDK.
   *
   * Initializes SDK. Also resolves SDK instance that could be used to query deviceId or set
   * various data.
   * @param publishableKey account-specific secret from the HyperTrack dashborad.
   * @see {@link https://dashboard.hypertrack.com/setup}.
   */
  static initialize(publishableKey: string): Promise<HyperTrack> {
    console.log(`Hypertrack Ionic plugin version ${hypertrackIonicPluginVersion}`);
    return new Promise((resolve, reject) => {
      new HyperTrackPlugin()
        .initialize(publishableKey)
        .then((cordovaInstance: HyperTrackCordova) => {
          resolve(new HyperTrack(cordovaInstance));
        })
        .catch((err: Error) => reject(err));
    });
  }

  /**
   * Get the list of blockers that needs to be resolved for reliable tracking.
   * @see {Blocker}
   */
  static getBlockers(): Promise<Set<Blocker>> {
    return new HyperTrackPlugin().getBlockers();
  }

  /** Resolves device ID that could be used to identify the device. */
  getDeviceId(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.cordovaInstanceHandle.getDeviceId(
        (deviceId) => resolve(deviceId),
        (err) => reject(err)
      );
    });
  }

  /** Resolves to true if tracking service is running and false otherwise */
  isRunning(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.cordovaInstanceHandle.isRunning(
        (isRunning) => resolve(isRunning),
        (err) => reject(err)
      );
    });
  }

  /**
   * Sets device name that could be used to identify the device in HyperTrack dashboard
   * @param name
   */
  setDeviceName(name: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.cordovaInstanceHandle.setDeviceName(
        name,
        () => resolve(),
        (err) => reject(err)
      );
    });
  }

  /**
   * Use this to set additional properties, like segments, teams etc.
   * @param metadata key-value pais of properties.
   */
  setDeviceMetadata(metadata: Object): Promise<void> {
    return new Promise((resolve, reject) => {
      this.cordovaInstanceHandle.setDeviceMetadata(
        metadata,
        () => resolve(),
        (err) => reject(err)
      );
    });
  }

  /**
   * Updates title and text in persistent notification, that appears when tracking is active.
   * @param title
   * @param message
   */
  setTrackingNotificationProperties(title: string, message: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.cordovaInstanceHandle.setTrackingNotificationProperties(
        title,
        message,
        () => resolve(),
        (err) => reject(err)
      );
    });
  }

  /**
   * Adds special marker-like object to device timeline.
   * @param geotagData
   * @param expectedLocation
   */
  addGeotag(geotagData: Object, expectedLocation?: Coordinates): Promise<void> {
    return new Promise((resolve, reject) => {
      this.cordovaInstanceHandle.addGeoTag(
        geotagData,
        expectedLocation,
        () => resolve(),
        (err) => reject(err)
      );
    });
  }

  /** Pops up permission request dialog, if permissions weren't granted before or does nothing otherwise. */
  requestPermissionsIfNecessary(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.cordovaInstanceHandle.requestPermissionsIfNecessary(
        () => resolve(),
        (err) => reject(err)
      );
    });
  }

  /** Allows injecting false locations into the SDK, which ignores them by default. */
  allowMockLocations(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.cordovaInstanceHandle.allowMockLocations(
        () => resolve(),
        (err) => reject(err)
      );
    });
  }

  /**
   * Synchronizes tracking state with platform model. This method is used to
   * harden platform2device communication channel.
   */
  syncDeviceSettings(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.cordovaInstanceHandle.syncDeviceSettings(
        () => resolve(),
        (err) => reject(err)
      );
    });
  }

  /** Start tracking. */
  start(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.cordovaInstanceHandle.start(
        () => resolve(),
        (err) => reject(err)
      );
    });
  }

  /** Stop tracking. */
  stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.cordovaInstanceHandle.stop(
        () => resolve(),
        (err) => reject(err)
      );
    });
  }

  /**
   * Resolves latest device location that was sent by the SDK.
   * Only available for Android platform.
   */
  getLatestLocation(): Promise<LocationResult> {
    return new Promise((resolve, reject) => {
      this.cordovaInstanceHandle.getLatestLocation(
        (locationResult) => resolve(this.handleLocationResult(locationResult)),
        (err) => reject(err)
      );
    });
  }

  /**
   * Resolves latest device location from system location provider.
   * Only available for Android platform.
   */
  getCurrentLocation(): Promise<LocationResult> {
    return new Promise((resolve, reject) => {
      this.cordovaInstanceHandle.getCurrentLocation(
        (locationResult) => resolve(this.handleLocationResult(locationResult)),
        (err) => reject(err)
      );
    });
  }

  private handleLocationResult(locationResult: CordovaLatestLocationResult): LocationResult {
    switch (locationResult.type) {
      case 'location': {
        return {
          type: LocationResultType.LOCATION,
          value: locationResult.location,
        };
      }
      case 'outage': {
        const outage = Outage[locationResult.outage.name];
        return {
          type: LocationResultType.OUTAGE,
          value: outage,
        };
      }
    }
  }

  private constructor(private cordovaInstanceHandle: HyperTrackCordova) {}
}
