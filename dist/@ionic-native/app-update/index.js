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
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';
/**
 * @name App Update
 * @description
 * This plugin does self-update for android
 *
 * @usage
 *
 * You should first host an XML file on your server with the following data in it:
 * ```xml
 * <update>
 *     <version>302048</version>
 *     <name>APK Name</name>
 *     <url>https://your-remote-api.com/YourApp.apk</url>
 * </update>
 * ```
 *
 * Then use the following code:
 *
 * ```typescript
 * import { AppUpdate } from '@ionic-native/app-update';
 *
 * constructor(private appUpdate: AppUpdate) {
 *
 *    const updateUrl = 'http://your-remote-api.com/update.xml';
 *    this.appUpdate.checkAppUpdate(updateUrl);
 *
 * }
 * ```
 *
 * The plugin will compare the app version and update it automatically if the API has a newer version to install.
 */
var AppUpdate = (function (_super) {
    __extends(AppUpdate, _super);
    function AppUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Check and update
     * @param updateUrl {string} update api url
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    AppUpdate.prototype.checkAppUpdate = function (updateUrl) { return; };
    return AppUpdate;
}(IonicNativePlugin));
AppUpdate.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AppUpdate.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppUpdate.prototype, "checkAppUpdate", null);
AppUpdate = __decorate([
    Plugin({
        pluginName: 'AppUpdate',
        plugin: 'cordova-plugin-app-update',
        pluginRef: 'AppUpdate',
        repo: 'https://github.com/vaenow/cordova-plugin-app-update',
        platforms: ['Android']
    })
], AppUpdate);
export { AppUpdate };
//# sourceMappingURL=index.js.map