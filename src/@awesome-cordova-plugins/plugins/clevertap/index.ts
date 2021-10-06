import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

declare let clevertap: any;

/**
 * @name CleverTap
 * @description
 * Cordova Plugin that wraps CleverTap SDK for Android and iOS
 * @usage
 * ```typescript
 * import { CleverTap } from '@awesome-cordova-plugins/clevertap/ngx';
 *
 * constructor(private clevertap: CleverTap) { }
 *
 * ```
 */
@Plugin({
  pluginName: 'CleverTap',
  plugin: 'clevertap-cordova',
  pluginRef: 'CleverTap',
  repo: 'https://github.com/CleverTap/clevertap-cordova',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class CleverTap extends AwesomeCordovaNativePlugin {
  /**
   * notify device ready
   * NOTE: in iOS use to be notified of launch Push Notification or Deep Link
   * in Android use only in android phonegap build projects
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  notifyDeviceReady(): Promise<any> {
    return;
  }

  /*******************
   * Personalization
   ******************/

  /**
   * Personalization
   * Enables the Personalization API
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  enablePersonalization(): Promise<any> {
    return;
  }

  /**
   * Personalization
   * Disables the Personalization API
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  disablePersonalization(): Promise<any> {
    return;
  }

  /**
   * Enables tracking opt out for the currently active user.
   *
   * @param optOut {boolean}
   * @returns {Promise<any>}
   */
  @Cordova()
  setOptOut(optOut: boolean): Promise<any> {
    return;
  }

  /**
   * Sets CleverTap SDK to offline mode.
   *
   * @param offline {boolean}
   * @returns {Promise<any>}
   */
  @Cordova()
  setOffline(offline: boolean): Promise<any> {
    return;
  }

  /**
   * Enables the reporting of device network related information, including IP address.  This reporting is disabled by default.
   *
   * @param enable {boolean}
   * @returns {Promise<any>}
   */
  @Cordova()
  enableDeviceNetworkInfoReporting(enable: boolean): Promise<any> {
    return;
  }

  /*******************
   * Push
   ******************/

  /**
   * Registers for push notifications
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  registerPush(): Promise<any> {
    return;
  }

  /**
   * Sets the device's push token
   *
   * @param token {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  setPushToken(token: string): Promise<any> {
    return;
  }

  /**
   * Sets the device's Xiaomi push token
   *
   * @param token {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  setPushXiaomiToken(token: string): Promise<any> {
    return;
  }

  /**
   * Sets the device's Baidu push token
   *
   * @param token {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  setPushBaiduToken(token: string): Promise<any> {
    return;
  }

  /**
   * Sets the device's Huawei push token
   *
   * @param token {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  setPushHuaweiToken(token: string): Promise<any> {
    return;
  }

  /**
   * Create Notification Channel for Android O+
   *
   * @param extras {any}
   * @returns {Promise<any>}
   */
  @Cordova()
  createNotification(extras: any): Promise<any> {
    return;
  }

  /**
   * Create Notification Channel for Android O+
   *
   * @param channelID {string}
   * @param channelName {string}
   * @param channelDescription {string}
   * @param importance {number}
   * @param showBadge {boolean}
   * @returns {Promise<any>}
   */
  @Cordova()
  createNotificationChannel(
    channelID: string,
    channelName: string,
    channelDescription: string,
    importance: number,
    showBadge: boolean
  ): Promise<any> {
    return;
  }

  /**
   * Create Notification Channel for Android O+
   *
   * @param channelID {string}
   * @param channelName {string}
   * @param channelDescription {string}
   * @param importance {number}
   * @param showBadge {boolean}
   * @param sound {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  createNotificationChannelWithSound(
    channelID: string,
    channelName: string,
    channelDescription: string,
    importance: number,
    showBadge: boolean,
    sound: string
  ): Promise<any> {
    return;
  }

  /**
   * Create Notification Channel with Group ID for Android O+
   *
   * @param channelID {string}
   * @param channelName {string}
   * @param channelDescription {string}
   * @param importance {number}
   * @param groupId {string}
   * @param showBadge {boolean}
   * @param sound {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  createNotificationChannelWithGroupId(
    channelID: string,
    channelName: string,
    channelDescription: string,
    importance: number,
    groupId: string,
    showBadge: boolean
  ): Promise<any> {
    return;
  }

  /**
   * Create Notification Channel with Group ID for Android O+
   *
   * @param channelID {string}
   * @param channelName {string}
   * @param channelDescription {string}
   * @param importance {number}
   * @param groupId {string}
   * @param showBadge {boolean}
   * @param sound
   * @returns {Promise<any>}
   */
  @Cordova()
  createNotificationChannelWithGroupIdAndSound(
    channelID: string,
    channelName: string,
    channelDescription: string,
    importance: number,
    groupId: string,
    showBadge: boolean,
    sound: string
  ): Promise<any> {
    return;
  }

  /**
   * Create Notification Channel Group for Android O+
   *
   * @param groupID {string}
   * @param groupName {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  createNotificationChannelGroup(groupID: string, groupName: string): Promise<any> {
    return;
  }

  /**
   * Delete Notification Channel for Android O+
   *
   * @param channelID {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  deleteNotificationChannel(channelID: string): Promise<any> {
    return;
  }

  /**
   * Delete Notification Group for Android O+
   *
   * @param groupID {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  deleteNotificationChannelGroup(groupID: string): Promise<any> {
    return;
  }

  /*******************
   * Events
   ******************/

  /**
   * Record Screen View
   *
   * @param screenName {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  recordScreenView(screenName: string): Promise<any> {
    return;
  }

  /**
   * Record Event with Name
   *
   * @param eventName {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  recordEventWithName(eventName: string): Promise<any> {
    return;
  }

  /**
   *  Record Event with Name and Event properties
   *
   * @param eventName {string}
   * @param eventProps {any}
   * @returns {Promise<any>}
   */
  @Cordova()
  recordEventWithNameAndProps(eventName: string, eventProps: any): Promise<any> {
    return;
  }

  /**
   *  Record Charged Event with Details and Items
   *
   * @param details {any}  object with transaction details
   * @param items {any}  array of items purchased
   * @returns {Promise<any>}
   */
  @Cordova()
  recordChargedEventWithDetailsAndItems(details: any, items: any): Promise<any> {
    return;
  }

  /**
   * Get Event First Time
   *
   * @param eventName {string}
   * callback returns epoch seconds or -1
   * @returns {Promise<any>}
   */
  @Cordova()
  eventGetFirstTime(eventName: string): Promise<any> {
    return;
  }

  /**
   * Get Event Last Time
   *
   * @param eventName {string}
   * callback returns epoch seconds or -1
   * @returns {Promise<any>}
   */
  @Cordova()
  eventGetLastTime(eventName: string): Promise<any> {
    return;
  }

  /**
   * Get Event Number of Occurrences
   *
   * @param eventName {string}
   * calls back with int or -1
   * @returns {Promise<any>}
   */
  @Cordova()
  eventGetOccurrences(eventName: string): Promise<any> {
    return;
  }

  /**
   * Get Event Details
   *
   * @param eventName {string}
   * calls back with object {"eventName": <string>, "firstTime":<epoch seconds>, "lastTime": <epoch seconds>, "count": <int>} or empty object
   * @returns {Promise<any>}
   */
  @Cordova()
  eventGetDetails(eventName: string): Promise<any> {
    return;
  }

  /**
   * Get Event History
   * calls back with object {"eventName1":<event1 details object>, "eventName2":<event2 details object>}
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  getEventHistory(): Promise<any> {
    return;
  }

  /*******************
   * Profiles
   ******************/

  /**
   * Get the device location if available.
   * On iOS:
   * Calling this will prompt the user location permissions dialog.
   * Please be sure to include the NSLocationWhenInUseUsageDescription key in your Info.plist.
   * Uses desired accuracy of kCLLocationAccuracyHundredMeters.
   * If you need background location updates or finer accuracy please implement your own location handling.
   * On Android:
   * Requires Location Permission in AndroidManifest e.g. "android.permission.ACCESS_COARSE_LOCATION"
   * You can use location to pass it to CleverTap via the setLocation API
   * for, among other things, more fine-grained geo-targeting and segmentation purposes.
   * Note: on iOS the call to CleverTapSDK must be made on the main thread due to LocationManager restrictions, but the CleverTapSDK method itself is non-blocking.
   * calls back with {lat:lat, lon:lon} lat and lon are floats
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  getLocation(): Promise<any> {
    return;
  }

  /**
   * Set location
   *
   * @param lat {number}
   * @param lon {number}
   * @returns {Promise<any>}
   */
  @Cordova()
  setLocation(lat: number, lon: number): Promise<any> {
    return;
  }

  /**
   * Creates a separate and distinct user profile identified by one or more of Identity, Email, FBID or GPID values,
   * and populated with the key-values included in the profile dictionary.
   * If your app is used by multiple users, you can use this method to assign them each a unique profile to track them separately.
   * If instead you wish to assign multiple Identity, Email, FBID and/or GPID values to the same user profile,
   * use profileSet rather than this method.
   * If none of Identity, Email, FBID or GPID is included in the profile dictionary,
   * all properties values will be associated with the current user profile.
   * When initially installed on this device, your app is assigned an "anonymous" profile.
   * The first time you identify a user on this device (whether via onUserLogin or profileSet),
   * the "anonymous" history on the device will be associated with the newly identified user.
   * Then, use this method to switch between subsequent separate identified users.
   * Please note that switching from one identified user to another is a costly operation
   * in that the current session for the previous user is automatically closed
   * and data relating to the old user removed, and a new session is started
   * for the new user and data for that user refreshed via a network call to CleverTap.
   * In addition, any global frequency caps are reset as part of the switch.
   *
   * @param profile {any} object
   * @returns {Promise<any>}
   */
  @Cordova()
  onUserLogin(profile: any): Promise<any> {
    return;
  }

  /**
   * Set profile attributes
   *
   * @param profile {any} object
   * @returns {Promise<any>}
   */
  @Cordova()
  profileSet(profile: any): Promise<any> {
    return;
  }

  /**
   * Set profile attributes from facebook user
   *
   * @param profile {any} facebook graph user object
   * @returns {Promise<any>}
   */
  @Cordova()
  profileSetGraphUser(profile: any): Promise<any> {
    return;
  }

  /**
   * Set profile attributes rom google plus user
   *
   * @param profile {any} google plus user object
   * @returns {Promise<any>}
   */
  @Cordova()
  profileGooglePlusUser(profile: any): Promise<any> {
    return;
  }

  /**
   * Get User Profile Property
   *
   * @param propertyName {string}
   * calls back with value of propertyName or false
   * @returns {Promise<any>}
   */
  @Cordova()
  profileGetProperty(propertyName: string): Promise<any> {
    return;
  }

  /**
   * Get a unique CleverTap identifier suitable for use with install attribution providers.
   * calls back with unique CleverTap attribution identifier
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  profileGetCleverTapAttributionIdentifier(): Promise<any> {
    return;
  }

  /**
   * Get User Profile CleverTapID
   * calls back with CleverTapID or false
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  profileGetCleverTapID(): Promise<any> {
    return;
  }

  /**
   * Remove the property specified by key from the user profile
   *
   * @param key {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  profileRemoveValueForKey(key: string): Promise<any> {
    return;
  }

  /**
   * Method for setting a multi-value user profile property
   *
   * @param key {string}
   * @param values {any} array of strings
   * @returns {Promise<any>}
   */
  @Cordova()
  profileSetMultiValues(key: string, values: any): Promise<any> {
    return;
  }

  /**
   * Method for adding a value to a multi-value user profile property
   *
   * @param key {string}
   * @param value {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  profileAddMultiValue(key: string, value: string): Promise<any> {
    return;
  }

  /**
   * Method for adding values to a multi-value user profile property
   *
   * @param key {string}
   * @param values {any} array of strings
   * @returns {Promise<any>}
   */
  @Cordova()
  profileAddMultiValues(key: string, values: any): Promise<any> {
    return;
  }

  /**
   * Method for removing a value from a multi-value user profile property
   *
   * @param key {string}
   * @param value {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  profileRemoveMultiValue(key: string, value: string): Promise<any> {
    return;
  }

  /**
   * Method for removing a value from a multi-value user profile property
   *
   * @param key {string}
   * @param values {any} array of strings
   * @returns {Promise<any>}
   */
  @Cordova()
  profileRemoveMultiValues(key: string, values: any): Promise<any> {
    return;
  }

  /*******************
   * Session
   ******************/

  /**
   * Get Session Elapsed Time
   * calls back with seconds
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  sessionGetTimeElapsed(): Promise<any> {
    return;
  }

  /**
   * Get Session Total Visits
   * calls back with with int or -1
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  sessionGetTotalVisits(): Promise<any> {
    return;
  }

  /**
   * Get Session Screen Count
   * calls back with with int
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  sessionGetScreenCount(): Promise<any> {
    return;
  }

  /**
   * Get Session Previous Visit Time
   * calls back with with epoch seconds or -1
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  sessionGetPreviousVisitTime(): Promise<any> {
    return;
  }

  /**
   * Get Sesssion Referrer UTM details
   * object {"source": <string>, "medium": <string>, "campaign": <string>} or empty object
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  sessionGetUTMDetails(): Promise<any> {
    return;
  }

  /**
   * Call this to manually track the utm details for an incoming install referrer
   *
   * @param source {string}
   * @param medium {string}
   * @param campaign {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  pushInstallReferrer(source: string, medium: string, campaign: string): Promise<any> {
    return;
  }

  /****************************
   * Notification Inbox methods
   ****************************/
  /**
   * Call this method to initialize the App Inbox
   */
  @Cordova()
  initializeInbox(): Promise<any> {
    return;
  }

  /**
   * Call this method to get the count of unread Inbox messages
   */
  @Cordova()
  getInboxMessageUnreadCount(): Promise<any> {
    return;
  }

  /**
   * Call this method to get the count of total Inbox messages
   */
  @Cordova()
  getInboxMessageCount(): Promise<any> {
    return;
  }

  /**
   * Call this method to open the App Inbox
   *
   * @param styleConfig : any or empty object
   */
  @Cordova()
  showInbox(styleConfig: any): Promise<any> {
    return;
  }

  /**
   * Call this to Fetch all Inbox Messages
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  getAllInboxMessages(): Promise<any> {
    return;
  }

  /**
   * Call this to Fetch all Unread Inbox Messages
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  getUnreadInboxMessages(): Promise<any> {
    return;
  }

  /**
   * Call this to Fetch Inbox Message For Id
   *
   * @param messageId {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  getInboxMessageForId(messageId: string): Promise<any> {
    return;
  }

  /**
   * Call this to Delete Inbox Message For Id
   *
   * @param messageId {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  deleteInboxMessageForId(messageId: string): Promise<any> {
    return;
  }

  /**
   * Call this to Mark Read Inbox Message For Id
   *
   * @param messageId {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  markReadInboxMessageForId(messageId: string): Promise<any> {
    return;
  }

  /**
   * Call this to Mark Push Inbox Notification Viewed Event for Id
   *
   * @param messageId {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  pushInboxNotificationViewedEventForId(messageId: string): Promise<any> {
    return;
  }

  /**
   * Call this to Mark Push Inbox Notification Clicked Event for Id
   *
   * @param messageId {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  pushInboxNotificationClickedEventForId(messageId: string): Promise<any> {
    return;
  }

  /**
   * Call this to SetUIEditor Connection
   *
   * @param enabled {boolean}
   * @returns {Promise<any>}
   */
  @Cordova()
  setUIEditorConnectionEnabled(enabled: boolean): Promise<any> {
    return;
  }

  /**
   * Call this to Register Boolean Variable
   *
   * @param varName {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  registerBooleanVariable(varName: string): Promise<any> {
    return;
  }

  /**
   * Call this to Register Double Variable
   *
   * @param varName {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  registerDoubleVariable(varName: string): Promise<any> {
    return;
  }

  /**
   * Call this to Register Integer Variable
   *
   * @param varName {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  registerIntegerVariable(varName: string): Promise<any> {
    return;
  }

  /**
   * Call this to Register String Variable
   *
   * @param varName {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  registerStringVariable(varName: string): Promise<any> {
    return;
  }

  /**
   * Call this to Register List of Boolean Variable
   *
   * @param varName {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  registerListOfBooleanVariable(varName: string): Promise<any> {
    return;
  }

  /**
   * Call this to Register List of Double Variable
   *
   * @param varName {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  registerListOfDoubleVariable(varName: string): Promise<any> {
    return;
  }

  /**
   * Call this to Register List of Integer Variable
   *
   * @param varName {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  registerListOfIntegerVariable(varName: string): Promise<any> {
    return;
  }

  /**
   * Call this to Register List of String Variable
   *
   * @param varName {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  registerListOfStringVariable(varName: string): Promise<any> {
    return;
  }

  /**
   * Call this to Register Map of Boolean Variable
   *
   * @param varName {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  registerMapOfBooleanVariable(varName: string): Promise<any> {
    return;
  }

  /**
   * Call this to Register Map of Double Variable
   *
   * @param varName {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  registerMapOfDoubleVariable(varName: string): Promise<any> {
    return;
  }

  /**
   * Call this to Register Map of Integer Variable
   *
   * @param varName {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  registerMapOfIntegerVariable(varName: string): Promise<any> {
    return;
  }

  /**
   * Call this to Register Map of String Variable
   *
   * @param varName {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  registerMapOfStringVariable(varName: string): Promise<any> {
    return;
  }

  /**
   * Call this to Get Boolean Variable
   *
   * @param varName {string}
   * @param defaultValue {boolean}
   * @returns {Promise<any>}
   */
  @Cordova()
  getBooleanVariable(varName: string, defaultValue: boolean): Promise<any> {
    return;
  }

  /**
   * Call this to Get Double Variable
   *
   * @param varName {string}
   * @param defaultValue {number}
   * @returns {Promise<any>}
   */
  @Cordova()
  getDoubleVariable(varName: string, defaultValue: number): Promise<any> {
    return;
  }

  /**
   * Call this to Get Integer Variable
   *
   * @param varName {string}
   * @param defaultValue {number}
   * @returns {Promise<any>}
   */
  @Cordova()
  getIntegerVariable(varName: string, defaultValue: number): Promise<any> {
    return;
  }

  /**
   * Call this to Get String Variable
   *
   * @param varName {string}
   * @param defaultValue {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  getStringVariable(varName: string, defaultValue: string): Promise<any> {
    return;
  }

  /**
   * Call this to Get List of Boolean Variable
   *
   * @param varName {string}
   * @param defaultValue {any}
   * @returns {Promise<any>}
   */
  @Cordova()
  getListOfBooleanVariable(varName: string, defaultValue: any): Promise<any> {
    return;
  }

  /**
   * Call this to Get List of Double Variable
   *
   * @param varName {string}
   * @param defaultValue {any}
   * @returns {Promise<any>}
   */
  @Cordova()
  getListOfDoubleVariable(varName: string, defaultValue: any): Promise<any> {
    return;
  }

  /**
   * Call this to Get List of Integer Variable
   *
   * @param varName {string}
   * @param defaultValue {any}
   * @returns {Promise<any>}
   */
  @Cordova()
  getListOfIntegerVariable(varName: string, defaultValue: any): Promise<any> {
    return;
  }

  /**
   * Call this to Get List of String Variable
   *
   * @param varName {string}
   * @param defaultValue {any}
   * @returns {Promise<any>}
   */
  @Cordova()
  getListOfStringVariable(varName: string, defaultValue: any): Promise<any> {
    return;
  }

  /**
   * Call this to get Map of Boolean Variable
   *
   * @param varName {string}
   * @param defaultValue {any}
   * @returns {Promise<any>}
   */
  @Cordova()
  getMapOfBooleanVariable(varName: string, defaultValue: any): Promise<any> {
    return;
  }

  /**
   * Call this to Get Map of Double Variable
   *
   * @param varName {string}
   * @param defaultValue {any}
   * @returns {Promise<any>}
   */
  @Cordova()
  getMapOfDoubleVariable(varName: string, defaultValue: any): Promise<any> {
    return;
  }

  /**
   * Call this to Get Map of Integer Variable
   *
   * @param varName {string}
   * @param defaultValue {any}
   * @returns {Promise<any>}
   */
  @Cordova()
  getMapOfIntegerVariable(varName: string, defaultValue: any): Promise<any> {
    return;
  }

  /**
   * Call this to Get Map of String Variable
   *
   * @param varName {string}
   * @param defaultValue {any}
   * @returns {Promise<any>}
   */
  @Cordova()
  getMapOfStringVariable(varName: string, defaultValue: any): Promise<any> {
    return;
  }

  /**
   * Call this to Get All Display Units
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  getAllDisplayUnits(): Promise<any> {
    return;
  }

  /**
   * Call this to Get Display Unit For Id
   *
   * @param id {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  getDisplayUnitForId(id: string): Promise<any> {
    return;
  }

  /**
   * Call this to Push DisplayUnit Viewed Event for ID
   *
   * @param id {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  pushDisplayUnitViewedEventForID(id: string): Promise<any> {
    return;
  }

  /**
   * Call this to Push DisplayUnit Clicked Event for ID
   *
   * @param id {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  pushDisplayUnitClickedEventForID(id: string): Promise<any> {
    return;
  }

  /**
   * Call this to Get Feature Flag for key
   *
   * @param key {string}
   * @param defaultValue {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  getFeatureFlag(key: string, defaultValue: string): Promise<any> {
    return;
  }

  /**
   * Call this to Set Defaults for Product Config
   *
   * @param defaults {any}
   * @returns {Promise<any>}
   */
  @Cordova()
  setDefaultsMap(defaults: any): Promise<any> {
    return;
  }

  /**
   * Call this for Product Config Fetch
   *
   * @param defaults {any}
   * @returns {Promise<any>}
   */
  @Cordova()
  fetch(): Promise<any> {
    return;
  }

  /**
   * Call this for Product Config Fetch with Min Interval
   *
   * @param timeInterval {number}
   * @returns {Promise<any>}
   */
  @Cordova()
  fetchWithMinimumFetchIntervalInSeconds(timeInterval: number): Promise<any> {
    return;
  }

  /**
   * Call this for Product Config Activate
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  activate(): Promise<any> {
    return;
  }

  /**
   * Call this for Product Config Fetch and Activate
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  fetchAndActivate(): Promise<any> {
    return;
  }

  /**
   * Call this to set Product Config Fetch with Min Interval
   *
   * @param timeInterval {number}
   * @returns {Promise<any>}
   */
  @Cordova()
  setMinimumFetchIntervalInSeconds(timeInterval: number): Promise<any> {
    return;
  }

  /**
   * Call this to Get Last Fetch Time Interval
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  getLastFetchTimeStampInMillis(): Promise<any> {
    return;
  }

  /**
   * Call this to Get String
   *
   * @param key {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  getString(): Promise<any> {
    return;
  }

  /**
   * Call this to Get Boolean
   *
   * @param key {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  getBoolean(): Promise<any> {
    return;
  }

  /**
   * Call this to Get Long
   *
   * @param key {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  getLong(): Promise<any> {
    return;
  }

  /**
   * Call this to Get Double
   *
   * @param key {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  getDouble(): Promise<any> {
    return;
  }

  /**
   * Call this to Reset Product Config
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  reset(): Promise<any> {
    return;
  }

  /*******************
   * Developer Options
   ******************/
  /**
   * 0 is off, 1 is info, 2 is debug, default is 1
   *
   * @param level {number}
   * @returns {Promise<any>}
   */
  @Cordova()
  setDebugLevel(level: number): Promise<any> {
    return;
  }
}
