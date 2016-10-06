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
export declare class Contact implements IContactProperties {
    private _objectInstance;
    readonly id: string;
    readonly displayName: string;
    readonly name: IContactName;
    readonly nickname: string;
    readonly phoneNumbers: IContactField[];
    readonly emails: IContactField[];
    readonly addresses: IContactAddress[];
    readonly ims: IContactField[];
    readonly organizations: IContactOrganization[];
    readonly birthday: Date;
    readonly note: string;
    readonly photos: IContactField[];
    readonly categories: IContactField[];
    readonly urls: IContactField[];
    constructor();
    clone(): Contact;
    remove(): Promise<any>;
    save(): Promise<any>;
}
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
export declare class ContactName implements IContactName {
    private _objectInstance;
    constructor(formatted?: string, familyName?: string, givenName?: string, middleName?: string, honorificPrefix?: string, honorificSuffix?: string);
    readonly formatted: string;
    readonly familyName: string;
    readonly givenName: string;
    readonly middleName: string;
    readonly honorificPrefix: string;
    readonly honorificSuffix: string;
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
export declare class ContactField implements IContactField {
    private _objectInstance;
    constructor(type?: string, value?: string, pref?: boolean);
    readonly type: string;
    readonly value: string;
    readonly pref: boolean;
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
export declare class ContactAddress implements IContactAddress {
    private _objectInstance;
    constructor(pref?: boolean, type?: string, formatted?: string, streetAddress?: string, locality?: string, region?: string, postalCode?: string, country?: string);
    /** Set to true if this ContactAddress contains the user's preferred value. */
    readonly pref: boolean;
    /** A string indicating what type of field this is, home for example. */
    readonly type: string;
    /** The full address formatted for display. */
    readonly formatted: string;
    /** The full street address. */
    readonly streetAddress: string;
    /** The city or locality. */
    readonly locality: string;
    /** The state or region. */
    readonly region: string;
    /** The zip code or postal code. */
    readonly postalCode: string;
    /** The country name. */
    readonly country: string;
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
export declare class ContactOrganization implements IContactOrganization {
    private _objectInstance;
    constructor();
    /** Set to true if this ContactOrganization contains the user's preferred value. */
    readonly pref: boolean;
    /** A string that indicates what type of field this is, home for example. */
    readonly type: string;
    /** The name of the organization. */
    readonly name: string;
    /** The department the contract works for. */
    readonly department: string;
    /** The contact's title at the organization. */
    readonly title: string;
}
/** Search options to filter navigator.contacts.  */
export interface IContactFindOptions {
    /** The search string used to find navigator.contacts. */
    filter?: string;
    /** Determines if the find operation returns multiple navigator.contacts. */
    multiple?: boolean;
    desiredFields?: string[];
    /**
     * (Android only): Filters the search to only return contacts with a phone number informed.
     */
    hasPhoneNumber?: boolean;
}
/**
 * @private
 */
export declare class ContactFindOptions implements IContactFindOptions {
    private _objectInstance;
    constructor();
    /**
     * The search string used to find navigator.contacts. (Default: "")
     */
    readonly filter: string;
    /**
     * Determines if the find operation returns multiple navigator.contacts. (Default: false)
     */
    readonly multiple: boolean;
    /**
     * Contact fields to be returned back. If specified, the resulting Contact object only features values for these fields.
     */
    readonly desiredFields: any;
    /**
     * (Android only): Filters the search to only return contacts with a phone number informed.
     */
    readonly hasPhoneNumber: boolean;
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
export declare class Contacts {
    /**
     * Create a single contact.
     * @return Returns a object Contact
     */
    static create(): Contact;
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
     * @return Returns a Promise that resolves with the search results (an array of Contact objects)
     */
    static find(fields: string[], options?: any): Promise<any>;
    /**
     * Select a single Contact.
     * @return Returns a Promise that resolves with the selected Contact
     */
    static pickContact(): Promise<any>;
}
