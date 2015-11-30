if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var plugin_1 = require('./plugin');
var Camera = (function () {
    function Camera() {
    }
    Camera.getPicture = function (options) { };
    ;
    Camera.cleanup = function () { };
    ;
    Object.defineProperty(Camera, "getPicture",
        __decorate([
            plugin_1.Cordova({
                // Not sure why this plugin has the success/err come first...
                callbackOrder: 'reverse'
            })
        ], Camera, "getPicture", Object.getOwnPropertyDescriptor(Camera, "getPicture")));
    Object.defineProperty(Camera, "cleanup",
        __decorate([
            plugin_1.Cordova()
        ], Camera, "cleanup", Object.getOwnPropertyDescriptor(Camera, "cleanup")));
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