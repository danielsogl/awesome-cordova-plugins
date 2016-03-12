import {initAngular1} from './ng1';
initAngular1();

const DEVICE_READY_TIMEOUT = 2000;

declare var window;

import {ActionSheet} from './plugins/actionsheet';
import {AppAvailability} from './plugins/appavailability';
import {AppRate} from './plugins/apprate';
import {AppVersion} from './plugins/appversion';
import {Badge} from './plugins/badge';
import {BarcodeScanner} from './plugins/barcodescanner';
import {BatteryStatus} from './plugins/batterystatus';
import {BLE} from './plugins/ble';
import {Calendar} from './plugins/calendar';
import {Camera} from './plugins/camera';
import {Clipboard} from './plugins/clipboard';
import {Contacts} from './plugins/contacts';
import {DatePicker} from './plugins/datepicker';
import {Device} from './plugins/device';
import {DeviceMotion} from './plugins/devicemotion';
import {DeviceOrientation} from './plugins/deviceorientation';
import {Dialogs} from './plugins/dialogs';
import {Facebook} from './plugins/facebook';
//import {File} from './plugins/file';
import {Flashlight} from './plugins/flashlight';
import {Geolocation} from './plugins/geolocation';
import {ImagePicker} from './plugins/imagepicker';
import {LaunchNavigator} from './plugins/launchnavigator';
import {LocalNotifications} from './plugins/localnotifications';
import {Push} from './plugins/push';
import {SMS} from './plugins/sms';
import {StatusBar} from './plugins/statusbar';
import {Toast} from './plugins/toast';
import {TouchID} from './plugins/touchid';

export {
  ActionSheet,
  AppAvailability,
  AppRate,
  AppVersion,
  Badge,
  BarcodeScanner,
  BatteryStatus,
  BLE,
  Calendar,
  Camera,
  Clipboard,
  Contacts,
  DatePicker,
  Device,
  DeviceMotion,
  DeviceOrientation,
  Dialogs,
  Facebook,
  //File,
  Flashlight,
  Geolocation,
  ImagePicker,
  LaunchNavigator,
  LocalNotifications,
  Push,
  SMS,
  StatusBar,
  Toast,
  TouchID
}

export * from './plugins/plugin';

// Window export to use outside of a module loading system
window['IonicNative'] = {
  ActionSheet: ActionSheet,
  AppAvailability: AppAvailability,
  AppRate: AppRate,
  AppVersion: AppVersion,
  Badge: Badge,
  BarcodeScanner: BarcodeScanner,
  BatteryStatus: BatteryStatus,
  BLE: BLE,
  Calendar: Calendar,
  Camera: Camera,
  Clipboard: Clipboard,
  Contacts: Contacts,
  DatePicker: DatePicker,
  Device: Device,
  DeviceMotion: DeviceMotion,
  DeviceOrientation: DeviceOrientation,
  Dialogs: Dialogs,
  Facebook: Facebook,
  //File: File,
  Flashlight: Flashlight,
  Geolocation: Geolocation,
  ImagePicker: ImagePicker,
  LaunchNavigator: LaunchNavigator,
  LocalNotifications: LocalNotifications,
  Push: Push,
  SMS: SMS,
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
