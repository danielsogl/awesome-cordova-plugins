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
 * @name Power Management
 * @description
 * The PowerManagement plugin offers access to the devices power-management functionality.
 * It should be used for applications which keep running for a long time without any user interaction.
 *
 * @usage
 * ```typescript
 * import { PowerManagement } from '@ionic-native/power-management';
 *
 * constructor(private powerManagement: PowerManagement) { }
 *
 * ...
 *
 * this.powerManagement.acquire()
 *   .then(onSuccess)
 *   .catch(onError);
 *
 * ```
 */
var PowerManagement = (function (_super) {
    __extends(PowerManagement, _super);
    function PowerManagement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Acquire a wakelock by calling this.
     * @returns {Promise<any>}
     */
    PowerManagement.prototype.acquire = function () { return; };
    /**
     * This acquires a partial wakelock, allowing the screen to be dimmed.
     * @returns {Promise<any>}
     */
    PowerManagement.prototype.dim = function () { return; };
    /**
     * Release the wakelock. It's important to do this when you're finished with the wakelock, to avoid unnecessary battery drain.
     * @returns {Promise<any>}
     */
    PowerManagement.prototype.release = function () { return; };
    /**
     * By default, the plugin will automatically release a wakelock when your app is paused (e.g. when the screen is turned off, or the user switches to another app).
     * It will reacquire the wakelock upon app resume. If you would prefer to disable this behaviour, you can use this function.
     * @param set {boolean}
     * @returns {Promise<any>}
     */
    PowerManagement.prototype.setReleaseOnPause = function (set) { return; };
    return PowerManagement;
}(IonicNativePlugin));
PowerManagement.decorators = [
    { type: Injectable },
];
/** @nocollapse */
PowerManagement.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PowerManagement.prototype, "acquire", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PowerManagement.prototype, "dim", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PowerManagement.prototype, "release", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], PowerManagement.prototype, "setReleaseOnPause", null);
PowerManagement = __decorate([
    Plugin({
        pluginName: 'PowerManagement',
        plugin: 'cordova-plugin-powermanagement-orig',
        pluginRef: 'powerManagement',
        repo: 'https://github.com/Viras-/cordova-plugin-powermanagement',
        platforms: ['Android', 'iOS', 'Windows', 'Windows Phone']
    })
], PowerManagement);
export { PowerManagement };
//# sourceMappingURL=index.js.map