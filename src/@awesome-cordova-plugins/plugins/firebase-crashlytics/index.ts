import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name Firebase Crashlytics
 * @description
 * A Google Firebase Crashlytics plugin to enable capture of crash reports.
 * @usage
 * ```typescript
 * import { FirebaseCrashlytics } from '@awesome-cordova-plugins/firebase-crashlytics/ngx';
 *
 *
 * constructor(private firebaseCrashlytics: FirebaseCrashlytics) { }
 *
 * ...
 *
 *
 * const crashlytics = this.firebaseCrashlytics.initialise();
 * crashlytics.logException('my caught exception');
 *
 * ```
 */
@Plugin({
  pluginName: 'FirebaseCrashlytics',
  plugin: 'cordova-plugin-firebase-crashlytics',
  pluginRef: 'FirebaseCrashlytics',
  repo: 'https://github.com/ReallySmallSoftware/cordova-plugin-firebase-crashlytics',
  install:
    'ionic cordova plugin add cordova-plugin-firebase-crashlytics --variable ANDROID_FIREBASE_CORE_VERSION=16.0.0',
  installVariables: ['ANDROID_FIREBASE_CORE_VERSION'],
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class FirebaseCrashlytics extends AwesomeCordovaNativePlugin {
  /**
   * Simply add the plugin to get the default Crashlytics functionality. Note that crashes and logged exceptions will only be reported when the application restarts. In order to log caught exceptions the following can be used:
   *
   * @returns {void}
   */
  @Cordova({
    sync: true,
  })
  initialise(): any {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Generate a forced crash. Visible in console after restart of application.
   *
   * @returns {void}
   */
  @Cordova({
    sync: true,
  })
  crash(): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Log a priority message. Will only be logged in the event of a crash.
   *
   * @param {number} priority
   * @param {string} tag
   * @param {string} message
   * @returns {void}
   */
  @Cordova({
    sync: true,
  })
  logPriority(priority: number, tag: string, message: string): void {
    return;
  }

  /**
   * Log a message. Will only be logged in the event of a crash.
   *
   * @param {string} message
   * @returns {void}
   */
  @Cordova({
    sync: true,
  })
  log(message: string): void {
    return;
  }

  /**
   * Log when a handled exception has happened. Visible in console after restart of application.
   *
   * @param {string} message
   * @returns {void}
   */
  @Cordova({
    sync: true,
  })
  logException(message: string): void {
    return;
  }

  /**
   * Set extra key/value string value. Will only be logged in the event of a crash.
   *
   * @param {string} key
   * @param {string} value
   * @returns {void}
   */
  @Cordova({
    sync: true,
  })
  setString(key: string, value: string): void {
    return;
  }

  /**
   * Set extra key/value bool value. Will only be logged in the event of a crash.
   *
   * @param {string} key
   * @param {boolean} value
   * @returns {void}
   */
  @Cordova({
    sync: true,
  })
  setBool(key: string, value: boolean): void {
    return;
  }

  /**
   * Set extra key/value double value. Will only be logged in the event of a crash.
   *
   * @param {string} key
   * @param {number} value
   * @returns {void}
   */
  @Cordova({
    sync: true,
  })
  setDouble(key: string, value: number): void {
    return;
  }

  /**
   * Set extra key/value float value. Will only be logged in the event of a crash.
   *
   * @param {string} key
   * @param {number} value
   * @returns {void}
   */
  @Cordova({
    sync: true,
  })
  setFloat(key: string, value: number): void {
    return;
  }

  /**
   * Set extra key/value integer value. Will only be logged in the event of a crash.
   *
   * @param {string} key
   * @param {number} value
   * @returns {void}
   */
  @Cordova({
    sync: true,
  })
  setInt(key: string, value: number): void {
    return;
  }

  /**
   * Set the identifier for the user. Take care when using this method and ensure you privacy policy is updated accordingly.
   *
   * @param {string} identifier
   * @returns {void}
   */
  @Cordova({
    sync: true,
  })
  setUserIdentifier(identifier: string): void {
    return;
  }
}
