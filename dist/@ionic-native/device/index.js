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
import { CordovaProperty, Plugin, IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Device
 * @description
 * Access information about the underlying device and platform.
 *
 * @usage
 * ```typescript
 * import { Device } from '@ionic-native/device';
 *
 * constructor(private device: Device) { }
 *
 * ...
 *
 * console.log('Device UUID is: ' + this.device.uuid);
 * ```
 */
var Device = (function (_super) {
    __extends(Device, _super);
    function Device() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Device;
}(IonicNativePlugin));
Device.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Device.ctorParameters = function () { return []; };
__decorate([
    CordovaProperty,
    __metadata("design:type", String)
], Device.prototype, "cordova", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", String)
], Device.prototype, "model", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", String)
], Device.prototype, "platform", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", String)
], Device.prototype, "uuid", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", String)
], Device.prototype, "version", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", String)
], Device.prototype, "manufacturer", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", Boolean)
], Device.prototype, "isVirtual", void 0);
__decorate([
    CordovaProperty,
    __metadata("design:type", String)
], Device.prototype, "serial", void 0);
Device = __decorate([
    Plugin({
        pluginName: 'Device',
        plugin: 'cordova-plugin-device',
        pluginRef: 'device',
        repo: 'https://github.com/apache/cordova-plugin-device',
        platforms: ['Android', 'BlackBerry 10', 'Browser', 'Firefox OS', 'iOS', 'macOS', 'Tizen', 'Ubuntu', 'Windows', 'Windows Phone']
    })
], Device);
export { Device };
//# sourceMappingURL=index.js.map