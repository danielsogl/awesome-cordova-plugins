import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @name jAnalytics
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { JAnalytics } from '@ionic-native/JAnalytics/ngx';
 *
 *
 * constructor(private jAnalytics: JAnalytics) { }
 *
 * ...
 *
 *
 * this.jAnalytics.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'JAnalytics',
  plugin: 'cordova-plugin-janalytics',
  pluginRef: 'JAnalytics',
  repo: 'https://github.com/jpush/cordova-plugin-janalytics',
  install: 'ionic cordova plugin add cordova-plugin-janalytics --variable APP_KEY=YOUR_APP_KEY',
  installVariables: ['APP_KEY'],
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class JAnalytics extends IonicNativePlugin {
  /**
   * This function does something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  init(): Promise<any> {
    return;
  }

  @Cordova()
  initCrashHandler(): Promise<any> {
    return;
  }

  @Cordova()
  stopCrashHandler(): Promise<any> {
    return;
  }

  @Cordova()
  onPageStart(params: any): Promise<any> {
    return;
  }

  @Cordova()
  onPageEnd(params: any): Promise<any> {
    return;
  }

  @Cordova()
  addCountEvent(params: any): Promise<any> {
    return;
  }

  @Cordova()
  addCalculateEvent(params: any): Promise<any> {
    return;
  }

  @Cordova()
  addLoginEvent(params: any): Promise<any> {
    return;
  }

  @Cordova()
  addRegisterEvent(params: any): Promise<any> {
    return;
  }

  @Cordova()
  addBrowseEvent(params: any): Promise<any> {
    return;
  }

  @Cordova()
  addPurchaseEvent(params: any): Promise<any> {
    return;
  }
}
