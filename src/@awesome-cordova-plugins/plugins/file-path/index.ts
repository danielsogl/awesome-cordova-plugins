import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

declare const window: any;

/**
 * @name File Path
 * @premier filesystem
 * @description
 *
 * This plugin allows you to resolve the native filesystem path for Android content URIs and is based on code in the aFileChooser library.
 * @usage
 * ```typescript
 * import { FilePath } from '@awesome-cordova-plugins/file-path/ngx';
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
export class FilePath extends AwesomeCordovaNativePlugin {
  /**
   * Resolve native path for given content URL/path.
   *
   * @param {string} path  Content URL/path.
   * @returns {Promise<string>}
   */
  @Cordova()
  resolveNativePath(path: string): Promise<string> {
    return;
  }
}
