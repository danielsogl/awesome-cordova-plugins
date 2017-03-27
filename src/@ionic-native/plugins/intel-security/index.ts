import { Plugin, Cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';

declare var window: any;
declare var intel: any;

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
 * this.intelSecurity.data.createFromData({data: 'Sample Data'})
 *   .then((instanceID: any) => this.IntelSecurity.storage.write(id, instanceID))
 *   .catch((error: any) => console.log(error));
 *
 * this.intelSecurity.storage.read(storageID)
 *   .then(this.intelSecurity.data.getData)
 *   .then((data: string) => console.log(data)) // Resolves to 'Sample Data'
 *   .catch((error: any) => console.log(error));
 *
 * this.intelSecurity.storage.delete(storageID)
 *   .then(() => console.log('Deleted Successfully'))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 * @interfaces
 * IntelSecurityDataOptions
 */
@Plugin({
  pluginName: 'IntelSecurity',
  plugin: 'com-intel-security-cordova-plugin',
  pluginRef: 'intel.security',
  repo: 'https://github.com/AppSecurityApi/com-intel-security-cordova-plugin'
})
@Injectable()
export class IntelSecurity {

  public storage: IntelSecurityStorage;
  public data: IntelSecurityData;

  constructor() {
    this.storage = new IntelSecurityStorage();
    this.data = new IntelSecurityData();

    try {
      if (!window.intel)
        throw true;
    } catch (e) {
      console.warn('Native: Intel App Security API is not installed or you are running on a browser.');
    }
  }
}

/**
 * @hidden
 */
@Plugin({
  pluginName: 'IntelSecurity',
  plugin: 'com-intel-security-cordova-plugin',
  pluginRef: 'intel.security.secureData',
  repo: ''
})
export class IntelSecurityData {

  /**
  * This creates a new instance of secure data using plain-text data.
  * @param options {IntelSecurityDataOptions}
  * @returns {Promise<any>} Returns a Promise that resolves with the instanceID of the created data instance, or rejects with an error.
  */
  @Cordova()
  createFromData(options: IntelSecurityDataOptions): Promise<any> {
    return;
  }

  /**
   * This creates a new instance of secure data (using sealed data)
   * @param sealedData {string} Sealed data in string format.
   * @returns {Promise<any>} Returns a Promise that resolves with the instanceID of the created data instance, or rejects with an error.
   */
  @Cordova()
  createFromSealedData(sealedData: string): Promise<any> {
    return intel.security.secureData.createFromSealedData({ sealedData: sealedData });
  }

  /**
   * This returns the plain-text data of the secure data instance.
   * @param instanceID {any} Secure data instance ID.
   * @returns {Promise<string>} Returns a Promise that resolves to the data as plain-text, or rejects with an error.
   */
  @Cordova()
  getData(instanceID: any): Promise<string> {
    return intel.security.secureData.getData(instanceID);
  }

  /**
   * This returns the sealed chunk of a secure data instance.
   * @param instanceID {any} Secure data instance ID.
   * @returns {Promise<any>} Returns a Promise that resolves to the sealed data, or rejects with an error.
   */
  @Cordova()
  getSealedData(instanceID: any): Promise<any> {
    return intel.security.secureData.getSealedData(instanceID);
  }

  /**
   * This returns the tag of the secure data instance.
   * @param instanceID {any} Secure data instance ID.
   * @returns {Promise<string>} Returns a Promise that resolves to the tag, or rejects with an error.
   */
  @Cordova()
  getTag(instanceID: any): Promise<string> {
    return intel.security.secureData.getTag(instanceID);
  }

  /**
   * This returns the data policy of the secure data instance.
   * @param instanceID {any} Secure data instance ID.
   * @returns {Promise<any> Returns a promise that resolves to the policy object, or rejects with an error.
   */
  @Cordova()
  getPolicy(instanceID: any): Promise<any> {
    return intel.security.secureData.getPolicy(instanceID);
  }

  /**
   * This returns an array of the data owners unique IDs.
   * @param instanceID {any} Secure data instance ID.
   * @returns {Promise<Array>} Returns a promise that resolves to an array of owners' unique IDs, or rejects with an error.
   */
  @Cordova()
  getOwners(instanceID: any): Promise<Array<any>> {
    return intel.security.secureData.getOwners(instanceID);
  }

  /**
   * This returns the data creator unique ID.
   * @param instanceID {any} Secure data instance ID.
   * @returns {Promise<Number>} Returns a promsie that resolves to the creator's unique ID, or rejects with an error.
   */
  @Cordova()
  getCreator(instanceID: any): Promise<Number> {
    return intel.security.secureData.getCreator(instanceID);
  }

  /**
   * This returns an array of the trusted web domains of the secure data instance.
   * @param instanceID {any} Secure data instance ID.
   * @returns {Promise<Array>} Returns a promise that resolves to a list of web owners, or rejects with an error.
   */
  @Cordova()
  getWebOwners(instanceID: any): Promise<Array<any>> {
    return intel.security.secureData.getWebOwners(instanceID);
  }

  /**
   * This changes the extra key of a secure data instance. To successfully replace the extra key, the calling application must have sufficient access to the plain-text data.
   * @param instanceID {any} Secure data instance ID.
   * @param extraKey {Number} Extra sealing secret for secure data instance.
   * @returns {Promise<any>} Returns a promise that resolves with no parameters, or rejects with an error.
   */
  @Cordova()
  changeExtraKey(instanceID: any, extraKey: Number): Promise<any> {
    return intel.security.secureData.changeExtraKey({ instanceID: instanceID, extraKey: extraKey });
  }

  /**
   * This releases a secure data instance.
   * @param instanceID {any} Secure data instance ID.
   * @returns {Promise<any>} Returns a promise that resovles with no parameters, or rejects with an error.
   */
  @Cordova()
  destroy(instanceID: any): Promise<any> {
    return intel.security.secureData.destroy(instanceID);
  }

}

/**
 * @hidden
 */
@Plugin({
  pluginName: 'IntelSecurity',
  plugin: 'com-intel-security-cordova-plugin',
  pluginRef: 'intel.security.secureStorage',
  repo: ''
})
export class IntelSecurityStorage {

  /**
   * This deletes a secure storage resource (indicated by id).
   * @param id {string} Storage resource identifier.
   * @returns {Promise<any>} Returns a Promise that resolves with no parameters, or rejects with an error.
   */
  @Cordova()
  delete(id: string): Promise<any> {
    return intel.security.secureStorage.delete({ id: id });
  }

  /**
   * This reads the data from secure storage (indicated by id) and creates a new secure data instance.
   * @param id {string} Storage resource identifier.
   * @returns {Promise<string>} Returns a Promise that resolved with the data as plain-text, or rejects with an error.
   */
  @Cordova()
  read(id: string): Promise<string> {
    return intel.security.secureStorage.read({ id: id });
  }

  /**
   * This writes the data contained in a secure data instance into secure storage.
   * @param id {string} Storage resource identifier.
   * @param instanceID {number} Valid secure data instance ID
   */
  @Cordova()
  write(id: string, instanceID: number): Promise<any> {
    return intel.security.secureStorage.write({ id: id, instanceID: instanceID });
  }

}
