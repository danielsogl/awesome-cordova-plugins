import { Injectable } from '@angular/core';
import { Cordova, CordovaProperty, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

/**
 * @name Screen Orientation
 * @premier screen-orientation
 * @description
 * Cordova plugin to set/lock the screen orientation in a common way.
 *
 * Requires Cordova plugin: `cordova-plugin-screen-orientation`. For more info, please see the [Screen Orientation plugin docs](https://github.com/apache/cordova-plugin-screen-orientation).
 * @usage
 * ```typescript
 * import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
 *
 * constructor(private screenOrientation: ScreenOrientation) { }
 *
 * ...
 *
 *
 * // get current
 * console.log(this.screenOrientation.type); // logs the current orientation, example: 'landscape'
 *
 * // set to landscape
 * this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
 *
 * // allow user rotate
 * this.screenOrientation.unlock();
 *
 * // detect orientation changes
 * this.screenOrientation.onChange().subscribe(
 *    () => {
 *        console.log("Orientation Changed");
 *    }
 * );
 *
 * ```
 * @advanced
 *
 * Accepted orientation values:
 *
 * | Value                         | Description                                                                  |
 * |-------------------------------|------------------------------------------------------------------------------|
 * | portrait-primary              | The orientation is in the primary portrait mode.                             |
 * | portrait-secondary            | The orientation is in the secondary portrait mode.                           |
 * | landscape-primary             | The orientation is in the primary landscape mode.                            |
 * | landscape-secondary           | The orientation is in the secondary landscape mode.                          |
 * | portrait                      | The orientation is either portrait-primary or portrait-secondary (sensor).   |
 * | landscape                     | The orientation is either landscape-primary or landscape-secondary (sensor). |
 */
@Plugin({
  pluginName: 'ScreenOrientation',
  plugin: 'cordova-plugin-screen-orientation',
  pluginRef: 'screen.orientation',
  repo: 'https://github.com/apache/cordova-plugin-screen-orientation',
  platforms: ['Android', 'iOS', 'Windows'],
})
@Injectable()
export class ScreenOrientation extends AwesomeCordovaNativePlugin {
  /**
   * Convenience enum for possible orientations
   */
  ORIENTATIONS = {
    PORTRAIT_PRIMARY: 'portrait-primary',
    PORTRAIT_SECONDARY: 'portrait-secondary',
    LANDSCAPE_PRIMARY: 'landscape-primary',
    LANDSCAPE_SECONDARY: 'landscape-secondary',
    PORTRAIT: 'portrait',
    LANDSCAPE: 'landscape',
    ANY: 'any',
  };
  /**
   * Listen to orientation change event
   *
   * @returns {Observable<void>}
   */
  @Cordova({
    eventObservable: true,
    event: 'orientationchange',
    element: 'window',
  })
  onChange(): Observable<void> {
    return;
  }

  /**
   * Lock the orientation to the passed value.
   * See below for accepted values
   *
   * @param orientation {string} The orientation which should be locked. Accepted values see table above.
   * @returns {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  lock(orientation: string): Promise<any> {
    return;
  }

  /**
   * Unlock and allow all orientations.
   */
  @Cordova({ sync: true })
  unlock(): void {}

  /**
   * Get the current orientation of the device.
   */
  @CordovaProperty()
  type: string;
}
