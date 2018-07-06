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
 * @name Rollbar
 * @description
 * This plugin adds Rollbar App monitoring to your application
 *
 * @usage
 * ```typescript
 * import { Rollbar } from '@ionic-native/rollbar';
 *
 * constructor(private rollbar: Rollbar) { }
 *
 * ...
 *
 * this.rollbar.init();
 *
 * ```
 */
var Rollbar = (function (_super) {
    __extends(Rollbar, _super);
    function Rollbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function initializes the monitoring of your application
     * @return {Promise<any>} Returns a promise that resolves when the plugin successfully initializes
     */
    Rollbar.prototype.init = function () { return; };
    return Rollbar;
}(IonicNativePlugin));
Rollbar.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Rollbar.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Rollbar.prototype, "init", null);
Rollbar = __decorate([
    Plugin({
        pluginName: 'Rollbar',
        plugin: 'resgrid-cordova-plugins-rollbar',
        pluginRef: 'cordova.plugins.Rollbar',
        repo: 'https://github.com/Resgrid/cordova-plugins-rollbar',
        install: 'ionic cordova plugin add resgrid-cordova-plugins-rollbar --variable ROLLBAR_ACCESS_TOKEN="YOUR_ROLLBAR_ACCEESS_TOKEN" --variable ROLLBAR_ENVIRONMENT="ROLLBAR_ENVIRONMENT"',
        installVariables: ['ROLLBAR_ACCESS_TOKEN', 'ROLLBAR_ENVIRONMENT'],
        platforms: ['Android', 'iOS']
    })
], Rollbar);
export { Rollbar };
//# sourceMappingURL=index.js.map