# Firebase Dynamic Links

  <p style="color:orange">
    This plugin is still in beta stage and may not work as expected. Please
    submit any issues to the <a target="_blank"
    href="/issues">plugin repo</a>.
  </p>


```
$ ionic cordova plugin add cordova-plugin-firebase-dynamiclinks --save --variable APP_DOMAIN="example.com" --variable APP_PATH="/"
$ npm install @awesome-cordova-plugins/firebase-dynamic-links
```

## [Usage Documentation](https://danielsogl.gitbook.io/awesome-cordova-plugins/plugins/firebase-dynamic-links/)

Plugin Repo: [https://github.com/chemerisuk/cordova-plugin-firebase-dynamiclinks](https://github.com/chemerisuk/cordova-plugin-firebase-dynamiclinks)

Cordova plugin for Firebase Dynamic Links

Variables APP_DOMAIN and APP_PATH specify web URL where your app will start an activity to handle the link. They also used to setup support for App Indexing.
Go to firebase console and export google-services.json and GoogleService-Info.plist. Put those files into the root of your cordova app folder.

Preferences:

Preferences GoogleIOSClientId and GoogleAndroidClientId are used to setup dynamic links when you have an app for several platforms.
You can find values at your GoogleService-Info.plist (key ANDROID_CLIENT_ID) and google-services.json (key client[0].oauth_client[0].client_id).

config.xml:
```xml
<platform name="ios">
    <preference name="GoogleIOSClientId" value="..." />
</platform>
<platform name="android">
    <preference name="GoogleAndroidClientId" value="..." />
</platform>
```

## Supported platforms

- Android
  - iOS
  


