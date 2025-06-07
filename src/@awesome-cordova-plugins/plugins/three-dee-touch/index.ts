import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

export interface ThreeDeeTouchQuickAction {
  /**
   * Type that can be used in the registerQuickActionListener callback
   */
  type?: string;

  /**
   * Title
   */
  title: string;

  /**
   * Subtitle
   */
  subtitle?: string;

  /**
   * Icon type. Case insensitive
   */
  iconType?: string;

  /**
   * Icon template
   */
  iconTemplate?: string;
}

export interface ThreeDeeTouchForceTouch {
  /**
   * Touch force
   */
  force: number;

  /**
   * Timestamp of action
   */
  timestamp: number;

  /**
   * X coordinate of action
   */
  x: number;

  /**
   * Y coordinate of action
   */
  y: number;
}

/**
 * @name 3D Touch
 * @description
 * The 3D Touch plugin adds 3D Touch capabilities to your Cordova app.
 *
 * Requires Cordova plugin: `cordova-plugin-3dtouch`. For more info, please see the [3D Touch plugin docs](https://github.com/EddyVerbruggen/cordova-plugin-3dtouch).
 * @usage
 * Please do refer to the original plugin's repo for detailed usage. The usage example here might not be sufficient.
 * ```typescript
 * import { ThreeDeeTouch, ThreeDeeTouchQuickAction, ThreeDeeTouchForceTouch } from '@awesome-cordova-plugins/three-dee-touch/ngx';
 *
 * constructor(private threeDeeTouch: ThreeDeeTouch) { }
 *
 * ...
 *
 * this.threeDeeTouch.isAvailable().then(isAvailable => console.log('3D Touch available? ' + isAvailable));
 *
 * this.threeDeeTouch.watchForceTouches()
 *   .subscribe(
 *     (data: ThreeDeeTouchForceTouch) => {
 *       console.log('Force touch %' + data.force);
 *       console.log('Force touch timestamp: ' + data.timestamp);
 *       console.log('Force touch x: ' + data.x);
 *       console.log('Force touch y: ' + data.y);
 *     }
 *   );
 *
 *
 * let actions: ThreeDeeTouchQuickAction[] = [
 *   {
 *     type: 'checkin',
 *     title: 'Check in',
 *     subtitle: 'Quickly check in',
 *     iconType: 'Compose'
 *   },
 *   {
 *     type: 'share',
 *     title: 'Share',
 *     subtitle: 'Share like you care',
 *     iconType: 'Share'
 *   },
 *   {
 *     type: 'search',
 *     title: 'Search',
 *     iconType: 'Search'
 *   },
 *   {
 *     title: 'Show favorites',
 *     iconTemplate: 'HeartTemplate'
 *   }
 * ];
 *
 * this.threeDeeTouch.configureQuickActions(actions);
 *
 * this.threeDeeTouch.registerQuickActionListener().subscribe(
 *  (payload) => {
 *    // returns an object that is the button you presed
 *    console.log('Pressed the ${payload.title} button')
 *    console.log(payload.type)
 *
 *  }
 * )
 * ```
 * @interfaces
 * ThreeDeeTouchQuickAction
 * ThreeDeeTouchForceTouch
 */
@Plugin({
  pluginName: 'ThreeDeeTouch',
  plugin: '@herdwatch/cordova-plugin-3dtouch',
  pluginRef: 'ThreeDeeTouch',
  repo: 'https://github.com/herdwatch-apps/cordova-plugin-3dtouch',
  platforms: ['iOS'],
})
@Injectable()
export class ThreeDeeTouch extends AwesomeCordovaNativePlugin {
  /**
   * You need an iPhone 6S or some future tech to use the features of this plugin, so you can check at runtime if the user's device is supported.
   * @returns {Promise<boolean>} returns a promise that resolves with a boolean that indicates whether the plugin is available or not
   */
  @Cordova()
  isAvailable(): Promise<boolean> {
    return;
  }

  /**
   * You can get a notification when the user force touches the webview. The plugin defines a Force Touch when at least 75% of the maximum force is applied to the screen. Your app will receive the x and y coordinates, so you have to figure out which UI element was touched.
   * @returns {Observable<ThreeDeeTouchForceTouch>} Returns an observable that sends a `ThreeDeeTouchForceTouch` object
   */
  @Cordova({
    observable: true,
  })
  watchForceTouches(): Observable<ThreeDeeTouchForceTouch> {
    return;
  }

  /**
   * setup the 3D-touch actions, takes an array of objects with the following
   * @param {string} type (optional) A type that can be used `onHomeIconPressed` callback
   * @param {string} title Title for your action
   * @param {string} subtitle (optional) A short description for your action
   * @param {string} iconType (optional) Choose between Prohibit, Contact, Home, MarkLocation, Favorite, Love, Cloud, Invitation, Confirmation, Mail, Message, Date, Time, CapturePhoto, CaptureVideo, Task, TaskCompleted, Alarm, Bookmark, Shuffle, Audio, Update
   * @param {string} iconTemplate (optional) Can be used to provide your own icon
   * @param quickActions
   */
  @Cordova({
    sync: true,
  })
  configureQuickActions(quickActions: ThreeDeeTouchQuickAction[]): void {}

  /**
   * When a home icon is pressed, your app launches and this JS callback is invoked.
   * @returns {Observable<any>} returns an observable that notifies you when he user presses on the home screen icon
   */
  @Cordova({
    observable: true,
  })
  registerQuickActionListener(): Observable<ThreeDeeTouchQuickAction> {
    return;
  }

  /**
   * Enable Link Preview.
   * UIWebView and WKWebView (the webviews powering Cordova apps) don't allow the fancy new link preview feature of iOS9.
   */
  @Cordova({
    sync: true,
  })
  enableLinkPreview(): void {}

  /**
   * Disabled the link preview feature, if enabled.
   */
  @Cordova({
    sync: true,
  })
  disableLinkPreview(): void {}
}
