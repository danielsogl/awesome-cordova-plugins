# OCR

```
$ ionic cordova plugin add cordova-plugin-mobile-ocr
$ npm install @awesome-cordova-plugins/ocr
```

## [Usage Documentation](https://danielsogl.gitbook.io/awesome-cordova-plugins/plugins/ocr/)

Plugin Repo: [https://github.com/NeutrinosPlatform/cordova-plugin-mobile-ocr](https://github.com/NeutrinosPlatform/cordova-plugin-mobile-ocr)

This plugin attempts to identify and extract text from an image.
Please note: This plugin depends on the GoogleMobileVision pod which is referencing UIWebview, that has been deprecated by Apple.
Don't use this plugin in an app intended for App Store as you will get a review rejection from Apple: `Deprecated API Usage — Apple will stop accepting submissions of apps that use UIWebView APIs`
For more info, please see the following Github issue [Google Mobile Vision relying on deprecated UIWebview](https://github.com/NeutrinosPlatform/cordova-plugin-mobile-ocr/issues/27).

## Supported platforms

- Android
  - iOS
  


