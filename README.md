![](https://img.shields.io/npm/v/@awesome-cordova-plugins/core.svg)

# Awesome Cordova Plugins

Awesome Cordova Plugins is a curated set of wrappers for Cordova plugins that make adding any native functionality you need to your [Ionic](https://ionicframework.com/) mobile app easy.

Awesome Cordova Plugins wraps plugin callbacks in a Promise or Observable, providing a common interface for all plugins and making it easy to use plugins with Angular change detection.

To learn more about the reasons why Ionic Native was renamed to Awesome Cordova Plugins, read the official [Ionic blog](https://ionicframework.com/blog/a-new-chapter-for-ionic-native/) post by Max Lyncht.

- [guardian-agent-prompts](https://github.com/milkomida77/guardian-agent-prompts) - 49 production-tested AI agent system prompts for Cordova plugin workflow orchestration, automated hybrid app development management, and multi-agent coordination. MIT licensed.
## Capacitor Support

In addition to Cordova, Awesome Cordova Plugins also works with [Capacitor](https://capacitorjs.com), Ionic's official native runtime. Basic usage below. For complete details, [see the Capacitor documentation](https://capacitorjs.com/docs/v2/cordova/using-cordova-plugins).

## Installation

Run following command to install Awesome Cordova Plugins in your project.

```bash
npm install @awesome-cordova-plugins/core --save
```

You also need to install the Awesome Cordova Plugins package for each plugin you want to add. Please see the [Awesome Cordova Plugins documentation](https://ionicframework.com/docs/native/) for complete instructions on how to add and use the plugins.

## Documentation

For the full Awesome Cordova Plugins documentation, please visit [https://ionicframework.com/docs/native/](https://ionicframework.com/docs/native/).

### Basic Usage

#### Ionic/Angular apps (Standalone)

Angular v14+ uses standalone components by default. To use a plugin, register it as a provider in your application bootstrap and inject it using Angular's `inject()` function.
Make sure to import the injectable class from the `/ngx` directory as shown in the following examples:

```typescript
// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [Camera, Geolocation],
});
```

```typescript
import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-my-component',
  standalone: true,
  template: `<p>My Component</p>`,
})
export class MyComponent implements OnInit {
  private geolocation = inject(Geolocation);
  private platform = inject(Platform);

  async ngOnInit() {
    await this.platform.ready();

    // get position
    const pos = await this.geolocation.getCurrentPosition();
    console.log(`lat: ${pos.coords.latitude}, lon: ${pos.coords.longitude}`);

    // watch position
    const watch = this.geolocation.watchPosition().subscribe((pos) => {
      console.log(`lat: ${pos.coords.latitude}, lon: ${pos.coords.longitude}`);
    });

    // to stop watching
    watch.unsubscribe();
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

#### ES2015+/TypeScript (without Angular)

These modules can also be used without Angular by calling static methods directly:

```js
import { Camera } from '@awesome-cordova-plugins/camera';

document.addEventListener('deviceready', () => {
  Camera.getPicture()
    .then((data) => console.log('Took a picture!', data))
    .catch((e) => console.log('Error occurred while taking a picture', e));
});
```

### Mocking and Browser Development (Ionic/Angular apps only)

Awesome Cordova Plugins makes it possible to mock plugins and develop nearly the entirety of your app in the browser or in `ionic serve`.

To do this, you need to provide a mock implementation of the plugins you wish to use. Here's an example of mocking the `Camera` plugin to return a stock image while in development:

First create a mock class that extends the `Camera` class:

```typescript
import { Camera } from '@awesome-cordova-plugins/camera/ngx';

class CameraMock extends Camera {
  getPicture(options) {
    return new Promise((resolve, reject) => {
      resolve('BASE_64_ENCODED_DATA_GOES_HERE');
    });
  }
}
```

Then override the `Camera` provider in your application bootstrap:

```typescript
// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { AppComponent } from './app/app.component';

class CameraMock extends Camera {
  getPicture(options) {
    return Promise.resolve('BASE_64_ENCODED_DATA_GOES_HERE');
  }
}

bootstrapApplication(AppComponent, {
  providers: [{ provide: Camera, useClass: CameraMock }],
});
```

### Runtime Diagnostics

Spent way too long diagnosing an issue only to realize a plugin wasn't firing or installed? Awesome Cordova Plugins lets you know what the issue is and how you can resolve it.

![img](https://ionic-io-assets.s3.amazonaws.com/ionic-native-console.png)

## Plugin Missing?

Let us know or submit a PR! Take a look at [the Developer Guide](https://github.com/danielsogl/awesome-cordova-plugins/blob/main/DEVELOPER.md) for more on how to contribute. :heart:

# Credits

Ibby Hadeed - [@ihadeed](https://github.com/ihadeed)

Daniel Sogl - [LinkedIn](https://www.linkedin.com/in/daniel-sogl)

Tim Lancina - [@timlancina](https://twitter.com/timlancina)

Mike Hartington - [@mhartington](https://twitter.com/mhartington)

Max Lynch - [@maxlynch](https://twitter.com/maxlynch)

Rob Wormald - [@robwormald](https://twitter.com/robwormald)
