---
description: >-
  Background Fetch plugin for Cordova and Ionic. Cross-platform Background Fetch implementation. This plugin will execute your provided callbackFn whenever a…
---

# Background Fetch

Cross-platform Background Fetch implementation. This plugin will execute your provided callbackFn
whenever a background-fetch event occurs.

### iOS
There is no way to increase the rate which a fetch-event occurs and this plugin sets the rate to the
most frequent possible value -- iOS determines the rate automatically based upon device usage and
time-of-day (ie: fetch-rate is about ~15min during prime-time hours; less frequently when the user is
presumed to be sleeping).

### Android
Uses `JobScheduler` (API 21+) or `AlarmManager` to schedule periodic callbacks. Additional constraints
(network, charging, idle) can be set via `BackgroundFetchConfig`.

For more detail, please see https://github.com/transistorsoft/cordova-plugin-background-fetch

## Installation

```bash
ionic cordova plugin add cordova-plugin-background-fetch
npm install @awesome-cordova-plugins/background-fetch
```

**Plugin Repo:** [https://github.com/transistorsoft/cordova-plugin-background-fetch](https://github.com/transistorsoft/cordova-plugin-background-fetch)

## Supported Platforms

- Android
- iOS

## Further Information

- [Installation Guide](../../installation.md)
- [FAQ](../../faq.md)
