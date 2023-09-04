import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name Smtp Client
 * @description
 * @usage
 * ```typescript
 * import { SmtpClient } from '@awesome-cordova-plugins/smtp-client/ngx';
 *
 * constructor(private smtpClient: SmtpClient) { }
 *
 * ...
 *
 * this.smtpClient.sendMail(mailSettings, success, failure);
 *
 * ```
 */
@Plugin({
  pluginName: 'SMTPClient',
  plugin: 'cordova-plugin-smtp-client',
  pluginRef: 'smtpClient',
  repo: 'https://github.com/CWBudde/cordova-plugin-smtp-client',
  install: 'ionic cordova plugin add cordova-plugin-smtp-client',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class SmtpClient extends AwesomeCordovaNativePlugin {
  /**
   * The sendMail function.
   *
   * var mailSettings = {
   *   emailFrom: "emailFrom@domain.com",
   *   emailTo: "emailTo@domain.com",
   *   smtp: "smtp-mail.domain.com",
   *   smtpUserName: "authuser@domain.com",
   *   smtpPassword: "password",
   *   attachments: ["attachment1", "attachment2"],
   *   subject: "email subject",
   *   textBody: "write something within the body of the email"
   * };
   *
   * var successCallback = function(message) {
   *  alert(message);
   * }
   *
   * var errorCallback = function(message) {
   *   alert("Error sending the email");
   * }
   *
   * @param mailSettings
   * @param successCallback
   * @param errorCallback
   * @returns {Promise<any>}
   */
  @Cordova()
  sendMail(mailSettings: any, successCallback: any, errorCallback: any): Promise<any> {
    return;
  }

  /**
   * You can call isLoaded to check if client is loaded.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  isLoaded(): Promise<any> {
    return;
  }
}
