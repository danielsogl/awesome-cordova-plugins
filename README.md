[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) ![](https://img.shields.io/npm/v/@awesome-cordova-plugins/core.svg)

# Awesome Cordova Plugins

Awesome Cordova Plugins is a curated set of wrappers for Cordova plugins that make adding any native functionality you need to your [Ionic](https://ionicframework.com/) mobile app easy.

Awesome Cordova Plugins wraps plugin callbacks in a Promise or Observable, providing a common interface for all plugins and making it easy to use plugins with Angular change detection.

To learn more about the reasons why Ionic Native was renamed to Awesome Cordova Plugins, read the official [Ionic blog](https://ionicframework.com/blog/a-new-chapter-for-ionic-native/) post by Max Lyncht.

## Capacitor Support

In addition to Cordova, Awesome Cordova Plugins also works with [Capacitor](https://capacitor.ionicframework.com), Ionic's official native runtime. Basic usage below. For complete details, [see the Capacitor documentation](https://capacitor.ionicframework.com/docs/cordova/using-cordova-plugins).

## Installation

Run following command to install Awesome Cordova Plugins in your project.

```bash
npm install @awesome-cordova-plugins/core --save
```

You also need to install the Awesome Cordova Plugins package for each plugin you want to add. Please see the [Awesome Cordova Plugins documentation](https://ionicframework.com/docs/native/) for complete instructions on how to add and use the plugins.

## Documentation

For the full Awesome Cordova Plugins documentation, please visit [https://ionicframework.com/docs/native/](https://ionicframework.com/docs/native/).

### Basic Usage

#### Ionic/Angular apps

To use a plugin, import and add the plugin provider to your `@NgModule`, and then inject it where you wish to use it.
Make sure to import the injectable class from the `/ngx` directory as shown in the following examples:

```typescript
// app.module.ts
import { Camera } from '@awesome-cordova-plugins/camera/ngx';

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
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
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

React apps must use Capacitor to build native mobile apps. However, Awesome Cordova Plugins (and therefore, Cordova plugins) can still be used.

```bash
# Install Core library (once per project)
npm install @awesome-cordova-plugins/core

# Install Awesome Cordova Plugins TypeScript wrapper
npm install @awesome-cordova-plugins/barcode-scanner

# Install Cordova plugin
npm install phonegap-plugin-barcodescanner

# Update native platform project(s) to include newly added plugin
ionic cap sync
```

Import the plugin object then use its static methods:

```typescript
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner';

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
import { Camera } from '@awesome-cordova-plugins/camera';

document.addEventListener('deviceready', () => {
  Camera.getPicture()
    .then((data) => console.log('Took a picture!', data))
    .catch((e) => console.log('Error occurred while taking a picture', e));
});
```

#### AngularJS

Awesome Cordova Plugins generates an AngularJS module in runtime and prepares a service for each plugin. To use the plugins in your AngularJS app:

1. Download the latest bundle from the [Github releases](https://github.com/danielsogl/awesome-cordova-plugins/releases) page.
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

To use Awesome Cordova Plugins in any other setup:

1. Download the latest bundle from the [Github releases](https://github.com/danielsogl/awesome-cordova-plugins/releases) page.
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

Awesome Cordova Plugins makes it possible to mock plugins and develop nearly the entirety of your app in the browser or in `ionic serve`.

To do this, you need to provide a mock implementation of the plugins you wish to use. Here's an example of mocking the `Camera` plugin to return a stock image while in development:

First import the `Camera` class in your `src/app/app.module.ts` file:

```typescript
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
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

import { Camera } from '@awesome-cordova-plugins/camera/ngx';

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

Spent way too long diagnosing an issue only to realize a plugin wasn't firing or installed? Awesome Cordova Plugins lets you know what the issue is and how you can resolve it.

![img](https://ionic-io-assets.s3.amazonaws.com/ionic-native-console.png)

## Plugin Missing?

Let us know or submit a PR! Take a look at [the Developer Guide](https://github.com/danielsogl/awesome-cordova-plugins/blob/master/DEVELOPER.md) for more on how to contribute. :heart:

# Credits

Ibby Hadeed - [@ihadeed](https://github.com/ihadeed)

Daniel Sogl - [@sogldaniel](https://twitter.com/sogldaniel)

Tim Lancina - [@timlancina](https://twitter.com/timlancina)

Mike Hartington - [@mhartington](https://twitter.com/mhartington)

Max Lynch - [@maxlynch](https://twitter.com/maxlynch)

Rob Wormald - [@robwormald](https://twitter.com/robwormald)
