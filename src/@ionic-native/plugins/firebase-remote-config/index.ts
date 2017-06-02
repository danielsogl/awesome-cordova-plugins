import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @beta
 * @name Firebase Remote Config
 * @description
 * Cordova plugin for Firebase Remote Config
 *
 * @usage
 * ```typescript
 * import { FirebaseRemoteConfig } from '@ionic-native/firebase-remote-config';
 *
 *
 * constructor(private firebaseRemoteConfig: FirebaseRemoteConfig) { }
 *
 * ...
 *
 *
 * this.firebaseRemoteConfig.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'FirebaseRemoteConfig',
  plugin: 'https://github.com/chemerisuk/cordova-plugin-firebase-remoteconfig.git',
  pluginRef: 'cordova.plugins.firebase.remoteconfig',
  repo: 'https://github.com/chemerisuk/cordova-plugin-firebase-remoteconfig',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class FirebaseRemoteConfig extends IonicNativePlugin {

  /**
   * This function does something
   * @param ttlSeconds {string} Some param to configure something
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  update(ttlSeconds: string): Promise<any> { return; }

  /**
   * This function does something
   * @param key {string} Some param to configure something
   * @param namespace {string} Another param to configure something
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  get(key: string, namespace: string): Promise<any> { return; }

  /**
   * This function does something
   * @param key {string} Some param to configure something
   * @param namespace {string} Another param to configure something
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  getBoolean(key: string, namespace: string): Promise<any> { return; }

  /**
   * This function does something
   * @param key {string} Some param to configure something
   * @param namespace {string} Another param to configure something
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  getString(key: string, namespace: string): Promise<any> { return; }

  /**
   * This function does something
   * @param key {string} Some param to configure something
   * @param namespace {string} Another param to configure something
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  getNumber(key: string, namespace: string): Promise<any> { return; }

  /**
   * This function does something
   * @param key {string} Some param to configure something
   * @param namespace {string} Another param to configure something
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  getByteArray(key: string, namespace: string): Promise<any> { return; }

}
