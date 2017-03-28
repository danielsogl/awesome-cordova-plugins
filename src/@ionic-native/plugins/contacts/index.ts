import { Injectable } from '@angular/core';
import { CordovaInstance, InstanceProperty, Plugin, getPromise, InstanceCheck, checkAvailability, CordovaCheck } from '@ionic-native/core';

declare var window: any,
  navigator: any;

export type ContactFieldType = '*' | 'addresses' | 'birthday' | 'categories' | 'country' | 'department' | 'displayName' | 'emails' | 'familyName' | 'formatted' | 'givenName' | 'honorificPrefix' | 'honorificSuffix' | 'id' | 'ims' | 'locality' | 'middleName' | 'name' | 'nickname' | 'note' | 'organizations' | 'phoneNumbers' | 'photos' | 'postalCode' | 'region' | 'streetAddress' | 'title' | 'urls';

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
 * @hidden
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
    if (checkAvailability('navigator.contacts', 'create', 'Contacts') === true) {
      this._objectInstance = navigator.contacts.create();
    }
  }

  @InstanceCheck()
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

  @InstanceCheck()
  save(): Promise<any> {
    return getPromise((resolve, reject) => {
      this._objectInstance.save((contact) => {
        this._objectInstance = contact;
        resolve(this);
      }, reject);
    });
  }
}

/**
 * @hidden
 */
export interface IContactError {
  /** Error code */
  code: number;
  /** Error message */
  message: string;
}

/**
 * @hidden
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
 * @hidden
 */
export class ContactName implements IContactName {
  constructor(public formatted?: string,
              public familyName?: string,
              public givenName?: string,
              public middleName?: string,
              public honorificPrefix?: string,
              public honorificSuffix?: string) {}
}

export interface IContactField {
  /** A string that indicates what type of field this is, home for example. */
    type?: string;
  /** The value of the field, such as a phone number or email address. */
  value?: string;
  /** Set to true if this ContactField contains the user's preferred value. */
  pref?: boolean;
}

/**
 * @hidden
 */
export class ContactField implements IContactField {
  constructor(public type?: string,
              public value?: string,
              public pref?: boolean) {}
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
 * @hidden
 */
export class ContactAddress implements IContactAddress {
  constructor(public pref?: boolean,
              public type?: string,
              public formatted?: string,
              public streetAddress?: string,
              public locality?: string,
              public region?: string,
              public postalCode?: string,
              public country?: string) {}
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
 * @hidden
 */
export class ContactOrganization implements IContactOrganization {
  constructor(
    public type?: string,
    public name?: string,
    public department?: string,
    public title?: string,
    public pref?: boolean
  ) {}
}

/** Search options to filter navigator.contacts.  */
export interface IContactFindOptions {
  /** The search string used to find navigator.contacts. */
  filter?: string;
  /** Determines if the find operation returns multiple navigator.contacts. Defaults to false. */
  multiple?: boolean;
  /** Contact fields to be returned back. If specified, the resulting Contact object only features values for these fields. */
  desiredFields?: string[];
  /**
   * (Android only): Filters the search to only return contacts with a phone number informed.
   */
  hasPhoneNumber?: boolean;
}

/**
 * @hidden
 */
export class ContactFindOptions implements IContactFindOptions {
  constructor(public filter?: string,
              public multiple?: boolean,
              public desiredFields?: string[],
              public hasPhoneNumber?: boolean) {}
}

/**
 * @name Contacts
 * @description
 * Access and manage Contacts on the device.
 *
 * @usage
 *
 * ```typescript
 * import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
 *
 * constructor(private contacts: Contacts) { }
 *
 * let contact: Contact = this.contacts.create();
 *
 * contact.name = new ContactName(null, 'Smith', 'John');
 * contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
 * contact.save().then(
 *   () => console.log('Contact saved!', contact),
 *   (error: any) => console.error('Error saving contact.', error)
 * );
 *
 * ```
 * @classes
 * Contact
 * @interfaces
 * IContactProperties
 * IContactError
 * IContactName
 * IContactField
 * IContactAddress
 * IContactOrganization
 * IContactFindOptions
 */
@Plugin({
  pluginName: 'Contacts',
  plugin: 'cordova-plugin-contacts',
  pluginRef: 'navigator.contacts',
  repo: 'https://github.com/apache/cordova-plugin-contacts',
  platforms: ['Android', 'BlackBerry 10', 'Browser', 'Firefox OS', 'iOS', 'Ubuntu', 'Windows', 'Windows 8', 'Windows Phone']
})
@Injectable()
export class Contacts {

  /**
   * Create a single contact.
   * @returns {Contact} Returns a Contact object
   */
  create(): Contact {
    return new Contact();
  }

  /**
   * Search for contacts in the Contacts list.
   * @param fields {ContactFieldType[]}  Contact fields to be used as a search qualifier
   * @param options {IContactFindOptions} Optional options for the query
   * @returns {Promise<Contact[]>} Returns a Promise that resolves with the search results (an array of Contact objects)
   */
  @CordovaCheck()
  find(fields: ContactFieldType[], options?: IContactFindOptions): Promise<Contact[]> {
    return getPromise((resolve, reject) => {
      navigator.contacts.find(fields, (contacts) => {
        resolve(contacts.map(processContact));
      }, reject, options);
    });
  }

  /**
   * Select a single Contact.
   * @returns {Promise<Contact>} Returns a Promise that resolves with the selected Contact
   */
  @CordovaCheck()
  pickContact(): Promise<Contact> {
    return getPromise((resolve, reject) => {
      navigator.contacts.pickContact((contact) => resolve(processContact(contact)), reject);
    });
  }

}

/**
 * @hidden
 */
function processContact(contact) {
  let newContact = new Contact();
  for (let prop in contact) {
    if (typeof contact[prop] === 'function') continue;
    newContact[prop] = contact[prop];
  }
  return newContact;
}
