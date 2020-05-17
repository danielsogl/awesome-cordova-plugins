import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export class JumioNetverifyConfig {
  /**
   * Enable ID verification
   */
  enableVerification: boolean;

  /**
   * Specify an URL for individual transactions
   */
  callbackUrl: string;

  /**
   * Enable face match during the ID verification for a specific transaction
   */
  enableIdentityVerification: boolean;

  /**
   * Specify the issuing country (ISO 3166-1 alpha-3 country code)
   */
  preselectedCountry: string;

  /**
   * Allows you to identify the scan (max. 100 characters)
   */
  customerInternalReference: string;

  /**
   * Use this option to identify the scan in your reports (max. 100 characters)
   */
  reportingCriteria: string;

  /**
   * Set a customer identifier (max. 100 characters)
   */
  userReference: string;

  /**
   * Send debug information to Jumio.
   */
  sendDebugInfoToJumio: boolean;

  /**
   * Limit data extraction to be done on device only
   */
  dataExtractionOnMobileOnly: boolean;

  /**
   * Which camera is used by default. Can be FRONT or BACK.
   */
  cameraPosition: string;

  /**
   * Which types of document variants are available. Can be PAPER or PLASTIC
   */
  preselectedDocumentVariant: string;

  /**
   * An array of accepted document types: Available document types: PASSPORT, DRIVER_LICENSE, IDENTITY_CARD, VISA
   */
  documentTypes: string[];

  /**
   * Enables Jumio Screening. Can be ENABLED, DISABLED or DEFAULT (when not specified reverts to DEFAULT)
   */
  enableWatchlistScreening: string;

  /**
   * Specifies specific profile of watchlist
   */
  watchlistSearchProfile: string;

  constructor(config?: {
    enableVerification?: boolean;
    callbackUrl?: string;
    enableIdentityVerification?: boolean;
    preselectedCountry?: string;
    customerInternalReference?: string;
    reportingCriteria?: string;
    userReference?: string;
    sendDebugInfoToJumio?: boolean;
    dataExtractionOnMobileOnly?: boolean;
    cameraPosition?: string;
    preselectedDocumentVariant?: string;
    documentTypes?: string[];
    enableWatchlistScreening?: string;
    watchlistSearchProfile?: string;
  }) {
    if (config) {
      Object.assign(this, config);
    }
  }
}

export class JumioDocVerificationConfig {
  /**
   * See the list at https://github.com/Jumio/mobile-cordova
   */
  type: string;

  /**
   * Set a customer identifier (max. 100 characters)
   */
  userReference: string;

  /**
   * Set the country (ISO-3166-1 alpha-3 code)
   */
  country: string;

  /**
   * Allows you to identify the scan (max. 100 characters)
   */
  customerInternalReference: string;

  /**
   * Use this option to identify the scan in your reports (max. 100 characters)
   */
  reportingCriteria: string;

  /**
   * Specify an URL for individual transactions
   */
  callbackUrl: string;

  /**
   * Override the document label on the help screen
   */
  documentName: string;

  /**
   * Set your custom document code (set in the merchant backend under "Settings" - "Multi Documents" - "Custom"
   */
  customDocumentCode: string;

  /**
   * Which camera is used by default. Can be FRONT or BACK.
   */
  cameraPosition: string;

  /**
   * Enable/disable data extraction for documents
   */
  enableExtraction: boolean;

  constructor(config?: {
    type: string;
    userReference: string;
    country: string;
    customerInternalReference: string;
    reportingCriteria?: string;
    callbackUrl?: string;
    documentName?: string;
    customDocumentCode?: string;
    cameraPosition?: string;
    enableExtraction?: boolean;
  }) {
    if (config) {
      Object.assign(this, config);
    }
  }
}

class JumioAuthenticationConfig {
  /**
   * The reference of the enrollment scan to authenticate for
   */
  enrollmentTransactionReference: string;
  /**
   * The reference of the authentication scan to authenticate for
   */
  authenticationTransactionReference: string;
  /**
   * Set a customer identifier (max. 100 characters)
   */
  userReference: string;
  /**
   * Specify an URL for callback
   */
  callbackUrl: string;

  constructor(config?: {
    enrollmentTransactionReference: string;
    authenticationTransactionReference: string;
    userReference: string;
    callbackUrl?: string;
  }) {
    if (config) {
      Object.assign(this, config);
    }
  }
}

class BAMConfig {
  cardHolderNameRequired: boolean;
  sortCodeAndAccountNumberRequired: boolean;
  expiryRequired: boolean;
  cvvRequired: boolean;
  expiryEditable: boolean;
  cardHolderNameEditable: boolean;
  /**
   * Overwrite your specified reporting criteria to identify each scan attempt in your reports (max. 100 characters)
   */
  merchantReportingCriteria: string;
  vibrationEffectEnabled: boolean;
  enableFlashOnScanStart: boolean;
  cardNumberMaskingEnabled: boolean;
  /**
   *  In your Jumio merchant backend on the "Settings" page under "API credentials" you can find your Offline token. In case you use your
   *  offline token, you must not set the API token and secret
   */
  offlineToken: string;
  /**
   * Which camera is used by default. Can be FRONT or BACK.
   */
  cameraPosition: string;
  /**
   * An array of accepted card types. Available card types: VISA, MASTER_CARD, AMERICAN_EXPRESS, CHINA_UNIONPAY, DINERS_CLUB, DISCOVER, JCB
   */
  cardTypes: string[];

  constructor(config?: {
    cardHolderNameRequired?: boolean;
    sortCodeAndAccountNumberRequired?: boolean;
    expiryRequired?: boolean;
    cvvRequired?: boolean;
    expiryEditable?: boolean;
    cardHolderNameEditable?: boolean;
    merchantReportingCriteria?: string;
    vibrationEffectEnabled?: boolean;
    enableFlashOnScanStart?: boolean;
    cardNumberMaskingEnabled?: boolean;
    offlineToken?: string;
    cameraPosition?: string;
    cardTypes?: string[];
  }) {
    if (config) {
      Object.assign(this, config);
    }
  }
}

export class NetverifyDocumentData {
  /**
   * Jumio unique scan reference ID
   */
  scanReference: string;
  /**
   * Country of issue as (ISO 3166-1 alpha-3) country code
   */
  issuingCountry: string;
  idNumber: string;
  firstName: string;
  lastName: string;
  /**
   * Date of Birth (GMT)
   */
  dob: Date;
  /**
   * Country of origin as (ISO 3166-1 alpha-3) country code
   */
  selectedCountry: string;
  issuingDate: Date; // GMT
  expiryDate: Date; // GMT
  /**
   * MRZ, OCR, BARCODE, BARCODE_OCR or NONE
   */
  extractionMethod: string;
  /**
   * PASSPORT, DRIVER_LICENSE, IDENTITY_CARD or VISA
   */
  selectedDocumentType: string;
  /**
   * m, f or x (M, F or X iOS)
   */
  gender: string;
  /**
   * maxlength 3, Country of origin as (ISO 3166-1 alpha-3) country code
   */
  originatingCountry: string;
  /**
   * maxlength 64, Street name
   */
  addressLine: string;
  /**
   * maxlength 64, City
   */
  city: string;
  /**
   * maxlength 3, Last three characters of ISO 3166-2:US state code
   */
  subdivision: string;
  /**
   * maxlength 15, Postal code
   */
  postCode: string;
  mrzData: MRZData;
  /**
   * maxlength 50, Optional field of MRZ line 1
   */
  optionalData1: string;
  /**
   * maxlength 50, Optional field of MRZ line 2
   */
  optionalData2: string;
  /**
   * maxlength 255, Place of Birth
   */
  placeOfBirth: string;
}

export class MRZData {
  /**
   * Max length 8, MRP, TD1, TD2, CNIS, MRVA, MRVB or UNKNOWN
   */
  format: string;
  /**
   * Max length 50, MRZ line 1
   */
  line1: string;
  /**
   * Max length 50, MRZ line 2
   */
  line2: string;
  /**
   * Max length 50, MRZ line 3
   */
  line3: string;
  /**
   *  True if ID number check digit is valid, otherwise false
   */
  idNumberValid: boolean;
  /**
   *  True if date of birth check digit is valid, otherwise false
   */
  dobValid: boolean;
  /**
   *  True if date of expiry check digit is valid or not available, otherwise false
   */
  expiryDateValid: boolean;
  /**
   *  True if personal number check digit is valid or not available, otherwise false
   */
  personalNumberValid: boolean;
  /**
   *  True if composite check digit is valid, otherwise false
   */
  compositeValid: boolean;
}

export class BAMCardInformation {
  /**
   * maxlength 16, VISA, MASTER_CARD, AMERICAN_EXPRESS, CHINA_UNIONPAY, DINERS_CLUB, DISCOVER, JCB or STARBUCKS
   */
  cardType: string;
  /**
   * maxlength 16, Full credit card number
   */
  cardNumber: string;
  /**
   * maxlength 19, Grouped credit card number
   */
  cardNumberGrouped: string;
  /**
   * maxlength 19, First 6 and last 4 digits of the grouped credit card number, other digits are masked with "X"
   */
  cardNumberMasked: string;
  /**
   * maxlength 2, Month card expires if enabled and readable
   */
  cardExpiryMonth: string;
  /**
   * maxlength 2, Year card expires if enabled and readable
   */
  CardExpiryYear: string;
  /**
   * maxlength 5, Date card expires in the format MM/yy if enabled and readable
   */
  cardExpiryDate: string;
  /**
   * maxlength 4, Entered CVV if enabled
   */
  cardCVV: string;
  /**
   * maxlength 100, Name of the card holder in capital letters if enabled and readable, or as entered if editable
   */
  cardHolderName: string;
  /**
   * maxlength 8, Sort code in the format xx-xx-xx or xxxxxx if enabled, available and readable
   */
  cardSortCode: string;
  /**
   * maxlength 8, Account number if enabled, available and readable
   */
  cardAccountNumber: string;
  /**
   * True if sort code valid, otherwise false
   */
  cardSortCodeValid: boolean;
  /**
   * True if account number code valid, otherwise false
   */
  cardAccountNumberValid: boolean;
}

/**
 * @name Jumio
 * @description Check out [example with Angular 9.1 & Capacitor 2.1](https://github.com/zendigital/jumio-ionic-demo)
 *
 * [Platform Customization](https://github.com/Jumio/mobile-cordova#customization) is possible
 *
 * Original source: [Jumio mobile-cordova](https://github.com/Jumio/mobile-cordova) Plugin for Apache Cordova
 * @usage
 * ```typescript
 * import {
 *   Jumio,
 *   JumioNetverifyConfig,
 *   JumioDocVerificationConfig,
 *   NetverifyDocumentData
 *   DocVerificationDocumentData
 * } from '@ionic-native/jumio/ngx';
 *
 *
 * constructor(private jumio: Jumio) { }
 *
 * ...
 *
 * this.jumio.initNetverify("API_TOKEN", "API_SECRET", "US", {
 *   requireVerification: false,
 *   userReference: "USER_REFERENCE",
 *   preselectedCountry: "USA",
 *   cameraPosition: "BACK",
 *   documentTypes: ["DRIVER_LICENSE", "PASSPORT", "IDENTITY_CARD", "VISA"],
 *   enableWatchlistScreening: "ENABLED",
 *   watchlistSearchProfile: "YOUR_PROFILE_NAME"
 * });
 *
 * let documentData: NetverifyDocumentData = await this.jumio.startNetverify();
 *
 * ```
 */
@Plugin({
  pluginName: 'Jumio',
  plugin: 'jumio-cordova',
  pluginRef: 'Jumio',
  repo: 'https://github.com/danielzen/jumio-cordova',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Jumio extends IonicNativePlugin {
  /**
   * Initialize Netverify
   * @param apiToken Specifies the API token of the Jumio merchant account
   * @param apiSecret Specifies the API Secret of the Jumio merchant account
   * @param dataCenter Specifies the data center of the Jumio server (US, EU or SG)
   * @param netverifyConfig JumioNetverifyConfig
   * @return Returns a promise that resolves when something happens
   */
  @Cordova()
  initNetverify(
    apiToken: string,
    apiSecret: string,
    dataCenter: string,
    netverifyConfig: JumioNetverifyConfig
  ): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Start Netverify
   * @return Returns a promise that resolves to Netverify document data
   */
  @Cordova({ callbackOrder: 'reverse' })
  startNetverify(): Promise<NetverifyDocumentData> {
    return;
  }

  /**
   * Initialize DocumentVerification
   * @param apiToken Specifies the API token of the Jumio merchant account
   * @param apiSecret Specifies the API Secret of the Jumio merchant account
   * @param dataCenter Specifies the data center of the Jumio server (US, EU or SG)
   * @param docVerificationConfig JumioDocVerificationConfig
   * @return Returns a promise that resolves when something happens
   */
  @Cordova()
  initDocumentVerification(
    apiToken: string,
    apiSecret: string,
    dataCenter: string,
    docVerificationConfig: JumioDocVerificationConfig
  ): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Start DocumentVerification
   * @return Returns a promise that resolves to DocVerification document data
   */
  @Cordova({ callbackOrder: 'reverse' })
  startDocumentVerification(): Promise<any> {
    return;
  }

  /**
   * Initialize Authentication
   * @param apiToken Specifies the API token of the Jumio merchant account
   * @param apiSecret Specifies the API Secret of the Jumio merchant account
   * @param dataCenter Specifies the data center of the Jumio server (US, EU or SG)
   * @param authenticationConfig JumioAuthenticationConfig
   * @return Returns a promise that resolves when something happens
   */
  @Cordova()
  initAuthentication(
    apiToken: string,
    apiSecret: string,
    dataCenter: string,
    authenticationConfig: JumioAuthenticationConfig
  ): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Start Authentication
   * @return Returns a promise that resolves when something happens
   */
  @Cordova({ callbackOrder: 'reverse' })
  startAuthentication(): Promise<any> {
    return;
  }

  /**
   * Initialize BAM
   * @param apiToken Specifies the API token of the Jumio merchant account
   * @param apiSecret Specifies the API Secret of the Jumio merchant account
   * @param dataCenter Specifies the data center of the Jumio server (US, EU or SG)
   * @param bamConfig BAMConfig
   * @return Returns a promise that resolves when something happens
   */
  @Cordova()
  initBAM(apiToken: string, apiSecret: string, dataCenter: string, bamConfig: BAMConfig): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Start BAM
   * @return Returns a promise that resolves to BAMCardInformation
   */
  @Cordova({ callbackOrder: 'reverse' })
  startBAM(): Promise<BAMCardInformation> {
    return;
  }
}
