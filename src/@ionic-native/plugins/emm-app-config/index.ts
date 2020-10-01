import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

/**
 * @name Emm App Config
 * @description
 * This plugin provides information on EMM application configuration
 *
 * Requires the Cordova plugin: `cordova-plugin-emm-app-config`. For more info, please see the [Cordova EMM App Config Plugin Docs](https://github.com/oracle/cordova-plugin-emm-app-config).
 *
 *
 * @usage
 * ```typescript
 * import { EmmAppConfig } from '@ionic-native/emm-app-config/ngx';
 *
 *
 * constructor(private readonly emmAppConfig: EmmAppConfig) { }
 *
 * ...
 *
 * // Get all the values of the emm app configuration
 * const values = this.emmAppConfig.getValue();
 *
 * // Get specific value of the emm app configuration
 * const value = this.emmAppConfig.getValue('serverUrl');
 *
 * // Get an event every time the emm app config changes
 * this.emmAppConfig.registerChangedListener()
 *   .subscribe(() => console.log('App config changes'));
 *
 * ```
 */
@Plugin({
  platforms: ['Android', 'iOS'],
  plugin: 'cordova-plugin-emm-app-config',
  pluginName: 'EmmAppConfig',
  pluginRef: 'cordova.plugins.EmmAppConfig',
  repo: 'https://github.com/oracle/cordova-plugin-emm-app-config',
})
@Injectable()
export class EmmAppConfig extends IonicNativePlugin {
  /**
   * Get value from the Emm application configuration.
   * @param configKey {string}  Key of the value to get, or null to get all the values as an object.
   * @return {any} Returns configuration on an object
   */
  @Cordova({ sync: true }) getValue(configKey?: string): any {
    return;
  }

  /**
   * Register a listener that will be invoked when the application configuration is changed.
   * @return {void}
   */
  @Cordova({ observable: true }) registerChangedListener(): Observable<void> {
    return;
  }
}
