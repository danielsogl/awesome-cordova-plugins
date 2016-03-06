import {Plugin, Cordova} from './plugin';

/**
 * Requires Cordova plugin: cordova-plugin-appavailability. For more info, please see the [AppAvailability plugin docs](https://github.com/ohh2ahh/AppAvailability).
 *
 * ```
 * cordova plugin add https://github.com/ohh2ahh/AppAvailability.git
 * ```
 *
 * @usage
 * ```js
 * ```
 */
@Plugin({
  plugin: 'https://github.com/ohh2ahh/AppAvailability.git',
  pluginRef: 'appAvailability'
})
export class AppAvailability {

}
