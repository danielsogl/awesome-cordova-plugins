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
   * In response to this method the onReady delegate will be triggered.
   * @return {Promise<void>} Returns a promise that resolves when Notificare has launched.
   */
  @Cordova()
  launch(): Promise<void> {
    return;
  }

  @Cordova()
  unlaunch(): Promise<void> {
    return;
  }

  @Cordova()
  registerForNotifications(): Promise<void> {
    return;
  }

  @Cordova()
  unregisterForNotifications(): Promise<void> {
    return;
  }

  @Cordova()
  setAuthorizationOptions(options: string[]): Promise<void> {
    return;
  }

  @Cordova()
  setPresentationOptions(options: string[]): Promise<void> {
    return;
  }

  @Cordova()
  setCategoryOptions(options: string[]): Promise<void> {
    return;
  }

  @Cordova()
  isRemoteNotificationsEnabled(): Promise<boolean> {
    return;
  }

  @Cordova()
  isAllowedUIEnabled(): Promise<boolean> {
    return;
  }

  @Cordova()
  isNotificationFromNotificare(notification: any): Promise<boolean> {
    return;
  }

  @Cordova()
  fetchNotificationSettings(): Promise<any> {
    return;
  }

  @Cordova()
  startLocationUpdates(): Promise<void> {
    return;
  }

  @Cordova()
  stopLocationUpdates(): Promise<void> {
    return;
  }

  @Cordova()
  clearLocation(): Promise<void> {
    return;
  }

  @Cordova()
  isLocationServicesEnabled(): Promise<boolean> {
    return;
  }

  @Cordova()
  enableBeacons(): Promise<void> {
    return;
  }

  @Cordova()
  disableBeacons(): Promise<void> {
    return;
  }

  @Cordova()
  registerDevice(userId: Nullable<string>, userName: Nullable<string>): Promise<void> {
    return;
  }

  @Cordova()
  fetchDevice(): Promise<any> {
    return;
  }

  @Cordova()
  fetchPreferredLanguage(): Promise<string> {
    return;
  }

  @Cordova()
  updatePreferredLanguage(preferredLanguage: string): Promise<void> {
    return;
  }

  @Cordova()
  fetchTags(): Promise<string[]> {
    return;
  }

  @Cordova()
  addTag(tag: string): Promise<void> {
    return;
  }

  @Cordova()
  addTags(tags: string[]): Promise<void> {
    return;
  }

  @Cordova()
  removeTag(tag: string): Promise<void> {
    return;
  }

  @Cordova()
  removeTags(tags: string): Promise<void> {
    return;
  }

  @Cordova()
  clearTags(): Promise<void> {
    return;
  }

  @Cordova()
  fetchUserData(): Promise<any> {
    return;
  }

  @Cordova()
  updateUserData(userData: any): Promise<void> {
    return;
  }

  @Cordova()
  fetchDoNotDisturb(): Promise<any | undefined> {
    return;
  }

  @Cordova()
  updateDoNotDisturb(dnd: any): Promise<any> {
    return;
  }

  @Cordova()
  clearDoNotDisturb(): Promise<void> {
    return;
  }

  @Cordova()
  fetchNotification(notification: any): Promise<any> {
    return;
  }

  @Cordova()
  fetchNotificationForInboxItem(inboxItem: any): Promise<any> {
    return;
  }

  @Cordova()
  presentNotification(notification: any): Promise<void> {
    return;
  }

  @Cordova()
  fetchInbox(): Promise<any[]> {
    return;
  }

  @Cordova()
  presentInboxItem(item: any): Promise<void> {
    return;
  }

  @Cordova()
  removeFromInbox(item: any): Promise<void> {
    return;
  }

  @Cordova()
  markAsRead(item: any): Promise<void> {
    return;
  }

  @Cordova()
  clearInbox(): Promise<void> {
    return;
  }

  @Cordova()
  fetchAssets(group: string): Promise<any[]> {
    return;
  }

  @Cordova()
  fetchPassWithSerial(serial: string): Promise<any> {
    return;
  }

  @Cordova()
  fetchPassWithBarcode(barcode: string): Promise<any> {
    return;
  }

  @Cordova()
  fetchProducts(): Promise<any[]> {
    return;
  }

  @Cordova()
  fetchPurchasedProducts(): Promise<any[]> {
    return;
  }

  @Cordova()
  fetchProduct(product: any): Promise<any> {
    return;
  }

  @Cordova()
  buyProduct(product: any): Promise<void> {
    return;
  }

  @Cordova()
  enableBilling(): Promise<void> {
    return;
  }

  @Cordova()
  disableBilling(): Promise<void> {
    return;
  }

  @Cordova()
  logCustomEvent(name: string, data: Record<string, any>): Promise<void> {
    return;
  }

  @Cordova()
  logOpenNotification(notification: any): Promise<void> {
    return;
  }

  @Cordova()
  logInfluencedNotification(notification: any): Promise<void> {
    return;
  }

  @Cordova()
  logReceiveNotification(notification: any): Promise<void> {
    return;
  }

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

  @Cordova()
  createAccount(email: string, name: string, password: string): Promise<void> {
    return;
  }

  @Cordova()
  validateAccount(token: string): Promise<void> {
    return;
  }

  @Cordova()
  resetPassword(password: string, token: string): Promise<void> {
    return;
  }

  @Cordova()
  sendPassword(email: string): Promise<void> {
    return;
  }

  @Cordova()
  login(email: string, password: string): Promise<void> {
    return;
  }

  @Cordova()
  logout(): Promise<void> {
    return;
  }

  @Cordova()
  isLoggedIn(): Promise<boolean> {
    return;
  }

  @Cordova()
  generateAccessToken(): Promise<void> {
    return;
  }

  @Cordova()
  changePassword(password: string): Promise<void> {
    return;
  }

  @Cordova()
  fetchAccountDetails(): Promise<any> {
    return;
  }

  @Cordova()
  fetchUserPreferences(): Promise<any[]> {
    return;
  }

  @Cordova()
  addSegmentToUserPreference(segment: any, preference: any): Promise<void> {
    return;
  }

  @Cordova()
  removeSegmentFromUserPreference(segment: any, preference: any): Promise<void> {
    return;
  }

  @Cordova()
  startScannableSession(): Promise<void> {
    return;
  }

  @Cordova()
  presentScannable(scannable: any): Promise<void> {
    return;
  }

  @Cordova()
  on(event: string, callback: (data: any) => void): void {
    return;
  }
}

type Nullable<T> = T | null;
