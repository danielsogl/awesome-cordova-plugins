var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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