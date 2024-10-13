import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin, CordovaProperty } from '@awesome-cordova-plugins/core';
import { Observable, fromEventPattern } from 'rxjs';
import { filter, map } from 'rxjs/operators';

/**
 * @name SocketsTcp
 * @description
 * This plugin provides TCP client sockets for Android and iOS.
 * @usage
 * ```typescript
 * import { SocketsTcp } from '@awesome-cordova-plugins/sockets-tcp/ngx';
 *
 * constructor(private socketsTcp: SocketsTcp) { }
 *
 * ...
 *
 * this.platform.ready().then(() => {
 *    this.socketsTcp.getSockets()
 *      .then((result: any) => console.log(res))
 *      .catch((error: any) => console.error(error));
 * })
 *
 * ```
 */
@Plugin({
  pluginName: 'SocketsTcp',
  plugin: 'cordova-plugin-chrome-apps-sockets-tcp',
  pluginRef: 'chrome.sockets.tcp',
  repo: 'https://github.com/KoenLav/cordova-plugin-chrome-apps-sockets-tcp',
  install: 'ionic cordova plugin add https://github.com/KoenLav/cordova-plugin-chrome-apps-sockets-tcp',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class SocketsTcp extends AwesomeCordovaNativePlugin {
  @CordovaProperty()
  onReceive: SocketTcpEvent;

  @CordovaProperty()
  onReceiveError: SocketTcpEvent;

  /**
   * @param properties
   */
  @Cordova()
  create(properties: any): Promise<SocketTcpInfo> {
    return;
  }

  /**
   *
   * @param socketId
   * @param properties
   */
  @Cordova()
  update(socketId: number, properties: any): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   * @param paused
   */
  @Cordova()
  setPaused(socketId: number, paused: boolean): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   * @param enabled
   * @param delay
   */
  @Cordova()
  setKeepAlive(socketId: number, enabled: boolean, delay: any): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   * @param noDelay
   */
  @Cordova({
    platforms: ['Android'],
  })
  setNoDelay(socketId: number, noDelay: any): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   * @param peerAddress
   * @param peerPort
   */
  @Cordova()
  connect(socketId: number, peerAddress: string, peerPort: number): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   */
  @Cordova()
  disconnect(socketId: number): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   * @param options
   */
  @Cordova()
  secure(socketId: number, options: any): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   * @param data
   */
  @Cordova()
  send(socketId: number, data: ArrayBuffer): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   */
  @Cordova()
  close(socketId: number): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   */
  @Cordova()
  getInfo(socketId: number): Promise<any> {
    return;
  }

  /**
   *
   */
  @Cordova()
  getSockets(): Promise<SocketTcpInfo[]> {
    return;
  }

  /**
   *
   * @param socketId
   * @param options
   */
  @Cordova()
  pipeToFile(socketId: number, options: any): Promise<any> {
    return;
  }

  /**
   * Watch all incoming data event
   */
  public onReceiveData(): Observable<SocketTcpDataInfo> {
    return fromEventPattern(
      (eventHandler) => this.onReceive.addListener(eventHandler),
      (errorEventHandler) => this.onReceive.removeListener(errorEventHandler)
    ).pipe(
      map((socketUdpDataInfo: SocketTcpDataInfo) => {
        socketUdpDataInfo.dataAsSting = socketUdpDataInfo.data
          ? new TextDecoder().decode(socketUdpDataInfo.data).trim()
          : null;
        return socketUdpDataInfo;
      })
    );
  }

  /**
   * Watch socket incoming data
   * @param socketId
   */
  public onReceiveDataBySocketId(socketId: number) {
    return this.onReceiveData().pipe(filter((socketDataInfo) => socketDataInfo.socketId === socketId));
  }

  /**
   * Watch all sockets incoming error event listener
   */
  public onReceiveDataError(): Observable<SocketTcpErrorInfo> {
    return fromEventPattern(
      (eventHandler) => this.onReceiveError.addListener(eventHandler),
      (errorEventHandler) => this.onReceiveError.removeListener(errorEventHandler)
    );
  }

  /**
   * Watch socket incoming error event listener
   * @param socketId
   */
  public onReceiveDataErrorBySocketId(socketId: number) {
    return this.onReceiveDataError().pipe(filter((socketDataInfo) => socketDataInfo.socketId === socketId));
  }
}

export interface SocketTcpInfo {
  socketId: number;
  persistent?: boolean;
  bufferSize?: number;
  connected?: boolean;
  name?: string;
  paused?: boolean;
  localAddress?: string;
  localPort?: number;
  peerAddress?: string;
  peerPort?: number;
  [key: string]: any;
}

export interface SocketTcpDataInfo {
  socketId: number;
  uri: string;
  bytesRead: number;
  data: ArrayBuffer;
  dataAsSting: string;
}

export interface SocketTcpErrorInfo {
  message: string;
  resultCode: SocketTcpErrorResultCode;
  socketId: number;
  e?: boolean;
}

export enum SocketTcpErrorResultCode {
  SocketClosedByServer = 1,
  ConnectionTimedOut = 2,
  GenericSocketError = 3,
  SocketNotConnected = 4,
  ConnectionRefused = 5,
}

interface SocketTcpEvent {
  addListener(cb: (...args: any[]) => void): void;

  removeListener(cb: (...args: any[]) => void): void;

  fire(): void;

  hasListener(): boolean;

  hasListeners(): boolean;

  // Stub
  addRules(): void;

  // Stub
  getRules(): void;

  // Stub
  removeRules(): void;
}
