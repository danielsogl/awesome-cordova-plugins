import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @beta
 * @name Firebase Config
 * @description
 * Cordova plugin for Firebase Config
 * @usage
 * ```typescript
 * import { FirebaseConfig } from '@awesome-cordova-plugins/firebase-config/ngx';
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
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class FirebaseConfig extends AwesomeCordovaNativePlugin {
  /**
   * Starts fetching configs, adhering to the specified minimum fetch interval.
   *
   * @param {number} expirationDuration
   * @returns {Promise<null>}
   */
  @Cordova({ sync: true })
  fetch(expirationDuration?: number): Promise<null> {
    return;
  }

  /**
   * Asynchronously activates the most recently fetched configs, so that the fetched key value pairs take effect.
   *
   * @returns {Promise<null>}
   */
  @Cordova({ sync: true })
  activate(): Promise<null> {
    return;
  }

  /**
   * Asynchronously fetches and then activates the fetched configs.
   *
   * @returns {Promise<null>}
   */
  @Cordova({ sync: true })
  fetchAndActivate(): Promise<null> {
    return;
  }

  /**
   * Fetches a boolean configuration value from RemoteConfig
   *
   * @param {string} key
   * @returns {Promise<boolean>}
   */
  @Cordova({ sync: true })
  getBoolean(key: string): Promise<boolean> {
    return;
  }

  /**
   * Fetches a string configuration value from RemoteConfig
   *
   * @param {string} key
   * @returns {Promise<boolean>}
   */
  @Cordova({ sync: true })
  getString(key: string): Promise<string> {
    return;
  }

  /**
   * Fetches a numeric configuration value from RemoteConfig
   *
   * @param {string} key
   * @returns {Promise<boolean>}
   */
  @Cordova({ sync: true })
  getNumber(key: string): Promise<number> {
    return;
  }

  /**
   * Fetches an array of bytes configuration value from RemoteConfig
   *
   * @param {string} key
   * @returns {Promise<boolean>}
   */
  @Cordova({ sync: true })
  getBytes(key: string): Promise<any[]> {
    return;
  }
}
