# Firebase Analytics

  <p style="color:orange">
    This plugin is still in beta stage and may not work as expected. Please
    submit any issues to the <a target="_blank"
    href="/issues">plugin repo</a>.
  </p>


```
$ ionic cordova plugin add cordova-plugin-firebase-analytics
$ npm install @awesome-cordova-plugins/firebase-analytics
```

## [Usage Documentation](https://danielsogl.gitbook.io/awesome-cordova-plugins/plugins/firebase-analytics/)

Plugin Repo: [https://github.com/chemerisuk/cordova-plugin-firebase-analytics](https://github.com/chemerisuk/cordova-plugin-firebase-analytics)

Cordova plugin for Firebase Analytics

Go to firebase console and export google-services.json and GoogleService-Info.plist. Put those files into the root of your cordova app folder.

NOTE: on iOS in order to collect demographic, age, gender data etc. you should additionally include AdSupport.framework into your project.

## Using capacitor?
For Android you'll have to add in __android/app/src/main/AndroidManfiest.xml__ under `<application>`
```
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

- Android
  - iOS
  


