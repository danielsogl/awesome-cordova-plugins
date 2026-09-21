import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

/**
 * @name FirebasexCore
 * @description
 * Cordova plugin providing the core Firebase Installations API and app lifecycle listeners -
 * a required dependency of every other plugin in the modular cordova-plugin-firebasex family.
 * @usage
 * ```typescript
 * import { FirebasexCore } from '@awesome-cordova-plugins/firebasex-core/ngx';
 *
 * constructor(private firebasexCore: FirebasexCore) { }
 *
 * ...
 *
 * this.firebasexCore.getInstallationId().then((id) => console.log(id));
 * ```
 */
@Plugin({
  pluginName: 'FirebasexCore',
  plugin: 'cordova-plugin-firebasex-core',
  pluginRef: 'FirebasexCore',
  repo: 'https://github.com/dpa99c/cordova-plugin-firebasex-core',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class FirebasexCore extends AwesomeCordovaNativePlugin {
  /**
   * Returns the current Firebase Installation ID (FID).
   *
   * @returns {Promise<string>}
   */
  @Cordova()
  getInstallationId(): Promise<string> {
    return;
  }

  /**
   * Alias for getInstallationId().
   *
   * @returns {Promise<string>}
   */
  @Cordova()
  getId(): Promise<string> {
    return;
  }

  /**
   * Returns a valid Firebase Installation auth token (always force-refreshed).
   *
   * @returns {Promise<string>}
   */
  @Cordova()
  getInstallationToken(): Promise<string> {
    return;
  }

  /**
   * Deletes the current Firebase Installation ID and all associated data. Firebase will generate
   * a new FID on next access.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  deleteInstallationId(): Promise<any> {
    return;
  }

  /**
   * Registers a listener that is called whenever the Firebase Installation ID changes.
   *
   * @param {Function} fn - callback function to invoke with the new installation ID string
   */
  @Cordova()
  registerInstallationIdChangeListener(fn: any): Promise<any> {
    return;
  }

  /**
   * Registers a listener that is called when the application transitions to the foreground
   * (iOS applicationDidBecomeActive / Android onResume).
   *
   * @param {Function} fn - callback function to invoke when the app becomes active
   */
  @Cordova()
  registerApplicationDidBecomeActiveListener(fn: any): Promise<any> {
    return;
  }

  /**
   * Registers a listener that is called when the application transitions to the background
   * (iOS applicationDidEnterBackground / Android onPause).
   *
   * @param {Function} fn - callback function to invoke when the app enters the background
   */
  @Cordova()
  registerApplicationDidEnterBackgroundListener(fn: any): Promise<any> {
    return;
  }
}
