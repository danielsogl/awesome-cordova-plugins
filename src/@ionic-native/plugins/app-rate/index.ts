import { Injectable } from '@angular/core';
import { Cordova, CordovaProperty, Plugin } from '@ionic-native/core';


declare var window;

export interface AppRatePreferences {

  /**
   * Custom BCP 47 language tag
   */
  useLanguage?: string;

  /**
   * Custom application title
   */
  displayAppName?: string;

  /**
   * Show dialog again when application version will be updated. Defaults to `true`
   */
  promptAgainForEachNewVersion?: boolean;

  /**
   * count of runs of application before dialog will be displayed. Defaults to `3`
   */
  usesUntilPrompt?: number;

  /**
   * leave app or no when application page opened in app store (now supported only for iOS). Defaults to `false`
   */
  openStoreInApp?: boolean;

  /**
   * use custom view for rate dialog. Defaults to `false`
   */
  useCustomRateDialog?: boolean;

  /**
   * Custom locale object
   */
  customLocale?: any;

  /**
   * Callbacks for events
   */
  callbacks?: AppRateCallbacks;

  /**
   * App Store URLS
   */
  storeAppURL?: AppUrls;

}

export interface AppRateCallbacks {

  /**
   * call back function. called when user clicked on rate-dialog buttons
   */
  onButtonClicked?: Function;

  /**
   * call back function. called when rate-dialog showing
   */
  onRateDialogShow?: Function;

}

export interface AppUrls {

  /**
   * application id in AppStore
   */
  ios?: string;

  /**
   * application URL in GooglePlay
   */
  android?: string;

  /**
   * application URL in Windows Store
   */
  windows?: string;

  /**
   * application URL in AppWorld
   */
  blackberry?: string;

  /**
   * application URL in WindowsStore
   */
  windows8?: string;

}

/**
 * @name App Rate
 * @description
 * The AppRate plugin makes it easy to prompt the user to rate your app, either now, later, or never.
 *
 * Requires Cordova plugin: cordova-plugin-apprate. For more info, please see the [AppRate plugin docs](https://github.com/pushandplay/cordova-plugin-apprate).
 *
 * @usage
 * ```typescript
 * import { AppRate } from '@ionic-native/app-rate';
 *
 * constructor(private appRate: AppRate) { }
 *
 * ...
 *
 *  this.appRate.preferences.storeAppURL = {
 *    ios: '<my_app_id>',
 *    android: 'market://details?id=<package_name>',
 *    windows: 'ms-windows-store://review/?ProductId=<Store_ID>'
 *  };
 *
 * this.appRate.promptForRating(false);
 * ```
 *
 * @interfaces
 * AppRatePreferences
 * AppUrls
 * AppRateCallbacks
 *
 */
@Plugin({
  pluginName: 'AppRate',
  plugin: 'cordova-plugin-apprate',
  pluginRef: 'AppRate',
  repo: 'https://github.com/pushandplay/cordova-plugin-apprate',
  platforms: ['Android', 'iOS', 'Windows (experimental)']
})
@Injectable()
export class AppRate {

  /**
   * Configure various settings for the Rating View.
   * See table below for options
   */
  @CordovaProperty
  preferences: AppRatePreferences;

  /**
   * Prompts the user for rating
   * @param {boolean} immediately  Show the rating prompt immediately.
   */
  @Cordova()
  promptForRating(immediately: boolean): void { };

}
