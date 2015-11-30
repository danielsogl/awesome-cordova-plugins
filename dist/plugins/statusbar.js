var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var plugin_1 = require('./plugin');
var StatusBar = (function () {
    function StatusBar() {
    }
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
    StatusBar.backgroundColorByName = function (colorName) { };
    ;
    StatusBar.backgroundColorByHexString = function (hexString) { };
    ;
    StatusBar.hide = function () { };
    ;
    StatusBar.show = function () { };
    ;
    Object.defineProperty(StatusBar, "overlaysWebView",
        __decorate([
            plugin_1.Cordova()
        ], StatusBar, "overlaysWebView", Object.getOwnPropertyDescriptor(StatusBar, "overlaysWebView")));
    Object.defineProperty(StatusBar, "styleDefault",
        __decorate([
            plugin_1.Cordova()
        ], StatusBar, "styleDefault", Object.getOwnPropertyDescriptor(StatusBar, "styleDefault")));
    Object.defineProperty(StatusBar, "styleLightContent",
        __decorate([
            plugin_1.Cordova()
        ], StatusBar, "styleLightContent", Object.getOwnPropertyDescriptor(StatusBar, "styleLightContent")));
    Object.defineProperty(StatusBar, "styleBlackTranslucent",
        __decorate([
            plugin_1.Cordova()
        ], StatusBar, "styleBlackTranslucent", Object.getOwnPropertyDescriptor(StatusBar, "styleBlackTranslucent")));
    Object.defineProperty(StatusBar, "styleBlackOpaque",
        __decorate([
            plugin_1.Cordova()
        ], StatusBar, "styleBlackOpaque", Object.getOwnPropertyDescriptor(StatusBar, "styleBlackOpaque")));
    Object.defineProperty(StatusBar, "backgroundColorByName",
        __decorate([
            plugin_1.Cordova()
        ], StatusBar, "backgroundColorByName", Object.getOwnPropertyDescriptor(StatusBar, "backgroundColorByName")));
    Object.defineProperty(StatusBar, "backgroundColorByHexString",
        __decorate([
            plugin_1.Cordova()
        ], StatusBar, "backgroundColorByHexString", Object.getOwnPropertyDescriptor(StatusBar, "backgroundColorByHexString")));
    Object.defineProperty(StatusBar, "hide",
        __decorate([
            plugin_1.Cordova()
        ], StatusBar, "hide", Object.getOwnPropertyDescriptor(StatusBar, "hide")));
    Object.defineProperty(StatusBar, "show",
        __decorate([
            plugin_1.Cordova()
        ], StatusBar, "show", Object.getOwnPropertyDescriptor(StatusBar, "show")));
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
