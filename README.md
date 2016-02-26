# Ionic Native

Ionic Native is a curated set of wrappers for Cordova plugins that make adding any native functionality you need to your [Ionic](http://ionicframework.com/), Cordova, or Web View mobile app easy.

### Promises and Observables

Ionic Native wraps plugin callbacks in a Promise or [Observable](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754), providing a common interface for all plugins and ensuring that native events trigger change detection in Angular 2.

```
import {Geolocation} from 'ionic-native';

Geolocation.getCurrentPosition().then(pos => { 
  console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
});

let watch = Geolocation.watchPosition();
watch.subscribe(pos => {
  console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
});

// to stop watching
watch.unsubscribe();
```

### Runtime Diagnostics

Spent way too long diagnosing an issue only to realize a plugin wasn't firing or installed? Ionic Native lets you know what the issue is and how you can resolve it.


## Plugin Missing?
Let us know or submit a PR! Take a look at [the Developer Guide](https://github.com/driftyco/ionic-native/blob/master/DEVELOPER.md) for more on how to contribute. :heart:


## Installation Guide

Run following commmand to install ionic-native on your ionic2 project. 
```
npm install ionic-native --save
```

# Credits

Tim Lancina - [@timlancina](http://twitter.com/timlancina)

Max Lynch - [@maxlynch](http://twitter.com/maxlynch)

Rob Wormald - [@robwormald](https://twitter.com/robwormald)
