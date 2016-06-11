import {Plugin, Cordova} from './plugin';
import {Observable} from 'rxjs/Observable';
/**
 * @name Httpd
 * @description
 * Embedded httpd for Cordova apps. Light weight HTTP server.
 */
@Plugin({
    plugin: 'https://github.com/floatinghotpot/cordova-httpd.git',
    pluginRef: 'CorHttpd',
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
    static startServer(options: any): Observable<string> {return; }

    /**
     * Gets the URL of the running server
     * @returns {Promise<string>} Returns a promise that resolves with the URL of the web server.
     */
    @Cordova()
    static getUrl(): Promise<string> {return; }

    /**
     * Get the local path of the running webserver
     * @returns {Promise<string>} Returns a promise that resolves with the local path of the web server.
     */
    @Cordova()
    static getLocalPath(): Promise<string> {return; }
}
/**
 * These options are used for the Httpd.startServer() function.
 */
export interface HttpdOptions {
    /**
     * The public root directory for your web server.
     */
    www_root: string;
    /**
     * The port number to use.
     */
    port: number;
    /**
     * Setting this option to false will allow remote access to your web server (over any IP)
     */
    localhost_only: boolean;
}