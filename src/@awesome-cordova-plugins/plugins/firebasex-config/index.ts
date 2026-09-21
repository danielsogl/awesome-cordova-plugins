import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

export interface RemoteConfigInfo {
  configSettings: any;
  fetchTimeMillis: number;
  lastFetchStatus: number;
}

/**
 * @name FirebasexConfig
 * @description
 * Cordova plugin for Firebase Remote Config - part of the modular cordova-plugin-firebasex family.
 * @usage
 * ```typescript
 * import { FirebasexConfig } from '@awesome-cordova-plugins/firebasex-config/ngx';
 *
 * constructor(private firebasexConfig: FirebasexConfig) { }
 *
 * ...
 *
 * this.firebasexConfig.fetchAndActivate().then((activated) => console.log(activated));
 * ```
 */
@Plugin({
  pluginName: 'FirebasexConfig',
  plugin: 'cordova-plugin-firebasex-config',
  pluginRef: 'FirebasexConfig',
  repo: 'https://github.com/dpa99c/cordova-plugin-firebasex-config',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class FirebasexConfig extends AwesomeCordovaNativePlugin {
  /**
   * Fetches Remote Config values from the server.
   *
   * @param {number} [cacheExpirationSeconds] - optional cache timeout in seconds; if omitted, the default cache expiration is used
   * @returns {Promise<any>}
   */
  @Cordova()
  fetch(cacheExpirationSeconds?: number): Promise<any> {
    return;
  }

  /**
   * Activates the most recently fetched Remote Config values.
   *
   * @returns {Promise<boolean>} true if previously fetched values were activated successfully
   */
  @Cordova()
  activateFetched(): Promise<boolean> {
    return;
  }

  /**
   * Fetches and activates Remote Config values in a single call.
   *
   * @returns {Promise<boolean>} true if fresh values were fetched and activated, false if cached values were used
   */
  @Cordova()
  fetchAndActivate(): Promise<boolean> {
    return;
  }

  /**
   * Resets all Remote Config values back to defaults.
   * Note: not currently available on iOS.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova({
    platforms: ['Android'],
  })
  resetRemoteConfig(): Promise<boolean> {
    return;
  }

  /**
   * Gets a single Remote Config value by key.
   *
   * @param {string} key - the parameter key
   * @returns {Promise<string>}
   */
  @Cordova()
  getValue(key: string): Promise<string> {
    return;
  }

  /**
   * Gets metadata about the Remote Config instance including fetch time and status.
   *
   * @returns {Promise<RemoteConfigInfo>}
   */
  @Cordova()
  getInfo(): Promise<RemoteConfigInfo> {
    return;
  }

  /**
   * Sets the fetch timeout and minimum fetch interval for Remote Config.
   *
   * @param {number} fetchTimeout - fetch timeout in seconds
   * @param {number} minimumFetchInterval - minimum interval between fetches in seconds
   * @returns {Promise<any>}
   */
  @Cordova()
  setConfigSettings(fetchTimeout: number, minimumFetchInterval: number): Promise<any> {
    return;
  }

  /**
   * Sets default values for Remote Config parameters.
   *
   * @param {Object} configDefaults - key-value pairs of default parameter values
   * @returns {Promise<any>}
   */
  @Cordova()
  setDefaults(configDefaults: Record<string, string | number | boolean>): Promise<any> {
    return;
  }

  /**
   * Gets all Remote Config parameter values as key-value pairs.
   *
   * @returns {Promise<Record<string, string>>}
   */
  @Cordova()
  getAll(): Promise<Record<string, string>> {
    return;
  }
}
