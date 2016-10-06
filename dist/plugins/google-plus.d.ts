/**
 * @name Google Plus
 * @description
 * @usage
 * ```typescript
 * import { GooglePlus } from 'ionic-native';
 *
 *
 * ```
 */
export declare class GooglePlus {
    /**
     * The login function walks the user through the Google Auth process.
     * @param options
     */
    static login(options?: any): Promise<any>;
    /**
     * You can call trySilentLogin to check if they're already signed in to the app and sign them in silently if they are.
     * @param options
     */
    static trySilentLogin(options?: any): Promise<any>;
    /**
     * This will clear the OAuth2 token.
     */
    static logout(): Promise<any>;
    /**
     * This will clear the OAuth2 token, forget which account was used to login, and disconnect that account from the app. This will require the user to allow the app access again next time they sign in. Be aware that this effect is not always instantaneous. It can take time to completely disconnect.
     */
    static disconnect(): Promise<any>;
}
