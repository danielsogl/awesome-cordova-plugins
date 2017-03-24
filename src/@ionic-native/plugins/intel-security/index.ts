import { Plugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';

declare var intel: any;

/**
 * @name Intel Security
 * @description
 * This plugin does something
 *
 * @usage
 * ```
 * import { IntelSecurity } from '@ionic-native/intel-security';
 *
 * IntelSecurity.functionName('Hello', 123)
 *   .then((something: any) => doSomething(something))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'IntelSecurity',
  plugin: 'com-intel-security-cordova-plugin',
  pluginRef: 'intel.security',
  repo: 'https://github.com/AppSecurityApi/com-intel-security-cordova-plugin'
})
@Injectable()
export class IntelSecurity {

  public storage;
  public data;

  constructor() {
    this.storage = new IntelSecurityStorage();
    this.data = new IntelSecurityData();
    try {
      if (!intel)
        throw true;
    } catch (e) {
      console.warn('Native: Intel App Security API is not installed or you are running on a browser.');
    }
  }
}

/**
 * @hidden
 */
export class IntelSecurityData {

  /**
  * This creates a new instance of secure data using plain-text data.
  * @param id {string} Storage resource identifier.
  * @returns {Promise<any>} Returns a Promise that resolves with the instanceID of the created data instance, or rejects with an error.
  */
  createFromData(data: string): Promise<any> {
    try {
      return intel.security.secureData.createFromData({ data: data });
    } catch (e) {
      console.warn('Native: tried calling IntelSecurity.data.createFromData, but Intel App Security API is not available. Make sure to run in a device/simulator.');
    }
  }

  /**
   * This creates a new instance of secure data (using sealed data)
   * @param sealedData {string} Sealed data in string format.
   * @returns {Promise<any>} Returns a Promise that resolves with the instanceID of the created data instance, or rejects with an error.
   */
  createFromSealedData(sealedData: string): Promise<any> {
    try {
      return intel.security.secureData.createFromSealedData({ sealedData: sealedData });
    } catch (e) {
      console.warn('Native: tried calling IntelSecurity.data.createFromSealedData, but Intel App Security API is not available. Make sure to run in a device/simulator.');
    }
  }

  /**
   * This returns the plain-text data of the secure data instance.
   * @param instanceID {any} Secure data instance ID.
   * @returns {Promise<string>} Returns a Promise that resolves to the data as plain-text, or rejects with an error.
   */
  getData(instanceID: any): Promise<string> {
    try {
      return intel.security.secureData.getData(instanceID);

    } catch (e) {
      console.warn('Native: tried calling IntelSecurity.data.getData, but Intel App Security API is not available. Make sure to run in a device/simulator.');
    }
  }

  /**
   * This returns the sealed chunk of a secure data instance.
   * @param instanceID {any} Secure data instance ID.
   * @returns {Promise<any>} Returns a Promise that resolves to the sealed data, or rejects with an error.
   */
  getSealedData(instanceID: any): Promise<any> {
    try {
      return intel.security.secureData.getSealedData(instanceID);
    } catch (e) {
      console.warn('Native: tried calling IntelSecurity.data.getSealedData, but Intel App Security API is not available. Make sure to run in a device/simulator.');
    }
  }

  /**
   * This returns the tag of the secure data instance.
   * @param instanceID {any} Secure data instance ID.
   * @returns {Promise<string>} Returns a Promise that resolves to the tag, or rejects with an error.
   */
  getTag(instanceID: any): Promise<string> {
     try {
      return intel.security.secureData.getTag(instanceID);
    } catch (e) {
      console.warn('Native: tried calling IntelSecurity.data.getTag, but Intel App Security API is not available. Make sure to run in a device/simulator.');
    }
  }

  /**
   * This returns the data policy of the secure data instance.
   * @param instanceID {any} Secure data instance ID.
   * @returns {Promise<any> Returns a promise that resolves to the policy object, or rejects with an error.
   */
  getPolicy(instanceID: any): Promise<any> {
     try {
      return intel.security.secureData.getPolicy(instanceID);
    } catch (e) {
      console.warn('Native: tried calling IntelSecurity.data.getPolicy, but Intel App Security API is not available. Make sure to run in a device/simulator.');
    }
  }

  /**
   * This returns an array of the data owners unique IDs.
   * @param instanceID {any} Secure data instance ID.
   * @returns {Promise<Array>} Returns a promise that resolves to an array of owners' unique IDs, or rejects with an error.
   */
  getOwners(instanceID: any): Promise<Array<any>> {
     try {
      return intel.security.secureData.getOwners(instanceID);
    } catch (e) {
      console.warn('Native: tried calling IntelSecurity.data.getOwners, but Intel App Security API is not available. Make sure to run in a device/simulator.');
    }
  }

  /**
   * This returns the data creator unique ID.
   * @param instanceID {any} Secure data instance ID.
   * @returns {Promise<Number>} Returns a promsie that resolves to the creator's unique ID, or rejects with an error.
   */
  getCreator(instanceID: any): Promise<Number> {
     try {
      return intel.security.secureData.getCreator(instanceID);
    } catch (e) {
      console.warn('Native: tried calling IntelSecurity.data.getCreator, but Intel App Security API is not available. Make sure to run in a device/simulator.');
    }
  }

  /**
   * This returns an array of the trusted web domains of the secure data instance.
   * @param instanceID {any} Secure data instance ID.
   * @returns {Promise<Array>} Returns a promise that resolves to a list of web owners, or rejects with an error.
   */
  getWebOwners(instanceID: any): Promise<Array<any>> {
     try {
      return intel.security.secureData.getWebOwners(instanceID);
    } catch (e) {
      console.warn('Native: tried calling IntelSecurity.data.getWebOwners, but Intel App Security API is not available. Make sure to run in a device/simulator.');
    }
  }

  /**
   * This changes the extra key of a secure data instance. To successfully replace the extra key, the calling application must have sufficient access to the plain-text data.
   * @param instanceID {any} Secure data instance ID.
   * @param extraKey {Number} Extra sealing secret for secure data instance.
   * @returns {Promise<any>} Returns a promise that resolves with no parameters, or rejects with an error.
   */
  changeExtraKey(instanceID: any, extraKey: Number): Promise<any> {
     try {
      return intel.security.secureData.changeExtraKey({ instanceID: instanceID, extraKey: extraKey });
    } catch (e) {
      console.warn('Native: tried calling IntelSecurity.data.changeExtraKey, but Intel App Security API is not available. Make sure to run in a device/simulator.');
    }
  }

  /**
   * This releases a secure data instance.
   * @param instanceID {any} Secure data instance ID.
   * @returns {Promise<any>} Returns a promise that resovles with no parameters, or rejects with an error.
   */
  destroy(instanceID: any): Promise<any> {
     try {
      return intel.security.secureData.destroy(instanceID);
    } catch (e) {
      console.warn('Native: tried calling IntelSecurity.data.destroy, but Intel App Security API is not available. Make sure to run in a device/simulator.');
    }
  }

}

/**
 * @hidden
 */
export class IntelSecurityStorage {

  /**
   * This deletes a secure storage resource (indicated by id).
   * @param id {string} Storage resource identifier.
   * @returns {Promise<any>} Returns a Promise that resolves with no parameters, or rejects with an error.
   */
  delete(id: string): Promise<any> {
     try {
      return intel.security.secureStorage.delete({ id: id });
    } catch (e) {
      console.warn('Native: tried calling IntelSecurity.storage.delete, but Intel App Security API is not available. Make sure to run in a device/simulator.');
    }
  }

  /**
   * This reads the data from secure storage (indicated by id) and creates a new secure data instance.
   * @param id {string} Storage resource identifier.
   * @returns {Promise<string>} Returns a Promise that resolved with the data as plain-text, or rejects with an error.
   */
  read(id: string): Promise<string> {
     try {
      return intel.security.secureStorage.read({ id: id });
    } catch (e) {
      console.warn('Native: tried calling IntelSecurity.storage.read, but Intel App Security API is not available. Make sure to run in a device/simulator.');
    }
  }

  /**
   * This writes the data contained in a secure data instance into secure storage.
   * @param id {string} Storage resource identifier.
   * @param instanceID {number} Valid secure data instance ID
   */
  write(id: string, instanceID: number): Promise<any> {
     try {
      return intel.security.secureStorage.write({ id: id, instanceID: instanceID });
    } catch (e) {
      console.warn('Native: tried calling IntelSecurity.storage.write, but Intel App Security API is not available. Make sure to run in a device/simulator.');
    }
  }

}
