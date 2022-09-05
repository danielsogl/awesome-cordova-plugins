# Ionic Plugin for Cooee SDK

## What is Cooee?

Let’s Cooee powers hyper-personalized and real time engagements for mobile apps based on machine learning. The SaaS platform, hosted on
cloud infrastructure processes millions of user transactions and data attributes to create unique and contextual user engagement
triggers for end users with simple SDK integration that requires no coding at mobile app level.

For more information visit our [website](https://www.letscooee.com/) and [documentation](https://docs.letscooee.com/developers/cordova/quickstart).

## Features

1. Plug and Play - Plugin is plug and play for mobile applications. That means it needs to be initialized with the Application Context, and it
   will work automatically in the background.
2. Independent of Application - Plugin is independent of the application. It will collect data points with zero interference from/to the
   applications. Although applications can send additional data points (if required) to the Plugin using API’s.
3. Rendering engagement triggers - Plugin will render the campaign trigger at real-time with the help of server http calls.

## Platforms

- Android (Minimum Android 5.0 / API level 21)
- iOS (Minimum deployment target iOS 13)

## Installation

```
$ ionic cordova plugin add @letscooee/cordova-plugin --variable COOEE_APP_ID="MY_COOEE_APP_ID"
$ npm install @awesome-cordova-plugins/lets-cooee
```
Replace `MY_COOEE_APP_ID` with the `App ID` which is present at [Cooee Portal](https://dashboard.letscooee.com/app/details).

## Usage Documentation

For detailed installation & uses, Refer [Cordova](https://docs.letscooee.com/developers/cordova/quickstart) documentation.

Plugin Repo: [https://github.com/letscooee/cordova-plugin-cooee](https://github.com/letscooee/cordova-plugin-cooee)

Requires Cordova plugin: `@letscooee/cordova-plugin` [![npm](https://img.shields.io/npm/v/@letscooee/cordova-plugin)](https://www.npmjs.com/package/@letscooee/cordova-plugin).