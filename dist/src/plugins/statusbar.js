var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var plugin_1 = require('./plugin');
var StatusBar = (function () {
    function StatusBar() {
    }
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Object)
    ], StatusBar, "overlaysWebView", void 0);
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Object)
    ], StatusBar, "styleDefault", void 0);
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Object)
    ], StatusBar, "styleLightContent", void 0);
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Object)
    ], StatusBar, "styleBlackTranslucent", void 0);
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Object)
    ], StatusBar, "styleBlackOpaque", void 0);
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Object)
    ], StatusBar, "backgroundColorByName", void 0);
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Object)
    ], StatusBar, "backgroundColorByHexString", void 0);
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Object)
    ], StatusBar, "hide", void 0);
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Object)
    ], StatusBar, "show", void 0);
    StatusBar = __decorate([
        plugin_1.Plugin({
            name: 'StatusBar',
            plugin: 'cordova-plugin-statusbar',
            pluginRef: 'StatusBar'
        }), 
        __metadata('design:paramtypes', [])
    ], StatusBar);
    return StatusBar;
})();
exports.StatusBar = StatusBar;
