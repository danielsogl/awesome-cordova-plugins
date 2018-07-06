var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';
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
 * };
 *
 * ...
 *
 * //basic number selection, index is always returned in the result
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
 *  //basic selection, setting initial displayed default values: '3' 'Banana'
 *  selectFruit() {
 *    this.selector.show({
 *      title: "How Much?",
 *      items: [
 *        this.jsonData.numbers, this.jsonData.fruits
 *      ],
 *      positiveButtonText: "Ok",
 *      negativeButtonText: "Nope",
 *      defaultItems: [
 *        this.jsonData.numbers[2], // '3'
 *        this.jsonData.fruits[3] // 'Banana'
 *      ]
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
 *  //more complex as overrides which key to display
 *  //then retrieve properties from original data
 *  selectNamesUsingDisplayKey() {
 *    this.selector.show({
 *      title: "Who?",
 *      items: [
 *        this.jsonData.firstNames, this.jsonData.lastNames
 *      ],
 *      displayKey: 'name',
 *      defaultItems: [
 *        this.jsonData.firstNames[2],
 *        this.jsonData.lastNames[3]
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
 *
 * @interfaces
 * WheelSelectorOptions
 */
var WheelSelector = (function (_super) {
    __extends(WheelSelector, _super);
    function WheelSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Shows the wheel selector
     * @param {WheelSelectorOptions} options Options for the wheel selector
     * @returns {Promise<WheelSelectorData>} Returns a promise that resolves with the selected items, or an error.
     */
    WheelSelector.prototype.show = function (options) {
        return;
    };
    /**
     * Hide the selector
     * @returns {Promise<void>}
     */
    WheelSelector.prototype.hideSelector = function () { return; };
    return WheelSelector;
}(IonicNativePlugin));
WheelSelector.decorators = [
    { type: Injectable },
];
/** @nocollapse */
WheelSelector.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WheelSelector.prototype, "show", null);
__decorate([
    Cordova({
        platforms: ['iOS']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WheelSelector.prototype, "hideSelector", null);
WheelSelector = __decorate([
    Plugin({
        pluginName: 'WheelSelector',
        plugin: 'cordova-wheel-selector-plugin',
        pluginRef: 'SelectorCordovaPlugin',
        repo: 'https://github.com/jasonmamy/cordova-wheel-selector-plugin',
        platforms: ['Android', 'iOS']
    })
], WheelSelector);
export { WheelSelector };
//# sourceMappingURL=index.js.map