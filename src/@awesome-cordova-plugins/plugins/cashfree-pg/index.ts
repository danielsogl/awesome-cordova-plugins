import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
export enum CFEnvironment {
  PRODUCTION = 'PRODUCTION',
  SANDBOX = 'SANDBOX',
}

export class CFSession {
  payment_session_id: string;
  orderID: string;
  environment: string;

  constructor(sessionID: string, orderID: string, environment: CFEnvironment) {
    if (sessionID === null || sessionID.trim() === '') {
      throw new Error('sessionID cannot be empty');
    }
    if (orderID === null || orderID.trim() === '') {
      throw new Error('orderID cannot be empty');
    }
    if (environment === null || environment.trim() === '') {
      throw new Error('environment cannot be empty');
    }
    this.payment_session_id = sessionID;
    this.orderID = orderID;
    this.environment = CFEnvironment[environment];
  }
}

export enum CFPaymentModes {
  CARD = 'CARD',
  UPI = 'UPI',
  NB = 'NB',
  WALLET = 'WALLET',
  EMI = 'EMI',
  PAY_LATER = 'PAY_LATER',
  PAYPAL = 'PAYPAL',
}

export interface CFPaymentComponent {
  hashset: Set<CFPaymentModes>;
}

export class CFPaymentComponentBuilder {
  private hashset: Set<CFPaymentModes> = new Set<CFPaymentModes>();

  private enableAllModes() {
    this.hashset.add(CFPaymentModes.CARD);
    this.hashset.add(CFPaymentModes.UPI);
    this.hashset.add(CFPaymentModes.NB);
    this.hashset.add(CFPaymentModes.WALLET);
    this.hashset.add(CFPaymentModes.EMI);
    this.hashset.add(CFPaymentModes.PAY_LATER);
    this.hashset.add(CFPaymentModes.PAYPAL);
  }

  build(): CFPaymentComponent {
    if (this.hashset.size === 0) {
      this.enableAllModes();
    }
    return {
      hashset: this.hashset,
    };
  }

  add(cfPaymentModes: CFPaymentModes) {
    this.hashset.add(cfPaymentModes);
    return this;
  }
}

export interface CFTheme {
  navigationBarBackgroundColor: string;
  navigationBarTextColor: string;
  buttonBackgroundColor: string;
  buttonTextColor: string;
  backgroundColor: string;
  primaryTextColor: string;
  secondaryTextColor: string;
}

export class CFThemeBuilder {
  private navigationBarBackgroundColor = '#6A3FD3';
  private navigationBarTextColor = '#FFFFFF';
  private buttonBackgroundColor = '#6A3FD3';
  private buttonTextColor = '#FFFFFF';
  private backgroundColor = '#FFFFFF';
  private primaryTextColor = '#11385b';
  private secondaryTextColor = '#808080';

  setNavigationBarBackgroundColor(value: string) {
    this.navigationBarBackgroundColor = value;
    return this;
  }

  setNavigationBarTextColor(value: string) {
    this.navigationBarTextColor = value;
    return this;
  }

  setButtonBackgroundColor(value: string) {
    this.buttonBackgroundColor = value;
    return this;
  }

  setButtonTextColor(value: string) {
    this.buttonTextColor = value;
    return this;
  }

  setPrimaryTextColor(value: string) {
    this.primaryTextColor = value;
    return this;
  }

  setSecondaryTextColor(value: string) {
    this.secondaryTextColor = value;
    return this;
  }

  setBackgroundColor(value: string) {
    this.backgroundColor = value;
    return this;
  }

  build(): CFTheme {
    return {
      navigationBarBackgroundColor: this.navigationBarBackgroundColor,
      navigationBarTextColor: this.navigationBarTextColor,
      buttonBackgroundColor: this.buttonBackgroundColor,
      backgroundColor: this.backgroundColor,
      buttonTextColor: this.buttonTextColor,
      primaryTextColor: this.primaryTextColor,
      secondaryTextColor: this.secondaryTextColor,
    };
  }
}

export type CFWebTheme = CFTheme;

export class CFWebThemeBuilder {
  private navigationBarBackgroundColor = '#6A3FD3';
  private navigationBarTextColor = '#FFFFFF';

  setNavigationBarBackgroundColor(value: string) {
    this.navigationBarBackgroundColor = value;
    return this;
  }

  setNavigationBarTextColor(value: string) {
    this.navigationBarTextColor = value;
    return this;
  }

  build(): CFWebTheme {
    const cfTheme = new CFThemeBuilder().build();
    return {
      buttonBackgroundColor: cfTheme.buttonBackgroundColor,
      buttonTextColor: cfTheme.buttonTextColor,
      navigationBarBackgroundColor: this.navigationBarBackgroundColor,
      navigationBarTextColor: this.navigationBarBackgroundColor,
      secondaryTextColor: cfTheme.secondaryTextColor,
      backgroundColor: cfTheme.backgroundColor,
      primaryTextColor: cfTheme.buttonTextColor,
    };
  }
}

export interface CheckoutPayment {
  version: string;
}

export class CFDropCheckoutPayment implements CheckoutPayment {
  private readonly session: CFSession;
  private readonly components: string[] = Array.from(new CFPaymentComponentBuilder().build().hashset);
  private readonly theme: CFTheme = new CFThemeBuilder().build();
  version: string;

  constructor(session: CFSession, components: CFPaymentComponent | null, theme: CFTheme | null) {
    this.session = session;
    if (components !== null) {
      this.components = Array.from(components.hashset);
    }
    if (theme !== null) {
      this.theme = theme;
    }
  }

  getSession() {
    return this.session;
  }

  getComponents() {
    return this.components;
  }

  getTheme() {
    return this.theme;
  }
}

export class CFWebCheckoutPayment implements CheckoutPayment {
  private readonly session: CFSession;
  private readonly theme: CFWebTheme = new CFWebThemeBuilder().build();
  version: string;

  constructor(session: CFSession, theme: CFWebTheme | null) {
    this.session = session;
    if (theme !== null) {
      this.theme = theme;
    }
  }

  getSession() {
    return this.session;
  }

  getTheme() {
    return this.theme;
  }
}

export class CFUPIIntentCheckoutPayment implements CheckoutPayment {
  private readonly session: CFSession;
  private readonly theme: CFTheme = new CFThemeBuilder().build();
  version: string;

  constructor(session: CFSession, theme: CFTheme | null) {
    this.session = session;
    if (theme !== null) {
      this.theme = theme;
    }
  }

  getSession() {
    return this.session;
  }

  getTheme() {
    return this.theme;
  }
}

interface CFResult {
  orderID: string;
}

interface CFError {
  orderID: string;
  status: string;
  message: string;
  code: string;
  type: string;
}
interface CFResult {
  orderID: string;
}
export interface CFCallback {
  onVerify: (result: CFResult) => void;
  onError: (error: CFError) => void;
}

@Plugin({
  pluginName: 'CFPaymentGateway',
  plugin: 'cordova-plugin-cashfree-pg',
  pluginRef: 'CFPaymentGateway',
  repo: 'https://github.com/cashfree/cordova-plugin-cashfree',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class CFPaymentGateway extends AwesomeCordovaNativePlugin {
  /**
   * Initiate Drop Payment.
   * @param {CFDropCheckoutPayment} [dropObject] dropPaymentObject information
   */
  @Cordova()
  doDropPayment(dropObject: CFDropCheckoutPayment) {
    return;
  }

  /**
   * Initiate Web Checkout Payment.
   * @param {CFWebCheckoutPayment} [webCheckoutPayment] webCheckoutPaymentObject information
   */
  @Cordova()
  doWebCheckoutPayment(webCheckoutPayment: CFWebCheckoutPayment) {
    return;
  }

  /**
   * Initiate UPI Checkout Payment.
   * @param {CFUPIIntentCheckoutPayment} [upiCheckoutPayment] webCheckoutPaymentObject information
   */
  @Cordova()
  doUPIPayment(upiCheckoutPayment: CFUPIIntentCheckoutPayment) {
    return;
  }

  /**
   * Set Callback.
   * @param {CFCallback} [cfCallback] callbacks for payment.
   */
  @Cordova()
  setCallback(cfCallback: CFCallback) {
    return;
  }
}
