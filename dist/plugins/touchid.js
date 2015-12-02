var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
var TouchID = (function () {
    function TouchID() {
    }
    TouchID.prototype.isAvailable = function () { };
    ;
    TouchID.verifyFingerprint = function (message) { };
    TouchID.verifyFingerprintWithCustomPasswordFallback = function (message) { };
    TouchID.verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel = function (message, enterPasswordLabel) { };
    __decorate([
        plugin_1.Cordova()
    ], TouchID.prototype, "isAvailable", null);
    __decorate([
        plugin_1.Cordova()
    ], TouchID, "verifyFingerprint", null);
    __decorate([
        plugin_1.Cordova()
    ], TouchID, "verifyFingerprintWithCustomPasswordFallback", null);
    __decorate([
        plugin_1.Cordova()
    ], TouchID, "verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel", null);
    TouchID = __decorate([
        plugin_1.Plugin({
            name: 'TouchID',
            plugin: 'cordova-plugin-touch-id',
            pluginRef: 'plugins.touchid',
            repo: 'https://github.com/EddyVerbruggen/cordova-plugin-touch-id'
        })
    ], TouchID);
    return TouchID;
})();
exports.TouchID = TouchID;
//# sourceMappingURL=touchid.js.map