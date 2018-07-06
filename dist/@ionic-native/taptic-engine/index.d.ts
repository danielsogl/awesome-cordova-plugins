import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Taptic Engine
 * @description
 * An Ionic plugin to use Taptic Engine API on iPHone 7, 7 Plus or newer.
 *
 * @usage
 * ```typescript
 * import { TapticEngine } from '@ionic-native/taptic-engine';
 *
 * ...
 *
 * constructor(private taptic: TapticEngine) { }
 *
 * ...
 *
 * this.taptic.selection();
 *
 * this.taptic.notification();
 *
 * this.taptic.impact();
 *
 * ```
 */
export declare class TapticEngine extends IonicNativePlugin {
    /**
     * Use selection feedback generators to indicate a change in selection.
     * @returns {Promise<any>} Returns a promise that resolves on success and rejects on error
     */
    selection(): Promise<any>;
    /**
     * Use this to indicate success/failure/warning to the user.
     * @param options {Object} should be of the type { type: 'success' } (or 'warning'/'error')
     * @param options.type {string}
     * @returns {Promise<any>} Returns a promise that resolves on success and rejects on error
     */
    notification(options: {
        type: string;
    }): Promise<any>;
    /**
     * Use this to indicate success/failure/warning to the user.
     * @param options {Object} should be of the type { style: 'light' } (or 'medium'/'heavy')
     * @param options.type {string}
     * @returns {Promise<any>} Returns a promise that resolves on success and rejects on error
     */
    impact(options: {
        style: string;
    }): Promise<any>;
}
