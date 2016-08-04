<a name="1.3.10"></a>
## [1.3.10](https://github.com/driftyco/ionic-native/compare/v1.3.9...v1.3.10) (2016-08-01)


### Bug Fixes

* **brightness:** use correct pluginRef ([e20c411](https://github.com/driftyco/ionic-native/commit/e20c411))
* **diagnostics:** Corrects isEnabled functions to isAvailable ([#373](https://github.com/driftyco/ionic-native/issues/373)) ([ccf7fb5](https://github.com/driftyco/ionic-native/commit/ccf7fb5))
* **ng1:** use $q  promises instead of the native Promise ([#378](https://github.com/driftyco/ionic-native/issues/378)) ([817a434](https://github.com/driftyco/ionic-native/commit/817a434))
* **one-signal:** return Observable instead of promise ([#352](https://github.com/driftyco/ionic-native/issues/352)) ([08fe04e](https://github.com/driftyco/ionic-native/commit/08fe04e))


### Features

* **crop:** add crop plugin ([#284](https://github.com/driftyco/ionic-native/issues/284)) ([41c9adf](https://github.com/driftyco/ionic-native/commit/41c9adf))
* **screen-orientation:** Added Screen Orientation Plugin [#342](https://github.com/driftyco/ionic-native/issues/342) ([#366](https://github.com/driftyco/ionic-native/issues/366)) ([bd9366b](https://github.com/driftyco/ionic-native/commit/bd9366b)), closes [#342](https://github.com/driftyco/ionic-native/issues/342)



<a name="1.3.9"></a>
## [1.3.9](https://github.com/driftyco/ionic-native/compare/v1.3.8...v1.3.9) (2016-07-23)


### Bug Fixes

* **file:** readAsText() and adds readAsDataURL() in File plugin ([#346](https://github.com/driftyco/ionic-native/issues/346)) ([77d31cd](https://github.com/driftyco/ionic-native/commit/77d31cd))


### Features

* **android-fingerprint-auth:** add wrapper for plugin ([df326f7](https://github.com/driftyco/ionic-native/commit/df326f7)), closes [#334](https://github.com/driftyco/ionic-native/issues/334)
* **secure-storage:** Add Secure Storage Wrapper ([#347](https://github.com/driftyco/ionic-native/issues/347)) ([075842d](https://github.com/driftyco/ionic-native/commit/075842d))



<a name="1.3.8"></a>
## [1.3.8](https://github.com/driftyco/ionic-native/compare/v1.3.7...v1.3.8) (2016-07-20)


### Bug Fixes

* **base64togallery:** update plugin wrapper to match latest version ([d4bee49](https://github.com/driftyco/ionic-native/commit/d4bee49)), closes [#335](https://github.com/driftyco/ionic-native/issues/335)
* **sqlite:** fix method attribute typo ([#324](https://github.com/driftyco/ionic-native/issues/324)) ([006bc70](https://github.com/driftyco/ionic-native/commit/006bc70)), closes [#324](https://github.com/driftyco/ionic-native/issues/324)


### Features

* **facebook:** add FacebookLoginResponse interface ([8b27bed](https://github.com/driftyco/ionic-native/commit/8b27bed))
* **otherPromise:** can work better with plugins that return promises ([#304](https://github.com/driftyco/ionic-native/issues/304)) ([0aee6c8](https://github.com/driftyco/ionic-native/commit/0aee6c8))
* **social-sharing:** add canShareViaEmail ([#333](https://github.com/driftyco/ionic-native/issues/333)) ([5807dd7](https://github.com/driftyco/ionic-native/commit/5807dd7))
* **twitter-connect:** add twitter connect plugin ([979838f](https://github.com/driftyco/ionic-native/commit/979838f)), closes [#308](https://github.com/driftyco/ionic-native/issues/308)



<a name="1.3.7"></a>
## [1.3.7](https://github.com/driftyco/ionic-native/compare/v1.3.6...v1.3.7) (2016-07-18)


### Bug Fixes

* **contacts:** missing name property, types ([#320](https://github.com/driftyco/ionic-native/issues/320)) ([074d166](https://github.com/driftyco/ionic-native/commit/074d166))
* **geolocation:** handle errors on watchPosition ([1b161d8](https://github.com/driftyco/ionic-native/commit/1b161d8)), closes [#322](https://github.com/driftyco/ionic-native/issues/322)


### Features

* **sim:** Add sim plugin ([#317](https://github.com/driftyco/ionic-native/issues/317)) ([4f85110](https://github.com/driftyco/ionic-native/commit/4f85110))



<a name="1.3.6"></a>
## [1.3.6](https://github.com/driftyco/ionic-native/compare/v1.3.5...v1.3.6) (2016-07-17)


### Bug Fixes

* **googlemaps:** able to pass array of LatLng to GoogleMapsLatLngBounds constructor ([de14b0e](https://github.com/driftyco/ionic-native/commit/de14b0e)), closes [#298](https://github.com/driftyco/ionic-native/issues/298)
* **launch-navigator:** fix the navigate function wrapper to match latest plugin API ([6f625f9](https://github.com/driftyco/ionic-native/commit/6f625f9))


### Features

* **camera-preview:** add wrapper for camera-preview ([#301](https://github.com/driftyco/ionic-native/issues/301)) ([3a1a3ce](https://github.com/driftyco/ionic-native/commit/3a1a3ce))
* **launch-navigator:** add new methods and constants to match latest plugin API ([29de6b3](https://github.com/driftyco/ionic-native/commit/29de6b3))



<a name="1.3.5"></a>
## [1.3.5](https://github.com/driftyco/ionic-native/compare/v1.3.4...v1.3.5) (2016-07-17)


### Bug Fixes

* **ibeacon:** minor fixes ([b5a2ffc](https://github.com/driftyco/ionic-native/commit/b5a2ffc))
* **safari-view-controller:** fix wrappers ([b4b3ec0](https://github.com/driftyco/ionic-native/commit/b4b3ec0))


### Features

* **googlemaps:** add Geocoder class ([#292](https://github.com/driftyco/ionic-native/issues/292)) ([2996da6](https://github.com/driftyco/ionic-native/commit/2996da6)), closes [#280](https://github.com/driftyco/ionic-native/issues/280)
* **media-capture:** add media capture plugin ([#293](https://github.com/driftyco/ionic-native/issues/293)) ([daa6d4c](https://github.com/driftyco/ionic-native/commit/daa6d4c)), closes [#272](https://github.com/driftyco/ionic-native/issues/272)
* **nativestorage:** add NativeStorage plugin wrapper ([af5d4ad](https://github.com/driftyco/ionic-native/commit/af5d4ad))
* **pin-dialog:** add pin dialog plugin ([#291](https://github.com/driftyco/ionic-native/issues/291)) ([2fe37c4](https://github.com/driftyco/ionic-native/commit/2fe37c4))



<a name="1.3.4"></a>
## [1.3.4](https://github.com/driftyco/ionic-native/compare/v1.3.3...v1.3.4) (2016-07-14)


### Bug Fixes

* **touchid:** make isAvailable static ([c23f5e9](https://github.com/driftyco/ionic-native/commit/c23f5e9))


### Reverts

* **changelog:** old changelog ([0cb79d1](https://github.com/driftyco/ionic-native/commit/0cb79d1))



<a name="1.3.3"></a>
## [1.3.3](https://github.com/driftyco/ionic-native/compare/v1.3.2...v1.3.3) (2016-07-11)


### Bug Fixes

* remove unnecessary decorator ([#257](https://github.com/driftyco/ionic-native/issues/257)) ([25fab64](https://github.com/driftyco/ionic-native/commit/25fab64))
* **actionsheet:** add missing optional parameter for hide function ([#262](https://github.com/driftyco/ionic-native/issues/262)) ([644e999](https://github.com/driftyco/ionic-native/commit/644e999))
* **background-geolocation:** fix pluginref again ([b8a5133](https://github.com/driftyco/ionic-native/commit/b8a5133))
* **geolocation:** fix plugin reference ([4f0cd24](https://github.com/driftyco/ionic-native/commit/4f0cd24)), closes [#258](https://github.com/driftyco/ionic-native/issues/258)
* **googlemaps:** use correct methods for addGroundOverlay and addKmlOverlay ([#268](https://github.com/driftyco/ionic-native/issues/268)) ([b8be1de](https://github.com/driftyco/ionic-native/commit/b8be1de))
* **socialsharing:** all methods return Promises now ([e150224](https://github.com/driftyco/ionic-native/commit/e150224)), closes [#275](https://github.com/driftyco/ionic-native/issues/275)


### Features

* **ibeacon:** add iBeacon plugin support ([#270](https://github.com/driftyco/ionic-native/issues/270)) ([dd97df1](https://github.com/driftyco/ionic-native/commit/dd97df1))
* **onesignal:** added wrapper for the Cordova OneSignal Plugin ([#252](https://github.com/driftyco/ionic-native/issues/252)) ([ba20dbe](https://github.com/driftyco/ionic-native/commit/ba20dbe))
* **push:** added support for Action Buttons on iOS with categories ([#273](https://github.com/driftyco/ionic-native/issues/273)) ([592feb4](https://github.com/driftyco/ionic-native/commit/592feb4))



<a name="1.3.2"></a>
## [1.3.2](https://github.com/driftyco/ionic-native/compare/v1.3.1...v1.3.2) (2016-06-27)


### Bug Fixes

* **build:** disable emitDecoratorMetadata option in tsconfig ([a5f3d7a](https://github.com/driftyco/ionic-native/commit/a5f3d7a)), closes [#251](https://github.com/driftyco/ionic-native/issues/251)



<a name="1.3.1"></a>
## [1.3.1](https://github.com/driftyco/ionic-native/compare/v1.2.4...v1.3.1) (2016-06-26)


### Bug Fixes

* **3dtouch:** fix implementation for onHomeIconPressed function ([d2b2be6](https://github.com/driftyco/ionic-native/commit/d2b2be6)), closes [#232](https://github.com/driftyco/ionic-native/issues/232)
* **barcodescanner:** add missing options param ([4fdcbb5](https://github.com/driftyco/ionic-native/commit/4fdcbb5)), closes [#180](https://github.com/driftyco/ionic-native/issues/180)
* **base64togallery:** method is now static ([be7b9e2](https://github.com/driftyco/ionic-native/commit/be7b9e2)), closes [#212](https://github.com/driftyco/ionic-native/issues/212)
* **batterystatus:** correct plugin name on npm ([66b7fa6](https://github.com/driftyco/ionic-native/commit/66b7fa6))
* **calendar:** fix some functionality and add missing ones ([a15fb01](https://github.com/driftyco/ionic-native/commit/a15fb01)), closes [#184](https://github.com/driftyco/ionic-native/issues/184)
* **deeplinks:** new result type ([11226d7](https://github.com/driftyco/ionic-native/commit/11226d7))
* **deviceorientation:** cancelFunction renamed to clearFunction ([8dee02e](https://github.com/driftyco/ionic-native/commit/8dee02e))
* **geolocation:** fix watchPosition() ([4a8650e](https://github.com/driftyco/ionic-native/commit/4a8650e)), closes [#164](https://github.com/driftyco/ionic-native/issues/164)
* **googlemaps:** isAvailable() returns boolean, not an instance of GoogleMap ([a53ae8f](https://github.com/driftyco/ionic-native/commit/a53ae8f))
* **sqlite:** resolve race condition, add comments ([#235](https://github.com/driftyco/ionic-native/issues/235)) ([f1c8ce3](https://github.com/driftyco/ionic-native/commit/f1c8ce3)), closes [#235](https://github.com/driftyco/ionic-native/issues/235)


### Features

* **angular1:** Support Angular 1 ([af8fbde](https://github.com/driftyco/ionic-native/commit/af8fbde))
* **barcodescanner:** add encode function ([e73f57f](https://github.com/driftyco/ionic-native/commit/e73f57f)), closes [#115](https://github.com/driftyco/ionic-native/issues/115)
* **deeplinks:** Add Ionic Deeplinks Plugin ([c93cbed](https://github.com/driftyco/ionic-native/commit/c93cbed))
* **googlemaps:** add GoogleMapsLatLngBounds class ([17da427](https://github.com/driftyco/ionic-native/commit/17da427))
* **printer:** add printer plugin ([#225](https://github.com/driftyco/ionic-native/issues/225)) ([48ffcae](https://github.com/driftyco/ionic-native/commit/48ffcae))



<a name="1.2.4"></a>
## [1.2.4](https://github.com/driftyco/ionic-native/compare/v1.2.3...v1.2.4) (2016-06-01)



<a name="1.2.3"></a>
## [1.2.3](https://github.com/driftyco/ionic-native/compare/v1.2.2...v1.2.3) (2016-06-01)



<a name="1.2.2"></a>
## [1.2.2](https://github.com/driftyco/ionic-native/compare/v1.2.1...v1.2.2) (2016-05-20)


### Bug Fixes

* **Bluetooth:** make connect function an observable to maintain full functionality ([58e3f0b](https://github.com/driftyco/ionic-native/commit/58e3f0b)), closes [#154](https://github.com/driftyco/ionic-native/issues/154)
* **calendar:** add new permissions functions for Android 6 (M) devices ([ddbd64d](https://github.com/driftyco/ionic-native/commit/ddbd64d)), closes [#156](https://github.com/driftyco/ionic-native/issues/156)
* **emailcomposer:** fix isAvailable function ([2a568d2](https://github.com/driftyco/ionic-native/commit/2a568d2)), closes [#168](https://github.com/driftyco/ionic-native/issues/168)



<a name="1.2.1"></a>
## [1.2.1](https://github.com/driftyco/ionic-native/compare/v1.2.0...v1.2.1) (2016-05-11)


### Bug Fixes

* **contacts:** plugin rewrite ([aada893](https://github.com/driftyco/ionic-native/commit/aada893))


### Features

* **plugin:** add wrapper for instance properties ([28d7d5c](https://github.com/driftyco/ionic-native/commit/28d7d5c))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/driftyco/ionic-native/compare/v1.1.0...v1.2.0) (2016-04-30)


### Bug Fixes

* **BluetoohSerial:** add missing plugin reference ([317437b](https://github.com/driftyco/ionic-native/commit/317437b))
* **GoogleAnalytics:** addCustomDimension() key param is number ([3865ea4](https://github.com/driftyco/ionic-native/commit/3865ea4)), closes [#131](https://github.com/driftyco/ionic-native/issues/131)
* **keyboard:** remove hideKeyboardAccessoryBar method for now ([292c80c](https://github.com/driftyco/ionic-native/commit/292c80c))
* **launchnavigator:** bug fix ([4ead1ae](https://github.com/driftyco/ionic-native/commit/4ead1ae))
* **launchnavigator:** start parameter is optional ([5e7378a](https://github.com/driftyco/ionic-native/commit/5e7378a))
* **localnotifications:** options can be an array ([e10d744](https://github.com/driftyco/ionic-native/commit/e10d744))
* **plugin:** handle rejection when Cordova is undefined ([db07768](https://github.com/driftyco/ionic-native/commit/db07768))
* **plugin:** remove unecessary code ([4070991](https://github.com/driftyco/ionic-native/commit/4070991))
* **push plugin:** senderId is optional in iosPushOptions ([48bf837](https://github.com/driftyco/ionic-native/commit/48bf837))
* **spinnerdialog:** fix functionality ([66f0e03](https://github.com/driftyco/ionic-native/commit/66f0e03))
* **vibration:** fix plugin reference ([beeb075](https://github.com/driftyco/ionic-native/commit/beeb075)), closes [#106](https://github.com/driftyco/ionic-native/issues/106)


### Features

* **camera:** add camera constants ([ce02d82](https://github.com/driftyco/ionic-native/commit/ce02d82)), closes [#129](https://github.com/driftyco/ionic-native/issues/129)
* **ionicnative:** add instance wrapper ([0ec737a](https://github.com/driftyco/ionic-native/commit/0ec737a))
* **keyboard:** add event listeners for keyboard show/hide events ([c947437](https://github.com/driftyco/ionic-native/commit/c947437))
* **media:** add media plugin ([1105b57](https://github.com/driftyco/ionic-native/commit/1105b57)), closes [#88](https://github.com/driftyco/ionic-native/issues/88)
* **plugin:** add admob pro plugin ([d9b847b](https://github.com/driftyco/ionic-native/commit/d9b847b)), closes [#146](https://github.com/driftyco/ionic-native/issues/146)
* **plugin:** add Bluetooth Serial plugin ([837fb95](https://github.com/driftyco/ionic-native/commit/837fb95)), closes [#136](https://github.com/driftyco/ionic-native/issues/136)
* **plugin:** add email composer plugin ([804c9ee](https://github.com/driftyco/ionic-native/commit/804c9ee))
* **plugin:** add InAppBrowser plugin ([b8d2cfd](https://github.com/driftyco/ionic-native/commit/b8d2cfd))
* **plugin:** add social sharing plugin ([efc8231](https://github.com/driftyco/ionic-native/commit/efc8231))
* **plugin:** add spinner dialog plugin ([812653c](https://github.com/driftyco/ionic-native/commit/812653c))
* **plugin:** add web intent plugin ([e2fc9a0](https://github.com/driftyco/ionic-native/commit/e2fc9a0))
* **toast:** add new features to toast plugin ([ed7e783](https://github.com/driftyco/ionic-native/commit/ed7e783))
* **webintent:** add plugin to index ([f357b56](https://github.com/driftyco/ionic-native/commit/f357b56))


### Performance Improvements

* **ionicnative:** instance wrapper cleanup and optimization ([5a8d48e](https://github.com/driftyco/ionic-native/commit/5a8d48e))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/driftyco/ionic-native/compare/v1.0.9...v1.1.0) (2016-03-17)


### Bug Fixes

* **datepicker:** datepicker options are optional ([c3cfd14](https://github.com/driftyco/ionic-native/commit/c3cfd14))
* **datepicker:** dates are Dates ([ce6adcc](https://github.com/driftyco/ionic-native/commit/ce6adcc))
* **datepicker:** fix plugin functionality ([91de971](https://github.com/driftyco/ionic-native/commit/91de971))
* **datepicker:** fix plugin functionality ([1a778e7](https://github.com/driftyco/ionic-native/commit/1a778e7))
* **devicemotion:** combine watch and clear into one function ([d17f62d](https://github.com/driftyco/ionic-native/commit/d17f62d))
* **geolocation:** set callback order to reverse on getCurrentPosition ([1fac387](https://github.com/driftyco/ionic-native/commit/1fac387))
* **imagepicker:** pluginRef ([01d7972](https://github.com/driftyco/ionic-native/commit/01d7972))
* **interface:** params are optional ([e708bc6](https://github.com/driftyco/ionic-native/commit/e708bc6))
* **launchnavigator:** fix Plugin decorator property value ([9e17e25](https://github.com/driftyco/ionic-native/commit/9e17e25))
* **plugin:** combine watch and clearwatch functions ([8855359](https://github.com/driftyco/ionic-native/commit/8855359))
* **plugin:** don't call reject when sync ([1334f60](https://github.com/driftyco/ionic-native/commit/1334f60))
* **plugin:** export interfaces ([1e259da](https://github.com/driftyco/ionic-native/commit/1e259da))
* **plugin:** fix options properties ([44365f4](https://github.com/driftyco/ionic-native/commit/44365f4))
* **plugin:** fix types ([c86e135](https://github.com/driftyco/ionic-native/commit/c86e135))
* **plugins:** cleanup and add new plugins to index ([1771f7b](https://github.com/driftyco/ionic-native/commit/1771f7b))
* **plugins:** fix optional options ([9ef850c](https://github.com/driftyco/ionic-native/commit/9ef850c))
* added dummy boolean ([2caa151](https://github.com/driftyco/ionic-native/commit/2caa151))
* fix callback order ([5fda6d4](https://github.com/driftyco/ionic-native/commit/5fda6d4))
* fix callback order ([5944bd1](https://github.com/driftyco/ionic-native/commit/5944bd1))
* fix options params ([c71f8d4](https://github.com/driftyco/ionic-native/commit/c71f8d4))
* remove confirm callback, not needed. ([662d8ce](https://github.com/driftyco/ionic-native/commit/662d8ce))


### Features

* **batterystatus:** complete functionality ([e7a09d9](https://github.com/driftyco/ionic-native/commit/e7a09d9))
* **localnotification:** complete functionality ([5d5bae3](https://github.com/driftyco/ionic-native/commit/5d5bae3))
* **package:** expose decorators and wrapper functions ([848d706](https://github.com/driftyco/ionic-native/commit/848d706))
* **plugin:** add android hotspot plugin ([e1dc606](https://github.com/driftyco/ionic-native/commit/e1dc606))
* **plugin:** add app availability plugin ([3d188e1](https://github.com/driftyco/ionic-native/commit/3d188e1))
* **plugin:** add base64 to gallery ([8c17a2a](https://github.com/driftyco/ionic-native/commit/8c17a2a))
* **plugin:** add DB Meter ([22bb218](https://github.com/driftyco/ionic-native/commit/22bb218))
* **plugin:** add device motion plugin ([a4df21e](https://github.com/driftyco/ionic-native/commit/a4df21e))
* **plugin:** add device orientation plugin ([9766aab](https://github.com/driftyco/ionic-native/commit/9766aab))
* **plugin:** add dialogs plugin ([b5f9267](https://github.com/driftyco/ionic-native/commit/b5f9267))
* **plugin:** add event wrapper ([0d1bd13](https://github.com/driftyco/ionic-native/commit/0d1bd13))
* **plugin:** add flashlight plugin ([3ec25fa](https://github.com/driftyco/ionic-native/commit/3ec25fa))
* **plugin:** add functionality to app-availablity plugin ([bc4dcaa](https://github.com/driftyco/ionic-native/commit/bc4dcaa))
* **plugin:** add functionality to device motion plugin ([7f7ba3b](https://github.com/driftyco/ionic-native/commit/7f7ba3b))
* **plugin:** add globalization ([90cc36b](https://github.com/driftyco/ionic-native/commit/90cc36b))
* **plugin:** add imagePicker plugin ([287d129](https://github.com/driftyco/ionic-native/commit/287d129))
* **plugin:** add keyboard ([a80c4ee](https://github.com/driftyco/ionic-native/commit/a80c4ee))
* **plugin:** add launch navigator ([984e7fc](https://github.com/driftyco/ionic-native/commit/984e7fc))
* **plugin:** add launch navigator ([18df9a5](https://github.com/driftyco/ionic-native/commit/18df9a5))
* **plugin:** add local notifications ([66df0a6](https://github.com/driftyco/ionic-native/commit/66df0a6))
* **plugin:** add sms ([6843177](https://github.com/driftyco/ionic-native/commit/6843177))
* **plugin:** add sms plugin ([aa7e04c](https://github.com/driftyco/ionic-native/commit/aa7e04c))
* **plugin:** add splashscreen ([0f3c188](https://github.com/driftyco/ionic-native/commit/0f3c188))
* **plugin:** add vibration ([3cc4ee4](https://github.com/driftyco/ionic-native/commit/3cc4ee4))
* **plugin:** proxy plugin properties ([fc54fef](https://github.com/driftyco/ionic-native/commit/fc54fef))
* **plugin:** show instructions if plugin not installed ([c48a851](https://github.com/driftyco/ionic-native/commit/c48a851))
* **plugins:** add new plugins to index ([4d8dc1b](https://github.com/driftyco/ionic-native/commit/4d8dc1b))
* **plugins:** add platforms info ([9826dfd](https://github.com/driftyco/ionic-native/commit/9826dfd))



<a name="1.0.9"></a>
## [1.0.9](https://github.com/driftyco/ionic-native/compare/8f27fc9...v1.0.9) (2016-02-18)


### Bug Fixes

* **calendar:** make getCalendarOptions sync ([78c5408](https://github.com/driftyco/ionic-native/commit/78c5408))
* **geolocation:** call correct clearFunction ([9e86a40](https://github.com/driftyco/ionic-native/commit/9e86a40))
* **plugin:** return originalMethod return value ([240f0f8](https://github.com/driftyco/ionic-native/commit/240f0f8))
* **plugin:** use call for id based clearFunction ([c2fdf39](https://github.com/driftyco/ionic-native/commit/c2fdf39))
* datepicker plugin, pluginref, and [@Cordova](https://github.com/Cordova) wrapper ([499ead3](https://github.com/driftyco/ionic-native/commit/499ead3))


### Features

* **DatePicker:** Added DatePicker ([5afa58f](https://github.com/driftyco/ionic-native/commit/5afa58f))
* **plugin:** add sync option to [@Cordova](https://github.com/Cordova) for sync functions ([17e3827](https://github.com/driftyco/ionic-native/commit/17e3827))
* **plugin:** call clearFunction with original fn args ([8f27fc9](https://github.com/driftyco/ionic-native/commit/8f27fc9))
* add app version plugin ([20cb01f](https://github.com/driftyco/ionic-native/commit/20cb01f))
* add app version plugin ([8b78521](https://github.com/driftyco/ionic-native/commit/8b78521))
* add apprate ([0dd4fec](https://github.com/driftyco/ionic-native/commit/0dd4fec))
* add badge plugin ([7f01fb2](https://github.com/driftyco/ionic-native/commit/7f01fb2))
* add badge plugin ([3088df4](https://github.com/driftyco/ionic-native/commit/3088df4))
* add clipboard plugin ([0b6cca7](https://github.com/driftyco/ionic-native/commit/0b6cca7))
* add clipboard plugin ([fa4c266](https://github.com/driftyco/ionic-native/commit/fa4c266))



