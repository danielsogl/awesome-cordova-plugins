import { Injectable } from '@angular/core';
import {
  Plugin,
  Cordova,
  CordovaProperty,
  CordovaInstance,
  InstanceProperty,
  AwesomeCordovaNativePlugin,
} from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';


/**
 * @name gcdwebserver
 * @description
 * This plugin can start an HTTP server using GCDWebServer
 *
 * @usage
 * ```typescript
 * import { GCDWebServer } from '@awesome-cordova-plugins/gcdwebserver';
 *
 *
 * constructor(private gcdwebserver: GCDWebServer) { }
 *
 * ...
 *
 *
 * await this.gcdwebserver.startServer();
 * 
 *
 * ```
 */
@Plugin({
  pluginName: 'GCDWebServer',
  plugin: 'cordova-plugin-gcdwebserver',
  pluginRef: 'cordova.plugins.DBR',
  repo: 'https://github.com/xulihang/cordova-plugin-gcdwebserver',
  install: '',
  installVariables: [],
  platforms: ['iOS'],
})
@Injectable()
export class GCDWebServer extends AwesomeCordovaNativePlugin {
  /**
   * start the server
   * @param options {any}
   * @return {Promise<any>} Returns a promise
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  startServer(options?: any): Promise<any> {
    return;
  }

  /**
   * stop the server
   * @return {Promise<any>} Returns a promise
   */
  @Cordova({ successIndex: 1, errorIndex: 2 })
  stopServer(): Promise<any> {
    return;
  }

}
