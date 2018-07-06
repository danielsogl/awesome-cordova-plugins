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
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';
/**
 * @beta
 * @name Native Ringtones
 * @description
 * The plugin helps get the native ringtones list on Android or IOS devices.
 * And you can also use this plugin to play or stop the native ringtones and custom ringtones(added in the www folder).
 *
 * @usage
 * ```
 * import { NativeRingtones } from '@ionic-native/native-ringtones';
 *
 *
 * constructor(private ringtones: NativeRingtones) { }
 *
 * ...
 * this.ringtones.getRingtone().then((ringtones) => { console.log(ringtones); });
 *
 * this.ringtones.playRingtone('assets/ringtones/sound_1.caf');
 *
 * this.ringtones.stopRingtone('assets/ringtones/sound_1.caf');
 *
 * ```
 */
var NativeRingtones = (function (_super) {
    __extends(NativeRingtones, _super);
    function NativeRingtones() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get the ringtone list of the device
     * @return {Promise<any>} Returns a promise that resolves when ringtones found successfully
     */
    NativeRingtones.prototype.getRingtone = function () { return; };
    /**
     * This function starts playing the ringtone
     * @param {string} ringtoneUri The path to the ringtone file
     * @return {Promise<any>} Returns a promise
     */
    NativeRingtones.prototype.playRingtone = function (ringtoneUri) { return; };
    /**
     * This function stops playing the ringtone
     * @param {string} ringtoneUri The path to the ringtone file
     * @return {Promise<any>} Returns a promise
     */
    NativeRingtones.prototype.stopRingtone = function (ringtoneUri) { return; };
    return NativeRingtones;
}(IonicNativePlugin));
NativeRingtones.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NativeRingtones.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NativeRingtones.prototype, "getRingtone", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NativeRingtones.prototype, "playRingtone", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NativeRingtones.prototype, "stopRingtone", null);
NativeRingtones = __decorate([
    Plugin({
        pluginName: 'native-ringtones',
        plugin: 'cordova-plugin-native-ringtones',
        pluginRef: 'cordova.plugins.NativeRingtones',
        repo: 'https://github.com/TongZhangzt/cordova-plugin-native-ringtones',
        platforms: ['Android', 'iOS']
    })
], NativeRingtones);
export { NativeRingtones };
//# sourceMappingURL=index.js.map