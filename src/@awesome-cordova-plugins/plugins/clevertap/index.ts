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
* Sets the user's consent for event and profile tracking.
*
* You must call this method separately for each active user profile,
* for example, when switching user profiles using `onUserLogin`.
*
* Consent Scenarios:
*
* 1. **Complete Opt-Out**
*    `userOptOut = true`, `allowSystemEvents = false`
*    → No events (custom or system) are saved locally or remotely. Maximum privacy.
*
* 2. **Full Opt-In**
*    `userOptOut = false`, `allowSystemEvents = true`
*    → All events (custom and system) are tracked. Default behavior.
*
* 3. **Partial Opt-In**
*    `userOptOut = true`, `allowSystemEvents = true`
*    → Only system events (e.g., app launch, notification viewed) are tracked. Custom events are ignored.
*
* ⚠️ The combination `userOptOut = false` and `allowSystemEvents = false` is invalid.
* In such cases, the SDK defaults to **Full Opt-In**.
*
* To re-enable full tracking after opting out, call with:
* `userOptOut = false`, `allowSystemEvents = true`.
*
* @param {boolean} userOptOut - Set to `true` to disable custom event tracking.
* @param {boolean} allowSystemEvents - Set to `true` to allow system-level event tracking.
*/
  @Cordova()
  setOptOut(optOut: boolean, allowSystemEvents?: boolean): Promise<any> {
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

  /**
   * Call this method to set a custom locale for the clevertap instance.
   * @param locale {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  setLocale(locale: string): Promise<any> {
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
   * Sets the devices push token for providers other than FCM
   *
   * @param token {string}
   * @param pushType {object} - with the following keys "type", "prefKey", "className", "messagingSDKClassName";
   * @returns {Promise<any>}
   */
  @Cordova()
  registerPushToken(token: string, pushType: any): Promise<any> {
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
   * Get the details of a specific event
   *
   * @param eventName {string} - The name of the event
   * @returns {Promise<any>}
   */
  @Cordova()
  getUserEventLog(eventName: string): Promise<any> {
      return;
  }

  /**
   * Get the count of times an event occurred
   *
   * @param eventName {string} - The name of the event
   * @returns {Promise<any>}
   */
  @Cordova()
  getUserEventLogCount(eventName: string): Promise<any> {
      return;
  }

  /**
   * Get timestamp of user's last app visit
   *
   * @returns {Promise<any>} - Returns epoch seconds or -1
   */
  @Cordova()
  getUserLastVisitTs(): Promise<any> {
      return;
  }

  /**
   * Get the total number of times the user has launched the app
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  getUserAppLaunchCount(): Promise<any> {
      return;
  }

  /**
   * Get full event history for the current user
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  getUserEventLogHistory(): Promise<any> {
      return;
  }


  /**
   * @deprecated - Use getUserEventLog() instead
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
   * @deprecated - Use getUserEventLog() instead
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
   * @deprecated - Use getUserEventLogCount() instead
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
   * * @deprecated - Use getUserEventLog() instead
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
   * @deprecated - Use getUserEventLogHistory() instead
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
   * @deprecated This method is deprecated. Use getCleverTapID() instead.
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
   * @deprecated This method is deprecated. Use getCleverTapID() instead.
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
   * Get User Profile CleverTapID
   * calls back with CleverTapID
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  getCleverTapID(): Promise<any> {
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

  /**
   * Method for incrementing a value for a single-value profile property (if it exists).
   *
   * @param key {string}
   * @param value {number}
   * @returns {Promise<any>}
   */
  @Cordova()
  profileIncrementValueBy(key: string,value: number): Promise<any> {
    return;
  }

  /**
   * Method for decrementing a value for a single-value profile property (if it exists).
   *
   * @param key {string}
   * @param value {number}
   * @returns {Promise<any>}
   */
  @Cordova()
  profileDecrementValueBy(key: string,value: number): Promise<any> {
    return;
  }

  /*******************
   * In-App Controls
   ******************/

  /**
   * Suspends and saves inApp notifications until 'resumeInAppNotifications' is called for current session.
   * Automatically resumes InApp notifications display on CleverTap shared instance creation.
   * Pending inApp notifications are displayed only for current session.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  suspendInAppNotifications(): Promise<any> {
    return;
  }

  /**
   * Discards inApp notifications until 'resumeInAppNotifications' is called for current session.
   * Automatically resumes InApp notifications display on CleverTap shared instance creation.
   * Pending inApp notifications are not displayed.
   */
  @Cordova()
  discardInAppNotifications(): Promise<any> {
    return;
  }

  /**
   * Resumes displaying inApps notifications and shows pending inApp notifications if any.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  resumeInAppNotifications(): Promise<any> {
    return;
  }

  /**
   * Deletes all images and gifs which are preloaded for inapps in cs mode.
   *
   * @param expiredOnly {boolean} - to clear only assets which will not be needed further for inapps
   * @returns {Promise<any>}
   */
  @Cordova()
  clearInAppResources(expiredOnly: boolean): Promise<any> {
    return;
  }

  /**
   * Deletes all types of files which are preloaded for SDK features like custom in-app templates, app functions and variables etc.
   *
   * @param expiredOnly {boolean} - to clear only assets which will not be needed further for inapps
   * @returns {Promise<any>}
   */
    @Cordova()
    clearFileResources(expiredOnly: boolean): Promise<any> {
      return;
    }

  /**
   * Fetches In Apps from server.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  fetchInApps(): Promise<any> {
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
   * @deprecated - Use getUserAppLaunchCount() instead
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
   * @deprecated -  Use getUserLastVisitTs() instead
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
   * Call this method to delete bulk Inbox Messages for Given Message Ids
   *
   * @param messageIds {any} array of strings
   * @returns {Promise<any>}
   */
  @Cordova()
  deleteInboxMessagesForIds(messageIds: any): Promise<any> {
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
   * Call this to Mark Read Inbox Messages For Ids in bulk
   *
   * @param messageIds {any} array of strings
   * @returns {Promise<any>}
   */
  @Cordova()
  markReadInboxMessagesForIds(messageIds: any): Promise<any> {
    return;
  }

  /**
   * Call this to dismiss Inbox
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  dismissInbox(): Promise<any> {
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
   * @deprecated - Since version 2.7.0 and will be removed in the future versions of this SDK.
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
   * @deprecated - Since version 2.7.0 and will be removed in the future versions of this SDK.
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
   * @deprecated - Since version 2.7.0 and will be removed in the future versions of this SDK.
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
   * @deprecated - Since version 2.7.0 and will be removed in the future versions of this SDK.
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
   * @deprecated - Since version 2.7.0 and will be removed in the future versions of this SDK.
   * Call this for Product Config Activate
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  activate(): Promise<any> {
    return;
  }

  /**
   * @deprecated - Since version 2.7.0 and will be removed in the future versions of this SDK.
   * Call this for Product Config Fetch and Activate
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  fetchAndActivate(): Promise<any> {
    return;
  }

  /**
   * @deprecated - Since version 2.7.0 and will be removed in the future versions of this SDK.
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
   * @deprecated - Since version 2.7.0 and will be removed in the future versions of this SDK.
   * Call this to Get Last Fetch Time Interval
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  getLastFetchTimeStampInMillis(): Promise<any> {
    return;
  }

  /**
   * @deprecated - Since version 2.7.0 and will be removed in the future versions of this SDK.
   * Call this to Get String
   *
   * @param key {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  getString(key: string): Promise<any> {
    return;
  }

  /**
   * @deprecated - Since version 2.7.0 and will be removed in the future versions of this SDK.
   * Call this to Get Boolean
   *
   * @param key {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  getBoolean(key: string): Promise<any> {
    return;
  }

  /**
   * @deprecated - Since version 2.7.0 and will be removed in the future versions of this SDK.
   * Call this to Get Long
   *
   * @param key {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  getLong(key: string): Promise<any> {
    return;
  }

  /**
   * @deprecated - Since version 2.7.0 and will be removed in the future versions of this SDK.
   * Call this to Get Double
   *
   * @param key {string}
   * @returns {Promise<any>}
   */
  @Cordova()
  getDouble(key: string): Promise<any> {
    return;
  }

  /**
   * @deprecated - Since version 2.7.0 and will be removed in the future versions of this SDK.
   * Call this to Reset Product Config
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  reset(): Promise<any> {
    return;
  }

  /****************************
   * Product Experiences methods
   ****************************/

  /**
   *
   * Uploads variables to the server. Requires Development/Debug build/configuration.
   * @returns {Promise<any>}
   */
  @Cordova()
  syncVariables(): Promise<any> {
    return;
  }

  /**
   * Uploads variables to the server.
   * @param {boolean} isProduction Provide `true` if variables must be sync in Productuon build/configuration.
   * @returns {Promise<any>}
   *
   *
   * Note: This is NO-OP in Android
   */
  @Cordova()
  syncVariablesinProd(isProduction: boolean): Promise<any> {
    return;
  }

  /**
   * Forces variables to update from the server.
   * @returns {Promise<any>}
   */
  @Cordova()
  fetchVariables(): Promise<any> {
    return;
  }

  /**
   * Create variables.
   * @returns {Promise<any>}
   * @param {object} variables The JSON Object specifying the varibles to be created.
   */
  @Cordova()
  defineVariables(variables: any): Promise<any> {
    return;
  }

  /**
   * Create File Variable
   * @returns {Promise<any>}
   * @param {string} variable The String specifying the name of file varible to be created.
   */
    @Cordova()
    defineFileVariable(variable: string): Promise<any> {
      return;
    }

  /**
   * Get a variable or a group for the specified name.
   * @param {string} name - name.
   * @returns {Promise<any>}
   */
  @Cordova()
  getVariable(name: string): Promise<any> {
    return;
  }

  /**
   * Get all variables via a JSON object.
   * @returns {Promise<any>}
   */
  @Cordova()
  getVariables(): Promise<any> {
    return;
  }

  /**
   * Adds a callback to be invoked when variables are initialised with server values. Will be called each time new values are fetched.
   * @returns {Promise<any>}
   */
  @Cordova()
  onVariablesChanged(): Promise<any> {
    return;
  }

  /**
   * Called when the value of the variable changes.
   * @param {name} string the name of the variable
   * @returns {Promise<any>}
   */
  @Cordova()
  onValueChanged(name: string): Promise<any> {
    return;
  }


  /**
   * Called when the value of the file variable is downloaded and ready
   * @param {name} string the name of the variable
   * @returns {Promise<any>}
   */
  @Cordova()
  onFileValueChanged(name: string): Promise<any> {
    return;
  }

  /**
   * Adds a callback to be invoked when variables are initialised with server values. Will be called only once on app start, or when added if server values are already received
   * @returns {Promise<any>}
   */
  @Cordova()
  onOneTimeVariablesChanged(): Promise<any> {
    return;
  }

  /**
   * Adds a callback to be invoked when no files need to be downloaded or all downloads have been completed. It is called each time new values are fetched and downloads are completed.
   * @returns {Promise<any>}
   */
  @Cordova()
  onVariablesChangedAndNoDownloadsPending(): Promise<any> {
    return;
  }

  /**
   * Adds a callback to be invoked only once for when new values are fetched and downloaded
   * @returns {Promise<any>}
   */
  @Cordova()
  onceVariablesChangedAndNoDownloadsPending(): Promise<any> {
    return;
  }


  /****************************
   * Custom Templates methods
   ****************************/

  /**
   *
   * Uploads Custom in-app templates and app functions to the server. Requires Development/Debug build/configuration.
   * @returns {Promise<any>}
   */
  @Cordova()
  syncCustomTemplates(): Promise<any> {
    return;
  }

  /**
   * Uploads Custom in-app templates and app functions to the server.
   * @param {boolean} isProduction Provide `true` if templates must be sync in Productuon build/configuration.
   * @returns {Promise<any>}
   *
   *
   * Note: This is NO-OP in Android
   */
  @Cordova()
  syncCustomTemplatesInProd(isProduction: boolean): Promise<any> {
    return;
  }

  /**
  * Notify the SDK that an active custom template is dismissed. The active custom template is considered to be
  * visible to the user until this method is called. Since the SDK can show only one InApp message at a time, all
  * other messages will be queued until the current one is dismissed.
  * @param {string} templateName The name of the active template
  * @returns {Promise<any>}
  */
  @Cordova()
  customTemplateSetDismissed(templateName: string): Promise<any> {
    return;
  }


  /**
  * Notify the SDK that an active custom template is presented to the user.
  * @param {string} templateName The name of the active template
  * @returns {Promise<any>}
  */
  @Cordova()
  customTemplateSetPresented(templateName: string): Promise<any> {
    return;
  }

  /**
  * Trigger a custom template action argument by name.
  *
  * @param {string} templateName The name of an active template for which the action is defined
  * @param {string} argName The action argument na
  * @returns {Promise<any>}
  */
  @Cordova()
  customTemplateRunAction(templateName: string, argName: string): Promise<any> {
    return;
  }

  /**
  * Retrieve a string argument by name.
  *
  * @param {string} templateName The name of an active template for which the argument is defined
  * @param {string} argName The action argument name
  * @returns {Promise<any>}
  */
  @Cordova()
  customTemplateGetStringArg(templateName: string, argName: string): Promise<any> {
    return;
  }

  /**
  * Retrieve a number argument by name.
  *
  * @param {string} templateName The name of an active template for which the argument is defined
  * @param {string} argName The action argument name
  * @returns {Promise<any>}
  */
  @Cordova()
  customTemplateGetNumberArg(templateName: string, argName: string): Promise<any> {
    return;
  }

  /**
  * Retrieve a boolean argument by name.
  *
  * @param {string} templateName The name of an active template for which the argument is defined
  * @param {string} argName The action argument name
  * @returns {Promise<any>}
  */
  @Cordova()
  customTemplateGetBooleanArg(templateName: string, argName: string): Promise<any> {
    return;
  }

  /**
  * Retrieve a file argument by name.
  *
  * @param {string} templateName The name of an active template for which the argument is defined
  * @param {string} argName The action argument name
  * @returns {Promise<any>}
  */
  @Cordova()
  customTemplateGetFileArg(templateName: string, argName: string): Promise<any> {
    return;
  }

  /**
  * Retrieve an object argument by name.
  *
  * @param {string} templateName The name of an active template for which the argument is defined
  * @param {string} argName The action argument name
  * @returns {Promise<any>}
  */
  @Cordova()
  customTemplateGetObjectArg(templateName: string, argName: string): Promise<any> {
    return;
  }

  /**
  * Get a string representation of an active's template context with information about all arguments.
  * @param {string} templateName The name of an active template
  * @returns {Promise<any>}
  */
  @Cordova()
  customTemplateContextToString(templateName: string): Promise<any> {
    return;
  }

  /****************************
   * Android 13 Push Primer
   ****************************/

  /**
   * Method to prompt the push primer for android 13 onwards.
   * @param {object} value - key-value belongs to the localInApp properties. Refer documentation for details.
   * @returns {Promise<any>}
   */
  @Cordova()
  promptPushPrimer(localInAppObject: any): Promise<any> {
    return;
  }

  /**
   * Method to prompt the hard permission dialog directly, if the push primer is not required.
   * @param {string} showFallbackSettings - If the value is true then SDK shows an alert dialog which routes to app's notification settings page.
   * @returns {Promise<any>}
   */
  @Cordova()
  promptForPushPermission(showFallbackSettings: boolean): Promise<any> {
    return;
  }

  /**
   * Returns true/false based on whether push permission is granted or denied.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  isPushPermissionGranted(): Promise<any> {
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
