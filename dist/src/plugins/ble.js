var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var plugin_1 = require('./plugin');
var BLE = (function () {
    function BLE() {
    }
    BLE.scan = function (services, seconds) { };
    BLE.startScan = function (services) { };
    ;
    BLE.stopScan = function () { };
    ;
    BLE.connect = function (deviceId) { };
    ;
    BLE.disconnect = function (deviceId) { };
    ;
    BLE.read = function (deviceId, serviceUUID, characteristicUUID) { };
    ;
    BLE.write = function (deviceId, serviceUUID, characteristicUUID, value) { };
    ;
    BLE.writeWithoutResponse = function (deviceId, serviceUUID, characteristicUUID, value) { };
    ;
    __decorate([
        plugin_1.Cordova({
            successIndex: 2,
            errIndex: 3
        }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Array, Number]), 
        __metadata('design:returntype', void 0)
    ], BLE, "scan", null);
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Array]), 
        __metadata('design:returntype', void 0)
    ], BLE, "startScan", null);
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], BLE, "stopScan", null);
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [String]), 
        __metadata('design:returntype', void 0)
    ], BLE, "connect", null);
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [String]), 
        __metadata('design:returntype', void 0)
    ], BLE, "disconnect", null);
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [String, String, String]), 
        __metadata('design:returntype', void 0)
    ], BLE, "read", null);
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [String, String, String, ArrayBuffer]), 
        __metadata('design:returntype', void 0)
    ], BLE, "write", null);
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [String, String, String, ArrayBuffer]), 
        __metadata('design:returntype', void 0)
    ], BLE, "writeWithoutResponse", null);
    BLE = __decorate([
        plugin_1.Plugin({
            name: 'BluetoothLowEnergy',
            plugin: 'cordova-plugin-ble-central',
            pluginRef: 'ble',
            pluginRepo: 'https://github.com/don/cordova-plugin-ble-central'
        }), 
        __metadata('design:paramtypes', [])
    ], BLE);
    return BLE;
})();
exports.BLE = BLE;
