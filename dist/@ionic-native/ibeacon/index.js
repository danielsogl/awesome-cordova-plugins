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
import { Cordova, Plugin, CordovaCheck, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
/**
 * @name IBeacon
 * @description
 * This plugin provides functions for working with iBeacons.
 *
 *  The plugin's API closely mimics the one exposed through the [CLLocationManager](https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/index.html) introduced in iOS 7.
 *
 * @usage
 *
 * ```typescript
 * import { IBeacon } from '@ionic-native/ibeacon';
 *
 * constructor(private ibeacon: IBeacon) { }
 *
 * ...
 *
 *
 * // Request permission to use location on iOS
 * this.ibeacon.requestAlwaysAuthorization();
 * // create a new delegate and register it with the native layer
 * let delegate = this.ibeacon.Delegate();
 *
 * // Subscribe to some of the delegate's event handlers
 * delegate.didRangeBeaconsInRegion()
 *   .subscribe(
 *     data => console.log('didRangeBeaconsInRegion: ', data),
 *     error => console.error();
 *   );
 * delegate.didStartMonitoringForRegion()
 *   .subscribe(
 *     data => console.log('didStartMonitoringForRegion: ', data),
 *     error => console.error();
 *   );
 * delegate.didEnterRegion()
 *   .subscribe(
 *     data => {
 *       console.log('didEnterRegion: ', data);
 *     }
 *   );
 *
 * let beaconRegion = this.ibeacon.BeaconRegion('deskBeacon','F7826DA6-ASDF-ASDF-8024-BC5B71E0893E');
 *
 * this.ibeacon.startMonitoringForRegion(beaconRegion)
 *   .then(
 *     () => console.log('Native layer recieved the request to monitoring'),
 *     error => console.error('Native layer failed to begin monitoring: ', error)
 *   );
 * ```
 * @interfaces
 * Beacon
 * BeaconRegion
 * CircularRegion
 * IBeaconPluginResult
 * IBeaconDelegate
 *
 */
var IBeacon = (function (_super) {
    __extends(IBeacon, _super);
    function IBeacon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Instances of this class are delegates between the {@link LocationManager} and
     * the code that consumes the messages generated on in the native layer.
     *
     * @returns {IBeaconDelegate} An instance of the type {@type Delegate}.
     */
    IBeacon.prototype.Delegate = function () {
        var delegate = new cordova.plugins.locationManager.Delegate();
        delegate.didChangeAuthorizationStatus = function (pluginResult) {
            return new Observable(function (observer) {
                var cb = function (data) { return observer.next(data); };
                return delegate.didChangeAuthorizationStatus = cb;
            });
        };
        delegate.didDetermineStateForRegion = function (pluginResult) {
            return new Observable(function (observer) {
                var cb = function (data) { return observer.next(data); };
                return delegate.didDetermineStateForRegion = cb;
            });
        };
        delegate.didEnterRegion = function (pluginResult) {
            return new Observable(function (observer) {
                var cb = function (data) { return observer.next(data); };
                return delegate.didEnterRegion = cb;
            });
        };
        delegate.didExitRegion = function (pluginResult) {
            return new Observable(function (observer) {
                var cb = function (data) { return observer.next(data); };
                return delegate.didExitRegion = cb;
            });
        };
        delegate.didRangeBeaconsInRegion = function (pluginResult) {
            return new Observable(function (observer) {
                var cb = function (data) { return observer.next(data); };
                return delegate.didRangeBeaconsInRegion = cb;
            });
        };
        delegate.didStartMonitoringForRegion = function (pluginResult) {
            return new Observable(function (observer) {
                var cb = function (data) { return observer.next(data); };
                return delegate.didStartMonitoringForRegion = cb;
            });
        };
        delegate.monitoringDidFailForRegionWithError = function (pluginResult) {
            return new Observable(function (observer) {
                var cb = function (data) { return observer.next(data); };
                return delegate.monitoringDidFailForRegionWithError = cb;
            });
        };
        delegate.peripheralManagerDidStartAdvertising = function (pluginResult) {
            return new Observable(function (observer) {
                var cb = function (data) { return observer.next(data); };
                return delegate.peripheralManagerDidStartAdvertising = cb;
            });
        };
        delegate.peripheralManagerDidUpdateState = function (pluginResult) {
            return new Observable(function (observer) {
                var cb = function (data) { return observer.next(data); };
                return delegate.peripheralManagerDidUpdateState = cb;
            });
        };
        cordova.plugins.locationManager.setDelegate(delegate);
        return delegate;
    };
    /**
     * Creates a new BeaconRegion
     *
     * @param {String} identifier @see {CLRegion}
     * @param {String} uuid The proximity ID of the beacon being targeted.
     * This value must not be blank nor invalid as a UUID.
     * @param {Number} major The major value that you use to identify one or more beacons.
     * @param {Number} minor The minor value that you use to identify a specific beacon.
     * @param {BOOL} notifyEntryStateOnDisplay
     *
     * @returns {BeaconRegion} Returns the BeaconRegion that was created
     */
    IBeacon.prototype.BeaconRegion = function (identifer, uuid, major, minor, notifyEntryStateOnDisplay) {
        return new cordova.plugins.locationManager.BeaconRegion(identifer, uuid, major, minor, notifyEntryStateOnDisplay);
    };
    /**
     * @returns {IBeaconDelegate} Returns the IBeaconDelegate
     */
    IBeacon.prototype.getDelegate = function () { return; };
    /**
     * @param {IBeaconDelegate} delegate An instance of a delegate to register with the native layer.
     *
     * @returns {IBeaconDelegate} Returns the IBeaconDelegate
     */
    IBeacon.prototype.setDelegate = function (delegate) { return; };
    /**
     * Signals the native layer that the client side is ready to consume messages.
     * Readiness here means that it has a {IBeaconDelegate} set by the consumer javascript
     * code.
     *
     * The {LocationManager.setDelegate()} will implicitly call this method as well,
     * therefore the only case when you have to call this manually is if you don't
     * wish to specify a {IBeaconDelegate} of yours.
     *
     * The purpose of this signaling mechanism is to make the events work when the
     * app is being woken up by the Operating System to give it a chance to handle
     * region monitoring events for example.
     *
     * If you don't set a {IBeaconDelegate} and don't call this method manually, an error
     * message get emitted in the native runtime and the DOM as well after a certain
     * period of time.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer acknowledged the request and started to send events.
     */
    IBeacon.prototype.onDomDelegateReady = function () { return; };
    /**
     * Determines if bluetooth is switched on, according to the native layer.
     * @returns {Promise<boolean>} Returns a promise which is resolved with a {Boolean}
     * indicating whether bluetooth is active.
     */
    IBeacon.prototype.isBluetoothEnabled = function () { return; };
    /**
     * Enables Bluetooth using the native Layer. (ANDROID ONLY)
     *
     * @returns {Promise<void>} Returns a promise which is resolved when Bluetooth
     * could be enabled. If not, the promise will be rejected with an error.
     */
    IBeacon.prototype.enableBluetooth = function () { return; };
    /**
     * Disables Bluetooth using the native Layer. (ANDROID ONLY)
     *
     * @returns {Promise<void>} Returns a promise which is resolved when Bluetooth
     * could be enabled. If not, the promise will be rejected with an error.
     */
    IBeacon.prototype.disableBluetooth = function () { return; };
    /**
     * Start monitoring the specified region.
     *
     * If a region of the same type with the same identifier is already being
     * monitored for this application,
     * it will be removed from monitoring. For circular regions, the region
     * monitoring service will prioritize
     * regions by their size, favoring smaller regions over larger regions.
     *
     * This is done asynchronously and may not be immediately reflected in monitoredRegions.
     *
     * @param {Region} region An instance of {Region} which will be monitored
     * by the operating system.
     *
     * @returns {Promise<string>} Returns a promise which is resolved as soon as the
     * native layer acknowledged the dispatch of the monitoring request.
     */
    IBeacon.prototype.startMonitoringForRegion = function (region) { return; };
    /**
     * Stop monitoring the specified region.  It is valid to call
     * stopMonitoringForRegion: for a region that was registered for monitoring
     * with a different location manager object, during this or previous
     * launches of your application.
     *
     * This is done asynchronously and may not be immediately reflected in monitoredRegions.
     *
     * @param {Region} region An instance of {Region} which will be monitored
     * by the operating system.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer acknowledged the dispatch of the request to stop monitoring.
     */
    IBeacon.prototype.stopMonitoringForRegion = function (region) { return; };
    /**
     * Request state the for specified region. When result is ready
     * didDetermineStateForRegion is triggered. This can be any region,
     * also those which is not currently monitored.
     *
     * This is done asynchronously and may not be immediately reflected in monitoredRegions.
     *
     * @param {Region} region An instance of {Region} which will be monitored
     * by the operating system.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer acknowledged the dispatch of the request to stop monitoring.
     */
    IBeacon.prototype.requestStateForRegion = function (region) { return; };
    /**
     * Start ranging the specified beacon region.
     *
     * If a region of the same type with the same identifier is already being
     * monitored for this application, it will be removed from monitoring.
     *
     * This is done asynchronously and may not be immediately reflected in rangedRegions.
     *
     * @param {Region} region An instance of {BeaconRegion} which will be monitored
     * by the operating system.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer acknowledged the dispatch of the monitoring request.
     */
    IBeacon.prototype.startRangingBeaconsInRegion = function (region) { return; };
    /**
     * Stop ranging the specified region.  It is valid to call
     * stopMonitoringForRegion: for a region that was registered for ranging
     * with a different location manager object, during this or previous
     * launches of your application.
     *
     * This is done asynchronously and may not be immediately reflected in rangedRegions.
     *
     * @param {Region} region An instance of {BeaconRegion} which will be monitored
     * by the operating system.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer acknowledged the dispatch of the request to stop monitoring.
     */
    IBeacon.prototype.stopRangingBeaconsInRegion = function (region) { return; };
    /**
     * Queries the native layer to determine the current authorization in effect.
     *
     * @returns {Promise<IBeaconPluginResult>} Returns a promise which is resolved with the
     * requested authorization status.
     */
    IBeacon.prototype.getAuthorizationStatus = function () { return; };
    /**
     * For iOS 8 and above only. The permission model has changed by Apple in iOS 8, making it necessary for apps to
     * explicitly request permissions via methods like these:
     * <a href="https://developer.apple.com/library/prerelease/iOS/documentation/CoreLocation/Reference/CLLocationManager_Class/index.html#//apple_ref/occ/instm/CLLocationManager/requestWhenInUseAuthorization">requestWhenInUseAuthorization</a>
     * <a href="https://developer.apple.com/library/prerelease/iOS/documentation/CoreLocation/Reference/CLLocationManager_Class/index.html#//apple_ref/occ/instm/CLLocationManager/requestAlwaysAuthorization">requestAlwaysAuthorization</a>
     *
     * If you are using this plugin on Android devices only, you will never have to use this, nor {@code requestAlwaysAuthorization}
     * @returns {Promise<void>} Returns a promise that is resolved when the request dialog is shown.
     */
    IBeacon.prototype.requestWhenInUseAuthorization = function () { return; };
    /**
     * See the documentation of {@code requestWhenInUseAuthorization} for further details.
     *
     * @returns {Promise<void>} Returns a promise which is resolved when the native layer
     * shows the request dialog.
     */
    IBeacon.prototype.requestAlwaysAuthorization = function () { return; };
    /**
     *
     * @returns {Promise<Region[]>} Returns a promise which is resolved with an {Array}
     * of {Region} instances that are being monitored by the native layer.
     */
    IBeacon.prototype.getMonitoredRegions = function () { return; };
    /**
     *
     * @returns {Promise<Region[]>} Returns a promise which is resolved with an {Array}
     * of {Region} instances that are being ranged by the native layer.
     */
    IBeacon.prototype.getRangedRegions = function () { return; };
    /**
     * Determines if ranging is available or not, according to the native layer.
     * @returns {Promise<boolean>} Returns a promise which is resolved with a {Boolean}
     * indicating whether ranging is available or not.
     */
    IBeacon.prototype.isRangingAvailable = function () { return; };
    /**
     * Determines if region type is supported or not, according to the native layer.
     *
     * @param {Region} region An instance of {Region} which will be checked
     * by the operating system.
     *
     * @returns {Promise<boolean>} Returns a promise which is resolved with a {Boolean}
     * indicating whether the region type is supported or not.
     */
    IBeacon.prototype.isMonitoringAvailableForClass = function (region) { return; };
    /**
     * Start advertising the specified region.
     *
     * If a region a different identifier is already being advertised for
     * this application, it will be replaced with the new identifier.
     *
     * This call will accept a valid beacon even when no BlueTooth is available,
     * and will start when BlueTooth is powered on. See {IBeaconDelegate.}
     *
     * @param {Region} region An instance of {Region} which will be advertised
     * by the operating system.
     * @param {Integer} measuredPower: Optional parameter, if left empty, the device will
     * use it's own default value.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer acknowledged the dispatch of the advertising request.
     */
    IBeacon.prototype.startAdvertising = function (region, measuredPower) { return; };
    /**
     * Stop advertising as a beacon.
     *
     * This is done asynchronously and may not be immediately reflected in isAdvertising.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer acknowledged the dispatch of the request to stop advertising.
     */
    IBeacon.prototype.stopAdvertising = function (region) { return; };
    /**
     * Determines if advertising is available or not, according to the native layer.
     * @returns {Promise<void>} Returns a promise which is resolved with a {Boolean}
     * indicating whether advertising is available or not.
     */
    IBeacon.prototype.isAdvertisingAvailable = function () { return; };
    /**
     * Determines if advertising is currently active, according to the native layer.
     * @returns {Promise<void>} Returns a promise which is resolved with a {Boolean}
     * indicating whether advertising is active.
     */
    IBeacon.prototype.isAdvertising = function () { return; };
    /**
     * Disables debug logging in the native layer. Use this method if you want
     * to prevent this plugin from writing to the device logs.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer has set the logging level accordingly.
     */
    IBeacon.prototype.disableDebugLogs = function () { return; };
    /**
     * Enables the posting of debug notifications in the native layer. Use this method if you want
     * to allow the plugin the posting local notifications.
     * This can be very helpful when debugging how to apps behave when launched into the background.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer has set the flag to enabled.
     */
    IBeacon.prototype.enableDebugNotifications = function () { return; };
    /**
     * Disables the posting of debug notifications in the native layer. Use this method if you want
     * to prevent the plugin from posting local notifications.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer has set the flag to disabled.
     */
    IBeacon.prototype.disableDebugNotifications = function () { return; };
    /**
     * Enables debug logging in the native layer. Use this method if you want
     * a debug the inner workings of this plugin.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer has set the logging level accordingly.
     */
    IBeacon.prototype.enableDebugLogs = function () { return; };
    /**
     * Appends the provided [message] to the device logs.
     * Note: If debug logging is turned off, this won't do anything.
     *
     * @param {String} message The message to append to the device logs.
     *
     * @returns {Promise<void>} Returns a promise which is resolved with the log
     * message received by the native layer for appending. The returned message
     * is expected to be equivalent to the one provided in the original call.
     */
    IBeacon.prototype.appendToDeviceLog = function (message) { return; };
    return IBeacon;
}(IonicNativePlugin));
IBeacon.decorators = [
    { type: Injectable },
];
/** @nocollapse */
IBeacon.ctorParameters = function () { return []; };
__decorate([
    CordovaCheck({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], IBeacon.prototype, "Delegate", null);
__decorate([
    CordovaCheck({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, Number, Boolean]),
    __metadata("design:returntype", Object)
], IBeacon.prototype, "BeaconRegion", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], IBeacon.prototype, "getDelegate", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], IBeacon.prototype, "setDelegate", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IBeacon.prototype, "onDomDelegateReady", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IBeacon.prototype, "isBluetoothEnabled", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IBeacon.prototype, "enableBluetooth", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IBeacon.prototype, "disableBluetooth", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IBeacon.prototype, "startMonitoringForRegion", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IBeacon.prototype, "stopMonitoringForRegion", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IBeacon.prototype, "requestStateForRegion", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IBeacon.prototype, "startRangingBeaconsInRegion", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IBeacon.prototype, "stopRangingBeaconsInRegion", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IBeacon.prototype, "getAuthorizationStatus", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IBeacon.prototype, "requestWhenInUseAuthorization", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IBeacon.prototype, "requestAlwaysAuthorization", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IBeacon.prototype, "getMonitoredRegions", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IBeacon.prototype, "getRangedRegions", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IBeacon.prototype, "isRangingAvailable", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IBeacon.prototype, "isMonitoringAvailableForClass", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], IBeacon.prototype, "startAdvertising", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IBeacon.prototype, "stopAdvertising", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IBeacon.prototype, "isAdvertisingAvailable", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IBeacon.prototype, "isAdvertising", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IBeacon.prototype, "disableDebugLogs", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IBeacon.prototype, "enableDebugNotifications", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IBeacon.prototype, "disableDebugNotifications", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IBeacon.prototype, "enableDebugLogs", null);
__decorate([
    Cordova({ otherPromise: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IBeacon.prototype, "appendToDeviceLog", null);
IBeacon = __decorate([
    Plugin({
        pluginName: 'IBeacon',
        plugin: 'cordova-plugin-ibeacon',
        pluginRef: 'cordova.plugins.locationManager',
        repo: 'https://github.com/petermetz/cordova-plugin-ibeacon',
        platforms: ['Android', 'iOS']
    })
], IBeacon);
export { IBeacon };
//# sourceMappingURL=index.js.map