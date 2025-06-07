# Purchases

```
$ ionic cordova plugin add cordova-plugin-purchases@5.0.0
$ npm install @awesome-cordova-plugins/purchases
```

## [Usage Documentation](https://danielsogl.gitbook.io/awesome-cordova-plugins/plugins/purchases/)

Plugin Repo: [https://github.com/RevenueCat/cordova-plugin-purchases](https://github.com/RevenueCat/cordova-plugin-purchases)

Purchases* is a client for the [RevenueCat](https://www.revenuecat.com/) subscription and purchase tracking system.
It is an open source framework that provides a wrapper around `BillingClient`, `StoreKit` and the RevenueCat backend
to make implementing in-app subscriptions easy - receipt validation and status tracking included!

## Features
|     | RevenueCat                                                                                                                                                   |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ✅  | Server-side receipt validation                                                                                                                               |
| ➡️  | [Webhooks](https://docs.revenuecat.com/docs/webhooks) - enhanced server-to-server communication with events for purchases, renewals, cancellations, and more |
| 🎯  | Subscription status tracking - know whether a user is subscribed whether they're on iOS, Android or web                                                      |
| 📊  | Analytics - automatic calculation of metrics like conversion, mrr, and churn                                                                                 |
| 📝  | [Online documentation](https://docs.revenuecat.com/docs) up to date                                                                                          |
| 🔀  | [Integrations](https://www.revenuecat.com/integrations) - over a dozen integrations to easily send purchase data where you need it                           |
| 💯  | Well maintained - [frequent releases](https://github.com/RevenueCat/cordova-plugin-purchases/releases)                                                                  |
| 📮  | Great support - [Help Center](https://revenuecat.zendesk.com)                                                                                           |
| 🤩  | Awesome [new features](https://trello.com/b/RZRnWRbI/revenuecat-product-roadmap)                                                                             |

## Capacitor

The Cordova plugin is not guaranteed to be up to date and we are moving our efforts to the Capacitor plugin.
Please consider using our [Capacitor plugin](https://docs.revenuecat.com/docs/capacitor) instead of the Cordova plugin and this wrapper.

## Getting Started

Please follow the [Quickstart Guide](https://docs.revenuecat.com/docs/) for more information on how to use the SDK

## Latest changes to this plugin

This latest release updates the plugin to use BillingClient 6 in Android. If you come from an older version of the
RevenueCat SDK, see [Android Native - 5.x to 6.x Migration](https://www.revenuecat.com/docs/android-native-5x-to-6x-migration)
for a more thorough explanation of the new Google subscription model announced with BillingClient 5 and how to take advantage of it.

If your app supports product changes using [DEFERRED replacement mode](https://www.revenuecat.com/docs/managing-subscriptions#google-play),
then you can either stick with the previous major version until support for DEFERRED is re-introduced in this major version,
or you can remove DEFERRED replacement options from your app.

## Supported platforms

- Android
  - iOS
  


