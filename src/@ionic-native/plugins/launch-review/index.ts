import { Injectable } from '@angular/core';
import { Plugin, Cordova } from '@ionic-native/core';

/**
 * @name Launch Review
 * @description
 *
 * This launches the native store app in order for the user to leave a review.
 * On Android, the plugin opens the the app's storepage in the Play Store where the user can leave a review by pressing the stars to give a rating.
 * On iOS, the plugin opens the app's storepage in the App Store and focuses the Review tab, where the user can leave a review by pressing "Write a review".
 *
 * @usage
 * ```
 * import { LaunchReview } from '@ionic-native/launch-review';
 *
 * constructor(private launchReview: LaunchReview) { }
 *
 * ...
 *
 * const appId: string = 'yourAppId';
 * this.launchReview.launch(appId)
 *   .then(() => console.log('Successfully launched store app');
 * ```
 */
@Plugin({
  pluginName: 'LaunchReview',
  plugin: 'cordova-launch-review',
  pluginRef: 'LaunchReview',
  repo: 'https://github.com/dpa99c/cordova-launch-review',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class LaunchReview {

  /**
   * Launch store app using given app ID
   * @returns {Promise<void>}
   */
  @Cordova()
  launch(appId: string): Promise<void> { return; }

}
