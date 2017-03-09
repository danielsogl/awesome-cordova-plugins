"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name NativeAudio
 * @description Native Audio Playback
 * @usage
 * ```typescript
 * import {NativeAudio} from 'ionic-native';
 *
 * NativeAudio.preloadSimple('uniqueId1', 'path/to/file.mp3').then(onSuccess, onError);
 * NativeAudio.preloadComplex('uniqueId2', 'path/to/file2.mp3', 1, 1, 0).then(onSuccess, onError);
 *
 * NativeAudio.play('uniqueId1').then(onSuccess, onError);
 * NativeAudio.loop('uniqueId2').then(onSuccess, onError);
 *
 * NativeAudio.setVolumeForComplexAsset('uniqueId2', 0.6).then(onSuccess,onError);
 *
 * NativeAudio.stop('uniqueId1').then(onSuccess,onError);
 *
 * NativeAudio.unload('uniqueId1').then(onSuccess,onError);
 *
 * ```
 */
var NativeAudio = (function () {
    function NativeAudio() {
    }
    /**
     * Loads an audio file into memory. Optimized for short clips / single shots (up to five seconds). Cannot be stopped / looped.
     * @param id {string} unique ID for the audio file
     * @param assetPath {string}  the relative path or absolute URL (inluding http://) to the audio asset.
     * @returns {Promise<any>}
     */
    NativeAudio.preloadSimple = function (id, assetPath) { return; };
    /**
     * Loads an audio file into memory. Optimized for background music / ambient sound. Uses highlevel native APIs with a larger footprint. (iOS: AVAudioPlayer). Can be stopped / looped and used with multiple voices. Can be faded in and out using the delay parameter.
     * @param id {string} unique ID for the audio file
     * @param assetPath {string}  the relative path or absolute URL (inluding http://) to the audio asset.
     * @param volume {number} the volume of the preloaded sound (0.1 to 1.0)
     * @param voices {number} the number of multichannel voices available
     * @param delay {number}
     * @returns {Promise<any>}
     */
    NativeAudio.preloadComplex = function (id, assetPath, volume, voices, delay) { return; };
    /**
     * Plays an audio asset
     * @param id {string} unique ID for the audio file
     * @param completeCallback {Function} callback to be invoked when audio is done playing
     */
    NativeAudio.play = function (id, completeCallback) { return; };
    /**
     * Stops playing an audio
     * @param id {string} unique ID for the audio file
     */
    NativeAudio.stop = function (id) { return; };
    /**
     * Loops an audio asset infinitely, this only works for complex assets
     * @param id {string} unique ID for the audio file
     * @return {Promise<any>}
     */
    NativeAudio.loop = function (id) { return; };
    /**
     * Unloads an audio file from memory
     * @param id {string} unique ID for the audio file
     */
    NativeAudio.unload = function (id) { return; };
    /**
     * Changes the volume for preloaded complex assets.
     * @param id {string} unique ID for the audio file
     * @param volume {number} the volume of the audio asset (0.1 to 1.0)
     */
    NativeAudio.setVolumeForComplexAsset = function (id, volume) { return; };
    __decorate([
        plugin_1.Cordova()
    ], NativeAudio, "preloadSimple", null);
    __decorate([
        plugin_1.Cordova()
    ], NativeAudio, "preloadComplex", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 2
        })
    ], NativeAudio, "play", null);
    __decorate([
        plugin_1.Cordova()
    ], NativeAudio, "stop", null);
    __decorate([
        plugin_1.Cordova()
    ], NativeAudio, "loop", null);
    __decorate([
        plugin_1.Cordova()
    ], NativeAudio, "unload", null);
    __decorate([
        plugin_1.Cordova()
    ], NativeAudio, "setVolumeForComplexAsset", null);
    NativeAudio = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-nativeaudio',
            pluginRef: 'plugins.NativeAudio',
            repo: 'https://github.com/floatinghotpot/cordova-plugin-nativeaudio'
        })
    ], NativeAudio);
    return NativeAudio;
}());
exports.NativeAudio = NativeAudio;
//# sourceMappingURL=native-audio.js.map