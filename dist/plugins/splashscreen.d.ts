/**
 * @name Splashscreen
 * @description This plugin displays and hides a splash screen during application launch. The methods below allows showing and hiding the splashscreen after the app has loaded.
 * @usage
 * ```typescript
 * import { Splashscreen } from 'ionic-native';
 *
 *
 * Splashscreen.show();
 *
 * Splashscreen.hide();
 * ```
 */
export declare class Splashscreen {
    /**
     * Shows the splashscreen
     */
    static show(): void;
    /**
     * Hides the splashscreen
     */
    static hide(): void;
}
