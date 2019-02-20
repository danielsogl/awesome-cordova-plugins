import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @beta
 * @name Firebase Config
 * @description
 * Cordova plugin for Firebase Config
 *
 * @usage
 * ```typescript
 * import { FirebaseConfig } from '@ionic-native/firebase-config/ngx';
 *
 *
 * constructor(private firebaseConfig: FirebaseConfig) { }
 *
 * ...
 *
 *
 * this.firebaseConfig.getBoolean('my_key')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'FirebaseConfig',
  plugin: 'cordova-plugin-firebase-config',
  pluginRef: 'cordova.plugins.firebase.config',
  repo: 'https://github.com/chemerisuk/cordova-plugin-firebase-config',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class FirebaseConfig extends IonicNativePlugin {
  /**
   * Fetches remote config values with appropriate TTL and then activates them.
   *
   * @param {number} ttlSeconds
   * @returns {Promise<null>}
   */
  @Cordova({ sync: true })
  update(ttlSeconds: number): Promise<null> {
    return;
  }

  /**
   * Fetches a boolean configuration value from RemoteConfig
   *
   * @param {string} key
   * @param {string} [namespace]
   * @returns {Promise<boolean>}
   */
  @Cordova({ sync: true })
  getBoolean(key: string, namespace?: string): Promise<boolean> {
    return;
  }

  /**
   * Fetches a string configuration value from RemoteConfig
   *
   * @param {string} key
   * @param {string} [namespace]
   * @returns {Promise<boolean>}
   */
  @Cordova({ sync: true })
  getString(key: string, namespace?: string): Promise<string> {
    return;
  }

  /**
   * Fetches a numeric configuration value from RemoteConfig
   *
   * @param {string} key
   * @param {string} [namespace]
   * @returns {Promise<boolean>}
   */
  @Cordova({ sync: true })
  getNumber(key: string, namespace?: string): Promise<number> {
    return;
  }

  /**
   * Fetches an array of bytes configuration value from RemoteConfig
   *
   * @param {string} key
   * @param {string} [namespace]
   * @returns {Promise<boolean>}
   */
  @Cordova({ sync: true })
  getBytes(key: string, namespace?: string): Promise<any[]> {
    return;
  }
}
