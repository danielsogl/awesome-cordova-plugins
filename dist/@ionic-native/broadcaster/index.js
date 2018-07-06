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
 * @name Broadcaster
 * @description
 * This plugin adds exchanging events between native code and your app.
 *
 * @usage
 * ```typescript
 * import { Broadcaster } from '@ionic-native/broadcaster';
 *
 * constructor(private broadcaster: Broadcaster) { }
 *
 * ...
 *
 * // Listen to events from Native
 * this.broadcaster.addEventListener('eventName').subscribe((event) => console.log(event));
 *
 * // Send event to Native
 * this.broadcaster.fireNativeEvent('eventName', {}).then(() => console.log('success'));
 *
 * ```
 */
var Broadcaster = (function (_super) {
    __extends(Broadcaster, _super);
    function Broadcaster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function listen to an event sent from the native code
     * @param eventName {string}
     * @return {Observable<any>} Returns an observable to watch when an event is received
     */
    Broadcaster.prototype.addEventListener = function (eventName) { return; };
    /**
     * This function sends data to the native code
     * @param eventName {string}
     * @param eventData {any}
     * @return {Promise<any>} Returns a promise that resolves when an event is successfully fired
     */
    Broadcaster.prototype.fireNativeEvent = function (eventName, eventData) { return; };
    return Broadcaster;
}(IonicNativePlugin));
Broadcaster.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Broadcaster.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        observable: true,
        clearFunction: 'removeEventListener',
        clearWithArgs: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Observable)
], Broadcaster.prototype, "addEventListener", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], Broadcaster.prototype, "fireNativeEvent", null);
Broadcaster = __decorate([
    Plugin({
        pluginName: 'Broadcaster',
        plugin: 'cordova-plugin-broadcaster',
        pluginRef: 'broadcaster',
        repo: 'https://github.com/bsorrentino/cordova-broadcaster',
        platforms: ['Android', 'iOS']
    })
], Broadcaster);
export { Broadcaster };
//# sourceMappingURL=index.js.map