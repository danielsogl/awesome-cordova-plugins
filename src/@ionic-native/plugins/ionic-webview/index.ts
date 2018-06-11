import { Injectable } from '@angular/core';
import { Plugin, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name Ionic Webview
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { IonicWebview } from '@ionic-native/ionic-webview';
 *
 *
 * constructor(private ionicWebview: IonicWebview) { }
 *
 * ...
 *
 *
 * img = this.ionicWebview.convertFileSrc('file:///Users/dan/camera-image-12345.png')
 *
 * ```
 */
declare var WEBVIEW_SERVER_URL: string;
@Plugin({
  pluginName: 'IonicWebview',
  plugin: 'cordova-plugin-ionic-webview',
  repo: 'https://github.com/ionic-team/cordova-plugin-ionic-webview',
  platforms: ['Android', 'iOS'],
  install: 'ionic cordova plugin add cordova-plugin-ionic-webview'
})
@Injectable()
export class IonicWebview extends IonicNativePlugin {

  /**
   * Convert file:// url to web server compatible one
   * @param url {string} the url con convert
   * @return string converted url
   */
  convertFileSrc(url: string): string {
    if (!url) {
      return url;
    }
    if (!url.startsWith('file://')) {
      return url;
    }
    url = url.substr(7); // len("file://") == 7
    if (url.length === 0 || url[0] !== '/') { // ensure the new URL starts with /
      url = '/' + url;
    }
    return WEBVIEW_SERVER_URL + '/_file_' + url;
  }

}
