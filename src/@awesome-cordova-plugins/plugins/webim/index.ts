import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

export interface InitParams {
  accountName: string;
  closeWithClearVisitorData: boolean;
  storeHistoryLocally: boolean;
  pushToken: string;
  location: string;
  visitorFields: string;
}

export interface InitResponse {
  result: string;
}


/**
 * @name Webim
 * @description
 * A cordova plugin, a JS version of Webim SDK
 * @usage
 * ```typescript
 * import { Webim } from '@awesome-cordova-plugins/webim/ngx';
 *
 *
 * constructor(private webim: Webim) { }
 *
 * ...
 *
 *
 * this.webim.functionName('Hi bro', 42)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'Webim',
  plugin: 'webim-cordova-plugin',
  pluginRef: 'Webim',
  repo: 'https://github.com/webim/webim-cordova-plugin.git',
  install: 'cordova plugin add https://github.com/webim/webim-cordova-plugin.git',
  platforms: ['Android', 'iOS', 'Browser'],
})
@Injectable()
export class Webim extends AwesomeCordovaNativePlugin {


  @Cordova()
  init(params: InitParams): Promise<InitResponse>{
    return;
  }


  @Cordova()
  requestDialog(): Promise<any> {
    return;
  }


  @Cordova()
  getMessagesHistory(limit: number, offset: number): Promise<any>{
    return;
  }


  @Cordova()
  typingMessage(message: string): Promise<any>{
    return;
  }

  @Cordova()
  sendMessage(message: string): Promise<any>{
    return;
  }

  @Cordova()
  replyMessage(message: string): Promise<any>{
    return;
  }

  @Cordova()
  sendFile(filePath: string): Promise<any>{
    return;
  }

  @Cordova()
  sendSurveyAnswer(surveyAnswer: string): Promise<any>{
    return;
  }

  @Cordova()
  cancelSurvey(): Promise<any>{
    return;
  }

  @Cordova()
  onMessage(): Promise<any>{
    return;
  }

  @Cordova()
  onDeletedMessage(): Promise<any>{
    return;
  }

  @Cordova()
  onFile(message: string): Promise<any>{
    return;
  }

  @Cordova()
  onTyping(): Promise<any>{
    return;
  }

  @Cordova()
  onConfirm(): Promise<any>{
    return;
  }

  @Cordova()
  onDialog(): Promise<any>{
    return;
  }

  @Cordova()
  onBan(): Promise<any>{
    return;
  }

  @Cordova()
  close(): Promise<any>{
    return;
  }

  @Cordova()
  rateOperator(id: string, rating: number): Promise<any>{
    return;
  }

  @Cordova()
  rateOperatorWithNote(id: string, rating: number, note: string): Promise<any>{
    return;
  }

  @Cordova()
  sendDialogToEmailAddress(emailAddress: string): Promise<any>{
    return;
  }

  @Cordova()
  onUnreadByVisitorMessageCount(): Promise<any>{
    return;
  }

  @Cordova()
  onSurvey(): Promise<any>{
    return;
  }

  @Cordova()
  onNextQuestion(): Promise<any>{
    return;
  }

  @Cordova()
  onSurveyCancel(): Promise<any>{
    return;
  }

  @Cordova()
  getUnreadByVisitorMessageCount(): Promise<any>{
    return;
  }

  @Cordova()
  sendKeyboardRequest(): Promise<any>{
    return;
  }

  @Cordova()
  setChatRead(): Promise<any>{
    return;
  }

  @Cordova()
  getShowEmailButton(): Promise<any>{
    return;
  }

  @Cordova()
  showRateOperatorWindow(): Promise<any>{
    return;
  }

  @Cordova()
  onLogging(): Promise<any>{
    return;
  }

}
