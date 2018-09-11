/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
/**
 * @name jAnalytics
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { JAnalytics } from '@ionic-native/JAnalytics';
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
  plugin: 'cordova-plugin-janalytics', // npm package name, example: cordova-plugin-janalytics
  pluginRef: 'JAnalytics', // the variable reference to call the plugin, example: navigator.janalytics
  repo: 'https://github.com/jpush/cordova-plugin-janalytics', // the github repository URL for the plugin
  install: 'ionic cordova plugin add cordova-plugin-janalytics --variable APP_KEY=YOUR_APP_KEY', // OPTIONAL install command, in case the plugin requires variables
  installVariables: ['APP_KEY'], // OPTIONAL the plugin requires variables
  platforms: ['Android', 'iOS'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class JAnalytics extends IonicNativePlugin {

  /**
   * This function does something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  init(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  initCrashHandler(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  stopCrashHandler(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  onPageStart(params: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  onPageEnd(params: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  addCountEvent(params: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  addCalculateEvent(params: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  addLoginEvent(params: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  addRegisterEvent(params: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  addBrowseEvent(params: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  addPurchaseEvent(params: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
}
