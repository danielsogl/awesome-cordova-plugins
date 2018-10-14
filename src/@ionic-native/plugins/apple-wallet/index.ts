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
  paymentNetwork?: string;
}

/**
 * @name Apple Wallet
 * @description
 * A Cordova plugin that enables users from Add Payment Cards to their Apple Wallet.
 *
 * @usage
 * ```typescript
 * import { AppleWallet } from '@ionic-native/apple-wallet';
 *
 *
 * constructor(private appleWallet: AppleWallet) { }
 *
 *
 * ...
 *
 *
 * // Simple call to check whether the app can add cards to Apple Pay.
 * this.appleWallet.available()
 *  .then((res) => {
 *    // Apple Wallet is enabled and a supported card is setup. Expect:
 *    // boolean value, true or false
 *   })
 *  .catch((message) => {
 *    // Error message while trying to know if device is able to add to wallet
 *  });
 *
 *
 * ...
 *
 *
 * // Simple call with the configuration data needed to instantiate a new PKAddPaymentPassViewController object.
 * // The encryption scheme, cardholder name, and primary account suffix are required for configuration.
 * // The configuration information is used for setup and display only. It should not contain any sensitive information.
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
 *    // User proceed and successfully asked to add card to his wallet
 *    // Use the callback response JSON payload to complete addition process
 *   })
 *  .catch((err) => {
 *    // Error or user cancelled.
 *  });
 *
 * // You should expect the callback success response to be as follow
 *
 *  // {
 *  //  data: {
 *  //    "certificateSubCA": "Base64 string represents certificateSubCA",
 *  //    "certificateLeaf":" Base64 string represents certificateLeaf"
 *  //    "nonce": "Base64 string represents nonce",
 *  //    "nonceSignature": "Base64 string represents nonceSignature",
 *  //   }
 *  // }
 *
 * // This method provides the data needed to create an add payment request.
 * // Pass the certificate chain to the issuer server. The server returns an encrypted JSON file containing the card data.
 * // After you receive the encrypted data, pass it to completeAddPaymentPass method
 *
 *
 * ...
 *
 *
 * let data: encryptedCardData = {
 *    activationData: 'encoded Base64 activationData from your server',
 *    encryptedPassData: 'encoded Base64 encryptedPassData from your server',
 *    wrappedKey: 'encoded Base64 wrappedKey from your server',
 *  }
 *
 * this.appleWallet.encryptedCardData(data: encryptedCardData)
 *  .then((res) => {
 *    // callback success response means card has been added successfully,
 *    // PKAddPaymentPassViewController will be dismissed
 *   })
 *  .catch((err) => {
 *    // Error and can not add the card, or something wrong happend
 *    // PKAddPaymentPassViewController will be dismissed
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
