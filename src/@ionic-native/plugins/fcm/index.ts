import { Plugin, IonicNativePlugin, Cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';

/**
 * @name FCM
 * @description
 * Provides basic functionality for Firebase Cloud Messaging
 *
 * @usage
 * ```
 * import { FCM } from 'ionic-native';
 *
 *
 * constructor(private fcm: FCM) { 
 *   fcm.subscribeToTopic('marketing1')
 *   fcm.onNotification().subscribe(data=>{
 *     if(data.wasPressed){
 *       console.log("Received in background")
 *     } else {
 *       console.log("Received in foreground")
 *     }
 *   })
 * }
 *
 *
 * ```
 */
@Plugin({
  pluginName: 'FCM',
  plugin: 'cordova-plugin-fcm',
  pluginRef: 'FCMPlugin',
  repo: 'https://github.com/fechanique/cordova-plugin-fcm',
  platforms: ['iOS', 'Android']
})
@Injectable()
export class FCM extends IonicNativePlugin {

  /**
   * Get's device's current registration id
   * @returns {Promise<string>}
   */
  @Cordova()
  getToken() { return; }

  /**
   * Event firing on the token refresh
   * @returns {Observable<string>}
   */
  @Cordova()
  onTokenRefresh(callback: (token: string) => void) { return; }

  /**
   * Subscribes you to a topic
   * @returns {Promise<any>}
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  subscribeToTopic(topic: string) { return; }

  /**
   * Unubscribes you to a topic
   * @returns {Promise<any>}
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  unsubscribeToTopic(topic: string) { return; }

  /**
   * Launches on incoming notification
   */
  @Cordova({
    observable: true,
    callbackOrder: 'reverse'
  })
  onNotification(callback?: (data: any) => void) { return; }

}