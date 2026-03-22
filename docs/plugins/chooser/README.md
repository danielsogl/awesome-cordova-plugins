---
description: >-
  Chooser plugin for Cordova and Ionic. File chooser plugin for Cordova.  The following must be added to config.xml to prevent crashing when selecting large…
---

# Chooser

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

## Installation

```bash
ionic cordova plugin add http://github.com/MaximBelov/cordova-plugin-chooser.git
npm install @awesome-cordova-plugins/chooser
```

**Plugin Repo:** [https://github.com/MaximBelov/cordova-plugin-chooser](https://github.com/MaximBelov/cordova-plugin-chooser)

## Supported Platforms

- Android
- iOS

## Further Information

- [Installation Guide](../../installation.md)
- [FAQ](../../faq.md)
