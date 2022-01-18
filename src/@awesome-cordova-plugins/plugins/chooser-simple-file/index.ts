import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

export interface ChooserResult {
  mediaType: string;
  name: string;
  uri: string;
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
 * import { Chooser } from '@awesome-cordova-plugins/chooser-simple-file/ngx';
 *
 *
 * constructor(private chooser: Chooser) { }
 *
 * ...
 *
 *
 * this.chooser.getFiles()
 *   .then(files => console.log(files ? files.name : 'canceled'))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 * @interfaces
 * ChooserResult
 */
@Plugin({
  pluginName: 'Chooser',
  plugin: 'cordova-plugin-simple-file-chooser',
  pluginRef: 'chooser',
  repo: 'https://github.com/hc-oss/cordova-plugin-simple-file-chooser',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Chooser extends AwesomeCordovaNativePlugin {
  /**
   * Displays native prompt for user to select a file.
   *
   * @param {string} [accept] Optional MIME type filter (e.g. 'image/gif,video/*').
   * @returns {Promise<any>} Promise containing selected file's
   * data: MIME type, display name, and original URI.
   */
  @Cordova()
  getFiles(accept?: string): Promise<ChooserResult[] | undefined> {
    return;
  }
}
