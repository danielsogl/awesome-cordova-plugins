import { IonicNativePlugin } from '@ionic-native/core';
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
 *
 * @usage
 * ```typescript
 * import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
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
 *    };
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
export declare class NativePageTransitions extends IonicNativePlugin {
    /**
     * Perform a slide animation
     * @param options {NativeTransitionOptions} Options for the transition
     * @returns {Promise<any>}
     */
    slide(options: NativeTransitionOptions): Promise<any>;
    /**
     * Perform a flip animation
     * @param options {NativeTransitionOptions} Options for the transition
     * @returns {Promise<any>}
     */
    flip(options: NativeTransitionOptions): Promise<any>;
    /**
     * Perform a fade animation
     * @param options {NativeTransitionOptions} Options for the transition
     * @returns {Promise<any>}
     */
    fade(options: NativeTransitionOptions): Promise<any>;
    /**
     * Perform a slide animation
     * @param options {NativeTransitionOptions} Options for the transition
     * @returns {Promise<any>}
     */
    drawer(options: NativeTransitionOptions): Promise<any>;
    /**
     * Perform a slide animation
     * @param options {NativeTransitionOptions} Options for the transition
     * @returns {Promise<any>}
     */
    curl(options: NativeTransitionOptions): Promise<any>;
    /**
     * Execute pending transition
     * @returns {Promise<any>}
     */
    executePendingTransition(): Promise<any>;
    /**
     * Cancel pending transition
     * @returns {Promise<any>}
     */
    cancelPendingTransition(): Promise<any>;
}
