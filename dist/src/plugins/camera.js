var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
var Camera = (function () {
    function Camera() {
    }
    Camera.getPicture = function (options) { };
    ;
    Camera.cleanup = function () { };
    ;
    __decorate([
        plugin_1.Cordova({
            // Not sure why this plugin has the success/err come first...
            callbackOrder: 'reverse'
        })
    ], Camera, "getPicture", null);
    __decorate([
        plugin_1.Cordova()
    ], Camera, "cleanup", null);
    Camera = __decorate([
        plugin_1.Plugin({
            name: 'Camera',
            plugin: 'cordova-plugin-camera',
            pluginRef: 'navigator.camera'
        })
    ], Camera);
    return Camera;
})();
exports.Camera = Camera;
//# sourceMappingURL=camera.js.map