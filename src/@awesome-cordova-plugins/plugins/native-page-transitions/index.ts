import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

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
 * @name Native Page Transitions
 * @description
 * The Native Page Transitions plugin uses native hardware acceleration to animate your transitions between views. You have complete control over the type of transition, the duration, and direction.
 * @usage
 * ```typescript
 * import { NativePageTransitions, NativeTransitionOptions } from '@awesome-cordova-plugins/native-page-transitions/ngx';
 *
 * constructor(private nativePageTransitions: NativePageTransitions) { }
 *
 * ...
 *
 *
 * // example of adding a transition when a page/modal closes
 * ionViewWillLeave() {
 *
 *  let options: NativeTransitionOptions = {
 *     direction: 'up',
 *     duration: 500,
 *     slowdownfactor: 3,
 *     slidePixels: 20,
 *     iosdelay: 100,
 *     androiddelay: 150,
 *     fixedPixelsTop: 0,
 *     fixedPixelsBottom: 60
 *    }
 *
 *  this.nativePageTransitions.slide(options)
 *    .then(onSuccess)
 *    .catch(onError);
 *
 * }
 *
 *
 * // example of adding a transition when pushing a new page
 * openPage(page: any) {
 *
 *   this.nativePageTransitions.slide(options);
 *   this.navCtrl.push(page);
 *
 * }
 *
 * ```
 */
@Plugin({
  pluginName: 'NativePageTransitions',
  plugin: 'com.telerik.plugins.nativepagetransitions',
  pluginRef: 'plugins.nativepagetransitions',
  repo: 'https://github.com/Telerik-Verified-Plugins/NativePageTransitions',
  platforms: ['Android', 'iOS', 'Windows Phone 8'],
})
@Injectable()
export class NativePageTransitions extends AwesomeCordovaNativePlugin {
  /**
   * Perform a slide animation
   *
   * @param options {NativeTransitionOptions} Options for the transition
   * @returns {Promise<any>}
   */
  @Cordova()
  slide(options: NativeTransitionOptions): Promise<any> {
    return;
  }

  /**
   * Perform a flip animation
   *
   * @param options {NativeTransitionOptions} Options for the transition
   * @returns {Promise<any>}
   */
  @Cordova()
  flip(options: NativeTransitionOptions): Promise<any> {
    return;
  }

  /**
   * Perform a fade animation
   *
   * @param options {NativeTransitionOptions} Options for the transition
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['iOS', 'Android'] })
  fade(options: NativeTransitionOptions): Promise<any> {
    return;
  }

  /**
   * Perform a slide animation
   *
   * @param options {NativeTransitionOptions} Options for the transition
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['iOS', 'Android'] })
  drawer(options: NativeTransitionOptions): Promise<any> {
    return;
  }

  /**
   * Perform a slide animation
   *
   * @param options {NativeTransitionOptions} Options for the transition
   * @returns {Promise<any>}
   */
  @Cordova({ platforms: ['iOS'] })
  curl(options: NativeTransitionOptions): Promise<any> {
    return;
  }

  /**
   * Execute pending transition
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  executePendingTransition(): Promise<any> {
    return;
  }

  /**
   * Cancel pending transition
   *
   * @returns {Promise<any>}
   */
  @Cordova()
  cancelPendingTransition(): Promise<any> {
    return;
  }
}
