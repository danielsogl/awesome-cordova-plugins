# Chooser

```
$ ionic cordova plugin add cordova-plugin-simple-file-chooser
$ npm install @awesome-cordova-plugins/chooser-simple-file
```

## [Usage Documentation](https://danielsogl.gitbook.io/awesome-cordova-plugins/plugins/chooser-simple-file/)

Plugin Repo: [https://github.com/hc-oss/cordova-plugin-simple-file-chooser](https://github.com/hc-oss/cordova-plugin-simple-file-chooser)

File chooser plugin for Cordova.

The following must be added to config.xml to prevent crashing when selecting large files on Android:
```xml
<platform name="android">
 <edit-config
   file="app/src/main/AndroidManifest.xml"
   mode="merge"
   target="/manifest/application">
   <application android:largeHeap="true" />
 </edit-config>
</platform>
```

## Supported platforms

- Android
  - iOS
  


