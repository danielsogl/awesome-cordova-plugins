import { Plugin, Cordova } from './plugin';
/**
 * @name FileOpener
 * @description
 * This plugin will open a file on your device file system with its default application.
 *
 * @usage
 * ```
 * import {FileOpener} from 'ionic-native';
 *
 *
 *
 * ```
 */
@Plugin({
  pluginName: 'FileOpener',
  plugin: 'cordova-plugin-file-opener2',
  pluginRef: 'cordova.plugins.fileOpener2',
  repo: 'https://github.com/pwlin/cordova-plugin-file-opener2'
})
export class FileOpener {
  /**
   * Open an file
   * @param filePath {string} File Path
   * @param fileMIMEType {string} File MIME Type
   * @returns {Promise<any>}
   */
  @Cordova({
    callbackStyle: 'object',
    successName: 'success',
    errorName: 'error'
  })
  static open(filePath: string, fileMIMEType: string): Promise<any> {return; }

  /**
   * Uninstalls a package
   * @param packageId {string}  Package ID
   * @returns {Promise<any>}
   */
  @Cordova({
    callbackStyle: 'object',
    successName: 'success',
    errorName: 'error'
  })
  static uninstall(packageId: string): Promise<any> {return; }

  /**
   * Check if an app is already installed
   * @param packageId {string} Package ID
   * @returns {Promise<any>}
   */
  @Cordova({
    callbackStyle: 'object',
    successName: 'success',
    errorName: 'error'
  })
  static appIsInstalled(packageId: string): Promise<any> {return; }
}
