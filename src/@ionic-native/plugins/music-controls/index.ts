import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

export interface MusicControlsOptions {
  track: string;
  artist: string;
  cover: string;
  isPlaying: boolean;
  dismissable: boolean;
  hasPrev: boolean;
  hasNext: boolean;
  hasSkipForward: boolean;
  hasSkipBackward: boolean;
  skipForwardInterval: number;
  skipBackwardInterval: number;
  hasClose: boolean;
  album: string;
  duration: number;
  elapsed: number;
  ticker: string;
}

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
 *   hasSkipForward : true,  // show skip forward button, optional, default: false
 *   hasSkipBackward : true, // show skip backward button, optional, default: false
 *   skipForwardInterval: 15, // display number for skip forward, optional, default: 0
 *   skipBackwardInterval: 15, // display number for skip backward, optional, default: 0
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
 *          case 'music-controls-skip-forward':
 *            // Do something
 *            break;
 *          case 'music-controls-skip-backward':
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
@Plugin({
  pluginName: 'MusicControls',
  plugin: 'cordova-plugin-music-controls',
  pluginRef: 'MusicControls',
  repo: 'https://github.com/homerours/cordova-music-controls-plugin',
  platforms: ['Android', 'iOS', 'Windows']
})
@Injectable()
export class MusicControls extends IonicNativePlugin {

  /**
   * Create the media controls
   * @param options {MusicControlsOptions}
   * @returns {Promise<any>}
   */
  @Cordova()
  create(options: MusicControlsOptions): Promise<any> { return; }

  /**
   * Destroy the media controller
   * @returns {Promise<any>}
   */
  @Cordova()
  destroy(): Promise<any> { return; }

  /**
   * Subscribe to the events of the media controller
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true
  })
  subscribe(): Observable<any> { return; }

  /**
   * Start listening for events, this enables the Observable from the subscribe method
   */
  @Cordova({ sync: true })
  listen(): void { }

  /**
   * Toggle play/pause:
   * @param isPlaying {boolean}
   */
  @Cordova()
  updateIsPlaying(isPlaying: boolean): void { }

  /**
  * Update elapsed time, optionally toggle play/pause:
  * @param args {Object}
  */
  @Cordova({
    platforms: ['iOS']
  })
  updateElapsed(args: { elapsed: string; isPlaying: boolean; }): void { }

  /**
   * Toggle dismissable:
   * @param dismissable {boolean}
   */
  @Cordova()
  updateDismissable(dismissable: boolean): void { }
}
