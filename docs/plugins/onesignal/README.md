# OneSignal

```
$ ionic cordova plugin add onesignal-cordova-plugin
$ npm install @awesome-cordova-plugins/onesignal
```

## [Usage Documentation](https://danielsogl.gitbook.io/awesome-cordova-plugins/plugins/onesignal/)

Plugin Repo: [https://github.com/OneSignal/OneSignal-Cordova-SDK](https://github.com/OneSignal/OneSignal-Cordova-SDK)

The OneSignal plugin is an client implementation for using the [OneSignal](https://onesignal.com/) Service.
OneSignal is a simple implementation for delivering push notifications.

Please view the official [OneSignal Ionic SDK Installation](https://documentation.onesignal.com/docs/ionic-sdk-setup) guide
for more information.

#### Icons
If you want to use generated icons with command `ionic cordova resources`:

1. Add a file to your `hooks` directory called `copy_android_notification_icons.js`

2. Configure the hook in your config.xml
```
    <platform name="android">
        <hook type="after_prepare" src="hooks/copy_android_notification_icons.js" />
    </platform>
```

3. Put the following code in it:

```
#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

var filestocopy = [{
    "resources/android/icon/drawable-hdpi-icon.png":
        "platforms/android/app/src/main/res/drawable-hdpi/ic_stat_onesignal_default.png"
}, {
    "resources/android/icon/drawable-mdpi-icon.png":
        "platforms/android/app/src/main/res/drawable-mdpi/ic_stat_onesignal_default.png"
}, {
    "resources/android/icon/drawable-xhdpi-icon.png":
        "platforms/android/app/src/main/res/drawable-xhdpi/ic_stat_onesignal_default.png"
}, {
    "resources/android/icon/drawable-xxhdpi-icon.png":
        "platforms/android/app/src/main/res/drawable-xxhdpi/ic_stat_onesignal_default.png"
}, {
    "resources/android/icon/drawable-xxxhdpi-icon.png":
        "platforms/android/app/src/main/res/drawable-xxxhdpi/ic_stat_onesignal_default.png"
} ];

module.exports = function(context) {

    // no need to configure below
    var rootdir = context.opts.projectRoot;

    filestocopy.forEach(function(obj) {
        Object.keys(obj).forEach(function(key) {
            var val = obj[key];
            var srcfile = path.join(rootdir, key);
            var destfile = path.join(rootdir, val);
            console.log("copying "+srcfile+" to "+destfile);
            var destdir = path.dirname(destfile);
            if (fs.existsSync(srcfile) && fs.existsSync(destdir)) {
                fs.createReadStream(srcfile).pipe(
                    fs.createWriteStream(destfile));
            }
        });
    });

};
```

3. From the root of your project make the file executable:
`$ chmod +x hooks/copy_android_notification_icons.js`

## Supported platforms

- Amazon Fire OS
  - Android
  - iOS
  - Windows
  


