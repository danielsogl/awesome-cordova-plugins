import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

export interface PDFGeneratorOptions {
  /**
   * The document size, e.g., A2, A3, or A4.
   * Only supported on iOS.
   * The default is 'A4'.
   */
  documentSize?: string;

  /**
   * Option to change to landscape orientation.
   * Default is 'portrait'.
   */
  landscape?: 'landscape' | 'portrait';

  /**
   * The type to be returned, either 'share' or 'base64'.
   * If 'share is chosen, the PDF is shared with the system capabilities.
   * Default is 'base64'
   */
  type?: string;

  /**
   * The desired filename the resulting PDF should have.
   * Default is 'default.pdf'
   */
  fileName?: string;

  /**
   * Option to set the base URL for pathing.
   * Default is 'null'.
   */
  baseUrl?: string;
}

/**
 * @name PDFGenerator
 * @description
 * Simple plugin to generate (offline) pdf. The plugin transforms HTML to PDF and also provide the mechanism to share the pdf to other apps like Mail, etc.
 * @usage
 * ```typescript
 * import { PDFGenerator } from '@awesome-cordova-plugins/pdf-generator';
 *
 * constructor(private pdfGenerator: PDFGenerator) { }
 *
 * ...
 *
 * this.pdfGenerator.fromURL(url, options).then(base64String => console.log(base64String));
 *
 * ```
 */
@Plugin({
  pluginName: 'PDFGenerator',
  plugin: 'cordova-pdf-generator',
  pluginRef: 'cordova.plugins.pdf',
  repo: 'https://github.com/cesarvr/pdf-generator',
  platforms: ['Android', 'iOS'],
})
@Injectable({
  providedIn: 'root',
})
export class PDFGenerator extends AwesomeCordovaNativePlugin {
  /**
   * Creates a PDF using a URL, it download the document into an in memory Webkit object, and renders it into a PDF.
   *
   * @param url {string} URL to create a PDF from
   * @param options {PDFGeneratorOptions} options for PDF generation
   * @returns {Promise<string>}
   */
  @Cordova({ otherPromise: true })
  fromURL(url: string, options?: PDFGeneratorOptions): Promise<string> {
    return;
  }

  /**
   * Creates a PDF using string with the HTML representation, it download the document into an in memory Webkit object, and renders it into a PDF.
   *
   * @param data {string} HTML string representation to create a PDF from
   * @param options {PDFGeneratorOptions} options for PDF generation
   * @returns {Promise<string>}
   */
  @Cordova({ otherPromise: true })
  fromData(data: string, options?: PDFGeneratorOptions): Promise<string> {
    return;
  }
}
