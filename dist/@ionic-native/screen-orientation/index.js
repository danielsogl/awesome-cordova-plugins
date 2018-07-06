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
import { Cordova, CordovaProperty, Plugin, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
/**
 * @name Screen Orientation
 * @description
 * Cordova plugin to set/lock the screen orientation in a common way.
 *
 * Requires Cordova plugin: `cordova-plugin-screen-orientation`. For more info, please see the [Screen Orientation plugin docs](https://github.com/apache/cordova-plugin-screen-orientation).
 *
 * @usage
 * ```typescript
 * import { ScreenOrientation } from '@ionic-native/screen-orientation';
 *
 * constructor(private screenOrientation: ScreenOrientation) { }
 *
 * ...
 *
 *
 * // get current
 * console.log(this.screenOrientation.type); // logs the current orientation, example: 'landscape'
 *
 * // set to landscape
 * this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
 *
 * // allow user rotate
 * this.screenOrientation.unlock();
 *
 * // detect orientation changes
 * this.screenOrientation.onChange().subscribe(
 *    () => {
 *        console.log("Orientation Changed");
 *    }
 * );
 *
 * ```
 *
 * @advanced
 *
 * Accepted orientation values:
 *
 * | Value                         | Description                                                                  |
 * |-------------------------------|------------------------------------------------------------------------------|
 * | portrait-primary              | The orientation is in the primary portrait mode.                             |
 * | portrait-secondary            | The orientation is in the secondary portrait mode.                           |
 * | landscape-primary             | The orientation is in the primary landscape mode.                            |
 * | landscape-secondary           | The orientation is in the secondary landscape mode.                          |
 * | portrait                      | The orientation is either portrait-primary or portrait-secondary (sensor).   |
 * | landscape                     | The orientation is either landscape-primary or landscape-secondary (sensor). |
 *
 */
var ScreenOrientation = (function (_super) {
    __extends(ScreenOrientation, _super);
    function ScreenOrientation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Convenience enum for possible orientations
         */
        _this.ORIENTATIONS = {
            PORTRAIT_PRIMARY: 'portrait-primary',
            PORTRAIT_SECONDARY: 'portrait-secondary',
            LANDSCAPE_PRIMARY: 'landscape-primary',
            LANDSCAPE_SECONDARY: 'landscape-secondary',
            PORTRAIT: 'portrait',
            LANDSCAPE: 'landscape',
            ANY: 'any'
        };
        return _this;
    }
    /**
     * Listen to orientation change event
     * @return {Observable<void>}
     */
    ScreenOrientation.prototype.onChange = function () { return; };
    /**
     * Lock the orientation to the passed value.
     * See below for accepted values
     * @param orientation {string} The orientation which should be locked. Accepted values see table above.
     * @return {Promise<any>}
     */
    ScreenOrientation.prototype.lock = function (orientation) { return; };
    /**
     * Unlock and allow all orientations.
     */
    ScreenOrientation.prototype.unlock = function () { };
    return ScreenOrientation;
}(IonicNativePlugin));
ScreenOrientation.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ScreenOrientation.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        eventObservable: true,
        event: 'orientationchange'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], ScreenOrientation.prototype, "onChange", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScreenOrientation.prototype, "lock", null);
__decorate([
    Cordova({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ScreenOrientation.prototype, "unlock", null);
__decorate([
    CordovaProperty,
    __metadata("design:type", String)
], ScreenOrientation.prototype, "type", void 0);
ScreenOrientation = __decorate([
    Plugin({
        pluginName: 'ScreenOrientation',
        plugin: 'cordova-plugin-screen-orientation',
        pluginRef: 'screen.orientation',
        repo: 'https://github.com/apache/cordova-plugin-screen-orientation',
        platforms: ['Android', 'BlackBerry 10', 'iOS', 'Windows']
    })
], ScreenOrientation);
export { ScreenOrientation };
//# sourceMappingURL=index.js.map