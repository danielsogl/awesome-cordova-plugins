import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

/**
 * @name Ge Tui Sdk Plugin
 * @description
 * This plugin does something
 * @usage
 * ```typescript
 * import { GeTuiSdkPlugin } from '@awesome-cordova-plugins/ge-tui-sdk-plugin';
 *
 *
 * constructor(private geTuiSdkPlugin: GeTuiSdkPlugin) { }
 *
 *  this.geTuiSdkPlugin.callback_init((res) => { console.log(res)});
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *  this.geTuiSdkPlugin.initialize();
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *  this.geTuiSdkPlugin.getClientId();
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *  this.geTuiSdkPlugin.getVersion();
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'GeTuiSdkPlugin',
  plugin: 'cordova-plugin-getuisdk',
  pluginRef: 'GeTuiSdkPlugin',
  repo: 'git@github.com:GetuiLaboratory/cordova-plugin-getuisdk.git',
  install:
    'cordova plugin add cordova-plugin-getuisdk --variable PUSH_APPID=your appid --variable PUSH_APPKEY=your appkey --variable PUSH_APPSECRET=your appsecret',
  installVariables: ['PUSH_APPID', 'PUSH_APPKEY', 'PUSH_APPSECRET'],
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class GeTuiSdkPlugin extends AwesomeCordovaNativePlugin {
  @Cordova()
  callback_init(callback: Function): Promise<any> {
    return;
  }

  @Cordova({
    sync: true,
  })
  initialize() {
    return;
  }

  @Cordova()
  getClientId(): Promise<string> {
    return;
  }

  @Cordova()
  getVersion(): Promise<string> {
    return;
  }
}
