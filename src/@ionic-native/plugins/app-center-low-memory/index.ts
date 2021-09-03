import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @name App Center Low Memory
 * @description
 * Generates a low memory warning.
 * For more info, please see: https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-generate-low-memory
 *
 * @usage
 * ```typescript
 * import { LowMemory } from '@ionic-native/app-center-low-memory/ngx';
 *
 * ...
 *
 * constructor(private lowMemory: LowMemory) { }
 *
 * async warning() {
 *   await this.lowMemory.generateLowMemory();
 * }
 * ```
 */
@Plugin({
  pluginName: 'LowMemory',
  plugin: 'https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-generate-low-memory',
  pluginRef: 'LowMemory',
  repo: 'https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-generate-low-memory',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class LowMemory extends IonicNativePlugin {
  /**
   * Generates a low memory warning.
   * For more info, please see: https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-generate-low-memory
   * @returns {Promise<void>}
   */
  @Cordova()
  generateLowMemory(): Promise<void> {
    return;
  }
}
