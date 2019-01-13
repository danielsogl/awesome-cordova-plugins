import { Injectable } from '@angular/core';
import {
  Cordova,
  CordovaInstance,
  CordovaProperty,
  InstanceProperty,
  IonicNativePlugin,
  Plugin
} from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

/**
 * @name ColoredBrowserTabs
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { ColoredBrowserTabs } from '@ionic-native/colored-browser-tabs';
 *
 *
 * constructor(private browserTabs: ColoredBrowserTabs) { }
 *
 * ...
 *
 *
 * this.browserTabs.openTab('www.example.url', '#ffffff')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * this.browserTabs.openTabWithAnimation('www.example.url', 'slide_x', '#ffffff')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'ColoredBrowserTabs',
  plugin: 'cordova-plugin-colored-browser-tabs', // npm package name, example: cordova-plugin-camera
  pluginRef: 'ColoredBrowserTabs', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/TobyEb/cordova-plugin-colored-browser-tabs', // the github repository URL for the plugin
  platforms: ['Android', 'iOS'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class ColoredBrowserTabs extends IonicNativePlugin {
  /**
   * Call this method to open the tab
   * @param url - the url you want to open
   * @param color - the color with which you want to define the toolbar color
   * @return {Observable<any>} Returns a Observable that resolves when something happens
   */
  @Cordova({ observable: true, successIndex: 2, errorIndex: 3 })
  openTab(url: string, color?: string): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
  /**
   * Call this method to open the tab
   * @param url - the url you want to open
   * @param anim - the animation you want for enter and exit, you can choose between slide_x / slide_y and fade
   * @param color - the color with which you want to define the toolbar color
   * @return {Observable<any>} Returns a Observable that resolves when something happens
   */
  @Cordova({ observable: true, successIndex: 3, errorIndex: 4 })
  openTabWithAnimation(
    url: string,
    anim: string,
    color?: string
  ): Observable<any> {
    return;
  }
}
