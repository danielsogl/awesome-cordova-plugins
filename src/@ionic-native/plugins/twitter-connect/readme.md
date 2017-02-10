
<a style="float:right;font-size:12px;" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/twitter-connect/index.ts#L19">
  Improve this doc
</a>

# Twitter Connect
<!-- end header block -->

```
$ ionic plugin add twitter-connect-plugin --variable FABRIC_KEY=fabric_API_key
```

## [Usage Documentation](https://ionicframework.com/docs/v2/native/twitter-connect/)

Cordova Repo: [https://github.com/ManifestWebDesign/twitter-connect-plugin](https://github.com/ManifestWebDesign/twitter-connect-plugin)

<!-- description -->
Plugin to use Twitter Single Sign On
Uses Twitter's Fabric SDK
```typescript
import {TwitterConnect} from '@ionic-native/twitter-connect';

function onSuccess(response) {
  console.log(response);

  // Will console log something like:
  // {
  //   userName: 'myuser',
  //   userId: '12358102',
  //   secret: 'tokenSecret'
  //   token: 'accessTokenHere'
  // }
}

TwitterConnect.login().then(onSuccess, onError);

TwitterConnect.logout().then(onLogoutSuccess, onLogoutError);
```
<!-- end for prop in method.decorators[0].argumentInfo -->
<!-- end content block -->
<!-- end body block -->
