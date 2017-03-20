[![Circle CI](https://circleci.com/gh/driftyco/ionic-native.svg?style=shield)](https://circleci.com/gh/driftyco/ionic-native) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![npm](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/ionic-native)

[![NPM](https://nodei.co/npm/ionic-native.png?stars&downloads)](https://nodei.co/npm/ionic-native/)
[![NPM](https://nodei.co/npm-dl/ionic-native.png?months=6&height=2)](https://nodei.co/npm/ionic-native/)

# Ionic Native

Ionic Native is a curated set of wrappers for Cordova plugins that make adding any native functionality you need to your [Ionic 2](http://ionicframework.com/) mobile app easy.

## Installation

Run following command to install Ionic Native in your project.
```
npm install @ionic-native/core --save
```

You also need to install the Ionic Native package for each plugin you want to add. Please see the Ionic Native documentation for complete instructions on how to add and use the plugins.

## Documentation

For the full Ionic Native documentation, please visit [http://ionicframework.com/docs/v2/native/](http://ionicframework.com/docs/v2/native/).

### Promises and Observables

Ionic Native wraps plugin callbacks in a Promise or [Observable](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754), providing a common interface for all plugins and ensuring that native events trigger change detection in Angular 2.

```typescript
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';

@Component({ ... })
export class MyComponent {

  constructor(private geolocation: Geolocation, private platform: Platform) {
  
    platform.ready().then(() => {
    
      // get position
      geolocation.getCurrentPosition().then(pos => {
        
        console.log(`lat: ${pos.coords.latitude}, lon: ${pos.coords.longitude}`)
        
      });
        
        
      // watch position
      const watch = geolocation.watchPosition().subscribe(pos => {
      
        console.log(`lat: ${pos.coords.latitude}, lon: ${pos.coords.longitude}`)
      
      });
      
      // to stop watching
      watch.unsubscribe();
    
    });
  
  }

}
```

### Runtime Diagnostics

Spent way too long diagnosing an issue only to realize a plugin wasn't firing or installed? Ionic Native lets you know what the issue is and how you can resolve it.

![img](http://ionic-io-assets.s3.amazonaws.com/ionic-native-console.png)


## Plugin Missing?
Let us know or submit a PR! Take a look at [the Developer Guide](https://github.com/driftyco/ionic-native/blob/master/DEVELOPER.md) for more on how to contribute. :heart:


# Credits

Ibby Hadeed - [@ihadeed](http://github.com/ihadeed)

Tim Lancina - [@timlancina](http://twitter.com/timlancina)

Max Lynch - [@maxlynch](http://twitter.com/maxlynch)

Rob Wormald - [@robwormald](https://twitter.com/robwormald)
