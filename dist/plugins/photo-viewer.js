"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Photo Viewer
 * @description This plugin can display your image in full screen with the ability to pan, zoom, and share the image.
 * @usage
 * ```typescript
 * import { PhotoViewer } from 'ionic-native';
 *
 * PhotoViewer.show('https://mysite.com/path/to/image.jpg');
 *
 * PhotoViewer.show('https://mysite.com/path/to/image.jpg', 'My image title', {share: false});
 * ```
 */
var PhotoViewer = (function () {
    function PhotoViewer() {
    }
    /**
     * Shows an image in full screen
     * @param url {string} URL or path to image
     * @param title {string}
     * @param options {any}
     */
    PhotoViewer.show = function (url, title, options) { };
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], PhotoViewer, "show", null);
    PhotoViewer = __decorate([
        plugin_1.Plugin({
            plugin: 'com-sarriaroman-photoviewer',
            pluginRef: 'PhotoViewer',
            repo: 'https://github.com/sarriaroman/photoviewer'
        })
    ], PhotoViewer);
    return PhotoViewer;
}());
exports.PhotoViewer = PhotoViewer;
//# sourceMappingURL=photo-viewer.js.map