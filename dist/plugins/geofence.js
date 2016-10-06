"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
var Observable_1 = require('rxjs/Observable');
var Geofence = (function () {
    function Geofence() {
    }
    /**
     * Initializes the plugin. User will be prompted to allow the app to use location and notifications.
     *
     * @return {Promise<any>}
     */
    Geofence.initialize = function () { return; };
    ;
    /**
     * Adds a new geofence or array of geofences. For geofence object, see above.
     *
     * @return {Promise<any>}
     */
    Geofence.addOrUpdate = function (geofences) { return; };
    ;
    /**
     * Removes a geofence or array of geofences. `geofenceID` corresponds to one or more IDs specified when the
     * geofence was created.
     *
     * @return {Promise<any>}
     */
    Geofence.remove = function (geofenceId) { return; };
    ;
    /**
     * Removes all geofences.
     *
     * @return {Promise<any>}
     */
    Geofence.removeAll = function () { return; };
    ;
    /**
     * Returns an array of geofences currently being monitored.
     *
     * @return {Promise<Array<string>>}
     */
    Geofence.getWatched = function () { return; };
    ;
    /**
     * Called when a geofence is crossed in the direction specified by `TransitType`.
     *
     * @return {Promise<any>}
     */
    Geofence.onTransitionReceived = function () {
        return new Observable_1.Observable(function (observer) {
            window && window.geofence && (window.geofence.onTransitionReceived = observer.next.bind(observer));
            return function () { return window.geofence.onTransitionReceived = function () { }; };
        });
    };
    /**
     * Called when the user clicks a geofence notification. iOS and Android only.
     *
     * @return {Promise<Object>}
     */
    Geofence.onNotificationClicked = function () {
        return new Observable_1.Observable(function (observer) {
            window && window.geofence && (window.geofence.onNotificationClicked = observer.next.bind(observer));
            return function () { return window.geofence.onNotificationClicked = function () { }; };
        });
    };
    Geofence.TransitionType = {
        ENTER: 1,
        EXIT: 2,
        BOTH: 3
    };
    __decorate([
        plugin_1.Cordova()
    ], Geofence, "initialize", null);
    __decorate([
        plugin_1.Cordova()
    ], Geofence, "addOrUpdate", null);
    __decorate([
        plugin_1.Cordova()
    ], Geofence, "remove", null);
    __decorate([
        plugin_1.Cordova()
    ], Geofence, "removeAll", null);
    __decorate([
        plugin_1.Cordova()
    ], Geofence, "getWatched", null);
    Geofence = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-geofence',
            pluginRef: 'geofence',
            repo: 'https://github.com/cowbell/cordova-plugin-geofence/',
            platforms: ['Android', 'iOS', 'Windows Phone 8', 'Windows Phone']
        })
    ], Geofence);
    return Geofence;
}());
exports.Geofence = Geofence;
//# sourceMappingURL=geofence.js.map