import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name ShopCheckout
 * @description
 * This is a plugin that allows your Ionic app to use ShopChecout for Android.
 * Follow the offical documentation to setup this plugin correctly: https://developer.shoptopup.com/docs/shoptopup-for-cordovaphonegap
 *
 * @usage
 * ```typescript
 * import { ShopCheckout } from '@ionic-native/shop-checkout/ngx';
 *
 *
 * constructor(private shopCheckout: ShopCheckout) { }
 *
 * ...
 *
 * this.shopCheckout.registerAgent();
 * ...
 * this.shopCheckout.openProducts();
 *
 * ```
 */
@Plugin({
  pluginName: 'ShopCheckout',
  plugin: 'cordova-plugin-shop-checkout',
  pluginRef: 'shopCheckout',
  repo: 'https://github.com/tradedepot/cordova-shop-checkout',
  platforms: ['Android'],
})
@Injectable()
export class ShopCheckout extends IonicNativePlugin {
  /**
   * Register an agent
   * @param options {any} Options
   * @return {Promise<void>} Returns a promise
   */
  @Cordova()
  registerAgent(options: any): Promise<void> {
    return;
  }

  /**
   * Open products view
   * @param options {any} Options
   * @return {Promise<void>} Returns a promise
   */
  @Cordova()
  openProducts(options: any): Promise<void> {
    return;
  }

  /**
   * Open trannsactions view
   * @param options {any} Options
   * @return {Promise<void>} Returns a promise
   */
  @Cordova()
  openTransactions(options: any): Promise<void> {
    return;
  }

  /**
   * @return {Promise<void>} Returns a promise
   */
  @Cordova()
  logout(options: any): Promise<void> {
    return;
  }

  /**
   * @return {Promise<boolean>} Returns a promise
   */
  @Cordova()
  isInitialized(): Promise<boolean> {
    return;
  }
}
