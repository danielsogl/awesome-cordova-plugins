import { Observable } from 'rxjs/Observable';
/**
 * @name Bluetooth Serial
 * @description This plugin enables serial communication over Bluetooth. It was written for communicating between Android or iOS and an Arduino.
 * @usage
 * ```typescript
 * import { BluetoothSerial } from 'ionic-native';
 *
 *
 * // Write a string
 * BluetoothSerial.write("hello world").then(success, failure);
 *
 * // Array of int or bytes
 * BluetoothSerial.write([186, 220, 222]).then(success, failure);
 *
 * // Typed Array
 * var data = new Uint8Array(4);
 * data[0] = 0x41;
 * data[1] = 0x42;
 * data[2] = 0x43;
 * data[3] = 0x44;
 * BluetoothSerial.write(data).then(success, failure);
 *
 * // Array Buffer
 * BluetoothSerial.write(data.buffer).then(success, failure);
 * ```
 */
export declare class BluetoothSerial {
    /**
     * Connect to a Bluetooth device
     * @param {string} macAddress_or_uuid Identifier of the remote device
     * @returns {Observable} Subscribe to connect, unsubscribe to disconnect.
     */
    static connect(macAddress_or_uuid: string): Observable<any>;
    /**
     * Connect insecurely to a Bluetooth device
     * @param {string} macAddress Identifier of the remote device
     * @returns {Observable} Subscribe to connect, unsubscribe to disconnect.
     */
    static connectInsecure(macAddress: string): Observable<any>;
    /**
     * Writes data to the serial port
     * @param {any} data ArrayBuffer of data
     * @returns {Promise} returns a promise when data has been written
     */
    static write(data: any): Promise<any>;
    /**
     * Gets the number of bytes of data available
     * @returns {Promise} returns a promise that contains the available bytes
     */
    static available(): Promise<any>;
    /**
     * Reads data from the buffer
     * @returns {Promise} returns a promise with data from the buffer
     */
    static read(): Promise<any>;
    /**
     * Reads data from the buffer until it reaches a delimiter
     * @param {string} delimiter string that you want to search until
     * @returns {Promise} returns a promise
     */
    static readUntil(delimiter: string): Promise<any>;
    /**
     * Subscribe to be notified when data is received
     * @param {string} delimiter the string you want to watch for
     * @returns {Observable} returns an observable.
     */
    static subscribe(delimiter: string): Observable<any>;
    /**
     * Subscribe to be notified when data is received
     * @returns {Observable} returns an observable
     */
    static subscribeRawData(): Observable<any>;
    /**
     * Clears data in buffer
     * @returns {Promise} returns a promise when completed
     */
    static clear(): Promise<any>;
    /**
     * Lists bonded devices
     * @returns {Promise} returns a promise
     */
    static list(): Promise<any>;
    /**
     * Reports if bluetooth is enabled
     * @returns {Promise} returns a promise
     */
    static isEnabled(): Promise<any>;
    /**
     * Reports the connection status
     * @returns {Promise} returns a promise
     */
    static isConnected(): Promise<any>;
    /**
     * Reads the RSSI from the connected peripheral
     * @returns {Promise} returns a promise
     */
    static readRSSI(): Promise<any>;
    /**
     * Show the Bluetooth settings on the device
     * @returns {Promise} returns a promise
     */
    static showBluetoothSettings(): Promise<any>;
    /**
     * Enable Bluetooth on the device
     * @returns {Promise} returns a promise
     */
    static enable(): Promise<any>;
    /**
     * Discover unpaired devices
     * @returns {Promise} returns a promise
     */
    static discoverUnpaired(): Promise<any>;
    /**
     * Subscribe to be notified on Bluetooth device discovery. Discovery process must be initiated with the `discoverUnpaired` function.
     * @returns {Observable} Returns an observable
     */
    static setDeviceDiscoveredListener(): Observable<any>;
    /**
     * Sets the human readable device name that is broadcasted to other devices
     * @param {string} newName Desired name of device
     */
    static setName(newName: string): void;
    /**
     * Makes the device discoverable by other devices
     * @param {number} discoverableDuration Desired number of seconds device should be discoverable for
     */
    static setDiscoverable(discoverableDuration: number): void;
}
