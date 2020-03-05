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
 * import { ShopCheckout } from '@ionic-native/shop-checkout';
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
  plugin: 'cordova-plugin-shop-checkout', // npm package name, example: cordova-plugin-camera
  pluginRef: 'shopCheckout', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/tradedepot/cordova-shop-checkout', // the github repository URL for the plugin
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class ShopCheckout extends IonicNativePlugin {
  /**
   * Register an agent
   * @param options {any} Options
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  registerAgent(options: any): Promise<any> {
    return;
  }

  /**
   * Open products view
   * @param options {any} Options
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  openProducts(options: any): Promise<any> {
    return;
  }

  /**
   * Open trannsactions view
   * @param options {any} Options
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  openTransactions(options: any): Promise<any> {
    return;
  }


  /**
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  logout(options: any): Promise<any> {
    return;
  }

  /**
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  isInitialized(): Promise<any> {
    return;
  }
}
