import { Injectable } from '@angular/core';
import { Cordova, Plugin, CordovaCheck, IonicNativePlugin } from '@ionic-native/core';

export interface EmailComposerOptions {

  /**
   * App to send the email with
   */
  app?: string;

  /**
   * Email address(es) for To field
   */
  to?: string | Array<string>;

  /**
   * Email address(es) for CC field
   */
  cc?: string | Array<string>;

  /**
   * Email address(es) for BCC field
   */
  bcc?: string | Array<string>;

  /**
   * File paths or base64 data streams
   */
  attachments?: string[];

  /**
   * Subject of the email
   */
  subject?: string;

  /**
   * Email body (for HTML, set isHtml to true)
   */
  body?: string;

  /**
   * Indicates if the body is HTML or plain text
   */
  isHtml?: boolean;

}


/**
 * @name Email Composer
 * @description
 *
 * Requires Cordova plugin: cordova-plugin-email-composer. For more info, please see the [Email Composer plugin docs](https://github.com/hypery2k/cordova-email-plugin).
 *
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
 * ```
 *
 * You can also assign aliases to email apps
 * ```ts
 * // add alias
 * this.email.addAlias('gmail', 'com.google.android.gm');
 *
 * // then use alias when sending email
 * this.email.open({
 *   app: 'gmail',
 *   ...
 * });
 * ```
 * @interfaces
 * EmailComposerOptions
 */
@Plugin({
  pluginName: 'EmailComposer',
  plugin: 'cordova-plugin-email-composer',
  pluginRef: 'cordova.plugins.email',
  repo: 'https://github.com/katzer/cordova-plugin-email-composer',
  platforms: ['Amazon Fire OS', 'Android', 'Browser', 'iOS', 'Windows']
})
@Injectable()
export class EmailComposer extends IonicNativePlugin {

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
        EmailComposer.getPlugin().isAvailable(app, (isAvailable: boolean) => {
          if (isAvailable) {
            resolve();
          } else {
            reject();
          }
        });
      } else {
        EmailComposer.getPlugin().isAvailable((isAvailable: boolean) => {
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
   * Request permission to access email accounts information
   * @return {Promise<boolean>} returns a promise that resolves with a boolean that indicates if the permission was granted
   */
  @Cordova({
    successIndex: 0,
    errorIndex: 2
  })
  requestPermission(): Promise<boolean> { return; }

  /**
   * Checks if the app has a permission to access email accounts information
   * @return {Promise<boolean>} returns a promise that resolves with a boolean that indicates if the permission was granted
   */
  @Cordova({
    successIndex: 0,
    errorIndex: 2
  })
  hasPermission(): Promise<boolean> { return; }

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
