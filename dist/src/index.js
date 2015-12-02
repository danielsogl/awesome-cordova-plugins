var ng1_1 = require('./ng1');
ng1_1.initAngular1();
var DEVICE_READY_TIMEOUT = 2000;
var actionsheet_1 = require('./plugins/actionsheet');
exports.ActionSheet = actionsheet_1.ActionSheet;
var ble_1 = require('./plugins/ble');
exports.BLE = ble_1.BLE;
var camera_1 = require('./plugins/camera');
exports.Camera = camera_1.Camera;
var calendar_1 = require('./plugins/calendar');
exports.Calendar = calendar_1.Calendar;
var contacts_1 = require('./plugins/contacts');
exports.Contacts = contacts_1.Contacts;
var device_1 = require('./plugins/device');
exports.Device = device_1.Device;
var facebook_1 = require('./plugins/facebook');
exports.Facebook = facebook_1.Facebook;
var geolocation_1 = require('./plugins/geolocation');
exports.Geolocation = geolocation_1.Geolocation;
var push_1 = require('./plugins/push');
exports.Push = push_1.Push;
var statusbar_1 = require('./plugins/statusbar');
exports.StatusBar = statusbar_1.StatusBar;
var toast_1 = require('./plugins/toast');
exports.Toast = toast_1.Toast;
var touchid_1 = require('./plugins/touchid');
exports.TouchID = touchid_1.TouchID;
window['IonicNative'] = {
    ActionSheet: actionsheet_1.ActionSheet,
    BLE: ble_1.BLE,
    Camera: camera_1.Camera,
    Calendar: calendar_1.Calendar,
    Contacts: contacts_1.Contacts,
    Device: device_1.Device,
    Facebook: facebook_1.Facebook,
    Geolocation: geolocation_1.Geolocation,
    Push: push_1.Push,
    StatusBar: statusbar_1.StatusBar,
    Toast: toast_1.Toast,
    TouchID: touchid_1.TouchID
};
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