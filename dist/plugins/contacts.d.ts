export interface ContactProperties {
    /** A globally unique identifier. */
    id?: string;
    /** The name of this Contact, suitable for display to end users. */
    displayName?: string;
    /** An object containing all components of a persons name. */
    name?: ContactName;
    /** A casual name by which to address the contact. */
    nickname?: string;
    /** An array of all the contact's phone numbers. */
    phoneNumbers?: ContactField[];
    /** An array of all the contact's email addresses. */
    emails?: ContactField[];
    /** An array of all the contact's addresses. */
    addresses?: ContactAddress[];
    /** An array of all the contact's IM addresses. */
    ims?: ContactField[];
    /** An array of all the contact's organizations. */
    organizations?: ContactOrganization[];
    /** The birthday of the contact. */
    birthday?: Date;
    /** A note about the contact. */
    note?: string;
    /** An array of the contact's photos. */
    photos?: ContactField[];
    /** An array of all the user-defined categories associated with the contact. */
    categories?: ContactField[];
    /** An array of web pages associated with the contact. */
    urls?: ContactField[];
}
export interface Contact extends ContactProperties {
    /**
     * Returns a new Contact object that is a deep copy of the calling object, with the id property set to null
     */
    clone(): Contact;
    /**
     * Removes the contact from the device contacts database, otherwise executes an error callback with a ContactError object.
     * @param onSuccess Success callback function invoked on success operation.
     * @param onError Error callback function, invoked when an error occurs.
     */
    remove(onSuccess?: () => void, onError?: (error: Error) => void): void;
    /**
     * Saves a new contact to the device contacts database, or updates an existing contact if a contact with the same id already exists.
     * @param onSuccess Success callback function invoked on success operation with che Contact object.
     * @param onError Error callback function, invoked when an error occurs.
     */
    save(onSuccess?: (contact: Contact) => void, onError?: (error: Error) => void): void;
}
export interface ContactName {
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
export interface ContactField {
    /** A string that indicates what type of field this is, home for example. */
    type: string;
    /** The value of the field, such as a phone number or email address. */
    value: string;
    /** Set to true if this ContactField contains the user's preferred value. */
    pref: boolean;
}
export interface ContactAddress {
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
export interface ContactOrganization {
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
 * Access and manage Contacts on the device.
 *
 * Requires plugin: `cordova-plugin-contacts`
 * For full info, please see the [Cordova Contacts plugin docs](https://github.com/apache/cordova-plugin-contacts)
 *
 * @usage
 *
 * ```js
 * Contacts.save({
 *   displayName: "Mr. Ionitron"
 * }).then((contact) => {}, (err) => {})
 * ```
 *
 * See the `save()` docs for a full list of fields.
 *
 */
export declare class Contacts {
    /**
     * Create a new Contact object.
     *
     * @param options {Object} Object whose properties the created Contact should have.
     * @return {Contact} Returns the created contact
     */
    static create(options: ContactProperties): Contact;
    /**
     * Search for contacts in the Contacts list.
     *
     * Example: Contacts.find(['*'], { filter: 'Max' }) // will search for a displayName of 'Max'
     *
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
    static find(fields: string[], options?: any): Promise<Contact[]>;
    /**
     * Select a single Contact.
     * @return Returns a Promise that resolves with the selected Contact
     */
    static pickContact(): Promise<Contact>;
}
