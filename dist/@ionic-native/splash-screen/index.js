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
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Splash Screen
 * @description This plugin displays and hides a splash screen during application launch. The methods below allows showing and hiding the splashscreen after the app has loaded.
 * @usage
 * ```typescript
 * import { SplashScreen } from '@ionic-native/splash-screen';
 *
 * constructor(private splashScreen: SplashScreen) { }
 *
 * ...
 *
 * this.splashScreen.show();
 *
 * this.splashScreen.hide();
 * ```
 */
var SplashScreen = (function (_super) {
    __extends(SplashScreen, _super);
    function SplashScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Shows the splashscreen
     */
    SplashScreen.prototype.show = function () { };
    /**
     * Hides the splashscreen
     */
    SplashScreen.prototype.hide = function () { };
    return SplashScreen;
}(IonicNativePlugin));
SplashScreen.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SplashScreen.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SplashScreen.prototype, "show", null);
__decorate([
    Cordova({
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SplashScreen.prototype, "hide", null);
SplashScreen = __decorate([
    Plugin({
        pluginName: 'SplashScreen',
        plugin: 'cordova-plugin-splashscreen',
        pluginRef: 'navigator.splashscreen',
        repo: 'https://github.com/apache/cordova-plugin-splashscreen',
        platforms: ['Amazon Fire OS', 'Android', 'BlackBerry 10', 'iOS', 'Tizen', 'Ubuntu', 'Windows', 'Windows Phone']
    })
], SplashScreen);
export { SplashScreen };
//# sourceMappingURL=index.js.map