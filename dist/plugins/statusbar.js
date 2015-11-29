if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
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
    __decorate([
        plugin_1.Cordova()
    ], StatusBar, "overlaysWebView");
    __decorate([
        plugin_1.Cordova()
    ], StatusBar, "styleDefault");
    __decorate([
        plugin_1.Cordova()
    ], StatusBar, "styleLightContent");
    __decorate([
        plugin_1.Cordova()
    ], StatusBar, "styleBlackTranslucent");
    __decorate([
        plugin_1.Cordova()
    ], StatusBar, "styleBlackOpaque");
    __decorate([
        plugin_1.Cordova()
    ], StatusBar, "backgroundColorByName");
    __decorate([
        plugin_1.Cordova()
    ], StatusBar, "backgroundColorByHexString");
    __decorate([
        plugin_1.Cordova()
    ], StatusBar, "hide");
    __decorate([
        plugin_1.Cordova()
    ], StatusBar, "show");
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
