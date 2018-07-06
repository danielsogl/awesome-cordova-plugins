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
 * @name Header Color
 * @description
 * Cordova plugin to change color of header in Android Multitask View
 *
 * @usage
 * ```typescript
 * import { HeaderColor } from '@ionic-native/header-color';
 *
 * constructor(private headerColor: HeaderColor) { }
 *
 * ...
 *
 * this.headerColor.tint('#becb29');
 * ```
 */
var HeaderColor = (function (_super) {
    __extends(HeaderColor, _super);
    function HeaderColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Set a color to the task header
     * @param color {string} The hex value of the color
     * @returns {Promise<any>}
     */
    HeaderColor.prototype.tint = function (color) { return; };
    return HeaderColor;
}(IonicNativePlugin));
HeaderColor.decorators = [
    { type: Injectable },
];
/** @nocollapse */
HeaderColor.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        callbackStyle: 'object',
        successName: 'success',
        errorName: 'failure'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HeaderColor.prototype, "tint", null);
HeaderColor = __decorate([
    Plugin({
        pluginName: 'HeaderColor',
        plugin: 'cordova-plugin-headercolor',
        pluginRef: 'plugins.headerColor',
        repo: 'https://github.com/tomloprod/cordova-plugin-headercolor',
        platforms: ['Android']
    })
], HeaderColor);
export { HeaderColor };
//# sourceMappingURL=index.js.map