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
var Geolocation = (function () {
    function Geolocation() {
    }
    Geolocation.getCurrentPosition = function (options) { };
    ;
    Geolocation.watchPosition = function (options) { };
    ;
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], Geolocation, "getCurrentPosition", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse',
            observable: true,
            clearFunction: 'clearWatch()'
        }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], Geolocation, "watchPosition", null);
    Geolocation = __decorate([
        plugin_1.Plugin({
            name: 'Geolocation',
            plugin: 'cordova-plugin-geolocation',
            pluginRef: 'navigator.geolocation'
        }), 
        __metadata('design:paramtypes', [])
    ], Geolocation);
    return Geolocation;
})();
exports.Geolocation = Geolocation;
//# sourceMappingURL=geolocation.js.map