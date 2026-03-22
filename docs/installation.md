# Installation

[Apache Cordova](https://cordova.apache.org/) is an open source native runtime that allows developers to build native mobile apps with HTML, CSS, and JavaScript. Similar to [Capacitor](https://capacitorjs.com/), Ionic's own native runtime, Cordova allows developers to access native device features, such as camera, keyboard, and geolocation, using a system of plugins. A plugin is a small amount of add-on code that provides JavaScript interface to native components. They allow your app to use native device capabilities beyond what is available to pure web apps.

These plugins are submitted and maintained by the community. While community members are generally quick to find and fix issues, certain plugins may not function properly.

### Capacitor Support

In addition to Cordova, Awesome Cordova Plugins also works with [Capacitor](https://capacitorjs.com/), Ionic's official native runtime. Basic usage below. For complete details, [see the Capacitor documentation](https://capacitorjs.com/docs/cordova/using-cordova-plugins).

### Usage

All plugins have two components - the native code (Cordova) and the TypeScript code (Awesome Cordova Plugins). Cordova plugins are also wrapped in a `Promise` or `Observable` in order to provide a common plugin interface and modernized development approach.

Using the [Camera plugin](plugins/camera.md) as an example, first install it:

```bash
# Install Cordova plugin
ionic cordova plugin add cordova-plugin-camera

# Install Awesome Cordova Plugins TypeScript wrapper
npm install @awesome-cordova-plugins/camera

# Install Awesome Cordova Plugins core library (once per project)
npm install @awesome-cordova-plugins/core
```

Next, begin using the plugin, following the various framework usage options below. For FAQ, see [here](faq.md).

### Angular (Standalone)

Angular apps can use either Cordova or Capacitor to build native mobile apps. Register the plugin as a provider in your application bootstrap. For Angular, the import path should end with `/ngx`. Angular's change detection is automatically handled.

```typescript
// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [Camera],
});
```

After the plugin has been registered, inject it in any component or service using Angular's `inject()` function:

```typescript
// camera.service.ts
import { Injectable, inject } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private camera = inject(Camera);

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // Do something with the new photo
      },
      (err) => {
        // Handle error
        console.log('Camera issue: ' + err);
      }
    );
  }
}
```

### React

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

### ES2015+/TypeScript

ES2015+ and TypeScript apps can use either Cordova or Capacitor to build native mobile apps. To use any plugin, import the class from the appropriate package and use its static methods:

```typescript
import { Camera } from '@awesome-cordova-plugins/camera';

document.addEventListener('deviceready', () => {
  Camera.getPicture()
    .then((data) => console.log('Took a picture!', data))
    .catch((e) => console.log('Error occurred while taking a picture', e));
});
```
