import {Plugin, Cordova} from './plugin';

/**
 * @name Flashlight
 * @description This plugin allows you to switch the flashlight / torch of the device on and off.
 *
 * Requires Cordova plugin: `cordova-plugin-flashlight`. For more info, please see the [Flashlight plugin docs](https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin).
 *
 * @usage
 * ```js
 * ```
 */
@Plugin({
  plugin: 'https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin.git',
  pluginRef: 'window.plugins.flashlight'
})
export class Flashlight {


  /**
   * Checks if the flash light is available
   * @returns {Promise<boolean>} Returns a promise that resolves with a boolean stating if the flash light is available.
   */
  @Cordova()
  static available() : Promise<boolean>{
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881

    return new Promise<boolean>((res,rej)=>{});
  }

  /**
   * Switches the flashlight on
   * @returns {Promise<boolean>}
   */
  @Cordova()
  static switchOn() : Promise<boolean>{
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881

    return new Promise<boolean>((res,rej)=>{});
  }

  /**
   * Switches the flash light off
   * @returns {Promise<boolean>}
   */
  @Cordova()
  static switchOff() : Promise<boolean>{
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881

    return new Promise<boolean>((res,rej)=>{});
  }

  /**
   * Toggles the flashlight
   * @returns {Promise<any>}
   */
  @Cordova()
  static toggle() : Promise<any> {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881

    return new Promise<any>((res,rej)=>{});
  }


  /**
   * Checks if the flash light is turned on.
   * Returns a boolean
   */
  @Cordova({
    sync: true
  })
  static isSwitchedOn() : boolean {
    // DUMMY BOOLEAN, @Cordova decorator will replace value.
    return true;
  }

}