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
 * import {Printer, PrintOptions} from 'ionic-native';
 *
 * Printer.isAvailable().then(onSuccess, onError);
 *
 * let options: PrintOptions = {
 *      name: 'MyDocument',
 *      printerId: 'printer007',
 *      duplex: true,
 *      landscape: true,
 *      grayscale: true
 *    };
 *
 * Printer.print(content, options).then(onSuccess, onError);
 * ```
 */
export declare class Printer {
    /**
     * Checks whether to device is capable of printing.
     */
    static isAvailable(): Promise<boolean>;
    /**
     * Sends content to the printer.
     * @param {content} The content to print. Can be a URL or an HTML string. If a HTML DOM Object is provided, its innerHtml property value will be used.
     * @param {options} The options to pass to the printer
     */
    static print(content: string | HTMLElement, options?: PrintOptions): Promise<any>;
}
