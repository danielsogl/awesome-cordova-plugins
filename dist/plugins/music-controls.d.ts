import { Observable } from 'rxjs/Observable';
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
export declare class MusicControls {
    /**
     * Create the media controls
     * @param options {MusicControlsOptions}
     * @returns {Promise<any>}
     */
    static create(options: MusicControlsOptions): Promise<any>;
    /**
     * Destroy the media controller
     * @returns {Promise<any>}
     */
    static destroy(): Promise<any>;
    /**
     * Subscribe to the events of the media controller
     * @returns {Observable<any>}
     */
    static subscribe(): Observable<any>;
    /**
     * Start listening for events, this enables the Observable from the subscribe method
     */
    static listen(): void;
    /**
     * Toggle play/pause:
     * @param isPlaying {boolean}
     */
    static updateIsPlaying(isPlaying: boolean): void;
}
export interface MusicControlsOptions {
    track: string;
    artist: string;
    cover: string;
    isPlaying: boolean;
    dismissable: boolean;
    hasPrev: boolean;
    hasNext: boolean;
    hasClose: boolean;
    ticker: string;
}
