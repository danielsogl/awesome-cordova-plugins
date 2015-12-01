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
var Facebook = (function () {
    function Facebook() {
    }
    Facebook.login = function (permissions) { };
    Facebook.logout = function () { };
    Facebook.getLoginStatus = function () { };
    Facebook.getAccessToken = function () { };
    Facebook.showDialog = function (options) { };
    Facebook.api = function (requestPath, permissions) { };
    Facebook.logEvent = function (name, params, valueToSum) { };
    Facebook.logPurchase = function (value, currency) { };
    Facebook.appInvite = function (options) { };
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Array]), 
        __metadata('design:returntype', void 0)
    ], Facebook, "login", null);
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], Facebook, "logout", null);
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], Facebook, "getLoginStatus", null);
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], Facebook, "getAccessToken", null);
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], Facebook, "showDialog", null);
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [String, Array]), 
        __metadata('design:returntype', void 0)
    ], Facebook, "api", null);
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [String, Object, Number]), 
        __metadata('design:returntype', void 0)
    ], Facebook, "logEvent", null);
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Number, String]), 
        __metadata('design:returntype', void 0)
    ], Facebook, "logPurchase", null);
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], Facebook, "appInvite", null);
    Facebook = __decorate([
        plugin_1.Plugin({
            name: 'Facebook',
            plugin: 'cordova-plugin-facebook4',
            pluginRef: 'facebookConnectPlugin'
        }), 
        __metadata('design:paramtypes', [])
    ], Facebook);
    return Facebook;
})();
exports.Facebook = Facebook;
//# sourceMappingURL=facebook.js.map