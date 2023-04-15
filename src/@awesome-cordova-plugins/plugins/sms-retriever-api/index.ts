import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Observable, fromEvent } from 'rxjs';

export interface IncomingSMS {
  message: string;
  [key: string]: any;
}

export enum SmsRetrieverStatus {
  AlreadyStarted = 'SMS_RETRIEVER_ALREADY_STARTED',
  Started = 'SMS_RETRIEVER_STARTED',
  Done = 'SMS_RETRIEVER_DONE',
  Timeout = 'TIMEOUT',
}

/**
 * @name SmsRetrieverApi
 * @description
 * This plugin retries the SMS which arrive without requiring READ permissions.
 * @usage
 * ```typescript
 * import { SmsRetrieverApi } from '@awesome-cordova-plugins/sms-retriever-api/ngx';
 *
 *
 * constructor(private SmsRetrieverApi: SmsRetrieverApi) { }
 *
 * ...
 *
 *
 * this.SmsRetrieverApi.getHashString()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 * this.SmsRetrieverApi.startWatch()
 *   .subscribe(
 *    (res: any) => console.log(res),
 *    (error: any) => console.error(error),
 *   )
 *   .catch((error: any) => console.error(error));
 * this.onSMSArrive.onSMSArrive()
 *   .subscribe(() => { console.log(); });
 * ```
 */
@Plugin({
  pluginName: 'SmsRetriever',
  plugin: 'cordova-plugin-sms-retriever',
  pluginRef: 'cordova.plugins.SMSRetriever',
  repo: 'https://github.com/andreszs/cordova-plugin-sms-retriever',
  install: 'ionic cordova plugin add cordova-plugin-sms-retriever --variable PLAY_SERVICES_VERSION="18.0.1"',
  installVariables: ['PLAY_SERVICES_VERSION'],
  platforms: ['Android'],
})
@Injectable()
export class SmsRetrieverApi extends AwesomeCordovaNativePlugin {
  /**
   * This function start watching message arrive event and retrieve message text.
   *
   * @returns {Observable<string>} Returns an observable that resolves when retries SMS text or TIMEOUT after 5 min.
   */
  @Cordova({
    observable: true,
  })
  startWatch(): Observable<string> {
    return;
  }

  /**
   * This function stop watching message.
   *
   * @returns {Promise<string>} Returns a promise that resolves when successfully remove sms listener.
   */
  @Cordova()
  stopWatch(): Promise<string> {
    return;
  }

  /**
   * This function is to get hash string of APP.
   *
   * @returns {Promise<string>} Returns a promise that resolves when successfully generate hash of APP.
   */
  @Cordova()
  getHashString(): Promise<string> {
    return;
  }

  /**
   * Opens a dialog to select your mobile numbers saved in phone and returns selected phone number.
   *
   * @returns {Promise<string>} Returns a promise that resolves when successfully get phone number
   */
  @Cordova()
  getPhoneNumber(): Promise<string> {
    return;
  }

  /**
   * Watch incoming SMS event listener
   *
   * @returns {Observable<IncomingSMS>}
   */
  onSMSArrive(): Observable<IncomingSMS> {
    return fromEvent<IncomingSMS>(document, 'onSMSArrive');
  }
}
