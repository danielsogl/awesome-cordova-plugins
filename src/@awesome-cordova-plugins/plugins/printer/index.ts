import { Injectable } from '@angular/core';
import { Cordova, CordovaCheck, AwesomeCordovaNativePlugin, Plugin, getPromise } from '@awesome-cordova-plugins/core';

interface FontOptions {
  name: string; // The name of the font family. Only supported on iOS
  size: number; // The size of the font. Only supported on iOS, Android
  italic: boolean; // Set to true to enable these font traits. Only supported on iOS
  bold: boolean; // Set to true to enable these font traits. Only supported on iOS
  align: 'left' | 'right' | 'center' | 'justified'; // Possible alignments are left, right, center and justified. Only supported on iOS
  color: string; // The color of the font in hexa-decimal RGB format - "FF0000" means red. Only supported on iOS
}

interface HeaderFooterLabelOptions {
  text: string; // The plain text to display. Use %ld to indicate where to insert the page index. For example "Page %ld" would result into "Page 1", "Page 2", .... Only supported on iOS
  top: string; // The relative position where to place the label within the footer or header area. Only supported on iOS
  right: string; // The relative position where to place the label within the footer or header area. Only supported on iOS
  left: string; // The relative position where to place the label within the footer or header area. Only supported on iOS
  bottom: string; // The relative position where to place the label within the footer or header area. Only supported on iOS
  font: FontOptions; // The font attributes for the label. Only supported on iOS
  showPageIndex: boolean; // Set to true if you want to display the page index. Only supported on iOS
}

export interface PrintOptions {
  /**
   * The name of the print job and the document
   */
  name?: string;

  /**
   * The number of copies for the print task.
   * Only supported on iOS, Windows
   */
  copies?: number;

  /**
   * Limits the pages to print even the document contains more.
   * To skip the last n pages you can assign a negative value on iOS.
   * Only supported on iOS, Android
   */
  pageCount?: number;

  /**
   * Specifies the duplex mode to use for the print job.
   * Either double-sided on short site (duplex:'short'),
   * double-sided on long site (duplex:'long') or single-sided (duplex:'none').
   */
  duplex?: boolean;

  /**
   * The orientation of the printed content, portrait or landscape
   * Portrait by default.
   */
  orientation?: 'landscape' | 'portrait';

  /**
   * If your application only prints black text, setting this property to true can result in better performance in many cases.
   * False by default.
   */
  monochrome?: boolean;

  /**
   * If your application only prints black text, setting this property to true can result in better performance in many cases.
   * False by default.
   * Only supported on iOS, Windows
   */
  photo?: boolean;

  /**
   * Set to false to disable downscaling the image to fit into the content aread.
   * Only supported on Android
   */
  autoFit?: boolean;

  /**
   * The network URL to the printer.
   * Only supported on iOS
   */
  printer?: string;

  /**
   * Defines the maximum size of the content area.
   * Only supported on iOS
   */
  maxHeight?: string;

  /**
   * Defines the maximum size of the content area.
   * Only supported on iOS
   */
  maxWidth?: string;

  /**
   * Set to false to avoid margins.
   * The margins for each printed page. Each printer might have its own minimum margins depends on media type and paper format.
   */
  margin?:
    | boolean
    | {
        top?: string;
        left?: string;
        right?: string;
        bottom?: string;
      };

  ui?: {
    hideNumberOfCopies?: string; // Set to true to hide the control for the number of copies. Only supported on iOS
    hidePaperFormat?: string; // Set to true to hide the control for the paper format. Only supported on iOS
    top?: number; // The position of the printer picker. Only supported on iPad
    left?: number; // The position of the printer picker. Only supported on iPad
    height?: number; // The size of the printer picker. Only supported on iPad
    width?: number; // The size of the printer picker. Only supported on iPad
  };

  paper?: {
    width: string; // The dimensions of the paper – iOS will will try to choose a format which fits bests. Only supported on iOS
    height: string; // The dimensions of the paper – iOS will will try to choose a format which fits bests. Only supported on iOS
    name: string; // The name of the format like IsoA4 or Roll22Inch. https://docs.microsoft.com/en-us/uwp/api/windows.graphics.printing.printmediasize. Only supported on Windows
    length: string; // On roll-fed printers you can decide when the printer cuts the paper. https://docs.microsoft.com/en-us/uwp/api/windows.graphics.printing.printmediasize. Only supported on iOs
  };

  font?: FontOptions;

  header?: {
    height: string; // The height of the header or footer on each page. Only supported on iOS
    labels: string[]; // An array of labels to display. Only use if there are more then one. Only supported on iOS
    label: HeaderFooterLabelOptions;
  };

  footer?: {
    height: string; // The height of the header or footer on each page. Only supported on iOS
    labels: string[]; // An array of labels to display. Only use if there are more then one. Only supported on iOS
    label: HeaderFooterLabelOptions;
  };
}

/**
 * @name Printer
 * @description Prints documents or HTML rendered content
 * @usage
 * ```typescript
 * import { Printer, PrintOptions } from '@awesome-cordova-plugins/printer/ngx';
 *
 * constructor(private printer: Printer) { }
 *
 * ...
 *
 * this.printer.isAvailable().then(onSuccess, onError);
 *
 * let options: PrintOptions = {
 *      name: 'MyDocument',
 *      duplex: true,
 *      orientation: 'landscape',
 *      monochrome: true
 * }
 *
 * this.printer.print(content, options).then(onSuccess, onError);
 * ```
 * @interfaces
 * PrintOptions
 */
@Plugin({
  pluginName: 'Printer',
  plugin: 'cordova-plugin-printer',
  pluginRef: 'cordova.plugins.printer',
  repo: 'https://github.com/katzer/cordova-plugin-printer',
  platforms: ['Android', 'iOS', 'Windows'],
})
@Injectable()
export class Printer extends AwesomeCordovaNativePlugin {
  /**
   * Checks whether the device is capable of printing (uses `check()` internally)
   *
   * @returns {Promise<boolean>}
   */
  isAvailable(): Promise<boolean> {
    return this.check().then((res: any) => Promise.resolve(res.avail));
  }

  /**
   * Checks To check if printing is supported in general
   *
   * @returns {Promise<any>} returns a promise that resolve with an object indicating whether printing is available
   */
  @CordovaCheck()
  check(): Promise<any> {
    return getPromise<any>((resolve: Function) => {
      Printer.getPlugin().canPrintItem((avail: boolean, count: any) => {
        resolve({ avail, count });
      });
    });
  }

  /**
   * Displays a system interface allowing the user to select an available printer. To speak with a printer directly you need to know the network address by picking them before via `printer.pick`.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  pick(): Promise<any> {
    return;
  }

  /**
   * Sends content to the printer.
   *
   * @param content {string | HTMLElement} The content to print. Can be a URL or an HTML string. If a HTML DOM Object is provided, its innerHtml property value will be used.
   * @param options {PrintOptions} optional. The options to pass to the printer
   * @returns {Promise<any>}
   */
  @Cordova({
    successIndex: 2,
    errorIndex: 4,
  })
  print(content?: string | HTMLElement, options?: PrintOptions): Promise<any> {
    return;
  }
}
