import { Injectable } from '@angular/core';
import {
  Plugin,
  Cordova,
  CordovaProperty,
  CordovaInstance,
  InstanceProperty,
  IonicNativePlugin,
} from '@ionic-native/core';
import { Observable } from 'rxjs';

enum UpdateType {
  FLEXIBLE,
  IMMEDIATE,
}

enum InstallStatus {
  CANCELED,
  DOWNLOADED,
  DOWNLOADING,
  FAILED,
  INSTALLED,
  INSTALLING,
  PENDING,
  UNKNOWN,
}

enum UpdateAvailability {
  DEVELOPER_TRIGGERED_UPDATE_IN_PROGRESS,
  UNKNOWN,
  UPDATE_AVAILABLE,
  UPDATE_NOT_AVAILABLE,
}

class AppUpdateInfo {
  updateType: UpdateType;
  installStatus: InstallStatus;
  availableVersionCode: Number;
  bytesDownloaded: Number;
  totalBytesToDownload: Number;
  clientVersionStalenessDays: Number;
  packageName: String;
  updateAvailability: UpdateAvailability;
  installErrorCode: String;
}

/**
 * @name In App Update
 * @description
 * This pluging enabels In app update For cordova.
 */
@Plugin({
  pluginName: 'InAppUpdate',
  plugin: 'cordova-in-app-update', // npm package name, example: cordova-plugin-camera
  pluginRef: 'window.plugins.InAppUpdate', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/itsLucario/cordova-app-update-plugin', // the github repository URL for the plugin
  platforms: ['Android'], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class InAppUpdate extends IonicNativePlugin {
  /**
   * If you want the user to be prompted about new version information before initiating the update, you can use `check` to retrive the new app version information.
   * @return {Promise<AppUpdateInfo>} Returns a promise that resolves with new app version update details
   */
  @Cordova()
  check(): Promise<AppUpdateInfo> {
    return;
  }

  /**
   * Initiate Update Flow with "FLEXIBLE" | "IMMEDIATE" updateType
   * @return {Observable<AppUpdateInfo>} Returns a Observable can be subscribed to get update install state
   */
  @Cordova({ observable: true })
  update(config: { updateType: 'FLEXIBLE' | 'IMMEDIATE' }): Observable<AppUpdateInfo> {
    return;
  }

  /**
   * Flexible updates provide background download. Once flexible update completes the download in background, completion of upgrade can be initiated by calling `completeFlexibleUpdate`.
   * @return Returns empty response, fire and forget
   */
  @Cordova()
  completeFlexibleUpdate(): Promise<any> {
    return;
  }
}
