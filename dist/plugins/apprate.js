"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name App Rate
 * @description
 * The AppRate plugin makes it easy to prompt the user to rate your app, either now, later, or never.
 *
 * Requires Cordova plugin: cordova-plugin-apprate. For more info, please see the [AppRate plugin docs](https://github.com/pushandplay/cordova-plugin-apprate).
 *
 * @usage
 * ```typescript
 * import { AppRate } from 'ionic-native';
 *
 *  AppRate.preferences.storeAppURL = {
 *    ios: '<my_app_id>',
 *    android: 'market://details?id=<package_name>',
 *  };
 *
 * AppRate.promptForRating();
 * ```
 *
 * @advanced
 *
 * Rating dialog preferences
 *
 * | Option                       | Type       | Default | Description                                                                            |
 * |------------------------------|------------|---------|----------------------------------------------------------------------------------------|
 * | useLanguage                  | `String`   | null    | custom BCP 47 language tag                                                             |
 * | displayAppName               | `String`   | ''      | custom application title                                                               |
 * | promptAgainForEachNewVersion | `Boolean`  | true    | show dialog again when application version will be updated                             |
 * | usesUntilPrompt              | `Integer`  | 3       | count of runs of application before dialog will be displayed                           |
 * | openStoreInApp               | `Boolean`  | false   | leave app or no when application page opened in app store (now supported only for iOS) |
 * | useCustomRateDialog          | `Boolean`  | false   | use custom view for rate dialog                                                        |
 * | callbacks.onButtonClicked    | `Function` | null    | call back function. called when user clicked on rate-dialog buttons                    |
 * | callbacks.onRateDialogShow   | `Function` | null    | call back function. called when rate-dialog showing                                    |
 * | storeAppURL.ios              | `String`   | null    | application id in AppStore                                                             |
 * | storeAppURL.android          | `String`   | null    | application URL in GooglePlay                                                          |
 * | storeAppURL.blackberry       | `String`   | null    | application URL in AppWorld                                                            |
 * | storeAppURL.windows8         | `String`   | null    | application URL in WindowsStore                                                        |
 * | customLocale                 | `Object`   | null    | custom locale object                                                                   |

 */
var AppRate = (function () {
    function AppRate() {
    }
    Object.defineProperty(AppRate, "preferences", {
        /**
         * Configure various settings for the Rating View.
         * See table below for options
         */
        get: function () { return window.AppRate.preferences; },
        enumerable: true,
        configurable: true
    });
    /**
     * Prompts the user for rating
     * @param {boolean} immediately  Show the rating prompt immediately.
     */
    AppRate.promptForRating = function (immediately) { };
    ;
    __decorate([
        plugin_1.CordovaProperty
    ], AppRate, "preferences", null);
    __decorate([
        plugin_1.Cordova()
    ], AppRate, "promptForRating", null);
    AppRate = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-apprate',
            pluginRef: 'AppRate',
            repo: 'https://github.com/pushandplay/cordova-plugin-apprate',
            platforms: ['Android', 'iOS']
        })
    ], AppRate);
    return AppRate;
}());
exports.AppRate = AppRate;
//# sourceMappingURL=apprate.js.map