import { initAngular1 } from './ng1';

const DEVICE_READY_TIMEOUT = 5000;

declare var window;
import { ActionSheet } from './plugins/actionsheet';
import { AdMob } from './plugins/admob';
import { Alipay } from './plugins/alipay';
import { AndroidFingerprintAuth } from './plugins/android-fingerprint-auth';
import { AppAvailability } from './plugins/appavailability';
import { Appodeal } from './plugins/appodeal';
import { AppRate } from './plugins/apprate';
import { AppPreferences } from './plugins/apppreferences';
import { AppUpdate } from './plugins/app-update';
import { AppVersion } from './plugins/appversion';
import { Badge } from './plugins/badge';
import { BackgroundFetch } from './plugins/background-fetch';
import { BackgroundGeolocation } from './plugins/background-geolocation';
import { BackgroundMode } from './plugins/backgroundmode';
import { Backlight } from './plugins/backlight';
import { BarcodeScanner } from './plugins/barcodescanner';
import { Base64ToGallery } from './plugins/base64togallery';
import { BatteryStatus } from './plugins/batterystatus';
import { Brightness } from './plugins/brightness';
import { BrowserTab } from './plugins/browser-tab';
import { BLE } from './plugins/ble';
import { BluetoothSerial } from './plugins/bluetoothserial';
import { Broadcaster } from './plugins/broadcaster';
import { Calendar } from './plugins/calendar';
import { CallNumber } from './plugins/call-number';
import { Camera } from './plugins/camera';
import { CameraPreview } from './plugins/camera-preview';
import { CardIO } from './plugins/card-io';
import { Clipboard } from './plugins/clipboard';
import { CodePush } from './plugins/code-push';
import { Contacts } from './plugins/contacts';
import { CouchbaseLite } from './plugins/couchbase-lite';
import { Crop } from './plugins/crop';
import { DatePicker } from './plugins/datepicker';
import { DBMeter } from './plugins/dbmeter';
import { Deeplinks } from './plugins/deeplinks';
import { Device } from './plugins/device';
import { DeviceFeedback } from './plugins/device-feedback';
import { DeviceAccounts } from './plugins/deviceaccounts';
import { DeviceMotion } from './plugins/devicemotion';
import { DeviceOrientation } from './plugins/deviceorientation';
import { Diagnostic } from './plugins/diagnostic';
import { Dialogs } from './plugins/dialogs';
import { EmailComposer } from './plugins/emailcomposer';
import { EstimoteBeacons } from './plugins/estimote-beacons';
import { Facebook } from './plugins/facebook';
import { File } from './plugins/file';
import { FileChooser } from './plugins/file-chooser';
import { FileOpener } from './plugins/file-opener';
import { FilePath } from './plugins/filepath';
import { Transfer } from './plugins/filetransfer';
import { FingerprintAIO } from './plugins/fingerprint-aio';
import { Firebase } from './plugins/firebase';
import { Flashlight } from './plugins/flashlight';
import { Geofence } from './plugins/geofence';
import { Geolocation } from './plugins/geolocation';
import { Globalization } from './plugins/globalization';
import { GooglePlus } from './plugins/google-plus';
import { GoogleMap } from './plugins/googlemap';
import { GoogleAnalytics } from './plugins/googleanalytics';
import { Gyroscope } from './plugins/gyroscope';
import { HeaderColor } from './plugins/headercolor';
import { Health } from './plugins/health';
import { Hotspot } from  './plugins/hotspot';
import { HTTP } from  './plugins/http';
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
import { LaunchReview } from './plugins/launch-review';
import { LocalNotifications } from './plugins/localnotifications';
import { LocationAccuracy } from './plugins/location-accuracy';
import { MediaCapture } from './plugins/media-capture';
import { NativeAudio } from './plugins/native-audio';
import { NativeGeocoder } from './plugins/native-geocoder';
import { NativePageTransitions } from './plugins/native-page-transitions';
import { NativeStorage } from './plugins/nativestorage';
import { NavigationBar } from './plugins/navigationbar';
import { Market } from './plugins/market';
import { MediaPlugin } from './plugins/media';
import { Mixpanel } from './plugins/mixpanel';
import { MusicControls } from './plugins/music-controls';
import { Network } from './plugins/network';
import { NFC } from './plugins/nfc';
import { OneSignal } from './plugins/onesignal';
import { PhotoViewer } from './plugins/photo-viewer';
import { ScreenOrientation } from './plugins/screen-orientation';
import { PayPal } from './plugins/pay-pal';
import { PhotoLibrary } from './plugins/photo-library';
import { PinDialog } from './plugins/pin-dialog';
import { Pinterest } from './plugins/pinterest';
import { PowerManagement } from './plugins/power-management';
import { Printer } from './plugins/printer';
import { Push } from './plugins/push';
import { Rollbar } from './plugins/rollbar';
import { SafariViewController } from './plugins/safari-view-controller';
import { Screenshot } from './plugins/screenshot';
import { SecureStorage } from './plugins/securestorage';
import { Serial } from './plugins/serial';
import { Shake } from './plugins/shake';
import { Sim } from './plugins/sim';
import { SMS } from './plugins/sms';
import { SocialSharing } from './plugins/socialsharing';
import { SpeechRecognition } from './plugins/speech-recognition';
import { SpinnerDialog } from './plugins/spinnerdialog';
import { Splashscreen } from './plugins/splashscreen';
import { SQLite } from './plugins/sqlite';
import { StatusBar } from './plugins/statusbar';
import { Stepcounter } from './plugins/stepcounter';
import { StreamingMedia } from './plugins/streaming-media';
import { Stripe } from './plugins/stripe';
import { ThreeDeeTouch } from './plugins/3dtouch';
import { Toast } from './plugins/toast';
import { TouchID } from './plugins/touchid';
import { TextToSpeech } from './plugins/text-to-speech';
import { ThemeableBrowser } from './plugins/themeable-browser';
import { TwitterConnect } from './plugins/twitter-connect';
import { UniqueDeviceID } from './plugins/unique-device-id';
import { Vibration } from './plugins/vibration';
import { VideoEditor } from './plugins/video-editor';
import { VideoPlayer } from './plugins/video-player';
import { WebIntent } from './plugins/webintent';
import { YoutubeVideoPlayer } from './plugins/youtube-video-player';
import { ZBar } from './plugins/z-bar';
import { Zip } from './plugins/zip';
export * from './plugins/3dtouch';
export * from './plugins/actionsheet';
export * from './plugins/admob';
export * from './plugins/alipay';
export * from './plugins/android-fingerprint-auth';
export * from './plugins/appavailability';
export * from './plugins/apppreferences';
export * from './plugins/appodeal';
export * from './plugins/apprate';
export * from './plugins/app-update';
export * from './plugins/appversion';
export * from './plugins/background-fetch';
export * from './plugins/background-geolocation';
export * from './plugins/backgroundmode';
export * from './plugins/backlight';
export * from './plugins/badge';
export * from './plugins/barcodescanner';
export * from './plugins/base64togallery';
export * from './plugins/batterystatus';
export * from './plugins/ble';
export * from './plugins/bluetoothserial';
export * from './plugins/brightness';
export * from './plugins/browser-tab';
export * from './plugins/broadcaster';
export * from './plugins/calendar';
export * from './plugins/call-number';
export * from './plugins/camera';
export * from './plugins/camera-preview';
export * from './plugins/card-io';
export * from './plugins/clipboard';
export * from './plugins/code-push';
export * from './plugins/contacts';
export * from './plugins/couchbase-lite';
export * from './plugins/crop';
export * from './plugins/datepicker';
export * from './plugins/dbmeter';
export * from './plugins/deeplinks';
export * from './plugins/device';
export * from './plugins/device-feedback';
export * from './plugins/deviceaccounts';
export * from './plugins/devicemotion';
export * from './plugins/deviceorientation';
export * from './plugins/diagnostic';
export * from './plugins/dialogs';
export * from './plugins/emailcomposer';
export * from './plugins/estimote-beacons';
export * from './plugins/facebook';
export * from './plugins/file';
export * from './plugins/file-chooser';
export * from './plugins/file-opener';
export * from './plugins/filetransfer';
export * from './plugins/firebase';
export * from './plugins/filepath';
export * from './plugins/fingerprint-aio';
export * from './plugins/flashlight';
export * from './plugins/geofence';
export * from './plugins/geolocation';
export * from './plugins/globalization';
export * from './plugins/google-plus';
export * from './plugins/googleanalytics';
export * from './plugins/googlemap';
export * from './plugins/gyroscope';
export * from './plugins/headercolor';
export * from './plugins/health';
export * from './plugins/hotspot';
export * from './plugins/http';
export * from './plugins/httpd';
export * from './plugins/ibeacon';
export * from './plugins/imagepicker';
export * from './plugins/imageresizer';
export * from './plugins/inappbrowser';
export * from './plugins/inapppurchase';
export * from './plugins/insomnia';
export * from './plugins/instagram';
export * from './plugins/is-debug';
export * from './plugins/keyboard';
export * from './plugins/launchnavigator';
export * from './plugins/launch-review';
export * from './plugins/localnotifications';
export * from './plugins/location-accuracy';
export * from './plugins/market';
export * from './plugins/media';
export * from './plugins/media-capture';
export * from './plugins/mixpanel';
export * from './plugins/music-controls';
export * from './plugins/native-audio';
export * from './plugins/native-geocoder';
export * from './plugins/native-page-transitions';
export * from './plugins/nativestorage';
export * from './plugins/navigationbar';
export * from './plugins/network';
export * from './plugins/nfc';
export * from './plugins/onesignal';
export * from './plugins/pay-pal';
export * from './plugins/photo-library';
export * from './plugins/photo-viewer';
export * from './plugins/pin-dialog';
export * from './plugins/pinterest';
export * from './plugins/plugin';
export * from './plugins/power-management';
export * from './plugins/printer';
export * from './plugins/push';
export * from './plugins/rollbar';
export * from './plugins/safari-view-controller';
export * from './plugins/screen-orientation';
export * from './plugins/screenshot';
export * from './plugins/securestorage';
export * from './plugins/serial';
export * from './plugins/shake';
export * from './plugins/sim';
export * from './plugins/sms';
export * from './plugins/socialsharing';
export * from './plugins/speech-recognition';
export * from './plugins/spinnerdialog';
export * from './plugins/splashscreen';
export * from './plugins/sqlite';
export * from './plugins/statusbar';
export * from './plugins/stepcounter';
export * from './plugins/streaming-media';
export * from './plugins/stripe';
export * from './plugins/text-to-speech';
export * from './plugins/themeable-browser';
export * from './plugins/toast';
export * from './plugins/touchid';
export * from './plugins/twitter-connect';
export * from './plugins/unique-device-id';
export * from './plugins/vibration';
export * from './plugins/video-editor';
export * from './plugins/video-player';
export * from './plugins/webintent';
export * from './plugins/youtube-video-player';
export * from './plugins/z-bar';
export * from './plugins/zip';

// Window export to use outside of a module loading system
window['IonicNative'] = {
  ActionSheet,
  AdMob,
  Alipay,
  AndroidFingerprintAuth,
  AppAvailability,
  AppPreferences,
  Appodeal,
  AppRate,
  AppUpdate,
  AppVersion,
  Badge,
  BackgroundGeolocation,
  BackgroundFetch,
  BackgroundMode,
  Backlight,
  BarcodeScanner,
  Base64ToGallery,
  BatteryStatus,
  Brightness,
  BrowserTab,
  BLE,
  BluetoothSerial,
  Broadcaster,
  Calendar,
  CallNumber,
  Camera,
  CameraPreview,
  CardIO,
  Clipboard,
  CodePush,
  Contacts,
  CouchbaseLite,
  Crop,
  DatePicker,
  DBMeter,
  Deeplinks,
  Device,
  DeviceFeedback,
  DeviceAccounts,
  DeviceMotion,
  DeviceOrientation,
  Dialogs,
  Diagnostic,
  EmailComposer,
  EstimoteBeacons,
  Facebook,
  File,
  FileChooser,
  FileOpener,
  FilePath,
  FingerprintAIO,
  Flashlight,
  Firebase,
  Geofence,
  Geolocation,
  Globalization,
  GooglePlus,
  GoogleMap,
  GoogleAnalytics,
  Gyroscope,
  HeaderColor,
  Health,
  Hotspot,
  HTTP,
  Httpd,
  IBeacon,
  ImagePicker,
  ImageResizer,
  InAppBrowser,
  InAppPurchase,
  Insomnia,
  Instagram,
  IsDebug,
  Keyboard,
  LaunchNavigator,
  LaunchReview,
  LocalNotifications,
  LocationAccuracy,
  Market,
  MediaCapture,
  MediaPlugin,
  Mixpanel,
  MusicControls,
  NativeAudio,
  NativeGeocoder,
  NativePageTransitions,
  NativeStorage,
  NavigationBar,
  Network,
  PayPal,
  PhotoLibrary,
  NFC,
  Printer,
  Push,
  OneSignal,
  PhotoViewer,
  ScreenOrientation,
  PinDialog,
  Pinterest,
  PowerManagement,
  Rollbar,
  SafariViewController,
  Screenshot,
  SecureStorage,
  Serial,
  Shake,
  Sim,
  SMS,
  SocialSharing,
  SpinnerDialog,
  Splashscreen,
  SQLite,
  StatusBar,
  SpeechRecognition,
  Stepcounter,
  StreamingMedia,
  Stripe,
  ThreeDeeTouch,
  Toast,
  TouchID,
  Transfer,
  TextToSpeech,
  ThemeableBrowser,
  TwitterConnect,
  UniqueDeviceID,
  VideoEditor,
  VideoPlayer,
  Vibration,
  WebIntent,
  YoutubeVideoPlayer,
  ZBar,
  Zip
};

initAngular1(window['IonicNative']);

// To help developers using cordova, we listen for the device ready event and
// log an error if it didn't fire in a reasonable amount of time. Generally,
// when this happens, developers should remove and reinstall plugins, since
// an inconsistent plugin is often the culprit.
const before = Date.now();

let didFireReady = false;
document.addEventListener('deviceready', () => {
  console.log('DEVICE READY FIRED AFTER', (Date.now() - before), 'ms');
  didFireReady = true;
});

setTimeout(() => {
  if (!didFireReady && window.cordova) {
    console.warn(`Native: deviceready did not fire within ${DEVICE_READY_TIMEOUT}ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.`);
  }
}, DEVICE_READY_TIMEOUT);
