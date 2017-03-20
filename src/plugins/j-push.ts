/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Add this file to /src/index.ts (follow style of other plugins)
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs.
 * - Remove this note
 *
 */
import { Plugin, Cordova } from './plugin';
import { Observable } from 'rxjs/Observable';

/**
 * @name JPush
 * @description
 * This plugin does something
 *
 * @usage
 * ```
 * import { JPush } from 'ionic-native';
 *
 * JPush.functionName('Hello', 123)
 *   .then((something: any) => doSomething(something))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'JPush',
  plugin: 'jpush-phonegap-plugin', // npm package name, example: cordova-plugin-camera
  pluginRef: 'plugins.jPushPlugin', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/jpush/jpush-phonegap-plugin', // the github repository URL for the plugin
  // install: '' // OPTIONAL install command, in case the plugin requires variables
})
export class JPush {


  @Cordova()
  static init(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }


  @Cordova()
  static stopPush(): Promise<any> {
    return;
  };

  @Cordova()
  static resumePush(): Promise<any> {
    return;
  };

  @Cordova()
  static isPushStopped(): Promise<any> {
    return;
  };

  @Cordova()
  static getRegistrationID(): Promise<any> {
    return;
  };

  @Cordova()
  static setTagsWithAlias(tags?: string[], alias?: string): Promise<any> {
    return;
  };

  @Cordova()
  static setTags(tags?: string[]): Promise<any> {
    return;
  };

  @Cordova()
  static setAlias(alias?: string): Promise<any> {
    return;
  };

  @Cordova()
  static setBadge(badgeNum?: number): Promise<any> {
    return;
  };

  @Cordova()
  static getUserNotificationSettings(): Promise<any> {
    return;
  };

  @Cordova({
    eventObservable: true,
    event: 'jpush.openNotification',
  })
  static openNotification(): Observable<any> {
    return;
  };

  @Cordova({
    eventObservable: true,
    event: 'jpush.receiveNotification',
  })
  static receiveNotification(): Observable<any> {
    return;
  };

  @Cordova({
    eventObservable: true,
    event: 'jpush.receiveMessage',
  })
  static receiveMessage(): Observable<any> {
    return;
  };
}
