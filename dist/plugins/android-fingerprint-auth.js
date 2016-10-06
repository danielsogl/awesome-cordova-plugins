"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Android Fingerprint Auth
 * @description
 * This plugin will open a native dialog fragment prompting the user to authenticate using their fingerprint. If the device has a secure lockscreen (pattern, PIN, or password), the user may opt to authenticate using that method as a backup.
 * @usage
 * ```typescript
 * import { AndroidFingerprintAuth } from 'ionic-native';
 *
 * AndroidFingerprintAuth.isAvailable()
 *   .then((result)=> {
 *     if(result.isAvailable){
 *       // it is available
 *
 *       AndroidFingerprintAuth.show({ clientId: "myAppName", clientSecret: "so_encrypted_much_secure_very_secret" })
 *         .then(result => {
 *            if(result.withFingerprint) {
 *              console.log('Successfully authenticated with fingerprint!');
 *            } else if(result.withPassword) {
 *              console.log('Successfully authenticated with backup password!');
 *            } else console.log('Didn\'t authenticate!');
 *         })
 *         .catch(error => console.error(error));
 *
 *     } else {
 *       // fingerprint auth isn't available
 *     }
 *   })
 *   .catch(error => console.error(error));
 * ```
 */
var AndroidFingerprintAuth = (function () {
    function AndroidFingerprintAuth() {
    }
    /**
     * Opens a native dialog fragment to use the device hardware fingerprint scanner to authenticate against fingerprints registered for the device.
     * @param params {any}
     */
    AndroidFingerprintAuth.show = function (params) { return; };
    /**
     * Check if service is available
     */
    AndroidFingerprintAuth.isAvailable = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], AndroidFingerprintAuth, "show", null);
    __decorate([
        plugin_1.Cordova()
    ], AndroidFingerprintAuth, "isAvailable", null);
    AndroidFingerprintAuth = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-android-fingerprint-auth',
            pluginRef: 'FingerprintAuth',
            repo: 'https://github.com/mjwheatley/cordova-plugin-android-fingerprint-auth'
        })
    ], AndroidFingerprintAuth);
    return AndroidFingerprintAuth;
}());
exports.AndroidFingerprintAuth = AndroidFingerprintAuth;
//# sourceMappingURL=android-fingerprint-auth.js.map