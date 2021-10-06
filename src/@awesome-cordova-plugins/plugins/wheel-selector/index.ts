import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

export interface WheelSelectorItem {
  description?: string;
}

export interface DefaultItem {
  index: number;
  value: string;
}

export interface WheelSelectorOptions {
  /**
   * The title of the selector's input box
   */
  title: string;

  /**
   * The items to display (array of items).
   */
  items: WheelSelectorItem[][];

  /**
   * Which items to display by default.
   */
  defaultItems?: DefaultItem[];

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
  theme?: 'light' | 'dark';

  /**
   * Whether to have the wheels 'wrap' (Android only)
   * Default: false
   */
  wrapWheelText?: boolean;

  /**
   * The json key to display, by default it is description, this allows for setting any
   * key/value to be displayed
   * Default: description
   */
  displayKey?: string;
}

export interface WheelSelectorData {
  data: any;
}

/**
 * @beta
 * @name WheelSelector Plugin
 * @description Native wheel selector for Cordova (Android/iOS).
 * @usage
 * ```
 * import { WheelSelector } from '@awesome-cordova-plugins/wheel-selector/ngx';
 *
 *
 * constructor(private selector: WheelSelector) { }
 *
 * ...
 *
 * const jsonData = {
 *   numbers: [
 *    { description: "1" },
 *     { description: "2" },
 *     { description: "3" }
 *   ],
 *   fruits: [
 *     { description: "Apple" },
 *     { description: "Banana" },
 *     { description: "Tangerine" }
 *   ],
 *   firstNames: [
 *     { name: "Fred", id: '1' },
 *     { name: "Jane", id: '2' },
 *     { name: "Bob", id: '3' },
 *     { name: "Earl", id: '4' },
 *     { name: "Eunice", id: '5' }
 *   ],
 *   lastNames: [
 *     { name: "Johnson", id: '100' },
 *     { name: "Doe", id: '101' },
 *     { name: "Kinishiwa", id: '102' },
 *     { name: "Gordon", id: '103' },
 *     { name: "Smith", id: '104' }
 *   ]
 * }
 *
 * ...
 *
 * // basic number selection, index is always returned in the result
 *  selectANumber() {
 *    this.selector.show({
 *      title: "How Many?",
 *      items: [
 *        this.jsonData.numbers
 *      ],
 *    }).then(
 *      result => {
 *        console.log(result[0].description + ' at index: ' + result[0].index);
 *      },
 *      err => console.log('Error: ', err)
 *      );
 *  }
 *
 *  ...
 *
 *  // basic selection, setting initial displayed default values: '3' 'Banana'
 *  selectFruit() {
 *    this.selector.show({
 *      title: "How Much?",
 *      items: [
 *        this.jsonData.numbers, this.jsonData.fruits
 *      ],
 *      positiveButtonText: "Ok",
 *      negativeButtonText: "Nope",
 *      defaultItems: [
 *  	  {index:0, value: this.jsonData.numbers[2].description},
 *  	  {index: 1, value: this.jsonData.fruits[3].description}
 *  	]
 *    }).then(
 *      result => {
 *        console.log(result[0].description + ' ' + result[1].description);
 *      },
 *      err => console.log('Error: ' + JSON.stringify(err))
 *      );
 *  }
 *
 *  ...
 *
 *  // more complex as overrides which key to display
 *  // then retrieve properties from original data
 *  selectNamesUsingDisplayKey() {
 *    this.selector.show({
 *      title: "Who?",
 *      items: [
 *        this.jsonData.firstNames, this.jsonData.lastNames
 *      ],
 *      displayKey: 'name',
 *      defaultItems: [
 *  	  {index:0, value: this.jsonData.firstNames[2].name},
 *        {index: 0, value: this.jsonData.lastNames[3].name}
 *      ]
 *    }).then(
 *      result => {
 *        console.log(result[0].name + ' (id= ' + this.jsonData.firstNames[result[0].index].id + '), ' +
 *          result[1].name + ' (id=' + this.jsonData.lastNames[result[1].index].id + ')');
 *      },
 *      err => console.log('Error: ' + JSON.stringify(err))
 *      );
 *  }
 *
 * ```
 * @interfaces
 * WheelSelectorOptions
 */
@Plugin({
  pluginName: 'WheelSelector',
  plugin: 'cordova-wheel-selector-plugin',
  pluginRef: 'SelectorCordovaPlugin',
  repo: 'https://github.com/jasonmamy/cordova-wheel-selector-plugin',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class WheelSelector extends AwesomeCordovaNativePlugin {
  /**
   * Shows the wheel selector
   *
   * @param {WheelSelectorOptions} options Options for the wheel selector
   * @returns {Promise<WheelSelectorData>} Returns a promise that resolves with the selected items, or an error.
   */
  @Cordova()
  show(options: WheelSelectorOptions): Promise<WheelSelectorData> {
    return;
  }

  /**
   * Hide the selector
   *
   * @returns {Promise<void>}
   */
  @Cordova({
    platforms: ['iOS'],
  })
  hideSelector(): Promise<void> {
    return;
  }
}
