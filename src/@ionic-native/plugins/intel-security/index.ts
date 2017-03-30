import { Plugin, Cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';

declare var window: any;

export interface IntelSecurityDataOptions {
  /** Non-empty string. **/
  data: String;
  /** Tag text.  */
  tag?: String;
  /** Valid secure data instance ID. */
  extraKey?: Number;
  /** Application access control policy. */
  appAccessControl?: Number;
  /** Device locality policy. */
  deviceLocality?: Number;
  /** Sensitivity level policy. */
  sensitivityLevel?: Number;
  /** Disallow sealed blob access. */
  noStore?: Boolean;
  /** Disallow plain-text data access. */
  noRead?: Boolean;
  /** Creator unique ID. */
  creator?: Number;
  /** Array of owners unique IDs. */
  owners?: Number[];
  /** List of trusted web domains. */
  webOwners?: String[];
}

/**
 * @name Intel Security
 * @description
 * The App Security API enables the use of security properties and capabilities on the platform, using a new set of API defined for application developers. You are not required to be a security expert to make good use of the API. Key elements, such as encryption of data and establishments of capabilities, is abstracted and done by the API implementation, for you.
 *
 * For example:
 * - Use the API to store (E.g. cache) data locally, using the device non-volatile storage. Data protection/encryption will be done for you by the API implementation
 * - Establish a connection with remote server (E.g. XHR) using a protected channel. SSL/TLS establishment and usage will be done for you by the API implementation
 *
 * For more information please visit the [API documentation](https://software.intel.com/en-us/app-security-api/api).
 *
 * @usage
 * ```
 * import { IntelSecurity } from '@ionic-native/intel-security';
 * ...
 * constructor(private intelSecurity: IntelSecurity) { }
 * ...
 *
 * let storageID = 'id';
 *
 * this.intelSecurity.data.createFromData({ data: 'Sample Data' })
 *   .then((instanceID: Number) => this.intelSecurity.storage.write({ id: storageId, instanceID: instanceID }))
 *   .catch((error: any) => console.log(error));
 *
 * this.intelSecurity.storage.read({id: storageID })
 *   .then((instanceID: number) => this.intelSec.data.getData(instanceID))
 *   .then((data: string) => console.log(data)) // Resolves to 'Sample Data'
 *   .catch((error: any) => console.log(error));
 *
 * this.intelSecurity.storage.delete({ id: storageID })
 *   .then(() => console.log('Deleted Successfully'))
 *   .catch((error: any) => console.log(error));
 * ```
 * @classes
 * IntelSecurityData
 * IntelSecurityStorage
 * @interfaces
 * IntelSecurityDataOptions
 */
@Plugin({
  pluginName: 'IntelSecurity',
  plugin: 'com-intel-security-cordova-plugin',
  pluginRef: 'intel.security',
  repo: 'https://github.com/AppSecurityApi/com-intel-security-cordova-plugin',
  platforms: ['Android', 'iOS', 'Windows']
})
@Injectable()
export class IntelSecurity {

  /**
   * returns an IntelSecurityStorage object
   * @type {IntelSecurityStorage}
   */
  storage: IntelSecurityStorage = new IntelSecurityStorage();

  /**
   * Returns an IntelSecurityData object
   * @type {IntelSecurityData}
   */
  data: IntelSecurityData = new IntelSecurityData();

}

/**
 * @hidden
 */
@Plugin({
  pluginName: 'IntelSecurity',
  plugin: 'com-intel-security-cordova-plugin',
  pluginRef: 'intel.security.secureData'
})
export class IntelSecurityData {

  /**
  * This creates a new instance of secure data using plain-text data.
  * @param options {IntelSecurityDataOptions}
  * @returns {Promise<any>} Returns a Promise that resolves with the instanceID of the created data instance, or rejects with an error.
  */
  @Cordova({ otherPromise: true })
  createFromData(options: IntelSecurityDataOptions): Promise<Number> { return; }

  /**
   * This creates a new instance of secure data (using sealed data)
   * @param options {Object}
   * @param options.sealedData {string} Sealed data in string format.
   * @returns {Promise<any>} Returns a Promise that resolves with the instanceID of the created data instance, or rejects with an error.
   */
  @Cordova({ otherPromise: true })
  createFromSealedData(options: { sealedData: string }): Promise<Number> { return; }

  /**
   * This returns the plain-text data of the secure data instance.
   * @param instanceID {Number} Secure data instance ID.
   * @returns {Promise<string>} Returns a Promise that resolves to the data as plain-text, or rejects with an error.
   */
  @Cordova({ otherPromise: true })
  getData(instanceID: Number): Promise<string> { return; }

  /**
   * This returns the sealed chunk of a secure data instance.
   * @param instanceID {any} Secure data instance ID.
   * @returns {Promise<any>} Returns a Promise that resolves to the sealed data, or rejects with an error.
   */
  @Cordova({ otherPromise: true })
  getSealedData(instanceID: any): Promise<any> { return; }

  /**
   * This returns the tag of the secure data instance.
   * @param instanceID {any} Secure data instance ID.
   * @returns {Promise<string>} Returns a Promise that resolves to the tag, or rejects with an error.
   */
  @Cordova({ otherPromise: true })
  getTag(instanceID: any): Promise<string> { return; }

  /**
   * This returns the data policy of the secure data instance.
   * @param instanceID {any} Secure data instance ID.
   * @returns {Promise<any>} Returns a promise that resolves to the policy object, or rejects with an error.
   */
  @Cordova({ otherPromise: true })
  getPolicy(instanceID: any): Promise<any> { return; }

  /**
   * This returns an array of the data owners unique IDs.
   * @param instanceID {any} Secure data instance ID.
   * @returns {Promise<Array>} Returns a promise that resolves to an array of owners' unique IDs, or rejects with an error.
   */
  @Cordova({ otherPromise: true })
  getOwners(instanceID: any): Promise<Array<any>> { return; }

  /**
   * This returns the data creator unique ID.
   * @param instanceID {any} Secure data instance ID.
   * @returns {Promise<Number>} Returns a promsie that resolves to the creator's unique ID, or rejects with an error.
   */
  @Cordova({ otherPromise: true })
  getCreator(instanceID: any): Promise<Number> { return; }

  /**
   * This returns an array of the trusted web domains of the secure data instance.
   * @param instanceID {any} Secure data instance ID.
   * @returns {Promise<Array>} Returns a promise that resolves to a list of web owners, or rejects with an error.
   */
  @Cordova({ otherPromise: true })
  getWebOwners(instanceID: any): Promise<Array<any>> { return; }

  /**
   * This changes the extra key of a secure data instance. To successfully replace the extra key, the calling application must have sufficient access to the plain-text data.
   * @param options {Object}
   * @param options.instanceID {any} Secure data instance ID.
   * @param options.extraKey {Number} Extra sealing secret for secure data instance.
   * @returns {Promise<any>} Returns a promise that resolves with no parameters, or rejects with an error.
   */
  @Cordova({ otherPromise: true })
  changeExtraKey(options: any): Promise<any> { return; }

  /**
   * This releases a secure data instance.
   * @param instanceID {any} Secure data instance ID.
   * @returns {Promise<any>} Returns a promise that resovles with no parameters, or rejects with an error.
   */
  @Cordova({ otherPromise: true })
  destroy(instanceID: any): Promise<any> { return; }

}

/**
 * @hidden
 */
@Plugin({
  pluginName: 'IntelSecurity',
  plugin: 'com-intel-security-cordova-plugin',
  pluginRef: 'intel.security.secureStorage'
})
export class IntelSecurityStorage {

  /**
   * This deletes a secure storage resource (indicated by id).
   * @param options {Object}
   * @param options.id {String} Storage resource identifier.
   * @param [options.storageType] {Number} Storage type.
   * @returns {Promise<any>} Returns a Promise that resolves with no parameters, or rejects with an error.
   */
  @Cordova({ otherPromise: true })
  delete(options: {
    id: string,
    storageType?: Number
  }): Promise<any> { return; }

  /**
   * This reads the data from secure storage (indicated by id) and creates a new secure data instance.
   * @param options {Object}
   * @param options.id {String} Storage resource identifier.
   * @param [options.storageType] {Number} Storage type.
   * @param [options.extraKey] {Number} Valid secure data instance ID.
   * @returns {Promise<Number>} Returns a Promise that resolves with the instance ID of the created secure data instance, or rejects with an error.
   */
  @Cordova({ otherPromise: true })
  read(options: {
    id: string,
    storageType?: Number,
    extraKey?: Number
  }): Promise<Number> { return; }

  /**
   * This writes the data contained in a secure data instance into secure storage.
   * @param options {Object}
   * @param options.id {String} Storage resource identifier.
   * @param options.instanceID {Number} Valid secure data instance ID
   * @param [options.storageType] {Number} Storage type.
   * @returns {Promise<any>} Returns a Promise that resolves with no parameters, or rejects with an error.
   */
  @Cordova({ otherPromise: true })
  write(options: {
    id: String,
    instanceID: Number,
    storageType?: Number
  }): Promise<any> { return; }

}
