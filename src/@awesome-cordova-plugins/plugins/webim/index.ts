import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, Cordova, Plugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

export interface InitParams {
  accountName: string;
  closeWithClearVisitorData: boolean;
  storeHistoryLocally: boolean;
  pushToken: string;
  location: string;
  visitorFields: string;
}

export interface DefaultResponse {
  result: string;
}

export interface Quote {
  state: string;
  id: string;
  text: string;
  url: string;
  timestamp: string;
  senderName: string;
  authorID: string;
}

export interface Employee {
  id: string;
  firstname: string;
  avatar: string;
}

export interface Keyboard {
  state: string;
  buttons: Array<KeyboardButton>;
  keyboardResponse: KeyboardResponse;
}

export interface KeyboardRequest {
  messageID: string;
  button: KeyboardButton;
}

export interface KeyboardButton {
  text: string;
  id: string;
}

export interface KeyboardResponse {
  buttonID: string;
  messageID: string;
}

export interface Message {
  id: string;
  currentChatID: string;
  text: string;
  url: string;
  imageWidth: number;
  imageHeight: number;
  thumbUrl: string;
  timestamp: string;
  sender: string;
  quote: Quote;
  operator: Employee;
  keyboard: Keyboard;
  keyboardRequest: KeyboardRequest;
  isFirst: boolean;
  isReadByOperator: boolean;
  canBeReplied: boolean;
}

export interface DialogState {
  employee: Employee;
}

export type MessagesHistoryResponse = Array<Message>;
export type MessageResponse = Message;
export type DialogStateResponse = DialogState;

/**
 * @name WebimSDK
 * @description
 * A cordova plugin, a JS version of Webim SDK
 * @usage
 * ```typescript
 * import { WebimSDK } from '@awesome-cordova-plugins/webim/ngx';
 *
 *
 * constructor(private webim: WebimSDK) { }
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
  pluginName: 'WebimSDK',
  plugin: 'ru.webim.sdk',
  pluginRef: 'webimsdk',
  repo: 'https://github.com/webim/webim-cordova-plugin.git',
  install: 'cordova plugin add https://github.com/webim/webim-cordova-plugin.git',
  platforms: ['Android', 'iOS', 'Browser'],
})
@Injectable()
export class WebimSDK extends AwesomeCordovaNativePlugin {
  @Cordova()
  init(params: InitParams): Promise<DefaultResponse> {
    return;
  }

  @Cordova()
  requestDialog(): Promise<DefaultResponse> {
    return;
  }

  @Cordova()
  getMessagesHistory(limit: number, offset: number): Promise<MessagesHistoryResponse | DefaultResponse> {
    return;
  }

  @Cordova()
  typingMessage(message: string): Promise<string> {
    return;
  }

  @Cordova()
  sendMessage(message: string): Promise<MessageResponse | DefaultResponse> {
    return;
  }

  @Cordova()
  replyMessage(message: string, repliedMessage: Message): Promise<MessageResponse | DefaultResponse> {
    return;
  }

  @Cordova()
  sendFile(filePath: string): Promise<string | DefaultResponse> {
    return;
  }

  @Cordova()
  sendSurveyAnswer(surveyAnswer: string): Promise<any> {
    return;
  }

  @Cordova()
  cancelSurvey(): Promise<any> {
    return;
  }

  @Cordova()
  onMessage(): Observable<MessageResponse> {
    return;
  }

  @Cordova()
  onDeletedMessage(): Observable<MessageResponse> {
    return;
  }

  @Cordova()
  onFile(message: string): Observable<MessageResponse> {
    return;
  }

  @Cordova()
  onTyping(): Observable<unknown> {
    return;
  }

  @Cordova()
  onConfirm(): Observable<MessageResponse> {
    return;
  }

  @Cordova()
  onDialog(): Observable<DialogStateResponse> {
    return;
  }

  @Cordova()
  onBan(): Observable<unknown> {
    return;
  }

  @Cordova()
  close(): Observable<DefaultResponse> {
    return;
  }

  @Cordova()
  rateOperator(id: string, rating: number): Promise<any> {
    return;
  }

  @Cordova()
  rateOperatorWithNote(id: string, rating: number, note: string): Promise<any> {
    return;
  }

  @Cordova()
  sendDialogToEmailAddress(emailAddress: string): Promise<any> {
    return;
  }

  @Cordova()
  onUnreadByVisitorMessageCount(): Observable<unknown> {
    return;
  }

  @Cordova()
  onSurvey(): Observable<unknown> {
    return;
  }

  @Cordova()
  onNextQuestion(): Observable<unknown> {
    return;
  }

  @Cordova()
  onSurveyCancel(): Observable<unknown> {
    return;
  }

  @Cordova()
  getUnreadByVisitorMessageCount(): Promise<any> {
    return;
  }

  @Cordova()
  sendKeyboardRequest(): Promise<any> {
    return;
  }

  @Cordova()
  setChatRead(): Promise<any> {
    return;
  }

  @Cordova()
  getShowEmailButton(): Promise<any> {
    return;
  }

  @Cordova()
  showRateOperatorWindow(): Promise<any> {
    return;
  }

  @Cordova()
  onLogging(): Observable<unknown> {
    return;
  }
}
