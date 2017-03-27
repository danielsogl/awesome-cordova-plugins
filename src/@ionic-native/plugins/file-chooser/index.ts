import { Injectable } from '@angular/core';
import { Plugin, Cordova } from '@ionic-native/core';

/**
 * @name File Chooser
 * @description
 *
 * Opens the file picker on Android for the user to select a file, returns a file URI.
 *
 * @usage
 * ```
 * import { FileChooser } from '@ionic-native/file-chooser';
 *
 * constructor(private fileChooser: FileChooser) { }
 *
 * ...
 *
 * this.fileChooser.open()
 *   .then(uri => console.log(uri))
 *   .catch(e => console.log(e));
 *
 * ```
 */
@Plugin({
  pluginName: 'FileChooser',
  plugin: 'http://github.com/don/cordova-filechooser.git',
  pluginRef: 'fileChooser',
  repo: 'https://github.com/don/cordova-filechooser',
  platforms: ['Android']
})
@Injectable()
export class FileChooser {

  /**
   * Open a file
   * @returns {Promise<string>}
   */
  @Cordova()
  open(): Promise<string> { return; }

}
