import { Injectable } from '@angular/core';
import { Cordova, Plugin } from '@ionic-native/core';


declare var cordova: any;

export interface PrintOptions {
  /**
   * The name of the print job and the document
   */
  name?: string;

  /**
   * The network URL of the printer.
   * Only supported on iOS.
   */
  printerId?: string;

  /**
   * Specifies the duplex mode to use for the print job.
   * Either double-sided (duplex:true) or single-sided (duplex:false).
   * Double-sided by default.
   * Only supported on iOS
   */
  duplex?: boolean;

  /**
   * The orientation of the printed content, portrait or landscape
   * Portrait by default.
   */
  landscape?: boolean;

  /**
   * If your application only prints black text, setting this property to true can result in better performance in many cases.
   * False by default.
   */
  grayscale?: boolean;

  /**
   * The Size and position of the print view
   */
  bounds?: number[] | any;
}
/**
 * @name Printer
 * @description Prints documents or HTML rendered content
 * @usage
 * ```typescript
 * import { Printer, PrintOptions } from '@ionic-native/printer';
 *
 * constructor(private printer: Printer) { }
 *
 * ...
 *
 * this.printer.isAvailable().then(onSuccess, onError);
 *
 * let options: PrintOptions = {
 *      name: 'MyDocument',
 *      printerId: 'printer007',
 *      duplex: true,
 *      landscape: true,
 *      grayscale: true
 *    };
 *
 * this.p.print(content, options).then(onSuccess, onError);
 * ```
 * @interfaces
 * PrintOptions
 */
@Plugin({
  pluginName: 'Printer',
  plugin: 'de.appplant.cordova.plugin.printer',
  pluginRef: 'cordova.plugins.printer',
  repo: 'https://github.com/katzer/cordova-plugin-printer.git',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class Printer {

  /**
   * Checks whether to device is capable of printing.
   * @returns {Promise<boolean>}
   */
  @Cordova()
  isAvailable(): Promise<boolean> { return; }

  /**
   * Sends content to the printer.
   * @param content {string | HTMLElement} The content to print. Can be a URL or an HTML string. If a HTML DOM Object is provided, its innerHtml property value will be used.
   * @param options {PrintOptions} optional. The options to pass to the printer
   * @returns {Promise<any>}
   */
  @Cordova()
  print(content: string | HTMLElement, options?: PrintOptions): Promise<any> { return; }

}
