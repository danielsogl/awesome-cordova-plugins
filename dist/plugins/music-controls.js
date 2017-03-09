"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name MusicControls
 * @description
 * Music controls for Cordova applications.
 * Display a 'media' notification with play/pause, previous, next buttons, allowing the user to control the play.
 * Handle also headset event (plug, unplug, headset button).
 *
 * @usage
 * ```
 * import {MusicControls} from 'ionic-native';
 *
 * MusicControls.create({
 *   track       : 'Time is Running Out',        // optional, default : ''
 *   artist      : 'Muse',                       // optional, default : ''
 *   cover       : 'albums/absolution.jpg',      // optional, default : nothing
 *   // cover can be a local path (use fullpath 'file:///storage/emulated/...', or only 'my_image.jpg' if my_image.jpg is in the www folder of your app)
 *   //           or a remote url ('http://...', 'https://...', 'ftp://...')
 *   isPlaying   : true,                         // optional, default : true
 *   dismissable : true,                         // optional, default : false
 *
 *   // hide previous/next/close buttons:
 *   hasPrev   : false,      // show previous button, optional, default: true
 *   hasNext   : false,      // show next button, optional, default: true
 *   hasClose  : true,       // show close button, optional, default: false
 *
 *   // Android only, optional
 *   // text displayed in the status bar when the notification (and the ticker) are updated
 *   ticker    : 'Now playing "Time is Running Out"'
 *  });
 *
 *  MusicControls.subscribe().subscribe(action => {
 *
 *    switch(action) {
 *        case 'music-controls-next':
 *            // Do something
 *            break;
 *        case 'music-controls-previous':
 *            // Do something
 *            break;
 *        case 'music-controls-pause':
 *            // Do something
 *            break;
 *        case 'music-controls-play':
 *            // Do something
 *            break;
 *        case 'music-controls-destroy':
 *            // Do something
 *            break;
 *
 *        // Headset events (Android only)
 *        case 'music-controls-media-button' :
 *            // Do something
 *            break;
 *        case 'music-controls-headset-unplugged':
 *            // Do something
 *            break;
 *        case 'music-controls-headset-plugged':
 *            // Do something
 *            break;
 *        default:
 *            break;
 *    }
 *
 *  });
 *
 *  MusicControls.listen(); // activates the observable above
 *
 *  MusicControls.updateIsPlaying(true);
 *
 *
 * ```
 */
var MusicControls = (function () {
    function MusicControls() {
    }
    /**
     * Create the media controls
     * @param options {MusicControlsOptions}
     * @returns {Promise<any>}
     */
    MusicControls.create = function (options) { return; };
    /**
     * Destroy the media controller
     * @returns {Promise<any>}
     */
    MusicControls.destroy = function () { return; };
    /**
     * Subscribe to the events of the media controller
     * @returns {Observable<any>}
     */
    MusicControls.subscribe = function () { return; };
    /**
     * Start listening for events, this enables the Observable from the subscribe method
     */
    MusicControls.listen = function () { };
    /**
     * Toggle play/pause:
     * @param isPlaying {boolean}
     */
    MusicControls.updateIsPlaying = function (isPlaying) { };
    __decorate([
        plugin_1.Cordova()
    ], MusicControls, "create", null);
    __decorate([
        plugin_1.Cordova()
    ], MusicControls, "destroy", null);
    __decorate([
        plugin_1.Cordova({
            observable: true
        })
    ], MusicControls, "subscribe", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], MusicControls, "listen", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], MusicControls, "updateIsPlaying", null);
    MusicControls = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-music-controls',
            pluginRef: 'MusicControls',
            repo: 'https://github.com/homerours/cordova-music-controls-plugin'
        })
    ], MusicControls);
    return MusicControls;
}());
exports.MusicControls = MusicControls;
//# sourceMappingURL=music-controls.js.map