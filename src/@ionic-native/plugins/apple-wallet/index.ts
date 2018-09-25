/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';


export interface EncryptedCardData {
  activationData: string;
  encryptedPassData: string;
  wrappedKey: string;
}

export interface CardData {
  cardholderName: string;
  primaryAccountNumberSuffix: string;
  localizedDescription?: string;
  paymentNetwork: string;
}


/**
 * @name Apple Wallet
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { AppleWallet } from '@ionic-native/apple-wallet';
 *
 *
 * constructor(private appleWallet: AppleWallet) { }
 *
 * ...
 *
 *
 * this.appleWallet.available()
 *  .then((res) => {
 *    // res is a boolean value, either true or false
 *    console.log("Is Apple Wallet available? ", res);
 *   })
 *  .catch((message) => {
 *    console.error("ERROR AVAILBLE>> ", message);
 *  });
 *
 * ...
 *
 * let data: cardData = {
 *    cardholderName: 'Test User',
 *    primaryAccountNumberSuffix: '1234',
 *    localizedDescription: 'Description of payment card',
 *    paymentNetwork: 'VISA'
 *  }
 *
 * this.appleWallet.startAddPaymentPass(data: cardData)
 *  .then((res) => {
 *    console.log("startAddPaymentPass success response ", res);
 *   })
 *  .catch((err) => {
 *    console.error("startAddPaymentPass ERROR response", err);
 *  });
 *
 * ...
 *
 * let data: encryptedCardData = {
 *    activationData: 'encoded Base64 activationData from your server',
 *    encryptedPassData: 'encoded Base64 encryptedPassData from your server',
 *    wrappedKey: 'encoded Base64 wrappedKey from your server',
 *  }
 *
 * this.appleWallet.encryptedCardData(data: encryptedCardData)
 *  .then((res) => {
 *    console.log("completeAddCardToAppleWallet success response ", res);
 *   })
 *  .catch((err) => {
 *    console.error("completeAddCardToAppleWallet ERROR response", err);
 *  });
 *
 * ```
 */
@Plugin({
  pluginName: 'AppleWallet',
  plugin: 'cordova-apple-wallet', // npm package name, example: cordova-plugin-camera
  pluginRef: 'AppleWallet', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/tomavic/cordova-apple-wallet', // the github repository URL for the plugin
  platforms: ['iOS'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class AppleWallet extends IonicNativePlugin {

  /**
   * Detects if the current device supports Apple Wallet
   * @return {Promise<boolean>} Returns a promise
   */
  @Cordova()
  available(): Promise<boolean> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }


  /**
   * Simple call with the configuration data needed to instantiate a new PKAddPaymentPassViewController object.
   * @param {cardData} data
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  startAddPaymentPass(data: CardData): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }


  /**
   * Simple call contains the card data needed to add a card to Apple Pay.
   * @param {encryptedCardData} data
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  completeAddPaymentPass(data: EncryptedCardData): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}

