import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name Genius Scan
 * @description
 * Plugin allows you to access the Genius Scan SDK core features from a Ionic application
 * @usage
 *
 * ```typescript
 * import { GeniusScan } from '@awesome-cordova-plugins/genius-scan/ngx';
 *
 * ...
 *
 * constructor(private geniusScan: GeniusScan, private platform: Platform) { }
 *
 * ...
 *
 * this.platform.ready().then(() => {
 *   this.geniusScan.setLicenseKey('YOUR_KEY', true)
 *   .then(() => {
 *      this.geniusScan.scanWithConfiguration(configuration)
 *   })
 *   .catch(e => console.log('Error starting GeniusScan', e));
 * });
 *
 * ```
 */
@Plugin({
  pluginName: 'GeniusScan',
  plugin: '@thegrizzlylabs/cordova-plugin-genius-scan',
  pluginRef: 'cordova.plugins.GeniusScan',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class GeniusScan extends AwesomeCordovaNativePlugin {
  @Cordova()
  setLicenseKey(licenseKey: string, autoRefresh: boolean): Promise<any> {
    return;
  }

  @Cordova()
  scanWithConfiguration(configuration: ScanConfiguration): Promise<SuccessScanResult> {
    return;
  }

  @Cordova()
  generateDocument(document: GenerateDocumentPages, configuration: GenerateDocumentConfiguration): Promise<any> {
    return;
  }
}

interface ScanConfiguration {
  /**
   * (defaults to camera)
   */
  source?: 'camera' | 'image' | 'library';

  /**
   * An absolute image url, required if source is image. Example: file:///var/…/image.png
   */
  sourceImageUrl?: string;

  /**
   * If true, after a page is scanned, a prompt to scan another page will be displayed.
   * If false, a single page will be scanned.
   * (defaults to true).
   */
  multiPage?: boolean;

  /**
   * (defaults to pdf)
   */
  multiPageFormat?: 'pdf' | 'tiff' | 'none';

  /**
   *  (by default, the filter is chosen automatically)
   */
  defaultFilter?: 'none' | 'blackAndWhite' | 'monochrome' | 'color' | 'photo';

  /**
   * defaults to fit
   */
  pdfPageSize?: 'fit' | 'a4' | 'letter';

  /**
   * max dimension in pixels when images are scaled before PDF generation,
   * for example 2000 to fit both height and width within 2000px.
   * Defaults to 0, which means no scaling is performed.
   */
  pdfMaxScanDimension?: number;

  /**
   * Custom font file used during the PDF generation to embed an invisible text layer.
   * If null, a default font is used, which only supports Latin languages.
   */
  pdfFontFileUrl?: string;

  /**
   * JPEG quality used to compress captured images.
   * Between 0 and 100, 100 being the best quality.
   * Default is 60.
   */
  jpegQuality?: number;

  /**
   * an array with the desired actions to display during the post processing screen
   * (defaults to all actions).
   */
  postProcessingActions?: ('rotate' | 'editFilter' | 'correctDistortion')[];

  /**
   * (default to false)
   */
  flashButtonHidden?: boolean;

  /**
   * (default to off)
   */
  defaultFlashMode?: 'auto' | 'on' | 'off';

  /**
   * representing a color, must start with a #. The color of the icons, text
   * (defaults to '#ffffff')
   */
  foregroundColor?: string;

  /**
   * representing a color, must start with a #. The color of the toolbar, screen background
   * (defaults to black)
   */
  backgroundColor?: string;

  /**
   * representing a color, must start with a #. The color of the image overlays
   * (default to blue)
   */
  highlightColor?: string;

  /**
   * representing a color, must start with a #. The color of the menus
   * (defaults to system defaults.)
   */
  menuColor?: string;

  /**
   * text recognition options. Text recognition will run on a background thread for every captured image. No text recognition will be applied if this parameter is not present.
   */
  ocrConfiguration?: {
    /**
     * list of BCP 47 language tags (eg ["en-US"]) for which to run text recognition.
     * Note that text recognition will take longer if multiple languages are specified.
     */
    languages: string[];

    /**
     * an array with the formats in which the OCR result is made available in the ScanFlow result
     * (defaults to all formats).
     * Possible formats are rawText, hOCR and textLayerInPDF.
     */
    outputFormats?: ('rawText' | 'hOCR' | 'textLayerInPDF')[];
  };
}

interface SuccessScanResult {
  /**
   * a document containing all the scanned pages (example: "file://.pdf")
   */
  multiPageDocumentUrl: string;

  /**
   * an array of scan objects.
   */
  scans: {
    /**
     * the original file as scanned from the camera. "file://.jpeg"
     */
    originalUrl: string;

    /**
     * the cropped and enhanced file, as processed by the SDK. "file://.{jpeg|png}"
     */
    enhancedUrl: string;

    /**
     * the result of text recognition for this scan
     */
    ocrResult: {
      /**
       * the raw text that was recognized
       */
      text: string;

      /**
       * the recognized text in hOCR format (with position, style…)
       */
      hocrTextLayout: string;
    };
  }[];
}

interface GenerateDocumentPages {
  pages: {
    /**
     * the URL of the image file for this page, e.g. file://<filepath>.{jpeg|png}
     */
    imageUrl: string;

    /**
     * the text layout in hOCR format
     */
    hocrTextLayout: string;
  }[];
}

interface GenerateDocumentConfiguration {
  /**
   * the URL where the document should be generated, e.g. file://<filepath>.pdf
   */
  outputFileUrl: string;

  /**
   * Custom font file used during the PDF generation to embed an invisible text layer.
   * If null, a default font is used, which only supports Latin languages.
   */
  pdfFontFileUrl?: string;
}
