import { IonicNativePlugin } from '@ionic-native/core';
export declare type LinkedInLoginScopes = 'r_basicprofile' | 'r_emailaddress' | 'rw_company_admin' | 'w_share';
/**
 * @name LinkedIn
 * @description
 * A Cordova plugin that lets you use LinkedIn Native SDKs for Android and iOS.
 *
 * Please see the [plugin's repo](https://github.com/zyramedia/cordova-plugin-linkedin#installation) for detailed installation steps.
 *
 * @usage
 * ```typescript
 * import { LinkedIn } from '@ionic-native/linkedin';
 *
 * constructor(private linkedin: LinkedIn) { }
 *
 * ...
 *
 * // check if there is an active session
 * this.linkedin.hasActiveSession().then((active) => console.log('has active session?', active));
 *
 * // login
 * const scopes = ['r_basicprofile', 'r_emailaddress', 'rw_company_admin', 'w_share'];
 * this.linkedin.login(scopes, true)
 *   .then(() => console.log('Logged in!')
 *   .catch(e => console.log('Error logging in', e));
 *
 *
 * // get connections
 * this.linkedin.getRequest('people/~')
 *   .then(res => console.log(res))
 *   .catch(e => console.log(e));
 *
 * // share something on profile
 * const body = {
 *   comment: 'Hello world!',
 *   visibility: {
 *     code: 'anyone'
 *   }
 * };
 *
 * this.linkedin.postRequest('~/shares', body)
 *   .then(res => console.log(res))
 *   .catch(e => console.log(e));
 *
 *
 * ```
 */
export declare class LinkedIn extends IonicNativePlugin {
    /**
     * Login with the LinkedIn App
     * @param scopes {string[]} Scopes to authorize
     * @param promptToInstall {boolean} set to true to prompt the user to download the LinkedIn app if it's not installed
     * @return {Promise<any>}
     */
    login(scopes: LinkedInLoginScopes[], promptToInstall: boolean): Promise<any>;
    /**
     * Clears the current session
     */
    logout(): void;
    /**
     * Make a get request
     * @param path {string} request path
     * @return {Promise<any>}
     */
    getRequest(path: string): Promise<any>;
    /**
     * Make a post request
     * @param path {string} request path
     * @param body {Object} request body
     * @return {Promise<any>}
     */
    postRequest(path: string, body: any): Promise<any>;
    /**
     * Opens a member's profile
     * @param memberId {string} Member id
     * @return {Promise<any>}
     */
    openProfile(memberId: string): Promise<any>;
    /**
     * Checks if there is already an existing active session. This should be used to avoid unnecessary login.
     * @return {Promise<boolean>} returns a promise that resolves with a boolean that indicates whether there is an active session
     */
    hasActiveSession(): Promise<boolean>;
    /**
     * Checks if there is an active session and returns the access token if it exists.
     * @return {Promise<any>} returns a promise that resolves with an object that contains an access token if there is an active session
     */
    getActiveSession(): Promise<any>;
}
