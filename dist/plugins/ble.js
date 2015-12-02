var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
        plugin_1.Cordova()
    ], BLE, "scan", null);
    __decorate([
        plugin_1.Cordova()
    ], BLE, "startScan", null);
    __decorate([
        plugin_1.Cordova()
    ], BLE, "stopScan", null);
    __decorate([
        plugin_1.Cordova()
    ], BLE, "connect", null);
    __decorate([
        plugin_1.Cordova()
    ], BLE, "disconnect", null);
    __decorate([
        plugin_1.Cordova()
    ], BLE, "read", null);
    __decorate([
        plugin_1.Cordova()
    ], BLE, "write", null);
    __decorate([
        plugin_1.Cordova()
    ], BLE, "writeWithoutResponse", null);
    BLE = __decorate([
        plugin_1.Plugin({
            name: 'BluetoothLowEnergy',
            plugin: 'cordova-plugin-ble-central',
            pluginRef: 'ble',
            pluginRepo: 'https://github.com/don/cordova-plugin-ble-central'
        })
    ], BLE);
    return BLE;
})();
exports.BLE = BLE;
//# sourceMappingURL=ble.js.map