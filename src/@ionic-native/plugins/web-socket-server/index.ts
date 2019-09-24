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
import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

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
  pluginName: 'WebSocketServer',
  plugin: 'cordova-plugin-websocket-server',
  pluginRef: 'cordova.plugins.wsserver',
  repo: 'https://github.com/becvert/cordova-plugin-websocket-server',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class WebSocketServer extends IonicNativePlugin {

  @Cordova()
  getInterfaces(): Promise<any> {
    return;
  }

  @Cordova({
      clearFunction: 'stop',
  })
  start(port: number, options: any): Promise<any> {
    return;
  }

  @Cordova()
  stop(): Promise<any> {
    return;
  }

  @Cordova()
  send(conn: any, msg: any): Promise<any> {
    return;
  }

  @Cordova()
  close(conn: any, code: any, reason: any): Promise<any> {
    return;
  }

}
