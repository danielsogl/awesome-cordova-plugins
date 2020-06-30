import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @name Notificare
 * @description
 * Official Ionic Native plugin for Notificare.
 *
 * @usage
 * ```typescript
 * import { Notificare } from '@ionic-native/notificare';
 *
 *
 * constructor(private notificare: Notificare) { }
 *
 * ...
 *
 *
 * this.notificare.launch()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'Notificare',
  plugin: 'cordova-plugin-notificare-push',
  pluginRef: 'Notificare',
  repo: 'https://github.com/Notificare/notificare-push-lib-cordova',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Notificare extends IonicNativePlugin {
  /**
   * Launches Notificare with the initialized configuration.
   * This method should be invoked whenever you want to start using the library.
   * In response to this method the 'ready' delegate will be triggered.
   * @return {Promise<void>} Returns a promise that resolves when Notificare has launched.
   */
  @Cordova()
  launch(): Promise<void> {
    return;
  }

  /**
   * Destroys the initialized Notificare instance.
   * This method should be invoked whenever you want to stop using the library.
   * It will unregister a device, stop location services and reset Notificare to its pre-launch state.
   */
  @Cordova()
  unlaunch(): Promise<void> {
    return;
  }

  /**
   * Registers the device for remote push notifications.
   * Make sure you only invoke this method after the 'ready' event.
   */
  @Cordova()
  registerForNotifications(): Promise<void> {
    return;
  }

  /**
   * Unregisters the device for remote push notifications.
   * Make sure you only invoke this method after the 'ready' event.
   */
  @Cordova()
  unregisterForNotifications(): Promise<void> {
    return;
  }

  /**
   * Sets the iOS authorization options.
   * Specify the combination of options that are desired.
   *
   * @param options
   */
  @Cordova()
  setAuthorizationOptions(options: string[]): Promise<void> {
    return;
  }

  /**
   * Sets the iOS presentation options.
   * Specify the combination of options that are desired.
   *
   * @param options
   */
  @Cordova()
  setPresentationOptions(options: string[]): Promise<void> {
    return;
  }

  /**
   * Sets the iOS category options.
   * Specify the combination of options that are desired.
   *
   * @param options
   */
  @Cordova()
  setCategoryOptions(options: string[]): Promise<void> {
    return;
  }

  /**
   * Checks whether an APNS token has been requested and registered.
   */
  @Cordova()
  isRemoteNotificationsEnabled(): Promise<boolean> {
    return;
  }

  /**
   * Checks whether the user has allowed alerts, badge and sounds.
   */
  @Cordova()
  isAllowedUIEnabled(): Promise<boolean> {
    return;
  }

  /**
   * Checks whether the notification is from Notificare.
   *
   * @param notification
   */
  @Cordova()
  isNotificationFromNotificare(notification: any): Promise<boolean> {
    return;
  }

  /**
   * Retrieves the current notification settings.
   */
  @Cordova()
  fetchNotificationSettings(): Promise<any> {
    return;
  }

  /**
   * Starts the location manager for geo-targeting, geo-fencing and beacons.
   */
  @Cordova()
  startLocationUpdates(): Promise<void> {
    return;
  }

  /**
   * Stops the location manager from collecting location updates.
   */
  @Cordova()
  stopLocationUpdates(): Promise<void> {
    return;
  }

  /**
   * Use this method to manually clear a device's location.
   * This will make sure that any location data stored remotely in our servers is deleted for the device.
   */
  @Cordova()
  clearLocation(): Promise<void> {
    return;
  }

  /**
   * Checks whether the location services are enabled.
   */
  @Cordova()
  isLocationServicesEnabled(): Promise<boolean> {
    return;
  }

  /**
   * Enables beacons scanning.
   */
  @Cordova()
  enableBeacons(): Promise<void> {
    return;
  }

  /**
   * Disables beacons scanning.
   */
  @Cordova()
  disableBeacons(): Promise<void> {
    return;
  }

  /**
   * Registers the device with Notificare.
   * Make sure you only invoke this method after the 'ready' event.
   *
   * @param userId
   * @param userName
   */
  @Cordova()
  registerDevice(userId: Nullable<string>, userName: Nullable<string>): Promise<void> {
    return;
  }

  /**
   * Retrieves the currently registered device.
   */
  @Cordova()
  fetchDevice(): Promise<any> {
    return;
  }

  /**
   * Retrieves the preferred language.
   */
  @Cordova()
  fetchPreferredLanguage(): Promise<string> {
    return;
  }

  /**
   * Overrides the system language for this device.
   * Make sure you only invoke this method after the 'deviceRegistered' event.
   * If never invoked, the device's default system locale will be used.
   *
   * @param preferredLanguage a string representing the language (ISO 639-1) and region (ISO 3166-2) (e.g. en-US).
   */
  @Cordova()
  updatePreferredLanguage(preferredLanguage: string): Promise<void> {
    return;
  }

  /**
   * Retrieves all the tags a device has been added to the device.
   * Make sure you only invoke this method after the 'ready' event.
   */
  @Cordova()
  fetchTags(): Promise<string[]> {
    return;
  }

  /**
   * Adds a tag to the device.
   * Make sure you only invoke this method after the 'ready' event.
   *
   * @param tag
   */
  @Cordova()
  addTag(tag: string): Promise<void> {
    return;
  }

  /**
   * Adds multiple tags to the device.
   * Make sure you only invoke this method after the 'ready' event.
   *
   * @param tags
   */
  @Cordova()
  addTags(tags: string[]): Promise<void> {
    return;
  }

  /**
   * Removes a tag from the device.
   * Make sure you only invoke this method after the 'ready' event.
   *
   * @param tag
   */
  @Cordova()
  removeTag(tag: string): Promise<void> {
    return;
  }

  /**
   * Removes multiple tags from the device.
   * Make sure you only invoke this method after the 'ready' event.
   *
   * @param tags
   */
  @Cordova()
  removeTags(tags: string): Promise<void> {
    return;
  }

  /**
   * Removes all tags from the device.
   * Make sure you only invoke this method after the 'ready' event.
   */
  @Cordova()
  clearTags(): Promise<void> {
    return;
  }

  /**
   * Retrieves an array of NotificareUserData objects associated with this device.
   * Make sure you only invoke this method after the 'ready' event.
   */
  @Cordova()
  fetchUserData(): Promise<NotificareUserData[]> {
    return;
  }

  /**
   * Updates the NotificareUserData objects associated with this device.
   * Make sure you only invoke this method after the 'ready' event.
   *
   * @param userData
   */
  @Cordova()
  updateUserData(userData: NotificareUserData[]): Promise<void> {
    return;
  }

  /**
   * Retrieves the NotificareDeviceDnD object with the do not disturb times for this device.
   * Make sure you only invoke this method after the 'ready' event.
   */
  @Cordova()
  fetchDoNotDisturb(): Promise<any | undefined> {
    return;
  }

  /**
   * Updates the NotificareDeviceDnD object with the do not disturb times for this device.
   * Make sure you only invoke this method after the 'ready' event.
   *
   * @param dnd
   */
  @Cordova()
  updateDoNotDisturb(dnd: any): Promise<any> {
    return;
  }

  /**
   * Clears the NotificareDeviceDnD object with the do not disturb times for this device.
   * Make sure you only invoke this method after the 'ready' event.
   */
  @Cordova()
  clearDoNotDisturb(): Promise<void> {
    return;
  }

  /**
   * Retrieves a NotificareNotification object on-demand.
   * Make sure you only invoke this method after the 'ready' event.
   *
   * @param notification
   */
  @Cordova()
  fetchNotification(notification: any): Promise<any> {
    return;
  }

  /**
   * Retrieves a NotificareInboxItem object on-demand.
   * Make sure you only invoke this method after the 'ready' event.
   *
   * @param inboxItem
   */
  @Cordova()
  fetchNotificationForInboxItem(inboxItem: any): Promise<any> {
    return;
  }

  /**
   * Presents the notification.
   *
   * @param notification
   */
  @Cordova()
  presentNotification(notification: any): Promise<void> {
    return;
  }

  /**
   * Retrieves the inbox for this device.
   */
  @Cordova()
  fetchInbox(): Promise<any[]> {
    return;
  }

  /**
   * Presents an inbox item.
   *
   * @param item
   */
  @Cordova()
  presentInboxItem(item: any): Promise<void> {
    return;
  }

  /**
   * Removes an item from the inbox of this device.
   *
   * @param item
   */
  @Cordova()
  removeFromInbox(item: any): Promise<void> {
    return;
  }

  /**
   * Marks an inbox item as ready.
   *
   * @param item
   */
  @Cordova()
  markAsRead(item: any): Promise<void> {
    return;
  }

  /**
   * Clears all inbox items for this device.
   */
  @Cordova()
  clearInbox(): Promise<void> {
    return;
  }

  /**
   * Retrieves a list of assets for a specific group.
   *
   * @param group
   */
  @Cordova()
  fetchAssets(group: string): Promise<any[]> {
    return;
  }

  /**
   * Retrieves a Pass object using the auto-generated serial.
   *
   * @param serial
   */
  @Cordova()
  fetchPassWithSerial(serial: string): Promise<any> {
    return;
  }

  /**
   * Retrieves a Pass object using the custom barcode.
   *
   * @param barcode
   */
  @Cordova()
  fetchPassWithBarcode(barcode: string): Promise<any> {
    return;
  }

  /**
   * Retrieves the list of all the NotificareProduct objects that you created.
   */
  @Cordova()
  fetchProducts(): Promise<any[]> {
    return;
  }

  /**
   * Retrieves the list of all purchased products.
   */
  @Cordova()
  fetchPurchasedProducts(): Promise<any[]> {
    return;
  }

  /**
   * Retrieves a specific NotificareProduct object by providing a product identifier (SKU).
   *
   * @param product
   */
  @Cordova()
  fetchProduct(product: any): Promise<any> {
    return;
  }

  /**
   * Starts a purchase transaction. Use a NotificareProduct result from the methods above.
   *
   * @param product
   */
  @Cordova()
  buyProduct(product: any): Promise<void> {
    return;
  }

  /**
   * Enables in-app purchases.
   */
  @Cordova()
  enableBilling(): Promise<void> {
    return;
  }

  /**
   * Disables in-app purchases
   */
  @Cordova()
  disableBilling(): Promise<void> {
    return;
  }

  /**
   * Logs a custom event in Notificare.
   *
   * @param name
   * @param data
   */
  @Cordova()
  logCustomEvent(name: string, data: Record<string, any>): Promise<void> {
    return;
  }

  /**
   * Logs a notification open event in Notificare.
   *
   * @param notification
   */
  @Cordova()
  logOpenNotification(notification: any): Promise<void> {
    return;
  }

  /**
   * Logs a notification influenced event in Notificare.
   *
   * @param notification
   */
  @Cordova()
  logInfluencedNotification(notification: any): Promise<void> {
    return;
  }

  /**
   * Logs a notification received event in Notificare.
   *
   * @param notification
   */
  @Cordova()
  logReceiveNotification(notification: any): Promise<void> {
    return;
  }

  /**
   * Performs a Cloud API request.
   *
   * @param verb
   * @param path
   * @param headers
   * @param params
   * @param body
   */
  @Cordova()
  doCloudHostOperation(
    verb: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    path: string,
    headers: Nullable<Record<string, string>>,
    params: Nullable<Record<string, string>>,
    body: Nullable<any>
  ): Promise<any> {
    return;
  }

  /**
   * Creates an user account on the OAuth2 service.
   *
   * @param email
   * @param name
   * @param password
   */
  @Cordova()
  createAccount(email: string, name: string, password: string): Promise<void> {
    return;
  }

  /**
   * Validates an user account on the OAuth2 service.
   *
   * @param token
   */
  @Cordova()
  validateAccount(token: string): Promise<void> {
    return;
  }

  /**
   * Resets an user account's password.
   *
   * @param password
   * @param token
   */
  @Cordova()
  resetPassword(password: string, token: string): Promise<void> {
    return;
  }

  /**
   * Sends a password reset email.
   *
   * @param email
   */
  @Cordova()
  sendPassword(email: string): Promise<void> {
    return;
  }

  /**
   * Performs an OAuth2 login transaction.
   *
   * @param email
   * @param password
   */
  @Cordova()
  login(email: string, password: string): Promise<void> {
    return;
  }

  /**
   * Logs out the user removing locally stored tokens.
   */
  @Cordova()
  logout(): Promise<void> {
    return;
  }

  /**
   * Checks whether there is an user logged in.
   */
  @Cordova()
  isLoggedIn(): Promise<boolean> {
    return;
  }

  /**
   * Generates a new access token.
   */
  @Cordova()
  generateAccessToken(): Promise<void> {
    return;
  }

  /**
   * Updates the password for the currently logged in user.
   *
   * @param password
   */
  @Cordova()
  changePassword(password: string): Promise<void> {
    return;
  }

  /**
   * Retrieves the current user's account details.
   */
  @Cordova()
  fetchAccountDetails(): Promise<any> {
    return;
  }

  /**
   * Retrieves the current user's preferences.
   */
  @Cordova()
  fetchUserPreferences(): Promise<any[]> {
    return;
  }

  /**
   * Adds a segment to an user preference.
   *
   * @param segment
   * @param preference
   */
  @Cordova()
  addSegmentToUserPreference(segment: any, preference: any): Promise<void> {
    return;
  }

  /**
   * Removes a segment from an user preference.
   *
   * @param segment
   * @param preference
   */
  @Cordova()
  removeSegmentFromUserPreference(segment: any, preference: any): Promise<void> {
    return;
  }

  /**
   * Starts a component that allows an user to scan for QR-codes.
   */
  @Cordova()
  startScannableSession(): Promise<void> {
    return;
  }

  /**
   * Presents the scannable.
   * @param scannable
   */
  @Cordova()
  presentScannable(scannable: any): Promise<void> {
    return;
  }

  /**
   * Subscribes to a Notificare event.
   *
   * @param event
   * @param callback
   */
  @Cordova()
  on(event: string, callback: (data: any) => void): void {
    return;
  }
}

type Nullable<T> = T | null;

export interface NotificareUserData {
  key: string;
  label?: string;
  type?: string;
  value?: Nullable<string>;
}
