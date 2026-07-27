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
  scanWithConfiguration(configuration?: ScanConfiguration): Promise<SuccessScanResult> {
    return;
  }

  /**
   * Starts the barcode scanner module.
   */
  @Cordova()
  scanBarcodesWithConfiguration(configuration?: BarcodeConfiguration): Promise<BarcodeResult> {
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
   * The filter that will be applied by default to enhance scans, or 'none' if no
   * enhancement should be performed by default. Possible values include 'automatic',
   * 'automaticColor', 'automaticBlackAndWhite', 'automaticMonochrome', 'photo',
   * 'softBlackAndWhite', 'softColor', 'strongMonochrome', 'strongBlackAndWhite',
   * 'strongColor', 'darkBackground' and 'none' (defaults to 'automatic').
   */
  defaultFilter?: string;

  /**
   * an array of filters that the user can select when they tap on the edit filter button.
   * Defaults to ['none', 'automatic', 'automaticMonochrome', 'automaticBlackAndWhite', 'automaticColor', 'photo'].
   */
  availableFilters?: string[];

  /**
   * defaults to fit
   */
  pdfPageSize?: 'fit' | 'a4' | 'letter';

  /**
   * Optional password used to protect generated PDF documents. Empty passwords are
   * treated as no password. Only applies when multiPageFormat is 'pdf'.
   */
  pdfPassword?: string;

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
   * Whether to skip showing the post-processing screen. Only recommended when
   * scanning structured data; generally the user should visually confirm each scan.
   */
  skipPostProcessingScreen?: boolean;

  /**
   * an array with the desired actions to display during the post processing screen
   * (defaults to all actions).
   */
  postProcessingActions?: ('rotate' | 'editFilter' | 'correctDistortion')[];

  /**
   * whether a curvature correction should be applied by default (defaults to 'disabled').
   */
  defaultCurvatureCorrection?: 'enabled' | 'disabled';

  /**
   * automatically show crop validation after capture. 'never', 'always', or an object
   * with a confidence threshold below which validation should be shown.
   */
  showCropValidation?:
    'never' | 'always' | { whenConfidenceBelowOrEqual: 'lowest' | 'low' | 'medium' | 'high' | 'highest' };

  /**
   * 'automatic' to rotate scan automatically after capture or 'original' to keep the
   * original scan orientation (defaults to 'automatic').
   */
  defaultScanOrientation?: 'automatic' | 'original';

  /**
   * whether the button allowing the user to pick an image on the Camera screen
   * should be hidden (defaults to false).
   */
  photoLibraryButtonHidden?: boolean;

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

  /**
   * an array of the structured data you want to extract. E.g.: ['receipt', 'businessCard'].
   * Possible values are 'receipt', 'barcode', 'bankDetails' (iOS only), 'businessCard' (iOS only).
   */
  structuredData?: string[];

  /**
   * an array of the barcode types to extract, e.g. ['qr', 'code39']. Possible values are
   * 'aztec', 'code39', 'code93', 'code128', 'dataMatrix', 'ean8', 'ean13', 'itf', 'pdf417',
   * 'qr', 'upca' (Android only), 'upce', 'codabar' (iOS 15+ only), 'gs1DataBar' (iOS 15+ only),
   * 'microPDF417' (iOS 15+ only), 'microQR' (iOS 15+ only), 'msiPlessey' (iOS 17+ only).
   */
  structuredDataBarcodeTypes?: string[];

  /**
   * the required readability level below which a warning will be displayed to the user
   * (defaults to 'lowest', which means the warning will never be displayed).
   */
  requiredReadabilityLevel?: 'lowest' | 'low' | 'medium' | 'high' | 'highest';

  /**
   * whether the final review screen should be displayed before submission (default to false).
   */
  showFinalReview?: boolean;
}

interface BarcodeConfiguration {
  /**
   * whether the barcode scanner should keep scanning and accumulating results after
   * detecting a first barcode.
   */
  isBatchModeEnabled?: boolean;

  /**
   * an array of the barcode types to detect. Defaults to all supported types.
   */
  supportedCodeTypes?: string[];
}

interface BarcodeResult {
  /**
   * an array of the detected barcodes.
   */
  barcodes: {
    /**
     * the decoded value of the barcode.
     */
    value: string;

    /**
     * the type of the barcode, e.g. 'qr', 'code128'.
     */
    type: string;
  }[];
}

interface SuccessScanResult {
  /**
   * a document containing all the scanned pages (example: "file://.pdf")
   */
  multiPageDocumentUrl?: string;

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
     * the result of text recognition for this scan, present when ocrConfiguration was set.
     */
    ocrResult?: {
      /**
       * the raw text that was recognized
       */
      text: string;

      /**
       * the recognized text in hOCR format (with position, style…)
       */
      hocrTextLayout?: string;
    };

    /**
     * the result of the structured data extraction, present when structuredData was set.
     * A subdictionary is present for each type of structured data detected.
     */
    structuredData?: any;
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
    hocrTextLayout?: string;
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
