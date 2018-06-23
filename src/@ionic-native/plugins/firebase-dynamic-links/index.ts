import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

export interface IDynamicLink {
  matchType: 'Weak' | 'Strong';
  deepLink: string;
}

/**
 * @beta
 * @name Firebase Dynamic Links
 * @description
 * Cordova plugin for Firebase Dynamic Links
 *
 * Variables APP_DOMAIN and APP_PATH specify web URL where your app will start an activity to handle the link. They also used to setup support for App Indexing.
 * Go to firebase console and export google-services.json and GoogleService-Info.plist. Put those files into the root of your cordova app folder.
 *
 * Preferences:
 *
 * Preferences GoogleIOSClientId and GoogleAndroidClientId are used to setup dynamic links when you have an app for several platforms.
 * You can find values at your GoogleService-Info.plist (key ANDROID_CLIENT_ID) and google-services.json (key client[0].oauth_client[0].client_id).
 *
 *config.xml:
 * ```xml
 * <platform name="ios">
 *     <preference name="GoogleIOSClientId" value="..." />
 * </platform>
 * <platform name="android">
 *     <preference name="GoogleAndroidClientId" value="..." />
 * </platform>
 * ```
 * @usage
 * ```typescript
 * import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links';
 *
 *
 * constructor(private firebaseDynamicLinks: FirebaseDynamicLinks) { }
 *
 * ...
 *
 * this.firebaseDynamicLinks.onDynamicLink()
 *   .then((res: any) => console.log(res)) //Handle the logic here after opening the app with the Dynamic link
 *   .catch((error:any) => console.log(error));
 * ```
 *
 * @interfaces
 * DynamicLinksOptions
 */
@Plugin({
  pluginName: 'FirebaseDynamicLinks',
  plugin: ' cordova-plugin-firebase-dynamiclinks',
  pluginRef: 'cordova.plugins.firebase.dynamiclinks',
  repo: 'https://github.com/chemerisuk/cordova-plugin-firebase-dynamiclinks',
  install: 'ionic cordova plugin add cordova-plugin-firebase-dynamiclinks --save --variable APP_DOMAIN="example.com" --variable APP_PATH="/"',
  installVariables: ['APP_DOMAIN', 'APP_PATH'],
  platforms: ['Android', 'iOS']
})
@Injectable()
export class FirebaseDynamicLinks extends IonicNativePlugin {

  /**
   * Registers callback that is triggered on each dynamic link click.
   * @return {Observable<IDynamicLink>} Returns an observable
   */
  @Cordova({
    callbackOrder: 'reverse',
    observable: true,
  })
  onDynamicLink(): Observable<IDynamicLink> { return; }

}
