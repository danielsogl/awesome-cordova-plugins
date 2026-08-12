import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

/**
 * @name FirebasexFunctions
 * @description
 * Cordova plugin for Firebase Cloud Functions - part of the modular cordova-plugin-firebasex family.
 * @usage
 * ```typescript
 * import { FirebasexFunctions } from '@awesome-cordova-plugins/firebasex-functions/ngx';
 *
 * constructor(private firebasexFunctions: FirebasexFunctions) { }
 *
 * ...
 *
 * this.firebasexFunctions.functionsHttpsCallable('myFunction', { foo: 'bar' }).then((result) => console.log(result));
 * ```
 */
@Plugin({
  pluginName: 'FirebasexFunctions',
  plugin: 'cordova-plugin-firebasex-functions',
  pluginRef: 'FirebasexFunctions',
  repo: 'https://github.com/dpa99c/cordova-plugin-firebasex-functions',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class FirebasexFunctions extends AwesomeCordovaNativePlugin {
  /**
   * Invokes an HTTPS-callable Cloud Function by name.
   *
   * @param {string} name - name of the Cloud Function to call
   * @param {any} functionsArgs - arguments to pass to the function (any JSON-serialisable value)
   * @returns {Promise<any>} the function's return value
   */
  @Cordova()
  functionsHttpsCallable(name: string, functionsArgs: any): Promise<any> {
    return;
  }
}
