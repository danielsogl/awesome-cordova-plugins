# Background Fetch

```text
$ ionic cordova plugin add cordova-plugin-background-fetch
$ npm install @awesome-cordova-plugins/background-fetch
```

## [Usage Documentation](https://danielsogl.gitbook.io/awesome-cordova-plugins/plugins/background-fetch/)

Plugin Repo: [https://github.com/transistorsoft/cordova-plugin-background-fetch](https://github.com/transistorsoft/cordova-plugin-background-fetch)

iOS Background Fetch Implementation. See: [https://developer.apple.com/reference/uikit/uiapplication\#1657399](https://developer.apple.com/reference/uikit/uiapplication#1657399) iOS Background Fetch is basically an API which wakes up your app about every 15 minutes \(during the user's prime-time hours\) and provides your app exactly 30s of background running-time. This plugin will execute your provided callbackFn whenever a background-fetch event occurs. There is no way to increase the rate which a fetch-event occurs and this plugin sets the rate to the most frequent possible value of UIApplicationBackgroundFetchIntervalMinimum -- iOS determines the rate automatically based upon device usage and time-of-day \(ie: fetch-rate is about ~15min during prime-time hours; less frequently when the user is presumed to be sleeping, at 3am for example\). For more detail, please see [https://github.com/transistorsoft/cordova-plugin-background-fetch](https://github.com/transistorsoft/cordova-plugin-background-fetch)

## Supported platforms

* iOS

