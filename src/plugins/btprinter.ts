import { Plugin, Cordova} from './plugin';

/**
 * @name BTPrinter
 * @description
 * this plugin print data on your Bluetooth device. It works only on Android.
 *
 * @usage
 * ```
 * import { BTPrinter } from 'ionic-native';
 *
 * BTPrinter.list()
 *   .then((printer: any) => {
 *		BTPrinter.connect(printer[0]).then(data => {
 *	    // print line feed
 *			BTPrinter.printPOSCommand({'0A'})
 *      }).catch((error: any => console.log(error)))
 *	 })
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'BTPrinter',
  plugin: 'https://github.com/srehanuddin/Cordova-Plugin-Bluetooth-Printer',
  pluginRef: 'BTPrinter',
  repo: 'https://github.com/srehanuddin/Cordova-Plugin-Bluetooth-Printer'
})
export class BTPrinter {

  /**
   * Connect to a Bluetooth device
   * @param {Function} fnSuccess Callback Success
   * @param {Function} fnError Callback Failed
   * @param {string} name remote device name (you will get from .list
   * @returns {Promise<any>} returns a promise when device is connected
   */
  @Cordova()
  static connect(fnSuccess: Function, fnError: Function, name: string): void { return; }

  /**
   * Disconnect from a Bluetooth device
   * @param {Function} fnSuccess Callback Success
   * @param {Function} fnError Callback Failed
   * @returns {Promise<any>} returns a promise when device is disconnected
   */
  @Cordova()
  static disconnect(fnSuccess?: Function, fnError?: Function): void { return; }

  /**
   * list all remote devices
   * @param {Function} fnSuccess Callback Success
   * @param {Function} fnError Callback Failed
   * @returns {Promise<any>} list of remote devices
   */
  @Cordova()
  static list(fnSuccess?: Function, fnError?: Function): void { return; }

  /**
   * write data to the remote device
   * @param {Function} fnSuccess Callback Success
   * @param {Function} fnError Callback Failed
   * @param {str} str (in byte)
   * @returns void
   */
  @Cordova()
  static print(fnSuccess: Function, fnError: Function, str: string): void { return; }

  /**
   * write text to the remote device
   * @param {Function} fnSuccess Callback Success
   * @param {Function} fnError Callback Failed
   * @param {str} str (in byte)
   * @returns void
   */
  @Cordova()
  static printText(fnSuccess: Function, fnError: Function, str: string): void { return; }

  /**
   * write image to the remote device
   * @param {Function} fnSuccess Callback Success
   * @param {Function} fnError Callback Failed
   * @param {str} str (in byte)
   * @returns void
   */
  @Cordova()
  static printImage(fnSuccess: Function, fnError: Function, str: string): void { return; }

  /**
   * write pos command to the remote device
   * @param {Function} fnSuccess Callback Success
   * @param {Function} fnError Callback Failed
   * @param {string} str (in byte)
   * @returns void
   */
  @Cordova()
  static printPOSCommand(fnSuccess: Function, fnError: Function, str: string): void { return; }

}
