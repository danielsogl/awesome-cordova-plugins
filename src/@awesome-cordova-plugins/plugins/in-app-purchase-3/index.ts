import { Cordova, CordovaProperty, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';

export interface IAPAdapter {
  id: Platform;

  name: string;

  ready: boolean;

  products: IAPProduct[];

  receipts: IAPReceipt[];

  isSupported: boolean;

  initialize(): Promise<IAPError | undefined>;

  loadProducts(products: IAPProductOptions[]): Promise<(IAPProduct | IAPError)[]>;

  loadReceipts(): Promise<IAPReceipt[]>;

  supportsParallelLoading: boolean;

  order(offer: IAPOffer, additionalData: IAPAdditionalData): Promise<IAPError | undefined>;

  finish(transaction: IAPTransaction): Promise<IAPError | undefined>;

  receiptValidationBody(receipt: IAPReceipt): Promise<object | undefined>;

  handleReceiptValidationResponse(receipt: IAPReceipt, response: object): Promise<void>;

  requestPayment(
    payment: PaymentRequest,
    additionalData?: IAPAdditionalData
  ): Promise<IAPError | IAPTransaction | undefined>;

  manageSubscriptions(): Promise<IAPError | undefined>;

  manageBilling(): Promise<IAPError | undefined>;

  checkSupport(functionality: string): boolean;

  restorePurchases(): Promise<IAPError | undefined>;
}

export interface IAPProductOptions {
  id: string;
  /** @see {@link ProductType} */
  type: string;
  /** @see {@link Platform} */
  platform: string;
  group?: string;
}

/**
 * Data to attach to a transaction.
 * @see {@link IAPOffer.order}
 * @see {@link InAppPurchase3.requestPayment}
 */
export interface IAPAdditionalData {
  /** The application's user identifier, will be obfuscated with md5 to fill `accountId` if necessary */
  applicationUsername?: string;

  /** GooglePlay specific additional data. See cordova-plugin-purchase documentation.*/
  googlePlay?: object;

  /** Braintree specific additional data. See cordova-plugin-purchase documentation.*/
  braintree?: object;

  /** Apple AppStore specific additional data. See cordova-plugin-purchase documentation.*/
  appStore?: object;
}

export type Callback<T> = (t: T) => void;

export interface IAPProduct {
  platform: Platform;

  type: ProductType;

  id: string;

  offers: IAPOffer[];

  title: string;

  description: string;

  group?: string;

  pricing: IAPPricingPhase | undefined;

  canPurchase: boolean;

  owned: boolean;

  getOffer(id?: string): IAPOffer | undefined;

  addOffer(offer: IAPOffer): this;
}
export interface IAPOffer {
  id: string;

  productId: string;

  productType: ProductType;

  productGroup: string | undefined;

  platform: Platform;

  pricingPhases: IAPPricingPhase[];

  canPurchase: boolean;

  /**
   * Initiate a purchase of this offer.
   *
   * @example
   * store.get("my-product").getOffer().order();
   */
  order(additionnalData?: IAPAdditionalData): Promise<IAPError | undefined>;
}
export interface IAPPricingPhase {
  price: string;

  priceMicros: number;

  currency: string;

  billingPeriod?: number;

  billingCycles?: number;

  recurrenceMode?: RecurrenceMode;

  paymentMode?: PaymentMode;
}
export interface IAPReceipt {
  platform: Platform;

  transactions: IAPTransaction[];

  verify(): Promise<void>;

  finish(): Promise<void>;
  hasTransaction(value: IAPTransaction): boolean;
  lastTransaction(): IAPTransaction | undefined;
}
export interface IAPVerifiedReceipt {
  id: string;

  validationDate: Date;

  plaform: Platform;

  sourceReceipt: IAPReceipt;

  collection: IAPVerifiedPurchase[];

  latestReceipt: boolean;

  nativeTransactions: { type: string; data?: object }[];

  warning?: string;

  raw: object;

  set(receipt: IAPReceipt, response: object): void;

  finish(): Promise<void>;
}
export interface IAPUnverifiedReceipt {
  receipt: IAPReceipt;

  payload: object;
}
export interface IAPTransaction {
  platform: Platform;

  transactionId: string;

  purchaseId?: string;

  purchaseDate?: Date;

  lastRenewalDate?: Date;

  expirationDate?: Date;

  isAcknowledged?: boolean;

  isPending?: boolean;

  isConsumed?: boolean;

  renewalIntent?: RenewalIntent;

  renewalIntentChangeDate?: Date;

  state: TransactionState;

  amountMicros?: number;

  currency?: string;

  products: { id: string; offerId?: string }[];

  /**
   * Finish a transaction.
   *
   * When the application has delivered the product, it should finalize the order.
   * Only after that, money will be transferred to your account.
   * This method ensures that no customers is charged for a product that couldn't be delivered.
   *
   * @example
   * store.when()
   *   .approved(transaction => transaction.verify())
   *   .verified(receipt => receipt.finish())
   */
  finish(): Promise<void>;

  /**
   * Verify a transaction.
   *
   * This will trigger a call to the receipt validation service for the attached receipt.
   * Once the receipt has been verified, you can finish the transaction.
   *
   * @example
   * store.when()
   *   .approved(transaction => transaction.verify())
   *   .verified(receipt => receipt.finish())
   */
  verify(): Promise<void>;

  parentReceipt: IAPReceipt;
}
export interface IAPVerifiedPurchase {
  id: string;

  platform?: Platform;

  purchaseId?: string;

  purchaseDate?: number;

  expiryDate?: number;

  isExpired?: boolean;

  renewalIntent?: string;

  renewalIntentChangeDate?: number;

  cancelationReason?: CancelationReason;

  isBillingRetryPeriod?: boolean;

  isTrialPeriod?: boolean;

  isIntroPeriod?: boolean;

  discountId?: string;

  priceConsentStatus?: PriceConsentStatus;

  lastRenewalDate?: number;
}

export interface IAPProductEvents {
  /**
   * Register a function called when a product or receipt is updated.
   *
   * @deprecated - Use `productUpdated` or `receiptUpdated`.
   */
  updated(cb: Callback<IAPProduct | IAPReceipt>, callbackName?: string): IAPProductEvents;

  /** Register a function called when a receipt is updated. */
  receiptUpdated(cb: Callback<IAPReceipt>, callbackName?: string): IAPProductEvents;

  /** Register a function called when a product is updated. */
  productUpdated(cb: Callback<IAPProduct>, callbackName?: string): IAPProductEvents;

  // /** Register a function called when a product is owned. */
  // owned(cb: Callback<Product>): When;

  /** Register a function called when a transaction is initiated. */
  initiated(cb: Callback<IAPTransaction>, callbackName?: string): IAPProductEvents;

  /** Register a function called when a transaction is approved. */
  approved(cb: Callback<IAPTransaction>, callbackName?: string): IAPProductEvents;

  /** Register a function called when a transaction is pending. */
  pending(cb: Callback<IAPTransaction>, callbackName?: string): IAPProductEvents;

  /** Register a function called when a transaction is finished. */
  finished(cb: Callback<IAPTransaction>, callbackName?: string): IAPProductEvents;

  /** Register a function called when a receipt is verified. */
  verified(cb: Callback<IAPVerifiedReceipt>, callbackName?: string): IAPProductEvents;

  /** Register a function called when a receipt failed validation. */
  unverified(cb: Callback<IAPUnverifiedReceipt>, callbackName?: string): IAPProductEvents;

  /**
   * Register a function called when all receipts have been loaded.
   *
   * This handler is called only once. Use this when you want to run some code at startup after
   * all the local receipts have been loaded, for example to process the initial ownership status
   * of your products. When you have a receipt validation server in place, a better option is to
   * use the sister method "receiptsVerified".
   *
   * If no platforms have any receipts (the user made no purchase), this will also get called.
   */
  receiptsReady(cb: Callback<void>, callbackName?: string): IAPProductEvents;

  /**
   * Register a function called when all receipts have been verified.
   *
   * If no platforms have any receipts (user made no purchase), this will also get called.
   */
  receiptsVerified(cb: Callback<void>, callbackName?: string): IAPProductEvents;
}

export interface IAPPaymentRequest {
  items: (
    | {
        id: string;
        title: string;
        pricing?: {
          priceMicros: number;
          currency?: string;
        };
      }
    | undefined
  )[];

  platform: Platform;

  amountMicros?: number;

  currency?: string;

  description?: string;

  email?: string;

  mobilePhoneNumber?: string;

  billingAddress?: {
    givenName?: string;

    surname?: string;

    streetAddress1?: string;

    streetAddress2?: string;

    streetAddress3?: string;

    locality?: string;

    region?: string;

    postalCode?: string;

    phoneNumber?: string;

    countryCode?: string;
  };
}

/**
 * Purchase platforms supported by the plugin
 */
export enum Platform {
  /** Apple AppStore */
  APPLE_APPSTORE = 'ios-appstore',

  /** Google Play */
  GOOGLE_PLAY = 'android-playstore',

  /** Windows Store */
  WINDOWS_STORE = 'windows-store-transaction',

  /** Braintree */
  BRAINTREE = 'braintree',

  // /** Stripe */
  // STRIPE = 'stripe',

  /** Test platform */
  TEST = 'test',
}

/** Types of In-App Products */
export enum ProductType {
  /** Type: An consumable product, that can be purchased multiple time */
  CONSUMABLE = 'consumable',
  /** Type: A non-consumable product, that can purchased only once and the user keeps forever */
  NON_CONSUMABLE = 'non consumable',
  /** @deprecated use PAID_SUBSCRIPTION */
  FREE_SUBSCRIPTION = 'free subscription',
  /** Type: An auto-renewable subscription */
  PAID_SUBSCRIPTION = 'paid subscription',
  /** Type: An non-renewing subscription */
  NON_RENEWING_SUBSCRIPTION = 'non renewing subscription',
  /** Type: The application bundle */
  APPLICATION = 'application',
}

/** Mode of payment */
export enum PaymentMode {
  /** Used for subscriptions, pay at the beginning of each billing period */
  PAY_AS_YOU_GO = 'PayAsYouGo',

  /** Pay the whole amount up front */
  UP_FRONT = 'UpFront',

  /** Nothing to be paid */
  FREE_TRIAL = 'FreeTrial',
}

/**
 * Type of recurring payment
 *
 * - FINITE_RECURRING: Payment recurs for a fixed number of billing period set in `paymentPhase.cycles`.
 * - INFINITE_RECURRING: Payment recurs for infinite billing periods unless cancelled.
 * - NON_RECURRING: A one time charge that does not repeat.
 */
export enum RecurrenceMode {
  NON_RECURRING = 'NON_RECURRING',
  FINITE_RECURRING = 'FINITE_RECURRING',
  INFINITE_RECURRING = 'INFINITE_RECURRING',
}

/** Unit for measuring durations */
export type IPeriodUnit = 'Minute' | 'Hour' | 'Day' | 'Week' | 'Month' | 'Year';

/** Possible states of a product */
export enum TransactionState {
  // REQUESTED = 'requested',
  INITIATED = 'initiated',
  PENDING = 'pending',
  APPROVED = 'approved',
  CANCELLED = 'cancelled',
  FINISHED = 'finished',
  // OWNED = 'owned',
  // EXPIRED = 'expired',
  UNKNOWN_STATE = '',
}

/** Whether or not the user was notified or agreed to a price change */
export enum PriceConsentStatus {
  NOTIFIED = 'Notified',
  AGREED = 'Agreed',
}

/** Whether or not the user intends to let the subscription auto-renew. */
export enum RenewalIntent {
  /** The user intends to let the subscription expire without renewing. */
  LAPSE = 'Lapse',
  /** The user intends to renew the subscription. */
  RENEW = 'Renew',
}

/** Reason why a subscription has been canceled */
export enum CancelationReason {
  /** Not canceled */
  NOT_CANCELED = '',
  /** Subscription canceled by the developer. */
  DEVELOPER = 'Developer',
  /** Subscription canceled by the system for an unspecified reason. */
  SYSTEM = 'System',
  /** Subscription upgraded or downgraded to a new subscription. */
  SYSTEM_REPLACED = 'System.Replaced',
  /** Product not available for purchase at the time of renewal. */
  SYSTEM_PRODUCT_UNAVAILABLE = 'System.ProductUnavailable',
  /** Billing error; for example customer’s payment information is no longer valid. */
  SYSTEM_BILLING_ERROR = 'System.BillingError',
  /** Transaction is gone; It has been deleted. */
  SYSTEM_DELETED = 'System.Deleted',
  /** Subscription canceled by the user for an unspecified reason. */
  CUSTOMER = 'Customer',
  /** Customer canceled their transaction due to an actual or perceived issue within your app. */
  CUSTOMER_TECHNICAL_ISSUES = 'Customer.TechnicalIssues',
  /** Customer did not agree to a recent price increase. See also priceConsentStatus. */
  CUSTOMER_PRICE_INCREASE = 'Customer.PriceIncrease',
  /** Customer canceled for cost-related reasons. */
  CUSTOMER_COST = 'Customer.Cost',
  /** Customer claimed to have found a better app. */
  CUSTOMER_FOUND_BETTER_APP = 'Customer.FoundBetterApp',
  /** Customer did not feel he is using this service enough. */
  CUSTOMER_NOT_USEFUL_ENOUGH = 'Customer.NotUsefulEnough',
  /** Subscription canceled for another reason; for example, if the customer made the purchase accidentally. */
  CUSTOMER_OTHER_REASON = 'Customer.OtherReason',
  /** Subscription canceled for unknown reasons. */
  UNKNOWN = 'Unknown',
}

export enum LogLevel {
  /** Disable all logging (default) */
  QUIET = 0,
  /** Show only error messages */
  ERROR = 1,
  /** Show warnings and errors */
  WARNING = 2,
  /** Also show information messages */
  INFO = 3,
  /** Enable internal debugging messages. */
  DEBUG = 4,
}

/**
 * @hidden
 */
export class IAPError {
  isError: true;
  code: number;
  message: string;
  platform: Platform | null;
  productId: string | null;
}

/**
 * @name "In App Purchase 3"
 * @description
 * In-App Purchase on iOS, Android, Windows, macOS and XBox.
 *
 * This plugin replace the previous InAppPurchase2, due to backward compatibility issue with the wrapped
 * cordova-plugin-purchase version 13.0
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
 *  - **cordova-plugin-purchase** version 13.0 or higher
 * @usage
 * ```typescript
 * import { InAppPurchase3, Platform, ProductType } from '@awesome-cordova-plugins/in-app-purchase-3/ngx';
 *
 * constructor(public platform: Platform, private store: InAppPurchase3) {
 *   platform.ready().then(() => {
 *    this.store.register({
 *      id: "my_product_id",
 *      type: ProductType.NON_RENEWING_SUBSCRIPTION,
 *      platform: Platform.TEST
 *    });
 *    this.store.when()
 *      .approved(p => p.verify())
 *      .verified(p => p.finish());
 *    this.store.initialize();
 *    this.store.update();
 *   });
 * }
 *
 * ...
 *
 * const product = this.store.get("my_product_id", Platform.TEST);
 * store.order(product.getOffer()); // or product.getOffer().order();
 * ```
 *
 * ## Full example
 *
 * ```typescript
 *  // After platform ready
 *  this.store.verbosity = this.store.DEBUG;
 *  this.store.register({
 *    id: "my_product_id",
 *    type: ProductType.PAID_SUBSCRIPTION,
 *    platform: Platform.TEST,
 *  });
 *
 *  // Register event handlers for the specific product
 *  this.store.when().registered( (product: IAPProduct) => {
 *    console.log('Registered: ' + JSON.stringify(product));
 *  });
 *
 *  // Updated
 *  this.store.when().updated( (product: IAPProduct) => {
 *    console.log('Updated' + JSON.stringify(product));
 *  });
 *
 *  // User closed the native purchase dialog
 *  this.store.when().cancelled( (product) => {
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
 *  // initialize the plugin
 *  this.store.initialize();
 *
 *  // refresh product prices and status of purchases
 *  this.store.update();
 *
 *  ...
 *
 * const product = this.store.get("my_product_id", Platform.TEST);
 * store.order(product.getOffer()); // or product.getOffer().order();
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
 *  this.store.when().updated(refreshScreen); // match any product
 *  this.store.when().owned(unlockApp); // match a specific product
 *  this.store.when().approved(serverCheck); // match all subscriptions
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
 * Use `store.register()` to define them before your first call to `store.initialize()`.
 *
 * Once registered, you can use `store.get()` to retrieve an `IAPProduct` object.
 *
 * ```typescript
 *  this.store.register({
 *    id: "my_consumable1",
 *    type: ProductType.CONSUMABLE
 *    platform: Platform.TEST,
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
 * Purchases are initiated using the `store.order(offer)` method.
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
 * this.store.when().approved((product: IAPProduct) => {
 *   // download the feature
 *   app.downloadExtraChapter()
 *   .then(() => product.finish());
 * });
 * ```
 *
 * When the purchase button is clicked:
 * ```typescript
 * const extraChapterProduct = this.store.get("extra_chapter");
 * this.store.order(extraChapterProduct.getOffer());
 * ```
 *
 * #### un-finished purchases
 *
 * If your app wasn't able to deliver the content, `product.finish()` won't be called.
 *
 * Don't worry: the `approved` event will be re-triggered the next time you
 * call `store.update()`, which can very well be the next time
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
 * this.store.when().approved((p: IAPProduct) => p.finish());
 * ```
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
 * this.store.when()
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
 * this.store.when().updated((product: IAPProduct) => {
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
 *                 |      |
 *                 |      |
 *                 |      +--> APPROVED +--------------------------------+--> FINISHED +--> OWNED
 *                 |                                                             |
 *                 +-------------------------------------------------------------+
 * ```
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
 * IAPAdapter
 * IAPProductOptions
 * IAPProduct
 * IAPOffer
 * IAPPricingPhase
 * IAPReceipt
 * IAPVerifiedReceipt
 * IAPUnverifiedReceipt
 * IAPTransaction
 * IAPVerifiedPurchase
 * IAPProductEvents
 * IAPPaymentRequest
 * ```
 */
@Plugin({
  pluginName: 'InAppPurchase3',
  plugin: 'cordova-plugin-purchase',
  pluginRef: 'CdvPurchase.store',
  repo: 'https://github.com/j3k0/cordova-plugin-purchase',
  platforms: ['iOS', 'Android', 'Windows'],
  install: 'ionic cordova plugin add cordova-plugin-purchase --variable BILLING_KEY="<ANDROID_BILLING_KEY>"',
})
@Injectable()
export class InAppPurchase3 extends AwesomeCordovaNativePlugin {
  @Cordova({ sync: true })
  getAdapter(platform: Platform): IAPAdapter | undefined {
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
   * Verbosity level used by the plugin logger
   *
   * Set to:
   *  - LogLevel.QUIET or 0 to disable all logging (default)
   *  - LogLevel.ERROR or 1 to show only error messages
   *  - LogLevel.WARNING or 2 to show warnings and errors
   *  - LogLevel.INFO or 3 to also show information messages
   *  - LogLevel.DEBUG or 4 to enable internal debugging messages.
   *
   * @see {@link LogLevel}
   */
  @CordovaProperty()
  verbosity: number;

  /** Return the identifier of the user for your application */
  @CordovaProperty()
  applicationUsername: string | (() => string);

  /**
   * Get the application username as a string by either calling or returning {@link InAppPurchase3.applicationUsername}
   */
  @Cordova({ sync: true })
  getApplicationUsername(): string {
    return;
  }

  /**
   * URL or implementation of the receipt validation service
   *
   * @example
   * Define the validator as a string
   * ```ts
   * InAppPurchase3.validator = "https://validator.iaptic.com/v1/validate?appName=test"
   * ```
   *
   * @example
   * Define the validator as a function
   * ```ts
   * InAppPurchase3.validator = (receipt, callback) => {
   *   callback({
   *     ok: true,
   *     data: {
   *       // see CdvPurchase.Validator.Response.Payload for details
   *     }
   *   })
   * }
   * ```
   */
  @CordovaProperty()
  validator:
    | string
    | ((receipt: object, callback: Callback<object>) => void)
    | { url: string; headers?: { [token: string]: string }; timeout?: number }
    | undefined;

  /**
   * When adding information to receipt validation requests, those can serve different functions:
   *  - handling support requests
   *  - fraud detection
   *  - analytics
   *  - tracking
   *
   * Make sure the value your select is in line with your application's privacy policy and your users' tracking preference.
   *
   * @example
   * CdvPurchase.store.validator_privacy_policy = [
   *   'fraud', 'support', 'analytics', 'tracking'
   * ]
   */
  @CordovaProperty()
  validator_privacy_policy:
    | 'fraud'
    | 'support'
    | 'analytics'
    | 'tracking'
    | ('fraud' | 'support' | 'analytics' | 'tracking')[]
    | undefined;

  /**
   * Register a product.
   * @example
   * store.register([{
   *       id: 'subscription1',
   *       type: ProductType.PAID_SUBSCRIPTION,
   *       platform: Platform.APPLE_APPSTORE,
   *   }, {
   *       id: 'subscription1',
   *       type: ProductType.PAID_SUBSCRIPTION,
   *       platform: Platform.GOOGLE_PLAY,
   *   }, {
   *       id: 'consumable1',
   *       type: ProductType.CONSUMABLE,
   *       platform: Platform.BRAINTREE,
   *   }]);
   * @param {IAPProductOptions | IAPProductOptions[]} product - one product or a list of products to register.
   */
  @Cordova({ sync: true })
  register(product: IAPProductOptions | IAPProductOptions[]): void {}

  /**
   * Call to initialize the in-app purchase plugin.
   *
   * @param platforms - List of payment platforms to initialize, default to Store.defaultPlatform().
   * @returns {Promise<IAPError | undefined>}
   */
  @Cordova({ sync: true })
  initialize(platforms: (Platform | { platform: Platform; options?: object })[]): Promise<IAPError | undefined> {
    return;
  }

  /**
   * Avoid invoking store.update() if the most recent call occurred within this specific number of milliseconds.
   */
  @CordovaProperty()
  minTimeBetweenUpdates: number;

  /** Call to refresh the price of products and status of purchases */
  @Cordova({ sync: true })
  update(): void {}

  /**
   * Register a callback to be called when the plugin is ready.
   * This happens when all the platforms are initialized and their products loaded.
   * @param {Callback<void>} callback called when ready
   */
  @Cordova()
  ready(callback: Callback<void>): void {
    return;
  }

  @CordovaProperty()
  isReady: boolean;

  /**
   * Setup events listener.
   *
   * @example
   * store.when()
   *      .productUpdated(product => updateUI(product))
   *      .approved(transaction => transaction.verify())
   *      .verified(receipt => receipt.finish());
   */
  @Cordova({ sync: true })
  when(): IAPProductEvents {
    return;
  }

  /**
   * Remove a callback from any listener it might have been added to.
   * @param {Callback} callback
   */
  @Cordova({ sync: true })
  off<T>(callback: Callback<T>): void {}

  /**
   * Setup a function to be notified of changes to a transaction state.
   * @param {IAPTransaction} transaction The transaction to monitor.
   * @param {Callback<TransactionState>} onChange Function to be called when the transaction status changes.
   * @param {string} callbackName
   * @returns A monitor which can be stopped with `monitor.stop()`
   *
   * @example
   * const monitor = store.monitor(transaction, state => {
   *   console.log('new state: ' + state);
   *   if (state === TransactionState.FINISHED)
   *     monitor.stop();
   * });
   */
  @Cordova({ sync: true })
  monitor(
    transaction: IAPTransaction,
    onChange: Callback<TransactionState>,
    callbackName: string
  ): {
    stop(): void;
    transaction: IAPTransaction;
  } {
    return;
  }

  /**
   * List of all active products.
   * Products are active if their details have been successfully loaded from the store.
   */
  @CordovaProperty()
  products: IAPProduct[];

  /**
   * Find a product from its id and platform
   * @param {string} productId Product identifier on the platform.
   * @param {Platform} platform The product the product exists in. Can be omitted if you're only using a single payment platform.
   */
  @Cordova({ sync: true })
  get(productId: string, platform: Platform): IAPProduct {
    return;
  }

  /** List of all receipts present on the device. */
  @CordovaProperty()
  localReceipts: IAPReceipt[];

  /** List of all transaction from the local receipts. */
  @CordovaProperty()
  localTransactions: IAPTransaction[];

  /**
   * List of receipts verified with the receipt validation service.
   * Those receipt contains more information and are generally more up-to-date than the local ones.
   */
  @CordovaProperty()
  verifiedReceipts: IAPVerifiedReceipt[];
  /**
   * List of all purchases from the verified receipts.
   */
  verifiedPurchases: IAPVerifiedPurchase[];

  /**
   * Find the last verified purchase for a given product, from those verified by the receipt validator.
   * @param {IAPProduct} product
   */
  @Cordova({ sync: true })
  findInVerifiedReceipts(product: IAPProduct): IAPVerifiedPurchase | undefined {
    return;
  }

  /**
   * Find the latest transaction for a given product, from those reported by the device.
   * @param {IAPProduct} product
   */
  @Cordova({ sync: true })
  findInLocalReceipts(product: IAPProduct): IAPTransaction | undefined {
    return;
  }

  /**
   * @param product - The product object or identifier of the product.
   * @returns {boolean} true if a product is owned
   */
  @Cordova({ sync: true })
  owned(
    product:
      | {
          id: string;
          platform?: Platform;
        }
      | string
  ): boolean {
    return;
  }

  /**
   * Place an order for a given offer.
   * @param {IAPOffer} offer
   * @param {IAPAdditionalData?} additionalData
   */
  @Cordova({ sync: false })
  order(offer: IAPOffer, additionalData?: IAPAdditionalData): Promise<IAPError | undefined> {
    return;
  }

  /**
   * Request a payment.
   *
   * A payment is a custom amount to charge the user. Make sure the selected payment platform
   * supports Payment Requests.
   *
   * @param {IAPPaymentRequest} paymentRequest Parameters of the payment request
   * @param {IAPAdditionalData?} additionalData Additional parameters
   */
  @Cordova({ sync: false })
  requestPayment(paymentRequest: IAPPaymentRequest, additionalData?: IAPAdditionalData): object {
    return;
  }

  /**
   * @returns true if a platform supports the requested functionality.
   *
   * @example
   * store.checkSupport(Platform.APPLE_APPSTORE, 'requestPayment');
   * // => false
   * @param {Platform} platform
   * @param {functionality} functionality
   */
  @Cordova({ sync: false })
  checkSupport(platform: Platform, functionality: string): boolean {
    return;
  }

  /**
   * Replay the users transactions.
   *
   * This method exists to cover an Apple App Store requirement.
   */
  @Cordova({ sync: false })
  restorePurchases(): Promise<IAPError | undefined> {
    return;
  }

  /**
   * Open the subscription management interface for the selected platform.
   *
   * If platform is not specified, the first available platform will be used.
   *
   * @example
   * const activeSubscription: Purchase = // ...
   * store.manageSubscriptions(activeSubscription.platform);
   * @param {Platform?} platform
   */
  @Cordova({ sync: false })
  manageSubscriptions(platform?: Platform): Promise<IAPError | undefined> {
    return;
  }

  /**
   * Opens the billing methods page on App Store, Play, Microsoft, ...
   *
   * From this page, the user can update their payment methods.
   * If platform is not specified, the first available platform will be used.
   *
   * @example
   * if (purchase.isBillingRetryPeriod)
   *     store.manageBilling(purchase.platform);
   */
  @Cordova({ sync: false })
  manageBilling(): Promise<IAPError | undefined> {
    return;
  }

  /**
   * The default payment platform to use depending on the OS.
   *
   * - on iOS: `APPLE_APPSTORE`
   * - on Android: `GOOGLE_PLAY`
   */
  @Cordova({ sync: true })
  defaultPlatform(): Platform {
    return;
  }

  /**
   * Register an error handler.
   *
   * @param {Callback<IAPError>} error An error callback that takes the error as an argument
   * @example
   * store.error(function(error) {
   *   console.error('CdvPurchase ERROR: ' + error.message);
   * });
   */
  @Cordova({ sync: true })
  error(error: Callback<IAPError>): void {}

  /**
   * Version of the plugin currently installed.
   */
  @CordovaProperty()
  version: string;
}
