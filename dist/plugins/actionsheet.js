var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * The ActionSheet plugin shows a native list of options the user can choose from.
 */
var ActionSheet = (function () {
    function ActionSheet() {
    }
    /**
     * Show the ActionSheet.
     * @param {options}
     * Available options:
     *   buttonLabels: string[]
     *   title: string
     *   androidTheme (Android only): number 1-5
     *   androidEnableCancelButton (Android only): boolean, default false
     *   winphoneEnableCancelButton (WP only): boolean, default false
     *   addCancelButtonWithLabel: string
     *   addDestructiveButtonWithLabel: string
     *   position: [x, y] (iPad pass in [x, y] coords of popover)
     * @returns {Promise} returns a promise that resolves with the index of the
     *   button pressed (1 based, so 1, 2, 3, etc.)
     */
    ActionSheet.show = function (options) {
        // This Promise is replaced by one from the @Cordova decorator that wraps
        // the plugin's callbacks. We provide a dummy one here so TypeScript
        // knows that the correct return type is Promise, because there's no way
        // for it to know the return type from a decorator.
        // See https://github.com/Microsoft/TypeScript/issues/4881
        return new Promise(function (res, rej) { });
    };
    ;
    /**
     * Hide the ActionSheet.
     */
    ActionSheet.hide = function () {
        // This Promise is replaced by one from the @Cordova decorator that wraps
        // the plugin's callbacks. We provide a dummy one here so TypeScript
        // knows that the correct return type is Promise, because there's no way
        // for it to know the return type from a decorator.
        // See https://github.com/Microsoft/TypeScript/issues/4881
        return new Promise(function (res, rej) { });
    };
    ;
    __decorate([
        plugin_1.Cordova()
    ], ActionSheet, "show", null);
    __decorate([
        plugin_1.Cordova()
    ], ActionSheet, "hide", null);
    ActionSheet = __decorate([
        plugin_1.Plugin({
            name: 'ActionSheet',
            plugin: 'cordova-plugin-actionsheet',
            pluginRef: 'plugins.actionsheet',
            repo: 'https://github.com/EddyVerbruggen/cordova-plugin-actionsheet'
        })
    ], ActionSheet);
    return ActionSheet;
})();
exports.ActionSheet = ActionSheet;
//# sourceMappingURL=actionsheet.js.map