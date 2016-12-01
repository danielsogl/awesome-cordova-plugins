import { Cordova, Plugin } from './plugin';


/**
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
  name: 'NavigationBar',
  plugin: 'cordova-plugin-navigationbar',
  pluginRef: 'plugins.navigationbar',
  repo: 'https://github.com/cranberrygame/cordova-plugin-navigationbar',
  platforms: ['Android']
})
export class NavigationBar {

  /**
   * Hide the navigation bar.
   * @param autohide {boolean}  
   * @return {Promise<any>}
   */
  @Cordova({
    callbackStyle: 'object',
    successName: 'success',
    errorName: 'failure'
  })
  static setUp(autohide?: boolean = false): Promise<any> { return; }

}
