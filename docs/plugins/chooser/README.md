# Chooser

```
$ ionic cordova plugin add http://github.com/MaximBelov/cordova-plugin-chooser.git
$ npm install @awesome-cordova-plugins/chooser
```

## [Usage Documentation](https://danielsogl.gitbook.io/awesome-cordova-plugins/plugins/chooser/)

Plugin Repo: [https://github.com/MaximBelov/cordova-plugin-chooser](https://github.com/MaximBelov/cordova-plugin-chooser)

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
  


