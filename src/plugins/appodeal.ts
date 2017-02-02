/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Add this file to /src/index.ts (follow style of other plugins)
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs.
 * - Remove this note
 *
 */
import {
  Plugin,
  Cordova,
  CordovaProperty,
  CordovaInstance,
  InstanceProperty
} from './plugin';
import { Observable } from 'rxjs/Observable';

/**
 * @name Appodeal
 * @description
 * This plugin does something
 *
 * @usage
 * ```
 * import { Appodeal } from 'ionic-native';
 *
 * Appodeal.functionName('Hello', 123)
 *   .then((something: any) => doSomething(something))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'Appodeal',
  plugin: 'com.appodeal.plugin',
  pluginRef: 'Appodeal',
  repo: 'https://github.com/appodeal/appodeal-cordova-plugin.git'
})
export class Appodeal {

  static INTERSTITIAL: number;
  static SKIPPABLE_VIDEO: number;
  static BANNER: number;
  static BANNER_BOTTOM: number;
  static BANNER_TOP: number;
  static REWARDED_VIDEO: number;
  static NON_SKIPPABLE_VIDEO: number;

  static initialize(appKey: string, adType: number): void {};

  static isInitialized(): Promise<any> { return };


  static show(adType: number): Promise<any> { return };


  static showWithPlacement(adType: number, placement: any, callback?: Function): void {};


  static hide(adType: number): void {};


  static confirm(adType: number): void {};


  static isLoaded(adType: number): Promise<any> { return };


  static isPrecache(adType: number): Promise<any> { return };


  static setAutoCache(adType: number, autoCache: any): void {};


  static cache(adType: number): void {};


  static setOnLoadedTriggerBoth(set): void {};


  static setSmartBanners(value: any): void {};


  static setBannerBackground(value: any): void {};


  static setBannerAnimation(value: any): void {};


  static set728x90Banners(value: any): void {};


  static setLogging(logging: boolean): void {};


  static setTesting(testing: boolean): void {};


  static resetUUID(): void {};


  static getVersion(callback?: Function): void {};


  static disableNetwork(network: any, adType: number): void {};


  static disableNetworkType(network: any, adType: number): void {};


  static disableLocationPermissionCheck(): void {};


  static disableWriteExternalStoragePermissionCheck(): void {};


  static enableInterstitialCallbacks(listener: Function): void {};


  static enableSkippableVideoCallbacks(listener: Function): void {};


  static enableNonSkippableVideoCallbacks(listener: Function): void {};


  static enableBannerCallbacks(listener: Function): void {};


  static enableRewardedVideoCallbacks(listener: Function): void {};


  static setCustomBooleanRule(name: any, rule: any): void {};


  static setCustomIntegerRule(name: any, rule: any): void {};


  static setCustomDoubleRule(name: any, rule: any): void {};


  static setCustomStringRule(name: any, rule: any): void {};


  static setUserId(id: any): void {};


  static setEmail(email: any): void {};


  static setBirthday(birthday: any): void {};


  static setAge(age: any): void {};


  static setGender(gender: any): void {};


  static setOccupation(occupation: any): void {};


  static setRelation(relation: any): void {};


  static setSmoking(smoking: any): void {};


  static setAlcohol(alcohol: any): void {};


  static setInterests(interests: any): void {};

}
