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
import { Cordova, CordovaInstance, CordovaCheck, Plugin, InstanceProperty, InstanceCheck, checkAvailability, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
/**
 * @hidden
 * You can listen to these events where appropriate
 */
export var GoogleMapsEvent = {
    MAP_CLICK: 'click',
    MAP_LONG_CLICK: 'long_click',
    MY_LOCATION_CHANGE: 'my_location_change',
    MY_LOCATION_BUTTON_CLICK: 'my_location_button_click',
    INDOOR_BUILDING_FOCUSED: 'indoor_building_focused',
    INDOOR_LEVEL_ACTIVATED: 'indoor_level_activated',
    CAMERA_CHANGE: 'camera_change',
    CAMERA_IDLE: 'camera_idle',
    MAP_READY: 'map_ready',
    MAP_LOADED: 'map_loaded',
    MAP_WILL_MOVE: 'will_move',
    MAP_CLOSE: 'map_close',
    MARKER_CLICK: 'click',
    OVERLAY_CLICK: 'overlay_click',
    INFO_CLICK: 'info_click',
    MARKER_DRAG: 'drag',
    MARKER_DRAG_START: 'drag_start',
    MARKER_DRAG_END: 'drag_end'
};
/**
 * @hidden
 */
export var GoogleMapsAnimation = {
    BOUNCE: 'BOUNCE',
    DROP: 'DROP'
};
/**
 * @hidden
 */
export var GoogleMapsMapTypeId = {
    HYBRID: 'MAP_TYPE_HYBRID',
    NONE: 'MAP_TYPE_NONE',
    NORMAL: 'MAP_TYPE_NORMAL',
    ROADMAP: 'MAP_TYPE_ROADMAP',
    SATELLITE: 'MAP_TYPE_SATELLITE',
    TERAIN: 'MAP_TYPE_TERRAIN'
};
/**
 * @hidden
 */
var GoogleMap = (function () {
    function GoogleMap(element, options) {
        if (checkAvailability('plugin.google.maps.Map', null, 'GoogleMaps') === true) {
            if (typeof element === 'string') {
                element = document.getElementById(element);
            }
            this._objectInstance = plugin.google.maps.Map.getMap(element, options);
        }
    }
    /**
     * Adds an event listener.
     *
     * @returns {Observable<any>}
     */
    GoogleMap.prototype.addEventListener = function (eventName) {
        return Observable.fromEvent(this._objectInstance, eventName);
    };
    /**
     * Adds an event listener that works once.
     *
     * @returns {Promise<any>}
     */
    GoogleMap.prototype.addListenerOnce = function (eventName) {
        var _this = this;
        return new Promise(function (resolve) { return _this._objectInstance.addListenerOnce(eventName, resolve); });
    };
    /**
     * Gets a value
     * @param key
     */
    GoogleMap.prototype.get = function (key) { return; };
    /**
     * Sets a value
     * @param key
     * @param value
     */
    GoogleMap.prototype.set = function (key, value) { };
    /**
     * Listen to a map event.
     *
     * @returns {Observable<any>}
     */
    GoogleMap.prototype.on = function (eventName) {
        return Observable.fromEvent(this._objectInstance, eventName);
    };
    /**
     * Listen to a map event only once.
     *
     * @returns {Promise<any>}
     */
    GoogleMap.prototype.one = function (eventName) {
        var _this = this;
        return new Promise(function (resolve) { return _this._objectInstance.one(eventName, resolve); });
    };
    /**
     * Clears all stored values
     */
    GoogleMap.prototype.empty = function () { };
    GoogleMap.prototype.setDebuggable = function (isDebuggable) { };
    GoogleMap.prototype.setClickable = function (isClickable) { };
    /**
     * Get the position of the camera.
     *
     * @returns {Promise<CameraPosition>}
     */
    GoogleMap.prototype.getCameraPosition = function () { return; };
    /**
     * Get the location of the user.
     *
     * @returns {Promise<MyLocation>}
     */
    GoogleMap.prototype.getMyLocation = function (options) { return; };
    /**
     * Get the visible region.
     *
     * @returns {Promise<VisibleRegion>}
     */
    GoogleMap.prototype.getVisibleRegion = function () { return; };
    GoogleMap.prototype.showDialog = function () { };
    GoogleMap.prototype.closeDialog = function () { };
    GoogleMap.prototype.getLicenseInfo = function () { return; };
    GoogleMap.prototype.setCenter = function (latLng) { };
    GoogleMap.prototype.setZoom = function (zoomLevel) { };
    GoogleMap.prototype.setMapTypeId = function (mapTypeId) { };
    GoogleMap.prototype.setTilt = function (tiltLevel) { };
    /**
     * @returns {Promise<any>}
     */
    GoogleMap.prototype.animateCamera = function (animateCameraOptions) { return; };
    /**
     * @returns {Promise<any>}
     */
    GoogleMap.prototype.moveCamera = function (cameraPosition) { return; };
    GoogleMap.prototype.setMyLocationEnabled = function (enabled) { };
    GoogleMap.prototype.setIndoorEnabled = function (enabled) { };
    GoogleMap.prototype.setTrafficEnabled = function (enabled) { };
    GoogleMap.prototype.setCompassEnabled = function (enabled) { };
    GoogleMap.prototype.setAllGesturesEnabled = function (enabled) { };
    /**
     * @returns {Promise<Marker | any>}
     */
    GoogleMap.prototype.addMarker = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addMarker(options, function (marker) {
                if (marker) {
                    resolve(new Marker(marker));
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * @returns {Promise<Circle | any>}
     */
    GoogleMap.prototype.addCircle = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addCircle(options, function (circle) {
                if (circle) {
                    resolve(new Circle(circle));
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * @returns {Promise<Polygon | any>}
     */
    GoogleMap.prototype.addPolygon = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addPolygon(options, function (polygon) {
                if (polygon) {
                    resolve(new Polygon(polygon));
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * @returns {Promise<Polyline | any>}
     */
    GoogleMap.prototype.addPolyline = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addPolyline(options, function (polyline) {
                if (polyline) {
                    resolve(new Polyline(polyline));
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * @returns {Promise<TileOverlay | any>}
     */
    GoogleMap.prototype.addTileOverlay = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addTileOverlay(options, function (tileOverlay) {
                if (tileOverlay) {
                    resolve(new TileOverlay(tileOverlay));
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * @returns {Promise<GroundOverlay | any>}
     */
    GoogleMap.prototype.addGroundOverlay = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addGroundOverlay(options, function (groundOverlay) {
                if (groundOverlay) {
                    resolve(new GroundOverlay(groundOverlay));
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * @returns {Promise<KmlOverlay | any>}
     */
    GoogleMap.prototype.addKmlOverlay = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addKmlOverlay(options, function (kmlOverlay) {
                if (kmlOverlay) {
                    resolve(new KmlOverlay(kmlOverlay));
                }
                else {
                    reject();
                }
            });
        });
    };
    GoogleMap.prototype.setDiv = function (domNode) { };
    GoogleMap.prototype.setVisible = function (visible) { };
    GoogleMap.prototype.setOptions = function (options) { };
    GoogleMap.prototype.setBackgroundColor = function (backgroundColor) { };
    GoogleMap.prototype.setPadding = function (top, right, bottom, left) { };
    GoogleMap.prototype.clear = function () { };
    GoogleMap.prototype.refreshLayout = function () { };
    /**
     * @returns {Promise<any>}
     */
    GoogleMap.prototype.fromLatLngToPoint = function (latLng, point) { return; };
    /**
     * @returns {Promise<LatLng>}
     */
    GoogleMap.prototype.fromPointToLatLng = function (point) { return; };
    /**
     * @returns {Promise<any>}
     */
    GoogleMap.prototype.toDataURL = function () { return; };
    GoogleMap.prototype.remove = function () { };
    GoogleMap.prototype.panBy = function (x, y) { };
    return GoogleMap;
}());
__decorate([
    InstanceCheck(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Observable)
], GoogleMap.prototype, "addEventListener", null);
__decorate([
    InstanceCheck(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "addListenerOnce", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], GoogleMap.prototype, "get", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "set", null);
__decorate([
    InstanceCheck({ observable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Observable)
], GoogleMap.prototype, "on", null);
__decorate([
    InstanceCheck(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "one", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "empty", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setDebuggable", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setClickable", null);
__decorate([
    CordovaInstance(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "getCameraPosition", null);
__decorate([
    CordovaInstance(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "getMyLocation", null);
__decorate([
    CordovaInstance(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "getVisibleRegion", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "showDialog", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "closeDialog", null);
__decorate([
    CordovaInstance(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "getLicenseInfo", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LatLng]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setCenter", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setZoom", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setMapTypeId", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setTilt", null);
__decorate([
    CordovaInstance(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "animateCamera", null);
__decorate([
    CordovaInstance(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "moveCamera", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setMyLocationEnabled", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setIndoorEnabled", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setTrafficEnabled", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setCompassEnabled", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setAllGesturesEnabled", null);
__decorate([
    InstanceCheck(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "addMarker", null);
__decorate([
    InstanceCheck(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "addCircle", null);
__decorate([
    InstanceCheck(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "addPolygon", null);
__decorate([
    InstanceCheck(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "addPolyline", null);
__decorate([
    InstanceCheck(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "addTileOverlay", null);
__decorate([
    InstanceCheck(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "addGroundOverlay", null);
__decorate([
    InstanceCheck(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "addKmlOverlay", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HTMLElement]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setDiv", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setVisible", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setOptions", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setBackgroundColor", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, Number]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setPadding", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "clear", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "refreshLayout", null);
__decorate([
    CordovaInstance(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LatLng, Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "fromLatLngToPoint", null);
__decorate([
    CordovaInstance(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "fromPointToLatLng", null);
__decorate([
    CordovaInstance(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "toDataURL", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "remove", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "panBy", null);
GoogleMap = __decorate([
    Plugin({
        pluginName: 'GoogleMaps',
        plugin: 'cordova-plugin-googlemaps'
    }),
    __metadata("design:paramtypes", [Object, Object])
], GoogleMap);
export { GoogleMap };
/**
 * @name Google Maps
 * @description This plugin uses the native Google Maps SDK
 * @usage
 * ```typescript
 * import {
 *  GoogleMaps,
 *  GoogleMap,
 *  GoogleMapsEvent,
 *  LatLng,
 *  CameraPosition,
 *  MarkerOptions,
 *  Marker
 * } from '@ionic-native/google-maps';
 *
 * export class MapPage {
 *  constructor(private googleMaps: GoogleMaps) {}
 *
 * // Load map only after view is initialized
 * ngAfterViewInit() {
 *  this.loadMap();
 * }
 *
 * loadMap() {
 *  // make sure to create following structure in your view.html file
 *  // and add a height (for example 100%) to it, else the map won't be visible
 *  // <ion-content>
 *  //  <div #map id="map" style="height:100%;"></div>
 *  // </ion-content>
 *
 *  // create a new map by passing HTMLElement
 *  let element: HTMLElement = document.getElementById('map');
 *
 *  let map: GoogleMap = this.googleMaps.create(element);
 *
 *  // listen to MAP_READY event
 *  // You must wait for this event to fire before adding something to the map or modifying it in anyway
 *  map.one(GoogleMapsEvent.MAP_READY).then(
 *    () => {
 *      console.log('Map is ready!');
 *      // Now you can add elements to the map like the marker
 *    }
 *  );
 *
 *  // create LatLng object
 *  let ionic: LatLng = new LatLng(43.0741904,-89.3809802);
 *
 *  // create CameraPosition
 *  let position: CameraPosition = {
 *    target: ionic,
 *    zoom: 18,
 *    tilt: 30
 *  };
 *
 *  // move the map's camera to position
 *  map.moveCamera(position);
 *
 *  // create new marker
 *  let markerOptions: MarkerOptions = {
 *    position: ionic,
 *    title: 'Ionic'
 *  };
 *
 *  const marker: Marker = map.addMarker(markerOptions)
 *    .then((marker: Marker) => {
 *       marker.showInfoWindow();
 *     });
 *  }
 *
 * }
 * ```
 * @classes
 * GoogleMap
 * Marker
 * LatLng
 * Geocoder
 * @interfaces
 * AnimateCameraOptions
 * MarkerOptions
 * MyLocation
 * MyLocationOptions
 * VisibleRegion
 *
 */
var GoogleMaps = (function (_super) {
    __extends(GoogleMaps, _super);
    function GoogleMaps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Checks if a map object has been created and is available.
     *
     * @returns {Promise<boolean>}
     */
    GoogleMaps.prototype.isAvailable = function () { return; };
    /**
     * Creates a new GoogleMap instance
     * @param element {string | HTMLElement} Element ID or reference to attach the map to
     * @param options {any} Options
     * @returns {GoogleMap}
     */
    GoogleMaps.prototype.create = function (element, options) {
        return new GoogleMap(element, options);
    };
    return GoogleMaps;
}(IonicNativePlugin));
GoogleMaps.decorators = [
    { type: Injectable },
];
/** @nocollapse */
GoogleMaps.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoogleMaps.prototype, "isAvailable", null);
GoogleMaps = __decorate([
    Plugin({
        pluginName: 'GoogleMaps',
        pluginRef: 'plugin.google.maps.Map',
        plugin: 'cordova-plugin-googlemaps',
        repo: 'https://github.com/mapsplugin/cordova-plugin-googlemaps',
        install: 'ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="YOUR_ANDROID_API_KEY_IS_HERE" --variable API_KEY_FOR_IOS="YOUR_IOS_API_KEY_IS_HERE"',
        installVariables: ['API_KEY_FOR_ANDROID', 'API_KEY_FOR_IOS'],
        platforms: ['Android', 'iOS']
    })
], GoogleMaps);
export { GoogleMaps };
/**
 * @hidden
 */
var Marker = (function () {
    function Marker(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    /**
     * Adds an event listener.
     *
     * @returns {Observable<any>}
     */
    Marker.prototype.addEventListener = function (eventName) {
        return Observable.fromEvent(this._objectInstance, eventName);
    };
    /**
     * Adds an event listener that works once.
     *
     * @returns {Promise<any>}
     */
    Marker.prototype.addListenerOnce = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.addListenerOnce(eventName, resolve); });
    };
    /**
     * Gets a value
     * @param key
     */
    Marker.prototype.get = function (key) { return; };
    /**
     * Sets a value
     * @param key
     * @param value
     */
    Marker.prototype.set = function (key, value) { };
    /**
     * Listen to a map event.
     *
     * @returns {Observable<any>}
     */
    Marker.prototype.on = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return new Observable(function (observer) {
                observer.error({ error: 'plugin_not_installed' });
            });
        }
        return new Observable(function (observer) {
            _this._objectInstance.on(eventName, observer.next.bind(observer));
            return function () { return _this._objectInstance.off(event); };
        });
    };
    /**
     * Listen to a map event only once.
     *
     * @returns {Promise<any>}
     */
    Marker.prototype.one = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.one(eventName, resolve); });
    };
    /**
     * Clears all stored values
     */
    Marker.prototype.empty = function () { };
    /**
     * Return true if the marker is visible
     */
    Marker.prototype.isVisible = function () { return; };
    /**
     * Set false if you want to hide the marker.
     * @param visible
     */
    Marker.prototype.setVisible = function (visible) { };
    /**
     * Return the marker hash code.
     * @return {string} Marker hash code
     */
    Marker.prototype.getHashCode = function () { return; };
    /**
     * Remove the marker completely.
     */
    Marker.prototype.remove = function () { };
    /**
     * Change the marker opacity.
     * @param alpha {number} Opacity
     */
    Marker.prototype.setOpacity = function (alpha) { };
    /**
     * Return the marker opacity.
     * @return {number} Opacity
     */
    Marker.prototype.getOpacity = function () { return; };
    /**
     * iOS only, Plugin Version >= 1.3.3 Higher zIndex value overlays will be drawn on top of lower zIndex value tile layers and overlays. (You're able to run this on Android, but it will have no effect)
     * @return {number}
     */
    Marker.prototype.setZIndex = function () { return; };
    /**
     * Change the info window anchor. This defaults to 50% from the left of the image and at the bottom of the image.
     * @param x {number}
     * @param y {number}
     */
    Marker.prototype.setIconAnchor = function (x, y) { };
    /**
     * Change the info window anchor. This defaults to 50% from the left of the image and at the top of the image.
     * @param x {number}
     * @param y {number}
     */
    Marker.prototype.setInfoWindowAnchor = function (x, y) { };
    /**
     * 	Set true if you allows all users to drag the marker.
     * @param draggable {boolean}
     */
    Marker.prototype.setDraggable = function (draggable) { };
    /**
     * Return true if the marker drag is enabled.
     * @return {boolean}
     */
    Marker.prototype.isDraggable = function () { return; };
    /**
     * Set true if you want to be flat marker.
     * @param flat {boolean}
     */
    Marker.prototype.setFlat = function (flat) { return; };
    /**
     * Change icon url and/or size
     * @param icon
     */
    Marker.prototype.setIcon = function (icon) { return; };
    /**
     * Change title of the infoWindow.
     * @param title {string}
     */
    Marker.prototype.setTitle = function (title) { };
    /**
     * Return the title strings.
     * @return {string}
     */
    Marker.prototype.getTitle = function () { return; };
    /**
     * Change snippet of the infoWindow.
     * @param snippet {string}
     */
    Marker.prototype.setSnippet = function (snippet) { };
    /**
     * Return the snippet strings.
     * @return {string}
     */
    Marker.prototype.getSnippet = function () { return; };
    /**
     * Set the marker rotation angle.
     * @param rotation {number}
     */
    Marker.prototype.setRotation = function (rotation) { };
    /**
     * Return the marker rotation angle.
     * @return {number}
     */
    Marker.prototype.getRotation = function () { return; };
    /**
     * Show the infoWindow of the marker.
     * @return {number}
     */
    Marker.prototype.showInfoWindow = function () { return; };
    /**
     * Hide the infoWindow of the marker.
     * @return {number}
     */
    Marker.prototype.hideInfoWindow = function () { return; };
    /**
     * Set the marker position.
     * @param latLng {LatLng}
     */
    Marker.prototype.setPosition = function (latLng) { return; };
    /**
     * Return the marker position.
     * @return {Promise<LatLng>}
     */
    Marker.prototype.getPosition = function () { return; };
    /**
     * Return the map instance.
     * @return {GoogleMap}
     */
    Marker.prototype.getMap = function () { return; };
    /**
     * Specify the animation either `DROP` or `BOUNCE`
     * @param animation {string}
     */
    Marker.prototype.setAnimation = function (animation) { };
    return Marker;
}());
export { Marker };
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], Marker.prototype, "get", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "set", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Marker.prototype, "empty", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Marker.prototype, "isVisible", null);
__decorate([
    CordovaInstance(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setVisible", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Marker.prototype, "getHashCode", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Marker.prototype, "remove", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setOpacity", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Marker.prototype, "getOpacity", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Marker.prototype, "setZIndex", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setIconAnchor", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setInfoWindowAnchor", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setDraggable", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Marker.prototype, "isDraggable", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setFlat", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setIcon", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setTitle", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Marker.prototype, "getTitle", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setSnippet", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Marker.prototype, "getSnippet", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setRotation", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Marker.prototype, "getRotation", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Marker.prototype, "showInfoWindow", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Marker.prototype, "hideInfoWindow", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LatLng]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setPosition", null);
__decorate([
    CordovaInstance(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Marker.prototype, "getPosition", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", GoogleMap)
], Marker.prototype, "getMap", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setAnimation", null);
/**
 * @hidden
 */
var Circle = (function () {
    function Circle(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    /**
     * Adds an event listener.
     *
     * @returns {Observable<any>}
     */
    Circle.prototype.addEventListener = function (eventName) {
        return Observable.fromEvent(this._objectInstance, eventName);
    };
    /**
     * Adds an event listener that works once.
     *
     * @returns {Promise<any>}
     */
    Circle.prototype.addListenerOnce = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.addListenerOnce(eventName, resolve); });
    };
    /**
     * Gets a value
     * @param key
     */
    Circle.prototype.get = function (key) { return; };
    /**
     * Sets a value
     * @param key
     * @param value
     */
    Circle.prototype.set = function (key, value) { };
    /**
     * Listen to a map event.
     *
     * @returns {Observable<any>}
     */
    Circle.prototype.on = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return new Observable(function (observer) {
                observer.error({ error: 'plugin_not_installed' });
            });
        }
        return new Observable(function (observer) {
            _this._objectInstance.on(eventName, observer.next.bind(observer));
            return function () { return _this._objectInstance.off(event); };
        });
    };
    /**
     * Listen to a map event only once.
     *
     * @returns {Promise<any>}
     */
    Circle.prototype.one = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.one(eventName, resolve); });
    };
    /**
     * Clears all stored values
     */
    Circle.prototype.empty = function () { };
    Circle.prototype.getCenter = function () { return; };
    Circle.prototype.getRadius = function () { return; };
    Circle.prototype.getStrokeColor = function () { return; };
    Circle.prototype.getVisible = function () { return; };
    Circle.prototype.getZIndex = function () { return; };
    Circle.prototype.remove = function () { };
    Circle.prototype.setCenter = function (latLng) { };
    Circle.prototype.setFillColor = function (fillColor) { };
    Circle.prototype.setStrokeColor = function (strokeColor) { };
    Circle.prototype.setStrokeWidth = function (strokeWidth) { };
    Circle.prototype.setVisible = function (visible) { };
    Circle.prototype.setZIndex = function (zIndex) { };
    Circle.prototype.setRadius = function (radius) { };
    Circle.prototype.getMap = function () { return; };
    return Circle;
}());
export { Circle };
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], Circle.prototype, "get", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], Circle.prototype, "set", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Circle.prototype, "empty", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", LatLng)
], Circle.prototype, "getCenter", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Circle.prototype, "getRadius", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Circle.prototype, "getStrokeColor", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Circle.prototype, "getVisible", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Circle.prototype, "getZIndex", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Circle.prototype, "remove", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LatLng]),
    __metadata("design:returntype", void 0)
], Circle.prototype, "setCenter", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Circle.prototype, "setFillColor", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Circle.prototype, "setStrokeColor", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Circle.prototype, "setStrokeWidth", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Circle.prototype, "setVisible", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Circle.prototype, "setZIndex", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Circle.prototype, "setRadius", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", GoogleMap)
], Circle.prototype, "getMap", null);
/**
 * @hidden
 */
var Polyline = (function () {
    function Polyline(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    /**
     * Adds an event listener.
     *
     * @returns {Observable<any>}
     */
    Polyline.prototype.addEventListener = function (eventName) {
        return Observable.fromEvent(this._objectInstance, eventName);
    };
    /**
     * Adds an event listener that works once.
     *
     * @returns {Promise<any>}
     */
    Polyline.prototype.addListenerOnce = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.addListenerOnce(eventName, resolve); });
    };
    /**
     * Gets a value
     * @param key
     */
    Polyline.prototype.get = function (key) { return; };
    /**
     * Sets a value
     * @param key
     * @param value
     */
    Polyline.prototype.set = function (key, value) { };
    /**
     * Listen to a map event.
     *
     * @returns {Observable<any>}
     */
    Polyline.prototype.on = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return new Observable(function (observer) {
                observer.error({ error: 'plugin_not_installed' });
            });
        }
        return new Observable(function (observer) {
            _this._objectInstance.on(eventName, observer.next.bind(observer));
            return function () { return _this._objectInstance.off(event); };
        });
    };
    /**
     * Listen to a map event only once.
     *
     * @returns {Promise<any>}
     */
    Polyline.prototype.one = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.one(eventName, resolve); });
    };
    /**
     * Clears all stored values
     */
    Polyline.prototype.empty = function () { };
    Polyline.prototype.getPoints = function () { return; };
    Polyline.prototype.getCOlor = function () { return; };
    Polyline.prototype.getWidth = function () { return; };
    Polyline.prototype.getGeodesic = function () { return; };
    Polyline.prototype.getZIndex = function () { return; };
    Polyline.prototype.remove = function () { };
    Polyline.prototype.setPoints = function (points) { };
    Polyline.prototype.setColor = function (color) { };
    Polyline.prototype.setWidth = function (width) { };
    Polyline.prototype.setVisible = function (visible) { };
    Polyline.prototype.setZIndex = function (zIndex) { };
    Polyline.prototype.setGeoDesic = function (geoDesic) { };
    Polyline.prototype.getMap = function () { return; };
    return Polyline;
}());
export { Polyline };
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], Polyline.prototype, "get", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "set", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "empty", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], Polyline.prototype, "getPoints", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Polyline.prototype, "getCOlor", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Polyline.prototype, "getWidth", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Polyline.prototype, "getGeodesic", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Polyline.prototype, "getZIndex", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "remove", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "setPoints", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "setColor", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "setWidth", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "setVisible", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "setZIndex", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "setGeoDesic", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", GoogleMap)
], Polyline.prototype, "getMap", null);
/**
 * @hidden
 */
var Polygon = (function () {
    function Polygon(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    /**
     * Adds an event listener.
     *
     * @returns {Observable<any>}
     */
    Polygon.prototype.addEventListener = function (eventName) {
        return Observable.fromEvent(this._objectInstance, eventName);
    };
    /**
     * Adds an event listener that works once.
     *
     * @returns {Promise<any>}
     */
    Polygon.prototype.addListenerOnce = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.addListenerOnce(eventName, resolve); });
    };
    /**
     * Gets a value
     * @param key
     */
    Polygon.prototype.get = function (key) { return; };
    /**
     * Sets a value
     * @param key
     * @param value
     */
    Polygon.prototype.set = function (key, value) { };
    /**
     * Listen to a map event.
     *
     * @returns {Observable<any>}
     */
    Polygon.prototype.on = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return new Observable(function (observer) {
                observer.error({ error: 'plugin_not_installed' });
            });
        }
        return new Observable(function (observer) {
            _this._objectInstance.on(eventName, observer.next.bind(observer));
            return function () { return _this._objectInstance.off(event); };
        });
    };
    /**
     * Listen to a map event only once.
     *
     * @returns {Promise<any>}
     */
    Polygon.prototype.one = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.one(eventName, resolve); });
    };
    /**
     * Clears all stored values
     */
    Polygon.prototype.empty = function () { };
    Polygon.prototype.getPoints = function () { return; };
    Polygon.prototype.getStrokeColor = function () { return; };
    Polygon.prototype.getFillColor = function () { return; };
    Polygon.prototype.getStrokeWidth = function () { return; };
    Polygon.prototype.getGeodesic = function () { return; };
    Polygon.prototype.getVisible = function () { return; };
    Polygon.prototype.getZIndex = function () { return; };
    Polygon.prototype.remove = function () { };
    Polygon.prototype.setPoints = function (points) { };
    Polygon.prototype.setStrokeColor = function (strokeColor) { };
    Polygon.prototype.setFillColor = function (fillColor) { };
    Polygon.prototype.setStrokeWidth = function (strokeWidth) { };
    Polygon.prototype.setVisible = function (visible) { };
    Polygon.prototype.setZIndex = function (zIndex) { };
    Polygon.prototype.setGeodesic = function (geodesic) { };
    return Polygon;
}());
export { Polygon };
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], Polygon.prototype, "get", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "set", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "empty", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], Polygon.prototype, "getPoints", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Polygon.prototype, "getStrokeColor", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Polygon.prototype, "getFillColor", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Polygon.prototype, "getStrokeWidth", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Polygon.prototype, "getGeodesic", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Polygon.prototype, "getVisible", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Polygon.prototype, "getZIndex", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "remove", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "setPoints", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "setStrokeColor", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "setFillColor", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "setStrokeWidth", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "setVisible", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "setZIndex", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "setGeodesic", null);
/**
 * @hidden
 */
var TileOverlay = (function () {
    function TileOverlay(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    /**
     * Adds an event listener.
     *
     * @returns {Observable<any>}
     */
    TileOverlay.prototype.addEventListener = function (eventName) {
        return Observable.fromEvent(this._objectInstance, eventName);
    };
    /**
     * Adds an event listener that works once.
     *
     * @returns {Promise<any>}
     */
    TileOverlay.prototype.addListenerOnce = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.addListenerOnce(eventName, resolve); });
    };
    /**
     * Gets a value
     * @param key
     */
    TileOverlay.prototype.get = function (key) { return; };
    /**
     * Sets a value
     * @param key
     * @param value
     */
    TileOverlay.prototype.set = function (key, value) { };
    /**
     * Listen to a map event.
     *
     * @returns {Observable<any>}
     */
    TileOverlay.prototype.on = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return new Observable(function (observer) {
                observer.error({ error: 'plugin_not_installed' });
            });
        }
        return new Observable(function (observer) {
            _this._objectInstance.on(eventName, observer.next.bind(observer));
            return function () { return _this._objectInstance.off(event); };
        });
    };
    /**
     * Listen to a map event only once.
     *
     * @returns {Promise<any>}
     */
    TileOverlay.prototype.one = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.one(eventName, resolve); });
    };
    /**
     * Clears all stored values
     */
    TileOverlay.prototype.empty = function () { };
    TileOverlay.prototype.getVisible = function () { return; };
    TileOverlay.prototype.setVisible = function (visible) { };
    TileOverlay.prototype.getFadeIn = function () { return; };
    TileOverlay.prototype.setFadeIn = function (fadeIn) { };
    TileOverlay.prototype.getZIndex = function () { return; };
    TileOverlay.prototype.setZIndex = function (zIndex) { };
    TileOverlay.prototype.getOpacity = function () { return; };
    TileOverlay.prototype.setOpacity = function (opacity) { };
    TileOverlay.prototype.clearTileCache = function () { };
    TileOverlay.prototype.remove = function () { };
    return TileOverlay;
}());
export { TileOverlay };
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], TileOverlay.prototype, "get", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TileOverlay.prototype, "set", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TileOverlay.prototype, "empty", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], TileOverlay.prototype, "getVisible", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], TileOverlay.prototype, "setVisible", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], TileOverlay.prototype, "getFadeIn", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], TileOverlay.prototype, "setFadeIn", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], TileOverlay.prototype, "getZIndex", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TileOverlay.prototype, "setZIndex", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], TileOverlay.prototype, "getOpacity", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TileOverlay.prototype, "setOpacity", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TileOverlay.prototype, "clearTileCache", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TileOverlay.prototype, "remove", null);
/**
 * @hidden
 */
var GroundOverlay = (function () {
    function GroundOverlay(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    /**
     * Adds an event listener.
     *
     * @returns {Observable<any>}
     */
    GroundOverlay.prototype.addEventListener = function (eventName) {
        return Observable.fromEvent(this._objectInstance, eventName);
    };
    /**
     * Adds an event listener that works once.
     *
     * @returns {Promise<any>}
     */
    GroundOverlay.prototype.addListenerOnce = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.addListenerOnce(eventName, resolve); });
    };
    /**
     * Gets a value
     * @param key
     */
    GroundOverlay.prototype.get = function (key) { return; };
    /**
     * Sets a value
     * @param key
     * @param value
     */
    GroundOverlay.prototype.set = function (key, value) { };
    /**
     * Listen to a map event.
     *
     * @returns {Observable<any>}
     */
    GroundOverlay.prototype.on = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return new Observable(function (observer) {
                observer.error({ error: 'plugin_not_installed' });
            });
        }
        return new Observable(function (observer) {
            _this._objectInstance.on(eventName, observer.next.bind(observer));
            return function () { return _this._objectInstance.off(event); };
        });
    };
    /**
     * Listen to a map event only once.
     *
     * @returns {Promise<any>}
     */
    GroundOverlay.prototype.one = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.one(eventName, resolve); });
    };
    /**
     * Clears all stored values
     */
    GroundOverlay.prototype.empty = function () { };
    GroundOverlay.prototype.setBearing = function (bearing) { };
    GroundOverlay.prototype.getBearing = function () { return; };
    GroundOverlay.prototype.setOpacity = function (opacity) { };
    GroundOverlay.prototype.getOpacity = function () { return; };
    GroundOverlay.prototype.setVisible = function (visible) { };
    GroundOverlay.prototype.getVisible = function () { return; };
    GroundOverlay.prototype.setImage = function (image) { };
    ;
    GroundOverlay.prototype.remove = function () { };
    return GroundOverlay;
}());
export { GroundOverlay };
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], GroundOverlay.prototype, "get", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], GroundOverlay.prototype, "set", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GroundOverlay.prototype, "empty", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GroundOverlay.prototype, "setBearing", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], GroundOverlay.prototype, "getBearing", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GroundOverlay.prototype, "setOpacity", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], GroundOverlay.prototype, "getOpacity", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GroundOverlay.prototype, "setVisible", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], GroundOverlay.prototype, "getVisible", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GroundOverlay.prototype, "setImage", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GroundOverlay.prototype, "remove", null);
/**
 * @hidden
 */
var KmlOverlay = (function () {
    function KmlOverlay(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    /**
     * Adds an event listener.
     *
     * @returns {Observable<any>}
     */
    KmlOverlay.prototype.addEventListener = function (eventName) {
        return Observable.fromEvent(this._objectInstance, eventName);
    };
    /**
     * Adds an event listener that works once.
     *
     * @returns {Promise<any>}
     */
    KmlOverlay.prototype.addListenerOnce = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.addListenerOnce(eventName, resolve); });
    };
    /**
     * Gets a value
     * @param key
     */
    KmlOverlay.prototype.get = function (key) { return; };
    /**
     * Sets a value
     * @param key
     * @param value
     */
    KmlOverlay.prototype.set = function (key, value) { };
    /**
     * Listen to a map event.
     *
     * @returns {Observable<any>}
     */
    KmlOverlay.prototype.on = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return new Observable(function (observer) {
                observer.error({ error: 'plugin_not_installed' });
            });
        }
        return new Observable(function (observer) {
            _this._objectInstance.on(eventName, observer.next.bind(observer));
            return function () { return _this._objectInstance.off(event); };
        });
    };
    /**
     * Listen to a map event only once.
     *
     * @returns {Promise<any>}
     */
    KmlOverlay.prototype.one = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.one(eventName, resolve); });
    };
    /**
     * Clears all stored values
     */
    KmlOverlay.prototype.empty = function () { };
    KmlOverlay.prototype.remove = function () { };
    KmlOverlay.prototype.getOverlays = function () { return; };
    return KmlOverlay;
}());
export { KmlOverlay };
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], KmlOverlay.prototype, "get", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], KmlOverlay.prototype, "set", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], KmlOverlay.prototype, "empty", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], KmlOverlay.prototype, "remove", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], KmlOverlay.prototype, "getOverlays", null);
/**
 * @hidden
 */
var LatLngBounds = (function () {
    function LatLngBounds(southwestOrArrayOfLatLng, northeast) {
        var args = !!northeast ? [southwestOrArrayOfLatLng, northeast] : southwestOrArrayOfLatLng;
        this._objectInstance = new plugin.google.maps.LatLngBounds(args);
    }
    LatLngBounds.prototype.toString = function () { return; };
    LatLngBounds.prototype.toUrlValue = function (precision) { return; };
    LatLngBounds.prototype.extend = function (LatLng) { };
    LatLngBounds.prototype.contains = function (LatLng) { return; };
    LatLngBounds.prototype.getCenter = function () { return; };
    return LatLngBounds;
}());
export { LatLngBounds };
__decorate([
    InstanceProperty,
    __metadata("design:type", LatLng)
], LatLngBounds.prototype, "northeast", void 0);
__decorate([
    InstanceProperty,
    __metadata("design:type", LatLng)
], LatLngBounds.prototype, "southwest", void 0);
__decorate([
    InstanceProperty,
    __metadata("design:type", String)
], LatLngBounds.prototype, "type", void 0);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], LatLngBounds.prototype, "toString", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", String)
], LatLngBounds.prototype, "toUrlValue", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LatLng]),
    __metadata("design:returntype", void 0)
], LatLngBounds.prototype, "extend", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LatLng]),
    __metadata("design:returntype", Boolean)
], LatLngBounds.prototype, "contains", null);
__decorate([
    CordovaInstance({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", LatLng)
], LatLngBounds.prototype, "getCenter", null);
/**
 * @hidden
 */
var LatLng = (function () {
    function LatLng(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
    LatLng.prototype.equals = function (other) {
        return this.lat === other.lat && this.lng === other.lng;
    };
    LatLng.prototype.toString = function () {
        return this.lat + ',' + this.lng;
    };
    LatLng.prototype.toUrlValue = function (precision) {
        precision = precision || 6;
        return this.lat.toFixed(precision) + ',' + this.lng.toFixed(precision);
    };
    return LatLng;
}());
export { LatLng };
/**
 * @hidden
 */
var Geocoder = (function () {
    function Geocoder() {
    }
    /**
     * Converts position to address and vice versa
     * @param {GeocoderRequest} request Request object with either an address or a position
     * @returns {Promise<GeocoderResult[]>}
     */
    Geocoder.prototype.geocode = function (request) {
        return new Promise(function (resolve) {
            plugin.google.maps.Geocoder.geocode(request, resolve);
        });
    };
    return Geocoder;
}());
__decorate([
    CordovaCheck(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Geocoder.prototype, "geocode", null);
Geocoder = __decorate([
    Plugin({
        pluginName: 'Geocoder',
        pluginRef: 'plugin.google.maps.Geocoder',
        plugin: 'cordova-plugin-googlemaps',
        repo: ''
    })
], Geocoder);
export { Geocoder };
//# sourceMappingURL=index.js.map