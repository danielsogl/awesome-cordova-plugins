/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from "@angular/core";
import { Plugin, Cordova, IonicNativePlugin } from "@ionic-native/core";
import { Observable } from "rxjs";

declare const window: any;

export type WebSocketInterfaces = {
  [key: string]: WebSocketInterface;
};

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

export interface WebSocketFailure {
  addr: string;
  port: number;
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
  state: "open" | "closed";
  httpFields: HttpFields;
  resource: string;
}

export interface HttpFields {
  "Accept-Encoding": string;
  "Accept-Language": string;
  "Cache-Control": string;
  Connection: string;
  Host: string;
  Origin: string;
  Pragma: string;
  "Sec-WebSocket-Extensions": string;
  "Sec-WebSocket-Key": string;
  "Sec-WebSocket-Version": string;
  Upgrade: string;
  "User-Agent": string;
}

/**
 * @name WebSocket Server
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { WSServer } from '@ionic-native/ws-server';
 *
 *
 * constructor(private wSServer: WSServer) { }
 *
 * ...
 *
 *
 * this.wSServer.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: "WebSocketServer",
  plugin: "cordova-plugin-websocket-server",
  pluginRef: "cordova.plugins.wsserver",
  repo: "https://github.com/becvert/cordova-plugin-websocket-server",
  platforms: ["Android", "iOS"]
})
@Injectable()
export class WebSocketServer extends IonicNativePlugin {
  @Cordova()
  getInterfaces(): Promise<WebSocketInterfaces> {
    return;
  }

  @Cordova({
    observable: true,
    clearFunction: "stop"
  })
  start(port: number, options: WebSocketOptions): Observable<WebSocketServerDetails> {
    return;
  }

  private onFunctionToObservable<T>(fnName: string) {
    return new Observable<T>(observer => {
      const id = window.cordova.plugins.wsserver[fnName](
        observer.next.bind(observer),
        observer.error.bind(observer)
      );

      return () => window.cordova.plugins.wsserver.removeCallback(id);
    });
  }

  watchMessage(): Observable<WebSocketMessage> {
    return this.onFunctionToObservable("onMessage");
  }

  watchOpen(): Observable<WebSocketConnection> {
    return this.onFunctionToObservable("onOpen");
  }

  watchClose(): Observable<WebSocketClose> {
    return this.onFunctionToObservable("onClose");
  }

  watchFailure(): Observable<WebSocketFailure> {
    return this.onFunctionToObservable("onFailure");
  }

  @Cordova()
  stop(): Promise<WebSocketServerDetails> {
    return;
  }

  @Cordova()
  send(conn: WebSocketIdentifier, msg: string): Promise<void> {
    return;
  }

  @Cordova()
  close(conn: WebSocketIdentifier, code: number, reason: string): Promise<void> {
    return;
  }
}
