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
 * @name Background Fetch
 * @description
 * iOS Background Fetch Implementation. See: https://developer.apple.com/reference/uikit/uiapplication#1657399
 * iOS Background Fetch is basically an API which wakes up your app about every 15 minutes (during the user's prime-time hours) and provides your app exactly 30s of background running-time. This plugin will execute your provided callbackFn whenever a background-fetch event occurs. There is no way to increase the rate which a fetch-event occurs and this plugin sets the rate to the most frequent possible value of UIApplicationBackgroundFetchIntervalMinimum -- iOS determines the rate automatically based upon device usage and time-of-day (ie: fetch-rate is about ~15min during prime-time hours; less frequently when the user is presumed to be sleeping, at 3am for example).
 * For more detail, please see https://github.com/transistorsoft/cordova-plugin-background-fetch
 *
 * @usage
 *
 * ```typescript
 * import { BackgroundFetch, BackgroundFetchConfig } from '@ionic-native/background-fetch';
 *
 *
 * constructor(private backgroundFetch: BackgroundFetch) {
 *
 *   const config: BackgroundFetchConfig = {
 *     stopOnTerminate: false, // Set true to cease background-fetch from operating after user "closes" the app. Defaults to true.
 *   };
 *
 *   backgroundFetch.configure(config)
 *      .then(() => {
 *          console.log('Background Fetch initialized');
 *
 *          this.backgroundFetch.finish();
 *
 *      })
 *      .catch(e => console.log('Error initializing background fetch', e));
 *
 *   // Start the background-fetch API. Your callbackFn provided to #configure will be executed each time a background-fetch event occurs. NOTE the #configure method automatically calls #start. You do not have to call this method after you #configure the plugin
 *   backgroundFetch.start();
 *
 *   // Stop the background-fetch API from firing fetch events. Your callbackFn provided to #configure will no longer be executed.
 *   backgroundFetch.stop();
 *
 *
 * }
 *
 * ```
 * @interfaces
 * BackgroundFetchConfig
 *
 */
var BackgroundFetch = (function (_super) {
    __extends(BackgroundFetch, _super);
    function BackgroundFetch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Configures the plugin's fetch callbackFn
     *
     * @param {BackgroundFetchConfig} config Configuration for plugin
     * @return {Promise<any>}
     */
    BackgroundFetch.prototype.configure = function (config) { return; };
    /**
     * Start the background-fetch API.
     * Your callbackFn provided to #configure will be executed each time a background-fetch event occurs. NOTE the #configure method automatically calls #start. You do not have to call this method after you #configure the plugin
     * @returns {Promise<any>}
     */
    BackgroundFetch.prototype.start = function () { return; };
    /**
     * Stop the background-fetch API from firing fetch events. Your callbackFn provided to #configure will no longer be executed.
     * @returns {Promise<any>}
     */
    BackgroundFetch.prototype.stop = function () { return; };
    /**
     * You MUST call this method in your fetch callbackFn provided to #configure in order to signal to iOS that your fetch action is complete. iOS provides only 30s of background-time for a fetch-event -- if you exceed this 30s, iOS will kill your app.
     */
    BackgroundFetch.prototype.finish = function () { };
    /**
     * Return the status of the background-fetch
     * @returns {Promise<any>}
     */
    BackgroundFetch.prototype.status = function () { return; };
    return BackgroundFetch;
}(IonicNativePlugin));
BackgroundFetch.decorators = [
    { type: Injectable },
];
/** @nocollapse */
BackgroundFetch.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        callbackOrder: 'reverse'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BackgroundFetch.prototype, "configure", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BackgroundFetch.prototype, "start", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BackgroundFetch.prototype, "stop", null);
__decorate([
    Cordova({
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BackgroundFetch.prototype, "finish", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BackgroundFetch.prototype, "status", null);
BackgroundFetch = __decorate([
    Plugin({
        pluginName: 'BackgroundFetch',
        plugin: 'cordova-plugin-background-fetch',
        pluginRef: 'BackgroundFetch',
        repo: 'https://github.com/transistorsoft/cordova-plugin-background-fetch',
        platforms: ['iOS']
    })
], BackgroundFetch);
export { BackgroundFetch };
//# sourceMappingURL=index.js.map