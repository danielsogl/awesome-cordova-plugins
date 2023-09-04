# Facebook

```text
$ ionic cordova plugin add cordova-plugin-facebook-connect --variable APP_ID="123456789" --variable APP_NAME="myApplication"
$ npm install @awesome-cordova-plugins/facebook
```

## [Usage Documentation](https://danielsogl.gitbook.io/awesome-cordova-plugins/plugins/facebook/)

Plugin Repo: [https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect)

Use the Facebook Connect plugin to obtain access to the native FB application on iOS and Android.

Requires Cordova plugin: `cordova-plugin-facebook-connect`. For more info, please see the [Facebook Connect](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect).

### Installation

To use the FB plugin, you first have to create a new Facebook App inside of the Facebook developer portal at [https://developers.facebook.com/apps](https://developers.facebook.com/apps).

[![fb-getstarted-1](https://github.com/danielsogl/awesome-cordova-plugins/tree/8516b357edaca8fc543713ba99c42cfde0225f86/img/docs/native/Facebook/1.png)](https://developers.facebook.com/apps/)

Retrieve the `App ID` and `App Name`.

[![fb-getstarted-2](https://github.com/danielsogl/awesome-cordova-plugins/tree/8516b357edaca8fc543713ba99c42cfde0225f86/img/docs/native/Facebook/2.png)](https://developers.facebook.com/apps/)

Then type in the following command in your Terminal, where APP\_ID and APP\_NAME are the values from the Facebook Developer portal.

```bash
 ionic cordova plugin add cordova-plugin-facebook-connect --variable APP_ID="123456789" --variable APP_NAME="myApplication"
```

After, you'll need to add the native platforms you'll be using to your app in the Facebook Developer portal under your app's Settings:

[![fb-getstarted-3](https://github.com/danielsogl/awesome-cordova-plugins/tree/8516b357edaca8fc543713ba99c42cfde0225f86/img/docs/native/Facebook/3.png)](https://developers.facebook.com/apps/)

Click `'Add Platform'`.

[![fb-getstarted-4](https://github.com/danielsogl/awesome-cordova-plugins/tree/8516b357edaca8fc543713ba99c42cfde0225f86/img/docs/native/Facebook/4.png)](https://developers.facebook.com/apps/)

At this point you'll need to open your project's [`config.xml`](https://cordova.apache.org/docs/en/latest/config_ref/index.html) file, found in the root directory of your project.

Take note of the `id` for the next step:

```text
<widget id="com.mycompany.testapp" version="0.0.1" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
```

You can also edit the `id` to whatever you'd like it to be.

### iOS Install

Under 'Bundle ID', add the `id` from your `config.xml` file:

[![fb-getstarted-5](https://github.com/danielsogl/awesome-cordova-plugins/tree/8516b357edaca8fc543713ba99c42cfde0225f86/img/docs/native/Facebook/5.png)](https://developers.facebook.com/apps/)

### Android Install

Under 'Google Play Package Name', add the `id` from your `config.xml` file:

[![fb-getstarted-6](https://github.com/danielsogl/awesome-cordova-plugins/tree/8516b357edaca8fc543713ba99c42cfde0225f86/img/docs/native/Facebook/6.png)](https://developers.facebook.com/apps/)

And that's it! You can now make calls to Facebook using the plugin.

## Events

App events allow you to understand the makeup of users engaging with your app, measure the performance of your Facebook mobile app ads, and reach specific sets of your users with Facebook mobile app ads.

* \[iOS\] [https://developers.facebook.com/docs/ios/app-events](https://developers.facebook.com/docs/ios/app-events)
* \[Android\] [https://developers.facebook.com/docs/android/app-events](https://developers.facebook.com/docs/android/app-events)
* \[JS\] Does not have an Events API, so the plugin functions are empty and will return an automatic success

Activation events are automatically tracked for you in the plugin.

Events are listed on the [insights page](https://www.facebook.com/insights/).

For tracking events, see `logEvent` and `logPurchase`.

## Supported platforms

* Android
  * iOS
  * Browser

