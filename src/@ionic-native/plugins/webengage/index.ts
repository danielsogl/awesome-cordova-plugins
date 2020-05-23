import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @name Webengage
 * @description
 * Ionic-Native wrapper that wraps Webengage Cordova plugin for Android and iOS
 *
 * @usage
 * ```typescript
 * import { Webengage, WebengageUser, WebengagePush, WebengageNotification } from '@ionic-native/webengage/ngx';
 *
 *
 * constructor(private webengage: Webengage, private webengageUser: WebengageUser, private webengagePush: WebengagePush, private webengageNotification: WebengageNotification ) { }
 *
 * ...
 *
 * this.webengage.engage();
 * ```
 */
@Plugin({
  pluginName: 'Webengage',
  plugin: 'cordova-plugin-webengage',
  pluginRef: 'webengage',
  repo: 'https://github.com/WebEngage/cordova-plugin',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Webengage extends IonicNativePlugin {
  /**
   * Initializes WebEngage SDK
   * @param {any} [config]
   * @return {Promise<any>}
   */
  @Cordova()
  engage(config?: any): Promise<any> {
    return;
  }

  /**
   * Sets WebEngage SDK configuration
   * @param {string} key
   * @param {any} value
   * @return {Promise<any>}
   */
  @Cordova()
  options(key: string, value: any): Promise<any> {
    return;
  }

  /**
   * Tracks event
   * @param {string} eventName
   * @param {any} [attributes]
   * @return {Promise<any>}
   */
  @Cordova()
  track(eventName: string, attributes?: any): Promise<any> {
    return;
  }

  /**
   * Tracks screen
   * @param {string} eventName
   * @param {any} [screenData]
   * @return {Promise<any>}
   */
  @Cordova()
  screen(screenName: string, screenData?: any): Promise<any> {
    return;
  }
}

/**
 * @hidden
 */
@Plugin({
  pluginName: 'Webengage',
  plugin: 'cordova-plugin-webengage',
  pluginRef: 'webengage.user',
})
@Injectable()
export class WebengageUser extends IonicNativePlugin {
  /**
   * Logs user in
   * @param {string} userId
   * @return {Promise<any>}
   */
  @Cordova()
  login(userId: string): Promise<any> {
    return;
  }

  /**
   * Logs user out
   * @return {Promise<any>}
   */
  @Cordova()
  logout(): Promise<any> {
    return;
  }

  /**
   * Sets user attribute
   * @param {string} key
   * @param {any} value
   * @return {Promise<any>}
   */
  @Cordova()
  setAttribute(key: string, value: any): Promise<any> {
    return;
  }
}

/**
 * @hidden
 */
@Plugin({
  pluginName: 'Webengage',
  plugin: 'cordova-plugin-webengage',
  pluginRef: 'webengage.push',
})
@Injectable()
export class WebengagePush extends IonicNativePlugin {
  /**
   * Callback function is invoked when a push notification is clicked
   * @param {any} callback
   * @return {Promise<any>}
   */
  @Cordova()
  onClick(callback: any): Promise<any> {
    return;
  }

  /**
   * Sets push notification configuration
   * @param {string} key
   * @param {any} value
   * @return {Promise<any>}
   */
  @Cordova()
  options(key: string, value: any): Promise<any> {
    return;
  }
}

/**
 * @hidden
 */
@Plugin({
  pluginName: 'Webengage',
  plugin: 'cordova-plugin-webengage',
  pluginRef: 'webengage.notification',
})
@Injectable()
export class WebengageNotification extends IonicNativePlugin {
  /**
   * Callback function is invoked when a in-app notification is shown
   * @param {any} callback
   * @return {Promise<any>}
   */
  @Cordova()
  onShown(callback: any): Promise<any> {
    return;
  }

  /**
   * Callback function is invoked when a in-app notification is clicked
   * @param {any} callback
   * @return {Promise<any>}
   */
  @Cordova()
  onClick(callback: any): Promise<any> {
    return;
  }

  /**
   * Callback function is invoked when a in-app notification is dismissed
   * @param {any} callback
   * @return {Promise<any>}
   */
  @Cordova()
  onDismiss(callback: any): Promise<any> {
    return;
  }

  /**
   * Sets in-app notification configuration
   * @param {string} key
   * @param {any} value
   * @return {Promise<any>}
   */
  @Cordova()
  options(key: string, value: any): Promise<any> {
    return;
  }
}
