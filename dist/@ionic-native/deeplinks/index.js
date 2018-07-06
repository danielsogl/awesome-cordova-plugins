var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
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
 * Alternatively, if you're using Ionic, there's a convenience method that takes a reference to a `NavController` and handles
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
 * See the [Ionic Deeplinks Demo](https://github.com/ionic-team/ionic2-deeplinks-demo/blob/master/app/app.ts) for an example of how to
 * retrieve the `NavController` reference at runtime.
 *
 * @interfaces
 * DeeplinkMatch
 */
var Deeplinks = (function (_super) {
    __extends(Deeplinks, _super);
    function Deeplinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Define a set of paths to match against incoming deeplinks.
     *
     * @param {paths} paths Define a set of paths to match against incoming deeplinks.
     * paths takes an object of the form { 'path': data }. If a deeplink
     * matches the path, the resulting path-data pair will be returned in the
     * promise result which you can then use to navigate in the app as you see fit.
     * @returns {Observable<DeeplinkMatch>} Returns an Observable that is called each time a deeplink comes through, and
     * errors if a deeplink comes through that does not match a given path.
     */
    Deeplinks.prototype.route = function (paths) { return; };
    /**
     *
     * This is a convenience version of `route` that takes a reference to a NavController
     * from Ionic, or a custom class that conforms to this protocol:
     *
     * NavController.push = function(View, Params){}
     *
     * This handler will automatically navigate when a route matches. If you need finer-grained
     * control over the behavior of a matching deeplink, use the plain `route` method.
     *
     * @param {Nav} navController Define a set of paths to match against incoming deeplinks.
     * paths takes an object of the form { 'path': data }. If a deeplink
     * matches the path, the resulting path-data pair will be returned in the
     * promise result which you can then use to navigate in the app as you see fit.
     *
     * @param {Object} paths
     *
     * @returns {Observable<DeeplinkMatch>} Returns an Observable that resolves each time a deeplink comes through, and
     * errors if a deeplink comes through that does not match a given path.
     */
    Deeplinks.prototype.routeWithNavController = function (navController, paths) { return; };
    return Deeplinks;
}(IonicNativePlugin));
Deeplinks.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Deeplinks.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        observable: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Observable)
], Deeplinks.prototype, "route", null);
__decorate([
    Cordova({
        observable: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Observable)
], Deeplinks.prototype, "routeWithNavController", null);
Deeplinks = __decorate([
    Plugin({
        pluginName: 'Deeplinks',
        plugin: 'ionic-plugin-deeplinks',
        pluginRef: 'IonicDeeplink',
        repo: 'https://github.com/ionic-team/ionic-plugin-deeplinks',
        install: 'ionic cordova plugin add ionic-plugin-deeplinks --variable URL_SCHEME=myapp --variable DEEPLINK_SCHEME=https --variable DEEPLINK_HOST=example.com --variable ANDROID_PATH_PREFIX=/',
        installVariables: ['URL_SCHEME', 'DEEPLINK_SCHEME', 'DEEPLINK_HOST', 'ANDROID_PATH_PREFIX'],
        platforms: ['Android', 'Browser', 'iOS']
    })
], Deeplinks);
export { Deeplinks };
//# sourceMappingURL=index.js.map