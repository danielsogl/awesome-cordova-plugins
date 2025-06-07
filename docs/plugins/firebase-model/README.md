# FirebaseModelInput

$ ionic cordova plugin add cordova-plugin-firebase-model
$ npm install @awesome-cordova-plugins/firebase-model
```

## [Usage Documentation](https://danielsogl.gitbook.io/awesome-cordova-plugins/plugins/firebase-model/)

Plugin Repo: ['']('')

This plugin downloads the TensorFlow model from firebase and classify the images.

```typescript
import { FirebaseModel } from '@ionic-native/ionic-native-firebase-model';


constructor(private firebaseModel: FirebaseModel) { }

...


this.firebaseModel.configure('Sample_Model')
  .subscribe((res: FirebaseModelConfigResult) => console.log(res.status + " - " + res.progress))
  .catch((error: any) => console.error(error));


try {
   var result:FirebaseModelClassifyResult = await this.firebaseModel.classify("/Documents/input_image.png")
   console.log(result.label + " - " + result.score)

}
catch (e) {
   console.log(e)
}


```

## Supported platforms

- iOS
  


