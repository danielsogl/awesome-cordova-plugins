var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
/**
 * @beta
 * @name Firebase Dynamic Links
 * @description
 * Cordova plugin for Firebase Invites and Firebase Dynamic Links
 *
 * Variables APP_DOMAIN and APP_PATH specify web URL where your app will start an activity to handle the link. They also used to setup support for App Indexing.
 *
 * Go to firebase console and export google-services.json and GoogleService-Info.plist. Put those files into the root of your cordova app folder.
 *
 * Preferences:
 *
 * Preferences GoogleIOSClientId and GoogleAndroidClientId are used to setup dynamic links when you have an app for several platforms.
 * You can find values at your GoogleService-Info.plist (key ANDROID_CLIENT_ID) and google-services.json (key client[0].oauth_client[0].client_id).
 *
 *config.xml:
 * ```xml
 * <platform name="android">
 *     <preference name="GoogleIOSClientId" value="..." />
 * </platform>
 * <platform name="ios">
 *     <preference name="GoogleAndroidClientId" value="..." />
 * </platform>
 * ```
 * @usage
 * ```typescript
 * import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links';
 *
 *
 * constructor(private firebaseDynamicLinks: FirebaseDynamicLinks) { }
 *
 * ...
 * // The deepLink and callToActionText properties are optional
 * const options: DynamicLinksOptions = {
 *   title: 'My Title';
 *   message: 'My message';
 *   deepLink: 'http://example.com/';
 *   callToActionText: 'Message on button';
 * }
 *
 * this.firebaseDynamicLinks.sendInvitation(options)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * this.firebaseDynamicLinks.onDynamicLink()
 *   .then((res: any) => console.log(res)) //Handle the logic here after opening the app with the Dynamic link
 *   .catch((error:any) => console.log(error));
 * ```
 *
 * @interfaces
 * DynamicLinksOptions
 */
var FirebaseDynamicLinks = (function (_super) {
    __extends(FirebaseDynamicLinks, _super);
    function FirebaseDynamicLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Registers callback that is triggered on each dynamic link click.
     * @return {Promise<any>} Returns a promise
     */
    FirebaseDynamicLinks.prototype.onDynamicLink = function () { return; };
    /**
     * Display invitation dialog.
     * @param options {DynamicLinksOptions} Some param to configure something
     * @return {Promise<any>} Returns a promise
     */
    FirebaseDynamicLinks.prototype.sendInvitation = function (options) { return; };
    return FirebaseDynamicLinks;
}(IonicNativePlugin));
FirebaseDynamicLinks.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FirebaseDynamicLinks.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FirebaseDynamicLinks.prototype, "onDynamicLink", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FirebaseDynamicLinks.prototype, "sendInvitation", null);
FirebaseDynamicLinks = __decorate([
    Plugin({
        pluginName: 'FirebaseDynamicLinks',
        plugin: ' cordova-plugin-firebase-dynamiclinks',
        pluginRef: 'cordova.plugins.firebase.dynamiclinks',
        repo: 'https://github.com/chemerisuk/cordova-plugin-firebase-dynamiclinks',
        install: 'ionic cordova plugin add cordova-plugin-firebase-dynamiclinks --save --variable APP_DOMAIN="example.com" --variable APP_PATH="/"',
        installVariables: ['APP_DOMAIN', 'APP_PATH'],
        platforms: ['Android', 'iOS']
    })
], FirebaseDynamicLinks);
export { FirebaseDynamicLinks };
//# sourceMappingURL=index.js.map