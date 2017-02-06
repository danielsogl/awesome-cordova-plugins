import { initAngular1 } from './ng1';

import { ActionSheet } from './plugins/actionsheet';
import { AdMob } from './plugins/admob';
import { AndroidFingerprintAuth } from './plugins/android-fingerprint-auth';
import { AppAvailability } from './plugins/appavailability';
import { AppRate } from './plugins/apprate';
import { AppVersion } from './plugins/appversion';
import { Badge } from './plugins/badge';
import { BackgroundGeolocation } from './plugins/background-geolocation';
import { BackgroundMode } from './plugins/backgroundmode';
import { Backlight } from './plugins/backlight';
import { BarcodeScanner } from './plugins/barcodescanner';
import { Base64ToGallery } from './plugins/base64togallery';
import { BatteryStatus } from './plugins/batterystatus';
import { Brightness } from './plugins/brightness';
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
import { HeaderColor } from './plugins/headercolor';
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
import { Vibration } from './plugins/vibration';
import { VideoEditor } from './plugins/video-editor';
import { VideoPlayer } from './plugins/video-player';
import { WebIntent } from './plugins/webintent';
import { YoutubeVideoPlayer } from './plugins/youtube-video-player';
import { ZBar } from './plugins/z-bar';
import { Zip } from './plugins/zip';

// Window export to use outside of a module loading system
window['IonicNative'] = {
  ActionSheet,
  AdMob,
  AndroidFingerprintAuth,
  AppAvailability,
  AppRate,
  AppVersion,
  Badge,
  BackgroundGeolocation,
  BackgroundMode,
  Backlight,
  BarcodeScanner,
  Base64ToGallery,
  BatteryStatus,
  Brightness,
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
  HeaderColor,
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
  VideoEditor,
  VideoPlayer,
  Vibration,
  WebIntent,
  YoutubeVideoPlayer,
  ZBar,
  Zip
};

initAngular1(window['IonicNative']);
