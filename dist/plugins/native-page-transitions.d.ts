/**
 * @name NativePageTransitions
 * @description
 * The Native Page Transitions plugin uses native hardware acceleration to animate your transitions between views. You have complete control over the type of transition, the duration, and direction.
 *
 * @usage
 * ```
 * import {NativePageTransitions, TransitionOptions} from 'ionic-native';
 *
 * let options: TransitionOptions = {
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
export declare class NativePageTransitions {
    /**
     * Perform a slide animation
     * @param options {TransitionOptions} Options for the transition
     */
    static slide(options: TransitionOptions): Promise<any>;
    /**
     * Perform a flip animation
     * @param options {TransitionOptions} Options for the transition
     */
    static flip(options: TransitionOptions): Promise<any>;
    /**
     * Perform a fade animation
     * @param options {TransitionOptions} Options for the transition
     */
    static fade(options: TransitionOptions): Promise<any>;
    /**
     * Perform a slide animation
     * @param options {TransitionOptions} Options for the transition
     */
    static drawer(options: TransitionOptions): Promise<any>;
    /**
     * Perform a slide animation
     * @param options {TransitionOptions} Options for the transition
     */
    static curl(options: TransitionOptions): Promise<any>;
}
export interface TransitionOptions {
    direction?: string;
    duration?: number;
    slowdownfactor?: number;
    slidePixels?: number;
    iosdelay?: number;
    androiddelay?: number;
    winphonedelay?: number;
    fixedPixelsTops?: number;
    fixedPixelsBottom?: number;
}
