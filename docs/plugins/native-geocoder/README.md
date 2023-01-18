# Native Geocoder

```
$ ionic cordova plugin add cordova-plugin-nativegeocoder
$ npm install @awesome-cordova-plugins/native-geocoder
```

## [Usage Documentation](https://danielsogl.gitbook.io/awesome-cordova-plugins/plugins/native-geocoder/)

Plugin Repo: [https://github.com/sebastianbaar/cordova-plugin-nativegeocoder](https://github.com/sebastianbaar/cordova-plugin-nativegeocoder)

Cordova plugin for native forward and reverse geocoding

## Supported platforms

- iOS
- Android

## Example

Add `NativeGeocoder`from `@awesome-cordova-plugins/native-geocoder/ngx` in the `providers` array of your `@NgModule`.

> home.module.ts
```typescript
import { NativeGeocoder } from '@awesome-cordova-plugins/native-geocoder/ngx';
...

@NgModule({
  imports: [    
    ...
    HomePageRoutingModule
  ],
  declarations: [HomePage],
  providers: [NativeGeocoder] // <-- HERE
})
export class HomePageModule {}
```

Add `NativeGeocoder`from `@awesome-cordova-plugins/native-geocoder/ngx` to use the `forwardGeocode` and `reverseGeocode` functions. 

> home.page.ts
```typescript
import { NativeGeocoder, NativeGeocoderResult } from '@awesome-cordova-plugins/native-geocoder/ngx';
...

@Component(...)
export class HomePage {

  constructor(private nativeGeocoder: NativeGeocoder) {

    this.nativeGeocoder.forwardGeocode("121 S Pinckney St #300, Madison, WI 53703, USA")
      .then((result: NativeGeocoderResult[]) => console.log(result))
      .catch((error: any) => console.log(error))

    this.nativeGeocoder.reverseGeocode(43.0742404, -89.3832006)
      .then((result: NativeGeocoderResult[]) => console.log(result))
      .catch((error: any) => console.log(error))

  }
}
```
