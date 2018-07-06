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
 * @name Insomnia
 * @description
 * Prevent the screen of the mobile device from falling asleep.
 *
 * @usage
 * ```typescript
 * import { Insomnia } from '@ionic-native/insomnia';
 *
 * constructor(private insomnia: Insomnia) { }
 *
 * ...
 *
 * this.insomnia.keepAwake()
 *   .then(
 *     () => console.log('success'),
 *     () => console.log('error')
 *   );
 *
 * this.insomnia.allowSleepAgain()
 *   .then(
 *     () => console.log('success'),
 *     () => console.log('error')
 *   );
 * ```
 *
 */
var Insomnia = (function (_super) {
    __extends(Insomnia, _super);
    function Insomnia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Keeps awake the application
     * @returns {Promise<any>}
     */
    Insomnia.prototype.keepAwake = function () { return; };
    /**
     * Allows the application to sleep again
     * @returns {Promise<any>}
     */
    Insomnia.prototype.allowSleepAgain = function () { return; };
    return Insomnia;
}(IonicNativePlugin));
Insomnia.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Insomnia.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Insomnia.prototype, "keepAwake", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Insomnia.prototype, "allowSleepAgain", null);
Insomnia = __decorate([
    Plugin({
        pluginName: 'Insomnia',
        plugin: 'cordova-plugin-insomnia',
        pluginRef: 'plugins.insomnia',
        repo: 'https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin',
        platforms: ['Android', 'Browser', 'Firefox OS', 'iOS', 'Windows', 'Windows Phone 8']
    })
], Insomnia);
export { Insomnia };
//# sourceMappingURL=index.js.map