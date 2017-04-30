# Contributing to Ionic Native

## Have an issue?
#### There are no rules, but here are a few things to consider:
###### Before you submit an issue:
* Do a quick search to see if there are similar issues
* Make sure that you are waiting for `deviceready` to fire before interacting with any plugin. If you are using Ionic 2, this can be done using [the `Platform.ready()` function](http://ionicframework.com/docs/api/platform/Platform/#ready).
* **Check that you are using the latest version of** `ionic-native`, you can install the latest version by running `npm i --save @ionic-native/core@latest`

###### Still having problems? submit an issue with the following details:
* Short description of the issue
* Steps to reproduce
* Stack trace (if available)


## Feature request?
Have a plugin you'd like to see supported? Since Ionic Native is a thin wrapper around existing Cordova plugins, adding support for new plugins is as easy as creating a new wrapper for whatever plugin you'd like to add.

Take a look at our [Developer Guide](https://github.com/driftyco/ionic-native/blob/master/DEVELOPER.md) for more info on adding new plugins.
