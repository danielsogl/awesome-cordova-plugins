var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';
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
 * ```typescript
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
 *   .then((instanceID: number) => this.intelSecurity.data.getData(instanceID))
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
var IntelSecurity = (function (_super) {
    __extends(IntelSecurity, _super);
    function IntelSecurity() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * returns an IntelSecurityStorage object
         * @type {IntelSecurityStorage}
         */
        _this.storage = new IntelSecurityStorage();
        /**
         * Returns an IntelSecurityData object
         * @type {IntelSecurityData}
         */
        _this.data = new IntelSecurityData();
        return _this;
    }
    return IntelSecurity;
}(IonicNativePlugin));
IntelSecurity.decorators = [
    { type: Injectable },
];
/** @nocollapse */
IntelSecurity.ctorParameters = function () { return []; };
IntelSecurity = __decorate([
    Plugin({
        pluginName: 'IntelSecurity',
        plugin: 'com-intel-security-cordova-plugin',
        pluginRef: 'intel.security',
        repo: 'https://github.com/AppSecurityApi/com-intel-security-cordova-plugin',
        platforms: ['Android', 'iOS', 'Windows', 'Windows Phone 8']
    })
], IntelSecurity);
export { IntelSecurity };
/**
 * @hidden
 */
var IntelSecurityData = (function () {
    function IntelSecurityData() {
    }
    /**
    * This creates a new instance of secure data using plain-text data.
    * @param options {IntelSecurityDataOptions}
    * @returns {Promise<any>} Returns a Promise that resolves with the instanceID of the created data instance, or rejects with an error.
    */
    IntelSecurityData.prototype.createFromData = function (options) { return; };
    /**
     * This creates a new instance of secure data (using sealed data)
     * @param options {Object}
     * @param options.sealedData {string} Sealed data in string format.
     * @returns {Promise<any>} Returns a Promise that resolves with the instanceID of the created data instance, or rejects with an error.
     */
    IntelSecurityData.prototype.createFromSealedData = function (options) { return; };
    /**
     * This returns the plain-text data of the secure data instance.
     * @param instanceID {Number} Secure data instance ID.
     * @returns {Promise<string>} Returns a Promise that resolves to the data as plain-text, or rejects with an error.
     */
    IntelSecurityData.prototype.getData = function (instanceID) { return; };
    /**
     * This returns the sealed chunk of a secure data instance.
     * @param instanceID {any} Secure data instance ID.
     * @returns {Promise<any>} Returns a Promise that resolves to the sealed data, or rejects with an error.
     */
    IntelSecurityData.prototype.getSealedData = function (instanceID) { return; };
    /**
     * This returns the tag of the secure data instance.
     * @param instanceID {any} Secure data instance ID.
     * @returns {Promise<string>} Returns a Promise that resolves to the tag, or rejects with an error.
     */
    IntelSecurityData.prototype.getTag = function (instanceID) { return; };
    /**
     * This returns the data policy of the secure data instance.
     * @param instanceID {any} Secure data instance ID.
     * @returns {Promise<any>} Returns a promise that resolves to the policy object, or rejects with an error.
     */
    IntelSecurityData.prototype.getPolicy = function (instanceID) { return; };
    /**
     * This returns an array of the data owners unique IDs.
     * @param instanceID {any} Secure data instance ID.
     * @returns {Promise<Array>} Returns a promise that resolves to an array of owners' unique IDs, or rejects with an error.
     */
    IntelSecurityData.prototype.getOwners = function (instanceID) { return; };
    /**
     * This returns the data creator unique ID.
     * @param instanceID {any} Secure data instance ID.
     * @returns {Promise<Number>} Returns a promsie that resolves to the creator's unique ID, or rejects with an error.
     */
    IntelSecurityData.prototype.getCreator = function (instanceID) { return; };
    /**
     * This returns an array of the trusted web domains of the secure data instance.
     * @param instanceID {any} Secure data instance ID.
     * @returns {Promise<Array>} Returns a promise that resolves to a list of web owners, or rejects with an error.
     */
    IntelSecurityData.prototype.getWebOwners = function (instanceID) { return; };
    /**
     * This changes the extra key of a secure data instance. To successfully replace the extra key, the calling application must have sufficient access to the plain-text data.
     * @param options {Object}
     * @param options.instanceID {any} Secure data instance ID.
     * @param options.extraKey {Number} Extra sealing secret for secure data instance.
     * @returns {Promise<any>} Returns a promise that resolves with no parameters, or rejects with an error.
     */
    IntelSecurityData.prototype.changeExtraKey = function (options) { return; };
    /**
     * This releases a secure data instance.
     * @param instanceID {any} Secure data instance ID.
     * @returns {Promise<any>} Returns a promise that resovles with no parameters, or rejects with an error.
     */
    IntelSecurityData.prototype.destroy = function (instanceID) { return; };
    return IntelSecurityData;
}());
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IntelSecurityData.prototype, "createFromData", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IntelSecurityData.prototype, "createFromSealedData", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], IntelSecurityData.prototype, "getData", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IntelSecurityData.prototype, "getSealedData", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IntelSecurityData.prototype, "getTag", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IntelSecurityData.prototype, "getPolicy", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IntelSecurityData.prototype, "getOwners", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IntelSecurityData.prototype, "getCreator", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IntelSecurityData.prototype, "getWebOwners", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IntelSecurityData.prototype, "changeExtraKey", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IntelSecurityData.prototype, "destroy", null);
IntelSecurityData = __decorate([
    Plugin({
        pluginName: 'IntelSecurity',
        plugin: 'com-intel-security-cordova-plugin',
        pluginRef: 'intel.security.secureData'
    })
], IntelSecurityData);
export { IntelSecurityData };
/**
 * @hidden
 */
var IntelSecurityStorage = (function () {
    function IntelSecurityStorage() {
    }
    /**
     * This deletes a secure storage resource (indicated by id).
     * @param options {Object}
     * @param options.id {String} Storage resource identifier.
     * @param [options.storageType] {Number} Storage type.
     * @returns {Promise<any>} Returns a Promise that resolves with no parameters, or rejects with an error.
     */
    IntelSecurityStorage.prototype.delete = function (options) { return; };
    /**
     * This reads the data from secure storage (indicated by id) and creates a new secure data instance.
     * @param options {Object}
     * @param options.id {String} Storage resource identifier.
     * @param [options.storageType] {Number} Storage type.
     * @param [options.extraKey] {Number} Valid secure data instance ID.
     * @returns {Promise<Number>} Returns a Promise that resolves with the instance ID of the created secure data instance, or rejects with an error.
     */
    IntelSecurityStorage.prototype.read = function (options) { return; };
    /**
     * This writes the data contained in a secure data instance into secure storage.
     * @param options {Object}
     * @param options.id {String} Storage resource identifier.
     * @param options.instanceID {Number} Valid secure data instance ID
     * @param [options.storageType] {Number} Storage type.
     * @returns {Promise<any>} Returns a Promise that resolves with no parameters, or rejects with an error.
     */
    IntelSecurityStorage.prototype.write = function (options) { return; };
    return IntelSecurityStorage;
}());
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IntelSecurityStorage.prototype, "delete", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IntelSecurityStorage.prototype, "read", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IntelSecurityStorage.prototype, "write", null);
IntelSecurityStorage = __decorate([
    Plugin({
        pluginName: 'IntelSecurity',
        plugin: 'com-intel-security-cordova-plugin',
        pluginRef: 'intel.security.secureStorage'
    })
], IntelSecurityStorage);
export { IntelSecurityStorage };
//# sourceMappingURL=index.js.map