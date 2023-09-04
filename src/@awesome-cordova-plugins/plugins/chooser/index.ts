import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

export interface ChooserOptions {
  mimeTypes?: string;
  maxFileSize?: number;
}

export interface ChooserResult {
  path: string;
  /**
   * without extension
   */
  name: string;
  /**
   * with extension
   */
  displayName: string;
  mimeType: string;
  extension: string;
  size: number;
}

/**
 * @name Chooser
 * @description
 * File chooser plugin for Cordova.
 *
 * The following must be added to config.xml to prevent crashing when selecting large files on Android:
 * ```xml
 * <platform name="android">
 *  <edit-config
 *    file="app/src/main/AndroidManifest.xml"
 *    mode="merge"
 *    target="/manifest/application">
 *    <application android:largeHeap="true" />
 *  </edit-config>
 * </platform>
 * ```
 * @usage
 * ```typescript
 * import { Chooser } from '@awesome-cordova-plugins/chooser/ngx';
 *
 *
 * constructor(private chooser: Chooser) { }
 *
 * ...
 *
 *
 * this.chooser.getFile()
 *   .then(file => console.log(file ? file.name : 'canceled'))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 * @interfaces
 * ChooserResult
 */
@Plugin({
  pluginName: 'Chooser',
  plugin: 'cordova-plugin-chooser',
  pluginRef: 'chooser',
  repo: 'https://github.com/MaximBelov/cordova-plugin-chooser',
  platforms: ['Android', 'iOS'],
  install: 'ionic cordova plugin add http://github.com/MaximBelov/cordova-plugin-chooser.git',
})
@Injectable()
export class Chooser extends AwesomeCordovaNativePlugin {
  /**
   * Displays native prompt for user to select a file.
   *
   * @param {Object} options
   * @param {string} options.mimeTypes Optional MIME type filter (e.g. 'image/gif,video/*').
   * @param {string} options.maxFileSize Optional Max file size.
   * @returns {Promise<any>} Promise containing selected file's
   * data: MIME type, display name, and original URI.
   */
  @Cordova()
  getFile(options?: ChooserOptions): Promise<ChooserResult | undefined> {
    return;
  }
}
