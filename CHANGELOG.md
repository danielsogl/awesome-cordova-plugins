<a name="4.3.3"></a>
## [4.3.3](https://github.com/ionic-team/ionic-native/compare/4.3.2...v4.3.3) (2017-11-01)


### Bug Fixes

* **google-maps:** HtmlInfoWindow should extend BaseClass [#2034](https://github.com/ionic-team/ionic-native/issues/2034)  ([#2035](https://github.com/ionic-team/ionic-native/issues/2035)) ([ce6e412](https://github.com/ionic-team/ionic-native/commit/ce6e412))



<a name="4.3.2"></a>
## [4.3.2](https://github.com/ionic-team/ionic-native/compare/4.3.1...4.3.2) (2017-10-17)


### Bug Fixes

* **google-maps:** remove type from GoogleMapsEvent constant ([4639bf9](https://github.com/ionic-team/ionic-native/commit/4639bf9))


### Features

* **pro:** support corova-plugin-ionic v2.0.0 ([975f08b](https://github.com/ionic-team/ionic-native/commit/975f08b))



<a name="4.3.1"></a>
## [4.3.1](https://github.com/ionic-team/ionic-native/compare/v4.3.1...4.3.1) (2017-10-06)


### Features

* **pro:** Add support for Ionic Pro by incorporating cordova-plugin-ionic ([465d551](https://github.com/ionic-team/ionic-native/commit/465d551))



<a name="4.3.1"></a>
## [4.3.1](https://github.com/ionic-team/ionic-native/compare/v4.3.0...v4.3.1) (2017-10-06)


### Bug Fixes

* **BLE:** make readRSSI() not static ([#2011](https://github.com/ionic-team/ionic-native/issues/2011)) ([363b41e](https://github.com/ionic-team/ionic-native/commit/363b41e))
* **google-maps:** various fixed introduced in previous release ([#2024](https://github.com/ionic-team/ionic-native/issues/2024)) ([6ca5bea](https://github.com/ionic-team/ionic-native/commit/6ca5bea))
* **onesignal:** fix property name ([#2019](https://github.com/ionic-team/ionic-native/issues/2019)) ([30ed33a](https://github.com/ionic-team/ionic-native/commit/30ed33a))


### Features

* **regula-document-reader:** separate initialization and scanning, add android ([#2013](https://github.com/ionic-team/ionic-native/issues/2013)) ([2179699](https://github.com/ionic-team/ionic-native/commit/2179699))



<a name="4.3.0"></a>
# [4.3.0](https://github.com/ionic-team/ionic-native/compare/v4.2.1...v4.3.0) (2017-09-27)


### Bug Fixes

* **google-maps:** convert JS classes to Ionic Native ([#1956](https://github.com/ionic-team/ionic-native/issues/1956)) ([57af5c5](https://github.com/ionic-team/ionic-native/commit/57af5c5))
* **google-maps:** fix icons property of MarkerClusterOptions ([#1937](https://github.com/ionic-team/ionic-native/issues/1937)) ([8004790](https://github.com/ionic-team/ionic-native/commit/8004790))
* **google-maps:** fix issue when creating new instance of BaseArrayClass ([#1931](https://github.com/ionic-team/ionic-native/issues/1931)) ([957396b](https://github.com/ionic-team/ionic-native/commit/957396b))
* **google-maps:** the zoom option is missing in the GoogleMapOptions class ([#1948](https://github.com/ionic-team/ionic-native/issues/1948)) ([ef898ef](https://github.com/ionic-team/ionic-native/commit/ef898ef))
* **http:** fix plugin ref ([#1934](https://github.com/ionic-team/ionic-native/issues/1934)) ([3a1034e](https://github.com/ionic-team/ionic-native/commit/3a1034e))
* **launch-navigator:** fix navigate method ([#1940](https://github.com/ionic-team/ionic-native/issues/1940)) ([a150d4d](https://github.com/ionic-team/ionic-native/commit/a150d4d))
* **stripe:** fix stripe create card token ([#2002](https://github.com/ionic-team/ionic-native/issues/2002)) ([5b15bb9](https://github.com/ionic-team/ionic-native/commit/5b15bb9))
* **zeroconf:** extend the ZeroconfResult.action definition ([#1985](https://github.com/ionic-team/ionic-native/issues/1985)) ([e2f3702](https://github.com/ionic-team/ionic-native/commit/e2f3702))


### Features

* **android-full-screen:** add support for setSystemUiVisiblity ([#1942](https://github.com/ionic-team/ionic-native/issues/1942)) ([4246d47](https://github.com/ionic-team/ionic-native/commit/4246d47))
* **document-reader:** add cordova-plugin-documentreader ([#1996](https://github.com/ionic-team/ionic-native/issues/1996)) ([7b94d4f](https://github.com/ionic-team/ionic-native/commit/7b94d4f))
* **extended-device-information:** add Extended Device Info plugin ([#1980](https://github.com/ionic-team/ionic-native/issues/1980)) ([806766e](https://github.com/ionic-team/ionic-native/commit/806766e))
* **music-controls:** add support for next/prev track and skip forward/backward in control center ([#1927](https://github.com/ionic-team/ionic-native/issues/1927)) ([fff9969](https://github.com/ionic-team/ionic-native/commit/fff9969))
* **push:** update PushOptions interfaces to match new version ([#1908](https://github.com/ionic-team/ionic-native/issues/1908)) ([34bf136](https://github.com/ionic-team/ionic-native/commit/34bf136))
* **qr-scanner:** added destroy method ([#1916](https://github.com/ionic-team/ionic-native/issues/1916)) ([#1971](https://github.com/ionic-team/ionic-native/issues/1971)) ([10eb3ee](https://github.com/ionic-team/ionic-native/commit/10eb3ee))
* **uid:** add UID plugin ([#1946](https://github.com/ionic-team/ionic-native/issues/1946)) ([e2419a2](https://github.com/ionic-team/ionic-native/commit/e2419a2))


### BREAKING CHANGES

* **push:** this wrapper will work only with `phonegap-plugin-push@2.0.0`



<a name="4.2.0"></a>
# [4.2.0](https://github.com/ionic-team/ionic-native/compare/v4.1.0...v4.2.0) (2017-08-26)


### Bug Fixes

* **fingerprint-aio:** add missing FingerprintOptions properties ([#1845](https://github.com/ionic-team/ionic-native/issues/1845)) ([85825c7](https://github.com/ionic-team/ionic-native/commit/85825c7))
* **geofence:** remove duplicate onTransitionReceived method ([00c0707](https://github.com/ionic-team/ionic-native/commit/00c0707))
* **google-maps:** add missing debug option ([#1832](https://github.com/ionic-team/ionic-native/issues/1832)) ([39ec515](https://github.com/ionic-team/ionic-native/commit/39ec515))
* **ms-adal:** make userId optional ([#1894](https://github.com/ionic-team/ionic-native/issues/1894)) ([21045ea](https://github.com/ionic-team/ionic-native/commit/21045ea))
* **native-geocoder:** update NativeGeocoderReverse result ([#1840](https://github.com/ionic-team/ionic-native/issues/1840)) ([7c1b409](https://github.com/ionic-team/ionic-native/commit/7c1b409))
* **native-spinner:** update pluginRef ([#1859](https://github.com/ionic-team/ionic-native/issues/1859)) ([262e18f](https://github.com/ionic-team/ionic-native/commit/262e18f))
* **serial:** add missing options for the open method ([#1844](https://github.com/ionic-team/ionic-native/issues/1844)) ([1acade4](https://github.com/ionic-team/ionic-native/commit/1acade4))
* **sqlite:** add optional key parameter to SQLiteDatabaseConfig to support sqlcipher-adapter ([#1917](https://github.com/ionic-team/ionic-native/issues/1917)) ([0c097ba](https://github.com/ionic-team/ionic-native/commit/0c097ba))


### Features

* **google-maps:** update plugin and fix a few issues ([#1834](https://github.com/ionic-team/ionic-native/issues/1834)) ([c11aec3](https://github.com/ionic-team/ionic-native/commit/c11aec3))
* **http:** use a different plugin source with better features ([#1921](https://github.com/ionic-team/ionic-native/issues/1921)) ([a2d3396](https://github.com/ionic-team/ionic-native/commit/a2d3396))
* **keychain-touch-id:** add KeychainTouchId plugin ([#1837](https://github.com/ionic-team/ionic-native/issues/1837)) ([a2cc187](https://github.com/ionic-team/ionic-native/commit/a2cc187))
* **local-notifications:** add `un` method to unsubscribe from events ([#1871](https://github.com/ionic-team/ionic-native/issues/1871)) ([ce5966b](https://github.com/ionic-team/ionic-native/commit/ce5966b))
* **paypal:** add payeeEmail for third party merchants ([#1864](https://github.com/ionic-team/ionic-native/issues/1864)) ([cde87e2](https://github.com/ionic-team/ionic-native/commit/cde87e2))
* **push:** add Browser Push notification support ([#1848](https://github.com/ionic-team/ionic-native/issues/1848)) ([aa4c3b3](https://github.com/ionic-team/ionic-native/commit/aa4c3b3))



<a name="4.1.0"></a>
# [4.1.0](https://github.com/ionic-team/ionic-native/compare/v4.0.1...v4.1.0) (2017-07-21)


### Bug Fixes

* **media:** add setRate method ([4af3d5b](https://github.com/ionic-team/ionic-native/commit/4af3d5b)), closes [#1825](https://github.com/ionic-team/ionic-native/issues/1825)


### Features

* **firebase:** add unregister method ([#1823](https://github.com/ionic-team/ionic-native/issues/1823)) ([6230958](https://github.com/ionic-team/ionic-native/commit/6230958))
* **google-maps:** add missing features and fix wrong definitions ([#1815](https://github.com/ionic-team/ionic-native/issues/1815)) ([976401a](https://github.com/ionic-team/ionic-native/commit/976401a))
* **hyper-track:** add HyperTrack plugin ([#1816](https://github.com/ionic-team/ionic-native/issues/1816)) ([47fa44c](https://github.com/ionic-team/ionic-native/commit/47fa44c))
* **open-native-settings:** add Open Native Settings plugin ([0fa82e5](https://github.com/ionic-team/ionic-native/commit/0fa82e5)), closes [#1821](https://github.com/ionic-team/ionic-native/issues/1821)



<a name="4.0.1"></a>
## [4.0.1](https://github.com/ionic-team/ionic-native/compare/v4.0.0...v4.0.1) (2017-07-15)


### Bug Fixes

* **media:** fix success/error/statusUpdate observables ([7105048](https://github.com/ionic-team/ionic-native/commit/7105048)), closes [#1806](https://github.com/ionic-team/ionic-native/issues/1806)
* **social-sharing:** fix issues caused by omitting optional params ([25c1cf4](https://github.com/ionic-team/ionic-native/commit/25c1cf4)), closes [#1805](https://github.com/ionic-team/ionic-native/issues/1805)


### Features

* **camera:** add enums for camera options ([6061af6](https://github.com/ionic-team/ionic-native/commit/6061af6))
* **launch-navigator:** update plugin wrapper to support v4 ([9538416](https://github.com/ionic-team/ionic-native/commit/9538416)), closes [#1738](https://github.com/ionic-team/ionic-native/issues/1738)
* **media:** add MEDIA_STATUS and MEDIA_ERROR enums ([1decedd](https://github.com/ionic-team/ionic-native/commit/1decedd))



<a name="4.0.0"></a>
# [4.0.0](https://github.com/ionic-team/ionic-native/compare/v3.14.0...v4.0.0) (2017-07-11)


### Bug Fixes

* **google-analytics:** fix parameter types in the trackMetric method ([#1780](https://github.com/ionic-team/ionic-native/issues/1780)) ([7bbd25c](https://github.com/ionic-team/ionic-native/commit/7bbd25c))
* **media:** wrap plugin callbacks with Observables ([0867cff](https://github.com/ionic-team/ionic-native/commit/0867cff)), closes [#1591](https://github.com/ionic-team/ionic-native/issues/1591)
* **safari-view-controller:** show should return an Observable ([a6f9714](https://github.com/ionic-team/ionic-native/commit/a6f9714)), closes [#1619](https://github.com/ionic-team/ionic-native/issues/1619)
* **sqlite:** fix param type for `sqlBatch` method ([e8faf22](https://github.com/ionic-team/ionic-native/commit/e8faf22)), closes [#1596](https://github.com/ionic-team/ionic-native/issues/1596)


### Code Refactoring

* **admob-pro:** rename plugin from AdMob to AdMobPro ([#1770](https://github.com/ionic-team/ionic-native/issues/1770)) ([bc6bf66](https://github.com/ionic-team/ionic-native/commit/bc6bf66))
* **media:** rename main class to Media ([#1769](https://github.com/ionic-team/ionic-native/issues/1769)) ([9f1a0f9](https://github.com/ionic-team/ionic-native/commit/9f1a0f9))
* **rename plugin to FileTransfer to match original plugin:** ([#1768](https://github.com/ionic-team/ionic-native/issues/1768)) ([3c54a1c](https://github.com/ionic-team/ionic-native/commit/3c54a1c))


### Features

* **email-composer:** update plugin to latest version and use original plugin ([#1771](https://github.com/ionic-team/ionic-native/issues/1771)) ([d395b42](https://github.com/ionic-team/ionic-native/commit/d395b42))
* **google-maps:** add GoogleMapOptions interface ([aff653d](https://github.com/ionic-team/ionic-native/commit/aff653d))
* **google-maps:** update wrapper to support v2 of the plugin ([#1759](https://github.com/ionic-team/ionic-native/issues/1759)) ([06e666d](https://github.com/ionic-team/ionic-native/commit/06e666d))
* **ms-adal:** add Azure Active Directory Authentication plugin ([cf0c740](https://github.com/ionic-team/ionic-native/commit/cf0c740)), closes [#372](https://github.com/ionic-team/ionic-native/issues/372)
* **onesignal:** add new methods ([b35dab2](https://github.com/ionic-team/ionic-native/commit/b35dab2)), closes [#1677](https://github.com/ionic-team/ionic-native/issues/1677)
* **qr-scanner:** add QRScanner plugin ([bde2b38](https://github.com/ionic-team/ionic-native/commit/bde2b38)), closes [#715](https://github.com/ionic-team/ionic-native/issues/715)


### BREAKING CHANGES

* **safari-view-controller:** `show` method now returns an Observable
* **media:** the plugin's `create` method no longer takes callback functions. You must use the
observables provided by the `MediaObject` instance. Refer to the updated documentation for more
information.
* **admob-pro:** `@ionic-native/admob` is now `@ionic-native/admob-pro`. Also, class name is changed
from `AdMob` to `AdMobPro`.
* **media:** `MediaObject` class is now `Media`
* **rename plugin to FileTransfer to match original plugin:** Package name is now `@ionic-native/file-transfer`. `Transfer` class has been
renamed to `FileTransfer`. Also, `TransferObject` class has been renamed to `FileTransferObject`.



<a name="3.14.0"></a>
# [3.14.0](https://github.com/ionic-team/ionic-native/compare/v3.13.1...v3.14.0) (2017-07-07)


### Features

* **in-app-purchase2:** add a second InAppPurchase plugin ([#1775](https://github.com/ionic-team/ionic-native/issues/1775)) ([398d0ee](https://github.com/ionic-team/ionic-native/commit/398d0ee)), closes [#1705](https://github.com/ionic-team/ionic-native/issues/1705)



<a name="3.13.1"></a>
## [3.13.1](https://github.com/ionic-team/ionic-native/compare/v3.13.0...v3.13.1) (2017-07-05)


### Bug Fixes

* **document-viewer:** make config properties optional ([#1767](https://github.com/ionic-team/ionic-native/issues/1767)) ([5b914d7](https://github.com/ionic-team/ionic-native/commit/5b914d7))


### Features

* **app-rate:** add function handleNegativeFeedback() ([#1748](https://github.com/ionic-team/ionic-native/issues/1748)) ([e64cc0c](https://github.com/ionic-team/ionic-native/commit/e64cc0c))
* **app-rate:** add function navigateToAppStore() ([#1719](https://github.com/ionic-team/ionic-native/issues/1719)) ([0c79ac1](https://github.com/ionic-team/ionic-native/commit/0c79ac1))



<a name="3.13.0"></a>
# [3.13.0](https://github.com/ionic-team/ionic-native/compare/v3.12.2...v3.13.0) (2017-07-03)


### Features

* **pin-check:** add pin check plugin ([#1734](https://github.com/ionic-team/ionic-native/issues/1734)) ([b8ac7bf](https://github.com/ionic-team/ionic-native/commit/b8ac7bf))
* **qqsdk:** add qqsdk plugin ([#1689](https://github.com/ionic-team/ionic-native/issues/1689)) ([b56297e](https://github.com/ionic-team/ionic-native/commit/b56297e))



<a name="3.12.2"></a>
## [3.12.2](https://github.com/ionic-team/ionic-native/compare/v3.12.1...v3.12.2) (2017-07-03)


### Bug Fixes

* **android-fingerprint-auth:** fix return type of isAvailable ([#1697](https://github.com/ionic-team/ionic-native/issues/1697)) ([af91977](https://github.com/ionic-team/ionic-native/commit/af91977))
* **ibeacon:** optional parameter ([#1702](https://github.com/ionic-team/ionic-native/issues/1702)) ([64ce132](https://github.com/ionic-team/ionic-native/commit/64ce132)), closes [#1701](https://github.com/ionic-team/ionic-native/issues/1701)
* **local-notifications:** add missing priority option ([e40247c](https://github.com/ionic-team/ionic-native/commit/e40247c)), closes [#1683](https://github.com/ionic-team/ionic-native/issues/1683)
* **mobile-accessibility:** fix plugin reference ([03ac735](https://github.com/ionic-team/ionic-native/commit/03ac735)), closes [#1666](https://github.com/ionic-team/ionic-native/issues/1666)
* **onesignal:** fix getPermissionSubscriptionState return type ([#1742](https://github.com/ionic-team/ionic-native/issues/1742)) ([3c125bb](https://github.com/ionic-team/ionic-native/commit/3c125bb))


### Features

* **music-controls:** add event for ios control center seek and function to update ios elapsed time ([#1727](https://github.com/ionic-team/ionic-native/issues/1727)) ([593607e](https://github.com/ionic-team/ionic-native/commit/593607e))
* **one-signal:** add getPermissionSubscriptionState ([#1678](https://github.com/ionic-team/ionic-native/issues/1678)) ([e9283a9](https://github.com/ionic-team/ionic-native/commit/e9283a9))
* **sqlite:** support pre-filled databases ([#1687](https://github.com/ionic-team/ionic-native/issues/1687)) ([b52371b](https://github.com/ionic-team/ionic-native/commit/b52371b))



<a name="3.12.1"></a>
## [3.12.1](https://github.com/ionic-team/ionic-native/compare/v3.12.0...v3.12.1) (2017-06-03)


### Code Refactoring

* **phonegap-local-notification:** fix class name to match plugin name ([c6a76c2](https://github.com/ionic-team/ionic-native/commit/c6a76c2))


### BREAKING CHANGES

* **phonegap-local-notification:** PhonegapLocalNotifications class has been renamed to PhonegapLocalNotification



<a name="3.12.0"></a>
# [3.12.0](https://github.com/ionic-team/ionic-native/compare/v3.11.0...v3.12.0) (2017-06-03)


### Features

* **base64:** add Base64 plugin ([#1645](https://github.com/ionic-team/ionic-native/issues/1645)) ([793e2e3](https://github.com/ionic-team/ionic-native/commit/793e2e3))
* **firebase-analytics:** add firebase analytics plugin ([#1647](https://github.com/ionic-team/ionic-native/issues/1647)) ([3eb69b4](https://github.com/ionic-team/ionic-native/commit/3eb69b4))
* **firebase-dynamic-links:** add firebase dynamic links plugin ([#1649](https://github.com/ionic-team/ionic-native/issues/1649)) ([0467a0d](https://github.com/ionic-team/ionic-native/commit/0467a0d))



<a name="3.11.0"></a>
# [3.11.0](https://github.com/ionic-team/ionic-native/compare/v3.10.2...v3.11.0) (2017-06-01)


### Bug Fixes

* **document-viewer:** fix param type ([#1634](https://github.com/ionic-team/ionic-native/issues/1634)) ([985193b](https://github.com/ionic-team/ionic-native/commit/985193b))
* **flurry-analytics:** fix original class reference ([#1597](https://github.com/ionic-team/ionic-native/issues/1597)) ([aaeabb9](https://github.com/ionic-team/ionic-native/commit/aaeabb9))
* **secure-storage:** add missing function ([#1626](https://github.com/ionic-team/ionic-native/issues/1626)) ([8b9995a](https://github.com/ionic-team/ionic-native/commit/8b9995a)), closes [#1625](https://github.com/ionic-team/ionic-native/issues/1625)


### Features

* **plugin:** add FTP plugin ([#1627](https://github.com/ionic-team/ionic-native/issues/1627)) ([2d3add6](https://github.com/ionic-team/ionic-native/commit/2d3add6))



<a name="3.10.2"></a>
## [3.10.2](https://github.com/ionic-team/ionic-native/compare/v3.10.1...v3.10.2) (2017-05-20)


### Features

* **core:** add getSupportedPlatforms method ([c8f53d2](https://github.com/ionic-team/ionic-native/commit/c8f53d2))



<a name="3.10.0"></a>
# [3.10.0](https://github.com/ionic-team/ionic-native/compare/v3.9.2...v3.10.0) (2017-05-19)


### Bug Fixes

* **admob-free:** use otherPromise to fix browser development ([2bd244a](https://github.com/ionic-team/ionic-native/commit/2bd244a))


### Features

* **native-keyboard:** add native keyboard plugin ([#1588](https://github.com/ionic-team/ionic-native/issues/1588)) ([6031a24](https://github.com/ionic-team/ionic-native/commit/6031a24))
* **user-agent:** add User-Agent plugin ([#1582](https://github.com/ionic-team/ionic-native/issues/1582)) ([6f6392e](https://github.com/ionic-team/ionic-native/commit/6f6392e))



<a name="3.9.2"></a>
## [3.9.2](https://github.com/ionic-team/ionic-native/compare/v3.9.1...v3.9.2) (2017-05-17)


### Bug Fixes

* **action-sheet:** destructiveButtonLast is optional ([6416c25](https://github.com/ionic-team/ionic-native/commit/6416c25))
* **core:** decorators should define enumerable properties ([22102a7](https://github.com/ionic-team/ionic-native/commit/22102a7))



<a name="3.9.1"></a>
## [3.9.1](https://github.com/ionic-team/ionic-native/compare/v3.9.0...v3.9.1) (2017-05-17)


### Bug Fixes

* **core:** fix issues when clearing observables ([93a119b](https://github.com/ionic-team/ionic-native/commit/93a119b))



<a name="3.9.0"></a>
# [3.9.0](https://github.com/ionic-team/ionic-native/compare/v3.8.1...v3.9.0) (2017-05-17)


### Bug Fixes

* **android-permissions:** fix PERMISSION property and add requestPermission ([ebf4028](https://github.com/ionic-team/ionic-native/commit/ebf4028)), closes [#1574](https://github.com/ionic-team/ionic-native/issues/1574)
* **app-preferences:** suite is sync ([3cb8383](https://github.com/ionic-team/ionic-native/commit/3cb8383)), closes [#1321](https://github.com/ionic-team/ionic-native/issues/1321)
* **background-mode:** configure doesn't return anything ([92ef4f0](https://github.com/ionic-team/ionic-native/commit/92ef4f0)), closes [#1457](https://github.com/ionic-team/ionic-native/issues/1457)
* **in-app-browser:** fix on method ([975a65d](https://github.com/ionic-team/ionic-native/commit/975a65d)), closes [#1446](https://github.com/ionic-team/ionic-native/issues/1446)
* **media:** create should return null if plugin is not available ([d68618f](https://github.com/ionic-team/ionic-native/commit/d68618f))
* **media:** create will always return MediaObject even if plugin doesnt exist ([ee4b61e](https://github.com/ionic-team/ionic-native/commit/ee4b61e))
* **printer:** fix implementation and add pick method ([55071c0](https://github.com/ionic-team/ionic-native/commit/55071c0))
* **push:** fix types ([ca76593](https://github.com/ionic-team/ionic-native/commit/ca76593)), closes [#1331](https://github.com/ionic-team/ionic-native/issues/1331)
* **secure-storage:** reject the promise if the plugin doesn't exist ([#1562](https://github.com/ionic-team/ionic-native/issues/1562)) ([d5919d1](https://github.com/ionic-team/ionic-native/commit/d5919d1))


### Features

* **linkedin:** add getActiveSession method ([4c8deb2](https://github.com/ionic-team/ionic-native/commit/4c8deb2)), closes [#1570](https://github.com/ionic-team/ionic-native/issues/1570)
* **printer:** add check method ([991f2f0](https://github.com/ionic-team/ionic-native/commit/991f2f0))



<a name="3.8.1"></a>
## [3.8.1](https://github.com/ionic-team/ionic-native/compare/v3.8.0...v3.8.1) (2017-05-16)


### Bug Fixes

* **document-viewer:** fix params and docs for canViewDocument ([#1568](https://github.com/ionic-team/ionic-native/issues/1568)) ([b35417a](https://github.com/ionic-team/ionic-native/commit/b35417a))
* **file:** add toInternalURL ([#1561](https://github.com/ionic-team/ionic-native/issues/1561)) ([7c79712](https://github.com/ionic-team/ionic-native/commit/7c79712)), closes [#1560](https://github.com/ionic-team/ionic-native/issues/1560)
* **file:** fix repo link ([#1566](https://github.com/ionic-team/ionic-native/issues/1566)) ([adf9c5a](https://github.com/ionic-team/ionic-native/commit/adf9c5a))
* **file:** various fixes ([d0dec7a](https://github.com/ionic-team/ionic-native/commit/d0dec7a)), closes [#1564](https://github.com/ionic-team/ionic-native/issues/1564)
* **sqlite:** fix implementation and improve typings ([fec19b7](https://github.com/ionic-team/ionic-native/commit/fec19b7))


### Features

* **mix-panel:** add timeEvent ([#1536](https://github.com/ionic-team/ionic-native/issues/1536)) ([965a90c](https://github.com/ionic-team/ionic-native/commit/965a90c))



<a name="3.8.0"></a>
# [3.8.0](https://github.com/ionic-team/ionic-native/compare/v3.7.0...v3.8.0) (2017-05-14)


### Bug Fixes

* **app-minimize:** fix pluginRef ([10d61c2](https://github.com/ionic-team/ionic-native/commit/10d61c2))
* **diagnostic:** fix Cordova decorator in camera API ([#1527](https://github.com/ionic-team/ionic-native/issues/1527)) ([45108c4](https://github.com/ionic-team/ionic-native/commit/45108c4))
* **fcm:** fix method name ([#1531](https://github.com/ionic-team/ionic-native/issues/1531)) ([ad514bb](https://github.com/ionic-team/ionic-native/commit/ad514bb))
* **file:** fix file reader ([#1537](https://github.com/ionic-team/ionic-native/issues/1537)) ([efae1be](https://github.com/ionic-team/ionic-native/commit/efae1be)), closes [#1530](https://github.com/ionic-team/ionic-native/issues/1530)
* **file:** various fixes ([#1553](https://github.com/ionic-team/ionic-native/issues/1553)) ([f98f90a](https://github.com/ionic-team/ionic-native/commit/f98f90a))


### Features

* **video-capture-plus:** add Video Capture Plus plugin ([#1538](https://github.com/ionic-team/ionic-native/issues/1538)) ([385da01](https://github.com/ionic-team/ionic-native/commit/385da01)), closes [#709](https://github.com/ionic-team/ionic-native/issues/709)



<a name="3.7.0"></a>
# [3.7.0](https://github.com/ionic-team/ionic-native/compare/v3.6.0...v3.7.0) (2017-05-09)


### Bug Fixes

* **app-preferences:** value can be any type ([#1498](https://github.com/ionic-team/ionic-native/issues/1498)) ([c7111a3](https://github.com/ionic-team/ionic-native/commit/c7111a3)), closes [#1334](https://github.com/ionic-team/ionic-native/issues/1334)
* **background-mode:** add missing method ([#1486](https://github.com/ionic-team/ionic-native/issues/1486)) ([e6a647b](https://github.com/ionic-team/ionic-native/commit/e6a647b)), closes [#1393](https://github.com/ionic-team/ionic-native/issues/1393)
* **build:** fix build errors ([#1472](https://github.com/ionic-team/ionic-native/issues/1472)) ([8a445e9](https://github.com/ionic-team/ionic-native/commit/8a445e9))
* **document-viewer:** fix params ([1379f63](https://github.com/ionic-team/ionic-native/commit/1379f63))
* **flurry-analytics:** fix plugin wrapper ([14959c1](https://github.com/ionic-team/ionic-native/commit/14959c1))
* **flurry-analytics:** fix pluginRef ([#1485](https://github.com/ionic-team/ionic-native/issues/1485)) ([ce72be7](https://github.com/ionic-team/ionic-native/commit/ce72be7)), closes [#1399](https://github.com/ionic-team/ionic-native/issues/1399)
* **globalization:** getDatePattern return types ([#1451](https://github.com/ionic-team/ionic-native/issues/1451)) ([6e2fdf9](https://github.com/ionic-team/ionic-native/commit/6e2fdf9))
* **google-maps:** add args to panBy ([#1507](https://github.com/ionic-team/ionic-native/issues/1507)) ([ec85792](https://github.com/ionic-team/ionic-native/commit/ec85792))
* **google-maps:** fix fromPointToLatLng params ([#1514](https://github.com/ionic-team/ionic-native/issues/1514)) ([9583802](https://github.com/ionic-team/ionic-native/commit/9583802))
* **native-storage:** add missing keys method ([#1495](https://github.com/ionic-team/ionic-native/issues/1495)) ([8311aaf](https://github.com/ionic-team/ionic-native/commit/8311aaf)), closes [#1415](https://github.com/ionic-team/ionic-native/issues/1415)
* **web-intent:** updated source ([#1519](https://github.com/ionic-team/ionic-native/issues/1519)) ([252c3e4](https://github.com/ionic-team/ionic-native/commit/252c3e4)), closes [#1517](https://github.com/ionic-team/ionic-native/issues/1517)


### Features

* **android-fingerprint-auth:** add ERRORS constant ([#1470](https://github.com/ionic-team/ionic-native/issues/1470)) ([ed6044d](https://github.com/ionic-team/ionic-native/commit/ed6044d))
* **android-premissions:** add Android Permissions plugin ([#1508](https://github.com/ionic-team/ionic-native/issues/1508)) ([5ee79b4](https://github.com/ionic-team/ionic-native/commit/5ee79b4)), closes [#929](https://github.com/ionic-team/ionic-native/issues/929)
* **app-minimize:** add AppMinimize plugin ([#1501](https://github.com/ionic-team/ionic-native/issues/1501)) ([d25b2f1](https://github.com/ionic-team/ionic-native/commit/d25b2f1))
* **camera-preview:** add new focus methods & getFlashMode() ([#1442](https://github.com/ionic-team/ionic-native/issues/1442)) ([748c6bd](https://github.com/ionic-team/ionic-native/commit/748c6bd))
* **camera-preview:** add tapToFocus method ([#1494](https://github.com/ionic-team/ionic-native/issues/1494)) ([8330c92](https://github.com/ionic-team/ionic-native/commit/8330c92))
* **diagnostic:** update to support latest signatures ([#1458](https://github.com/ionic-team/ionic-native/issues/1458)) ([a4151ab](https://github.com/ionic-team/ionic-native/commit/a4151ab))
* **facebook:** add EVENTS constant ([#1510](https://github.com/ionic-team/ionic-native/issues/1510)) ([aa9826f](https://github.com/ionic-team/ionic-native/commit/aa9826f))
* **fcm:** support Firebase Cloud Messaging plugin ([#1449](https://github.com/ionic-team/ionic-native/issues/1449)) ([6cc6393](https://github.com/ionic-team/ionic-native/commit/6cc6393))
* **firebase:** add support for firebase ErrorLog ([#1440](https://github.com/ionic-team/ionic-native/issues/1440)) ([11dbe42](https://github.com/ionic-team/ionic-native/commit/11dbe42))
* **health-kit:** add HealthKit plugin ([#1499](https://github.com/ionic-team/ionic-native/issues/1499)) ([14f38a0](https://github.com/ionic-team/ionic-native/commit/14f38a0))
* **intercom:** add Intercom plugin ([#1504](https://github.com/ionic-team/ionic-native/issues/1504)) ([ce2cc1b](https://github.com/ionic-team/ionic-native/commit/ce2cc1b))
* **mobile-accessibility:** add Mobile Accessibility plugin ([#1505](https://github.com/ionic-team/ionic-native/issues/1505)) ([4e9b2d9](https://github.com/ionic-team/ionic-native/commit/4e9b2d9)), closes [#1304](https://github.com/ionic-team/ionic-native/issues/1304)
* **native-page-transitions:** add pendingTransition methods ([#1344](https://github.com/ionic-team/ionic-native/issues/1344)) ([f699c6d](https://github.com/ionic-team/ionic-native/commit/f699c6d))
* **native-ringtones:** add Native Ringtones plugin ([#1488](https://github.com/ionic-team/ionic-native/issues/1488)) ([21c9cd2](https://github.com/ionic-team/ionic-native/commit/21c9cd2))
* **phonegap-local-notifications:** add Phonegap local notifications plugin ([#1474](https://github.com/ionic-team/ionic-native/issues/1474)) ([3d747d3](https://github.com/ionic-team/ionic-native/commit/3d747d3))
* **plugin:** add Document Viewer plugin ([#1520](https://github.com/ionic-team/ionic-native/issues/1520)) ([6855fe8](https://github.com/ionic-team/ionic-native/commit/6855fe8))
* **plugin:** add File encryption plugin ([#1509](https://github.com/ionic-team/ionic-native/issues/1509)) ([46b4e25](https://github.com/ionic-team/ionic-native/commit/46b4e25)), closes [#618](https://github.com/ionic-team/ionic-native/issues/618)
* **safari-view-controller:** add missing options ([#1490](https://github.com/ionic-team/ionic-native/issues/1490)) ([a5b2e98](https://github.com/ionic-team/ionic-native/commit/a5b2e98)), closes [#1489](https://github.com/ionic-team/ionic-native/issues/1489)
* **social-sharing:** add setIPadPopupCoordinates method ([#1497](https://github.com/ionic-team/ionic-native/issues/1497)) ([65a8095](https://github.com/ionic-team/ionic-native/commit/65a8095)), closes [#1288](https://github.com/ionic-team/ionic-native/issues/1288)
* **touch-id:** add didFingerprintDatabaseChange ([#1475](https://github.com/ionic-team/ionic-native/issues/1475)) ([d9cc959](https://github.com/ionic-team/ionic-native/commit/d9cc959)), closes [#1466](https://github.com/ionic-team/ionic-native/issues/1466)
* **wheel-selector:** add Native wheel Selector plugin ([#1522](https://github.com/ionic-team/ionic-native/issues/1522)) ([8fe4eec](https://github.com/ionic-team/ionic-native/commit/8fe4eec))



<a name="3.6.0"></a>
# [3.6.0](https://github.com/ionic-team/ionic-native/compare/v3.5.0...v3.6.0) (2017-04-27)


### Bug Fixes

* **media:** function 'create' never returns media object ([#1419](https://github.com/ionic-team/ionic-native/issues/1419)) ([b58149f](https://github.com/ionic-team/ionic-native/commit/b58149f))


### Features

* **keychain:** add Keychain plugin ([#1420](https://github.com/ionic-team/ionic-native/issues/1420)) ([16dc71a](https://github.com/ionic-team/ionic-native/commit/16dc71a))
* add IonicNativePlugin base class ([#1425](https://github.com/ionic-team/ionic-native/issues/1425)) ([17366a2](https://github.com/ionic-team/ionic-native/commit/17366a2))



<a name="3.5.0"></a>
# [3.5.0](https://github.com/ionic-team/ionic-native/compare/v3.4.4...v3.5.0) (2017-04-18)


### Bug Fixes

* **core:** fix bug when checking if plugin exists ([#1348](https://github.com/ionic-team/ionic-native/issues/1348)) ([4bd6aab](https://github.com/ionic-team/ionic-native/commit/4bd6aab))
* **media:** fix issue with create method ([6bba72d](https://github.com/ionic-team/ionic-native/commit/6bba72d)), closes [#1333](https://github.com/ionic-team/ionic-native/issues/1333)
* **rollbar:** fix pluginRef ([f396940](https://github.com/ionic-team/ionic-native/commit/f396940))


### Features

* **action-sheet:** update to newest version ([9c92580](https://github.com/ionic-team/ionic-native/commit/9c92580))
* **background-fetch:** add status method ([6168eae](https://github.com/ionic-team/ionic-native/commit/6168eae))



<a name="3.4.4"></a>
## [3.4.4](https://github.com/ionic-team/ionic-native/compare/v3.4.3...v3.4.4) (2017-03-30)


### Bug Fixes

* **push:** hasPermission is part of Push object ([145577f](https://github.com/ionic-team/ionic-native/commit/145577f))



<a name="3.4.3"></a>
## [3.4.3](https://github.com/ionic-team/ionic-native/compare/v3.4.2...v3.4.3) (2017-03-29)


### Bug Fixes

* **admob:** add missing license property ([2b94ffd](https://github.com/ionic-team/ionic-native/commit/2b94ffd)), closes [#1291](https://github.com/ionic-team/ionic-native/issues/1291)
* **app-preferences:** fix bug with fetch method ([65cf94b](https://github.com/ionic-team/ionic-native/commit/65cf94b)), closes [#1299](https://github.com/ionic-team/ionic-native/issues/1299)
* **push:** add missing plugin decorator ([208748a](https://github.com/ionic-team/ionic-native/commit/208748a)), closes [#1297](https://github.com/ionic-team/ionic-native/issues/1297)
* **secure-storage:** return unfunctional SecureStorageObject if plugin doesn't exist ([b91757e](https://github.com/ionic-team/ionic-native/commit/b91757e))


### Features

* **secure-storage:** add keys() and clear() methods ([#1281](https://github.com/ionic-team/ionic-native/issues/1281)) ([8b31d72](https://github.com/ionic-team/ionic-native/commit/8b31d72))



<a name="3.4.1"></a>
## [3.4.1](https://github.com/ionic-team/ionic-native/compare/v3.4.0...v3.4.1) (2017-03-28)


### Bug Fixes

* **admob:** fix event listeners ([b53af8e](https://github.com/ionic-team/ionic-native/commit/b53af8e)), closes [#1165](https://github.com/ionic-team/ionic-native/issues/1165)
* **network:** fix onchange method ([006f7dc](https://github.com/ionic-team/ionic-native/commit/006f7dc)), closes [#1173](https://github.com/ionic-team/ionic-native/issues/1173)
* **network:** remove ontypechange method ([19bc841](https://github.com/ionic-team/ionic-native/commit/19bc841))



<a name="3.4.0"></a>
# [3.4.0](https://github.com/ionic-team/ionic-native/compare/v3.3.1...v3.4.0) (2017-03-28)


### Bug Fixes

* **sqlite:** fix SQLiteDatabaseConfig interface ([ea88c9e](https://github.com/ionic-team/ionic-native/commit/ea88c9e)), closes [#1280](https://github.com/ionic-team/ionic-native/issues/1280)


### Features

* **admob-free:** add AdMobFree plugin ([#1272](https://github.com/ionic-team/ionic-native/issues/1272)) ([0ef4a73](https://github.com/ionic-team/ionic-native/commit/0ef4a73)), closes [#1170](https://github.com/ionic-team/ionic-native/issues/1170)
* **sqlite-porter:** add SQLite porter plugin ([#1273](https://github.com/ionic-team/ionic-native/issues/1273)) ([f911366](https://github.com/ionic-team/ionic-native/commit/f911366)), closes [#485](https://github.com/ionic-team/ionic-native/issues/485)
* **taptic-engine:** add taptic engine plugin support ([#1271](https://github.com/ionic-team/ionic-native/issues/1271)) ([ffa37e2](https://github.com/ionic-team/ionic-native/commit/ffa37e2))
* **zeroconf:** add cordova-plugin-zeroconf support ([#1260](https://github.com/ionic-team/ionic-native/issues/1260)) ([68d9946](https://github.com/ionic-team/ionic-native/commit/68d9946))



<a name="3.3.1"></a>
## [3.3.1](https://github.com/ionic-team/ionic-native/compare/v3.3.0...v3.3.1) (2017-03-28)


### Bug Fixes

* **background-mode:** add missing config options ([9c30a1d](https://github.com/ionic-team/ionic-native/commit/9c30a1d)), closes [#1277](https://github.com/ionic-team/ionic-native/issues/1277)
* **contacts:** fix major bug ([6e20137](https://github.com/ionic-team/ionic-native/commit/6e20137))
* **contacts:** handle cordova_not_found errors ([961727e](https://github.com/ionic-team/ionic-native/commit/961727e))
* **core:** handle unexpected errors in wrapOtherPromise ([9074362](https://github.com/ionic-team/ionic-native/commit/9074362)), closes [#1185](https://github.com/ionic-team/ionic-native/issues/1185)
* **core:** return errors from CordovaCheck decorators ([fd0a2e9](https://github.com/ionic-team/ionic-native/commit/fd0a2e9)), closes [#1268](https://github.com/ionic-team/ionic-native/issues/1268)
* **sqlite:** fixes echoTest and deleteDatabase ([01aece1](https://github.com/ionic-team/ionic-native/commit/01aece1)), closes [#1275](https://github.com/ionic-team/ionic-native/issues/1275)


### Features

* **sqlite:** add SQLiteDatabaseConfig interface ([544e7ef](https://github.com/ionic-team/ionic-native/commit/544e7ef))



<a name="3.3.0"></a>
# [3.3.0](https://github.com/ionic-team/ionic-native/compare/v3.2.3...v3.3.0) (2017-03-27)


### Features

* **android-full-screen:** add cordova-plugin-fullscreen support ([#1255](https://github.com/ionic-team/ionic-native/issues/1255)) ([b08e3a8](https://github.com/ionic-team/ionic-native/commit/b08e3a8))
* **intel-security:** add com-intel-security-cordova-plugin support ([#1256](https://github.com/ionic-team/ionic-native/issues/1256)) ([aedc9d6](https://github.com/ionic-team/ionic-native/commit/aedc9d6))



<a name="3.2.3"></a>
## [3.2.3](https://github.com/ionic-team/ionic-native/compare/v3.2.2...v3.2.3) (2017-03-24)


### Bug Fixes

* **contacts:** fix crash if plugin is unavailable ([a9a511d](https://github.com/ionic-team/ionic-native/commit/a9a511d)), closes [#1250](https://github.com/ionic-team/ionic-native/issues/1250)
* **core:** make properties enumerable ([a151295](https://github.com/ionic-team/ionic-native/commit/a151295))



<a name="3.2.2"></a>
## [3.2.2](https://github.com/ionic-team/ionic-native/compare/v3.2.1...v3.2.2) (2017-03-23)



<a name="3.2.1"></a>
## [3.2.1](https://github.com/ionic-team/ionic-native/compare/v3.2.0...v3.2.1) (2017-03-23)


### Bug Fixes

* **secure-storage:** update the pluginRef ([#1228](https://github.com/ionic-team/ionic-native/issues/1228)) ([baff7b3](https://github.com/ionic-team/ionic-native/commit/baff7b3))



<a name="3.2.0"></a>
# [3.2.0](https://github.com/ionic-team/ionic-native/compare/v3.1.1...v3.2.0) (2017-03-22)


### Bug Fixes

* **media-plugin:** MediaPlugin.create promise never fires ([#1220](https://github.com/ionic-team/ionic-native/issues/1220)) ([82d2ae8](https://github.com/ionic-team/ionic-native/commit/82d2ae8))


### Features

* **jins-meme:** add support for jins meme smart glasses ([#1212](https://github.com/ionic-team/ionic-native/issues/1212)) ([9c88cfb](https://github.com/ionic-team/ionic-native/commit/9c88cfb))



<a name="3.1.1"></a>
## [3.1.1](https://github.com/ionic-team/ionic-native/compare/v3.1.0...v3.1.1) (2017-03-21)


### Bug Fixes

* **media-plugin:** export MediaPlugin class ([cb0a366](https://github.com/ionic-team/ionic-native/commit/cb0a366)), closes [#1207](https://github.com/ionic-team/ionic-native/issues/1207)



<a name="3.1.0"></a>
# [3.1.0](https://github.com/ionic-team/ionic-native/compare/v2.9.0...v3.1.0) (2017-03-20)


### Bug Fixes

* **health:** fix queryAggregated return type ([8cd648d](https://github.com/ionic-team/ionic-native/commit/8cd648d)), closes [#1200](https://github.com/ionic-team/ionic-native/issues/1200)
* **music-controls:** fix return types for methods ([f3407e5](https://github.com/ionic-team/ionic-native/commit/f3407e5))


### Chores

* merge v3-injectable into master ([#1203](https://github.com/ionic-team/ionic-native/issues/1203)) ([2f2d55f](https://github.com/ionic-team/ionic-native/commit/2f2d55f)), closes [#250](https://github.com/ionic-team/ionic-native/issues/250) [#861](https://github.com/ionic-team/ionic-native/issues/861) [#1145](https://github.com/ionic-team/ionic-native/issues/1145) [#1096](https://github.com/ionic-team/ionic-native/issues/1096) [#1088](https://github.com/ionic-team/ionic-native/issues/1088) [#1110](https://github.com/ionic-team/ionic-native/issues/1110) [#1129](https://github.com/ionic-team/ionic-native/issues/1129) [#1125](https://github.com/ionic-team/ionic-native/issues/1125) [#1115](https://github.com/ionic-team/ionic-native/issues/1115) [#1118](https://github.com/ionic-team/ionic-native/issues/1118) [#1093](https://github.com/ionic-team/ionic-native/issues/1093) [#1001](https://github.com/ionic-team/ionic-native/issues/1001) [#1043](https://github.com/ionic-team/ionic-native/issues/1043) [#1044](https://github.com/ionic-team/ionic-native/issues/1044) [#1045](https://github.com/ionic-team/ionic-native/issues/1045) [#1078](https://github.com/ionic-team/ionic-native/issues/1078) [#1132](https://github.com/ionic-team/ionic-native/issues/1132) [#1138](https://github.com/ionic-team/ionic-native/issues/1138) [#1139](https://github.com/ionic-team/ionic-native/issues/1139) [#1142](https://github.com/ionic-team/ionic-native/issues/1142)


### Features

* **ble:** add readRSSI method ([#1189](https://github.com/ionic-team/ionic-native/issues/1189)) ([26db2cf](https://github.com/ionic-team/ionic-native/commit/26db2cf))
* **camera-preview:** update signature to match 0.9.0  ([#1192](https://github.com/ionic-team/ionic-native/issues/1192)) ([9bf4ee3](https://github.com/ionic-team/ionic-native/commit/9bf4ee3))
* **music-controls:** add missing options ([234165c](https://github.com/ionic-team/ionic-native/commit/234165c))
* **music-controls:** add updateDismissable method ([#1195](https://github.com/ionic-team/ionic-native/issues/1195)) ([f8df876](https://github.com/ionic-team/ionic-native/commit/f8df876))
* **pedo-meter:** add pedometer plugin ([#1135](https://github.com/ionic-team/ionic-native/issues/1135)) ([d845519](https://github.com/ionic-team/ionic-native/commit/d845519)), closes [#1104](https://github.com/ionic-team/ionic-native/issues/1104)


### BREAKING CHANGES

* create no longer returns a MediaObject instance. Make changes to your app accordingly.

* docs update + remove any static methods/properties

* remove duplicate method

* remove extra docs

* remove extra docs

* docs(): rename plugins

* chore(decorators): do not check method name on instancecheck

* chore(decorators): do not check method name on cordovacheck

* chore(plugin): fix pluginWarn

* chore(plugin): fix pluginWarn

* fix(decorators): fix InstanceCheck decorator

* 3.1.0-rc.5

* chore(docs): fix readme generation

* fix(transfer): fix v3 implementation

* refactor(paypal): PayPal is brand name

* chore(docs): replace all spaces with dashes

* chore(): add dashify filter

* chore(build): add aot path to core tsconfig

* feat(action-sheet): add ANDROID_THEMES constant

* refactor(): general cleanup (#1193)

* feat(screen-orientation): update wrapper to match v2 of the plugin

The whole implementation has changed now. You must update your code.

* feat(stripe): add new methods

* feat(linkedin): add LinkedIn plugin

* 3.1.0-rc.6

* style(screen-orientation): double quote to single

* tslint

* refactor(pedometer): rename file to index



<a name="2.9.0"></a>
# [2.9.0](https://github.com/ionic-team/ionic-native/compare/v2.8.1...v2.9.0) (2017-03-18)


### Bug Fixes

* **background-geolocation:** configure returns an observable ([961cff1](https://github.com/ionic-team/ionic-native/commit/961cff1))


### Features

* **background-mode:** added moveToBackground and moveToForeground ([#1181](https://github.com/ionic-team/ionic-native/issues/1181)) ([95ac7e1](https://github.com/ionic-team/ionic-native/commit/95ac7e1))



<a name="2.8.1"></a>
## [2.8.1](https://github.com/ionic-team/ionic-native/compare/v2.8.0...v2.8.1) (2017-03-10)


### Bug Fixes

* **bluetooth-serial:** add missing disconnect method ([74971fe](https://github.com/ionic-team/ionic-native/commit/74971fe)), closes [#1151](https://github.com/ionic-team/ionic-native/issues/1151)
* **fingerprint-aio:** add useBackup property ([#1158](https://github.com/ionic-team/ionic-native/issues/1158)) ([6fdeeaf](https://github.com/ionic-team/ionic-native/commit/6fdeeaf))
* **health:** fix return type ([0f8c3ce](https://github.com/ionic-team/ionic-native/commit/0f8c3ce))
* **paypal:** sku param is optional ([#1161](https://github.com/ionic-team/ionic-native/issues/1161)) ([62c7a60](https://github.com/ionic-team/ionic-native/commit/62c7a60))


### Features

* **firebase:** add new setScreenName method ([0009cbf](https://github.com/ionic-team/ionic-native/commit/0009cbf)), closes [#1149](https://github.com/ionic-team/ionic-native/issues/1149)



<a name="2.8.0"></a>
# [2.8.0](https://github.com/ionic-team/ionic-native/compare/v2.7.0...v2.8.0) (2017-03-04)


### Bug Fixes

* **file:** fix return types ([b458327](https://github.com/ionic-team/ionic-native/commit/b458327)), closes [#1139](https://github.com/ionic-team/ionic-native/issues/1139)


### Features

* **app-preferences:** added cordova-plugin-app-preferences support ([#1084](https://github.com/ionic-team/ionic-native/issues/1084)) ([12280dd](https://github.com/ionic-team/ionic-native/commit/12280dd))
* **health:** add wrapper for cordova-plugin-health ([#1039](https://github.com/ionic-team/ionic-native/issues/1039)) ([3500d80](https://github.com/ionic-team/ionic-native/commit/3500d80))
* **photo-library:** added cordova-plugin-photo-library ([#1102](https://github.com/ionic-team/ionic-native/issues/1102)) ([384dfc2](https://github.com/ionic-team/ionic-native/commit/384dfc2))



<a name="2.7.0"></a>
# [2.7.0](https://github.com/ionic-team/ionic-native/compare/v2.6.0...v2.7.0) (2017-03-02)


### Bug Fixes

* **core:** dont check if method exists when overriding ([754c5ec](https://github.com/ionic-team/ionic-native/commit/754c5ec)), closes [#1043](https://github.com/ionic-team/ionic-native/issues/1043)
* **file:** fix writeExistingFile ([47f48ba](https://github.com/ionic-team/ionic-native/commit/47f48ba)), closes [#1044](https://github.com/ionic-team/ionic-native/issues/1044)


### Features

* **background-mode:** add missing functions ([906401b](https://github.com/ionic-team/ionic-native/commit/906401b)), closes [#1078](https://github.com/ionic-team/ionic-native/issues/1078)
* **background-mode:** replace event listeners with on method ([ffdbab7](https://github.com/ionic-team/ionic-native/commit/ffdbab7))
* **diagnostic:** add new methods ([5144345](https://github.com/ionic-team/ionic-native/commit/5144345)), closes [#1045](https://github.com/ionic-team/ionic-native/issues/1045)



<a name="2.6.0"></a>
# [2.6.0](https://github.com/ionic-team/ionic-native/compare/v2.5.1...v2.6.0) (2017-03-02)


### Bug Fixes

* **apprate:** add missing Windows Store option ([#1072](https://github.com/ionic-team/ionic-native/issues/1072)) ([439ccee](https://github.com/ionic-team/ionic-native/commit/439ccee))
* **background-geolocation:** configure returns a promise ([fc87992](https://github.com/ionic-team/ionic-native/commit/fc87992)), closes [#1118](https://github.com/ionic-team/ionic-native/issues/1118)
* **contacts:** allow passing asterisk as contact field type ([9c5b593](https://github.com/ionic-team/ionic-native/commit/9c5b593)), closes [#1093](https://github.com/ionic-team/ionic-native/issues/1093)
* **contacts:** allow passing asterisk as contact field type ([2639486](https://github.com/ionic-team/ionic-native/commit/2639486))
* **facebook:** fixes issue when not supplying default params ([#1088](https://github.com/ionic-team/ionic-native/issues/1088)) ([85a3a40](https://github.com/ionic-team/ionic-native/commit/85a3a40))
* **file:** add missing exports ([#1101](https://github.com/ionic-team/ionic-native/issues/1101)) ([23b97f6](https://github.com/ionic-team/ionic-native/commit/23b97f6))
* **file:** platform Browser will raise a an DOMException ([#1082](https://github.com/ionic-team/ionic-native/issues/1082)) ([2fba915](https://github.com/ionic-team/ionic-native/commit/2fba915))
* **file:** remove FileError from return type ([#1086](https://github.com/ionic-team/ionic-native/issues/1086)) ([c1748bb](https://github.com/ionic-team/ionic-native/commit/c1748bb))
* **imagepicker:** add outputType option ([#1098](https://github.com/ionic-team/ionic-native/issues/1098)) ([b4b7cfa](https://github.com/ionic-team/ionic-native/commit/b4b7cfa))
* **media:** add missing pauseRecord and resumeRecord methods ([#1122](https://github.com/ionic-team/ionic-native/issues/1122)) ([234ed6e](https://github.com/ionic-team/ionic-native/commit/234ed6e))
* **plugin:** revert changes to support stable version ([#1116](https://github.com/ionic-team/ionic-native/issues/1116)) ([104532e](https://github.com/ionic-team/ionic-native/commit/104532e)), closes [#1001](https://github.com/ionic-team/ionic-native/issues/1001)
* **push:** add the missing option clearBadge ([#1087](https://github.com/ionic-team/ionic-native/issues/1087)) ([70847d1](https://github.com/ionic-team/ionic-native/commit/70847d1))
* **serial:** Serial.requestPermission() options are optional ([#1128](https://github.com/ionic-team/ionic-native/issues/1128)) ([da72500](https://github.com/ionic-team/ionic-native/commit/da72500))
* **zip:** progress callback is optional ([#1049](https://github.com/ionic-team/ionic-native/issues/1049)) ([83f57b9](https://github.com/ionic-team/ionic-native/commit/83f57b9))


### Features

* **alipay:** add alipay support. ([#1097](https://github.com/ionic-team/ionic-native/issues/1097)) ([2eea3df](https://github.com/ionic-team/ionic-native/commit/2eea3df))
* **app-update:** add cordova-plugin-app-update support ([#1105](https://github.com/ionic-team/ionic-native/issues/1105)) ([21d4088](https://github.com/ionic-team/ionic-native/commit/21d4088))
* **appodeal:** adds Appodeal SDK wrappers for iOS and Android ([#1031](https://github.com/ionic-team/ionic-native/issues/1031)) ([fd8107b](https://github.com/ionic-team/ionic-native/commit/fd8107b))
* **background-fetch:** Adding Background Fetch requested in [#990](https://github.com/ionic-team/ionic-native/issues/990) ([#1013](https://github.com/ionic-team/ionic-native/issues/1013)) ([57e2691](https://github.com/ionic-team/ionic-native/commit/57e2691))
* **browser-tab:** add browser tab plugin ([#1126](https://github.com/ionic-team/ionic-native/issues/1126)) ([8de3793](https://github.com/ionic-team/ionic-native/commit/8de3793)), closes [#1115](https://github.com/ionic-team/ionic-native/issues/1115)
* **couchbase-lite:** add CouchbaseLite cordova plugin ([#1025](https://github.com/ionic-team/ionic-native/issues/1025)) ([09a7dcf](https://github.com/ionic-team/ionic-native/commit/09a7dcf))
* **file:** add system paths ([f0e2195](https://github.com/ionic-team/ionic-native/commit/f0e2195))
* **google-maps:** add constant for map type ([318ad3f](https://github.com/ionic-team/ionic-native/commit/318ad3f))
* **gyroscope:** add Gyroscope plugin ([#1004](https://github.com/ionic-team/ionic-native/issues/1004)) ([0378b1d](https://github.com/ionic-team/ionic-native/commit/0378b1d))
* **inappbrowser:** add interface for IAB options ([#1065](https://github.com/ionic-team/ionic-native/issues/1065)) ([f4b8236](https://github.com/ionic-team/ionic-native/commit/f4b8236))
* **local-notifications:** support for icon background color ([#1079](https://github.com/ionic-team/ionic-native/issues/1079)) ([2a32624](https://github.com/ionic-team/ionic-native/commit/2a32624))
* **text-to-speech:** Add stop method ([#1063](https://github.com/ionic-team/ionic-native/issues/1063)) ([4f86320](https://github.com/ionic-team/ionic-native/commit/4f86320))
* **unique-device-add:** add UniqueDeviceId plugin ([#1064](https://github.com/ionic-team/ionic-native/issues/1064)) ([60db10c](https://github.com/ionic-team/ionic-native/commit/60db10c))



<a name="2.5.1"></a>
## [2.5.1](https://github.com/ionic-team/ionic-native/compare/v2.5.0...v2.5.1) (2017-02-07)


### Bug Fixes

* **pin-dialog:** add missing errorIndex ([b7701cd](https://github.com/ionic-team/ionic-native/commit/b7701cd))



<a name="2.5.0"></a>
# [2.5.0](https://github.com/ionic-team/ionic-native/compare/v2.4.1...v2.5.0) (2017-02-07)


### Bug Fixes

* **file-transfer:** fix return type of upload method ([a5b4632](https://github.com/ionic-team/ionic-native/commit/a5b4632)), closes [#1002](https://github.com/ionic-team/ionic-native/issues/1002)
* **pinterest:** fix PinterestPin interface ([a03afcf](https://github.com/ionic-team/ionic-native/commit/a03afcf))
* **safari-view-controller:** fix issue caused by calling show without options ([dc37d8f](https://github.com/ionic-team/ionic-native/commit/dc37d8f))


### Features

* **background-geolocation:** add missing properties for Android ([f0cf860](https://github.com/ionic-team/ionic-native/commit/f0cf860))
* **barcodescanner:** add option disableSuccessBeep ([#1035](https://github.com/ionic-team/ionic-native/issues/1035)) ([97489ba](https://github.com/ionic-team/ionic-native/commit/97489ba))
* **inappbrowser:** add hide function ([#1018](https://github.com/ionic-team/ionic-native/issues/1018)) ([4ab87d8](https://github.com/ionic-team/ionic-native/commit/4ab87d8))



<a name="2.4.1"></a>
## [2.4.1](https://github.com/ionic-team/ionic-native/compare/v2.4.0...v2.4.1) (2017-01-24)


### Bug Fixes

* **google-maps:** fix event listeners ([416071a](https://github.com/ionic-team/ionic-native/commit/416071a)), closes [#999](https://github.com/ionic-team/ionic-native/issues/999)
* **screen-orientation:** lockOrientation returns a promise ([1c09ee1](https://github.com/ionic-team/ionic-native/commit/1c09ee1)), closes [#939](https://github.com/ionic-team/ionic-native/issues/939)


### Features

* **pinterest:** add pinterest plugin ([466437a](https://github.com/ionic-team/ionic-native/commit/466437a))



<a name="2.3.2"></a>
## [2.3.2](https://github.com/ionic-team/ionic-native/compare/v2.3.1...v2.3.2) (2017-01-24)



<a name="2.3.1"></a>
## [2.3.1](https://github.com/ionic-team/ionic-native/compare/v2.3.0...v2.3.1) (2017-01-24)


### Bug Fixes

* add clearAllNotifications() ([8c021bc](https://github.com/ionic-team/ionic-native/commit/8c021bc))
* **battery-status:** add missing pluginRef ([3da0efe](https://github.com/ionic-team/ionic-native/commit/3da0efe))
* **core:** fix exception in CordovaProperty ([#998](https://github.com/ionic-team/ionic-native/issues/998)) ([cb29363](https://github.com/ionic-team/ionic-native/commit/cb29363)), closes [#992](https://github.com/ionic-team/ionic-native/issues/992)
* **core:** fix plugin check ([da7a370](https://github.com/ionic-team/ionic-native/commit/da7a370))
* **googlemaps:** fix GoogleMapsLaLngBounds ([c3127d3](https://github.com/ionic-team/ionic-native/commit/c3127d3)), closes [#972](https://github.com/ionic-team/ionic-native/issues/972)
* **plugin:** adds subscribe() and unsubscribe() ([94025a7](https://github.com/ionic-team/ionic-native/commit/94025a7))


### Features

* **core:** add PluginConfig interface ([b983de2](https://github.com/ionic-team/ionic-native/commit/b983de2)), closes [#996](https://github.com/ionic-team/ionic-native/issues/996)
* **google-maps:** add base class functions ([#993](https://github.com/ionic-team/ionic-native/issues/993)) ([9f98f8e](https://github.com/ionic-team/ionic-native/commit/9f98f8e))



<a name="2.3.0"></a>
# [2.3.0](https://github.com/ionic-team/ionic-native/compare/v2.2.17...v2.3.0) (2017-01-20)


### Bug Fixes

* **native-geocoder:** fix callback order ([dbf95ea](https://github.com/ionic-team/ionic-native/commit/dbf95ea))


### Features

* **backlight:** add Backlight plugin ([#973](https://github.com/ionic-team/ionic-native/issues/973)) ([1279114](https://github.com/ionic-team/ionic-native/commit/1279114))
* **broadcaster:** add Broadcaster plugin ([#877](https://github.com/ionic-team/ionic-native/issues/877)) ([1e38a6c](https://github.com/ionic-team/ionic-native/commit/1e38a6c))
* **fingerprint-aio:** add cordova-plugin-fingerprint-aio ([#845](https://github.com/ionic-team/ionic-native/issues/845)) ([1615b74](https://github.com/ionic-team/ionic-native/commit/1615b74))
* **firebase:** add firebase plugin ([#914](https://github.com/ionic-team/ionic-native/issues/914)) ([8e98481](https://github.com/ionic-team/ionic-native/commit/8e98481)), closes [#608](https://github.com/ionic-team/ionic-native/issues/608)
* **launch-review:** add LaunchReview plugin ([#949](https://github.com/ionic-team/ionic-native/issues/949)) ([9c75a06](https://github.com/ionic-team/ionic-native/commit/9c75a06))
* **nativegeocoder:** add NativeGeocoder plugin ([#800](https://github.com/ionic-team/ionic-native/issues/800)) ([911537b](https://github.com/ionic-team/ionic-native/commit/911537b))
* **navigationbar:** add NavigationBar plugin ([#826](https://github.com/ionic-team/ionic-native/issues/826)) ([70c15c3](https://github.com/ionic-team/ionic-native/commit/70c15c3))
* **rollbar:** add Rollbar plugin ([#832](https://github.com/ionic-team/ionic-native/issues/832)) ([229f550](https://github.com/ionic-team/ionic-native/commit/229f550))
* **serial:** add Serial plugin ([#952](https://github.com/ionic-team/ionic-native/issues/952)) ([ac748ab](https://github.com/ionic-team/ionic-native/commit/ac748ab))
* **speech-recognition:** add SpeechRecognition plugin ([#897](https://github.com/ionic-team/ionic-native/issues/897)) ([7c30718](https://github.com/ionic-team/ionic-native/commit/7c30718))
* **stripe:** add stripe plugin ([#913](https://github.com/ionic-team/ionic-native/issues/913)) ([0ec46b0](https://github.com/ionic-team/ionic-native/commit/0ec46b0))



<a name="2.2.17"></a>
## [2.2.17](https://github.com/ionic-team/ionic-native/compare/v2.2.16...v2.2.17) (2017-01-20)


### Bug Fixes

* **app-rate:** onRateDialogShow callback ([#985](https://github.com/ionic-team/ionic-native/issues/985)) ([ab681cc](https://github.com/ionic-team/ionic-native/commit/ab681cc))
* **core:** increase deviceready timeout for sanity ([0ab14a0](https://github.com/ionic-team/ionic-native/commit/0ab14a0))



<a name="2.2.16"></a>
## [2.2.16](https://github.com/ionic-team/ionic-native/compare/v2.2.15...v2.2.16) (2017-01-11)


### Features

* **barcodescanner:** add missing options ([#966](https://github.com/ionic-team/ionic-native/issues/966)) ([e902856](https://github.com/ionic-team/ionic-native/commit/e902856)), closes [#965](https://github.com/ionic-team/ionic-native/issues/965)



<a name="2.2.15"></a>
## [2.2.15](https://github.com/ionic-team/ionic-native/compare/v2.2.14...v2.2.15) (2017-01-11)


### Bug Fixes

* **apprate:** captialize URL in storeAppURL property ([b98fa28](https://github.com/ionic-team/ionic-native/commit/b98fa28))
* **ble:** stopScan takes no args when used as clear function ([#944](https://github.com/ionic-team/ionic-native/issues/944)) ([6ddd2aa](https://github.com/ionic-team/ionic-native/commit/6ddd2aa))
* **onesignal:** OSNotification.app_id is optional ([#946](https://github.com/ionic-team/ionic-native/issues/946)) ([ebf0716](https://github.com/ionic-team/ionic-native/commit/ebf0716))



<a name="2.2.14"></a>
## [2.2.14](https://github.com/ionic-team/ionic-native/compare/v2.2.13...v2.2.14) (2017-01-07)


### Bug Fixes

* **google-analytics:** fix startTrackerWithId when interval is not provided ([49fe24d](https://github.com/ionic-team/ionic-native/commit/49fe24d))
* **google-plus:** fixes login without options ([ca14bf6](https://github.com/ionic-team/ionic-native/commit/ca14bf6)), closes [#932](https://github.com/ionic-team/ionic-native/issues/932)
* **inappbrowser:** fix insertCSS method name ([de07df6](https://github.com/ionic-team/ionic-native/commit/de07df6)), closes [#921](https://github.com/ionic-team/ionic-native/issues/921)
* **mixpanel:** fix issue when not passing eventProperties ([#927](https://github.com/ionic-team/ionic-native/issues/927)) ([bbf75bc](https://github.com/ionic-team/ionic-native/commit/bbf75bc))
* **nfc:** add missing param for addMimeTypeListener ([#937](https://github.com/ionic-team/ionic-native/issues/937)) ([ca60c5b](https://github.com/ionic-team/ionic-native/commit/ca60c5b))
* **push:** fix typing for additionalData ([0d6997c](https://github.com/ionic-team/ionic-native/commit/0d6997c)), closes [#868](https://github.com/ionic-team/ionic-native/issues/868)


### Features

* **background-geolocation:** add altitudeAccuracy into response typings ([#922](https://github.com/ionic-team/ionic-native/issues/922)) ([8eb656c](https://github.com/ionic-team/ionic-native/commit/8eb656c))
* **market:** add search method, return promises ([d62779a](https://github.com/ionic-team/ionic-native/commit/d62779a))



<a name="2.2.13"></a>
## [2.2.13](https://github.com/ionic-team/ionic-native/compare/v2.2.12...v2.2.13) (2016-12-27)


### Bug Fixes

* **admob:** add adId prop to AdMobOptions ([d5dfdf8](https://github.com/ionic-team/ionic-native/commit/d5dfdf8))
* **background-mode:** isEnabled and isActive return booleans ([ba77fd7](https://github.com/ionic-team/ionic-native/commit/ba77fd7)), closes [#908](https://github.com/ionic-team/ionic-native/issues/908)
* **diagnostic:** add missing types ([1841220](https://github.com/ionic-team/ionic-native/commit/1841220)), closes [#905](https://github.com/ionic-team/ionic-native/issues/905)
* **diagnostic:** add permissionStatus types ([#890](https://github.com/ionic-team/ionic-native/issues/890)) ([3385c1b](https://github.com/ionic-team/ionic-native/commit/3385c1b))


### Features

* **android-fingerprint-auth:** update to v1.2.1 ([#910](https://github.com/ionic-team/ionic-native/issues/910)) ([a1b0f88](https://github.com/ionic-team/ionic-native/commit/a1b0f88))
* **nfc:** add new functions ([#853](https://github.com/ionic-team/ionic-native/issues/853)) ([c44fb75](https://github.com/ionic-team/ionic-native/commit/c44fb75))
* **onesignal:** improve typings ([#888](https://github.com/ionic-team/ionic-native/issues/888)) ([56e8eae](https://github.com/ionic-team/ionic-native/commit/56e8eae))
* **sim:** add new methods ([#894](https://github.com/ionic-team/ionic-native/issues/894)) ([0c36988](https://github.com/ionic-team/ionic-native/commit/0c36988))



<a name="2.2.12"></a>
## [2.2.12](https://github.com/ionic-team/ionic-native/compare/v2.2.11...v2.2.12) (2016-12-18)


### Bug Fixes

* **camera-preview:** parameter size is optional ([#871](https://github.com/ionic-team/ionic-native/issues/871)) ([61dc8aa](https://github.com/ionic-team/ionic-native/commit/61dc8aa))
* **diagnostic:** permissionStatus gets values from plugin in runtime ([9986e0d](https://github.com/ionic-team/ionic-native/commit/9986e0d)), closes [#872](https://github.com/ionic-team/ionic-native/issues/872)
* **network:** update API ([ec5e27b](https://github.com/ionic-team/ionic-native/commit/ec5e27b))
* **sms:** fix callback index when omitting options param ([114a74d](https://github.com/ionic-team/ionic-native/commit/114a74d)), closes [#858](https://github.com/ionic-team/ionic-native/issues/858)


### Features

* **admob:** update api and docs ([6ba1d49](https://github.com/ionic-team/ionic-native/commit/6ba1d49))



<a name="2.2.11"></a>
## [2.2.11](https://github.com/ionic-team/ionic-native/compare/v2.2.10...v2.2.11) (2016-12-06)


### Bug Fixes

* **cordova-property:** fixes static properties of classes ([7ae6e10](https://github.com/ionic-team/ionic-native/commit/7ae6e10))
* **device:** fixes device plugin ([d918844](https://github.com/ionic-team/ionic-native/commit/d918844))


### BREAKING CHANGES

* **device:** device property no longer exists



<a name="2.2.10"></a>
## [2.2.10](https://github.com/ionic-team/ionic-native/compare/v2.2.8...v2.2.10) (2016-12-04)


### Bug Fixes

* **contacts:** fix few bugs in Contacts ([#846](https://github.com/ionic-team/ionic-native/issues/846)) ([b19f6d1](https://github.com/ionic-team/ionic-native/commit/b19f6d1))
* **sqlite:** add static constructor, and fix resolve type ([#697](https://github.com/ionic-team/ionic-native/issues/697)) ([9082c5e](https://github.com/ionic-team/ionic-native/commit/9082c5e))


### Features

* **actionsheet:** add ActionSheetOptions interface ([f211da7](https://github.com/ionic-team/ionic-native/commit/f211da7))
* **googlemap:** add disableAutoPan to GoogleMapsMarkerOptions ([cf75a53](https://github.com/ionic-team/ionic-native/commit/cf75a53)), closes [#844](https://github.com/ionic-team/ionic-native/issues/844)
* **googlemaps:** add markerClick and infoClick to MarkerOptions ([6f7171d](https://github.com/ionic-team/ionic-native/commit/6f7171d))



<a name="2.2.8"></a>
## [2.2.8](https://github.com/ionic-team/ionic-native/compare/v2.2.7...v2.2.8) (2016-12-01)


### Bug Fixes

* add return ([3fdc4a8](https://github.com/ionic-team/ionic-native/commit/3fdc4a8))
* **card-io:** fix typo in options ([e6700a3](https://github.com/ionic-team/ionic-native/commit/e6700a3))
* **globalization:** add missing parameter to numberToString function ([1072ab1](https://github.com/ionic-team/ionic-native/commit/1072ab1)), closes [#835](https://github.com/ionic-team/ionic-native/issues/835)
* **headercolor:** solve typo in usage and chore ([bab2971](https://github.com/ionic-team/ionic-native/commit/bab2971))


### Features

* **card-io:** add typing for response ([2e82320](https://github.com/ionic-team/ionic-native/commit/2e82320))



<a name="2.2.7"></a>
## [2.2.7](https://github.com/ionic-team/ionic-native/compare/v2.2.5...v2.2.7) (2016-11-24)


### Bug Fixes

* **3dTouch:** fixes onHomeIconPressed ([#813](https://github.com/ionic-team/ionic-native/issues/813)) ([695099b](https://github.com/ionic-team/ionic-native/commit/695099b))
* **camera-preview:** formatting. Closes [#790](https://github.com/ionic-team/ionic-native/issues/790) ([5577c51](https://github.com/ionic-team/ionic-native/commit/5577c51))
* **datepicker:** fix allowOldDates option ([#761](https://github.com/ionic-team/ionic-native/issues/761)) ([fa03fa5](https://github.com/ionic-team/ionic-native/commit/fa03fa5))
* **diagnostics:** fix [#776](https://github.com/ionic-team/ionic-native/issues/776) ([#777](https://github.com/ionic-team/ionic-native/issues/777)) ([01b30c6](https://github.com/ionic-team/ionic-native/commit/01b30c6))
* **file:** correct writeFile flags ([9bd8997](https://github.com/ionic-team/ionic-native/commit/9bd8997)), closes [#789](https://github.com/ionic-team/ionic-native/issues/789)
* **googlemap:** fix typoe googledesic to geodesic ([78b3ec5](https://github.com/ionic-team/ionic-native/commit/78b3ec5)), closes [#765](https://github.com/ionic-team/ionic-native/issues/765)
* **native-audio:** completeCallback is optional on play method ([b719a03](https://github.com/ionic-team/ionic-native/commit/b719a03)), closes [#792](https://github.com/ionic-team/ionic-native/issues/792)
* **nfc:** don't bind to name field, fix [#740](https://github.com/ionic-team/ionic-native/issues/740) ([#749](https://github.com/ionic-team/ionic-native/issues/749)) ([ca43394](https://github.com/ionic-team/ionic-native/commit/ca43394))
* **plugin:** don't bind to name field. Fixes [#740](https://github.com/ionic-team/ionic-native/issues/740) ([71916a8](https://github.com/ionic-team/ionic-native/commit/71916a8))
* **video-player:** scalingMode is number ([f07431a](https://github.com/ionic-team/ionic-native/commit/f07431a)), closes [#774](https://github.com/ionic-team/ionic-native/issues/774)


### Features

* **camera-preview:** add disable method ([6ad54ec](https://github.com/ionic-team/ionic-native/commit/6ad54ec))
* **google-analytics:** new interval period parameter ([abd910d](https://github.com/ionic-team/ionic-native/commit/abd910d)), closes [#816](https://github.com/ionic-team/ionic-native/issues/816)
* **google-map:** add get and set methods to Marker class ([51ab03d](https://github.com/ionic-team/ionic-native/commit/51ab03d)), closes [#798](https://github.com/ionic-team/ionic-native/issues/798)
* **headercolor:** add HeaderColor plugin ([93696d5](https://github.com/ionic-team/ionic-native/commit/93696d5)), closes [#760](https://github.com/ionic-team/ionic-native/issues/760)



<a name="2.2.5"></a>
## [2.2.5](https://github.com/ionic-team/ionic-native/compare/v2.2.4...v2.2.5) (2016-10-27)


### Bug Fixes

* **3dtouch:** add missing property ([#739](https://github.com/ionic-team/ionic-native/issues/739)) ([757d096](https://github.com/ionic-team/ionic-native/commit/757d096))
* **geolocation:** fix watchPosition return type ([d5310b0](https://github.com/ionic-team/ionic-native/commit/d5310b0)), closes [#741](https://github.com/ionic-team/ionic-native/issues/741)
* **nfc:** fix Ndef class ([ac181c5](https://github.com/ionic-team/ionic-native/commit/ac181c5)), closes [#713](https://github.com/ionic-team/ionic-native/issues/713)
* **sqlite:** check if plugin exists before opening database ([6f47371](https://github.com/ionic-team/ionic-native/commit/6f47371))
* **sqlite:** check if plugin exists before opening database ([c98b4f4](https://github.com/ionic-team/ionic-native/commit/c98b4f4))
* **sqlite:** fix callback issue with transaction method ([a72cd59](https://github.com/ionic-team/ionic-native/commit/a72cd59)), closes [#732](https://github.com/ionic-team/ionic-native/issues/732)


### Features

* **diagnostic:** add missing functions ([eb03de9](https://github.com/ionic-team/ionic-native/commit/eb03de9)), closes [#743](https://github.com/ionic-team/ionic-native/issues/743)
* **filepath:** add cordova-plugin-filepath ([#714](https://github.com/ionic-team/ionic-native/issues/714)) ([0660a3b](https://github.com/ionic-team/ionic-native/commit/0660a3b))
* **plugins:** add name field ([9677656](https://github.com/ionic-team/ionic-native/commit/9677656))
* **sms:** add hasPermission method ([8fbf1f2](https://github.com/ionic-team/ionic-native/commit/8fbf1f2)), closes [#721](https://github.com/ionic-team/ionic-native/issues/721)



<a name="2.2.4"></a>
## [2.2.4](https://github.com/ionic-team/ionic-native/compare/v2.2.3...v2.2.4) (2016-10-15)


### Bug Fixes

* **sqlite:** fix callback order for transaction ([#700](https://github.com/ionic-team/ionic-native/issues/700)) ([799e2f0](https://github.com/ionic-team/ionic-native/commit/799e2f0))


### Features

* **device-feedback:** add DeviceFeedback plugin ([#696](https://github.com/ionic-team/ionic-native/issues/696)) ([bbda6e2](https://github.com/ionic-team/ionic-native/commit/bbda6e2))
* **image-picker:** add new android methods ([3edfafb](https://github.com/ionic-team/ionic-native/commit/3edfafb))
* **mixpanel:** MixpanelPeople returns promises ([#681](https://github.com/ionic-team/ionic-native/issues/681)) ([b95f88c](https://github.com/ionic-team/ionic-native/commit/b95f88c)), closes [#667](https://github.com/ionic-team/ionic-native/issues/667)



<a name="2.2.3"></a>
## [2.2.3](https://github.com/ionic-team/ionic-native/compare/v2.2.2...v2.2.3) (2016-10-14)


### Bug Fixes

* **googlemaps:** Expose 'type' property in GoogleMapsLatLngBounds [#693](https://github.com/ionic-team/ionic-native/issues/693) ([#694](https://github.com/ionic-team/ionic-native/issues/694)) ([74a252b](https://github.com/ionic-team/ionic-native/commit/74a252b))
* **onesignal:** update to match latest API version ([#691](https://github.com/ionic-team/ionic-native/issues/691)) ([babfb0d](https://github.com/ionic-team/ionic-native/commit/babfb0d))



<a name="2.2.2"></a>
## [2.2.2](https://github.com/ionic-team/ionic-native/compare/v2.2.1...v2.2.2) (2016-10-12)


### Bug Fixes

* **file:** getFreeDiskSpace now works ([d2f42ef](https://github.com/ionic-team/ionic-native/commit/d2f42ef))
* **file:** read methods can accept Blobs too ([276d61b](https://github.com/ionic-team/ionic-native/commit/276d61b))


### Features

* **file:** getFile and getDirectory are now public ([5c92455](https://github.com/ionic-team/ionic-native/commit/5c92455)), closes [#657](https://github.com/ionic-team/ionic-native/issues/657)



<a name="2.2.1"></a>
## [2.2.1](https://github.com/ionic-team/ionic-native/compare/v2.2.0...v2.2.1) (2016-10-12)


### Bug Fixes

* **diagnostic:** misspelled getContactsAuthorizationStatus method ([#678](https://github.com/ionic-team/ionic-native/issues/678)) ([bff4862](https://github.com/ionic-team/ionic-native/commit/bff4862))
* **file:** fix writeFile method ([842a80d](https://github.com/ionic-team/ionic-native/commit/842a80d))
* **file:** last parameter for writeFile now only accepts options ([5710eb7](https://github.com/ionic-team/ionic-native/commit/5710eb7))
* **http:** export via window.IonicNative ([#675](https://github.com/ionic-team/ionic-native/issues/675)) ([cf7abe1](https://github.com/ionic-team/ionic-native/commit/cf7abe1))
* **location-accuracy:** accuracy param is number ([c2d4f1c](https://github.com/ionic-team/ionic-native/commit/c2d4f1c)), closes [#676](https://github.com/ionic-team/ionic-native/issues/676)
* **themeablebrowser:** add missed options ([#680](https://github.com/ionic-team/ionic-native/issues/680)) ([e28e5b0](https://github.com/ionic-team/ionic-native/commit/e28e5b0))


### Features

* **file:** resolveLocalFilesystemUrl and resolveDirectoryUrl are now public methods ([542ff4c](https://github.com/ionic-team/ionic-native/commit/542ff4c)), closes [#657](https://github.com/ionic-team/ionic-native/issues/657)



<a name="2.2.0"></a>
# [2.2.0](https://github.com/ionic-team/ionic-native/compare/v2.1.9...v2.2.0) (2016-10-11)


### Bug Fixes

* **native-transitions:** add missing interface properties ([35c8bbd](https://github.com/ionic-team/ionic-native/commit/35c8bbd))
* **onesignal:** update to match latest api ([#671](https://github.com/ionic-team/ionic-native/issues/671)) ([7c6e6d8](https://github.com/ionic-team/ionic-native/commit/7c6e6d8)), closes [#667](https://github.com/ionic-team/ionic-native/issues/667)


### Features

* **http:** add cordovaHTTP wrapper ([#674](https://github.com/ionic-team/ionic-native/issues/674)) ([f0961c7](https://github.com/ionic-team/ionic-native/commit/f0961c7))



<a name="2.1.9"></a>
## [2.1.9](https://github.com/ionic-team/ionic-native/compare/v2.1.7...v2.1.9) (2016-10-09)


### Bug Fixes

* **googlemaps:** fixes GoogleMapsLatLng class ([11653ce](https://github.com/ionic-team/ionic-native/commit/11653ce))
* **paypal:** add optional details param to paypalpayment ([7200845](https://github.com/ionic-team/ionic-native/commit/7200845))
* **paypal:** problems with selection of PayPal environment ([#662](https://github.com/ionic-team/ionic-native/issues/662)) ([3dd6a92](https://github.com/ionic-team/ionic-native/commit/3dd6a92))
* **thmeable-browser:** fix the name of the plugin ([#663](https://github.com/ionic-team/ionic-native/issues/663)) ([1368175](https://github.com/ionic-team/ionic-native/commit/1368175))



<a name="2.1.7"></a>
## [2.1.7](https://github.com/ionic-team/ionic-native/compare/v2.1.6...v2.1.7) (2016-10-07)


### Bug Fixes

* **paypal:** fixed currency code not found issue ([#653](https://github.com/ionic-team/ionic-native/issues/653)) ([598f8a9](https://github.com/ionic-team/ionic-native/commit/598f8a9))



<a name="2.1.6"></a>
## [2.1.6](https://github.com/ionic-team/ionic-native/compare/v2.1.3...v2.1.6) (2016-10-06)


### Bug Fixes

* **google-analytics:** specify successIndex and errorIndex for methods with optional params ([6f23bef](https://github.com/ionic-team/ionic-native/commit/6f23bef))
* **paypal:** fix helper classes ([f002657](https://github.com/ionic-team/ionic-native/commit/f002657))



<a name="2.1.3"></a>
## [2.1.3](https://github.com/ionic-team/ionic-native/compare/v2.1.2...v2.1.3) (2016-10-06)


### Bug Fixes

* **google-analytics:** add missing methods, fix return types ([77b0277](https://github.com/ionic-team/ionic-native/commit/77b0277))
* **google-analytics:** add newSession param ([f62e108](https://github.com/ionic-team/ionic-native/commit/f62e108))
* **google-analytics:** fix depreciated plugin reference ([40325ca](https://github.com/ionic-team/ionic-native/commit/40325ca))



<a name="2.1.2"></a>
## [2.1.2](https://github.com/ionic-team/ionic-native/compare/v2.1.0...v2.1.2) (2016-10-06)


### Bug Fixes

* **googlemaps:** add missing properties ([72a694a](https://github.com/ionic-team/ionic-native/commit/72a694a)), closes [#642](https://github.com/ionic-team/ionic-native/issues/642)


### Features

* **zBar:** add zBar barcode scanner plugin ([#634](https://github.com/ionic-team/ionic-native/issues/634)) ([bbbbb3e](https://github.com/ionic-team/ionic-native/commit/bbbbb3e))



<a name="2.1.0"></a>
# [2.1.0](https://github.com/ionic-team/ionic-native/compare/v2.0.3...v2.1.0) (2016-10-03)


### Bug Fixes

* **calendar:** fixed modifyEventWithOptions and related interface ([80ff2f3](https://github.com/ionic-team/ionic-native/commit/80ff2f3))
* **googlemaps:** CameraPosition target can now be GoogleMapsLatLng[] ([#587](https://github.com/ionic-team/ionic-native/issues/587)) ([8d21f5f](https://github.com/ionic-team/ionic-native/commit/8d21f5f))
* **googlemaps:** typo in GoogleMapsTileOverlayOptions ([#589](https://github.com/ionic-team/ionic-native/issues/589)) ([be2c198](https://github.com/ionic-team/ionic-native/commit/be2c198))
* **isdebug:** export IsDebug class ([#578](https://github.com/ionic-team/ionic-native/issues/578)) ([c573332](https://github.com/ionic-team/ionic-native/commit/c573332))
* **media:** add status as a parmeter instead of property of instance ([58a99a1](https://github.com/ionic-team/ionic-native/commit/58a99a1))
* **paypal:** fix typings, add PayPalItem and PayPalPaymentDetails ([5d13ba0](https://github.com/ionic-team/ionic-native/commit/5d13ba0))
* **power-management:** fix repo and pluginref ([#603](https://github.com/ionic-team/ionic-native/issues/603)) ([d6060a9](https://github.com/ionic-team/ionic-native/commit/d6060a9))
* **push:** Add support for passing notification id into finish ([#600](https://github.com/ionic-team/ionic-native/issues/600)) ([16f05c3](https://github.com/ionic-team/ionic-native/commit/16f05c3))
* **social-sharing:** shareWithOptions method signature ([#598](https://github.com/ionic-team/ionic-native/issues/598)) ([2ed84b1](https://github.com/ionic-team/ionic-native/commit/2ed84b1)), closes [/github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/blob/master/src/android/nl/xservices/plugins/SocialSharing.java#L209](https://github.com//github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/blob/master/src/android/nl/xservices/plugins/SocialSharing.java/issues/L209)


### Features

* **ble:** add startScanWithOptions ([79f0a3f](https://github.com/ionic-team/ionic-native/commit/79f0a3f)), closes [#539](https://github.com/ionic-team/ionic-native/issues/539)
* **googlemaps:** support bounds in Geocoder ([#599](https://github.com/ionic-team/ionic-native/issues/599)) ([66e9e46](https://github.com/ionic-team/ionic-native/commit/66e9e46))
* **location-accuracy:** add location accuracy plugin ([#583](https://github.com/ionic-team/ionic-native/issues/583)) ([60b7c74](https://github.com/ionic-team/ionic-native/commit/60b7c74)), closes [#484](https://github.com/ionic-team/ionic-native/issues/484)
* **plugin:** add getPlugin to plugin interface. Fixes [#582](https://github.com/ionic-team/ionic-native/issues/582) ([d45a2b5](https://github.com/ionic-team/ionic-native/commit/d45a2b5))
* **plugin:** checkInstall w/ warning msg ([47112c7](https://github.com/ionic-team/ionic-native/commit/47112c7))
* **stepcounter:** add stepcounter plugin ([#607](https://github.com/ionic-team/ionic-native/issues/607)) ([a99b753](https://github.com/ionic-team/ionic-native/commit/a99b753))
* **themable-browser:** add ThemableBrowser plugin ([b9151bc](https://github.com/ionic-team/ionic-native/commit/b9151bc)), closes [#549](https://github.com/ionic-team/ionic-native/issues/549)
* **themable-browser:** add ThemableBrowser plugin ([972d63b](https://github.com/ionic-team/ionic-native/commit/972d63b)), closes [#549](https://github.com/ionic-team/ionic-native/issues/549)



<a name="2.0.3"></a>
## [2.0.3](https://github.com/ionic-team/ionic-native/compare/v1.3.21...v2.0.3) (2016-09-24)


### Bug Fixes

* **call-number:** number should be a string ([763ad1b](https://github.com/ionic-team/ionic-native/commit/763ad1b)), closes [#545](https://github.com/ionic-team/ionic-native/issues/545)
* **googlemaps:** CameraPosition target can now be LatLngBounds ([23fc908](https://github.com/ionic-team/ionic-native/commit/23fc908)), closes [#547](https://github.com/ionic-team/ionic-native/issues/547)
* **npm:** duplicate typings ([e50b961](https://github.com/ionic-team/ionic-native/commit/e50b961))
* **plugins:** export VideoPlayer. Fixes [#563](https://github.com/ionic-team/ionic-native/issues/563) ([4292959](https://github.com/ionic-team/ionic-native/commit/4292959))
* **ts:** use old ts version for 1.3.x [#567](https://github.com/ionic-team/ionic-native/issues/567) ([6a19c8c](https://github.com/ionic-team/ionic-native/commit/6a19c8c))
* **webintent:** add type param. Fixes [#564](https://github.com/ionic-team/ionic-native/issues/564) ([a0b6b10](https://github.com/ionic-team/ionic-native/commit/a0b6b10))


### Features

* **background-geolocation:** add showAppSettings function ([281575b](https://github.com/ionic-team/ionic-native/commit/281575b)), closes [#548](https://github.com/ionic-team/ionic-native/issues/548)
* **BackgroundGeolocation:** code cleanup ([3170686](https://github.com/ionic-team/ionic-native/commit/3170686))
* **BackgroundGeolocation:** Update to the latest version ([808a75e](https://github.com/ionic-team/ionic-native/commit/808a75e))
* **BackgroundGeolocation:** Update to the latest version ([919e8da](https://github.com/ionic-team/ionic-native/commit/919e8da))
* **build:** Support ES2015 modules ([4014972](https://github.com/ionic-team/ionic-native/commit/4014972))
* **emailcomposer:** use new supported plugin. [#568](https://github.com/ionic-team/ionic-native/issues/568) ([a092a31](https://github.com/ionic-team/ionic-native/commit/a092a31))
* **localNotifications:** added register and has permission functions ([#536](https://github.com/ionic-team/ionic-native/issues/536)) ([c83b043](https://github.com/ionic-team/ionic-native/commit/c83b043))
* **npm:** typescript 2.0.2 ([e7e45f6](https://github.com/ionic-team/ionic-native/commit/e7e45f6))
* **plugin:** cordova function override. fixes [#437](https://github.com/ionic-team/ionic-native/issues/437) ([f60d08b](https://github.com/ionic-team/ionic-native/commit/f60d08b))
* **push:** add coldstart property. Fixes [#559](https://github.com/ionic-team/ionic-native/issues/559) ([48196da](https://github.com/ionic-team/ionic-native/commit/48196da))
* **scripts:** publish script with npm and bower. Fixes [#448](https://github.com/ionic-team/ionic-native/issues/448) ([3903fee](https://github.com/ionic-team/ionic-native/commit/3903fee))



<a name="1.3.21"></a>
## [1.3.21](https://github.com/ionic-team/ionic-native/compare/v1.3.20...v1.3.21) (2016-09-07)


### Bug Fixes

* **base64togallery:** fixes callbacks ([#513](https://github.com/ionic-team/ionic-native/issues/513)) ([1db1374](https://github.com/ionic-team/ionic-native/commit/1db1374))
* **diagnostic:** Add DENIED_ALWAYS to permissionStatus, also some code formatting ([9d573a9](https://github.com/ionic-team/ionic-native/commit/9d573a9))
* **diagnostic:** Fix diagnostic objects ([cb176aa](https://github.com/ionic-team/ionic-native/commit/cb176aa))
* **diagnostic:** Fix permissionStatus object ([8f3d36f](https://github.com/ionic-team/ionic-native/commit/8f3d36f))
* **diagnostic:** Fix typo ([f93f958](https://github.com/ionic-team/ionic-native/commit/f93f958))
* **file:** set exclusive to true when replace is false ([7910493](https://github.com/ionic-team/ionic-native/commit/7910493)), closes [#516](https://github.com/ionic-team/ionic-native/issues/516)
* **geolocation:** retain Observable even during an error condition ([#532](https://github.com/ionic-team/ionic-native/issues/532)) ([26dead9](https://github.com/ionic-team/ionic-native/commit/26dead9))
* **googlemaps:** moveCamera and animateCamera now return a Promise ([d03d70f](https://github.com/ionic-team/ionic-native/commit/d03d70f)), closes [#511](https://github.com/ionic-team/ionic-native/issues/511)
* **install-instructions:** This fixes install instructions for deeplinks, facebook and googlemaps ([#499](https://github.com/ionic-team/ionic-native/issues/499)) ([877ac27](https://github.com/ionic-team/ionic-native/commit/877ac27))
* **media:** nest the constructor logic ([a566240](https://github.com/ionic-team/ionic-native/commit/a566240))
* **mixpanel:** Make eventProperties optional ([#501](https://github.com/ionic-team/ionic-native/issues/501)) ([51364f8](https://github.com/ionic-team/ionic-native/commit/51364f8))
* **ng1:** fail gracefully when angular 1 promises can't be retrieved ([d135dc2](https://github.com/ionic-team/ionic-native/commit/d135dc2))
* **ng1:** grab injector from app. [#451](https://github.com/ionic-team/ionic-native/issues/451) ([2dc68a4](https://github.com/ionic-team/ionic-native/commit/2dc68a4))
* remove CanvasCamera plugin ([c75f898](https://github.com/ionic-team/ionic-native/commit/c75f898))
* **social-sharing:** shareViaEmail now resolves/rejects when not providing optional args ([c76de34](https://github.com/ionic-team/ionic-native/commit/c76de34))
* **social-sharing:** various fixes ([#520](https://github.com/ionic-team/ionic-native/issues/520)) ([4f97164](https://github.com/ionic-team/ionic-native/commit/4f97164))


### Features

* **file:** adds chunked blob writing ([#529](https://github.com/ionic-team/ionic-native/issues/529)) ([bbbd0d5](https://github.com/ionic-team/ionic-native/commit/bbbd0d5))
* **file:** allows writeFile and writeExistingFile to accept Blob ([#527](https://github.com/ionic-team/ionic-native/issues/527)) ([393e9d0](https://github.com/ionic-team/ionic-native/commit/393e9d0))
* **googlemaps:** can pass HTMLElement to constructor ([dff034a](https://github.com/ionic-team/ionic-native/commit/dff034a))



<a name="1.3.20"></a>
## [1.3.20](https://github.com/ionic-team/ionic-native/compare/v1.3.19...v1.3.20) (2016-08-27)


### Bug Fixes

* **GoogleMaps:** Fixes [#452](https://github.com/ionic-team/ionic-native/issues/452) ([#498](https://github.com/ionic-team/ionic-native/issues/498)) ([f6d5ac4](https://github.com/ionic-team/ionic-native/commit/f6d5ac4))


### Features

* **canvas-camera:** add CanvasCamera support ([ad57733](https://github.com/ionic-team/ionic-native/commit/ad57733))
* **file-chooser:** add file chooser plugin support ([#495](https://github.com/ionic-team/ionic-native/issues/495)) ([94a7dae](https://github.com/ionic-team/ionic-native/commit/94a7dae))
* **file-opener:** add file opener support ([#497](https://github.com/ionic-team/ionic-native/issues/497)) ([21d8122](https://github.com/ionic-team/ionic-native/commit/21d8122)), closes [#295](https://github.com/ionic-team/ionic-native/issues/295)
* **music-controls:** add music controls plugin support ([#494](https://github.com/ionic-team/ionic-native/issues/494)) ([4e9bc95](https://github.com/ionic-team/ionic-native/commit/4e9bc95))
* **youtube:** add Youtube video player plugin support ([#496](https://github.com/ionic-team/ionic-native/issues/496)) ([0cf7d6a](https://github.com/ionic-team/ionic-native/commit/0cf7d6a))



<a name="1.3.19"></a>
## [1.3.19](https://github.com/ionic-team/ionic-native/compare/v1.3.18...v1.3.19) (2016-08-27)


### Bug Fixes

* **mixpanel:** implement CordovaProperty correctly ([dd0c9ba](https://github.com/ionic-team/ionic-native/commit/dd0c9ba))


### Features

* **call-number:** add support for CallNumber plugin ([#487](https://github.com/ionic-team/ionic-native/issues/487)) ([759f8ef](https://github.com/ionic-team/ionic-native/commit/759f8ef))
* **market:** add Market plugin support ([#490](https://github.com/ionic-team/ionic-native/issues/490)) ([9bcc4ed](https://github.com/ionic-team/ionic-native/commit/9bcc4ed))
* **mixpanel:** add mixpanel support ([#492](https://github.com/ionic-team/ionic-native/issues/492)) ([cf8e342](https://github.com/ionic-team/ionic-native/commit/cf8e342))
* **native-page-transitions:** add support for Native Page Transitions plugin ([#488](https://github.com/ionic-team/ionic-native/issues/488)) ([00d87db](https://github.com/ionic-team/ionic-native/commit/00d87db))
* **nfc:** add nfc support ([#493](https://github.com/ionic-team/ionic-native/issues/493)) ([76aa8a6](https://github.com/ionic-team/ionic-native/commit/76aa8a6))
* **paypal:** add PayPal support ([#491](https://github.com/ionic-team/ionic-native/issues/491)) ([9fe5c19](https://github.com/ionic-team/ionic-native/commit/9fe5c19))
* **power-management:** add power management support ([#489](https://github.com/ionic-team/ionic-native/issues/489)) ([cd82a53](https://github.com/ionic-team/ionic-native/commit/cd82a53))
* **streaming-media:** add streaming media support ([#486](https://github.com/ionic-team/ionic-native/issues/486)) ([841b242](https://github.com/ionic-team/ionic-native/commit/841b242))



<a name="1.3.18"></a>
## [1.3.18](https://github.com/ionic-team/ionic-native/compare/v1.3.17...v1.3.18) (2016-08-26)


### Bug Fixes

* **facebook:** export interfaces ([c4110ee](https://github.com/ionic-team/ionic-native/commit/c4110ee))
* **File:** fixed readFileAs ([#479](https://github.com/ionic-team/ionic-native/issues/479)) ([eff7841](https://github.com/ionic-team/ionic-native/commit/eff7841))
* **geofence:** fix event listeners ([efa222f](https://github.com/ionic-team/ionic-native/commit/efa222f))


### Features

* **code-push:** add wrapper for cordova-plugin-code-push ([#420](https://github.com/ionic-team/ionic-native/issues/420)) ([905f988](https://github.com/ionic-team/ionic-native/commit/905f988))
* **diagnostic:** add full plugin functionality ([#424](https://github.com/ionic-team/ionic-native/issues/424)) ([47a9b34](https://github.com/ionic-team/ionic-native/commit/47a9b34)), closes [#224](https://github.com/ionic-team/ionic-native/issues/224)
* **geofence:** Adds geofence plugin ([#442](https://github.com/ionic-team/ionic-native/issues/442)) ([a438967](https://github.com/ionic-team/ionic-native/commit/a438967))
* **inAppPurchase:** add inAppPurhcase plugin ([#423](https://github.com/ionic-team/ionic-native/issues/423)) ([8526e89](https://github.com/ionic-team/ionic-native/commit/8526e89))
* **IsDebug:** add the IsDebug plugin ([#475](https://github.com/ionic-team/ionic-native/issues/475)) ([dd39ba8](https://github.com/ionic-team/ionic-native/commit/dd39ba8))



<a name="1.3.17"></a>
## [1.3.17](https://github.com/ionic-team/ionic-native/compare/v1.3.16...v1.3.17) (2016-08-23)


### Bug Fixes

* add the reject function at the expected errorIndex position in the args array ([#436](https://github.com/ionic-team/ionic-native/issues/436)) ([4e87ac7](https://github.com/ionic-team/ionic-native/commit/4e87ac7))
* **camera-preview:** changes implementation to match Cordova plugin ([#441](https://github.com/ionic-team/ionic-native/issues/441)) ([55ba65a](https://github.com/ionic-team/ionic-native/commit/55ba65a))
* **file:** fixes exclusive option ([#459](https://github.com/ionic-team/ionic-native/issues/459)) ([14e41a3](https://github.com/ionic-team/ionic-native/commit/14e41a3))
* **file:** initialize writeFile options ([#468](https://github.com/ionic-team/ionic-native/issues/468)) ([16628a4](https://github.com/ionic-team/ionic-native/commit/16628a4))
* **nativeaudio:** fix plugin reference ([2510c5f](https://github.com/ionic-team/ionic-native/commit/2510c5f))


### Features

* **instagram:** add instagram sharing plugin ([#453](https://github.com/ionic-team/ionic-native/issues/453)) ([f3e698f](https://github.com/ionic-team/ionic-native/commit/f3e698f)), closes [#307](https://github.com/ionic-team/ionic-native/issues/307)
* **VideoEditor:** add video editor plugin. ([#457](https://github.com/ionic-team/ionic-native/issues/457)) ([7a53013](https://github.com/ionic-team/ionic-native/commit/7a53013)), closes [#316](https://github.com/ionic-team/ionic-native/issues/316)



<a name="1.3.16"></a>
## [1.3.16](https://github.com/ionic-team/ionic-native/compare/v1.3.15...v1.3.16) (2016-08-15)


### Bug Fixes

* **photo-viewer:** method is static ([8bc499f](https://github.com/ionic-team/ionic-native/commit/8bc499f))



<a name="1.3.15"></a>
## [1.3.15](https://github.com/ionic-team/ionic-native/compare/v1.3.14...v1.3.15) (2016-08-15)


### Features

* **google-analytics:** add missing functions ([689bfd9](https://github.com/ionic-team/ionic-native/commit/689bfd9))
* **TTS:** add tts plugin ([#431](https://github.com/ionic-team/ionic-native/issues/431)) ([dcf3ab2](https://github.com/ionic-team/ionic-native/commit/dcf3ab2)), closes [#311](https://github.com/ionic-team/ionic-native/issues/311)



<a name="1.3.14"></a>
## [1.3.14](https://github.com/ionic-team/ionic-native/compare/v1.3.12...v1.3.14) (2016-08-15)


### Bug Fixes

* **datepicker:** date now accepts Date, string, or number ([#428](https://github.com/ionic-team/ionic-native/issues/428)) ([aaddd9e](https://github.com/ionic-team/ionic-native/commit/aaddd9e)), closes [#354](https://github.com/ionic-team/ionic-native/issues/354)
* **inappbrowser:** fix event listener ([4b08d85](https://github.com/ionic-team/ionic-native/commit/4b08d85))


### Features

* **native-audio:** Add native audio plugin ([#427](https://github.com/ionic-team/ionic-native/issues/427)) ([8cd6686](https://github.com/ionic-team/ionic-native/commit/8cd6686)), closes [#315](https://github.com/ionic-team/ionic-native/issues/315)
* **shake:** add Shake plugin ([#426](https://github.com/ionic-team/ionic-native/issues/426)) ([203d4c7](https://github.com/ionic-team/ionic-native/commit/203d4c7)), closes [#313](https://github.com/ionic-team/ionic-native/issues/313)
* **zip:** add zip plugin ([#430](https://github.com/ionic-team/ionic-native/issues/430)) ([e34f94e](https://github.com/ionic-team/ionic-native/commit/e34f94e)), closes [#421](https://github.com/ionic-team/ionic-native/issues/421)



<a name="1.3.12"></a>
## [1.3.12](https://github.com/ionic-team/ionic-native/compare/v1.3.11...v1.3.12) (2016-08-13)


### Bug Fixes

* **inappbrowser:** fix event listener ([618d866](https://github.com/ionic-team/ionic-native/commit/618d866))



<a name="1.3.11"></a>
## [1.3.11](https://github.com/ionic-team/ionic-native/compare/v1.3.10...v1.3.11) (2016-08-11)


### Bug Fixes

* **backgroundGeolocation:** update config and move to sync. Fixes [#331](https://github.com/ionic-team/ionic-native/issues/331) ([4e20681](https://github.com/ionic-team/ionic-native/commit/4e20681))
* **camera:** camera options should be optional. Fixes [#413](https://github.com/ionic-team/ionic-native/issues/413) ([#417](https://github.com/ionic-team/ionic-native/issues/417)) ([c60c3b7](https://github.com/ionic-team/ionic-native/commit/c60c3b7))
* **index:** export Geolocation interfaces. ([#404](https://github.com/ionic-team/ionic-native/issues/404)) ([0c486b0](https://github.com/ionic-team/ionic-native/commit/0c486b0))
* **ng1:** Copy object properly. Fixes [#357](https://github.com/ionic-team/ionic-native/issues/357) ([9ca38cd](https://github.com/ionic-team/ionic-native/commit/9ca38cd))


### Features

* **file:** alternate file implementation ([#283](https://github.com/ionic-team/ionic-native/issues/283)) ([6ed32ef](https://github.com/ionic-team/ionic-native/commit/6ed32ef))
* **GoogleAnalytics:** Add campaign measurement tracking ([#405](https://github.com/ionic-team/ionic-native/issues/405)) ([cf3f0f6](https://github.com/ionic-team/ionic-native/commit/cf3f0f6))
* **GoogleMaps:** Allow specify enableHighAccuracy option that attempt to get your location with highest accuracy ([#410](https://github.com/ionic-team/ionic-native/issues/410)) ([43e8a6d](https://github.com/ionic-team/ionic-native/commit/43e8a6d))
* **ibeacon:** using option otherPromise instead of sync ([#388](https://github.com/ionic-team/ionic-native/issues/388)) ([306cb5d](https://github.com/ionic-team/ionic-native/commit/306cb5d))
* **inappbrowser:** implement instance based wrapper ([#305](https://github.com/ionic-team/ionic-native/issues/305)) ([4b8ab4a](https://github.com/ionic-team/ionic-native/commit/4b8ab4a))
* **keyboard:** enable hideKeyboardAccessoryBar function ([#398](https://github.com/ionic-team/ionic-native/issues/398)) ([7a84262](https://github.com/ionic-team/ionic-native/commit/7a84262)), closes [#394](https://github.com/ionic-team/ionic-native/issues/394)
* **photo-viewer:** add wrapper for plugin ([#359](https://github.com/ionic-team/ionic-native/issues/359)) ([154c029](https://github.com/ionic-team/ionic-native/commit/154c029))
* **video-player:** Added video player plugin ([#391](https://github.com/ionic-team/ionic-native/issues/391)) ([cabeeb8](https://github.com/ionic-team/ionic-native/commit/cabeeb8)), closes [#342](https://github.com/ionic-team/ionic-native/issues/342)



<a name="1.3.10"></a>
## [1.3.10](https://github.com/ionic-team/ionic-native/compare/v1.3.9...v1.3.10) (2016-08-01)


### Bug Fixes

* **brightness:** use correct pluginRef ([e20c411](https://github.com/ionic-team/ionic-native/commit/e20c411))
* **diagnostics:** Corrects isEnabled functions to isAvailable ([#373](https://github.com/ionic-team/ionic-native/issues/373)) ([ccf7fb5](https://github.com/ionic-team/ionic-native/commit/ccf7fb5))
* **ng1:** use $q  promises instead of the native Promise ([#378](https://github.com/ionic-team/ionic-native/issues/378)) ([817a434](https://github.com/ionic-team/ionic-native/commit/817a434))
* **one-signal:** return Observable instead of promise ([#352](https://github.com/ionic-team/ionic-native/issues/352)) ([08fe04e](https://github.com/ionic-team/ionic-native/commit/08fe04e))


### Features

* **crop:** add crop plugin ([#284](https://github.com/ionic-team/ionic-native/issues/284)) ([41c9adf](https://github.com/ionic-team/ionic-native/commit/41c9adf))
* **screen-orientation:** Added Screen Orientation Plugin [#342](https://github.com/ionic-team/ionic-native/issues/342) ([#366](https://github.com/ionic-team/ionic-native/issues/366)) ([bd9366b](https://github.com/ionic-team/ionic-native/commit/bd9366b))



<a name="1.3.9"></a>
## [1.3.9](https://github.com/ionic-team/ionic-native/compare/v1.3.8...v1.3.9) (2016-07-23)


### Bug Fixes

* **file:** readAsText() and adds readAsDataURL() in File plugin ([#346](https://github.com/ionic-team/ionic-native/issues/346)) ([77d31cd](https://github.com/ionic-team/ionic-native/commit/77d31cd))


### Features

* **android-fingerprint-auth:** add wrapper for plugin ([df326f7](https://github.com/ionic-team/ionic-native/commit/df326f7)), closes [#334](https://github.com/ionic-team/ionic-native/issues/334)
* **secure-storage:** Add Secure Storage Wrapper ([#347](https://github.com/ionic-team/ionic-native/issues/347)) ([075842d](https://github.com/ionic-team/ionic-native/commit/075842d))



<a name="1.3.8"></a>
## [1.3.8](https://github.com/ionic-team/ionic-native/compare/v1.3.7...v1.3.8) (2016-07-20)


### Bug Fixes

* **base64togallery:** update plugin wrapper to match latest version ([d4bee49](https://github.com/ionic-team/ionic-native/commit/d4bee49)), closes [#335](https://github.com/ionic-team/ionic-native/issues/335)
* **sqlite:** fix method attribute typo ([#324](https://github.com/ionic-team/ionic-native/issues/324)) ([006bc70](https://github.com/ionic-team/ionic-native/commit/006bc70))


### Features

* **facebook:** add FacebookLoginResponse interface ([8b27bed](https://github.com/ionic-team/ionic-native/commit/8b27bed))
* **otherPromise:** can work better with plugins that return promises ([#304](https://github.com/ionic-team/ionic-native/issues/304)) ([0aee6c8](https://github.com/ionic-team/ionic-native/commit/0aee6c8))
* **social-sharing:** add canShareViaEmail ([#333](https://github.com/ionic-team/ionic-native/issues/333)) ([5807dd7](https://github.com/ionic-team/ionic-native/commit/5807dd7))
* **twitter-connect:** add twitter connect plugin ([979838f](https://github.com/ionic-team/ionic-native/commit/979838f)), closes [#308](https://github.com/ionic-team/ionic-native/issues/308)



<a name="1.3.7"></a>
## [1.3.7](https://github.com/ionic-team/ionic-native/compare/v1.3.6...v1.3.7) (2016-07-18)


### Bug Fixes

* **contacts:** missing name property, types ([#320](https://github.com/ionic-team/ionic-native/issues/320)) ([074d166](https://github.com/ionic-team/ionic-native/commit/074d166))
* **geolocation:** handle errors on watchPosition ([1b161d8](https://github.com/ionic-team/ionic-native/commit/1b161d8)), closes [#322](https://github.com/ionic-team/ionic-native/issues/322)


### Features

* **sim:** Add sim plugin ([#317](https://github.com/ionic-team/ionic-native/issues/317)) ([4f85110](https://github.com/ionic-team/ionic-native/commit/4f85110))



<a name="1.3.6"></a>
## [1.3.6](https://github.com/ionic-team/ionic-native/compare/v1.3.5...v1.3.6) (2016-07-17)


### Bug Fixes

* **googlemaps:** able to pass array of LatLng to GoogleMapsLatLngBounds constructor ([de14b0e](https://github.com/ionic-team/ionic-native/commit/de14b0e)), closes [#298](https://github.com/ionic-team/ionic-native/issues/298)
* **launch-navigator:** fix the navigate function wrapper to match latest plugin API ([6f625f9](https://github.com/ionic-team/ionic-native/commit/6f625f9))


### Features

* **camera-preview:** add wrapper for camera-preview ([#301](https://github.com/ionic-team/ionic-native/issues/301)) ([3a1a3ce](https://github.com/ionic-team/ionic-native/commit/3a1a3ce))
* **launch-navigator:** add new methods and constants to match latest plugin API ([29de6b3](https://github.com/ionic-team/ionic-native/commit/29de6b3))



<a name="1.3.5"></a>
## [1.3.5](https://github.com/ionic-team/ionic-native/compare/v1.3.4...v1.3.5) (2016-07-17)


### Bug Fixes

* **ibeacon:** minor fixes ([b5a2ffc](https://github.com/ionic-team/ionic-native/commit/b5a2ffc))
* **safari-view-controller:** fix wrappers ([b4b3ec0](https://github.com/ionic-team/ionic-native/commit/b4b3ec0))


### Features

* **googlemaps:** add Geocoder class ([#292](https://github.com/ionic-team/ionic-native/issues/292)) ([2996da6](https://github.com/ionic-team/ionic-native/commit/2996da6)), closes [#280](https://github.com/ionic-team/ionic-native/issues/280)
* **inAppPurchase:** add inAppPurchase ([f1988f6](https://github.com/ionic-team/ionic-native/commit/f1988f6))
* **media-capture:** add media capture plugin ([#293](https://github.com/ionic-team/ionic-native/issues/293)) ([daa6d4c](https://github.com/ionic-team/ionic-native/commit/daa6d4c)), closes [#272](https://github.com/ionic-team/ionic-native/issues/272)
* **nativestorage:** add NativeStorage plugin wrapper ([af5d4ad](https://github.com/ionic-team/ionic-native/commit/af5d4ad))
* **pin-dialog:** add pin dialog plugin ([#291](https://github.com/ionic-team/ionic-native/issues/291)) ([2fe37c4](https://github.com/ionic-team/ionic-native/commit/2fe37c4))



<a name="1.3.4"></a>
## [1.3.4](https://github.com/ionic-team/ionic-native/compare/v1.3.3...v1.3.4) (2016-07-14)


### Bug Fixes

* **touchid:** make isAvailable static ([c23f5e9](https://github.com/ionic-team/ionic-native/commit/c23f5e9))


### Reverts

* **changelog:** old changelog ([0cb79d1](https://github.com/ionic-team/ionic-native/commit/0cb79d1))



<a name="1.3.3"></a>
## [1.3.3](https://github.com/ionic-team/ionic-native/compare/v1.3.2...v1.3.3) (2016-07-11)


### Bug Fixes

* remove unnecessary decorator ([#257](https://github.com/ionic-team/ionic-native/issues/257)) ([25fab64](https://github.com/ionic-team/ionic-native/commit/25fab64))
* **actionsheet:** add missing optional parameter for hide function ([#262](https://github.com/ionic-team/ionic-native/issues/262)) ([644e999](https://github.com/ionic-team/ionic-native/commit/644e999))
* **background-geolocation:** fix pluginref again ([b8a5133](https://github.com/ionic-team/ionic-native/commit/b8a5133))
* **geolocation:** fix plugin reference ([4f0cd24](https://github.com/ionic-team/ionic-native/commit/4f0cd24)), closes [#258](https://github.com/ionic-team/ionic-native/issues/258)
* **googlemaps:** use correct methods for addGroundOverlay and addKmlOverlay ([#268](https://github.com/ionic-team/ionic-native/issues/268)) ([b8be1de](https://github.com/ionic-team/ionic-native/commit/b8be1de))
* **socialsharing:** all methods return Promises now ([e150224](https://github.com/ionic-team/ionic-native/commit/e150224)), closes [#275](https://github.com/ionic-team/ionic-native/issues/275)


### Features

* **ibeacon:** add iBeacon plugin support ([#270](https://github.com/ionic-team/ionic-native/issues/270)) ([dd97df1](https://github.com/ionic-team/ionic-native/commit/dd97df1))
* **onesignal:** added wrapper for the Cordova OneSignal Plugin ([#252](https://github.com/ionic-team/ionic-native/issues/252)) ([ba20dbe](https://github.com/ionic-team/ionic-native/commit/ba20dbe))
* **push:** added support for Action Buttons on iOS with categories ([#273](https://github.com/ionic-team/ionic-native/issues/273)) ([592feb4](https://github.com/ionic-team/ionic-native/commit/592feb4))



<a name="1.3.2"></a>
## [1.3.2](https://github.com/ionic-team/ionic-native/compare/v1.3.1...v1.3.2) (2016-06-27)


### Bug Fixes

* **build:** disable emitDecoratorMetadata option in tsconfig ([a5f3d7a](https://github.com/ionic-team/ionic-native/commit/a5f3d7a)), closes [#251](https://github.com/ionic-team/ionic-native/issues/251)



<a name="1.3.1"></a>
## [1.3.1](https://github.com/ionic-team/ionic-native/compare/v1.3.0...v1.3.1) (2016-06-26)


### Bug Fixes

* **3dtouch:** fix implementation for onHomeIconPressed function ([d2b2be6](https://github.com/ionic-team/ionic-native/commit/d2b2be6)), closes [#232](https://github.com/ionic-team/ionic-native/issues/232)
* **sqlite:** resolve race condition, add comments ([#235](https://github.com/ionic-team/ionic-native/issues/235)) ([f1c8ce3](https://github.com/ionic-team/ionic-native/commit/f1c8ce3))


### Features

* **googlemaps:** add GoogleMapsLatLngBounds class ([17da427](https://github.com/ionic-team/ionic-native/commit/17da427))
* **printer:** add printer plugin ([#225](https://github.com/ionic-team/ionic-native/issues/225)) ([48ffcae](https://github.com/ionic-team/ionic-native/commit/48ffcae))



<a name="1.3.0"></a>
# [1.3.0](https://github.com/ionic-team/ionic-native/compare/v1.2.3...v1.3.0) (2016-06-13)


### Bug Fixes

* **barcodescanner:** add missing options param ([4fdcbb5](https://github.com/ionic-team/ionic-native/commit/4fdcbb5)), closes [#180](https://github.com/ionic-team/ionic-native/issues/180)
* **base64togallery:** method is now static ([be7b9e2](https://github.com/ionic-team/ionic-native/commit/be7b9e2)), closes [#212](https://github.com/ionic-team/ionic-native/issues/212)
* **batterystatus:** correct plugin name on npm ([66b7fa6](https://github.com/ionic-team/ionic-native/commit/66b7fa6))
* **calendar:** fix some functionality and add missing ones ([a15fb01](https://github.com/ionic-team/ionic-native/commit/a15fb01)), closes [#184](https://github.com/ionic-team/ionic-native/issues/184)
* **deeplinks:** new result type ([11226d7](https://github.com/ionic-team/ionic-native/commit/11226d7))
* **deviceorientation:** cancelFunction renamed to clearFunction ([8dee02e](https://github.com/ionic-team/ionic-native/commit/8dee02e))
* **geolocation:** fix watchPosition() ([4a8650e](https://github.com/ionic-team/ionic-native/commit/4a8650e)), closes [#164](https://github.com/ionic-team/ionic-native/issues/164)
* **googlemaps:** isAvailable() returns boolean, not an instance of GoogleMap ([a53ae8f](https://github.com/ionic-team/ionic-native/commit/a53ae8f))


### Features

* **angular1:** Support Angular 1 ([af8fbde](https://github.com/ionic-team/ionic-native/commit/af8fbde))
* **barcodescanner:** add encode function ([e73f57f](https://github.com/ionic-team/ionic-native/commit/e73f57f)), closes [#115](https://github.com/ionic-team/ionic-native/issues/115)
* **deeplinks:** Add Ionic Deeplinks Plugin ([c93cbed](https://github.com/ionic-team/ionic-native/commit/c93cbed))



<a name="1.2.3"></a>
## [1.2.3](https://github.com/ionic-team/ionic-native/compare/v1.2.2...v1.2.3) (2016-06-01)



<a name="1.2.2"></a>
## [1.2.2](https://github.com/ionic-team/ionic-native/compare/v1.2.1...v1.2.2) (2016-05-20)


### Bug Fixes

* **Bluetooth:** make connect function an observable to maintain full functionality ([58e3f0b](https://github.com/ionic-team/ionic-native/commit/58e3f0b)), closes [#154](https://github.com/ionic-team/ionic-native/issues/154)
* **calendar:** add new permissions functions for Android 6 (M) devices ([ddbd64d](https://github.com/ionic-team/ionic-native/commit/ddbd64d)), closes [#156](https://github.com/ionic-team/ionic-native/issues/156)
* **emailcomposer:** fix isAvailable function ([2a568d2](https://github.com/ionic-team/ionic-native/commit/2a568d2)), closes [#168](https://github.com/ionic-team/ionic-native/issues/168)



<a name="1.2.1"></a>
## [1.2.1](https://github.com/ionic-team/ionic-native/compare/v1.2.0...v1.2.1) (2016-05-11)


### Bug Fixes

* **contacts:** plugin rewrite ([aada893](https://github.com/ionic-team/ionic-native/commit/aada893))


### Features

* **plugin:** add wrapper for instance properties ([28d7d5c](https://github.com/ionic-team/ionic-native/commit/28d7d5c))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/ionic-team/ionic-native/compare/v1.1.0...v1.2.0) (2016-04-30)


### Bug Fixes

* **BluetoohSerial:** add missing plugin reference ([317437b](https://github.com/ionic-team/ionic-native/commit/317437b))
* **GoogleAnalytics:** addCustomDimension() key param is number ([3865ea4](https://github.com/ionic-team/ionic-native/commit/3865ea4)), closes [#131](https://github.com/ionic-team/ionic-native/issues/131)
* **keyboard:** remove hideKeyboardAccessoryBar method for now ([292c80c](https://github.com/ionic-team/ionic-native/commit/292c80c))
* **launchnavigator:** bug fix ([4ead1ae](https://github.com/ionic-team/ionic-native/commit/4ead1ae))
* **launchnavigator:** start parameter is optional ([5e7378a](https://github.com/ionic-team/ionic-native/commit/5e7378a))
* **localnotifications:** options can be an array ([e10d744](https://github.com/ionic-team/ionic-native/commit/e10d744))
* **plugin:** handle rejection when Cordova is undefined ([db07768](https://github.com/ionic-team/ionic-native/commit/db07768))
* **plugin:** remove unecessary code ([4070991](https://github.com/ionic-team/ionic-native/commit/4070991))
* **push plugin:** senderId is optional in iosPushOptions ([48bf837](https://github.com/ionic-team/ionic-native/commit/48bf837))
* **spinnerdialog:** fix functionality ([66f0e03](https://github.com/ionic-team/ionic-native/commit/66f0e03))
* **vibration:** fix plugin reference ([beeb075](https://github.com/ionic-team/ionic-native/commit/beeb075)), closes [#106](https://github.com/ionic-team/ionic-native/issues/106)


### Features

* **camera:** add camera constants ([ce02d82](https://github.com/ionic-team/ionic-native/commit/ce02d82)), closes [#129](https://github.com/ionic-team/ionic-native/issues/129)
* **ionicnative:** add instance wrapper ([0ec737a](https://github.com/ionic-team/ionic-native/commit/0ec737a))
* **keyboard:** add event listeners for keyboard show/hide events ([c947437](https://github.com/ionic-team/ionic-native/commit/c947437))
* **media:** add media plugin ([1105b57](https://github.com/ionic-team/ionic-native/commit/1105b57)), closes [#88](https://github.com/ionic-team/ionic-native/issues/88)
* **plugin:** add admob pro plugin ([d9b847b](https://github.com/ionic-team/ionic-native/commit/d9b847b)), closes [#146](https://github.com/ionic-team/ionic-native/issues/146)
* **plugin:** add Bluetooth Serial plugin ([837fb95](https://github.com/ionic-team/ionic-native/commit/837fb95)), closes [#136](https://github.com/ionic-team/ionic-native/issues/136)
* **plugin:** add email composer plugin ([804c9ee](https://github.com/ionic-team/ionic-native/commit/804c9ee))
* **plugin:** add InAppBrowser plugin ([b8d2cfd](https://github.com/ionic-team/ionic-native/commit/b8d2cfd))
* **plugin:** add social sharing plugin ([efc8231](https://github.com/ionic-team/ionic-native/commit/efc8231))
* **plugin:** add spinner dialog plugin ([812653c](https://github.com/ionic-team/ionic-native/commit/812653c))
* **plugin:** add web intent plugin ([e2fc9a0](https://github.com/ionic-team/ionic-native/commit/e2fc9a0))
* **toast:** add new features to toast plugin ([ed7e783](https://github.com/ionic-team/ionic-native/commit/ed7e783))
* **webintent:** add plugin to index ([f357b56](https://github.com/ionic-team/ionic-native/commit/f357b56))


### Performance Improvements

* **ionicnative:** instance wrapper cleanup and optimization ([5a8d48e](https://github.com/ionic-team/ionic-native/commit/5a8d48e))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/ionic-team/ionic-native/compare/v1.0.9...v1.1.0) (2016-03-17)


### Bug Fixes

* **datepicker:** datepicker options are optional ([c3cfd14](https://github.com/ionic-team/ionic-native/commit/c3cfd14))
* **datepicker:** dates are Dates ([ce6adcc](https://github.com/ionic-team/ionic-native/commit/ce6adcc))
* **datepicker:** fix plugin functionality ([91de971](https://github.com/ionic-team/ionic-native/commit/91de971))
* **datepicker:** fix plugin functionality ([1a778e7](https://github.com/ionic-team/ionic-native/commit/1a778e7))
* **devicemotion:** combine watch and clear into one function ([d17f62d](https://github.com/ionic-team/ionic-native/commit/d17f62d))
* **geolocation:** set callback order to reverse on getCurrentPosition ([1fac387](https://github.com/ionic-team/ionic-native/commit/1fac387))
* **imagepicker:** pluginRef ([01d7972](https://github.com/ionic-team/ionic-native/commit/01d7972))
* **interface:** params are optional ([e708bc6](https://github.com/ionic-team/ionic-native/commit/e708bc6))
* **launchnavigator:** fix Plugin decorator property value ([9e17e25](https://github.com/ionic-team/ionic-native/commit/9e17e25))
* **plugin:** combine watch and clearwatch functions ([8855359](https://github.com/ionic-team/ionic-native/commit/8855359))
* **plugin:** don't call reject when sync ([1334f60](https://github.com/ionic-team/ionic-native/commit/1334f60))
* **plugin:** export interfaces ([1e259da](https://github.com/ionic-team/ionic-native/commit/1e259da))
* **plugin:** fix options properties ([44365f4](https://github.com/ionic-team/ionic-native/commit/44365f4))
* **plugin:** fix types ([c86e135](https://github.com/ionic-team/ionic-native/commit/c86e135))
* **plugins:** cleanup and add new plugins to index ([1771f7b](https://github.com/ionic-team/ionic-native/commit/1771f7b))
* **plugins:** fix optional options ([9ef850c](https://github.com/ionic-team/ionic-native/commit/9ef850c))
* added dummy boolean ([2caa151](https://github.com/ionic-team/ionic-native/commit/2caa151))
* fix callback order ([5fda6d4](https://github.com/ionic-team/ionic-native/commit/5fda6d4))
* fix callback order ([5944bd1](https://github.com/ionic-team/ionic-native/commit/5944bd1))
* fix options params ([c71f8d4](https://github.com/ionic-team/ionic-native/commit/c71f8d4))
* remove confirm callback, not needed. ([662d8ce](https://github.com/ionic-team/ionic-native/commit/662d8ce))


### Features

* **batterystatus:** complete functionality ([e7a09d9](https://github.com/ionic-team/ionic-native/commit/e7a09d9))
* **localnotification:** complete functionality ([5d5bae3](https://github.com/ionic-team/ionic-native/commit/5d5bae3))
* **package:** expose decorators and wrapper functions ([848d706](https://github.com/ionic-team/ionic-native/commit/848d706))
* **plugin:** add android hotspot plugin ([e1dc606](https://github.com/ionic-team/ionic-native/commit/e1dc606))
* **plugin:** add app availability plugin ([3d188e1](https://github.com/ionic-team/ionic-native/commit/3d188e1))
* **plugin:** add base64 to gallery ([8c17a2a](https://github.com/ionic-team/ionic-native/commit/8c17a2a))
* **plugin:** add DB Meter ([22bb218](https://github.com/ionic-team/ionic-native/commit/22bb218))
* **plugin:** add device motion plugin ([a4df21e](https://github.com/ionic-team/ionic-native/commit/a4df21e))
* **plugin:** add device orientation plugin ([9766aab](https://github.com/ionic-team/ionic-native/commit/9766aab))
* **plugin:** add dialogs plugin ([b5f9267](https://github.com/ionic-team/ionic-native/commit/b5f9267))
* **plugin:** add event wrapper ([0d1bd13](https://github.com/ionic-team/ionic-native/commit/0d1bd13))
* **plugin:** add flashlight plugin ([3ec25fa](https://github.com/ionic-team/ionic-native/commit/3ec25fa))
* **plugin:** add functionality to app-availablity plugin ([bc4dcaa](https://github.com/ionic-team/ionic-native/commit/bc4dcaa))
* **plugin:** add functionality to device motion plugin ([7f7ba3b](https://github.com/ionic-team/ionic-native/commit/7f7ba3b))
* **plugin:** add globalization ([90cc36b](https://github.com/ionic-team/ionic-native/commit/90cc36b))
* **plugin:** add imagePicker plugin ([287d129](https://github.com/ionic-team/ionic-native/commit/287d129))
* **plugin:** add keyboard ([a80c4ee](https://github.com/ionic-team/ionic-native/commit/a80c4ee))
* **plugin:** add launch navigator ([984e7fc](https://github.com/ionic-team/ionic-native/commit/984e7fc))
* **plugin:** add launch navigator ([18df9a5](https://github.com/ionic-team/ionic-native/commit/18df9a5))
* **plugin:** add local notifications ([66df0a6](https://github.com/ionic-team/ionic-native/commit/66df0a6))
* **plugin:** add sms ([6843177](https://github.com/ionic-team/ionic-native/commit/6843177))
* **plugin:** add sms plugin ([aa7e04c](https://github.com/ionic-team/ionic-native/commit/aa7e04c))
* **plugin:** add splashscreen ([0f3c188](https://github.com/ionic-team/ionic-native/commit/0f3c188))
* **plugin:** add vibration ([3cc4ee4](https://github.com/ionic-team/ionic-native/commit/3cc4ee4))
* **plugin:** proxy plugin properties ([fc54fef](https://github.com/ionic-team/ionic-native/commit/fc54fef))
* **plugin:** show instructions if plugin not installed ([c48a851](https://github.com/ionic-team/ionic-native/commit/c48a851))
* **plugins:** add new plugins to index ([4d8dc1b](https://github.com/ionic-team/ionic-native/commit/4d8dc1b))
* **plugins:** add platforms info ([9826dfd](https://github.com/ionic-team/ionic-native/commit/9826dfd))



<a name="1.0.9"></a>
## [1.0.9](https://github.com/ionic-team/ionic-native/compare/8f27fc9...v1.0.9) (2016-02-18)


### Bug Fixes

* **calendar:** make getCalendarOptions sync ([78c5408](https://github.com/ionic-team/ionic-native/commit/78c5408))
* **geolocation:** call correct clearFunction ([9e86a40](https://github.com/ionic-team/ionic-native/commit/9e86a40))
* **plugin:** return originalMethod return value ([240f0f8](https://github.com/ionic-team/ionic-native/commit/240f0f8))
* **plugin:** use call for id based clearFunction ([c2fdf39](https://github.com/ionic-team/ionic-native/commit/c2fdf39))
* datepicker plugin, pluginref, and [@Cordova](https://github.com/Cordova) wrapper ([499ead3](https://github.com/ionic-team/ionic-native/commit/499ead3))


### Features

* **DatePicker:** Added DatePicker ([5afa58f](https://github.com/ionic-team/ionic-native/commit/5afa58f))
* **plugin:** add sync option to [@Cordova](https://github.com/Cordova) for sync functions ([17e3827](https://github.com/ionic-team/ionic-native/commit/17e3827))
* **plugin:** call clearFunction with original fn args ([8f27fc9](https://github.com/ionic-team/ionic-native/commit/8f27fc9))
* add app version plugin ([20cb01f](https://github.com/ionic-team/ionic-native/commit/20cb01f))
* add app version plugin ([8b78521](https://github.com/ionic-team/ionic-native/commit/8b78521))
* add apprate ([0dd4fec](https://github.com/ionic-team/ionic-native/commit/0dd4fec))
* add badge plugin ([7f01fb2](https://github.com/ionic-team/ionic-native/commit/7f01fb2))
* add badge plugin ([3088df4](https://github.com/ionic-team/ionic-native/commit/3088df4))
* add clipboard plugin ([0b6cca7](https://github.com/ionic-team/ionic-native/commit/0b6cca7))
* add clipboard plugin ([fa4c266](https://github.com/ionic-team/ionic-native/commit/fa4c266))



