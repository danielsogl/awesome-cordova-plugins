function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var ng1_1 = require('./ng1');
ng1_1.initAngular1();
var DEVICE_READY_TIMEOUT = 2000;
__export(require('./plugins/actionsheet'));
__export(require('./plugins/ble'));
__export(require('./plugins/camera'));
__export(require('./plugins/calendar'));
__export(require('./plugins/contacts'));
__export(require('./plugins/device'));
__export(require('./plugins/facebook'));
__export(require('./plugins/geolocation'));
__export(require('./plugins/statusbar'));
__export(require('./plugins/toast'));
var actionsheet_2 = require('./plugins/actionsheet');
var ble_2 = require('./plugins/ble');
var camera_2 = require('./plugins/camera');
var calendar_2 = require('./plugins/calendar');
var device_2 = require('./plugins/device');
var facebook_2 = require('./plugins/facebook');
var geolocation_2 = require('./plugins/geolocation');
var statusbar_2 = require('./plugins/statusbar');
var toast_2 = require('./plugins/toast');
// Window export to use outside of a module loading system
window['IonicNative'] = {
    ActionSheet: actionsheet_2.ActionSheet,
    BLE: ble_2.BLE,
    Camera: camera_2.Camera,
    Calendar: calendar_2.Calendar,
    Device: device_2.Device,
    Facebook: facebook_2.Facebook,
    Geolocation: geolocation_2.Geolocation,
    StatusBar: statusbar_2.StatusBar,
    Toast: toast_2.Toast
};
// To help developers using cordova, we listen for the device ready event and
// log an error if it didn't fire in a reasonable amount of time. Generally,
// when this happens, developers should remove and reinstall plugins, since
// an inconsistent plugin is often the culprit.
var before = +new Date;
var didFireReady = false;
document.addEventListener('deviceready', function () {
    console.log('DEVICE READY FIRED AFTER', (+new Date - before), 'ms');
    didFireReady = true;
});
setTimeout(function () {
    if (!didFireReady && window.cordova) {
        console.warn('Native: deviceready did not fire within ' + DEVICE_READY_TIMEOUT + 'ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.');
    }
}, DEVICE_READY_TIMEOUT);
//# sourceMappingURL=index.js.map