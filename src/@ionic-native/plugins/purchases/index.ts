import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

/**
 * @name Purchases
 * @description
 * Purchases is a cross platform solution for managing in-app subscriptions. A backend is also provided via [RevenueCat](https://www.revenuecat.com)
 *
 * ## Features
 * |     | RevenueCat                                                                                                                                                   |
 * | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
 * | ✅  | Server-side receipt validation                                                                                                                               |
 * | ➡️  | [Webhooks](https://docs.revenuecat.com/docs/webhooks) - enhanced server-to-server communication with events for purchases, renewals, cancellations, and more |
 * | 🎯  | Subscription status tracking - know whether a user is subscribed whether they're on iOS, Android or web                                                      |
 * | 📊  | Analytics - automatic calculation of metrics like conversion, mrr, and churn                                                                                 |
 * | 📝  | [Online documentation](https://docs.revenuecat.com/docs) up to date                                                                                          |
 * | 🔀  | [Integrations](https://www.revenuecat.com/integrations) - over a dozen integrations to easily send purchase data where you need it                           |
 * | 💯  | Well maintained - [frequent releases](https://github.com/RevenueCat/purchases-ios/releases)                                                                  |
 * | 📮  | Great support - [Help Center](https://docs.revenuecat.com/discuss)                                                                                           |
 * | 🤩  | Awesome [new features](https://trello.com/b/RZRnWRbI/revenuecat-product-roadmap)                                                                             |
 *
 * ## Getting Started
 *
 * For more detailed information, you can view our complete documentation at [docs.revenuecat.com](https://docs.revenuecat.com/docs).
 *
 * @usage
 * #### 1. Get a RevenueCat API key
 *
 * Log in to the [RevenueCat dashboard](https://app.revenuecat.com) and obtain a free API key for your application.
 *
 * #### 2. Initialize the SDK
 *
 * You should only configure _Purchases_ once (usually on app launch) as soon as your app has a unique user id for your user. This can be when a user logs in if you have accounts or on launch if you can generate a random user identifier.
 *
 * ```typescript
 *  import { Platform } from "@ionic/angular";
 *  import { Purchases } from "@ionic-native/purchases/ngx";
 *
 *  constructor(public platform: Platform, private purchases: Purchases) {
 *      platform.ready().then(() => {
 *          this.purchases.setDebugLogsEnabled(true); // Enable to get debug logs
 *          this.purchases.setup("my_api_key", "my_app_user_id");
 *      }
 *  }
 * ```
 * #### 3. Displaying Available Products
 *
 * _Purchases_ will automatically fetch the latest _active_ entitlements and get the product information from Apple or Google. This means when users launch your purchase screen, products will already be loaded.
 *
 * Below is an example of fetching entitlements and launching an upsell screen.
 *
 * ```typescript
 * this.purchases.getEntitlements()
 *      .subscribe(entitlements => ,
 *                 error => );
 * ```
 *
 * #### 4. Make a purchase
 *
 * When it comes time to make a purchase, _Purchases_ has a simple method, `makePurchase`. The code sample below shows the process of purchasing a product and confirming it unlocks the "my_entitlement_identifier" content.
 *
 * ```typescript
 * this.purchases.makePurchase("product_id")
 *      .subscribe(response => {
 *          if (response.purchaserInfo.activeEntitlements.includes("my_entitlement_identifier")) {
 *              // Unlock content
 *          }
 *      },
 *      ({ error, userCancelled }) => // Error making purchase. You can check error.userCancelled to check if user cancelled the purchase
 *      );
 *
 * ```
 *
 * `makePurchase` handles the underlying framework interaction and automatically validates purchases with Apple and Google through our secure servers. This helps reduce in-app purchase fraud and decreases the complexity of your app. Receipt tokens are stored remotely and always kept up-to-date.
 *
 * #### 5. Get Subscription Status
 *
 * _Purchases_ makes it easy to check what active subscriptions the current user has. This can
 * be done two ways within the `.purchaserInfo` method:
 *
 * 1. Checking active Entitlements - this lets you see what entitlements ([from RevenueCat dashboard](https://app.revenuecat.com))
 * are active for the user.
 * 2. Checking the active subscriptions - this lets you see what product ids (from iTunes Connect or Play Store) are active for the user.
 *
 * ```typescript
 *  this.purchases.getPurchaserInfo()
 *      .subscribe(info => {
 *          // Option 1: Check if user has access to entitlement (from RevenueCat dashboard)
 *          const isPro =
 *              info.activeEntitlements !== "undefined" &&
 *              info.activeEntitlements.includes("pro");
 *          // Option 2: Check if user has active subscription (from App Store Connect or Play Store)
 *          const isPro =
 *              info.activeSubscriptions !== "undefined" &&
 *              info.activeSubscriptions.includes("my_product_identifier");
 *      },
 *      error => );
 * ```
 *
 * > Since the SDK updates and caches the latest PurchaserInfo when the app becomes active, the completion block in `.purchaserInfo` won't need to make a network request in most cases.
 *
 * ### Restoring Purchases
 *
 * Restoring purchases is a mechanism by which your user can restore their in-app purchases, reactivating any content that had previously been purchased from the same store account (Apple or Google).
 *
 * If two different App User IDs try to restore transactions from the same underlying store account (Apple or Google) RevenueCat will create an alias between the two App User IDs and count them as the same user going forward.
 *
 * This is a common if your app does not have accounts and is relying on RevenueCat's random App User IDs.
 *
 * ```typescript
 * this.purchases.restore()
 *      .subscribe(info => {
 *           //... check purchaserInfo to see if entitlement is now active
 *      },
 *      error => );
 * ```
 * > If you've provided your own App User ID, calling restoreTransactions could alias the logged in user to another generated App User ID that has made a purchase on the same device.
 *
 * > By default, RevenueCat will not let you reuse an App or Play Store account that already has an active subscription. If you set allowSharingAppStoreAccount = True the SDK will be permissive in accepting shared accounts, creating aliases as needed.
 *
 * > By default allowSharingAppStoreAccount is True for RevenueCat random App User IDs but must be enabled manually if you want to allow permissive sharing for your own App User IDs.
 *
 * ## Debugging
 *
 * You can enabled detailed debug logs by setting `debugLogsEnabled = true`. You can set this **before** you configure Purchases.
 *
 * ```typescript
 * this.purchases.setDebugLogsEnabled(true);
 * this.purchases.setup("my_api_key", "my_app_user_id");
 * ```
 *
 * **OS_ACTIVITY_MODE**
 * > On iOS, disabling `OS_ACTIVITY_MODE` in your XCode scheme will block debug logs from printing in the console. If you have debug logs enabled, but don't see any output, go to `Product -> Scheme -> Edit Scheme...` in Xcode and uncheck the `OS_ACTIVITY_MODE` environment variable.
 *
 * Example output:
 * ```
 * [Purchases] - DEBUG: Debug logging enabled.
 * [Purchases] - DEBUG: SDK Version - 2.0.0
 * [Purchases] - DEBUG: Initial App User ID - (null)
 * [Purchases] - DEBUG: GET /v1/subscribers/<APP_USER_ID>
 * [Purchases] - DEBUG: GET /v1/subscribers/<APP_USER_ID>/products
 * [Purchases] - DEBUG: No cached entitlements, fetching
 * [Purchases] - DEBUG: Vending purchaserInfo from cache
 * [Purchases] - DEBUG: applicationDidBecomeActive
 * [Purchases] - DEBUG: GET /v1/subscribers/<APP_USER_ID>/products 200
 * ```
 * ## Entitlements
 *
 * An entitlement represents features or content that a user is "entitled" to. With Entitlements, you can set up your available in-app products remotely and control their availability without the need to update your app. For more information on configuring entitlements, look at our [entitlements documetation](https://docs.revenuecat.com/docs/entitlements).
 *
 * ## Sample App
 *
 * We've added an [example](https://github.com/RevenueCat/purchases-ionic-example) showing a simple example using _Purchases_ with the RevenueCat backend. Note that the pre-registered in app purchases in the demo apps are for illustration purposes only and may not be valid in App Store Connect. [Set up your own purchases](https://docs.revenuecat.com/docs/entitlements) with RevenueCat when running the example.
 *
 * #### Additional iOS Setup
 *
 * ##### Add Strip Frameworks Phase
 * The App Store, in it's infinite wisdom, still rejects fat frameworks, so we need to strip our framework before it is deployed. To do this, add the following script phase to your build.
 * 1. In Xcode, in project manager, select your app target.
 * 2. Open the `Build Phases` tab
 * 3. Add a new `Run Script`, name it `Strip Frameworks`
 * 4. Add the following command `"${PROJECT_DIR}/../../node_modules/cordova-plugin-purchases/src/ios/strip-frameworks.sh"` (quotes included)
 *
 * ![](https://media.giphy.com/media/39zTmnsW1CIrJNk5AM/giphy.gif)
 *
 * ## Next Steps
 * - Head over to our **[online documentation](https://docs.revenuecat.com/docs)** for complete setup guides
 * - If you haven't already, make sure your products are configured correctly in the RevenueCat dashboard by checking out our [guide on entitlements](https://docs.revenuecat.com/docs/entitlements)
 * - If you want to use your own user identifiers, read about [setting app user ids](https://docs.revenuecat.com/docs/user-ids)
 * - If you're moving to RevenueCat from another system, see our guide on [migrating your existing subscriptions](https://docs.revenuecat.com/docs/migrating-existing-subscriptions)
 * - Once you're ready to test your integration, you can follow our guides on [testing purchases](https://docs.revenuecat.com/docs/testing-purchases)
 *
 * ## Reporting Issues
 *
 * You can use Github Issues to report any bugs and issues with _Purchases_. Here is some advice for users that want to report an issue:
 *
 * 1. Make sure that you are using the latest version of _Purchases_. The issue that you are about to report may be already fixed in the latest master branch version: https://github.com/revenuecat/cordova-plugin-purchases/tree/master.
 * 2. Providing reproducible steps for the issue will shorten the time it takes for it to be fixed - a Gist is always welcomed!
 * 3. Since some issues are Sandbox specific, specifying what environment you encountered the issue might help.
 *
 * ## Technical Support or Questions
 *
 * If you have questions or need help integrating _Purchases_ please [contact us](https://www.revenuecat.com/contact) or email _support@revenuecat.com_ instead of opening an issue.
 *
 * ## Feature Requests
 *
 * If there is something you'd like to see included or feel anything is missing you can add a feature to our [public roadmap](https://trello.com/b/RZRnWRbI/revenuecat-product-roadmap). If the feature already exists, or you see something else you'd like, upvote it.
 *
 * ## Pricing
 *
 * _Purchases_ SDK is free to use but some features require a paid plan. You can find more about that on our website on the [pricing plan page](https://www.revenuecat.com/pricing).
 *
 * @interfaces
 * RCPurchaserInfo
 * RCProduct
 * RCMakePurchaseResponse
 * RCError
 */
@Plugin({
  pluginName: 'Purchases',
  plugin: 'cordova-plugin-purchases',
  pluginRef: 'Purchases', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/RevenueCat/cordova-plugin-purchases', // the github repository URL for the plugin
  platforms: ['Android', 'iOS'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable({
  providedIn: 'root'
})
export class Purchases extends IonicNativePlugin {
  /**
   * Sets up Purchases with your API key and an app user id.
   * @param apiKey {string} RevenueCat API Key. Needs to be a String
   * @param appUserID {string?} A unique id for identifying the user
   */
  @Cordova({ sync: true })
  setup(apiKey: string, appUserID: string): void {}

  /**
   * Set this to true if you are passing in an appUserID but it is anonymous, this is true by default if you didn't pass an appUserID
   * If a user tries to purchase a product that is active on the current app store account, we will treat it as a restore and alias
   * the new ID with the previous id.
   * @param allowSharing {boolean} true if enabled, false to diabled
   */
  @Cordova({ sync: true })
  setAllowSharingStoreAccount(allowSharing: boolean): void {}

  /**
   * Add a dict of attribution information
   * @param data { Object.<string, any> } Attribution data from any of the attribution networks in ATTRIBUTION_NETWORKS
   * @param network {ATTRIBUTION_NETWORKS} Which network, see ATTRIBUTION_NETWORKS
   */
  @Cordova({ sync: true })
  addAttributionData(
    data: { [key: string]: any },
    network: ATTRIBUTION_NETWORKS
  ): void {}

  /**
   * Gets the map of entitlements -> offerings -> products
   *
   * @return {Observable<Map<String, Map<String, Product>>>} Errors are of type [RCError]
   */
  @Cordova({ observable: true })
  getEntitlements(): Observable<Map<String, Map<String, RCProduct>>> {
    return;
  }

  /**
   * Fetch the product info
   * @param productIdentifiers {string[]} Array of product identifiers
   * @param type {ProductType} Optional type of products to fetch, can be inapp or subs. Subs by default
   *
   * @return {Observable<Array>} Will return an [RCError] if the products are not properly configured in RevenueCat or if there is another error retrieving them.
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2,
    observable: true
  })
  getProducts(
    productIdentifiers: string[],
    type: ProductType = ProductType.SUBS
  ): Observable<[RCProduct]> {
    return;
  }

  /**
   * Make a purchase
   * @param productIdentifier {string} The product identifier of the product you want to purchase.
   * @param oldSku {string} Optional sku you wish to upgrade from.
   * @param type {String} Optional type of product, can be inapp or subs. Subs by default
   *
   * @return {Observable<MakePurchaseResponse>} An [RCError] is thrown when user cancels. On error `usercancelled` will be true if user cancelled
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2,
    observable: true
  })
  makePurchase(
    productIdentifier: string,
    oldSku?: string = null,
    type: ProductType = ProductType.SUBS
  ): Observable<RCMakePurchaseResponse> {
    return;
  }

  /**
   * Restores a user's previous purchases and links their appUserIDs to any user's also using those purchases.
   *
   * @return {Observable<PurchaserInfo>} Errors are of type [RCError]
   */
  @Cordova({ observable: true })
  restoreTransactions(): Observable<RCPurchaserInfo> {
    return;
  }

  /**
   * Get the appUserID that is currently in placed in the SDK
   *
   * @return {Promise<string>}
   */
  @Cordova()
  getAppUserID(): Promise<string> {
    return;
  }

  /**
   * This function will alias two appUserIDs together.
   * @param newAppUserID {String} The new appUserID that should be linked to the currently identified appUserID. Needs to be a string.
   *
   * @return {Observable<PurchaserInfo>} Errors are of type [RCError]
   */
  @Cordova({ observable: true })
  createAlias(newAppUserID: string): Observable<RCPurchaserInfo> {
    return;
  }

  /**
   * This function will identify the current user with an appUserID. Typically this would be used after a logout to identify a new user without calling configure
   * @param newAppUserID {String} The new appUserID that should be linked to the currently identified appUserID. Needs to be a string.
   *
   * @return {Observable<PurchaserInfo>} Errors are of type [RCError]
   */
  @Cordova({ observable: true })
  identify(newAppUserID: string): Observable<RCPurchaserInfo> {
    return;
  }

  /**
   * Resets the Purchases client clearing the saved appUserID. This will generate a random user id and save it in the cache.
   *
   * @return {Observable<PurchaserInfo>} Errors are of type [RCError]
   */
  @Cordova({ observable: true })
  reset(): Observable<RCPurchaserInfo> {
    return;
  }

  /**
   * Gets the current purchaser info. This call will return the cached purchaser info unless the cache is stale, in which case,
   * it will make a network call to retrieve it from the servers.
   *
   * @return {Observable<PurchaserInfo>} Errors are of type [RCError]
   */
  @Cordova({ observable: true })
  getPurchaserInfo(): Observable<RCPurchaserInfo> {
    return;
  }

  /**
   * Returns an observable that can be used to receive updates on the purchaser info
   *
   * @return {Observable<PurchaserInfo>}
   */
  @Cordova({
    eventObservable: true,
    event: 'onPurchaserInfoUpdated',
    element: 'window'
  })
  onPurchaserInfoUpdated(): Observable<RCPurchaserInfo> {
    return;
  }

  /**
   * Enables/Disables debugs logs
   * @param enabled {boolean} true to enable debug logs, false to disable
   */
  @Cordova({ sync: true })
  setDebugLogsEnabled(enabled: boolean): void {}
}

export enum ProductType {
  SUBS = 'subs',
  INAPP = 'inapp'
}

export enum ATTRIBUTION_NETWORKS {
  APPLE_SEARCH_ADS = 0,
  ADJUST = 1,
  APPSFLYER = 2,
  BRANCH = 3,
  TENJIN = 4
}

export interface RCProduct {
  identifier: string;
  description: string;
  title: string;
  price: number;
  price_string: string;
  intro_price?: string;
  intro_price_string?: string;
  intro_price_period?: string;
  intro_price_cycles?: number;
  currency_code: string;
}

export interface RCPurchaserInfo {
  activeEntitlements: string[];
  activeSubscriptions: string[];
  allPurchasedProductIdentifiers: string[];
  latestExpirationDate?: string;
  allExpirationDates: { [key: string]: string | null };
  expirationsForActiveEntitlements: { [key: string]: string | null };
}

export interface RCMakePurchaseResponse {
  productIdentifier: string;
  purchaserInfo: RCPurchaserInfo;
}

export interface RCError {
  code: number;
  message: string;
  underlyingErrorMessage?: string;
}
