import { Cordova, CordovaProperty, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';

export interface IAPProductOptions {
  id: string;
  alias?: string;
  type: string;
}

export interface IRefeshResult {
  cancelled(fn: () => void): void;
  failed(fn: () => void): void;
  completed(fn: () => void): void;
  finished(fn: () => void): void;
}

export type IAPProducts = IAPProduct[] & {
  /**
   * Get product by ID
   */
  byId: { [id: string]: IAPProduct };
  /**
   * Get product by alias
   */
  byAlias: { [alias: string]: IAPProduct };
  /**
   * Remove all products (for testing only).
   */
  reset: () => {};
};

export type IAPQueryCallback = ((product: IAPProduct) => void) | ((error: IAPError) => void);

export interface IAPProduct {
  id: string;

  alias?: string;

  type: string;

  state: string;

  title: string;

  description: string;

  priceMicros: number;

  price: string;

  currency: string;

  loaded: boolean;

  valid: boolean;

  canPurchase: boolean;

  owned: boolean;

  downloading?: boolean;

  downloaded?: boolean;

  lastRenewalDate?: Date;

  expiryDate?: Date;

  introPrice?: string;

  introPriceMicros?: number;

  introPriceNumberOfPeriods?: number;

  introPriceSubscriptionPeriod?: string;

  introPricePaymentMode?: string;

  ineligibleForIntroPrice?: boolean;

  billingPeriod?: number;

  billingPeriodUnit?: string;

  trialPeriod?: number;

  trialPeriodUnit?: string;

  additionalData?: any;

  transaction?: PlayStoreReceipt | AppStoreReceipt;

  /**
   * Call `product.finish()` to confirm to the store that an approved order has been delivered.
   *
   * This will change the product state from `APPROVED` to `FINISHED` (see product life-cycle).
   *
   * As long as you keep the product in state `APPROVED`:
   *
   *  - the money may not be in your account (i.e. user isn't charged)
   *  - you will receive the `approved` event each time the application starts,
   *    where you should try again to finish the pending transaction.
   *
   * example use**
   *
   * ```js
   * store.when("product.id").approved(function(product){
   *     // synchronous
   *     app.unlockFeature();
   *     product.finish();
   * });
   * ```
   *
   * ```js
   * store.when("product.id").approved(function(product){
   *     // asynchronous
   *     app.downloadFeature(function() {
   *         product.finish();
   *     });
   * });
   * ```
   */
  finish(): void;

  /**
   * Initiate purchase validation as defined by the `store.validator` attribute.
   *
   * return value**
   *
   * A Promise with the following methods:
   *
   *  - `done(function(product){})`
   *    - called whether verification failed or succeeded.
   *  - `expired(function(product){})`
   *    - called if the purchase expired.
   *  - `success(function(product, purchaseData){})`
   *    - called if the purchase is valid and verified.
   *    - `purchaseData` is the device dependent transaction details
   *      returned by the validator, which you can most probably ignore.
   *  - `error(function(err){})`
   *    - validation failed, either because of expiry or communication
   *      failure.
   *    - `err` is a store.Error object, with a code expected to be
   *      `store.ERR_PAYMENT_EXPIRED` or `store.ERR_VERIFICATION_FAILED`.
   */
  verify(): any;

  set(key: string, value: any): void;

  stateChanged(): void;

  on(event: string, callback: Function): void;

  once(event: string, callback: Function): void;

  off(callback: Function): void;

  trigger(action: string, args: any): void;
}

export interface IAPProductEvents {
  /** Called when product data is loaded from the store. */
  loaded: (callback: IAPQueryCallback) => IAPProductEvents;
  /** Called when any change occured to a product. */
  updated: (callback: IAPQueryCallback) => IAPProductEvents;
  /** Called when an order failed. The `err` parameter is an IAPError object. */
  error: (callback: IAPQueryCallback) => IAPProductEvents;
  /** Called when a product order is approved. */
  approved: (callback: IAPQueryCallback) => IAPProductEvents;
  /** Called when a non-consumable product or subscription is owned. */
  owned: (callback: IAPQueryCallback) => IAPProductEvents;
  /** Called when a product order is cancelled by the user. */
  cancelled: (callback: IAPQueryCallback) => IAPProductEvents;
  /** Called when an order is refunded by the user. */
  refunded: (callback: IAPQueryCallback) => IAPProductEvents;
  /** Called when product has just been registered. */
  registered: (callback: IAPQueryCallback) => IAPProductEvents;
  /** Called when the product details have been successfully loaded. */
  valid: (callback: IAPQueryCallback) => IAPProductEvents;
  /** Called when the product cannot be loaded from the store. */
  invalid: (callback: IAPQueryCallback) => IAPProductEvents;
  /** Called when an order has just been requested. */
  requested: (callback: IAPQueryCallback) => IAPProductEvents;
  /** Called when the purchase process has been initiated. */
  initiated: (callback: IAPQueryCallback) => IAPProductEvents;
  /** Called when the purchase process has completed. */
  finished: (callback: IAPQueryCallback) => IAPProductEvents;
  /** Called when receipt validation successful. */
  verified: (callback: IAPQueryCallback) => IAPProductEvents;
  /** Called when receipt verification failed. */
  unverified: (callback: IAPQueryCallback) => IAPProductEvents;
  /** Called when validation find a subscription to be expired. */
  expired: (callback: IAPQueryCallback) => IAPProductEvents;
  /** Called when content download is started. */
  downloading: (product: IAPProduct, progress: any, time_remaining: any) => IAPProductEvents;
  /** Called when content download has successfully completed. */
  downloaded: (callback: IAPQueryCallback) => IAPProductEvents;
}

export type PlayStoreReceipt = {
  id: string;
  purchaseState: number;
  purchaseToken: string;
  receipt: string;
  signature: string;
  type: 'android-playstore';
};

export type AppStoreReceipt = {
  id: string;
  appStoreReceipt: string;
  original_transaction_id: string;
  type: 'ios-appstore';
};

/**
 * @hidden
 */
export class IAPError {
  code: number;
  message: string;
}

/**
 * @name In App Purchase 2
 * @description
 * In-App Purchase on iOS, Android, Windows, macOS and XBox.
 *
 * ## Features
 *
 * |  | ios | android | win-8 | win-10/uwp | mac |
 * |--|--|--|--|--|--|
 * | consumables | ✅ | ✅ | ✅ | ✅ | ✅ |
 * | non consumables | ✅ | ✅ | ✅ | ✅ | ✅ |
 * | subscriptions | ✅ | ✅ | ✅ | ✅ | ✅ |
 * | restore purchases | ✅ | ✅ | ✅ | ✅ | ✅ |
 * | receipt validations | ✅ | ✅ |  | ✅ | ✅ |
 * | downloadable content | ✅ |   |   |   | ✅ |
 * | introductory prices | ✅ | ✅ |   | ✅ | ✅ |
 *
 * Supports:
 *
 *  - **iOS** version 7.0 or higher.
 *  - **Android** version 2.2 (API level 8) or higher
 *    - with Google Play client version 3.9.16 or higher
 *  - **Windows** Store/Phone 8.1 or higher
 *  - **Windows 10 Mobile**
 *  - **macOS** version 10
 *  - **Xbox One**
 *    - (and any platform supporting Microsoft's UWP)
 * @usage
 * ```typescript
 * import { InAppPurchase2 } from '@awesome-cordova-plugins/in-app-purchase-2/ngx';
 *
 * constructor(public platform: Platform, private store: InAppPurchase2) {
 *   platform.ready().then(() => {
 *    this.store.register({
 *      id: "my_product_id",
 *      type: this.store.NON_RENEWING_SUBSCRIPTION,
 *    });
 *    this.store.when("my_product_id")
 *      .approved(p => p.verify())
 *      .verified(p => p.finish());
 *    this.store.refresh();
 *   });
 * }
 *
 * ...
 *
 * this.store.order("my_product_id");
 *
 * ```
 *
 * ## Full example
 *
 * ```typescript
 *  // After platform ready
 *  this.store.verbosity = this.store.DEBUG;
 *  this.store.register({
 *    id: "my_product_id",
 *    type: this.store.PAID_SUBSCRIPTION,
 *  });
 *
 *  // Register event handlers for the specific product
 *  this.store.when("my_product_id").registered( (product: IAPProduct) => {
 *    console.log('Registered: ' + JSON.stringify(product));
 *  });
 *
 *  // Updated
 *  this.store.when("my_product_id").updated( (product: IAPProduct) => {
 *    console.log('Updated' + JSON.stringify(product));
 *  });
 *
 *  // User closed the native purchase dialog
 *  this.store.when("my_product_id").cancelled( (product) => {
 *      console.error('Purchase was Cancelled');
 *  });
 *
 *  // Track all store errors
 *  this.store.error( (err) => {
 *    console.error('Store Error ' + JSON.stringify(err));
 *  });
 *
 *  // Run some code only when the store is ready to be used
 *  this.store.ready(() =>  {
 *    console.log('Store is ready');
 *    console.log('Products: ' + JSON.stringify(this.store.products));
 *    console.log(JSON.stringify(this.store.get("my_product_id")));
 *  });
 *
 *  // Refresh the status of in-app products
 *  this.store.refresh();
 *
 *  ...
 *
 *  // To make a purchase
 *  this.store.order("my_product_id");
 *
 * ```
 *
 * ## Philosophy
 *
 * The API is mostly events based. As a user of this plugin,
 * you will have to register listeners to changes happening to the products
 * you register.
 *
 * The core of the listening mechanism is the `when()` method. It allows you to
 * be notified of changes to one or a set of products using a query mechanism:
 * ```typescript
 *  this.store.when("product").updated(refreshScreen); // match any product
 *  this.store.when("full_version").owned(unlockApp); // match a specific product
 *  this.store.when("subscription").approved(serverCheck); // match all subscriptions
 *  this.store.when("downloadable content").downloaded(showContent);
 * ```
 *
 * The `updated` event is fired whenever one of the fields of a product is
 * changed (its `owned` status for instance).
 *
 * This event provides a generic way to track the statuses of your purchases,
 * to unlock features when needed and to refresh your views accordingly.
 *
 * ## Registering products
 *
 * The store needs to know the type and identifiers of your products before you
 * can use them in your code.
 *
 * Use `store.register()` to define them before your first call to `store.refresh()`.
 *
 * Once registered, you can use `store.get()` to retrieve an `IAPProduct` object.
 *
 * ```typescript
 *  this.store.register({
 *    id: "my_consumable1",
 *    type: this.store.CONSUMABLE
 *  });
 *  ...
 *  const p = this.store.get("my_consumable1");
 * ```
 *
 * The product `id` and `type` have to match products defined in your
 * Apple, Google or Microsoft developer consoles.
 *
 * Learn more about it [from the wiki](https://github.com/j3k0/cordova-plugin-purchase/wiki).
 *
 * ## Displaying products
 *
 * Right after you registered your products, nothing much is known about them
 * except their `id`, `type` and an optional `alias`.
 *
 * When you perform the initial call to `store.refresh()`, the platforms' server will
 * be contacted to load informations about the registered products: human
 * readable `title` and `description`, `price`, etc.
 *
 * This isn't an optional step, store owners require you
 * to display information about a product exactly as retrieved from their server: no
 * hard-coding of price and title allowed! This is also convenient for you
 * as you can change the price of your items knowing that it'll be reflected instantly
 * on your clients' devices.
 *
 * Note that the information may not be available when the first view that needs
 * them appears on screen. For you, the best option is to have your view monitor
 * changes made to the product.
 *
 * ## Purchasing
 *
 * #### initiate a purchase
 *
 * Purchases are initiated using the `store.order("some_product_id")` method.
 *
 * The store will manage the internal purchase flow. It'll end:
 *
 *  - with an `approved` event. The product enters the `APPROVED` state.
 *  - with a `cancelled` event. The product gets back to the `VALID` state.
 *  - with an `error` event. The product gets back to the `VALID` state.
 *
 * See the product life-cycle section for details about product states.
 *
 * #### finish a purchase
 *
 * Once the transaction is approved, the product still isn't owned: the store needs
 * confirmation that the purchase was delivered before closing the transaction.
 *
 * To confirm delivery, you'll use the `product.finish()` method.
 *
 * #### example usage
 *
 * During initialization:
 * ```typescript
 * this.store.when("extra_chapter").approved((product: IAPProduct) => {
 *   // download the feature
 *   app.downloadExtraChapter()
 *   .then(() => product.finish());
 * });
 * ```
 *
 * When the purchase button is clicked:
 * ```typescript
 * this.store.order("extra_chapter");
 * ```
 *
 * #### un-finished purchases
 *
 * If your app wasn't able to deliver the content, `product.finish()` won't be called.
 *
 * Don't worry: the `approved` event will be re-triggered the next time you
 * call `store.refresh()`, which can very well be the next time
 * the application starts. Pending transactions are persistant.
 *
 * #### simple case
 *
 * In the most simple case, where:
 *
 *  - delivery of purchases is only local ;
 *  - you don't want (or need) to implement receipt validation ;
 *
 * You may just want to finish all purchases automatically. You can do it this way:
 * ```js
 * this.store.when("product").approved((p: IAPProduct) => p.finish());
 * ```
 *
 * NOTE: the "product" query will match any purchases (see "queries" to learn more details about queries).
 *
 * ## Receipt validation
 *
 * To get the most up-to-date information about purchases (in case a purchase have been canceled, or a subscription renewed),
 * you should implement server side receipt validation.
 *
 * This also protects you against fake "purchases", made by some users using
 * "free in-app purchase" apps on their devices.
 *
 * When a purchase has been approved by the store, it's enriched with
 * transaction information (see `product.transaction` attribute).
 *
 * To verify a purchase you'll have to do three things:
 *
 *  - configure the validator.
 *  - call `product.verify()` from the `approved` event, before finishing the transaction.
 *  - finish the transaction when transaction is `verified`.
 *
 * Shameless Plug**: this is a feature many users struggle with, so as the author of this plugin, we can provide it to you as-a-service: https://billing.fovea.cc/
 * (which is free until you start making serious money)
 *
 * #### example using a validation URL
 *
 * ```js
 * this.store.validator = "https://billing.fovea.cc/";
 *
 * this.store.when("my stuff")
 *   .approved((p: IAPProduct) => p.verify())
 *   .verified((p: IAPProduct) => p.finish());
 * ```
 *
 * ## Subscriptions
 *
 * For subscription, you MUST implement remote receipt validation.
 *
 * When the receipt validator returns a `store.PURCHASE_EXPIRED` error code, the subscription will
 * automatically loose its `owned` status.
 *
 * Typically, you'll enable and disable access to your content this way.
 * ```typescript
 * this.store.when("my_subcription").updated((product: IAPProduct) => {
 *   if (product.owned)
 *     app.subscriberMode();
 *   else
 *     app.guestMode();
 * });
 * ```
 *
 * ## Product life-cycle
 *
 * A product will change state during the application execution.
 *
 * Find below a diagram of the different states a product can pass by.
 *
 * ```
 * REGISTERED +--> INVALID
 *            |
 *            +--> VALID +--> REQUESTED +--> INITIATED +-+
 *                                                       |
 *                 ^      +------------------------------+
 *                 |      |
 *                 |      |             +--> DOWNLOADING +--> DOWNLOADED +
 *                 |      |             |                                |
 *                 |      +--> APPROVED +--------------------------------+--> FINISHED +--> OWNED
 *                 |                                                             |
 *                 +-------------------------------------------------------------+
 *
 * #### Notes
 *
 *  - When finished, a consumable product will get back to the `VALID` state, while other will enter the `OWNED` state.
 *  - Any error in the purchase process will bring a product back to the `VALID` state.
 *  - During application startup, products may go instantly from `REGISTERED` to `APPROVED` or `OWNED`, for example if they are purchased non-consumables or non-expired subscriptions.
 *  - Non-Renewing Subscriptions are iOS products only. Please see the [iOS Non Renewing Subscriptions documentation](https://github.com/j3k0/cordova-plugin-purchase/blob/master/doc/ios.md#non-renewing) for a detailed explanation.
 *
 * ## events
 *
 *  - `loaded(IAPProduct)`
 *    - Called when product data is loaded from the store.
 *  - `updated(IAPProduct)`
 *    - Called when any change occured to a product.
 *  - `error(err)`
 *    - Called when an order failed.
 *    - The `err` parameter is an error object
 *  - `approved(IAPProduct)`
 *    - Called when a product order is approved.
 *  - `owned(IAPProduct)`
 *    - Called when a non-consumable product or subscription is owned.
 *  - `cancelled(IAPProduct)`
 *    - Called when a product order is cancelled by the user.
 *  - `refunded(IAPProduct)`
 *    - Called when an order is refunded by the user.
 *  - Actually, all other product states have their promise
 *    - `registered`, `valid`, `invalid`, `requested`,
 *      `initiated` and `finished`
 *  - `verified(IAPProduct)`
 *    - Called when receipt validation successful
 *  - `unverified(IAPProduct)`
 *    - Called when receipt verification failed
 *  - `expired(IAPProduct)`
 *    - Called when validation find a subscription to be expired
 *  - `downloading(IAPProduct, progress, time_remaining)`
 *    - Called when content download is started
 *  - `downloaded(IAPProduct)`
 *    - Called when content download has successfully completed
 *
 * ## Learn More
 *
 *  - [GitHub](https://github.com/j3k0/cordova-plugin-purchase)
 *  - [GitBook](https://purchase.cordova.fovea.cc/)
 *  - [Wiki](https://github.com/j3k0/cordova-plugin-purchase/wiki)
 *  - [API reference](https://github.com/j3k0/cordova-plugin-purchase/blob/master/doc/api.md)
 *
 * ## Technical Support or Questions
 *
 * If you have questions or need help integrating In-App Purchase, [Open an Issue on GitHub](https://github.com/j3k0/cordova-plugin-purchase/issues) or email us at _support@fovea.cc_.
 *
 * @interfaces
 * IAPProduct
 * IAPProductOptions
 * IAPProductEvents
 * ```
 */
@Plugin({
  pluginName: 'InAppPurchase2',
  plugin: 'cordova-plugin-purchase',
  pluginRef: 'store',
  repo: 'https://github.com/j3k0/cordova-plugin-purchase',
  platforms: ['iOS', 'Android', 'Windows'],
  install: 'ionic cordova plugin add cordova-plugin-purchase --variable BILLING_KEY="<ANDROID_BILLING_KEY>"',
})
@Injectable()
export class InAppPurchase2 extends AwesomeCordovaNativePlugin {
  @CordovaProperty()
  QUIET: number;

  @CordovaProperty()
  ERROR: number;

  @CordovaProperty()
  WARNING: number;

  @CordovaProperty()
  INFO: number;

  @CordovaProperty()
  DEBUG: number;

  /**
   * Debug level. Use QUIET, ERROR, WARNING, INFO or DEBUG constants
   */
  @CordovaProperty()
  verbosity: number;

  /**
   * Set to true to clear the transaction queue. Not recommended for production.
   * https://github.com/j3k0/cordova-plugin-purchase/blob/master/doc/api.md#random-tips
   */
  @CordovaProperty()
  autoFinishTransactions: boolean;

  /**
   * Set to true to invoke the platform purchase sandbox. (Windows only)
   */
  @CordovaProperty()
  sandbox: boolean;

  /**
   * Set to true to disable downloading of hosted content. (Apple only).
   * Useful in development or when migrating your app away from Apple Hosted Content.
   */
  @CordovaProperty()
  disableHostedContent: boolean;

  @CordovaProperty()
  FREE_SUBSCRIPTION: string;

  @CordovaProperty()
  PAID_SUBSCRIPTION: string;

  @CordovaProperty()
  NON_RENEWING_SUBSCRIPTION: string;

  @CordovaProperty()
  CONSUMABLE: string;

  @CordovaProperty()
  NON_CONSUMABLE: string;

  @CordovaProperty()
  ERR_SETUP: number;

  @CordovaProperty()
  ERR_LOAD: number;

  @CordovaProperty()
  ERR_PURCHASE: number;

  @CordovaProperty()
  ERR_LOAD_RECEIPTS: number;

  @CordovaProperty()
  ERR_CLIENT_INVALID: number;

  @CordovaProperty()
  ERR_PAYMENT_CANCELLED: number;

  @CordovaProperty()
  ERR_PAYMENT_INVALID: number;

  @CordovaProperty()
  ERR_PAYMENT_NOT_ALLOWED: number;

  @CordovaProperty()
  ERR_UNKNOWN: number;

  @CordovaProperty()
  ERR_REFRESH_RECEIPTS: number;

  @CordovaProperty()
  ERR_INVALID_PRODUCT_ID: number;

  @CordovaProperty()
  ERR_FINISH: number;

  @CordovaProperty()
  ERR_COMMUNICATION: number;

  @CordovaProperty()
  ERR_SUBSCRIPTIONS_NOT_AVAILABLE: number;

  @CordovaProperty()
  ERR_MISSING_TOKEN: number;

  @CordovaProperty()
  ERR_VERIFICATION_FAILED: number;

  @CordovaProperty()
  ERR_BAD_RESPONSE: number;

  @CordovaProperty()
  ERR_REFRESH: number;

  @CordovaProperty()
  ERR_PAYMENT_EXPIRED: number;

  @CordovaProperty()
  ERR_DOWNLOAD: number;

  @CordovaProperty()
  ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE: number;

  @CordovaProperty()
  REGISTERED: string;

  @CordovaProperty()
  INVALID: string;

  @CordovaProperty()
  VALID: string;

  @CordovaProperty()
  REQUESTED: string;

  @CordovaProperty()
  INITIATED: string;

  @CordovaProperty()
  APPROVED: string;

  @CordovaProperty()
  FINISHED: string;

  @CordovaProperty()
  OWNED: string;

  @CordovaProperty()
  DOWNLOADING: string;

  @CordovaProperty()
  DOWNLOADED: string;

  /* validation error codes */

  @CordovaProperty()
  INVALID_PAYLOAD: number;

  @CordovaProperty()
  CONNECTION_FAILED: number;

  @CordovaProperty()
  PURCHASE_EXPIRED: number;

  @CordovaProperty()
  PURCHASE_CONSUMED: number;

  @CordovaProperty()
  INTERNAL_ERROR: number;

  @CordovaProperty()
  NEED_MORE_DATA: number;

  @CordovaProperty()
  products: IAPProducts;

  @CordovaProperty()
  validator: string | ((url: string | IAPProduct, callback: Function) => void);

  @CordovaProperty()
  applicationUsername: string | (() => string);

  @Cordova({ sync: true })
  getApplicationUsername(): string {
    return;
  }

  @CordovaProperty()
  log: {
    error: (message: string) => void;
    warn: (message: string) => void;
    info: (message: string) => void;
    debug: (message: string) => void;
  };

  /**
   * Get product by id or alias
   *
   * @param idOrAlias
   */
  @Cordova({ sync: true })
  get(idOrAlias: string): IAPProduct {
    return;
  }

  /**
   * Register error handler
   *
   * @param onError {Function} function to call on error
   */
  @Cordova({ sync: true })
  error(onError: Function): void {}

  /**
   * Add or register a product
   *
   * @param product {IAPProductOptions}
   */
  @Cordova({ sync: true })
  register(product: IAPProductOptions | IAPProductOptions[]): void {}

  /**
   *
   * @param query
   * @param event
   * @param callback
   * @returns {IAPProductEvents}
   */
  @Cordova({ sync: true })
  when(query: string | IAPProduct, event?: string, callback?: IAPQueryCallback): IAPProductEvents {
    return;
  }

  /**
   * Identical to `when`, but the callback will be called only once. After being called, the callback will be unregistered.
   *
   * @param query {string | IAPProduct}
   * @param [event] {event}
   * @param [callback] {IAPQueryCallback}
   * @returns {IAPProductEvents}
   */
  @Cordova({ sync: true })
  once(query: string | IAPProduct, event?: string, callback?: IAPQueryCallback): IAPProductEvents {
    return;
  }

  /**
   * Unregister a callback. Works for callbacks registered with ready, when, once and error.
   *
   * @param callback {Function}
   */
  @Cordova({ sync: true })
  off(callback: Function): void {}

  /**
   * Initiate the purchase of a product.
   *
   * The `product` argument can be either:
   *
   *  - the `IAPProduct` object
   *  - the product `id`
   *  - the product `alias`
   *
   * The `additionalData` argument is an optional object with attributes:
   *  - `oldPurchasedSkus`: a string array with the old subscription to upgrade/downgrade on Android. See: [android developer](https://developer.android.com/google/play/billing/billing_reference.html#upgrade-getBuyIntentToReplaceSkus) for more info
   *  - `developerPayload`: string representing the developer payload as described in [billing best practices](https://developer.android.com/google/play/billing/billing_best_practices.html)
   *  - `applicationUsername`: the identifier of the user in your application.
   *
   * See the "Purchasing section" to learn more about the purchase process.
   *
   * return value**
   *
   * `store.order()` returns a Promise with the following methods:
   *
   *  - `then` - called when the order was successfully initiated.
   *  - `error` - called if the order couldn't be initiated.
   *
   * @param product
   * @param additionalData
   */
  @Cordova({ sync: true })
  order(product: string | IAPProduct, additionalData?: any): { then: Function; error: Function } {
    return;
  }

  @Cordova()
  ready(callback: Function): void {
    return;
  }
  /**
   * After you're done registering your store's product and events handlers,
   * time to call `store.refresh()`.
   *
   * This will initiate all the complex behind-the-scene work, to load product
   * data from the servers and restore whatever already have been
   * purchased by the user.
   *
   * Note that you can call this method again later during the application
   * execution to re-trigger all that hard-work. It's kind of expensive in term of
   * processing, so you'd better consider it twice.
   *
   * One good way of doing it is to add a "Refresh Purchases" button in your
   * applications settings. This way, if delivery of a purchase failed or
   * if a user wants to restore purchases he made from another device, he'll
   * have a way to do just that.
   *
   * example usage**
   *
   * ```typescript
   *    // ...
   *    // register products and events handlers here
   *    // ...
   *    //
   *    // then and only then, call refresh.
   *    this.store.refresh();
   * ```
   *
   * restore purchases**
   *
   * Add a "Refresh Purchases" button to call the `store.refresh()` method, like:
   *
   * `<button onclick="<pseudo_code>this.store.refresh()</pseudo_code>">Restore Purchases</button>`
   *
   * To make the restore purchases work as expected, please make sure that
   * the "approved" event listener had be registered properly,
   * and in the callback `product.finish()` should be called.
   */
  @Cordova({ sync: true })
  refresh(): IRefeshResult {
    return;
  }

  /** Lightweight method like refresh but do not relogin user */
  @Cordova({ sync: true })
  update(): void {}

  /** Opens the Manage Subscription page (AppStore, Play, Microsoft, ...). */
  @Cordova({ sync: true })
  manageSubscriptions(): void {}

  /** Opens the Code Redemption Sheet on iOS. (AppStore). */
  @Cordova({ sync: true })
  redeem(): void {}

  /** Opens the Manage Billing page (AppStore, Play, Microsoft, ...), where the user can update his/her payment methods. */
  @Cordova({ sync: true })
  manageBilling(): void {}
}
