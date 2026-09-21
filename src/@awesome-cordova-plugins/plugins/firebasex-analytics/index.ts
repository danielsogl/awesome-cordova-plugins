import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

/**
 * Constants for analytics consent types, used with `setAnalyticsConsentMode`.
 *
 * @see https://firebase.google.com/docs/analytics/configure-data-collection#consent-mode
 */
export const AnalyticsConsentMode = {
  ANALYTICS_STORAGE: 'ANALYTICS_STORAGE',
  AD_STORAGE: 'AD_STORAGE',
  AD_USER_DATA: 'AD_USER_DATA',
  AD_PERSONALIZATION: 'AD_PERSONALIZATION',
} as const;
export type AnalyticsConsentMode = (typeof AnalyticsConsentMode)[keyof typeof AnalyticsConsentMode];

/**
 * Constants for analytics consent statuses, used with `setAnalyticsConsentMode`.
 */
export const AnalyticsConsentStatus = {
  GRANTED: 'GRANTED',
  DENIED: 'DENIED',
} as const;
export type AnalyticsConsentStatus = (typeof AnalyticsConsentStatus)[keyof typeof AnalyticsConsentStatus];

export interface OnDeviceConversionUserIdentifier {
  /**
   * The user's email address. Mutually exclusive with phoneNumber.
   */
  emailAddress?: string;

  /**
   * The user's phone number in E.164 format. Mutually exclusive with emailAddress.
   */
  phoneNumber?: string;
}

/**
 * @name FirebasexAnalytics
 * @description
 * Cordova plugin for Firebase Analytics - part of the modular cordova-plugin-firebasex family.
 * @usage
 * ```typescript
 * import { FirebasexAnalytics } from '@awesome-cordova-plugins/firebasex-analytics/ngx';
 *
 * constructor(private firebasexAnalytics: FirebasexAnalytics) { }
 *
 * ...
 *
 * this.firebasexAnalytics.logEvent('select_content', { content_type: 'page_view', item_id: 'home' });
 * ```
 */
@Plugin({
  pluginName: 'FirebasexAnalytics',
  plugin: 'cordova-plugin-firebasex-analytics',
  pluginRef: 'FirebasexAnalytics',
  repo: 'https://github.com/dpa99c/cordova-plugin-firebasex-analytics',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class FirebasexAnalytics extends AwesomeCordovaNativePlugin {
  /**
   * Manually enable/disable analytics data collection, e.g. if disabled on app startup.
   *
   * @param {boolean} enabled - whether to enable or disable analytics data collection
   * @returns {Promise<any>}
   */
  @Cordova()
  setAnalyticsCollectionEnabled(enabled: boolean): Promise<any> {
    return;
  }

  /**
   * Indicates whether analytics data collection is enabled.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova()
  isAnalyticsCollectionEnabled(): Promise<boolean> {
    return;
  }

  /**
   * Sets the user's consent mode status for various types of data collection in the application.
   *
   * @param {Object.<string, string>} consent - map of AnalyticsConsentMode keys to AnalyticsConsentStatus values
   * @returns {Promise<any>}
   */
  @Cordova()
  setAnalyticsConsentMode(consent: Partial<Record<AnalyticsConsentMode, AnalyticsConsentStatus>>): Promise<any> {
    return;
  }

  /**
   * Log an event using Analytics.
   *
   * @param {string} eventName - name of event to log to Firebase Analytics (40 char limit, no dots)
   * @param {Object} eventProperties - flat key/value object of custom event properties
   * @returns {Promise<any>}
   */
  @Cordova()
  logEvent(eventName: string, eventProperties: Record<string, string | number | boolean>): Promise<any> {
    return;
  }

  /**
   * Set the name of the current screen in Analytics.
   *
   * @param {string} screenName - name of screen to log to Firebase Analytics
   * @returns {Promise<any>}
   */
  @Cordova()
  setScreenName(screenName: string): Promise<any> {
    return;
  }

  /**
   * Set a user id for use in Analytics.
   *
   * @param {string} userId - id of user to set in Firebase Analytics, or null to clear
   * @returns {Promise<any>}
   */
  @Cordova()
  setUserId(userId: string | null): Promise<any> {
    return;
  }

  /**
   * Set a user property for use in Analytics.
   *
   * @param {string} name - name of user property to set in Firebase Analytics (24 char limit)
   * @param {string} value - value of user property to set in Firebase Analytics (36 char limit), or null to clear
   * @returns {Promise<any>}
   */
  @Cordova()
  setUserProperty(name: string, value: string | null): Promise<any> {
    return;
  }

  /**
   * Initiates on-device conversion measurement using either the user's email address or phone number.
   * iOS only. Exactly one of emailAddress/phoneNumber must be provided.
   *
   * @param {OnDeviceConversionUserIdentifier} userIdentifier
   * @returns {Promise<any>}
   */
  @Cordova({
    platforms: ['iOS'],
  })
  initiateOnDeviceConversionMeasurement(userIdentifier: OnDeviceConversionUserIdentifier): Promise<any> {
    return;
  }
}
