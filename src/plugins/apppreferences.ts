import {Plugin, Cordova} from './plugin';

@Plugin({
  pluginName: 'AppPreferences',
  plugin: 'cordova-plugin-app-preferences',
  pluginRef: 'plugins.appPreferences',
  repo: 'https://github.com/apla/me.apla.cordova.app-preferences',
  platforms: ['Android', 'iOS', 'Windows Phone']
})
export class AppPreferences {
  /**
   * Stores the provided value for the given key into the named dictionary.
   * @param {string} dict
   * @param {string} key
   * @param {*} value
   */
  static store(dict: string, key: string, value: any): Promise<any>;
  /**
   * Stores the provided value for the given key.
   * @param {string} key
   * @param {*} value
   */
  static store(key: string, value: any): Promise<any>;

  @Cordova({
    callbackOrder: 'reverse'
  })
  static store(dict: string, key: string, value?: any): Promise<any> { return; }

  /**
   * Retrieves the value for the given key from the named dictionary.
   * @param {string} dict
   * @param {string} key
   */
  static fetch(dict: string, key: string): Promise<any>;
  /**
   * Retrieves the value for the given key.
   * @param {string} key
   */
  static fetch(key: string): Promise<any>;

  @Cordova({
    callbackOrder: 'reverse'
  })
  static fetch(dict: string, key?: string): Promise<any> { return; }

  /**
   * Removes the value for the given key.
   * @param {string} key
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  static remove(key: string): Promise<any> { return; }

  @Cordova()
  /**
   * Shows the native settings view.
   */
  static show(): Promise<any> { return; }
}
