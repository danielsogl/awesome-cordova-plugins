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
 * @name Mixpanel
 * @description
 * Cordova Plugin that wraps Mixpanel SDK for Android and iOS
 *
 * @usage
 * ```typescript
 * import { Mixpanel } from '@ionic-native/mixpanel';
 *
 * constructor(private mixpanel: Mixpanel, private mixpanelPeople: MixpanelPeople) { }
 *
 * ...
 *
 * this.mixpanel.init(token)
 *   .then(onSuccess)
 *   .catch(onError);
 *
 * ```
 * @classes
 * MixpanelPeople
 */
var Mixpanel = (function (_super) {
    __extends(Mixpanel, _super);
    function Mixpanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * @param aliasId {string}
     * @param originalId {string}
     * @returns {Promise<any>}
     */
    Mixpanel.prototype.alias = function (aliasId, originalId) { return; };
    /**
     *
     * @returns {Promise<any>}
     */
    Mixpanel.prototype.distinctId = function () { return; };
    /**
     * @returns {Promise<any>}
     */
    Mixpanel.prototype.flush = function () { return; };
    /**
     *
     * @param distinctId {string}
     * @returns {Promise<any>}
     */
    Mixpanel.prototype.identify = function (distinctId) { return; };
    /**
     *
     * @param token {string}
     * @returns {Promise<any>}
     */
    Mixpanel.prototype.init = function (token) { return; };
    /**
     *
     * @param superProperties {any}
     * @returns {Promise<any>}
     */
    Mixpanel.prototype.registerSuperProperties = function (superProperties) { return; };
    /**
     *
     * @returns {Promise<any>}
     */
    Mixpanel.prototype.reset = function () { return; };
    /**
     *
     * @param eventName {string}
     * @returns {Promise<any>}
     */
    Mixpanel.prototype.timeEvent = function (eventName) { return; };
    /**
     *
     * @param eventName {string}
     * @param eventProperties {any} optional
     * @returns {Promise<any>}
     */
    Mixpanel.prototype.track = function (eventName, eventProperties) { return; };
    return Mixpanel;
}(IonicNativePlugin));
Mixpanel.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Mixpanel.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], Mixpanel.prototype, "alias", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Mixpanel.prototype, "distinctId", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Mixpanel.prototype, "flush", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Mixpanel.prototype, "identify", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Mixpanel.prototype, "init", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Mixpanel.prototype, "registerSuperProperties", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Mixpanel.prototype, "reset", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Mixpanel.prototype, "timeEvent", null);
__decorate([
    Cordova({
        successIndex: 2,
        errorIndex: 3
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], Mixpanel.prototype, "track", null);
Mixpanel = __decorate([
    Plugin({
        pluginName: 'Mixpanel',
        plugin: 'cordova-plugin-mixpanel',
        pluginRef: 'mixpanel',
        repo: 'https://github.com/samzilverberg/cordova-mixpanel-plugin',
        platforms: ['Android', 'Browser', 'iOS']
    })
], Mixpanel);
export { Mixpanel };
/**
 * @hidden
 */
var MixpanelPeople = (function (_super) {
    __extends(MixpanelPeople, _super);
    function MixpanelPeople() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * @param distinctId {string}
     * @return {Promise<any>}
     */
    MixpanelPeople.prototype.identify = function (distinctId) { return; };
    /**
     *
     * @param peopleProperties {string}
     * @return {Promise<any>}
     */
    MixpanelPeople.prototype.increment = function (peopleProperties) { return; };
    /**
     *
     * @param pushId
     * @return {Promise<any>}
     */
    MixpanelPeople.prototype.setPushId = function (pushId) { return; };
    /**
     *
     * @param peopleProperties
     * @return {Promise<any>}
     */
    MixpanelPeople.prototype.set = function (peopleProperties) { return; };
    /**
     *
     * @param peopleProperties
     * @return {Promise<any>}
     */
    MixpanelPeople.prototype.setOnce = function (peopleProperties) { return; };
    return MixpanelPeople;
}(IonicNativePlugin));
MixpanelPeople.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MixpanelPeople.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MixpanelPeople.prototype, "identify", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MixpanelPeople.prototype, "increment", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MixpanelPeople.prototype, "setPushId", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MixpanelPeople.prototype, "set", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MixpanelPeople.prototype, "setOnce", null);
MixpanelPeople = __decorate([
    Plugin({
        plugin: 'cordova-plugin-mixpanel',
        pluginRef: 'mixpanel.people',
        pluginName: 'Mixpanel'
    })
], MixpanelPeople);
export { MixpanelPeople };
//# sourceMappingURL=index.js.map