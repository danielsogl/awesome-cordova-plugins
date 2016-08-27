import { initAngular1 } from './ng1';

const DEVICE_READY_TIMEOUT = 2000;

declare var window;

import { ActionSheet } from './plugins/actionsheet';
import { AdMob } from './plugins/admob';
import { AndroidFingerprintAuth } from './plugins/android-fingerprint-auth';
import { AppAvailability } from './plugins/appavailability';
import { AppRate } from './plugins/apprate';
import { AppVersion } from './plugins/appversion';
import { Badge } from './plugins/badge';
import { BackgroundGeolocation } from './plugins/background-geolocation';
import { BackgroundMode } from './plugins/backgroundmode';
import { BarcodeScanner } from './plugins/barcodescanner';
import { Base64ToGallery } from './plugins/base64togallery';
import { BatteryStatus } from './plugins/batterystatus';
import { Brightness } from './plugins/brightness';
import { BLE } from './plugins/ble';
import { BluetoothSerial } from './plugins/bluetoothserial';
import { Calendar } from './plugins/calendar';
import { Camera } from './plugins/camera';
import { CameraPreview } from './plugins/camera-preview';
import { CardIO } from './plugins/card-io';
import { Clipboard } from './plugins/clipboard';
import { CodePush } from './plugins/code-push';
import { Contacts } from './plugins/contacts';
import { Crop } from './plugins/crop';
import { DatePicker } from './plugins/datepicker';
import { DBMeter } from './plugins/dbmeter';
import { Deeplinks } from './plugins/deeplinks';
import { Device } from './plugins/device';
import { DeviceAccounts } from './plugins/deviceaccounts';
import { DeviceMotion } from './plugins/devicemotion';
import { DeviceOrientation } from './plugins/deviceorientation';
import { Diagnostic } from './plugins/diagnostic';
import { Dialogs } from './plugins/dialogs';
import { EmailComposer } from './plugins/emailcomposer';
import { EstimoteBeacons } from './plugins/estimote-beacons';
import { Facebook } from './plugins/facebook';
import { File } from './plugins/file';
import { Transfer } from './plugins/filetransfer';
import { Flashlight } from './plugins/flashlight';
import { Geofence } from './plugins/geofence';
import { Geolocation } from './plugins/geolocation';
import { Globalization } from './plugins/globalization';
import { GooglePlus } from './plugins/google-plus';
import { GoogleMap } from './plugins/googlemaps';
import { GoogleAnalytics } from './plugins/googleanalytics';
import { Hotspot } from  './plugins/hotspot';
import { Httpd } from './plugins/httpd';
import { IBeacon } from './plugins/ibeacon';
import { ImagePicker } from './plugins/imagepicker';
import { ImageResizer } from './plugins/imageresizer';
import { InAppBrowser } from './plugins/inappbrowser';
import { InAppPurchase } from './plugins/inapppurchase';
import { Insomnia } from './plugins/insomnia';
import { Instagram } from './plugins/instagram';
import { IsDebug } from './plugins/is-debug';
import { Keyboard } from './plugins/keyboard';
import { LaunchNavigator } from './plugins/launchnavigator';
import { LocalNotifications } from './plugins/localnotifications';
import { MediaCapture } from './plugins/media-capture';
import { NativeAudio } from './plugins/native-audio';
import { NativeStorage } from './plugins/nativestorage';
import { MediaPlugin } from './plugins/media';
import { Network } from './plugins/network';
import { OneSignal } from './plugins/onesignal';
import { PhotoViewer } from './plugins/photo-viewer';
import { ScreenOrientation } from './plugins/screen-orientation';
import { PinDialog } from './plugins/pin-dialog';
import { PowerManagement } from './plugins/power-management';
import { Printer } from './plugins/printer';
import { Push } from './plugins/push';
import { SafariViewController } from './plugins/safari-view-controller';
import { Screenshot } from './plugins/screenshot';
import { SecureStorage } from './plugins/securestorage';
import { Shake } from './plugins/shake';
import { Sim } from './plugins/sim';
import { SMS } from './plugins/sms';
import { SocialSharing } from './plugins/socialsharing';
import { SpinnerDialog } from './plugins/spinnerdialog';
import { Splashscreen } from './plugins/splashscreen';
import { SQLite } from './plugins/sqlite';
import { StatusBar } from './plugins/statusbar';
import { ThreeDeeTouch } from './plugins/3dtouch';
import { Toast } from './plugins/toast';
import { TouchID } from './plugins/touchid';
import { TextToSpeech } from './plugins/text-to-speech';
import { TwitterConnect } from './plugins/twitter-connect';
import { Vibration } from './plugins/vibration';
import { VideoEditor } from './plugins/video-editor';
import { VideoPlayer } from './plugins/video-player';
import { WebIntent } from './plugins/webintent';
import { Zip } from './plugins/zip';
export * from './plugins/3dtouch';
export * from './plugins/background-geolocation';
export * from './plugins/backgroundmode';
export * from './plugins/batterystatus';
export * from './plugins/calendar';
export * from './plugins/camera';
export * from './plugins/card-io';
export * from './plugins/code-push';
export * from './plugins/contacts';
export * from './plugins/datepicker';
export * from './plugins/device';
export * from './plugins/devicemotion';
export * from './plugins/deviceorientation';
export * from './plugins/facebook';
export * from './plugins/file';
export * from './plugins/filetransfer';
export * from './plugins/geolocation';
export * from './plugins/googlemaps';
export * from './plugins/httpd';
export * from './plugins/ibeacon';
export * from './plugins/imagepicker';
export * from './plugins/imageresizer';
export * from './plugins/inappbrowser';
export * from './plugins/launchnavigator';
export * from './plugins/localnotifications';
export * from './plugins/media';
export * from './plugins/media-capture';
export * from './plugins/printer';
export * from './plugins/push';
export * from './plugins/safari-view-controller';
export * from './plugins/sms';
export * from './plugins/spinnerdialog';
export * from './plugins/toast';
export * from './plugins/twitter-connect';
export * from './plugins/video-editor';
export * from './plugins/video-player';
export {
ActionSheet,
AdMob,
AndroidFingerprintAuth,
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
CameraPreview,
Clipboard,
CodePush,
Crop,
DBMeter,
Deeplinks,
DeviceAccounts,
Dialogs,
Diagnostic,
EmailComposer,
EstimoteBeacons,
File,
Flashlight,
Geofence,
Globalization,
GooglePlus,
GoogleAnalytics,
Hotspot,
InAppPurchase,
Insomnia,
Instagram,
Keyboard,
NativeAudio,
NativeStorage,
Network,
OneSignal,
PhotoViewer,
ScreenOrientation,
PinDialog,
PowerManagement,
Screenshot,
SecureStorage,
Shake,
SocialSharing,
Sim,
Splashscreen,
SQLite,
StatusBar,
TouchID,
Transfer,
TextToSpeech,
Vibration,
WebIntent,
Zip
}

export * from './plugins/plugin';

// Window export to use outside of a module loading system
window['IonicNative'] = {
  ActionSheet: ActionSheet,
  AdMob: AdMob,
  AndroidFingerprintAuth: AndroidFingerprintAuth,
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
  CameraPreview: CameraPreview,
  CardIO: CardIO,
  Clipboard: Clipboard,
  CodePush: CodePush,
  Contacts: Contacts,
  Crop: Crop,
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
  EstimoteBeacons: EstimoteBeacons,
  Facebook: Facebook,
  File: File,
  Flashlight: Flashlight,
  Geofence: Geofence,
  Geolocation: Geolocation,
  Globalization: Globalization,
  GooglePlus: GooglePlus,
  GoogleMap: GoogleMap,
  GoogleAnalytics: GoogleAnalytics,
  Hotspot: Hotspot,
  Httpd: Httpd,
  IBeacon: IBeacon,
  ImagePicker: ImagePicker,
  ImageResizer: ImageResizer,
  InAppBrowser: InAppBrowser,
  InAppPurchase: InAppPurchase,
  Instagram: Instagram,
  IsDebug: IsDebug,
  Keyboard: Keyboard,
  LaunchNavigator: LaunchNavigator,
  LocalNotifications: LocalNotifications,
  MediaCapture: MediaCapture,
  MediaPlugin: MediaPlugin,
  NativeAudio: NativeAudio,
  NativeStorage: NativeStorage,
  Network: Network,
  Printer: Printer,
  Push: Push,
  OneSignal: OneSignal,
  PhotoViewer: PhotoViewer,
  ScreenOrientation: ScreenOrientation,
  PinDialog: PinDialog,
  PowerManagement: PowerManagement,
  SafariViewController: SafariViewController,
  Screenshot: Screenshot,
  SecureStorage: SecureStorage,
  Shake: Shake,
  Sim: Sim,
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
  TextToSpeech: TextToSpeech,
  TwitterConnect: TwitterConnect,
  VideoEditor: VideoEditor,
  VideoPlayer: VideoPlayer,
  Vibration: Vibration,
  WebIntent: WebIntent,
  Zip: Zip
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
