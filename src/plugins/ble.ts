import {Plugin, Cordova} from './plugin';
import {Observable} from 'rxjs/Observable';

/**
 * This plugin enables communication between a phone and Bluetooth Low Energy (BLE) peripherals.
 *
 * The plugin provides a simple JavaScript API for iOS and Android.
 *
 * - Scan for peripherals
 * - Connect to a peripheral
 * - Read the value of a characteristic
 * - Write new value to a characteristic
 * - Get notified when characteristic's value changes
 *
 * Advertising information is returned when scanning for peripherals. Service, characteristic, and property info is returned when connecting to a peripheral. All access is via service and characteristic UUIDs. The plugin manages handles internally.
 *
 * Simultaneous connections to multiple peripherals are supported.
 *
 * ## Peripheral Data
 *
 * Peripheral Data is passed to the success callback when scanning and connecting. Limited data is passed when scanning.
 * ```
 *   {
 *       "name": "Battery Demo",
 *       "id": "20:FF:D0:FF:D1:C0",
 *       "advertising": [2,1,6,3,3,15,24,8,9,66,97,116,116,101,114,121],
 *       "rssi": -55
 *   }
 * ```
 * After connecting, the peripheral object also includes service, characteristic and descriptor information.
 * ```
 *   {
 *       "name": "Battery Demo",
 *       "id": "20:FF:D0:FF:D1:C0",
 *       "advertising": [2,1,6,3,3,15,24,8,9,66,97,116,116,101,114,121],
 *       "rssi": -55,
 *       "services": [
 *           "1800",
 *           "1801",
 *           "180f"
 *       ],
 *       "characteristics": [
 *           {
 *               "service": "1800",
 *               "characteristic": "2a00",
 *               "properties": [
 *                   "Read"
 *               ]
 *           },
 *           {
 *               "service": "1800",
 *               "characteristic": "2a01",
 *               "properties": [
 *                   "Read"
 *               ]
 *           },
 *           {
 *               "service": "1801",
 *               "characteristic": "2a05",
 *               "properties": [
 *                   "Read"
 *               ]
 *           },
 *           {
 *               "service": "180f",
 *               "characteristic": "2a19",
 *               "properties": [
 *                   "Read"
 *               ],
 *               "descriptors": [
 *                   {
 *                       "uuid": "2901"
 *                   },
 *                   {
 *                       "uuid": "2904"
 *                   }
 *               ]
 *           }
 *       ]
 *   }
 * ```
 *
 * ## Advertising Data
 * Bluetooth advertising data is returned in when scanning for devices. The format format varies depending on your platform. On Android advertising data will be the raw advertising bytes. iOS does not allow access to raw advertising data, so a dictionary of data is returned.
 *
 * The advertising information for both Android and iOS appears to be a combination of advertising data and scan response data.
 *
 * ### Android
 * ```
 *   {
 *       "name": "demo",
 *       "id": "00:1A:7D:DA:71:13",
 *       "advertising": ArrayBuffer,
 *      "rssi": -37
 *  }
 * ```
 *
 * Convert the advertising info to a Uint8Array for processing. `var adData = new Uint8Array(peripheral.advertising)`
 *
 * ### iOS
 *
 * Note that iOS uses the string value of the constants for the [Advertisement Data Retrieval Keys](https://developer.apple.com/library/ios/documentation/CoreBluetooth/Reference/CBCentralManagerDelegate_Protocol/index.html#//apple_ref/doc/constant_group/Advertisement_Data_Retrieval_Keys). This will likely change in the future.
 * ```
 *   {
 *       "name": "demo",
 *       "id": "D8479A4F-7517-BCD3-91B5-3302B2F81802",
 *       "advertising": {
 *           "kCBAdvDataChannel": 37,
 *           "kCBAdvDataServiceData": {
 *               "FED8": {
 *                   "byteLength": 7 // data not shown
 *               }
 *           },
 *           "kCBAdvDataLocalName": "demo",
 *           "kCBAdvDataServiceUUIDs": ["FED8"],
 *           "kCBAdvDataManufacturerData": {
 *               "byteLength": 7  // data not shown
 *           },
 *           "kCBAdvDataTxPowerLevel": 32,
 *           "kCBAdvDataIsConnectable": true
 *       },
 *       "rssi": -53
 *   }
 * ```
 *
 * ## Typed Arrays
 *
 * This plugin uses typed Arrays or ArrayBuffers for sending and receiving data.
 *
 * This means that you need convert your data to ArrayBuffers before sending and from ArrayBuffers when receiving.
 * ```
 *   // ASCII only
 *   function stringToBytes(string) {
 *      var array = new Uint8Array(string.length);
 *      for (var i = 0, l = string.length; i < l; i++) {
 *          array[i] = string.charCodeAt(i);
 *       }
 *       return array.buffer;
 *   }
 *
 *   // ASCII only
 *   function bytesToString(buffer) {
 *       return String.fromCharCode.apply(null, new Uint8Array(buffer));
 *   }
 * ```
 * You can read more about typed arrays in these articles on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) and [HTML5 Rocks](http://www.html5rocks.com/en/tutorials/webgl/typed_arrays/).
 *
 * ## UUIDs
 *
 * UUIDs are always strings and not numbers. Some 16-bit UUIDs, such as '2220' look like integers, but they're not. (The integer 2220 is 0x8AC in hex.) This isn't a problem with 128 bit UUIDs since they look like strings 82b9e6e1-593a-456f-be9b-9215160ebcac. All 16-bit UUIDs should also be passed to methods as strings.
 *
 */
@Plugin({
  name: 'BLE',
  plugin: 'cordova-plugin-ble-central',
  pluginRef: 'ble',
  pluginRepo: 'https://github.com/don/cordova-plugin-ble-central'
})
export class BLE {
  /**
   * Scan and discover BLE peripherals for the specified amount of time.
   *
   * @usage
   * ```
   * BLE.scan([], 5).subscribe(device => {
   *   console.log(JSON.stringify(device));
   * });
   * ```
   * @param {string[]} services  List of service UUIDs to discover, or `[]` to find all devices
   * @param {number} seconds  Number of seconds to run discovery
   * @return Returns an Observable that notifies of each peripheral that is discovered during the specified time.
   */
  @Cordova({
    observable: true
  })
  static scan(services:string[], seconds:number) {
    // This Observable is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Observable, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Observable<any>(observer => {});
  }

  /**
   * Scan and discover BLE peripherals until `stopScan` is called.
   *
   * @usage
   * ```
   * BLE.startScan([]).subscribe(device => {
   *   console.log(JSON.stringify(device));
   * });
   *
   * setTimeout(() => {
   *   BLE.stopScan();
   * }, 5000);
   * ```
   * @param {string[]} services  List of service UUIDs to discover, or `[]` to find all devices
   * @return Returns an Observable that notifies of each peripheral discovered.
   */
  @Cordova({
    observable: true,
    clearFunction: 'stopScan',
    clearWithArgs: true
  })
  static startScan(services:string[]){
    // This Observable is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Observable, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Observable<any>(observer => {});
  };

  /**
   * Stop a scan started by `startScan`.
   *
   * @usage
   * ```
   * BLE.startScan([]).subscribe(device => {
   *   console.log(JSON.stringify(device));
   * });
   * setTimeout(() => {
   *   BLE.stopScan().then(() => { console.log('scan stopped'); });
   * }, 5000);
   * ```
   * @return returns a Promise.
   */
  @Cordova()
  static stopScan(){
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  };

  /**
   * Connect to a peripheral.
   * @usage
   * ```
   *   BLE.connect('12:34:56:78:9A:BC').subscribe(peripheralData => {
   *     console.log(peripheralData);
   *   },
   *   peripheralData => {
   *     console.log('disconnected');
   *   });
   * ```
   * @param deviceId {string}  UUID or MAC address of the peripheral
   * @return Returns an Observable that notifies of connect/disconnect.
   */
  @Cordova({
    observable: true,
    clearFunction: 'disconnect',
    clearWithArgs: true
  })
  static connect(deviceId:string){
    // This Observable is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Observable, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Observable<any>(observer => {});
  };

  /**
   * Disconnect from a peripheral.
   * @usage
   * ```
   *   BLE.disconnect('12:34:56:78:9A:BC').then(() => {
   *     console.log('Disconnected');
   *   });
   * ```
   * @param deviceId {string}  UUID or MAC address of the peripheral
   * @return Returns a Promise
   */
  @Cordova()
  static disconnect(deviceId:string) {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  };

  /**
   * Read the value of a characteristic.
   *
   * @param {string} device_id  UUID or MAC address of the peripheral
   * @param {string} service_uuid  UUID of the BLE service
   * @param {string} characteristic_uuid  UUID of the BLE characteristic
   * @return Returns a Promise
   */
  @Cordova()
  static read(deviceId:string, serviceUUID:string, characteristicUUID:string){
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  };

  /**
   * Write the value of a characteristic.
   * @usage
   * ```
   * // send 1 byte to switch a light on
   * var data = new Uint8Array(1);
   * data[0] = 1;
   * BLE.write(device_id, "FF10", "FF11", data.buffer);
   *
   * // send a 3 byte value with RGB color
   * var data = new Uint8Array(3);
   * data[0] = 0xFF;  // red
   * data[0] = 0x00; // green
   * data[0] = 0xFF; // blue
   * BLE.write(device_id, "ccc0", "ccc1", data.buffer);
   *
   * // send a 32 bit integer
   * var data = new Uint32Array(1);
   * data[0] = counterInput.value;
   * BLE.write(device_id, SERVICE, CHARACTERISTIC, data.buffer);
   *
   * ```
   * @param {string} device_id  UUID or MAC address of the peripheral
   * @param {string} service_uuid  UUID of the BLE service
   * @param {string} characteristic_uuid  UUID of the BLE characteristic
   * @param {ArrayBuffer} value  Data to write to the characteristic, as an ArrayBuffer.
   * @return Returns a Promise
   */
  @Cordova()
  static write(deviceId:string, serviceUUID:string, characteristicUUID:string, value:ArrayBuffer){
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  };

  /**
   * Write the value of a characteristic without waiting for confirmation from the peripheral.
   *
   * @param {string} device_id  UUID or MAC address of the peripheral
   * @param {string} service_uuid  UUID of the BLE service
   * @param {string} characteristic_uuid  UUID of the BLE characteristic
   * @param {ArrayBuffer} value  Data to write to the characteristic, as an ArrayBuffer.
   * @return Returns a Promise
   */
  @Cordova()
  static writeWithoutResponse(deviceId:string, serviceUUID:string, characteristicUUID:string, value:ArrayBuffer){
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  };

  /**
   * Register to be notified when the value of a characteristic changes.
   *
   * @usage
   * ```
   * BLE.startNotification(device_id, "FF10", "FF11").subscribe(buffer => {
   *   console.log(String.fromCharCode.apply(null, new Uint8Array(buffer));
   * });
   * ```
   * 
   * @param {string} device_id  UUID or MAC address of the peripheral
   * @param {string} service_uuid  UUID of the BLE service
   * @param {string} characteristic_uuid  UUID of the BLE characteristic
   * @return Returns an Observable that notifies of characteristic changes.
   */
  @Cordova({
    observable: true,
    clearFunction: 'stopNotification',
    clearWithArgs: true
  })
  static startNotification(deviceId:string, serviceUUID:string, characteristicUUID:string){
    // This Observable is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Observable, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Observable<any>(observer => {});
  };

  /**
   * Stop being notified when the value of a characteristic changes.
   *
   * @param {string} device_id  UUID or MAC address of the peripheral
   * @param {string} service_uuid  UUID of the BLE service
   * @param {string} characteristic_uuid  UUID of the BLE characteristic
   * @return Returns a Promise.
   */
  @Cordova()
  static stopNotification(deviceId:string, serviceUUID:string, characteristicUUID:string){
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  };

  /**
   * Report the connection status.
   *
   * @usage
   * ```
   * BLE.isConnected('FFCA0B09-CB1D-4DC0-A1EF-31AFD3EDFB53').then(
   *   () => { console.log('connected'); },
   *   () => { console.log('not connected'); }
   * );
   * ```
   * @param {string} device_id  UUID or MAC address of the peripheral
   * @return Returns a Promise.
   */
  @Cordova()
  static isConnected(deviceId:string){
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  }

  /**
   * Report if bluetooth is enabled.
   *
   * @usage
   * ```
   * BLE.isEnabled().then(
   *   () => { console.log('enabled'); },
   *   () => { console.log('not enabled'); }
   * );
   * ```
   * @return Returns a Promise.
   */
  @Cordova()
  static isEnabled(){
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  }

  /**
   * Open System Bluetooth settings (Android only).
   *
   * @return Returns a Promise.
   */
  @Cordova()
  static showBluetoothSettings(){
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  }

  /**
   * Enable Bluetooth on the device (Android only).
   *
   * @return Returns a Promise.
   */
  @Cordova()
  static enable(){
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  }
}
