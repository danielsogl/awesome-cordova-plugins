import { Cordova, CordovaInstance, InstanceProperty, Plugin } from './plugin';

declare var window: any,
  navigator: any;

/**
 * @private
 */
export interface IContactProperties {
  /** A globally unique identifier. */
  id?: string;
  /** The name of this Contact, suitable for display to end users. */
  displayName?: string;
  /** An object containing all components of a persons name. */
  name?: IContactName;
  /** A casual name by which to address the contact. */
  nickname?: string;
  /** An array of all the contact's phone numbers. */
  phoneNumbers?: IContactField[];
  /** An array of all the contact's email addresses. */
  emails?: IContactField[];
  /** An array of all the contact's addresses. */
  addresses?: IContactAddress[];
  /** An array of all the contact's IM addresses. */
  ims?: IContactField[];
  /** An array of all the contact's organizations. */
  organizations?: IContactOrganization[];
  /** The birthday of the contact. */
  birthday?: Date;
  /** A note about the contact. */
  note?: string;
  /** An array of the contact's photos. */
  photos?: IContactField[];
  /** An array of all the user-defined categories associated with the contact. */
  categories?: IContactField[];
  /** An array of web pages associated with the contact. */
  urls?: IContactField[];
}

/**
 * @private
 */
export class Contact implements IContactProperties {
  private _objectInstance: any;
  @InstanceProperty id: string;
  @InstanceProperty displayName: string;
  @InstanceProperty name: IContactName;
  @InstanceProperty nickname: string;
  @InstanceProperty phoneNumbers: IContactField[];
  @InstanceProperty emails: IContactField[];
  @InstanceProperty addresses: IContactAddress[];
  @InstanceProperty ims: IContactField[];
  @InstanceProperty organizations: IContactOrganization[];
  @InstanceProperty birthday: Date;
  @InstanceProperty note: string;
  @InstanceProperty photos: IContactField[];
  @InstanceProperty categories: IContactField[];
  @InstanceProperty urls: IContactField[];

  constructor() {
    this._objectInstance = navigator.contacts.create();
  }

  clone(): Contact {
    let newContact = new Contact();
    for (let prop in this) {
      if (prop === 'id') return;
      newContact[prop] = this[prop];
    }
    return newContact;
  }

  @CordovaInstance()
  remove(): Promise<any> { return; }

  @CordovaInstance()
  save(): Promise<any> { return; }
}

/**
 * @private
 */
export interface IContactError {
  /** Error code */
  code: number;
  /** Error message */
  message: string;
}

/**
 * @private
 */
export declare var ContactError: {
  new (code: number): IContactError;
  UNKNOWN_ERROR: number;
  INVALID_ARGUMENT_ERROR: number;
  TIMEOUT_ERROR: number;
  PENDING_OPERATION_ERROR: number;
  IO_ERROR: number;
  NOT_SUPPORTED_ERROR: number;
  PERMISSION_DENIED_ERROR: number
};

export interface IContactName {
  /** The complete name of the contact. */
  formatted?: string;
  /** The contact's family name. */
  familyName?: string;
  /** The contact's given name. */
  givenName?: string;
  /** The contact's middle name. */
  middleName?: string;
  /** The contact's prefix (example Mr. or Dr.) */
  honorificPrefix?: string;
  /** The contact's suffix (example Esq.). */
  honorificSuffix?: string;
}

/**
 * @private
 */
export class ContactName implements IContactName {
  private _objectInstance: any;

  constructor(formatted?: string, familyName?: string, givenName?: string, middleName?: string, honorificPrefix?: string, honorificSuffix?: string) {
    this._objectInstance = new window.ContactName(formatted, familyName, givenName, middleName, honorificPrefix, honorificSuffix);
  }

  @InstanceProperty formatted: string;
  @InstanceProperty familyName: string;
  @InstanceProperty givenName: string;
  @InstanceProperty middleName: string;
  @InstanceProperty honorificPrefix: string;
  @InstanceProperty honorificSuffix: string;
}

export interface IContactField {
  /** A string that indicates what type of field this is, home for example. */
  type: string;
  /** The value of the field, such as a phone number or email address. */
  value: string;
  /** Set to true if this ContactField contains the user's preferred value. */
  pref: boolean;
}

/**
 * @private
 */
export class ContactField implements IContactField {
  private _objectInstance: any;

  constructor(type?: string, value?: string, pref?: boolean) {
    this._objectInstance = new window.ContactField(type, value, pref);
  }

  @InstanceProperty type: string;
  @InstanceProperty value: string;
  @InstanceProperty pref: boolean;
}

export interface IContactAddress {
  /** Set to true if this ContactAddress contains the user's preferred value. */
  pref?: boolean;
  /** A string indicating what type of field this is, home for example. */
  type?: string;
  /** The full address formatted for display. */
  formatted?: string;
  /** The full street address. */
  streetAddress?: string;
  /** The city or locality. */
  locality?: string;
  /** The state or region. */
  region?: string;
  /** The zip code or postal code. */
  postalCode?: string;
  /** The country name. */
  country?: string;
}

/**
 * @private
 */
export class ContactAddress implements IContactAddress {
  private _objectInstance: any;

  constructor(pref?: boolean,
    type?: string,
    formatted?: string,
    streetAddress?: string,
    locality?: string,
    region?: string,
    postalCode?: string,
    country?: string) {
    this._objectInstance = new window.ContactAddress(pref, type, formatted, streetAddress, locality, region, postalCode, country);
  }

  /** Set to true if this ContactAddress contains the user's preferred value. */
  @InstanceProperty pref: boolean;
  /** A string indicating what type of field this is, home for example. */
  @InstanceProperty type: string;
  /** The full address formatted for display. */
  @InstanceProperty formatted: string;
  /** The full street address. */
  @InstanceProperty streetAddress: string;
  /** The city or locality. */
  @InstanceProperty locality: string;
  /** The state or region. */
  @InstanceProperty region: string;
  /** The zip code or postal code. */
  @InstanceProperty postalCode: string;
  /** The country name. */
  @InstanceProperty country: string;
}

export interface IContactOrganization {
  /** Set to true if this ContactOrganization contains the user's preferred value. */
  pref?: boolean;
  /** A string that indicates what type of field this is, home for example. */
  type?: string;
  /** The name of the organization. */
  name?: string;
  /** The department the contract works for. */
  department?: string;
  /** The contact's title at the organization. */
  title?: string;
}

/**
 * @private
 */
export class ContactOrganization implements IContactOrganization {
  private _objectInstance: any;
  constructor() {
    this._objectInstance = new window.ContactOrganization();
  }
  /** Set to true if this ContactOrganization contains the user's preferred value. */
  @InstanceProperty pref: boolean;
  /** A string that indicates what type of field this is, home for example. */
  @InstanceProperty type: string;
  /** The name of the organization. */
  @InstanceProperty name: string;
  /** The department the contract works for. */
  @InstanceProperty department: string;
  /** The contact's title at the organization. */
  @InstanceProperty title: string;
}

/** Search options to filter navigator.contacts.  */
export interface IContactFindOptions {
  /** The search string used to find navigator.contacts. */
  filter?: string;
  /** Determines if the find operation returns multiple navigator.contacts. */
  multiple?: boolean;
  /* Contact fields to be returned back. If specified, the resulting Contact object only features values for these fields. */
  desiredFields?: string[];
  /**
   * (Android only): Filters the search to only return contacts with a phone number informed.
   */
  hasPhoneNumber?: boolean;
}

/**
 * @private
 */
export class ContactFindOptions implements IContactFindOptions {
  private _objectInstance: any;

  constructor() {
    this._objectInstance = new window.ContactFindOptions();
  }

  /**
   * The search string used to find navigator.contacts. (Default: "")
   */
  @InstanceProperty filter: string;

  /**
   * Determines if the find operation returns multiple navigator.contacts. (Default: false)
   */
  @InstanceProperty multiple: boolean;

  /**
   * Contact fields to be returned back. If specified, the resulting Contact object only features values for these fields.
   */
  @InstanceProperty desiredFields: any;

  /**
   * (Android only): Filters the search to only return contacts with a phone number informed.
   */
  @InstanceProperty hasPhoneNumber: boolean;
}

/**
 * @name Contacts
 * @description
 * Access and manage Contacts on the device.
 *
 * @usage
 *
 * ```typescript
 * import { Contact } from 'ionic-native';
 *
 *
 * let contact = new Contact();
 * contact.displayName = 'Mr. Ionitron';
 * contact.save().then(
 *   () => console.log('Contact saved!', contact),
 *   (error: any) => console.error('Error saving contact.', error)
 * );
 * ```
 * @interfaces
 * IContactProperties
 * @classes
 * ContactFindOptions
 * ContactOrganization
 * ContactAddress
 */
@Plugin({
  pluginName: 'Contacts',
  plugin: 'cordova-plugin-contacts',
  pluginRef: 'navigator.contacts',
  repo: 'https://github.com/apache/cordova-plugin-contacts'
})
export class Contacts {
  /**
   * Create a single contact.
   * @returns {Contact} Returns a Contact object
   */
  static create(): Contact {
    return new Contact();
  }

  /**
   * Search for contacts in the Contacts list.
   * @param fields {string[]}  Contact fields to be used as a search qualifier.
   *  A zero-length contactFields parameter is invalid and results in ContactError.INVALID_ARGUMENT_ERROR.
   *  A contactFields value of "*" searches all contact fields.
   *
   * @param options {Object} the options to query with:
   *   filter: The search string used to find navigator.contacts. (string) (Default: "")
   *   multiple: Determines if the find operation returns multiple navigator.contacts. (Boolean) (Default: false)
   *   desiredFields: Contact fields to be returned back. If specified, the resulting Contact object only features values for these fields. (DOMString[]) [Optional]
   *   hasPhoneNumber(Android only): Filters the search to only return contacts with a phone number informed. (Boolean) (Default: false)
   *
   * @returns {Promise<any>} Returns a Promise that resolves with the search results (an array of Contact objects)
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  static find(fields: string[], options?: any): Promise<any> { return; }

  /**
   * Select a single Contact.
   * @returns {Promise<any>} Returns a Promise that resolves with the selected Contact
   */
  @Cordova()
  static pickContact(): Promise<any> { return; }

}
