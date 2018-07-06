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
 * @beta
 * @name Navigation Bar
 * @description
 * The NavigationBar plugin can you to hide and auto hide the android navigation bar.
 *
 * @usage
 * ```typescript
 * import { NavigationBar } from '@ionic-native/navigation-bar';
 *
 * constructor(private navigationBar: NavigationBar) { }
 *
 * ...
 *
 * let autoHide: boolean = true;
 * this.navigationBar.hide(autoHide);
 * ```
 */
var NavigationBar = (function (_super) {
    __extends(NavigationBar, _super);
    function NavigationBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * hide automatically (or not) the navigation bar.
     * @param autohide {boolean}
     * @return {Promise<any>}
     */
    NavigationBar.prototype.setUp = function (autohide) { return; };
    /**
     * Hide the navigation bar.
     * @return {Promise<any>}
     */
    NavigationBar.prototype.hideNavigationBar = function () { return; };
    return NavigationBar;
}(IonicNativePlugin));
NavigationBar.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NavigationBar.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        callbackStyle: 'object',
        successName: 'success',
        errorName: 'failure'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], NavigationBar.prototype, "setUp", null);
__decorate([
    Cordova({
        callbackStyle: 'object',
        successName: 'success',
        errorName: 'failure'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NavigationBar.prototype, "hideNavigationBar", null);
NavigationBar = __decorate([
    Plugin({
        pluginName: 'NavigationBar',
        plugin: 'cordova-plugin-navigationbar',
        pluginRef: 'navigationbar',
        repo: 'https://github.com/cranberrygame/cordova-plugin-navigationbar',
        platforms: ['Android']
    })
], NavigationBar);
export { NavigationBar };
//# sourceMappingURL=index.js.map