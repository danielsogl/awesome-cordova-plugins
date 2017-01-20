import { Plugin, Cordova } from './plugin';

export interface NativeTransitionOptions {
  direction?: string;
  duration?: number;
  slowdownfactor?: number;
  slidePixels?: number;
  iosdelay?: number;
  androiddelay?: number;
  winphonedelay?: number;
  fixedPixelsTop?: number;
  fixedPixelsBottom?: number;
  action?: string;
  origin?: string;
  href?: string;
}

/**
 * @name NativePageTransitions
 * @description
 * The Native Page Transitions plugin uses native hardware acceleration to animate your transitions between views. You have complete control over the type of transition, the duration, and direction.
 *
 * @usage
 * ```
 * import {NativePageTransitions, NativeTransitionOptions} from 'ionic-native';
 *
 * let options: NativeTransitionOptions = {
 *    direction: 'up',
 *    duration: 500,
 *    slowdownfactor: 3,
 *    slidePixels: 20,
 *    iosdelay: 100,
 *    androiddelay: 150,
 *    winphonedelay: 250,
 *    fixedPixelsTop: 0,
 *    fixedPixelsBottom: 60
 *  };
 *
 * NativePageTransitions.slide(options)
 *   .then(onSuccess)
 *   .catch(onError);
 *
 * ```
 */
@Plugin({
  pluginName: 'NativePageTransitions',
  plugin: 'com.telerik.plugins.nativepagetransitions',
  pluginRef: 'plugins.nativepagetransitions',
  repo: 'https://github.com/Telerik-Verified-Plugins/NativePageTransitions',
  platforms: ['iOS', 'Android', 'Windows Phone']
})
export class NativePageTransitions {
  /**
   * Perform a slide animation
   * @param options {NativeTransitionOptions} Options for the transition
   * @returns {Promise<any>}
   */
  @Cordova()
  static slide(options: NativeTransitionOptions): Promise<any> { return; }

  /**
   * Perform a flip animation
   * @param options {NativeTransitionOptions} Options for the transition
   * @returns {Promise<any>}
   */
  @Cordova()
  static flip(options: NativeTransitionOptions): Promise<any> { return; }

  /**
   * Perform a fade animation
   * @param options {NativeTransitionOptions} Options for the transition
   * @returns {Promise<any>}
   */
  @Cordova({platforms: ['iOS', 'Android']})
  static fade(options: NativeTransitionOptions): Promise<any> { return; }


  /**
   * Perform a slide animation
   * @param options {NativeTransitionOptions} Options for the transition
   * @returns {Promise<any>}
   */
  @Cordova({platforms: ['iOS', 'Android']})
  static drawer(options: NativeTransitionOptions): Promise<any> { return; }



  /**
   * Perform a slide animation
   * @param options {NativeTransitionOptions} Options for the transition
   * @returns {Promise<any>}
   */
  @Cordova({platforms: ['iOS']})
  static curl(options: NativeTransitionOptions): Promise<any> { return; }

}

