import { IonicNativePlugin } from '@ionic-native/core';
export interface FileUploadOptions {
    /**
     * The name of the form element.
     * Defaults to 'file'.
     */
    fileKey?: string;
    /**
     * The file name to use when saving the file on the server.
     * Defaults to 'image.jpg'.
     */
    fileName?: string;
    /**
     * The HTTP method to use - either PUT or POST.
     * Defaults to POST.
     */
    httpMethod?: string;
    /**
     * The mime type of the data to upload.
     * Defaults to image/jpeg.
     */
    mimeType?: string;
    /**
     * A set of optional key/value pairs to pass in the HTTP request.
     */
    params?: {
        [s: string]: any;
    };
    /**
     * Whether to upload the data in chunked streaming mode.
     * Defaults to true.
     */
    chunkedMode?: boolean;
    /**
     * A map of header name/header values. Use an array to specify more
     * than one value. On iOS, FireOS, and Android, if a header named
     * Content-Type is present, multipart form data will NOT be used.
     */
    headers?: {
        [s: string]: any;
    };
}
export interface FileUploadResult {
    /**
     * The number of bytes sent to the server as part of the upload.
     */
    bytesSent: number;
    /**
     * The HTTP response code returned by the server.
     */
    responseCode: number;
    /**
     * The HTTP response returned by the server.
     */
    response: string;
    /**
     * The HTTP response headers by the server.
     */
    headers: {
        [s: string]: any;
    };
}
export interface FileTransferError {
    /**
     * One of the predefined error codes listed below.
     */
    code: number;
    /**
     * URL to the source.
     */
    source: string;
    /**
     * URL to the target.
     */
    target: string;
    /**
     * HTTP status code. This attribute is only available when a response
     * code is received from the HTTP connection.
     */
    http_status: number;
    /**
     * Response body. This attribute is only available when a response is received from the HTTP connection.
     */
    body: string;
    /**
     * Either e.getMessage or e.toString.
     */
    exception: string;
}
/**
 * @name Transfer
 *
 * @description
 * This plugin allows you to upload and download files.
 *
 * @usage
 * ```typescript
 * import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
 * import { File } from '@ionic-native/file';
 *
 * constructor(private transfer: Transfer, private file: File) { }
 *
 * ...
 *
 * const fileTransfer: TransferObject = this.transfer.create();
 *
 * // Upload a file:
 * fileTransfer.upload(..).then(..).catch(..);
 *
 * // Download a file:
 * fileTransfer.download(..).then(..).catch(..);
 *
 * // Abort active transfer:
 * fileTransfer.abort();
 *
 * // full example
 * upload() {
 *   let options: FileUploadOptions = {
 *      fileKey: 'file',
 *      fileName: 'name.jpg',
 *      headers: {}
 *      .....
 *   }
 *
 *   fileTransfer.upload('<file path>', '<api endpoint>', options)
 *    .then((data) => {
 *      // success
 *    }, (err) => {
 *      // error
 *    })
 * }
 **
 * download() {
 *   const url = 'http://www.example.com/file.pdf';
 *   fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {
 *     console.log('download complete: ' + entry.toURL());
 *   }, (error) => {
 *     // handle error
 *   });
 * }
 *
 * ```
 *
 * To store files in a different/publicly accessible directory, please refer to the following link
 * https://github.com/apache/cordova-plugin-file#where-to-store-files
 *
 * @interfaces
 * FileUploadOptions
 * FileUploadResult
 * FileTransferError
 * @classes
 * TransferObject
 */
export declare class Transfer extends IonicNativePlugin {
    /**
     * Error code rejected from upload with FileTransferError
     * Defined in FileTransferError.
     *      FILE_NOT_FOUND_ERR: 1   Return when file was not found
     *      INVALID_URL_ERR: 2,     Return when url was invalid
     *      CONNECTION_ERR: 3,      Return on connection error
     *      ABORT_ERR: 4,           Return on aborting
     *      NOT_MODIFIED_ERR: 5     Return on '304 Not Modified' HTTP response
     * @enum {number}
     */
    FileTransferErrorCode: {
        FILE_NOT_FOUND_ERR: number;
        INVALID_URL_ERR: number;
        CONNECTION_ERR: number;
        ABORT_ERR: number;
        NOT_MODIFIED_ERR: number;
    };
    /**
     * Creates a new FileTransfer object
     * @return {TransferObject}
     */
    create(): TransferObject;
}
/**
 * @hidden
 */
export declare class TransferObject {
    private _objectInstance;
    constructor();
    /**
     * Sends a file to a server.
     *
     * @param {string} fileUrl  Filesystem URL representing the file on the device or a data URI. For backwards compatibility, this can also be the full path of the file on the device.
     * @param {string} url  URL of the server to receive the file, as encoded by encodeURI().
     * @param {FileUploadOptions} options  Optional parameters.
     * @param {boolean} trustAllHosts  Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful since Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.
     * @returns {Promise<FileUploadResult>} Returns a Promise that resolves to a FileUploadResult and rejects with FileTransferError.
     */
    upload(fileUrl: string, url: string, options?: FileUploadOptions, trustAllHosts?: boolean): Promise<FileUploadResult>;
    /**
     * Downloads a file from server.
     *
     * @param {string} source  URL of the server to download the file, as encoded by encodeURI().
     * @param {string} target  Filesystem url representing the file on the device. For backwards compatibility, this can also be the full path of the file on the device.
     * @param {boolean} trustAllHosts  Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful because Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.
     * @param {object} Optional parameters, currently only supports headers (such as Authorization (Basic Authentication), etc).
     * @returns {Promise<any>} Returns a Promise that resolves to a FileEntry object.
     */
    download(source: string, target: string, trustAllHosts?: boolean, options?: {
        [s: string]: any;
    }): Promise<any>;
    /**
     * Registers a listener that gets called whenever a new chunk of data is transferred.
     * @param listener {function} Listener that takes a progress event.
     */
    onProgress(listener: (event: ProgressEvent) => any): void;
    /**
     * Aborts an in-progress transfer. The onerror callback is passed a FileTransferError
     * object which has an error code of FileTransferError.ABORT_ERR.
     */
    abort(): void;
}
