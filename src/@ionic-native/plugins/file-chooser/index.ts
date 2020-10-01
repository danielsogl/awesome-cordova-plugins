import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export interface FileChooserOptions {
  /**
   * comma seperated mime types to filter files.
   */
  mime: string;
}

/**
 * @name File Chooser
 * @description
 *
 * Opens the file picker on Android for the user to select a file, returns a file URI.
 *
 * @usage
 * ```typescript
 * import { FileChooser } from '@ionic-native/file-chooser/ngx';
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
 * @interfaces
 * FileChooserOptions
 */
@Plugin({
  pluginName: 'FileChooser',
  plugin: 'cordova-plugin-filechooser',
  pluginRef: 'fileChooser',
  repo: 'https://github.com/ihadeed/cordova-filechooser',
  platforms: ['Android'],
})
@Injectable()
export class FileChooser extends IonicNativePlugin {
  /**
   * Open a file
   * @param {FileChooserOptions} [options]  Optional parameter, defaults to ''. Filters the file selection list according to mime types
   * @returns {Promise<string>}
   */
  @Cordova()
  open(options?: FileChooserOptions): Promise<string> {
    return;
  }
}
