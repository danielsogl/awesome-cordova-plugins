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
 * @name QQSDK
 * @description
 * This Plugin is a wrapper around the Tencent QQ SDK for Android and iOS. Provides access to QQ ssoLogin, QQ Sharing, QQZone Sharing etc.
 *
 * Requires Cordova plugin: `cordova-plugin-qqsdk`. For more info, please see the [QQSDK plugin docs](https://github.com/iVanPan/Cordova_QQ).
 *
 * @usage
 * ```typescript
 * import { QQSDK, QQShareOptions } from '@ionic-native/qqsdk';
 *
 * constructor(private qq: QQSDK) { }
 *
 * ...
 *
 *
 * const options: QQShareOptions = {
 *   client: this.qq.ClientType.QQ,
 *   scene: this.qq.Scene.QQ,
 *   title: 'This is a title for cordova-plugin-qqsdk',
 *   url: 'https://cordova.apache.org/',
 *   image: 'https://cordova.apache.org/static/img/cordova_bot.png',
 *   description: 'This is  Cordova QQ share description',
 *   flashUrl:  'http://stream20.qqmusic.qq.com/30577158.mp3',
 * };
 *
 * const clientOptions: QQShareOptions = {
 *   client: this.qq.ClientType.QQ,
 * };
 *
 * const shareTextOptions: QQShareOptions = {
 *   client: this.qq.ClientType.QQ,
 *   text: 'This is Share Text',
 *   scene: this.qq.Scene.QQ,
 * };
 *
 * this.qq.ssoLogin(clientOptions)
 *    .then(result => {
 *       // Success
 *       console.log('token is ' + result.access_token);
 *       console.log('userid is ' + result.userid);
 *       console.log('expires_time is ' + new Date(parseInt(result.expires_time)) + ' TimeStamp is ' + result.expires_time);
 *    })
 *    .catch(error => {
 *       console.log(error); // Failed
 *    });
 *
 * this.qq.logout()
 *    .then(() => {
 *       console.log('logout success');
 *    })
 *    .catch(error => {
 *       console.log(error);
 *    });
 *
 * this.qq.checkClientInstalled(clientOptions)
 *    .then(() => {
 *       console.log('Installed');
 *    })
 *    .catch(() => {
 *       console.log('Not Installed');
 *    });
 *
 * this.qq.shareText(shareTextOptions)
 *    .then(() => {
 *       console.log('shareText success');
 *    })
 *    .catch(error => {
 *       console.log(error);
 *    });
 *
 * this.qq.shareImage(options)
 *    .then(() => {
 *       console.log('shareImage success');
 *    })
 *    .catch(error => {
 *       console.log(error);
 *    });
 * }
 *
 * this.qq.shareNews(options)
 *    .then(() => {
 *       console.log('shareNews success');
 *    })
 *    .catch(error => {
 *       console.log(error);
 *    });
 * }
 *
 * this.qq.shareAudio(options)
 *    .then(() => {
 *       console.log('shareAudio success');
 *    })
 *    .catch(error => {
 *       console.log(error);
 *    });
 *
 * ```
 *
 * @interfaces
 * QQShareOptions
 */
var QQSDK = (function (_super) {
    __extends(QQSDK, _super);
    function QQSDK() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * QQ Share Scene
         */
        _this.Scene = {
            QQ: 0,
            QQZone: 1,
            Favorite: 2
        };
        /**
         *  client type:  QQ application or TIM application
         */
        _this.ClientType = {
            QQ: 0,
            TIM: 1
        };
        return _this;
    }
    /**
     * open QQ or TIM client perform ssoLogin
     * @param options
     * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
     */
    QQSDK.prototype.ssoLogin = function (options) {
        return;
    };
    QQSDK.prototype.logout = function () {
        return;
    };
    /**
     * Detect if the QQ application or TIM application is installed on the device.
     *
     * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
     */
    QQSDK.prototype.checkClientInstalled = function (options) {
        return;
    };
    /**
     * shareText
     * @param options
     * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
     */
    QQSDK.prototype.shareText = function (options) {
        return;
    };
    /**
     * shareImage
     * @param options
     * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
     */
    QQSDK.prototype.shareImage = function (options) {
        return;
    };
    /**
     * shareNews
     * @param options
     * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
     */
    QQSDK.prototype.shareNews = function (options) {
        return;
    };
    /**
     * shareAudio
     * @param options
     * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
     */
    QQSDK.prototype.shareAudio = function (options) {
        return;
    };
    return QQSDK;
}(IonicNativePlugin));
QQSDK.decorators = [
    { type: Injectable },
];
/** @nocollapse */
QQSDK.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QQSDK.prototype, "ssoLogin", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QQSDK.prototype, "logout", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QQSDK.prototype, "checkClientInstalled", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QQSDK.prototype, "shareText", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QQSDK.prototype, "shareImage", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QQSDK.prototype, "shareNews", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QQSDK.prototype, "shareAudio", null);
QQSDK = __decorate([
    Plugin({
        pluginName: 'QQSDK',
        plugin: 'cordova-plugin-qqsdk',
        pluginRef: 'QQSDK',
        repo: 'https://github.com/iVanPan/Cordova_QQ',
        platforms: ['Android', 'iOS'],
        install: 'ionic cordova plugin add cordova-plugin-qqsdk --variable QQ_APP_ID=YOUR_QQ_APPID',
        installVariables: ['QQ_APP_ID'],
    })
], QQSDK);
export { QQSDK };
//# sourceMappingURL=index.js.map