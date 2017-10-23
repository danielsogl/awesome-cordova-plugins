import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaInstance, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

/**
 * Information about the currently running app
 */
export interface AppInfo {
  platform: string;
  platformVersion: string;
  version: string;
  bundleName: string;
  bundleVersion: string;
}

/**
 * Information about the current live update
 */
export interface DeployInfo {
  deploy_uuid: string;
  channel: string;
  binary_version: string;
}

/**
 * Object for manually configuring deploy
 */
export interface DeployConfig {
  appId?: string;
  host?: string;
  channel?: string;
}

/**
 * @hidden
 */
export class ProDeploy {

  constructor(private _objectInstance: any) { }

  /**
   * Re-initialize Deploy plugin with a new App ID and host.  Not used in most cases.
   * @param config A valid Deploy config object
   */
  @CordovaInstance()
  init(config: DeployConfig): Promise<any> { return; }

  /**
   * Check a channel for an available update
   * @return {Promise<string>} Resolves with 'true' or 'false', or rejects with an error.
   */
  @CordovaInstance({
    observable: true
  })
  check(): Promise<string> { return; }

  /**
   * Download an available version
   * @return {Observable<any>} Updates with percent completion, or errors with a message.
   */
  @CordovaInstance({
    observable: true
  })
  download(): Observable<any> { return; }

  /**
   * Unzip the latest downloaded version
   * @return {Observable<any>} Updates with percent completion, or errors with a message.
   */
  @CordovaInstance()
  extract(): Observable<any> { return; }

  /**
   * Reload app with the deployed version
   */
  @CordovaInstance()
  redirect(): Promise<any> { return; }

  /**
   * Get info about the version running on the device
   * @return {Promise<DeployInfo>} Information about the current version running on the app.
   */
  @CordovaInstance()
  info(): Promise<DeployInfo> { return; }

  /**
   * List versions stored on the device
   */
  @CordovaInstance()
  getVersions(): Promise<any> { return; }

  /**
   * Delete a version stored on the device by UUID
   * @param version A version UUID
   */
  @CordovaInstance()
  deleteVersion(version: string): Promise<any> { return; }
}

/**
 * @name Pro
 * @description
 * This plugin enables Ionic Pro services like live updates and error monitoring
 *
 * @usage
 * ```typescript
 * import { Pro, AppInfo, DeployInfo } from '@ionic-native/pro';
 *
 *
 * constructor(private pro: Pro) { }
 * 
 * // Get app info
 * this.pro.getAppInfo().then((res: AppInfo) => {
 *   console.log(res)
 * })
 * 
 * // Get live update info
 * this.pro.deploy.info().then((res: DeployInfo) => {
 *   console.log(res)
 * })
 * ``` 
 */
@Plugin({
  pluginName: 'Pro',
  plugin: 'cordova-plugin-ionic',
  pluginRef: 'IonicCordova',
  repo: 'https://github.com/ionic-team/cordova-plugin-ionic',
  platforms: ['Android', 'iOS'],
  install: 'ionic cordova plugin add cordova-plugin-ionic --save --variable APP_ID="XXXXXXXX" --variable CHANNEL_NAME="Channel"'
})
@Injectable()
export class Pro extends IonicNativePlugin {
  /**
   * Ionic Pro Deploy .js API.
   */
  deploy: ProDeploy = new ProDeploy(Pro.getPlugin().deploy);

  /**
   * Not yet implemented
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  enableCrashLogging(): Promise<any> { return; }

  /**
   * Not yet implemented
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  checkForPendingCrash(): Promise<any> { return; }

  /**
   * Not yet implemented
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  loadPendingCrash(): Promise<any> { return; }

  /**
   * Not yet implemented
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  forceCrash(): Promise<any> { return; }

  /**
   * Get information about the currently running app
   * @return {Promise<any>} Returns a promise that resolves with current app info
   */
  @Cordova()
  getAppInfo(): Promise<AppInfo> { return; }
}

