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
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
/**
 * @name Music Controls
 * @description
 * Music controls for Cordova applications.
 * Display a 'media' notification with play/pause, previous, next buttons, allowing the user to control the play.
 * Handle also headset event (plug, unplug, headset button).
 *
 * @usage
 * ```typescript
 * import { MusicControls } from '@ionic-native/music-controls';
 *
 * constructor(private musicControls: MusicControls) { }
 *
 * ...
 *
 * this.musicControls.create({
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
 * // iOS only, optional
 *   album       : 'Absolution'     // optional, default: ''
 *   duration : 60, // optional, default: 0
 *   elapsed : 10, // optional, default: 0
 *
 *   // Android only, optional
 *   // text displayed in the status bar when the notification (and the ticker) are updated
 *   ticker    : 'Now playing "Time is Running Out"'
 *  });
 *
 *  this.musicControls.subscribe().subscribe(action => {
 *
 *    function events(action) {
 *      const message = JSON.parse(action).message;
 *      	switch(message) {
 *      		case 'music-controls-next':
 *      			// Do something
 *      			break;
 *      		case 'music-controls-previous':
 *      			// Do something
 *      			break;
 *      		case 'music-controls-pause':
 *      			// Do something
 *      			break;
 *      		case 'music-controls-play':
 *      			// Do something
 *      			break;
 *      		case 'music-controls-destroy':
 *      			// Do something
 *      			break;
 *
 *          // External controls (iOS only)
 *          case 'music-controls-toggle-play-pause' :
 *      			// Do something
 *      			break;
 *          case 'music-controls-seek-to':
 *            const seekToInSeconds = JSON.parse(action).position;
 *            MusicControls.updateElapsed({
 *              elapsed: seekToInSeconds,
 *              isPlaying: true
 *            });
 *            // Do something
 *            break;
 *
 *      		// Headset events (Android only)
 *      		// All media button events are listed below
 *      		case 'music-controls-media-button' :
 *      			// Do something
 *      			break;
 *      		case 'music-controls-headset-unplugged':
 *      			// Do something
 *      			break;
 *      		case 'music-controls-headset-plugged':
 *      			// Do something
 *      			break;
 *      		default:
 *      			break;
 *      	}
 *      }
 *
 *  this.musicControls.listen(); // activates the observable above
 *
 *  this.musicControls.updateIsPlaying(true);
 *
 *
 * ```
 * @interfaces
 * MusicControlsOptions
 */
var MusicControls = (function (_super) {
    __extends(MusicControls, _super);
    function MusicControls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create the media controls
     * @param options {MusicControlsOptions}
     * @returns {Promise<any>}
     */
    MusicControls.prototype.create = function (options) { return; };
    /**
     * Destroy the media controller
     * @returns {Promise<any>}
     */
    MusicControls.prototype.destroy = function () { return; };
    /**
     * Subscribe to the events of the media controller
     * @returns {Observable<any>}
     */
    MusicControls.prototype.subscribe = function () { return; };
    /**
     * Start listening for events, this enables the Observable from the subscribe method
     */
    MusicControls.prototype.listen = function () { };
    /**
     * Toggle play/pause:
     * @param isPlaying {boolean}
     */
    MusicControls.prototype.updateIsPlaying = function (isPlaying) { };
    /**
    * Update elapsed time, optionally toggle play/pause:
    * @param args {Object}
    */
    MusicControls.prototype.updateElapsed = function (args) { };
    /**
     * Toggle dismissable:
     * @param dismissable {boolean}
     */
    MusicControls.prototype.updateDismissable = function (dismissable) { };
    return MusicControls;
}(IonicNativePlugin));
MusicControls.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MusicControls.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MusicControls.prototype, "create", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MusicControls.prototype, "destroy", null);
__decorate([
    Cordova({
        observable: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], MusicControls.prototype, "subscribe", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MusicControls.prototype, "listen", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], MusicControls.prototype, "updateIsPlaying", null);
__decorate([
    Cordova({
        platforms: ['iOS']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MusicControls.prototype, "updateElapsed", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], MusicControls.prototype, "updateDismissable", null);
MusicControls = __decorate([
    Plugin({
        pluginName: 'MusicControls',
        plugin: 'cordova-plugin-music-controls',
        pluginRef: 'MusicControls',
        repo: 'https://github.com/homerours/cordova-music-controls-plugin',
        platforms: ['Android', 'iOS', 'Windows']
    })
], MusicControls);
export { MusicControls };
//# sourceMappingURL=index.js.map