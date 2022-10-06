import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

/**
 * @name App Review
 * @description
 * Cordova plugin to review app
 *
 * @usage
 * ```typescript
 * import { AppReview } from '@awesome-cordova-plugins/app-review/ngx';
 *
 *
 * constructor(private appReview: AppReview) { }
 *
 * ...
 *
 *
 * this.appReview.requestReview()
 *   .then(() => console.log('Success'))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'AppReview',
  plugin: 'cordova-plugin-app-review',
  pluginRef: 'cordova.plugins.AppReview',
  repo: 'https://github.com/chemerisuk/cordova-plugin-app-review',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class AppReview extends AwesomeCordovaNativePlugin {
  /**
   * Launches in-app review dialog.
   *
   * @returns {Promise<void>} Callback when operation is completed
   */
  @Cordova({ sync: true })
  requestReview(): Promise<void> {
    return;
  }

  /**
   * Launches App/Play store page with a review form. By default current app screen
   * is displayed but you can pass a package name string to show another app details.
   *
   * @param {string} [packageName] Package name to show instead of the current app.
   * @returns {Promise<void>} Callback when operation is completed
   */
  @Cordova({ sync: true })
  openStoreScreen(packageName?: string): Promise<void> {
    return;
  }
}
