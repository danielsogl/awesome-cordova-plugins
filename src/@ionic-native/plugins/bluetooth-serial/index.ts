import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

/**
 * @name Bluetooth Serial
 * @description This plugin enables serial communication over Bluetooth. It was written for communicating between Android or iOS and an Arduino (not Android to Android or iOS to iOS).
 * @usage
 * ```typescript
 * import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
 *
 * constructor(private bluetoothSerial: BluetoothSerial) { }
 *
 *
 * // Write a string
 * this.bluetoothSerial.write('hello world').then(success, failure);
 *
 * // Array of int or bytes
 * this.bluetoothSerial.write([186, 220, 222]).then(success, failure);
 *
 * // Typed Array
 * var data = new Uint8Array(4);
 * data[0] = 0x41;
 * data[1] = 0x42;
 * data[2] = 0x43;
 * data[3] = 0x44;
 * this.bluetoothSerial.write(data).then(success, failure);
 *
 * // Array Buffer
 * this.bluetoothSerial.write(data.buffer).then(success, failure);
 * ```
 */
@Plugin({
  pluginName: 'BluetoothSerial',
  repo: 'https://github.com/don/BluetoothSerial',
  plugin: 'cordova-plugin-bluetooth-serial',
  pluginRef: 'bluetoothSerial',
  platforms: ['Android', 'iOS', 'Windows Phone 8']
})
@Injectable()
export class BluetoothSerial extends IonicNativePlugin {

  /**
   * Connect to a Bluetooth device
   * @param {string} macAddress_or_uuid Identifier of the remote device
   * @returns {Observable<any>} Subscribe to connect, unsubscribe to disconnect.
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone'],
    observable: true,
    clearFunction: 'disconnect'
  })
  connect(macAddress_or_uuid: string): Observable<any> { return; }

  /**
   * Connect insecurely to a Bluetooth device
   * @param {string} macAddress Identifier of the remote device
   * @returns {Observable<any>} Subscribe to connect, unsubscribe to disconnect.
   */
  @Cordova({
    platforms: ['Android'],
    observable: true,
    clearFunction: 'disconnect'
  })
  connectInsecure(macAddress: string): Observable<any> { return; }

  /**
   * Disconnect from the connected device
   * @returns {Promise<any>}
   */
  @Cordova()
  disconnect(): Promise<any> { return; }

  /**
   * Writes data to the serial port
   * @param {any} data ArrayBuffer of data
   * @returns {Promise<any>} returns a promise when data has been written
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone']
  })
  write(data: any): Promise<any> { return; }

  /**
   * Gets the number of bytes of data available
   * @returns {Promise<any>} returns a promise that contains the available bytes
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone']
  }) available(): Promise<any> { return; }

  /**
   * Reads data from the buffer
   * @returns {Promise<any>} returns a promise with data from the buffer
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone']
  })
  read(): Promise<any> { return; }

  /**
   * Reads data from the buffer until it reaches a delimiter
   * @param {string} delimiter string that you want to search until
   * @returns {Promise<any>} returns a promise
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone']
  })
  readUntil(delimiter: string): Promise<any> { return; }

  /**
   * Subscribe to be notified when data is received
   * @param {string} delimiter the string you want to watch for
   * @returns {Observable<any>} returns an observable.
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone'],
    observable: true,
    clearFunction: 'unsubscribe'
  })
  subscribe(delimiter: string): Observable<any> { return; }

  /**
   * Subscribe to be notified when data is received
   * @returns {Observable<any>} returns an observable
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone'],
    observable: true,
    clearFunction: 'unsubscribeRawData'
  })
  subscribeRawData(): Observable<any> { return; }

  /**
   * Clears data in buffer
   * @returns {Promise<any>} returns a promise when completed
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone']
  })
  clear(): Promise<any> { return; }

  /**
   * Lists bonded devices
   * @returns {Promise<any>} returns a promise
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone']
  })
  list(): Promise<any> { return; }

  /**
   * Reports if bluetooth is enabled
   * @returns {Promise<any>} returns a promise
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone']
  })
  isEnabled(): Promise<any> { return; }

  /**
   * Reports the connection status
   * @returns {Promise<any>} returns a promise
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone']
  })
  isConnected(): Promise<any> { return; }

  /**
   * Reads the RSSI from the connected peripheral
   * @returns {Promise<any>} returns a promise
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone']
  })
  readRSSI(): Promise<any> { return; }

  /**
   * Show the Bluetooth settings on the device
   * @returns {Promise<any>} returns a promise
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone']
  })
  showBluetoothSettings(): Promise<any> { return; }

  /**
   * Enable Bluetooth on the device
   * @returns {Promise<any>} returns a promise
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone']
  })
  enable(): Promise<any> { return; }

  /**
   * Discover unpaired devices
   * @returns {Promise<any>} returns a promise
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone']
  })
  discoverUnpaired(): Promise<any> { return; }

  /**
   * Subscribe to be notified on Bluetooth device discovery. Discovery process must be initiated with the `discoverUnpaired` function.
   * @returns {Observable<any>} Returns an observable
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone'],
    observable: true,
    clearFunction: 'clearDeviceDiscoveredListener'
  })
  setDeviceDiscoveredListener(): Observable<any> { return; }

  /**
   * Sets the human readable device name that is broadcasted to other devices
   * @param {string} newName Desired name of device
   */
  @Cordova({
    platforms: ['Android'],
    sync: true
  })
  setName(newName: string): void { }

  /**
   * Makes the device discoverable by other devices
   * @param {number} discoverableDuration Desired number of seconds device should be discoverable for
   */
  @Cordova({
    platforms: ['Android'],
    sync: true
  })
  setDiscoverable(discoverableDuration: number): void { }

}
