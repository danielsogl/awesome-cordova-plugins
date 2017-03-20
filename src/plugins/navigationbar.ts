import { Cordova, Plugin } from './plugin';


/**
 * @beta
 * @name NavigationBar
 * @description
 * The NavigationBar plugin can you to hide and auto hide the android navigation bar.
 *
 * @usage
 * ```typescript
 * import { NavigationBar } from 'ionic-native';
 *
 * let autoHide: boolean = true;
 * NavigationBar.hide(autoHide);
 * ```
 */
@Plugin({
  pluginName: 'NavigationBar',
  plugin: 'cordova-plugin-navigationbar',
  pluginRef: 'navigationbar',
  repo: 'https://github.com/cranberrygame/cordova-plugin-navigationbar',
  platforms: ['Android']
})
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
  static setUp(autohide?: boolean): Promise<any> { return; }

  /**
   * Hide the navigation bar. 
   * @return {Promise<any>}
   */
  @Cordova({
    callbackStyle: 'object',
    successName: 'success',
    errorName: 'failure'
  })
  static hideNavigationBar(): Promise<any> { return; }

}
