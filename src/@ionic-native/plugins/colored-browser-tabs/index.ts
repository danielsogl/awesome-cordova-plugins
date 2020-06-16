import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

/**
 * @name Colored Browser Tabs
 * @description
 * This plugin opens Chrome Custom Tabs on Android or SafariViewController on iOS
 *
 * @usage
 * ```typescript
 * import { ColoredBrowserTabs } from '@ionic-native/colored-browser-tabs/ngx';
 *
 *
 * constructor(private browserTabs: ColoredBrowserTabs) { }
 *
 * ...
 *
 *
 * this.browserTabs.openTab('www.example.url', '#ffffff')
 *   .subscribe()
 *
 * this.browserTabs.openTabWithAnimation('www.example.url', 'slide_x', '#ffffff')
 *   .subscribe()
 *
 * ```
 */
@Plugin({
  pluginName: 'ColoredBrowserTabs',
  plugin: 'cordova-plugin-colored-browser-tabs',
  pluginRef: 'ColoredBrowserTabs',
  repo: 'https://github.com/TobyEb/cordova-plugin-colored-browser-tabs',
  platforms: ['Android', 'iOS'],
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
    return;
  }
  /**
   * Call this method to open the tab
   * @param url - the url you want to open
   * @param anim - the animation you want for enter and exit, you can choose between slide_x / slide_y and fade
   *        only works in Android, iOS just shows the default animation
   * @param color - the color with which you want to define the toolbar color
   * @return {Observable<any>} Returns a Observable that resolves when something happens
   */
  @Cordova({ observable: true, successIndex: 3, errorIndex: 4 })
  openTabWithAnimation(url: string, anim: string, color?: string): Observable<any> {
    return;
  }
}
