import { Injectable } from '@angular/core';
import { Cordova, Plugin } from '@ionic-native/core';


/**
 * @beta
 * @name Navigation Bar
 * @description
 * The NavigationBar plugin can you to hide and auto hide the android navigation bar.
 *
 * @usage
 * ```typescript
 * import { NavigationBar } from '@ionic-native/navigation-bar';
 *
 * constructor(private navigationBar: NavigationBar) { }
 *
 * ...
 *
 * let autoHide: boolean = true;
 * this.navigationBar.hide(autoHide);
 * ```
 */
@Plugin({
  pluginName: 'NavigationBar',
  plugin: 'cordova-plugin-navigationbar',
  pluginRef: 'navigationbar',
  repo: 'https://github.com/cranberrygame/cordova-plugin-navigationbar',
  platforms: ['Android']
})
@Injectable()
export class NavigationBar {

  /**
   * hide automatically (or not) the navigation bar.
   * @param autohide {boolean}  
   * @return {Promise<any>}
   */
  @Cordova({
    callbackStyle: 'object',
    successName: 'success',
    errorName: 'failure'
  })
  setUp(autohide?: boolean): Promise<any> { return; }

  /**
   * Hide the navigation bar. 
   * @return {Promise<any>}
   */
  @Cordova({
    callbackStyle: 'object',
    successName: 'success',
    errorName: 'failure'
  })
  hideNavigationBar(): Promise<any> { return; }

}
