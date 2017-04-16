import { Injectable } from '@angular/core';
import { Plugin, Cordova } from '@ionic-native/core';

declare var window: any;

/**
 * @name File Path
 * @description
 *
 * This plugin allows you to resolve the native filesystem path for Android content URIs and is based on code in the aFileChooser library.
 *
 * @usage
 * ```
 * import { FilePath } from '@ionic-native/file-path';
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
  platforms: ['Android']
})
@Injectable()
export class FilePath {

  /**
   * Resolve native path for given content URL/path.
   * @param {String} path  Content URL/path.
   * @returns {Promise<string>}
   */
  @Cordova()
  resolveNativePath(path: string): Promise<string> {return; }

}
