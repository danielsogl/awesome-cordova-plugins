import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
/* tslint:disable */
/**
 * @name In App Review
 * @description
 * This plugin does use the iOS class SKStore​Review​Controller to open the inApp review popup available since iOS 10.3
 *
 * This functionality only works on iOS devices
 *
 *
 * @usage
 * ```typescript
 * import { InAppReview } from '@ionic-native/in-app-review/ngx';
 *
 *
 * constructor(private inAppReview: InAppReview) { }
 *
 * ...
 *
 *
 * this.inAppReview.requestReview()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
/* tslint:enable */
@Plugin({
  pluginName: 'InAppReview',
  plugin: 'com.omarben.inappreview',
  pluginRef: 'inappreview',
  repo: 'https://github.com/omaxlive/com.omarben.inappreview',
  platforms: ['iOS'],
})
@Injectable()
export class InAppReview extends IonicNativePlugin {
  /**
   * Open the inApp review popup
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  requestReview(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
}
