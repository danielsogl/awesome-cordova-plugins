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
 * @name Native Page Transitions
 * @description
 * The Native Page Transitions plugin uses native hardware acceleration to animate your transitions between views. You have complete control over the type of transition, the duration, and direction.
 *
 * @usage
 * ```typescript
 * import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
 *
 * constructor(private nativePageTransitions: NativePageTransitions) { }
 *
 * ...
 *
 *
 * // example of adding a transition when a page/modal closes
 * ionViewWillLeave() {
 *
 *  let options: NativeTransitionOptions = {
 *     direction: 'up',
 *     duration: 500,
 *     slowdownfactor: 3,
 *     slidePixels: 20,
 *     iosdelay: 100,
 *     androiddelay: 150,
 *     fixedPixelsTop: 0,
 *     fixedPixelsBottom: 60
 *    };
 *
 *  this.nativePageTransitions.slide(options)
 *    .then(onSuccess)
 *    .catch(onError);
 *
 * }
 *
 *
 * // example of adding a transition when pushing a new page
 * openPage(page: any) {
 *
 *   this.nativePageTransitions.slide(options);
 *   this.navCtrl.push(page);
 *
 * }
 *
 * ```
 */
var NativePageTransitions = (function (_super) {
    __extends(NativePageTransitions, _super);
    function NativePageTransitions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Perform a slide animation
     * @param options {NativeTransitionOptions} Options for the transition
     * @returns {Promise<any>}
     */
    NativePageTransitions.prototype.slide = function (options) { return; };
    /**
     * Perform a flip animation
     * @param options {NativeTransitionOptions} Options for the transition
     * @returns {Promise<any>}
     */
    NativePageTransitions.prototype.flip = function (options) { return; };
    /**
     * Perform a fade animation
     * @param options {NativeTransitionOptions} Options for the transition
     * @returns {Promise<any>}
     */
    NativePageTransitions.prototype.fade = function (options) { return; };
    /**
     * Perform a slide animation
     * @param options {NativeTransitionOptions} Options for the transition
     * @returns {Promise<any>}
     */
    NativePageTransitions.prototype.drawer = function (options) { return; };
    /**
     * Perform a slide animation
     * @param options {NativeTransitionOptions} Options for the transition
     * @returns {Promise<any>}
     */
    NativePageTransitions.prototype.curl = function (options) { return; };
    /**
     * Execute pending transition
     * @returns {Promise<any>}
     */
    NativePageTransitions.prototype.executePendingTransition = function () { return; };
    /**
     * Cancel pending transition
     * @returns {Promise<any>}
     */
    NativePageTransitions.prototype.cancelPendingTransition = function () { return; };
    return NativePageTransitions;
}(IonicNativePlugin));
NativePageTransitions.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NativePageTransitions.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NativePageTransitions.prototype, "slide", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NativePageTransitions.prototype, "flip", null);
__decorate([
    Cordova({ platforms: ['iOS', 'Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NativePageTransitions.prototype, "fade", null);
__decorate([
    Cordova({ platforms: ['iOS', 'Android'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NativePageTransitions.prototype, "drawer", null);
__decorate([
    Cordova({ platforms: ['iOS'] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NativePageTransitions.prototype, "curl", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NativePageTransitions.prototype, "executePendingTransition", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NativePageTransitions.prototype, "cancelPendingTransition", null);
NativePageTransitions = __decorate([
    Plugin({
        pluginName: 'NativePageTransitions',
        plugin: 'com.telerik.plugins.nativepagetransitions',
        pluginRef: 'plugins.nativepagetransitions',
        repo: 'https://github.com/Telerik-Verified-Plugins/NativePageTransitions',
        platforms: ['Android', 'iOS', 'Windows Phone 8']
    })
], NativePageTransitions);
export { NativePageTransitions };
//# sourceMappingURL=index.js.map