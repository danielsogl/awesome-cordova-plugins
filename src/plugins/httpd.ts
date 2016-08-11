import { Cordova, Plugin } from './plugin';
import { Observable } from 'rxjs/Observable';


/**
 * @name Httpd
 * @description
 * Embedded httpd for Cordova apps. Light weight HTTP server.
 * @usage
 * ```typescript
 * import {Httpd, HttpdOptions} from 'ionic-native';
 *
 * let options: HttpdOptions = {
 *      www_root: 'httpd_root', // relative path to app's www directory
 *      port: 80,
 *      localhost_only: false
 *  };
 *
 * Httpd.startServer(options).subscribe((data) => {
 *  console.log('Server is live');
 * });
 *
 * ```
 */
@Plugin({
  plugin: 'https://github.com/floatinghotpot/cordova-httpd.git',
  pluginRef: 'cordova.plugins.CorHttpd',
  repo: 'https://github.com/floatinghotpot/cordova-httpd',
  platforms: ['iOS', 'Android']
})
export class Httpd {

  /**
   * Starts a web server.
   * @returns {Observable<string>} Returns an Observable. Subscribe to receive the URL for your web server (if succeeded). Unsubscribe to stop the server.
   * @param options {HttpdOptions}
   */
  @Cordova({
    observable: true,
    clearFunction: 'stopServer'
  })
  static startServer(options?: any): Observable<string> { return; }

  /**
   * Gets the URL of the running server
   * @returns {Promise<string>} Returns a promise that resolves with the URL of the web server.
   */
  @Cordova()
  static getUrl(): Promise<string> { return; }

  /**
   * Get the local path of the running webserver
   * @returns {Promise<string>} Returns a promise that resolves with the local path of the web server.
    */
  @Cordova()
  static getLocalPath(): Promise<string> { return; }

}

/**
 * These options are used for the Httpd.startServer() function.
 */
export interface HttpdOptions {
  /**
   * The public root directory for your web server. This path is relative to your app's www directory.
   * Default is current directory.
   */
  www_root?: string;
  /**
   * The port number to use.
   * Default is 8888
   */
  port?: number;
  /**
   * Setting this option to false will allow remote access to your web server (over any IP).
   * Default is false.
   */
  localhost_only?: boolean;
}
