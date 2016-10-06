"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
* @name Background Mode
* @description
* Cordova plugin to prevent the app from going to sleep while in background.
*  Requires Cordova plugin: cordova-plugin-background-mode. For more info about plugin, vist: https://github.com/katzer/cordova-plugin-background-mode#android-customization
*@usage
* ```typescript
* import { BackgroundMode } from 'ionic-native';
*
* BackgroundMode.enable();
* ```
*
* @advanced
*
* Configuration options
*
* | Property | Type      | Description                                                                  |
* |----------|-----------|------------------------------------------------------------------------------|
* | title    | `string`  | Title of the background task. Optional                                       |
* | ticker   | `string`  | The text that scrolls itself on the statusbar. Optional                      |
* | text     | `string`  | Description of the background task. Optional                                 |
* | silent   | `boolean` | If the plugin will display a notification or not. Default is false. Optional |
* | resume   | `boolean` | Bring the app into the foreground if the notification is tapped. Optional    |
*
*/
var BackgroundMode = (function () {
    function BackgroundMode() {
    }
    /**
    * Enable the background mode.
    * Once called, prevents the app from being paused while in background.
    */
    BackgroundMode.enable = function () { };
    /**
    * Disable the background mode.
    * Once the background mode has been disabled, the app will be paused when in background.
    */
    BackgroundMode.disable = function () { };
    /**
    * Checks if background mode is enabled or not.
    * @returns {boolean} returns a true of false if the background mode is enabled.
    */
    BackgroundMode.isEnabled = function () { return; };
    /**
    * Can be used to get the information if the background mode is active.
    * @returns {boolean} returns tru or flase if the background mode is active.
    */
    BackgroundMode.isActive = function () { return; };
    /**
    * Override the default title, ticker and text.
    * Available only for Android platform.
    * @param {Configure} options List of option to configure. See table below
    */
    BackgroundMode.setDefaults = function (options) { };
    /**
    * Modify the displayed information.
    * Available only for Android platform.
    * @param {Configure} options Any options you want to update. See table below.
    */
    BackgroundMode.configure = function (options) { };
    /**
    * Called when background mode is activated.
    */
    BackgroundMode.onactivate = function () { return; };
    ;
    /**
    * Called when background mode is deactivated.
    */
    BackgroundMode.ondeactivate = function () { return; };
    ;
    /**
    * Called when background mode fails
    */
    BackgroundMode.onfailure = function () { return; };
    ;
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], BackgroundMode, "enable", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundMode, "disable", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundMode, "isEnabled", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundMode, "isActive", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android']
        })
    ], BackgroundMode, "setDefaults", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android']
        })
    ], BackgroundMode, "configure", null);
    __decorate([
        plugin_1.CordovaFunctionOverride()
    ], BackgroundMode, "onactivate", null);
    __decorate([
        plugin_1.CordovaFunctionOverride()
    ], BackgroundMode, "ondeactivate", null);
    __decorate([
        plugin_1.CordovaFunctionOverride()
    ], BackgroundMode, "onfailure", null);
    BackgroundMode = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-background-mode',
            pluginRef: 'cordova.plugins.backgroundMode',
            repo: 'https://github.com/katzer/cordova-plugin-background-mode',
            platforms: ['Android', 'iOS', 'Windows Phone 8']
        })
    ], BackgroundMode);
    return BackgroundMode;
}());
exports.BackgroundMode = BackgroundMode;
//# sourceMappingURL=backgroundmode.js.map