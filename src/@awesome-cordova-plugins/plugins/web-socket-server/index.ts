import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

declare const window: any;

export interface WebSocketInterfaces {
  [key: string]: WebSocketInterface;
}

export interface WebSocketInterface {
  ipv4Addresses: string[];
  ipv6Addresses: string[];
}

export interface WebSocketOptions {
  origins?: string[];
  protocols?: string[];
  tcpNoDelay?: boolean;
}

export interface WebSocketIdentifier {
  uuid: string;
}

export interface WebSocketServerDetails {
  addr: string;
  port: number;
}

export interface WebSocketFailure extends WebSocketServerDetails {
  reason: string;
}

export interface WebSocketMessage {
  conn: WebSocketConnection;
  msg: string;
}

export interface WebSocketClose {
  conn: WebSocketConnection;
  code: number;
  reason: string;
  wasClean: boolean;
}

export interface WebSocketConnection extends WebSocketIdentifier {
  remoteAttr: string;
  state: 'open' | 'closed';
  httpFields: HttpFields;
  resource: string;
}

export interface HttpFields {
  'Accept-Encoding': string;
  'Accept-Language': string;
  'Cache-Control': string;
  Connection: string;
  Host: string;
  Origin: string;
  Pragma: string;
  'Sec-WebSocket-Extensions': string;
  'Sec-WebSocket-Key': string;
  'Sec-WebSocket-Version': string;
  Upgrade: string;
  'User-Agent': string;
}

/**
 * @name WebSocket Server
 * @description
 * This plugin allows you to run a single, lightweight, barebone WebSocket Server.
 * @usage
 * ```typescript
 * import { WebSocketServer } from '@awesome-cordova-plugins/web-socket-server';
 *
 * constructor(private wsserver: WebSocketServer) { }
 *
 * ...
 *
 * // start websocket server
 * this.wsserver.start(8888, {}).subscribe({
 *   next: server => console.log(`Listening on ${server.addr}:${server.port}`),
 *   error: error => console.log(`Unexpected error`, error);
 * });
 *
 * // watch for any messages
 * this.wsserver.watchMessage().subscribe(result => {
 *   console.log(`Received message ${result.msg} from ${result.conn.uuid}`);
 * });
 *
 * // send message to connection with specified uuid
 * this.wsserver.send({ uuid: '8e7c4f48-de68-4b6f-8fca-1067a353968d' }, 'Hello World');
 *
 * // stop websocket server
 * this.wsserver.stop().then(server => {
 *   console.log(`Stop listening on ${server.addr}:${server.port}`);
 * });
 *
 * ```
 */
@Plugin({
  pluginName: 'WebSocketServer',
  plugin: 'cordova-plugin-websocket-server',
  pluginRef: 'cordova.plugins.wsserver',
  repo: 'https://github.com/becvert/cordova-plugin-websocket-server',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class WebSocketServer extends AwesomeCordovaNativePlugin {
  /**
   * Return this device's interfaces
   *
   * @returns {Promise<WebSocketInterfaces>}
   */
  @Cordova()
  getInterfaces(): Promise<WebSocketInterfaces> {
    return;
  }

  /**
   * Start websocket server
   *
   * @param port {number} Local port on which the service runs. (0 means any free port)
   * @param options {WebSocketOptions} Additional options for websocket
   * @returns {Observable<WebSocketServerDetails>} Returns Observable where all generic error can be catched (mostly JSONExceptions)
   */
  @Cordova({
    observable: true,
    clearFunction: 'stop',
  })
  start(port: number, options: WebSocketOptions): Observable<WebSocketServerDetails> {
    return;
  }

  private onFunctionToObservable<T>(fnName: string) {
    return new Observable<T>((observer) => {
      const id = window.cordova.plugins.wsserver[fnName](observer.next.bind(observer), observer.error.bind(observer));

      return () => window.cordova.plugins.wsserver.removeCallback(id);
    });
  }

  /**
   * Watches for new messages
   *
   * @returns {Observable<WebSocketMessage>}
   */
  watchMessage(): Observable<WebSocketMessage> {
    return this.onFunctionToObservable('onMessage');
  }

  /**
   * Watches for new opened connections
   *
   * @returns {Observable<WebSocketConnection>}
   */
  watchOpen(): Observable<WebSocketConnection> {
    return this.onFunctionToObservable('onOpen');
  }

  /**
   * Watches for closed connections
   *
   * @returns {Observable<WebSocketClose>}
   */
  watchClose(): Observable<WebSocketClose> {
    return this.onFunctionToObservable('onClose');
  }

  /**
   * Watches for any websocket failures
   *
   * @returns {Observable<WebSocketFailure>}
   */
  watchFailure(): Observable<WebSocketFailure> {
    return this.onFunctionToObservable('onFailure');
  }

  /**
   * Stop websocket server and closes all connections
   *
   * @returns {Promise<WebSocketServerDetails>}
   */
  @Cordova()
  stop(): Promise<WebSocketServerDetails> {
    return;
  }

  /**
   * Send Message to a connected device
   *
   * @param conn {WebSocketIdentifier} Connection to send message to
   * @param msg {string} Message to send
   * @returns {Promise<void>}
   */
  @Cordova()
  send(conn: WebSocketIdentifier, msg: string): Promise<void> {
    return;
  }

  /**
   * Close specific connection using uuid
   *
   * @param conn {WebSocketIdentifier} Connection to close
   * @param code {number} Close code, determines if it was clean
   * @param reason {string} Reason for closing
   * @returns {Promise<void>}
   */
  @Cordova()
  close(conn: WebSocketIdentifier, code: number, reason: string): Promise<void> {
    return;
  }
}
