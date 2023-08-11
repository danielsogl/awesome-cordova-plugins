import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name SaveDialog
 * @description
 * Plugin displays the native Save dialog which allows users to store a file in the selected location.
 * @usage
 * ```typescript
 * import { SaveDialog } from '@awesome-cordova-plugins/save-dialog';
 *
 * constructor(private saveDialog: SaveDialog) { }
 *
 * ...
 *
 * this.saveDialog.saveFile(blob, fileName);
 *
 * ```
 */
@Plugin({
  pluginName: 'SaveDialog',
  plugin: 'cordova-plugin-save-dialog',
  pluginRef: 'SaveDialog',
  repo: 'https://github.com/Amphiluke/cordova-plugin-save-dialog',
  platforms: ['Android', 'iOS'],
})
@Injectable({
  providedIn: 'root',
})
export class SaveDialog extends AwesomeCordovaNativePlugin {
  /**
   * Creates a PDF using a URL, it download the document into an in memory Webkit object, and renders it into a PDF.
   *
   * @param url {string} URL to create a PDF from
   * @param options {PDFGeneratorOptions} options for PDF generation
   * @returns {Promise<string>}
   */
  @Cordova({ otherPromise: true })
  saveFile(blob: Blob, fileName?: string): Promise<string> {
    return;
  }
}
