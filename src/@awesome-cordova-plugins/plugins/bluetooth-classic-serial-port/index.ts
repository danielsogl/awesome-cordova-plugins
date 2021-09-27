import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

export interface BluetoothClassicSerialPortDevice {
  id: string;
  class?: string | number;
  address?: string;
  name?: string;
  protocols?: string[]; // ios only
  [p: string]: any;
}

/**
 * @name Bluetooth Classic Serial Port
 * @description This plugin is written using the iOS Accessory Framework (MFi) to support Classic Bluetooth on iOS.
 * @usage
 * ```typescript
 * import { BluetoothClassicSerialPort } from '@awesome-cordova-plugins/bluetooth-classic-serial-port/ngx';
 *
 * constructor(private bluetoothClassicSerialPort: BluetoothClassicSerialPort) { }
 *
 *
 * // Write a string
 * this.bluetoothClassicSerialPort.write("00001101-0000-1000-8000-00805F9B34FB", "hello, world", success, failure);
 *
 * // Array of int or bytes
 * this.bluetoothClassicSerialPort.write("00001101-0000-1000-8000-00805F9B34FB", [186, 220, 222], success, failure);
 *
 * // Typed Array
 * var data = new Uint8Array(4);
 * data[0] = 0x41;
 * data[1] = 0x42;
 * data[2] = 0x43;
 * data[3] = 0x44;
 * this.bluetoothClassicSerialPort.write(interfaceId, data, success, failure);
 *
 * // Array Buffer
 * this.bluetoothClassicSerialPort.write(interfaceId, data.buffer, success, failure);
 * ```
 *
 * // iOS select accessory
 *
 * ```typescript
 *  async selectAccessory() {
 *    const deviceDiscovery = this.bluetoothClassicSerialPort.setDeviceDiscoveredListener().subscribe(async (connectionConfig) => {
 *      deviceDiscovery.unsubscribe();
 *    })
 *
 *    await this.bluetoothClassicSerialPort.discoverUnpaired().catch(error => {
 *      deviceDiscovery.unsubscribe();
 *    })
 *
 *  }
 * ```
 */
@Plugin({
  pluginName: 'BluetoothClassicSerialPort',
  repo: 'https://github.com/MaximBelov/cordova-plugin-bluetooth-classic-serial-port',
  plugin: 'cordova-plugin-bluetooth-classic-serial-port',
  pluginRef: 'bluetoothClassicSerial',
  platforms: ['Android', 'iOS', 'Browser'],
})
@Injectable()
export class BluetoothClassicSerialPort extends AwesomeCordovaNativePlugin {
  /**
   * Connect to a Bluetooth device
   *
   * @param {string} deviceId Identifier of the remote device.
   * @param {string} deviceId this is the MAC address.
   * @param {string|string[]} interfaceId Identifier of the remote device
   * @param {string|string[]} interfaceId This identifies the serial port to connect to.
   * @returns {Observable<any>} Subscribe to connect.
   */
  @Cordova({
    platforms: ['Android', 'iOS'],
    observable: true,
  })
  connect(deviceId: string | number, interfaceId: string | string[]): Observable<any> {
    return;
  }

  /**
   * Connect to a Bluetooth device
   *
   * @deprecated
   * @param {string} deviceId Identifier of the remote device.
   * @param {number} deviceId this is the connection ID
   * @param {string|string[]} interfaceArray Identifier of the remote device
   * @param {string|string[]} interfaceArray this is the Protocol String
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['iOS'],
    methodName: 'connect',
  })
  connectIos(deviceId: string | number, interfaceArray: string | string[]): Promise<any> {
    return;
  }

  /**
   * Connect insecurely to a Bluetooth device
   *
   * @param {string} deviceId Identifier of the remote device. For Android this is the MAC address
   * @param {string | string[]} interfaceArray This identifies the serial port to connect to. For Android this is the SPP_UUID.
   * @returns {Promise<any>} Subscribe to connect.
   */
  @Cordova({
    platforms: ['Android'],
    observable: true,
  })
  connectInsecure(deviceId: string, interfaceArray: string | string[]): Promise<any> {
    return;
  }

  /**
   * Disconnect from the connected device
   *
   * @param {string} interfaceId The interface to Disconnect
   * @returns {Promise<any>}
   */
  @Cordova()
  disconnect(interfaceId: string | string[]): Promise<any> {
    return;
  }

  /**
   * Disconnect from all the connected device
   *
   * @returns {Promise<any>}
   */
  @Cordova({
    methodName: 'connect',
  })
  disconnectAll(): Promise<any> {
    return;
  }

  /**
   * Writes data to the serial port
   *
   * @param {string} interfaceId The interface to send the data to
   * @param {ArrayBuffer | string | number[] | Uint8Array} data ArrayBuffer of data
   * @returns {Promise<any>} returns a promise when data has been written
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Browser'],
  })
  write(interfaceId: string, data: ArrayBuffer | string | number[] | Uint8Array): Promise<any> {
    return;
  }

  /**
   * Gets the number of bytes of data available
   *
   * @param {string} interfaceId The interface to check
   * @returns {Promise<any>} returns a promise that contains the available bytes
   */
  @Cordova({
    platforms: ['Android', 'Browser'],
  })
  available(interfaceId: string): Promise<any> {
    return;
  }

  /**
   * Function read reads the data from the buffer. The data is passed to the success callback as a String. Calling read when no data is available will pass an empty String to the callback.
   *
   * @param {string} interfaceId The interface to read
   * @returns {Promise<any>} returns a promise with data from the buffer
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Browser'],
  })
  read(interfaceId: string): Promise<any> {
    return;
  }

  /**
   * Reads data from the buffer until it reaches a delimiter
   *
   * @param {string} interfaceId The interface to read
   * @param {string} delimiter string that you want to search until
   * @returns {Observable<any>} returns a promise
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Browser'],
  })
  readUntil(interfaceId: string, delimiter: string): Observable<any> {
    return;
  }

  /**
   * Subscribe to be notified when data is received
   *
   * @param {string | string[]} interfaceId The interface to subscribe to
   * @param {string} delimiter the string you want to watch for
   * @returns {Observable<any>} returns an observable.
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Browser'],
    observable: true,
  })
  subscribe(interfaceId: string | string[], delimiter: string): Observable<any> {
    return;
  }

  /**
   * Unsubscribe from a subscription
   *
   * @param {string | string[]} interfaceId The interface to unsubscribe from
   * @returns {Promise<any>} returns an promise.
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Browser'],
  })
  unsubscribe(interfaceId: string | string[]): Promise<any> {
    return;
  }

  /**
   * Subscribe to be notified when data is received
   *
   * @param {string | string[]} interfaceId The interface to subscribe to
   * @returns {Observable<any>} returns an observable
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Browser'],
    observable: true,
  })
  subscribeRawData(interfaceId: string | string[]): Observable<any> {
    return;
  }

  /**
   * Unsubscribe from a subscription
   *
   * @param {string | string[]} interfaceId The interface to unsubscribe from
   * @returns {Promise<any>} returns an promise.
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Browser'],
  })
  unsubscribeRawData(interfaceId: string | string[]): Promise<any> {
    return;
  }

  /**
   * Clears data in buffer
   *
   * @param {string} interfaceId The interface to clear data
   * @returns {Promise<any>} returns a promise when completed
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Browser'],
  })
  clear(interfaceId: string): Promise<[]> {
    return;
  }

  /**
   * Lists bonded devices
   *
   * @returns {Promise<BluetoothClassicSerialPortDevice>} returns a promise
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Browser'],
  })
  list(): Promise<BluetoothClassicSerialPortDevice[]> {
    return;
  }

  /**
   * Reports the connection status
   *
   * @param {string} interfaceId The interface to check
   * @returns {Promise<boolean>} returns a promise
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Browser'],
  })
  isConnected(interfaceId: string): Promise<boolean> {
    return;
  }

  /**
   * Reports if bluetooth is enabled
   *
   * @returns {Promise<any>} returns a promise
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Browser'],
  })
  isEnabled(): Promise<boolean> {
    return;
  }

  /**
   * Show the Bluetooth settings on the device
   *
   * @returns {Promise<any>} returns a promise
   */
  @Cordova({
    platforms: ['Android'],
  })
  showBluetoothSettings(): Promise<any> {
    return;
  }

  /**
   * Enable Bluetooth on the device
   *
   * @returns {Promise<any>} returns a promise
   */
  @Cordova({
    platforms: ['Android', 'Browser'],
  })
  enable(): Promise<any> {
    return;
  }

  /**
   * Discover unpaired devices
   *
   * @returns {Promise<any>} returns a promise
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Browser'],
  })
  discoverUnpaired(): Promise<BluetoothClassicSerialPortDevice[]> {
    return;
  }

  /**
   * Subscribe to be notified on Bluetooth device discovery. Discovery process must be initiated with the `discoverUnpaired` function.
   *
   * @returns {Observable<any>} Returns an observable
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Browser'],
    observable: true,
    clearFunction: 'clearDeviceDiscoveredListener',
  })
  setDeviceDiscoveredListener(): Observable<BluetoothClassicSerialPortDevice> {
    return;
  }

  /**
   * Clears notify callback function registered with setDeviceDiscoveredListener.
   */
  @Cordova({
    platforms: ['Android', 'iOS', 'Browser'],
    sync: true,
  })
  clearDeviceDiscoveredListener() {
    return;
  }
}
