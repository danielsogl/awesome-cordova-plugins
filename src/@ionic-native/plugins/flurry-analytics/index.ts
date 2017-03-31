import { Plugin, Cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';

export interface FlurryAnalyticsOptions {
  /** Flurry API key is required */
  appKey?: string;
  /**
   * Optional parameters
   */
  /** Overrides the version of the app */
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
  verticalAccuracy?: number; // optional iOS only
  horizontalAccuracy?: number; // optional iOS only
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
   */
  @Cordova()
  init(appKey: string, options?: FlurryAnalyticsOptions): Promise<any> {
    return;
  }

  /**
   * This function set the Event
   * @param eventName {string} The param to configure name of Event
   * @param params is optional
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  logEvent(eventName: string, params?: any): Promise<any> {
    if (!eventName || typeof eventName !== 'string') {
      console.error(`FlurryAnalytics.logEvent: eventName must be a string. Got ${eventName}`);
      return;
    }

    return;
  }

  /**
   * This function start a timed event
   * @param eventName
   * @param params is optional
   */
  @Cordova()
  startTimedEvent(eventName: string, params?: any): Promise<any> {
    if (!eventName || typeof eventName !== 'string') {
      console.error(`FlurryAnalytics.startTimedEvent: eventName must be a string. Got ${eventName}`);
      return;
    }

    return;
  }

  /**
   * This function complete a timed event
   * @param eventName
   * @param params is optional
   */
  @Cordova()
  endTimedEvent(eventName: string, params?: any): Promise<any> {
    if (!eventName || typeof eventName !== 'string') {
      console.error(`FlurryAnalytics.endTimedEvent: eventName must be a string. Got ${eventName}`);
      return;
    }

    return;
  }

  /**
   * This function log an error
   * @param code
   * @param message
   */
  @Cordova()
  logError(code, message): Promise<any> {
    if ((!code || typeof code !== 'string') || (!message || typeof message !== 'string')) {
      console.error(`FlurryAnalytics.logError: code must be a string. Got ${code}`);
      return;
    }

    return;
  }

  /**
   * This function log a page view
   */
  @Cordova()
  logPageView(): Promise<any> {
    return;
  }

  /**
   * This function set the location for the event
   * (this is will only be used for very course grained statistics like city)
   * @param location
   */
  @Cordova()
  setLocation(location: FlurryAnalyticsLocation): Promise<any> {
    return;
  }


  /**
   * This function start the session
   * Only needed for older versions of Android
   */
  @Cordova()
  startSession(): Promise<any> {
    return;
  }

  /**
   * This function end the session
   * Only needed for older versions of Android
   */
  @Cordova()
  endSession(): Promise<any> {
    return;
  }
}
