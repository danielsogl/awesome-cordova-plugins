import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export interface EncryptedCardData {
  activationData: string;
  encryptedPassData: string;
  wrappedKey: string;
}

export interface SignatureCertificatesData {
  certificateSubCA: string;
  certificateLeaf: string;
  nonce: string;
  nonceSignature: string;
}

export interface CardData {
  cardholderName: string;
  primaryAccountNumberSuffix: string;
  localizedDescription?: string;
  paymentNetwork?: string;
}

export interface EligibilityData {
  isInWallet: boolean;
  isInWatch: boolean;
  FPANID: string;
}

export interface WatchExistData {
  isWatchPaired: boolean;
}

export interface CardPrimarySuffixData {
  primaryAccountSuffix: string;
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
 *
 * ...
 *
 *
 * // Simple call to determine if the current device supports Apple Pay and has a supported card installed.
 * this.appleWallet.isAvailable()
 *  .then((res: boolean) => {
 *    // Expect res to be boolean
 *   })
 *  .catch((err) => {
 *    // Catch {{err}} here
 *  });
 *
 *
 * ...
 *
 *
 * // Simple call to check existence and ellibagility to add a card
 * this.appleWallet.isCardExistInWalletOrWatch(data: CardPrimarySuffixData)
 *  .then((res: EligibilityData) => {
 *    // object contains boolean values that ensure that card is already exists in wallet or paired-watch
 *   })
 *  .catch((err) => {
 *    // Catch {{err}} here
 *  });
 *
 *
 * ...
 *
 *
 * // Simple call to check out if there is any paired Watches so that you can toggle visibility of 'Add to Watch' button
 * this.appleWallet.isPairedWatchExist()
 *  .then((res: WatchExistData) => {
 *    // object contains boolean value that ensure that there is already a paired Watch
 *   })
 *  .catch((err) => {
 *    // Catch {{err}} here
 *  });
 *
 *
 * ...
 *
 *
 * // Simple call with the configuration data needed to instantiate a new PKAddPaymentPassViewController object.
 * // This method provides the data needed to create a request to add your payment pass (credit/debit card). After a successful callback, pass the certificate chain to your issuer server-side using our callback delegate method `AppleWallet.completeAddPaymentPass`. The issuer server-side should returns an encrypted JSON payload containing the encrypted card data, which is required to be get the final response
 *
 * this.appleWallet.startAddPaymentPass(data: cardData)
 *  .then((res: SignatureCertificatesData) => {
 *    // User proceed and successfully asked to add card to his wallet
 *    // Use the callback response JSON payload to complete addition process
 *   })
 *  .catch((err) => {
 *    // Catch {{err}} here
 *  });
 *
 *
 * ...
 *
 *
 * this.appleWallet.completeAddPaymentPass(data: encryptedCardData)
 *  .then((res: string) => {
 *    // Expect res to be string either 'success' or 'error'
 *   })
 *  .catch((err) => {
 *    // Catch {{err}} here
 *    // Error and can not add the card, or something wrong happend
 *    // PKAddPaymentPassViewController will be dismissed
 *  });
 *
 * ```
 * @Interfaces
 * EncryptedCardData
 * SignatureCertificatesData
 * CardData
 * EligibilityData
 * WatchExistData
 * CardPrimarySuffixData
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
   * Simple call to determine if the current device supports Apple Pay and has a supported card installed.
   * @return {Promise<boolean>}
   */
  @Cordova()
  isAvailable(): Promise<boolean> {
    return;
  }

  /**
   * Simple call to check existence and ellibagility to add a card
   * @param {CardPrimarySuffixData} data
   * @return {Promise<EligibilityData>}
   */
  @Cordova()
  isCardExistInWalletOrWatch(data: CardPrimarySuffixData): Promise<EligibilityData> {
    return;
  }

  /**
   * Simple call to check out if there is any paired Watches so that you can toggle visibility of 'Add to Watch' button
   * @return {Promise<WatchExistData>}
   */
  @Cordova()
  isPairedWatchExist(): Promise<WatchExistData> {
    return;
  }

  /**
   * Simple call with the configuration data needed to instantiate a new PKAddPaymentPassViewController object.
   * @param {cardData} data
   * @return {Promise<SignatureCertificatesData>}
   */
  @Cordova()
  startAddPaymentPass(data: CardData): Promise<SignatureCertificatesData> {
    return;
  }

  /**
   * Simple completion handler that takes encrypted card data returned from your server side, in order to get the final response from Apple to know if the card is added succesfully or not.
   * @param {encryptedCardData} data
   * @return {Promise<string>}
   */
  @Cordova()
  completeAddPaymentPass(data: EncryptedCardData): Promise<string> {
    return;
  }
}
