import { Plugin, IonicNativePlugin, Cordova, CordovaProperty } from '@ionic-native/core';
import { Injectable } from '@angular/core';

export interface IAPProductOptions {
  id: string;
  alias: string;
  type: string;
}

export type IAPProducts = Array<IAPProduct> & {
  /**
   * Get product by ID
   */
  byId: { [id: string]: IAPProduct; };
  /**
   * Get product by alias
   */
  byAlias: { [alias: string]: IAPProduct; };
  /**
   * Remove all products (for testing only).
   */
  reset: () => {};
};

export type IAPQueryCallback = ((product: IAPProduct) => void) | ((error: IAPError) => void);

export interface IAPProduct {

  id: string;

  alias: string;

  type: string;

  state: string;

  title: string;

  description: string;

  priceMicros: string;

  price: string;

  currency: string;

  loaded: boolean;

  valid: boolean;

  canPurchase: boolean;

  owned: boolean;

  downloading: boolean;

  downloaded: boolean;

  additionalData: any;

  transaction: any;

  finish(): void;

  verify(): any;

  set(key: string, value: any): void;

  stateChanged(): void;

  on(event: string, callback: Function): void;

  once(event: string, callback: Function): void;

  off(callback: Function): void;

  trigger(action: string, args: any): void;

}

export interface IAPProductEvents {
  loaded: (callback: IAPQueryCallback) => void;
  updated: (callback: IAPQueryCallback) => void;
  error: (callback: IAPQueryCallback) => void;
  approved: (callback: IAPQueryCallback) => void;
  owned: (callback: IAPQueryCallback) => void;
  cancelled: (callback: IAPQueryCallback) => void;
  refunded: (callback: IAPQueryCallback) => void;
  registered: (callback: IAPQueryCallback) => void;
  valid: (callback: IAPQueryCallback) => void;
  invalid: (callback: IAPQueryCallback) => void;
  requested: (callback: IAPQueryCallback) => void;
  initiated: (callback: IAPQueryCallback) => void;
  finished: (callback: IAPQueryCallback) => void;
  verified: (callback: IAPQueryCallback) => void;
  unverified: (callback: IAPQueryCallback) => void;
  expired: (callback: IAPQueryCallback) => void;
  downloading: (product: IAPProduct, progress: any, time_remaining: any) => void;
  downloaded: (callback: IAPQueryCallback) => void;
}

export class IAPError {
  code: number;
  message: string;
}

/**
 * @name In App Purchase 2
 * @description
 *
 * @usage
 * ```
 * import { InAppPurchase2 } from '@ionic-native/in-app-purchase-2';
 *
 *
 * constructor(private inAppPurchase2: InAppPurchase2) { }
 *
 * ...
 *
 *
 * ```
 */
@Plugin({
  pluginName: 'InAppPurchase2',
  plugin: 'cc.fovea.cordova.purchase',
  pluginRef: 'store',
  repo: 'https://github.com/j3k0/cordova-plugin-purchase',
  platforms: ['iOS', 'Android', 'Windows'],
  install: 'ionic cordova plugin add cc.fovea.cordova.purchase --variable BILLING_KEY="<ANDROID_BILLING_KEY>"'
})
@Injectable()
export class InAppPurchase2 extends IonicNativePlugin {

  @CordovaProperty
  QUIET: number;

  @CordovaProperty
  ERROR: number;

  @CordovaProperty
  WARNING: number;

  @CordovaProperty
  INFO: number;

  @CordovaProperty
  DEBUG: number;

  /**
   * Debug level. Use QUIET, ERROR, WARNING, INFO or DEBUG constants
   */
  @CordovaProperty
  verbosity: number;

  /**
   * Set to true to invoke the platform purchase sandbox. (Windows only)
   */
  @CordovaProperty
  sandbox: boolean;

  @CordovaProperty
  FREE_SUBSCRIPTION: string;

  @CordovaProperty
  PAID_SUBSCRIPTION: string;

  @CordovaProperty
  NON_RENEWING_SUBSCRIPTION: string;

  @CordovaProperty
  CONSUMABLE: string;

  @CordovaProperty
  NON_CONSUMABLE: string;


  @CordovaProperty
  ERR_SETUP: number;

  @CordovaProperty
  ERR_LOAD: number;

  @CordovaProperty
  ERR_PURCHASE: number;

  @CordovaProperty
  ERR_LOAD_RECEIPTS: number;

  @CordovaProperty
  ERR_CLIENT_INVALID: number;

  @CordovaProperty
  ERR_PAYMENT_CANCELLED: number;

  @CordovaProperty
  ERR_PAYMENT_INVALID: number;

  @CordovaProperty
  ERR_PAYMENT_NOT_ALLOWED: number;

  @CordovaProperty
  ERR_UNKNOWN: number;

  @CordovaProperty
  ERR_REFRESH_RECEIPTS: number;

  @CordovaProperty
  ERR_INVALID_PRODUCT_ID: number;

  @CordovaProperty
  ERR_FINISH: number;

  @CordovaProperty
  ERR_COMMUNICATION: number;

  @CordovaProperty
  ERR_SUBSCRIPTIONS_NOT_AVAILABLE: number;

  @CordovaProperty
  ERR_MISSING_TOKEN: number;

  @CordovaProperty
  ERR_VERIFICATION_FAILED: number;

  @CordovaProperty
  ERR_BAD_RESPONSE: number;

  @CordovaProperty
  ERR_REFRESH: number;

  @CordovaProperty
  ERR_PAYMENT_EXPIRED: number;

  @CordovaProperty
  ERR_DOWNLOAD: number;

  @CordovaProperty
  ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE: number;


  @CordovaProperty
  REGISTERED: string;

  @CordovaProperty
  INVALID: string;

  @CordovaProperty
  VALID: string;

  @CordovaProperty
  REQUESTED: string;

  @CordovaProperty
  INITIATED: string;

  @CordovaProperty
  APPROVED: string;

  @CordovaProperty
  FINISHED: string;

  @CordovaProperty
  OWNED: string;

  @CordovaProperty
  DOWNLOADING: string;

  @CordovaProperty
  DOWNLOADED: string;


  @CordovaProperty
  INVALID_PAYLOAD: number;

  @CordovaProperty
  CONNECTION_FAILED: number;

  @CordovaProperty
  PURCHASE_EXPIRED: number;

  @CordovaProperty
  products: IAPProducts;

  @CordovaProperty
  validator: string | ((product: string | IAPProduct, callback: Function) => void);

  @CordovaProperty
  log: {
    error: (message: string) => void;
    warn: (message: string) => void;
    info: (message: string) => void;
    debug: (message: string) => void;
  };

  /**
   * Get product by id or alias
   * @param idOrAlias
   */
  @Cordova({ sync: true })
  get(idOrAlias: string): IAPProduct { return; }

  /**
   * Register error handler
   * @param onError {Function} function to call on error
   */
  @Cordova({ sync: true })
  error(onError: Function): void {}

  /**
   * Add or register a product
   * @param product {IAPProductOptions}
   */
  @Cordova({ sync: true})
  register(product: IAPProductOptions): void {}

  /**
   *
   * @param query
   * @param event
   * @param callback
   * @return {IAPProductEvents}
   */
  @Cordova({ sync: true })
  when(query: string | IAPProduct, event?: string, callback?: IAPQueryCallback): IAPProductEvents { return; }

  /**
   * Identical to `when`, but the callback will be called only once. After being called, the callback will be unregistered.
   * @param query {string | IAPProduct}
   * @param [event] {event}
   * @param [callback] {IAPQueryCallback}
   * @return {IAPProductEvents}
   */
  @Cordova({ sync: true })
  once(query: string | IAPProduct, event?: string, callback?: IAPQueryCallback): IAPProductEvents { return; }

  /**
   * Unregister a callback. Works for callbacks registered with ready, when, once and error.
   * @param callback {Function}
   */
  @Cordova({ sync: true })
  off(callback: Function): void {}

  @Cordova({ sync: true })
  order(product: string | IAPProduct, additionalData?: any): { then: Function; error: Function; } { return; }

  /**
   *
   * @return {Promise<any>} returns a promise that resolves when the store is ready
   */
  @Cordova()
  ready(): Promise<void> { return; }

  @Cordova({ sync: true })
  refresh(): void {}

}
