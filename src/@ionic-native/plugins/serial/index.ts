import { Injectable } from '@angular/core';
import { Plugin, Cordova } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

declare var serial: any;

export interface SerialPermissionOptions {
  vid: string;
  pid: string;
  driver: string;
}

export interface SerialOpenOptions {
  baudRate: number;
}

/**
 * @name Serial
 * @description
 * This plugin provides functions for working with Serial connections
 *
 * @usage
 *
 * ```
 * import { Serial } from '@ionic-native/serial';
 *
 * constructor(private serial: Serial) { }
 *
 * ...
 *
 * this.serial.requestPermission().then(() => {
 *   this.serial.open({
 *     baudRate: 9800
 *   }).then(() => {
 *     console.log('Serial connection opened');
 *   });
 * }).catch((error: any) => console.log(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'Serial',
  plugin: 'cordovarduino',
  pluginRef: 'serial',
  repo: 'https://github.com/xseignard/cordovarduino',
  platforms: ['Android']
})
@Injectable()
export class Serial {

  /**
   * Request permission to connect to a serial device
   *
   * @param options {SerialPermissionOptions} Options used to request serial permissions for an unknown device
   * @return {Promise<any>} Returns a promise that resolves when permissions are granted
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  requestPermission(options?: SerialPermissionOptions): Promise<any> { return; }

  /**
   * Open connection to a serial device
   *
   * @param options {SerialOpenOptions} Options used to open serial connection
   * @return {Promise<any>} Returns a promise that resolves when the serial connection is opened
   */
  @Cordova()
  open(options: SerialOpenOptions): Promise<any> { return; }

  /**
   * Write to a serial connection
   *
   * @param data {any} data to write to the serial connection
   * @return {Promise<any>} Returns a promise that resolves when the write is complete
   */
  @Cordova()
  write(data: any): Promise<any> { return; }

  /**
   * Write hex to a serial connection
   *
   * @param data {any} data to write to the serial connection
   * @return {Promise<any>} Returns a promise that resolves when the write is complete
   */
  @Cordova()
  writeHex(data: any): Promise<any> { return; }

  /**
   * Read from a serial connection
   *
   * @return {Promise<any>} Returns a promise that resolves with data read from the serial connection
   */
  @Cordova()
  read(): Promise<any> { return; }

  /**
   * Watch the incoming data from the serial connection. Clear the watch by unsubscribing from the observable
   *
   * @returns {Observable<any>} Observable returns an observable that you can subscribe to
   */
  @Cordova({
    observable: true
  })
  registerReadCallback(): Observable<any> { return; }

  /**
   * Close the serial connection
   *
   * @return {Promise<any>} Returns a promise that resolves when the serial connection is closed
   */
  @Cordova()
  close(): Promise<any> { return; }

}
