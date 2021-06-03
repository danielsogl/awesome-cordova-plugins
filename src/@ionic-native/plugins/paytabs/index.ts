import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export enum TokeniseType {
    none = "none",
    merchantMandatory = "merchantMandatory",
    userMandatory = "userMandatory",
    userOptinoal = "userOptinoal",
}

export enum TokeniseFromat {
    none = "1", 
    hex32 = "2", 
    alphaNum20 = "3", 
    digit22 = "3", 
    digit16 = "5", 
    alphaNum32 = "6"
}

export enum TransactionType {
    sale = "sale", 
    authorize = "auth"
}

export enum TransactionClass {
    ecom = "ecom", 
    recurring = "recur"
}

export enum AlternativePaymentMethod {
    unionPay = "unionpay", 
    stcPay = "stcpay", 
    valu = "valu", 
    meezaQR = "meezaqr", 
    omannet = "omannet", 
    knetCredit = "knetcredit", 
    knetDebit = "knetdebit", 
    fawry = "fawry"
}

export interface PaymentSDKBillingDetails {
    name?: string;
    email?: string;
    phone?: string;
    addressLine?: string;
    city?: string;
    state?: string;
    countryCode?: string;
    zip? : string;
} 

export interface PaymentSDKShippingDetails {
    name?: string;
    email?: string;
    phone?: string;
    addressLine?: string;
    city?: string;
    state?: string;
    countryCode?: string;
    zip? : string;
} 
export interface PaymentSDKTheme {
    primaryColor?: string;
    primaryFontColor?: string;
    primaryFont?: string;
    secondaryColor?: string;
    secondaryFontColor?: string;
    secondaryFont?: string;
    strokeColor?: string;
    strokeThinckness?: number;
    inputsCornerRadius?: number;
    buttonColor?: string;
    buttonFontColor?: string;
    buttonFont?: string;
    titleFontColor?: string;
    titleFont?: string;
    backgroundColor?: string;
    placeholderColor?: string;
} 

export interface PaymentSDKConfiguration {
    profileID: string;
    serverKey: string;
    clientKey: string;
    transactionType?: string;
    transactionClass?: string;
    cartID: string;
    currency: string;
    amount: number;
    cartDescription: string;
    languageCode?: string;
    forceShippingInfo?: boolean;
    showBillingInfo?: boolean;
    showShippingInfo?: boolean;
    billingDetails?: PaymentSDKBillingDetails;
    shippingDetails?: PaymentSDKShippingDetails;
    merchantCountryCode: string;
    screenTitle?: string;
    merchantName?: string;
    serverIP?: string;
    tokeniseType?: string;
    tokenFormat?: string;
    hideCardScanner?: string;
    merchantApplePayIdentifier?: string;
    simplifyApplePayValidation?: string;
    supportedApplePayNetworks?: [string];
    token?: string;
    transactionReference?: string;
    samsungToken?: string;
    theme?: PaymentSDKTheme;
    alternativePaymentMethods?: [string];
}

@Plugin({
  pluginName: 'PayTabs',
  plugin: 'com.paytabs.cordova.plugin',
  pluginRef: 'com.paytabs.cordova.plugin',
  repo: 'https://github.com/paytabscom/paytabs-cordova',
  platforms: ['Android', 'iOS'],
})

@Injectable()
export class PayTabs extends IonicNativePlugin {
    @Cordova()
    startCardPayment(configuration: PaymentSDKConfiguration): Promise<void> {
        return;
    }

    @Cordova()
    startApplePayPayment(configuration: PaymentSDKConfiguration): Promise<void> {
        return;
    }

    @Cordova()
    startAlternativePaymentMethod(configuration: PaymentSDKConfiguration): Promise<void> {
        return;
    }
}