import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

/**
 * @name Android Notch
 * @description
 * This plugin enables developers to get the cutout and android devices inset sizes
 * It is based on the cordova plugin developed by @tobspr: https://github.com/tobspr/cordova-plugin-android-notch
 * This plugin works on all android versions, but we can only detect notches starting from Android 9.
 * @usage
 * ```typescript
 * import { AndroidNotch } from '@awesome-cordova-plugins/android-notch/ngx';
 *
 *
 * constructor(private androidNotch: AndroidNotch) { }
 *
 * ...
 *
 *
 * this.androidNotch.hasCutout()
 *    .then((px: number) => console.log('Inset size: '), px)
 *    .catch((error: any) => console.log('Error: ', error))
 *
 * this.androidNotch.getInsetTop()
 *    .then((px: number) => console.log('Inset size: '), px)
 *    .catch((error: any) => console.log('Error: ', error))
 *
 * this.androidNotch.getInsetRight()
 *    .then((px: number) => console.log('Inset size: '), px)
 *    .catch((error: any) => console.log('Error: ', error))
 *
 * this.androidNotch.getInsetBottom()
 *    .then((px: number) => console.log('Inset size: '), px)
 *    .catch((error: any) => console.log('Error: ', error))
 *
 * this.androidNotch.getInsetLeft()
 *    .then((px: number) => console.log('Inset size: '), px)
 *    .catch((error: any) => console.log('Error: ', error))
 *
 * ```
 */
@Plugin({
  pluginName: 'AndroidNotch',
  plugin: 'cordova-plugin-android-notch',
  pluginRef: 'AndroidNotch',
  repo: 'https://github.com/tobspr/cordova-plugin-android-notch.git',
  platforms: ['Android'],
})
@Injectable()
export class AndroidNotch extends AwesomeCordovaNativePlugin {
  /**
   * Returns true if the android device has cutout
   *
   * @returns {Promise<boolean>}
   */
  @Cordova()
  hasCutout(): Promise<boolean> {
    return;
  }

  /**
   * Returns the heigth of the top inset
   *
   * @returns {Promise<number>}
   */
  @Cordova()
  getInsetTop(): Promise<number> {
    return;
  }

  /**
   * Returns the heigth of the right inset
   *
   * @returns {Promise<number>}
   */
  @Cordova()
  getInsetRight(): Promise<number> {
    return;
  }

  /**
   * Returns the heigth of the bottom inset
   *
   * @returns {Promise<number>}
   */
  @Cordova()
  getInsetBottom(): Promise<number> {
    return;
  }

  /**
   * Returns the heigth of the left inset
   *
   * @returns {Promise<number>}
   */
  @Cordova()
  getInsetLeft(): Promise<number> {
    return;
  }
}
