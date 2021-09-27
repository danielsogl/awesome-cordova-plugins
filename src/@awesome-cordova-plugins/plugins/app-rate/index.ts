import { Injectable } from '@angular/core';
import { Cordova, CordovaProperty, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

export enum AppRateReviewTypeIos {
  /**
   * Write review directly in your application (iOS 10.3+), limited to 3 prompts per year.
   * Will fallback to 'AppStoreReview' for other iOS versions
   */
  InAppReview = 'InAppReview',
  /**
   * Open the store within the app. Use this option as an alternative to inAppReview to avoid the rate action from doing nothing
   */
  AppStoreReview = 'AppStoreReview',
  /**
   * Open the store using the openUrl preference (defaults to InAppBrowser). Be advised that WKWebView might not open the app store links
   */
  InAppBrowser = 'InAppBrowser',
}

export enum AppRateReviewTypeAndroid {
  /**
   * Write review directly in your application. Will fallback to InAppBrowser if not available
   */
  InAppReview = 'InAppReview',
  /**
   *  Open the store using the openUrl preference (defaults to InAppBrowser)
   */
  InAppBrowser = 'InAppBrowser',
}

export enum AppRatePromptType {
  /**
   * Prompt asking to rate the app.
   */
  AppRatingPrompt = 'AppRatingPrompt',

  /**
   * Prompt asking to rate the app within the store.
   */
  StoreRatingPrompt = 'StoreRatingPrompt',

  /**
   * Prompt asking to give feedback.
   */
  FeedbackPrompt = 'FeedbackPrompt',
}

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

  reviewType?: {
    /**
     * the type of review display to show the user on iOS
     * Default: AppStoreReview
     */
    ios?: AppRateReviewTypeIos;
    /**
     * the type of review display to show the user on Android
     * Default: InAppBrowser
     */
    android?: AppRateReviewTypeAndroid;
  };

  /**
   * Simple Mode to display the rate dialog directly and bypass negative feedback filtering flow
   */
  simpleMode?: boolean;

  /**
   * Disabling would skip displaying a rate dialog if in app review is set and available. Defaults to `true`
   */
  showPromptForInAppReview?: boolean;

  /**
   * Custom locale object
   */
  customLocale?: AppRateCustomLocale;

  /**
   * Callbacks for events
   */
  callbacks?: AppRateCallbacks;

  /**
   * App Store URLS
   */
  storeAppURL?: AppUrls;

  /**
   * Open URL function
   */
  openUrl?: (url: string) => void;
}

export interface AppRateCustomLocale {
  /** Title */
  title?: string;

  /** Message */
  message?: string;

  /** Cancel button label */
  cancelButtonLabel?: string;

  /** Later button label */
  laterButtonLabel?: string;

  /** Rate button label */
  rateButtonLabel?: string;

  /** Yes button label */
  yesButtonLabel?: string;

  /** No button label */
  noButtonLabel?: string;

  /** App rate prompt title */
  appRatePromptTitle?: string;

  /** Feedback prompt title */
  feedbackPromptTitle?: string;

  /** Feedback prompt message */
  appRatePromptMessage?: string;

  /** Feedback prompt message */
  feedbackPromptMessage?: string;
}

export interface AppRateLocales {
  addLocale(localeObject: AppRateCustomLocale): AppRateCustomLocale;

  getLocale(language: string, applicationTitle?: string, customLocale?: AppRateCustomLocale): AppRateCustomLocale;

  getLocalesNames(): { [prop: string]: AppRateCustomLocale };
}

export interface AppRateCallbacks {
  /**
   * call back function. called when user clicked on rate-dialog buttons
   */
  onButtonClicked?: (buttonIndex: number, buttonLabel: string, promptType: AppRatePromptType) => void;

  /**
   * call back function. called when rate-dialog showing
   */
  onRateDialogShow?: (rateCallback: (buttonIndex: number) => void) => void;
  /**
   * call back function. called when user clicked on negative feedback
   */
  handleNegativeFeedback?: () => void;

  done?: () => void;
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
 * @premier app-rate
 * @description
 * The AppRate plugin makes it easy to prompt the user to rate your app, either now, later, or never.
 *
 * Requires Cordova plugin: cordova-plugin-apprate. For more info, please see the [AppRate plugin docs](https://github.com/pushandplay/cordova-plugin-apprate).
 * @usage
 * ```typescript
 * import { AppRate } from '@awesome-cordova-plugins/app-rate/ngx';
 *
 * constructor(private appRate: AppRate) { }
 *
 * ...
 * // set certain preferences
 * this.appRate.setPreferences({
 *   storeAppURL: {
 *     ios: '<app_id>',
 *     android: 'market://details?id=<package_name>',
 *     windows: 'ms-windows-store://review/?ProductId=<store_id>'
 *   }
 * });
 *
 * this.appRate.promptForRating(true);
 *
 * // or, override the whole preferences object
 * this.appRate.setPreferences({
 *   usesUntilPrompt: 3,
 *   storeAppURL: {
 *    ios: '<app_id>',
 *    android: 'market://details?id=<package_name>',
 *    windows: 'ms-windows-store://review/?ProductId=<store_id>'
 *   }
 * });
 *
 * this.appRate.promptForRating(false);
 * ```
 * @interfaces
 * AppRatePreferences
 * AppUrls
 * AppRateCallbacks
 * AppRateCustomLocal
 */
@Plugin({
  pluginName: 'AppRate',
  plugin: 'cordova-plugin-apprate',
  pluginRef: 'AppRate',
  repo: 'https://github.com/pushandplay/cordova-plugin-apprate',
  platforms: ['Android', 'BlackBerry 10', 'iOS', 'Windows'],
})
@Injectable()
export class AppRate extends AwesomeCordovaNativePlugin {
  /**
   * Manager custom locales
   */
  @CordovaProperty()
  locales: AppRateLocales;

  /**
   * Set preferences
   *
   * @param pref
   * @returns void
   */
  @Cordova()
  setPreferences(pref: AppRatePreferences): void {
    return;
  }

  /**
   * Get preferences
   *
   * @returns AppRatePreferences
   */
  @Cordova()
  getPreferences(): AppRatePreferences {
    return;
  }

  /**
   * Prompts the user for rating
   *
   * @param {boolean} immediately  Show the rating prompt immediately.
   */
  @Cordova()
  promptForRating(immediately?: boolean): void {
    return;
  }

  /**
   * Immediately send the user to the app store rating page
   */
  @Cordova()
  navigateToAppStore(): void {}
}
