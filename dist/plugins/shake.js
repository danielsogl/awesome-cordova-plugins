"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Shake
 * @description Handles shake gesture
 * @usage
 * ```typescript
 * import {Shake} from 'ionic-native';
 *
 * let watch = Shake.startWatch(60).subscribe(() => {
 *   // do something
 *   });
 *
 * watch.unsubscribe();
 * ```
 */
var Shake = (function () {
    function Shake() {
    }
    /**
     * Watch for shake gesture
     * @param sensitivity {number} Optional sensitivity parameter. Defaults to 40
     */
    Shake.startWatch = function (sensitivity) { return; };
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'stopWatch',
            successIndex: 0,
            errorIndex: 2
        })
    ], Shake, "startWatch", null);
    Shake = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-shake',
            pluginRef: 'shake',
            repo: 'https://github.com/leecrossley/cordova-plugin-shake'
        })
    ], Shake);
    return Shake;
}());
exports.Shake = Shake;
//# sourceMappingURL=shake.js.map