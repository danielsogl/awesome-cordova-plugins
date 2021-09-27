import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

/**
 * @name Google Nearby
 * @description
 * This plugin adds support for the Google Nearby Messages API.
 * @usage
 * ```typescript
 * import { GoogleNearby } from '@awesome-cordova-plugins/google-nearby/ngx';
 *
 *
 * constructor(private googleNearby: GoogleNearby) { }
 *
 * this.googleNearby.publish('Hello')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * this.googleNearby.subscribe()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 * ```
 */
@Plugin({
  pluginName: 'GoogleNearby',
  plugin: 'cordova-plugin-google-nearby',
  pluginRef: 'window.nearby',
  repo: 'https://github.com/hahahannes/cordova-plugin-google-nearby',
  install: 'ionic cordova plugin add cordova-plugin-google-nearby --variable API_KEY="123456789"',
  installVariables: ['API_KEY'],
  platforms: ['Android'],
})
@Injectable()
export class GoogleNearby extends AwesomeCordovaNativePlugin {
  /**
   * Publish a message
   *
   * @param message {string} Message to publish
   * @returns {Promise<any>} Returns a promise that resolves when the message got published
   */
  @Cordova()
  publish(message: string): Promise<any> {
    return;
  }

  /**
   * Subscribe to receive messages
   *
   * @returns {Observable<any>} Returns an observable that emits received messages
   */
  @Cordova({
    observable: true,
    clearFunction: 'unsubscribe',
  })
  subscribe(): Observable<any> {
    return;
  }
}
