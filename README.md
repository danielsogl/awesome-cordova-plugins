[![Circle CI](https://circleci.com/gh/driftyco/ionic-native.svg?style=shield)](https://circleci.com/gh/driftyco/ionic-native) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![npm](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/ionic-native-playground)

[![NPM](https://nodei.co/npm/ionic-native.png?stars&downloads)](https://nodei.co/npm/ionic-native/)


# Ionic Native

Ionic Native is a curated set of wrappers for Cordova plugins that make adding any native functionality you need to your [Ionic](http://ionicframework.com/), Cordova, or Web View mobile app easy.

### Documentation

For the full Ionic Native documentation, please visit [http://ionicframework.com/docs/v2/native/](http://ionicframework.com/docs/v2/native/).

### Promises and Observables

Ionic Native wraps plugin callbacks in a Promise or [Observable](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754), providing a common interface for all plugins and ensuring that native events trigger change detection in Angular 2.

```
import { Geolocation } from 'ionic-native';

Geolocation.getCurrentPosition().then(pos => { 
  console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
});

let watch = Geolocation.watchPosition().subscribe(pos => {
  console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
});

// to stop watching
watch.unsubscribe();
```

### Angular 1

Ionic Native works as a stand-in for [ngCordova](http://ngcordova.com/). In many cases, the usage is identical, but we import `ionic.native` instead of `ngCordova` as our module.

As a rule of thumb: take the ES6 class name of the plugin and add `$cordova` to get the service name. For example, `Geolocation` would be `$cordovaGeolocation`, and `Camera` will be `$cordovaCamera`:

```javascript
angular.module('myApp', ['ionic', 'ionic.native'])

.controller('MyCtrl', function($scope, $cordovaCamera) {
  $scope.takePicture = function() {
    $cordovaCamera.getPicture(opts).then(function(p) {
    }, function(err) {
    });
  };
});
```

### Runtime Diagnostics

Spent way too long diagnosing an issue only to realize a plugin wasn't firing or installed? Ionic Native lets you know what the issue is and how you can resolve it.

![img](http://ionic-io-assets.s3.amazonaws.com/ionic-native-console.png)

## Installation

Run following commmand to install ionic-native in your project. 
```
npm install ionic-native --save
```


## Plugin Missing?
Let us know or submit a PR! Take a look at [the Developer Guide](https://github.com/driftyco/ionic-native/blob/master/DEVELOPER.md) for more on how to contribute. :heart:


# Credits

Ibrahim Hadeed - [@ihadeed](http://github.com/ihadeed)

Tim Lancina - [@timlancina](http://twitter.com/timlancina)

Max Lynch - [@maxlynch](http://twitter.com/maxlynch)

Rob Wormald - [@robwormald](https://twitter.com/robwormald)
