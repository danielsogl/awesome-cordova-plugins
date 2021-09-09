import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, IonicNativePlugin } from '@ionic-native/core';

export interface Builder {
  indicatorPosition(indicatorPosition: number): Builder;

  indicatorPadding(indicatorPadding: number): Builder;

  offerwallMode(offerwallMode: boolean): Builder;

  releaseMode(releaseMode: boolean): Builder;

  rewardMode(rewardMode: boolean): Builder;

  requestUUID(requestUUID: string): Builder;

  userProperties(userProperties: any): Builder;

  clickId(clickId: string): Builder;

  signature(signature: string): Builder;

  rewardInfo(rewardInfo: any): Builder;

  build(): Params;
}

export interface Params {
  androidApiKey: string;
  iOSApiKey: string;
  indicatorPosition: number;
  indicatorPadding: number;
  offerwallMode: boolean;
  releaseMode: boolean;
  rewardMode: boolean;
  requestUUID?: string;
  userProperties?: any;
  clickId?: string;
  rewardInfo?: any;
  signature?: string;
}

export interface BuilderCtor {
  new (androidApiKey: string, iOSApiKey: string): Builder;
}

/**
 * @name Pollfish
 * @description
 * Pollfish Ionic Native plugin wrapper
 *
 * @usage
 * ```typescript
 * import { Pollfish } from '@ionic-native/pollfish';
 *
 *
 * constructor(private pollfish: Pollfish) { }
 *
 * ...
 *
 * val params = this.pollfish.Builder('ANDROID_API_KEY', 'IOS_API_KEY')
 *  .indicatorPosition(this.pollfish.Position.TOP_LEFT)
 *  .indiactorPadding(8)
 *  .rewardMode(true)
 *  ...
 *  .build();
 *
 * this.pollfish.init(params);
 *
 * this.isPollfishPanelOpen((result) => {
 *  console.log(result);
 * });
 *
 * this.isPollfishPresent((result) => {
 *  console.log(result);
 * });
 *
 * this.pollfish.show();
 *
 * this.pollfish.hide();
 *
 * // Event Listeners
 *
 * this.pollfish.setEventCallback(pollfish.EventListener.OnPollfishSurveyReceived, (surveyInfo) => {
 *  console.log("Survey Received: " + JSON.stringify(surveyInfo));
 * });
 *
 * this.pollfish.setEventCallback(pollfish.EventListener.OnPollfishSurveyCompleted, (result) => {
 *  console.log("Survey Completed: " + JSON.stringify(surveyInfo));
 * });
 *
 * this.pollfish.setEventCallback(pollfish.EventListener.OnPollfishUserNotEligible, (_) => {
 *  console.log("Pollfish User Not Eligible");
 * });
 *
 * this.pollfish.setEventCallback(pollfish.EventListener.OnPollfishSurveyNotAvailable, (_) => {
 *  console.log("Pollfish Survey not available");
 * });
 *
 * this.pollfish.setEventCallback(pollfish.EventListener.OnPollfishOpened, (_) => {
 *  console.log("Pollfish Survey panel is open");
 * });
 *
 * this.pollfish.setEventCallback(pollfish.EventListener.OnPollfishClosed, (_) => {
 *  console.log("Pollfish Survey panel is closed");
 * });
 *
 * this.pollfish.setEventCallback(pollfish.EventListener.OnPollfishUserRejectedSurvey, (_) => {
 *  console.log("Pollfish User Rejected Survey");
 * });
 *
 * ```
 */
@Plugin({
  pluginName: 'Pollfish',
  plugin: 'cordova-plugin-pollfish',
  pluginRef: 'pollfish',
  repo: 'https://github.com/pollfish/cordova-plugin-pollfish',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Pollfish extends IonicNativePlugin {
  @CordovaProperty()
  EventListener: {
    OnPollfishClosed: string;
    OnPollfishOpened: string;
    OnPollfishSurveyReceived: string;
    OnPollfishSurveyCompleted: string;
    OnPollfishUserNotEligible: string;
    OnPollfishUserRejectedSurvey: string;
    OnPollfishSurveyNotAvailable: string;
  };

  @CordovaProperty()
  Position: {
    TOP_LEFT: number;
    TOP_RIGHT: number;
    MIDDLE_LEFT: number;
    MIDDLE_RIGHT: number;
    BOTTOM_LEFT: number;
    BOTTOM_RIGHT: number;
  };

  /**
   * Function to initialize Pollfish
   * @param {Params} params configuration params object
   */
  @Cordova()
  init(params: Params) {
    return;
  }

  /**
   * Function to manually show Pollfish
   */
  @Cordova()
  show() {
    return;
  }

  /**
   * Function to manually hide Pollfish
   */
  @Cordova()
  hide() {
    return;
  }

  /**
   * Function to check if Pollfish surveys are available on your device
   * @param {((result: boolean) => void)} callback
   */
  isPollfishPresent(callback: (result: boolean) => void) {
    return;
  }

  /**
   * Function to check if Pollfish panel is open
   * @param {((result: boolean) => void)} callback
   */
  isPollfishPanelOpen(callback: (result: boolean) => void) {
    return;
  }

  /**
   * Function to set event callbacks
   * @param {string} eventName
   * @param {((any?) => void)} callback
   */
  @Cordova({
    sync: true,
  })
  setEventCallback(eventName: string, callback: (info?: any) => void) {
    return;
  }

  @CordovaProperty()
  Builder: BuilderCtor;
}
