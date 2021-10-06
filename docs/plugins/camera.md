# Camera

```text
$ ionic cordova plugin add cordova-plugin-camera
$ npm install @awesome-cordova-plugins/camera
```

## [Usage Documentation](https://danielsogl.gitbook.io/awesome-cordova-plugins/plugins/camera/)

Plugin Repo: [https://github.com/apache/cordova-plugin-camera](https://github.com/apache/cordova-plugin-camera)

Take a photo or capture video.

Requires the Cordova plugin: `cordova-plugin-camera`. For more info, please see the [Cordova Camera Plugin Docs](https://github.com/apache/cordova-plugin-camera).

\[Warning\] Since IOS 10 the camera requires permissions to be placed in your config.xml add

```markup
<config-file parent="NSCameraUsageDescription" platform="ios" target="*-Info.plist">
 <string>You can take photos</string>
</config-file>
```

inside of the &lt;platform name='ios&gt; section

## Supported platforms

* Android
  * Browser
  * iOS
  * Windows

