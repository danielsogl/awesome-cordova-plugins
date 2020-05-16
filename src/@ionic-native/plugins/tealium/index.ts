import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';

export interface TealConfig {
  /**
   * Your Tealium account name
   */
  account: string;
  /**
   * Your Tealium profile name
   */
  profile: string;
  /**
   * Your Tealium environment name (dev, qa, prod)
   */
  environment: string;
  /**
   * Arbitrary instance name string. Must be consistent for all calls to Tealium API.
   */
  instance: string;
  /**
   * Enables ("true") or disables ("false") lifecycle reporting. Default true if omitted.
   */
  isLifecycleEnabled?: string;
  /**
   * Not usually required. Sets a custom URL override for dispatches to UDH.
   */
  collectDispatchURL?: string;
  /**
   * Your Tealium UDH profile. Only active if you do not have collectDispatchURL set.
   */
  collectDispatchProfile?: string;
  /**
   * Enables ("true") or disables ("false") Crash Reporter module for Android. Default false if omitted.
   */
  isCrashReporterEnabled?: string;
}

/**
 * @paid
 * @name Tealium
 * @description
 * This plugin provides a TypeScript wrapper around the [Tealium](https://www.tealium.com) Cordova plugin for Ionic Native.
 *
 * For full documentation, see [https://community.tealiumiq.com/t5/Mobile-Libraries/Tealium-for-Cordova/ta-p/17618](https://community.tealiumiq.com/t5/Mobile-Libraries/Tealium-for-Cordova/ta-p/17618)
 * @usage
 * ```
 * import { Tealium, TealConfig } from '@ionic-native/tealium/ngx';
 *
 *
 * constructor(private tealium: Tealium) { }
 *
 * ...
 *
 * let tealConfig: TealConfig = {
 *  account: "<your-account>",
 *  profile: "<your-profile>",
 *  environment: "<your-environment>", // usually "dev", "qa" or "prod"
 *  isLifecycleEnabled: "true", // pass "false" to disable lifecycle tracking
 *  isCrashReporterEnabled: "false", // pass "true" to enable crash reporter (Android only)
 *  instance: "<your-instance-name" // an arbitrary instance name. use the same instance name for all subsequent API calls
 * }
 *
 * this.tealium.init(tealConfig).then(()=>{
 *   this.tealium.trackView({"screen_name": "homescreen"});
 * });
 *
 * ```
 * @interfaces
 * TealConfig
 */

@Plugin({
  pluginName: 'Tealium',
  plugin: 'tealium-cordova-plugin', // npm package name, example: cordova-plugin-camera
  pluginRef: 'window.tealium', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/Tealium/cordova-plugin', // the github repository URL for the plugin
  platforms: ['Android', 'iOS'], // Array of platforms supported, example: ['Android', 'iOS']
  install: '', // OPTIONAL install command, in case the plugin requires variables
})
@Injectable()
export class Tealium extends IonicNativePlugin {
  /**
   * This function initializes the Tealium Cordova plugin.
   * This should usually be done inside the "deviceReady" handler.
   * @param config {TealConfig}
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  init(config: TealConfig): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * This function tracks a view event in the Tealium Cordova plugin
   * @param dataObject {any} The JSON data object containing your key-value pairs
   * @param instanceName {string} Your arbitrary Tealium instance name provided at init time
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  trackView(dataObject: any, instanceName: string): Promise<any> {
    return;
  }

  /**
   * This function tracks a link event in the Tealium Cordova plugin
   * @param dataObject {any} The JSON data object containing your key-value pairs
   * @param instanceName {string} Your arbitrary Tealium instance name provided at init time
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  trackEvent(dataObject: any, instanceName: string): Promise<any> {
    return;
  }

  /**
   * This function tracks a custom event in the Tealium Cordova plugin
   * @param eventType {string} The event type, link or view
   * @param dataObject {any} The JSON data object containing your key-value pairs
   * @param instanceName {string} Your arbitrary Tealium instance name provided at init time
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  track(eventType: string, dataObject: any, instanceName: string): Promise<any> {
    return;
  }

  /**
   * This function adds data to the Tealium persistent data store
   * @param keyName {string} The key name that this data will be stored under for later retrieval
   * @param value {any} The value to be stored as persistent data
   * @param instanceName {string} Your arbitrary Tealium instance name provided at init time
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  addPersistent(keyName: string, value: string | string[] | any, instanceName: string): Promise<any> {
    return;
  }

  /**
   * This function adds data to the Tealium volatile data store
   * @param keyName {string} The key name that this data will be stored under for later retrieval
   * @param value {any} The value to be stored as volatile data
   * @param instanceName {string} Your arbitrary Tealium instance name provided at init time
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  addVolatile(keyName: string, value: string | string[], instanceName: string): Promise<any> {
    return;
  }

  /**
   * This function removes data from the Tealium volatile data store
   * @param keyName {string} The key name that this data will removed from the Tealium data store
   * @param instanceName {string} Your arbitrary Tealium instance name provided at init time
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  removeVolatile(keyName: string, instanceName: string): Promise<any> {
    return;
  }

  /**
   * This function removes data from the Tealium persistent data store
   * @param keyName {string} The key name that this data will removed from the Tealium data store
   * @param instanceName {string} Your arbitrary Tealium instance name provided at init time
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  removePersistent(keyName: string, instanceName: string): Promise<any> {
    return;
  }

  /**
   * This function retrieves a value from the Tealium Persistent data store
   * @param keyName {string} The key name that this data will retrieved from the Tealium data store
   * @param instanceName {string} Your arbitrary Tealium instance name provided at init time
   * @param callback {any} A callback function that will be called when the data has been retrieved
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  getPersistent(keyName: string, instanceName: string, callback: any): Promise<any> {
    return;
  }
  /**
   * This function retrieves a value from the Tealium Volatile data store
   * @param keyName {string} The key name that this data will retrieved from the Tealium data store
   * @param instanceName {string} Your arbitrary Tealium instance name provided at init time
   * @param callback {any} A callback function that will be called when the data has been retrieved
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  getVolatile(keyName: string, instanceName: string, callback: any): Promise<any> {
    return;
  }

  /**
   * This function adds a remote command for later execution
   * @param commandName {string} The command name for this Remote Command
   * @param instanceName {string} Your arbitrary Tealium instance name provided at init time
   * @param callback {any} A callback function that will be called when the data has been retrieved
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  addRemoteCommand(commandName: string, instanceName: string, callback: any): Promise<any> {
    return;
  }

  /**
   * This function retrieves the Tealium Visitor ID
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  getVisitorId(): Promise<any> {
    return;
  }
}
