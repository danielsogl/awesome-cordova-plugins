<a style="float:right;font-size:12px;" href="http://github.com/danielsogl/awesome-cordova-plugins/edit/master/src/@awesome-cordova-plugins/plugins/geolocation/index.ts#L105">
  Improve this doc
</a>

# Geolocation

```
$ ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION="To locate you"
$ npm install @ionic-native/plugins/geolocation
```

## [Usage Documentation](https://ionicframework.com/docs/native/geolocation/)

Plugin Repo: [https://github.com/apache/cordova-plugin-geolocation](https://github.com/apache/cordova-plugin-geolocation)

This plugin provides information about the device's location, such as latitude and longitude. Common sources of location information include Global Positioning System (GPS) and location inferred from network signals such as IP address, RFID, WiFi and Bluetooth MAC addresses, and GSM/CDMA cell IDs.

This API is based on the W3C Geolocation API Specification, and only executes on devices that don't already provide an implementation.

For iOS you have to add this configuration to your configuration.xml file

```xml
<edit-config file="*-Info.plist" mode="merge" target="NSLocationWhenInUseUsageDescription">
   <string>We use your location for full functionality of certain app features.</string>
</edit-config>
```

## Supported platforms

- Amazon Fire OS
  - Android
  - Browser
  - iOS
  - Windows
