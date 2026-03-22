---
description: >-
  Firebase Analytics plugin for Cordova and Ionic. Cordova plugin for Firebase Analytics  Go to firebase console and export google-services.json and…
---

# Firebase Analytics

Cordova plugin for Firebase Analytics

Go to firebase console and export google-services.json and GoogleService-Info.plist. Put those files into the root of your cordova app folder.

NOTE: on iOS in order to collect demographic, age, gender data etc. you should additionally include AdSupport.framework into your project.

## Using capacitor?
For Android you'll have to add in __android/app/src/main/AndroidManifest.xml__ under `<application>`
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

## Installation

```bash
ionic cordova plugin add cordova-plugin-firebase-analytics
npm install @awesome-cordova-plugins/firebase-analytics
```

**Plugin Repo:** [https://github.com/chemerisuk/cordova-plugin-firebase-analytics](https://github.com/chemerisuk/cordova-plugin-firebase-analytics)

## Supported Platforms

- Android
- iOS

## Further Information

- [Installation Guide](../../installation.md)
- [FAQ](../../faq.md)
