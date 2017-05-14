import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';

export interface WheelSelectorItem {
  description: string;
}

export interface WheelSelectorOptions {
  /**
   * The title of the selector's input box
   */
  title: string;

  /**
   * The items to display (array of items).
   */
  items: Array<Array<WheelSelectorItem>>;

  /**
   * Which items to display by default, example ["2","Apple"] (if items.length is 2 for instance)
   */
  defaultItems?: Array<WheelSelectorItem>;

  /**
   * The 'ok' button text
   * Default: Done
   */
  positiveButtonText?: string;

  /**
   * The 'cancel' button text
   * Default: Cancel
   */
  negativeButtonText?: string;

  /**
   * Android only - theme color, 'light' or 'dark'.
   * Default: light
   */
  theme?: string;

  /**
   * Whether to have the wheels 'wrap' (Android only)
   * Default: false
   */
  wrapWheelText?: boolean;
}

export interface WheelSelectorData {
  data: any;
}

/**
 * @beta
 * @name WheelSelector Plugin
 * @description Native wheel selector for Cordova (Android/iOS).
 *
 * @usage
 * ```
 * import { WheelSelector } from '@ionic-native/wheel-selector';
 *
 *
 * constructor(private selector: WheelSelector) { }
 *
 * ...
 *
 * let jsonData = {
 *     numbers: [
 *      { description: "1" },
 *       { description: "2" },
 *       { description: "3" }
 *     ],
 *     fruits: [
 *       { description: "Apple" },
 *       { description: "Banana" },
 *       { description: "Tangerine" }
 *     ],
 *   };
 *
 *   //use most of the default values
 *   this.selector.show({
 *     title: "Select some Fruit",
 *     items: [
 *       jsonData.numbers,
 *       jsonData.fruits
 *     ]
 *   }).then(
 *     result => {
 *       console.log('Selected: ' + result[0].description + ' at index: ' + result[0].index
 *         + ' and ' + result[1].description + ' at index: ' + result[1].index);
 *     },
 *     err => console.log('Error occurred while getting result: ', err)
 *     );
 *
 *   ...
 *
 *   //set some initial default values to display: "2", "Tangerine"
 *   this.selector.show({
 *     title: "Select some Fruit",
 *     items: [
 *       jsonData.numbers,
 *       jsonData.fruits
 *     ],
 *     defaultItems: [
 *       jsonData.numbers[1],
 *       jsonData.fruits[2]
 *     ]
 *   }).then(
 *     result => {
 *       console.log('Selected: ' + result[0].description + ' at index: ' + result[0].index
 *         + ' and ' + result[1].description + ' at index: ' + result[1].index);
 *     },
 *     err => console.log('Error occurred while getting result: ', err)
 *     );
 *
 *
 * ```
 *
 * @interfaces
 * WheelSelectorOptions
 */
@Plugin({
  pluginName: 'WheelSelector',
  plugin: 'cordova-wheel-selector-plugin',
  pluginRef: 'SelectorCordovaPlugin',
  repo: 'https://github.com/jasonmamy/cordova-wheel-selector-plugin',
  platforms: ['Android', 'iOS']
})

@Injectable()
export class WheelSelector extends IonicNativePlugin {

  /**
   * Shows the wheel selector
   * @param {WheelSelectorOptions} options Options for the wheel selector
   * @returns {Promise<WheelSelectorData>} Returns a promise that resolves with the selected items, or an error.
   */
  @Cordova()
  show(options: WheelSelectorOptions): Promise<WheelSelectorData> {
    return;
  }

  /**
   * Hide the selector
   * @returns {Promise<void>}
   */
  @Cordova({
    platforms: ['iOS']
  })
  hideSelector(): Promise<void> { return; }

}
