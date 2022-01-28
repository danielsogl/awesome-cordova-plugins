import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

export interface UsabillaResult {
  completed: boolean | string;
}

export interface UbCampaignResult {
  completed: {
    result: UbResult;
    isRedirectToAppStoreEnabled?: boolean;
  };
}

export interface UbResult {
  rating: number;
  abandonedPageIndex: number;
  sent: boolean;
}

/**
 * @name Usabilla
 * @description
 * Usabilla SDK is designed and developed to collect feedback from your users with great ease and flexibility through your mobile application.
 * This document describes library integration steps for your Cordova project.
 *
 * For more info see [Cordova plugin docs](https://github.com/usabilla/usabilla-u4a-cordova)
 * @usage
 * ```typescript
 * import { Usabilla } from '@awesome-cordova-plugins/usabilla-cordova-sdk/ngx';
 *
 *
 * constructor(private usabilla: Usabilla) { }
 *
 * ...
 *
 *
 *  this.usabilla.initialize(
 *    appID: '<your_application_id>',
 *    custom_vars: {
 *      "key": "value"
 *    });
 *
 *  this.usabilla.loadFeedbackForm(
 *    formID : '<your_form_id>'
 *    );
 *
 * ```
 */

@Plugin({
  pluginName: 'usabilla-cordova',
  plugin: 'usabilla-cordova',
  pluginRef: 'Usabilla',
  repo: 'https://github.com/usabilla/usabilla-u4a-cordova',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Usabilla extends AwesomeCordovaNativePlugin {
  /**
   * Initializes Usabilla sdk for capturing feedbacks.
   *
   * @name initialize
   * @param {appId} APP_ID unique app id to initialize
   * @param appId
   * @param customVars
   * @param {customVars} CUSTOM_VARIABLES for target based event trigger
   */
  @Cordova({
    successIndex: 0,
    errorIndex: 1,
  })
  initialize(appId: string, customVars: any): Promise<UsabillaResult> {
    return;
  }

  /**
   * Displays Feedback form based on unique form id after sdk initialization.
   *
   * @name loadFeedbackForm
   * @param formId
   * @param {formId} FORM_ID to display Feedback form for
   */
  @Cordova({
    successIndex: 0,
    errorIndex: 1,
  })
  loadFeedbackForm(formId: string): Promise<any> {
    return;
  }

  /**
   * Displays Feedback form with current screen's snapshot and based on unique form id, after sdk initialization.
   *
   * @name loadFeedbackFormWithCurrentViewScreenshot
   * @param formId
   * @param {formId} FORM_ID to display Feedback form for
   */
  @Cordova({
    successIndex: 0,
    errorIndex: 1,
  })
  loadFeedbackFormWithCurrentViewScreenshot(formId: string): Promise<any> {
    return;
  }

  /**
   * Displays Campaign banner targetted based on specific event and variables, after sdk initialization.
   *
   * @name sendEvent
   * @param eventId
   * @param {eventId} EVENT_ID to display Campaign banner for
   */
  @Cordova({
    successIndex: 0,
    errorIndex: 1,
  })
  sendEvent(eventId: string): Promise<UbCampaignResult> {
    return;
  }

  /**
   * Reset Campaign for next trigger.
   *
   * @name resetCampaignData
   */
  @Cordova({
    successIndex: 0,
    errorIndex: 1,
  })
  resetCampaignData(): Promise<UsabillaResult> {
    return;
  }

  /**
   * Dismiss or removes the Form/Banner from the view.
   *
   * @name dismiss
   */
  @Cordova({
    successIndex: 0,
    errorIndex: 1,
  })
  dismiss(): Promise<UsabillaResult> {
    return;
  }

  /**
   * Get default masking strategy to be applied for data masking.
   *
   * @name getDefaultDataMasks
   */
  @Cordova({
    successIndex: 0,
    errorIndex: 1,
  })
  getDefaultDataMasks(): Promise<UsabillaResult> {
    return;
  }

  /**
   * Set masking strategy for data masking.
   *
   * @name setDataMasking
   * @param {masks} Format regex to be applied for masking.
   * @param masks
   * @param maskCharacter
   * @param {maskCharacter} Character to be used as a masking character
   */
  @Cordova({
    successIndex: 0,
    errorIndex: 1,
  })
  setDataMasking(masks: any, maskCharacter: string): Promise<UsabillaResult> {
    return;
  }
}
