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
export declare class Httpd {
    /**
     * Starts a web server.
     * @returns {Observable<string>} Returns an Observable. Subscribe to receive the URL for your web server (if succeeded). Unsubscribe to stop the server.
     * @param options {HttpdOptions}
     */
    static startServer(options?: any): Observable<string>;
    /**
     * Gets the URL of the running server
     * @returns {Promise<string>} Returns a promise that resolves with the URL of the web server.
     */
    static getUrl(): Promise<string>;
    /**
     * Get the local path of the running webserver
     * @returns {Promise<string>} Returns a promise that resolves with the local path of the web server.
      */
    static getLocalPath(): Promise<string>;
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
