import { IonicNativePlugin } from '@ionic-native/core';
export declare type ContactFieldType = '*' | 'addresses' | 'birthday' | 'categories' | 'country' | 'department' | 'displayName' | 'emails' | 'familyName' | 'formatted' | 'givenName' | 'honorificPrefix' | 'honorificSuffix' | 'id' | 'ims' | 'locality' | 'middleName' | 'name' | 'nickname' | 'note' | 'organizations' | 'phoneNumbers' | 'photos' | 'postalCode' | 'region' | 'streetAddress' | 'title' | 'urls';
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
export declare class Contact implements IContactProperties {
    private _objectInstance;
    id: string;
    displayName: string;
    name: IContactName;
    nickname: string;
    phoneNumbers: IContactField[];
    emails: IContactField[];
    addresses: IContactAddress[];
    ims: IContactField[];
    organizations: IContactOrganization[];
    birthday: Date;
    note: string;
    photos: IContactField[];
    categories: IContactField[];
    urls: IContactField[];
    [key: string]: any;
    constructor();
    clone(): Contact;
    remove(): Promise<any>;
    save(): Promise<any>;
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
export declare const ContactError: {
    new (code: number): IContactError;
    UNKNOWN_ERROR: number;
    INVALID_ARGUMENT_ERROR: number;
    TIMEOUT_ERROR: number;
    PENDING_OPERATION_ERROR: number;
    IO_ERROR: number;
    NOT_SUPPORTED_ERROR: number;
    PERMISSION_DENIED_ERROR: number;
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
export declare class ContactName implements IContactName {
    formatted: string;
    familyName: string;
    givenName: string;
    middleName: string;
    honorificPrefix: string;
    honorificSuffix: string;
    constructor(formatted?: string, familyName?: string, givenName?: string, middleName?: string, honorificPrefix?: string, honorificSuffix?: string);
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
export declare class ContactField implements IContactField {
    type: string;
    value: string;
    pref: boolean;
    constructor(type?: string, value?: string, pref?: boolean);
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
export declare class ContactAddress implements IContactAddress {
    pref: boolean;
    type: string;
    formatted: string;
    streetAddress: string;
    locality: string;
    region: string;
    postalCode: string;
    country: string;
    constructor(pref?: boolean, type?: string, formatted?: string, streetAddress?: string, locality?: string, region?: string, postalCode?: string, country?: string);
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
export declare class ContactOrganization implements IContactOrganization {
    type: string;
    name: string;
    department: string;
    title: string;
    pref: boolean;
    constructor(type?: string, name?: string, department?: string, title?: string, pref?: boolean);
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
export declare class ContactFindOptions implements IContactFindOptions {
    filter: string;
    multiple: boolean;
    desiredFields: string[];
    hasPhoneNumber: boolean;
    constructor(filter?: string, multiple?: boolean, desiredFields?: string[], hasPhoneNumber?: boolean);
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
export declare class Contacts extends IonicNativePlugin {
    /**
     * Create a single contact.
     * @returns {Contact} Returns a Contact object
     */
    create(): Contact;
    /**
     * Search for contacts in the Contacts list.
     * @param fields {ContactFieldType[]}  Contact fields to be used as a search qualifier
     * @param options {IContactFindOptions} Optional options for the query
     * @returns {Promise<Contact[]>} Returns a Promise that resolves with the search results (an array of Contact objects)
     */
    find(fields: ContactFieldType[], options?: IContactFindOptions): Promise<Contact[]>;
    /**
     * Select a single Contact.
     * @returns {Promise<Contact>} Returns a Promise that resolves with the selected Contact
     */
    pickContact(): Promise<Contact>;
}
