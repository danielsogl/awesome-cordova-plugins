import {initAngular1} from './ng1';

const DEVICE_READY_TIMEOUT = 2000;

declare var window;

import {ActionSheet} from './plugins/actionsheet';
import {AdMob} from './plugins/admob';
import {AppAvailability} from './plugins/appavailability';
import {AppRate} from './plugins/apprate';
import {AppVersion} from './plugins/appversion';
import {Badge} from './plugins/badge';
import {BackgroundGeolocation} from './plugins/background-geolocation';
import {BackgroundMode} from './plugins/backgroundmode';
import {BarcodeScanner} from './plugins/barcodescanner';
import {Base64ToGallery} from './plugins/base64togallery';
import {BatteryStatus} from './plugins/batterystatus';
import {Brightness} from './plugins/brightness';
import {BLE} from './plugins/ble';
import {BluetoothSerial} from './plugins/bluetoothserial';
import {Calendar} from './plugins/calendar';
import {Camera} from './plugins/camera';
import {CardIO} from './plugins/card-io';
import {Clipboard} from './plugins/clipboard';
import {Contacts} from './plugins/contacts';
import {DatePicker} from './plugins/datepicker';
import {DBMeter} from './plugins/dbmeter';
import {Deeplinks} from './plugins/deeplinks';
import {Device} from './plugins/device';
import {DeviceAccounts} from './plugins/deviceaccounts';
import {DeviceMotion} from './plugins/devicemotion';
import {DeviceOrientation} from './plugins/deviceorientation';
import {Diagnostic} from './plugins/diagnostic';
import {Dialogs} from './plugins/dialogs';
import {EmailComposer} from './plugins/emailcomposer';
import {Facebook} from './plugins/facebook';
import {File} from './plugins/file';
import {Transfer} from './plugins/filetransfer';
import {Flashlight} from './plugins/flashlight';
import {Geolocation} from './plugins/geolocation';
import {Globalization} from './plugins/globalization';
import {GooglePlus} from './plugins/google-plus';
import {GoogleMap} from './plugins/googlemaps';
import {GoogleAnalytics} from './plugins/googleanalytics';
import {Hotspot} from  './plugins/hotspot';
import {Httpd} from './plugins/httpd';
import {IBeacon} from './plugins/ibeacon';
import {ImagePicker} from './plugins/imagepicker';
import {InAppBrowser} from './plugins/inappbrowser';
import {Insomnia} from './plugins/insomnia';
import {Keyboard} from './plugins/keyboard';
import {LaunchNavigator} from './plugins/launchnavigator';
import {LocalNotifications} from './plugins/localnotifications';
import {MediaPlugin} from './plugins/media';
import {Network} from './plugins/network';
import {OneSignal} from './plugins/onesignal';
import {Printer} from './plugins/printer';
import {Push} from './plugins/push';
import {SafariViewController} from './plugins/safari-view-controller';
import {Screenshot} from './plugins/screenshot';
import {SMS} from './plugins/sms';
import {SocialSharing} from './plugins/socialsharing';
import {SpinnerDialog} from './plugins/spinnerdialog';
import {Splashscreen} from './plugins/splashscreen';
import {SQLite} from './plugins/sqlite';
import {StatusBar} from './plugins/statusbar';
import {ThreeDeeTouch} from './plugins/3dtouch';
import {Toast} from './plugins/toast';
import {TouchID} from './plugins/touchid';
import {Vibration} from './plugins/vibration';
import {WebIntent} from './plugins/webintent';
export * from './plugins/3dtouch';
export * from './plugins/background-geolocation';
export * from './plugins/backgroundmode';
export * from './plugins/batterystatus';
export * from './plugins/calendar';
export * from './plugins/camera';
export * from './plugins/card-io';
export * from './plugins/contacts';
export * from './plugins/datepicker';
export * from './plugins/device';
export * from './plugins/devicemotion';
export * from './plugins/deviceorientation';
export * from './plugins/filetransfer';
export * from './plugins/googlemaps';
export * from './plugins/httpd';
export * from './plugins/ibeacon';
export * from './plugins/imagepicker';
export * from './plugins/inappbrowser';
export * from './plugins/launchnavigator';
export * from './plugins/localnotifications';
export * from './plugins/media';
export * from './plugins/printer';
export * from './plugins/push';
export * from './plugins/safari-view-controller';
export * from './plugins/sms';
export * from './plugins/spinnerdialog';
export * from './plugins/toast';
export {
  ActionSheet,
  AdMob,
  AppAvailability,
  AppRate,
  AppVersion,
  Badge,
  BarcodeScanner,
  Base64ToGallery,
  BatteryStatus,
  Brightness,
  BLE,
  BluetoothSerial,
  Clipboard,
  DBMeter,
  Deeplinks,
  DeviceAccounts,
  Dialogs,
  Diagnostic,
  EmailComposer,
  Facebook,
  File,
  Flashlight,
  Geolocation,
  Globalization,
  GooglePlus,
  GoogleAnalytics,
  Hotspot,
  Insomnia,
  Keyboard,
  Network,
  OneSignal,
  Screenshot,
  SocialSharing,
  Splashscreen,
  SQLite,
  StatusBar,
  TouchID,
  Transfer,
  Vibration,
  WebIntent
}

export * from './plugins/plugin';

// Window export to use outside of a module loading system
window['IonicNative'] = {
  ActionSheet: ActionSheet,
  AdMob: AdMob,
  AppAvailability: AppAvailability,
  AppRate: AppRate,
  AppVersion: AppVersion,
  Badge: Badge,
  BackgroundGeolocation: BackgroundGeolocation,
  BackgroundMode: BackgroundMode,
  BarcodeScanner: BarcodeScanner,
  Base64ToGallery: Base64ToGallery,
  BatteryStatus: BatteryStatus,
  Brightness: Brightness,
  BLE: BLE,
  BluetoothSerial: BluetoothSerial,
  Calendar: Calendar,
  Camera: Camera,
  CardIO: CardIO,
  Clipboard: Clipboard,
  Contacts: Contacts,
  DatePicker: DatePicker,
  DBMeter: DBMeter,
  Deeplinks: Deeplinks,
  Device: Device,
  DeviceAccounts: DeviceAccounts,
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
  GooglePlus: GooglePlus,
  GoogleMap : GoogleMap,
  GoogleAnalytics: GoogleAnalytics,
  Hotspot: Hotspot,
  Httpd: Httpd,
  IBeacon: IBeacon,
  ImagePicker: ImagePicker,
  InAppBrowser: InAppBrowser,
  Keyboard: Keyboard,
  LaunchNavigator: LaunchNavigator,
  LocalNotifications: LocalNotifications,
  MediaPlugin: MediaPlugin,
  Network: Network,
  Printer: Printer,
  Push: Push,
  OneSignal: OneSignal,
  SafariViewController: SafariViewController,
  Screenshot: Screenshot,
  SMS: SMS,
  SocialSharing: SocialSharing,
  SpinnerDialog: SpinnerDialog,
  Splashscreen: Splashscreen,
  SQLite: SQLite,
  StatusBar: StatusBar,
  ThreeDeeTouch: ThreeDeeTouch,
  Toast: Toast,
  TouchID: TouchID,
  Transfer: Transfer,
  Vibration: Vibration,
  WebIntent: WebIntent
};

initAngular1(window['IonicNative']);

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
  if (!didFireReady && window.cordova) {
    console.warn('Native: deviceready did not fire within ' + DEVICE_READY_TIMEOUT + 'ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.');
  }
}, DEVICE_READY_TIMEOUT);
