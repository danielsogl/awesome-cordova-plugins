import { Plugin, Cordova } from './plugin';
/**
 * @name FileChooser
 * @description
 *
 * Opens the file picker on Android for the user to select a file, returns a file URI.
 *
 * @usage
 * ```
 * import {FileChooser} from 'ionic-native';
 *
 * FileChooser.open()
 *   .then(uri => console.log(uri);
 *   .catch(e => console.log(e);
 *
 * ```
 */
@Plugin({
  plugin: 'http://github.com/don/cordova-filechooser.git',
  pluginRef: 'fileChooser',
  repo: 'https://github.com/don/cordova-filechooser',
  platforms: ['Android']
})
export class FileChooser {
  /**
   * Open a file
   */
  @Cordova()
  static open(): Promise<string> { return; }
}
