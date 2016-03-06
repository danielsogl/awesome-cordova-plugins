import {Plugin, Cordova} from './plugin';

/**
 * Requires Cordova plugin: `cordova-plugin-device-motion`. For more info, please see the [Device Motion docs](https://github.com/apache/cordova-plugin-device-motion).
 *
 * ```
 * cordova plugin add https://github.com/apache/cordova-plugin-device-motion.git
 * ````
 *
 * @usage
 * ```js
 * ```
 */
@Plugin({
  plugin: 'https://github.com/apache/cordova-plugin-device-motion.git',
  pluginRef: 'navigator.accelerometer'
})
export class DeviceMotion {

    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881

}
