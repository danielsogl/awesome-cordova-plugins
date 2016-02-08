var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * Take a photo or capture video.
 *
 * Requires Cordova plugin: `cordova-plugin-camera`. For more info, please see the [Cordova Camera Plugin Docs](https://github.com/apache/cordova-plugin-camera).
 *
 * @usage
 * ```js
 * Camera.getPicture(options).then((imageData) => {
 *  // imageData is either a base64 encoded string or a file URI
 *  // If it's base64:
 *  let base64Image = "data:image/jpeg;base64," + imageData;
 * }, (err) => {
 * });
 * ```
 */
var Camera = (function () {
    function Camera() {
    }
    /**
     * Take a picture or video, or load one from the library.
     * @param {CameraOptions} options
     * @return Returns a Promise that resolves with Base64 encoding of the image data, or the image file URI, depending on cameraOptions, otherwise rejects with an error.
     */
    Camera.getPicture = function (options) {
        // This Promise is replaced by one from the @Cordova decorator that wraps
        // the plugin's callbacks. We provide a dummy one here so TypeScript
        // knows that the correct return type is Promise, because there's no way
        // for it to know the return type from a decorator.
        // See https://github.com/Microsoft/TypeScript/issues/4881
        return new Promise(function (res, rej) { });
    };
    ;
    /**
     * Remove intermediate image files that are kept in temporary storage after calling camera.getPicture.
     * Applies only when the value of Camera.sourceType equals Camera.PictureSourceType.CAMERA and the Camera.destinationType equals Camera.DestinationType.FILE_URI.
     * @return Returns a Promise
     */
    Camera.cleanup = function () { };
    ;
    __decorate([
        plugin_1.Cordova({
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