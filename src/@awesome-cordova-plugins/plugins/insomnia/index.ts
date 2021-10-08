import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name Insomnia
 * @description
 * Prevent the screen of the mobile device from falling asleep.
 * @usage
 * ```typescript
 * import { Insomnia } from '@awesome-cordova-plugins/insomnia/ngx';
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
 */
@Plugin({
  pluginName: 'Insomnia',
  plugin: 'cordova-plugin-insomnia',
  pluginRef: 'plugins.insomnia',
  repo: 'https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin',
  platforms: ['Android', 'Browser', 'Firefox OS', 'iOS', 'Windows', 'Windows Phone 8'],
})
@Injectable()
export class Insomnia extends AwesomeCordovaNativePlugin {
  /**
   * Keeps awake the application
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  keepAwake(): Promise<any> {
    return;
  }

  /**
   * Allows the application to sleep again
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  allowSleepAgain(): Promise<any> {
    return;
  }
}
