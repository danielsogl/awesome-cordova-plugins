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
 * @name App Minimize
 * @description
 * AppMinimize is a plugin to minimize the application on android devices
 *
 * @usage
 * ```typescript
 * import { Platfrom } from 'ionic-angular';
 * import { AppMinimize } from '@ionic-native/app-minimize';
 *
 *
 * constructor(private platform: Platform, private appMinimize: AppMinimize) { }
 *
 * ...
 *
 * this.platform.registerBackButtonAction(() => {
 *    this.appMinimize.minimize();
 * });
 *
 * ```
 */
var AppMinimize = (function (_super) {
    __extends(AppMinimize, _super);
    function AppMinimize() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Minimizes the application
     * @return {Promise<any>}
     */
    AppMinimize.prototype.minimize = function () { return; };
    return AppMinimize;
}(IonicNativePlugin));
AppMinimize.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AppMinimize.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppMinimize.prototype, "minimize", null);
AppMinimize = __decorate([
    Plugin({
        pluginName: 'AppMinimize',
        plugin: 'cordova-plugin-appminimize',
        pluginRef: 'plugins.appMinimize',
        repo: 'https://github.com/tomloprod/cordova-plugin-appminimize',
        platforms: ['Android']
    })
], AppMinimize);
export { AppMinimize };
//# sourceMappingURL=index.js.map