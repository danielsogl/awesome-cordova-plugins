import {Plugin, Cordova} from './plugin';

/**
 * Email object for Opening Email Composer
 */
export interface email {
  app?: string,
  to: string | Array<string>,
  cc: string | Array<string>,
  bcc: string | Array<string>,
  attachments: Array<any>,
  subject: string,
  body: string,
  isHtml: boolean
}

/**
 * @name Email Composer
 * @description
 *
 * Requires Cordova plugin: cordova-plugin-email-composer. For more info, please see the [Email Composer plugin docs](https://github.com/katzer/cordova-plugin-email-composer).
 *
 * @usage
 * ```ts
 * import {EmailComposer} from 'ionic-native';
 *
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
 * EmailComposer.send(email);
 *
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-email-composer',
  pluginRef: 'cordova.plugins.email',
  repo: 'https://github.com/katzer/cordova-plugin-email-composer.git',
  platforms: ['Android', 'iOS', 'Windows Phone 8']
})
export class EmailComposer {
  
  @Cordova({
    successIndex: 1,
    errorIndex: 3
  })
  static isAvailable(app: string, scope: any) : Promise<boolean> {return}

  @Cordova()
  static addAlias(alias: string, packageName: string): void {}
  
  /**
   * Opens Email Composer with email contents
   * @param email {email} Email
   * @returns {Promise<any>} Resolves promise when the EmailComposer has been opened
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 3
  })
  static open(email: email, scope: any) : Promise<any> {return}

}
