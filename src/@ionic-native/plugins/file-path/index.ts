import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

declare const window: any;

/**
 * @name File Path
 * @premier filesystem
 * @description
 *
 * This plugin allows you to resolve the native filesystem path for Android content URIs and is based on code in the aFileChooser library.
 *
 * @usage
 * ```typescript
 * import { FilePath } from '@ionic-native/file-path/ngx';
 *
 * constructor(private filePath: FilePath) { }
 *
 * ...
 *
 * this.filePath.resolveNativePath(path)
 *   .then(filePath => console.log(filePath))
 *   .catch(err => console.log(err));
 *
 * ```
 */
@Plugin({
  pluginName: 'FilePath',
  plugin: 'cordova-plugin-filepath',
  pluginRef: 'window.FilePath',
  repo: 'https://github.com/hiddentao/cordova-plugin-filepath',
  platforms: ['Android'],
})
@Injectable()
export class FilePath extends IonicNativePlugin {
  /**
   * Resolve native path for given content URL/path.
   * @param {string} path  Content URL/path.
   * @returns {Promise<string>}
   */
  @Cordova()
  resolveNativePath(path: string): Promise<string> {
    return;
  }
}
