import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

export interface PhotoViewerOptions {
  /**
   * Set to false to disable the share button (Android only). Default: true
   */
  share?: boolean;
  /**
   * Add HTTP headers to the request.  Useful for authenticated pages.
   * The value is a string in a JSON format.  Default: ''
   */
  headers?: string;
  /**
   * Option for close button visibility when share false [ONLY FOR iOS]
   */
  closeButton?: boolean;
  /**
   * If you need to copy image to reference before show then set it true [ONLY FOR iOS]
   */
  copyToReference?: boolean;
  /**
   * Enable or Disable Picasso Options ( Only Android ): fit, centerInside, centerCrop.
   */
  piccasoOptions?: {
    fit?: boolean;
    centerInside?: boolean;
    centerCrop?: boolean;
  };
}

/**
 * @name Photo Viewer
 * @description This plugin can display your image in full screen with the ability to pan, zoom, and share the image.
 * @usage
 * ```typescript
 * import { PhotoViewer } from '@awesome-cordova-plugins/photo-viewer/ngx';
 *
 * constructor(private photoViewer: PhotoViewer) { }
 *
 * ...
 *
 * this.photoViewer.show('https://mysite.com/path/to/image.jpg');
 *
 * this.photoViewer.show('https://mysite.com/path/to/image.jpg', 'My image title', {share: false});
 *
 * this.photoViewer.show('https://mysecuresite.com/path/to/image.jpg', 'My image title', {share: false, headers: '{username:foo,password:bar}'});
 * ```
 */
@Plugin({
  pluginName: 'PhotoViewer',
  plugin: 'com-sarriaroman-photoviewer',
  pluginRef: 'PhotoViewer',
  repo: 'https://github.com/sarriaroman/photoviewer',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class PhotoViewer extends AwesomeCordovaNativePlugin {
  /**
   * Shows an image in full screen
   *
   * @param url {string} URL or path to image
   * @param title {string}
   * @param options {PhotoViewerOptions}
   */
  @Cordova({ sync: true })
  show(url: string, title?: string, options?: PhotoViewerOptions): void {}
}
