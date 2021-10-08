import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin, getPromise } from '@awesome-cordova-plugins/core';

export interface WonderPushDelegate {
  urlForDeepLink(url: string, callback: (url?: string) => void): void;
}

export interface WonderPushChannel {
  id: string;
  groupId?: string;
  name?: string;
  description?: string;
  bypassDnd?: boolean;
  showBadge?: boolean;
  importance?: number;
  lights?: boolean;
  lightColor?: number;
  vibrate?: boolean;
  sound?: boolean;
  soundUri?: string;
  lockscreenVisibility?: number;
  vibrateInSilentMode?: boolean;
  color?: number;
  localOnly?: boolean;
}

export interface WonderPushChannelGroup {
  id: string;
  name?: string;
}

class NestedObject {
  pluginObj: any;
  constructor(pluginObj: any) {
    this.pluginObj = pluginObj;
  }

  wrap<T>(functionName: string, args: any[]): Promise<T> {
    const plugin = WonderPush.getPlugin();
    const userPreferences = plugin ? plugin.UserPreferences : null;
    if (!plugin || !userPreferences || !userPreferences[functionName]) {
      return getPromise<T>((res, rej) => {
        rej(new Error('Could not find plugin'));
      });
    }
    return getPromise<T>((res, rej) => {
      userPreferences[functionName].apply(userPreferences, [...args, res]);
    });
  }
}

export class UserPreferencesMethods extends NestedObject {
  /**
   * Get the default channel id
   *
   * @returns {Promise<string>}
   */
  getDefaultChannelId(): Promise<string> {
    return this.wrap<string | null>('getDefaultChannelId', []);
  }

  /**
   * Set the default channel id
   *
   * @param {string} id
   * @returns {Promise<any>}
   */
  setDefaultChannelId(id: string): Promise<any> {
    return this.wrap('setDefaultChannelId', [id]);
  }

  /**
   * Get a channel group
   *
   * @param {string} groupId
   * @returns {Promise<WonderPushChannelGroup | null>}
   */
  getChannelGroup(groupId: string): Promise<WonderPushChannelGroup | null> {
    return this.wrap<WonderPushChannelGroup | null>('getChannelGroup', [groupId]);
  }

  /**
   * Get a channel
   *
   * @param {string} channelId
   * @returns {Promise<WonderPushChannel | null>}
   */
  getChannel(channelId: string): Promise<WonderPushChannel | null> {
    return this.wrap<WonderPushChannel | null>('getChannel', [channelId]);
  }

  /**
   * Create, update and remove channel existing groups to match the given channel groups
   *
   * @param {WonderPushChannelGroup[]} channelGroups
   * @returns {Promise<any>}
   */
  setChannelGroups(channelGroups: WonderPushChannelGroup[]): Promise<any> {
    return this.wrap('setChannelGroups', [channelGroups]);
  }

  /**
   * Create, update and remove channels to match the given channels
   *
   * @param {WonderPushChannel[]} channels
   * @returns {Promise<any>}
   */
  setChannels(channels: WonderPushChannel[]): Promise<any> {
    return this.wrap('setChannels', [channels]);
  }

  /**
   * Create or update a channel group
   *
   * @param {WonderPushChannelGroup} channelGroup
   * @returns {Promise<any>}
   */
  putChannelGroup(channelGroup: WonderPushChannelGroup): Promise<any> {
    return this.wrap('putChannelGroup', [channelGroup]);
  }

  /**
   * Create or update a channel
   *
   * @param {WonderPushChannel} channel
   * @returns {Promise<any>}
   */
  putChannel(channel: WonderPushChannel): Promise<any> {
    return this.wrap('putChannel', [channel]);
  }

  /**
   * Remove a channel group
   *
   * @param {string} groupId
   * @returns {Promise<any>}
   */
  removeChannelGroup(groupId: string): Promise<any> {
    return this.wrap('removeChannelGroup', [groupId]);
  }

  /**
   * Remove a channel
   *
   * @param {string} channelId
   * @returns {Promise<any>}
   */
  removeChannel(channelId: string): Promise<any> {
    return this.wrap('removeChannel', [channelId]);
  }
}

/**
 * @name Push Notifications - WonderPush
 * @description
 *
 * Send unlimited push notifications to iOS and Android devices.
 *
 * Get started in minutes: [Ionic Quickstart Guide](https://docs.wonderpush.com/docs/ionic-quickstart).
 *
 * Advanced segmentation, automation and personalization of push messages for €1 per 1000 subscribers.
 *
 * Requires the Cordova plugin `wonderpush-cordova-sdk`.
 *
 * [WonderPush push notifications](https://www.wonderpush.com) are the most effective way
 * to retain your users and grow your audience while remaining fully GDPR compliant.
 * @usage
 * ```typescript
 * import { WonderPush } from '@awesome-cordova-plugins/wonderpush';
 *
 *
 * constructor(private wonderPush: WonderPush) { }
 *
 * ...
 *
 * // Subscribe user
 * this.wonderPush.subscribeToNotifications()
 *   .then(() => console.log("User subscribed to notifications"))
 *   .catch((error: any) => console.error(error));
 *
 *
 * // Send an event (a purchase in this example)
 * this.wonderPush.sendEvent('purchase', {
 *   float_price: 12.99,
 *   string_sku: "X123456"
 * });
 *
 * // Tag users (as customers)
 * this.wonderPush.addTag('customer');
 *
 * // Personalize
 * // 1. Store user details.
 * // 2. Use those details to create segments.
 * // 3. Include those details in your notifications.
 * this.wonderPush.putProperties({
 *   string_name: 'John D.',
 *   int_age: 24
 * });
 *
 * // GDPR
 * // 1. set REQUIRES_USER_CONSENT=true to enable GDPR compliance.
 * // 2. WonderPush doesn't start until setUserConsent(true) is called.
 * const onClick = (userConsent: boolean) => this.wonderPush.setUserConsent(userConsent);
 *
 * // Listen to notification clicks
 * document.addEventListener('wonderpush.notificationOpen', function(event) {
 *   console.log('Notification opened', event.notification);
 *   if (event.notificationType === 'data') {
 *     console.log('Silent notification', event.notification);
 *   }
 * });
 * ```
 * @interfaces
 * WonderPushChannel
 * WonderPushChannelGroup
 */
@Plugin({
  pluginName: 'WonderPush',
  plugin: 'wonderpush-cordova-sdk',
  pluginRef: 'WonderPush',
  repo: 'https://github.com/wonderpush/wonderpush-cordova-sdk',
  install:
    'ionic cordova plugin add wonderpush-cordova-sdk --variable CLIENT_ID=YOUR_CLIENT_ID --variable CLIENT_SECRET=YOUR_CLIENT_SECRET ',
  installVariables: ['CLIENT_ID', 'CLIENT_SECRET'],
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class WonderPush extends AwesomeCordovaNativePlugin {
  /**
   * Sets the user id, used to identify a single identity across multiple devices,
   * and to correctly identify multiple users on a single device.
   *
   * If not called, the last used user id it assumed. Defaulting to `null` if none is known.
   *
   * Upon changing userId, the access token is wiped, so avoid unnecessary calls, like calling with `null`
   * just before calling with a user id.
   *
   * @param {?string} userId - The user id, unique to your application.
   *   Use `null` for anonymous users.
   *
   *   You are strongly encouraged to use your own unique internal identifier.
   * @returns {Promise<any>}
   */

  @Cordova()
  setUserId(userId: string | null): Promise<any> {
    return;
  }

  /**
   * Controls native SDK logging.
   *
   * @param {boolean} enabled - Whether to enable logs.
   * @returns {Promise<any>}
   */
  @Cordova()
  setLogging(enabled: boolean): Promise<any> {
    return;
  }

  /**
   * Sets up a delegate for tighter integration, or removes it.
   *
   * @param {?WonderPushDelegate} delegate - The delegate to set, or `null` to remove it.
   * @returns {Promise<any>}
   */
  @Cordova()
  setDelegate(delegate: WonderPushDelegate | null): Promise<any> {
    return;
  }

  /**
   * Gets the current delegate.
   *
   * @returns {Promise<WonderPushDelegate | null>} A promise with the delegate of null
   */
  @Cordova()
  getDelegate(): Promise<WonderPushDelegate | null> {
    return;
  }

  /**
   * Returns the userId currently in use, `null` by default.
   *
   * @returns {Promise<string | null>} A promise with the user ID or null
   */
  @Cordova()
  getUserId(): Promise<string | null> {
    return;
  }

  /**
   * Returns the installationId identifying your application on a device, bond to a specific userId.
   * If you want to store this information on your servers, keep the corresponding userId with it.
   * Will return `null` until the SDK is properly initialized.
   *
   * @returns {Promise<string | null>} A promise with the installation ID or null
   */
  @Cordova()
  getInstallationId(): Promise<string | null> {
    return;
  }

  /**
   * Returns the unique device identifier
   *
   * @returns {Promise<string | null>} A promise with the device ID or null
   */
  @Cordova()
  getDeviceId(): Promise<string | null> {
    return;
  }

  /**
   * Returns the push token.
   *
   * @returns {Promise<string | null>} A promise with the push token or `null`
   */
  @Cordova()
  getPushToken(): Promise<string | null> {
    return;
  }

  /**
   * Returns the currently used access token.
   * Returns `null` until the SDK is properly initialized.
   * This together with your client secret gives entire control to the current installation and associated user, you should not disclose it unnecessarily.
   *
   * @returns {Promise<string | null>}
   */
  @Cordova()
  getAccessToken(): Promise<string | null> {
    return;
  }

  /**
   * Send an event to be tracked to WonderPush.
   *
   * @param {string} type - The event type, or name. Event types starting with an `@` character are reserved.
   * @param {?object} [attributes] - An object containing custom properties to be attached to the event.
   *   The keys should be prefixed according to the type of their values.
   *   You can find the details in the [Concepts > Custom fields](https://www.wonderpush.com/docs/guide/custom-fields) section of the documentation.
   * @returns {Promise<any>}
   */
  @Cordova()
  trackEvent(type: string, attributes: { [key: string]: any }): Promise<any> {
    return;
  }

  /**
   * Adds one or more tags to the installation.
   *
   * @param {string|string[]} tag - The tags to add to the installation. You can use either a single string argument or an array of strings.
   * @returns {Promise<any>}
   */
  @Cordova()
  addTag(tag: string | string[]): Promise<any> {
    return;
  }

  /**
   * Removes one or more tags from the installation.
   *
   * @param {string|string[]} tag - The tags to remove from the installation. You can use either a single string argument or an array of strings.
   * @returns {Promise<any>}
   */
  @Cordova()
  removeTag(tag: string | string[]): Promise<any> {
    return;
  }

  /**
   * Removes all tags from the installation.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  removeAllTags(): Promise<any> {
    return;
  }

  /**
   * Returns all the tags of the installation.
   *
   * @returns {Promise<string[]>}
   */
  @Cordova()
  getTags(): Promise<string[]> {
    return;
  }

  /**
   * Tests whether the installation has the given tag attached to it.
   *
   * @param {string} tag - The tag to test.
   * @returns {Promise<boolean>}
   */
  @Cordova()
  hasTag(tag: string): Promise<boolean> {
    return;
  }

  /**
   * Sets the value to a given installation property.
   *
   * The previous value is replaced entirely.
   * Setting `undefined` or `null` has the same effect as {@link cordova.plugins.WonderPush#unsetProperty}.
   *
   * @param {string} field - The name of the property to set
   * @param value
   * @returns {Promise<any>}
   */
  @Cordova()
  setProperty(field: string, value: any): Promise<any> {
    return;
  }

  /**
   * Removes the value of a given installation property.
   *
   * The previous value is replaced with `null`.
   *
   * @param {string} field - The name of the property
   * @returns {Promise<any>}
   */
  @Cordova()
  unsetProperty(field: string): Promise<any> {
    return;
  }

  /**
   * Adds the value to a given installation property.
   *
   * The stored value is made an array if not already one.
   * If the given value is an array, all its values are added.
   * If a value is already present in the stored value, it won't be added.
   *
   * @param {string} field - The name of the property
   * @param value
   * @returns {Promise<void>}
   */
  @Cordova()
  addProperty(field: string, value: any): Promise<void> {
    return;
  }

  /**
   * Removes the value from a given installation property.
   *
   * The stored value is made an array if not already one.
   * If the given value is an array, all its values are removed.
   * If a value is present multiple times in the stored value, they will all be removed.
   *
   * @param {string} field - The name of the property
   * @param value
   * @returns {Promise<any>}
   */
  @Cordova()
  removeProperty(field: string, value: any): Promise<any> {
    return;
  }

  /**
   * Returns the value of a given installation property.
   *
   * If the property stores an array, only the first value is returned.
   * This way you don't have to deal with potential arrays if that property is not supposed to hold one.
   * Returns `null` if the property is absent or has an empty array value.
   *
   * @param {string} field - The name of the property to read values from
   * @returns {Promise<any>}
   */
  @Cordova()
  getPropertyValue(field: string): Promise<any> {
    return;
  }

  /**
   * Returns an array of the values of a given installation property.
   *
   * If the property does not store an array, an array is returned nevertheless.
   * This way you don't have to deal with potential scalar values if that property is supposed to hold an array.
   * Returns an empty array instead of `null` if the property is absent.
   * Returns an array wrapping any scalar value held by the property.
   *
   * @param {string} field - The name of the property to read values from
   * @returns {Promise<any[]>}
   */
  @Cordova()
  getPropertyValues(field: string): Promise<any[]> {
    return;
  }

  /**
   * Returns the latest known custom properties attached to the current installation object stored by WonderPush.
   *
   * @returns {Promise<{[p: string]: any}>}
   */
  @Cordova()
  getProperties(): Promise<{ [key: string]: any }> {
    return;
  }

  /**
   * Updates the properties attached to the current installation object stored by WonderPush.
   *
   * In order to remove a value, use `null`.
   *
   * @param {{[p: string]: any}} properties. The keys should be prefixed according to the type of their values. You can find the details in the [Segmentation > Properties](https://docs.wonderpush.com/docs/properties#section-custom-properties) section of the documentation.
   * @returns {Promise<any>}
   */
  @Cordova()
  putProperties(properties: { [key: string]: any }): Promise<any> {
    return;
  }

  /**
   * Subscribes to push notification and registers the device token with WondePush.
   *
   * On iOS, you **must** call the following method at least once to make the notification visible to the user.
   *
   * - You can call this method multiple times. The user is only prompted for permission by iOS once.
   * - There is no need to call this method if the permission has already been granted, but it does not harm either.
   * - If the permission has been denied in the OS, the user will stay soft opt-out.
   *
   * Because in iOS you only have *one* chance for prompting the user, you should find a good timing for that.
   * For a start, you can systematically call it when the application starts, so that the user will be prompted directly at the first launch.
   *
   * @returns {Promise<any>} Returns a promise that resolves upon successful subscription
   */
  @Cordova()
  subscribeToNotifications(): Promise<any> {
    return;
  }

  /**
   * Returns whether the notifications are enabled.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova()
  isSubscribedToNotifications(): Promise<boolean> {
    return;
  }

  /**
   * Unsubscribes from push notification.
   * This method marks the user as soft opt-out.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  unsubscribeFromNotifications(): Promise<any> {
    return;
  }

  /**
   * Reads user consent state.
   * Returns undefined if no explicit consent was set.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova()
  getUserConsent(): Promise<boolean> {
    return;
  }

  /**
   * Provides or withdraws user consent.
   * If the `requiresUserConsent` initialization option is true,
   * the whole SDK is paused and no data is sent to WonderPush, until consent is provided.
   *
   * @param {boolean} consent -
   * @returns {Promise<any>}
   */
  @Cordova()
  setUserConsent(consent: boolean): Promise<any> {
    return;
  }

  /**
   * Remove any local storage and ask the WonderPush servers to delete any data associated with the all local installations and related users.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  clearAllData(): Promise<any> {
    return;
  }

  /**
   * Ask the WonderPush servers to delete any event associated with the all local installations.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  clearEventsHistory(): Promise<any> {
    return;
  }

  /**
   * Ask the WonderPush servers to delete any custom data associated with the all local installations and related users.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  clearPreferences(): Promise<any> {
    return;
  }

  /**
   * Initiates the download of all user remote and local data.
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  downloadAllData(): Promise<any> {
    return;
  }

  UserPreferences = new UserPreferencesMethods(this);
}
