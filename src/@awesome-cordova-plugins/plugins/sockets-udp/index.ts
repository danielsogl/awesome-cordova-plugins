import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin, CordovaProperty } from '@awesome-cordova-plugins/core';
import { Observable, fromEventPattern } from 'rxjs';
import { filter, map } from 'rxjs/operators';

/**
 * @name SocketsUdp
 * @description
 * This plugin provides UDP sockets for Android and iOS.
 * @usage
 * ```typescript
 * import { SocketsUdp } from '@awesome-cordova-plugins/sockets-udp/ngx';
 *
 * constructor(private socketsUdp: SocketsUdp) { }
 *
 * ...
 *
 * this.platform.ready().then(() => {
 *    this.socketsUdp.getSockets()
 *      .then((result: any) => console.log(res))
 *      .catch((error: any) => console.error(error));
 * })
 *
 * ```
 */
@Plugin({
  pluginName: 'SocketsUdp',
  plugin: 'cordova-plugin-chrome-apps-sockets-udp',
  pluginRef: 'chrome.sockets.udp',
  repo: 'https://github.com/herdwatch-apps/cordova-plugin-chrome-apps-sockets-udp',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class SocketsUdp extends AwesomeCordovaNativePlugin {
  @CordovaProperty()
  onReceive: SocketUdpEvent;

  @CordovaProperty()
  onReceiveError: SocketUdpEvent;

  /**
   *
   * @param properties
   */
  @Cordova()
  create(properties: { persistent?: number; name?: string; bufferSize?: number }): Promise<number> {
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
   * @param address
   * @param port
   */
  @Cordova()
  bind(socketId: number, address: string, port: number): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   * @param data
   * @param address
   * @param port
   */
  @Cordova()
  send(socketId: number, data: ArrayBuffer, address: string, port: number): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   */
  @Cordova()
  close(socketId: number): Promise<void> {
    return;
  }

  /**
   *
   * @param socketId
   */
  @Cordova()
  getInfo(socketId: number): Promise<SocketUdpInfo> {
    return;
  }

  /**
   *
   */
  @Cordova()
  getSockets(): Promise<SocketUdpInfo[]> {
    return;
  }

  /**
   *
   * @param socketId
   * @param enabled
   */
  @Cordova()
  setBroadcast(socketId: number, enabled: any): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   * @param address
   */
  @Cordova()
  joinGroup(socketId: number, address: number): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   * @param address
   */
  @Cordova()
  leaveGroup(socketId: number, address: string): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   * @param ttl
   */
  @Cordova()
  setMulticastTimeToLive(socketId: number, ttl: any): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   * @param enabled
   */
  @Cordova()
  setMulticastLoopbackMode(socketId: number, enabled: boolean): Promise<any> {
    return;
  }

  /**
   *
   * @param socketId
   */
  @Cordova()
  getJoinedGroups(socketId: number): Promise<any> {
    return;
  }

  /**
   * Watch all incoming data event
   */
  public onReceiveData(): Observable<SocketUdpDataInfo> {
    return fromEventPattern(
      (eventHandler) => this.onReceive.addListener(eventHandler),
      (errorEventHandler) => this.onReceive.removeListener(errorEventHandler)
    ).pipe(
      map((socketUdpDataInfo: SocketUdpDataInfo) => {
        socketUdpDataInfo.dataAsString = socketUdpDataInfo.data
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
  public onReceiveDataBySocketId(socketId: number): Observable<SocketUdpDataInfo> {
    return this.onReceiveData().pipe(filter((socketDataInfo) => socketDataInfo.socketId === socketId));
  }

  /**
   * Watch all sockets incoming error event listener
   */
  public onReceiveDataError(): Observable<SocketUdpErrorInfo> {
    return fromEventPattern(
      (eventHandler) => this.onReceiveError.addListener(eventHandler),
      (errorEventHandler) => this.onReceiveError.removeListener(errorEventHandler)
    );
  }

  /**
   * Watch socket incoming error event listener
   * @param socketId
   */
  public onReceiveDataErrorBySocketId(socketId: number): Observable<SocketUdpErrorInfo> {
    return this.onReceiveDataError().pipe(filter((socketUdpErrorInfo) => socketUdpErrorInfo.socketId === socketId));
  }
}

export interface SocketUdpInfo {
  socketId: number;
  persistent?: boolean;
  bufferSize?: number;
  name?: string;
  paused?: boolean;
  localAddress?: string;
  localPort?: number;
  [key: string]: any;
}

export interface SocketUdpDataInfo {
  socketId: number;
  data: ArrayBuffer;
  dataAsString: string;
  remoteAddress: string;
  remotePort: number;
}

export interface SocketUdpErrorInfo {
  message: string;
  resultCode: number;
  socketId: number;
}

interface SocketUdpEvent {
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
