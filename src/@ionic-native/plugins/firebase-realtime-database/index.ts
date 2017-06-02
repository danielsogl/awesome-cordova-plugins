import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @beta
 * @name Firebase Realtime Database
 * @description
 * Cordova plugin for Google Firebase Realtime Database Based on the the Firebase Notification / FCM plugin
 *
 * Download your Firebase configuration files, GoogleService-Info.plist for iOS and google-services.json for Android, and place them in the root folder of your Cordova project.
 *
 * @usage
 * ```typescript
 * import { FirebaseRealtimeDatabase } from '@ionic-native/firebase-realtime-database';
 *
 *
 * constructor(private firebaseRealtimeDatabase: FirebaseRealtimeDatabase) { }
 *
 * ...
 *
 *
 * this.firebaseRealtimeDatabase.signInWithEmailAndPassword('email', 'password')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'FirebaseRealtimeDatabase',
  plugin: 'cordova-plugin-firebase-realtime-database',
  pluginRef: 'FirebaseDatabasePlugin',
  repo: 'https://github.com/hbmartin/cordova-plugin-firebase-realtime-database',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class FirebaseRealtimeDatabase extends IonicNativePlugin {

  /**
   * Get a reference to a child path
   * @param path {string} The path
   */
  @Cordova({ sync: true })
  ref(path: string): void { return; }

  /**
   * At a particular reference, update the given keys
   * @param path {string}
   * @param updates {string}
   * @return {Promise<any>} Returns a promise
   */
  @Cordova({ otherPromise: true })
  updateChildren(path: string, updates: string): Promise<any> { return; }

  /**
   * At a particular reference, set the given value
   * @param path {string}
   * @param updates {string}
   * @return {Promise<any>} Returns a promise
   */
  @Cordova({ otherPromise: true })
  setValue(path: string, updates: string): Promise<any> { return; }

  /**
   * At a particular reference, get the value
   * @param key {string}
   * @param namespace {string}
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  getValue(key: string, namespace: string): Promise<any> { return; }

  /**
   * Get some infos
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  getInfo(): Promise<any> { return; }

  /**
   * Choose whether data should be persisted on disk, i.e. between app relaunches
   * @param settings {any} Some param to configure something
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  setConfigSettings(settings: any): Promise<any> { return; }

  /**
   * Choose whether data should be persisted on disk, i.e. between app relaunches
   * @param persistent {string} Some param to configure something
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  setDatabasePersistent(persistent: string): Promise<any> { return; }

  /**
   * Choose whether data should be persisted on disk, i.e. between app relaunches
   * @param persistent {string} Some param to configure something
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  setPersistenceEnabled(persistent: string): Promise<any> { return; }

  /**
   * Choose whether data should be persisted on disk, i.e. between app relaunches
   * @param email {string} Some param to configure something
   * @param password {string} Another param to configure something
   * @return {Promise<any>} Returns a promise
   */
  @Cordova({ otherPromise: true })
  signInWithEmailAndPassword(email: string, password: string): Promise<any> { return; }

}
