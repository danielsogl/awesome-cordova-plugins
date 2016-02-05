/**
 * Manage the appearance of the native status bar.
 *
 * @usage
 * ```js
 * StatusBar.hide(); // Hide the bar
 *
 * StatusBar.setStyle(StatusBar.LIGHT_CONTENT) // Good for dark backgrounds
 * ```
 */
export declare class StatusBar {
    /**
     * Set whether the status bar overlays the main app view. The default
     * is true.
     *
     * @param doesOverlay whether the status bar overlays the main app view.
     */
    static overlaysWebView(doOverlay: boolean): void;
    static styleDefault(): void;
    static styleLightContent(): void;
    static styleBlackTranslucent(): void;
    static styleBlackOpaque(): void;
    /**
     * Set the status bar to a specific named color. Valid options:
     * black, darkGray, lightGray, white, gray, red, green, blue, cyan, yellow, magenta, orange, purple, brown.
     *
     * iOS note: you must call StatusBar.setOverlay(false) to enable color changing.
     *
     * @param name the name of the color (from above)
     */
    static backgroundColorByName(colorName: string): void;
    /**
     * Set the status bar to a specific hex color (CSS shorthand supported!).
     *
     * iOS note: you must call StatusBar.setOverlay(false) to enable color changing.
     *
     * @param hex the hex value of the color.
     */
    static backgroundColorByHexString(hexString: string): void;
    /**
     * Hide the StatusBar
     *
     * Options:
     *
     * StatusBar.DEFAULT
     * StatusBar.LIGHT_CONTENT
     * StatusBar.BLACK_TRANSLUCENT
     * StatusBar.BLACK_OPAQUE
     *
     * @param style the style from above
     */
    static hide(): void;
    /**
    * Show the StatusBar
    */
    static show(): void;
}
