import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name App Center Shared
 * @capacitorincompatible true
 * @description
 * Exposes additional shared APIs for App Center.
 *
 * For more info, please see https://docs.microsoft.com/en-us/appcenter/sdk/other-apis/cordova
 * @usage
 * ```typescript
 * import { AppCenter } from '@awesome-cordova-plugins/app-center-shared/ngx';
 *
 * ...
 *
 * constructor(private appCenterShared: AppCenter) { }
 *
 * async getInstallId() {
 *   const id = await this.appCenter.getInstallId();
 * }
 *
 * async setUserId() {
 *   try{
 *     await this.appCenter.setUserId('i-am-john');
 *   } catch (e){
 *     console.log(e);
 *   }
 * }
 * ```
 */
@Plugin({
  pluginName: 'AppCenter',
  plugin: 'cordova-plugin-appcenter-shared',
  pluginRef: 'AppCenter',
  repo: 'https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-shared',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class AppCenter extends AwesomeCordovaNativePlugin {
  /**
   * Returns AppCenter UUID.
   * For more info, please see: https://docs.microsoft.com/en-us/appcenter/sdk/other-apis/cordova#identify-installations
   *
   * @returns {Promise<string>} Install ID
   */
  @Cordova()
  getInstallId(): Promise<string> {
    return;
  }

  /**
   * Set a user ID that's used to augment crash reports.
   * For more info, please see: https://docs.microsoft.com/en-us/appcenter/sdk/other-apis/cordova#identify-users
   *
   * @param {string} userId Ex. "your-user-id"
   * @returns {Promise<void>}
   */
  @Cordova()
  setUserId(userId: string): Promise<void> {
    return;
  }
}
