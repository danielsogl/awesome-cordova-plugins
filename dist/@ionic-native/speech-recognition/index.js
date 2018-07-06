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
import { Observable } from 'rxjs/Observable';
/**
 * @name Speech Recognition
 * @description
 * This plugin does speech recognition using cloud services
 *
 * @usage
 * ```typescript
 * import { SpeechRecognition } from '@ionic-native/speech-recognition';
 *
 * constructor(private speechRecognition: SpeechRecognition) { }
 *
 * ...
 *
 *
 *
 * // Check feature available
 * this.speechRecognition.isRecognitionAvailable()
 *   .then((available: boolean) => console.log(available))
 *
 * // Start the recognition process
 * this.speechRecognition.startListening(options)
 *   .subscribe(
 *     (matches: Array<string>) => console.log(matches),
 *     (onerror) => console.log('error:', onerror)
 *   )
 *
 * // Stop the recognition process (iOS only)
 * this.speechRecognition.stopListening()
 *
 * // Get the list of supported languages
 * this.speechRecognition.getSupportedLanguages()
 *   .then(
 *     (languages: Array<string>) => console.log(languages),
 *     (error) => console.log(error)
 *   )
 *
 * // Check permission
 * this.speechRecognition.hasPermission()
 *   .then((hasPermission: boolean) => console.log(hasPermission))
 *
 * // Request permissions
 * this.speechRecognition.requestPermission()
 *   .then(
 *     () => console.log('Granted'),
 *     () => console.log('Denied')
 *   )
 *
 * ```
 */
var SpeechRecognition = (function (_super) {
    __extends(SpeechRecognition, _super);
    function SpeechRecognition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Check feature available
     * @return {Promise<boolean>}
     */
    SpeechRecognition.prototype.isRecognitionAvailable = function () {
        return;
    };
    /**
     * Start the recognition process
     * @return {Promise< Array<string> >} list of recognized terms
     */
    SpeechRecognition.prototype.startListening = function (options) {
        return;
    };
    /**
     * Stop the recognition process
     */
    SpeechRecognition.prototype.stopListening = function () {
        return;
    };
    /**
     * Get the list of supported languages
     * @return {Promise< Array<string> >} list of languages
     */
    SpeechRecognition.prototype.getSupportedLanguages = function () {
        return;
    };
    /**
     * Check permission
     * @return {Promise<boolean>} has permission
     */
    SpeechRecognition.prototype.hasPermission = function () {
        return;
    };
    /**
     * Request permissions
     * @return {Promise<void>}
     */
    SpeechRecognition.prototype.requestPermission = function () {
        return;
    };
    return SpeechRecognition;
}(IonicNativePlugin));
SpeechRecognition.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SpeechRecognition.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SpeechRecognition.prototype, "isRecognitionAvailable", null);
__decorate([
    Cordova({
        callbackOrder: 'reverse',
        observable: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Observable)
], SpeechRecognition.prototype, "startListening", null);
__decorate([
    Cordova({
        platforms: ['iOS']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SpeechRecognition.prototype, "stopListening", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SpeechRecognition.prototype, "getSupportedLanguages", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SpeechRecognition.prototype, "hasPermission", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SpeechRecognition.prototype, "requestPermission", null);
SpeechRecognition = __decorate([
    Plugin({
        pluginName: 'SpeechRecognition',
        plugin: 'cordova-plugin-speechrecognition',
        pluginRef: 'plugins.speechRecognition',
        repo: 'https://github.com/pbakondy/cordova-plugin-speechrecognition',
        platforms: ['Android', 'iOS']
    })
], SpeechRecognition);
export { SpeechRecognition };
//# sourceMappingURL=index.js.map