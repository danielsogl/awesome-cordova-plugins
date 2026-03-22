---
description: >-
  Geolocation plugin for Cordova and Ionic. This plugin provides information about the device's location, such as latitude and longitude. Common sources of…
---

# Geolocation

This plugin provides information about the device's location, such as latitude and longitude. Common sources of location information include Global Positioning System (GPS) and location inferred from network signals such as IP address, RFID, WiFi and Bluetooth MAC addresses, and GSM/CDMA cell IDs.

 This API is based on the W3C Geolocation API Specification, and only executes on devices that don't already provide an implementation.

For iOS you have to add this configuration to your configuration.xml file
```xml
<edit-config file="*-Info.plist" mode="merge" target="NSLocationWhenInUseUsageDescription">
   <string>We use your location for full functionality of certain app features.</string>
</edit-config>
```

## Installation

```bash
ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION="To locate you"
npm install @awesome-cordova-plugins/geolocation
```

**Plugin Repo:** [https://github.com/apache/cordova-plugin-geolocation](https://github.com/apache/cordova-plugin-geolocation)

## Supported Platforms

- Amazon Fire OS
- Android
- Browser
- iOS
- Windows

## Further Information

- [Installation Guide](../../installation.md)
- [FAQ](../../faq.md)
