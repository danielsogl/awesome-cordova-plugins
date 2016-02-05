/**
 * Access and manage Contacts on the device.
 *
 * Requires plugin: `cordova-plugin-contacts`
 * For full info, please see the [Cordova Contacts Docs](https://github.com/apache/cordova-plugin-contacts)
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
    static create(fields: string[], options: any): void;
    static find(fields: string[], options: any): void;
    static pickContact(): void;
}
