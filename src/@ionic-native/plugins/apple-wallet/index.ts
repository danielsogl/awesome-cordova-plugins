import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

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
 * A Cordova plugin that enables users from Add Payment Cards to their Apple Wallet.
 *
 * @usage
 * ```typescript
 * import { AppleWallet } from '@ionic-native/apple-wallet/ngx';
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
 * @Interfaces
 * EncryptedCardData
 * CardData
 */
@Plugin({
  pluginName: 'AppleWallet',
  plugin: 'cordova-apple-wallet',
  pluginRef: 'AppleWallet',
  repo: 'https://github.com/tomavic/cordova-apple-wallet',
  platforms: ['iOS']
})
@Injectable()
export class AppleWallet extends IonicNativePlugin {
  /**
   * Detects if the current device supports Apple Wallet
   * @return {Promise<boolean>} Returns a promise
   */
  @Cordova()
  available(): Promise<boolean> {
    return;
  }

  /**
   * Simple call with the configuration data needed to instantiate a new PKAddPaymentPassViewController object.
   * @param {cardData} data
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  startAddPaymentPass(data: CardData): Promise<any> {
    return;
  }

  /**
   * Simple call contains the card data needed to add a card to Apple Pay.
   * @param {encryptedCardData} data
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  completeAddPaymentPass(data: EncryptedCardData): Promise<any> {
    return;
  }
}
