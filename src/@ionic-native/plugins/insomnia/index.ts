import { Injectable } from '@angular/core';
import { Cordova, Plugin } from '@ionic-native/core';


/**
 * @name Insomnia
 * @description
 * Prevent the screen of the mobile device from falling asleep.
 *
 * @usage
 * ```typescript
 * import { Insomnia } from '@ionic-native/insomnia';
 *
 * constructor(private insomnia: Insomnia) { }
 *
 * ...
 *
 * this.insomnia.keepAwake()
 *   .then(
 *     () => console.log('success'),
 *     () => console.log('error')
 *   );
 *
 * this.insomnia.allowSleepAgain()
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
@Injectable()
export class Insomnia {

  /**
   * Keeps awake the application
   * @returns {Promise<any>}
   */
  @Cordova()
  keepAwake(): Promise<any> { return; }

  /**
   * Allows the application to sleep again
   * @returns {Promise<any>}
   */
  @Cordova()
  allowSleepAgain(): Promise<any> { return; }

}
