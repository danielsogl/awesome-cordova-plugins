import { Cordova, Plugin } from './plugin';
import { Observable } from 'rxjs/Observable';


export interface DeeplinkMatch {
  /**
   * The route info for the matched route
   */
  $route: any;

  /**
   * Any arguments passed either through route parameters or GET parameters
   */
  $args: any;

  /**
   * The deeplink object processed from the plugin, along with any
   * any internal native data available as "extras" at the time
   * the route was matched (for example, Facebook sometimes adds extra data)
   */
  $link: any;
}

/**
 * @name Ionic Deeplinks
 * @description This plugin handles deeplinks on iOS and Android for both custom URL scheme links
 * and Universal App Links.
 *
 * @usage
 * ```typescript
 * import { IonicDeeplinks } from 'ionic-native';
 *
 * ```
 */
@Plugin({
  plugin: 'ionic-plugin-deeplinks',
  pluginRef: 'IonicDeeplink',
  repo: 'https://github.com/driftyco/ionic-plugin-deeplinks',
  platforms: ['iOS', 'Android']
})
export class Deeplinks {

  /**
   * Define a set of paths to match against incoming deeplinks.
   *
   * @param {paths} Define a set of paths to match against incoming deeplinks.
   * paths takes an object of the form { 'path': data }. If a deeplink
   * matches the path, the resulting path-data pair will be returned in the
   * promise result which you can then use to navigate in the app as you see fit.
   * @returns {Promise} Returns a Promise that resolves when a deeplink comes through, and
   * is rejected if a deeplink comes through that does not match a given path.
   */
  @Cordova({
    observable: true
  })
  static route(paths): Observable<DeeplinkMatch> { return; }

  /**
   *
   * This is a convenience version of `route` that takes a reference to a NavController
   * from Ionic 2, or a custom class that conforms to this protocol:
   *
   * NavController.push = function(View, Params){}
   *
   * This handler will automatically navigate when a route matches. If you need finer-grained
   * control over the behavior of a matching deeplink, use the plain `route` method.
   *
   * @param {paths} Define a set of paths to match against incoming deeplinks.
   * paths takes an object of the form { 'path': data }. If a deeplink
   * matches the path, the resulting path-data pair will be returned in the
   * promise result which you can then use to navigate in the app as you see fit.
   *
   * @returns {Promise} Returns a Promise that resolves when a deeplink comes through, and
   * is rejected if a deeplink comes through that does not match a given path.
   */
  @Cordova({
    observable: true
  })
  static routeWithNavController(navController, paths): Observable<DeeplinkMatch> { return; }

}
