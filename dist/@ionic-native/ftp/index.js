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
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
/**
 * @name FTP
 * @description
 * This cordova plugin is created to use ftp (client) in web/js.
 *
 * @usage
 * ```typescript
 * import { FTP } from '@ionic-native/ftp';
 *
 *
 * constructor(private fTP: FTP) { }
 *
 * ...
 *
 *
 * this.fTP.connect('ftp_host', 'ftp_user', 'ftp_password')
 *   .then((res: any) => console.log('Login successful', res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
var FTP = (function (_super) {
    __extends(FTP, _super);
    function FTP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * Connect to one ftp server.
    *
    * Just need to init the connection once. If success, you can do any ftp actions later.
    * @param hostname {string} The ftp server url. Like ip without protocol prefix, e.g. "192.168.1.1".
    * @param username {string} The ftp login username. If it and `password` are all blank/undefined, the default username "anonymous" is used.
    * @param password {string} The ftp login password. If it and `username` are all blank/undefined, the default password "anonymous@" is used.
    * @return {Promise<any>} The success callback. Notice: For iOS, if triggered, means `init` success, but NOT means the later action, e.g. `ls`... `download` will success!
    */
    FTP.prototype.connect = function (hostname, username, password) { return; };
    /**
     * List files (with info of `name`, `type`, `link`, `size`, `modifiedDate`) under one directory on the ftp server.
     * You can get one file's name using `fileList[x].name` (`x` is the location in array).
     *
     * Explain key:
     * - name: file name (utf-8).
     * - type: file type. number `0` means regular file, `1` means directory, `2` means symbolic link, `-1` means unknown type (maybe block dev, char dev...).
     * - link: if the file is a symbolic link, then this field store symbolic link information (utf-8), else it's a blank string.
     * - size: file size in bytes.
     * - modifiedDate: modified date of this file. date format is `yyyy-MM-dd HH:mm:ss zzz`, e.g "2015-12-01 20:45:00 GMT+8".
     *
     * @param path {string} The path on the ftp server. e.g. "/adf/123/".
     * @return {Promise<any>} Returns a promise
     */
    FTP.prototype.ls = function (path) { return; };
    /**
     * Create one directory on the ftp server.
     *
     * @param path {string} The path on the ftp server. e.g. "/adf/123/".
     * @return {Promise<any>} Returns a promise
     */
    FTP.prototype.mkdir = function (path) { return; };
    /**
     * Delete one directory on the ftp server.
     *
     * Tip: As many ftp server could not rm dir when it's not empty, so rm all files under the dir at first is recommended.
     *
     * @param path {string} The file (with full path) you want to delete. e.g. "/adf/123/newDir/myFile".
     * @return {Promise<any>} Returns a promise
     */
    FTP.prototype.rmdir = function (path) { return; };
    /**
     * Delete one file on the ftp server.
     *
     * @param file {string} The file (with full path) you want to delete. e.g. "/adf/123/newDir/myFile".
     * @return {Promise<any>} Returns a promise
     */
    FTP.prototype.rm = function (file) { return; };
    /**
     * Upload one local file to the ftp server.
     *
     * @param localFile {string} The file (with full path) you want to upload. e.g. "/local/path/to/localFile".
     * @param remoteFile {string} The file (with full path) you want to located on the ftp server. e.g. "/adf/123/newDir/remoteFile".
     * @return {Promise<any>} Returns a promise.
     *                        It will be triggered many times according the file's size.
     *                        The arg `0`, `0.1xx`, `0.2xx` ... `1` means the upload percent. When it reach `1`, means success.
     */
    FTP.prototype.upload = function (localFile, remoteFile) { return; };
    /**
     * Download one remote file on the ftp server to local path.
     *
     * @param localFile {string} The file (with full path) you want to upload. e.g. "/local/path/to/localFile".
     * @param remoteFile {string} The file (with full path) you want to located on the ftp server. e.g. "/adf/123/newDir/remoteFile".
     * @return {Promise<any>} Returns a promise.
     *                        It will be triggered many times according the file's size.
     *                        The arg `0`, `0.1xx`, `0.2xx` ... `1` means the upload percent. When it reach `1`, means success.
     */
    FTP.prototype.download = function (localFile, remoteFile) { return; };
    /**
     * Cancel all requests. Always success.
     *
     * @return {Promise<any>} Returns a promise
     */
    FTP.prototype.cancel = function () { return; };
    /**
     * Disconnect from ftp server.
     *
     * @return {Promise<any>} Returns a promise
     */
    FTP.prototype.disconnect = function () { return; };
    return FTP;
}(IonicNativePlugin));
FTP.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FTP.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], FTP.prototype, "connect", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FTP.prototype, "ls", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FTP.prototype, "mkdir", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FTP.prototype, "rmdir", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FTP.prototype, "rm", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], FTP.prototype, "upload", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], FTP.prototype, "download", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FTP.prototype, "cancel", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FTP.prototype, "disconnect", null);
FTP = __decorate([
    Plugin({
        pluginName: 'FTP',
        plugin: 'cordova-plugin-ftp',
        pluginRef: 'cordova.plugin.ftp',
        repo: 'https://github.com/xfally/cordova-plugin-ftp',
        platforms: ['Android', 'iOS']
    })
], FTP);
export { FTP };
//# sourceMappingURL=index.js.map