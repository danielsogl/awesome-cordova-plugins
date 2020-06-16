[![Circle CI](https://circleci.com/gh/ionic-team/ionic-native.svg?style=shield)](https://circleci.com/gh/ionic-team/ionic-native) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) ![](https://img.shields.io/npm/v/@ionic-native/core.svg)

# Ionic Native

Ionic Native is a curated set of wrappers for Cordova plugins that make adding any native functionality you need to your [Ionic](https://ionicframework.com/) mobile app easy.

Ionic Native wraps plugin callbacks in a Promise or Observable, providing a common interface for all plugins and making it easy to use plugins with Angular change detection.

Ionic Native is available in two versions: 
1. Ionic Native [Community Edition](https://ionicframework.com/docs/native/community), featuring open source, community-maintained Cordova and Capacitor plugins and APIs.
2. Ionic Native [Enterprise Edition](https://ionicframework.com/docs/enterprise), featuring a library of Premier plugins and solutions that are fully supported and maintained by the Ionic team, with access to Ionic experts and a guaranteed response SLA to mission-critical app development.

## Capacitor Support

In addition to Cordova, Ionic Native also works with [Capacitor](https://capacitor.ionicframework.com), Ionic's official native runtime. Basic usage below. For complete details, [see the Capacitor documentation](https://capacitor.ionicframework.com/docs/cordova/using-cordova-plugins).

## Installation

Run following command to install Ionic Native in your project.

```bash
npm install @ionic-native/core --save
```

You also need to install the Ionic Native package for each plugin you want to add. Please see the [Ionic Native documentation](https://ionicframework.com/docs/native/) for complete instructions on how to add and use the plugins.

## Documentation

For the full Ionic Native documentation, please visit [https://ionicframework.com/docs/native/](https://ionicframework.com/docs/native/).

### Basic Usage

#### Ionic/Angular apps

To use a plugin, import and add the plugin provider to your `@NgModule`, and then inject it where you wish to use it.
Make sure to import the injectable class from the `/ngx` directory as shown in the following examples:

```typescript
// app.module.ts
import { Camera } from '@ionic-native/camera/ngx';

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
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from 'ionic-angular';

@Component({ ... })
export class MyComponent {

  constructor(private geolocation: Geolocation, private platform: Platform) {

    this.platform.ready().then(() => {

      // get position
      this.geolocation.getCurrentPosition().then(pos => {
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

#### Ionic/React apps

React apps must use Capacitor to build native mobile apps. However, Ionic Native (and therefore, Cordova plugins) can still be used.

```bash
# Install Core library (once per project)
npm install @ionic-native/core

# Install Ionic Native TypeScript wrapper
npm install @ionic-native/barcode-scanner

# Install Cordova plugin
npm install phonegap-plugin-barcodescanner

# Update native platform project(s) to include newly added plugin
ionic cap sync
```

Import the plugin object then use its static methods:

```typescript
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

const Tab1: React.FC = () => {
  const openScanner = async () => {
    const data = await BarcodeScanner.scan();
    console.log(`Barcode data: ${data.text}`);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={openScanner}>Scan barcode</IonButton>
      </IonContent>
    </IonPage>
  );
};
```

#### ES2015+/TypeScript

These modules can work in any ES2015+/TypeScript app (including Angular/Ionic apps). To use any plugin, import the class from the appropriate package, and use it's static methods.

```js
import { Camera } from '@ionic-native/camera';

document.addEventListener('deviceready', () => {
  Camera.getPicture()
    .then(data => console.log('Took a picture!', data))
    .catch(e => console.log('Error occurred while taking a picture', e));
});
```

#### AngularJS

Ionic Native generates an AngularJS module in runtime and prepares a service for each plugin. To use the plugins in your AngularJS app:

1. Download the latest bundle from the [Github releases](https://github.com/ionic-team/ionic-native/releases) page.
2. Include it in `index.html` before your app's code.
3. Inject `ionic.native` module in your app.
4. Inject any plugin you would like to use with a `$cordova` prefix.

```js
angular.module('myApp', ['ionic.native']).controller('MyPageController', function ($cordovaCamera) {
  $cordovaCamera.getPicture().then(
    function (data) {
      console.log('Took a picture!', data);
    },
    function (err) {
      console.log('Error occurred while taking a picture', err);
    }
  );
});
```

#### Vanilla JS

To use Ionic Native in any other setup:

1. Download the latest bundle from the [Github releases](https://github.com/ionic-team/ionic-native/releases) page.
2. Include it in `index.html` before your app's code.
3. Access any plugin using the global `IonicNative` variable.

```js
document.addEventListener('deviceready', function () {
  IonicNative.Camera.getPicture().then(
    function (data) {
      console.log('Took a picture!', data);
    },
    function (err) {
      console.log('Error occurred while taking a picture', err);
    }
  );
});
```

### Mocking and Browser Development (Ionic/Angular apps only)

Ionic Native makes it possible to mock plugins and develop nearly the entirety of your app in the browser or in `ionic serve`.

To do this, you need to provide a mock implementation of the plugins you wish to use. Here's an example of mocking the `Camera` plugin to return a stock image while in development:

First import the `Camera` class in your `src/app/app.module.ts` file:

```typescript
import { Camera } from '@ionic-native/camera/ngx';
```

Then create a new class that extends the `Camera` class with a mock implementation:

```typescript
class CameraMock extends Camera {
  getPicture(options) {
    return new Promise((resolve, reject) => {
      resolve('BASE_64_ENCODED_DATA_GOES_HERE');
    });
  }
}
```

Finally, override the previous `Camera` class in your `providers` for this module:

```typescript
providers: [{ provide: Camera, useClass: CameraMock }];
```

Here's the full example:

```typescript
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { Camera } from '@ionic-native/camera/ngx';

import { HomePage } from '../pages/home/home';
import { MyApp } from './app.component';

class CameraMock extends Camera {
  getPicture(options) {
    return new Promise((resolve, reject) => {
      resolve('BASE_64_ENCODED_DATA_GOES_HERE');
    });
  }
}

@NgModule({
  declarations: [MyApp, HomePage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: Camera, useClass: CameraMock },
  ],
})
export class AppModule {}
```

### Runtime Diagnostics

Spent way too long diagnosing an issue only to realize a plugin wasn't firing or installed? Ionic Native lets you know what the issue is and how you can resolve it.

![img](https://ionic-io-assets.s3.amazonaws.com/ionic-native-console.png)

## Plugin Missing?

Let us know or submit a PR! Take a look at [the Developer Guide](https://github.com/ionic-team/ionic-native/blob/master/DEVELOPER.md) for more on how to contribute. :heart:

# Credits

Ibby Hadeed - [@ihadeed](https://github.com/ihadeed)

Daniel Sogl - [@sogldaniel](https://twitter.com/sogldaniel)

Tim Lancina - [@timlancina](https://twitter.com/timlancina)

Mike Hartington - [@mhartington](https://twitter.com/mhartington)

Max Lynch - [@maxlynch](https://twitter.com/maxlynch)

Rob Wormald - [@robwormald](https://twitter.com/robwormald)
