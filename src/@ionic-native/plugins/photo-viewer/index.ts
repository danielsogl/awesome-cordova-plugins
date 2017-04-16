import { Injectable } from '@angular/core';
import { Plugin, Cordova } from '@ionic-native/core';
/**
 * @name Photo Viewer
 * @description This plugin can display your image in full screen with the ability to pan, zoom, and share the image.
 * @usage
 * ```typescript
 * import { PhotoViewer } from '@ionic-native/photo-viewer';
 *
 * constructor(private photoViewer: PhotoViewer) { }
 *
 * ...
 *
 * this.photoViewer.show('https://mysite.com/path/to/image.jpg');
 *
 * this.photoViewer.show('https://mysite.com/path/to/image.jpg', 'My image title', {share: false});
 * ```
 */
@Plugin({
  pluginName: 'PhotoViewer',
  plugin: 'com-sarriaroman-photoviewer',
  pluginRef: 'PhotoViewer',
  repo: 'https://github.com/sarriaroman/photoviewer',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class PhotoViewer {
  /**
   * Shows an image in full screen
   * @param url {string} URL or path to image
   * @param title {string}
   * @param options {any}
   */
  @Cordova({sync: true})
  show(url: string, title?: string, options?: {share?: boolean}): void { }
}
