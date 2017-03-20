import { Injectable } from '@angular/core';
import { Plugin, Cordova } from '@ionic-native/core';
/**
 * @name Stepcounter
 * @description
 * Cordova plugin for using device's stepcounter on Android (API > 19)
 *
 * Use to
 * - start and stop stepcounter service
 * - read device's stepcounter data
 *
 * @usage
 * ```
 * import { Stepcounter } from '@ionic-native/stepcounter';
 *
 * constructor(private stepcounter: Stepcounter) { }
 *
 * ...
 *
 * let startingOffset = 0;
 * this.stepcounter.start(startingOffset).then(onSuccess => console.log('stepcounter-start success', onSuccess), onFailure => console.log('stepcounter-start error', onFailure));
 *
 * this.stepcounter.getHistory().then(historyObj => console.log('stepcounter-history success', historyObj), onFailure => console.log('stepcounter-history error', onFailure));
 *
 * ```
 */
@Plugin({
  pluginName: 'Stepcounter',
  plugin: 'https://github.com/Slidee/cordova-plugin-stepcounter',
  pluginRef: 'stepcounter',
  repo: 'https://github.com/Slidee/cordova-plugin-stepcounter',
  platforms: ['Android']
})
@Injectable()
export class Stepcounter {

  /**
   * Start the step counter
   *
   * @param startingOffset {number} will be added to the total steps counted in this session
   * @returns {Promise<any | number>} Returns a Promise that resolves on success or rejects on failure
   */
  @Cordova()
  start(startingOffset: number): Promise<number | any> { return; }

  /**
   * Stop the step counter
   * @returns {Promise<any | number>} Returns a Promise that resolves on success with the amount of steps since the start command has been called, or rejects on failure
   */
  @Cordova()
  stop(): Promise<number | any> { return; }

  /**
   * Get the amount of steps for today (or -1 if it no data given)
   * @returns {Promise<any | number>} Returns a Promise that resolves on success with the amount of steps today, or rejects on failure
   */
  @Cordova()
  getTodayStepCount(): Promise<number | any> { return; }

  /**
   * Get the amount of steps since the start command has been called
   * @returns {Promise<any | number>} Returns a Promise that resolves on success with the amount of steps since the start command has been called, or rejects on failure
   */
  @Cordova()
  getStepCount(): Promise<number | any> { return; }

  /**
   * Returns true/false if Android device is running >API level 19 && has the step counter API available
   * @returns {Promise<any | boolean>} Returns a Promise that resolves on success, or rejects on failure
   */
  @Cordova()
  deviceCanCountSteps(): Promise<boolean | any> { return; }

  /**
   * Get the step history (JavaScript object)
   * @returns {Promise<any>} Returns a Promise that resolves on success, or rejects on failure
   */
  @Cordova()
  getHistory(): Promise<any> { return; }
}
