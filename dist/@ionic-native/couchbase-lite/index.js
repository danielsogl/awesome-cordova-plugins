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
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';
/**
 * @name Couchbase Lite
 * @description
 * Plugin to install Couchbase Lite in your PhoneGap app on iOS or Android
 *
 * @usage
 * ```typescript
 * import { CouchbaseLite } from '@ionic-native/couchbase-lite';
 *
 * constructor(private couchbase: CouchbaseLite) {
 *
 *   couchbase.getURL()
 *     .then(url => console.log(url))
 *     .catch(error => console.error(error));
 *
 * }
 *
 * ```
 */
var CouchbaseLite = (function (_super) {
    __extends(CouchbaseLite, _super);
    function CouchbaseLite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get the database url
     * @return {Promise<any>} Returns a promise that resolves with the local database url
     */
    CouchbaseLite.prototype.getURL = function () { return; };
    return CouchbaseLite;
}(IonicNativePlugin));
CouchbaseLite.decorators = [
    { type: Injectable },
];
/** @nocollapse */
CouchbaseLite.ctorParameters = function () { return []; };
__decorate([
    Cordova({
        callbackStyle: 'node'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CouchbaseLite.prototype, "getURL", null);
CouchbaseLite = __decorate([
    Plugin({
        pluginName: 'CouchbaseLite',
        plugin: 'couchbase-lite-phonegap-plugin',
        pluginRef: 'cblite',
        repo: 'https://github.com/couchbaselabs/Couchbase-Lite-PhoneGap-Plugin',
        platforms: ['Android', 'iOS']
    })
], CouchbaseLite);
export { CouchbaseLite };
//# sourceMappingURL=index.js.map