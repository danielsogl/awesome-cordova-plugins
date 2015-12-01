import {initAngular1} from './ng1';
initAngular1();

const DEVICE_READY_TIMEOUT = 2000;


export * from './plugins/actionsheet';
export * from './plugins/ble';
export * from './plugins/camera';
export * from './plugins/calendar';
export * from './plugins/contacts';
export * from './plugins/device';
export * from './plugins/facebook';
export * from './plugins/geolocation';
export * from './plugins/statusbar';
export * from './plugins/toast';


declare var window;

import {ActionSheet} from './plugins/actionsheet';
import {BLE} from './plugins/ble';
import {Camera} from './plugins/camera';
import {Calendar} from './plugins/calendar';
import {Device} from './plugins/device';
import {Facebook} from './plugins/facebook';
import {Geolocation} from './plugins/geolocation';
import {StatusBar} from './plugins/statusbar';
import {Toast} from './plugins/toast';

// Window export to use outside of a module loading system
window['IonicNative'] = {
  ActionSheet: ActionSheet,
  BLE: BLE,
  Camera: Camera,
  Calendar: Calendar,
  Device: Device,
  Facebook: Facebook,
  Geolocation: Geolocation,
  StatusBar: StatusBar,
  Toast: Toast
}

// To help developers using cordova, we listen for the device ready event and
// log an error if it didn't fire in a reasonable amount of time. Generally,
// when this happens, developers should remove and reinstall plugins, since
// an inconsistent plugin is often the culprit.
let before = +new Date;

let didFireReady = false;
document.addEventListener('deviceready', function() {
  console.log('DEVICE READY FIRED AFTER', (+new Date - before), 'ms')
  didFireReady = true;
})

setTimeout(function() {
  if(!didFireReady && window.cordova) {
    console.warn('Native: deviceready did not fire within ' + DEVICE_READY_TIMEOUT + 'ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.');
  }
}, DEVICE_READY_TIMEOUT);
