import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

/**
 * @name Launch Review
 * @description
 *
 * Assists in leaving user reviews/ratings in the App Stores.
 * - Launches the platform's App Store page for the current app in order for the user to leave a review.
 * - On iOS (10.3 and above) invokes the native in-app rating dialog which allows a user to rate your app without needing to open the App Store.
 * @usage
 * ```typescript
 * import { LaunchReview } from '@awesome-cordova-plugins/launch-review/ngx';
 *
 * constructor(private launchReview: LaunchReview) { }
 *
 * ...
 *
 * this.launchReview.launch()
 *   .then(() => console.log('Successfully launched store app'));
 *
 * if(this.launchReview.isRatingSupported()){
 *   this.launchReview.rating()
 *     .then(() => console.log('Successfully launched rating dialog'));
 * }
 * ```
 */
@Plugin({
  pluginName: 'LaunchReview',
  plugin: 'cordova-launch-review',
  pluginRef: 'LaunchReview',
  repo: 'https://github.com/dpa99c/cordova-launch-review',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class LaunchReview extends AwesomeCordovaNativePlugin {
  /**
   * Launches App Store on current platform in order to leave a review for given app.
   *
   * @param appId {string} - (optional) the platform-specific app ID to use to open the page in the store app.
   * If not specified, the plugin will use the app ID for the app in which the plugin is contained.
   * On Android this is the full package name of the app. For example, for Google Maps: `com.google.android.apps.maps`
   * On iOS this is the Apple ID of the app. For example, for Google Maps: `585027354`
   * @returns {Promise<void>}
   */
  @Cordova({ platforms: ['Android', 'iOS'], callbackOrder: 'reverse' })
  launch(appId?: string): Promise<void> {
    return;
  }

  /**
   * Invokes the native in-app rating dialog which allows a user to rate your app without needing to open the App Store.
   * Requires iOS 10.3 and above: Calling this on any platform/version other than iOS 10.3+ will result in the error callback.
   * Success callback will be called up to 3 times:
   * - First: after `LaunchReview.rating()` is called and the request to show the dialog is successful. Will be passed the value `requested`.
   * - Second: if and when the Rating dialog is actually displayed.  Will be passed the value `shown`.
   * - Third: if and when the Rating dialog is dismissed.  Will be passed the value `dismissed`.
   *
   * @returns {Observable<string>}
   */
  @Cordova({ observable: true })
  rating(): Observable<string> {
    return;
  }

  /**
   * Indicates if the current platform/version supports in-app ratings dialog, i.e. calling LaunchReview.rating().
   * Will return true if current platform is iOS 10.3 or above.
   *
   * @returns {boolean}
   */
  @Cordova({ platforms: ['Android', 'iOS'], sync: true })
  isRatingSupported(): boolean {
    return;
  }
}
