var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
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
var StatusBar = (function () {
    function StatusBar() {
    }
    /**
     * Set whether the status bar overlays the main app view. The default
     * is true.
     *
     * @param doesOverlay whether the status bar overlays the main app view.
     */
    StatusBar.overlaysWebView = function (doOverlay) { };
    ;
    StatusBar.styleDefault = function () { };
    ;
    StatusBar.styleLightContent = function () { };
    ;
    StatusBar.styleBlackTranslucent = function () { };
    ;
    StatusBar.styleBlackOpaque = function () { };
    ;
    /**
     * Set the status bar to a specific named color. Valid options:
     * black, darkGray, lightGray, white, gray, red, green, blue, cyan, yellow, magenta, orange, purple, brown.
     *
     * iOS note: you must call StatusBar.setOverlay(false) to enable color changing.
     *
     * @param name the name of the color (from above)
     */
    StatusBar.backgroundColorByName = function (colorName) { };
    ;
    /**
     * Set the status bar to a specific hex color (CSS shorthand supported!).
     *
     * iOS note: you must call StatusBar.setOverlay(false) to enable color changing.
     *
     * @param hex the hex value of the color.
     */
    StatusBar.backgroundColorByHexString = function (hexString) { };
    ;
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
    StatusBar.hide = function () { };
    ;
    /**
    * Show the StatusBar
    */
    StatusBar.show = function () { };
    ;
    __decorate([
        plugin_1.Cordova()
    ], StatusBar, "overlaysWebView", null);
    __decorate([
        plugin_1.Cordova()
    ], StatusBar, "styleDefault", null);
    __decorate([
        plugin_1.Cordova()
    ], StatusBar, "styleLightContent", null);
    __decorate([
        plugin_1.Cordova()
    ], StatusBar, "styleBlackTranslucent", null);
    __decorate([
        plugin_1.Cordova()
    ], StatusBar, "styleBlackOpaque", null);
    __decorate([
        plugin_1.Cordova()
    ], StatusBar, "backgroundColorByName", null);
    __decorate([
        plugin_1.Cordova()
    ], StatusBar, "backgroundColorByHexString", null);
    __decorate([
        plugin_1.Cordova()
    ], StatusBar, "hide", null);
    __decorate([
        plugin_1.Cordova()
    ], StatusBar, "show", null);
    StatusBar = __decorate([
        plugin_1.Plugin({
            name: 'StatusBar',
            plugin: 'cordova-plugin-statusbar',
            pluginRef: 'StatusBar'
        })
    ], StatusBar);
    return StatusBar;
})();
exports.StatusBar = StatusBar;
//# sourceMappingURL=statusbar.js.map