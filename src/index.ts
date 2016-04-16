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
import {Base64ToGallery} from './plugins/base64togallery';
import {BatteryStatus} from './plugins/batterystatus';
import {BLE} from './plugins/ble';
import {Calendar} from './plugins/calendar';
import {Camera} from './plugins/camera';
import {Clipboard} from './plugins/clipboard';
import {Contacts} from './plugins/contacts';
import {DatePicker} from './plugins/datepicker';
import {DBMeter} from './plugins/dbmeter';
import {Device} from './plugins/device';
import {DeviceMotion} from './plugins/devicemotion';
import {DeviceOrientation} from './plugins/deviceorientation';
import {Diagnostic} from './plugins/diagnostic';
import {Dialogs} from './plugins/dialogs';
import {EmailComposer} from './plugins/emailcomposer';
import {Facebook} from './plugins/facebook';
import {File} from './plugins/file';
import {Flashlight} from './plugins/flashlight';
import {Geolocation} from './plugins/geolocation';
import {Globalization} from './plugins/globalization';
import {GoogleAnalytics} from './plugins/googleanalytics';
import {Hotspot} from  './plugins/hotspot';
import {ImagePicker} from './plugins/imagepicker';
import {InAppBrowser} from './plugins/inappbrowser';
import {Keyboard} from './plugins/keyboard';
import {LaunchNavigator} from './plugins/launchnavigator';
import {LocalNotifications} from './plugins/localnotifications';
import {Network, Connection} from './plugins/network';
import {Push} from './plugins/push';
import {SMS} from './plugins/sms';
import {SocialSharing} from './plugins/socialsharing';
import {SpinnerDialog} from './plugins/spinnerdialog';
import {Splashscreen} from './plugins/splashscreen';
import {StatusBar} from './plugins/statusbar';
import {Toast} from './plugins/toast';
import {TouchID} from './plugins/touchid';
import {Vibration} from './plugins/vibration';
import {WebIntent} from './plugins/webintent';

export {
  ActionSheet,
  AppAvailability,
  AppRate,
  AppVersion,
  Badge,
  BarcodeScanner,
  Base64ToGallery,
  BatteryStatus,
  BLE,
  Calendar,
  Camera,
  Clipboard,
  Connection,
  Contacts,
  DatePicker,
  DBMeter,
  Device,
  DeviceMotion,
  DeviceOrientation,
  Dialogs,
  Diagnostic,
  EmailComposer,
  Facebook,
  File,
  Flashlight,
  Geolocation,
  Globalization,
  GoogleAnalytics,
  Hotspot,
  ImagePicker,
  InAppBrowser,
  Keyboard,
  LaunchNavigator,
  LocalNotifications,
  Network,
  Push,
  SMS,
  SocialSharing,
  SpinnerDialog,
  Splashscreen,
  StatusBar,
  Toast,
  TouchID,
  Vibration,
  WebIntent
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
  Base64ToGallery: Base64ToGallery,
  BatteryStatus: BatteryStatus,
  BLE: BLE,
  Calendar: Calendar,
  Camera: Camera,
  Clipboard: Clipboard,
  Connection: Connection,
  Contacts: Contacts,
  DatePicker: DatePicker,
  DBMeter: DBMeter,
  Device: Device,
  DeviceMotion: DeviceMotion,
  DeviceOrientation: DeviceOrientation,
  Dialogs: Dialogs,
  Diagnostic: Diagnostic,
  EmailComposer: EmailComposer,
  Facebook: Facebook,
  File: File,
  Flashlight: Flashlight,
  Geolocation: Geolocation,
  Globalization: Globalization,
  GoogleAnalytics: GoogleAnalytics,
  Hotspot: Hotspot,
  ImagePicker: ImagePicker,
  InAppBrowser: InAppBrowser,
  Keyboard: Keyboard,
  LaunchNavigator: LaunchNavigator,
  LocalNotifications: LocalNotifications,
  Network: Network,
  Push: Push,
  SMS: SMS,
  SocialSharing: SocialSharing,
  SpinnerDialog: SpinnerDialog,
  Splashscreen: Splashscreen,
  StatusBar: StatusBar,
  Toast: Toast,
  TouchID: TouchID,
  Vibration: Vibration,
  WebIntent: WebIntent
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
