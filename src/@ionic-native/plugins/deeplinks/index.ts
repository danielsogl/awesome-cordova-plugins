import { Injectable } from '@angular/core';
import { Cordova, Plugin } from '@ionic-native/core';
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
 * @name Deeplinks
 * @description This plugin handles deeplinks on iOS and Android for both custom URL scheme links
 * and Universal App Links.
 *
 * @usage
 * ```typescript
 * import { Deeplinks } from '@ionic-native/deeplinks';
 *
 * constructor(private deeplinks: Deeplinks) { }
 *
 * this.deeplinks.route({
 *      '/about-us': AboutPage,
 *      '/universal-links-test': AboutPage,
 *      '/products/:productId': ProductPage
 *    }).subscribe((match) => {
 *      // match.$route - the route we matched, which is the matched entry from the arguments to route()
 *      // match.$args - the args passed in the link
 *      // match.$link - the full link data
 *      console.log('Successfully matched route', match);
 *    }, (nomatch) => {
 *      // nomatch.$link - the full link data
 *      console.error('Got a deeplink that didn\'t match', nomatch);
 *    });
 * ```
 *
 * Alternatively, if you're using Ionic 2, there's a convenience method that takes a reference to a `NavController` and handles
 * the actual navigation for you:
 *
 * ```typescript
 * this.deeplinks.routeWithNavController(this.navController, {
 *   '/about-us': AboutPage,
 *   '/products/:productId': ProductPage
 * }).subscribe((match) => {
 *     // match.$route - the route we matched, which is the matched entry from the arguments to route()
 *     // match.$args - the args passed in the link
 *     // match.$link - the full link data
 *     console.log('Successfully matched route', match);
 *   }, (nomatch) => {
 *     // nomatch.$link - the full link data
 *     console.error('Got a deeplink that didn\'t match', nomatch);
 *   });
 * ```
 *
 * See the [Ionic 2 Deeplinks Demo](https://github.com/driftyco/ionic2-deeplinks-demo/blob/master/app/app.ts) for an example of how to
 * retrieve the `NavController` reference at runtime.
 *
 * @interfaces
 * DeeplinkMatch
 */
@Plugin({
  pluginName: 'Deeplinks',
  plugin: 'ionic-plugin-deeplinks',
  pluginRef: 'IonicDeeplink',
  repo: 'https://github.com/driftyco/ionic-plugin-deeplinks',
  platforms: ['iOS', 'Android', 'Browser'],
  install: 'ionic plugin add ionic-plugin-deeplinks --variable URL_SCHEME=myapp --variable DEEPLINK_SCHEME=https --variable DEEPLINK_HOST=example.com --variable ANDROID_PATH_PREFIX=/',
  installVariables: ['URL_SCHEME', 'DEEPLINK_SCHEME', 'DEEPLINK_HOST', 'ANDROID_PATH_PREFIX']
})
@Injectable()
export class Deeplinks {

  /**
   * Define a set of paths to match against incoming deeplinks.
   *
   * @param {paths} Define a set of paths to match against incoming deeplinks.
   * paths takes an object of the form { 'path': data }. If a deeplink
   * matches the path, the resulting path-data pair will be returned in the
   * promise result which you can then use to navigate in the app as you see fit.
   * @returns {Observable<DeeplinkMatch>} Returns an Observable that is called each time a deeplink comes through, and
   * errors if a deeplink comes through that does not match a given path.
   */
  @Cordova({
    observable: true
  })
  route(paths): Observable<DeeplinkMatch> { return; }

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
   * @returns {Observable<DeeplinkMatch>} Returns an Observable that resolves each time a deeplink comes through, and
   * errors if a deeplink comes through that does not match a given path.
   */
  @Cordova({
    observable: true
  })
  routeWithNavController(navController, paths): Observable<DeeplinkMatch> { return; }

}
