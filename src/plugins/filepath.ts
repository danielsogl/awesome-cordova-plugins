import { Plugin, Cordova } from './plugin';

declare var window: any;

/**
 * @name FilePath
 * @description
 *
 * This plugin allows you to resolve the native filesystem path for Android content URIs and is based on code in the aFileChooser library.
 *
 * @usage
 * ```
 * import {FilePath} from 'ionic-native';
 *
 * FilePath.resolveNativePath(path)
 *   .then(filePath => console.log(filePath);
 *   .catch(err => console.log(err);
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
export class FilePath {

  /**
   * Resolve native path for given content URL/path.
   * @param {String} path  Content URL/path.
   * @returns {Promise<string>}
   */
  @Cordova()
  static resolveNativePath(path: string): Promise<string> {return; }

}
