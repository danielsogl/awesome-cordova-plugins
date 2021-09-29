<a style="float:right;font-size:12px;" href="http://github.com/danielsogl/awesome-cordova-plugins/edit/master/src/@awesome-cordova-plugins/plugins/chooser/index.ts#L9">
  Improve this doc
</a>

# Chooser

```
$ ionic cordova plugin add cordova-plugin-chooser
$ npm install @ionic-native/plugins/chooser
```

## [Usage Documentation](https://ionicframework.com/docs/native/chooser/)

Plugin Repo: [https://github.com/cyph/cordova-plugin-chooser](https://github.com/cyph/cordova-plugin-chooser)

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
  


