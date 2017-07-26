import { Injectable } from '@angular/core';
import { Cordova, CordovaCheck, Plugin, IonicNativePlugin } from '@ionic-native/core';

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
 * this.printer.print(content, options).then(onSuccess, onError);
 * ```
 * @interfaces
 * PrintOptions
 */
@Plugin({
  pluginName: 'Printer',
  plugin: 'de.appplant.cordova.plugin.printer',
  pluginRef: 'cordova.plugins.printer',
  repo: 'https://github.com/katzer/cordova-plugin-printer',
  platforms: ['Android', 'iOS', 'Windows']
})
@Injectable()
export class Printer extends IonicNativePlugin {

  /**
   * Checks whether the device is capable of printing (uses `check()` internally)
   * @returns {Promise<boolean>}
   */
  isAvailable(): Promise<boolean> {
    return this.check()
      .then((res: any) => Promise.resolve(res.avail));
  }

  /**
   * Checks if the printer service is available (iOS) or if printer services are installed and enabled (Android).
   * @return {Promise<any>} returns a promise that resolve with an object indicating whether printing is available, and providing the number of printers available
   */
  @CordovaCheck()
  check(): Promise<any> {
    return new Promise<any>((resolve: Function) => {
      Printer.getPlugin()
        .check((avail: boolean, count: any) => {
          resolve({ avail, count });
        });
    });
  }

  /**
   * Displays a system interface allowing the user to select an available printer. To speak with a printer directly you need to know the network address by picking them before via `printer.pick`.
   * @returns {Promise<any>}
   */
  @Cordova()
  pick(): Promise<any> { return; }

  /**
   * Sends content to the printer.
   * @param content {string | HTMLElement} The content to print. Can be a URL or an HTML string. If a HTML DOM Object is provided, its innerHtml property value will be used.
   * @param options {PrintOptions} optional. The options to pass to the printer
   * @returns {Promise<any>}
   */
  @Cordova({
    successIndex: 2,
    errorIndex: 4
  })
  print(content: string | HTMLElement, options?: PrintOptions): Promise<any> { return; }

}
