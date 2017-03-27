import { Injectable } from '@angular/core';
import { Cordova, Plugin, CordovaCheck } from '@ionic-native/core';

declare var cordova: any;

export interface EmailComposerOptions {

  app?: string;

  to?: string | Array<string>;

  cc?: string | Array<string>;

  bcc?: string | Array<string>;

  attachments?: Array<any>;

  subject?: string;

  body?: string;

  isHtml?: boolean;

}


/**
 * @beta
 * @name Email Composer
 * @description
 *
 * Requires Cordova plugin: cordova-plugin-email-composer. For more info, please see the [Email Composer plugin docs](https://github.com/hypery2k/cordova-email-plugin).
 *
 * DISCLAIMER: This plugin is experiencing issues with the latest versions of Cordova. Use at your own risk. Functionality is not guaranteed. Please stay tuned for a more stable version.
 * A good alternative to this plugin is the social sharing plugin.
 *
 * @usage
 * ```typescript
 * import { EmailComposer } from '@ionic-native/email-composer';
 *
 * constructor(private emailComposer: EmailComposer) { }
 *
 * ...
 *
 *
 * this.emailComposer.isAvailable().then((available: boolean) =>{
 *  if(available) {
 *    //Now we know we can send
 *  }
 * });
 *
 * let email = {
 *   to: 'max@mustermann.de',
 *   cc: 'erika@mustermann.de',
 *   bcc: ['john@doe.com', 'jane@doe.com'],
 *   attachments: [
 *     'file://img/logo.png',
 *     'res://icon.png',
 *     'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
 *     'file://README.pdf'
 *   ],
 *   subject: 'Cordova Icons',
 *   body: 'How are you? Nice greetings from Leipzig',
 *   isHtml: true
 * };
 *
 * // Send a text message using default options
 * this.emailComposer.open(email);
 *
 * ```
 * @interfaces
 * EmailComposerOptions
 */
@Plugin({
  pluginName: 'EmailComposer',
  plugin: 'cordova-plugin-email',
  pluginRef: 'cordova.plugins.email',
  repo: 'https://github.com/hypery2k/cordova-email-plugin',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class EmailComposer {

  /**
   * Verifies if sending emails is supported on the device.
   *
   * @param [app] {string} App id or uri scheme.
   * @returns {Promise<any>} Resolves if available, rejects if not available
   */
  @CordovaCheck()
  isAvailable(app?: string): Promise<any> {
    return new Promise<boolean>((resolve, reject) => {
      if (app) {
        cordova.plugins.email.isAvailable(app, (isAvailable) => {
          if (isAvailable) {
            resolve();
          } else {
            reject();
          }
        });
      } else {
        cordova.plugins.email.isAvailable((isAvailable) => {
          if (isAvailable) {
            resolve();
          } else {
            reject();
          }
        });
      }
    });
  }

  /**
   * Adds a new mail app alias.
   *
   * @param alias {string} The alias name
   * @param packageName {string} The package name
   */
  @Cordova()
  addAlias(alias: string, packageName: string): void { }

  /**
   * Displays the email composer pre-filled with data.
   *
   * @param options {EmailComposerOptions} Email
   * @param [scope] {any} Scope for the promise
   * @returns {Promise<any>} Resolves promise when the EmailComposer has been opened
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 3
  })
  open(options: EmailComposerOptions, scope?: any): Promise<any> { return; }

}
