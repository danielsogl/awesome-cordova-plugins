import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

/**
 * @name System Alert Window Permission
 * @description
 * This plugin does something
 * @usage
 * ```typescript
 * import { SystemAlertWindowPermission } from '@awesome-cordova-plugins/system-alert-window-permission/ngx';
 *
 *
 * constructor(private systemAlertWindowPermission: SystemAlertWindowPermission) { }
 *
 * ...
 *
 *
 * this.systemAlertWindowPermission.hasPermission()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * this.systemAlertWindowPermission.requestPermission()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */

@Plugin({
  pluginName: 'SystemAlertWindowPermission',
  plugin: 'cordova-plugin-system-alert-window-permission',
  pluginRef: 'window.systemAlertWindowPermission',
  repo: 'https://github.com/MaximBelov/cordova-plugin-system-alert-window-permission.git',
  install: 'ionic cordova plugin add cordova-plugin-system-alert-window-permission',
  platforms: ['Android'],
})
@Injectable()
export class SystemAlertWindowPermission extends AwesomeCordovaNativePlugin {
  /**
   * Check permission
   *
   * @returns {Promise<any>} return 0 when dont have SYSTEM_ALERT_WINDOW permission, 1 when have SYSTEM_ALERT_WINDOW permission
   */
  @Cordova()
  hasPermission(): Promise<any> {
    return;
  }

  /**
   * Request permission
   *
   * @returns {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  requestPermission(): Promise<any> {
    return;
  }

  /**
   * Open notification Settings
   *
   * @returns {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  openNotificationSettings(): Promise<any> {
    return;
  }
}
