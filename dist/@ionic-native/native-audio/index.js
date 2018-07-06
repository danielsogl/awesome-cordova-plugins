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
 * @name Native Audio
 * @description Native Audio Playback
 * @usage
 * ```typescript
 * import { NativeAudio } from '@ionic-native/native-audio';
 *
 * constructor(private nativeAudio: NativeAudio) { }
 *
 * ...
 *
 * this.nativeAudio.preloadSimple('uniqueId1', 'path/to/file.mp3').then(onSuccess, onError);
 * this.nativeAudio.preloadComplex('uniqueId2', 'path/to/file2.mp3', 1, 1, 0).then(onSuccess, onError);
 *
 * this.nativeAudio.play('uniqueId1').then(onSuccess, onError);
 *
 * // can optionally pass a callback to be called when the file is done playing
 * this.nativeAudio.play('uniqueId1', () => console.log('uniqueId1 is done playing'));
 *
 * this.nativeAudio.loop('uniqueId2').then(onSuccess, onError);
 *
 * this.nativeAudio.setVolumeForComplexAsset('uniqueId2', 0.6).then(onSuccess,onError);
 *
 * this.nativeAudio.stop('uniqueId1').then(onSuccess,onError);
 *
 * this.nativeAudio.unload('uniqueId1').then(onSuccess,onError);
 *
 * ```
 */
var NativeAudio = (function (_super) {
    __extends(NativeAudio, _super);
    function NativeAudio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Loads an audio file into memory. Optimized for short clips / single shots (up to five seconds). Cannot be stopped / looped.
     * @param id {string} unique ID for the audio file
     * @param assetPath {string}  the relative path or absolute URL (inluding http://) to the audio asset.
     * @returns {Promise<any>}
     */
    NativeAudio.prototype.preloadSimple = function (id, assetPath) { return; };
    /**
     * Loads an audio file into memory. Optimized for background music / ambient sound. Uses highlevel native APIs with a larger footprint. (iOS: AVAudioPlayer). Can be stopped / looped and used with multiple voices. Can be faded in and out using the delay parameter.
     * @param id {string} unique ID for the audio file
     * @param assetPath {string}  the relative path or absolute URL (inluding http://) to the audio asset.
     * @param volume {number} the volume of the preloaded sound (0.1 to 1.0)
     * @param voices {number} the number of multichannel voices available
     * @param delay {number}
     * @returns {Promise<any>}
     */
    NativeAudio.prototype.preloadComplex = function (id, assetPath, volume, voices, delay) { return; };
    /**
     * Plays an audio asset
     * @param id {string} unique ID for the audio file
     * @param completeCallback {Function} optional. Callback to be invoked when audio is done playing
     * @returns {Promise<any>}
     */
    NativeAudio.prototype.play = function (id, completeCallback) { return; };
    /**
     * Stops playing an audio
     * @param id {string} unique ID for the audio file
     * @returns {Promise<any>}
     */
    NativeAudio.prototype.stop = function (id) { return; };
    /**
     * Loops an audio asset infinitely, this only works for complex assets
     * @param id {string} unique ID for the audio file
     * @return {Promise<any>}
     */
    NativeAudio.prototype.loop = function (id) { return; };
    /**
     * Unloads an audio file from memory
     * @param id {string} unique ID for the audio file
     * @returns {Promise<any>}
     */
    NativeAudio.prototype.unload = function (id) { return; };
    /**
     * Changes the volume for preloaded complex assets.
     * @param id {string} unique ID for the audio file
     * @param volume {number} the volume of the audio asset (0.1 to 1.0)
     * @returns {Promise<any>}
     */
    NativeAudio.prototype.setVolumeForComplexAsset = function (id, volume) { return; };
    return NativeAudio;
}(IonicNativePlugin));
NativeAudio.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NativeAudio.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], NativeAudio.prototype, "preloadSimple", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, Number, Number]),
    __metadata("design:returntype", Promise)
], NativeAudio.prototype, "preloadComplex", null);
__decorate([
    Cordova({
        successIndex: 1,
        errorIndex: 2
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Function]),
    __metadata("design:returntype", Promise)
], NativeAudio.prototype, "play", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NativeAudio.prototype, "stop", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NativeAudio.prototype, "loop", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NativeAudio.prototype, "unload", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], NativeAudio.prototype, "setVolumeForComplexAsset", null);
NativeAudio = __decorate([
    Plugin({
        pluginName: 'NativeAudio',
        plugin: 'cordova-plugin-nativeaudio',
        pluginRef: 'plugins.NativeAudio',
        repo: 'https://github.com/floatinghotpot/cordova-plugin-nativeaudio',
        platforms: ['Android', 'Browser', 'iOS']
    })
], NativeAudio);
export { NativeAudio };
//# sourceMappingURL=index.js.map