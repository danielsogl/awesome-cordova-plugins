import {Plugin, Cordova} from './plugin';
import {Observable} from 'rxjs/Observable';

/**
 * @name Bluetooth Serial
 * @description This plugin enables serial communication over Bluetooth. It was written for communicating between Android or iOS and an Arduino.
 * @usage
 */
@Plugin({
  repo: 'https://github.com/don/BluetoothSerial',
  plugin: 'cordova-plugin-bluetooth-serial',
  pluginRef: 'bluetoothSerial',
  platforms: ['Android', 'iOS', 'Windows Phone', 'Browser']
})
export class BluetoothSerial {

  /**
   * Connect to a Bluetooth device
   * Returns an Observable. Subscribe to connect, unsubscribe to disconnect.
   * @param macAddress_or_uuid Identifier of the remote device
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone'],
    observable: true,
    clearFunction: 'disconnect'
  })
  static connect (macAddress_or_uuid: string): Observable<any> {return; }

  /**
   * Connect insecurely to a Bluetooth device
   * Returns an Observable. Subscribe to connect, unsubscribe to disconnect.
   * @param macAddress Identifier of the remote device
   */
  @Cordova({
    platforms: ['Android'],
    observable: true,
    clearFunction: 'disconnect'
  })
  static connectInsecure (macAddress: string): Observable<any> {return; }

  /**
   * Writes data to the serial port
   * @param data ArrayBuffer of data
   * @usage
   * ```ts
   * // Write a string
   * Bluetooth.write("hello world").then(success, failure);
   *
   * // Array of int or bytes
   * Bluetooth.write([186, 220, 222]).then(success, failure);
   *
   * // Typed Array
   * var data = new Uint8Array(4);
   * data[0] = 0x41;
   * data[1] = 0x42;
   * data[2] = 0x43;
   * data[3] = 0x44;
   * Bluetooth.write(data).then(success, failure);
   *
   * // Array Buffer
   * Bluetooth.write(data.buffer).then(success, failure);
   * ```
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone']
  })
  static write (data: any): Promise<any> {return; }

  /**
   * Gets the number of bytes of data available
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone']
  })  static available (): Promise<any> {return; }

  /**
   * Reads data from the buffer
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone']
  })
  static read (): Promise<any> {return; }

  /**
   * Reads data from the buffer until it reaches a delimiter
   * @param delimiter
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone']
  })
  static readUntil (delimiter: string): Promise<any> {return; }

  /**
   * Subscribe to be notified when data is received
   * @param delimiter
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone'],
    observable: true,
    clearFunction: 'unsubscribe'
  })
  static subscribe (delimiter: string): Observable<any> {return; }

  /**
   * Subscribe to be notified when data is received
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone'],
    observable: true,
    clearFunction: 'unsubscribeRawData'
  })
  static subscribeRawData (): Observable<any> {return; }

  /**
   * Clears data in buffer
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone']
  })
  static clear (): Promise<any> {return; }

  /**
   * Lists bonded devices
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone']
  })
  static list (): Promise<any> {return; }

  /**
   * Reports if bluetooth is enabled
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone']
  })
  static isEnabled (): Promise<any> {return; }

  /**
   * Reports the connection status
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone']
  })
  static isConnected (): Promise<any> {return; }

  /**
   * Reads the RSSI from the connected peripheral
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone']
  })
  static readRSSI (): Promise<any> {return; }

  /**
   * Show the Bluetooth settings on the device
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone']
  })
  static showBluetoothSettings (): Promise<any> {return; }

  /**
   * Enable Bluetooth on the device
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone']
  })
  static enable (): Promise<any> {return; }

  /**
   * Discover unpaired devices
   * @usage
   * ```ts
   * [{
   *    "class": 276,
   *    "id": "10:BF:48:CB:00:00",
   *    "address": "10:BF:48:CB:00:00",
   *    "name": "Nexus 7"
   * }, {
   *    "class": 7936,
   *    "id": "00:06:66:4D:00:00",
   *    "address": "00:06:66:4D:00:00",
   *    "name": "RN42"
   * }]
   * ```
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone']
  })
  static discoverUnpaired (): Promise<any> {return; }

  /**
   * Subscribe to be notified on Bluetooth device discovery. Discovery process must be initiated with the `discoverUnpaired` function.
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Windows Phone'],
    observable: true,
    clearFunction: 'clearDeviceDiscoveredListener'
  })
  static setDeviceDiscoveredListener (): Observable<any> {return; }

  /**
   * Sets the human readable device name that is broadcasted to other devices
   * @param newName Desired name of device
   */
  @Cordova({
    platforms: ['Android'],
    sync: true
  })
  static setName (newName: string): void {}

  /**
   * Makes the device discoverable by other devices
   * @param discoverableDuration Desired number of seconds device should be discoverable for
   */
  @Cordova({
    platforms: ['Android'],
    sync: true
  })
  static setDiscoverable (discoverableDuration: number): void {}



}