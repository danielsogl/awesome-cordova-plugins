import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
/**
 * @name Youtube Video Player
 * @description
 * Plays YouTube videos in Native YouTube App
 * @usage
 * For Android 5.0+ you will need to add the following to config.xml
 * ```xml
 * <preference name="YouTubeDataApiKey" value="[YOUR YOUTUBE API]" />
 * ```
 * For more information: https://developers.google.com/youtube/v3/getting-started
 *
 *
 * ```typescript
 * import { YoutubeVideoPlayer } from '@awesome-cordova-plugins/youtube-video-player/ngx';
 *
 * constructor(private youtube: YoutubeVideoPlayer) { }
 *
 * ...
 *
 *
 * this.youtube.openVideo('myvideoid');
 *
 * ```
 */
@Plugin({
  pluginName: 'YoutubeVideoPlayer',
  plugin: 'cordova-plugin-youtube-video-player',
  pluginRef: 'YoutubeVideoPlayer',
  repo: 'https://github.com/ihadeed/CordovaYoutubeVideoPlayer',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class YoutubeVideoPlayer extends AwesomeCordovaNativePlugin {
  /**
   * Plays a YouTube video
   *
   * @param videoId {string} Video ID
   */
  @Cordova({ sync: true })
  openVideo(videoId: string): void {}
}
