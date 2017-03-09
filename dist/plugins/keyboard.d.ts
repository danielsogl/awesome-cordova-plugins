import { Observable } from 'rxjs/Observable';
/**
 * @name Keyboard
 * @description
 * @usage
 * ```typescript
 * import { Keyboard } from 'ionic-native';
 *
 *
 *
 * ```
 */
export declare class Keyboard {
    /**
     * Hide the keyboard accessory bar with the next, previous and done buttons.
     * @param hide {boolean}
     */
    static hideKeyboardAccessoryBar(hide: boolean): void;
    /**
     * Force keyboard to be shown.
     */
    static show(): void;
    /**
     * Close the keyboard if open.
     */
    static close(): void;
    /**
     * Prevents the native UIScrollView from moving when an input is focused.
     * @param disable
     */
    static disableScroll(disable: boolean): void;
    /**
     * Creates an observable that notifies you when the keyboard is shown. Unsubscribe to observable to cancel event watch.
     */
    static onKeyboardShow(): Observable<any>;
    /**
     * Creates an observable that notifies you when the keyboard is hidden. Unsubscribe to observable to cancel event watch.
     */
    static onKeyboardHide(): Observable<any>;
}
