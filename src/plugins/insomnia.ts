import { Cordova, Plugin } from './plugin';


/**
 * @name Insomnia
 * @description
 * Prevent the screen of the mobile device from falling asleep.
 *
 * @usage
 * ```typescript
 * import { Insomnia } from 'ionic-native';
 *
 *
 * Insomnia.keepAwake()
 *   .then(
 *     () => console.log('success'),
 *     () => console.log('error')
 *   );
 *
 * Insomnia.allowSleepAgain()
 *   .then(
 *     () => console.log('success'),
 *     () => console.log('error')
 *   );
 * ```
 *
 */
@Plugin({
  pluginName: 'Insomnia',
  plugin: 'https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin.git',
  pluginRef: 'plugins.insomnia',
  repo: 'https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin',
  platforms: ['Android', 'iOS', 'Windows Phone 8']
})
export class Insomnia {

  /**
   * Keeps awake the application
   * @returns {Promise<any>}
   */
  @Cordova()
  static keepAwake(): Promise<any> { return; }

  /**
   * Allows the application to sleep again
   * @returns {Promise<any>}
   */
  @Cordova()
  static allowSleepAgain(): Promise<any> { return; }

}
