# Foreground Service

```text
$ ionic cordova plugin add cordova-plugin-foreground-service
$ npm install @awesome-cordova-plugins/foreground-service
```

## [Usage Documentation](https://danielsogl.gitbook.io/awesome-cordova-plugins/plugins/foreground-service/)

Plugin Repo: [https://github.com/DavidBriglio/cordova-plugin-foreground-service](https://github.com/DavidBriglio/cordova-plugin-foreground-service)

This plugin allows for android devices to continue running services in the background, using a foreground ongoing notification. This is targeted towards use with plugins such as 'cordova-geolocation' that will not run while the app is in the background on android API 26+.

For android API 28+, the following xml snippet should be inserted into `config.xml`:

```text
...
<platform name="android">
  <config-file parent="/*" target="AndroidManifest.xml">
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
  </config-file>
  ...
```

## Supported platforms

* Android

