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
import { Plugin, CordovaInstance, InstanceCheck, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
/**
 * @hidden
 */
var ThemeableBrowserObject = (function () {
    function ThemeableBrowserObject(url, target, styleOptions) {
        try {
            this._objectInstance = cordova.ThemeableBrowser.open(url, target, styleOptions);
        }
        catch (e) {
            window.open(url);
            console.warn('Native: ThemeableBrowser is not installed or you are running on a browser. Falling back to window.open.');
        }
    }
    /**
     * Displays an browser window that was opened hidden. Calling this has no effect
     * if the browser was already visible.
     */
    ThemeableBrowserObject.prototype.show = function () { };
    /**
     * Closes the browser window.
     */
    ThemeableBrowserObject.prototype.close = function () { };
    /**
     * Reloads the current page
     */
    ThemeableBrowserObject.prototype.reload = function () { };
    /**
     * Injects JavaScript code into the browser window.
     * @param script    Details of the script to run, specifying either a file or code key.
     * @returns {Promise<any>}
     */
    ThemeableBrowserObject.prototype.executeScript = function (script) { return; };
    /**
     * Injects CSS into the browser window.
     * @param css       Details of the script to run, specifying either a file or code key.
     * @returns {Promise<any>}
     */
    ThemeableBrowserObject.prototype.insertCss = function (css) { return; };
    /**
     * A method that allows you to listen to events happening in the browser.
     * Available events are: `ThemeableBrowserError`, `ThemeableBrowserWarning`, `critical`, `loadfail`, `unexpected`, `undefined`
     * @param event Event name
     * @returns {Observable<any>} Returns back an observable that will listen to the event on subscribe, and will stop listening to the event on unsubscribe.
     */
    ThemeableBrowserObject.prototype.on = function (event) {
        var _this = this;
        return new Observable(function (observer) {
            _this._objectInstance.addEventListener(event, observer.next.bind(observer));
            return function () { return _this._objectInstance.removeEventListener(event, observer.next.bind(observer)); };
        });
    };
    return ThemeableBrowserObject;
}());
export { ThemeableBrowserObject };
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ThemeableBrowserObject.prototype, "show", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ThemeableBrowserObject.prototype, "close", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ThemeableBrowserObject.prototype, "reload", null);
__decorate([
    CordovaInstance(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ThemeableBrowserObject.prototype, "executeScript", null);
__decorate([
    CordovaInstance(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ThemeableBrowserObject.prototype, "insertCss", null);
__decorate([
    InstanceCheck({ observable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Observable)
], ThemeableBrowserObject.prototype, "on", null);
/**
 * @name Themeable Browser
 * @description
 * In-app browser that allows styling.
 *
 * @usage
 * ```typescript
 * import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';
 *
 * constructor(private themeableBrowser: ThemeableBrowser) { }
 *
 * ...
 *
 * // can add options from the original InAppBrowser in a JavaScript object form (not string)
 * // This options object also takes additional parameters introduced by the ThemeableBrowser plugin
 * // This example only shows the additional parameters for ThemeableBrowser
 * // Note that that `image` and `imagePressed` values refer to resources that are stored in your app
 * const options: ThemeableBrowserOptions = {
 *      statusbar: {
 *          color: '#ffffffff'
 *      },
 *      toolbar: {
 *          height: 44,
 *          color: '#f0f0f0ff'
 *      },
 *      title: {
 *          color: '#003264ff',
 *          showPageTitle: true
 *      },
 *      backButton: {
 *          image: 'back',
 *          imagePressed: 'back_pressed',
 *          align: 'left',
 *          event: 'backPressed'
 *      },
 *      forwardButton: {
 *          image: 'forward',
 *          imagePressed: 'forward_pressed',
 *          align: 'left',
 *          event: 'forwardPressed'
 *      },
 *      closeButton: {
 *          image: 'close',
 *          imagePressed: 'close_pressed',
 *          align: 'left',
 *          event: 'closePressed'
 *      },
 *      customButtons: [
 *          {
 *              image: 'share',
 *              imagePressed: 'share_pressed',
 *              align: 'right',
 *              event: 'sharePressed'
 *          }
 *      ],
 *      menu: {
 *          image: 'menu',
 *          imagePressed: 'menu_pressed',
 *          title: 'Test',
 *          cancel: 'Cancel',
 *          align: 'right',
 *          items: [
 *              {
 *                  event: 'helloPressed',
 *                  label: 'Hello World!'
 *              },
 *              {
 *                  event: 'testPressed',
 *                  label: 'Test!'
 *              }
 *          ]
 *      },
 *      backButtonCanClose: true
 * };
 *
 * const browser: ThemeableBrowserObject = this.themeableBrowser.create('https://ionic.io', '_blank', options);
 *
 * ```
 * We suggest that you refer to the plugin's repository for additional information on usage that may not be covered here.
 * @classes
 * ThemeableBrowserObject
 * @interfaces
 * ThemeableBrowserButton
 * ThemeableBrowserOptions
 */
var ThemeableBrowser = (function (_super) {
    __extends(ThemeableBrowser, _super);
    function ThemeableBrowser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a browser instance
     * @param url {string} URL to open
     * @param target {string} Target
     * @param styleOptions {ThemeableBrowserOptions} Themeable browser options
     * @returns {ThemeableBrowserObject}
     */
    ThemeableBrowser.prototype.create = function (url, target, styleOptions) {
        return new ThemeableBrowserObject(url, target, styleOptions);
    };
    return ThemeableBrowser;
}(IonicNativePlugin));
ThemeableBrowser.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ThemeableBrowser.ctorParameters = function () { return []; };
ThemeableBrowser = __decorate([
    Plugin({
        pluginName: 'ThemeableBrowser',
        plugin: 'cordova-plugin-themeablebrowser',
        pluginRef: 'cordova.ThemeableBrowser',
        repo: 'https://github.com/initialxy/cordova-plugin-themeablebrowser',
        platforms: ['Amazon Fire OS', 'Android', 'Blackberry 10', 'Browser', 'FirefoxOS', 'iOS', 'Ubuntu', 'Windows', 'Windows Phone']
    })
], ThemeableBrowser);
export { ThemeableBrowser };
//# sourceMappingURL=index.js.map