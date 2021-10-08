import { Injectable } from '@angular/core';
import { Cordova, CordovaCheck, AwesomeCordovaNativePlugin, Plugin, getPromise } from '@awesome-cordova-plugins/core';

export interface EmailComposerOptions {
  /**
   * App to send the email with
   */
  app?: string;

  /**
   * Email address(es) for To field
   */
  to?: string | string[];

  /**
   * Email address(es) for CC field
   */
  cc?: string | string[];

  /**
   * Email address(es) for BCC field
   */
  bcc?: string | string[];

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

  /**
   *  Content type of the email (Android only)
   */
  type?: string;
}

/**
 * @name Email Composer
 * @premier email-composer
 * @description
 *
 * Requires Cordova plugin: cordova-plugin-email-composer. For more info, please see the [Email Composer plugin docs](https://github.com/hypery2k/cordova-email-plugin).
 * @usage
 * ```typescript
 * import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
 *
 * constructor(private emailComposer: EmailComposer) { }
 *
 * ...
 *
 *
 * this.emailComposer.getClients().then((apps: []) => {
 *    // Returns an array of configured email clients for the device
 * });
 *
 * this.emailComposer.hasClient().then(app, (isValid: boolean) => {
 *  if (isValid) {
 *    // Now we know we have a valid email client configured
 *    // Not specifying an app will return true if at least one email client is configured
 *  }
 * });
 *
 * this.emailComposer.hasAccount().then((isValid: boolean) => {
 *  if (isValid) {
 *    // Now we know we have a valid email account configured
 *  }
 * });
 *
 * this.emailComposer.isAvailable().then(app, (available: boolean) => {
 *  if(available) {
 *    // Now we know we can send an email, calls hasClient and hasAccount
 *    // Not specifying an app will return true if at least one email client is configured
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
 * }
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
  platforms: ['Amazon Fire OS', 'Android', 'Browser', 'iOS', 'Windows', 'macOS'],
})
@Injectable()
export class EmailComposer extends AwesomeCordovaNativePlugin {
  /**
   * Checks if the app has a permission to access email accounts information
   *
   * @returns {Promise<boolean>} returns a promise that resolves with a boolean that indicates if the permission was granted
   */
  @Cordova({
    successIndex: 0,
    errorIndex: 2,
  })
  hasPermission(): Promise<boolean> {
    return;
  }

  /**
   * Request permission to access email accounts information
   *
   * @returns {Promise<boolean>} returns a promise that resolves with a boolean that indicates if the permission was granted
   */
  @Cordova({
    successIndex: 0,
    errorIndex: 2,
  })
  requestPermission(): Promise<boolean> {
    return;
  }

  /**
   * Verifies if an email account is configured on the device.
   *
   * @returns {Promise<any>} Resolves if available, rejects if not available
   */
  @CordovaCheck()
  hasAccount(): Promise<any> {
    return getPromise<boolean>((resolve) => {
      EmailComposer.getPlugin().hasAccount((result: boolean) => {
        if (result) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  /**
   * Verifies if a specific email client is installed on the device.
   *
   * @param {string} [app] App id or uri scheme.
   * @returns {Promise<any>} Resolves if available, rejects if not available
   */

  @CordovaCheck()
  hasClient(app?: string): Promise<any> {
    return getPromise<boolean>((resolve) => {
      if (app) {
        EmailComposer.getPlugin().hasClient(app, (result: boolean) => {
          if (result) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
      } else {
        EmailComposer.getPlugin().getClients((apps: string[]) => {
          resolve(apps && apps.length > 0);
        });
      }
    });
  }

  /**
   * Returns an array of email clients installed on the device.
   *
   * @returns {Promise<string[]>} Resolves if available, rejects if not available
   */
  @CordovaCheck()
  @Cordova({ platforms: ['Android'] })
  getClients(): Promise<string[]> {
    return getPromise<string[]>((resolve) => {
      EmailComposer.getPlugin().getClients((apps: any) => {
        if (Object.prototype.toString.call(apps) === '[object String]') {
          apps = [apps];
        }
        resolve(apps);
      });
    });
  }

  /**
   * Verifies if sending emails is supported on the device.
   *
   * @param {string} [app] App id or uri scheme.
   * @returns {Promise<any>} Resolves if available, rejects if not available
   */
  @CordovaCheck()
  isAvailable(app?: string): Promise<any> {
    return getPromise<boolean>((resolve) => {
      Promise.all([this.hasAccount, this.hasClient(app)]).then((results) => {
        return resolve(results.length === 2 && results[0] && results[1]);
      });
    });
  }

  /**
   * Displays the email composer pre-filled with data.
   *
   * @param {EmailComposerOptions} options Email
   * @param {any} [scope] Scope for the promise
   * @returns {Promise<any>} Resolves promise when the EmailComposer has been opened
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 3,
  })
  open(options: EmailComposerOptions, scope?: any): Promise<any> {
    return;
  }

  /**
   * Adds a new mail app alias.
   *
   * @param {string} alias The alias name
   * @param {string} packageName The package name
   */
  @Cordova()
  addAlias(alias: string, packageName: string): void {}
}
