import { Plugin, IonicNativePlugin, Cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export interface NotificationData {

  /**
   * Determines whether the notification was pressed or not
   */

  wasTapped: boolean;

  /**
   * Notification data hash item
   */

  [name: string]: any;

}

/**
 * @name FCM
 * @description
 * Provides basic functionality for Firebase Cloud Messaging
 *
 * @usage
 * ```
 * import { FCM } from 'ionic-native';
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
 * ```
 * @interfaces
 * NotificationData
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
  getToken(): Promise<string> { return; }

  /**
   * Event firing on the token refresh
   * @returns {Observable<string>}
   */
  @Cordova({
    observable: true,
    successIndex: 0
  })
  onTokenRefresh(): Observable<string> { return; }

  /**
   * Subscribes you to a topic
   * @param {string} topic Topic to be subscribed to
   * @returns {Promise<any>}
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  subscribeToTopic(topic: string): Promise<any> { return; }

  /**
   * Unubscribes you to a topic
   * @param {string} topic Topic to be unsubscribed from
   * @returns {Promise<any>}
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  unsubscribeToTopic(topic: string): Promise<any> { return; }

  /**
   * Launches on incoming notification
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true,
    successIndex: 0,
    errorIndex: 2
  })
  onNotification(): Observable<NotificationData> { return; }

}
