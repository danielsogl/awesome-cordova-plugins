import {Plugin, Cordova} from './plugin';
import {Observable} from 'rxjs/Observable';

declare var FileTransfer;

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
  params?: { [s: string]: any; }

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
  headers?: { [s: string]: any; }
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
  headers: { [s: string]: any; }
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
 * @description This plugin allows you to upload and download files.
 * Example:
 * Create instance:
 * const fileTransfer = new Transfer();
 *
 * Upload a file:
 * fileTransfer.upload(..).then(..).catch(..);
 *
 * Download a file:
 * fileTransfer.download(..).then(..).catch(..);
 *
 * Abort active transfer:
 * fileTransfer.abort();
 */
@Plugin({
  plugin: 'cordova-plugin-file-transfer',
  pluginRef: 'FileTransfer',
  repo: 'https://github.com/apache/cordova-plugin-file-transfer'
})
export class Transfer {

  public static FILE_NOT_FOUND_ERR: number = 1;
  public static INVALID_URL_ERR: number = 2;
  public static CONNECTION_ERR: number = 3;
  public static ABORT_ERR: number = 4;
  public static NOT_MODIFIED_ERR: number = 4;

  ft: any;

  constructor() {
    this.ft = new FileTransfer();
  }

  /**
   * Sends a file to a server.
   *
   * @param {string} fileUrl  Filesystem URL representing the file on the device or a data URI. For backwards compatibility, this can also be the full path of the file on the device.
   * @param {string} url  URL of the server to receive the file, as encoded by encodeURI().
   * @param {FileUploadOptions} options  Optional parameters.
   * @param {boolean} trustAllHosts: Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful since Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.
   * @return Returns a Promise that resolves to a FileUploadResult and rejects with FileTransferError.
   */
  upload(fileUrl: string, url: string, options?: FileUploadOptions, trustAllHosts?: boolean): Promise<FileUploadResult> {
    return new Promise((resolve, reject) => {
      this.ft.upload(fileUrl, url, (result: FileUploadResult) => {
        resolve(result);
      }, (err: FileTransferError) => {
        reject(err);
      });
    });
  }

  /**
   * Downloads a file from server.
   *
   * @param {string} source  URL of the server to download the file, as encoded by encodeURI().
   * @param {stirng} target  Filesystem url representing the file on the device. For backwards compatibility, this can also be the full path of the file on the device.
   * @param {boolean} trustAllHosts  Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful because Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.
   * @param {object} Optional parameters, currently only supports headers (such as Authorization (Basic Authentication), etc).
   * @return Returns a Promise that resolves to a FileEntry object.
   */
  download(source: string, target: string, trustAllHosts?: boolean, options?: { [s: string]: any; }): Promise<any> {
    return new Promise((resolve, reject) => {
      this.ft.download(source, target, (result: any) => {
        resolve(result);
      }, (err: FileTransferError) => {
        reject(err);
      }, trustAllHosts, options);
    })
  }

  /**
   * Aborts an in-progress transfer. The onerror callback is passed a FileTransferError
   * object which has an error code of FileTransferError.ABORT_ERR.
   */
  abort() {
     return this.ft.abort();
  }

}
