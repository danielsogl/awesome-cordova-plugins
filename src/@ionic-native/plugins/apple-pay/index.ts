import {Injectable} from '@angular/core';
import {
  Plugin,
  Cordova,
  IonicNativePlugin
} from '@ionic-native/core';

export type IMakePayments = 'This device can make payments and has a supported card' | 'This device cannot make payments.' | 'This device can make payments but has no supported cards';
export type IShippingType = 'shipping' | 'delivery' | 'store' | 'service';
export type IBillingRequirement =  'none' | 'all' | 'postcode' | 'name' | 'email' | 'phone';
export type ITransactionStatus = 'success' | 'failure' | 'invalid-billing-address' | 'invalid-shipping-address' | 'invalid-shipping-contact' | 'require-pin' | 'incorrect-pin' | 'locked-pin';

export interface IPaymentResponse {
  shippingAddressState?: string;
  shippingCountry?: string;
  shippingISOCountryCode?: string;
  billingAddressCity?: string;
  billingISOCountryCode?: string;
  shippingNameLast?: string;
  paymentData: string;
  shippingNameFirst?: string;
  billingAddressState?: string;
  billingAddressStreet?: string;
  billingNameFirst?: string;
  billingPostalCode?: string;
  shippingPostalCode?: string;
  shippingAddressStreet?: string;
  billingNameLast?: string;
  billingSupplementarySubLocality?: string;
  billingCountry?: string;
  shippingAddressCity?: string;
  shippingSupplementarySubLocality?: string;
  transactionIdentifier: string;
  paymentMethodDisplayName?: string;
  paymentMethodNetwork?: string;
  paymentMethodTypeCard?: string;
}

export interface IOrderItem {
  label: string;
  amount: number;
}
export interface  IShippingMethod {
  identifier: string;
  label: string;
  detail: string;
  amount: number;
}

export interface IOrder {
  items: IOrderItem[];
  shippingMethods?: IShippingMethod[];
  merchantIdentifier: string;
  currencyCode: string;
  countryCode: string;
  billingAddressRequirement: IBillingRequirement;
  shippingAddressRequirement: IBillingRequirement;
  shippingType: IShippingType;
}


/**
 * @name Apple Pay
 * @description
 * A dependency free Cordova plugin to provide Apple Pay functionality.
 *
 * @usage
 * ```typescript
 * import { ApplePay } from '@ionic-native/apple-pay';
 *
 *
 * constructor(private applePay: ApplePay) { }
 *
 * ...
 *
 *
 * ApplePay.makePaymentRequest(
 *  {
 *        items: [
 *            {
 *                label: '3 x Basket Items',
 *                amount: 49.99
 *            },
 *            {
 *                label: 'Next Day Delivery',
 *                amount: 3.99
 *            },
 *                    {
 *                label: 'My Fashion Company',
 *                amount: 53.98
 *            }
 *        ],
 *        shippingMethods: [
 *            {
 *                identifier: 'NextDay',
 *                label: 'NextDay',
 *                detail: 'Arrives tomorrow by 5pm.',
 *                amount: 3.99
 *            },
 *            {
 *                identifier: 'Standard',
 *                label: 'Standard',
 *                detail: 'Arrive by Friday.',
 *                amount: 4.99
 *            },
 *            {
 *                identifier: 'SaturdayDelivery',
 *                label: 'Saturday',
 *                detail: 'Arrive by 5pm this Saturday.',
 *                amount: 6.99
 *            }
 *        ],
 *        merchantIdentifier: 'merchant.apple.test',
 *        currencyCode: 'GBP',
 *        countryCode: 'GB',
 *        billingAddressRequirement: 'none',
 *        shippingAddressRequirement: 'none',
 *        shippingType: 'shipping'
 *  })
 *  .then((paymentResponse) => {
 *         // The user has authorized the payment.
 *
 *         // Handle the token, asynchronously, i.e. pass to your merchant bank to
 *         // action the payment, then once finished, depending on the outcome:
 *
 *         // Here is an example implementation:
 *
 *         // MyPaymentProvider.authorizeApplePayToken(token.paymentData)
 *         //    .then((captureStatus) => {
 *         //        // Displays the 'done' green tick and closes the sheet.
 *         //        ApplePay.completeLastTransaction('success');
 *         //    })
 *         //    .catch((err) => {
 *         //        // Displays the 'failed' red cross.
 *         //        ApplePay.completeLastTransaction('failure');
 *         //    });
 *
 *
 *     })
 *  .catch((e) => {
 *         // Failed to open the Apple Pay sheet, or the user cancelled the payment.
 *     })
 *
 * ```
 */
@Plugin({
  pluginName: 'ApplePay',
  plugin: 'cordova-plugin-applepay',
  pluginRef: 'ApplePay',
  repo: 'https://github.com/trueflywood/cordova-plugin-applepay',
  platforms: ['iOS'],
})
@Injectable()
export class ApplePay extends IonicNativePlugin {

  /**
   * Detects if the current device supports Apple Pay and has any capable cards registered.
   * @return {Promise<IMakePayments>} Returns a promise
   *
   * @usage
   * ApplePay.canMakePayments()
   * .then((message) => {
   *      // Apple Pay is enabled and a supported card is setup. Expect:
   *      // 'This device can make payments and has a supported card'
   *  })
   * .catch((message) => {
   *      // There is an issue, examine the message to see the details, will be:
   *      // 'This device cannot make payments.''
   *      // 'This device can make payments but has no supported cards'
   *  });
   */
  @Cordova({
    otherPromise: true
  })
  canMakePayments(): Promise<IMakePayments> {
    return;
  }

  /**
   * Request a payment with Apple Pay
   * @return {Promise<IPaymentResponse>} Returns a promise that resolves when something happens
   *
   * @param order {IOrder}
   *
   * @usage
   * ApplePay.makePaymentRequest(order)
   *   .then((paymentResponse) => {
   *        // User approved payment, token generated.
   *    })
   *   .catch((message) => {
   *       // Error or user cancelled.
   *    });
   */
  @Cordova({
    otherPromise: true
  })
  makePaymentRequest(order: IOrder): Promise<IPaymentResponse> {
    return;
  }

  /**
   * Once the makePaymentRequest has been resolved successfully, the device will be waiting for a completion event.
   * This means, that the application must proceed with the token authorisation and return a success, failure,
   * or other validation error. Once this has been passed back, the Apple Pay sheet will be dismissed via an animation.
   *
   * @param complete {ITransactionStatus}
   *
   */
  @Cordova()
  completeLastTransaction(complete: ITransactionStatus): void {
  }
}
