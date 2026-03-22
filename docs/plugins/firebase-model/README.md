---
description: >-
  Firebase Model plugin for Cordova and Ionic. This plugin downloads the TensorFlow model from firebase and classify the images.  ```typescript import {…
---

# Firebase Model

This plugin downloads the TensorFlow model from firebase and classify the images.

```typescript
import { FirebaseModel } from '@awesome-cordova-plugins/firebase-model';


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

## Installation

```bash
ionic cordova plugin add cordova-plugin-firebase-model
npm install @awesome-cordova-plugins/firebase-model
```

## Supported Platforms

- iOS

## Further Information

- [Installation Guide](../../installation.md)
- [FAQ](../../faq.md)
