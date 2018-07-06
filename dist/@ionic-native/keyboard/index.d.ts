import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
/**
 * @name Keyboard
 * @description
 * @usage
 * ```typescript
 * import { Keyboard } from '@ionic-native/keyboard';
 *
 * constructor(private keyboard: Keyboard) { }
 *
 * ...
 *
 * this.keyboard.show();
 *
 * this.keyboard.close();
 *
 * ```
 */
export declare class Keyboard extends IonicNativePlugin {
    /**
     * Hide the keyboard accessory bar with the next, previous and done buttons.
     * @param hide {boolean}
     */
    hideKeyboardAccessoryBar(hide: boolean): void;
    /**
     * Force keyboard to be shown.
     */
    show(): void;
    /**
     * Close the keyboard if open.
     */
    close(): void;
    /**
     * Prevents the native UIScrollView from moving when an input is focused.
     * @param disable {boolean}
     */
    disableScroll(disable: boolean): void;
    /**
     * Creates an observable that notifies you when the keyboard is shown. Unsubscribe to observable to cancel event watch.
     * @returns {Observable<any>}
     */
    onKeyboardShow(): Observable<any>;
    /**
     * Creates an observable that notifies you when the keyboard is hidden. Unsubscribe to observable to cancel event watch.
     * @returns {Observable<any>}
     */
    onKeyboardHide(): Observable<any>;
}
