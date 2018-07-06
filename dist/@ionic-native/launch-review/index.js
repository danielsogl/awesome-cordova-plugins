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
 * @name Launch Review
 * @description
 *
 * This launches the native store app in order for the user to leave a review.
 * On Android, the plugin opens the the app's storepage in the Play Store where the user can leave a review by pressing the stars to give a rating.
 * On iOS, the plugin opens the app's storepage in the App Store and focuses the Review tab, where the user can leave a review by pressing "Write a review".
 *
 * @usage
 * ```typescript
 * import { LaunchReview } from '@ionic-native/launch-review';
 *
 * constructor(private launchReview: LaunchReview) { }
 *
 * ...
 *
 * const appId: string = 'yourAppId';
 * this.launchReview.launch(appId)
 *   .then(() => console.log('Successfully launched store app');
 * ```
 */
var LaunchReview = (function (_super) {
    __extends(LaunchReview, _super);
    function LaunchReview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Launch store app using given app ID
     * @returns {Promise<void>}
     */
    LaunchReview.prototype.launch = function (appId) { return; };
    return LaunchReview;
}(IonicNativePlugin));
LaunchReview.decorators = [
    { type: Injectable },
];
/** @nocollapse */
LaunchReview.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LaunchReview.prototype, "launch", null);
LaunchReview = __decorate([
    Plugin({
        pluginName: 'LaunchReview',
        plugin: 'cordova-launch-review',
        pluginRef: 'LaunchReview',
        repo: 'https://github.com/dpa99c/cordova-launch-review',
        platforms: ['Android', 'iOS']
    })
], LaunchReview);
export { LaunchReview };
//# sourceMappingURL=index.js.map