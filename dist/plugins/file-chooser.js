"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name FileChooser
 * @description
 *
 * Opens the file picker on Android for the user to select a file, returns a file URI.
 *
 * @usage
 * ```
 * import {FileChooser} from 'ionic-native';
 *
 * FileChooser.open()
 *   .then(uri => console.log(uri);
 *   .catch(e => console.log(e);
 *
 * ```
 */
var FileChooser = (function () {
    function FileChooser() {
    }
    /**
     * Open a file
     */
    FileChooser.open = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], FileChooser, "open", null);
    FileChooser = __decorate([
        plugin_1.Plugin({
            plugin: 'http://github.com/don/cordova-filechooser.git',
            pluginRef: 'fileChooser',
            repo: 'https://github.com/don/cordova-filechooser',
            platforms: ['Android']
        })
    ], FileChooser);
    return FileChooser;
}());
exports.FileChooser = FileChooser;
//# sourceMappingURL=file-chooser.js.map