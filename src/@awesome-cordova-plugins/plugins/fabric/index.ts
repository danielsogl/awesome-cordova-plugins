import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

export interface Attributes {
  [index: string]: string;
}

/**
 * @name Crashlytics
 * @description
 * API for interacting with the Crashlytics kit.
 *
 * https://docs.fabric.io/crashlytics/index.html
 * @usage
 * ```typescript
 * import { Crashlytics } from '@awesome-cordova-plugins/fabric/ngx';
 *
 *
 * constructor(private crashlytics: Crashlytics) { }
 *
 * ...
 *
 * try {
 *  await this.loadData();
 * } catch (e) {
 *  this.crashlytics.addLog("Error while loading data");
 *  this.crashlytics.sendNonFatalCrash(e.message || e);
 * }
 *
 * ```
 */
@Plugin({
  pluginName: 'Crashlytics',
  plugin: 'cordova-fabric-plugin',
  pluginRef: 'window.fabric.Crashlytics',
  repo: 'https://www.npmjs.com/package/cordova-fabric-plugin',
  install:
    'ionic cordova plugin add cordova-fabric-plugin --variable FABRIC_API_KEY=XXX --variable FABRIC_API_SECRET=xxx',
  installVariables: ['FABRIC_API_KEY', 'FABRIC_API_SECRET'],
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Crashlytics extends AwesomeCordovaNativePlugin {
  /**
   * Add logging that will be sent with your crash data. This logging will not show up
   * in the system.log and will only be visible in your Crashlytics dashboard.
   *
   * @param message {string}
   */
  @Cordova({ sync: true })
  addLog(message: string): void {
    return;
  }

  /**
   * Used to simulate a native platform crash (useful for testing Crashlytics logging).
   */
  @Cordova({ sync: true })
  sendCrash(): void {
    return;
  }

  /**
   * Used to log a non-fatal error message (Android only).
   *
   * @param message
   * @param stacktrace
   */
  @Cordova({ sync: true })
  sendNonFatalCrash(message: string, stacktrace?: any): void {
    return;
  }

  /**
   * Used to record a non-fatal error message (iOS only).
   *
   * @param message
   * @param code
   */
  @Cordova({ sync: true })
  recordError(message: string, code: number): void {
    return;
  }

  /**
   * Sets the user's identifier for logging to Crashlytics backend.
   *
   * @param userId
   */
  @Cordova({ sync: true })
  setUserIdentifier(userId: string): void {
    return;
  }

  /**
   * Sets the user's name for logging to Crashlytics backend.
   *
   * @param userName
   */
  @Cordova({ sync: true })
  setUserName(userName: string): void {
    return;
  }

  /**
   * Sets the user's email address for logging to Crashlytics backend.
   *
   * @param email
   */
  @Cordova({ sync: true })
  setUserEmail(email: string): void {
    return;
  }

  /**
   * Sets a custom key/value pair for logging to Crashlytics backend.
   *
   * @param value
   * @param key
   */
  @Cordova({ sync: true })
  setStringValueForKey(value: string, key: string): void {
    return;
  }

  /**
   * Sets a custom key/value pair for logging to Crashlytics backend.
   *
   * @param value
   * @param key
   */
  @Cordova({ sync: true })
  setIntValueForKey(value: number, key: string): void {
    return;
  }

  /**
   * Sets a custom key/value pair for logging to Crashlytics backend.
   *
   * @param value
   * @param key
   */
  @Cordova({ sync: true })
  setBoolValueForKey(value: boolean, key: string): void {
    return;
  }

  /**
   * Sets a custom key/value pair for logging to Crashlytics backend.
   *
   * @param value
   * @param key
   */
  @Cordova({ sync: true })
  setFloatValueForKey(value: number, key: string): void {
    return;
  }
}

/**
 * @name Answers
 * @description
 * API for interacting with the Answers kit.
 *
 * https://docs.fabric.io/crashlytics/index.html
 * @usage
 * ```typescript
 * import { Answers } from '@awesome-cordova-plugins/fabric/ngx';
 *
 *
 * constructor(private answers: Answers) { }
 *
 * ...
 *
 * this.answers.sendCustomEvent('SomeCustomEvent', { some: "attributes" })
 *
 * ```
 */
@Plugin({
  pluginName: 'Answers',
  plugin: 'cordova-fabric-plugin',
  pluginRef: 'window.fabric.Answers',
  repo: 'https://www.npmjs.com/package/cordova-fabric-plugin',
  install:
    'ionic cordova plugin add cordova-fabric-plugin --variable FABRIC_API_KEY=XXX --variable FABRIC_API_SECRET=xxx',
  installVariables: ['FABRIC_API_KEY', 'FABRIC_API_SECRET'],
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Answers extends AwesomeCordovaNativePlugin {
  /**
   * Sends the Purchase tracking event.
   *
   * All parameters are optional.
   *
   * https://docs.fabric.io/android/answers/answers-events.html#purchase
   *
   * @param itemPrice The item's amount in the currency specified.
   * @param currency The ISO4217 currency code.
   * @param success Was the purchase completed succesfully?
   * @param itemName The human-readable name for the item.
   * @param itemType The category the item falls under.
   * @param itemId A unique identifier used to track the item.
   * @param attributes Any additional user-defined attributes to be logged.
   */
  @Cordova({ sync: true })
  sendPurchase(
    itemPrice?: number,
    currency?: string,
    success?: boolean,
    itemName?: string,
    itemType?: string,
    itemId?: string,
    attributes?: Attributes
  ): void {
    return;
  }

  /**
   * Sends the Add To Cart tracking event.
   *
   * All parameters are optional.
   *
   * https://docs.fabric.io/android/answers/answers-events.html#add-to-cart
   *
   * @param itemPrice The item's amount in the currency specified.
   * @param currency The ISO4217 currency code.
   * @param itemName The human-readable name for the item.
   * @param itemType The category the item falls under.
   * @param itemId A unique identifier used to track the item.
   * @param attributes Any additional user-defined attributes to be logged.
   */
  @Cordova({ sync: true })
  sendAddToCart(
    itemPrice?: number,
    currency?: string,
    itemName?: string,
    itemType?: string,
    itemId?: string,
    attributes?: Attributes
  ): void {
    return;
  }

  /**
   * Sends the Start Checkout tracking event.
   *
   * All parameters are optional.
   *
   * https://docs.fabric.io/android/answers/answers-events.html#start-checkout
   *
   * @param totalPrice The total price of all items in cart in the currency specified.
   * @param currency The ISO4217 currency code.
   * @param itemCount The count of items in cart.
   * @param attributes Any additional user-defined attributes to be logged.
   */
  @Cordova({ sync: true })
  sendStartCheckout(totalPrice?: number, currency?: string, itemCount?: number, attributes?: Attributes): void {
    return;
  }

  /**
   * Sends the Search tracking event.
   *
   * https://docs.fabric.io/android/answers/answers-events.html#search
   *
   * @param query What the user is searching for.
   * @param attributes Any additional user-defined attributes to be logged.
   */
  @Cordova({ sync: true })
  sendSearch(query: string, attributes?: Attributes): void {
    return;
  }

  /**
   * Sends the Share tracking event.
   *
   * All parameters are optional.
   *
   * https://docs.fabric.io/android/answers/answers-events.html#share
   *
   * @param method The method used to share content.
   * @param contentName The description of the content.
   * @param contentType The type or genre of content.
   * @param contentId A unique key identifying the content.
   * @param attributes Any additional user-defined attributes to be logged.
   */
  @Cordova({ sync: true })
  sendShare(
    method?: string,
    contentName?: string,
    contentType?: string,
    contentId?: string,
    attributes?: Attributes
  ): void {
    return;
  }

  /**
   * Sends the Rated Content tracking event.
   *
   * All parameters are optional.
   *
   * https://docs.fabric.io/android/answers/answers-events.html#rated-content
   *
   * @param rating An integer rating of the content.
   * @param contentName The human-readable name of content.
   * @param contentType The category your item falls under.
   * @param contentId A unique identifier used to track the item.
   * @param attributes Any additional user-defined attributes to be logged.
   */
  @Cordova({ sync: true })
  sendRatedContent(
    rating?: number,
    contentName?: string,
    contentType?: string,
    contentId?: string,
    attributes?: Attributes
  ): void {
    return;
  }

  /**
   * Sends the Sign Up tracking event.
   *
   * All parameters are optional.
   *
   * https://docs.fabric.io/android/answers/answers-events.html#sign-up
   *
   * @param method An optional description of the sign up method (Twitter, Facebook, etc.); defaults to "Direct".
   * @param success An optional flag that indicates sign up success; defaults to true.
   * @param attributes Any additional user-defined attributes to be logged.
   */
  @Cordova({ sync: true })
  sendSignUp(method?: string, success?: boolean, attributes?: Attributes): void {
    return;
  }

  /**
   * Sends the Log In tracking event.
   *
   * All parameters are optional.
   *
   * https://docs.fabric.io/android/answers/answers-events.html#log-in
   *
   * @param method An optional description of the sign in method (Twitter, Facebook, etc.); defaults to "Direct".
   * @param success An optional flag that indicates sign in success; defaults to true.
   * @param attributes Any additional user-defined attributes to be logged.
   */
  @Cordova({ sync: true })
  sendLogIn(method?: string, success?: boolean, attributes?: Attributes): void {
    return;
  }

  /**
   * Sends the Invite tracking event.
   *
   * All parameters are optional.
   *
   * https://docs.fabric.io/android/answers/answers-events.html#invite
   *
   * @param method An optional description of the sign in method (Twitter, Facebook, etc.); defaults to "Direct".
   * @param attributes Any additional user-defined attributes to be logged.
   */
  @Cordova({ sync: true })
  sendInvite(method?: string, attributes?: Attributes): void {
    return;
  }

  /**
   * Sends the Level Start tracking event.
   *
   * All parameters are optional.
   *
   * https://docs.fabric.io/android/answers/answers-events.html#level-start
   *
   * @param levelName String key describing the level.
   * @param attributes Any additional user-defined attributes to be logged.
   */
  @Cordova({ sync: true })
  sendLevelStart(levelName?: string, attributes?: Attributes): void {
    return;
  }

  /**
   * Sends the Level End tracking event.
   *
   * All parameters are optional.
   *
   * https://docs.fabric.io/android/answers/answers-events.html#level-end
   *
   * @param levelName String key describing the level.
   * @param score The score for this level.
   * @param success Completed the level or failed trying.
   * @param attributes Any additional user-defined attributes to be logged.
   */
  @Cordova({ sync: true })
  sendLevelEnd(levelName?: string, score?: number, success?: boolean, attributes?: Attributes): void {
    return;
  }

  /**
   * Send the Content View tracking event.
   *
   * https://docs.fabric.io/android/answers/answers-events.html#content-view
   *
   * @param name
   * @param type
   * @param id
   * @param attributes
   */
  @Cordova({ sync: true })
  sendContentView(name: string, type?: string, id?: string, attributes?: Attributes): void {
    return;
  }

  /**
   * Shortcut for sendContentView(...) using type of "Screen".
   *
   * @param name
   * @param id
   * @param attributes
   */
  @Cordova({ sync: true })
  sendScreenView(name: string, id: string, attributes?: Attributes): void {
    return;
  }

  /**
   * Send a custom tracking event with the given name.
   *
   * https://docs.fabric.io/android/answers/answers-events.html#custom-event
   *
   * @param name
   * @param attributes
   */
  @Cordova({ sync: true })
  sendCustomEvent(name: string, attributes?: Attributes): void {
    return;
  }
}
