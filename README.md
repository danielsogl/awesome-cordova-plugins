[![Circle CI](https://circleci.com/gh/ionic-team/ionic-native.svg?style=shield)](https://circleci.com/gh/ionic-team/ionic-native) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) ![](https://img.shields.io/npm/v/@ionic-native/core.svg)


# Ionic Native

Ionic Native is a curated set of wrappers for Cordova plugins that make adding any native functionality you need to your [Ionic](https://ionicframework.com/) mobile app easy.

Ionic Native wraps plugin callbacks in a Promise or Observable, providing a common interface for all plugins and making it easy to use plugins with Angular change detection.

## Installation

Run following command to install Ionic Native in your project.
```bash
npm install @ionic-native/core --save
```

You also need to install the Ionic Native package for each plugin you want to add. Please see the [Ionic Native documentation](https://ionicframework.com/docs/native/) for complete instructions on how to add and use the plugins.

## Documentation

For the full Ionic Native documentation, please visit [https://ionicframework.com/docs/native/](https://ionicframework.com/docs/native/).

### Basic Usage

To use a plugin, import and add the plugin provider to your `@NgModule`, and then inject it where you wish to use it.

```typescript
// app.module.ts
import { Camera } from '@ionic-native/camera';

...

@NgModule({
  ...

  providers: [
    ...
    Camera
    ...
  ]
  ...
})
export class AppModule { }
```

```typescript
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';

import { NgZone } from '@angular/core';

@Component({ ... })
export class MyComponent {

  constructor(private geolocation: Geolocation, private platform: Platform, private ngZone: NgZone) {

    platform.ready().then(() => {

      // get position
      geolocation.getCurrentPosition().then(pos => {

        console.log(`lat: ${pos.coords.latitude}, lon: ${pos.coords.longitude}`)

      });


      // watch position
      const watch = geolocation.watchPosition().subscribe(pos => {

        console.log(`lat: ${pos.coords.latitude}, lon: ${pos.coords.longitude}`)

        // Currently, observables from Ionic Native plugins
        // need to run inside of zone to trigger change detection
        ngZone.run(() => {
          this.position = pos;
        })

      });

      // to stop watching
      watch.unsubscribe();

    });

  }

}
```

### Mocking and Browser Development

Ionic Native 3.x makes it possible to mock plugins and develop nearly the entirety of your app in the browser or in `ionic serve`.

To do this, you need to provide a mock implementation of the plugins you wish to use. Here's an example of mocking the `Camera` plugin to return a stock image while in development:

First import the `Camera` class in your `src/app/app.module.ts` file:

```typescript
import { Camera } from '@ionic-native/camera';
```

Then create a new class that extends the `Camera` class with a mock implementation:

```typescript
class CameraMock extends Camera {
  getPicture(options) {
    return new Promise((resolve, reject) => {
      resolve("BASE_64_ENCODED_DATA_GOES_HERE");
    })
  }
}
```

Finally, override the previous `Camera` class in your `providers` for this module:

```typescript
providers: [
  { provide: Camera, useClass: CameraMock }
]
```

Here's the full example:

```typescript
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { Camera } from '@ionic-native/camera';

class CameraMock extends Camera {
  getPicture(options) {
    return new Promise((resolve, reject) => {
      resolve("BASE_64_ENCODED_DATA_GOES_HERE");
    })
  }
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: Camera, useClass: CameraMock }
  ]
})
export class AppModule {}
```


### Runtime Diagnostics

Spent way too long diagnosing an issue only to realize a plugin wasn't firing or installed? Ionic Native lets you know what the issue is and how you can resolve it.

![img](https://ionic-io-assets.s3.amazonaws.com/ionic-native-console.png)


## Plugin Missing?
Let us know or submit a PR! Take a look at [the Developer Guide](https://github.com/ionic-team/ionic-native/blob/master/DEVELOPER.md) for more on how to contribute. :heart:

## Ionic v1 (AngularJS, Angular 1.x) support

For Ionic v1 (AngularJS, Angular 1.x) support, please use version 2 of Ionic Native. See the [2.x README](https://github.com/ionic-team/ionic-native/blob/v2.x/README.md) for usage information.

# Credits

Ibby Hadeed - [@ihadeed](https://github.com/ihadeed)

Tim Lancina - [@timlancina](https://twitter.com/timlancina)

Mike Hartington - [@mhartington](https://twitter.com/mhartington)

Max Lynch - [@maxlynch](https://twitter.com/maxlynch)

Rob Wormald - [@robwormald](https://twitter.com/robwormald)
