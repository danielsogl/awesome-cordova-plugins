/**
 * @name Status Bar
 * @description
 * Manage the appearance of the native status bar.
 *
 * Requires Cordova plugin: `cordova-plugin-statusbar`. For more info, please see the [StatusBar plugin docs](https://github.com/apache/cordova-plugin-statusbar).
 *
 * @usage
 * ```typescript
 * import { StatusBar } from 'ionic-native';
 *
 *
 * StatusBar.overlaysWebView(true); // let status bar overlay webview
 *
 * StatusBar.backgroundColorByHexString('#ffffff'); // set status bar to white
 * ```
 *
 */
export declare class StatusBar {
    /**
     * Set whether the status bar overlays the main app view. The default
     * is true.
     *
     * @param {boolean} doesOverlay  Whether the status bar overlays the main app view.
     */
    static overlaysWebView(doesOverlay: boolean): void;
    /**
     * Use the default statusbar (dark text, for light backgrounds).
     */
    static styleDefault(): void;
    /**
     * Use the lightContent statusbar (light text, for dark backgrounds).
     */
    static styleLightContent(): void;
    /**
     * Use the blackTranslucent statusbar (light text, for dark backgrounds).
     */
    static styleBlackTranslucent(): void;
    /**
     * Use the blackOpaque statusbar (light text, for dark backgrounds).
     */
    static styleBlackOpaque(): void;
    /**
     * Set the status bar to a specific named color. Valid options:
     * black, darkGray, lightGray, white, gray, red, green, blue, cyan, yellow, magenta, orange, purple, brown.
     *
     * iOS note: you must call StatusBar.overlaysWebView(false) to enable color changing.
     *
     * @param {string} colorName  The name of the color (from above)
     */
    static backgroundColorByName(colorName: string): void;
    /**
     * Set the status bar to a specific hex color (CSS shorthand supported!).
     *
     * iOS note: you must call StatusBar.overlaysWebView(false) to enable color changing.
     *
     * @param {string} hexString  The hex value of the color.
     */
    static backgroundColorByHexString(hexString: string): void;
    /**
     * Hide the StatusBar
     */
    static hide(): void;
    /**
    * Show the StatusBar
    */
    static show(): void;
    /**
     * Whether the StatusBar is currently visible or not.
     */
    static readonly isVisible: any;
}
