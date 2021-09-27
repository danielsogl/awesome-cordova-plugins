import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

export interface IDynamicLink {
  matchType: 'Weak' | 'Strong';
  deepLink: string;
}

export interface ILinkOptions {
  domainUriPrefix?: string;
  link?: string;
  androidInfo?: {
    androidPackageName?: string;
    androidFallbackLink?: string;
    androidMinPackageVersionCode?: number;
  };
  iosInfo?: {
    iosBundleId?: string;
    iosFallbackLink?: string;
    iosIpadFallbackLink?: string;
    iosIpadBundleId?: string;
    iosAppStoreId?: string;
  };
  navigationInfo?: {
    enableForcedRedirect?: boolean;
  };
  analyticsInfo?: {
    googlePlayAnalytics?: {
      utmSource?: string;
      utmMedium?: string;
      utmCampaign?: string;
      utmTerm?: string;
      utmContent?: string;
    };
    itunesConnectAnalytics?: {
      at?: string;
      ct?: string;
      pt?: string;
    };
  };
  socialMetaTagInfo?: {
    socialTitle?: string;
    socialDescription?: string;
    socialImageLink?: string;
  };
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
 * config.xml:
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
 * import { FirebaseDynamicLinks } from '@awesome-cordova-plugins/firebase-dynamic-links/ngx';
 *
 *
 * constructor(private firebaseDynamicLinks: FirebaseDynamicLinks) { }
 *
 * ...
 * // Handle the logic here after opening the app with the Dynamic link
 * this.firebaseDynamicLinks.onDynamicLink()
 *   .subscribe((res: any) => console.log(res), (error:any) => console.log(error));
 * ```
 * @interfaces
 * DynamicLinksOptions
 */
@Plugin({
  pluginName: 'FirebaseDynamicLinks',
  plugin: ' cordova-plugin-firebase-dynamiclinks',
  pluginRef: 'cordova.plugins.firebase.dynamiclinks',
  repo: 'https://github.com/chemerisuk/cordova-plugin-firebase-dynamiclinks',
  install:
    'ionic cordova plugin add cordova-plugin-firebase-dynamiclinks --save --variable APP_DOMAIN="example.com" --variable APP_PATH="/"',
  installVariables: ['APP_DOMAIN', 'APP_PATH'],
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class FirebaseDynamicLinks extends AwesomeCordovaNativePlugin {
  /**
   * Determines if the app has a pending dynamic link and provides access to the dynamic link parameters.
   *
   * @returns {Promise<IDynamicLink>} Returns a promise
   */
  @Cordova({
    otherPromise: true,
  })
  getDynamicLink(): Promise<IDynamicLink> {
    return;
  }

  /**
   * Registers callback that is triggered on each dynamic link click.
   *
   * @returns {Observable<IDynamicLink>} Returns an observable
   */
  @Cordova({
    callbackOrder: 'reverse',
    observable: true,
  })
  onDynamicLink(): Observable<IDynamicLink> {
    return;
  }

  /**
   * Creates a Dynamic Link from the parameters. Returns a promise fulfilled with the new dynamic link url.
   *
   * @param {ILinkOptions} opt [Dynamic Link Parameters](https://github.com/chemerisuk/cordova-plugin-firebase-dynamiclinks#dynamic-link-parameters)
   * @param opts
   * @returns {Promise<string>} Returns a promise with the url
   */
  @Cordova({
    otherPromise: true,
  })
  createDynamicLink(opts: ILinkOptions): Promise<string> {
    return;
  }

  /**
   * Creates a shortened Dynamic Link from the parameters. Shorten the path to a string that is only as long as needed to be unique, with a minimum length of 4 characters. Use this method if sensitive information would not be exposed if a short Dynamic Link URL were guessed.
   *
   * @param {ILinkOptions} opt [Dynamic Link Parameters](https://github.com/chemerisuk/cordova-plugin-firebase-dynamiclinks#dynamic-link-parameters)
   * @param opts
   * @returns {Promise<string>} Returns a promise with the url
   */
  @Cordova({
    otherPromise: true,
  })
  createShortDynamicLink(opts: ILinkOptions): Promise<string> {
    return;
  }

  /**
   * Creates a Dynamic Link from the parameters. Shorten the path to an unguessable string. Such strings are created by base62-encoding randomly generated 96-bit numbers, and consist of 17 alphanumeric characters. Use unguessable strings to prevent your Dynamic Links from being crawled, which can potentially expose sensitive information.
   *
   * @param {ILinkOptions} opt [Dynamic Link Parameters](https://github.com/chemerisuk/cordova-plugin-firebase-dynamiclinks#dynamic-link-parameters)
   * @param opts
   * @returns {Promise<string>} Returns a promise with the url
   */
  @Cordova({
    otherPromise: true,
  })
  createUnguessableDynamicLink(opts: ILinkOptions): Promise<string> {
    return;
  }
}
