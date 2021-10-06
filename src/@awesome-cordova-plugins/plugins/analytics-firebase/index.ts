import { Injectable } from '@angular/core';
import { Cordova, CordovaProperty, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name Analytics Firebase
 * @description
 * Google Analytics Firebase plugin for Ionic Native apps.
 * @usage
 * ```typescript
 * import { AnalyticsFirebase } from '@awesome-cordova-plugins/analytics-firebase';
 *
 *
 * constructor(private analyticsFirebase: AnalyticsFirebase) { }
 *
 * // Track an event with default events and params
 * const eventParams = {};
 * eventParams[this.analyticsFirebase.DEFAULT_PARAMS.LEVEL] = 29;
 * this.analyticsFirebase.logEvent(this.analyticsFirebase.DEFAULT_EVENTS.LEVEL_UP, eventParams)
 *   .then(() => console.log('Event successfully tracked'))
 *   .catch(err => console.log('Error tracking event:', err));
 *
 * // Track an event with custom events and params
 * const eventParams = {};
 * eventParams['my-prop'] = 29;
 * this.analyticsFirebase.logEvent('my-event', eventParams)
 *   .then(() => console.log('Event successfully tracked'))
 *   .catch(err => console.log('Error tracking event:', err));
 *
 *
 * // Reset analytics data
 * this.analyticsFirebase.resetAnalyticsData()
 *   .then(() => console.log('Analytics data have been reset'))
 *   .catch(err => console.log('Error resetting analytics data:', err));
 *
 *
 * // Track a screen view
 * this.analyticsFirebase.setCurrentScreen('Home')
 *   .then(() => console.log('View successfully tracked'))
 *   .catch(err => console.log('Error tracking view:', err));
 *
 *
 * // Set user id
 * this.analyticsFirebase.setUserId('USER-ID')
 *   .then(() => console.log('User id successfully set'))
 *   .catch(err => console.log('Error setting user id:', err));
 *
 *
 * // Set user property from default properties
 * this.analyticsFirebase.setUserProperty('KEY', 'VALUE')
 *   .then(() => console.log('User property successfully set'))
 *   .catch(err => console.log('Error setting user property:', err));
 *
 * ```
 */
@Plugin({
  pluginName: 'AnalyticsFirebase',
  plugin: 'cordova-plugin-analytics',
  pluginRef: 'analytics',
  repo: 'https://github.com/appfeel/analytics-google',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class AnalyticsFirebase extends AwesomeCordovaNativePlugin {
  /**
   * This enum represents AnalyticsFirebase default events.
   * Use one of these default events or a custom event
   *
   * @readonly
   */
  @CordovaProperty()
  readonly DEFAULT_EVENTS: {
    ADD_PAYMENT_INFO: string;
    ADD_TO_CART: string;
    ADD_TO_WISHLIST: string;
    APP_OPEN: string;
    BEGIN_CHECKOUT: string;
    CAMPAIGN_DETAILS: string;
    CHECKOUT_PROGRESS: string;
    EARN_VIRTUAL_CURRENCY: string;
    ECOMMERCE_PURCHASE: string;
    GENERATE_LEAD: string;
    JOIN_GROUP: string;
    LEVEL_END: string;
    LEVEL_START: string;
    LEVEL_UP: string;
    LOGIN: string;
    POST_SCORE: string;
    PRESENT_OFFER: string;
    PURCHASE_REFUND: string;
    REMOVE_FROM_CART: string;
    SEARCH: string;
    SELECT_CONTENT: string;
    SET_CHECKOUT_OPTION: string;
    SHARE: string;
    SIGN_UP: string;
    SPEND_VIRTUAL_CURRENCY: string;
    TUTORIAL_BEGIN: string;
    TUTORIAL_COMPLETE: string;
    UNLOCK_ACHIEVEMENT: string;
    VIEW_ITEM: string;
    VIEW_ITEM_LIST: string;
    VIEW_SEARCH_RESULTS: string;
  };

  /**
   * This enum represents AnalyticsFirebase default params.
   * Use one of these default params or a custom param
   *
   * @readonly
   */
  @CordovaProperty()
  readonly DEFAULT_PARAMS: {
    ACHIEVEMENT_ID: string;
    ACLID: string;
    AFFILIATION: string;
    CAMPAIGN: string;
    CHARACTER: string;
    CHECKOUT_OPTION: string;
    CHECKOUT_STEP: string;
    CONTENT: string;
    CONTENT_TYPE: string;
    COUPON: string;
    CP1: string;
    CREATIVE_NAME: string;
    CREATIVE_SLOT: string;
    CURRENCY: string;
    DESTINATION: string;
    END_DATE: string;
    FLIGHT_NUMBER: string;
    GROUP_ID: string;
    INDEX: string;
    ITEM_BRAND: string;
    ITEM_CATEGORY: string;
    ITEM_ID: string;
    ITEM_LIST: string;
    ITEM_LOCATION_ID: string;
    ITEM_NAME: string;
    ITEM_VARIANT: string;
    LEVEL: string;
    LEVEL_NAME: string;
    LOCATION: string;
    MEDIUM: string;
    METHOD: string;
    NUMBER_OF_NIGHTS: string;
    NUMBER_OF_PASSENGERS: string;
    NUMBER_OF_ROOMS: string;
    ORIGIN: string;
    PRICE: string;
    QUANTITY: string;
    SCORE: string;
    SEARCH_TERM: string;
    SHIPPING: string;
    SOURCE: string;
    START_DATE: string;
    SUCCESS: string;
    TAX: string;
    TERM: string;
    TRANSACTION_ID: string;
    TRAVEL_CLASS: string;
    VALUE: string;
    VIRTUAL_CURRENCY_NAME: string;
  };

  /**
   * Logs an app event. The event can have up to 25 parameters.
   * Events with the same name must have the same parameters.
   * Up to 500 event names are supported.
   * Using predefined [FirebaseAnalytics.Event](https://firebase.google.com/docs/reference/android/com/google/firebase/analytics/FirebaseAnalytics.Event.html) and/or [FirebaseAnalytics.Param](https://firebase.google.com/docs/reference/android/com/google/firebase/analytics/FirebaseAnalytics.Param.html) is recommended for optimal reporting.
   *
   * @param eventName {string} The event name
   * @param eventParams {object} (Optional) The event params
   * @returns {Promise<any>} Returns a promise that resolves when the event is logged
   */
  @Cordova()
  logEvent(eventName: string, eventParams?: object): Promise<any> {
    return;
  }

  /**
   * Clears all analytics data for this app from the device and resets the app instance id
   *
   * @returns {Promise<any>} Returns a promise that resolves when the analytics data is cleared
   */
  @Cordova()
  resetAnalyticsData(): Promise<any> {
    return;
  }

  /**
   * Sets whether analytics collection is enabled for this app on this device. This setting is persisted across app sessions. By default it is enabled
   *
   * @param screenName {boolean} The value of the collection
   * @param enabled
   * @returns {Promise<any>} Returns a promise that resolves when the collection is enabled/disabled
   */
  @Cordova()
  setAnalyticsCollectionEnabled(enabled: boolean): Promise<any> {
    return;
  }

  /**
   * Sets the current screen name, which specifies the current visual context in your app.
   * This helps identify the areas in your app where users spend their time and how they interact with your app
   *
   * @param screenName {string} The screen name
   * @returns {Promise<any>} Returns a promise that resolves when the current screen is setted
   */
  @Cordova()
  setCurrentScreen(screenName: string): Promise<any> {
    return;
  }

  /**
   * Sets the minimum engagement time required before starting a session. The default value is 10000 (10 seconds)
   *
   * @param screenName {number} The duration in milliseconds
   * @param milliseconds
   * @returns {Promise<any>} Returns a promise that resolves when the minimum session duration is set
   */
  @Cordova()
  setMinimumSessionDuration(milliseconds: number): Promise<any> {
    return;
  }

  /**
   * Sets the duration of inactivity that terminates the current session. The default value is 1800000 (30 minutes)
   *
   * @param screenName {number} The duration in milliseconds
   * @param milliseconds
   * @returns {Promise<any>} Returns a promise that resolves when the session timeout duration is set
   */
  @Cordova()
  setSessionTimeoutDuration(milliseconds: number): Promise<any> {
    return;
  }

  /**
   * Sets the user ID property. This feature must be used in accordance with Google's Privacy Policy
   *
   * @param userId {string} The user id
   * @returns {Promise<any>} Returns a promise that resolves when the user id is setted
   */
  @Cordova()
  setUserId(userId: string): Promise<any> {
    return;
  }

  /**
   * Sets a user property to a given value. Up to 25 user property names are supported. Once set, user property values persist throughout the app lifecycle and across sessions
   *
   * @param userPropertyName {string} The user property name
   * @param userPropertyValue {string} The user property value
   * @returns {Promise<any>} Returns a promise that resolves when the user property setted
   */
  @Cordova()
  setUserProperty(userPropertyName: string, userPropertyValue: string): Promise<any> {
    return;
  }
}
