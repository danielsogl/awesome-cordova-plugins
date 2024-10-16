import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

/**
 * @name IRoot
 * @description
 * Use this plugin to add an extra layer of security for your app by detecting if the device was rooted (on android) or jailbreaked (on iOS).
 *
 * @usage
 * ```typescript
 * import { IRoot } from '@awesome-cordova-plugins/i-root';
 *
 * constructor(private iRoot: IRoot) { }
 *
 * ...
 *
 * this.iRoot.isRooted()
 *   .then((res: boolean) => console.log('is rooted?', res))
 *   .catch((error: string) => console.error(error));
 *
 * this.iRoot.isRootedWithBusyBox()
 *   .then((res: boolean) => console.log('is rooted?', res))
 *   .catch((error: string) => console.error(error));
 * ```
 */
@Plugin({
  pluginName: 'IRoot',
  plugin: 'cordova-plugin-IRoot',
  pluginRef: 'IRoot',
  repo: 'https://github.com/WuglyakBolgoink/cordova-plugin-IRoot',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class IRoot extends AwesomeCordovaNativePlugin {
  /**
   * Checks if the device is rooted/jailbroken.
   * @return {Promise<boolean>} Resolves to true if the device is Jailbroken/rooted, otherwise false.
   */
  @Cordova()
  isRooted(): Promise<boolean> {
    return;
  }

  /**
   * Android only! Checks if the device was rooted via busybox.
   * @return {Promise<boolean>} Resolves to true if the device is Jailbroken/rooted, otherwise false.
   */
  @Cordova({
    platforms: ['android'],
  })
  isRootedWithBusyBox(): Promise<boolean> {
    return;
  }
}
