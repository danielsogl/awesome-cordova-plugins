import {initAngular1} from './ng1';
initAngular1();

const DEVICE_READY_TIMEOUT = 2000;


declare var window;

import {ActionSheet} from './plugins/actionsheet';
import {AppRate} from './plugins/apprate';
import {AppVersion} from './plugins/appversion';
import {BarcodeScanner} from './plugins/barcodescanner';
import {Badge} from './plugins/badge';
import {BLE} from './plugins/ble';
import {Camera} from './plugins/camera';
import {Calendar} from './plugins/calendar';
import {Clipboard} from './plugins/clipboard';
import {Contacts} from './plugins/contacts';
import {DatePicker} from './plugins/datepicker';
import {Device} from './plugins/device';
import {Facebook} from './plugins/facebook';
import {Geolocation} from './plugins/geolocation';
import {Push} from './plugins/push';
import {StatusBar} from './plugins/statusbar';
import {Toast} from './plugins/toast';
import {TouchID} from './plugins/touchid';

export {
  ActionSheet,
  AppRate,
  AppVersion,
  BarcodeScanner,
  Badge,
  BLE,
  Camera,
  Calendar,
  Clipboard,
  Contacts,
  DatePicker,
  Device,
  Facebook,
  Geolocation,
  Push,
  StatusBar,
  Toast,
  TouchID
}

export * from './plugins/plugin';

// Window export to use outside of a module loading system
window['IonicNative'] = {
  ActionSheet: ActionSheet,
  AppRate: AppRate,
  AppVersion: AppVersion,
  BarcodeScanner: BarcodeScanner,
  Badge: Badge,
  BLE: BLE,
  Camera: Camera,
  Calendar: Calendar,
  Clipboard: Clipboard,
  Contacts: Contacts,
  DatePicker: DatePicker,
  Device: Device,
  Facebook: Facebook,
  Geolocation: Geolocation,
  Push: Push,
  StatusBar: StatusBar,
  Toast: Toast,
  TouchID: TouchID
};

// To help developers using cordova, we listen for the device ready event and
// log an error if it didn't fire in a reasonable amount of time. Generally,
// when this happens, developers should remove and reinstall plugins, since
// an inconsistent plugin is often the culprit.
let before = +new Date;

let didFireReady = false;
document.addEventListener('deviceready', function() {
  console.log('DEVICE READY FIRED AFTER', (+new Date - before), 'ms');
  didFireReady = true;
});

setTimeout(function() {
  if(!didFireReady && window.cordova) {
    console.warn('Native: deviceready did not fire within ' + DEVICE_READY_TIMEOUT + 'ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.');
  }
}, DEVICE_READY_TIMEOUT);
