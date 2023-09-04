# IRoot

```text
$ ionic cordova plugin add cordova-plugin-iroot
$ npm install @awesome-cordova-plugins/iroot
```

## [Usage Documentation](https://danielsogl.gitbook.io/awesome-cordova-plugins/plugins/iroot/)

Plugin Repo: [https://github.com/WuglyakBolgoink/cordova-plugin-iroot](https://github.com/WuglyakBolgoink/cordova-plugin-iroot)

Use this plugin to add an extra layer of security for your app by detecting if the device was rooted (on android) or jailbreaked (on iOS).
<
## Supported platforms

* Android
* iOS

## Original Plugin Notes

### iOS - Postinstall

To avoid errors like

> -canOpenURL: failed for URL: "cydia://package/com.example.package" - error: "This app is not allowed to query for scheme cydia"

don’t forget to add `"cydia"` in `LSApplicationQueriesSchemes` key of `info.plist`. Otherwise `canOpenURL` will always return `false`.

```xml
<xxx>
  <key>LSApplicationQueriesSchemes</key>
  <array>
      <string>cydia</string>
  </array>
</xxx>
```