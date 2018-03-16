import { Plugin, CordovaInstance, checkAvailability, IonicNativePlugin } from '@ionic-native/core';
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
* @hidden
*/
export class FlurryAnalyticsObject {

  constructor(private _objectInstance: any) { }

  /**
   * This function set the Event
   * @param eventName {string} Name of the event
   * @param [params] {Object} Optional params
   * @return {Promise<any>} Returns a promise that resolves when event is sent
   */
  @CordovaInstance({
    successIndex: 2,
    errorIndex: 3
  })
  logEvent(eventName: string, params?: any): Promise<any> {
    return;
  }

  /**
   * Start a timed event
   * @param eventName {string} Name of the event
   * @param [params] {Object} Optional params
   * @return {Promise<any>} Returns a promise that resolves when timed event is started tracking
   */
  @CordovaInstance({
    successIndex: 2,
    errorIndex: 3
  })
  startTimedEvent(eventName: string, params?: Object): Promise<any> {
    return;
  }

  /**
   * Complete a timed event
   * @param eventName {string} Name of the event
   * @param [params] {Object} Optional params
   * @return {Promise<any>} Returns a promise that resolves when timed event is ended tracking
   */
  @CordovaInstance({
    successIndex: 2,
    errorIndex: 3
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
  @CordovaInstance()
  logError(code: any, message: any): Promise<any> {
    return;
  }

  /**
   * This function log a page view
   * @return {Promise<any>}
   */
  @CordovaInstance()
  logPageView(): Promise<any> {
    return;
  }

  /**
   * This function set the location for the event
   * (this is will only be used for very course grained statistics like city)
   * @param location {FlurryAnalyticsLocation}
   * @param message {string}
   * @return {Promise<any>}
   */
  @CordovaInstance()
  setLocation(location: FlurryAnalyticsLocation, message: string): Promise<any> {
    return;
  }

  /**
   * This function start the session
   * Only needed for older versions of Android
   * @return {Promise<any>}
   */
  @CordovaInstance()
  startSession(): Promise<any> {
    return;
  }

  /**
   * This function end the session
   * Only needed for older versions of Android
   * @return {Promise<any>}
   */
  @CordovaInstance()
  endSession(): Promise<any> {
    return;
  }

}

/**
 * @name Flurry Analytics
 * @description
 * This plugin connects to Flurry Analytics SDK
 *
 * @usage
 * ```typescript
 * import { FlurryAnalytics, FlurryAnalyticsObject, FlurryAnalyticsOptions } from '@ionic-native/flurry-analytics';
 *
 * constructor(private flurryAnalytics: FlurryAnalytics) { }
 *
 * ...
 *
 * const options: FlurryAnalyticsOptions = {
 *  appKey: '<your app key>', // REQUIRED
 *  reportSessionsOnClose: true,
 *  enableLogging: true
 * };
 *
 * let fa: FlurryAnalyticsObject = this.flurryAnalytics.create(options);
 *
 * fa.logEvent('event name')
 *   .then(() => console.log('Logged an event!'))
 *   .catch(e => console.log('Error logging the event', e));
 *
 * ```
 * @interfaces
 * FlurryAnalyticsOptions
 * FlurryAnalyticsLocation
 * @classes
 * FlurryAnalyticsObject
 */
@Plugin({
  pluginName: 'FlurryAnalytics',
  plugin: 'cordova-plugin-flurryanalytics',
  pluginRef: 'FlurryAnalytics',
  repo: 'https://github.com/blakgeek/cordova-plugin-flurryanalytics',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class FlurryAnalytics extends IonicNativePlugin {

  /**
   * Creates a new instance of FlurryAnalyticsObject
   * @param options {FlurryAnalyticsOptions} options
   * @return {FlurryAnalyticsObject}
   */
  create(options: FlurryAnalyticsOptions): FlurryAnalyticsObject {

    let instance: any;

    if (checkAvailability(FlurryAnalytics.pluginRef, null, FlurryAnalytics.pluginName) === true) {
      instance = new (window as any).FlurryAnalytics(options);
    }

    return new FlurryAnalyticsObject(instance);

  }

}
