import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Preview Any File
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { PreviewAnyFile } from '@ionic-native/preview-any-file';
 *
 *
 * constructor(private previewAnyFile: PreviewAnyFile) { }
 *
 * ...
 *
 *
 * this.previewAnyFile.preview('file://filepath.ext')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'PreviewAnyFile',
  plugin: 'cordova-plugin-preview-any-file', // npm package name, example: cordova-plugin-camera
  pluginRef: 'PreviewAnyFile', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/mostafa-mansour1/previewAnyFile', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android', 'iOS'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class PreviewAnyFile extends IonicNativePlugin {
  /**
   * This function does something
   * @param url {string} full absolute URL for the file
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  preview(url: string): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
}
