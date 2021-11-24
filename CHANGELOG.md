## [5.37.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.37.0...v5.37.1) (2021-11-24)


### Features

* **purchases:** add `setAirshipChannelID` method ([#3856](https://github.com/danielsogl/awesome-cordova-plugins/issues/3856)) ([2f25396](https://github.com/danielsogl/awesome-cordova-plugins/commit/2f25396c944a86b92de86cdf2e841ee7179bef19))



# [5.37.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.36.1...v5.37.0) (2021-10-16)


### Features

* **adjust:** update wrapper for Adjust Cordova SDK v4.29.1 ([#3801](https://github.com/danielsogl/awesome-cordova-plugins/issues/3801)) ([02259e8](https://github.com/danielsogl/awesome-cordova-plugins/commit/02259e8873941e7171f317835666e8193ffc1b6a))
* **unvired-cordova-sdk:** Add a new function to register and receive push notifications. ([#3802](https://github.com/danielsogl/awesome-cordova-plugins/issues/3802)) ([7a19f7d](https://github.com/danielsogl/awesome-cordova-plugins/commit/7a19f7d7747857cab3feb62d524f66e34cad022d))



## [5.36.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.36.0...v5.36.1) (2021-10-01)


### Bug Fixes

* **barcode-scanner:** add `saveHistory` option ([#3713](https://github.com/danielsogl/awesome-cordova-plugins/issues/3713)) ([39ad4d1](https://github.com/danielsogl/awesome-cordova-plugins/commit/39ad4d13aa977ec744dfdf780ca0fa869a36f736)), closes [/github.com/phonegap/phonegap-plugin-barcodescanner/blob/v8.1.0/src/android/com/phonegap/plugins/barcodescanner/BarcodeScanner.java#L52](https://github.com//github.com/phonegap/phonegap-plugin-barcodescanner/blob/v8.1.0/src/android/com/phonegap/plugins/barcodescanner/BarcodeScanner.java/issues/L52)
* **build:** allow rxjs 7 closes [#3691](https://github.com/danielsogl/awesome-cordova-plugins/issues/3691) ([cd477bc](https://github.com/danielsogl/awesome-cordova-plugins/commit/cd477bce7c40c22eababb87f2f14c79ecb5b78ec))
* **purchases:** remove static for logIn, logOut methods ([#3709](https://github.com/danielsogl/awesome-cordova-plugins/issues/3709)) ([c6b65e9](https://github.com/danielsogl/awesome-cordova-plugins/commit/c6b65e9715a9086dfb4325957457c1fe3be217f4))


### Code Refactoring

* remove app-update plugin ([#3510](https://github.com/danielsogl/awesome-cordova-plugins/issues/3510)) ([f474d5b](https://github.com/danielsogl/awesome-cordova-plugins/commit/f474d5bae21e4c4f761370b9016a6f31d403bdb3))


### Features

* **adjust:** update wrapper for Adjust Cordova SDK v4.29.0 ([#3720](https://github.com/danielsogl/awesome-cordova-plugins/issues/3720)) ([68af9eb](https://github.com/danielsogl/awesome-cordova-plugins/commit/68af9eb525959d9ee9165471939baa8b3ceed2dc))
* **all-in-one-sdk:** add assist interface ([#3717](https://github.com/danielsogl/awesome-cordova-plugins/issues/3717)) ([8ebdc6e](https://github.com/danielsogl/awesome-cordova-plugins/commit/8ebdc6e563caa02bb7cf77b95a680876b052bdc1))
* **bluetooth-classic-serial:** add plugin ([#3729](https://github.com/danielsogl/awesome-cordova-plugins/issues/3729)) ([4c8de4d](https://github.com/danielsogl/awesome-cordova-plugins/commit/4c8de4d06fcb265e09d787821d74272c7f4aaa73))
* **facebook:** plugin updates ([#3721](https://github.com/danielsogl/awesome-cordova-plugins/issues/3721)) ([6f14bce](https://github.com/danielsogl/awesome-cordova-plugins/commit/6f14bce6ce2f27ebbe483c5578d0bfb46abad2e0))
* **facebook:** plugin updates ([#3728](https://github.com/danielsogl/awesome-cordova-plugins/issues/3728)) ([54c197a](https://github.com/danielsogl/awesome-cordova-plugins/commit/54c197a5a6acca28244d02bf685e7893de0a549f))
* **in-app-update:** add plugin ([#3714](https://github.com/danielsogl/awesome-cordova-plugins/issues/3714)) ([eb8d252](https://github.com/danielsogl/awesome-cordova-plugins/commit/eb8d2522b3ca9b585cde6e77c1a3f49c3e49b338))
* **play-install-referrer:** add plugin ([#3718](https://github.com/danielsogl/awesome-cordova-plugins/issues/3718)) ([9a1b964](https://github.com/danielsogl/awesome-cordova-plugins/commit/9a1b96462d2e854727935da65e3df06987438ceb))
* **preview-any-file:** new methods to preview or open files from url, path, assets or base64 ([#3612](https://github.com/danielsogl/awesome-cordova-plugins/issues/3612)) ([24379b0](https://github.com/danielsogl/awesome-cordova-plugins/commit/24379b047cbf7b0019d6516ce81b7685eda4e4d7))


### BREAKING CHANGES

* app-update plugin is removed for violating Google Play Store policies



# [5.35.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.34.0...v5.35.0) (2021-08-02)


### Bug Fixes

* **android-full-screen:** add correct return type ([#3677](https://github.com/danielsogl/awesome-cordova-plugins/issues/3677)) ([c5d6066](https://github.com/danielsogl/awesome-cordova-plugins/commit/c5d606633e0ce69c94eb99d205c655c5a0d94523)), closes [/github.com/mesmotronic/cordova-plugin-fullscreen/blob/master/src/android/com/mesmotronic/plugins/FullScreenPlugin.java#L129](https://github.com//github.com/mesmotronic/cordova-plugin-fullscreen/blob/master/src/android/com/mesmotronic/plugins/FullScreenPlugin.java/issues/L129)
* **checkout:** Update npm cordova plugin name ([#3694](https://github.com/danielsogl/awesome-cordova-plugins/issues/3694)) ([104cad1](https://github.com/danielsogl/awesome-cordova-plugins/commit/104cad14a31437816b5e272d5de4550eb1452311))
* **mobile-messaging:** revision of optional parameters ([#3667](https://github.com/danielsogl/awesome-cordova-plugins/issues/3667)) ([944d251](https://github.com/danielsogl/awesome-cordova-plugins/commit/944d25147f2c0b89d0e7acb1fa1a6fe7fa4941f7))
* **purchases:** remove duplicated imports ([1ff54f6](https://github.com/danielsogl/awesome-cordova-plugins/commit/1ff54f64da88d12b6f2bd48ef1d6b462fa6e1665))
* **smartlook:** fix SmartlookResetSession.resetUser type to boolean ([#3692](https://github.com/danielsogl/awesome-cordova-plugins/issues/3692)) ([5a42e8c](https://github.com/danielsogl/awesome-cordova-plugins/commit/5a42e8cadfc0d5269c4e06149c2d1ecf4ad721f7))
* **webserver:** update to maintained repo ([#3696](https://github.com/danielsogl/awesome-cordova-plugins/issues/3696)) ([d506795](https://github.com/danielsogl/awesome-cordova-plugins/commit/d50679571598405893d02911e84b0f283d525e5f))


### Features

* **approov-advanced-http:** add plugin ([#3682](https://github.com/danielsogl/awesome-cordova-plugins/issues/3682)) ([b206b42](https://github.com/danielsogl/awesome-cordova-plugins/commit/b206b42f85c6603ccb125f57ff5c0cc839d78e2c))
* **branch-io:** add sendBranchEvent method; deprecated sendCommerceEvent ([#3675](https://github.com/danielsogl/awesome-cordova-plugins/issues/3675)) ([4f13426](https://github.com/danielsogl/awesome-cordova-plugins/commit/4f13426a6dd820880f21c6e52a30a4db5f0c5c0a))
* **checkout:** add plugin ([#3687](https://github.com/danielsogl/awesome-cordova-plugins/issues/3687)) ([0dcbace](https://github.com/danielsogl/awesome-cordova-plugins/commit/0dcbace8223c5c9a4c3474c7bff291e00da06b0b))
* **CustomUiSDK:** added app invoke method ([#3699](https://github.com/danielsogl/awesome-cordova-plugins/issues/3699)) ([72335bf](https://github.com/danielsogl/awesome-cordova-plugins/commit/72335bfd59e061270a62dae33c9a258e8f0d3f7d))
* **hyper-track:** add interfaces to access new cordova plugin APIs ([#3698](https://github.com/danielsogl/awesome-cordova-plugins/issues/3698)) ([aae484d](https://github.com/danielsogl/awesome-cordova-plugins/commit/aae484dfe96bf36ece91f7aca617faa3c0650e28))
* **in-app-purchase-2:** added manageBilling method ([#3690](https://github.com/danielsogl/awesome-cordova-plugins/issues/3690)) ([383a884](https://github.com/danielsogl/awesome-cordova-plugins/commit/383a88463a16b47da8aeb79707f342411028f889))
* **paytabs:** add plugin ([#3678](https://github.com/danielsogl/awesome-cordova-plugins/issues/3678)) ([9dd719b](https://github.com/danielsogl/awesome-cordova-plugins/commit/9dd719bb07a1278f38e188fa075283e54e0654d1))
* **pollfish:** add plugin ([#3693](https://github.com/danielsogl/awesome-cordova-plugins/issues/3693)) ([8a00ccc](https://github.com/danielsogl/awesome-cordova-plugins/commit/8a00ccc43bf8aa0e90737e9ed8180be6f8005899))
* **purchases:** update to 2.3.0, add identity v3 ([#3702](https://github.com/danielsogl/awesome-cordova-plugins/issues/3702)) ([93b1e11](https://github.com/danielsogl/awesome-cordova-plugins/commit/93b1e1189849715af0f823675dda4c4587b7ed13))
* **unvired-cordova-sdk:** add ability to receive the JWT token ([#3671](https://github.com/danielsogl/awesome-cordova-plugins/issues/3671)) ([50d9110](https://github.com/danielsogl/awesome-cordova-plugins/commit/50d91103cc53afd91c42c78e549bf17e5d00dac7))
* **urbanairship:** add new methods: onDeepLink, onRegistration, onInboxUpdated, onShowInbox, onPushReceived, onNotificationOpened, onNotificationOptInStatus; fix return type for reattach method ([#3705](https://github.com/danielsogl/awesome-cordova-plugins/issues/3705)) ([815d1bb](https://github.com/danielsogl/awesome-cordova-plugins/commit/815d1bb1f8c6128203d2b0e2be70765718f88d7d))



## [5.33.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.33.0...v5.33.1) (2021-05-28)



# [5.33.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.32.1...v5.33.0) (2021-05-11)


### Bug Fixes

* **unvired-cordova-sdk:** Update the return type for startDiscoveryService api ([#3647](https://github.com/danielsogl/awesome-cordova-plugins/issues/3647)) ([b2da307](https://github.com/danielsogl/awesome-cordova-plugins/commit/b2da3078372c336864ab78528c5ae0c13a81a27b))


### Features

* **background-upload:** add INITIALIZED state ([#3658](https://github.com/danielsogl/awesome-cordova-plugins/issues/3658)) ([065e80c](https://github.com/danielsogl/awesome-cordova-plugins/commit/065e80cccf142d283075a800bdd46656cb613a0f))
* **ble:** update with setPin to allow set device pin ([#3652](https://github.com/danielsogl/awesome-cordova-plugins/issues/3652)) ([da4ce96](https://github.com/danielsogl/awesome-cordova-plugins/commit/da4ce96be4fc0dd763405f53498b11b00974f771))
* **branch-io:**  add initSessionWithCallback method ([#3660](https://github.com/danielsogl/awesome-cordova-plugins/issues/3660)) ([4435155](https://github.com/danielsogl/awesome-cordova-plugins/commit/443515582b380fe6643c6db19a5f17999e979d5b))
* **facebook:** add new methods ([#3654](https://github.com/danielsogl/awesome-cordova-plugins/issues/3654)) ([826f808](https://github.com/danielsogl/awesome-cordova-plugins/commit/826f8085a45c39eb2c43d60bd98d34ff5619ce82))
* **local-backup:** add plugin ([#3656](https://github.com/danielsogl/awesome-cordova-plugins/issues/3656)) ([c05b3e9](https://github.com/danielsogl/awesome-cordova-plugins/commit/c05b3e96722ee85c4771aa70236a77e1b60f60e2))
* **restart:** add plugin ([#3657](https://github.com/danielsogl/awesome-cordova-plugins/issues/3657)) ([5752294](https://github.com/danielsogl/awesome-cordova-plugins/commit/575229412b335a720a284ffe67839488f3de2996))
* **system-alert-window-permission:** add plugin ([#3659](https://github.com/danielsogl/awesome-cordova-plugins/issues/3659)) ([50f8a45](https://github.com/danielsogl/awesome-cordova-plugins/commit/50f8a452ad4e36e3554a417d2051f0389bf7d7d2))



## [5.32.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.32.0...v5.32.1) (2021-04-15)


### Bug Fixes

* **network:** onChange no longer causes error ([#3651](https://github.com/danielsogl/awesome-cordova-plugins/issues/3651)) ([16fee22](https://github.com/danielsogl/awesome-cordova-plugins/commit/16fee2268aed8c8bf26ef36f236349e222da3375)), closes [#3649](https://github.com/danielsogl/awesome-cordova-plugins/issues/3649)



# [5.32.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.31.1...v5.32.0) (2021-04-05)


### Bug Fixes

* **app-rate:** add missing types for onButtonClicked callback ([#3616](https://github.com/danielsogl/awesome-cordova-plugins/issues/3616)) ([4fb07fa](https://github.com/danielsogl/awesome-cordova-plugins/commit/4fb07fa8095419178fb0867940c47ea9a85b0f94))
* **bluetooth-le:** add missing status type value and add missing (optional) address property to NotifyParams interface ([#3613](https://github.com/danielsogl/awesome-cordova-plugins/issues/3613)) ([f32da73](https://github.com/danielsogl/awesome-cordova-plugins/commit/f32da73a875f87c5c3add3ddb9abb274bec6e0e5))
* **build:** publish Node (server) friendly bundles ([#3483](https://github.com/danielsogl/awesome-cordova-plugins/issues/3483)) ([b4227f2](https://github.com/danielsogl/awesome-cordova-plugins/commit/b4227f2114706276d63fcd5303ab992710d58472))
* **in-app-purchase-2:** fix typings for refresh ([#3632](https://github.com/danielsogl/awesome-cordova-plugins/issues/3632)) ([8dcb6be](https://github.com/danielsogl/awesome-cordova-plugins/commit/8dcb6be4ea76f650c16e38c573f18a8f56d16911)), closes [/github.com/j3k0/cordova-plugin-purchase/blob/dd6bf6f/doc/api.md#return-value-3](https://github.com//github.com/j3k0/cordova-plugin-purchase/blob/dd6bf6f/doc/api.md/issues/return-value-3)
* **unvired-cordova-sdk:** changes to the property names and updated documentation ([#3633](https://github.com/danielsogl/awesome-cordova-plugins/issues/3633)) ([158bf63](https://github.com/danielsogl/awesome-cordova-plugins/commit/158bf637cdf0ee6776ff82dc2109c6d11d2e1d33))


### Features

* **adjust:** add missing wrappers for cordova api ([#3528](https://github.com/danielsogl/awesome-cordova-plugins/issues/3528)) ([0932e11](https://github.com/danielsogl/awesome-cordova-plugins/commit/0932e113b266e835acf34a2ae09ce0f75a3890ee))
* **in-app-purchase-2:** adds typings for transaction ([#3621](https://github.com/danielsogl/awesome-cordova-plugins/issues/3621)) ([46d0cec](https://github.com/danielsogl/awesome-cordova-plugins/commit/46d0cecb271ed425856a08453a94e4568ce83878))
* **network:** declare connection enum with strings([#3630](https://github.com/danielsogl/awesome-cordova-plugins/issues/3630)) ([d698d59](https://github.com/danielsogl/awesome-cordova-plugins/commit/d698d5985b764f7ab8e143b163c45a3617da5e0e))
* **network:** update Network plugin ([#3608](https://github.com/danielsogl/awesome-cordova-plugins/issues/3608)) ([31ee7ef](https://github.com/danielsogl/awesome-cordova-plugins/commit/31ee7efc22faf8276db5d64a579b8ec44a29f457))
* **plugin:** add MS App Center LowMemory plugin ([#3619](https://github.com/danielsogl/awesome-cordova-plugins/issues/3619)) ([2cb5f5c](https://github.com/danielsogl/awesome-cordova-plugins/commit/2cb5f5c01065987c900f413dbb306c052bd1de86))
* **plugin:** add MS App Center shared plugin ([#3618](https://github.com/danielsogl/awesome-cordova-plugins/issues/3618)) ([3d7b777](https://github.com/danielsogl/awesome-cordova-plugins/commit/3d7b777b19183cbf9d274b24ac0106e3f45fce88))
* **plugin:** Text to Speech Advanced ([#3627](https://github.com/danielsogl/awesome-cordova-plugins/issues/3627)) ([ca190db](https://github.com/danielsogl/awesome-cordova-plugins/commit/ca190db829ae125d2da6d79e2c8673d5c7f5da9d))
* **power-optimization:**  plugin initial wrapper ([#3642](https://github.com/danielsogl/awesome-cordova-plugins/issues/3642)) ([9b7db58](https://github.com/danielsogl/awesome-cordova-plugins/commit/9b7db588a1f7608e7a7c9e8b4db7951dc98bd816))
* **preview-any-file:** add new methods for preview-any-file cordova ([#3643](https://github.com/danielsogl/awesome-cordova-plugins/issues/3643)) ([b8de7f0](https://github.com/danielsogl/awesome-cordova-plugins/commit/b8de7f0721da32faa67a1aa0d8a72846737018c7))
* **purchases:** bump cordova-plugin-purchases from 2.0.0 to 2.1.1 ([#3639](https://github.com/danielsogl/awesome-cordova-plugins/issues/3639)) ([5d71d0d](https://github.com/danielsogl/awesome-cordova-plugins/commit/5d71d0d2bbbbf8696a0d42e1e8b99fc1ee63ce16))
* **shortcuts-android:** add  cordova-plugin-shortcuts-android ([#3609](https://github.com/danielsogl/awesome-cordova-plugins/issues/3609)) ([2f69dd8](https://github.com/danielsogl/awesome-cordova-plugins/commit/2f69dd88cbb798f7fdc21c98f99f55bc6a8e88a7))



## [5.31.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.31.0...v5.31.1) (2021-01-23)


### Bug Fixes

* **build:** add correct build script typings ([f7a3c71](https://github.com/danielsogl/awesome-cordova-plugins/commit/f7a3c7127a17a53e911119fc87c7149d356315bb))



# [5.31.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.30.0...v5.31.0) (2021-01-23)


### Bug Fixes

* **firebase-messaging:** adjust  deleteToken/removeToken signature ([72c9960](https://github.com/danielsogl/awesome-cordova-plugins/commit/72c99603db5b1b2998c3d1e9a920e38f75e0f47b))
* **launch-navigator:** enableGeolocation and enableGeocoding typings ([#3584](https://github.com/danielsogl/awesome-cordova-plugins/issues/3584)) ([6b18c3d](https://github.com/danielsogl/awesome-cordova-plugins/commit/6b18c3d0614db1f525aaecfb9e09067537061ba9))
* **launchnavigator:** make appSelection accessible ([#3594](https://github.com/danielsogl/awesome-cordova-plugins/issues/3594)) ([26fd76d](https://github.com/danielsogl/awesome-cordova-plugins/commit/26fd76dad06764c288e2902c0edbe0dbb5e668c7))


### chore

* **package:** upgrade to angular 11 ([a96faf1](https://github.com/danielsogl/awesome-cordova-plugins/commit/a96faf13784ed30a5fc645dc769e44960242cb4f))


### Features

* **advanced-http:** duplicate methods sync to be able to abort requests ([#3575](https://github.com/danielsogl/awesome-cordova-plugins/issues/3575)) ([0efa33f](https://github.com/danielsogl/awesome-cordova-plugins/commit/0efa33f25746437cd3dc97585d380f177ed40e0b))
* **android-notch:** add cordova plugin wrapper ([#3592](https://github.com/danielsogl/awesome-cordova-plugins/issues/3592)) ([96890c7](https://github.com/danielsogl/awesome-cordova-plugins/commit/96890c7b92f34cf8d87eb98c0e4b5ddf9b68c6dc))
* **app-rate:** update plugin functions ([#3598](https://github.com/danielsogl/awesome-cordova-plugins/issues/3598)) ([3e92f64](https://github.com/danielsogl/awesome-cordova-plugins/commit/3e92f64484be0c949896b5fac7023ef0bd2fc746))
* **facebook:** add setAutoLogAppEventsEnabled method ([#3606](https://github.com/danielsogl/awesome-cordova-plugins/issues/3606)) ([b4f0f07](https://github.com/danielsogl/awesome-cordova-plugins/commit/b4f0f0706400f6500e48cd1305c20371977a6869))
* **facebook:** update api and logPurchase methods to include additional arguments([#3607](https://github.com/danielsogl/awesome-cordova-plugins/issues/3607)) ([e4b1719](https://github.com/danielsogl/awesome-cordova-plugins/commit/e4b171930dca0ebd3824cfa08861cfb80bf715d3))
* **firebase-authentication:** add signInWithApple method ([#3597](https://github.com/danielsogl/awesome-cordova-plugins/issues/3597)) ([e7bc1b6](https://github.com/danielsogl/awesome-cordova-plugins/commit/e7bc1b67095fc0c0dbb96b98f3dd39ecb255ec88))
* **in-app-purchase-2:** add redeem() for opening redeem code dialog in iOS ([#3581](https://github.com/danielsogl/awesome-cordova-plugins/issues/3581)) ([ddd269e](https://github.com/danielsogl/awesome-cordova-plugins/commit/ddd269e7ab2df69555ad7eec29bf0ed5a6c8fd04))
* **mobile-messaging:** add Lists and date time for customAttributes ([#3586](https://github.com/danielsogl/awesome-cordova-plugins/issues/3586)) ([bd8fbb3](https://github.com/danielsogl/awesome-cordova-plugins/commit/bd8fbb3e1fb4bfc84a7c9ba67e879d18868db8b5))
* **purchases:** bump cordova-plugin-purchases from 1.3.2 to 2.0.0 ([#3601](https://github.com/danielsogl/awesome-cordova-plugins/issues/3601)) ([bed8797](https://github.com/danielsogl/awesome-cordova-plugins/commit/bed8797a603398a047a97070fadd99b36e65a9be))
* **wonderpush:** remove isReady method. ([#3580](https://github.com/danielsogl/awesome-cordova-plugins/issues/3580)) ([182b403](https://github.com/danielsogl/awesome-cordova-plugins/commit/182b403f69492b96375a7be895da4ff486eccf7b))


### BREAKING CHANGES

* **package:** ionic-native now requires at least Angular 10 with ts-lib 2.0

Co-Authored-By: Daniel Sogl <mytechde@outlook.com>



# [5.30.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.29.0...v5.30.0) (2020-11-20)


### Bug Fixes

* **clevertap:** remove duplicated methods ([ba39f7e](https://github.com/danielsogl/awesome-cordova-plugins/commit/ba39f7e9f217ebe72e78bcfeae3d7e9ac07187ae)), closes [#3517](https://github.com/danielsogl/awesome-cordova-plugins/issues/3517) [#3491](https://github.com/danielsogl/awesome-cordova-plugins/issues/3491)


### Features

* **AllInOneSDK:** add check to restrict app invocation ([#3570](https://github.com/danielsogl/awesome-cordova-plugins/issues/3570)) ([fd0cddc](https://github.com/danielsogl/awesome-cordova-plugins/commit/fd0cddc9d0abdc3006e6cf16c1f80d0551b71cd2))
* **AppsFlyer:** update to 6.x.x ([#3563](https://github.com/danielsogl/awesome-cordova-plugins/issues/3563)) ([e486cfd](https://github.com/danielsogl/awesome-cordova-plugins/commit/e486cfd9bff2fd0bdd4ccfc9cb91b450b7218aef))
* **background-upload:** add plugin ([#3539](https://github.com/danielsogl/awesome-cordova-plugins/issues/3539)) ([13f6da6](https://github.com/danielsogl/awesome-cordova-plugins/commit/13f6da69ef622923bf2c746fbecb18a7cf959b82))
* **bluetooth-le:** Allow specifying transport mode for Android ([#3571](https://github.com/danielsogl/awesome-cordova-plugins/issues/3571)) ([b3d5baa](https://github.com/danielsogl/awesome-cordova-plugins/commit/b3d5baa46ed695344b08bd3e27be3b9f84bf6f0d))
* **core:** add `methodName` to Cordova Decorator ([#3558](https://github.com/danielsogl/awesome-cordova-plugins/issues/3558)) ([46853b4](https://github.com/danielsogl/awesome-cordova-plugins/commit/46853b42120b4b34b727ef0ae0274d1c8cb7bcd1)), closes [#3557](https://github.com/danielsogl/awesome-cordova-plugins/issues/3557)
* **CustomUiSDK:** add plugin for Paytm Custom UI SDK ([#3546](https://github.com/danielsogl/awesome-cordova-plugins/issues/3546)) ([bb10642](https://github.com/danielsogl/awesome-cordova-plugins/commit/bb1064225d276cffcd40ff9176b77ffb9d56ed8a))
* **dfu-update:** add DfuUpdate Plugin Wrapper ([#3514](https://github.com/danielsogl/awesome-cordova-plugins/issues/3514)) ([07d7ace](https://github.com/danielsogl/awesome-cordova-plugins/commit/07d7ace97d1b122424964f6e7330bf97710dcc8f))
* **firebase-dynamic-links:** Add missing method getDynamicLink() ([#3567](https://github.com/danielsogl/awesome-cordova-plugins/issues/3567)) ([d7c6f86](https://github.com/danielsogl/awesome-cordova-plugins/commit/d7c6f8628d176119cabae444c02f285a8c36997d))
* **firebase-vision:** add image labelling ([#3569](https://github.com/danielsogl/awesome-cordova-plugins/issues/3569)) ([af114f4](https://github.com/danielsogl/awesome-cordova-plugins/commit/af114f48e46b4f7f1ce66bb2906585158aa5cff0))
* **intercom:** added displayCarousel, displayArticle, setBottomPadding ([#3572](https://github.com/danielsogl/awesome-cordova-plugins/issues/3572)) ([68d245e](https://github.com/danielsogl/awesome-cordova-plugins/commit/68d245ef2c85dfff0aedb444db629d59986e06b4))
* **multiple-document-picker:** add plugin ([#3551](https://github.com/danielsogl/awesome-cordova-plugins/issues/3551)) ([78e9242](https://github.com/danielsogl/awesome-cordova-plugins/commit/78e92422abb5a645ed09bf61b7dc250462ccc742))
* **purchases:** update to plugin version 1.3.2 ([#3566](https://github.com/danielsogl/awesome-cordova-plugins/issues/3566)) ([0f197ad](https://github.com/danielsogl/awesome-cordova-plugins/commit/0f197ad9fcd4e56c0c61bd87c6aec76889af6ab2))
* **smartlook:** update to 1.6.0 ([#3562](https://github.com/danielsogl/awesome-cordova-plugins/issues/3562)) ([f71b65d](https://github.com/danielsogl/awesome-cordova-plugins/commit/f71b65d6a79d22175c27b960f27ef51ea6a87ed4))



# [5.29.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.28.0...v5.29.0) (2020-10-16)


### Bug Fixes

* **diagnostics:** locationAccuracyAuthorization Property missing in build ([#3540](https://github.com/danielsogl/awesome-cordova-plugins/issues/3540)) ([c62c137](https://github.com/danielsogl/awesome-cordova-plugins/commit/c62c13772307c02e7581c15ec6f5c94309927cc6))
* **http:** add missing type to serialiser property ([#3532](https://github.com/danielsogl/awesome-cordova-plugins/issues/3532)) ([7b0195b](https://github.com/danielsogl/awesome-cordova-plugins/commit/7b0195bdf441532106df6eb2baf5a9ada1068761))
* **in-app-purchase-2:** change in-app-purchase-2 plugin id ([#3553](https://github.com/danielsogl/awesome-cordova-plugins/issues/3553)) ([ce9db34](https://github.com/danielsogl/awesome-cordova-plugins/commit/ce9db34e2439d4fefd1b4071bffb6e5c8daab634))
* **music-controls:** update associated cordova plugin ([#3543](https://github.com/danielsogl/awesome-cordova-plugins/issues/3543)) ([4766ec7](https://github.com/danielsogl/awesome-cordova-plugins/commit/4766ec7a35d7e7b0ab31d3db8953f2ef4bdcb6df))


### Features

* **adjust:** updating to match official typings ([#3523](https://github.com/danielsogl/awesome-cordova-plugins/issues/3523)) ([5a77eab](https://github.com/danielsogl/awesome-cordova-plugins/commit/5a77eabf7644a79369da40eb929b6edfcb83de07))
* **all-in-one-sdk:** add plugin for Paytm All-in-One SDK ([#3536](https://github.com/danielsogl/awesome-cordova-plugins/issues/3536)) ([1f48c31](https://github.com/danielsogl/awesome-cordova-plugins/commit/1f48c31a8eaf5079ec8e391b21ea5ce3fa9e1446))
* **appsfyler:** add property waitForATTUserAuthorization to AppsflyerOptions ([#3541](https://github.com/danielsogl/awesome-cordova-plugins/issues/3541)) ([3340e9a](https://github.com/danielsogl/awesome-cordova-plugins/commit/3340e9a6949f798d5ec540a78c7ac46a5dc884b2))
* **fingerprint-air:** add new functions ([#3530](https://github.com/danielsogl/awesome-cordova-plugins/issues/3530)) ([99e6a53](https://github.com/danielsogl/awesome-cordova-plugins/commit/99e6a5398fb2923991d7236475913eb17e8640c0))
* **firebase-x:** add setLanguageCode method for auth ([#3548](https://github.com/danielsogl/awesome-cordova-plugins/issues/3548)) ([5d1b5d5](https://github.com/danielsogl/awesome-cordova-plugins/commit/5d1b5d5fda311003d0ae20e27a06d6bd443554be))
* **mobile-messaging:** add new fields to Message type and new method to display chat view ([#3531](https://github.com/danielsogl/awesome-cordova-plugins/issues/3531)) ([14ec32b](https://github.com/danielsogl/awesome-cordova-plugins/commit/14ec32b83c603fc5a079eabf794b7dadce867358))
* **purchases:** update to plugin version 1.3.0 ([#3547](https://github.com/danielsogl/awesome-cordova-plugins/issues/3547)) ([b5f7f95](https://github.com/danielsogl/awesome-cordova-plugins/commit/b5f7f952df06828a07f4ab013ce52fddc8ccafdf))
* **social-sharing:** Add missing method shareViaWhatsAppToPhone([#3513](https://github.com/danielsogl/awesome-cordova-plugins/issues/3513)) ([f3ce3c4](https://github.com/danielsogl/awesome-cordova-plugins/commit/f3ce3c4930f87f6f2dd023dc28ef924faee05a84))



# [5.28.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.27.0...v5.28.0) (2020-08-14)


### Bug Fixes

* **ble:** add missing method "isLocationEnabled" ([#3495](https://github.com/danielsogl/awesome-cordova-plugins/issues/3495)) ([b4462d5](https://github.com/danielsogl/awesome-cordova-plugins/commit/b4462d5e6c12f144412001cade1020b5f88b4ae5))
* **geolocation:** [#3303](https://github.com/danielsogl/awesome-cordova-plugins/issues/3303) geolocation watchPosition return type ([#3470](https://github.com/danielsogl/awesome-cordova-plugins/issues/3470)) ([579170a](https://github.com/danielsogl/awesome-cordova-plugins/commit/579170a99ea8a53634631b76ffa19b6b635c1d03))
* **hyper-track:** update to the modern sdk ([#3508](https://github.com/danielsogl/awesome-cordova-plugins/issues/3508)) ([44f86f3](https://github.com/danielsogl/awesome-cordova-plugins/commit/44f86f3ce5f6912f1cc0b4596e43066571c96b44))
* **ibeacon:** undefined locationManager ([#3505](https://github.com/danielsogl/awesome-cordova-plugins/issues/3505)) ([1ffad79](https://github.com/danielsogl/awesome-cordova-plugins/commit/1ffad79320f83038d1fc09e9112c40c86d948416))
* **metrix:** change firebase api ([#3473](https://github.com/danielsogl/awesome-cordova-plugins/issues/3473)) ([b0ffb0e](https://github.com/danielsogl/awesome-cordova-plugins/commit/b0ffb0ec4a035097c8a413f31b2382dae1eda4c7))


### Features

* **clover-go:** add support to pass signature and void payment ([#3485](https://github.com/danielsogl/awesome-cordova-plugins/issues/3485)) ([26d10ef](https://github.com/danielsogl/awesome-cordova-plugins/commit/26d10ef63346782e6d8ed37ca89bd2dd7402aa0a))
* **diagnostics:** Add support for new iOS14-LocationAccuracy Permission ([#3490](https://github.com/danielsogl/awesome-cordova-plugins/issues/3490)) ([ccca644](https://github.com/danielsogl/awesome-cordova-plugins/commit/ccca644134999365a729b4a7d554da6a011eb693))
* **nfc:** update to phonegap-nfc@1.2.0 ([#3486](https://github.com/danielsogl/awesome-cordova-plugins/issues/3486)) ([d7ccd45](https://github.com/danielsogl/awesome-cordova-plugins/commit/d7ccd454fb757d8d3be57a70bfa7fb3c269e3318))
* **onesignal:** add in-app messages methods ([#3481](https://github.com/danielsogl/awesome-cordova-plugins/issues/3481)) ([eec3fec](https://github.com/danielsogl/awesome-cordova-plugins/commit/eec3fec7ff820e96443e6e3f0d7bf96dac359038))
* **purchases:** update to plugin version 1.2.0 ([#3482](https://github.com/danielsogl/awesome-cordova-plugins/issues/3482)) ([a010bb1](https://github.com/danielsogl/awesome-cordova-plugins/commit/a010bb186964b8b825ab80f9cf6092794ee2e4b1))
* **smartlook:** update to 1.5.2 ([#3498](https://github.com/danielsogl/awesome-cordova-plugins/issues/3498)) ([5aa5757](https://github.com/danielsogl/awesome-cordova-plugins/commit/5aa57577956c13e8fe34d2c658690df7daf86ef4))



# [5.27.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.26.0...v5.27.0) (2020-06-23)


### Bug Fixes

* **app-rate:** Add missing "openUrl" property to AppRatePreferences object ([#3456](https://github.com/danielsogl/awesome-cordova-plugins/issues/3456)) ([fe21b5b](https://github.com/danielsogl/awesome-cordova-plugins/commit/fe21b5b97c150e16740b91bf958f7110b2e35664))
* **camera-preview:** tapFocus ([#3467](https://github.com/danielsogl/awesome-cordova-plugins/issues/3467)) ([7c95e66](https://github.com/danielsogl/awesome-cordova-plugins/commit/7c95e660215e96ce238c0194bbe91ba16886a78a))
* **firebase-x:** add fakeVerificationCode param to verifyPhoneNumber ([#3451](https://github.com/danielsogl/awesome-cordova-plugins/issues/3451)) ([191c7a0](https://github.com/danielsogl/awesome-cordova-plugins/commit/191c7a044d15c31a4bba4c23010cdd728398eb89))
* **firebase-x:** indicate callback methods to verifyPhoneNumber ([#3457](https://github.com/danielsogl/awesome-cordova-plugins/issues/3457)) ([66896b2](https://github.com/danielsogl/awesome-cordova-plugins/commit/66896b2632250ee8a33af909f7c0e008c6abc872))
* **jumio:** update plugin reference and source ([#3428](https://github.com/danielsogl/awesome-cordova-plugins/issues/3428)) ([389a3fb](https://github.com/danielsogl/awesome-cordova-plugins/commit/389a3fb215711deb5e5404fd5b268b20825af958))
* **launch-review:** Allow rating() callback to be invoked multiple times ([#3455](https://github.com/danielsogl/awesome-cordova-plugins/issues/3455)) ([40b9295](https://github.com/danielsogl/awesome-cordova-plugins/commit/40b9295de64e27c652f58fa37a4bb50c6bc2cdc4))


### Features

* **admob:** add interfaces and method typings ([#3461](https://github.com/danielsogl/awesome-cordova-plugins/issues/3461)) ([b2afc13](https://github.com/danielsogl/awesome-cordova-plugins/commit/b2afc131caeea56b9e01edc6169fdce9b57e9569))
* **broadcaster:** align plugin API to version 4.1.0 ([#3432](https://github.com/danielsogl/awesome-cordova-plugins/issues/3432)) ([324334e](https://github.com/danielsogl/awesome-cordova-plugins/commit/324334eb287dd8e3e82b2d5d64e8fb06b496a1f0))
* **build-info:** add plugin ([#3465](https://github.com/danielsogl/awesome-cordova-plugins/issues/3465)) ([7b998b9](https://github.com/danielsogl/awesome-cordova-plugins/commit/7b998b96449cdc1abf90548115caa0435ee89a84))
* **camera-preview:** add record video functions ([#3463](https://github.com/danielsogl/awesome-cordova-plugins/issues/3463)) ([7ae1df2](https://github.com/danielsogl/awesome-cordova-plugins/commit/7ae1df2489b8ff524c1ba1bfa7624dcb50247905))
* **chooser:** add getFileMetadata ([#3425](https://github.com/danielsogl/awesome-cordova-plugins/issues/3425)) ([79c3284](https://github.com/danielsogl/awesome-cordova-plugins/commit/79c3284434fbb580642b44d3d91cf01c82e52d0f))
* **CleverTap:** Update Plugin for Parity Support ([#3435](https://github.com/danielsogl/awesome-cordova-plugins/issues/3435)) ([3df35b4](https://github.com/danielsogl/awesome-cordova-plugins/commit/3df35b40ce49b1a176ae03a3516df37ceb7cdec6))
* **fcm:** add requestPushPermissionIOS and createNotificationChannelAndroid functions ([#3430](https://github.com/danielsogl/awesome-cordova-plugins/issues/3430)) ([ef17dc5](https://github.com/danielsogl/awesome-cordova-plugins/commit/ef17dc5d07e401369fa8353913a80b36f3cfdc4c))
* **firebase-dynamic-links:** Update plugin for parity ([#3437](https://github.com/danielsogl/awesome-cordova-plugins/issues/3437)) ([7f09758](https://github.com/danielsogl/awesome-cordova-plugins/commit/7f0975803f2e84ed536922dde542e4d50549f919))
* **firebase-vision:** add barcodeDetector ([#3426](https://github.com/danielsogl/awesome-cordova-plugins/issues/3426)) ([1aacb48](https://github.com/danielsogl/awesome-cordova-plugins/commit/1aacb487a4577e2f6854e59f30f215c301ad60ee))
* **firebase-x:** add missing methods from plugin, incl. authenticateUserWithApple ([#3458](https://github.com/danielsogl/awesome-cordova-plugins/issues/3458)) ([32203e9](https://github.com/danielsogl/awesome-cordova-plugins/commit/32203e9ac1a0ca5368b320d1b05f44da3addd2bf))
* **ios-aswebauthenticationsession:** add plugin ([#3421](https://github.com/danielsogl/awesome-cordova-plugins/issues/3421)) ([742ff65](https://github.com/danielsogl/awesome-cordova-plugins/commit/742ff655968c908911b3174d8a9893c6716b20d8))
* **vibes:** add support for inbox messaging ([#3466](https://github.com/danielsogl/awesome-cordova-plugins/issues/3466)) ([9bf1eaf](https://github.com/danielsogl/awesome-cordova-plugins/commit/9bf1eafc4eb1e3562dfeff54f87f1da95d0a9fe4))



# [5.26.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.25.0...v5.26.0) (2020-05-16)


### Bug Fixes

* **secure-storage-echo:** method is inaccessible when device is not secure [#3322](https://github.com/danielsogl/awesome-cordova-plugins/issues/3322) ([#3413](https://github.com/danielsogl/awesome-cordova-plugins/issues/3413)) ([e715498](https://github.com/danielsogl/awesome-cordova-plugins/commit/e715498d3323975ea34951c933d4ad6b0b8f3b10))
* **secure-storage-echo:** method is inaccessible when device is not secure [#3322](https://github.com/danielsogl/awesome-cordova-plugins/issues/3322) ([#3424](https://github.com/danielsogl/awesome-cordova-plugins/issues/3424)) ([e59a989](https://github.com/danielsogl/awesome-cordova-plugins/commit/e59a989fab7abfc08d8cafdd3151ec0d9f868a2b))


### Features

* **firebase-x:** add getCurrentUser ([#3389](https://github.com/danielsogl/awesome-cordova-plugins/issues/3389)) ([809e5ac](https://github.com/danielsogl/awesome-cordova-plugins/commit/809e5ac14d3f08b51884d846f7de1d731b8b9c0a)), closes [#3356](https://github.com/danielsogl/awesome-cordova-plugins/issues/3356)
* **in-app-purchase-2:** add update function ([#3416](https://github.com/danielsogl/awesome-cordova-plugins/issues/3416)) ([9892ce7](https://github.com/danielsogl/awesome-cordova-plugins/commit/9892ce7a615d68dc33126705fd6211c0ce2d4fef)), closes [#3411](https://github.com/danielsogl/awesome-cordova-plugins/issues/3411)
* **jumio:** add plugin ([#3423](https://github.com/danielsogl/awesome-cordova-plugins/issues/3423)) ([13a8a6f](https://github.com/danielsogl/awesome-cordova-plugins/commit/13a8a6f1d9c23fdff9421a7f851ba0e8f4f3e1e6))
* **lib:** add prettier ([f5133c6](https://github.com/danielsogl/awesome-cordova-plugins/commit/f5133c691dc3803542a42e47ac0ca78b95d38a54))
* **metrix:** add plugin ([#3419](https://github.com/danielsogl/awesome-cordova-plugins/issues/3419)) ([26c9120](https://github.com/danielsogl/awesome-cordova-plugins/commit/26c912092c571aa7ffd31a8303f3819e8780644b))
* **native-view:** add plugin ([#3418](https://github.com/danielsogl/awesome-cordova-plugins/issues/3418)) ([180b665](https://github.com/danielsogl/awesome-cordova-plugins/commit/180b665c4b2071233b50de0c5e792df09f17e36f))



# [5.25.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.24.0...v5.25.0) (2020-05-05)


### Bug Fixes

* **bluetooth-le:** change reconnect return signature to Observable<DeviceInfo> fixes [#3374](https://github.com/danielsogl/awesome-cordova-plugins/issues/3374) ([#3394](https://github.com/danielsogl/awesome-cordova-plugins/issues/3394)) ([8eacf88](https://github.com/danielsogl/awesome-cordova-plugins/commit/8eacf8817cbd718f8286d81c4de96860b959866d))
* **firebase-x:** return document id ([#3386](https://github.com/danielsogl/awesome-cordova-plugins/issues/3386)) ([61bbe39](https://github.com/danielsogl/awesome-cordova-plugins/commit/61bbe3980ce8f13a92ea5c9f4eaee8311ef5c23b)), closes [#3385](https://github.com/danielsogl/awesome-cordova-plugins/issues/3385)


### Features

* **admob-plus:** add setDevMode ([#3387](https://github.com/danielsogl/awesome-cordova-plugins/issues/3387)) ([e09592d](https://github.com/danielsogl/awesome-cordova-plugins/commit/e09592d2b94332ba1932cac125c0b8c4ce457ac7)), closes [#3384](https://github.com/danielsogl/awesome-cordova-plugins/issues/3384)
* **appsflyer:** added registerUninstall function ([#3401](https://github.com/danielsogl/awesome-cordova-plugins/issues/3401)) ([c403330](https://github.com/danielsogl/awesome-cordova-plugins/commit/c403330c0a1e8b2fa7cb53b3dfe4dd66f2b29d24))
* **background-fetch:** add taskId to finish method ([#3390](https://github.com/danielsogl/awesome-cordova-plugins/issues/3390)) ([eceb7ca](https://github.com/danielsogl/awesome-cordova-plugins/commit/eceb7ca1fcc8516ff3ede2115a5fadcfc47a0601)), closes [#3361](https://github.com/danielsogl/awesome-cordova-plugins/issues/3361)
* **firebase-vision:** add plugin ([#3400](https://github.com/danielsogl/awesome-cordova-plugins/issues/3400)) ([a3d54a3](https://github.com/danielsogl/awesome-cordova-plugins/commit/a3d54a34b83d1c0515839cfbc39021dedccb3454))
* **firebase-x:** add getId ([#3388](https://github.com/danielsogl/awesome-cordova-plugins/issues/3388)) ([3d46715](https://github.com/danielsogl/awesome-cordova-plugins/commit/3d46715b9c2427b7b5277bd13c780cb1f87df727)), closes [#3378](https://github.com/danielsogl/awesome-cordova-plugins/issues/3378)
* **native-storage:** add initWithSuiteName ([#3365](https://github.com/danielsogl/awesome-cordova-plugins/issues/3365)) ([a391e37](https://github.com/danielsogl/awesome-cordova-plugins/commit/a391e37f9045769219883688023de8d14181c04f))
* **pushape-push:** add plugin ([#3405](https://github.com/danielsogl/awesome-cordova-plugins/issues/3405)) ([825b2d6](https://github.com/danielsogl/awesome-cordova-plugins/commit/825b2d6970c40e473b3db8f774bb6a8c3acb41cb))
* **smartlook:** new api methods ([#3402](https://github.com/danielsogl/awesome-cordova-plugins/issues/3402)) ([ea053cc](https://github.com/danielsogl/awesome-cordova-plugins/commit/ea053ccbe63308a6d9cd9fd6b84a7bfaf188f487))
* **vibes-push-plugin:** add Vibes Push plugin wrapper ([#3368](https://github.com/danielsogl/awesome-cordova-plugins/issues/3368)) ([1db0ff7](https://github.com/danielsogl/awesome-cordova-plugins/commit/1db0ff741f17f87a583e5c84307ef63efdf82c76))



# [5.24.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.23.0...v5.24.0) (2020-04-17)


### Bug Fixes

* **health:** HealthQueryOptionsAggregated bucket optional ([#3370](https://github.com/danielsogl/awesome-cordova-plugins/issues/3370)) ([96e9b19](https://github.com/danielsogl/awesome-cordova-plugins/commit/96e9b19732f4bc59c7525a12083e002ee2f75616))
* **iamport-cordova:** fix data type of card_quota([#3372](https://github.com/danielsogl/awesome-cordova-plugins/issues/3372)) ([47b85a8](https://github.com/danielsogl/awesome-cordova-plugins/commit/47b85a80a9fa8d22804f1dae78b6a15a31307f17))
* **in-app-browser:** add missing 'no' type ([#3359](https://github.com/danielsogl/awesome-cordova-plugins/issues/3359)) ([83bb4a9](https://github.com/danielsogl/awesome-cordova-plugins/commit/83bb4a96f940d162233807f4f3312b00b7243e41))


### Features

* **clover-go:** add CloverGo plugin ([#3376](https://github.com/danielsogl/awesome-cordova-plugins/issues/3376)) ([be05235](https://github.com/danielsogl/awesome-cordova-plugins/commit/be05235a6e206e25b2d6f1af4bb9bf1ef832bbf8))
* **firebase-messaging:** add getInstanceId ([#3364](https://github.com/danielsogl/awesome-cordova-plugins/issues/3364)) ([e1350a2](https://github.com/danielsogl/awesome-cordova-plugins/commit/e1350a2e7ea7bcab1ffd27d2f5508b46c47e31b9))
* **gao-de-location:** update wrapper to match version 2.0.5 ([#3358](https://github.com/danielsogl/awesome-cordova-plugins/issues/3358)) ([bfee712](https://github.com/danielsogl/awesome-cordova-plugins/commit/bfee712cdcc844554524b332d2f65678b1b0992d))
* **MobileMessaging:** add support for CustomEvents  ([#3373](https://github.com/danielsogl/awesome-cordova-plugins/issues/3373)) ([3af9c48](https://github.com/danielsogl/awesome-cordova-plugins/commit/3af9c48f05d81050c9794da09f720587ebc40f65))
* **nfc:** update to phonegap-nfc@1.1.1 ([#3381](https://github.com/danielsogl/awesome-cordova-plugins/issues/3381)) ([8c25d1e](https://github.com/danielsogl/awesome-cordova-plugins/commit/8c25d1e311d29394eb1cf86b65fcc11aa4ea8804))
* **purchases:** update to the latest plugin version ([#3371](https://github.com/danielsogl/awesome-cordova-plugins/issues/3371)) ([739fe89](https://github.com/danielsogl/awesome-cordova-plugins/commit/739fe8940000ddbe843ca821dbcc2c928850cf48))
* **shop-checkout:** add plugin ([#3337](https://github.com/danielsogl/awesome-cordova-plugins/issues/3337)) ([83196bc](https://github.com/danielsogl/awesome-cordova-plugins/commit/83196bc947f18f1c3ffd7f7b6ad4431e05516527))
* **usabilla-cordova-sdk:** add plugin ([#3362](https://github.com/danielsogl/awesome-cordova-plugins/issues/3362)) ([9e2f670](https://github.com/danielsogl/awesome-cordova-plugins/commit/9e2f670d9d43a2cb63ec400b6c8e0f45b3a6991a))
* **wechat:** add openMiniProgram method ([#3380](https://github.com/danielsogl/awesome-cordova-plugins/issues/3380)) ([6458640](https://github.com/danielsogl/awesome-cordova-plugins/commit/6458640ba7c0af5c4a16ad3bfbdc78447719f147))



# [5.23.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.22.0...v5.23.0) (2020-03-22)


### Bug Fixes

* **admob:** fix interstitialAdId parameter typo ([#3348](https://github.com/danielsogl/awesome-cordova-plugins/issues/3348)) ([fe89f2b](https://github.com/danielsogl/awesome-cordova-plugins/commit/fe89f2bf96ae4acf85edbff22ea2b0f4c69206a2))
* **cordova-firebase-x:** updated methods ([#3339](https://github.com/danielsogl/awesome-cordova-plugins/issues/3339)) ([5471696](https://github.com/danielsogl/awesome-cordova-plugins/commit/5471696664b82ee4c42614927717dc664aafae6c))
* **email-composer:** fix error when no mail apps ([#3347](https://github.com/danielsogl/awesome-cordova-plugins/issues/3347)) ([7bcbca7](https://github.com/danielsogl/awesome-cordova-plugins/commit/7bcbca7696af7020191ed36c814aefde28398bd0))
* **unvired-cordova-sdk:** fix the data type for ResultType and OutboxLockStatus ([#3334](https://github.com/danielsogl/awesome-cordova-plugins/issues/3334)) ([2d1e2db](https://github.com/danielsogl/awesome-cordova-plugins/commit/2d1e2db9cdc885cda3fe2fe448857bb148efe219))


### Features

* **admob-free:** add missing config properties ([#3344](https://github.com/danielsogl/awesome-cordova-plugins/issues/3344)) ([a0f9163](https://github.com/danielsogl/awesome-cordova-plugins/commit/a0f91635fc4091af9dcb9b245041cdd7eea86a60))
* **in-app-purchase-2): feat(in-app-purchase-2:** update types and add getApplicationUsername function ([#3320](https://github.com/danielsogl/awesome-cordova-plugins/issues/3320)) ([664e257](https://github.com/danielsogl/awesome-cordova-plugins/commit/664e2574424930c3220ee579a657bda226a0c2e9))
* **mobile-messaging:** add plugin ([#3338](https://github.com/danielsogl/awesome-cordova-plugins/issues/3338)) ([96e6711](https://github.com/danielsogl/awesome-cordova-plugins/commit/96e6711776cc5a774d4e32abd1fd752fa20f4881))



# [5.22.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.21.6...v5.22.0) (2020-02-28)


### Bug Fixes

* **fcm:** add missing clearAllNotifications, hasPermission and getAPNSToken ([#3331](https://github.com/danielsogl/awesome-cordova-plugins/issues/3331)) ([18bee4e](https://github.com/danielsogl/awesome-cordova-plugins/commit/18bee4e2982fd55bff4918758619a42b2be3916c)), closes [/github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated#version-400-12102019](https://github.com//github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated/issues/version-400-12102019) [/github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated#version-320-16092019](https://github.com//github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated/issues/version-320-16092019)


### Features

* **iamport-cordova:** add iamport-cordova plugin on ionic-native ([#3285](https://github.com/danielsogl/awesome-cordova-plugins/issues/3285)) ([6277d8e](https://github.com/danielsogl/awesome-cordova-plugins/commit/6277d8e9978f77fa0b92ff2129a79ae2834b280d))
* **unvired-cordova-sdk:** add new functions to lock and unlock sending of data ([#3329](https://github.com/danielsogl/awesome-cordova-plugins/issues/3329)) ([53213bb](https://github.com/danielsogl/awesome-cordova-plugins/commit/53213bb57ab8ef2896504f2d21231276cf3eb6b6))



## [5.21.6](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.21.5...v5.21.6) (2020-02-22)


### Bug Fixes

* **apple-pay:** fix PKPaymentRequest must have valid merchantCapabilities in iOS 12 & 13 [#3314](https://github.com/danielsogl/awesome-cordova-plugins/issues/3314) ([a8eebb9](https://github.com/danielsogl/awesome-cordova-plugins/commit/a8eebb9212b23fb1fe9ba00a5981a81e46dcdbad))
* **secure-storage:** method is inaccessible when device is not secure [#3322](https://github.com/danielsogl/awesome-cordova-plugins/issues/3322) ([300f75e](https://github.com/danielsogl/awesome-cordova-plugins/commit/300f75ef929688783563d0070e723f23bd76c728))


### Features

* **keychain-touch-id:** added userAuthenticationRequired parameter to save method ([#3324](https://github.com/danielsogl/awesome-cordova-plugins/issues/3324)) ([4521810](https://github.com/danielsogl/awesome-cordova-plugins/commit/45218102f3d9e9d5b3e9f53ba85af2f9d9926ec1))



## [5.21.5](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.21.4...v5.21.5) (2020-02-12)



## [5.21.4](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.21.3...v5.21.4) (2020-02-11)


### Bug Fixes

* **build:** corrects npm publishing task ([df5f832](https://github.com/danielsogl/awesome-cordova-plugins/commit/df5f8326643b209e68446159e79fc2528d2d3a80)), closes [#3311](https://github.com/danielsogl/awesome-cordova-plugins/issues/3311)



## [5.21.3](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.21.2...v5.21.3) (2020-02-10)


### Reverts

* Revert "chore(package): compile with angular 9" ([2913a68](https://github.com/danielsogl/awesome-cordova-plugins/commit/2913a68d8ff3625271500aa3df265aa5bf236665))
* Revert "chore(package): refresh package-lock" ([4d34643](https://github.com/danielsogl/awesome-cordova-plugins/commit/4d346437f0fe94f7bfefa944c12587ade48d8aeb))



## [5.21.2](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.21.1...v5.21.2) (2020-02-09)



## [5.21.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.21.0...v5.21.1) (2020-02-09)



# [5.21.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.20.0...v5.21.0) (2020-02-07)


### Bug Fixes

* **background-geolocation:** change syncThreshold type to number ([#3299](https://github.com/danielsogl/awesome-cordova-plugins/issues/3299)) ([817f0d1](https://github.com/danielsogl/awesome-cordova-plugins/commit/817f0d11b957d9a1f92a0d5916a274a8fb7d80c3))
* **purchases:** update to cordova-plugin-purchases@1.0.4 ([#3301](https://github.com/danielsogl/awesome-cordova-plugins/issues/3301)) ([c8d3afc](https://github.com/danielsogl/awesome-cordova-plugins/commit/c8d3afc91d85d4a46ea103e02c3f74d391c80be3))


### Features

* angular ivy support ([#3309](https://github.com/danielsogl/awesome-cordova-plugins/issues/3309)) ([614ade4](https://github.com/danielsogl/awesome-cordova-plugins/commit/614ade447f30f59665599229b2a3250db53a6493))
* **unvired-cordova-sdk:** add new property containing HTTP status code ([#3302](https://github.com/danielsogl/awesome-cordova-plugins/issues/3302)) ([3b18135](https://github.com/danielsogl/awesome-cordova-plugins/commit/3b18135ebffe382fe3b7752a9e8e4957105fd52d))



# [5.20.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.19.1...v5.20.0) (2020-01-27)


### Features

* **cordova-secure-storage-echo:** add extra options interface ([#3295](https://github.com/danielsogl/awesome-cordova-plugins/issues/3295)) ([95a67a8](https://github.com/danielsogl/awesome-cordova-plugins/commit/95a67a813d299de513ec592b082501a2e1c06783))
* **http:** update declaration for cordova plugin version 2.4.0 ([#3298](https://github.com/danielsogl/awesome-cordova-plugins/issues/3298)) ([799cf94](https://github.com/danielsogl/awesome-cordova-plugins/commit/799cf9467486f98d836c740e0defe789ce448b7e))
* **wifiwizard2:** add cordova-plugin-wifiwizard2 typescript definitions ([#3288](https://github.com/danielsogl/awesome-cordova-plugins/issues/3288)) ([41895c1](https://github.com/danielsogl/awesome-cordova-plugins/commit/41895c165cadbd8f859777c12bd8467c904eb12f))



## [5.19.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.19.0...v5.19.1) (2020-01-03)


### Bug Fixes

* **in-app-browser:** adds missing customscheme type ([#3276](https://github.com/danielsogl/awesome-cordova-plugins/issues/3276)) ([240feba](https://github.com/danielsogl/awesome-cordova-plugins/commit/240feba76babb715dc08cb9c3f1fe3cea6447b9a))


### Features

* **firebase-x:** add missing methods, parameter ([#3273](https://github.com/danielsogl/awesome-cordova-plugins/issues/3273)) ([e55a1e1](https://github.com/danielsogl/awesome-cordova-plugins/commit/e55a1e1117f8e9291fbbb088b9c09bb4c5d8f673))



# [5.19.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.18.0...v5.19.0) (2019-12-27)


### Features

* **app-update:** skip dialog boxes support ([#3267](https://github.com/danielsogl/awesome-cordova-plugins/issues/3267)) ([a74c894](https://github.com/danielsogl/awesome-cordova-plugins/commit/a74c894064a6d34c1ec1bc4fb7de8577173841a1))
* **cordova-plugin-mlkit-translate:** Add plugin ([#3261](https://github.com/danielsogl/awesome-cordova-plugins/issues/3261)) ([ecb0bb2](https://github.com/danielsogl/awesome-cordova-plugins/commit/ecb0bb22edc5ba0c74c8cd3430c32da8322e06a0))
* **firebase-analytics:** add resetAnalyticsData to firebase-analytics ([#3264](https://github.com/danielsogl/awesome-cordova-plugins/issues/3264)) ([4d7e937](https://github.com/danielsogl/awesome-cordova-plugins/commit/4d7e937d7a42c73293598c060f4f7420cb414e4d))
* **in-app-browser:** add data in Event interface ([#3258](https://github.com/danielsogl/awesome-cordova-plugins/issues/3258)) ([129ba4d](https://github.com/danielsogl/awesome-cordova-plugins/commit/129ba4dbe25747b4ca48e8326efa2ec656dd71e9)), closes [#3244](https://github.com/danielsogl/awesome-cordova-plugins/issues/3244)
* **pdf-generator:** add new pluign ([#3268](https://github.com/danielsogl/awesome-cordova-plugins/issues/3268)) ([3f1fa37](https://github.com/danielsogl/awesome-cordova-plugins/commit/3f1fa37a8d16709067300bc60e6a8094e8b3c402))
* **unvired-cordova-sdk:** added demo mode login api ([#3256](https://github.com/danielsogl/awesome-cordova-plugins/issues/3256)) ([8582fac](https://github.com/danielsogl/awesome-cordova-plugins/commit/8582fac076d3dd2d23ff1a9ffcd49e3b92def081))



# [5.18.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.17.1...v5.18.0) (2019-12-09)


### Bug Fixes

* **ms-adal:** add missing "claims" parameter to "acquireTokenAsync" function ([#3250](https://github.com/danielsogl/awesome-cordova-plugins/issues/3250)) ([ecd451c](https://github.com/danielsogl/awesome-cordova-plugins/commit/ecd451ceb35119fbd62665e850e89f999f4aab7d))


### Features

* **http:** update declaration for cordova plugin version 2.3.0 ([#3247](https://github.com/danielsogl/awesome-cordova-plugins/issues/3247)) ([bddc221](https://github.com/danielsogl/awesome-cordova-plugins/commit/bddc221b6014b3523c2bf519f74300ebc4b1a6a5))
* **in-app-browser:** add "beforeload" callback method ([#3249](https://github.com/danielsogl/awesome-cordova-plugins/issues/3249)) ([a22ee6e](https://github.com/danielsogl/awesome-cordova-plugins/commit/a22ee6ed2bdcad7f39859a63558eeb41e2bfa02c)), closes [issue#3152](https://github.com/issue/issues/3152)
* **ms-adal:** add authentication settings ([#3252](https://github.com/danielsogl/awesome-cordova-plugins/issues/3252)) ([1aa89ae](https://github.com/danielsogl/awesome-cordova-plugins/commit/1aa89ae31110e595de070f19c21ce11899891979))


### BREAKING CHANGES

* **http:** you have to update to cordova-plugin-advanced-http@2.3 or later



## [5.17.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.17.0...v5.17.1) (2019-11-26)


### Bug Fixes

* **email-composer:** Aligned function calls with Cordova plugin ([9057dc2](https://github.com/danielsogl/awesome-cordova-plugins/commit/9057dc2c934f5f8e804da84348d353a3234742a4)), closes [#3220](https://github.com/danielsogl/awesome-cordova-plugins/issues/3220)
* **purchases:** changed optional parameter oldSku ([#3238](https://github.com/danielsogl/awesome-cordova-plugins/issues/3238)) ([bb77620](https://github.com/danielsogl/awesome-cordova-plugins/commit/bb77620d0d27ebbd9831bdd025256a41d2fda188))
* **push:** add showBadge to android channel ([8e79890](https://github.com/danielsogl/awesome-cordova-plugins/commit/8e79890251ecdb8d41207cfaff862dba5d0ae28a))



# [5.17.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.16.0...v5.17.0) (2019-11-19)


### Bug Fixes

* **file:** Changed resolveLocalFileSystemURL to FileEntryCallback instead of EntryCallback ([#3231](https://github.com/danielsogl/awesome-cordova-plugins/issues/3231)) ([499cc5c](https://github.com/danielsogl/awesome-cordova-plugins/commit/499cc5c075a6eb7d9793081046523df270352fa2))
* **firebase-x:** adjust typings ([#3228](https://github.com/danielsogl/awesome-cordova-plugins/issues/3228)) ([f2961fb](https://github.com/danielsogl/awesome-cordova-plugins/commit/f2961fb4bb93da2aee321b2c69e834266e17241c))
* **firebase-x:** update types to match cordova-plugin-firebasex 7.0.0 ([#3226](https://github.com/danielsogl/awesome-cordova-plugins/issues/3226)) ([2fd4885](https://github.com/danielsogl/awesome-cordova-plugins/commit/2fd4885fb1d4e2a79566b1f7244a51b5f3c7de0d))
* **push:** add inline reply property ([#3221](https://github.com/danielsogl/awesome-cordova-plugins/issues/3221)) ([01bfa5c](https://github.com/danielsogl/awesome-cordova-plugins/commit/01bfa5cc5ebf5e26fb63014ce9614561f1747785))


### Features

* **background-mode:** add disableBatteryOptimizations function ([#3235](https://github.com/danielsogl/awesome-cordova-plugins/issues/3235)) ([d2e4d3e](https://github.com/danielsogl/awesome-cordova-plugins/commit/d2e4d3e5cec7a3a08c2d4222600c623527075de5)), closes [#3085](https://github.com/danielsogl/awesome-cordova-plugins/issues/3085)
* **cordova-plugin-fingerprint-aio:** change interface to support v3.0.0 release of plugin update index.ts ([#3227](https://github.com/danielsogl/awesome-cordova-plugins/issues/3227)) ([48082ee](https://github.com/danielsogl/awesome-cordova-plugins/commit/48082eeaef608779f91880c71c338ce3830eb373))
* **facebook:** add activateApp function ([#3234](https://github.com/danielsogl/awesome-cordova-plugins/issues/3234)) ([3440dca](https://github.com/danielsogl/awesome-cordova-plugins/commit/3440dca70f8c25c3864cb7f472b47f7f7c074356)), closes [#3218](https://github.com/danielsogl/awesome-cordova-plugins/issues/3218)
* **printer:** add v0.8.0 support ([#3225](https://github.com/danielsogl/awesome-cordova-plugins/issues/3225)) ([7d75639](https://github.com/danielsogl/awesome-cordova-plugins/commit/7d756394ddca926fa11d19374862fb0d5f63e3d2))
* **sum-up:** change affiliate key on runtime ([#3223](https://github.com/danielsogl/awesome-cordova-plugins/issues/3223)) ([4c56d22](https://github.com/danielsogl/awesome-cordova-plugins/commit/4c56d227a8bf2fc57431aaadf03d2492263bce6c))
* **unvired-cordova-sdk:** add method to get log file path ([#3222](https://github.com/danielsogl/awesome-cordova-plugins/issues/3222)) ([f4b03bc](https://github.com/danielsogl/awesome-cordova-plugins/commit/f4b03bcce4e2370392aa3aa8546ef81e317f5379))


### BREAKING CHANGES

* **firebase-x:** update firebase-x-cordova plugin to version 7

* fix(firebase-x): update types to match cordova-plugin-firebasex 7.0.0

* fix(firebase-x): Add getAPNSToken(), add `onApnsTokenReceived()`

* Add getAPNSToken() plugin API method to get the APNS token on iOS.
* (iOS) Add `onApnsTokenReceived()` to register a callback function to be invoked when the APNS token is allocated.

* fix lint errors



# [5.16.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.15.1...v5.16.0) (2019-10-30)


### Bug Fixes

* **bluetooth-le:** add isConnectable to ScanParams interface ([#3204](https://github.com/danielsogl/awesome-cordova-plugins/issues/3204)) ([00ef998](https://github.com/danielsogl/awesome-cordova-plugins/commit/00ef998ee58c8ec021c9488d6226605996963090))


### Features

* **cordova-plugin-getuisdk:** Add GeTuiSdkPlugin plugin ([#3212](https://github.com/danielsogl/awesome-cordova-plugins/issues/3212)) ([f81e181](https://github.com/danielsogl/awesome-cordova-plugins/commit/f81e1815884e78c9c8f67738d259ea6104c4d30b))
* **fcm:** add getAPNSToken and hasPermission methods ([#3211](https://github.com/danielsogl/awesome-cordova-plugins/issues/3211)) ([08332b7](https://github.com/danielsogl/awesome-cordova-plugins/commit/08332b7c0208e7bc5ad6af8b9f3df91e3f240a50))
* **kommunicate:** plugin for the kommunicate sdk ([#3191](https://github.com/danielsogl/awesome-cordova-plugins/issues/3191)) ([eae8c10](https://github.com/danielsogl/awesome-cordova-plugins/commit/eae8c1000c29e3b88004566b16315207ffdf81e6))
* **pspdfkit-cordova:** add PSPDFKit-Cordova plugin ([#3210](https://github.com/danielsogl/awesome-cordova-plugins/issues/3210)) ([86cca49](https://github.com/danielsogl/awesome-cordova-plugins/commit/86cca4923645a768607f045ac98e6529830de772))
* **secure-storage-echo:** added wrapper for newest plugin ([#3190](https://github.com/danielsogl/awesome-cordova-plugins/issues/3190)) ([509bd72](https://github.com/danielsogl/awesome-cordova-plugins/commit/509bd72ddee81a680e470e2b490139e243900171))
* **sign-in-with-apple:** Added Sign in with Apple ([#3200](https://github.com/danielsogl/awesome-cordova-plugins/issues/3200)) ([ec93301](https://github.com/danielsogl/awesome-cordova-plugins/commit/ec933011e64d43eae4d8933542f4dc482041c1be))
* **unvired-cordova-sdk:** add methods to get and set log level and other functions. ([#3207](https://github.com/danielsogl/awesome-cordova-plugins/issues/3207)) ([042e36d](https://github.com/danielsogl/awesome-cordova-plugins/commit/042e36de08e8b101cd95fc5fca6d511295535a1a))



## [5.15.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.15.0...v5.15.1) (2019-10-18)


### Bug Fixes

* **alipay:** adjust pay function properties ([#3197](https://github.com/danielsogl/awesome-cordova-plugins/issues/3197)) ([fb5d47b](https://github.com/danielsogl/awesome-cordova-plugins/commit/fb5d47bff2b5db006aba12455eea6466e3cc7d17)), closes [#158](https://github.com/danielsogl/awesome-cordova-plugins/issues/158)
* **keyboard:** add missing CordovaProperty import ([#3201](https://github.com/danielsogl/awesome-cordova-plugins/issues/3201)) ([7033a18](https://github.com/danielsogl/awesome-cordova-plugins/commit/7033a1822ec2b12a2491d046b38ff4c0b83c71f6))
* **wechat:** add missing cordova decorators ([#3195](https://github.com/danielsogl/awesome-cordova-plugins/issues/3195)) ([0b43c69](https://github.com/danielsogl/awesome-cordova-plugins/commit/0b43c6999372f5eb49506b5782229eda08833c59))


### Reverts

* Revert "fix(barcode-scanner): add missing shouldAutorotate property (#3096)" (#3192) ([4c5d70e](https://github.com/danielsogl/awesome-cordova-plugins/commit/4c5d70eacd3a811e328d625fbe81dc23ee195b2d)), closes [#3096](https://github.com/danielsogl/awesome-cordova-plugins/issues/3096) [#3192](https://github.com/danielsogl/awesome-cordova-plugins/issues/3192)



# [5.15.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.14.0...v5.15.0) (2019-10-04)


### Bug Fixes

* **keyboard:** Update types with new 2.2.0 methods ([#3187](https://github.com/danielsogl/awesome-cordova-plugins/issues/3187)) ([a1fb937](https://github.com/danielsogl/awesome-cordova-plugins/commit/a1fb93707f1f4dc538f57992e2f29a2ca31215cb))
* **line-login:** adjustment parameter ([#3172](https://github.com/danielsogl/awesome-cordova-plugins/issues/3172)) ([cb543b9](https://github.com/danielsogl/awesome-cordova-plugins/commit/cb543b984106caacdbd48756a3f091ef96815075))
* **pro:** Removing Pro native wrapper ([#3186](https://github.com/danielsogl/awesome-cordova-plugins/issues/3186)) ([a575233](https://github.com/danielsogl/awesome-cordova-plugins/commit/a575233f2354b2333659d86620431616a90e58c4))
* **web-server:** add path to response ([#3184](https://github.com/danielsogl/awesome-cordova-plugins/issues/3184)) ([acec6cf](https://github.com/danielsogl/awesome-cordova-plugins/commit/acec6cfb189507a61f5ea6a8fa86bb3f0839743b))


### Features

* **emm-app-config:** add plugin ([#3181](https://github.com/danielsogl/awesome-cordova-plugins/issues/3181)) ([5f16fcd](https://github.com/danielsogl/awesome-cordova-plugins/commit/5f16fcd29263d326332ab08459876acb0133a12b))
* **http:** add type definitions for new features available in v2.2.0 ([#3185](https://github.com/danielsogl/awesome-cordova-plugins/issues/3185)) ([fc6d1d0](https://github.com/danielsogl/awesome-cordova-plugins/commit/fc6d1d0c7f04f3df18f39fffb3854edc8a32ac9c))
* **web-socket-server:** Add cordova plugin websocket server ([#3183](https://github.com/danielsogl/awesome-cordova-plugins/issues/3183)) ([66f2e15](https://github.com/danielsogl/awesome-cordova-plugins/commit/66f2e155f04cec09e77e3e35562cde8f255398ee))



# [5.14.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.13.0...v5.14.0) (2019-09-13)


### Bug Fixes

* **core:** Return the window object as default instead of the boolean from the typeof comparison ([#3160](https://github.com/danielsogl/awesome-cordova-plugins/issues/3160)) ([8b3b2a4](https://github.com/danielsogl/awesome-cordova-plugins/commit/8b3b2a4b277599dd9d74dc961daf686bb1c895a5)), closes [#2972](https://github.com/danielsogl/awesome-cordova-plugins/issues/2972)
* **firebase-x:** adjust typings for hasPermission ([#3161](https://github.com/danielsogl/awesome-cordova-plugins/issues/3161)) ([a46e308](https://github.com/danielsogl/awesome-cordova-plugins/commit/a46e308ea8beea02a114eaa023340bcff47f3a75))
* **screen-orientation:** add window element to eventObservable ([#3166](https://github.com/danielsogl/awesome-cordova-plugins/issues/3166)) ([199380c](https://github.com/danielsogl/awesome-cordova-plugins/commit/199380c0c3bf842abf6b1c506dbd7c1c0c53492c))
* **screen-orientation:** add window element to eventObservable ([#3166](https://github.com/danielsogl/awesome-cordova-plugins/issues/3166)) ([6bc1b93](https://github.com/danielsogl/awesome-cordova-plugins/commit/6bc1b932c8238c5fba26a2f75a02fd682473da21))


### Features

* **document-scanner:** add quality and base64 ([#3168](https://github.com/danielsogl/awesome-cordova-plugins/issues/3168)) ([141f0e6](https://github.com/danielsogl/awesome-cordova-plugins/commit/141f0e6e4154bed1d21b735b97d275f619a92647))
* **document-scanner:** add quality and base64 ([#3168](https://github.com/danielsogl/awesome-cordova-plugins/issues/3168)) ([cfcd8d1](https://github.com/danielsogl/awesome-cordova-plugins/commit/cfcd8d16a6014c1368b2360093956e0fbb260572))
* **preview-any-file:** add new plugin to preview the … ([#3156](https://github.com/danielsogl/awesome-cordova-plugins/issues/3156)) ([fcec2d1](https://github.com/danielsogl/awesome-cordova-plugins/commit/fcec2d16b31ccfa4247dc45a323be8ff2c8d8492))
* **preview-any-file:** add new plugin to preview the … ([#3156](https://github.com/danielsogl/awesome-cordova-plugins/issues/3156)) ([1b6506f](https://github.com/danielsogl/awesome-cordova-plugins/commit/1b6506f53a532e6344871fa7baeff669fb8db81d))
* **ssh-connect:** add new plugin for ssh connection ([#3169](https://github.com/danielsogl/awesome-cordova-plugins/issues/3169)) ([d9ded4d](https://github.com/danielsogl/awesome-cordova-plugins/commit/d9ded4d164f0ab797461d6d2b6105fda8b31ad0f))
* **ssh-connect:** add new plugin for ssh connection ([#3169](https://github.com/danielsogl/awesome-cordova-plugins/issues/3169)) ([d539eb4](https://github.com/danielsogl/awesome-cordova-plugins/commit/d539eb4f6238a12d7271d0921e600f20c90bedc1))



# [5.13.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.12.0...v5.13.0) (2019-08-30)


### Bug Fixes

* **anyline:** added official plugin ([#3144](https://github.com/danielsogl/awesome-cordova-plugins/issues/3144)) ([26447d2](https://github.com/danielsogl/awesome-cordova-plugins/commit/26447d22ea2ec9a86188ac166e30923ee222faf8))
* **in-app-browser:** update types to match cordova-plugin-inappbrowser 3.1.0  ([#3142](https://github.com/danielsogl/awesome-cordova-plugins/issues/3142)) ([4d1e0e6](https://github.com/danielsogl/awesome-cordova-plugins/commit/4d1e0e694979b725b340315040f27b3c88e14acb))
* **network:** rename onchange method name ([#3146](https://github.com/danielsogl/awesome-cordova-plugins/issues/3146)) ([73493e2](https://github.com/danielsogl/awesome-cordova-plugins/commit/73493e222fd4bc46112e3bfb2f4ff0ab4c43dd5a))
* **theme-detection:** added android platform ([#3143](https://github.com/danielsogl/awesome-cordova-plugins/issues/3143)) ([a55bb60](https://github.com/danielsogl/awesome-cordova-plugins/commit/a55bb60d709da22c916826427028464ea9b659e4))


### Features

* **google-play-games-services:** add new synchronous methods ([#3138](https://github.com/danielsogl/awesome-cordova-plugins/issues/3138)) ([189570d](https://github.com/danielsogl/awesome-cordova-plugins/commit/189570d2556626e033ba901a230b4864d45a4b82))



# [5.12.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.11.0...v5.12.0) (2019-08-09)


### Bug Fixes

* **background-geolocation:** enum not string ([#3131](https://github.com/danielsogl/awesome-cordova-plugins/issues/3131)) ([5cc91bc](https://github.com/danielsogl/awesome-cordova-plugins/commit/5cc91bc79a1c7e3c6bf0d034dc28d2972d37c63b)), closes [/stackoverflow.com/questions/57293829/argument-of-type-location-is-not-assignable-to-parameter-of-type-backgroundge/57302110#57302110](https://github.com//stackoverflow.com/questions/57293829/argument-of-type-location-is-not-assignable-to-parameter-of-type-backgroundge/57302110/issues/57302110)
* **chooser:** [@param](https://github.com/param) accept is supposed to be optional ([#3134](https://github.com/danielsogl/awesome-cordova-plugins/issues/3134)) ([f3b8e34](https://github.com/danielsogl/awesome-cordova-plugins/commit/f3b8e34091435f9bfe9a9fb271a479ab53f129a2))
* **intercom:** added logout, displayHelpCenter, sendPushTokenToIntercom ([3bb6b59](https://github.com/danielsogl/awesome-cordova-plugins/commit/3bb6b591129e4d53661e22198408a42c21598bd4))
* **ms-adal:** use correct accessTokenType prop ([#3128](https://github.com/danielsogl/awesome-cordova-plugins/issues/3128)) ([016023a](https://github.com/danielsogl/awesome-cordova-plugins/commit/016023a7bb023a6fe8b46aa29e7edb5388701c5c))


### Features

* **file-chooser:** add missing options param ([#3136](https://github.com/danielsogl/awesome-cordova-plugins/issues/3136)) ([fd81a5e](https://github.com/danielsogl/awesome-cordova-plugins/commit/fd81a5e5b76f539c094d23abeccb5e9c0fd79bf6))
* **http:** add sendRequest responseType option ([#3120](https://github.com/danielsogl/awesome-cordova-plugins/issues/3120)) ([7696706](https://github.com/danielsogl/awesome-cordova-plugins/commit/7696706080b709f921f85fd032191046334b0ee1))
* **smartlook:** add plugin ([#3117](https://github.com/danielsogl/awesome-cordova-plugins/issues/3117)) ([8bcbc95](https://github.com/danielsogl/awesome-cordova-plugins/commit/8bcbc955e00179eecf852897bbd5ea4e283e2293))



# [5.11.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.10.0...v5.11.0) (2019-07-29)


### Features

* **cordova-plugin-firebasex:** Add plugin ([#3106](https://github.com/danielsogl/awesome-cordova-plugins/issues/3106)) ([de83edb](https://github.com/danielsogl/awesome-cordova-plugins/commit/de83edb99b67f75b21c266c3954821941d8fecd7))
* **unvired-cordova-sdk:** add plugin ([b75f40c](https://github.com/danielsogl/awesome-cordova-plugins/commit/b75f40c76e551d9170b43ec929e84da4da5b8659))
* **urbanship:** add plugin ([9c9ed35](https://github.com/danielsogl/awesome-cordova-plugins/commit/9c9ed3518f1a017ec9bc81e9bcdd2d33eb978d1d))
* **wonderpush:** add plugin ([#3107](https://github.com/danielsogl/awesome-cordova-plugins/issues/3107)) ([7e08680](https://github.com/danielsogl/awesome-cordova-plugins/commit/7e08680d312d7e11fd099a2871489ad55ff00dd9))



# [5.10.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.9.0...v5.10.0) (2019-07-12)


### Bug Fixes

* **barcode-scanner:** add missing shouldAutorotate property ([#3096](https://github.com/danielsogl/awesome-cordova-plugins/issues/3096)) ([8ce541f](https://github.com/danielsogl/awesome-cordova-plugins/commit/8ce541ff9ac35130f147a04e858795d9c4bab8c7))
* **biocatch:** added android platform and updated repo ([#3086](https://github.com/danielsogl/awesome-cordova-plugins/issues/3086)) ([717f686](https://github.com/danielsogl/awesome-cordova-plugins/commit/717f6864f39c25cb38394ac7db417983a22367de))
* **line-login:** add missing email prop ([#3098](https://github.com/danielsogl/awesome-cordova-plugins/issues/3098)) ([7aa0810](https://github.com/danielsogl/awesome-cordova-plugins/commit/7aa08109cee99cc7a812731fb8b4c50f83fb989c))


### Features

* **anyline:** add plugin ([#3101](https://github.com/danielsogl/awesome-cordova-plugins/issues/3101)) ([8badd29](https://github.com/danielsogl/awesome-cordova-plugins/commit/8badd2943a56c04d5e2317573df7519905b5283d)), closes [#3074](https://github.com/danielsogl/awesome-cordova-plugins/issues/3074)
* **theme-detection:** add plugin ([#3082](https://github.com/danielsogl/awesome-cordova-plugins/issues/3082)) ([e9fa3ee](https://github.com/danielsogl/awesome-cordova-plugins/commit/e9fa3ee6f24128dc870cef3ec4e2edcc7ffc9653))



# [5.9.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.8.0...v5.9.0) (2019-07-01)


### Bug Fixes

* **alipay:** use correct pluginRef ([#3081](https://github.com/danielsogl/awesome-cordova-plugins/issues/3081)) ([92d5764](https://github.com/danielsogl/awesome-cordova-plugins/commit/92d5764e015eeb137d42af55a44f3572439a47e2))
* **firebase:** add missing decorator to clearAllNotifications ([#3059](https://github.com/danielsogl/awesome-cordova-plugins/issues/3059)) ([2fadb6b](https://github.com/danielsogl/awesome-cordova-plugins/commit/2fadb6b0e1ceef9162db289b16791f58fc4dece5))
* **in-app-purchase-2:** add missing option to register function ([#3063](https://github.com/danielsogl/awesome-cordova-plugins/issues/3063)) ([1fc0909](https://github.com/danielsogl/awesome-cordova-plugins/commit/1fc09098fe4b7c8d291c09ed5ecfa1b11f8c599d))


### Features

* **calendar:** add deleteEventById function ([#3075](https://github.com/danielsogl/awesome-cordova-plugins/issues/3075)) ([5857b96](https://github.com/danielsogl/awesome-cordova-plugins/commit/5857b9654c4496e8fe02463bdc658e568bc9c581))
* **diagnostic:** add DENIED_ONCE introduced by diagnostic v5 ([#3071](https://github.com/danielsogl/awesome-cordova-plugins/issues/3071)) ([54ac2bf](https://github.com/danielsogl/awesome-cordova-plugins/commit/54ac2bfdf5da9aefa719ca9626c92deebca4f36f))
* **sum-up:** add plugin ([#3080](https://github.com/danielsogl/awesome-cordova-plugins/issues/3080)) ([a4db080](https://github.com/danielsogl/awesome-cordova-plugins/commit/a4db080786da063c995f016b52414759c5b1832d))
* **unvired-cordova-sdk:** add plugin ([#3061](https://github.com/danielsogl/awesome-cordova-plugins/issues/3061)) ([9274083](https://github.com/danielsogl/awesome-cordova-plugins/commit/9274083b248a7a90651d1f9aa353c684aa8b8179))


### Reverts

* Revert "chore(build): use node 12" ([a0f5254](https://github.com/danielsogl/awesome-cordova-plugins/commit/a0f52549886cb064475457be7a2791617ed926fe))



# [5.8.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.7.0...v5.8.0) (2019-06-10)


### Bug Fixes

* **music-control:** use correct input type ([#3054](https://github.com/danielsogl/awesome-cordova-plugins/issues/3054)) ([300d7c2](https://github.com/danielsogl/awesome-cordova-plugins/commit/300d7c229c37e2ff15eeb34887645675fffb61e0))


### Features

* **apple-wallet:** support plugin version 3.0 ([#3053](https://github.com/danielsogl/awesome-cordova-plugins/issues/3053)) ([43442ac](https://github.com/danielsogl/awesome-cordova-plugins/commit/43442ac4eaa22f836b885bbe1e15087f72237266))
* **diagnostic:** add requestRemoteNotificationsAuthorization method ([#3051](https://github.com/danielsogl/awesome-cordova-plugins/issues/3051)) ([12f2782](https://github.com/danielsogl/awesome-cordova-plugins/commit/12f2782fef89307a75aca388092c35c2f65b1411)), closes [#3050](https://github.com/danielsogl/awesome-cordova-plugins/issues/3050) [/github.com/dpa99c/cordova-diagnostic-plugin/blob/0fac4a59d1f246c872c05f513b09f0e9c93abb51/www/ios/diagnostic.notifications.js#L162](https://github.com//github.com/dpa99c/cordova-diagnostic-plugin/blob/0fac4a59d1f246c872c05f513b09f0e9c93abb51/www/ios/diagnostic.notifications.js/issues/L162)
* **in-app-purchase-2:** add documentation ([#3055](https://github.com/danielsogl/awesome-cordova-plugins/issues/3055)) ([ed80933](https://github.com/danielsogl/awesome-cordova-plugins/commit/ed80933b6c4819a50d8610c9f1df5b652a20b9e0))
* **sms-retriever:** add plugin ([#3052](https://github.com/danielsogl/awesome-cordova-plugins/issues/3052)) ([6cbb226](https://github.com/danielsogl/awesome-cordova-plugins/commit/6cbb226ed22b940a957926c0e888c9602d451e88))



# [5.7.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.6.1...v5.7.0) (2019-06-03)


### Features

* **biometric-wrapper:** add plugin ([#3025](https://github.com/danielsogl/awesome-cordova-plugins/issues/3025)) ([c0b092b](https://github.com/danielsogl/awesome-cordova-plugins/commit/c0b092b2422e80c9dfd1d3c904e498d0970b08d3))
* **blinkid:** added support for card overlay ([#3041](https://github.com/danielsogl/awesome-cordova-plugins/issues/3041)) ([2942ebf](https://github.com/danielsogl/awesome-cordova-plugins/commit/2942ebfae4ec197f79ddeebbda16f2b2f88d2221))
* **device-accounts:** add "getPermissionsByType" function ([#3048](https://github.com/danielsogl/awesome-cordova-plugins/issues/3048)) ([dfb0aa3](https://github.com/danielsogl/awesome-cordova-plugins/commit/dfb0aa3d5d5ccd2ab81a4d1186610e861771a1a3))
* **document-scanner:** add plugin ([#3043](https://github.com/danielsogl/awesome-cordova-plugins/issues/3043)) ([49e81cc](https://github.com/danielsogl/awesome-cordova-plugins/commit/49e81cc4147c42ba1dd140b4e8cb639e3bb084f1))
* **full-screen-image:** add plugin ([#3026](https://github.com/danielsogl/awesome-cordova-plugins/issues/3026)) ([bb7b516](https://github.com/danielsogl/awesome-cordova-plugins/commit/bb7b516c504907c0a3fb908ea8515f5f638f3d62))
* **in-app-purchase-2:** update TypeScript definitions ([#3037](https://github.com/danielsogl/awesome-cordova-plugins/issues/3037)) ([4ae35cb](https://github.com/danielsogl/awesome-cordova-plugins/commit/4ae35cba9a02610ff6374c4ddfc15cdcca926ba2))
* **ocr:** add plugin ([#3044](https://github.com/danielsogl/awesome-cordova-plugins/issues/3044)) ([b79c8b1](https://github.com/danielsogl/awesome-cordova-plugins/commit/b79c8b1ea06da41bf6823716fe3a1bf3837257f2))
* **onesignal:** add missing "setExternalUserId"  and "removeExternalUserId" functions ([#3049](https://github.com/danielsogl/awesome-cordova-plugins/issues/3049)) ([a0ec125](https://github.com/danielsogl/awesome-cordova-plugins/commit/a0ec1252e0d843fafe4e1d245f79eb09234dbee8)), closes [#2909](https://github.com/danielsogl/awesome-cordova-plugins/issues/2909)



## [5.6.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.6.0...v5.6.1) (2019-05-27)



# [5.6.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.5.1...v5.6.0) (2019-05-16)


### Bug Fixes

* **biocatch:** start publicKey is now required even if null ([7afed90](https://github.com/danielsogl/awesome-cordova-plugins/commit/7afed90b569f187607f01b9c717dae1a4a9bbc9a))
* **biocatch:** updateCustomerSessionID argument can be null ([9804476](https://github.com/danielsogl/awesome-cordova-plugins/commit/980447673b7de13c60358260990a367b43c604e1))
* **blinkid:** correct issue with blink card ([4601ea3](https://github.com/danielsogl/awesome-cordova-plugins/commit/4601ea3e01a11d27473b3f41aa317b98fd5cb640))
* **blinkid:** resolve issues with blink card ([1f31954](https://github.com/danielsogl/awesome-cordova-plugins/commit/1f31954cb3e32747d0791764502c94f2f08e4dbb))
* **firebase-crashlytics:** update initialise method ([#2990](https://github.com/danielsogl/awesome-cordova-plugins/issues/2990)) ([#2991](https://github.com/danielsogl/awesome-cordova-plugins/issues/2991)) ([e363d98](https://github.com/danielsogl/awesome-cordova-plugins/commit/e363d98bd8cd0c8acea4a5872905f837d1577408))


### Features

* **biocatch:** add Biocatch plugin ([a42e7b8](https://github.com/danielsogl/awesome-cordova-plugins/commit/a42e7b82589a84cfefea1c0bdbdfe49a7c46ffa9))
* **camera-preview:** add wrapper for camera preview snapshot ([7903774](https://github.com/danielsogl/awesome-cordova-plugins/commit/79037743b894704d4a6da5cff9e5bc19c9b81804))
* **FileOpener:** Added method showOpenWithDialog ([ed36dc4](https://github.com/danielsogl/awesome-cordova-plugins/commit/ed36dc492d16cb66e530484395b90c6071c5e806))
* **firebase-crash:** add plugin ([66b9d1a](https://github.com/danielsogl/awesome-cordova-plugins/commit/66b9d1a011943a45abf05632a03e4f308477c615))
* **foreground-service:** allows background services ([5b5c6e6](https://github.com/danielsogl/awesome-cordova-plugins/commit/5b5c6e61ac46d1d46634bef838ba46b60475c69e))
* updating device account wrapper with maintained fork with android 8.0 compatibility ([354af9f](https://github.com/danielsogl/awesome-cordova-plugins/commit/354af9fe6f67b3abaf43de21e6ecb83f4fcd5ee5))



## [5.5.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.5.0...v5.5.1) (2019-04-29)


### Bug Fixes

* **background-geolocation:** update source ([e288a5d](https://github.com/danielsogl/awesome-cordova-plugins/commit/e288a5d757ca2720d9272acabc3c180916427716)), closes [#2979](https://github.com/danielsogl/awesome-cordova-plugins/issues/2979)


### Features

* **CameraPreview:** add getHorizontalFOV callback ([#3000](https://github.com/danielsogl/awesome-cordova-plugins/issues/3000)) ([9800271](https://github.com/danielsogl/awesome-cordova-plugins/commit/980027135219402b2a3db1cec3cb0a5a6a54a9cb))



# [5.5.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.4.0...v5.5.0) (2019-04-19)


### Bug Fixes

* **background-mode:** update types definitions ([#2997](https://github.com/danielsogl/awesome-cordova-plugins/issues/2997)) ([c0ce17b](https://github.com/danielsogl/awesome-cordova-plugins/commit/c0ce17b170b3794152d4609d7931fc419259e087))
* **firebase-messaging:** fix the typings of the FCM message payload ([#2998](https://github.com/danielsogl/awesome-cordova-plugins/issues/2998)) ([e47774b](https://github.com/danielsogl/awesome-cordova-plugins/commit/e47774b771b258476dfc26176ed26807422057e5))
* **google-plus:** mark login param as required ([#2996](https://github.com/danielsogl/awesome-cordova-plugins/issues/2996)) ([c518c81](https://github.com/danielsogl/awesome-cordova-plugins/commit/c518c8114d0049745da642dfabbac3beb86dedc3))
* **nfc:** rename `makeReadyOnly` to `makeReadOnly` ([9024ea5](https://github.com/danielsogl/awesome-cordova-plugins/commit/9024ea516acb70ce93dd558e8d6e2436eae11a2d)), closes [#2985](https://github.com/danielsogl/awesome-cordova-plugins/issues/2985)


### Features

* **device-accounts:** update plugin source ([#2976](https://github.com/danielsogl/awesome-cordova-plugins/issues/2976)) ([c063652](https://github.com/danielsogl/awesome-cordova-plugins/commit/c063652800eb37e39357bbe009ea80412779ec00))
* **purchases:** update plugin to v0.0.5 ([#2988](https://github.com/danielsogl/awesome-cordova-plugins/issues/2988)) ([7ea51fc](https://github.com/danielsogl/awesome-cordova-plugins/commit/7ea51fcf0616eaa9c107365fdf140a169547d9ce))
* **spotify-auth:** add Spotify OAuth plugin ([#2989](https://github.com/danielsogl/awesome-cordova-plugins/issues/2989)) ([21dc1f9](https://github.com/danielsogl/awesome-cordova-plugins/commit/21dc1f9a56b31f346765b799942b745e8f87773f))



# [5.4.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.3.0...v5.4.0) (2019-04-07)


### Bug Fixes

* **background-mode:** update types definitions ([#2982](https://github.com/danielsogl/awesome-cordova-plugins/issues/2982)) ([c75aeb9](https://github.com/danielsogl/awesome-cordova-plugins/commit/c75aeb9c39c1116e747ade008cdcb3bbbc837342))
* **ble:** fix definitions ([#2974](https://github.com/danielsogl/awesome-cordova-plugins/issues/2974)) ([6a19509](https://github.com/danielsogl/awesome-cordova-plugins/commit/6a19509ded51ff72893a1c64b9db01ae71b52d85))
* **facebook:** use object notation, otherwise EVENTS is´ undefined ([#2955](https://github.com/danielsogl/awesome-cordova-plugins/issues/2955)) ([aa138c4](https://github.com/danielsogl/awesome-cordova-plugins/commit/aa138c4cfeac67e29140bc19d189db80f02177bc))
* **in-app-purchase2:** Registering a product with an alias is now optional ([#2946](https://github.com/danielsogl/awesome-cordova-plugins/issues/2946)) ([4e60c63](https://github.com/danielsogl/awesome-cordova-plugins/commit/4e60c631aebf7a5e8c0d569fa843e5e00da7490a))


### Features

* **google-play-games-services:** add getPlayerScore function ([#2949](https://github.com/danielsogl/awesome-cordova-plugins/issues/2949)) ([767d3b3](https://github.com/danielsogl/awesome-cordova-plugins/commit/767d3b3dd40726fac66b676370a7a8eb54c55e63))
* **in-app-purchase-2:** add manageSubscriptions() ([#2980](https://github.com/danielsogl/awesome-cordova-plugins/issues/2980)) ([f874185](https://github.com/danielsogl/awesome-cordova-plugins/commit/f874185a355e41ac9aabb3ecc72922a837b22ab3))
* **in-app-purchase-2:** add missing property ([#2961](https://github.com/danielsogl/awesome-cordova-plugins/issues/2961)) ([029f82f](https://github.com/danielsogl/awesome-cordova-plugins/commit/029f82f1fd4ce6b0584774d49d02e2fc9351a0f2))
* **nativegeocoder:** update plugin to v3.2.0 ([cd97375](https://github.com/danielsogl/awesome-cordova-plugins/commit/cd97375e6335503d1b9ace876872fe6a515d46fa))
* **nativegeocoder:** update plugin to v3.2.0 ([#2958](https://github.com/danielsogl/awesome-cordova-plugins/issues/2958)) ([4de49c3](https://github.com/danielsogl/awesome-cordova-plugins/commit/4de49c37dd9bd23799b089595db998ade34a9c88))
* **purchases:** add new plugin for purchases ([#2940](https://github.com/danielsogl/awesome-cordova-plugins/issues/2940)) ([39be275](https://github.com/danielsogl/awesome-cordova-plugins/commit/39be27566bf67833e1996583c50750496b9df13f))



# [5.3.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.2.0...v5.3.0) (2019-03-19)


### Bug Fixes

* **scripts:** check for TypeDoc tags when selecting plugin class ([#2963](https://github.com/danielsogl/awesome-cordova-plugins/issues/2963)) ([06654af](https://github.com/danielsogl/awesome-cordova-plugins/commit/06654afae3f84267b50e2faf1e9b9e08783f0279))
* **ssr:** check for window and document ([e3e8c85](https://github.com/danielsogl/awesome-cordova-plugins/commit/e3e8c85087cc509e2bb30536fe80dcbef82c5e6b))
* **ssr:** fix window references ([c2029f7](https://github.com/danielsogl/awesome-cordova-plugins/commit/c2029f7927dd2fa05741034b28cc6271291f3dc2))
* **ssr:** fix window references ([5b1bdc3](https://github.com/danielsogl/awesome-cordova-plugins/commit/5b1bdc37e049b34cb5b64ec2426a14232336d53d))
* **ssr:** remove cordova warning during ssr ([7e090cc](https://github.com/danielsogl/awesome-cordova-plugins/commit/7e090cc6f218e0316d0a229e9f778158379bb120))


### Features

* **scripts:** add docs-json script ([#2947](https://github.com/danielsogl/awesome-cordova-plugins/issues/2947)) ([b0dea6d](https://github.com/danielsogl/awesome-cordova-plugins/commit/b0dea6dc58c4ec6294cb3c59faabe7674c0ffe7f))


### Reverts

* Revert "refactor(template): update Inject decorator" ([d827db2](https://github.com/danielsogl/awesome-cordova-plugins/commit/d827db27b00aa84c60f42836da5250b8e56f1adb))
* Revert "refactor(template): update Inject decorator" ([b9e4673](https://github.com/danielsogl/awesome-cordova-plugins/commit/b9e46730e3f3844937f6c7b3b4c095405ba03c81))
* Revert "refactor: optimize plugins for angular treeshaking" ([fcda5ff](https://github.com/danielsogl/awesome-cordova-plugins/commit/fcda5ffcab1034e83319f2f1ebaf808c756bdd1e))


### BREAKING CHANGES

* This reverts commit c5ae6362d7771b62ae35a6b8ddc6e866aa9964a9.



# [5.2.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.1.0...v5.2.0) (2019-02-20)


### Code Refactoring

* optimize plugins for angular treeshaking ([8b53c04](https://github.com/danielsogl/awesome-cordova-plugins/commit/8b53c04dc5d8e3bb8f527499e3e0a4661c097072))


### Features

* **apple-wallet:** update wrapper to release 2.0 ([#2935](https://github.com/danielsogl/awesome-cordova-plugins/issues/2935)) ([7ae2ad4](https://github.com/danielsogl/awesome-cordova-plugins/commit/7ae2ad4e3e407cd29182ec4a9c80130757e2ee20))
* **linkedin:** delete plugin ([6423031](https://github.com/danielsogl/awesome-cordova-plugins/commit/64230319a2d23ec8fd4cf37c8cfc02049d9efa3f)), closes [#2925](https://github.com/danielsogl/awesome-cordova-plugins/issues/2925)


### BREAKING CHANGES

* You can remove the plugin import from the app.module.ts because of the changed Inject decorator



# [5.1.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.24...v5.1.0) (2019-02-14)


### Bug Fixes

* **bluetooth-le:** Fix typo in InitializeResult interface definition ([#2891](https://github.com/danielsogl/awesome-cordova-plugins/issues/2891)) ([b6f340a](https://github.com/danielsogl/awesome-cordova-plugins/commit/b6f340ae82ec80fbd8d47058b345f38aa2c11895))
* **build:** fixed duplicate import identifiers ([3aedde5](https://github.com/danielsogl/awesome-cordova-plugins/commit/3aedde55d81d909969cea8107c874b80297a1005))
* **build:** remove wrong jsdoc ([63124f3](https://github.com/danielsogl/awesome-cordova-plugins/commit/63124f35fd25d91650ed02ecbb8d86ae3317d793))
* **google-play-games-services:** correct Cordova plugin name typo ([#2920](https://github.com/danielsogl/awesome-cordova-plugins/issues/2920)) ([fc0a238](https://github.com/danielsogl/awesome-cordova-plugins/commit/fc0a23822931c4f39043b989439ff36bba9ec2ed)), closes [ionic-team/ionic-docs#424](https://github.com/ionic-team/ionic-docs/issues/424)
* **http:** add 'legacy' as valid option to setSSLCertMode ([#2913](https://github.com/danielsogl/awesome-cordova-plugins/issues/2913)) ([e1a4903](https://github.com/danielsogl/awesome-cordova-plugins/commit/e1a490357dd3436162c4cf9ee9a782a831547840)), closes [#2912](https://github.com/danielsogl/awesome-cordova-plugins/issues/2912)


### Features

* **abbyy-rtr:** add new options ([#2915](https://github.com/danielsogl/awesome-cordova-plugins/issues/2915)) ([959a913](https://github.com/danielsogl/awesome-cordova-plugins/commit/959a9135e46629c54837c0effe7730c9d9655441))
* **app-launcher:** add plugin ([9bdb2fa](https://github.com/danielsogl/awesome-cordova-plugins/commit/9bdb2fac9d493bf8383019994fb2867abd583334)), closes [#2889](https://github.com/danielsogl/awesome-cordova-plugins/issues/2889)
* **clevertap:** update for latest CleverTap Cordova plugin ([#2931](https://github.com/danielsogl/awesome-cordova-plugins/issues/2931)) ([aed25a6](https://github.com/danielsogl/awesome-cordova-plugins/commit/aed25a66423577a3532def99f0d6a8d4f8feee17))
* **firebase-crashlytics:** add plugin ([41c6bca](https://github.com/danielsogl/awesome-cordova-plugins/commit/41c6bcafe6326fc03c61392331c14a480a580e66)), closes [#2889](https://github.com/danielsogl/awesome-cordova-plugins/issues/2889)
* **http:** add sendRequest function ([#2910](https://github.com/danielsogl/awesome-cordova-plugins/issues/2910)) ([daf0456](https://github.com/danielsogl/awesome-cordova-plugins/commit/daf04566a18055499e3a1ae26d0006362002ed62)), closes [#2824](https://github.com/danielsogl/awesome-cordova-plugins/issues/2824)
* **luxand:** add plugin ([#2883](https://github.com/danielsogl/awesome-cordova-plugins/issues/2883)) ([632dec2](https://github.com/danielsogl/awesome-cordova-plugins/commit/632dec28aed894bd4121c83f87516e1fc14dc8ca))
* **magnetometer:** add plugin ([#2917](https://github.com/danielsogl/awesome-cordova-plugins/issues/2917)) ([fd27136](https://github.com/danielsogl/awesome-cordova-plugins/commit/fd27136de7d397b974c1ff26f84a081cdb03e539))
* **photo-viewer:** add new params ([#2895](https://github.com/danielsogl/awesome-cordova-plugins/issues/2895)) ([c5ceba1](https://github.com/danielsogl/awesome-cordova-plugins/commit/c5ceba1aaee1cd526e95f91b70e7e9d942504cce))
* **quikkly:** add plugin([#2923](https://github.com/danielsogl/awesome-cordova-plugins/issues/2923)) ([2833da4](https://github.com/danielsogl/awesome-cordova-plugins/commit/2833da472a2a373edb112050524c65007e0faeab))
* **zoom:** add plugin ([#2916](https://github.com/danielsogl/awesome-cordova-plugins/issues/2916)) ([50e0534](https://github.com/danielsogl/awesome-cordova-plugins/commit/50e05349ec7ca545a4053e7ab5cf40c92fd04c87))



# [4.20.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.23...v4.20.0) (2019-01-20)


### Bug Fixes

* **bluetooth-le:** Fix typo in interface definition ([#2881](https://github.com/danielsogl/awesome-cordova-plugins/issues/2881)) ([c2f4561](https://github.com/danielsogl/awesome-cordova-plugins/commit/c2f45616acf1c4c598d18ec14f3ea2b19c2a444b))
* **health:** fix typos ([#2831](https://github.com/danielsogl/awesome-cordova-plugins/issues/2831)) ([ea3150e](https://github.com/danielsogl/awesome-cordova-plugins/commit/ea3150e99af96c8f09809d385eb0620687afa58c))


### Features

* **adjust:** add adjust sdk plugin ([#2872](https://github.com/danielsogl/awesome-cordova-plugins/issues/2872)) ([9e6705d](https://github.com/danielsogl/awesome-cordova-plugins/commit/9e6705df7f06f88ad28db66e32208d989466bd31))
* **admob:** add plugin ([#2864](https://github.com/danielsogl/awesome-cordova-plugins/issues/2864)) ([707ce1c](https://github.com/danielsogl/awesome-cordova-plugins/commit/707ce1cad966dee7507e9a43cbd4dce2b587d7a3))
* **analytics-firebase:** add plugin ([#2862](https://github.com/danielsogl/awesome-cordova-plugins/issues/2862)) ([5df3de7](https://github.com/danielsogl/awesome-cordova-plugins/commit/5df3de7dc08c6b563c3ceaa66ee2f52a1c2960f2))
* **background-geolocation:** add v3 functions and interfaces ([#2393](https://github.com/danielsogl/awesome-cordova-plugins/issues/2393)) ([1ba6f97](https://github.com/danielsogl/awesome-cordova-plugins/commit/1ba6f970825babb33df7f73e3bd60995d7d13815))
* **baidu-push:** add plugin ([#2838](https://github.com/danielsogl/awesome-cordova-plugins/issues/2838)) ([c3de8df](https://github.com/danielsogl/awesome-cordova-plugins/commit/c3de8dfaba158c7f5726bcfd67481c7525375450))
* **firebase:** add clearAllNotifications method ([#2867](https://github.com/danielsogl/awesome-cordova-plugins/issues/2867)) ([7c46d8c](https://github.com/danielsogl/awesome-cordova-plugins/commit/7c46d8c2fc44625f851d6cf95a6e0a17c9d6ae80))
* **gao-de-location:** add plugin ([#2857](https://github.com/danielsogl/awesome-cordova-plugins/issues/2857)) ([e2b25de](https://github.com/danielsogl/awesome-cordova-plugins/commit/e2b25deff691502adf03f03798306a1ab72ea618))
* **in-app-browser:** add 'beforeload' as option ([#2863](https://github.com/danielsogl/awesome-cordova-plugins/issues/2863)) ([d33bcb0](https://github.com/danielsogl/awesome-cordova-plugins/commit/d33bcb02208c2cddb86a9aac15da31d4e3808758))
* **lottie-splash-screen:** add new plugin ([#2880](https://github.com/danielsogl/awesome-cordova-plugins/issues/2880)) ([603d694](https://github.com/danielsogl/awesome-cordova-plugins/commit/603d6943efdd8b00a7029e3cde6a652cf59cad2c))
* **web-intent:** Add missing type info ([#2878](https://github.com/danielsogl/awesome-cordova-plugins/issues/2878)) ([3226f76](https://github.com/danielsogl/awesome-cordova-plugins/commit/3226f76ef92d44512d395c8ba13788dbbcf0a993))



# [4.18.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.17.0...v4.18.0) (2018-12-01)


### Bug Fixes

* **local-notifications:** update type of the every property ([#2825](https://github.com/danielsogl/awesome-cordova-plugins/issues/2825)) ([b166cc5](https://github.com/danielsogl/awesome-cordova-plugins/commit/b166cc51eae3b17da005ff39f4e1d85727640757))


### Features

* **downloader:** add plugin ([#2820](https://github.com/danielsogl/awesome-cordova-plugins/issues/2820)) ([0065704](https://github.com/danielsogl/awesome-cordova-plugins/commit/006570483d5e0a57c2799cb2d7899d219e845666))
* **line-login:** add loginWeb function ([#2810](https://github.com/danielsogl/awesome-cordova-plugins/issues/2810)) ([7145afa](https://github.com/danielsogl/awesome-cordova-plugins/commit/7145afa24f2db5c820c6d8272257b50659aa6863))


### Reverts

* Revert "bump deps" ([543fa64](https://github.com/danielsogl/awesome-cordova-plugins/commit/543fa64b35dac69a0571ed726bfd49278b4817da))



# [4.17.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.16.0...v4.17.0) (2018-11-02)


### Bug Fixes

* **contacts plugin:** add the rawId parameter ([#2799](https://github.com/danielsogl/awesome-cordova-plugins/issues/2799)) ([b61b339](https://github.com/danielsogl/awesome-cordova-plugins/commit/b61b33987f876ecaa0a341883bb8bd500cc72421))


### Features

* **crashlytics:** allow user to set userIdentifier for crashlytics ([#2792](https://github.com/danielsogl/awesome-cordova-plugins/issues/2792)) ([a3bd197](https://github.com/danielsogl/awesome-cordova-plugins/commit/a3bd19769fc8dc5c932f1c3e43dc3cfc44581362))
* **firebase-authentication:** add plugin ([#2797](https://github.com/danielsogl/awesome-cordova-plugins/issues/2797)) ([43bfeb4](https://github.com/danielsogl/awesome-cordova-plugins/commit/43bfeb487a1759c65e34bb2fa10c778d32a221d3))
* **line-login:** add plugin ([#2782](https://github.com/danielsogl/awesome-cordova-plugins/issues/2782)) ([dc4183d](https://github.com/danielsogl/awesome-cordova-plugins/commit/dc4183da07c429ee3c9b8f80db0b4c283320a85a))



# [4.16.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.21...v4.16.0) (2018-10-17)


### Bug Fixes

* **keyboard:** add missing property ([fcd6d26](https://github.com/danielsogl/awesome-cordova-plugins/commit/fcd6d26727a5a3d45ca90a75d8c5b58bad0c1204))
* **local-notifications:** add missing functions ([#2779](https://github.com/danielsogl/awesome-cordova-plugins/issues/2779)) ([336b3ff](https://github.com/danielsogl/awesome-cordova-plugins/commit/336b3ff89b0f46f254787b8c02485d417949fea9)), closes [#2778](https://github.com/danielsogl/awesome-cordova-plugins/issues/2778)


### Features

* **admob-plus:** Add admob-plus ([#2753](https://github.com/danielsogl/awesome-cordova-plugins/issues/2753)) ([6c99ec8](https://github.com/danielsogl/awesome-cordova-plugins/commit/6c99ec803377571aa7b2b764974cda8a46fcf11d))
* **firebase-messaging:** add revokeToken function ([#2763](https://github.com/danielsogl/awesome-cordova-plugins/issues/2763)) ([1a2dc3e](https://github.com/danielsogl/awesome-cordova-plugins/commit/1a2dc3ee73e5ec93144a62a8850fffa0ee5eaeaf))
* **lastCam:** add plugin ([#2759](https://github.com/danielsogl/awesome-cordova-plugins/issues/2759)) ([99cebcb](https://github.com/danielsogl/awesome-cordova-plugins/commit/99cebcba0bce80f4f158adacd651d005a24a6ddf))
* **nfc:** add NFC readerMode ([#2777](https://github.com/danielsogl/awesome-cordova-plugins/issues/2777)) ([2aa73b5](https://github.com/danielsogl/awesome-cordova-plugins/commit/2aa73b5546a53825b8a9daf4cd694c893895959f))
* **speechkit:** plugin updated with voice parameter ([#2761](https://github.com/danielsogl/awesome-cordova-plugins/issues/2761)) ([4468b52](https://github.com/danielsogl/awesome-cordova-plugins/commit/4468b520ad76fd0e0090e1badb8a01de9006fda4))



# [4.15.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.20...v4.15.0) (2018-09-25)


### Bug Fixes

* **keyboard:** use cordova-plugin-ionic-keyboard ([#2743](https://github.com/danielsogl/awesome-cordova-plugins/issues/2743)) ([1457a16](https://github.com/danielsogl/awesome-cordova-plugins/commit/1457a1698b5d58543fa11646a90000529c7eef8c)), closes [#2306](https://github.com/danielsogl/awesome-cordova-plugins/issues/2306)


### Features

* **plugins:** add AppleWallet ([#2740](https://github.com/danielsogl/awesome-cordova-plugins/issues/2740)) ([307477d](https://github.com/danielsogl/awesome-cordova-plugins/commit/307477da7879714bbb1f2e5b5d69b9b4637ba313))
* **plugins:** add web-server plugin ([#2726](https://github.com/danielsogl/awesome-cordova-plugins/issues/2726)) ([8116ddd](https://github.com/danielsogl/awesome-cordova-plugins/commit/8116ddd1399444d4eb023ee2416310f22f7f1f9c))
* **siri-shortcuts:** Add clear option for the activated shortcut ([#2734](https://github.com/danielsogl/awesome-cordova-plugins/issues/2734)) ([3eff280](https://github.com/danielsogl/awesome-cordova-plugins/commit/3eff280127330c70d23d35f1a7e83760a1a11f44))
* **taptic-engine:** add missing functions and types ([a6bcc9a](https://github.com/danielsogl/awesome-cordova-plugins/commit/a6bcc9affd2248df68a17e323b3e1c4aad689492))



# [4.14.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.18...v4.14.0) (2018-09-18)


### Bug Fixes

* **mobile-accessibility:** add correct pluginRef ([3699fa9](https://github.com/danielsogl/awesome-cordova-plugins/commit/3699fa9b50ade1dfbb116bff5c0e66f1198bed0e)), closes [#1860](https://github.com/danielsogl/awesome-cordova-plugins/issues/1860)
* **onesignal:** add missing setLocationShared method ([#2723](https://github.com/danielsogl/awesome-cordova-plugins/issues/2723)) ([8bab321](https://github.com/danielsogl/awesome-cordova-plugins/commit/8bab32173a738fc4c8960b63bcf1800602eed108))
* **push:** add missing Chanel options ([3ef9593](https://github.com/danielsogl/awesome-cordova-plugins/commit/3ef9593704080ad6a47c71e68191a5547a031792)), closes [#2712](https://github.com/danielsogl/awesome-cordova-plugins/issues/2712)
* **web-intent:** add missing properties ([d077c48](https://github.com/danielsogl/awesome-cordova-plugins/commit/d077c482055a28ca5c117b983d303b86c6e6c543)), closes [#2701](https://github.com/danielsogl/awesome-cordova-plugins/issues/2701)


### Features

* **chooster:** add plugin ([04db233](https://github.com/danielsogl/awesome-cordova-plugins/commit/04db233b338936075500b4c85e050d24b80c60f5)), closes [#2612](https://github.com/danielsogl/awesome-cordova-plugins/issues/2612)
* **local-notifications:** add missing functions ([10d222d](https://github.com/danielsogl/awesome-cordova-plugins/commit/10d222dceaed6bf372bec4ebaba0080946048294))
* **onesignal:** add missing functions ([51006a7](https://github.com/danielsogl/awesome-cordova-plugins/commit/51006a76a0cea1d762ebd786b4a647c86fb26dbc)), closes [#2504](https://github.com/danielsogl/awesome-cordova-plugins/issues/2504)



# [4.13.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.17...v4.13.0) (2018-09-15)


### Bug Fixes

* **bluetooth-le:** Various methods fixes  ([#2707](https://github.com/danielsogl/awesome-cordova-plugins/issues/2707)) ([7047920](https://github.com/danielsogl/awesome-cordova-plugins/commit/7047920a2a5c6a5c77e0fac3aa67e7737b0bedac))
* **in-app-review:** Transfer Plugin to the correct folder ([#2688](https://github.com/danielsogl/awesome-cordova-plugins/issues/2688)) ([22fd49b](https://github.com/danielsogl/awesome-cordova-plugins/commit/22fd49b5d39e3fb5e92743b879df5ee1fa9bd559))
* **ms-adal:** Update createAuthenticationContext ([#2705](https://github.com/danielsogl/awesome-cordova-plugins/issues/2705)) ([890129b](https://github.com/danielsogl/awesome-cordova-plugins/commit/890129bfdabbb2c27d1e9c9796e1055f58eb4b3a))


### Features

* **appsflyer:** Added Appsflyer Cordova SDK as ionic native plugin ([#2690](https://github.com/danielsogl/awesome-cordova-plugins/issues/2690)) ([3b3f942](https://github.com/danielsogl/awesome-cordova-plugins/commit/3b3f942ed5e5924e1e960c195b4758cb25e6c84d))
* **branch-io:** Add branch.io attribution and invitation plugin ([#2691](https://github.com/danielsogl/awesome-cordova-plugins/issues/2691)) ([90d75af](https://github.com/danielsogl/awesome-cordova-plugins/commit/90d75af9d11e441f75edfbf2c10fc63c97134334))
* **calldirectory:** add log function ([#2708](https://github.com/danielsogl/awesome-cordova-plugins/issues/2708)) ([9601a64](https://github.com/danielsogl/awesome-cordova-plugins/commit/9601a64227d894985530331b1c48bc13ab0f1133))
* **janalytics:** add  plugin ([#2711](https://github.com/danielsogl/awesome-cordova-plugins/issues/2711)) ([0b97176](https://github.com/danielsogl/awesome-cordova-plugins/commit/0b9717636c4220ce06f883e85eb75dadde99b7e0))
* **local-notifications:** Added local additional local notification action fields ([#2713](https://github.com/danielsogl/awesome-cordova-plugins/issues/2713)) ([267149b](https://github.com/danielsogl/awesome-cordova-plugins/commit/267149b16fdb2701b48a47741627cc784fa5c6e9))
* **mixpanel:** Update/add functions ([#2697](https://github.com/danielsogl/awesome-cordova-plugins/issues/2697)) ([ac467c5](https://github.com/danielsogl/awesome-cordova-plugins/commit/ac467c50ac30e5e5c6da2349b314b0f8049a7d5d))
* **wechat:** add plugin ([#2716](https://github.com/danielsogl/awesome-cordova-plugins/issues/2716)) ([10ac9ff](https://github.com/danielsogl/awesome-cordova-plugins/commit/10ac9ff9de6541bbd1a2709850cdb6205b8b4049))


### Reverts

* Revert "chore(): update changelog" ([667de5b](https://github.com/danielsogl/awesome-cordova-plugins/commit/667de5ba264194e0da383d5efcb65a2821949b46))
* Revert "4.12.3" ([2dc7ee8](https://github.com/danielsogl/awesome-cordova-plugins/commit/2dc7ee8916396132a8ab30f682f88c4793760e11))



# [5.0.0-beta.17](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.16...v5.0.0-beta.17) (2018-08-31)


### Bug Fixes

* **in-app-browser:** fix mandatory options ([#2684](https://github.com/danielsogl/awesome-cordova-plugins/issues/2684)) ([d82e675](https://github.com/danielsogl/awesome-cordova-plugins/commit/d82e67544233cfff04574b8a14d90408836217d8))



## [4.12.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.15...v4.12.1) (2018-08-31)


### Bug Fixes

* **open-native-settings:** allow supported input ([#2666](https://github.com/danielsogl/awesome-cordova-plugins/issues/2666)) ([be0dc3d](https://github.com/danielsogl/awesome-cordova-plugins/commit/be0dc3dac4a1df9c788f973f7b64a401441e65a2))


### Features

* **aes256:** Added new utility methods to generate secure key and secure IV ([#2675](https://github.com/danielsogl/awesome-cordova-plugins/issues/2675)) ([a731466](https://github.com/danielsogl/awesome-cordova-plugins/commit/a73146648fca0a19e8a76b9a552545d85d1fd627))
* **in-app-browser:** Add missing InAppBrowserOptions-properties ([#2669](https://github.com/danielsogl/awesome-cordova-plugins/issues/2669)) ([d90724e](https://github.com/danielsogl/awesome-cordova-plugins/commit/d90724ef70cec2b00eda4d56e1da9d0f63d67fc2))
* **push:** Added voip property to IOSPushOptions ([#2681](https://github.com/danielsogl/awesome-cordova-plugins/issues/2681)) ([03e4f0e](https://github.com/danielsogl/awesome-cordova-plugins/commit/03e4f0e439c2b49ee9b3276588e9b24d7759cdfd))



# [5.0.0-beta.15](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.12.0...v5.0.0-beta.15) (2018-08-25)


### Features

* **bluetooth-le:** add bluetooth-le plugin ([#2651](https://github.com/danielsogl/awesome-cordova-plugins/issues/2651)) ([591ee87](https://github.com/danielsogl/awesome-cordova-plugins/commit/591ee87e052d398ed3869bbe9d74bcb30b027405))
* **http:** add setSSLCertMode function ([8db1dbe](https://github.com/danielsogl/awesome-cordova-plugins/commit/8db1dbef7198ffe526e747c696ac2aca0dbb6952))



# [4.12.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.11.0...v4.12.0) (2018-08-16)


### Bug Fixes

* **extended-device-information:** Fixed Memory Display Bug ([#2641](https://github.com/danielsogl/awesome-cordova-plugins/issues/2641)) ([2ac5282](https://github.com/danielsogl/awesome-cordova-plugins/commit/2ac52822b8d37141f7f5f2ee755dc23fc115a8f3))
* **network:** bind listener to document instead of window ([#2622](https://github.com/danielsogl/awesome-cordova-plugins/issues/2622)) ([d10777a](https://github.com/danielsogl/awesome-cordova-plugins/commit/d10777a33b42cf79e253cee69e21f5a02dc539fe))
* **photo-library:** interface missing includeVideos ([3f415f9](https://github.com/danielsogl/awesome-cordova-plugins/commit/3f415f9beffbd111a8cd9e95b039fd240256e3d3)), closes [#2624](https://github.com/danielsogl/awesome-cordova-plugins/issues/2624)


### Features

* **fabric:** add fabric plugin ([#2618](https://github.com/danielsogl/awesome-cordova-plugins/issues/2618)) ([9b4fd02](https://github.com/danielsogl/awesome-cordova-plugins/commit/9b4fd02fa5f7f2d7a5bc06eeb53562cc968a70f5))
* **local-notifications:** add new foreground property ([#2633](https://github.com/danielsogl/awesome-cordova-plugins/issues/2633)) ([229b62c](https://github.com/danielsogl/awesome-cordova-plugins/commit/229b62c10b67a9dca0f257cd9279f2773dd83f01))
* **webengage:** add optional config with initialization ([#2637](https://github.com/danielsogl/awesome-cordova-plugins/issues/2637)) ([ca9a702](https://github.com/danielsogl/awesome-cordova-plugins/commit/ca9a70280845ae533e4bce32280bc185f2d0eef2))


### Reverts

* Revert "4.12.0" ([0764e28](https://github.com/danielsogl/awesome-cordova-plugins/commit/0764e2840837704f0791b74d15daa5fb56325b59))



# [4.11.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.10.1...v4.11.0) (2018-07-29)


### Bug Fixes

* **http:** add correct return types for downloadFile and uploadFile ([4092831](https://github.com/danielsogl/awesome-cordova-plugins/commit/4092831754727c1d1ef89e622f48122907f80fb1)), closes [#2615](https://github.com/danielsogl/awesome-cordova-plugins/issues/2615)


### Features

* **clevertap:** add CleverTap plugin ([#2609](https://github.com/danielsogl/awesome-cordova-plugins/issues/2609)) ([27d380e](https://github.com/danielsogl/awesome-cordova-plugins/commit/27d380ef4b8fda754bd05a3b57f2a814a80f8f97))
* **facebook:** add getDeferredApplink function ([3b32e19](https://github.com/danielsogl/awesome-cordova-plugins/commit/3b32e19bf17d0fb9ced6b15b0a7bc0c89b55e22d)), closes [#2510](https://github.com/danielsogl/awesome-cordova-plugins/issues/2510)
* **webengage:** add webengage plugin ([#2604](https://github.com/danielsogl/awesome-cordova-plugins/issues/2604)) ([bd5bd7e](https://github.com/danielsogl/awesome-cordova-plugins/commit/bd5bd7ea9df69676a837853c532fbb9613bfd247))


### Reverts

* Revert "chore(package): upgrade fs-extra" ([83194f6](https://github.com/danielsogl/awesome-cordova-plugins/commit/83194f616b91752153cf113d9024dd24168f88c4))



## [4.10.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.14...v4.10.1) (2018-07-25)


### Bug Fixes

* **nfs:** Optional arguments for records like textRecord ([#2605](https://github.com/danielsogl/awesome-cordova-plugins/issues/2605)) ([b635ba9](https://github.com/danielsogl/awesome-cordova-plugins/commit/b635ba99ea6011658ac94f9e0188f3c86f41ffa9))
* **user-agent:** Plugin not installed ([#2607](https://github.com/danielsogl/awesome-cordova-plugins/issues/2607)) ([79cb478](https://github.com/danielsogl/awesome-cordova-plugins/commit/79cb478c261503dc00842e4acd1e2cc71311d3bf))



# [5.0.0-beta.24](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.20.0...v5.0.0-beta.24) (2019-01-20)



# [5.0.0-beta.23](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.22...v5.0.0-beta.23) (2019-01-19)


### Features

* add analytics-firebase plugin ([e374b52](https://github.com/danielsogl/awesome-cordova-plugins/commit/e374b52c59dafb523643edfe752107c1083753c6))
* **audio-management:** add plugin for audio streams ([#2877](https://github.com/danielsogl/awesome-cordova-plugins/issues/2877)) ([34ecd29](https://github.com/danielsogl/awesome-cordova-plugins/commit/34ecd29d9f2be84864c0ac5cf2c5c208a9bbe112))
* **blinkid:** add plugin ([#2833](https://github.com/danielsogl/awesome-cordova-plugins/issues/2833)) ([8e405cc](https://github.com/danielsogl/awesome-cordova-plugins/commit/8e405cc3d3529486d49511b85153756c82f83cc7))



# [5.0.0-beta.22](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.18.0...v5.0.0-beta.22) (2018-12-01)


### Bug Fixes

* **local-notifications:** update type of the every property ([#2825](https://github.com/danielsogl/awesome-cordova-plugins/issues/2825)) ([31e4058](https://github.com/danielsogl/awesome-cordova-plugins/commit/31e405825766c5dd5c6576e3674586ecc7b9bdf6))


### chore

* update deps ([649dca1](https://github.com/danielsogl/awesome-cordova-plugins/commit/649dca1ef4e69b19e9af0c75a2ee39ae50b497fd))


### Features

* **downloader:** add plugin ([#2820](https://github.com/danielsogl/awesome-cordova-plugins/issues/2820)) ([b9e9aa1](https://github.com/danielsogl/awesome-cordova-plugins/commit/b9e9aa184e4b6074b0b95ecaae3ce5b63b18af6d))


### BREAKING CHANGES

* Requires Angular 7.1 and TypeScript 3.1



# [5.0.0-beta.21](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.15.0...v5.0.0-beta.21) (2018-09-25)


### Bug Fixes

* **admob-free:** fix duplicated class ([95b9262](https://github.com/danielsogl/awesome-cordova-plugins/commit/95b92623a6a13de5f988e24d5cbf17a723ae80e3))
* **bluetooth-le:** Removed a wrong cordova decorator param ([#2733](https://github.com/danielsogl/awesome-cordova-plugins/issues/2733)) ([cbeb413](https://github.com/danielsogl/awesome-cordova-plugins/commit/cbeb4139d9e6ba65957346f25867f26584ed7bfc))
* **build:** fix macos mojave build errors ([358474d](https://github.com/danielsogl/awesome-cordova-plugins/commit/358474dcfd9e51fa3efe875681ab02500512759d))
* **keyboard:** include the mode parameter in setResizeMode() ([8d57df3](https://github.com/danielsogl/awesome-cordova-plugins/commit/8d57df3e6449ab1d4ce3b0d0aac5f800d71ba681))
* **keyboard:** use cordova-plugin-ionic-keyboard ([#2743](https://github.com/danielsogl/awesome-cordova-plugins/issues/2743)) ([fbf7463](https://github.com/danielsogl/awesome-cordova-plugins/commit/fbf7463724ae8bf7e4916fa6ec2efc90671dd1c3)), closes [#2306](https://github.com/danielsogl/awesome-cordova-plugins/issues/2306)
* **printer:** import getPromise ([15cd285](https://github.com/danielsogl/awesome-cordova-plugins/commit/15cd285ec6d003a5bce6c21b5b8f8e26b9accfdf))
* **screenshot:** import getPromise ([e661f2e](https://github.com/danielsogl/awesome-cordova-plugins/commit/e661f2ece96e53cf855b2783243036959b9add56))
* **secure-storage:** add missing "getPromise" import ([#2727](https://github.com/danielsogl/awesome-cordova-plugins/issues/2727)) ([457d47c](https://github.com/danielsogl/awesome-cordova-plugins/commit/457d47cc16c922effcca09c80417e4031e01b776))
* **secure-storage:** import getPromise ([653f5a2](https://github.com/danielsogl/awesome-cordova-plugins/commit/653f5a29691131981a6cfab0532611e1adccf63a))


### Reverts

* Revert "chore(pacakge): bump deps" ([d3af519](https://github.com/danielsogl/awesome-cordova-plugins/commit/d3af51915efab8d7e051e1c72ec087d4eb8710d8))



# [5.0.0-beta.20](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.19...v5.0.0-beta.20) (2018-09-18)


### Bug Fixes

* **build:** Fix TypeScript bug, wrong type exported for wrap fn ([c433317](https://github.com/danielsogl/awesome-cordova-plugins/commit/c43331705147edcf1a0de80a5fdf5f57613c8b9a))



# [5.0.0-beta.19](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.14.0...v5.0.0-beta.19) (2018-09-18)


### Bug Fixes

* **index-app-content:** fix lint ([2611061](https://github.com/danielsogl/awesome-cordova-plugins/commit/261106131e04e47b29faaf4e27dd24af8b5583f7))
* **ms-adal:** remove duplicate imports ([4803912](https://github.com/danielsogl/awesome-cordova-plugins/commit/4803912350d2a824a2c467e9a3b2c6e2946c6b12))
* **web-intent:** fix lint ([9feefe8](https://github.com/danielsogl/awesome-cordova-plugins/commit/9feefe8454b9e65b5d3111661164d0c70eb5b719))



# [5.0.0-beta.18](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.13.0...v5.0.0-beta.18) (2018-09-15)


### Bug Fixes

* **appodeal:** removed bad imports ([7d5e7aa](https://github.com/danielsogl/awesome-cordova-plugins/commit/7d5e7aaa7d768d24941ace1c3e5ab8b78af0dc66))
* **camera:** fixing builds ([c8d25a1](https://github.com/danielsogl/awesome-cordova-plugins/commit/c8d25a1fc546e1be522e5ccaaa27f50411feaee4))
* **clevertap:** fix jsdoc ([e47a3e1](https://github.com/danielsogl/awesome-cordova-plugins/commit/e47a3e1522d7995df1a6e18b9060b46cd08a1a79))
* **contacts:** remove double import of checkAvailability ([#2659](https://github.com/danielsogl/awesome-cordova-plugins/issues/2659)) ([1ad4cc1](https://github.com/danielsogl/awesome-cordova-plugins/commit/1ad4cc1375ba1391a1feded3acc20614cddfca93))
* **core:** wrapEventObservable ([#2660](https://github.com/danielsogl/awesome-cordova-plugins/issues/2660)) ([bd34581](https://github.com/danielsogl/awesome-cordova-plugins/commit/bd345818f874884dede161be45f176df552956fe))
* **extended-device-information:** fix wrong decorator ([5e9c92a](https://github.com/danielsogl/awesome-cordova-plugins/commit/5e9c92a7736786776313576070df52e84810e874))
* **file-tramsfer:** fix v5 imports for file-transfer plugin ([#2537](https://github.com/danielsogl/awesome-cordova-plugins/issues/2537)) ([406ad12](https://github.com/danielsogl/awesome-cordova-plugins/commit/406ad1223243cac13e15e6f135c69f8b843d2d3a))



# [5.0.0-beta.12](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.8.0...v5.0.0-beta.12) (2018-06-23)


### Bug Fixes

* build errors ([f70eaea](https://github.com/danielsogl/awesome-cordova-plugins/commit/f70eaea71ebcaa832eb6c48a3fdc382d7703ee6c))
* **build:** fix ngx build errors ([cc9a980](https://github.com/danielsogl/awesome-cordova-plugins/commit/cc9a980dc3d8ccb5bf13aa1c7bb91dbb31b0e50e))
* **core:** fix rxjs 6 build errors ([48b0f16](https://github.com/danielsogl/awesome-cordova-plugins/commit/48b0f16ed9cef7ff10cff6f729d2221d1ee7bf1b)), closes [#2439](https://github.com/danielsogl/awesome-cordova-plugins/issues/2439)
* fix lint ([b36a1f9](https://github.com/danielsogl/awesome-cordova-plugins/commit/b36a1f9df6427e50037782a5f7b51ec39d895f03))
* fix more lint errors ([0b3d299](https://github.com/danielsogl/awesome-cordova-plugins/commit/0b3d299a963d2873375a2d6fb933b5555fc0e5a4))
* fix rxjs 6 imports ([e0b0687](https://github.com/danielsogl/awesome-cordova-plugins/commit/e0b068700490a9408b7de98970c16fba7b0d5017))
* fix tealium jsdoc ([f34b6e6](https://github.com/danielsogl/awesome-cordova-plugins/commit/f34b6e6664fb2bdca70f28e0c3c1dea2c62934f8))
* **linting:** Fixing misc linting errors that typedoc complains about ([#2476](https://github.com/danielsogl/awesome-cordova-plugins/issues/2476)) ([d3c2859](https://github.com/danielsogl/awesome-cordova-plugins/commit/d3c2859d3865539dffb2d8039da0f216ada007f3))
* **plugins:** fix rxjs 6 build errors ([3ced31e](https://github.com/danielsogl/awesome-cordova-plugins/commit/3ced31ed2aef7325a515649f28674c6083f15d67)), closes [#2439](https://github.com/danielsogl/awesome-cordova-plugins/issues/2439)
* **str-prnt:** rxjs 6 import ([48714d7](https://github.com/danielsogl/awesome-cordova-plugins/commit/48714d72d663dc4f29851ac601e6c8cbbc320ec0))
* **v5-builder:** stop transforming "declare" classes ([#2503](https://github.com/danielsogl/awesome-cordova-plugins/issues/2503)) ([6662234](https://github.com/danielsogl/awesome-cordova-plugins/commit/6662234894c461a4051305841ceb623f23f4d1f2))


### Features

* **ionic-webview:** plugin for cordova-plugin-ionic-webview 2.0 ([8beb177](https://github.com/danielsogl/awesome-cordova-plugins/commit/8beb1774b8f35958f69d14dbfcb16dcc8bdf5f80))



# [5.0.0-beta.4](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.3...v5.0.0-beta.4) (2017-12-29)



# [4.20.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.23...v4.20.0) (2019-01-20)


### Bug Fixes

* **bluetooth-le:** Fix typo in interface definition ([#2881](https://github.com/danielsogl/awesome-cordova-plugins/issues/2881)) ([c2f4561](https://github.com/danielsogl/awesome-cordova-plugins/commit/c2f45616acf1c4c598d18ec14f3ea2b19c2a444b))
* **health:** fix typos ([#2831](https://github.com/danielsogl/awesome-cordova-plugins/issues/2831)) ([ea3150e](https://github.com/danielsogl/awesome-cordova-plugins/commit/ea3150e99af96c8f09809d385eb0620687afa58c))


### Features

* **adjust:** add adjust sdk plugin ([#2872](https://github.com/danielsogl/awesome-cordova-plugins/issues/2872)) ([9e6705d](https://github.com/danielsogl/awesome-cordova-plugins/commit/9e6705df7f06f88ad28db66e32208d989466bd31))
* **admob:** add plugin ([#2864](https://github.com/danielsogl/awesome-cordova-plugins/issues/2864)) ([707ce1c](https://github.com/danielsogl/awesome-cordova-plugins/commit/707ce1cad966dee7507e9a43cbd4dce2b587d7a3))
* **analytics-firebase:** add plugin ([#2862](https://github.com/danielsogl/awesome-cordova-plugins/issues/2862)) ([5df3de7](https://github.com/danielsogl/awesome-cordova-plugins/commit/5df3de7dc08c6b563c3ceaa66ee2f52a1c2960f2))
* **background-geolocation:** add v3 functions and interfaces ([#2393](https://github.com/danielsogl/awesome-cordova-plugins/issues/2393)) ([1ba6f97](https://github.com/danielsogl/awesome-cordova-plugins/commit/1ba6f970825babb33df7f73e3bd60995d7d13815))
* **baidu-push:** add plugin ([#2838](https://github.com/danielsogl/awesome-cordova-plugins/issues/2838)) ([c3de8df](https://github.com/danielsogl/awesome-cordova-plugins/commit/c3de8dfaba158c7f5726bcfd67481c7525375450))
* **firebase:** add clearAllNotifications method ([#2867](https://github.com/danielsogl/awesome-cordova-plugins/issues/2867)) ([7c46d8c](https://github.com/danielsogl/awesome-cordova-plugins/commit/7c46d8c2fc44625f851d6cf95a6e0a17c9d6ae80))
* **gao-de-location:** add plugin ([#2857](https://github.com/danielsogl/awesome-cordova-plugins/issues/2857)) ([e2b25de](https://github.com/danielsogl/awesome-cordova-plugins/commit/e2b25deff691502adf03f03798306a1ab72ea618))
* **in-app-browser:** add 'beforeload' as option ([#2863](https://github.com/danielsogl/awesome-cordova-plugins/issues/2863)) ([d33bcb0](https://github.com/danielsogl/awesome-cordova-plugins/commit/d33bcb02208c2cddb86a9aac15da31d4e3808758))
* **lottie-splash-screen:** add new plugin ([#2880](https://github.com/danielsogl/awesome-cordova-plugins/issues/2880)) ([603d694](https://github.com/danielsogl/awesome-cordova-plugins/commit/603d6943efdd8b00a7029e3cde6a652cf59cad2c))
* **web-intent:** Add missing type info ([#2878](https://github.com/danielsogl/awesome-cordova-plugins/issues/2878)) ([3226f76](https://github.com/danielsogl/awesome-cordova-plugins/commit/3226f76ef92d44512d395c8ba13788dbbcf0a993))



# [4.18.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.17.0...v4.18.0) (2018-12-01)


### Bug Fixes

* **local-notifications:** update type of the every property ([#2825](https://github.com/danielsogl/awesome-cordova-plugins/issues/2825)) ([b166cc5](https://github.com/danielsogl/awesome-cordova-plugins/commit/b166cc51eae3b17da005ff39f4e1d85727640757))


### Features

* **downloader:** add plugin ([#2820](https://github.com/danielsogl/awesome-cordova-plugins/issues/2820)) ([0065704](https://github.com/danielsogl/awesome-cordova-plugins/commit/006570483d5e0a57c2799cb2d7899d219e845666))
* **line-login:** add loginWeb function ([#2810](https://github.com/danielsogl/awesome-cordova-plugins/issues/2810)) ([7145afa](https://github.com/danielsogl/awesome-cordova-plugins/commit/7145afa24f2db5c820c6d8272257b50659aa6863))


### Reverts

* Revert "bump deps" ([543fa64](https://github.com/danielsogl/awesome-cordova-plugins/commit/543fa64b35dac69a0571ed726bfd49278b4817da))



# [4.17.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.16.0...v4.17.0) (2018-11-02)


### Bug Fixes

* **contacts plugin:** add the rawId parameter ([#2799](https://github.com/danielsogl/awesome-cordova-plugins/issues/2799)) ([b61b339](https://github.com/danielsogl/awesome-cordova-plugins/commit/b61b33987f876ecaa0a341883bb8bd500cc72421))


### Features

* **crashlytics:** allow user to set userIdentifier for crashlytics ([#2792](https://github.com/danielsogl/awesome-cordova-plugins/issues/2792)) ([a3bd197](https://github.com/danielsogl/awesome-cordova-plugins/commit/a3bd19769fc8dc5c932f1c3e43dc3cfc44581362))
* **firebase-authentication:** add plugin ([#2797](https://github.com/danielsogl/awesome-cordova-plugins/issues/2797)) ([43bfeb4](https://github.com/danielsogl/awesome-cordova-plugins/commit/43bfeb487a1759c65e34bb2fa10c778d32a221d3))
* **line-login:** add plugin ([#2782](https://github.com/danielsogl/awesome-cordova-plugins/issues/2782)) ([dc4183d](https://github.com/danielsogl/awesome-cordova-plugins/commit/dc4183da07c429ee3c9b8f80db0b4c283320a85a))



# [4.16.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.21...v4.16.0) (2018-10-17)


### Bug Fixes

* **keyboard:** add missing property ([fcd6d26](https://github.com/danielsogl/awesome-cordova-plugins/commit/fcd6d26727a5a3d45ca90a75d8c5b58bad0c1204))
* **local-notifications:** add missing functions ([#2779](https://github.com/danielsogl/awesome-cordova-plugins/issues/2779)) ([336b3ff](https://github.com/danielsogl/awesome-cordova-plugins/commit/336b3ff89b0f46f254787b8c02485d417949fea9)), closes [#2778](https://github.com/danielsogl/awesome-cordova-plugins/issues/2778)


### Features

* **admob-plus:** Add admob-plus ([#2753](https://github.com/danielsogl/awesome-cordova-plugins/issues/2753)) ([6c99ec8](https://github.com/danielsogl/awesome-cordova-plugins/commit/6c99ec803377571aa7b2b764974cda8a46fcf11d))
* **firebase-messaging:** add revokeToken function ([#2763](https://github.com/danielsogl/awesome-cordova-plugins/issues/2763)) ([1a2dc3e](https://github.com/danielsogl/awesome-cordova-plugins/commit/1a2dc3ee73e5ec93144a62a8850fffa0ee5eaeaf))
* **lastCam:** add plugin ([#2759](https://github.com/danielsogl/awesome-cordova-plugins/issues/2759)) ([99cebcb](https://github.com/danielsogl/awesome-cordova-plugins/commit/99cebcba0bce80f4f158adacd651d005a24a6ddf))
* **nfc:** add NFC readerMode ([#2777](https://github.com/danielsogl/awesome-cordova-plugins/issues/2777)) ([2aa73b5](https://github.com/danielsogl/awesome-cordova-plugins/commit/2aa73b5546a53825b8a9daf4cd694c893895959f))
* **speechkit:** plugin updated with voice parameter ([#2761](https://github.com/danielsogl/awesome-cordova-plugins/issues/2761)) ([4468b52](https://github.com/danielsogl/awesome-cordova-plugins/commit/4468b520ad76fd0e0090e1badb8a01de9006fda4))



# [4.15.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.20...v4.15.0) (2018-09-25)


### Bug Fixes

* **keyboard:** use cordova-plugin-ionic-keyboard ([#2743](https://github.com/danielsogl/awesome-cordova-plugins/issues/2743)) ([1457a16](https://github.com/danielsogl/awesome-cordova-plugins/commit/1457a1698b5d58543fa11646a90000529c7eef8c)), closes [#2306](https://github.com/danielsogl/awesome-cordova-plugins/issues/2306)


### Features

* **plugins:** add AppleWallet ([#2740](https://github.com/danielsogl/awesome-cordova-plugins/issues/2740)) ([307477d](https://github.com/danielsogl/awesome-cordova-plugins/commit/307477da7879714bbb1f2e5b5d69b9b4637ba313))
* **plugins:** add web-server plugin ([#2726](https://github.com/danielsogl/awesome-cordova-plugins/issues/2726)) ([8116ddd](https://github.com/danielsogl/awesome-cordova-plugins/commit/8116ddd1399444d4eb023ee2416310f22f7f1f9c))
* **siri-shortcuts:** Add clear option for the activated shortcut ([#2734](https://github.com/danielsogl/awesome-cordova-plugins/issues/2734)) ([3eff280](https://github.com/danielsogl/awesome-cordova-plugins/commit/3eff280127330c70d23d35f1a7e83760a1a11f44))
* **taptic-engine:** add missing functions and types ([a6bcc9a](https://github.com/danielsogl/awesome-cordova-plugins/commit/a6bcc9affd2248df68a17e323b3e1c4aad689492))



# [4.14.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.18...v4.14.0) (2018-09-18)


### Bug Fixes

* **mobile-accessibility:** add correct pluginRef ([3699fa9](https://github.com/danielsogl/awesome-cordova-plugins/commit/3699fa9b50ade1dfbb116bff5c0e66f1198bed0e)), closes [#1860](https://github.com/danielsogl/awesome-cordova-plugins/issues/1860)
* **onesignal:** add missing setLocationShared method ([#2723](https://github.com/danielsogl/awesome-cordova-plugins/issues/2723)) ([8bab321](https://github.com/danielsogl/awesome-cordova-plugins/commit/8bab32173a738fc4c8960b63bcf1800602eed108))
* **push:** add missing Chanel options ([3ef9593](https://github.com/danielsogl/awesome-cordova-plugins/commit/3ef9593704080ad6a47c71e68191a5547a031792)), closes [#2712](https://github.com/danielsogl/awesome-cordova-plugins/issues/2712)
* **web-intent:** add missing properties ([d077c48](https://github.com/danielsogl/awesome-cordova-plugins/commit/d077c482055a28ca5c117b983d303b86c6e6c543)), closes [#2701](https://github.com/danielsogl/awesome-cordova-plugins/issues/2701)


### Features

* **chooster:** add plugin ([04db233](https://github.com/danielsogl/awesome-cordova-plugins/commit/04db233b338936075500b4c85e050d24b80c60f5)), closes [#2612](https://github.com/danielsogl/awesome-cordova-plugins/issues/2612)
* **local-notifications:** add missing functions ([10d222d](https://github.com/danielsogl/awesome-cordova-plugins/commit/10d222dceaed6bf372bec4ebaba0080946048294))
* **onesignal:** add missing functions ([51006a7](https://github.com/danielsogl/awesome-cordova-plugins/commit/51006a76a0cea1d762ebd786b4a647c86fb26dbc)), closes [#2504](https://github.com/danielsogl/awesome-cordova-plugins/issues/2504)



# [4.13.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.17...v4.13.0) (2018-09-15)


### Bug Fixes

* **bluetooth-le:** Various methods fixes  ([#2707](https://github.com/danielsogl/awesome-cordova-plugins/issues/2707)) ([7047920](https://github.com/danielsogl/awesome-cordova-plugins/commit/7047920a2a5c6a5c77e0fac3aa67e7737b0bedac))
* **in-app-review:** Transfer Plugin to the correct folder ([#2688](https://github.com/danielsogl/awesome-cordova-plugins/issues/2688)) ([22fd49b](https://github.com/danielsogl/awesome-cordova-plugins/commit/22fd49b5d39e3fb5e92743b879df5ee1fa9bd559))
* **ms-adal:** Update createAuthenticationContext ([#2705](https://github.com/danielsogl/awesome-cordova-plugins/issues/2705)) ([890129b](https://github.com/danielsogl/awesome-cordova-plugins/commit/890129bfdabbb2c27d1e9c9796e1055f58eb4b3a))


### Features

* **appsflyer:** Added Appsflyer Cordova SDK as ionic native plugin ([#2690](https://github.com/danielsogl/awesome-cordova-plugins/issues/2690)) ([3b3f942](https://github.com/danielsogl/awesome-cordova-plugins/commit/3b3f942ed5e5924e1e960c195b4758cb25e6c84d))
* **branch-io:** Add branch.io attribution and invitation plugin ([#2691](https://github.com/danielsogl/awesome-cordova-plugins/issues/2691)) ([90d75af](https://github.com/danielsogl/awesome-cordova-plugins/commit/90d75af9d11e441f75edfbf2c10fc63c97134334))
* **calldirectory:** add log function ([#2708](https://github.com/danielsogl/awesome-cordova-plugins/issues/2708)) ([9601a64](https://github.com/danielsogl/awesome-cordova-plugins/commit/9601a64227d894985530331b1c48bc13ab0f1133))
* **janalytics:** add  plugin ([#2711](https://github.com/danielsogl/awesome-cordova-plugins/issues/2711)) ([0b97176](https://github.com/danielsogl/awesome-cordova-plugins/commit/0b9717636c4220ce06f883e85eb75dadde99b7e0))
* **local-notifications:** Added local additional local notification action fields ([#2713](https://github.com/danielsogl/awesome-cordova-plugins/issues/2713)) ([267149b](https://github.com/danielsogl/awesome-cordova-plugins/commit/267149b16fdb2701b48a47741627cc784fa5c6e9))
* **mixpanel:** Update/add functions ([#2697](https://github.com/danielsogl/awesome-cordova-plugins/issues/2697)) ([ac467c5](https://github.com/danielsogl/awesome-cordova-plugins/commit/ac467c50ac30e5e5c6da2349b314b0f8049a7d5d))
* **wechat:** add plugin ([#2716](https://github.com/danielsogl/awesome-cordova-plugins/issues/2716)) ([10ac9ff](https://github.com/danielsogl/awesome-cordova-plugins/commit/10ac9ff9de6541bbd1a2709850cdb6205b8b4049))


### Reverts

* Revert "chore(): update changelog" ([667de5b](https://github.com/danielsogl/awesome-cordova-plugins/commit/667de5ba264194e0da383d5efcb65a2821949b46))
* Revert "4.12.3" ([2dc7ee8](https://github.com/danielsogl/awesome-cordova-plugins/commit/2dc7ee8916396132a8ab30f682f88c4793760e11))



# [5.0.0-beta.17](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.16...v5.0.0-beta.17) (2018-08-31)


### Bug Fixes

* **in-app-browser:** fix mandatory options ([#2684](https://github.com/danielsogl/awesome-cordova-plugins/issues/2684)) ([d82e675](https://github.com/danielsogl/awesome-cordova-plugins/commit/d82e67544233cfff04574b8a14d90408836217d8))



## [4.12.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.15...v4.12.1) (2018-08-31)


### Bug Fixes

* **open-native-settings:** allow supported input ([#2666](https://github.com/danielsogl/awesome-cordova-plugins/issues/2666)) ([be0dc3d](https://github.com/danielsogl/awesome-cordova-plugins/commit/be0dc3dac4a1df9c788f973f7b64a401441e65a2))


### Features

* **aes256:** Added new utility methods to generate secure key and secure IV ([#2675](https://github.com/danielsogl/awesome-cordova-plugins/issues/2675)) ([a731466](https://github.com/danielsogl/awesome-cordova-plugins/commit/a73146648fca0a19e8a76b9a552545d85d1fd627))
* **in-app-browser:** Add missing InAppBrowserOptions-properties ([#2669](https://github.com/danielsogl/awesome-cordova-plugins/issues/2669)) ([d90724e](https://github.com/danielsogl/awesome-cordova-plugins/commit/d90724ef70cec2b00eda4d56e1da9d0f63d67fc2))
* **push:** Added voip property to IOSPushOptions ([#2681](https://github.com/danielsogl/awesome-cordova-plugins/issues/2681)) ([03e4f0e](https://github.com/danielsogl/awesome-cordova-plugins/commit/03e4f0e439c2b49ee9b3276588e9b24d7759cdfd))



# [5.0.0-beta.15](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.12.0...v5.0.0-beta.15) (2018-08-25)


### Features

* **bluetooth-le:** add bluetooth-le plugin ([#2651](https://github.com/danielsogl/awesome-cordova-plugins/issues/2651)) ([591ee87](https://github.com/danielsogl/awesome-cordova-plugins/commit/591ee87e052d398ed3869bbe9d74bcb30b027405))
* **http:** add setSSLCertMode function ([8db1dbe](https://github.com/danielsogl/awesome-cordova-plugins/commit/8db1dbef7198ffe526e747c696ac2aca0dbb6952))



# [4.12.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.11.0...v4.12.0) (2018-08-16)


### Bug Fixes

* **extended-device-information:** Fixed Memory Display Bug ([#2641](https://github.com/danielsogl/awesome-cordova-plugins/issues/2641)) ([2ac5282](https://github.com/danielsogl/awesome-cordova-plugins/commit/2ac52822b8d37141f7f5f2ee755dc23fc115a8f3))
* **network:** bind listener to document instead of window ([#2622](https://github.com/danielsogl/awesome-cordova-plugins/issues/2622)) ([d10777a](https://github.com/danielsogl/awesome-cordova-plugins/commit/d10777a33b42cf79e253cee69e21f5a02dc539fe))
* **photo-library:** interface missing includeVideos ([3f415f9](https://github.com/danielsogl/awesome-cordova-plugins/commit/3f415f9beffbd111a8cd9e95b039fd240256e3d3)), closes [#2624](https://github.com/danielsogl/awesome-cordova-plugins/issues/2624)


### Features

* **fabric:** add fabric plugin ([#2618](https://github.com/danielsogl/awesome-cordova-plugins/issues/2618)) ([9b4fd02](https://github.com/danielsogl/awesome-cordova-plugins/commit/9b4fd02fa5f7f2d7a5bc06eeb53562cc968a70f5))
* **local-notifications:** add new foreground property ([#2633](https://github.com/danielsogl/awesome-cordova-plugins/issues/2633)) ([229b62c](https://github.com/danielsogl/awesome-cordova-plugins/commit/229b62c10b67a9dca0f257cd9279f2773dd83f01))
* **webengage:** add optional config with initialization ([#2637](https://github.com/danielsogl/awesome-cordova-plugins/issues/2637)) ([ca9a702](https://github.com/danielsogl/awesome-cordova-plugins/commit/ca9a70280845ae533e4bce32280bc185f2d0eef2))


### Reverts

* Revert "4.12.0" ([0764e28](https://github.com/danielsogl/awesome-cordova-plugins/commit/0764e2840837704f0791b74d15daa5fb56325b59))



# [4.11.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.10.1...v4.11.0) (2018-07-29)


### Bug Fixes

* **http:** add correct return types for downloadFile and uploadFile ([4092831](https://github.com/danielsogl/awesome-cordova-plugins/commit/4092831754727c1d1ef89e622f48122907f80fb1)), closes [#2615](https://github.com/danielsogl/awesome-cordova-plugins/issues/2615)


### Features

* **clevertap:** add CleverTap plugin ([#2609](https://github.com/danielsogl/awesome-cordova-plugins/issues/2609)) ([27d380e](https://github.com/danielsogl/awesome-cordova-plugins/commit/27d380ef4b8fda754bd05a3b57f2a814a80f8f97))
* **facebook:** add getDeferredApplink function ([3b32e19](https://github.com/danielsogl/awesome-cordova-plugins/commit/3b32e19bf17d0fb9ced6b15b0a7bc0c89b55e22d)), closes [#2510](https://github.com/danielsogl/awesome-cordova-plugins/issues/2510)
* **webengage:** add webengage plugin ([#2604](https://github.com/danielsogl/awesome-cordova-plugins/issues/2604)) ([bd5bd7e](https://github.com/danielsogl/awesome-cordova-plugins/commit/bd5bd7ea9df69676a837853c532fbb9613bfd247))


### Reverts

* Revert "chore(package): upgrade fs-extra" ([83194f6](https://github.com/danielsogl/awesome-cordova-plugins/commit/83194f616b91752153cf113d9024dd24168f88c4))



## [4.10.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.14...v4.10.1) (2018-07-25)


### Bug Fixes

* **nfs:** Optional arguments for records like textRecord ([#2605](https://github.com/danielsogl/awesome-cordova-plugins/issues/2605)) ([b635ba9](https://github.com/danielsogl/awesome-cordova-plugins/commit/b635ba99ea6011658ac94f9e0188f3c86f41ffa9))
* **user-agent:** Plugin not installed ([#2607](https://github.com/danielsogl/awesome-cordova-plugins/issues/2607)) ([79cb478](https://github.com/danielsogl/awesome-cordova-plugins/commit/79cb478c261503dc00842e4acd1e2cc71311d3bf))



# [5.0.0-beta.23](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.22...v5.0.0-beta.23) (2019-01-19)


### Features

* add analytics-firebase plugin ([e374b52](https://github.com/danielsogl/awesome-cordova-plugins/commit/e374b52c59dafb523643edfe752107c1083753c6))
* **audio-management:** add plugin for audio streams ([#2877](https://github.com/danielsogl/awesome-cordova-plugins/issues/2877)) ([34ecd29](https://github.com/danielsogl/awesome-cordova-plugins/commit/34ecd29d9f2be84864c0ac5cf2c5c208a9bbe112))
* **blinkid:** add plugin ([#2833](https://github.com/danielsogl/awesome-cordova-plugins/issues/2833)) ([8e405cc](https://github.com/danielsogl/awesome-cordova-plugins/commit/8e405cc3d3529486d49511b85153756c82f83cc7))



# [5.0.0-beta.22](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.18.0...v5.0.0-beta.22) (2018-12-01)


### Bug Fixes

* **local-notifications:** update type of the every property ([#2825](https://github.com/danielsogl/awesome-cordova-plugins/issues/2825)) ([31e4058](https://github.com/danielsogl/awesome-cordova-plugins/commit/31e405825766c5dd5c6576e3674586ecc7b9bdf6))


### chore

* update deps ([649dca1](https://github.com/danielsogl/awesome-cordova-plugins/commit/649dca1ef4e69b19e9af0c75a2ee39ae50b497fd))


### Features

* **downloader:** add plugin ([#2820](https://github.com/danielsogl/awesome-cordova-plugins/issues/2820)) ([b9e9aa1](https://github.com/danielsogl/awesome-cordova-plugins/commit/b9e9aa184e4b6074b0b95ecaae3ce5b63b18af6d))


### BREAKING CHANGES

* Requires Angular 7.1 and TypeScript 3.1



# [5.0.0-beta.21](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.15.0...v5.0.0-beta.21) (2018-09-25)


### Bug Fixes

* **admob-free:** fix duplicated class ([95b9262](https://github.com/danielsogl/awesome-cordova-plugins/commit/95b92623a6a13de5f988e24d5cbf17a723ae80e3))
* **bluetooth-le:** Removed a wrong cordova decorator param ([#2733](https://github.com/danielsogl/awesome-cordova-plugins/issues/2733)) ([cbeb413](https://github.com/danielsogl/awesome-cordova-plugins/commit/cbeb4139d9e6ba65957346f25867f26584ed7bfc))
* **build:** fix macos mojave build errors ([358474d](https://github.com/danielsogl/awesome-cordova-plugins/commit/358474dcfd9e51fa3efe875681ab02500512759d))
* **keyboard:** include the mode parameter in setResizeMode() ([8d57df3](https://github.com/danielsogl/awesome-cordova-plugins/commit/8d57df3e6449ab1d4ce3b0d0aac5f800d71ba681))
* **keyboard:** use cordova-plugin-ionic-keyboard ([#2743](https://github.com/danielsogl/awesome-cordova-plugins/issues/2743)) ([fbf7463](https://github.com/danielsogl/awesome-cordova-plugins/commit/fbf7463724ae8bf7e4916fa6ec2efc90671dd1c3)), closes [#2306](https://github.com/danielsogl/awesome-cordova-plugins/issues/2306)
* **printer:** import getPromise ([15cd285](https://github.com/danielsogl/awesome-cordova-plugins/commit/15cd285ec6d003a5bce6c21b5b8f8e26b9accfdf))
* **screenshot:** import getPromise ([e661f2e](https://github.com/danielsogl/awesome-cordova-plugins/commit/e661f2ece96e53cf855b2783243036959b9add56))
* **secure-storage:** add missing "getPromise" import ([#2727](https://github.com/danielsogl/awesome-cordova-plugins/issues/2727)) ([457d47c](https://github.com/danielsogl/awesome-cordova-plugins/commit/457d47cc16c922effcca09c80417e4031e01b776))
* **secure-storage:** import getPromise ([653f5a2](https://github.com/danielsogl/awesome-cordova-plugins/commit/653f5a29691131981a6cfab0532611e1adccf63a))


### Reverts

* Revert "chore(pacakge): bump deps" ([d3af519](https://github.com/danielsogl/awesome-cordova-plugins/commit/d3af51915efab8d7e051e1c72ec087d4eb8710d8))



# [5.0.0-beta.20](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.19...v5.0.0-beta.20) (2018-09-18)


### Bug Fixes

* **build:** Fix TypeScript bug, wrong type exported for wrap fn ([c433317](https://github.com/danielsogl/awesome-cordova-plugins/commit/c43331705147edcf1a0de80a5fdf5f57613c8b9a))



# [5.0.0-beta.19](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.14.0...v5.0.0-beta.19) (2018-09-18)


### Bug Fixes

* **index-app-content:** fix lint ([2611061](https://github.com/danielsogl/awesome-cordova-plugins/commit/261106131e04e47b29faaf4e27dd24af8b5583f7))
* **ms-adal:** remove duplicate imports ([4803912](https://github.com/danielsogl/awesome-cordova-plugins/commit/4803912350d2a824a2c467e9a3b2c6e2946c6b12))
* **web-intent:** fix lint ([9feefe8](https://github.com/danielsogl/awesome-cordova-plugins/commit/9feefe8454b9e65b5d3111661164d0c70eb5b719))



# [5.0.0-beta.18](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.13.0...v5.0.0-beta.18) (2018-09-15)


### Bug Fixes

* **appodeal:** removed bad imports ([7d5e7aa](https://github.com/danielsogl/awesome-cordova-plugins/commit/7d5e7aaa7d768d24941ace1c3e5ab8b78af0dc66))
* **camera:** fixing builds ([c8d25a1](https://github.com/danielsogl/awesome-cordova-plugins/commit/c8d25a1fc546e1be522e5ccaaa27f50411feaee4))
* **clevertap:** fix jsdoc ([e47a3e1](https://github.com/danielsogl/awesome-cordova-plugins/commit/e47a3e1522d7995df1a6e18b9060b46cd08a1a79))
* **contacts:** remove double import of checkAvailability ([#2659](https://github.com/danielsogl/awesome-cordova-plugins/issues/2659)) ([1ad4cc1](https://github.com/danielsogl/awesome-cordova-plugins/commit/1ad4cc1375ba1391a1feded3acc20614cddfca93))
* **core:** wrapEventObservable ([#2660](https://github.com/danielsogl/awesome-cordova-plugins/issues/2660)) ([bd34581](https://github.com/danielsogl/awesome-cordova-plugins/commit/bd345818f874884dede161be45f176df552956fe))
* **extended-device-information:** fix wrong decorator ([5e9c92a](https://github.com/danielsogl/awesome-cordova-plugins/commit/5e9c92a7736786776313576070df52e84810e874))
* **file-tramsfer:** fix v5 imports for file-transfer plugin ([#2537](https://github.com/danielsogl/awesome-cordova-plugins/issues/2537)) ([406ad12](https://github.com/danielsogl/awesome-cordova-plugins/commit/406ad1223243cac13e15e6f135c69f8b843d2d3a))



# [5.0.0-beta.12](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.8.0...v5.0.0-beta.12) (2018-06-23)


### Bug Fixes

* build errors ([f70eaea](https://github.com/danielsogl/awesome-cordova-plugins/commit/f70eaea71ebcaa832eb6c48a3fdc382d7703ee6c))
* **build:** fix ngx build errors ([cc9a980](https://github.com/danielsogl/awesome-cordova-plugins/commit/cc9a980dc3d8ccb5bf13aa1c7bb91dbb31b0e50e))
* **core:** fix rxjs 6 build errors ([48b0f16](https://github.com/danielsogl/awesome-cordova-plugins/commit/48b0f16ed9cef7ff10cff6f729d2221d1ee7bf1b)), closes [#2439](https://github.com/danielsogl/awesome-cordova-plugins/issues/2439)
* fix lint ([b36a1f9](https://github.com/danielsogl/awesome-cordova-plugins/commit/b36a1f9df6427e50037782a5f7b51ec39d895f03))
* fix more lint errors ([0b3d299](https://github.com/danielsogl/awesome-cordova-plugins/commit/0b3d299a963d2873375a2d6fb933b5555fc0e5a4))
* fix rxjs 6 imports ([e0b0687](https://github.com/danielsogl/awesome-cordova-plugins/commit/e0b068700490a9408b7de98970c16fba7b0d5017))
* fix tealium jsdoc ([f34b6e6](https://github.com/danielsogl/awesome-cordova-plugins/commit/f34b6e6664fb2bdca70f28e0c3c1dea2c62934f8))
* **linting:** Fixing misc linting errors that typedoc complains about ([#2476](https://github.com/danielsogl/awesome-cordova-plugins/issues/2476)) ([d3c2859](https://github.com/danielsogl/awesome-cordova-plugins/commit/d3c2859d3865539dffb2d8039da0f216ada007f3))
* **plugins:** fix rxjs 6 build errors ([3ced31e](https://github.com/danielsogl/awesome-cordova-plugins/commit/3ced31ed2aef7325a515649f28674c6083f15d67)), closes [#2439](https://github.com/danielsogl/awesome-cordova-plugins/issues/2439)
* **str-prnt:** rxjs 6 import ([48714d7](https://github.com/danielsogl/awesome-cordova-plugins/commit/48714d72d663dc4f29851ac601e6c8cbbc320ec0))
* **v5-builder:** stop transforming "declare" classes ([#2503](https://github.com/danielsogl/awesome-cordova-plugins/issues/2503)) ([6662234](https://github.com/danielsogl/awesome-cordova-plugins/commit/6662234894c461a4051305841ceb623f23f4d1f2))


### Features

* **ionic-webview:** plugin for cordova-plugin-ionic-webview 2.0 ([8beb177](https://github.com/danielsogl/awesome-cordova-plugins/commit/8beb1774b8f35958f69d14dbfcb16dcc8bdf5f80))



# [5.0.0-beta.4](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.3...v5.0.0-beta.4) (2017-12-29)



# [4.18.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.17.0...v4.18.0) (2018-12-01)


### Bug Fixes

* **local-notifications:** update type of the every property ([#2825](https://github.com/danielsogl/awesome-cordova-plugins/issues/2825)) ([b166cc5](https://github.com/danielsogl/awesome-cordova-plugins/commit/b166cc51eae3b17da005ff39f4e1d85727640757))


### Features

* **downloader:** add plugin ([#2820](https://github.com/danielsogl/awesome-cordova-plugins/issues/2820)) ([0065704](https://github.com/danielsogl/awesome-cordova-plugins/commit/006570483d5e0a57c2799cb2d7899d219e845666))
* **line-login:** add loginWeb function ([#2810](https://github.com/danielsogl/awesome-cordova-plugins/issues/2810)) ([7145afa](https://github.com/danielsogl/awesome-cordova-plugins/commit/7145afa24f2db5c820c6d8272257b50659aa6863))


### Reverts

* Revert "bump deps" ([543fa64](https://github.com/danielsogl/awesome-cordova-plugins/commit/543fa64b35dac69a0571ed726bfd49278b4817da))



# [4.17.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.16.0...v4.17.0) (2018-11-02)


### Bug Fixes

* **contacts plugin:** add the rawId parameter ([#2799](https://github.com/danielsogl/awesome-cordova-plugins/issues/2799)) ([b61b339](https://github.com/danielsogl/awesome-cordova-plugins/commit/b61b33987f876ecaa0a341883bb8bd500cc72421))


### Features

* **crashlytics:** allow user to set userIdentifier for crashlytics ([#2792](https://github.com/danielsogl/awesome-cordova-plugins/issues/2792)) ([a3bd197](https://github.com/danielsogl/awesome-cordova-plugins/commit/a3bd19769fc8dc5c932f1c3e43dc3cfc44581362))
* **firebase-authentication:** add plugin ([#2797](https://github.com/danielsogl/awesome-cordova-plugins/issues/2797)) ([43bfeb4](https://github.com/danielsogl/awesome-cordova-plugins/commit/43bfeb487a1759c65e34bb2fa10c778d32a221d3))
* **line-login:** add plugin ([#2782](https://github.com/danielsogl/awesome-cordova-plugins/issues/2782)) ([dc4183d](https://github.com/danielsogl/awesome-cordova-plugins/commit/dc4183da07c429ee3c9b8f80db0b4c283320a85a))



# [4.16.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.21...v4.16.0) (2018-10-17)


### Bug Fixes

* **keyboard:** add missing property ([fcd6d26](https://github.com/danielsogl/awesome-cordova-plugins/commit/fcd6d26727a5a3d45ca90a75d8c5b58bad0c1204))
* **local-notifications:** add missing functions ([#2779](https://github.com/danielsogl/awesome-cordova-plugins/issues/2779)) ([336b3ff](https://github.com/danielsogl/awesome-cordova-plugins/commit/336b3ff89b0f46f254787b8c02485d417949fea9)), closes [#2778](https://github.com/danielsogl/awesome-cordova-plugins/issues/2778)


### Features

* **admob-plus:** Add admob-plus ([#2753](https://github.com/danielsogl/awesome-cordova-plugins/issues/2753)) ([6c99ec8](https://github.com/danielsogl/awesome-cordova-plugins/commit/6c99ec803377571aa7b2b764974cda8a46fcf11d))
* **firebase-messaging:** add revokeToken function ([#2763](https://github.com/danielsogl/awesome-cordova-plugins/issues/2763)) ([1a2dc3e](https://github.com/danielsogl/awesome-cordova-plugins/commit/1a2dc3ee73e5ec93144a62a8850fffa0ee5eaeaf))
* **lastCam:** add plugin ([#2759](https://github.com/danielsogl/awesome-cordova-plugins/issues/2759)) ([99cebcb](https://github.com/danielsogl/awesome-cordova-plugins/commit/99cebcba0bce80f4f158adacd651d005a24a6ddf))
* **nfc:** add NFC readerMode ([#2777](https://github.com/danielsogl/awesome-cordova-plugins/issues/2777)) ([2aa73b5](https://github.com/danielsogl/awesome-cordova-plugins/commit/2aa73b5546a53825b8a9daf4cd694c893895959f))
* **speechkit:** plugin updated with voice parameter ([#2761](https://github.com/danielsogl/awesome-cordova-plugins/issues/2761)) ([4468b52](https://github.com/danielsogl/awesome-cordova-plugins/commit/4468b520ad76fd0e0090e1badb8a01de9006fda4))



# [4.15.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.20...v4.15.0) (2018-09-25)


### Bug Fixes

* **keyboard:** use cordova-plugin-ionic-keyboard ([#2743](https://github.com/danielsogl/awesome-cordova-plugins/issues/2743)) ([1457a16](https://github.com/danielsogl/awesome-cordova-plugins/commit/1457a1698b5d58543fa11646a90000529c7eef8c)), closes [#2306](https://github.com/danielsogl/awesome-cordova-plugins/issues/2306)


### Features

* **plugins:** add AppleWallet ([#2740](https://github.com/danielsogl/awesome-cordova-plugins/issues/2740)) ([307477d](https://github.com/danielsogl/awesome-cordova-plugins/commit/307477da7879714bbb1f2e5b5d69b9b4637ba313))
* **plugins:** add web-server plugin ([#2726](https://github.com/danielsogl/awesome-cordova-plugins/issues/2726)) ([8116ddd](https://github.com/danielsogl/awesome-cordova-plugins/commit/8116ddd1399444d4eb023ee2416310f22f7f1f9c))
* **siri-shortcuts:** Add clear option for the activated shortcut ([#2734](https://github.com/danielsogl/awesome-cordova-plugins/issues/2734)) ([3eff280](https://github.com/danielsogl/awesome-cordova-plugins/commit/3eff280127330c70d23d35f1a7e83760a1a11f44))
* **taptic-engine:** add missing functions and types ([a6bcc9a](https://github.com/danielsogl/awesome-cordova-plugins/commit/a6bcc9affd2248df68a17e323b3e1c4aad689492))



# [4.14.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.18...v4.14.0) (2018-09-18)


### Bug Fixes

* **mobile-accessibility:** add correct pluginRef ([3699fa9](https://github.com/danielsogl/awesome-cordova-plugins/commit/3699fa9b50ade1dfbb116bff5c0e66f1198bed0e)), closes [#1860](https://github.com/danielsogl/awesome-cordova-plugins/issues/1860)
* **onesignal:** add missing setLocationShared method ([#2723](https://github.com/danielsogl/awesome-cordova-plugins/issues/2723)) ([8bab321](https://github.com/danielsogl/awesome-cordova-plugins/commit/8bab32173a738fc4c8960b63bcf1800602eed108))
* **push:** add missing Chanel options ([3ef9593](https://github.com/danielsogl/awesome-cordova-plugins/commit/3ef9593704080ad6a47c71e68191a5547a031792)), closes [#2712](https://github.com/danielsogl/awesome-cordova-plugins/issues/2712)
* **web-intent:** add missing properties ([d077c48](https://github.com/danielsogl/awesome-cordova-plugins/commit/d077c482055a28ca5c117b983d303b86c6e6c543)), closes [#2701](https://github.com/danielsogl/awesome-cordova-plugins/issues/2701)


### Features

* **chooster:** add plugin ([04db233](https://github.com/danielsogl/awesome-cordova-plugins/commit/04db233b338936075500b4c85e050d24b80c60f5)), closes [#2612](https://github.com/danielsogl/awesome-cordova-plugins/issues/2612)
* **local-notifications:** add missing functions ([10d222d](https://github.com/danielsogl/awesome-cordova-plugins/commit/10d222dceaed6bf372bec4ebaba0080946048294))
* **onesignal:** add missing functions ([51006a7](https://github.com/danielsogl/awesome-cordova-plugins/commit/51006a76a0cea1d762ebd786b4a647c86fb26dbc)), closes [#2504](https://github.com/danielsogl/awesome-cordova-plugins/issues/2504)



# [4.13.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.17...v4.13.0) (2018-09-15)


### Bug Fixes

* **bluetooth-le:** Various methods fixes  ([#2707](https://github.com/danielsogl/awesome-cordova-plugins/issues/2707)) ([7047920](https://github.com/danielsogl/awesome-cordova-plugins/commit/7047920a2a5c6a5c77e0fac3aa67e7737b0bedac))
* **in-app-review:** Transfer Plugin to the correct folder ([#2688](https://github.com/danielsogl/awesome-cordova-plugins/issues/2688)) ([22fd49b](https://github.com/danielsogl/awesome-cordova-plugins/commit/22fd49b5d39e3fb5e92743b879df5ee1fa9bd559))
* **ms-adal:** Update createAuthenticationContext ([#2705](https://github.com/danielsogl/awesome-cordova-plugins/issues/2705)) ([890129b](https://github.com/danielsogl/awesome-cordova-plugins/commit/890129bfdabbb2c27d1e9c9796e1055f58eb4b3a))


### Features

* **appsflyer:** Added Appsflyer Cordova SDK as ionic native plugin ([#2690](https://github.com/danielsogl/awesome-cordova-plugins/issues/2690)) ([3b3f942](https://github.com/danielsogl/awesome-cordova-plugins/commit/3b3f942ed5e5924e1e960c195b4758cb25e6c84d))
* **branch-io:** Add branch.io attribution and invitation plugin ([#2691](https://github.com/danielsogl/awesome-cordova-plugins/issues/2691)) ([90d75af](https://github.com/danielsogl/awesome-cordova-plugins/commit/90d75af9d11e441f75edfbf2c10fc63c97134334))
* **calldirectory:** add log function ([#2708](https://github.com/danielsogl/awesome-cordova-plugins/issues/2708)) ([9601a64](https://github.com/danielsogl/awesome-cordova-plugins/commit/9601a64227d894985530331b1c48bc13ab0f1133))
* **janalytics:** add  plugin ([#2711](https://github.com/danielsogl/awesome-cordova-plugins/issues/2711)) ([0b97176](https://github.com/danielsogl/awesome-cordova-plugins/commit/0b9717636c4220ce06f883e85eb75dadde99b7e0))
* **local-notifications:** Added local additional local notification action fields ([#2713](https://github.com/danielsogl/awesome-cordova-plugins/issues/2713)) ([267149b](https://github.com/danielsogl/awesome-cordova-plugins/commit/267149b16fdb2701b48a47741627cc784fa5c6e9))
* **mixpanel:** Update/add functions ([#2697](https://github.com/danielsogl/awesome-cordova-plugins/issues/2697)) ([ac467c5](https://github.com/danielsogl/awesome-cordova-plugins/commit/ac467c50ac30e5e5c6da2349b314b0f8049a7d5d))
* **wechat:** add plugin ([#2716](https://github.com/danielsogl/awesome-cordova-plugins/issues/2716)) ([10ac9ff](https://github.com/danielsogl/awesome-cordova-plugins/commit/10ac9ff9de6541bbd1a2709850cdb6205b8b4049))


### Reverts

* Revert "chore(): update changelog" ([667de5b](https://github.com/danielsogl/awesome-cordova-plugins/commit/667de5ba264194e0da383d5efcb65a2821949b46))
* Revert "4.12.3" ([2dc7ee8](https://github.com/danielsogl/awesome-cordova-plugins/commit/2dc7ee8916396132a8ab30f682f88c4793760e11))



# [5.0.0-beta.17](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.16...v5.0.0-beta.17) (2018-08-31)


### Bug Fixes

* **in-app-browser:** fix mandatory options ([#2684](https://github.com/danielsogl/awesome-cordova-plugins/issues/2684)) ([d82e675](https://github.com/danielsogl/awesome-cordova-plugins/commit/d82e67544233cfff04574b8a14d90408836217d8))



## [4.12.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.15...v4.12.1) (2018-08-31)


### Bug Fixes

* **open-native-settings:** allow supported input ([#2666](https://github.com/danielsogl/awesome-cordova-plugins/issues/2666)) ([be0dc3d](https://github.com/danielsogl/awesome-cordova-plugins/commit/be0dc3dac4a1df9c788f973f7b64a401441e65a2))


### Features

* **aes256:** Added new utility methods to generate secure key and secure IV ([#2675](https://github.com/danielsogl/awesome-cordova-plugins/issues/2675)) ([a731466](https://github.com/danielsogl/awesome-cordova-plugins/commit/a73146648fca0a19e8a76b9a552545d85d1fd627))
* **in-app-browser:** Add missing InAppBrowserOptions-properties ([#2669](https://github.com/danielsogl/awesome-cordova-plugins/issues/2669)) ([d90724e](https://github.com/danielsogl/awesome-cordova-plugins/commit/d90724ef70cec2b00eda4d56e1da9d0f63d67fc2))
* **push:** Added voip property to IOSPushOptions ([#2681](https://github.com/danielsogl/awesome-cordova-plugins/issues/2681)) ([03e4f0e](https://github.com/danielsogl/awesome-cordova-plugins/commit/03e4f0e439c2b49ee9b3276588e9b24d7759cdfd))



# [5.0.0-beta.15](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.12.0...v5.0.0-beta.15) (2018-08-25)


### Features

* **bluetooth-le:** add bluetooth-le plugin ([#2651](https://github.com/danielsogl/awesome-cordova-plugins/issues/2651)) ([591ee87](https://github.com/danielsogl/awesome-cordova-plugins/commit/591ee87e052d398ed3869bbe9d74bcb30b027405))
* **http:** add setSSLCertMode function ([8db1dbe](https://github.com/danielsogl/awesome-cordova-plugins/commit/8db1dbef7198ffe526e747c696ac2aca0dbb6952))



# [4.12.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.11.0...v4.12.0) (2018-08-16)


### Bug Fixes

* **extended-device-information:** Fixed Memory Display Bug ([#2641](https://github.com/danielsogl/awesome-cordova-plugins/issues/2641)) ([2ac5282](https://github.com/danielsogl/awesome-cordova-plugins/commit/2ac52822b8d37141f7f5f2ee755dc23fc115a8f3))
* **network:** bind listener to document instead of window ([#2622](https://github.com/danielsogl/awesome-cordova-plugins/issues/2622)) ([d10777a](https://github.com/danielsogl/awesome-cordova-plugins/commit/d10777a33b42cf79e253cee69e21f5a02dc539fe))
* **photo-library:** interface missing includeVideos ([3f415f9](https://github.com/danielsogl/awesome-cordova-plugins/commit/3f415f9beffbd111a8cd9e95b039fd240256e3d3)), closes [#2624](https://github.com/danielsogl/awesome-cordova-plugins/issues/2624)


### Features

* **fabric:** add fabric plugin ([#2618](https://github.com/danielsogl/awesome-cordova-plugins/issues/2618)) ([9b4fd02](https://github.com/danielsogl/awesome-cordova-plugins/commit/9b4fd02fa5f7f2d7a5bc06eeb53562cc968a70f5))
* **local-notifications:** add new foreground property ([#2633](https://github.com/danielsogl/awesome-cordova-plugins/issues/2633)) ([229b62c](https://github.com/danielsogl/awesome-cordova-plugins/commit/229b62c10b67a9dca0f257cd9279f2773dd83f01))
* **webengage:** add optional config with initialization ([#2637](https://github.com/danielsogl/awesome-cordova-plugins/issues/2637)) ([ca9a702](https://github.com/danielsogl/awesome-cordova-plugins/commit/ca9a70280845ae533e4bce32280bc185f2d0eef2))


### Reverts

* Revert "4.12.0" ([0764e28](https://github.com/danielsogl/awesome-cordova-plugins/commit/0764e2840837704f0791b74d15daa5fb56325b59))



# [4.11.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.10.1...v4.11.0) (2018-07-29)


### Bug Fixes

* **http:** add correct return types for downloadFile and uploadFile ([4092831](https://github.com/danielsogl/awesome-cordova-plugins/commit/4092831754727c1d1ef89e622f48122907f80fb1)), closes [#2615](https://github.com/danielsogl/awesome-cordova-plugins/issues/2615)


### Features

* **clevertap:** add CleverTap plugin ([#2609](https://github.com/danielsogl/awesome-cordova-plugins/issues/2609)) ([27d380e](https://github.com/danielsogl/awesome-cordova-plugins/commit/27d380ef4b8fda754bd05a3b57f2a814a80f8f97))
* **facebook:** add getDeferredApplink function ([3b32e19](https://github.com/danielsogl/awesome-cordova-plugins/commit/3b32e19bf17d0fb9ced6b15b0a7bc0c89b55e22d)), closes [#2510](https://github.com/danielsogl/awesome-cordova-plugins/issues/2510)
* **webengage:** add webengage plugin ([#2604](https://github.com/danielsogl/awesome-cordova-plugins/issues/2604)) ([bd5bd7e](https://github.com/danielsogl/awesome-cordova-plugins/commit/bd5bd7ea9df69676a837853c532fbb9613bfd247))


### Reverts

* Revert "chore(package): upgrade fs-extra" ([83194f6](https://github.com/danielsogl/awesome-cordova-plugins/commit/83194f616b91752153cf113d9024dd24168f88c4))



## [4.10.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.14...v4.10.1) (2018-07-25)


### Bug Fixes

* **nfs:** Optional arguments for records like textRecord ([#2605](https://github.com/danielsogl/awesome-cordova-plugins/issues/2605)) ([b635ba9](https://github.com/danielsogl/awesome-cordova-plugins/commit/b635ba99ea6011658ac94f9e0188f3c86f41ffa9))
* **user-agent:** Plugin not installed ([#2607](https://github.com/danielsogl/awesome-cordova-plugins/issues/2607)) ([79cb478](https://github.com/danielsogl/awesome-cordova-plugins/commit/79cb478c261503dc00842e4acd1e2cc71311d3bf))



# [5.0.0-beta.21](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.15.0...v5.0.0-beta.21) (2018-09-25)


### Bug Fixes

* **admob-free:** fix duplicated class ([95b9262](https://github.com/danielsogl/awesome-cordova-plugins/commit/95b92623a6a13de5f988e24d5cbf17a723ae80e3))
* **bluetooth-le:** Removed a wrong cordova decorator param ([#2733](https://github.com/danielsogl/awesome-cordova-plugins/issues/2733)) ([cbeb413](https://github.com/danielsogl/awesome-cordova-plugins/commit/cbeb4139d9e6ba65957346f25867f26584ed7bfc))
* **build:** fix macos mojave build errors ([358474d](https://github.com/danielsogl/awesome-cordova-plugins/commit/358474dcfd9e51fa3efe875681ab02500512759d))
* **keyboard:** include the mode parameter in setResizeMode() ([8d57df3](https://github.com/danielsogl/awesome-cordova-plugins/commit/8d57df3e6449ab1d4ce3b0d0aac5f800d71ba681))
* **keyboard:** use cordova-plugin-ionic-keyboard ([#2743](https://github.com/danielsogl/awesome-cordova-plugins/issues/2743)) ([fbf7463](https://github.com/danielsogl/awesome-cordova-plugins/commit/fbf7463724ae8bf7e4916fa6ec2efc90671dd1c3)), closes [#2306](https://github.com/danielsogl/awesome-cordova-plugins/issues/2306)
* **printer:** import getPromise ([15cd285](https://github.com/danielsogl/awesome-cordova-plugins/commit/15cd285ec6d003a5bce6c21b5b8f8e26b9accfdf))
* **screenshot:** import getPromise ([e661f2e](https://github.com/danielsogl/awesome-cordova-plugins/commit/e661f2ece96e53cf855b2783243036959b9add56))
* **secure-storage:** add missing "getPromise" import ([#2727](https://github.com/danielsogl/awesome-cordova-plugins/issues/2727)) ([457d47c](https://github.com/danielsogl/awesome-cordova-plugins/commit/457d47cc16c922effcca09c80417e4031e01b776))
* **secure-storage:** import getPromise ([653f5a2](https://github.com/danielsogl/awesome-cordova-plugins/commit/653f5a29691131981a6cfab0532611e1adccf63a))


### Reverts

* Revert "chore(pacakge): bump deps" ([d3af519](https://github.com/danielsogl/awesome-cordova-plugins/commit/d3af51915efab8d7e051e1c72ec087d4eb8710d8))



# [5.0.0-beta.20](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.19...v5.0.0-beta.20) (2018-09-18)


### Bug Fixes

* **build:** Fix TypeScript bug, wrong type exported for wrap fn ([c433317](https://github.com/danielsogl/awesome-cordova-plugins/commit/c43331705147edcf1a0de80a5fdf5f57613c8b9a))



# [5.0.0-beta.19](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.14.0...v5.0.0-beta.19) (2018-09-18)


### Bug Fixes

* **index-app-content:** fix lint ([2611061](https://github.com/danielsogl/awesome-cordova-plugins/commit/261106131e04e47b29faaf4e27dd24af8b5583f7))
* **ms-adal:** remove duplicate imports ([4803912](https://github.com/danielsogl/awesome-cordova-plugins/commit/4803912350d2a824a2c467e9a3b2c6e2946c6b12))
* **web-intent:** fix lint ([9feefe8](https://github.com/danielsogl/awesome-cordova-plugins/commit/9feefe8454b9e65b5d3111661164d0c70eb5b719))



# [5.0.0-beta.18](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.13.0...v5.0.0-beta.18) (2018-09-15)


### Bug Fixes

* **appodeal:** removed bad imports ([7d5e7aa](https://github.com/danielsogl/awesome-cordova-plugins/commit/7d5e7aaa7d768d24941ace1c3e5ab8b78af0dc66))
* **camera:** fixing builds ([c8d25a1](https://github.com/danielsogl/awesome-cordova-plugins/commit/c8d25a1fc546e1be522e5ccaaa27f50411feaee4))
* **clevertap:** fix jsdoc ([e47a3e1](https://github.com/danielsogl/awesome-cordova-plugins/commit/e47a3e1522d7995df1a6e18b9060b46cd08a1a79))
* **contacts:** remove double import of checkAvailability ([#2659](https://github.com/danielsogl/awesome-cordova-plugins/issues/2659)) ([1ad4cc1](https://github.com/danielsogl/awesome-cordova-plugins/commit/1ad4cc1375ba1391a1feded3acc20614cddfca93))
* **core:** wrapEventObservable ([#2660](https://github.com/danielsogl/awesome-cordova-plugins/issues/2660)) ([bd34581](https://github.com/danielsogl/awesome-cordova-plugins/commit/bd345818f874884dede161be45f176df552956fe))
* **extended-device-information:** fix wrong decorator ([5e9c92a](https://github.com/danielsogl/awesome-cordova-plugins/commit/5e9c92a7736786776313576070df52e84810e874))
* **file-tramsfer:** fix v5 imports for file-transfer plugin ([#2537](https://github.com/danielsogl/awesome-cordova-plugins/issues/2537)) ([406ad12](https://github.com/danielsogl/awesome-cordova-plugins/commit/406ad1223243cac13e15e6f135c69f8b843d2d3a))



# [5.0.0-beta.12](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.8.0...v5.0.0-beta.12) (2018-06-23)


### Bug Fixes

* build errors ([f70eaea](https://github.com/danielsogl/awesome-cordova-plugins/commit/f70eaea71ebcaa832eb6c48a3fdc382d7703ee6c))
* **build:** fix ngx build errors ([cc9a980](https://github.com/danielsogl/awesome-cordova-plugins/commit/cc9a980dc3d8ccb5bf13aa1c7bb91dbb31b0e50e))
* **core:** fix rxjs 6 build errors ([48b0f16](https://github.com/danielsogl/awesome-cordova-plugins/commit/48b0f16ed9cef7ff10cff6f729d2221d1ee7bf1b)), closes [#2439](https://github.com/danielsogl/awesome-cordova-plugins/issues/2439)
* fix lint ([b36a1f9](https://github.com/danielsogl/awesome-cordova-plugins/commit/b36a1f9df6427e50037782a5f7b51ec39d895f03))
* fix more lint errors ([0b3d299](https://github.com/danielsogl/awesome-cordova-plugins/commit/0b3d299a963d2873375a2d6fb933b5555fc0e5a4))
* fix rxjs 6 imports ([e0b0687](https://github.com/danielsogl/awesome-cordova-plugins/commit/e0b068700490a9408b7de98970c16fba7b0d5017))
* fix tealium jsdoc ([f34b6e6](https://github.com/danielsogl/awesome-cordova-plugins/commit/f34b6e6664fb2bdca70f28e0c3c1dea2c62934f8))
* **linting:** Fixing misc linting errors that typedoc complains about ([#2476](https://github.com/danielsogl/awesome-cordova-plugins/issues/2476)) ([d3c2859](https://github.com/danielsogl/awesome-cordova-plugins/commit/d3c2859d3865539dffb2d8039da0f216ada007f3))
* **plugins:** fix rxjs 6 build errors ([3ced31e](https://github.com/danielsogl/awesome-cordova-plugins/commit/3ced31ed2aef7325a515649f28674c6083f15d67)), closes [#2439](https://github.com/danielsogl/awesome-cordova-plugins/issues/2439)
* **str-prnt:** rxjs 6 import ([48714d7](https://github.com/danielsogl/awesome-cordova-plugins/commit/48714d72d663dc4f29851ac601e6c8cbbc320ec0))
* **v5-builder:** stop transforming "declare" classes ([#2503](https://github.com/danielsogl/awesome-cordova-plugins/issues/2503)) ([6662234](https://github.com/danielsogl/awesome-cordova-plugins/commit/6662234894c461a4051305841ceb623f23f4d1f2))


### Features

* **ionic-webview:** plugin for cordova-plugin-ionic-webview 2.0 ([8beb177](https://github.com/danielsogl/awesome-cordova-plugins/commit/8beb1774b8f35958f69d14dbfcb16dcc8bdf5f80))



# [5.0.0-beta.4](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.3...v5.0.0-beta.4) (2017-12-29)



# [4.15.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.20...v4.15.0) (2018-09-25)


### Bug Fixes

* **keyboard:** use cordova-plugin-ionic-keyboard ([#2743](https://github.com/danielsogl/awesome-cordova-plugins/issues/2743)) ([1457a16](https://github.com/danielsogl/awesome-cordova-plugins/commit/1457a1698b5d58543fa11646a90000529c7eef8c)), closes [#2306](https://github.com/danielsogl/awesome-cordova-plugins/issues/2306)


### Features

* **plugins:** add AppleWallet ([#2740](https://github.com/danielsogl/awesome-cordova-plugins/issues/2740)) ([307477d](https://github.com/danielsogl/awesome-cordova-plugins/commit/307477da7879714bbb1f2e5b5d69b9b4637ba313))
* **plugins:** add web-server plugin ([#2726](https://github.com/danielsogl/awesome-cordova-plugins/issues/2726)) ([8116ddd](https://github.com/danielsogl/awesome-cordova-plugins/commit/8116ddd1399444d4eb023ee2416310f22f7f1f9c))
* **siri-shortcuts:** Add clear option for the activated shortcut ([#2734](https://github.com/danielsogl/awesome-cordova-plugins/issues/2734)) ([3eff280](https://github.com/danielsogl/awesome-cordova-plugins/commit/3eff280127330c70d23d35f1a7e83760a1a11f44))
* **taptic-engine:** add missing functions and types ([a6bcc9a](https://github.com/danielsogl/awesome-cordova-plugins/commit/a6bcc9affd2248df68a17e323b3e1c4aad689492))



# [4.14.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.18...v4.14.0) (2018-09-18)


### Bug Fixes

* **mobile-accessibility:** add correct pluginRef ([3699fa9](https://github.com/danielsogl/awesome-cordova-plugins/commit/3699fa9b50ade1dfbb116bff5c0e66f1198bed0e)), closes [#1860](https://github.com/danielsogl/awesome-cordova-plugins/issues/1860)
* **onesignal:** add missing setLocationShared method ([#2723](https://github.com/danielsogl/awesome-cordova-plugins/issues/2723)) ([8bab321](https://github.com/danielsogl/awesome-cordova-plugins/commit/8bab32173a738fc4c8960b63bcf1800602eed108))
* **push:** add missing Chanel options ([3ef9593](https://github.com/danielsogl/awesome-cordova-plugins/commit/3ef9593704080ad6a47c71e68191a5547a031792)), closes [#2712](https://github.com/danielsogl/awesome-cordova-plugins/issues/2712)
* **web-intent:** add missing properties ([d077c48](https://github.com/danielsogl/awesome-cordova-plugins/commit/d077c482055a28ca5c117b983d303b86c6e6c543)), closes [#2701](https://github.com/danielsogl/awesome-cordova-plugins/issues/2701)


### Features

* **chooster:** add plugin ([04db233](https://github.com/danielsogl/awesome-cordova-plugins/commit/04db233b338936075500b4c85e050d24b80c60f5)), closes [#2612](https://github.com/danielsogl/awesome-cordova-plugins/issues/2612)
* **local-notifications:** add missing functions ([10d222d](https://github.com/danielsogl/awesome-cordova-plugins/commit/10d222dceaed6bf372bec4ebaba0080946048294))
* **onesignal:** add missing functions ([51006a7](https://github.com/danielsogl/awesome-cordova-plugins/commit/51006a76a0cea1d762ebd786b4a647c86fb26dbc)), closes [#2504](https://github.com/danielsogl/awesome-cordova-plugins/issues/2504)



# [4.13.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.17...v4.13.0) (2018-09-15)


### Bug Fixes

* **bluetooth-le:** Various methods fixes  ([#2707](https://github.com/danielsogl/awesome-cordova-plugins/issues/2707)) ([7047920](https://github.com/danielsogl/awesome-cordova-plugins/commit/7047920a2a5c6a5c77e0fac3aa67e7737b0bedac))
* **in-app-review:** Transfer Plugin to the correct folder ([#2688](https://github.com/danielsogl/awesome-cordova-plugins/issues/2688)) ([22fd49b](https://github.com/danielsogl/awesome-cordova-plugins/commit/22fd49b5d39e3fb5e92743b879df5ee1fa9bd559))
* **ms-adal:** Update createAuthenticationContext ([#2705](https://github.com/danielsogl/awesome-cordova-plugins/issues/2705)) ([890129b](https://github.com/danielsogl/awesome-cordova-plugins/commit/890129bfdabbb2c27d1e9c9796e1055f58eb4b3a))


### Features

* **appsflyer:** Added Appsflyer Cordova SDK as ionic native plugin ([#2690](https://github.com/danielsogl/awesome-cordova-plugins/issues/2690)) ([3b3f942](https://github.com/danielsogl/awesome-cordova-plugins/commit/3b3f942ed5e5924e1e960c195b4758cb25e6c84d))
* **branch-io:** Add branch.io attribution and invitation plugin ([#2691](https://github.com/danielsogl/awesome-cordova-plugins/issues/2691)) ([90d75af](https://github.com/danielsogl/awesome-cordova-plugins/commit/90d75af9d11e441f75edfbf2c10fc63c97134334))
* **calldirectory:** add log function ([#2708](https://github.com/danielsogl/awesome-cordova-plugins/issues/2708)) ([9601a64](https://github.com/danielsogl/awesome-cordova-plugins/commit/9601a64227d894985530331b1c48bc13ab0f1133))
* **janalytics:** add  plugin ([#2711](https://github.com/danielsogl/awesome-cordova-plugins/issues/2711)) ([0b97176](https://github.com/danielsogl/awesome-cordova-plugins/commit/0b9717636c4220ce06f883e85eb75dadde99b7e0))
* **local-notifications:** Added local additional local notification action fields ([#2713](https://github.com/danielsogl/awesome-cordova-plugins/issues/2713)) ([267149b](https://github.com/danielsogl/awesome-cordova-plugins/commit/267149b16fdb2701b48a47741627cc784fa5c6e9))
* **mixpanel:** Update/add functions ([#2697](https://github.com/danielsogl/awesome-cordova-plugins/issues/2697)) ([ac467c5](https://github.com/danielsogl/awesome-cordova-plugins/commit/ac467c50ac30e5e5c6da2349b314b0f8049a7d5d))
* **wechat:** add plugin ([#2716](https://github.com/danielsogl/awesome-cordova-plugins/issues/2716)) ([10ac9ff](https://github.com/danielsogl/awesome-cordova-plugins/commit/10ac9ff9de6541bbd1a2709850cdb6205b8b4049))


### Reverts

* Revert "chore(): update changelog" ([667de5b](https://github.com/danielsogl/awesome-cordova-plugins/commit/667de5ba264194e0da383d5efcb65a2821949b46))
* Revert "4.12.3" ([2dc7ee8](https://github.com/danielsogl/awesome-cordova-plugins/commit/2dc7ee8916396132a8ab30f682f88c4793760e11))



# [5.0.0-beta.17](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.16...v5.0.0-beta.17) (2018-08-31)


### Bug Fixes

* **in-app-browser:** fix mandatory options ([#2684](https://github.com/danielsogl/awesome-cordova-plugins/issues/2684)) ([d82e675](https://github.com/danielsogl/awesome-cordova-plugins/commit/d82e67544233cfff04574b8a14d90408836217d8))



## [4.12.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.15...v4.12.1) (2018-08-31)


### Bug Fixes

* **open-native-settings:** allow supported input ([#2666](https://github.com/danielsogl/awesome-cordova-plugins/issues/2666)) ([be0dc3d](https://github.com/danielsogl/awesome-cordova-plugins/commit/be0dc3dac4a1df9c788f973f7b64a401441e65a2))


### Features

* **aes256:** Added new utility methods to generate secure key and secure IV ([#2675](https://github.com/danielsogl/awesome-cordova-plugins/issues/2675)) ([a731466](https://github.com/danielsogl/awesome-cordova-plugins/commit/a73146648fca0a19e8a76b9a552545d85d1fd627))
* **in-app-browser:** Add missing InAppBrowserOptions-properties ([#2669](https://github.com/danielsogl/awesome-cordova-plugins/issues/2669)) ([d90724e](https://github.com/danielsogl/awesome-cordova-plugins/commit/d90724ef70cec2b00eda4d56e1da9d0f63d67fc2))
* **push:** Added voip property to IOSPushOptions ([#2681](https://github.com/danielsogl/awesome-cordova-plugins/issues/2681)) ([03e4f0e](https://github.com/danielsogl/awesome-cordova-plugins/commit/03e4f0e439c2b49ee9b3276588e9b24d7759cdfd))



# [5.0.0-beta.15](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.12.0...v5.0.0-beta.15) (2018-08-25)


### Features

* **bluetooth-le:** add bluetooth-le plugin ([#2651](https://github.com/danielsogl/awesome-cordova-plugins/issues/2651)) ([591ee87](https://github.com/danielsogl/awesome-cordova-plugins/commit/591ee87e052d398ed3869bbe9d74bcb30b027405))
* **http:** add setSSLCertMode function ([8db1dbe](https://github.com/danielsogl/awesome-cordova-plugins/commit/8db1dbef7198ffe526e747c696ac2aca0dbb6952))



# [4.12.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.11.0...v4.12.0) (2018-08-16)


### Bug Fixes

* **extended-device-information:** Fixed Memory Display Bug ([#2641](https://github.com/danielsogl/awesome-cordova-plugins/issues/2641)) ([2ac5282](https://github.com/danielsogl/awesome-cordova-plugins/commit/2ac52822b8d37141f7f5f2ee755dc23fc115a8f3))
* **network:** bind listener to document instead of window ([#2622](https://github.com/danielsogl/awesome-cordova-plugins/issues/2622)) ([d10777a](https://github.com/danielsogl/awesome-cordova-plugins/commit/d10777a33b42cf79e253cee69e21f5a02dc539fe))
* **photo-library:** interface missing includeVideos ([3f415f9](https://github.com/danielsogl/awesome-cordova-plugins/commit/3f415f9beffbd111a8cd9e95b039fd240256e3d3)), closes [#2624](https://github.com/danielsogl/awesome-cordova-plugins/issues/2624)


### Features

* **fabric:** add fabric plugin ([#2618](https://github.com/danielsogl/awesome-cordova-plugins/issues/2618)) ([9b4fd02](https://github.com/danielsogl/awesome-cordova-plugins/commit/9b4fd02fa5f7f2d7a5bc06eeb53562cc968a70f5))
* **local-notifications:** add new foreground property ([#2633](https://github.com/danielsogl/awesome-cordova-plugins/issues/2633)) ([229b62c](https://github.com/danielsogl/awesome-cordova-plugins/commit/229b62c10b67a9dca0f257cd9279f2773dd83f01))
* **webengage:** add optional config with initialization ([#2637](https://github.com/danielsogl/awesome-cordova-plugins/issues/2637)) ([ca9a702](https://github.com/danielsogl/awesome-cordova-plugins/commit/ca9a70280845ae533e4bce32280bc185f2d0eef2))


### Reverts

* Revert "4.12.0" ([0764e28](https://github.com/danielsogl/awesome-cordova-plugins/commit/0764e2840837704f0791b74d15daa5fb56325b59))



# [4.11.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.10.1...v4.11.0) (2018-07-29)


### Bug Fixes

* **http:** add correct return types for downloadFile and uploadFile ([4092831](https://github.com/danielsogl/awesome-cordova-plugins/commit/4092831754727c1d1ef89e622f48122907f80fb1)), closes [#2615](https://github.com/danielsogl/awesome-cordova-plugins/issues/2615)


### Features

* **clevertap:** add CleverTap plugin ([#2609](https://github.com/danielsogl/awesome-cordova-plugins/issues/2609)) ([27d380e](https://github.com/danielsogl/awesome-cordova-plugins/commit/27d380ef4b8fda754bd05a3b57f2a814a80f8f97))
* **facebook:** add getDeferredApplink function ([3b32e19](https://github.com/danielsogl/awesome-cordova-plugins/commit/3b32e19bf17d0fb9ced6b15b0a7bc0c89b55e22d)), closes [#2510](https://github.com/danielsogl/awesome-cordova-plugins/issues/2510)
* **webengage:** add webengage plugin ([#2604](https://github.com/danielsogl/awesome-cordova-plugins/issues/2604)) ([bd5bd7e](https://github.com/danielsogl/awesome-cordova-plugins/commit/bd5bd7ea9df69676a837853c532fbb9613bfd247))


### Reverts

* Revert "chore(package): upgrade fs-extra" ([83194f6](https://github.com/danielsogl/awesome-cordova-plugins/commit/83194f616b91752153cf113d9024dd24168f88c4))



## [4.10.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.14...v4.10.1) (2018-07-25)


### Bug Fixes

* **nfs:** Optional arguments for records like textRecord ([#2605](https://github.com/danielsogl/awesome-cordova-plugins/issues/2605)) ([b635ba9](https://github.com/danielsogl/awesome-cordova-plugins/commit/b635ba99ea6011658ac94f9e0188f3c86f41ffa9))
* **user-agent:** Plugin not installed ([#2607](https://github.com/danielsogl/awesome-cordova-plugins/issues/2607)) ([79cb478](https://github.com/danielsogl/awesome-cordova-plugins/commit/79cb478c261503dc00842e4acd1e2cc71311d3bf))



# [5.0.0-beta.20](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.19...v5.0.0-beta.20) (2018-09-18)


### Bug Fixes

* **build:** Fix TypeScript bug, wrong type exported for wrap fn ([c433317](https://github.com/danielsogl/awesome-cordova-plugins/commit/c43331705147edcf1a0de80a5fdf5f57613c8b9a))



# [5.0.0-beta.19](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.14.0...v5.0.0-beta.19) (2018-09-18)


### Bug Fixes

* **index-app-content:** fix lint ([2611061](https://github.com/danielsogl/awesome-cordova-plugins/commit/261106131e04e47b29faaf4e27dd24af8b5583f7))
* **ms-adal:** remove duplicate imports ([4803912](https://github.com/danielsogl/awesome-cordova-plugins/commit/4803912350d2a824a2c467e9a3b2c6e2946c6b12))
* **web-intent:** fix lint ([9feefe8](https://github.com/danielsogl/awesome-cordova-plugins/commit/9feefe8454b9e65b5d3111661164d0c70eb5b719))



# [5.0.0-beta.18](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.13.0...v5.0.0-beta.18) (2018-09-15)


### Bug Fixes

* **appodeal:** removed bad imports ([7d5e7aa](https://github.com/danielsogl/awesome-cordova-plugins/commit/7d5e7aaa7d768d24941ace1c3e5ab8b78af0dc66))
* **camera:** fixing builds ([c8d25a1](https://github.com/danielsogl/awesome-cordova-plugins/commit/c8d25a1fc546e1be522e5ccaaa27f50411feaee4))
* **clevertap:** fix jsdoc ([e47a3e1](https://github.com/danielsogl/awesome-cordova-plugins/commit/e47a3e1522d7995df1a6e18b9060b46cd08a1a79))
* **contacts:** remove double import of checkAvailability ([#2659](https://github.com/danielsogl/awesome-cordova-plugins/issues/2659)) ([1ad4cc1](https://github.com/danielsogl/awesome-cordova-plugins/commit/1ad4cc1375ba1391a1feded3acc20614cddfca93))
* **core:** wrapEventObservable ([#2660](https://github.com/danielsogl/awesome-cordova-plugins/issues/2660)) ([bd34581](https://github.com/danielsogl/awesome-cordova-plugins/commit/bd345818f874884dede161be45f176df552956fe))
* **extended-device-information:** fix wrong decorator ([5e9c92a](https://github.com/danielsogl/awesome-cordova-plugins/commit/5e9c92a7736786776313576070df52e84810e874))
* **file-tramsfer:** fix v5 imports for file-transfer plugin ([#2537](https://github.com/danielsogl/awesome-cordova-plugins/issues/2537)) ([406ad12](https://github.com/danielsogl/awesome-cordova-plugins/commit/406ad1223243cac13e15e6f135c69f8b843d2d3a))



# [5.0.0-beta.12](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.8.0...v5.0.0-beta.12) (2018-06-23)


### Bug Fixes

* build errors ([f70eaea](https://github.com/danielsogl/awesome-cordova-plugins/commit/f70eaea71ebcaa832eb6c48a3fdc382d7703ee6c))
* **build:** fix ngx build errors ([cc9a980](https://github.com/danielsogl/awesome-cordova-plugins/commit/cc9a980dc3d8ccb5bf13aa1c7bb91dbb31b0e50e))
* **core:** fix rxjs 6 build errors ([48b0f16](https://github.com/danielsogl/awesome-cordova-plugins/commit/48b0f16ed9cef7ff10cff6f729d2221d1ee7bf1b)), closes [#2439](https://github.com/danielsogl/awesome-cordova-plugins/issues/2439)
* fix lint ([b36a1f9](https://github.com/danielsogl/awesome-cordova-plugins/commit/b36a1f9df6427e50037782a5f7b51ec39d895f03))
* fix more lint errors ([0b3d299](https://github.com/danielsogl/awesome-cordova-plugins/commit/0b3d299a963d2873375a2d6fb933b5555fc0e5a4))
* fix rxjs 6 imports ([e0b0687](https://github.com/danielsogl/awesome-cordova-plugins/commit/e0b068700490a9408b7de98970c16fba7b0d5017))
* fix tealium jsdoc ([f34b6e6](https://github.com/danielsogl/awesome-cordova-plugins/commit/f34b6e6664fb2bdca70f28e0c3c1dea2c62934f8))
* **linting:** Fixing misc linting errors that typedoc complains about ([#2476](https://github.com/danielsogl/awesome-cordova-plugins/issues/2476)) ([d3c2859](https://github.com/danielsogl/awesome-cordova-plugins/commit/d3c2859d3865539dffb2d8039da0f216ada007f3))
* **plugins:** fix rxjs 6 build errors ([3ced31e](https://github.com/danielsogl/awesome-cordova-plugins/commit/3ced31ed2aef7325a515649f28674c6083f15d67)), closes [#2439](https://github.com/danielsogl/awesome-cordova-plugins/issues/2439)
* **str-prnt:** rxjs 6 import ([48714d7](https://github.com/danielsogl/awesome-cordova-plugins/commit/48714d72d663dc4f29851ac601e6c8cbbc320ec0))
* **v5-builder:** stop transforming "declare" classes ([#2503](https://github.com/danielsogl/awesome-cordova-plugins/issues/2503)) ([6662234](https://github.com/danielsogl/awesome-cordova-plugins/commit/6662234894c461a4051305841ceb623f23f4d1f2))


### Features

* **ionic-webview:** plugin for cordova-plugin-ionic-webview 2.0 ([8beb177](https://github.com/danielsogl/awesome-cordova-plugins/commit/8beb1774b8f35958f69d14dbfcb16dcc8bdf5f80))



# [5.0.0-beta.4](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.3...v5.0.0-beta.4) (2017-12-29)



# [4.14.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.18...v4.14.0) (2018-09-18)


### Bug Fixes

* **mobile-accessibility:** add correct pluginRef ([3699fa9](https://github.com/danielsogl/awesome-cordova-plugins/commit/3699fa9b50ade1dfbb116bff5c0e66f1198bed0e)), closes [#1860](https://github.com/danielsogl/awesome-cordova-plugins/issues/1860)
* **onesignal:** add missing setLocationShared method ([#2723](https://github.com/danielsogl/awesome-cordova-plugins/issues/2723)) ([8bab321](https://github.com/danielsogl/awesome-cordova-plugins/commit/8bab32173a738fc4c8960b63bcf1800602eed108))
* **push:** add missing Chanel options ([3ef9593](https://github.com/danielsogl/awesome-cordova-plugins/commit/3ef9593704080ad6a47c71e68191a5547a031792)), closes [#2712](https://github.com/danielsogl/awesome-cordova-plugins/issues/2712)
* **web-intent:** add missing properties ([d077c48](https://github.com/danielsogl/awesome-cordova-plugins/commit/d077c482055a28ca5c117b983d303b86c6e6c543)), closes [#2701](https://github.com/danielsogl/awesome-cordova-plugins/issues/2701)


### Features

* **chooster:** add plugin ([04db233](https://github.com/danielsogl/awesome-cordova-plugins/commit/04db233b338936075500b4c85e050d24b80c60f5)), closes [#2612](https://github.com/danielsogl/awesome-cordova-plugins/issues/2612)
* **local-notifications:** add missing functions ([10d222d](https://github.com/danielsogl/awesome-cordova-plugins/commit/10d222dceaed6bf372bec4ebaba0080946048294))
* **onesignal:** add missing functions ([51006a7](https://github.com/danielsogl/awesome-cordova-plugins/commit/51006a76a0cea1d762ebd786b4a647c86fb26dbc)), closes [#2504](https://github.com/danielsogl/awesome-cordova-plugins/issues/2504)



# [4.13.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.17...v4.13.0) (2018-09-15)


### Bug Fixes

* **bluetooth-le:** Various methods fixes  ([#2707](https://github.com/danielsogl/awesome-cordova-plugins/issues/2707)) ([7047920](https://github.com/danielsogl/awesome-cordova-plugins/commit/7047920a2a5c6a5c77e0fac3aa67e7737b0bedac))
* **in-app-review:** Transfer Plugin to the correct folder ([#2688](https://github.com/danielsogl/awesome-cordova-plugins/issues/2688)) ([22fd49b](https://github.com/danielsogl/awesome-cordova-plugins/commit/22fd49b5d39e3fb5e92743b879df5ee1fa9bd559))
* **ms-adal:** Update createAuthenticationContext ([#2705](https://github.com/danielsogl/awesome-cordova-plugins/issues/2705)) ([890129b](https://github.com/danielsogl/awesome-cordova-plugins/commit/890129bfdabbb2c27d1e9c9796e1055f58eb4b3a))


### Features

* **appsflyer:** Added Appsflyer Cordova SDK as ionic native plugin ([#2690](https://github.com/danielsogl/awesome-cordova-plugins/issues/2690)) ([3b3f942](https://github.com/danielsogl/awesome-cordova-plugins/commit/3b3f942ed5e5924e1e960c195b4758cb25e6c84d))
* **branch-io:** Add branch.io attribution and invitation plugin ([#2691](https://github.com/danielsogl/awesome-cordova-plugins/issues/2691)) ([90d75af](https://github.com/danielsogl/awesome-cordova-plugins/commit/90d75af9d11e441f75edfbf2c10fc63c97134334))
* **calldirectory:** add log function ([#2708](https://github.com/danielsogl/awesome-cordova-plugins/issues/2708)) ([9601a64](https://github.com/danielsogl/awesome-cordova-plugins/commit/9601a64227d894985530331b1c48bc13ab0f1133))
* **janalytics:** add  plugin ([#2711](https://github.com/danielsogl/awesome-cordova-plugins/issues/2711)) ([0b97176](https://github.com/danielsogl/awesome-cordova-plugins/commit/0b9717636c4220ce06f883e85eb75dadde99b7e0))
* **local-notifications:** Added local additional local notification action fields ([#2713](https://github.com/danielsogl/awesome-cordova-plugins/issues/2713)) ([267149b](https://github.com/danielsogl/awesome-cordova-plugins/commit/267149b16fdb2701b48a47741627cc784fa5c6e9))
* **mixpanel:** Update/add functions ([#2697](https://github.com/danielsogl/awesome-cordova-plugins/issues/2697)) ([ac467c5](https://github.com/danielsogl/awesome-cordova-plugins/commit/ac467c50ac30e5e5c6da2349b314b0f8049a7d5d))
* **wechat:** add plugin ([#2716](https://github.com/danielsogl/awesome-cordova-plugins/issues/2716)) ([10ac9ff](https://github.com/danielsogl/awesome-cordova-plugins/commit/10ac9ff9de6541bbd1a2709850cdb6205b8b4049))


### Reverts

* Revert "chore(): update changelog" ([667de5b](https://github.com/danielsogl/awesome-cordova-plugins/commit/667de5ba264194e0da383d5efcb65a2821949b46))
* Revert "4.12.3" ([2dc7ee8](https://github.com/danielsogl/awesome-cordova-plugins/commit/2dc7ee8916396132a8ab30f682f88c4793760e11))



# [5.0.0-beta.17](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.16...v5.0.0-beta.17) (2018-08-31)


### Bug Fixes

* **in-app-browser:** fix mandatory options ([#2684](https://github.com/danielsogl/awesome-cordova-plugins/issues/2684)) ([d82e675](https://github.com/danielsogl/awesome-cordova-plugins/commit/d82e67544233cfff04574b8a14d90408836217d8))



## [4.12.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.15...v4.12.1) (2018-08-31)


### Bug Fixes

* **open-native-settings:** allow supported input ([#2666](https://github.com/danielsogl/awesome-cordova-plugins/issues/2666)) ([be0dc3d](https://github.com/danielsogl/awesome-cordova-plugins/commit/be0dc3dac4a1df9c788f973f7b64a401441e65a2))


### Features

* **aes256:** Added new utility methods to generate secure key and secure IV ([#2675](https://github.com/danielsogl/awesome-cordova-plugins/issues/2675)) ([a731466](https://github.com/danielsogl/awesome-cordova-plugins/commit/a73146648fca0a19e8a76b9a552545d85d1fd627))
* **in-app-browser:** Add missing InAppBrowserOptions-properties ([#2669](https://github.com/danielsogl/awesome-cordova-plugins/issues/2669)) ([d90724e](https://github.com/danielsogl/awesome-cordova-plugins/commit/d90724ef70cec2b00eda4d56e1da9d0f63d67fc2))
* **push:** Added voip property to IOSPushOptions ([#2681](https://github.com/danielsogl/awesome-cordova-plugins/issues/2681)) ([03e4f0e](https://github.com/danielsogl/awesome-cordova-plugins/commit/03e4f0e439c2b49ee9b3276588e9b24d7759cdfd))



# [5.0.0-beta.15](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.12.0...v5.0.0-beta.15) (2018-08-25)


### Features

* **bluetooth-le:** add bluetooth-le plugin ([#2651](https://github.com/danielsogl/awesome-cordova-plugins/issues/2651)) ([591ee87](https://github.com/danielsogl/awesome-cordova-plugins/commit/591ee87e052d398ed3869bbe9d74bcb30b027405))
* **http:** add setSSLCertMode function ([8db1dbe](https://github.com/danielsogl/awesome-cordova-plugins/commit/8db1dbef7198ffe526e747c696ac2aca0dbb6952))



# [4.12.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.11.0...v4.12.0) (2018-08-16)


### Bug Fixes

* **extended-device-information:** Fixed Memory Display Bug ([#2641](https://github.com/danielsogl/awesome-cordova-plugins/issues/2641)) ([2ac5282](https://github.com/danielsogl/awesome-cordova-plugins/commit/2ac52822b8d37141f7f5f2ee755dc23fc115a8f3))
* **network:** bind listener to document instead of window ([#2622](https://github.com/danielsogl/awesome-cordova-plugins/issues/2622)) ([d10777a](https://github.com/danielsogl/awesome-cordova-plugins/commit/d10777a33b42cf79e253cee69e21f5a02dc539fe))
* **photo-library:** interface missing includeVideos ([3f415f9](https://github.com/danielsogl/awesome-cordova-plugins/commit/3f415f9beffbd111a8cd9e95b039fd240256e3d3)), closes [#2624](https://github.com/danielsogl/awesome-cordova-plugins/issues/2624)


### Features

* **fabric:** add fabric plugin ([#2618](https://github.com/danielsogl/awesome-cordova-plugins/issues/2618)) ([9b4fd02](https://github.com/danielsogl/awesome-cordova-plugins/commit/9b4fd02fa5f7f2d7a5bc06eeb53562cc968a70f5))
* **local-notifications:** add new foreground property ([#2633](https://github.com/danielsogl/awesome-cordova-plugins/issues/2633)) ([229b62c](https://github.com/danielsogl/awesome-cordova-plugins/commit/229b62c10b67a9dca0f257cd9279f2773dd83f01))
* **webengage:** add optional config with initialization ([#2637](https://github.com/danielsogl/awesome-cordova-plugins/issues/2637)) ([ca9a702](https://github.com/danielsogl/awesome-cordova-plugins/commit/ca9a70280845ae533e4bce32280bc185f2d0eef2))


### Reverts

* Revert "4.12.0" ([0764e28](https://github.com/danielsogl/awesome-cordova-plugins/commit/0764e2840837704f0791b74d15daa5fb56325b59))



# [4.11.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.10.1...v4.11.0) (2018-07-29)


### Bug Fixes

* **http:** add correct return types for downloadFile and uploadFile ([4092831](https://github.com/danielsogl/awesome-cordova-plugins/commit/4092831754727c1d1ef89e622f48122907f80fb1)), closes [#2615](https://github.com/danielsogl/awesome-cordova-plugins/issues/2615)


### Features

* **clevertap:** add CleverTap plugin ([#2609](https://github.com/danielsogl/awesome-cordova-plugins/issues/2609)) ([27d380e](https://github.com/danielsogl/awesome-cordova-plugins/commit/27d380ef4b8fda754bd05a3b57f2a814a80f8f97))
* **facebook:** add getDeferredApplink function ([3b32e19](https://github.com/danielsogl/awesome-cordova-plugins/commit/3b32e19bf17d0fb9ced6b15b0a7bc0c89b55e22d)), closes [#2510](https://github.com/danielsogl/awesome-cordova-plugins/issues/2510)
* **webengage:** add webengage plugin ([#2604](https://github.com/danielsogl/awesome-cordova-plugins/issues/2604)) ([bd5bd7e](https://github.com/danielsogl/awesome-cordova-plugins/commit/bd5bd7ea9df69676a837853c532fbb9613bfd247))


### Reverts

* Revert "chore(package): upgrade fs-extra" ([83194f6](https://github.com/danielsogl/awesome-cordova-plugins/commit/83194f616b91752153cf113d9024dd24168f88c4))



## [4.10.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.14...v4.10.1) (2018-07-25)


### Bug Fixes

* **nfs:** Optional arguments for records like textRecord ([#2605](https://github.com/danielsogl/awesome-cordova-plugins/issues/2605)) ([b635ba9](https://github.com/danielsogl/awesome-cordova-plugins/commit/b635ba99ea6011658ac94f9e0188f3c86f41ffa9))
* **user-agent:** Plugin not installed ([#2607](https://github.com/danielsogl/awesome-cordova-plugins/issues/2607)) ([79cb478](https://github.com/danielsogl/awesome-cordova-plugins/commit/79cb478c261503dc00842e4acd1e2cc71311d3bf))



# [5.0.0-beta.18](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.13.0...v5.0.0-beta.18) (2018-09-15)


### Bug Fixes

* **appodeal:** removed bad imports ([7d5e7aa](https://github.com/danielsogl/awesome-cordova-plugins/commit/7d5e7aaa7d768d24941ace1c3e5ab8b78af0dc66))
* **camera:** fixing builds ([c8d25a1](https://github.com/danielsogl/awesome-cordova-plugins/commit/c8d25a1fc546e1be522e5ccaaa27f50411feaee4))
* **clevertap:** fix jsdoc ([e47a3e1](https://github.com/danielsogl/awesome-cordova-plugins/commit/e47a3e1522d7995df1a6e18b9060b46cd08a1a79))
* **contacts:** remove double import of checkAvailability ([#2659](https://github.com/danielsogl/awesome-cordova-plugins/issues/2659)) ([1ad4cc1](https://github.com/danielsogl/awesome-cordova-plugins/commit/1ad4cc1375ba1391a1feded3acc20614cddfca93))
* **core:** wrapEventObservable ([#2660](https://github.com/danielsogl/awesome-cordova-plugins/issues/2660)) ([bd34581](https://github.com/danielsogl/awesome-cordova-plugins/commit/bd345818f874884dede161be45f176df552956fe))
* **extended-device-information:** fix wrong decorator ([5e9c92a](https://github.com/danielsogl/awesome-cordova-plugins/commit/5e9c92a7736786776313576070df52e84810e874))
* **file-tramsfer:** fix v5 imports for file-transfer plugin ([#2537](https://github.com/danielsogl/awesome-cordova-plugins/issues/2537)) ([406ad12](https://github.com/danielsogl/awesome-cordova-plugins/commit/406ad1223243cac13e15e6f135c69f8b843d2d3a))



# [5.0.0-beta.12](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.8.0...v5.0.0-beta.12) (2018-06-23)


### Bug Fixes

* build errors ([f70eaea](https://github.com/danielsogl/awesome-cordova-plugins/commit/f70eaea71ebcaa832eb6c48a3fdc382d7703ee6c))
* **build:** fix ngx build errors ([cc9a980](https://github.com/danielsogl/awesome-cordova-plugins/commit/cc9a980dc3d8ccb5bf13aa1c7bb91dbb31b0e50e))
* **core:** fix rxjs 6 build errors ([48b0f16](https://github.com/danielsogl/awesome-cordova-plugins/commit/48b0f16ed9cef7ff10cff6f729d2221d1ee7bf1b)), closes [#2439](https://github.com/danielsogl/awesome-cordova-plugins/issues/2439)
* fix lint ([b36a1f9](https://github.com/danielsogl/awesome-cordova-plugins/commit/b36a1f9df6427e50037782a5f7b51ec39d895f03))
* fix more lint errors ([0b3d299](https://github.com/danielsogl/awesome-cordova-plugins/commit/0b3d299a963d2873375a2d6fb933b5555fc0e5a4))
* fix rxjs 6 imports ([e0b0687](https://github.com/danielsogl/awesome-cordova-plugins/commit/e0b068700490a9408b7de98970c16fba7b0d5017))
* fix tealium jsdoc ([f34b6e6](https://github.com/danielsogl/awesome-cordova-plugins/commit/f34b6e6664fb2bdca70f28e0c3c1dea2c62934f8))
* **linting:** Fixing misc linting errors that typedoc complains about ([#2476](https://github.com/danielsogl/awesome-cordova-plugins/issues/2476)) ([d3c2859](https://github.com/danielsogl/awesome-cordova-plugins/commit/d3c2859d3865539dffb2d8039da0f216ada007f3))
* **plugins:** fix rxjs 6 build errors ([3ced31e](https://github.com/danielsogl/awesome-cordova-plugins/commit/3ced31ed2aef7325a515649f28674c6083f15d67)), closes [#2439](https://github.com/danielsogl/awesome-cordova-plugins/issues/2439)
* **str-prnt:** rxjs 6 import ([48714d7](https://github.com/danielsogl/awesome-cordova-plugins/commit/48714d72d663dc4f29851ac601e6c8cbbc320ec0))
* **v5-builder:** stop transforming "declare" classes ([#2503](https://github.com/danielsogl/awesome-cordova-plugins/issues/2503)) ([6662234](https://github.com/danielsogl/awesome-cordova-plugins/commit/6662234894c461a4051305841ceb623f23f4d1f2))


### Features

* **ionic-webview:** plugin for cordova-plugin-ionic-webview 2.0 ([8beb177](https://github.com/danielsogl/awesome-cordova-plugins/commit/8beb1774b8f35958f69d14dbfcb16dcc8bdf5f80))



# [5.0.0-beta.4](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.3...v5.0.0-beta.4) (2017-12-29)



# [4.13.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.17...v4.13.0) (2018-09-15)


### Bug Fixes

* **bluetooth-le:** Various methods fixes  ([#2707](https://github.com/danielsogl/awesome-cordova-plugins/issues/2707)) ([7047920](https://github.com/danielsogl/awesome-cordova-plugins/commit/7047920a2a5c6a5c77e0fac3aa67e7737b0bedac))
* **in-app-review:** Transfer Plugin to the correct folder ([#2688](https://github.com/danielsogl/awesome-cordova-plugins/issues/2688)) ([22fd49b](https://github.com/danielsogl/awesome-cordova-plugins/commit/22fd49b5d39e3fb5e92743b879df5ee1fa9bd559))
* **ms-adal:** Update createAuthenticationContext ([#2705](https://github.com/danielsogl/awesome-cordova-plugins/issues/2705)) ([890129b](https://github.com/danielsogl/awesome-cordova-plugins/commit/890129bfdabbb2c27d1e9c9796e1055f58eb4b3a))


### Features

* **appsflyer:** Added Appsflyer Cordova SDK as ionic native plugin ([#2690](https://github.com/danielsogl/awesome-cordova-plugins/issues/2690)) ([3b3f942](https://github.com/danielsogl/awesome-cordova-plugins/commit/3b3f942ed5e5924e1e960c195b4758cb25e6c84d))
* **branch-io:** Add branch.io attribution and invitation plugin ([#2691](https://github.com/danielsogl/awesome-cordova-plugins/issues/2691)) ([90d75af](https://github.com/danielsogl/awesome-cordova-plugins/commit/90d75af9d11e441f75edfbf2c10fc63c97134334))
* **calldirectory:** add log function ([#2708](https://github.com/danielsogl/awesome-cordova-plugins/issues/2708)) ([9601a64](https://github.com/danielsogl/awesome-cordova-plugins/commit/9601a64227d894985530331b1c48bc13ab0f1133))
* **janalytics:** add  plugin ([#2711](https://github.com/danielsogl/awesome-cordova-plugins/issues/2711)) ([0b97176](https://github.com/danielsogl/awesome-cordova-plugins/commit/0b9717636c4220ce06f883e85eb75dadde99b7e0))
* **local-notifications:** Added local additional local notification action fields ([#2713](https://github.com/danielsogl/awesome-cordova-plugins/issues/2713)) ([267149b](https://github.com/danielsogl/awesome-cordova-plugins/commit/267149b16fdb2701b48a47741627cc784fa5c6e9))
* **mixpanel:** Update/add functions ([#2697](https://github.com/danielsogl/awesome-cordova-plugins/issues/2697)) ([ac467c5](https://github.com/danielsogl/awesome-cordova-plugins/commit/ac467c50ac30e5e5c6da2349b314b0f8049a7d5d))
* **wechat:** add plugin ([#2716](https://github.com/danielsogl/awesome-cordova-plugins/issues/2716)) ([10ac9ff](https://github.com/danielsogl/awesome-cordova-plugins/commit/10ac9ff9de6541bbd1a2709850cdb6205b8b4049))


### Reverts

* Revert "chore(): update changelog" ([667de5b](https://github.com/danielsogl/awesome-cordova-plugins/commit/667de5ba264194e0da383d5efcb65a2821949b46))
* Revert "4.12.3" ([2dc7ee8](https://github.com/danielsogl/awesome-cordova-plugins/commit/2dc7ee8916396132a8ab30f682f88c4793760e11))



# [5.0.0-beta.17](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.16...v5.0.0-beta.17) (2018-08-31)


### Bug Fixes

* **in-app-browser:** fix mandatory options ([#2684](https://github.com/danielsogl/awesome-cordova-plugins/issues/2684)) ([d82e675](https://github.com/danielsogl/awesome-cordova-plugins/commit/d82e67544233cfff04574b8a14d90408836217d8))



## [4.12.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.15...v4.12.1) (2018-08-31)


### Bug Fixes

* **open-native-settings:** allow supported input ([#2666](https://github.com/danielsogl/awesome-cordova-plugins/issues/2666)) ([be0dc3d](https://github.com/danielsogl/awesome-cordova-plugins/commit/be0dc3dac4a1df9c788f973f7b64a401441e65a2))


### Features

* **aes256:** Added new utility methods to generate secure key and secure IV ([#2675](https://github.com/danielsogl/awesome-cordova-plugins/issues/2675)) ([a731466](https://github.com/danielsogl/awesome-cordova-plugins/commit/a73146648fca0a19e8a76b9a552545d85d1fd627))
* **in-app-browser:** Add missing InAppBrowserOptions-properties ([#2669](https://github.com/danielsogl/awesome-cordova-plugins/issues/2669)) ([d90724e](https://github.com/danielsogl/awesome-cordova-plugins/commit/d90724ef70cec2b00eda4d56e1da9d0f63d67fc2))
* **push:** Added voip property to IOSPushOptions ([#2681](https://github.com/danielsogl/awesome-cordova-plugins/issues/2681)) ([03e4f0e](https://github.com/danielsogl/awesome-cordova-plugins/commit/03e4f0e439c2b49ee9b3276588e9b24d7759cdfd))



# [5.0.0-beta.15](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.12.0...v5.0.0-beta.15) (2018-08-25)


### Features

* **bluetooth-le:** add bluetooth-le plugin ([#2651](https://github.com/danielsogl/awesome-cordova-plugins/issues/2651)) ([591ee87](https://github.com/danielsogl/awesome-cordova-plugins/commit/591ee87e052d398ed3869bbe9d74bcb30b027405))
* **http:** add setSSLCertMode function ([8db1dbe](https://github.com/danielsogl/awesome-cordova-plugins/commit/8db1dbef7198ffe526e747c696ac2aca0dbb6952))



# [4.12.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.11.0...v4.12.0) (2018-08-16)


### Bug Fixes

* **extended-device-information:** Fixed Memory Display Bug ([#2641](https://github.com/danielsogl/awesome-cordova-plugins/issues/2641)) ([2ac5282](https://github.com/danielsogl/awesome-cordova-plugins/commit/2ac52822b8d37141f7f5f2ee755dc23fc115a8f3))
* **network:** bind listener to document instead of window ([#2622](https://github.com/danielsogl/awesome-cordova-plugins/issues/2622)) ([d10777a](https://github.com/danielsogl/awesome-cordova-plugins/commit/d10777a33b42cf79e253cee69e21f5a02dc539fe))
* **photo-library:** interface missing includeVideos ([3f415f9](https://github.com/danielsogl/awesome-cordova-plugins/commit/3f415f9beffbd111a8cd9e95b039fd240256e3d3)), closes [#2624](https://github.com/danielsogl/awesome-cordova-plugins/issues/2624)


### Features

* **fabric:** add fabric plugin ([#2618](https://github.com/danielsogl/awesome-cordova-plugins/issues/2618)) ([9b4fd02](https://github.com/danielsogl/awesome-cordova-plugins/commit/9b4fd02fa5f7f2d7a5bc06eeb53562cc968a70f5))
* **local-notifications:** add new foreground property ([#2633](https://github.com/danielsogl/awesome-cordova-plugins/issues/2633)) ([229b62c](https://github.com/danielsogl/awesome-cordova-plugins/commit/229b62c10b67a9dca0f257cd9279f2773dd83f01))
* **webengage:** add optional config with initialization ([#2637](https://github.com/danielsogl/awesome-cordova-plugins/issues/2637)) ([ca9a702](https://github.com/danielsogl/awesome-cordova-plugins/commit/ca9a70280845ae533e4bce32280bc185f2d0eef2))


### Reverts

* Revert "4.12.0" ([0764e28](https://github.com/danielsogl/awesome-cordova-plugins/commit/0764e2840837704f0791b74d15daa5fb56325b59))



# [4.11.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.10.1...v4.11.0) (2018-07-29)


### Bug Fixes

* **http:** add correct return types for downloadFile and uploadFile ([4092831](https://github.com/danielsogl/awesome-cordova-plugins/commit/4092831754727c1d1ef89e622f48122907f80fb1)), closes [#2615](https://github.com/danielsogl/awesome-cordova-plugins/issues/2615)


### Features

* **clevertap:** add CleverTap plugin ([#2609](https://github.com/danielsogl/awesome-cordova-plugins/issues/2609)) ([27d380e](https://github.com/danielsogl/awesome-cordova-plugins/commit/27d380ef4b8fda754bd05a3b57f2a814a80f8f97))
* **facebook:** add getDeferredApplink function ([3b32e19](https://github.com/danielsogl/awesome-cordova-plugins/commit/3b32e19bf17d0fb9ced6b15b0a7bc0c89b55e22d)), closes [#2510](https://github.com/danielsogl/awesome-cordova-plugins/issues/2510)
* **webengage:** add webengage plugin ([#2604](https://github.com/danielsogl/awesome-cordova-plugins/issues/2604)) ([bd5bd7e](https://github.com/danielsogl/awesome-cordova-plugins/commit/bd5bd7ea9df69676a837853c532fbb9613bfd247))


### Reverts

* Revert "chore(package): upgrade fs-extra" ([83194f6](https://github.com/danielsogl/awesome-cordova-plugins/commit/83194f616b91752153cf113d9024dd24168f88c4))



## [4.10.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.14...v4.10.1) (2018-07-25)


### Bug Fixes

* **nfs:** Optional arguments for records like textRecord ([#2605](https://github.com/danielsogl/awesome-cordova-plugins/issues/2605)) ([b635ba9](https://github.com/danielsogl/awesome-cordova-plugins/commit/b635ba99ea6011658ac94f9e0188f3c86f41ffa9))
* **user-agent:** Plugin not installed ([#2607](https://github.com/danielsogl/awesome-cordova-plugins/issues/2607)) ([79cb478](https://github.com/danielsogl/awesome-cordova-plugins/commit/79cb478c261503dc00842e4acd1e2cc71311d3bf))



# [5.0.0-beta.14](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.10.0...v5.0.0-beta.14) (2018-07-18)


### Features

* **abbyy-rtr:** add ABBYY Real-Time Recognition plugin ([#2580](https://github.com/danielsogl/awesome-cordova-plugins/issues/2580)) ([ecc698e](https://github.com/danielsogl/awesome-cordova-plugins/commit/ecc698ee7a3bed70d51f5daddc7b8b0ce2d8c0d0))
* **alipay:** replace plugin ([#2591](https://github.com/danielsogl/awesome-cordova-plugins/issues/2591)) ([e640983](https://github.com/danielsogl/awesome-cordova-plugins/commit/e6409833408b8baa0a3d5a639e2355ea25708cf5))
* **ccm:** replace plugin source ([#2601](https://github.com/danielsogl/awesome-cordova-plugins/issues/2601)) ([b581a5b](https://github.com/danielsogl/awesome-cordova-plugins/commit/b581a5b2b6940498f6d2f403e361737a4b4bf11b))
* **classkit:** add ClassKit plugin ([#2590](https://github.com/danielsogl/awesome-cordova-plugins/issues/2590)) ([a6c8045](https://github.com/danielsogl/awesome-cordova-plugins/commit/a6c80455931c0d72ce29b12ba6d83de026bf2245))


### BREAKING CHANGES

* **alipay:** Replaced plugin with maintained Cordova plugin



## [4.9.2](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.9.1...v4.9.2) (2018-07-13)


### Bug Fixes

* **ble:** change signature for autoConnect ([#2594](https://github.com/danielsogl/awesome-cordova-plugins/issues/2594)) ([d95a359](https://github.com/danielsogl/awesome-cordova-plugins/commit/d95a359719142ef4a2a79596fc6b8cdf1d206bed)), closes [#2573](https://github.com/danielsogl/awesome-cordova-plugins/issues/2573) [#2573](https://github.com/danielsogl/awesome-cordova-plugins/issues/2573)
* **sqlite:** mark optional arguments for executeSql ([#2592](https://github.com/danielsogl/awesome-cordova-plugins/issues/2592)) ([565c766](https://github.com/danielsogl/awesome-cordova-plugins/commit/565c766813f058f73d4f116c0a63e50a41c7ac33))



## [4.9.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.13...v4.9.1) (2018-07-09)


### Bug Fixes

* **barcode-scanner:** wrong barcode format identifier PDF417 -> PDF_417 ([#2574](https://github.com/danielsogl/awesome-cordova-plugins/issues/2574)) ([61714ff](https://github.com/danielsogl/awesome-cordova-plugins/commit/61714ff7caec02581ba0bf73088aaa028d754af0))
* **health-kit:** add missing checkAuthStatus param ([#2544](https://github.com/danielsogl/awesome-cordova-plugins/issues/2544)) ([956e644](https://github.com/danielsogl/awesome-cordova-plugins/commit/956e644fa4f88bbd523f71444310ef90112ad36e))


### Features

* **ble:** add missing functions ([#2572](https://github.com/danielsogl/awesome-cordova-plugins/issues/2572)) ([9f9a346](https://github.com/danielsogl/awesome-cordova-plugins/commit/9f9a3461f7e50f038945ba75ddf6bf9a5b3d7777))
* **network-interface:** match latest plugin release ([#2587](https://github.com/danielsogl/awesome-cordova-plugins/issues/2587)) ([4f41589](https://github.com/danielsogl/awesome-cordova-plugins/commit/4f415892b1ca65488a2ed4d49a19c5da495c1aeb))
* **streaming-media:** add new parameters & docs ([#2576](https://github.com/danielsogl/awesome-cordova-plugins/issues/2576)) ([f62a123](https://github.com/danielsogl/awesome-cordova-plugins/commit/f62a123a3410daeb67abd4af121ecb6b7f5a3a07))


### Reverts

* Revert "chore(package): bump deps" ([f1d8d3b](https://github.com/danielsogl/awesome-cordova-plugins/commit/f1d8d3b2557d64099e5ed85a9291fbc4d3d86a3e))



# [5.0.0-beta.13](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.9.0...v5.0.0-beta.13) (2018-06-28)


### Bug Fixes

* **android-fingerprint-auth:** ensure ERRORS array is defined ([#2508](https://github.com/danielsogl/awesome-cordova-plugins/issues/2508)) ([714114d](https://github.com/danielsogl/awesome-cordova-plugins/commit/714114d1e0aeb676dbc1f2609a7137176de635ab))
* **background-geolocation:** watchLocationMode returns observable ([#2547](https://github.com/danielsogl/awesome-cordova-plugins/issues/2547)) ([3f8a6f2](https://github.com/danielsogl/awesome-cordova-plugins/commit/3f8a6f24251866c582501a8265ccb7298ebf6eb5))
* **healt:** add correct return type for query function ([#2565](https://github.com/danielsogl/awesome-cordova-plugins/issues/2565)) ([98d44e6](https://github.com/danielsogl/awesome-cordova-plugins/commit/98d44e62940a7963932e1ee32d5d20a7200f4eda))
* **healths:** add missing attribute on HealthQueryOptionsAggregated ([#2550](https://github.com/danielsogl/awesome-cordova-plugins/issues/2550)) ([be370a4](https://github.com/danielsogl/awesome-cordova-plugins/commit/be370a4f997026a52ea5b67a7f3269309d0b78d7))
* **in-app-purchase-2:** fix ready method signature ([#2043](https://github.com/danielsogl/awesome-cordova-plugins/issues/2043)) ([a018381](https://github.com/danielsogl/awesome-cordova-plugins/commit/a0183811f688cb729302d394807525430eeba251))
* **index-app-content:** add missing function ([8d57198](https://github.com/danielsogl/awesome-cordova-plugins/commit/8d571989d4c685fabd1aef3f7b43f717a9ffe80c))
* **index-app-content:** fix imports ([189d66c](https://github.com/danielsogl/awesome-cordova-plugins/commit/189d66cc47ffc045f526a538179316ac6b5ab96f))
* **native-geocoder:** set response type to an array ([#2505](https://github.com/danielsogl/awesome-cordova-plugins/issues/2505)) ([defb276](https://github.com/danielsogl/awesome-cordova-plugins/commit/defb276b22df1a027916c554dbc0ed1354fa6d3a))
* **onesignal:** make params optional ([#2507](https://github.com/danielsogl/awesome-cordova-plugins/issues/2507)) ([e6db281](https://github.com/danielsogl/awesome-cordova-plugins/commit/e6db28123d0489356394c844140b33f7737c3c61))
* **onesignal:** update OSPermissionState interface ([#2561](https://github.com/danielsogl/awesome-cordova-plugins/issues/2561)) ([fc088f8](https://github.com/danielsogl/awesome-cordova-plugins/commit/fc088f8431383fa039c891de081a850ddca7e022))
* **site:** no prepended slash ([cea1dc1](https://github.com/danielsogl/awesome-cordova-plugins/commit/cea1dc14d3238657184c644e8b8ef7c57e64698d))
* **stripe:** fixed casing of postal code param ([#2520](https://github.com/danielsogl/awesome-cordova-plugins/issues/2520)) ([d6a9ed1](https://github.com/danielsogl/awesome-cordova-plugins/commit/d6a9ed134e4e356c5b861a8fe5a736a5b92eed2f))
* **themeable-browser:** allow hidden and clear cache ([a4cc7f7](https://github.com/danielsogl/awesome-cordova-plugins/commit/a4cc7f7ae13912bd1d7078ccde59c9789766ca9f))
* **web-intent:** registerBroadcastReceiver as Observable ([#2491](https://github.com/danielsogl/awesome-cordova-plugins/issues/2491)) ([47f7397](https://github.com/danielsogl/awesome-cordova-plugins/commit/47f739777e4eab4d5d28ff97bcc194581cab0a5e))


### Features

* **aes-256:** AES256 encryption and decryption plugin added ([#2562](https://github.com/danielsogl/awesome-cordova-plugins/issues/2562)) ([fdd6315](https://github.com/danielsogl/awesome-cordova-plugins/commit/fdd63153e00c7c800ebe4d0c486b4c050d95ecc8))
* **ble:** update wrapper to match latest plugin release ([#2548](https://github.com/danielsogl/awesome-cordova-plugins/issues/2548)) ([03e6afb](https://github.com/danielsogl/awesome-cordova-plugins/commit/03e6afbad40ed32c186c92af6b080c7b4b70aaeb))
* **calldirectory:** add call directory plugin ([#2473](https://github.com/danielsogl/awesome-cordova-plugins/issues/2473)) ([1bfe829](https://github.com/danielsogl/awesome-cordova-plugins/commit/1bfe82959be3539bd2e3a09b1f0a115cfe3f0b19))
* **cloud-settings:** add support for cordova-plugin-cloud-settings ([#2494](https://github.com/danielsogl/awesome-cordova-plugins/issues/2494)) ([400dbcb](https://github.com/danielsogl/awesome-cordova-plugins/commit/400dbcb1fb4285b5eef7c904eb7ee3e7a2f7a4b7))
* **firebase-config:** add firebase-config wrapper ([#2517](https://github.com/danielsogl/awesome-cordova-plugins/issues/2517)) ([05423ce](https://github.com/danielsogl/awesome-cordova-plugins/commit/05423ce299fc99045645849c0556e878731d203d))
* **firebase-messaging:** add firebase-messaging ([#2518](https://github.com/danielsogl/awesome-cordova-plugins/issues/2518)) ([c03b73f](https://github.com/danielsogl/awesome-cordova-plugins/commit/c03b73f69c5cd9900df04ca252a65163a421e7a5))
* **firebase:** add verifyPhoneNumber support for iOS ([567f525](https://github.com/danielsogl/awesome-cordova-plugins/commit/567f525837694b58b6cf4b9469d02789bb9eac66))
* **hce:** add hce plugin wrapper ([#2534](https://github.com/danielsogl/awesome-cordova-plugins/issues/2534)) ([8460e68](https://github.com/danielsogl/awesome-cordova-plugins/commit/8460e6838a28a679bc4a2b39f54b8ea985cb471f))
* **image-picker:** add DATA_URL as an option to ImagePicker ([#2325](https://github.com/danielsogl/awesome-cordova-plugins/issues/2325)) ([dd9ba0a](https://github.com/danielsogl/awesome-cordova-plugins/commit/dd9ba0ad3f462bab4608a74c57c880f37aae6275))
* **InAppReview:** add InAppReview plugin ([#2483](https://github.com/danielsogl/awesome-cordova-plugins/issues/2483)) ([bfe5ae9](https://github.com/danielsogl/awesome-cordova-plugins/commit/bfe5ae9cf24dd5cc0305fa60087497bcd89188b4))
* **local-notifications:** added support for foreground option in version 0.9.0-beta.3 of cordova-plugin-local-notifications ([#2506](https://github.com/danielsogl/awesome-cordova-plugins/issues/2506)) ([ae6e28d](https://github.com/danielsogl/awesome-cordova-plugins/commit/ae6e28de88487ae9f101e0e8bf05d0db8a81611b))
* **onesignal:** Added notification stacking ([#2512](https://github.com/danielsogl/awesome-cordova-plugins/issues/2512)) ([7c35535](https://github.com/danielsogl/awesome-cordova-plugins/commit/7c355350fe8c58775486cfebfd79acae7a4bd5e1))
* **photo-library:** add maxItems to limit items-iOS ([#2554](https://github.com/danielsogl/awesome-cordova-plugins/issues/2554)) ([31fc892](https://github.com/danielsogl/awesome-cordova-plugins/commit/31fc892b70086a588aab00b6ad63c42744c20e40))
* **plugin:** add Sensors plugin ([#2268](https://github.com/danielsogl/awesome-cordova-plugins/issues/2268)) ([e61d574](https://github.com/danielsogl/awesome-cordova-plugins/commit/e61d57484931ace32f25bc6a4fcf5ab57082c0f7))
* **send-result:** add sendResult method for WebIntent plugin ([#2495](https://github.com/danielsogl/awesome-cordova-plugins/issues/2495)) ([34aeb19](https://github.com/danielsogl/awesome-cordova-plugins/commit/34aeb196285fa285f8a3744f92753c87468f92cb))
* **SiriShortcuts:** implement Siri Shortcuts plugin in Ionic ([#2542](https://github.com/danielsogl/awesome-cordova-plugins/issues/2542)) ([df254de](https://github.com/danielsogl/awesome-cordova-plugins/commit/df254de88bff20fc0ae717e8097eca0f4eb9af1a))
* **star-prnt:** add StarPRNT plugin ([a1e6bef](https://github.com/danielsogl/awesome-cordova-plugins/commit/a1e6befbc0c1b4889218909041dd723d689bbc9e))
* **star-prnt:** Added support for connected to devices with barcode readers ([#2509](https://github.com/danielsogl/awesome-cordova-plugins/issues/2509)) ([58615f1](https://github.com/danielsogl/awesome-cordova-plugins/commit/58615f1cab2cea2a819352f0beb5005d3444acee))
* **tealium:** add tealium ionic wrappers ([#2414](https://github.com/danielsogl/awesome-cordova-plugins/issues/2414)) ([5f41ef1](https://github.com/danielsogl/awesome-cordova-plugins/commit/5f41ef1cbc95bdbb7a1aeca32bc0cf8fc05effbb))



# [5.0.0-beta.12](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.8.0...v5.0.0-beta.12) (2018-06-23)


### Bug Fixes

* build errors ([f70eaea](https://github.com/danielsogl/awesome-cordova-plugins/commit/f70eaea71ebcaa832eb6c48a3fdc382d7703ee6c))
* **build:** fix ngx build errors ([cc9a980](https://github.com/danielsogl/awesome-cordova-plugins/commit/cc9a980dc3d8ccb5bf13aa1c7bb91dbb31b0e50e))
* **core:** fix rxjs 6 build errors ([48b0f16](https://github.com/danielsogl/awesome-cordova-plugins/commit/48b0f16ed9cef7ff10cff6f729d2221d1ee7bf1b)), closes [#2439](https://github.com/danielsogl/awesome-cordova-plugins/issues/2439)
* fix lint ([b36a1f9](https://github.com/danielsogl/awesome-cordova-plugins/commit/b36a1f9df6427e50037782a5f7b51ec39d895f03))
* fix more lint errors ([0b3d299](https://github.com/danielsogl/awesome-cordova-plugins/commit/0b3d299a963d2873375a2d6fb933b5555fc0e5a4))
* fix rxjs 6 imports ([e0b0687](https://github.com/danielsogl/awesome-cordova-plugins/commit/e0b068700490a9408b7de98970c16fba7b0d5017))
* fix tealium jsdoc ([f34b6e6](https://github.com/danielsogl/awesome-cordova-plugins/commit/f34b6e6664fb2bdca70f28e0c3c1dea2c62934f8))
* **linting:** Fixing misc linting errors that typedoc complains about ([#2476](https://github.com/danielsogl/awesome-cordova-plugins/issues/2476)) ([d3c2859](https://github.com/danielsogl/awesome-cordova-plugins/commit/d3c2859d3865539dffb2d8039da0f216ada007f3))
* **plugins:** fix rxjs 6 build errors ([3ced31e](https://github.com/danielsogl/awesome-cordova-plugins/commit/3ced31ed2aef7325a515649f28674c6083f15d67)), closes [#2439](https://github.com/danielsogl/awesome-cordova-plugins/issues/2439)
* **str-prnt:** rxjs 6 import ([48714d7](https://github.com/danielsogl/awesome-cordova-plugins/commit/48714d72d663dc4f29851ac601e6c8cbbc320ec0))
* **v5-builder:** stop transforming "declare" classes ([#2503](https://github.com/danielsogl/awesome-cordova-plugins/issues/2503)) ([6662234](https://github.com/danielsogl/awesome-cordova-plugins/commit/6662234894c461a4051305841ceb623f23f4d1f2))


### Features

* **ionic-webview:** plugin for cordova-plugin-ionic-webview 2.0 ([8beb177](https://github.com/danielsogl/awesome-cordova-plugins/commit/8beb1774b8f35958f69d14dbfcb16dcc8bdf5f80))



# [5.0.0-beta.4](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.3...v5.0.0-beta.4) (2017-12-29)


### Bug Fixes

* **android-fingerprint-auth:** ensure ERRORS array is defined ([#2508](https://github.com/danielsogl/awesome-cordova-plugins/issues/2508)) ([714114d](https://github.com/danielsogl/awesome-cordova-plugins/commit/714114d1e0aeb676dbc1f2609a7137176de635ab))
* **background-geolocation:** watchLocationMode returns observable ([#2547](https://github.com/danielsogl/awesome-cordova-plugins/issues/2547)) ([3f8a6f2](https://github.com/danielsogl/awesome-cordova-plugins/commit/3f8a6f24251866c582501a8265ccb7298ebf6eb5))
* **calendar:** Fixes createCalendar parameter typing ([84e0aa1](https://github.com/danielsogl/awesome-cordova-plugins/commit/84e0aa1f947c7acd0afebf2634862ef46b8d5870))
* **call-number:** fix isCallSupported function ([f49d2a9](https://github.com/danielsogl/awesome-cordova-plugins/commit/f49d2a964e293e78f8a6e34edf31dc154baff5da)), closes [#2428](https://github.com/danielsogl/awesome-cordova-plugins/issues/2428)
* **healths:** add missing attribute on HealthQueryOptionsAggregated ([#2550](https://github.com/danielsogl/awesome-cordova-plugins/issues/2550)) ([be370a4](https://github.com/danielsogl/awesome-cordova-plugins/commit/be370a4f997026a52ea5b67a7f3269309d0b78d7))
* **ibeacon:** correct Type {Region} in some params ([#2453](https://github.com/danielsogl/awesome-cordova-plugins/issues/2453)) ([300db62](https://github.com/danielsogl/awesome-cordova-plugins/commit/300db62731a8f210384b9f3cbf078c1dcb13b222))
* **in-app-purchase-2:** fix ready method signature ([#2043](https://github.com/danielsogl/awesome-cordova-plugins/issues/2043)) ([a018381](https://github.com/danielsogl/awesome-cordova-plugins/commit/a0183811f688cb729302d394807525430eeba251))
* **native-geocoder:** set response type to an array ([#2505](https://github.com/danielsogl/awesome-cordova-plugins/issues/2505)) ([defb276](https://github.com/danielsogl/awesome-cordova-plugins/commit/defb276b22df1a027916c554dbc0ed1354fa6d3a))
* **onesignal:** make params optional ([#2507](https://github.com/danielsogl/awesome-cordova-plugins/issues/2507)) ([e6db281](https://github.com/danielsogl/awesome-cordova-plugins/commit/e6db28123d0489356394c844140b33f7737c3c61))
* **onesignal:** update OSPermissionState interface ([#2561](https://github.com/danielsogl/awesome-cordova-plugins/issues/2561)) ([fc088f8](https://github.com/danielsogl/awesome-cordova-plugins/commit/fc088f8431383fa039c891de081a850ddca7e022))
* **site:** no prepended slash ([cea1dc1](https://github.com/danielsogl/awesome-cordova-plugins/commit/cea1dc14d3238657184c644e8b8ef7c57e64698d))
* **stripe:** fixed casing of postal code param ([#2520](https://github.com/danielsogl/awesome-cordova-plugins/issues/2520)) ([d6a9ed1](https://github.com/danielsogl/awesome-cordova-plugins/commit/d6a9ed134e4e356c5b861a8fe5a736a5b92eed2f))
* **themeable-browser:** allow hidden and clear cache ([a4cc7f7](https://github.com/danielsogl/awesome-cordova-plugins/commit/a4cc7f7ae13912bd1d7078ccde59c9789766ca9f))
* **web-intent:** fix options param ([#2450](https://github.com/danielsogl/awesome-cordova-plugins/issues/2450)) ([23b760b](https://github.com/danielsogl/awesome-cordova-plugins/commit/23b760bb0162f27f4dfeea2d99968b62acdbe5d9))
* **web-intent:** registerBroadcastReceiver as Observable ([#2491](https://github.com/danielsogl/awesome-cordova-plugins/issues/2491)) ([47f7397](https://github.com/danielsogl/awesome-cordova-plugins/commit/47f739777e4eab4d5d28ff97bcc194581cab0a5e))


### Features

* **ble:** update wrapper to match latest plugin release ([#2548](https://github.com/danielsogl/awesome-cordova-plugins/issues/2548)) ([03e6afb](https://github.com/danielsogl/awesome-cordova-plugins/commit/03e6afbad40ed32c186c92af6b080c7b4b70aaeb))
* **calldirectory:** add call directory plugin ([#2473](https://github.com/danielsogl/awesome-cordova-plugins/issues/2473)) ([1bfe829](https://github.com/danielsogl/awesome-cordova-plugins/commit/1bfe82959be3539bd2e3a09b1f0a115cfe3f0b19))
* **cloud-settings:** add support for cordova-plugin-cloud-settings ([#2494](https://github.com/danielsogl/awesome-cordova-plugins/issues/2494)) ([400dbcb](https://github.com/danielsogl/awesome-cordova-plugins/commit/400dbcb1fb4285b5eef7c904eb7ee3e7a2f7a4b7))
* **file-picker:** add missing options ([1d9c449](https://github.com/danielsogl/awesome-cordova-plugins/commit/1d9c449b245d74bae0658b54c1d5ff6de80053e8))
* **firebase-config:** add firebase-config wrapper ([#2517](https://github.com/danielsogl/awesome-cordova-plugins/issues/2517)) ([05423ce](https://github.com/danielsogl/awesome-cordova-plugins/commit/05423ce299fc99045645849c0556e878731d203d))
* **firebase-messaging:** add firebase-messaging ([#2518](https://github.com/danielsogl/awesome-cordova-plugins/issues/2518)) ([c03b73f](https://github.com/danielsogl/awesome-cordova-plugins/commit/c03b73f69c5cd9900df04ca252a65163a421e7a5))
* **firebase:** add new functions ([36450e1](https://github.com/danielsogl/awesome-cordova-plugins/commit/36450e13cf9affc68ed63a25595418985f5df418))
* **firebase:** add verifyPhoneNumber support for iOS ([567f525](https://github.com/danielsogl/awesome-cordova-plugins/commit/567f525837694b58b6cf4b9469d02789bb9eac66))
* **hce:** add hce plugin wrapper ([#2534](https://github.com/danielsogl/awesome-cordova-plugins/issues/2534)) ([8460e68](https://github.com/danielsogl/awesome-cordova-plugins/commit/8460e6838a28a679bc4a2b39f54b8ea985cb471f))
* **InAppReview:** add InAppReview plugin ([#2483](https://github.com/danielsogl/awesome-cordova-plugins/issues/2483)) ([bfe5ae9](https://github.com/danielsogl/awesome-cordova-plugins/commit/bfe5ae9cf24dd5cc0305fa60087497bcd89188b4))
* **local-notifications:** added support for foreground option in version 0.9.0-beta.3 of cordova-plugin-local-notifications ([#2506](https://github.com/danielsogl/awesome-cordova-plugins/issues/2506)) ([ae6e28d](https://github.com/danielsogl/awesome-cordova-plugins/commit/ae6e28de88487ae9f101e0e8bf05d0db8a81611b))
* **onesignal:** Added notification stacking ([#2512](https://github.com/danielsogl/awesome-cordova-plugins/issues/2512)) ([7c35535](https://github.com/danielsogl/awesome-cordova-plugins/commit/7c355350fe8c58775486cfebfd79acae7a4bd5e1))
* **photo-library:** add maxItems to limit items-iOS ([#2554](https://github.com/danielsogl/awesome-cordova-plugins/issues/2554)) ([31fc892](https://github.com/danielsogl/awesome-cordova-plugins/commit/31fc892b70086a588aab00b6ad63c42744c20e40))
* **send-result:** add sendResult method for WebIntent plugin ([#2495](https://github.com/danielsogl/awesome-cordova-plugins/issues/2495)) ([34aeb19](https://github.com/danielsogl/awesome-cordova-plugins/commit/34aeb196285fa285f8a3744f92753c87468f92cb))
* **SiriShortcuts:** implement Siri Shortcuts plugin in Ionic ([#2542](https://github.com/danielsogl/awesome-cordova-plugins/issues/2542)) ([df254de](https://github.com/danielsogl/awesome-cordova-plugins/commit/df254de88bff20fc0ae717e8097eca0f4eb9af1a))
* **star-prnt:** add StarPRNT plugin ([a1e6bef](https://github.com/danielsogl/awesome-cordova-plugins/commit/a1e6befbc0c1b4889218909041dd723d689bbc9e))
* **star-prnt:** Added support for connected to devices with barcode readers ([#2509](https://github.com/danielsogl/awesome-cordova-plugins/issues/2509)) ([58615f1](https://github.com/danielsogl/awesome-cordova-plugins/commit/58615f1cab2cea2a819352f0beb5005d3444acee))
* **tealium:** add tealium ionic wrappers ([#2414](https://github.com/danielsogl/awesome-cordova-plugins/issues/2414)) ([5f41ef1](https://github.com/danielsogl/awesome-cordova-plugins/commit/5f41ef1cbc95bdbb7a1aeca32bc0cf8fc05effbb))
* **uptime:** add deep sleep parameter ([#2456](https://github.com/danielsogl/awesome-cordova-plugins/issues/2456)) ([91d22c5](https://github.com/danielsogl/awesome-cordova-plugins/commit/91d22c52117abe171374d56781689c9e80428a33))



# [4.7.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.6.0...v4.7.0) (2018-04-09)


### Bug Fixes

* **badge:** add correct requestPermission function ([586c7e5](https://github.com/danielsogl/awesome-cordova-plugins/commit/586c7e505f3ce7d1016059a5303d87ea4ed82010)), closes [#105](https://github.com/danielsogl/awesome-cordova-plugins/issues/105) [#1856](https://github.com/danielsogl/awesome-cordova-plugins/issues/1856)
* **call-log:** comments erratum ([4b9cf17](https://github.com/danielsogl/awesome-cordova-plugins/commit/4b9cf17cbb90028bfda431166f620618289e2209))
* **call-log:** update getCallLog signature ([61c0ecf](https://github.com/danielsogl/awesome-cordova-plugins/commit/61c0ecfa4f50b61381e76c85f1d24f4770a213ed))
* **contacts:** refactor wrong ContactFieldTypes ([f607a03](https://github.com/danielsogl/awesome-cordova-plugins/commit/f607a03c9ba2bf39b8da173ed4efa888efd01d74))
* **email-composer:** add missing options ([4399600](https://github.com/danielsogl/awesome-cordova-plugins/commit/439960092e8f9a86bf0dc760ae6727a0b24ca466)), closes [#175](https://github.com/danielsogl/awesome-cordova-plugins/issues/175)
* **facebook:** remove browserInit function ([f718432](https://github.com/danielsogl/awesome-cordova-plugins/commit/f7184325a7567968eede72d59566c34d999ded24)), closes [#1901](https://github.com/danielsogl/awesome-cordova-plugins/issues/1901)
* **firebase-analytics:** add `sync` option for all methods ([42fd1f2](https://github.com/danielsogl/awesome-cordova-plugins/commit/42fd1f2400780a248a8d8ab40c2c51107160236e))
* **health-kit:** add missing properties to HealthKitOptions ([f8e79ce](https://github.com/danielsogl/awesome-cordova-plugins/commit/f8e79cec5fa28388df9bda5b79988332ace0f53a))
* **image-resizer:** add missing option ([859cbfc](https://github.com/danielsogl/awesome-cordova-plugins/commit/859cbfcfc6cecbf02cf6b6093fc3160fb5da7853))
* **index-app-content:** remove onItemPressed function ([270678f](https://github.com/danielsogl/awesome-cordova-plugins/commit/270678fb55dc85e7ce681c4c225cba5853ce0d77))
* **local-notifications:** fixed linting errors ([8a26377](https://github.com/danielsogl/awesome-cordova-plugins/commit/8a2637789f02e0392d60bed28f044f26d133b00f))
* **printer:** add correct npm repository ([4bf55d3](https://github.com/danielsogl/awesome-cordova-plugins/commit/4bf55d3b1a22e1c74bb37f6844e19ad0cd72ab83))
* **Pro:** CordovaCheck should sync. [#2136](https://github.com/danielsogl/awesome-cordova-plugins/issues/2136) [#2127](https://github.com/danielsogl/awesome-cordova-plugins/issues/2127) ([f419db5](https://github.com/danielsogl/awesome-cordova-plugins/commit/f419db5d8087472f11238a694e9a87ca967a6ad8))
* **pro:** proper callback type and guard for plugin instantiate. [#2136](https://github.com/danielsogl/awesome-cordova-plugins/issues/2136) [#2127](https://github.com/danielsogl/awesome-cordova-plugins/issues/2127) ([61293c3](https://github.com/danielsogl/awesome-cordova-plugins/commit/61293c33ccac05eba5230c0afb9ab3fa70f68513))
* **pro:** Tweak to pro plugin. [#2136](https://github.com/danielsogl/awesome-cordova-plugins/issues/2136) [#2127](https://github.com/danielsogl/awesome-cordova-plugins/issues/2127) ([c8ecee0](https://github.com/danielsogl/awesome-cordova-plugins/commit/c8ecee01d6abc6b32594d7ff42306fe9fd2632f9))
* **push:** Android senderID as optional ([1b237aa](https://github.com/danielsogl/awesome-cordova-plugins/commit/1b237aa996044a8589bd5b3e22463657579208ea))
* **Radmob-pro:** add offsetTopBar option ([4948640](https://github.com/danielsogl/awesome-cordova-plugins/commit/4948640db20fb8463a3bcbc39d5c8189fd559c1c)), closes [#2100](https://github.com/danielsogl/awesome-cordova-plugins/issues/2100)
* **speech-recognition:** add missing options ([9aff5ea](https://github.com/danielsogl/awesome-cordova-plugins/commit/9aff5eaa13b165b89c8a33f46661cf69beddf914)), closes [#2165](https://github.com/danielsogl/awesome-cordova-plugins/issues/2165)
* **sqlite:** remove trailing whitespaces ([7547a94](https://github.com/danielsogl/awesome-cordova-plugins/commit/7547a94c80b712d335e0c090047f1b8139179532))
* **uuid:** add correct plugin source ([a81a4d3](https://github.com/danielsogl/awesome-cordova-plugins/commit/a81a4d3edf76ddde553ad2051d127f3bcc57944b)), closes [#2324](https://github.com/danielsogl/awesome-cordova-plugins/issues/2324)
* **web-intent:** allow extras ([8dc5ad2](https://github.com/danielsogl/awesome-cordova-plugins/commit/8dc5ad2ee6b42b6038a9f7dba41e8067dc93c6f0)), closes [#1959](https://github.com/danielsogl/awesome-cordova-plugins/issues/1959)
* **web-intent:** rename `onNewIntent` to `onIntent` ([dbcb103](https://github.com/danielsogl/awesome-cordova-plugins/commit/dbcb103adc8c3ea506477acbfe3bb4b6bdbcf40c))


### Features

* **app-rate:** add custom locale interface ([2a18dbc](https://github.com/danielsogl/awesome-cordova-plugins/commit/2a18dbcf3e0c09165f65effe9eb1c191dc581ac4))
* **app-update:** add app update options ([0f325ed](https://github.com/danielsogl/awesome-cordova-plugins/commit/0f325ed77225feecf5ae6f5de9339be432a47718))
* **appodeal:** add new functions ([247a1a1](https://github.com/danielsogl/awesome-cordova-plugins/commit/247a1a1d748dc835347a6feee08985888ab95500)), closes [#2065](https://github.com/danielsogl/awesome-cordova-plugins/issues/2065)
* **base64-to-gallery:** add options interface ([11d516f](https://github.com/danielsogl/awesome-cordova-plugins/commit/11d516fb28ac3220abd05798ccaa6cb1bad284f8))
* **ble:** add scan options interface ([e345fed](https://github.com/danielsogl/awesome-cordova-plugins/commit/e345fed09fd2c843a7ed1671989f2465be32e16b))
* **calendar:** add getCreateCalendarOptions function ([13765d2](https://github.com/danielsogl/awesome-cordova-plugins/commit/13765d2d6a9a20dd6cef670cc0e5b8f7d2ff0160))
* **call-log:** add operator 'like' and array of values ([84cecf7](https://github.com/danielsogl/awesome-cordova-plugins/commit/84cecf78414c682779b872bc605d0bbd9b2e3bdb))
* **call-log:** add plugin ([76a644d](https://github.com/danielsogl/awesome-cordova-plugins/commit/76a644d1224b8244f9e99f44b10fcd30b69a43c6))
* **camera-preview:** add onBackButton function ([a345e2c](https://github.com/danielsogl/awesome-cordova-plugins/commit/a345e2c6f1569c1b86cdd4a0c78752c950113e8e)), closes [#1967](https://github.com/danielsogl/awesome-cordova-plugins/issues/1967)
* **camera-preview:** disable exif stripping conf ([e231bf8](https://github.com/danielsogl/awesome-cordova-plugins/commit/e231bf8507d2ea15931bc7aa0908f3b43690bb7c))
* **device-accounts:** add android account interface ([d2261b6](https://github.com/danielsogl/awesome-cordova-plugins/commit/d2261b643202df5fa2face83a178eb848a6f7829))
* **device-feedback:** add feedback interface ([7cafebd](https://github.com/danielsogl/awesome-cordova-plugins/commit/7cafebd0e88c828daa562364f8a390ab695ee6a8))
* **google-analytics:** add missing functions ([ff0008e](https://github.com/danielsogl/awesome-cordova-plugins/commit/ff0008e7eba66355206f8f5884a73b2079526a6c))
* **google-maps:** update to match latest plugin version ([#2320](https://github.com/danielsogl/awesome-cordova-plugins/issues/2320)) ([f11be24](https://github.com/danielsogl/awesome-cordova-plugins/commit/f11be24f7463e342d314cd7218519bae101ed07a)), closes [/github.com/ionic-team/ionic-native/pull/1815#issuecomment-318909795](https://github.com//github.com/ionic-team/ionic-native/pull/1815/issues/issuecomment-318909795) [#2087](https://github.com/danielsogl/awesome-cordova-plugins/issues/2087) [/stackoverflow.com/questions/47083289/ionic-native-google-maps-plugin-set-app-background-color/47165721#47165721](https://github.com//stackoverflow.com/questions/47083289/ionic-native-google-maps-plugin-set-app-background-color/47165721/issues/47165721) [#2254](https://github.com/danielsogl/awesome-cordova-plugins/issues/2254) [#2199](https://github.com/danielsogl/awesome-cordova-plugins/issues/2199)
* **hot code push:** add cordova-hot-code-push ([e7968da](https://github.com/danielsogl/awesome-cordova-plugins/commit/e7968da7f4a9a1b067b08010c7eac21b47190967))
* **hot code push:** add update events ([04bdade](https://github.com/danielsogl/awesome-cordova-plugins/commit/04bdadedd880172e9199974339a6655ed913c884))
* **http:** add support for new methods ([#2249](https://github.com/danielsogl/awesome-cordova-plugins/issues/2249)) ([4497e00](https://github.com/danielsogl/awesome-cordova-plugins/commit/4497e00670974b9da132fded41a1331c4b392716))
* **http:** add support for new properties ([#2135](https://github.com/danielsogl/awesome-cordova-plugins/issues/2135)) ([c2a62cd](https://github.com/danielsogl/awesome-cordova-plugins/commit/c2a62cd3c811357d9ddfb8bf8163822298a95d0c))
* **jins-meme:** enable background mode data collection ([1932f2d](https://github.com/danielsogl/awesome-cordova-plugins/commit/1932f2dd66285cda85ead81ae59e05e959998e64))
* **local-notifications:** added a new param to specify if the notification will be silent ([6e58192](https://github.com/danielsogl/awesome-cordova-plugins/commit/6e58192630b2d58fa20db0c7cf5a99e93f43b8d4))
* **local-notifications:** Support version 0.9.0-beta.3 of cordova-plugin-local-notifications ([e5034bf](https://github.com/danielsogl/awesome-cordova-plugins/commit/e5034bf8276362cb25af27b86815a56b1757bd99))
* **one-signal:** add clearOneSignalNotifications function ([fc0338a](https://github.com/danielsogl/awesome-cordova-plugins/commit/fc0338a1c5901f55c79016aa3f633954b1e3b33e))
* **plugin:** Add google nearby plugin ([eb1bcdd](https://github.com/danielsogl/awesome-cordova-plugins/commit/eb1bcdd078f3300eb167e7a3c0413857766b0dfa))
* **plugin:** add iOS File Picker ([571df3a](https://github.com/danielsogl/awesome-cordova-plugins/commit/571df3a2513f49abfdc879bbe6aecce15d73265c))
* **plugin:** add Microdoft App Center Analytics plugin ([b65946b](https://github.com/danielsogl/awesome-cordova-plugins/commit/b65946b1a8e11fc8a950eb39d00fbea1107256f3))
* **plugin:** add Microdoft App Center Analytics plugin ([7a5bee9](https://github.com/danielsogl/awesome-cordova-plugins/commit/7a5bee914f757c95946c3f03c83b3398b487df50))
* **plugin:** add Microdoft App Center Analytics plugin ([84c9bfb](https://github.com/danielsogl/awesome-cordova-plugins/commit/84c9bfbca3f8bc8f0f079e59236f2e835117b15e))
* **plugin:** add Microsoft App Center Crashes plugin ([44e0e24](https://github.com/danielsogl/awesome-cordova-plugins/commit/44e0e2483a6ee9ead4a143213137ad8fb0fc1d7a))
* **plugin:** add Microsoft App Center Push plugin ([cdabebd](https://github.com/danielsogl/awesome-cordova-plugins/commit/cdabebd487c01329fb19a7f68c048a32a23ca746))
* **plugin:** add OpenALPR plugin ([e27fbf4](https://github.com/danielsogl/awesome-cordova-plugins/commit/e27fbf47bd87047a3e565f164eca8391d49f9009))
* **plugin:** add Uptime plugin ([6be3832](https://github.com/danielsogl/awesome-cordova-plugins/commit/6be38328b049b27d0bc0f0001f316699a1f42677))
* **social-sharing:** add missing function ([4cb28c4](https://github.com/danielsogl/awesome-cordova-plugins/commit/4cb28c41c84399d56015fcc02dd264873955b6bd)), closes [#2209](https://github.com/danielsogl/awesome-cordova-plugins/issues/2209)
* **speechkit:** plugin implementation ([41e5a0f](https://github.com/danielsogl/awesome-cordova-plugins/commit/41e5a0f7fe3d873c24269ee1bae55e3ff331e491))
* **sqlite:** add selfTest function ([241f073](https://github.com/danielsogl/awesome-cordova-plugins/commit/241f0733ee69809846f62384e961b6bc3c8e9773)), closes [#963](https://github.com/danielsogl/awesome-cordova-plugins/issues/963)
* **uptime:** add iOS support ([e6f6158](https://github.com/danielsogl/awesome-cordova-plugins/commit/e6f6158b437d972952aa538b0af6d19ce2d45576))
* **web-intent:** add startService function ([15bb350](https://github.com/danielsogl/awesome-cordova-plugins/commit/15bb350d8e346a035bfbfb0ab4f4370b5f4a3980))


### Reverts

* Revert "chore(package): bump dependencies and lint rules" ([6c938bf](https://github.com/danielsogl/awesome-cordova-plugins/commit/6c938bfdb7e41997efcb419b05e701fc98d8f141))



# [5.0.0-beta.4](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.3...v5.0.0-beta.4) (2017-12-29)



# [5.0.0-beta.3](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.5.1...v5.0.0-beta.3) (2017-12-29)


### Bug Fixes

* **push:** fix finish method ([995fd56](https://github.com/danielsogl/awesome-cordova-plugins/commit/995fd56894234c9cdb0f9e873822d12313aa6e88))


### Features

* **crop:** add targetHeight and targetWidth options ([#2213](https://github.com/danielsogl/awesome-cordova-plugins/issues/2213)) ([9990df8](https://github.com/danielsogl/awesome-cordova-plugins/commit/9990df895333292b7791cb59bc97b7deb22a6fdb))



## [4.5.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v5.0.0-beta.0...v4.5.1) (2017-12-12)


### Bug Fixes

* **core:** fix issue with CordovaFunctionOverride decorator ([6cd97ca](https://github.com/danielsogl/awesome-cordova-plugins/commit/6cd97ca0eeb5c6890de18556533565672bef65d5))



# [5.0.0-beta.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.5.0...v5.0.0-beta.0) (2017-12-08)


### Bug Fixes

* **alipay:** add 'string' as an alternative type for 'pay()' input parameter; ([#2172](https://github.com/danielsogl/awesome-cordova-plugins/issues/2172)) ([d43fe72](https://github.com/danielsogl/awesome-cordova-plugins/commit/d43fe72f7ba19cabd015f11b90d89718fa492f29))
* **app-rate:** add simpleMode ([#2155](https://github.com/danielsogl/awesome-cordova-plugins/issues/2155)) ([9844274](https://github.com/danielsogl/awesome-cordova-plugins/commit/984427421318947cc44238447e3de52c6bb4a203))
* **app-rate:** change openStoreInApp to inAppReview ([#2097](https://github.com/danielsogl/awesome-cordova-plugins/issues/2097)) ([d95ae68](https://github.com/danielsogl/awesome-cordova-plugins/commit/d95ae68c9cf971101e1cb28111a54415be98fc53))
* **camera-preview:** add missing `tapToFocus` camera option ([#2046](https://github.com/danielsogl/awesome-cordova-plugins/issues/2046)) ([b9b781d](https://github.com/danielsogl/awesome-cordova-plugins/commit/b9b781ddee0132f03d1c3f92f2104180510e6986))
* **deeplinks:** add options parameter([#1601](https://github.com/danielsogl/awesome-cordova-plugins/issues/1601)) ([#2141](https://github.com/danielsogl/awesome-cordova-plugins/issues/2141)) ([bb2291c](https://github.com/danielsogl/awesome-cordova-plugins/commit/bb2291cd16e4ac3f0f9d29ad7947ac83ce551393))
* **ftp:** return observable (not promise) for upload and download method ([#2174](https://github.com/danielsogl/awesome-cordova-plugins/issues/2174)) ([5159367](https://github.com/danielsogl/awesome-cordova-plugins/commit/5159367db8cc60bea92b0b859d4c78556aac82b3))
* **indexappcontent:** Return observable for onItemPressed ([#2006](https://github.com/danielsogl/awesome-cordova-plugins/issues/2006)) ([9a52110](https://github.com/danielsogl/awesome-cordova-plugins/commit/9a5211001f3f016106679eb02d0687b905d0a577))
* **mobile-accessibility:** change signature references to the correct names ([#2139](https://github.com/danielsogl/awesome-cordova-plugins/issues/2139)) ([b2c873c](https://github.com/danielsogl/awesome-cordova-plugins/commit/b2c873cc99bdb8d293a661e01e25e7fcf39c6350))
* **ms-adal:** add userInfo in the AuthenticationResult ([#2160](https://github.com/danielsogl/awesome-cordova-plugins/issues/2160)) ([c038c63](https://github.com/danielsogl/awesome-cordova-plugins/commit/c038c6331c844dcaae418e57be2e9de6c4d20e7c))
* **music-controls:** various fixes ([#2094](https://github.com/danielsogl/awesome-cordova-plugins/issues/2094)) ([afca876](https://github.com/danielsogl/awesome-cordova-plugins/commit/afca8761d77697002cbd29f1ad27aa4e69b4dd55))
* **push:** add senderID to AndroidPushOptions ([#2060](https://github.com/danielsogl/awesome-cordova-plugins/issues/2060)) ([4694c42](https://github.com/danielsogl/awesome-cordova-plugins/commit/4694c422aaf277a4d4a571f847b04f137145b94f))
* **web-intent:** fix false negative of plugin installation ([#2062](https://github.com/danielsogl/awesome-cordova-plugins/issues/2062)) ([ae94c71](https://github.com/danielsogl/awesome-cordova-plugins/commit/ae94c710af737f3c97c7da7ac5b3a5d6eae189a1))


### Features

* **android exoplayer:** add cordova-plugin-exoplayer ([#2180](https://github.com/danielsogl/awesome-cordova-plugins/issues/2180)) ([d06fa48](https://github.com/danielsogl/awesome-cordova-plugins/commit/d06fa4886620a4484b528667a11baae47302fd9c))
* **android-fingerprint:** add getSigningCertificateFingerprint() method ([#2076](https://github.com/danielsogl/awesome-cordova-plugins/issues/2076)) ([bd5bcdc](https://github.com/danielsogl/awesome-cordova-plugins/commit/bd5bcdc9b7bd3f86537b929b72f87edaeda4c08d))
* **apple-pay:** add cordova-plugin-applepay ([#2081](https://github.com/danielsogl/awesome-cordova-plugins/issues/2081)) ([784f948](https://github.com/danielsogl/awesome-cordova-plugins/commit/784f948a5b3bd7f5df8f2a37c43beab36e339819))
* **apple-pay:** update for version 3 of the Apple Pay plugin. ([#2177](https://github.com/danielsogl/awesome-cordova-plugins/issues/2177)) ([bf41506](https://github.com/danielsogl/awesome-cordova-plugins/commit/bf41506324377b27c2a3144893e3bc1862252d91))
* **ble:** support startStateNotifications & stopStateNotifications ([#2085](https://github.com/danielsogl/awesome-cordova-plugins/issues/2085)) ([2a4bcee](https://github.com/danielsogl/awesome-cordova-plugins/commit/2a4bcee6a05e45010348952eb77ec628eb7a8806))
* **braintree:** add support for cordova-plugin-braintree to [@ionic-native](https://github.com/ionic-native) ([#2073](https://github.com/danielsogl/awesome-cordova-plugins/issues/2073)) ([091ac7a](https://github.com/danielsogl/awesome-cordova-plugins/commit/091ac7a68c84ee21ef307e8d73f018443414692a))
* **call-number:** add isCallSupported method  ([#2051](https://github.com/danielsogl/awesome-cordova-plugins/issues/2051)) ([6053296](https://github.com/danielsogl/awesome-cordova-plugins/commit/60532969988722744f7058a6d4b062c7e9dc88f4))
* **dns:** add cordova-plugin-dns plugin ([#2083](https://github.com/danielsogl/awesome-cordova-plugins/issues/2083)) ([212bd63](https://github.com/danielsogl/awesome-cordova-plugins/commit/212bd631911bcca44278cc6b3373afdb05b8d424))
* **firebase:** add new Firebase phone verification methods ([#2157](https://github.com/danielsogl/awesome-cordova-plugins/issues/2157)) ([86181af](https://github.com/danielsogl/awesome-cordova-plugins/commit/86181afc27a8fd31a8773dd3cc89388f4f4ff230))
* **GooglePlayGamesServices:** add plugin ([#1904](https://github.com/danielsogl/awesome-cordova-plugins/issues/1904)) ([03f5789](https://github.com/danielsogl/awesome-cordova-plugins/commit/03f578909b990e4039a48380277c9786fb692b91))
* **network-interface:** add plugin support ([#2063](https://github.com/danielsogl/awesome-cordova-plugins/issues/2063)) ([86b2a2c](https://github.com/danielsogl/awesome-cordova-plugins/commit/86b2a2ca73d91d73277b02133631a772d22f65cf))
* **nfc:** add interfaces and missing references to UriHelper and TextHelper ([#2104](https://github.com/danielsogl/awesome-cordova-plugins/issues/2104)) ([8b78644](https://github.com/danielsogl/awesome-cordova-plugins/commit/8b78644680c013b194dbb78f60223d1e6f995f24))
* **nfc:** add support for iOS ([#2050](https://github.com/danielsogl/awesome-cordova-plugins/issues/2050)) ([9f72592](https://github.com/danielsogl/awesome-cordova-plugins/commit/9f72592fcc0a63e18d843a9634363e4f85144f57))
* **push:** add support for version 2.1.0 ([#2064](https://github.com/danielsogl/awesome-cordova-plugins/issues/2064)) ([c1ce5da](https://github.com/danielsogl/awesome-cordova-plugins/commit/c1ce5dac18fe455745c9112495d1998efde35042))
* **zeroconf:** add reInit() method ([#2144](https://github.com/danielsogl/awesome-cordova-plugins/issues/2144)) ([7255795](https://github.com/danielsogl/awesome-cordova-plugins/commit/7255795ae51341fdb889b4d41879012206cc70cd))



## [4.4.2](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.4.1...v4.4.2) (2017-11-15)



## [4.4.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.4.0...v4.4.1) (2017-11-13)



# [4.4.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.3.3...v4.4.0) (2017-11-09)


### Features

* **google-maps:** accept own properties for `addMarker()` and others ([#2093](https://github.com/danielsogl/awesome-cordova-plugins/issues/2093)) ([196be02](https://github.com/danielsogl/awesome-cordova-plugins/commit/196be026ea68aa3371b901d698bb1cf959a2dec5)), closes [/github.com/ionic-team/ionic-native/pull/1815#issuecomment-318909795](https://github.com//github.com/ionic-team/ionic-native/pull/1815/issues/issuecomment-318909795) [#2087](https://github.com/danielsogl/awesome-cordova-plugins/issues/2087) [/stackoverflow.com/questions/47083289/ionic-native-google-maps-plugin-set-app-background-color/47165721#47165721](https://github.com//stackoverflow.com/questions/47083289/ionic-native-google-maps-plugin-set-app-background-color/47165721/issues/47165721)
* **http:** add support for new methods ([#2054](https://github.com/danielsogl/awesome-cordova-plugins/issues/2054)) ([d96d3ee](https://github.com/danielsogl/awesome-cordova-plugins/commit/d96d3eef07f702b3b64fd7fc8214c7801c8ca998)), closes [#2052](https://github.com/danielsogl/awesome-cordova-plugins/issues/2052) [#2022](https://github.com/danielsogl/awesome-cordova-plugins/issues/2022) [#2053](https://github.com/danielsogl/awesome-cordova-plugins/issues/2053)



## [4.3.3](https://github.com/danielsogl/awesome-cordova-plugins/compare/4.3.2...v4.3.3) (2017-11-01)


### Bug Fixes

* **google-maps:** HtmlInfoWindow should extend BaseClass [#2034](https://github.com/danielsogl/awesome-cordova-plugins/issues/2034)  ([#2035](https://github.com/danielsogl/awesome-cordova-plugins/issues/2035)) ([ce6e412](https://github.com/danielsogl/awesome-cordova-plugins/commit/ce6e412788eed95facd3f0d82a8b4cace78f0030)), closes [/github.com/ionic-team/ionic-native/pull/1815#issuecomment-318909795](https://github.com//github.com/ionic-team/ionic-native/pull/1815/issues/issuecomment-318909795)



## [4.3.2](https://github.com/danielsogl/awesome-cordova-plugins/compare/4.3.1...4.3.2) (2017-10-17)


### Bug Fixes

* **google-maps:** remove type from GoogleMapsEvent constant ([4639bf9](https://github.com/danielsogl/awesome-cordova-plugins/commit/4639bf9a945ce62e9ea5ddb15231a39adf73dfab))


### Features

* **pro:** support corova-plugin-ionic v2.0.0 ([975f08b](https://github.com/danielsogl/awesome-cordova-plugins/commit/975f08b7b546e33501d0a23eb695c981a7ac65e5))



## [4.3.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.3.0...4.3.1) (2017-10-06)


### Bug Fixes

* **BLE:** make readRSSI() not static ([#2011](https://github.com/danielsogl/awesome-cordova-plugins/issues/2011)) ([363b41e](https://github.com/danielsogl/awesome-cordova-plugins/commit/363b41e0753aecdc65cb7266a8c4d4b4e8c074cd))
* **google-maps:** various fixed introduced in previous release ([#2024](https://github.com/danielsogl/awesome-cordova-plugins/issues/2024)) ([6ca5bea](https://github.com/danielsogl/awesome-cordova-plugins/commit/6ca5beaf0bf86d13da8c1c5a7a638eb236393099)), closes [/github.com/ionic-team/ionic-native/pull/1815#issuecomment-318909795](https://github.com//github.com/ionic-team/ionic-native/pull/1815/issues/issuecomment-318909795)
* **onesignal:** fix property name ([#2019](https://github.com/danielsogl/awesome-cordova-plugins/issues/2019)) ([30ed33a](https://github.com/danielsogl/awesome-cordova-plugins/commit/30ed33a0469c48540ee383ecf37ca12906c4e78f))


### Features

* **pro:** Add support for Ionic Pro by incorporating cordova-plugin-ionic ([465d551](https://github.com/danielsogl/awesome-cordova-plugins/commit/465d5519d065f2988a9934ee443da19d2175532a))
* **regula-document-reader:** separate initialization and scanning, add android ([#2013](https://github.com/danielsogl/awesome-cordova-plugins/issues/2013)) ([2179699](https://github.com/danielsogl/awesome-cordova-plugins/commit/217969962276fb214ac24bbfc8824f98fea64029))



# [4.3.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.2.1...v4.3.0) (2017-09-27)


### Bug Fixes

* **google-maps:** convert JS classes to Ionic Native ([#1956](https://github.com/danielsogl/awesome-cordova-plugins/issues/1956)) ([57af5c5](https://github.com/danielsogl/awesome-cordova-plugins/commit/57af5c5e7358acbfe43bda8088215c2bf429dd1e)), closes [/github.com/ionic-team/ionic-native/pull/1815#issuecomment-318909795](https://github.com//github.com/ionic-team/ionic-native/pull/1815/issues/issuecomment-318909795)
* **google-maps:** fix icons property of MarkerClusterOptions ([#1937](https://github.com/danielsogl/awesome-cordova-plugins/issues/1937)) ([8004790](https://github.com/danielsogl/awesome-cordova-plugins/commit/80047907eaf85d0b637a1e1606d5d474362d5507)), closes [/github.com/ionic-team/ionic-native/pull/1815#issuecomment-318909795](https://github.com//github.com/ionic-team/ionic-native/pull/1815/issues/issuecomment-318909795)
* **google-maps:** fix issue when creating new instance of BaseArrayClass ([#1931](https://github.com/danielsogl/awesome-cordova-plugins/issues/1931)) ([957396b](https://github.com/danielsogl/awesome-cordova-plugins/commit/957396b5e595af82b036c6aaefcba5c0654dd2fe)), closes [/github.com/ionic-team/ionic-native/pull/1815#issuecomment-318909795](https://github.com//github.com/ionic-team/ionic-native/pull/1815/issues/issuecomment-318909795)
* **google-maps:** the zoom option is missing in the GoogleMapOptions class ([#1948](https://github.com/danielsogl/awesome-cordova-plugins/issues/1948)) ([ef898ef](https://github.com/danielsogl/awesome-cordova-plugins/commit/ef898efcc6c71093902c40bbe71dcd8e1044a005)), closes [/github.com/ionic-team/ionic-native/pull/1815#issuecomment-318909795](https://github.com//github.com/ionic-team/ionic-native/pull/1815/issues/issuecomment-318909795)
* **http:** fix plugin ref ([#1934](https://github.com/danielsogl/awesome-cordova-plugins/issues/1934)) ([3a1034e](https://github.com/danielsogl/awesome-cordova-plugins/commit/3a1034eab083deb6cb3bad02230cebe79e532b23))
* **launch-navigator:** fix navigate method ([#1940](https://github.com/danielsogl/awesome-cordova-plugins/issues/1940)) ([a150d4d](https://github.com/danielsogl/awesome-cordova-plugins/commit/a150d4d522e853394b4519c824ea910741ea4723))
* **stripe:** fix stripe create card token ([#2002](https://github.com/danielsogl/awesome-cordova-plugins/issues/2002)) ([5b15bb9](https://github.com/danielsogl/awesome-cordova-plugins/commit/5b15bb9f46d5212a494ba685cad422a0741abbed))
* **zeroconf:** extend the ZeroconfResult.action definition ([#1985](https://github.com/danielsogl/awesome-cordova-plugins/issues/1985)) ([e2f3702](https://github.com/danielsogl/awesome-cordova-plugins/commit/e2f3702d0b3cde50793c63285ca7a99034d48344))


### Features

* **android-full-screen:** add support for setSystemUiVisiblity ([#1942](https://github.com/danielsogl/awesome-cordova-plugins/issues/1942)) ([4246d47](https://github.com/danielsogl/awesome-cordova-plugins/commit/4246d47a6c12c0d884eba8718c5fd79f33daebc8))
* **document-reader:** add cordova-plugin-documentreader ([#1996](https://github.com/danielsogl/awesome-cordova-plugins/issues/1996)) ([7b94d4f](https://github.com/danielsogl/awesome-cordova-plugins/commit/7b94d4fccf94a54f40ddd04150cdf0d22e450607))
* **extended-device-information:** add Extended Device Info plugin ([#1980](https://github.com/danielsogl/awesome-cordova-plugins/issues/1980)) ([806766e](https://github.com/danielsogl/awesome-cordova-plugins/commit/806766e33e47edd19d3228119a3a1b1024b20be5))
* **music-controls:** add support for next/prev track and skip forward/backward in control center ([#1927](https://github.com/danielsogl/awesome-cordova-plugins/issues/1927)) ([fff9969](https://github.com/danielsogl/awesome-cordova-plugins/commit/fff99694ba59130f5e585f06fecc2881c39c9518))
* **push:** update PushOptions interfaces to match new version ([#1908](https://github.com/danielsogl/awesome-cordova-plugins/issues/1908)) ([34bf136](https://github.com/danielsogl/awesome-cordova-plugins/commit/34bf13670337431e51130bd06a3754fc205b42d9))
* **qr-scanner:** added destroy method ([#1916](https://github.com/danielsogl/awesome-cordova-plugins/issues/1916)) ([#1971](https://github.com/danielsogl/awesome-cordova-plugins/issues/1971)) ([10eb3ee](https://github.com/danielsogl/awesome-cordova-plugins/commit/10eb3eeeeb52baeee90a3944909d1fc032f47b74))
* **uid:** add UID plugin ([#1946](https://github.com/danielsogl/awesome-cordova-plugins/issues/1946)) ([e2419a2](https://github.com/danielsogl/awesome-cordova-plugins/commit/e2419a26b2258683fe82287d587b7fe451461d44))


### BREAKING CHANGES

* **push:** this wrapper will work only with `phonegap-plugin-push@2.0.0`



# [4.2.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.1.0...v4.2.0) (2017-08-26)


### Bug Fixes

* **fingerprint-aio:** add missing FingerprintOptions properties ([#1845](https://github.com/danielsogl/awesome-cordova-plugins/issues/1845)) ([85825c7](https://github.com/danielsogl/awesome-cordova-plugins/commit/85825c7b91ca6ecf92ee5a8a1c804d41ebdad4ef))
* **geofence:** remove duplicate onTransitionReceived method ([00c0707](https://github.com/danielsogl/awesome-cordova-plugins/commit/00c0707dad4fc98974ae2e8c3d720c7a7521e968))
* **google-maps:** add missing debug option ([#1832](https://github.com/danielsogl/awesome-cordova-plugins/issues/1832)) ([39ec515](https://github.com/danielsogl/awesome-cordova-plugins/commit/39ec5158a00c4e00559fee831118cced494fc23a))
* **ms-adal:** make userId optional ([#1894](https://github.com/danielsogl/awesome-cordova-plugins/issues/1894)) ([21045ea](https://github.com/danielsogl/awesome-cordova-plugins/commit/21045ea535affe4b15a996e5295932857105449c))
* **native-geocoder:** update NativeGeocoderReverse result ([#1840](https://github.com/danielsogl/awesome-cordova-plugins/issues/1840)) ([7c1b409](https://github.com/danielsogl/awesome-cordova-plugins/commit/7c1b4095424378c04c5b2f16438872bc5fbc3dbd))
* **native-spinner:** update pluginRef ([#1859](https://github.com/danielsogl/awesome-cordova-plugins/issues/1859)) ([262e18f](https://github.com/danielsogl/awesome-cordova-plugins/commit/262e18f409d182093b840d0dd3db247e9432e07f))
* **serial:** add missing options for the open method ([#1844](https://github.com/danielsogl/awesome-cordova-plugins/issues/1844)) ([1acade4](https://github.com/danielsogl/awesome-cordova-plugins/commit/1acade48830572e751a528624019cae1bbbab43d))
* **sqlite:** add optional key parameter to SQLiteDatabaseConfig to support sqlcipher-adapter ([#1917](https://github.com/danielsogl/awesome-cordova-plugins/issues/1917)) ([0c097ba](https://github.com/danielsogl/awesome-cordova-plugins/commit/0c097ba2be50354dcf6a8d4e67373b1ac76286ed))


### Features

* **google-maps:** update plugin and fix a few issues ([#1834](https://github.com/danielsogl/awesome-cordova-plugins/issues/1834)) ([c11aec3](https://github.com/danielsogl/awesome-cordova-plugins/commit/c11aec33a7570d623ea693700e2d83fce22b4e2d)), closes [/github.com/ionic-team/ionic-native/pull/1815#issuecomment-318909795](https://github.com//github.com/ionic-team/ionic-native/pull/1815/issues/issuecomment-318909795)
* **http:** use a different plugin source with better features ([#1921](https://github.com/danielsogl/awesome-cordova-plugins/issues/1921)) ([a2d3396](https://github.com/danielsogl/awesome-cordova-plugins/commit/a2d33963b11587d5a8252154b92f7a0ceb9525a1))
* **keychain-touch-id:** add KeychainTouchId plugin ([#1837](https://github.com/danielsogl/awesome-cordova-plugins/issues/1837)) ([a2cc187](https://github.com/danielsogl/awesome-cordova-plugins/commit/a2cc1870b4e5d5801ae739a20231192d5350e78d))
* **local-notifications:** add `un` method to unsubscribe from events ([#1871](https://github.com/danielsogl/awesome-cordova-plugins/issues/1871)) ([ce5966b](https://github.com/danielsogl/awesome-cordova-plugins/commit/ce5966bf10671e85b586ca3fd123d42b200fabb0))
* **paypal:** add payeeEmail for third party merchants ([#1864](https://github.com/danielsogl/awesome-cordova-plugins/issues/1864)) ([cde87e2](https://github.com/danielsogl/awesome-cordova-plugins/commit/cde87e21132fb9087631b066b27d05d9b05630ce))
* **push:** add Browser Push notification support ([#1848](https://github.com/danielsogl/awesome-cordova-plugins/issues/1848)) ([aa4c3b3](https://github.com/danielsogl/awesome-cordova-plugins/commit/aa4c3b378764a0c00cbad5ff0ed003953eb416a2))



# [4.1.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.0.1...v4.1.0) (2017-07-21)


### Bug Fixes

* **media:** add setRate method ([4af3d5b](https://github.com/danielsogl/awesome-cordova-plugins/commit/4af3d5bcc1689609ef607b6676c83d5d414eb1c3)), closes [#1825](https://github.com/danielsogl/awesome-cordova-plugins/issues/1825)


### Features

* **firebase:** add unregister method ([#1823](https://github.com/danielsogl/awesome-cordova-plugins/issues/1823)) ([6230958](https://github.com/danielsogl/awesome-cordova-plugins/commit/62309585857989582c081a0f6b9347be0de12403))
* **google-maps:** add missing features and fix wrong definitions ([#1815](https://github.com/danielsogl/awesome-cordova-plugins/issues/1815)) ([976401a](https://github.com/danielsogl/awesome-cordova-plugins/commit/976401a4e9c54e5b2198936f6e4d2914e3cb9f9a))
* **hyper-track:** add HyperTrack plugin ([#1816](https://github.com/danielsogl/awesome-cordova-plugins/issues/1816)) ([47fa44c](https://github.com/danielsogl/awesome-cordova-plugins/commit/47fa44c932d00d19295c0af2a91f7acffab57612))
* **open-native-settings:** add Open Native Settings plugin ([0fa82e5](https://github.com/danielsogl/awesome-cordova-plugins/commit/0fa82e5c569dd6e08970ebee12df9604bbc4e8e6)), closes [#1821](https://github.com/danielsogl/awesome-cordova-plugins/issues/1821)



## [4.0.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v4.0.0...v4.0.1) (2017-07-15)


### Bug Fixes

* **media:** fix success/error/statusUpdate observables ([7105048](https://github.com/danielsogl/awesome-cordova-plugins/commit/7105048b890cc351614499e0b76fb68fbaace2b2)), closes [#1806](https://github.com/danielsogl/awesome-cordova-plugins/issues/1806)
* **social-sharing:** fix issues caused by omitting optional params ([25c1cf4](https://github.com/danielsogl/awesome-cordova-plugins/commit/25c1cf4058b3eff897752a127c586ee6dadecad2)), closes [#1805](https://github.com/danielsogl/awesome-cordova-plugins/issues/1805)


### Features

* **camera:** add enums for camera options ([6061af6](https://github.com/danielsogl/awesome-cordova-plugins/commit/6061af6238d8527c8f6c9268488f21a38bc8f211))
* **launch-navigator:** update plugin wrapper to support v4 ([9538416](https://github.com/danielsogl/awesome-cordova-plugins/commit/953841681ca7f3f8927e9bd9d1ba294f572324ce)), closes [#1738](https://github.com/danielsogl/awesome-cordova-plugins/issues/1738)
* **media:** add MEDIA_STATUS and MEDIA_ERROR enums ([1decedd](https://github.com/danielsogl/awesome-cordova-plugins/commit/1decedd899cc836e3cff73cce73c47b3783d9244))



# [4.0.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v3.14.0...v4.0.0) (2017-07-11)


### Bug Fixes

* **google-analytics:** fix parameter types in the trackMetric method ([#1780](https://github.com/danielsogl/awesome-cordova-plugins/issues/1780)) ([7bbd25c](https://github.com/danielsogl/awesome-cordova-plugins/commit/7bbd25c1a2a62a41bbf1747c827b550348f1b317))
* **media:** wrap plugin callbacks with Observables ([0867cff](https://github.com/danielsogl/awesome-cordova-plugins/commit/0867cfff3f6c80ca9186c43bdd9953e577139627)), closes [#1591](https://github.com/danielsogl/awesome-cordova-plugins/issues/1591)
* **safari-view-controller:** show should return an Observable ([a6f9714](https://github.com/danielsogl/awesome-cordova-plugins/commit/a6f9714422a960ee8464d678b7d727a0994550fb)), closes [#1619](https://github.com/danielsogl/awesome-cordova-plugins/issues/1619)
* **sqlite:** fix param type for `sqlBatch` method ([e8faf22](https://github.com/danielsogl/awesome-cordova-plugins/commit/e8faf22357ad6c59302809d4a7abed6fa62c2f1a)), closes [#1596](https://github.com/danielsogl/awesome-cordova-plugins/issues/1596)


### Code Refactoring

* **admob-pro:** rename plugin from AdMob to AdMobPro ([#1770](https://github.com/danielsogl/awesome-cordova-plugins/issues/1770)) ([bc6bf66](https://github.com/danielsogl/awesome-cordova-plugins/commit/bc6bf6671e0cbf390fdddd1a099b61cd3f85396d))
* **media:** rename main class to Media ([#1769](https://github.com/danielsogl/awesome-cordova-plugins/issues/1769)) ([9f1a0f9](https://github.com/danielsogl/awesome-cordova-plugins/commit/9f1a0f95857542330fac0b2b12ec158f6d805e67))
* **rename plugin to FileTransfer to match original plugin:** ([#1768](https://github.com/danielsogl/awesome-cordova-plugins/issues/1768)) ([3c54a1c](https://github.com/danielsogl/awesome-cordova-plugins/commit/3c54a1c7f5c03f2f5adb2c8a7b0e7aca9ac274bc))


### Features

* **email-composer:** update plugin to latest version and use original plugin ([#1771](https://github.com/danielsogl/awesome-cordova-plugins/issues/1771)) ([d395b42](https://github.com/danielsogl/awesome-cordova-plugins/commit/d395b4278829994b4a02892d3e54203d0de9e5dd))
* **google-maps:** add GoogleMapOptions interface ([aff653d](https://github.com/danielsogl/awesome-cordova-plugins/commit/aff653de2e4e12bb533a370ebce866173b2b2ab6))
* **google-maps:** update wrapper to support v2 of the plugin ([#1759](https://github.com/danielsogl/awesome-cordova-plugins/issues/1759)) ([06e666d](https://github.com/danielsogl/awesome-cordova-plugins/commit/06e666d6a015c4671ad2afef32580cc48bb851b4))
* **ms-adal:** add Azure Active Directory Authentication plugin ([cf0c740](https://github.com/danielsogl/awesome-cordova-plugins/commit/cf0c7402692d7c9e754d2021ccd6d17e45d343a7)), closes [#372](https://github.com/danielsogl/awesome-cordova-plugins/issues/372)
* **onesignal:** add new methods ([b35dab2](https://github.com/danielsogl/awesome-cordova-plugins/commit/b35dab26346ddfb09d7f9e7c0b89c8280b44d89b)), closes [#1677](https://github.com/danielsogl/awesome-cordova-plugins/issues/1677)
* **qr-scanner:** add QRScanner plugin ([bde2b38](https://github.com/danielsogl/awesome-cordova-plugins/commit/bde2b386687656a19d112680e085dc1c5428d504)), closes [#715](https://github.com/danielsogl/awesome-cordova-plugins/issues/715)


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



# [3.14.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v3.13.1...v3.14.0) (2017-07-07)


### Features

* **in-app-purchase2:** add a second InAppPurchase plugin ([#1775](https://github.com/danielsogl/awesome-cordova-plugins/issues/1775)) ([398d0ee](https://github.com/danielsogl/awesome-cordova-plugins/commit/398d0eeac534c90787f9e8b56f3c29a0a83dab7f)), closes [#1705](https://github.com/danielsogl/awesome-cordova-plugins/issues/1705) [#1709](https://github.com/danielsogl/awesome-cordova-plugins/issues/1709) [#1713](https://github.com/danielsogl/awesome-cordova-plugins/issues/1713)



## [3.13.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v3.13.0...v3.13.1) (2017-07-05)


### Bug Fixes

* **document-viewer:** make config properties optional ([#1767](https://github.com/danielsogl/awesome-cordova-plugins/issues/1767)) ([5b914d7](https://github.com/danielsogl/awesome-cordova-plugins/commit/5b914d7f15d3e47fab13366e965531c646c89321))


### Features

* **app-rate:** add function handleNegativeFeedback() ([#1748](https://github.com/danielsogl/awesome-cordova-plugins/issues/1748)) ([e64cc0c](https://github.com/danielsogl/awesome-cordova-plugins/commit/e64cc0c61cd8afa160389398b0a59a149942366b))
* **app-rate:** add function navigateToAppStore() ([#1719](https://github.com/danielsogl/awesome-cordova-plugins/issues/1719)) ([0c79ac1](https://github.com/danielsogl/awesome-cordova-plugins/commit/0c79ac16eca21707381cb11d27c42c9745ff19bd))



# [3.13.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v3.12.2...v3.13.0) (2017-07-03)


### Features

* **pin-check:** add pin check plugin ([#1734](https://github.com/danielsogl/awesome-cordova-plugins/issues/1734)) ([b8ac7bf](https://github.com/danielsogl/awesome-cordova-plugins/commit/b8ac7bfb6adc999257f7b39f816a07f6507592b3))
* **qqsdk:** add qqsdk plugin ([#1689](https://github.com/danielsogl/awesome-cordova-plugins/issues/1689)) ([b56297e](https://github.com/danielsogl/awesome-cordova-plugins/commit/b56297e115108955507d7131c0331d57942cf3f8))



## [3.12.2](https://github.com/danielsogl/awesome-cordova-plugins/compare/v3.12.1...v3.12.2) (2017-07-03)


### Bug Fixes

* **android-fingerprint-auth:** fix return type of isAvailable ([#1697](https://github.com/danielsogl/awesome-cordova-plugins/issues/1697)) ([af91977](https://github.com/danielsogl/awesome-cordova-plugins/commit/af91977f82d420a5685a9612e1b60b7a65c83bfc))
* **ibeacon:** optional parameter ([#1702](https://github.com/danielsogl/awesome-cordova-plugins/issues/1702)) ([64ce132](https://github.com/danielsogl/awesome-cordova-plugins/commit/64ce132262fae0c84e318098e73bc7b26e38fca6)), closes [#1701](https://github.com/danielsogl/awesome-cordova-plugins/issues/1701)
* **local-notifications:** add missing priority option ([e40247c](https://github.com/danielsogl/awesome-cordova-plugins/commit/e40247c211f12362f575bf1d64c140ca0abb0601)), closes [#1683](https://github.com/danielsogl/awesome-cordova-plugins/issues/1683)
* **mobile-accessibility:** fix plugin reference ([03ac735](https://github.com/danielsogl/awesome-cordova-plugins/commit/03ac73547677bee466934c284111fe3d846a0bfe)), closes [#1666](https://github.com/danielsogl/awesome-cordova-plugins/issues/1666)
* **onesignal:** fix getPermissionSubscriptionState return type ([#1742](https://github.com/danielsogl/awesome-cordova-plugins/issues/1742)) ([3c125bb](https://github.com/danielsogl/awesome-cordova-plugins/commit/3c125bbc84b9e452e12e79b5196eca34b504c8ed))


### Features

* **music-controls:** add event for ios control center seek and function to update ios elapsed time ([#1727](https://github.com/danielsogl/awesome-cordova-plugins/issues/1727)) ([593607e](https://github.com/danielsogl/awesome-cordova-plugins/commit/593607e914ead1f3e558da6ac12938382edd79ff))
* **one-signal:** add getPermissionSubscriptionState ([#1678](https://github.com/danielsogl/awesome-cordova-plugins/issues/1678)) ([e9283a9](https://github.com/danielsogl/awesome-cordova-plugins/commit/e9283a994db483dd0959b85284f08b565eccfe34))
* **sqlite:** support pre-filled databases ([#1687](https://github.com/danielsogl/awesome-cordova-plugins/issues/1687)) ([b52371b](https://github.com/danielsogl/awesome-cordova-plugins/commit/b52371b17437525075366927992b8cdacd6c828e))



## [3.12.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v3.12.0...v3.12.1) (2017-06-03)


### Code Refactoring

* **phonegap-local-notification:** fix class name to match plugin name ([c6a76c2](https://github.com/danielsogl/awesome-cordova-plugins/commit/c6a76c26e0cf226c2793dc3d1eeb1c0ab9fff052))


### BREAKING CHANGES

* **phonegap-local-notification:** PhonegapLocalNotifications class has been renamed to PhonegapLocalNotification



# [3.12.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v3.11.0...v3.12.0) (2017-06-03)


### Features

* **base64:** add Base64 plugin ([#1645](https://github.com/danielsogl/awesome-cordova-plugins/issues/1645)) ([793e2e3](https://github.com/danielsogl/awesome-cordova-plugins/commit/793e2e34d34ddc8d5bfe8abb10eac50cb500a34d))
* **firebase-analytics:** add firebase analytics plugin ([#1647](https://github.com/danielsogl/awesome-cordova-plugins/issues/1647)) ([3eb69b4](https://github.com/danielsogl/awesome-cordova-plugins/commit/3eb69b4056ac24ea6114cbe6980348290178b7f2))
* **firebase-dynamic-links:** add firebase dynamic links plugin ([#1649](https://github.com/danielsogl/awesome-cordova-plugins/issues/1649)) ([0467a0d](https://github.com/danielsogl/awesome-cordova-plugins/commit/0467a0dd329cefc5ceaf3159bb367d6fb4214361))



# [3.11.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v3.10.2...v3.11.0) (2017-06-01)


### Bug Fixes

* **document-viewer:** fix param type ([#1634](https://github.com/danielsogl/awesome-cordova-plugins/issues/1634)) ([985193b](https://github.com/danielsogl/awesome-cordova-plugins/commit/985193bebd1c8c6e446f76a8260d0eae3e8c2202))
* **flurry-analytics:** fix original class reference ([#1597](https://github.com/danielsogl/awesome-cordova-plugins/issues/1597)) ([aaeabb9](https://github.com/danielsogl/awesome-cordova-plugins/commit/aaeabb9f964f387eca3b81588d2f2b344311ab95))
* **secure-storage:** add missing function ([#1626](https://github.com/danielsogl/awesome-cordova-plugins/issues/1626)) ([8b9995a](https://github.com/danielsogl/awesome-cordova-plugins/commit/8b9995a5aff10fd8ee0a5fe12c7a6bb77c0c1189)), closes [#1625](https://github.com/danielsogl/awesome-cordova-plugins/issues/1625)


### Features

* **plugin:** add FTP plugin ([#1627](https://github.com/danielsogl/awesome-cordova-plugins/issues/1627)) ([2d3add6](https://github.com/danielsogl/awesome-cordova-plugins/commit/2d3add6507cf8c748a2cbb25a6416f5a79d8606f))



## [3.10.2](https://github.com/danielsogl/awesome-cordova-plugins/compare/v3.10.1...v3.10.2) (2017-05-20)


### Features

* **core:** add getSupportedPlatforms method ([c8f53d2](https://github.com/danielsogl/awesome-cordova-plugins/commit/c8f53d2dc3ddd0f4cd7e6fe6773040218321a59e))



# [3.10.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v3.9.2...v3.10.0) (2017-05-19)


### Bug Fixes

* **admob-free:** use otherPromise to fix browser development ([2bd244a](https://github.com/danielsogl/awesome-cordova-plugins/commit/2bd244a5364fbb362696e5ef0acb0fca6ec93858))


### Features

* **native-keyboard:** add native keyboard plugin ([#1588](https://github.com/danielsogl/awesome-cordova-plugins/issues/1588)) ([6031a24](https://github.com/danielsogl/awesome-cordova-plugins/commit/6031a240a25a3db18a30cdac4150ef7410cddd79))
* **user-agent:** add User-Agent plugin ([#1582](https://github.com/danielsogl/awesome-cordova-plugins/issues/1582)) ([6f6392e](https://github.com/danielsogl/awesome-cordova-plugins/commit/6f6392ea5c81139be183a82e1c4e592f359cd6f1))



## [3.9.2](https://github.com/danielsogl/awesome-cordova-plugins/compare/v3.9.1...v3.9.2) (2017-05-17)


### Bug Fixes

* **action-sheet:** destructiveButtonLast is optional ([6416c25](https://github.com/danielsogl/awesome-cordova-plugins/commit/6416c2544c3907b7297c2a430ab119fb869504d3))
* **core:** decorators should define enumerable properties ([22102a7](https://github.com/danielsogl/awesome-cordova-plugins/commit/22102a7e4aa38ae39c48f0ad8813ae90cfb36443))



## [3.9.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v3.9.0...v3.9.1) (2017-05-17)


### Bug Fixes

* **core:** fix issues when clearing observables ([93a119b](https://github.com/danielsogl/awesome-cordova-plugins/commit/93a119bf4b635f5d0f137ef34bcd66acf7c3b13c))



# [3.9.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v3.8.1...v3.9.0) (2017-05-17)


### Bug Fixes

* **android-permissions:** fix PERMISSION property and add requestPermission ([ebf4028](https://github.com/danielsogl/awesome-cordova-plugins/commit/ebf402864bda19fc1c937a71c3bcdd4d6c8bdff2)), closes [#1574](https://github.com/danielsogl/awesome-cordova-plugins/issues/1574)
* **app-preferences:** suite is sync ([3cb8383](https://github.com/danielsogl/awesome-cordova-plugins/commit/3cb83831c153b17ffe0269f875254c50cc36b43c)), closes [#1321](https://github.com/danielsogl/awesome-cordova-plugins/issues/1321)
* **background-mode:** configure doesn't return anything ([92ef4f0](https://github.com/danielsogl/awesome-cordova-plugins/commit/92ef4f0c33253c68a4571ac0f36b7dea92c14de0)), closes [#1457](https://github.com/danielsogl/awesome-cordova-plugins/issues/1457)
* **in-app-browser:** fix on method ([975a65d](https://github.com/danielsogl/awesome-cordova-plugins/commit/975a65d61986e23c1f09ff8f9eeccf2048027acf)), closes [#1446](https://github.com/danielsogl/awesome-cordova-plugins/issues/1446)
* **media:** create should return null if plugin is not available ([d68618f](https://github.com/danielsogl/awesome-cordova-plugins/commit/d68618f878494110ede46f94128b4986193823f9))
* **media:** create will always return MediaObject even if plugin doesnt exist ([ee4b61e](https://github.com/danielsogl/awesome-cordova-plugins/commit/ee4b61e4050d9e268e03ec2c31cd7f66a9256881))
* **printer:** fix implementation and add pick method ([55071c0](https://github.com/danielsogl/awesome-cordova-plugins/commit/55071c0d654cdfaef3689779bec6822662a054ca))
* **push:** fix types ([ca76593](https://github.com/danielsogl/awesome-cordova-plugins/commit/ca7659378fc2c73d77a21eef87cc920f29b07e37)), closes [#1331](https://github.com/danielsogl/awesome-cordova-plugins/issues/1331)
* **secure-storage:** reject the promise if the plugin doesn't exist ([#1562](https://github.com/danielsogl/awesome-cordova-plugins/issues/1562)) ([d5919d1](https://github.com/danielsogl/awesome-cordova-plugins/commit/d5919d17366f75febaa9070ad2c4f28569bbbd6a))


### Features

* **linkedin:** add getActiveSession method ([4c8deb2](https://github.com/danielsogl/awesome-cordova-plugins/commit/4c8deb2bed1388db7eaf0beca6294e5762b3af70)), closes [#1570](https://github.com/danielsogl/awesome-cordova-plugins/issues/1570)
* **printer:** add check method ([991f2f0](https://github.com/danielsogl/awesome-cordova-plugins/commit/991f2f04d471651b14db21980188b199b28657c1))



## [3.8.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v3.8.0...v3.8.1) (2017-05-16)


### Bug Fixes

* **document-viewer:** fix params and docs for canViewDocument ([#1568](https://github.com/danielsogl/awesome-cordova-plugins/issues/1568)) ([b35417a](https://github.com/danielsogl/awesome-cordova-plugins/commit/b35417a017f2eca422c03a235c5cc03724bbd9a1))
* **file:** add toInternalURL ([#1561](https://github.com/danielsogl/awesome-cordova-plugins/issues/1561)) ([7c79712](https://github.com/danielsogl/awesome-cordova-plugins/commit/7c797123f56dff4f583180af50419fcf1c2b7460)), closes [#1560](https://github.com/danielsogl/awesome-cordova-plugins/issues/1560)
* **file:** fix repo link ([#1566](https://github.com/danielsogl/awesome-cordova-plugins/issues/1566)) ([adf9c5a](https://github.com/danielsogl/awesome-cordova-plugins/commit/adf9c5a323126450d36a0c941baa65d83aafb4e8))
* **file:** various fixes ([d0dec7a](https://github.com/danielsogl/awesome-cordova-plugins/commit/d0dec7a17d91b20afeb27e1a245b1ab52835feaf)), closes [#1564](https://github.com/danielsogl/awesome-cordova-plugins/issues/1564)
* **sqlite:** fix implementation and improve typings ([fec19b7](https://github.com/danielsogl/awesome-cordova-plugins/commit/fec19b734cecca989f95ad5054880f7c0765a0e3))


### Features

* **mix-panel:** add timeEvent ([#1536](https://github.com/danielsogl/awesome-cordova-plugins/issues/1536)) ([965a90c](https://github.com/danielsogl/awesome-cordova-plugins/commit/965a90c52caa680469e3ca29307057b175a2efbd))



# [3.8.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v3.7.0...v3.8.0) (2017-05-14)


### Bug Fixes

* **app-minimize:** fix pluginRef ([10d61c2](https://github.com/danielsogl/awesome-cordova-plugins/commit/10d61c21c29252495b9a72a118795af400771a0b))
* **diagnostic:** fix Cordova decorator in camera API ([#1527](https://github.com/danielsogl/awesome-cordova-plugins/issues/1527)) ([45108c4](https://github.com/danielsogl/awesome-cordova-plugins/commit/45108c4c18a51ad290b03b6bb7e06c46d26c7305))
* **fcm:** fix method name ([#1531](https://github.com/danielsogl/awesome-cordova-plugins/issues/1531)) ([ad514bb](https://github.com/danielsogl/awesome-cordova-plugins/commit/ad514bbf6334531badb2a6a5c37953e934efa4c5))
* **file:** fix file reader ([#1537](https://github.com/danielsogl/awesome-cordova-plugins/issues/1537)) ([efae1be](https://github.com/danielsogl/awesome-cordova-plugins/commit/efae1be1166542e73753114f043b437ba813dad5)), closes [#1530](https://github.com/danielsogl/awesome-cordova-plugins/issues/1530)
* **file:** various fixes ([#1553](https://github.com/danielsogl/awesome-cordova-plugins/issues/1553)) ([f98f90a](https://github.com/danielsogl/awesome-cordova-plugins/commit/f98f90a9a3e58f1d10d7b4d6286122205be334fa))


### Features

* **video-capture-plus:** add Video Capture Plus plugin ([#1538](https://github.com/danielsogl/awesome-cordova-plugins/issues/1538)) ([385da01](https://github.com/danielsogl/awesome-cordova-plugins/commit/385da017a021db620cc16d38232c035d39bbc46f)), closes [#709](https://github.com/danielsogl/awesome-cordova-plugins/issues/709)



# [3.7.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v3.6.0...v3.7.0) (2017-05-09)


### Bug Fixes

* **app-preferences:** value can be any type ([#1498](https://github.com/danielsogl/awesome-cordova-plugins/issues/1498)) ([c7111a3](https://github.com/danielsogl/awesome-cordova-plugins/commit/c7111a3117c323feba0a4e96a42c77ebb8f5db3e)), closes [#1334](https://github.com/danielsogl/awesome-cordova-plugins/issues/1334)
* **background-mode:** add missing method ([#1486](https://github.com/danielsogl/awesome-cordova-plugins/issues/1486)) ([e6a647b](https://github.com/danielsogl/awesome-cordova-plugins/commit/e6a647b08b4a8f9a7a409d33d54a4b8395611f9c)), closes [#1393](https://github.com/danielsogl/awesome-cordova-plugins/issues/1393)
* **build:** fix build errors ([#1472](https://github.com/danielsogl/awesome-cordova-plugins/issues/1472)) ([8a445e9](https://github.com/danielsogl/awesome-cordova-plugins/commit/8a445e9a313007624c669fde0863389b0e7f794e))
* **document-viewer:** fix params ([1379f63](https://github.com/danielsogl/awesome-cordova-plugins/commit/1379f6389ac87d908a8e125a9bf19837395f36a5))
* **flurry-analytics:** fix plugin wrapper ([14959c1](https://github.com/danielsogl/awesome-cordova-plugins/commit/14959c1162142595583d3ab05d492408ebeb8805))
* **flurry-analytics:** fix pluginRef ([#1485](https://github.com/danielsogl/awesome-cordova-plugins/issues/1485)) ([ce72be7](https://github.com/danielsogl/awesome-cordova-plugins/commit/ce72be76bc1ba5d7699eaa39da9860585df91c94)), closes [#1399](https://github.com/danielsogl/awesome-cordova-plugins/issues/1399)
* **globalization:** getDatePattern return types ([#1451](https://github.com/danielsogl/awesome-cordova-plugins/issues/1451)) ([6e2fdf9](https://github.com/danielsogl/awesome-cordova-plugins/commit/6e2fdf98a2ebe14f2ba8d319530bb312a7872d7c))
* **google-maps:** add args to panBy ([#1507](https://github.com/danielsogl/awesome-cordova-plugins/issues/1507)) ([ec85792](https://github.com/danielsogl/awesome-cordova-plugins/commit/ec85792a1023076886c47e17aadb7d2e8790599f))
* **google-maps:** fix fromPointToLatLng params ([#1514](https://github.com/danielsogl/awesome-cordova-plugins/issues/1514)) ([9583802](https://github.com/danielsogl/awesome-cordova-plugins/commit/958380275c8a094fe38c3ea63da7d842aa1ec79f))
* **native-storage:** add missing keys method ([#1495](https://github.com/danielsogl/awesome-cordova-plugins/issues/1495)) ([8311aaf](https://github.com/danielsogl/awesome-cordova-plugins/commit/8311aaf8939c7a961863c6759c2e3306fddba711)), closes [#1415](https://github.com/danielsogl/awesome-cordova-plugins/issues/1415)
* **web-intent:** updated source ([#1519](https://github.com/danielsogl/awesome-cordova-plugins/issues/1519)) ([252c3e4](https://github.com/danielsogl/awesome-cordova-plugins/commit/252c3e4a2146f2d994000212ddf1ec54f36e8b01)), closes [#1517](https://github.com/danielsogl/awesome-cordova-plugins/issues/1517)


### Features

* **android-fingerprint-auth:** add ERRORS constant ([#1470](https://github.com/danielsogl/awesome-cordova-plugins/issues/1470)) ([ed6044d](https://github.com/danielsogl/awesome-cordova-plugins/commit/ed6044d4e854de0f52f87147084488dff5d464c9))
* **android-premissions:** add Android Permissions plugin ([#1508](https://github.com/danielsogl/awesome-cordova-plugins/issues/1508)) ([5ee79b4](https://github.com/danielsogl/awesome-cordova-plugins/commit/5ee79b4672573e73e0df90174326259ff06c0395)), closes [#929](https://github.com/danielsogl/awesome-cordova-plugins/issues/929)
* **app-minimize:** add AppMinimize plugin ([#1501](https://github.com/danielsogl/awesome-cordova-plugins/issues/1501)) ([d25b2f1](https://github.com/danielsogl/awesome-cordova-plugins/commit/d25b2f16a99e4a2f1c41b26051f240e5ae48063b))
* **camera-preview:** add new focus methods & getFlashMode() ([#1442](https://github.com/danielsogl/awesome-cordova-plugins/issues/1442)) ([748c6bd](https://github.com/danielsogl/awesome-cordova-plugins/commit/748c6bd9beaf962cf794b0fab505c0519312a289))
* **camera-preview:** add tapToFocus method ([#1494](https://github.com/danielsogl/awesome-cordova-plugins/issues/1494)) ([8330c92](https://github.com/danielsogl/awesome-cordova-plugins/commit/8330c92921619b8fb38100e85918799645eda7a2))
* **diagnostic:** update to support latest signatures ([#1458](https://github.com/danielsogl/awesome-cordova-plugins/issues/1458)) ([a4151ab](https://github.com/danielsogl/awesome-cordova-plugins/commit/a4151abebf8922304da196bd62e02bc7fb8035d2)), closes [/github.com/driftyco/ionic-native/pull/1458#issuecomment-299030833](https://github.com//github.com/driftyco/ionic-native/pull/1458/issues/issuecomment-299030833)
* **facebook:** add EVENTS constant ([#1510](https://github.com/danielsogl/awesome-cordova-plugins/issues/1510)) ([aa9826f](https://github.com/danielsogl/awesome-cordova-plugins/commit/aa9826f6577ee89ae45425a7f0082933a676da15))
* **fcm:** support Firebase Cloud Messaging plugin ([#1449](https://github.com/danielsogl/awesome-cordova-plugins/issues/1449)) ([6cc6393](https://github.com/danielsogl/awesome-cordova-plugins/commit/6cc6393712dfa4fdeb59d74d61da9f2024fbede0))
* **firebase:** add support for firebase ErrorLog ([#1440](https://github.com/danielsogl/awesome-cordova-plugins/issues/1440)) ([11dbe42](https://github.com/danielsogl/awesome-cordova-plugins/commit/11dbe42a0d116e49ae3f29de046322163bd80ef8))
* **health-kit:** add HealthKit plugin ([#1499](https://github.com/danielsogl/awesome-cordova-plugins/issues/1499)) ([14f38a0](https://github.com/danielsogl/awesome-cordova-plugins/commit/14f38a0e2856628f7a2e0be51e78b59637bdb334))
* **intercom:** add Intercom plugin ([#1504](https://github.com/danielsogl/awesome-cordova-plugins/issues/1504)) ([ce2cc1b](https://github.com/danielsogl/awesome-cordova-plugins/commit/ce2cc1b815b309ab4ca77b5af86726ac32b86807))
* **mobile-accessibility:** add Mobile Accessibility plugin ([#1505](https://github.com/danielsogl/awesome-cordova-plugins/issues/1505)) ([4e9b2d9](https://github.com/danielsogl/awesome-cordova-plugins/commit/4e9b2d917b22e7ac715cd78b0d3c591a324bb12c)), closes [#1304](https://github.com/danielsogl/awesome-cordova-plugins/issues/1304)
* **native-page-transitions:** add pendingTransition methods ([#1344](https://github.com/danielsogl/awesome-cordova-plugins/issues/1344)) ([f699c6d](https://github.com/danielsogl/awesome-cordova-plugins/commit/f699c6d4b75b06945a574574fd3bf3eecced7b7d))
* **native-ringtones:** add Native Ringtones plugin ([#1488](https://github.com/danielsogl/awesome-cordova-plugins/issues/1488)) ([21c9cd2](https://github.com/danielsogl/awesome-cordova-plugins/commit/21c9cd2e57d1369fc13570cf742d994f732cbf0f))
* **phonegap-local-notifications:** add Phonegap local notifications plugin ([#1474](https://github.com/danielsogl/awesome-cordova-plugins/issues/1474)) ([3d747d3](https://github.com/danielsogl/awesome-cordova-plugins/commit/3d747d38b291ccfe4232616126bfafe8f7b2edb4)), closes [#1](https://github.com/danielsogl/awesome-cordova-plugins/issues/1) [#3](https://github.com/danielsogl/awesome-cordova-plugins/issues/3) [#4](https://github.com/danielsogl/awesome-cordova-plugins/issues/4)
* **plugin:** add Document Viewer plugin ([#1520](https://github.com/danielsogl/awesome-cordova-plugins/issues/1520)) ([6855fe8](https://github.com/danielsogl/awesome-cordova-plugins/commit/6855fe8f7d2c9c76d2bcbba02a7d3169f92c0cb5))
* **plugin:** add File encryption plugin ([#1509](https://github.com/danielsogl/awesome-cordova-plugins/issues/1509)) ([46b4e25](https://github.com/danielsogl/awesome-cordova-plugins/commit/46b4e25f7bf2cf4d7a43359697a80365e4d44604)), closes [#618](https://github.com/danielsogl/awesome-cordova-plugins/issues/618)
* **safari-view-controller:** add missing options ([#1490](https://github.com/danielsogl/awesome-cordova-plugins/issues/1490)) ([a5b2e98](https://github.com/danielsogl/awesome-cordova-plugins/commit/a5b2e981b3d5a0c20f8fcda2eea72ca1f6faf8c9)), closes [#1489](https://github.com/danielsogl/awesome-cordova-plugins/issues/1489)
* **social-sharing:** add setIPadPopupCoordinates method ([#1497](https://github.com/danielsogl/awesome-cordova-plugins/issues/1497)) ([65a8095](https://github.com/danielsogl/awesome-cordova-plugins/commit/65a8095e5f14e9438c2f6770ca01134888b1838a)), closes [#1288](https://github.com/danielsogl/awesome-cordova-plugins/issues/1288)
* **touch-id:** add didFingerprintDatabaseChange ([#1475](https://github.com/danielsogl/awesome-cordova-plugins/issues/1475)) ([d9cc959](https://github.com/danielsogl/awesome-cordova-plugins/commit/d9cc959939d979ec6e5cd453c8a6ba38d417e844)), closes [#1466](https://github.com/danielsogl/awesome-cordova-plugins/issues/1466)
* **wheel-selector:** add Native wheel Selector plugin ([#1522](https://github.com/danielsogl/awesome-cordova-plugins/issues/1522)) ([8fe4eec](https://github.com/danielsogl/awesome-cordova-plugins/commit/8fe4eecbb104111fad3c3c86a0197231dcc9b7b1))



# [3.6.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v3.5.0...v3.6.0) (2017-04-27)


### Bug Fixes

* **media:** function 'create' never returns media object ([#1419](https://github.com/danielsogl/awesome-cordova-plugins/issues/1419)) ([b58149f](https://github.com/danielsogl/awesome-cordova-plugins/commit/b58149f2f220d0dd65859473685f0e37906931bb))


### Features

* add IonicNativePlugin base class ([#1425](https://github.com/danielsogl/awesome-cordova-plugins/issues/1425)) ([17366a2](https://github.com/danielsogl/awesome-cordova-plugins/commit/17366a29daa0672f2f04e192ccb5cedb8bb01cd7))
* **keychain:** add Keychain plugin ([#1420](https://github.com/danielsogl/awesome-cordova-plugins/issues/1420)) ([16dc71a](https://github.com/danielsogl/awesome-cordova-plugins/commit/16dc71ab71413a4d9576ae2c98e91d78c331caf9))



# [3.5.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v3.4.4...v3.5.0) (2017-04-18)


### Bug Fixes

* **core:** fix bug when checking if plugin exists ([#1348](https://github.com/danielsogl/awesome-cordova-plugins/issues/1348)) ([4bd6aab](https://github.com/danielsogl/awesome-cordova-plugins/commit/4bd6aaba2b73f772826d082880256564b8093f29))
* **media:** fix issue with create method ([6bba72d](https://github.com/danielsogl/awesome-cordova-plugins/commit/6bba72d32a7308f69be730a51df1050a28556f01)), closes [#1333](https://github.com/danielsogl/awesome-cordova-plugins/issues/1333)
* **push:** hasPermission is part of Push object ([145577f](https://github.com/danielsogl/awesome-cordova-plugins/commit/145577f9bc97ba62642e6da3fb6e1135b119f479)), closes [#1297](https://github.com/danielsogl/awesome-cordova-plugins/issues/1297)
* **rollbar:** fix pluginRef ([f396940](https://github.com/danielsogl/awesome-cordova-plugins/commit/f3969400442dc5d0e28e14a715f3476ac139c42b))


### Features

* **action-sheet:** update to newest version ([9c92580](https://github.com/danielsogl/awesome-cordova-plugins/commit/9c925806ed5ffeed5eb6cb4deac7100328a834ef))
* **background-fetch:** add status method ([6168eae](https://github.com/danielsogl/awesome-cordova-plugins/commit/6168eaee47c0d66d3b06702ee885caeee8ef10e4))



## [3.4.4](https://github.com/danielsogl/awesome-cordova-plugins/compare/v3.4.3...v3.4.4) (2017-03-30)



## [3.4.3](https://github.com/danielsogl/awesome-cordova-plugins/compare/v3.4.2...v3.4.3) (2017-03-29)


### Bug Fixes

* **admob:** add missing license property ([2b94ffd](https://github.com/danielsogl/awesome-cordova-plugins/commit/2b94ffdc44d53adeca4d8fa3457744da94dd3932)), closes [#1291](https://github.com/danielsogl/awesome-cordova-plugins/issues/1291)
* **app-preferences:** fix bug with fetch method ([65cf94b](https://github.com/danielsogl/awesome-cordova-plugins/commit/65cf94b67b59632571a91065c09ee34e81f45ec0)), closes [#1299](https://github.com/danielsogl/awesome-cordova-plugins/issues/1299)
* **push:** add missing plugin decorator ([208748a](https://github.com/danielsogl/awesome-cordova-plugins/commit/208748a6605c5fc73565dec0ece359646f878c9e)), closes [#1297](https://github.com/danielsogl/awesome-cordova-plugins/issues/1297)
* **secure-storage:** return unfunctional SecureStorageObject if plugin doesn't exist ([b91757e](https://github.com/danielsogl/awesome-cordova-plugins/commit/b91757e7e96eb8b3a9026d9f46d864aee674dd98))


### Features

* **secure-storage:** add keys() and clear() methods ([#1281](https://github.com/danielsogl/awesome-cordova-plugins/issues/1281)) ([8b31d72](https://github.com/danielsogl/awesome-cordova-plugins/commit/8b31d721397660a5e45f79f4b0c1ccf416d6a638))



## [3.4.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v3.4.0...v3.4.1) (2017-03-28)


### Bug Fixes

* **admob:** fix event listeners ([b53af8e](https://github.com/danielsogl/awesome-cordova-plugins/commit/b53af8e3c9d262357fb520aee6417af13555f7ae)), closes [#1165](https://github.com/danielsogl/awesome-cordova-plugins/issues/1165)
* **network:** fix onchange method ([006f7dc](https://github.com/danielsogl/awesome-cordova-plugins/commit/006f7dc2ade093ccae083fe09c5efb9240f1bad9)), closes [#1173](https://github.com/danielsogl/awesome-cordova-plugins/issues/1173)
* **network:** remove ontypechange method ([19bc841](https://github.com/danielsogl/awesome-cordova-plugins/commit/19bc8419e0da0e20d2a07bbc646dd5b3dde460a2))



# [3.4.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v3.3.1...v3.4.0) (2017-03-28)


### Bug Fixes

* **sqlite:** fix SQLiteDatabaseConfig interface ([ea88c9e](https://github.com/danielsogl/awesome-cordova-plugins/commit/ea88c9e4a84927f5a39f90abc36fbd2e1bd9075a)), closes [#1280](https://github.com/danielsogl/awesome-cordova-plugins/issues/1280)


### Features

* **admob-free:** add AdMobFree plugin ([#1272](https://github.com/danielsogl/awesome-cordova-plugins/issues/1272)) ([0ef4a73](https://github.com/danielsogl/awesome-cordova-plugins/commit/0ef4a7394e2a6d1ea49f52897890f281e4bdf124)), closes [#1170](https://github.com/danielsogl/awesome-cordova-plugins/issues/1170)
* **sqlite-porter:** add SQLite porter plugin ([#1273](https://github.com/danielsogl/awesome-cordova-plugins/issues/1273)) ([f911366](https://github.com/danielsogl/awesome-cordova-plugins/commit/f911366c54220e5de90b241e0ff923e1a27e5dd5)), closes [#485](https://github.com/danielsogl/awesome-cordova-plugins/issues/485)
* **taptic-engine:** add taptic engine plugin support ([#1271](https://github.com/danielsogl/awesome-cordova-plugins/issues/1271)) ([ffa37e2](https://github.com/danielsogl/awesome-cordova-plugins/commit/ffa37e2932e459bd0eb960df35bb1b8662e89c1d)), closes [#571](https://github.com/danielsogl/awesome-cordova-plugins/issues/571)
* **zeroconf:** add cordova-plugin-zeroconf support ([#1260](https://github.com/danielsogl/awesome-cordova-plugins/issues/1260)) ([68d9946](https://github.com/danielsogl/awesome-cordova-plugins/commit/68d99461c65a6c40c4b2c967441d1b1f9990ea5e))



## [3.3.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v3.3.0...v3.3.1) (2017-03-28)


### Bug Fixes

* **background-mode:** add missing config options ([9c30a1d](https://github.com/danielsogl/awesome-cordova-plugins/commit/9c30a1d0dd5a8c77dd23e35557f32c61e98d0a06)), closes [#1277](https://github.com/danielsogl/awesome-cordova-plugins/issues/1277)
* **contacts:** fix major bug ([6e20137](https://github.com/danielsogl/awesome-cordova-plugins/commit/6e2013734094afabb956c1ad424fbe4f05cc48eb))
* **contacts:** handle cordova_not_found errors ([961727e](https://github.com/danielsogl/awesome-cordova-plugins/commit/961727ee6158b25cae88458cfecd7807175efdfe))
* **core:** handle unexpected errors in wrapOtherPromise ([9074362](https://github.com/danielsogl/awesome-cordova-plugins/commit/9074362caea1a13923d818d6d9714bb6a254c435)), closes [#1185](https://github.com/danielsogl/awesome-cordova-plugins/issues/1185)
* **core:** return errors from CordovaCheck decorators ([fd0a2e9](https://github.com/danielsogl/awesome-cordova-plugins/commit/fd0a2e9acd698d7a066109a7b9af8aecf2765cec)), closes [#1268](https://github.com/danielsogl/awesome-cordova-plugins/issues/1268)
* **sqlite:** fixes echoTest and deleteDatabase ([01aece1](https://github.com/danielsogl/awesome-cordova-plugins/commit/01aece1fbb52eb34fe71129b7ff360c78f473c28)), closes [#1275](https://github.com/danielsogl/awesome-cordova-plugins/issues/1275)


### Features

* **sqlite:** add SQLiteDatabaseConfig interface ([544e7ef](https://github.com/danielsogl/awesome-cordova-plugins/commit/544e7ef4fc2cb68f517814305b3c171a1ebfea6a))



# [3.3.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v3.2.3...v3.3.0) (2017-03-27)


### Features

* **android-full-screen:** add cordova-plugin-fullscreen support ([#1255](https://github.com/danielsogl/awesome-cordova-plugins/issues/1255)) ([b08e3a8](https://github.com/danielsogl/awesome-cordova-plugins/commit/b08e3a8ee19ab3977ffe63dcefdc61c9eae126af))
* **intel-security:** add com-intel-security-cordova-plugin support ([#1256](https://github.com/danielsogl/awesome-cordova-plugins/issues/1256)) ([aedc9d6](https://github.com/danielsogl/awesome-cordova-plugins/commit/aedc9d65c8f8361e5502fb89ba7b46fff30bfeef))



## [3.2.3](https://github.com/danielsogl/awesome-cordova-plugins/compare/v3.2.2...v3.2.3) (2017-03-24)


### Bug Fixes

* **contacts:** fix crash if plugin is unavailable ([a9a511d](https://github.com/danielsogl/awesome-cordova-plugins/commit/a9a511d0f18828ad28b9810e24bdd1349e38d9ec)), closes [#1250](https://github.com/danielsogl/awesome-cordova-plugins/issues/1250)
* **core:** make properties enumerable ([a151295](https://github.com/danielsogl/awesome-cordova-plugins/commit/a151295654ae3c07610364c78f99482eed86bb0a))



## [3.2.2](https://github.com/danielsogl/awesome-cordova-plugins/compare/v3.2.1...v3.2.2) (2017-03-23)



## [3.2.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v3.2.0...v3.2.1) (2017-03-23)


### Bug Fixes

* **secure-storage:** update the pluginRef ([#1228](https://github.com/danielsogl/awesome-cordova-plugins/issues/1228)) ([baff7b3](https://github.com/danielsogl/awesome-cordova-plugins/commit/baff7b3d7cc733bb35a812ccdf8de0b56303010f))



# [3.2.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v3.1.1...v3.2.0) (2017-03-22)


### Bug Fixes

* **media-plugin:** MediaPlugin.create promise never fires ([#1220](https://github.com/danielsogl/awesome-cordova-plugins/issues/1220)) ([82d2ae8](https://github.com/danielsogl/awesome-cordova-plugins/commit/82d2ae8c4d1009db3e15af677ae6ebaf95d55767))


### Features

* **jins-meme:** add support for jins meme smart glasses ([#1212](https://github.com/danielsogl/awesome-cordova-plugins/issues/1212)) ([9c88cfb](https://github.com/danielsogl/awesome-cordova-plugins/commit/9c88cfb5775ac12ba7785e4c6a757c8e1e9fe1aa)), closes [#3](https://github.com/danielsogl/awesome-cordova-plugins/issues/3) [/github.com/driftyco/ionic-native/pull/1212#pullrequestreview-28298382](https://github.com//github.com/driftyco/ionic-native/pull/1212/issues/pullrequestreview-28298382)



## [3.1.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v3.1.0...v3.1.1) (2017-03-21)


### Bug Fixes

* **media-plugin:** export MediaPlugin class ([cb0a366](https://github.com/danielsogl/awesome-cordova-plugins/commit/cb0a3664fde90377f05f44b26aa3daecf53b46c0)), closes [#1207](https://github.com/danielsogl/awesome-cordova-plugins/issues/1207)



# [3.1.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.9.0...v3.1.0) (2017-03-20)


### Bug Fixes

* **health:** fix queryAggregated return type ([8cd648d](https://github.com/danielsogl/awesome-cordova-plugins/commit/8cd648db5cddd7bdbe2bd78839b19c620cc8c04c)), closes [#1200](https://github.com/danielsogl/awesome-cordova-plugins/issues/1200)
* **music-controls:** fix return types for methods ([f3407e5](https://github.com/danielsogl/awesome-cordova-plugins/commit/f3407e5582a0b501310895edaeb569a6660f0e12))


### chore

* merge v3-injectable into master ([#1203](https://github.com/danielsogl/awesome-cordova-plugins/issues/1203)) ([2f2d55f](https://github.com/danielsogl/awesome-cordova-plugins/commit/2f2d55f1d53b8933d95d7e9dd7fafb8558e80dae)), closes [#250](https://github.com/danielsogl/awesome-cordova-plugins/issues/250) [#861](https://github.com/danielsogl/awesome-cordova-plugins/issues/861) [#1059](https://github.com/danielsogl/awesome-cordova-plugins/issues/1059) [#1145](https://github.com/danielsogl/awesome-cordova-plugins/issues/1145) [#1146](https://github.com/danielsogl/awesome-cordova-plugins/issues/1146) [#1049](https://github.com/danielsogl/awesome-cordova-plugins/issues/1049) [#1072](https://github.com/danielsogl/awesome-cordova-plugins/issues/1072) [#1071](https://github.com/danielsogl/awesome-cordova-plugins/issues/1071) [#1076](https://github.com/danielsogl/awesome-cordova-plugins/issues/1076) [#1065](https://github.com/danielsogl/awesome-cordova-plugins/issues/1065) [#1089](https://github.com/danielsogl/awesome-cordova-plugins/issues/1089) [#1087](https://github.com/danielsogl/awesome-cordova-plugins/issues/1087) [#1096](https://github.com/danielsogl/awesome-cordova-plugins/issues/1096) [#1098](https://github.com/danielsogl/awesome-cordova-plugins/issues/1098) [#1088](https://github.com/danielsogl/awesome-cordova-plugins/issues/1088) [#1099](https://github.com/danielsogl/awesome-cordova-plugins/issues/1099) [#1101](https://github.com/danielsogl/awesome-cordova-plugins/issues/1101) [#1103](https://github.com/danielsogl/awesome-cordova-plugins/issues/1103) [#1106](https://github.com/danielsogl/awesome-cordova-plugins/issues/1106) [#1107](https://github.com/danielsogl/awesome-cordova-plugins/issues/1107) [#1108](https://github.com/danielsogl/awesome-cordova-plugins/issues/1108) [#1109](https://github.com/danielsogl/awesome-cordova-plugins/issues/1109) [#1110](https://github.com/danielsogl/awesome-cordova-plugins/issues/1110) [#1122](https://github.com/danielsogl/awesome-cordova-plugins/issues/1122) [#1129](https://github.com/danielsogl/awesome-cordova-plugins/issues/1129) [#1125](https://github.com/danielsogl/awesome-cordova-plugins/issues/1125) [#1128](https://github.com/danielsogl/awesome-cordova-plugins/issues/1128) [#1126](https://github.com/danielsogl/awesome-cordova-plugins/issues/1126) [#1115](https://github.com/danielsogl/awesome-cordova-plugins/issues/1115) [#1077](https://github.com/danielsogl/awesome-cordova-plugins/issues/1077) [#1118](https://github.com/danielsogl/awesome-cordova-plugins/issues/1118) [#1093](https://github.com/danielsogl/awesome-cordova-plugins/issues/1093) [#1116](https://github.com/danielsogl/awesome-cordova-plugins/issues/1116) [#1001](https://github.com/danielsogl/awesome-cordova-plugins/issues/1001) [#1105](https://github.com/danielsogl/awesome-cordova-plugins/issues/1105) [#1097](https://github.com/danielsogl/awesome-cordova-plugins/issues/1097) [#1095](https://github.com/danielsogl/awesome-cordova-plugins/issues/1095) [#1086](https://github.com/danielsogl/awesome-cordova-plugins/issues/1086) [#1082](https://github.com/danielsogl/awesome-cordova-plugins/issues/1082) [#1079](https://github.com/danielsogl/awesome-cordova-plugins/issues/1079) [#1064](https://github.com/danielsogl/awesome-cordova-plugins/issues/1064) [#1063](https://github.com/danielsogl/awesome-cordova-plugins/issues/1063) [#1031](https://github.com/danielsogl/awesome-cordova-plugins/issues/1031) [#1025](https://github.com/danielsogl/awesome-cordova-plugins/issues/1025) [#990](https://github.com/danielsogl/awesome-cordova-plugins/issues/990) [#1013](https://github.com/danielsogl/awesome-cordova-plugins/issues/1013) [#990](https://github.com/danielsogl/awesome-cordova-plugins/issues/990) [#1004](https://github.com/danielsogl/awesome-cordova-plugins/issues/1004) [#1130](https://github.com/danielsogl/awesome-cordova-plugins/issues/1130) [#1043](https://github.com/danielsogl/awesome-cordova-plugins/issues/1043) [#1044](https://github.com/danielsogl/awesome-cordova-plugins/issues/1044) [#1045](https://github.com/danielsogl/awesome-cordova-plugins/issues/1045) [#1078](https://github.com/danielsogl/awesome-cordova-plugins/issues/1078) [#1084](https://github.com/danielsogl/awesome-cordova-plugins/issues/1084) [#1102](https://github.com/danielsogl/awesome-cordova-plugins/issues/1102) [#1132](https://github.com/danielsogl/awesome-cordova-plugins/issues/1132) [#1039](https://github.com/danielsogl/awesome-cordova-plugins/issues/1039) [#1138](https://github.com/danielsogl/awesome-cordova-plugins/issues/1138) [#1139](https://github.com/danielsogl/awesome-cordova-plugins/issues/1139) [#1142](https://github.com/danielsogl/awesome-cordova-plugins/issues/1142) [#1171](https://github.com/danielsogl/awesome-cordova-plugins/issues/1171) [#1193](https://github.com/danielsogl/awesome-cordova-plugins/issues/1193)


### Features

* **ble:** add readRSSI method ([#1189](https://github.com/danielsogl/awesome-cordova-plugins/issues/1189)) ([26db2cf](https://github.com/danielsogl/awesome-cordova-plugins/commit/26db2cfcf931727a4387585fd50503b66570c542))
* **camera-preview:** update signature to match 0.9.0  ([#1192](https://github.com/danielsogl/awesome-cordova-plugins/issues/1192)) ([9bf4ee3](https://github.com/danielsogl/awesome-cordova-plugins/commit/9bf4ee3fac62b959e837e9ceb38ace8bf15c6f6e))
* **music-controls:** add missing options ([234165c](https://github.com/danielsogl/awesome-cordova-plugins/commit/234165c294e3fb9988c9cb2d4ec78cd33a0fe63a))
* **music-controls:** add updateDismissable method ([#1195](https://github.com/danielsogl/awesome-cordova-plugins/issues/1195)) ([f8df876](https://github.com/danielsogl/awesome-cordova-plugins/commit/f8df8769c97fb57071f5ee6a1c004863068c95b4))
* **pedo-meter:** add pedometer plugin ([#1135](https://github.com/danielsogl/awesome-cordova-plugins/issues/1135)) ([d845519](https://github.com/danielsogl/awesome-cordova-plugins/commit/d845519361c3241e205d54a676476b956ddecd3f)), closes [#1104](https://github.com/danielsogl/awesome-cordova-plugins/issues/1104)


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



# [2.9.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.8.1...v2.9.0) (2017-03-18)


### Bug Fixes

* **background-geolocation:** configure returns an observable ([961cff1](https://github.com/danielsogl/awesome-cordova-plugins/commit/961cff185dc1e2c960178a3fdb00ca459e51f854))


### Features

* **background-mode:** added moveToBackground and moveToForeground ([#1181](https://github.com/danielsogl/awesome-cordova-plugins/issues/1181)) ([95ac7e1](https://github.com/danielsogl/awesome-cordova-plugins/commit/95ac7e1855b669ae396b4c4d30236f2de9a59391))



## [2.8.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.8.0...v2.8.1) (2017-03-10)


### Bug Fixes

* **bluetooth-serial:** add missing disconnect method ([74971fe](https://github.com/danielsogl/awesome-cordova-plugins/commit/74971feb98a186bed5519025b60c758f1ad29162)), closes [#1151](https://github.com/danielsogl/awesome-cordova-plugins/issues/1151)
* **fingerprint-aio:** add useBackup property ([#1158](https://github.com/danielsogl/awesome-cordova-plugins/issues/1158)) ([6fdeeaf](https://github.com/danielsogl/awesome-cordova-plugins/commit/6fdeeaf6f2a666eaea93a7220e773331543a0a12))
* **health:** fix return type ([0f8c3ce](https://github.com/danielsogl/awesome-cordova-plugins/commit/0f8c3ce376295bdde7b9e5912945d51368214ed1))
* **paypal:** sku param is optional ([#1161](https://github.com/danielsogl/awesome-cordova-plugins/issues/1161)) ([62c7a60](https://github.com/danielsogl/awesome-cordova-plugins/commit/62c7a60aeea7e4d577af40cf1164aa3e00e9859b))


### Features

* **firebase:** add new setScreenName method ([0009cbf](https://github.com/danielsogl/awesome-cordova-plugins/commit/0009cbf3a0151cabdac78b1fb27ef8a3094e66f0)), closes [#1149](https://github.com/danielsogl/awesome-cordova-plugins/issues/1149)



# [2.8.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.7.0...v2.8.0) (2017-03-04)


### Bug Fixes

* **file:** fix return types ([b458327](https://github.com/danielsogl/awesome-cordova-plugins/commit/b4583271b808cfb58fc904c6954bba7bd7d55d06)), closes [#1139](https://github.com/danielsogl/awesome-cordova-plugins/issues/1139)


### Features

* **app-preferences:** added cordova-plugin-app-preferences support ([#1084](https://github.com/danielsogl/awesome-cordova-plugins/issues/1084)) ([12280dd](https://github.com/danielsogl/awesome-cordova-plugins/commit/12280dda2bbdc500e22ecea6508fde48d2d44b9f))
* **health:** add wrapper for cordova-plugin-health ([#1039](https://github.com/danielsogl/awesome-cordova-plugins/issues/1039)) ([3500d80](https://github.com/danielsogl/awesome-cordova-plugins/commit/3500d80b9c39fdcf76d68fedf53482733f8288ae))
* **photo-library:** added cordova-plugin-photo-library ([#1102](https://github.com/danielsogl/awesome-cordova-plugins/issues/1102)) ([384dfc2](https://github.com/danielsogl/awesome-cordova-plugins/commit/384dfc263d5f5887b80deb1cafb0d55e3092ce22))



# [2.7.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.6.0...v2.7.0) (2017-03-02)


### Bug Fixes

* **core:** dont check if method exists when overriding ([754c5ec](https://github.com/danielsogl/awesome-cordova-plugins/commit/754c5ecbcb415f1ee0acf28aca089022b695fecc)), closes [#1043](https://github.com/danielsogl/awesome-cordova-plugins/issues/1043)
* **file:** fix writeExistingFile ([47f48ba](https://github.com/danielsogl/awesome-cordova-plugins/commit/47f48bae8d983a5c5c8fcdd2d44ba619b0b06608)), closes [#1044](https://github.com/danielsogl/awesome-cordova-plugins/issues/1044)


### Features

* **background-mode:** add missing functions ([906401b](https://github.com/danielsogl/awesome-cordova-plugins/commit/906401b23695bea50c2cc9a5c6b2b9f6f9f5f10e)), closes [#1078](https://github.com/danielsogl/awesome-cordova-plugins/issues/1078)
* **background-mode:** replace event listeners with on method ([ffdbab7](https://github.com/danielsogl/awesome-cordova-plugins/commit/ffdbab7b2699ed4cee074edf0e74b31d5b77cb2a))
* **diagnostic:** add new methods ([5144345](https://github.com/danielsogl/awesome-cordova-plugins/commit/5144345c9e531756a8403d7a43d3ba7db8d7220c)), closes [#1045](https://github.com/danielsogl/awesome-cordova-plugins/issues/1045)



# [2.6.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.5.1...v2.6.0) (2017-03-02)


### Bug Fixes

* **apprate:** add missing Windows Store option ([#1072](https://github.com/danielsogl/awesome-cordova-plugins/issues/1072)) ([439ccee](https://github.com/danielsogl/awesome-cordova-plugins/commit/439cceea2391614cecfb0c231270866378c7f2b1))
* **background-geolocation:** configure returns a promise ([fc87992](https://github.com/danielsogl/awesome-cordova-plugins/commit/fc879926b2888c4624529a35aeaaf28676727503)), closes [#1118](https://github.com/danielsogl/awesome-cordova-plugins/issues/1118)
* **contacts:** allow passing asterisk as contact field type ([9c5b593](https://github.com/danielsogl/awesome-cordova-plugins/commit/9c5b593d6ba3541e4d1a319584f7939d8f5f6bb0)), closes [#1093](https://github.com/danielsogl/awesome-cordova-plugins/issues/1093)
* **contacts:** allow passing asterisk as contact field type ([2639486](https://github.com/danielsogl/awesome-cordova-plugins/commit/26394865fc53b81a108ff7febaaf9e91b76704a9))
* **facebook:** fixes issue when not supplying default params ([#1088](https://github.com/danielsogl/awesome-cordova-plugins/issues/1088)) ([85a3a40](https://github.com/danielsogl/awesome-cordova-plugins/commit/85a3a407955893e1eebe3573b2b7ee6fba0c139a))
* **file:** add missing exports ([#1101](https://github.com/danielsogl/awesome-cordova-plugins/issues/1101)) ([23b97f6](https://github.com/danielsogl/awesome-cordova-plugins/commit/23b97f6b4a846087af552c94f222afe016078aa3))
* **file:** platform Browser will raise a an DOMException ([#1082](https://github.com/danielsogl/awesome-cordova-plugins/issues/1082)) ([2fba915](https://github.com/danielsogl/awesome-cordova-plugins/commit/2fba915b88b058d955cc471e1ad48fb7f37a5c6c))
* **file:** remove FileError from return type ([#1086](https://github.com/danielsogl/awesome-cordova-plugins/issues/1086)) ([c1748bb](https://github.com/danielsogl/awesome-cordova-plugins/commit/c1748bbc283a867f3c0c91c9889de145b84779c3))
* **imagepicker:** add outputType option ([#1098](https://github.com/danielsogl/awesome-cordova-plugins/issues/1098)) ([b4b7cfa](https://github.com/danielsogl/awesome-cordova-plugins/commit/b4b7cfa4739aec0dcc9ff57c80c8bdc7062cdbcb))
* **media:** add missing pauseRecord and resumeRecord methods ([#1122](https://github.com/danielsogl/awesome-cordova-plugins/issues/1122)) ([234ed6e](https://github.com/danielsogl/awesome-cordova-plugins/commit/234ed6e9e7f35289949a3b1f4d5e6a0c62d454cd))
* **plugin:** revert changes to support stable version ([#1116](https://github.com/danielsogl/awesome-cordova-plugins/issues/1116)) ([104532e](https://github.com/danielsogl/awesome-cordova-plugins/commit/104532e1d7b18650ac125595402fd3019c0f616f)), closes [#1001](https://github.com/danielsogl/awesome-cordova-plugins/issues/1001)
* **push:** add the missing option clearBadge ([#1087](https://github.com/danielsogl/awesome-cordova-plugins/issues/1087)) ([70847d1](https://github.com/danielsogl/awesome-cordova-plugins/commit/70847d1b2b6a68b520d01a4ab203c544d4b30a41))
* **serial:** Serial.requestPermission() options are optional ([#1128](https://github.com/danielsogl/awesome-cordova-plugins/issues/1128)) ([da72500](https://github.com/danielsogl/awesome-cordova-plugins/commit/da72500c4b21cca145288334657f1684df757fc4))
* **zip:** progress callback is optional ([#1049](https://github.com/danielsogl/awesome-cordova-plugins/issues/1049)) ([83f57b9](https://github.com/danielsogl/awesome-cordova-plugins/commit/83f57b9820a4a9cd45d5263b8bf5d49710d5a15f))


### Features

* **alipay:** add alipay support. ([#1097](https://github.com/danielsogl/awesome-cordova-plugins/issues/1097)) ([2eea3df](https://github.com/danielsogl/awesome-cordova-plugins/commit/2eea3df2c41cc6c09fdaddcd4fd1ef6ef0ff1da0))
* **app-update:** add cordova-plugin-app-update support ([#1105](https://github.com/danielsogl/awesome-cordova-plugins/issues/1105)) ([21d4088](https://github.com/danielsogl/awesome-cordova-plugins/commit/21d40888d86a19f95b0872a347b0bebc7fbbe00c))
* **appodeal:** adds Appodeal SDK wrappers for iOS and Android ([#1031](https://github.com/danielsogl/awesome-cordova-plugins/issues/1031)) ([fd8107b](https://github.com/danielsogl/awesome-cordova-plugins/commit/fd8107b79a7d84d895e241530bded14010121d5e))
* **background-fetch:** Adding Background Fetch requested in [#990](https://github.com/danielsogl/awesome-cordova-plugins/issues/990) ([#1013](https://github.com/danielsogl/awesome-cordova-plugins/issues/1013)) ([57e2691](https://github.com/danielsogl/awesome-cordova-plugins/commit/57e2691889a15ce7af82dd223a1cee6ff98630e3))
* **browser-tab:** add browser tab plugin ([#1126](https://github.com/danielsogl/awesome-cordova-plugins/issues/1126)) ([8de3793](https://github.com/danielsogl/awesome-cordova-plugins/commit/8de37939fbf86fb3ba61ba95f908c280b6448dea)), closes [#1115](https://github.com/danielsogl/awesome-cordova-plugins/issues/1115) [#1077](https://github.com/danielsogl/awesome-cordova-plugins/issues/1077)
* **couchbase-lite:** add CouchbaseLite cordova plugin ([#1025](https://github.com/danielsogl/awesome-cordova-plugins/issues/1025)) ([09a7dcf](https://github.com/danielsogl/awesome-cordova-plugins/commit/09a7dcf594a826ef7d242bcae44546e0ec40614e))
* **file:** add system paths ([f0e2195](https://github.com/danielsogl/awesome-cordova-plugins/commit/f0e219570e2b74c163978404d15425adf0a3c52f))
* **google-maps:** add constant for map type ([318ad3f](https://github.com/danielsogl/awesome-cordova-plugins/commit/318ad3f4e016aa338926db87028cca47fff3d027))
* **gyroscope:** add Gyroscope plugin ([#1004](https://github.com/danielsogl/awesome-cordova-plugins/issues/1004)) ([0378b1d](https://github.com/danielsogl/awesome-cordova-plugins/commit/0378b1d7fd09953c55487e0d9a4444749581f25b))
* **inappbrowser:** add interface for IAB options ([#1065](https://github.com/danielsogl/awesome-cordova-plugins/issues/1065)) ([f4b8236](https://github.com/danielsogl/awesome-cordova-plugins/commit/f4b8236c8da2bee6c13f6af67bfb4d96bc2d3162))
* **local-notifications:** support for icon background color ([#1079](https://github.com/danielsogl/awesome-cordova-plugins/issues/1079)) ([2a32624](https://github.com/danielsogl/awesome-cordova-plugins/commit/2a32624d9dada54c959eb46e5349f37a021d39b1))
* **text-to-speech:** Add stop method ([#1063](https://github.com/danielsogl/awesome-cordova-plugins/issues/1063)) ([4f86320](https://github.com/danielsogl/awesome-cordova-plugins/commit/4f86320696905070d7e669f4695fc4ef60f28b9e))
* **unique-device-add:** add UniqueDeviceId plugin ([#1064](https://github.com/danielsogl/awesome-cordova-plugins/issues/1064)) ([60db10c](https://github.com/danielsogl/awesome-cordova-plugins/commit/60db10c1d3b66f2204d425cef7e900e93b58b84c))



## [2.5.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.5.0...v2.5.1) (2017-02-07)


### Bug Fixes

* **pin-dialog:** add missing errorIndex ([b7701cd](https://github.com/danielsogl/awesome-cordova-plugins/commit/b7701cdb1666466374b599a09e1c6b685c3658cf))



# [2.5.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.4.1...v2.5.0) (2017-02-07)


### Bug Fixes

* **file-transfer:** fix return type of upload method ([a5b4632](https://github.com/danielsogl/awesome-cordova-plugins/commit/a5b4632ceb1a962157ec2be420dfcf5dcf9abe4f)), closes [#1002](https://github.com/danielsogl/awesome-cordova-plugins/issues/1002)
* **pinterest:** fix PinterestPin interface ([a03afcf](https://github.com/danielsogl/awesome-cordova-plugins/commit/a03afcf0fa65210eba3781be716af43fe974aa74))
* **safari-view-controller:** fix issue caused by calling show without options ([dc37d8f](https://github.com/danielsogl/awesome-cordova-plugins/commit/dc37d8f71c6200adba070e9dc0bb6ad1694436fd))


### Features

* **background-geolocation:** add missing properties for Android ([f0cf860](https://github.com/danielsogl/awesome-cordova-plugins/commit/f0cf86076c35ff78f61f842fa6e617f764272900))
* **barcodescanner:** add option disableSuccessBeep ([#1035](https://github.com/danielsogl/awesome-cordova-plugins/issues/1035)) ([97489ba](https://github.com/danielsogl/awesome-cordova-plugins/commit/97489ba5736bb3cbb48af2d1a1310ff1d1084e9e))
* **inappbrowser:** add hide function ([#1018](https://github.com/danielsogl/awesome-cordova-plugins/issues/1018)) ([4ab87d8](https://github.com/danielsogl/awesome-cordova-plugins/commit/4ab87d8abbc747d1f1fae2ffd326f16ceb83f171))



## [2.4.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.4.0...v2.4.1) (2017-01-24)


### Bug Fixes

* **google-maps:** fix event listeners ([416071a](https://github.com/danielsogl/awesome-cordova-plugins/commit/416071a5a1edaa7a9fbc087471fa023100324594)), closes [#999](https://github.com/danielsogl/awesome-cordova-plugins/issues/999)
* **screen-orientation:** lockOrientation returns a promise ([1c09ee1](https://github.com/danielsogl/awesome-cordova-plugins/commit/1c09ee1fbcd2beaf9cbd780a744637824c6a537d)), closes [#939](https://github.com/danielsogl/awesome-cordova-plugins/issues/939)


### Features

* **pinterest:** add pinterest plugin ([466437a](https://github.com/danielsogl/awesome-cordova-plugins/commit/466437a68373b03f6ae52bb98e2b5738db1d18ea))



## [2.3.2](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.3.1...v2.3.2) (2017-01-24)



## [2.3.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.3.0...v2.3.1) (2017-01-24)


### Bug Fixes

* add clearAllNotifications() ([8c021bc](https://github.com/danielsogl/awesome-cordova-plugins/commit/8c021bcaa04b39950132ef29afb802f71ac1fc49))
* **battery-status:** add missing pluginRef ([3da0efe](https://github.com/danielsogl/awesome-cordova-plugins/commit/3da0efe38e4d430d3cc46426ee9b52f983be2706))
* **core:** fix exception in CordovaProperty ([#998](https://github.com/danielsogl/awesome-cordova-plugins/issues/998)) ([cb29363](https://github.com/danielsogl/awesome-cordova-plugins/commit/cb293639bc867776bebcf6c54dd872971b023473)), closes [#992](https://github.com/danielsogl/awesome-cordova-plugins/issues/992)
* **core:** fix plugin check ([da7a370](https://github.com/danielsogl/awesome-cordova-plugins/commit/da7a3707fa1bc736b47cc3e831d614ab2426d989))
* **googlemaps:** fix GoogleMapsLaLngBounds ([c3127d3](https://github.com/danielsogl/awesome-cordova-plugins/commit/c3127d35bbc7d732f07fa96302975281af91b5fc)), closes [#972](https://github.com/danielsogl/awesome-cordova-plugins/issues/972)
* **plugin:** adds subscribe() and unsubscribe() ([94025a7](https://github.com/danielsogl/awesome-cordova-plugins/commit/94025a7fd27266758d1e6109869a99d1e1a58113))


### Features

* **core:** add PluginConfig interface ([b983de2](https://github.com/danielsogl/awesome-cordova-plugins/commit/b983de2145c31d36efffd5e2fcfb1ca3fc3c2896)), closes [#996](https://github.com/danielsogl/awesome-cordova-plugins/issues/996)
* **google-maps:** add base class functions ([#993](https://github.com/danielsogl/awesome-cordova-plugins/issues/993)) ([9f98f8e](https://github.com/danielsogl/awesome-cordova-plugins/commit/9f98f8ef46a261adeb2a0b7e831e7e47bb994f7b))



# [2.3.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.2.17...v2.3.0) (2017-01-20)


### Bug Fixes

* add return ([3fdc4a8](https://github.com/danielsogl/awesome-cordova-plugins/commit/3fdc4a8acd9fbe4468e8d4c4bd1a40a6619a2882))
* **headercolor:** solve typo in usage and chore ([bab2971](https://github.com/danielsogl/awesome-cordova-plugins/commit/bab2971c58149ee605cb8ad2aaed86620c040297))
* **native-geocoder:** fix callback order ([dbf95ea](https://github.com/danielsogl/awesome-cordova-plugins/commit/dbf95ea4bd612636c80281c926c1d3bc4db1b93c))


### Features

* **backlight:** add Backlight plugin ([#973](https://github.com/danielsogl/awesome-cordova-plugins/issues/973)) ([1279114](https://github.com/danielsogl/awesome-cordova-plugins/commit/1279114b73fbc35e7fd741cc952a649a71a75739))
* **broadcaster:** add Broadcaster plugin ([#877](https://github.com/danielsogl/awesome-cordova-plugins/issues/877)) ([1e38a6c](https://github.com/danielsogl/awesome-cordova-plugins/commit/1e38a6c005305b145b877ab1606d43f530ed767b))
* **fingerprint-aio:** add cordova-plugin-fingerprint-aio ([#845](https://github.com/danielsogl/awesome-cordova-plugins/issues/845)) ([1615b74](https://github.com/danielsogl/awesome-cordova-plugins/commit/1615b740650ad1271f73bef6686ee1c112bf5851))
* **firebase:** add firebase plugin ([#914](https://github.com/danielsogl/awesome-cordova-plugins/issues/914)) ([8e98481](https://github.com/danielsogl/awesome-cordova-plugins/commit/8e984816094239e4754f81ffcabb00b4101d205c)), closes [#608](https://github.com/danielsogl/awesome-cordova-plugins/issues/608)
* **headercolor:** add HeaderColor plugin ([93696d5](https://github.com/danielsogl/awesome-cordova-plugins/commit/93696d53f75614f1141dce4e4688f585aa597574)), closes [#760](https://github.com/danielsogl/awesome-cordova-plugins/issues/760)
* **launch-review:** add LaunchReview plugin ([#949](https://github.com/danielsogl/awesome-cordova-plugins/issues/949)) ([9c75a06](https://github.com/danielsogl/awesome-cordova-plugins/commit/9c75a0613168fcb4309acf2d0eae66a30e49b42e))
* **nativegeocoder:** add NativeGeocoder plugin ([#800](https://github.com/danielsogl/awesome-cordova-plugins/issues/800)) ([911537b](https://github.com/danielsogl/awesome-cordova-plugins/commit/911537b61bb1bf84ddb302731d172b8c5e97c14f))
* **navigationbar:** add NavigationBar plugin ([#826](https://github.com/danielsogl/awesome-cordova-plugins/issues/826)) ([70c15c3](https://github.com/danielsogl/awesome-cordova-plugins/commit/70c15c31ca45cf9555ff865ee482264264a8497f))
* **rollbar:** add Rollbar plugin ([#832](https://github.com/danielsogl/awesome-cordova-plugins/issues/832)) ([229f550](https://github.com/danielsogl/awesome-cordova-plugins/commit/229f5509e9e28936275b859e497542419379d8d8))
* **serial:** add Serial plugin ([#952](https://github.com/danielsogl/awesome-cordova-plugins/issues/952)) ([ac748ab](https://github.com/danielsogl/awesome-cordova-plugins/commit/ac748abf789d2732a9a335f8fb2ba7c64f661fc3))
* **speech-recognition:** add SpeechRecognition plugin ([#897](https://github.com/danielsogl/awesome-cordova-plugins/issues/897)) ([7c30718](https://github.com/danielsogl/awesome-cordova-plugins/commit/7c30718369348968ef641ad7bde3b1823c7df479))
* **stripe:** add stripe plugin ([#913](https://github.com/danielsogl/awesome-cordova-plugins/issues/913)) ([0ec46b0](https://github.com/danielsogl/awesome-cordova-plugins/commit/0ec46b03b50af03d5b7538c00b7bb0421786bf2a))



## [2.2.17](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.2.16...v2.2.17) (2017-01-20)


### Bug Fixes

* **app-rate:** onRateDialogShow callback ([#985](https://github.com/danielsogl/awesome-cordova-plugins/issues/985)) ([ab681cc](https://github.com/danielsogl/awesome-cordova-plugins/commit/ab681cccbe6170115a5be52c9ca086d66fe93257))
* **core:** increase deviceready timeout for sanity ([0ab14a0](https://github.com/danielsogl/awesome-cordova-plugins/commit/0ab14a085ee63b99ac20b781e74648f30a2f2c1a))



## [2.2.16](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.2.15...v2.2.16) (2017-01-11)


### Features

* **barcodescanner:** add missing options ([#966](https://github.com/danielsogl/awesome-cordova-plugins/issues/966)) ([e902856](https://github.com/danielsogl/awesome-cordova-plugins/commit/e9028560899899bde1ec0d49839d4f16fcb7ffa9)), closes [#965](https://github.com/danielsogl/awesome-cordova-plugins/issues/965)



## [2.2.15](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.2.14...v2.2.15) (2017-01-11)


### Bug Fixes

* **apprate:** captialize URL in storeAppURL property ([b98fa28](https://github.com/danielsogl/awesome-cordova-plugins/commit/b98fa28b4bce481b06a21f8d53443eb1811b8803))
* **ble:** stopScan takes no args when used as clear function ([#944](https://github.com/danielsogl/awesome-cordova-plugins/issues/944)) ([6ddd2aa](https://github.com/danielsogl/awesome-cordova-plugins/commit/6ddd2aa1841bb04d2e9441b1b761c72609f4b0dd))
* **onesignal:** OSNotification.app_id is optional ([#946](https://github.com/danielsogl/awesome-cordova-plugins/issues/946)) ([ebf0716](https://github.com/danielsogl/awesome-cordova-plugins/commit/ebf07161b6cc64c62dabdec46d3e9c32d053553e))



## [2.2.14](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.2.13...v2.2.14) (2017-01-07)


### Bug Fixes

* **google-analytics:** fix startTrackerWithId when interval is not provided ([49fe24d](https://github.com/danielsogl/awesome-cordova-plugins/commit/49fe24dee2dc043a67456f1f734f2548a8f26281))
* **google-plus:** fixes login without options ([ca14bf6](https://github.com/danielsogl/awesome-cordova-plugins/commit/ca14bf6a7589a627960ccc26678162e085edc2cc)), closes [#932](https://github.com/danielsogl/awesome-cordova-plugins/issues/932)
* **inappbrowser:** fix insertCSS method name ([de07df6](https://github.com/danielsogl/awesome-cordova-plugins/commit/de07df6f206a441df8509711c067b0252ea0396b)), closes [#921](https://github.com/danielsogl/awesome-cordova-plugins/issues/921)
* **mixpanel:** fix issue when not passing eventProperties ([#927](https://github.com/danielsogl/awesome-cordova-plugins/issues/927)) ([bbf75bc](https://github.com/danielsogl/awesome-cordova-plugins/commit/bbf75bcbd7f5c67a76ce93c93fc66824d3f68581))
* **nfc:** add missing param for addMimeTypeListener ([#937](https://github.com/danielsogl/awesome-cordova-plugins/issues/937)) ([ca60c5b](https://github.com/danielsogl/awesome-cordova-plugins/commit/ca60c5b9120e8babd67511e43b25cbac37f71c36))
* **push:** fix typing for additionalData ([0d6997c](https://github.com/danielsogl/awesome-cordova-plugins/commit/0d6997cbdd717471e190b8282f6096922d197692)), closes [#868](https://github.com/danielsogl/awesome-cordova-plugins/issues/868)


### Features

* **background-geolocation:** add altitudeAccuracy into response typings ([#922](https://github.com/danielsogl/awesome-cordova-plugins/issues/922)) ([8eb656c](https://github.com/danielsogl/awesome-cordova-plugins/commit/8eb656cce897ee8639d89e0c8f1ad1989751c1f9))
* **market:** add search method, return promises ([d62779a](https://github.com/danielsogl/awesome-cordova-plugins/commit/d62779a2a6ffcf219d33021779bb85800d9c2a45))



## [2.2.13](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.2.12...v2.2.13) (2016-12-27)


### Bug Fixes

* **admob:** add adId prop to AdMobOptions ([d5dfdf8](https://github.com/danielsogl/awesome-cordova-plugins/commit/d5dfdf83f3e0003b09062995d3b06810cdd23005))
* **background-mode:** isEnabled and isActive return booleans ([ba77fd7](https://github.com/danielsogl/awesome-cordova-plugins/commit/ba77fd70c3a247c092722bddf53b1c4b693d0c28)), closes [#908](https://github.com/danielsogl/awesome-cordova-plugins/issues/908)
* **diagnostic:** add missing types ([1841220](https://github.com/danielsogl/awesome-cordova-plugins/commit/1841220359bbf6321ee515227990bc32a89f9ca4)), closes [#905](https://github.com/danielsogl/awesome-cordova-plugins/issues/905)
* **diagnostic:** add permissionStatus types ([#890](https://github.com/danielsogl/awesome-cordova-plugins/issues/890)) ([3385c1b](https://github.com/danielsogl/awesome-cordova-plugins/commit/3385c1b6dce988dfa3dab5b7a7efcc1128a7241e))


### Features

* **android-fingerprint-auth:** update to v1.2.1 ([#910](https://github.com/danielsogl/awesome-cordova-plugins/issues/910)) ([a1b0f88](https://github.com/danielsogl/awesome-cordova-plugins/commit/a1b0f885a73e0352e98fa3106e5c1043014867a9))
* **nfc:** add new functions ([#853](https://github.com/danielsogl/awesome-cordova-plugins/issues/853)) ([c44fb75](https://github.com/danielsogl/awesome-cordova-plugins/commit/c44fb75adce8def586acef5793428b56e177780d))
* **onesignal:** improve typings ([#888](https://github.com/danielsogl/awesome-cordova-plugins/issues/888)) ([56e8eae](https://github.com/danielsogl/awesome-cordova-plugins/commit/56e8eaeb5dd1513b77feff473858e3271ea822b7))
* **sim:** add new methods ([#894](https://github.com/danielsogl/awesome-cordova-plugins/issues/894)) ([0c36988](https://github.com/danielsogl/awesome-cordova-plugins/commit/0c3698854429e37ef06fae4cfa69d3585ec5429e))



## [2.2.12](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.2.11...v2.2.12) (2016-12-18)


### Bug Fixes

* **camera-preview:** parameter size is optional ([#871](https://github.com/danielsogl/awesome-cordova-plugins/issues/871)) ([61dc8aa](https://github.com/danielsogl/awesome-cordova-plugins/commit/61dc8aa18e7b4845934170148d9fdf50a7f1399a))
* **diagnostic:** permissionStatus gets values from plugin in runtime ([9986e0d](https://github.com/danielsogl/awesome-cordova-plugins/commit/9986e0d0b3436b9a82f1e8506ac4630df8d2b9be)), closes [#872](https://github.com/danielsogl/awesome-cordova-plugins/issues/872)
* **network:** update API ([ec5e27b](https://github.com/danielsogl/awesome-cordova-plugins/commit/ec5e27be4b1455ad5b0ee4ea2da5592e63be3dea))
* **sms:** fix callback index when omitting options param ([114a74d](https://github.com/danielsogl/awesome-cordova-plugins/commit/114a74d3ba5d22de733294378b467cd6994c3bda)), closes [#858](https://github.com/danielsogl/awesome-cordova-plugins/issues/858)


### Features

* **admob:** update api and docs ([6ba1d49](https://github.com/danielsogl/awesome-cordova-plugins/commit/6ba1d4908b36d644a1de2b3bd677842ab4cb6241))



## [2.2.11](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.2.10...v2.2.11) (2016-12-06)


### Bug Fixes

* **cordova-property:** fixes static properties of classes ([7ae6e10](https://github.com/danielsogl/awesome-cordova-plugins/commit/7ae6e103756e3766c4714b91e8778e2b0360ff9d))
* **device:** fixes device plugin ([d918844](https://github.com/danielsogl/awesome-cordova-plugins/commit/d9188446a09a507878c6c682ea945b70404ce037))


### BREAKING CHANGES

* **device:** device property no longer exists



## [2.2.10](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.2.8...v2.2.10) (2016-12-04)


### Bug Fixes

* **contacts:** fix few bugs in Contacts ([#846](https://github.com/danielsogl/awesome-cordova-plugins/issues/846)) ([b19f6d1](https://github.com/danielsogl/awesome-cordova-plugins/commit/b19f6d1ccd868ac7df839e64d79d22ff85400eae))
* **sqlite:** add static constructor, and fix resolve type ([#697](https://github.com/danielsogl/awesome-cordova-plugins/issues/697)) ([9082c5e](https://github.com/danielsogl/awesome-cordova-plugins/commit/9082c5efbfbc94a766677f13f327b20c3d52ba9a))


### Features

* **actionsheet:** add ActionSheetOptions interface ([f211da7](https://github.com/danielsogl/awesome-cordova-plugins/commit/f211da72806cea3fdb36e4cae07659d9ffc0c8d7))
* **googlemap:** add disableAutoPan to GoogleMapsMarkerOptions ([cf75a53](https://github.com/danielsogl/awesome-cordova-plugins/commit/cf75a534383bae69bdce6be717744e8878d160ea)), closes [#844](https://github.com/danielsogl/awesome-cordova-plugins/issues/844)
* **googlemaps:** add markerClick and infoClick to MarkerOptions ([6f7171d](https://github.com/danielsogl/awesome-cordova-plugins/commit/6f7171d26b189fc4edd4edec1fcd73f65f9c7603)), closes [#844](https://github.com/danielsogl/awesome-cordova-plugins/issues/844)



## [2.2.8](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.2.7...v2.2.8) (2016-12-01)


### Bug Fixes

* **card-io:** fix typo in options ([e6700a3](https://github.com/danielsogl/awesome-cordova-plugins/commit/e6700a360e03d68afe3ea0dbd66153e1a4362bf3))
* **globalization:** add missing parameter to numberToString function ([1072ab1](https://github.com/danielsogl/awesome-cordova-plugins/commit/1072ab115b382cb35df737ca4c00e305c0c2ed25)), closes [#835](https://github.com/danielsogl/awesome-cordova-plugins/issues/835)


### Features

* **card-io:** add typing for response ([2e82320](https://github.com/danielsogl/awesome-cordova-plugins/commit/2e82320b4c408b5ab358e297aaa2c62c6b1486b7))



## [2.2.7](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.2.5...v2.2.7) (2016-11-24)


### Bug Fixes

* **3dTouch:** fixes onHomeIconPressed ([#813](https://github.com/danielsogl/awesome-cordova-plugins/issues/813)) ([695099b](https://github.com/danielsogl/awesome-cordova-plugins/commit/695099b2b097a2c5d25dc2eed20f29456d6e94dc))
* **camera-preview:** formatting. Closes [#790](https://github.com/danielsogl/awesome-cordova-plugins/issues/790) ([5577c51](https://github.com/danielsogl/awesome-cordova-plugins/commit/5577c51dbc7c91d0fe1e1934bbd46e2a3ced33cb))
* **datepicker:** fix allowOldDates option ([#761](https://github.com/danielsogl/awesome-cordova-plugins/issues/761)) ([fa03fa5](https://github.com/danielsogl/awesome-cordova-plugins/commit/fa03fa544f29feccdabc4d7b384babce88c344c6))
* **diagnostics:** fix [#776](https://github.com/danielsogl/awesome-cordova-plugins/issues/776) ([#777](https://github.com/danielsogl/awesome-cordova-plugins/issues/777)) ([01b30c6](https://github.com/danielsogl/awesome-cordova-plugins/commit/01b30c68e1b3b9faa5ce67fcf79641182c27b1c1))
* **file:** correct writeFile flags ([9bd8997](https://github.com/danielsogl/awesome-cordova-plugins/commit/9bd8997a315dd40f2605e4ecf5ebdef9be4bc38f)), closes [#789](https://github.com/danielsogl/awesome-cordova-plugins/issues/789)
* **googlemap:** fix typoe googledesic to geodesic ([78b3ec5](https://github.com/danielsogl/awesome-cordova-plugins/commit/78b3ec5b1f24a1c78ee8e80ef1c81ec6fd386e5d)), closes [#765](https://github.com/danielsogl/awesome-cordova-plugins/issues/765)
* **native-audio:** completeCallback is optional on play method ([b719a03](https://github.com/danielsogl/awesome-cordova-plugins/commit/b719a0372bdfbde162ec3945245f9d3c5e873ae9)), closes [#792](https://github.com/danielsogl/awesome-cordova-plugins/issues/792)
* **nfc:** don't bind to name field, fix [#740](https://github.com/danielsogl/awesome-cordova-plugins/issues/740) ([#749](https://github.com/danielsogl/awesome-cordova-plugins/issues/749)) ([ca43394](https://github.com/danielsogl/awesome-cordova-plugins/commit/ca43394185b156370341bf886024994378bd98ba))
* **plugin:** don't bind to name field. Fixes [#740](https://github.com/danielsogl/awesome-cordova-plugins/issues/740) ([71916a8](https://github.com/danielsogl/awesome-cordova-plugins/commit/71916a85ddbffbaac3967ec3ef45e1fa36c73df0))
* **video-player:** scalingMode is number ([f07431a](https://github.com/danielsogl/awesome-cordova-plugins/commit/f07431a14c6e03482eb869c34400886850493813)), closes [#774](https://github.com/danielsogl/awesome-cordova-plugins/issues/774)


### Features

* **camera-preview:** add disable method ([6ad54ec](https://github.com/danielsogl/awesome-cordova-plugins/commit/6ad54ecf860d517bbc76eb33dae8fa3b53bc484c))
* **google-analytics:** new interval period parameter ([abd910d](https://github.com/danielsogl/awesome-cordova-plugins/commit/abd910de678c4388b50bcb8736e55fe4be9027a4)), closes [#816](https://github.com/danielsogl/awesome-cordova-plugins/issues/816)
* **google-map:** add get and set methods to Marker class ([51ab03d](https://github.com/danielsogl/awesome-cordova-plugins/commit/51ab03d097500c3c62e37af5425a1419d72a5ca6)), closes [#798](https://github.com/danielsogl/awesome-cordova-plugins/issues/798)



## [2.2.5](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.2.4...v2.2.5) (2016-10-27)


### Bug Fixes

* **3dtouch:** add missing property ([#739](https://github.com/danielsogl/awesome-cordova-plugins/issues/739)) ([757d096](https://github.com/danielsogl/awesome-cordova-plugins/commit/757d0961b92098b199c14978c9cfc801f1f7b4d4))
* **geolocation:** fix watchPosition return type ([d5310b0](https://github.com/danielsogl/awesome-cordova-plugins/commit/d5310b0f739967c59227927461c0ac7d993f28b3)), closes [#741](https://github.com/danielsogl/awesome-cordova-plugins/issues/741)
* **nfc:** fix Ndef class ([ac181c5](https://github.com/danielsogl/awesome-cordova-plugins/commit/ac181c543970b1497014957debf0bd7d4acad108)), closes [#713](https://github.com/danielsogl/awesome-cordova-plugins/issues/713)
* **sqlite:** check if plugin exists before opening database ([6f47371](https://github.com/danielsogl/awesome-cordova-plugins/commit/6f4737190b27058629fe43551fe330dc7e27433d))
* **sqlite:** check if plugin exists before opening database ([c98b4f4](https://github.com/danielsogl/awesome-cordova-plugins/commit/c98b4f4c85bf05558782ac0598805b32683db8cb))
* **sqlite:** fix callback issue with transaction method ([a72cd59](https://github.com/danielsogl/awesome-cordova-plugins/commit/a72cd59b99de68dfccb007822d2e570237215c89)), closes [#732](https://github.com/danielsogl/awesome-cordova-plugins/issues/732)


### Features

* **diagnostic:** add missing functions ([eb03de9](https://github.com/danielsogl/awesome-cordova-plugins/commit/eb03de96ba9dd508ed47dcf25b0edb207f05bc76)), closes [#743](https://github.com/danielsogl/awesome-cordova-plugins/issues/743)
* **filepath:** add cordova-plugin-filepath ([#714](https://github.com/danielsogl/awesome-cordova-plugins/issues/714)) ([0660a3b](https://github.com/danielsogl/awesome-cordova-plugins/commit/0660a3bc67e82051abcc9aa1c365813a23485943))
* **plugins:** add name field ([9677656](https://github.com/danielsogl/awesome-cordova-plugins/commit/96776567eb1d3f316e788ded75f1372ab9ce9713))
* **sms:** add hasPermission method ([8fbf1f2](https://github.com/danielsogl/awesome-cordova-plugins/commit/8fbf1f2b34fa8d31595a6e4e585d84f1a9a20d33)), closes [#721](https://github.com/danielsogl/awesome-cordova-plugins/issues/721)



## [2.2.4](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.2.3...v2.2.4) (2016-10-15)


### Bug Fixes

* **sqlite:** fix callback order for transaction ([#700](https://github.com/danielsogl/awesome-cordova-plugins/issues/700)) ([799e2f0](https://github.com/danielsogl/awesome-cordova-plugins/commit/799e2f0b2e4dbbdacea560b49ab83c3f2d7fd8b8))


### Features

* **device-feedback:** add DeviceFeedback plugin ([#696](https://github.com/danielsogl/awesome-cordova-plugins/issues/696)) ([bbda6e2](https://github.com/danielsogl/awesome-cordova-plugins/commit/bbda6e22a2d7bd975e34f63e1b6d70a6bb1bc108))
* **image-picker:** add new android methods ([3edfafb](https://github.com/danielsogl/awesome-cordova-plugins/commit/3edfafb6f9273c403d5d7b740c9334f3540bf256))
* **mixpanel:** MixpanelPeople returns promises ([#681](https://github.com/danielsogl/awesome-cordova-plugins/issues/681)) ([b95f88c](https://github.com/danielsogl/awesome-cordova-plugins/commit/b95f88c165d37ef1beee0bb946859563365ac939)), closes [#667](https://github.com/danielsogl/awesome-cordova-plugins/issues/667)



## [2.2.3](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.2.2...v2.2.3) (2016-10-14)


### Bug Fixes

* **googlemaps:** Expose 'type' property in GoogleMapsLatLngBounds [#693](https://github.com/danielsogl/awesome-cordova-plugins/issues/693) ([#694](https://github.com/danielsogl/awesome-cordova-plugins/issues/694)) ([74a252b](https://github.com/danielsogl/awesome-cordova-plugins/commit/74a252b3246c6aab25197fed53de4e747e9d10a3))
* **onesignal:** update to match latest API version ([#691](https://github.com/danielsogl/awesome-cordova-plugins/issues/691)) ([babfb0d](https://github.com/danielsogl/awesome-cordova-plugins/commit/babfb0dca3eb32f672062ddd8ed2b2a545c394f4))



## [2.2.2](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.2.1...v2.2.2) (2016-10-12)


### Bug Fixes

* **file:** fix writeFile method ([842a80d](https://github.com/danielsogl/awesome-cordova-plugins/commit/842a80d4930e3cb01d2da6b91708f4e1b1d266eb)), closes [#464](https://github.com/danielsogl/awesome-cordova-plugins/issues/464) [#552](https://github.com/danielsogl/awesome-cordova-plugins/issues/552) [#666](https://github.com/danielsogl/awesome-cordova-plugins/issues/666)
* **file:** getFreeDiskSpace now works ([d2f42ef](https://github.com/danielsogl/awesome-cordova-plugins/commit/d2f42ef33a12b2f706016dd06cf4f337aebd0c03))
* **file:** last parameter for writeFile now only accepts options ([5710eb7](https://github.com/danielsogl/awesome-cordova-plugins/commit/5710eb78a85e3cde0d04078b1915961d6ef26562))
* **file:** read methods can accept Blobs too ([276d61b](https://github.com/danielsogl/awesome-cordova-plugins/commit/276d61bf3a681684cf79531ead83d0e8c4bc8fcc))


### Features

* **file:** getFile and getDirectory are now public ([5c92455](https://github.com/danielsogl/awesome-cordova-plugins/commit/5c92455ee9868f704354de6f36c1c3e91daee400)), closes [#657](https://github.com/danielsogl/awesome-cordova-plugins/issues/657)
* **file:** resolveLocalFilesystemUrl and resolveDirectoryUrl are now public methods ([542ff4c](https://github.com/danielsogl/awesome-cordova-plugins/commit/542ff4cf952ada154541e1c2dc81ac2485d931fe)), closes [#657](https://github.com/danielsogl/awesome-cordova-plugins/issues/657)



## [2.2.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.2.0...v2.2.1) (2016-10-12)


### Bug Fixes

* **diagnostic:** misspelled getContactsAuthorizationStatus method ([#678](https://github.com/danielsogl/awesome-cordova-plugins/issues/678)) ([bff4862](https://github.com/danielsogl/awesome-cordova-plugins/commit/bff48629796b076ba4eba7a7f6d118755b99661b))
* **http:** export via window.IonicNative ([#675](https://github.com/danielsogl/awesome-cordova-plugins/issues/675)) ([cf7abe1](https://github.com/danielsogl/awesome-cordova-plugins/commit/cf7abe110d1d7505e8fb35c459985d365c3291c7))
* **location-accuracy:** accuracy param is number ([c2d4f1c](https://github.com/danielsogl/awesome-cordova-plugins/commit/c2d4f1c0dabe1087f405eea17368337289c5a9c7)), closes [#676](https://github.com/danielsogl/awesome-cordova-plugins/issues/676)
* **themeablebrowser:** add missed options ([#680](https://github.com/danielsogl/awesome-cordova-plugins/issues/680)) ([e28e5b0](https://github.com/danielsogl/awesome-cordova-plugins/commit/e28e5b0f5f4fa82936b1d24310003022ac14a00e))



# [2.2.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.1.9...v2.2.0) (2016-10-11)


### Bug Fixes

* **native-transitions:** add missing interface properties ([35c8bbd](https://github.com/danielsogl/awesome-cordova-plugins/commit/35c8bbd49e7275aa9f002b008133b8024549ea0d))
* **onesignal:** update to match latest api ([#671](https://github.com/danielsogl/awesome-cordova-plugins/issues/671)) ([7c6e6d8](https://github.com/danielsogl/awesome-cordova-plugins/commit/7c6e6d8b6ba12554faec794df0216129015b07cf)), closes [#667](https://github.com/danielsogl/awesome-cordova-plugins/issues/667)


### Features

* **http:** add cordovaHTTP wrapper ([#674](https://github.com/danielsogl/awesome-cordova-plugins/issues/674)) ([f0961c7](https://github.com/danielsogl/awesome-cordova-plugins/commit/f0961c7b23dca97f59ea041a770277f2db5a6cd9))



## [2.1.9](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.1.7...v2.1.9) (2016-10-09)


### Bug Fixes

* **googlemaps:** fixes GoogleMapsLatLng class ([11653ce](https://github.com/danielsogl/awesome-cordova-plugins/commit/11653ce752726751540de37236c6d7c572a6785d))
* **paypal:** add optional details param to paypalpayment ([7200845](https://github.com/danielsogl/awesome-cordova-plugins/commit/720084578d282963815acd68cdadc19f9bfe1b94))
* **paypal:** problems with selection of PayPal environment ([#662](https://github.com/danielsogl/awesome-cordova-plugins/issues/662)) ([3dd6a92](https://github.com/danielsogl/awesome-cordova-plugins/commit/3dd6a92ccfa5f91c9a6331e27d0fe1841eb8305d))
* **thmeable-browser:** fix the name of the plugin ([#663](https://github.com/danielsogl/awesome-cordova-plugins/issues/663)) ([1368175](https://github.com/danielsogl/awesome-cordova-plugins/commit/13681756aef19c1b05097b2c25a9e3698118bd6f))



## [2.1.7](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.1.6...v2.1.7) (2016-10-07)


### Bug Fixes

* **paypal:** fixed currency code not found issue ([#653](https://github.com/danielsogl/awesome-cordova-plugins/issues/653)) ([598f8a9](https://github.com/danielsogl/awesome-cordova-plugins/commit/598f8a9e7c63094e8cf92666e2d5310b54f849d3))



## [2.1.6](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.1.3...v2.1.6) (2016-10-06)


### Bug Fixes

* **google-analytics:** specify successIndex and errorIndex for methods with optional params ([6f23bef](https://github.com/danielsogl/awesome-cordova-plugins/commit/6f23bef5d1fafdcfd9295529d1da8f3a80457739))
* **paypal:** fix helper classes ([f002657](https://github.com/danielsogl/awesome-cordova-plugins/commit/f0026572e73e58ab248eae4e7c2e446803797dce))



## [2.1.3](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.1.2...v2.1.3) (2016-10-06)


### Bug Fixes

* **google-analytics:** add missing methods, fix return types ([77b0277](https://github.com/danielsogl/awesome-cordova-plugins/commit/77b0277290da9a2bd3c325a91989a45d7684b1c5))
* **google-analytics:** add newSession param ([f62e108](https://github.com/danielsogl/awesome-cordova-plugins/commit/f62e1081e152bff321ac6c73f59221ea0f7e33e8))
* **google-analytics:** fix depreciated plugin reference ([40325ca](https://github.com/danielsogl/awesome-cordova-plugins/commit/40325cad9fa0dddc507bf15b6717b0b2ea688446))



## [2.1.2](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.1.0...v2.1.2) (2016-10-06)


### Bug Fixes

* **googlemaps:** add missing properties ([72a694a](https://github.com/danielsogl/awesome-cordova-plugins/commit/72a694a5e1a61d8743e742ebe7431bafd3f0ed4d)), closes [#642](https://github.com/danielsogl/awesome-cordova-plugins/issues/642)


### Features

* **zBar:** add zBar barcode scanner plugin ([#634](https://github.com/danielsogl/awesome-cordova-plugins/issues/634)) ([bbbbb3e](https://github.com/danielsogl/awesome-cordova-plugins/commit/bbbbb3e8d0040d132dfcc6de33bb3a47d8ca282f))



# [2.1.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v2.0.3...v2.1.0) (2016-10-03)


### Bug Fixes

* **calendar:** fixed modifyEventWithOptions and related interface ([80ff2f3](https://github.com/danielsogl/awesome-cordova-plugins/commit/80ff2f3bfad2bddecf442f6f6f9e4554ef9fb4dc))
* **googlemaps:** CameraPosition target can now be GoogleMapsLatLng[] ([#587](https://github.com/danielsogl/awesome-cordova-plugins/issues/587)) ([8d21f5f](https://github.com/danielsogl/awesome-cordova-plugins/commit/8d21f5f2254390e88cc048c9a08aecdb0f1f974b))
* **googlemaps:** typo in GoogleMapsTileOverlayOptions ([#589](https://github.com/danielsogl/awesome-cordova-plugins/issues/589)) ([be2c198](https://github.com/danielsogl/awesome-cordova-plugins/commit/be2c19825995854d32d40f8bfa57e3a9414aa8c4))
* **isdebug:** export IsDebug class ([#578](https://github.com/danielsogl/awesome-cordova-plugins/issues/578)) ([c573332](https://github.com/danielsogl/awesome-cordova-plugins/commit/c5733326a97cdb53899ca8a9e5dafab19b0e4094))
* **media:** add status as a parmeter instead of property of instance ([58a99a1](https://github.com/danielsogl/awesome-cordova-plugins/commit/58a99a14d50b7de24d7236e2fd2006004d87976f))
* **paypal:** fix typings, add PayPalItem and PayPalPaymentDetails ([5d13ba0](https://github.com/danielsogl/awesome-cordova-plugins/commit/5d13ba03d832eec0ff49dc0575c4b2c3f5006f21))
* **power-management:** fix repo and pluginref ([#603](https://github.com/danielsogl/awesome-cordova-plugins/issues/603)) ([d6060a9](https://github.com/danielsogl/awesome-cordova-plugins/commit/d6060a95d7be35a14f0d8b9e9c1602e7c88dadb8))
* **push:** Add support for passing notification id into finish ([#600](https://github.com/danielsogl/awesome-cordova-plugins/issues/600)) ([16f05c3](https://github.com/danielsogl/awesome-cordova-plugins/commit/16f05c3b0d7e84bf395e36567ab14d52bc42ed76))
* **social-sharing:** shareWithOptions method signature ([#598](https://github.com/danielsogl/awesome-cordova-plugins/issues/598)) ([2ed84b1](https://github.com/danielsogl/awesome-cordova-plugins/commit/2ed84b1b71394e0231fd75b95cebd765cef2c996)), closes [/github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/blob/master/src/android/nl/xservices/plugins/SocialSharing.java#L209](https://github.com//github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/blob/master/src/android/nl/xservices/plugins/SocialSharing.java/issues/L209)


### Features

* **ble:** add startScanWithOptions ([79f0a3f](https://github.com/danielsogl/awesome-cordova-plugins/commit/79f0a3fc7b34aeba6ad319b3990ff9027732652b)), closes [#539](https://github.com/danielsogl/awesome-cordova-plugins/issues/539)
* **googlemaps:** support bounds in Geocoder ([#599](https://github.com/danielsogl/awesome-cordova-plugins/issues/599)) ([66e9e46](https://github.com/danielsogl/awesome-cordova-plugins/commit/66e9e46458712640102ddcdcc284d42d02d55a27))
* **location-accuracy:** add location accuracy plugin ([#583](https://github.com/danielsogl/awesome-cordova-plugins/issues/583)) ([60b7c74](https://github.com/danielsogl/awesome-cordova-plugins/commit/60b7c7469adf9096c3deee666475562bc0da0629)), closes [#484](https://github.com/danielsogl/awesome-cordova-plugins/issues/484)
* **plugin:** add getPlugin to plugin interface. Fixes [#582](https://github.com/danielsogl/awesome-cordova-plugins/issues/582) ([d45a2b5](https://github.com/danielsogl/awesome-cordova-plugins/commit/d45a2b5407a3c1dcf10a033d61889be9a5a2635d))
* **plugin:** checkInstall w/ warning msg ([47112c7](https://github.com/danielsogl/awesome-cordova-plugins/commit/47112c7c24dce2b1462410ebf420525d54dee2bb))
* **stepcounter:** add stepcounter plugin ([#607](https://github.com/danielsogl/awesome-cordova-plugins/issues/607)) ([a99b753](https://github.com/danielsogl/awesome-cordova-plugins/commit/a99b753d2dc47b494c64a8ec0e853413f55001be))
* **themable-browser:** add ThemableBrowser plugin ([b9151bc](https://github.com/danielsogl/awesome-cordova-plugins/commit/b9151bc062bccf31c22c864190eba0a1372cabbc)), closes [#549](https://github.com/danielsogl/awesome-cordova-plugins/issues/549)
* **themable-browser:** add ThemableBrowser plugin ([972d63b](https://github.com/danielsogl/awesome-cordova-plugins/commit/972d63b2d2dfd8d51deb9469ec02be400bbf4d9e)), closes [#549](https://github.com/danielsogl/awesome-cordova-plugins/issues/549)



## [2.0.3](https://github.com/danielsogl/awesome-cordova-plugins/compare/v1.3.21...v2.0.3) (2016-09-24)


### Bug Fixes

* **call-number:** number should be a string ([763ad1b](https://github.com/danielsogl/awesome-cordova-plugins/commit/763ad1bdb0c3578993c0b2fc29fa286be38dc24f)), closes [#545](https://github.com/danielsogl/awesome-cordova-plugins/issues/545)
* **googlemaps:** CameraPosition target can now be LatLngBounds ([23fc908](https://github.com/danielsogl/awesome-cordova-plugins/commit/23fc908eb659181a46f56bf307bc3d0db27e3aaa)), closes [#547](https://github.com/danielsogl/awesome-cordova-plugins/issues/547)
* **ng1:** fail gracefully when angular 1 promises can't be retrieved ([d135dc2](https://github.com/danielsogl/awesome-cordova-plugins/commit/d135dc26e2a710daa4a692a769ba68f1392331b2))
* **npm:** duplicate typings ([e50b961](https://github.com/danielsogl/awesome-cordova-plugins/commit/e50b961bf9d6ce46e24991a7705ed6302b9642e8))
* **plugins:** export VideoPlayer. Fixes [#563](https://github.com/danielsogl/awesome-cordova-plugins/issues/563) ([4292959](https://github.com/danielsogl/awesome-cordova-plugins/commit/4292959c87e4329335e349eda72b8cd0e38168f3))
* **ts:** use old ts version for 1.3.x [#567](https://github.com/danielsogl/awesome-cordova-plugins/issues/567) ([6a19c8c](https://github.com/danielsogl/awesome-cordova-plugins/commit/6a19c8cf484f45af9d8f9b0bfb43778c416f59d5))
* **webintent:** add type param. Fixes [#564](https://github.com/danielsogl/awesome-cordova-plugins/issues/564) ([a0b6b10](https://github.com/danielsogl/awesome-cordova-plugins/commit/a0b6b1084b013fb932d7bcfe36a3f571774b9836))


### Features

* **background-geolocation:** add showAppSettings function ([281575b](https://github.com/danielsogl/awesome-cordova-plugins/commit/281575b961c6c5cc7778accf15129a78565b6540)), closes [#548](https://github.com/danielsogl/awesome-cordova-plugins/issues/548)
* **BackgroundGeolocation:** code cleanup ([3170686](https://github.com/danielsogl/awesome-cordova-plugins/commit/31706867c7a0e9ebd01829743df311b1b0749f49))
* **BackgroundGeolocation:** Update to the latest version ([808a75e](https://github.com/danielsogl/awesome-cordova-plugins/commit/808a75e41c9322de67840b725684be7fcd7de929))
* **BackgroundGeolocation:** Update to the latest version ([919e8da](https://github.com/danielsogl/awesome-cordova-plugins/commit/919e8dae30dcb3d35dbba4c6f2730d178b8f1e9d))
* **build:** Support ES2015 modules ([4014972](https://github.com/danielsogl/awesome-cordova-plugins/commit/4014972feb68e0b5abdb622f906ab97ef286b7e5))
* **emailcomposer:** use new supported plugin. [#568](https://github.com/danielsogl/awesome-cordova-plugins/issues/568) ([a092a31](https://github.com/danielsogl/awesome-cordova-plugins/commit/a092a31a1ed4c286d922f0c5089d1b4bab5d46a6))
* **localNotifications:** added register and has permission functions ([#536](https://github.com/danielsogl/awesome-cordova-plugins/issues/536)) ([c83b043](https://github.com/danielsogl/awesome-cordova-plugins/commit/c83b0437fa0c7587d20b74bf47e76de870d6be21))
* **npm:** typescript 2.0.2 ([e7e45f6](https://github.com/danielsogl/awesome-cordova-plugins/commit/e7e45f608cfea56c6983a29b59b98b6dd4634a1c))
* **plugin:** cordova function override. fixes [#437](https://github.com/danielsogl/awesome-cordova-plugins/issues/437) ([f60d08b](https://github.com/danielsogl/awesome-cordova-plugins/commit/f60d08b7a4110d7e183a36df5f0dadf412726ca5))
* **push:** add coldstart property. Fixes [#559](https://github.com/danielsogl/awesome-cordova-plugins/issues/559) ([48196da](https://github.com/danielsogl/awesome-cordova-plugins/commit/48196da28194db7b3ff50f2089304e6679939510))
* **scripts:** publish script with npm and bower. Fixes [#448](https://github.com/danielsogl/awesome-cordova-plugins/issues/448) ([3903fee](https://github.com/danielsogl/awesome-cordova-plugins/commit/3903fee2bff1e86a59acc2d378ea194b70d8296f))


### Reverts

* Revert "Bump to 2.0.0 typescript" ([2f20dea](https://github.com/danielsogl/awesome-cordova-plugins/commit/2f20deacf286eb5ae2e831352548ad78e1778817))



## [1.3.21](https://github.com/danielsogl/awesome-cordova-plugins/compare/v1.3.20...v1.3.21) (2016-09-07)


### Bug Fixes

* **base64togallery:** fixes callbacks ([#513](https://github.com/danielsogl/awesome-cordova-plugins/issues/513)) ([1db1374](https://github.com/danielsogl/awesome-cordova-plugins/commit/1db13742260c18ceff79c12852fb16fdc8b22492))
* **diagnostic:** Add DENIED_ALWAYS to permissionStatus, also some code formatting ([9d573a9](https://github.com/danielsogl/awesome-cordova-plugins/commit/9d573a92cec05922ee69db9e6b390a36e973f148))
* **diagnostic:** Fix diagnostic objects ([cb176aa](https://github.com/danielsogl/awesome-cordova-plugins/commit/cb176aae90fb3d5caea3d7cc43bb089c0fb7d5b7))
* **diagnostic:** Fix permissionStatus object ([8f3d36f](https://github.com/danielsogl/awesome-cordova-plugins/commit/8f3d36f4bc701623f649ab52b4bbd16ba171b9d5))
* **diagnostic:** Fix typo ([f93f958](https://github.com/danielsogl/awesome-cordova-plugins/commit/f93f958d66c363360b6fb813d09e638684c3761f))
* **file:** set exclusive to true when replace is false ([7910493](https://github.com/danielsogl/awesome-cordova-plugins/commit/7910493a6cbe00295bac916617e263f6e60a07a5)), closes [#516](https://github.com/danielsogl/awesome-cordova-plugins/issues/516)
* **geolocation:** retain Observable even during an error condition ([#532](https://github.com/danielsogl/awesome-cordova-plugins/issues/532)) ([26dead9](https://github.com/danielsogl/awesome-cordova-plugins/commit/26dead93ffb969d1851749a9437828630d06fa15))
* **googlemaps:** moveCamera and animateCamera now return a Promise ([d03d70f](https://github.com/danielsogl/awesome-cordova-plugins/commit/d03d70ff0b824b792665ac60bf181024183912b9)), closes [#511](https://github.com/danielsogl/awesome-cordova-plugins/issues/511)
* **install-instructions:** This fixes install instructions for deeplinks, facebook and googlemaps ([#499](https://github.com/danielsogl/awesome-cordova-plugins/issues/499)) ([877ac27](https://github.com/danielsogl/awesome-cordova-plugins/commit/877ac27868d0d96c70a21f352fe9396978d53855))
* **media:** nest the constructor logic ([a566240](https://github.com/danielsogl/awesome-cordova-plugins/commit/a566240266a077be0964c879a0e1ffea746aa9dd))
* **mixpanel:** Make eventProperties optional ([#501](https://github.com/danielsogl/awesome-cordova-plugins/issues/501)) ([51364f8](https://github.com/danielsogl/awesome-cordova-plugins/commit/51364f8edde821164778a525415258e5b4227527))
* **ng1:** grab injector from app. [#451](https://github.com/danielsogl/awesome-cordova-plugins/issues/451) ([2dc68a4](https://github.com/danielsogl/awesome-cordova-plugins/commit/2dc68a4785b7d9218a0d5bb936efd35cbb554e1b))
* remove CanvasCamera plugin ([c75f898](https://github.com/danielsogl/awesome-cordova-plugins/commit/c75f89894ae245cc239e0f6e36cb52869ec847bf))
* **social-sharing:** shareViaEmail now resolves/rejects when not providing optional args ([c76de34](https://github.com/danielsogl/awesome-cordova-plugins/commit/c76de34b9718144a76ee48919bb94bda956a1902))
* **social-sharing:** various fixes ([#520](https://github.com/danielsogl/awesome-cordova-plugins/issues/520)) ([4f97164](https://github.com/danielsogl/awesome-cordova-plugins/commit/4f9716415b17737170ba11d815d54f4a7b9067bc))


### Features

* **file:** adds chunked blob writing ([#529](https://github.com/danielsogl/awesome-cordova-plugins/issues/529)) ([bbbd0d5](https://github.com/danielsogl/awesome-cordova-plugins/commit/bbbd0d52e9944b1832c19c4c88cf86b81672fd49))
* **file:** allows writeFile and writeExistingFile to accept Blob ([#527](https://github.com/danielsogl/awesome-cordova-plugins/issues/527)) ([393e9d0](https://github.com/danielsogl/awesome-cordova-plugins/commit/393e9d0e00c3f2f41f3804abca4ca77d1bc5d41e))
* **googlemaps:** can pass HTMLElement to constructor ([dff034a](https://github.com/danielsogl/awesome-cordova-plugins/commit/dff034a5b682b200d9ba3b02d20e9aa1b6d2f215))



## [1.3.20](https://github.com/danielsogl/awesome-cordova-plugins/compare/v1.3.19...v1.3.20) (2016-08-27)


### Bug Fixes

* **GoogleMaps:** Fixes [#452](https://github.com/danielsogl/awesome-cordova-plugins/issues/452) ([#498](https://github.com/danielsogl/awesome-cordova-plugins/issues/498)) ([f6d5ac4](https://github.com/danielsogl/awesome-cordova-plugins/commit/f6d5ac46210b449a0e64825fc2c30fa84c55cfb4))


### Features

* **canvas-camera:** add CanvasCamera support ([ad57733](https://github.com/danielsogl/awesome-cordova-plugins/commit/ad57733dafd324e4cb3996ff35ac26f265869e9d))
* **file-chooser:** add file chooser plugin support ([#495](https://github.com/danielsogl/awesome-cordova-plugins/issues/495)) ([94a7dae](https://github.com/danielsogl/awesome-cordova-plugins/commit/94a7dae863f703388d493f134895bbc6fdfb0ed8))
* **file-opener:** add file opener support ([#497](https://github.com/danielsogl/awesome-cordova-plugins/issues/497)) ([21d8122](https://github.com/danielsogl/awesome-cordova-plugins/commit/21d812225725c0d67b39b8e2860bf5e0e246a367)), closes [#295](https://github.com/danielsogl/awesome-cordova-plugins/issues/295)
* **music-controls:** add music controls plugin support ([#494](https://github.com/danielsogl/awesome-cordova-plugins/issues/494)) ([4e9bc95](https://github.com/danielsogl/awesome-cordova-plugins/commit/4e9bc95fffd1c7d3921100d3cfd94ff8da6a29cf))
* **youtube:** add Youtube video player plugin support ([#496](https://github.com/danielsogl/awesome-cordova-plugins/issues/496)) ([0cf7d6a](https://github.com/danielsogl/awesome-cordova-plugins/commit/0cf7d6aca1df9ebafa45b5dc00acbd7d2fc2d063))



## [1.3.19](https://github.com/danielsogl/awesome-cordova-plugins/compare/v1.3.18...v1.3.19) (2016-08-27)


### Bug Fixes

* **mixpanel:** implement CordovaProperty correctly ([dd0c9ba](https://github.com/danielsogl/awesome-cordova-plugins/commit/dd0c9baffdf219cb737a6bbb5b1b20e39054f2a4))


### Features

* **call-number:** add support for CallNumber plugin ([#487](https://github.com/danielsogl/awesome-cordova-plugins/issues/487)) ([759f8ef](https://github.com/danielsogl/awesome-cordova-plugins/commit/759f8ef910dd9dbd593b6af9066aebca78715d16))
* **market:** add Market plugin support ([#490](https://github.com/danielsogl/awesome-cordova-plugins/issues/490)) ([9bcc4ed](https://github.com/danielsogl/awesome-cordova-plugins/commit/9bcc4ed80fa61699d035b08e31f7b80428959bac))
* **mixpanel:** add mixpanel support ([#492](https://github.com/danielsogl/awesome-cordova-plugins/issues/492)) ([cf8e342](https://github.com/danielsogl/awesome-cordova-plugins/commit/cf8e3420c03eaf01696b284713422d34f642f77c))
* **native-page-transitions:** add support for Native Page Transitions plugin ([#488](https://github.com/danielsogl/awesome-cordova-plugins/issues/488)) ([00d87db](https://github.com/danielsogl/awesome-cordova-plugins/commit/00d87dba983433e415b189c5308d303b39e205f8))
* **nfc:** add nfc support ([#493](https://github.com/danielsogl/awesome-cordova-plugins/issues/493)) ([76aa8a6](https://github.com/danielsogl/awesome-cordova-plugins/commit/76aa8a649447ee6e15d4e2cb74f139c80b971ac5)), closes [#412](https://github.com/danielsogl/awesome-cordova-plugins/issues/412)
* **paypal:** add PayPal support ([#491](https://github.com/danielsogl/awesome-cordova-plugins/issues/491)) ([9fe5c19](https://github.com/danielsogl/awesome-cordova-plugins/commit/9fe5c196aa307df117abaf302141c7485fa168e3))
* **power-management:** add power management support ([#489](https://github.com/danielsogl/awesome-cordova-plugins/issues/489)) ([cd82a53](https://github.com/danielsogl/awesome-cordova-plugins/commit/cd82a5393ec652ab911337a620c26c835feb4f79))
* **streaming-media:** add streaming media support ([#486](https://github.com/danielsogl/awesome-cordova-plugins/issues/486)) ([841b242](https://github.com/danielsogl/awesome-cordova-plugins/commit/841b242fb949a06b20ea035383750ed729e6a626))



## [1.3.18](https://github.com/danielsogl/awesome-cordova-plugins/compare/v1.3.17...v1.3.18) (2016-08-26)


### Bug Fixes

* **facebook:** export interfaces ([c4110ee](https://github.com/danielsogl/awesome-cordova-plugins/commit/c4110eedf4a588e739b976630f59add2d0fca043))
* **File:** fixed readFileAs ([#479](https://github.com/danielsogl/awesome-cordova-plugins/issues/479)) ([eff7841](https://github.com/danielsogl/awesome-cordova-plugins/commit/eff7841ec2721bb541b9781588fefb3fffaf1be8))
* **geofence:** fix event listeners ([efa222f](https://github.com/danielsogl/awesome-cordova-plugins/commit/efa222fb55cdd47cc608d0876b29afa6893a2094))


### Features

* **code-push:** add wrapper for cordova-plugin-code-push ([#420](https://github.com/danielsogl/awesome-cordova-plugins/issues/420)) ([905f988](https://github.com/danielsogl/awesome-cordova-plugins/commit/905f988d43747c076e2132ef9b0e08868c0604b9))
* **diagnostic:** add full plugin functionality ([#424](https://github.com/danielsogl/awesome-cordova-plugins/issues/424)) ([47a9b34](https://github.com/danielsogl/awesome-cordova-plugins/commit/47a9b34ea27edccf816a69ddfd7fea597c36e920)), closes [#224](https://github.com/danielsogl/awesome-cordova-plugins/issues/224) [#476](https://github.com/danielsogl/awesome-cordova-plugins/issues/476)
* **geofence:** Adds geofence plugin ([#442](https://github.com/danielsogl/awesome-cordova-plugins/issues/442)) ([a438967](https://github.com/danielsogl/awesome-cordova-plugins/commit/a438967336053abecab315c29e0fe9cd0dfe339b))
* **inAppPurchase:** add inAppPurchase ([f1988f6](https://github.com/danielsogl/awesome-cordova-plugins/commit/f1988f67f53be0e4a32b046e1553131ca48c64c6))
* **inAppPurchase:** add inAppPurhcase plugin ([#423](https://github.com/danielsogl/awesome-cordova-plugins/issues/423)) ([8526e89](https://github.com/danielsogl/awesome-cordova-plugins/commit/8526e89e12a425ad17c51b40cae166682c73bcec))
* **IsDebug:** add the IsDebug plugin ([#475](https://github.com/danielsogl/awesome-cordova-plugins/issues/475)) ([dd39ba8](https://github.com/danielsogl/awesome-cordova-plugins/commit/dd39ba8c485557f39191d3d7f885cc8cde4d8ad9))



## [1.3.17](https://github.com/danielsogl/awesome-cordova-plugins/compare/v1.3.16...v1.3.17) (2016-08-23)


### Bug Fixes

* add the reject function at the expected errorIndex position in the args array ([#436](https://github.com/danielsogl/awesome-cordova-plugins/issues/436)) ([4e87ac7](https://github.com/danielsogl/awesome-cordova-plugins/commit/4e87ac72eabfe4da38124b9025d4b71325999855))
* **camera-preview:** changes implementation to match Cordova plugin ([#441](https://github.com/danielsogl/awesome-cordova-plugins/issues/441)) ([55ba65a](https://github.com/danielsogl/awesome-cordova-plugins/commit/55ba65ac684c59e224d5fd857593962a83dec5c5))
* **file:** fixes exclusive option ([#459](https://github.com/danielsogl/awesome-cordova-plugins/issues/459)) ([14e41a3](https://github.com/danielsogl/awesome-cordova-plugins/commit/14e41a31ef043b94e5404939de6cd279b03b68ab))
* **file:** initialize writeFile options ([#468](https://github.com/danielsogl/awesome-cordova-plugins/issues/468)) ([16628a4](https://github.com/danielsogl/awesome-cordova-plugins/commit/16628a49f7ee1304b136db6796d10234c79a37d7))
* **nativeaudio:** fix plugin reference ([2510c5f](https://github.com/danielsogl/awesome-cordova-plugins/commit/2510c5fd4aacd5d4b088a947d29a8458ad8c8ff7))


### Features

* **instagram:** add instagram sharing plugin ([#453](https://github.com/danielsogl/awesome-cordova-plugins/issues/453)) ([f3e698f](https://github.com/danielsogl/awesome-cordova-plugins/commit/f3e698f1bec6da76d6b29a1a9d2b61a9f5dbf056)), closes [#307](https://github.com/danielsogl/awesome-cordova-plugins/issues/307)
* **VideoEditor:** add video editor plugin. ([#457](https://github.com/danielsogl/awesome-cordova-plugins/issues/457)) ([7a53013](https://github.com/danielsogl/awesome-cordova-plugins/commit/7a5301381924fba99f0fd9b71b06a51b0fd2de67)), closes [#316](https://github.com/danielsogl/awesome-cordova-plugins/issues/316)



## [1.3.16](https://github.com/danielsogl/awesome-cordova-plugins/compare/v1.3.15...v1.3.16) (2016-08-15)


### Bug Fixes

* **photo-viewer:** method is static ([8bc499f](https://github.com/danielsogl/awesome-cordova-plugins/commit/8bc499f221fdfb7fb7d23bb93517e6561d330939))



## [1.3.15](https://github.com/danielsogl/awesome-cordova-plugins/compare/v1.3.14...v1.3.15) (2016-08-15)


### Features

* **google-analytics:** add missing functions ([689bfd9](https://github.com/danielsogl/awesome-cordova-plugins/commit/689bfd9568ce8c850dd44820df8d4b1096a47e1d))
* **TTS:** add tts plugin ([#431](https://github.com/danielsogl/awesome-cordova-plugins/issues/431)) ([dcf3ab2](https://github.com/danielsogl/awesome-cordova-plugins/commit/dcf3ab27871e8ebaec393f2ad183ffb6024b77f3)), closes [#311](https://github.com/danielsogl/awesome-cordova-plugins/issues/311)



## [1.3.14](https://github.com/danielsogl/awesome-cordova-plugins/compare/v1.3.12...v1.3.14) (2016-08-15)


### Bug Fixes

* **datepicker:** date now accepts Date, string, or number ([#428](https://github.com/danielsogl/awesome-cordova-plugins/issues/428)) ([aaddd9e](https://github.com/danielsogl/awesome-cordova-plugins/commit/aaddd9eea28de508b154ecab7e5aecca913f6c21)), closes [#354](https://github.com/danielsogl/awesome-cordova-plugins/issues/354)
* **inappbrowser:** fix event listener ([4b08d85](https://github.com/danielsogl/awesome-cordova-plugins/commit/4b08d854bdd3951e11be4b84ec57b5e01c3bbe82))


### Features

* **native-audio:** Add native audio plugin ([#427](https://github.com/danielsogl/awesome-cordova-plugins/issues/427)) ([8cd6686](https://github.com/danielsogl/awesome-cordova-plugins/commit/8cd6686803603c2beb79d7b227ffd9c6cf87cce1)), closes [#315](https://github.com/danielsogl/awesome-cordova-plugins/issues/315)
* **shake:** add Shake plugin ([#426](https://github.com/danielsogl/awesome-cordova-plugins/issues/426)) ([203d4c7](https://github.com/danielsogl/awesome-cordova-plugins/commit/203d4c76692ea4db95f202c53aa6cb2072954dc8)), closes [#313](https://github.com/danielsogl/awesome-cordova-plugins/issues/313)
* **zip:** add zip plugin ([#430](https://github.com/danielsogl/awesome-cordova-plugins/issues/430)) ([e34f94e](https://github.com/danielsogl/awesome-cordova-plugins/commit/e34f94e0c1f1e6a8e26f5bfd743b6de76c040e72)), closes [#421](https://github.com/danielsogl/awesome-cordova-plugins/issues/421)



## [1.3.12](https://github.com/danielsogl/awesome-cordova-plugins/compare/v1.3.11...v1.3.12) (2016-08-13)


### Bug Fixes

* **inappbrowser:** fix event listener ([618d866](https://github.com/danielsogl/awesome-cordova-plugins/commit/618d866bfe2f838194e0c51381ef4f3decd217b4))



## [1.3.11](https://github.com/danielsogl/awesome-cordova-plugins/compare/v1.3.10...v1.3.11) (2016-08-11)


### Bug Fixes

* **backgroundGeolocation:** update config and move to sync. Fixes [#331](https://github.com/danielsogl/awesome-cordova-plugins/issues/331) ([4e20681](https://github.com/danielsogl/awesome-cordova-plugins/commit/4e206812f0af2982b280e645de63934188b308a5))
* **camera:** camera options should be optional. Fixes [#413](https://github.com/danielsogl/awesome-cordova-plugins/issues/413) ([#417](https://github.com/danielsogl/awesome-cordova-plugins/issues/417)) ([c60c3b7](https://github.com/danielsogl/awesome-cordova-plugins/commit/c60c3b767143d18bdb445d57102dcd2126de44b8))
* **index:** export Geolocation interfaces. ([#404](https://github.com/danielsogl/awesome-cordova-plugins/issues/404)) ([0c486b0](https://github.com/danielsogl/awesome-cordova-plugins/commit/0c486b09657c92823dd3abfa39fa67a5a1754f32))
* **ng1:** Copy object properly. Fixes [#357](https://github.com/danielsogl/awesome-cordova-plugins/issues/357) ([9ca38cd](https://github.com/danielsogl/awesome-cordova-plugins/commit/9ca38cd8a11e27322a1a061e00d23a10ae4e8f2b))


### Features

* **file:** alternate file implementation ([#283](https://github.com/danielsogl/awesome-cordova-plugins/issues/283)) ([6ed32ef](https://github.com/danielsogl/awesome-cordova-plugins/commit/6ed32efe2759fafb75dcd80856a29b4f70343ffc))
* **GoogleAnalytics:** Add campaign measurement tracking ([#405](https://github.com/danielsogl/awesome-cordova-plugins/issues/405)) ([cf3f0f6](https://github.com/danielsogl/awesome-cordova-plugins/commit/cf3f0f63c31c65a41e9cdf08d4029283fabfd907))
* **GoogleMaps:** Allow specify enableHighAccuracy option that attempt to get your location with highest accuracy ([#410](https://github.com/danielsogl/awesome-cordova-plugins/issues/410)) ([43e8a6d](https://github.com/danielsogl/awesome-cordova-plugins/commit/43e8a6d3d2333224a552fd1496c09236fe7b9b1b))
* **ibeacon:** using option otherPromise instead of sync ([#388](https://github.com/danielsogl/awesome-cordova-plugins/issues/388)) ([306cb5d](https://github.com/danielsogl/awesome-cordova-plugins/commit/306cb5d2a3acaa6381aefae0757523fab0595315))
* **inappbrowser:** implement instance based wrapper ([#305](https://github.com/danielsogl/awesome-cordova-plugins/issues/305)) ([4b8ab4a](https://github.com/danielsogl/awesome-cordova-plugins/commit/4b8ab4a00f92aae9a476fc66597588d3a36faa8e))
* **keyboard:** enable hideKeyboardAccessoryBar function ([#398](https://github.com/danielsogl/awesome-cordova-plugins/issues/398)) ([7a84262](https://github.com/danielsogl/awesome-cordova-plugins/commit/7a84262feeb02ec976d8ad2e2f2a7ffbd4429548)), closes [#394](https://github.com/danielsogl/awesome-cordova-plugins/issues/394)
* **photo-viewer:** add wrapper for plugin ([#359](https://github.com/danielsogl/awesome-cordova-plugins/issues/359)) ([154c029](https://github.com/danielsogl/awesome-cordova-plugins/commit/154c029f79ef6768452fdfbdd52e47e9cb81c37c))
* **video-player:** Added video player plugin ([#391](https://github.com/danielsogl/awesome-cordova-plugins/issues/391)) ([cabeeb8](https://github.com/danielsogl/awesome-cordova-plugins/commit/cabeeb8dabfdd0a545734d293a840f4cd05e7f46)), closes [#342](https://github.com/danielsogl/awesome-cordova-plugins/issues/342) [#318](https://github.com/danielsogl/awesome-cordova-plugins/issues/318)



## [1.3.10](https://github.com/danielsogl/awesome-cordova-plugins/compare/v1.3.9...v1.3.10) (2016-08-01)


### Bug Fixes

* **brightness:** use correct pluginRef ([e20c411](https://github.com/danielsogl/awesome-cordova-plugins/commit/e20c411dffc3c80d405ecce34339ab73cc890583))
* **diagnostics:** Corrects isEnabled functions to isAvailable ([#373](https://github.com/danielsogl/awesome-cordova-plugins/issues/373)) ([ccf7fb5](https://github.com/danielsogl/awesome-cordova-plugins/commit/ccf7fb56c8d87c82bb56c2c80bf44a5ed9fd380b))
* **ng1:** use $q  promises instead of the native Promise ([#378](https://github.com/danielsogl/awesome-cordova-plugins/issues/378)) ([817a434](https://github.com/danielsogl/awesome-cordova-plugins/commit/817a4340e76233f4e8953880acd991f6126ea5a0))
* **one-signal:** return Observable instead of promise ([#352](https://github.com/danielsogl/awesome-cordova-plugins/issues/352)) ([08fe04e](https://github.com/danielsogl/awesome-cordova-plugins/commit/08fe04e87eada6f416ce2909b8e79776eb7825a8))


### Features

* **crop:** add crop plugin ([#284](https://github.com/danielsogl/awesome-cordova-plugins/issues/284)) ([41c9adf](https://github.com/danielsogl/awesome-cordova-plugins/commit/41c9adf55a4229a0ff6d6912965cbc815dfc8c5f))
* **screen-orientation:** Added Screen Orientation Plugin [#342](https://github.com/danielsogl/awesome-cordova-plugins/issues/342) ([#366](https://github.com/danielsogl/awesome-cordova-plugins/issues/366)) ([bd9366b](https://github.com/danielsogl/awesome-cordova-plugins/commit/bd9366bdfee947b63f15722a46e9087c8a4bc5ac))



## [1.3.9](https://github.com/danielsogl/awesome-cordova-plugins/compare/v1.3.8...v1.3.9) (2016-07-23)


### Bug Fixes

* **file:** readAsText() and adds readAsDataURL() in File plugin ([#346](https://github.com/danielsogl/awesome-cordova-plugins/issues/346)) ([77d31cd](https://github.com/danielsogl/awesome-cordova-plugins/commit/77d31cdf42009ea3523d355b74e97dffcb42ff52))


### Features

* **android-fingerprint-auth:** add wrapper for plugin ([df326f7](https://github.com/danielsogl/awesome-cordova-plugins/commit/df326f773fcbe96ee7aec78ab3d1fa96aa7f9e34)), closes [#334](https://github.com/danielsogl/awesome-cordova-plugins/issues/334)
* **secure-storage:** Add Secure Storage Wrapper ([#347](https://github.com/danielsogl/awesome-cordova-plugins/issues/347)) ([075842d](https://github.com/danielsogl/awesome-cordova-plugins/commit/075842d69d3722c4d64d01a2f8077251917c006a))



## [1.3.8](https://github.com/danielsogl/awesome-cordova-plugins/compare/v1.3.7...v1.3.8) (2016-07-20)


### Bug Fixes

* **base64togallery:** update plugin wrapper to match latest version ([d4bee49](https://github.com/danielsogl/awesome-cordova-plugins/commit/d4bee49678cc1bf2ea9771f8800555fd4442dca9)), closes [#335](https://github.com/danielsogl/awesome-cordova-plugins/issues/335)
* **sqlite:** fix method attribute typo ([#324](https://github.com/danielsogl/awesome-cordova-plugins/issues/324)) ([006bc70](https://github.com/danielsogl/awesome-cordova-plugins/commit/006bc70387afb9677e5bbc4be5c13dc8830cfc1e))


### Features

* **facebook:** add FacebookLoginResponse interface ([8b27bed](https://github.com/danielsogl/awesome-cordova-plugins/commit/8b27bed4df9754c0cd775ca62fb82a0df34ffc6a))
* **otherPromise:** can work better with plugins that return promises ([#304](https://github.com/danielsogl/awesome-cordova-plugins/issues/304)) ([0aee6c8](https://github.com/danielsogl/awesome-cordova-plugins/commit/0aee6c88cea499f762bd84ab3bce0572d98984c5))
* **social-sharing:** add canShareViaEmail ([#333](https://github.com/danielsogl/awesome-cordova-plugins/issues/333)) ([5807dd7](https://github.com/danielsogl/awesome-cordova-plugins/commit/5807dd7f09d9b94b80b9cfc8a0fc03caff365338))
* **twitter-connect:** add twitter connect plugin ([979838f](https://github.com/danielsogl/awesome-cordova-plugins/commit/979838f4b7a24c441445b363daf798923568ce37)), closes [#308](https://github.com/danielsogl/awesome-cordova-plugins/issues/308)



## [1.3.7](https://github.com/danielsogl/awesome-cordova-plugins/compare/v1.3.6...v1.3.7) (2016-07-18)


### Bug Fixes

* **contacts:** missing name property, types ([#320](https://github.com/danielsogl/awesome-cordova-plugins/issues/320)) ([074d166](https://github.com/danielsogl/awesome-cordova-plugins/commit/074d16605d609e8d6adbbe26d46244d4ae0a0ae2))
* **geolocation:** handle errors on watchPosition ([1b161d8](https://github.com/danielsogl/awesome-cordova-plugins/commit/1b161d8c9e8155bb88983ea9a82f4063386a6d0b)), closes [#322](https://github.com/danielsogl/awesome-cordova-plugins/issues/322)


### Features

* **sim:** Add sim plugin ([#317](https://github.com/danielsogl/awesome-cordova-plugins/issues/317)) ([4f85110](https://github.com/danielsogl/awesome-cordova-plugins/commit/4f85110f7521e0e97c3824da8d29e41bdbc510a0))



## [1.3.6](https://github.com/danielsogl/awesome-cordova-plugins/compare/v1.3.5...v1.3.6) (2016-07-17)


### Bug Fixes

* **googlemaps:** able to pass array of LatLng to GoogleMapsLatLngBounds constructor ([de14b0e](https://github.com/danielsogl/awesome-cordova-plugins/commit/de14b0ea150572d1ade768bfb3c99a0ec1071bee)), closes [#298](https://github.com/danielsogl/awesome-cordova-plugins/issues/298)
* **launch-navigator:** fix the navigate function wrapper to match latest plugin API ([6f625f9](https://github.com/danielsogl/awesome-cordova-plugins/commit/6f625f92227512ef30e8f49066b8f376bce4e2a6))


### Features

* **camera-preview:** add wrapper for camera-preview ([#301](https://github.com/danielsogl/awesome-cordova-plugins/issues/301)) ([3a1a3ce](https://github.com/danielsogl/awesome-cordova-plugins/commit/3a1a3ceabc8997b1299b3b4623831d9eadac0fac))
* **launch-navigator:** add new methods and constants to match latest plugin API ([29de6b3](https://github.com/danielsogl/awesome-cordova-plugins/commit/29de6b394e34aa9e9d87bb8bcce6b8cbc98bb4c8))



## [1.3.5](https://github.com/danielsogl/awesome-cordova-plugins/compare/v1.3.4...v1.3.5) (2016-07-17)


### Bug Fixes

* **ibeacon:** minor fixes ([b5a2ffc](https://github.com/danielsogl/awesome-cordova-plugins/commit/b5a2ffc6a53b6623e4e8aed11171e40140500598))
* **safari-view-controller:** fix wrappers ([b4b3ec0](https://github.com/danielsogl/awesome-cordova-plugins/commit/b4b3ec0d2a359effd51ffac8a5a427d5e6222db5))


### Features

* **googlemaps:** add Geocoder class ([#292](https://github.com/danielsogl/awesome-cordova-plugins/issues/292)) ([2996da6](https://github.com/danielsogl/awesome-cordova-plugins/commit/2996da65c337deb135f99058a8b6b90e0798f9e3)), closes [#280](https://github.com/danielsogl/awesome-cordova-plugins/issues/280)
* **media-capture:** add media capture plugin ([#293](https://github.com/danielsogl/awesome-cordova-plugins/issues/293)) ([daa6d4c](https://github.com/danielsogl/awesome-cordova-plugins/commit/daa6d4cbb9220a5924ccb0b479bc319e9b98a17e)), closes [#272](https://github.com/danielsogl/awesome-cordova-plugins/issues/272)
* **nativestorage:** add NativeStorage plugin wrapper ([af5d4ad](https://github.com/danielsogl/awesome-cordova-plugins/commit/af5d4ad87f678fbae3fb2157e2c210f86eb01cab))
* **pin-dialog:** add pin dialog plugin ([#291](https://github.com/danielsogl/awesome-cordova-plugins/issues/291)) ([2fe37c4](https://github.com/danielsogl/awesome-cordova-plugins/commit/2fe37c461cf209bd595aee3aefe40cc7c3caa7d4))



## [1.3.4](https://github.com/danielsogl/awesome-cordova-plugins/compare/v1.3.3...v1.3.4) (2016-07-14)


### Bug Fixes

* **touchid:** make isAvailable static ([c23f5e9](https://github.com/danielsogl/awesome-cordova-plugins/commit/c23f5e90dc75176f6043f305c2b72d018ebd4c71))


### Reverts

* **changelog:** old changelog ([0cb79d1](https://github.com/danielsogl/awesome-cordova-plugins/commit/0cb79d1cd163a6d9b774145c0e546603a80b5683))



## [1.3.3](https://github.com/danielsogl/awesome-cordova-plugins/compare/v1.3.2...v1.3.3) (2016-07-11)


### Bug Fixes

* **actionsheet:** add missing optional parameter for hide function ([#262](https://github.com/danielsogl/awesome-cordova-plugins/issues/262)) ([644e999](https://github.com/danielsogl/awesome-cordova-plugins/commit/644e999d1e7906caf5d2adb761a842c68024d7e3))
* **background-geolocation:** fix pluginref again ([b8a5133](https://github.com/danielsogl/awesome-cordova-plugins/commit/b8a513301ea9e58691f98ae27e0d89e7e9b1eacd))
* **geolocation:** fix plugin reference ([4f0cd24](https://github.com/danielsogl/awesome-cordova-plugins/commit/4f0cd244765518b88c472fe22a366411fa8a4217)), closes [#258](https://github.com/danielsogl/awesome-cordova-plugins/issues/258)
* **googlemaps:** use correct methods for addGroundOverlay and addKmlOverlay ([#268](https://github.com/danielsogl/awesome-cordova-plugins/issues/268)) ([b8be1de](https://github.com/danielsogl/awesome-cordova-plugins/commit/b8be1de06843b839885a6fcb95d99e63fa7a6029))
* remove unnecessary decorator ([#257](https://github.com/danielsogl/awesome-cordova-plugins/issues/257)) ([25fab64](https://github.com/danielsogl/awesome-cordova-plugins/commit/25fab64e3fffb086dc73478e8e58bdb8b637d08e))
* **socialsharing:** all methods return Promises now ([e150224](https://github.com/danielsogl/awesome-cordova-plugins/commit/e150224cda22815abf23b254309469c5038e43c5)), closes [#275](https://github.com/danielsogl/awesome-cordova-plugins/issues/275)


### Features

* **ibeacon:** add iBeacon plugin support ([#270](https://github.com/danielsogl/awesome-cordova-plugins/issues/270)) ([dd97df1](https://github.com/danielsogl/awesome-cordova-plugins/commit/dd97df19fe9a92879c63458348939eb1fb644adc))
* **onesignal:** added wrapper for the Cordova OneSignal Plugin ([#252](https://github.com/danielsogl/awesome-cordova-plugins/issues/252)) ([ba20dbe](https://github.com/danielsogl/awesome-cordova-plugins/commit/ba20dbe5902ec125e519816c7a738860302be2b9))
* **push:** added support for Action Buttons on iOS with categories ([#273](https://github.com/danielsogl/awesome-cordova-plugins/issues/273)) ([592feb4](https://github.com/danielsogl/awesome-cordova-plugins/commit/592feb409e453887f841e981a2dc18493da7f84f))



## [1.3.2](https://github.com/danielsogl/awesome-cordova-plugins/compare/v1.3.1...v1.3.2) (2016-06-27)


### Bug Fixes

* **build:** disable emitDecoratorMetadata option in tsconfig ([a5f3d7a](https://github.com/danielsogl/awesome-cordova-plugins/commit/a5f3d7a9bd190c23fab8f62451315d7be92a0c32)), closes [#251](https://github.com/danielsogl/awesome-cordova-plugins/issues/251)



## [1.3.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v1.3.0...v1.3.1) (2016-06-26)


### Bug Fixes

* **3dtouch:** fix implementation for onHomeIconPressed function ([d2b2be6](https://github.com/danielsogl/awesome-cordova-plugins/commit/d2b2be6a70272fb015e74e8a859355cc0767ddab)), closes [#232](https://github.com/danielsogl/awesome-cordova-plugins/issues/232)
* **sqlite:** resolve race condition, add comments ([#235](https://github.com/danielsogl/awesome-cordova-plugins/issues/235)) ([f1c8ce3](https://github.com/danielsogl/awesome-cordova-plugins/commit/f1c8ce35e85d9ddebf7288e9c1abb5e70811d23d))


### Features

* **googlemaps:** add GoogleMapsLatLngBounds class ([17da427](https://github.com/danielsogl/awesome-cordova-plugins/commit/17da427a9d52e55f1c1730599b2b5d01be68d403))
* **printer:** add printer plugin ([#225](https://github.com/danielsogl/awesome-cordova-plugins/issues/225)) ([48ffcae](https://github.com/danielsogl/awesome-cordova-plugins/commit/48ffcaeb61088b7c86f5ebb001d7de74d9e94a08))



# [1.3.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v1.2.3...v1.3.0) (2016-06-13)


### Bug Fixes

* **barcodescanner:** add missing options param ([4fdcbb5](https://github.com/danielsogl/awesome-cordova-plugins/commit/4fdcbb57263f282b45b837060b1d04fe2f68d7d4)), closes [#180](https://github.com/danielsogl/awesome-cordova-plugins/issues/180)
* **base64togallery:** method is now static ([be7b9e2](https://github.com/danielsogl/awesome-cordova-plugins/commit/be7b9e2192dc698137b4d68110f30d48dafce97c)), closes [#212](https://github.com/danielsogl/awesome-cordova-plugins/issues/212)
* **batterystatus:** correct plugin name on npm ([66b7fa6](https://github.com/danielsogl/awesome-cordova-plugins/commit/66b7fa63128f92963dfe3fc76120da81b0b8ea76))
* **calendar:** fix some functionality and add missing ones ([a15fb01](https://github.com/danielsogl/awesome-cordova-plugins/commit/a15fb01a540b6516b26ebeb20979cf5a675474e5)), closes [#184](https://github.com/danielsogl/awesome-cordova-plugins/issues/184)
* **contacts:** plugin rewrite ([aada893](https://github.com/danielsogl/awesome-cordova-plugins/commit/aada893f09557e94c72d89167460d10742bb8586))
* **deeplinks:** new result type ([11226d7](https://github.com/danielsogl/awesome-cordova-plugins/commit/11226d7d51c2e4497985a57854b191fca6bf2da6))
* **deviceorientation:** cancelFunction renamed to clearFunction ([8dee02e](https://github.com/danielsogl/awesome-cordova-plugins/commit/8dee02e234d3927cad0eef7f1fad1b07466d89bf))
* **geolocation:** fix watchPosition() ([4a8650e](https://github.com/danielsogl/awesome-cordova-plugins/commit/4a8650e45e99f5dc2b82e43e871f71703c5db9fd)), closes [#164](https://github.com/danielsogl/awesome-cordova-plugins/issues/164)
* **googlemaps:** isAvailable() returns boolean, not an instance of GoogleMap ([a53ae8f](https://github.com/danielsogl/awesome-cordova-plugins/commit/a53ae8f257c1ffb8adb32e7205833a0e9c2aa882))


### Features

* **angular1:** Support Angular 1 ([af8fbde](https://github.com/danielsogl/awesome-cordova-plugins/commit/af8fbde892651905fe7538669e3e3b4ac5886442))
* **barcodescanner:** add encode function ([e73f57f](https://github.com/danielsogl/awesome-cordova-plugins/commit/e73f57f190922b9c0b1487f91632bb23792f8c5b)), closes [#115](https://github.com/danielsogl/awesome-cordova-plugins/issues/115)
* **deeplinks:** Add Ionic Deeplinks Plugin ([c93cbed](https://github.com/danielsogl/awesome-cordova-plugins/commit/c93cbed9d2c60b9c311d01be38f82e2ecc3f1543))



## [1.2.3](https://github.com/danielsogl/awesome-cordova-plugins/compare/v1.2.2...v1.2.3) (2016-06-01)



## [1.2.2](https://github.com/danielsogl/awesome-cordova-plugins/compare/v1.2.1...v1.2.2) (2016-05-20)


### Bug Fixes

* **Bluetooth:** make connect function an observable to maintain full functionality ([58e3f0b](https://github.com/danielsogl/awesome-cordova-plugins/commit/58e3f0bbb9a6f8a0b219dc6ff599633d0692fd1f)), closes [#154](https://github.com/danielsogl/awesome-cordova-plugins/issues/154)
* **calendar:** add new permissions functions for Android 6 (M) devices ([ddbd64d](https://github.com/danielsogl/awesome-cordova-plugins/commit/ddbd64d19a3bb1ae475157c936fb9399e6e7ac19)), closes [#156](https://github.com/danielsogl/awesome-cordova-plugins/issues/156)
* **emailcomposer:** fix isAvailable function ([2a568d2](https://github.com/danielsogl/awesome-cordova-plugins/commit/2a568d2398c3c5ec4d4b1f4db305f795024f71e0)), closes [#168](https://github.com/danielsogl/awesome-cordova-plugins/issues/168)



## [1.2.1](https://github.com/danielsogl/awesome-cordova-plugins/compare/v1.2.0...v1.2.1) (2016-05-11)


### Features

* **plugin:** add wrapper for instance properties ([28d7d5c](https://github.com/danielsogl/awesome-cordova-plugins/commit/28d7d5ceec2564386e6c63f2aa6e127af9bd6911))



# [1.2.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v1.1.0...v1.2.0) (2016-04-30)


### Bug Fixes

* **BluetoohSerial:** add missing plugin reference ([317437b](https://github.com/danielsogl/awesome-cordova-plugins/commit/317437b32e156423535893b7181db235e50345ac))
* **GoogleAnalytics:** addCustomDimension() key param is number ([3865ea4](https://github.com/danielsogl/awesome-cordova-plugins/commit/3865ea47773b35a257e6d60b74857fb009ccaa0d)), closes [#131](https://github.com/danielsogl/awesome-cordova-plugins/issues/131)
* **keyboard:** remove hideKeyboardAccessoryBar method for now ([292c80c](https://github.com/danielsogl/awesome-cordova-plugins/commit/292c80c73523550d22becda2872d8f8c56d62143))
* **launchnavigator:** bug fix ([4ead1ae](https://github.com/danielsogl/awesome-cordova-plugins/commit/4ead1ae0231b9d73bfc4df4e8338aee6f6a05f37))
* **launchnavigator:** start parameter is optional ([5e7378a](https://github.com/danielsogl/awesome-cordova-plugins/commit/5e7378a60d7264a8f75c18838ad05be50ddeb0ae))
* **localnotifications:** options can be an array ([e10d744](https://github.com/danielsogl/awesome-cordova-plugins/commit/e10d744e7ba82b287ff25acd663b02bc6b796005))
* **plugin:** handle rejection when Cordova is undefined ([db07768](https://github.com/danielsogl/awesome-cordova-plugins/commit/db07768133a26df00e0025fb68f327689a7c0cc9))
* **plugin:** remove unecessary code ([4070991](https://github.com/danielsogl/awesome-cordova-plugins/commit/4070991f677e31617f72c8f19ca3f72c73f63e31))
* **push plugin:** senderId is optional in iosPushOptions ([48bf837](https://github.com/danielsogl/awesome-cordova-plugins/commit/48bf837e32e8c4b5e9c0a0ec6f39726931e1a70f))
* **spinnerdialog:** fix functionality ([66f0e03](https://github.com/danielsogl/awesome-cordova-plugins/commit/66f0e03aefeab684bd10034dd6e0d2c29b5e361b))
* **vibration:** fix plugin reference ([beeb075](https://github.com/danielsogl/awesome-cordova-plugins/commit/beeb0758311a8ae4856a595d5a5cdd1bf515394c)), closes [#106](https://github.com/danielsogl/awesome-cordova-plugins/issues/106)


### Features

* **camera:** add camera constants ([ce02d82](https://github.com/danielsogl/awesome-cordova-plugins/commit/ce02d8219c082f023277dba782f32e7510427d13)), closes [#129](https://github.com/danielsogl/awesome-cordova-plugins/issues/129)
* **ionicnative:** add instance wrapper ([0ec737a](https://github.com/danielsogl/awesome-cordova-plugins/commit/0ec737aa490b598b6d915c71a35f65788fdfbb15))
* **keyboard:** add event listeners for keyboard show/hide events ([c947437](https://github.com/danielsogl/awesome-cordova-plugins/commit/c9474376101116c414a48846af0360a953fabff0))
* **media:** add media plugin ([1105b57](https://github.com/danielsogl/awesome-cordova-plugins/commit/1105b5723bc9dd72ae4c276569e2fb068df863b6)), closes [#88](https://github.com/danielsogl/awesome-cordova-plugins/issues/88)
* **plugin:** add admob pro plugin ([d9b847b](https://github.com/danielsogl/awesome-cordova-plugins/commit/d9b847b3cb6a7d400f37a3f3d7c69355b42d59a7)), closes [#146](https://github.com/danielsogl/awesome-cordova-plugins/issues/146)
* **plugin:** add Bluetooth Serial plugin ([837fb95](https://github.com/danielsogl/awesome-cordova-plugins/commit/837fb95a8af911567b89c68c93ce302043479681)), closes [#136](https://github.com/danielsogl/awesome-cordova-plugins/issues/136)
* **plugin:** add email composer plugin ([804c9ee](https://github.com/danielsogl/awesome-cordova-plugins/commit/804c9ee4634976e059c7b2e3cdd5b4817766a29c))
* **plugin:** add InAppBrowser plugin ([b8d2cfd](https://github.com/danielsogl/awesome-cordova-plugins/commit/b8d2cfdd9df8f482a36167102234deb2818b0971))
* **plugin:** add social sharing plugin ([efc8231](https://github.com/danielsogl/awesome-cordova-plugins/commit/efc8231ab63adaeffe705faa25aaa31c65141f04))
* **plugin:** add spinner dialog plugin ([812653c](https://github.com/danielsogl/awesome-cordova-plugins/commit/812653ccd7c3dff594109ce35be5d0b5fd3e1cd7))
* **plugin:** add web intent plugin ([e2fc9a0](https://github.com/danielsogl/awesome-cordova-plugins/commit/e2fc9a04320c07655a36cb2e2a28ab6be37d4e95))
* **toast:** add new features to toast plugin ([ed7e783](https://github.com/danielsogl/awesome-cordova-plugins/commit/ed7e783693e20ca169428a7577dfaa55c28c6fc0))
* **webintent:** add plugin to index ([f357b56](https://github.com/danielsogl/awesome-cordova-plugins/commit/f357b56886ecfd5867ac8aa4ddcc4d22f4eb1383))


### Performance Improvements

* **ionicnative:** instance wrapper cleanup and optimization ([5a8d48e](https://github.com/danielsogl/awesome-cordova-plugins/commit/5a8d48ea3620cf8ee48ab663d3d9a49f1044c084))



# [1.1.0](https://github.com/danielsogl/awesome-cordova-plugins/compare/v1.0.9...v1.1.0) (2016-03-17)


### Bug Fixes

* added dummy boolean ([2caa151](https://github.com/danielsogl/awesome-cordova-plugins/commit/2caa1516ab6f52da212dded63ccfd3c1b67588c4))
* datepicker plugin, pluginref, and @Cordova wrapper ([499ead3](https://github.com/danielsogl/awesome-cordova-plugins/commit/499ead3aae5df2de29da1eccfb6d663ee3d9f418))
* **datepicker:** datepicker options are optional ([c3cfd14](https://github.com/danielsogl/awesome-cordova-plugins/commit/c3cfd14c5e15a6bef546e00500a2cba91777f515))
* **datepicker:** dates are Dates ([ce6adcc](https://github.com/danielsogl/awesome-cordova-plugins/commit/ce6adccb9a2c95b772f63790c959b8dcb16ef875))
* **datepicker:** fix plugin functionality ([1a778e7](https://github.com/danielsogl/awesome-cordova-plugins/commit/1a778e7f10ff383eabf32495845d12c07530a373))
* **datepicker:** fix plugin functionality ([91de971](https://github.com/danielsogl/awesome-cordova-plugins/commit/91de9715fed2bbaa8ac0889689ee30e74187cd4e))
* **devicemotion:** combine watch and clear into one function ([d17f62d](https://github.com/danielsogl/awesome-cordova-plugins/commit/d17f62d82f29528ccbafc00ed2d38c6e0e3462ed))
* fix callback order ([5fda6d4](https://github.com/danielsogl/awesome-cordova-plugins/commit/5fda6d49cc6ccb6be3772522b356bc87ec957fad))
* fix callback order ([5944bd1](https://github.com/danielsogl/awesome-cordova-plugins/commit/5944bd13d31bc137457496ac0e604eefbb4529a0))
* fix options params ([c71f8d4](https://github.com/danielsogl/awesome-cordova-plugins/commit/c71f8d49e1dace06dd60855c2b53f40be7fe4e17))
* **geolocation:** set callback order to reverse on getCurrentPosition ([1fac387](https://github.com/danielsogl/awesome-cordova-plugins/commit/1fac3873841488cf519c83bd469983e81a3e818a))
* **imagepicker:** pluginRef ([01d7972](https://github.com/danielsogl/awesome-cordova-plugins/commit/01d797261b411c317d5d06a8d0da779bafec1287))
* **interface:** params are optional ([e708bc6](https://github.com/danielsogl/awesome-cordova-plugins/commit/e708bc6be71a3d82f2395db63c728d7c9742a913))
* **launchnavigator:** fix Plugin decorator property value ([9e17e25](https://github.com/danielsogl/awesome-cordova-plugins/commit/9e17e2542776d32a0b5c9e8f3e99c73f4adb1637))
* **plugin:** combine watch and clearwatch functions ([8855359](https://github.com/danielsogl/awesome-cordova-plugins/commit/88553595272bfddf20a64bc4eabd20118792a536))
* **plugin:** don't call reject when sync ([1334f60](https://github.com/danielsogl/awesome-cordova-plugins/commit/1334f60b681fa5440174ca984d5a3a8b2d2814e6))
* **plugin:** export interfaces ([1e259da](https://github.com/danielsogl/awesome-cordova-plugins/commit/1e259da375084b67b9295e070e0916d26e9789d0))
* **plugin:** fix options properties ([44365f4](https://github.com/danielsogl/awesome-cordova-plugins/commit/44365f4c603dcbd8a30424768080d2ba0632807e))
* **plugin:** fix types ([c86e135](https://github.com/danielsogl/awesome-cordova-plugins/commit/c86e135096ae10678a3e4c4c77530d89990c0746))
* **plugins:** cleanup and add new plugins to index ([1771f7b](https://github.com/danielsogl/awesome-cordova-plugins/commit/1771f7bfe1f13bab59f9bbb3064d85b8df5da516))
* **plugins:** fix optional options ([9ef850c](https://github.com/danielsogl/awesome-cordova-plugins/commit/9ef850c66a1b7a54c6e5479910ecf8c74d9e2f50))
* remove confirm callback, not needed. ([662d8ce](https://github.com/danielsogl/awesome-cordova-plugins/commit/662d8ce079207e4c4a46f998ef122ab57cfbddcd))


### Features

* add app version plugin ([20cb01f](https://github.com/danielsogl/awesome-cordova-plugins/commit/20cb01fd9e83b0a4328c3904fc1ad48c1921370d))
* add app version plugin ([8b78521](https://github.com/danielsogl/awesome-cordova-plugins/commit/8b7852129b186e6a14a42eaac92def8a35a94936))
* add apprate ([0dd4fec](https://github.com/danielsogl/awesome-cordova-plugins/commit/0dd4fecc062fb78eac8a328a60dfa4d7b0cab0ee))
* add badge plugin ([7f01fb2](https://github.com/danielsogl/awesome-cordova-plugins/commit/7f01fb2b2a94c827878ab069e7b0f3516cba4975))
* add badge plugin ([3088df4](https://github.com/danielsogl/awesome-cordova-plugins/commit/3088df441ba903ec5eb3e7171621844d7ced578e))
* add clipboard plugin ([0b6cca7](https://github.com/danielsogl/awesome-cordova-plugins/commit/0b6cca7a286c8b1413c692b2d8cc131d21709209))
* add clipboard plugin ([fa4c266](https://github.com/danielsogl/awesome-cordova-plugins/commit/fa4c266cb7ef5860999a8b5352b5de0c2c49651d))
* **batterystatus:** complete functionality ([e7a09d9](https://github.com/danielsogl/awesome-cordova-plugins/commit/e7a09d901864790b0bfec6c984f49f034ca4dc7f))
* **DatePicker:** Added DatePicker ([5afa58f](https://github.com/danielsogl/awesome-cordova-plugins/commit/5afa58fee4d89c3266fa8049274892e807d99439))
* **localnotification:** complete functionality ([5d5bae3](https://github.com/danielsogl/awesome-cordova-plugins/commit/5d5bae3b789f8d78270aa9e5c2089aa2fd4f70c1))
* **package:** expose decorators and wrapper functions ([848d706](https://github.com/danielsogl/awesome-cordova-plugins/commit/848d70631c20fcccbce5199aa7f3f9bb9ccab1f6))
* **plugin:** add android hotspot plugin ([e1dc606](https://github.com/danielsogl/awesome-cordova-plugins/commit/e1dc6061bddca78ceb2220b6810db1a861fb7d5e))
* **plugin:** add app availability plugin ([3d188e1](https://github.com/danielsogl/awesome-cordova-plugins/commit/3d188e1f312cd0429677aa0e57d15aa1508b310e))
* **plugin:** add base64 to gallery ([8c17a2a](https://github.com/danielsogl/awesome-cordova-plugins/commit/8c17a2a6c246cc0307cd3f1105aade0d4a1249e5))
* **plugin:** add DB Meter ([22bb218](https://github.com/danielsogl/awesome-cordova-plugins/commit/22bb218e1054c220bcfa46a7ba8ec54a141de103))
* **plugin:** add device motion plugin ([a4df21e](https://github.com/danielsogl/awesome-cordova-plugins/commit/a4df21e99cb914ddb1226d4493b004381c516e9d))
* **plugin:** add device orientation plugin ([9766aab](https://github.com/danielsogl/awesome-cordova-plugins/commit/9766aab59ffcfba76e93cb265a62fa35436d5722))
* **plugin:** add dialogs plugin ([b5f9267](https://github.com/danielsogl/awesome-cordova-plugins/commit/b5f92671ae6d689fe7bfd1dc208cf386f9f1d003))
* **plugin:** add event wrapper ([0d1bd13](https://github.com/danielsogl/awesome-cordova-plugins/commit/0d1bd1335f0009fc72cc4506cf3e3a2c01a4387f))
* **plugin:** add flashlight plugin ([3ec25fa](https://github.com/danielsogl/awesome-cordova-plugins/commit/3ec25fa63b0b955352a4a1b14a2a7d82018a033e))
* **plugin:** add functionality to app-availablity plugin ([bc4dcaa](https://github.com/danielsogl/awesome-cordova-plugins/commit/bc4dcaae535b12a2c2a62f44d7d894c2d99bb598))
* **plugin:** add functionality to device motion plugin ([7f7ba3b](https://github.com/danielsogl/awesome-cordova-plugins/commit/7f7ba3b52abc523c96114eb749608d303f7e1635))
* **plugin:** add globalization ([90cc36b](https://github.com/danielsogl/awesome-cordova-plugins/commit/90cc36b453f29f0f0960823155d2e3a8a44665bc))
* **plugin:** add imagePicker plugin ([287d129](https://github.com/danielsogl/awesome-cordova-plugins/commit/287d1291378a0cd4caa0d9a583c7d134bb72fa72))
* **plugin:** add keyboard ([a80c4ee](https://github.com/danielsogl/awesome-cordova-plugins/commit/a80c4ee2bf47feec4bd1e00c484350a5257cc107))
* **plugin:** add launch navigator ([984e7fc](https://github.com/danielsogl/awesome-cordova-plugins/commit/984e7fc9d1fcde19682bad7d7fe49c2668710bdf))
* **plugin:** add launch navigator ([18df9a5](https://github.com/danielsogl/awesome-cordova-plugins/commit/18df9a5aeb436ade2676c20137353fee58afd1d9))
* **plugin:** add local notifications ([66df0a6](https://github.com/danielsogl/awesome-cordova-plugins/commit/66df0a67a64cd23f051b8617b72e29d20c1de9cd))
* **plugin:** add sms ([6843177](https://github.com/danielsogl/awesome-cordova-plugins/commit/6843177377608baf74894d43bb3f9bc3fc8c6211))
* **plugin:** add sms plugin ([aa7e04c](https://github.com/danielsogl/awesome-cordova-plugins/commit/aa7e04c2e70cd360cb4ca89ffdaa428dfc5ad80d))
* **plugin:** add splashscreen ([0f3c188](https://github.com/danielsogl/awesome-cordova-plugins/commit/0f3c1886d33359f5085162c76721a583fe7d404c))
* **plugin:** add vibration ([3cc4ee4](https://github.com/danielsogl/awesome-cordova-plugins/commit/3cc4ee4196edbaaf8298719ffdda1d7ff0cd17b4))
* **plugin:** proxy plugin properties ([fc54fef](https://github.com/danielsogl/awesome-cordova-plugins/commit/fc54fefde55b17b1c2877ff605d021a0ecd94390))
* **plugins:** add new plugins to index ([4d8dc1b](https://github.com/danielsogl/awesome-cordova-plugins/commit/4d8dc1b9dc8e9191b32db17471dfc27932123aca))
* **plugins:** add platforms info ([9826dfd](https://github.com/danielsogl/awesome-cordova-plugins/commit/9826dfd026bc48f95ef44ecc3c5f0dd9e982a467))
* **plugin:** show instructions if plugin not installed ([c48a851](https://github.com/danielsogl/awesome-cordova-plugins/commit/c48a851d877f1ca6a8252e2af36e00f9717993f4))



## [1.0.9](https://github.com/danielsogl/awesome-cordova-plugins/compare/8f27fc9e51650e18d5a470622626a87e363059de...v1.0.9) (2016-02-18)


### Bug Fixes

* **calendar:** make getCalendarOptions sync ([78c5408](https://github.com/danielsogl/awesome-cordova-plugins/commit/78c540841e10246434fd495131d1d146d2e761c2))
* **geolocation:** call correct clearFunction ([9e86a40](https://github.com/danielsogl/awesome-cordova-plugins/commit/9e86a40034f505260533278fb7732c3e8b6bec48))
* **plugin:** return originalMethod return value ([240f0f8](https://github.com/danielsogl/awesome-cordova-plugins/commit/240f0f87cce1b3c4f35fd8c01af01bca4c336a97))
* **plugin:** use call for id based clearFunction ([c2fdf39](https://github.com/danielsogl/awesome-cordova-plugins/commit/c2fdf3908954ba8a1bd0508e176256dd39725af3))


### Features

* **plugin:** add sync option to @Cordova for sync functions ([17e3827](https://github.com/danielsogl/awesome-cordova-plugins/commit/17e382783147ec57161e6eeddfe853a9f9fbf692))
* **plugin:** call clearFunction with original fn args ([8f27fc9](https://github.com/danielsogl/awesome-cordova-plugins/commit/8f27fc9e51650e18d5a470622626a87e363059de))



