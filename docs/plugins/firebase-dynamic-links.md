# Firebase Dynamic Links

 This plugin is still in beta stage and may not work as expected. Please submit any issues to the [plugin repo](https://github.com/danielsogl/awesome-cordova-plugins/tree/8516b357edaca8fc543713ba99c42cfde0225f86/issues/README.md).

```text
$ ionic cordova plugin add cordova-plugin-firebase-dynamiclinks --save --variable APP_DOMAIN="example.com" --variable APP_PATH="/"
$ npm install @awesome-cordova-plugins/firebase-dynamic-links
```

## [Usage Documentation](https://danielsogl.gitbook.io/awesome-cordova-plugins/plugins/firebase-dynamic-links/)

Plugin Repo: [https://github.com/chemerisuk/cordova-plugin-firebase-dynamiclinks](https://github.com/chemerisuk/cordova-plugin-firebase-dynamiclinks)

Cordova plugin for Firebase Dynamic Links

Variables APP\_DOMAIN and APP\_PATH specify web URL where your app will start an activity to handle the link. They also used to setup support for App Indexing. Go to firebase console and export google-services.json and GoogleService-Info.plist. Put those files into the root of your cordova app folder.

Preferences:

Preferences GoogleIOSClientId and GoogleAndroidClientId are used to setup dynamic links when you have an app for several platforms. You can find values at your GoogleService-Info.plist \(key ANDROID\_CLIENT\_ID\) and google-services.json \(key client\[0\].oauth\_client\[0\].client\_id\).

config.xml:

```markup
<platform name="ios">
    <preference name="GoogleIOSClientId" value="..." />
</platform>
<platform name="android">
    <preference name="GoogleAndroidClientId" value="..." />
</platform>
```

## Supported platforms

* Android
  * iOS

