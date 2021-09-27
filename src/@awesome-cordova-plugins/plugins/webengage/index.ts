import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name Webengage
 * @description
 * Awesome Cordova Plugins wrapper that wraps Webengage Cordova plugin for Android and iOS
 * @usage
 * ```typescript
 * import { Webengage, WebengageUser, WebengagePush, WebengageNotification } from '@awesome-cordova-plugins/webengage/ngx';
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
export class Webengage extends AwesomeCordovaNativePlugin {
  /**
   * Initializes WebEngage SDK
   *
   * @param {any} [config]
   * @returns {Promise<any>}
   */
  @Cordova()
  engage(config?: any): Promise<any> {
    return;
  }

  /**
   * Sets WebEngage SDK configuration
   *
   * @param {string} key
   * @param {any} value
   * @returns {Promise<any>}
   */
  @Cordova()
  options(key: string, value: any): Promise<any> {
    return;
  }

  /**
   * Tracks event
   *
   * @param {string} eventName
   * @param {any} [attributes]
   * @returns {Promise<any>}
   */
  @Cordova()
  track(eventName: string, attributes?: any): Promise<any> {
    return;
  }

  /**
   * Tracks screen
   *
   * @param {string} eventName
   * @param screenName
   * @param {any} [screenData]
   * @returns {Promise<any>}
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
export class WebengageUser extends AwesomeCordovaNativePlugin {
  /**
   * Logs user in
   *
   * @param {string} userId
   * @returns {Promise<any>}
   */
  @Cordova()
  login(userId: string): Promise<any> {
    return;
  }

  /**
   * Logs user out
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  logout(): Promise<any> {
    return;
  }

  /**
   * Sets user attribute
   *
   * @param {string} key
   * @param {any} value
   * @returns {Promise<any>}
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
export class WebengagePush extends AwesomeCordovaNativePlugin {
  /**
   * Callback function is invoked when a push notification is clicked
   *
   * @param {any} callback
   * @returns {Promise<any>}
   */
  @Cordova()
  onClick(callback: any): Promise<any> {
    return;
  }

  /**
   * Sets push notification configuration
   *
   * @param {string} key
   * @param {any} value
   * @returns {Promise<any>}
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
export class WebengageNotification extends AwesomeCordovaNativePlugin {
  /**
   * Callback function is invoked when a in-app notification is shown
   *
   * @param {any} callback
   * @returns {Promise<any>}
   */
  @Cordova()
  onShown(callback: any): Promise<any> {
    return;
  }

  /**
   * Callback function is invoked when a in-app notification is clicked
   *
   * @param {any} callback
   * @returns {Promise<any>}
   */
  @Cordova()
  onClick(callback: any): Promise<any> {
    return;
  }

  /**
   * Callback function is invoked when a in-app notification is dismissed
   *
   * @param {any} callback
   * @returns {Promise<any>}
   */
  @Cordova()
  onDismiss(callback: any): Promise<any> {
    return;
  }

  /**
   * Sets in-app notification configuration
   *
   * @param {string} key
   * @param {any} value
   * @returns {Promise<any>}
   */
  @Cordova()
  options(key: string, value: any): Promise<any> {
    return;
  }
}
