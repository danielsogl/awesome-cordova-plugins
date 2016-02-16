var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * Register and receive push notifications.
 *
 * Requires Cordova plugin: `phonegap-plugin-push`. For more info, please see the [Push plugin docs](https://github.com/phonegap/phonegap-plugin-push).
 *
 *
 * For TypeScript users, see the [Push plugin docs about using TypeScript for custom notifications](https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/TYPESCRIPT.md).
 */
var Push = (function () {
    function Push() {
    }
    /**
     * Initialize the plugin on the native side.
     *
     * ```
     * var push = PushNotification.init({
     *    android: {
     *        senderID: "12345679"
     *    },
     *    ios: {
     *        alert: "true",
     *        badge: true,
     *        sound: 'false'
     *    },
     *    windows: {}
     * });
     * ```
     *
     * @param {PushOptions} options  The Push [options](https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/API.md#parameters).
     * @return {PushNotification}  Returns a new [PushNotification](https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/API.md#pushonevent-callback) object.
     */
    Push.init = function (options) {
        return new PushNotification();
    };
    /**
     * Check whether the push notification permission has been granted.
     * @return {Promise} Returns a Promise that resolves with an object with one property: isEnabled, a boolean that indicates if permission has been granted.
     */
    Push.hasPermission = function () {
        // This Promise is replaced by one from the @Cordova decorator that wraps
        // the plugin's callbacks. We provide a dummy one here so TypeScript
        // knows that the correct return type is Promise, because there's no way
        // for it to know the return type from a decorator.
        // See https://github.com/Microsoft/TypeScript/issues/4881
        return new Promise(function (res, rej) { });
    };
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], Push, "init", null);
    __decorate([
        plugin_1.Cordova()
    ], Push, "hasPermission", null);
    Push = __decorate([
        plugin_1.Plugin({
            name: 'Push',
            plugin: 'phonegap-plugin-push',
            pluginRef: 'PushNotification'
        })
    ], Push);
    return Push;
})();
exports.Push = Push;
//# sourceMappingURL=push.js.map