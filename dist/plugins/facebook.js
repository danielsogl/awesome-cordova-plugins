var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
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
    Object.defineProperty(Facebook, "login",
        __decorate([
            plugin_1.Cordova()
        ], Facebook, "login", Object.getOwnPropertyDescriptor(Facebook, "login")));
    Object.defineProperty(Facebook, "logout",
        __decorate([
            plugin_1.Cordova()
        ], Facebook, "logout", Object.getOwnPropertyDescriptor(Facebook, "logout")));
    Object.defineProperty(Facebook, "getLoginStatus",
        __decorate([
            plugin_1.Cordova()
        ], Facebook, "getLoginStatus", Object.getOwnPropertyDescriptor(Facebook, "getLoginStatus")));
    Object.defineProperty(Facebook, "getAccessToken",
        __decorate([
            plugin_1.Cordova()
        ], Facebook, "getAccessToken", Object.getOwnPropertyDescriptor(Facebook, "getAccessToken")));
    Object.defineProperty(Facebook, "showDialog",
        __decorate([
            plugin_1.Cordova()
        ], Facebook, "showDialog", Object.getOwnPropertyDescriptor(Facebook, "showDialog")));
    Object.defineProperty(Facebook, "api",
        __decorate([
            plugin_1.Cordova()
        ], Facebook, "api", Object.getOwnPropertyDescriptor(Facebook, "api")));
    Object.defineProperty(Facebook, "logEvent",
        __decorate([
            plugin_1.Cordova()
        ], Facebook, "logEvent", Object.getOwnPropertyDescriptor(Facebook, "logEvent")));
    Object.defineProperty(Facebook, "logPurchase",
        __decorate([
            plugin_1.Cordova()
        ], Facebook, "logPurchase", Object.getOwnPropertyDescriptor(Facebook, "logPurchase")));
    Object.defineProperty(Facebook, "appInvite",
        __decorate([
            plugin_1.Cordova()
        ], Facebook, "appInvite", Object.getOwnPropertyDescriptor(Facebook, "appInvite")));
    Facebook = __decorate([
        plugin_1.Plugin({
            name: 'Facebook',
            plugin: 'cordova-plugin-facebook4',
            pluginRef: 'facebookConnectPlugin'
        })
    ], Facebook);
    return Facebook;
})();
exports.Facebook = Facebook;
//# sourceMappingURL=facebook.js.map