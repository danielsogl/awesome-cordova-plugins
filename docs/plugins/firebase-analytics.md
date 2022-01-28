# Firebase Analytics

 This plugin is still in beta stage and may not work as expected. Please submit any issues to the [plugin repo](https://github.com/danielsogl/awesome-cordova-plugins/tree/8516b357edaca8fc543713ba99c42cfde0225f86/issues/README.md).

```text
$ ionic cordova plugin add cordova-plugin-firebase-analytics
$ npm install @awesome-cordova-plugins/firebase-analytics
```

## [Usage Documentation](https://danielsogl.gitbook.io/awesome-cordova-plugins/plugins/firebase-analytics/)

Plugin Repo: [https://github.com/chemerisuk/cordova-plugin-firebase-analytics](https://github.com/chemerisuk/cordova-plugin-firebase-analytics)

Cordova plugin for Firebase Analytics

Go to firebase console and export google-services.json and GoogleService-Info.plist. Put those files into the root of your cordova app folder.

NOTE: on iOS in order to collect demographic, age, gender data etc. you should additionally include AdSupport.framework into your project.

## Using capacitor?

For Android you'll have to add in **android/app/src/main/AndroidManfiest.xml** under `<application>`

```text
<meta-data
     tools:replace="android:value"
     android:name="firebase_analytics_collection_enabled"
     android:value="true"/>

<meta-data
     tools:replace="android:value"
     android:name="google_analytics_automatic_screen_reporting_enabled"
     android:value="false"/>
```

And in the same file, you'll have to add `xmlns:tools="http://schemas.android.com/tools"` to your _manifest_ tag.

## Supported platforms

* Android
  * iOS

