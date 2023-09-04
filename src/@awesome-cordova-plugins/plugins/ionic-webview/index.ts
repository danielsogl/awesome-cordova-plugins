import { Injectable } from '@angular/core';
import { CordovaProperty, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name Ionic Webview
 * @capacitorincompatible true
 * @description
 * Access Web View utilities.
 *
 * Requires the Cordova plugin: `cordova-plugin-ionic-webview` > 2.0. For more info, please see the [Ionic Web View](https://github.com/ionic-team/cordova-plugin-ionic-webview) repository.
 * @usage
 * ```typescript
 * import { WebView } from '@awesome-cordova-plugins/ionic-webview/ngx';
 *
 *
 * constructor(private webview: WebView) { }
 *
 * ...
 *
 * img = this.webview.convertFileSrc('file:///Users/dan/camera-image-12345.png')
 *
 * ```
 */
@Plugin({
  pluginName: 'WebView',
  plugin: 'cordova-plugin-ionic-webview',
  pluginRef: 'window.Ionic.WebView',
  repo: 'https://github.com/ionic-team/cordova-plugin-ionic-webview',
  platforms: ['Android', 'iOS'],
  install: 'ionic cordova plugin add cordova-plugin-ionic-webview',
})
@Injectable()
export class WebView extends AwesomeCordovaNativePlugin {
  /**
   * Convert a `file://` URL to a URL that is compatible with the local web server in the Web View plugin.
   */
  @CordovaProperty()
  convertFileSrc: (url: string) => string;
}
