import { Plugin, Cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';

export interface FlurryAnalyticsOptions {
  /** Flurry API key is required */
  appKey: string;
  /**
   * Overrides the version of the app
   */
  version?: string;
  /**
   * How long can the app be paused before a new session is created,
   * must be less than or equal to five for Android devices
   */
  continueSessionSeconds?: number;
  /**
   * Set id of the user
   */
  userId?: string;
  /**
   * Set gender of the user
   * Valid values are "m", "M", "f" and "F"
   */
  gender?: string;
  /**
   * Set age of the user
   */
  age?: number;
  /**
   * Set error for log
   * Values: VERBOSE, DEBUG, INFO, WARN, ERROR
   */
  logLevel?: string;
  /**
   * Defaults to false
   */
  enableLogging?: boolean;
  /**
   * Should every event show up the app's log, defaults to true
   */
  enableEventLogging?: boolean;
  /**
   * Should app crashes be recorded in flurry, defaults to false, iOS only
   */
  enableCrashReporting?: boolean;
  /**
   * Should the session continue when the app is the background, defaults to false, iOS only
   */
  enableBackgroundSessions?: boolean;
  /**
   * Should data be pushed to flurry when the app closes, defaults to true, iOS only
   */
  reportSessionsOnClose?: boolean;
  /**
   * Should data be pushed to flurry when the app is paused, defaults to true, iOS only
   */
  reportSessionsOnPause?: boolean;
}

export interface FlurryAnalyticsLocation {
  latitude: number;
  longitude: number;
  /**
   * Set altitude
   * It is optional and use only for iOS
   */
  verticalAccuracy?: number;
  /**
   * Set radius about 2d point
   * It is optional and use only for iOS
   */
  horizontalAccuracy?: number;
}

/**
 * @name Flurry Analytics
 * @description
 * This plugin connects to Flurry Analytics SDK
 *
 * @usage
 * ```
 * import { FlurryAnalytics } from 'ionic-native/flurry-analytics';
 *
 * constructor(private flurryAnalytics: FlurryAnalytics) { }
 *
 * ...
 *
 * constant options: FlurryAnalyticsOptions = {
 *  reportSessionsOnClose: true,
 *  enableLogging: true
 * }
 *
 * FlurryAnalytics.init('12345678965412303214', options)
 *   .then((something: any) => doSomething(something))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 * @interfaces
 * FlurryAnalyticsOptions
 * FlurryAnalyticsLocation
 */
@Plugin({
  pluginName: 'FlurryAnalyticsPlugin',
  plugin: 'cordova-plugin-flurryanalytics',
  pluginRef: 'fa',
  repo: 'https://github.com/blakgeek/cordova-plugin-flurryanalytics.git',
  platforms: ['Android', 'iOS', 'Browser']
})
@Injectable()
export class FlurryAnalytics {

  /**
   * Set the setting for Flurry Analytics
   * @param appKey {string} API key is required
   * @param options {FlurryAnalyticsOptions} is optional
   * @return {Promise<any>}
   */
  @Cordova()
  init(appKey: string, options?: FlurryAnalyticsOptions): Promise<any> {
    return;
  }

  /**
   * This function set the Event
   * @param eventName {string} The param to configure name of Event
   * @param params {Object} optional
   * @return {Promise<any>} Returns a promise that resolves when event is set
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 0
  })
  logEvent(eventName: string, params?: any): Promise<any> {
    return;
  }

  /**
   * This function start a timed event
   * @param eventName
   * @param params {Object} optional
   * @return {Promise<any>} Returns a promise that resolves when timed event is started tracking
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 0
  })
  startTimedEvent(eventName: string, params?: Object): Promise<any> {
    return;
  }

  /**
   * This function complete a timed event
   * @param eventName
   * @param params {Object} optional
   * @return {Promise<any>} Returns a promise that resolves when timed event is ended tracking
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 0
  })
  endTimedEvent(eventName: string, params?: Object): Promise<any> {
    return;
  }

  /**
   * This function log an error
   * @param code
   * @param message
   * @return {Promise<any>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 0
  })
  logError(code, message): Promise<any> {
    return;
  }

  /**
   * This function log a page view
   * @return {Promise<any>}
   */
  @Cordova()
  logPageView(): Promise<any> {
    return;
  }

  /**
   * This function set the location for the event
   * (this is will only be used for very course grained statistics like city)
   * @param location
   * @return {Promise<any>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 0
  })
  setLocation(location: FlurryAnalyticsLocation): Promise<any> {
    return;
  }

  /**
   * This function start the session
   * Only needed for older versions of Android
   * @return {Promise<any>}
   */
  @Cordova()
  startSession(): Promise<any> {
    return;
  }

  /**
   * This function end the session
   * Only needed for older versions of Android
   * @return {Promise<any>}
   */
  @Cordova()
  endSession(): Promise<any> {
    return;
  }
}
