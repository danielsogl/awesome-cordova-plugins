import { Injectable } from '@angular/core';
import { Plugin, CordovaInstance, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

declare const window: any;

export enum UploadState {
  UPLOADED = 'UPLOADED',
  FAILED = 'FAILED',
  UPLOADING = 'UPLOADING',
  INITIALIZED = 'INITIALIZED',
}

export type UploadStateType = keyof typeof UploadState;

export interface UploadEvent {
  id?: string; // id of the upload
  state?: UploadStateType; // state of the upload (either UPLOADING, UPLOADED or FAILED)
  statusCode?: number; // response code returned by server after upload is completed
  serverResponse?: any; // server response received after upload is completed
  error?: any; // error message in case of failure
  errorCode?: number; // error code for any exception encountered
  progress?: any; // progress for ongoing upload
  eventId?: string; // id of the event
}

export interface FTMPayloadOptions {
  id: string;
  filePath: string;
  fileKey?: string;
  serverUrl: string;
  notificationTitle?: string;
  headers?: {
    [name: string]: string;
  };
  parameters?: {
    [name: string]: string;
  };
  [prop: string]: any;
}

export interface FTMOptions {
  callBack: (event: UploadEvent) => any;
  config?: {
    parallelUploadsLimit?: number;
  };
}

export class FileTransferManager {
  private _objectInstance: any;

  constructor(options: FTMOptions) {
    this._objectInstance = window.FileTransferManager.init(options.config, options.callBack);
  }

  @CordovaInstance()
  startUpload(payload: FTMPayloadOptions): void {
    return;
  }

  @CordovaInstance()
  removeUpload(id: any): Promise<any> {
    return;
  }

  @CordovaInstance()
  acknowledgeEvent(id: string): Promise<any> {
    return;
  }

  @CordovaInstance()
  destroy(): Promise<any> {
    return;
  }
}

/**
 * @name BackgroundUpload
 * @description
 * This plugin does something
 * @usage
 * ```typescript
 * import { BackgroundUpload } from '@awesome-cordova-plugins/background-upload/ngx';
 *
 *
 * constructor(private backgroundUpload: BackgroundUpload) { }
 *
 * ...
 *
 *
 * this.backgroundUpload.init({})
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'BackgroundUpload',
  plugin: 'cordova-plugin-background-upload',
  pluginRef: 'FileTransferManager',
  repo: 'https://github.com/spoonconsulting/cordova-plugin-background-upload',
  install: 'ionic cordova plugin add cordova-plugin-background-upload',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class BackgroundUpload extends AwesomeCordovaNativePlugin {
  FileTransferManager = FileTransferManager;

  init(options: FTMOptions): FileTransferManager {
    return new FileTransferManager(options);
  }
}
