"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
var Observable_1 = require('rxjs/Observable');
/**
 * @private
 * You can listen to these events where appropriate
 */
exports.GoogleMapsEvent = {
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
 * @private
 */
exports.GoogleMapsAnimation = {
    BOUNCE: 'BOUNCE',
    DROP: 'DROP'
};
/**
 * @name Google Maps
 * @description This plugin uses the native Google Maps SDK
 * @usage
 * ```
 * import { GoogleMap, GoogleMapsEvent } from 'ionic-native';
 *
 * // create a new map using element ID
 * let map = new GoogleMap('elementID');
 *
 * // or create a new map by passing HTMLElement
 * let element: HTMLElement = document.getElementById('elementID');
 *
 * // In Angular 2 or Ionic 2, if we have this element in html: <div #map></div>
 * // then we can use @ViewChild to find the element and pass it to GoogleMaps
 * @ViewChild('map') mapElement;
 * let map = new GoogleMap(mapElement);
 *
 * // listen to MAP_READY event
 * map.one(GoogleMapsEvent.MAP_READY).then(() => console.log('Map is ready!'));
 *
 *
 * // create LatLng object
 * let ionic: GoogleMapsLatLng = new GoogleMapsLatLng(43.0741904,-89.3809802);
 *
 * // create CameraPosition
 * let position: CameraPosition = {
 *   target: ionic,
 *   zoom: 18,
 *   tilt: 30
 * };
 *
 * // move the map's camera to position
 * map.moveCamera(position);
 *
 * // create new marker
 * let markerOptions: GoogleMapsMarkerOptions = {
 *   position: ionic,
 *   title: 'Ionic'
 * };
 *
 * map.addMarker(markerOptions)
 *   .then((marker: GoogleMapsMarker) => {
 *     marker.showInfoWindow();
 *   });
 * ```
 */
var GoogleMap = (function () {
    function GoogleMap(element, options) {
        if (typeof element === 'string')
            element = document.getElementById(element);
        this._objectInstance = plugin.google.maps.Map.getMap(element, options);
    }
    /**
     * Checks if a map object has been created and is available.
     *
     * @return {Promise<boolean>}
     */
    GoogleMap.isAvailable = function () { return; };
    /**
     * Listen to a map event.
     *
     * @return {Observable<any>}
     */
    GoogleMap.prototype.on = function (event) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this._objectInstance.on(event, observer.next.bind(observer));
            return function () { return _this._objectInstance.off(event); };
        });
    };
    /**
     * Listen to a map event only once.
     *
     * @return {Promise<any>}
     */
    GoogleMap.prototype.one = function (event) {
        var _this = this;
        return new Promise(function (resolve) { return _this._objectInstance.one(event, resolve); });
    };
    GoogleMap.prototype.setDebuggable = function (isDebuggable) { };
    GoogleMap.prototype.setClickable = function (isClickable) { };
    /**
     * Get the position of the camera.
     *
     * @return {Promise<CameraPosition>}
     */
    GoogleMap.prototype.getCameraPosition = function () { return; };
    /**
     * Get the location of the user.
     *
     * @return {Promise<MyLocation>}
     */
    GoogleMap.prototype.getMyLocation = function (options) { return; };
    /**
     * Get the visible region.
     *
     * @return {Promise<VisibleRegion>}
     */
    GoogleMap.prototype.getVisibleRegion = function () { return; };
    GoogleMap.prototype.showDialog = function () { };
    GoogleMap.prototype.closeDialog = function () { };
    GoogleMap.prototype.getLicenseInfo = function () { return; };
    GoogleMap.prototype.setCenter = function (latLng) { };
    GoogleMap.prototype.setZoom = function (zoomLevel) { };
    GoogleMap.prototype.setMapTypeId = function (typeId) { };
    GoogleMap.prototype.setTilt = function (tiltLevel) { };
    GoogleMap.prototype.animateCamera = function (animateCameraOptions) { return; };
    GoogleMap.prototype.moveCamera = function (cameraPosition) { return; };
    GoogleMap.prototype.setMyLocationEnabled = function (enabled) { };
    GoogleMap.prototype.setIndoorEnabled = function (enabled) { };
    GoogleMap.prototype.setTrafficEnabled = function (enabled) { };
    GoogleMap.prototype.setCompassEnabled = function (enabled) { };
    GoogleMap.prototype.setAllGesturesEnabled = function (enabled) { };
    GoogleMap.prototype.addMarker = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addMarker(options, function (marker) {
                if (marker) {
                    resolve(new GoogleMapsMarker(marker));
                }
                else {
                    reject();
                }
            });
        });
    };
    GoogleMap.prototype.addCircle = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addCircle(options, function (circle) {
                if (circle) {
                    resolve(new GoogleMapsCircle(circle));
                }
                else {
                    reject();
                }
            });
        });
    };
    GoogleMap.prototype.addPolygon = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addPolygon(options, function (polygon) {
                if (polygon) {
                    resolve(new GoogleMapsPolygon(polygon));
                }
                else {
                    reject();
                }
            });
        });
    };
    GoogleMap.prototype.addPolyline = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addPolyline(options, function (polyline) {
                if (polyline) {
                    resolve(new GoogleMapsPolyline(polyline));
                }
                else {
                    reject();
                }
            });
        });
    };
    GoogleMap.prototype.addTileOverlay = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addTileOverlay(options, function (tileOverlay) {
                if (tileOverlay) {
                    resolve(new GoogleMapsTileOverlay(tileOverlay));
                }
                else {
                    reject();
                }
            });
        });
    };
    GoogleMap.prototype.addGroundOverlay = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addGroundOverlay(options, function (groundOverlay) {
                if (groundOverlay) {
                    resolve(new GoogleMapsGroundOverlay(groundOverlay));
                }
                else {
                    reject();
                }
            });
        });
    };
    GoogleMap.prototype.addKmlOverlay = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addKmlOverlay(options, function (kmlOverlay) {
                if (kmlOverlay) {
                    resolve(new GoogleMapsKmlOverlay(kmlOverlay));
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
    GoogleMap.prototype.fromLatLngToPoint = function (latLng, point) { return; };
    GoogleMap.prototype.fromPointToLatLng = function (point, latLng) { return; };
    GoogleMap.prototype.toDataURL = function () { return; };
    GoogleMap.prototype.remove = function () { };
    GoogleMap.prototype.panBy = function () { };
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "setDebuggable", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "setClickable", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], GoogleMap.prototype, "getCameraPosition", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], GoogleMap.prototype, "getMyLocation", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], GoogleMap.prototype, "getVisibleRegion", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "showDialog", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "closeDialog", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], GoogleMap.prototype, "getLicenseInfo", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "setCenter", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "setZoom", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "setMapTypeId", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "setTilt", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], GoogleMap.prototype, "animateCamera", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], GoogleMap.prototype, "moveCamera", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "setMyLocationEnabled", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "setIndoorEnabled", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "setTrafficEnabled", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "setCompassEnabled", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "setAllGesturesEnabled", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "setDiv", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "setVisible", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "setOptions", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "setBackgroundColor", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "setPadding", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "clear", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "refreshLayout", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], GoogleMap.prototype, "fromLatLngToPoint", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], GoogleMap.prototype, "fromPointToLatLng", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], GoogleMap.prototype, "toDataURL", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "remove", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "panBy", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleMap, "isAvailable", null);
    GoogleMap = __decorate([
        plugin_1.Plugin({
            pluginRef: 'plugin.google.maps.Map',
            plugin: 'cordova-plugin-googlemaps',
            repo: 'https://github.com/mapsplugin/cordova-plugin-googlemaps',
            install: 'ionic plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="YOUR_ANDROID_API_KEY_IS_HERE" --variable API_KEY_FOR_IOS="YOUR_IOS_API_KEY_IS_HERE"'
        })
    ], GoogleMap);
    return GoogleMap;
}());
exports.GoogleMap = GoogleMap;
/**
 * @private
 */
var GoogleMapsMarker = (function () {
    function GoogleMapsMarker(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    GoogleMapsMarker.prototype.addEventListener = function (event) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this._objectInstance.addEventListener(event, observer.next.bind(observer));
            return function () { return _this._objectInstance.removeEventListener(event, observer.next.bind(observer)); };
        });
    };
    GoogleMapsMarker.prototype.isVisible = function () { return; };
    GoogleMapsMarker.prototype.setVisible = function (visible) { };
    GoogleMapsMarker.prototype.getHashCode = function () { return; };
    GoogleMapsMarker.prototype.remove = function () { };
    GoogleMapsMarker.prototype.setOpacity = function (alpha) { };
    GoogleMapsMarker.prototype.getOpacity = function () { return; };
    GoogleMapsMarker.prototype.setZIndex = function () { };
    GoogleMapsMarker.prototype.setIconAnchor = function (x, y) { };
    GoogleMapsMarker.prototype.setInfoWindowAnchor = function (x, y) { };
    GoogleMapsMarker.prototype.setDraggable = function (draggable) { };
    GoogleMapsMarker.prototype.isDraggable = function () { return; };
    GoogleMapsMarker.prototype.setFlat = function (flat) { return; };
    GoogleMapsMarker.prototype.setIcon = function (icon) { return; };
    GoogleMapsMarker.prototype.setTitle = function (title) { };
    GoogleMapsMarker.prototype.getTitle = function () { return; };
    GoogleMapsMarker.prototype.setSnippet = function (snippet) { };
    GoogleMapsMarker.prototype.getSnippet = function () { return; };
    GoogleMapsMarker.prototype.setRotation = function (rotation) { };
    GoogleMapsMarker.prototype.getRotation = function () { return; };
    GoogleMapsMarker.prototype.showInfoWindow = function () { return; };
    GoogleMapsMarker.prototype.hideInfoWindow = function () { return; };
    GoogleMapsMarker.prototype.setPosition = function (latLng) { return; };
    GoogleMapsMarker.prototype.getPosition = function () { return; };
    GoogleMapsMarker.prototype.getMap = function () { return; };
    GoogleMapsMarker.prototype.setAnimation = function (animation) { };
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "isVisible", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], GoogleMapsMarker.prototype, "setVisible", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "getHashCode", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "remove", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "setOpacity", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "getOpacity", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "setZIndex", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "setIconAnchor", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "setInfoWindowAnchor", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "setDraggable", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "isDraggable", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "setFlat", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "setIcon", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "setTitle", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "getTitle", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "setSnippet", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "getSnippet", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "setRotation", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "getRotation", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "showInfoWindow", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "hideInfoWindow", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "setPosition", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], GoogleMapsMarker.prototype, "getPosition", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "getMap", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "setAnimation", null);
    return GoogleMapsMarker;
}());
exports.GoogleMapsMarker = GoogleMapsMarker;
/**
 * @private
 */
var GoogleMapsCircle = (function () {
    function GoogleMapsCircle(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    GoogleMapsCircle.prototype.addEventListener = function (event) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this._objectInstance.addEventListener(event, observer.next.bind(observer));
            return function () { return _this._objectInstance.removeEventListener(event, observer.next.bind(observer)); };
        });
    };
    GoogleMapsCircle.prototype.getCenter = function () { return; };
    GoogleMapsCircle.prototype.getRadius = function () { return; };
    GoogleMapsCircle.prototype.getStrokeColor = function () { return; };
    GoogleMapsCircle.prototype.getVisible = function () { return; };
    GoogleMapsCircle.prototype.getZIndex = function () { return; };
    GoogleMapsCircle.prototype.remove = function () { };
    GoogleMapsCircle.prototype.setCenter = function (latLng) { };
    GoogleMapsCircle.prototype.setFillColor = function (fillColor) { };
    GoogleMapsCircle.prototype.setStrokeColor = function (strokeColor) { };
    GoogleMapsCircle.prototype.setStrokeWidth = function (strokeWidth) { };
    GoogleMapsCircle.prototype.setVisible = function (visible) { };
    GoogleMapsCircle.prototype.setZIndex = function (zIndex) { };
    GoogleMapsCircle.prototype.setRadius = function (radius) { };
    GoogleMapsCircle.prototype.getMap = function () { return; };
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsCircle.prototype, "getCenter", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsCircle.prototype, "getRadius", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsCircle.prototype, "getStrokeColor", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsCircle.prototype, "getVisible", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsCircle.prototype, "getZIndex", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsCircle.prototype, "remove", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsCircle.prototype, "setCenter", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsCircle.prototype, "setFillColor", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsCircle.prototype, "setStrokeColor", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsCircle.prototype, "setStrokeWidth", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsCircle.prototype, "setVisible", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsCircle.prototype, "setZIndex", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsCircle.prototype, "setRadius", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsCircle.prototype, "getMap", null);
    return GoogleMapsCircle;
}());
exports.GoogleMapsCircle = GoogleMapsCircle;
/**
 * @private
 */
var GoogleMapsPolyline = (function () {
    function GoogleMapsPolyline(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    GoogleMapsPolyline.prototype.addEventListener = function (event) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this._objectInstance.addEventListener(event, observer.next.bind(observer));
            return function () { return _this._objectInstance.removeEventListener(event, observer.next.bind(observer)); };
        });
    };
    GoogleMapsPolyline.prototype.getPoints = function () { return; };
    GoogleMapsPolyline.prototype.getCOlor = function () { return; };
    GoogleMapsPolyline.prototype.getWidth = function () { return; };
    GoogleMapsPolyline.prototype.getGeodesic = function () { return; };
    GoogleMapsPolyline.prototype.getZIndex = function () { return; };
    GoogleMapsPolyline.prototype.remove = function () { };
    GoogleMapsPolyline.prototype.setPoints = function (points) { };
    GoogleMapsPolyline.prototype.setColor = function (color) { };
    GoogleMapsPolyline.prototype.setWidth = function (width) { };
    GoogleMapsPolyline.prototype.setVisible = function (visible) { };
    GoogleMapsPolyline.prototype.setZIndex = function (zIndex) { };
    GoogleMapsPolyline.prototype.setGeoDesic = function (geoDesic) { };
    GoogleMapsPolyline.prototype.getMap = function () { return; };
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "getPoints", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "getCOlor", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "getWidth", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "getGeodesic", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "getZIndex", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "remove", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "setPoints", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "setColor", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "setWidth", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "setVisible", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "setZIndex", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "setGeoDesic", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "getMap", null);
    return GoogleMapsPolyline;
}());
exports.GoogleMapsPolyline = GoogleMapsPolyline;
/**
 * @private
 */
var GoogleMapsPolygon = (function () {
    function GoogleMapsPolygon(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    GoogleMapsPolygon.prototype.addEventListener = function (event) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this._objectInstance.addEventListener(event, observer.next.bind(observer));
            return function () { return _this._objectInstance.removeEventListener(event, observer.next.bind(observer)); };
        });
    };
    GoogleMapsPolygon.prototype.getPoints = function () { return; };
    GoogleMapsPolygon.prototype.getStrokeColor = function () { return; };
    GoogleMapsPolygon.prototype.getFillColor = function () { return; };
    GoogleMapsPolygon.prototype.getStrokeWidth = function () { return; };
    GoogleMapsPolygon.prototype.getGeodesic = function () { return; };
    GoogleMapsPolygon.prototype.getVisible = function () { return; };
    GoogleMapsPolygon.prototype.getZIndex = function () { return; };
    GoogleMapsPolygon.prototype.remove = function () { };
    GoogleMapsPolygon.prototype.setPoints = function (points) { };
    GoogleMapsPolygon.prototype.setStrokeColor = function (strokeColor) { };
    GoogleMapsPolygon.prototype.setFillColor = function (fillColor) { };
    GoogleMapsPolygon.prototype.setStrokeWidth = function (strokeWidth) { };
    GoogleMapsPolygon.prototype.setVisible = function (visible) { };
    GoogleMapsPolygon.prototype.setZIndex = function (zIndex) { };
    GoogleMapsPolygon.prototype.setGeodesic = function (geodesic) { };
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "getPoints", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "getStrokeColor", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "getFillColor", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "getStrokeWidth", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "getGeodesic", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "getVisible", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "getZIndex", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "remove", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "setPoints", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "setStrokeColor", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "setFillColor", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "setStrokeWidth", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "setVisible", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "setZIndex", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "setGeodesic", null);
    return GoogleMapsPolygon;
}());
exports.GoogleMapsPolygon = GoogleMapsPolygon;
/**
 * @private
 */
var GoogleMapsTileOverlay = (function () {
    function GoogleMapsTileOverlay(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    GoogleMapsTileOverlay.prototype.getVisible = function () { return; };
    GoogleMapsTileOverlay.prototype.setVisible = function (visible) { };
    GoogleMapsTileOverlay.prototype.getFadeIn = function () { return; };
    GoogleMapsTileOverlay.prototype.setFadeIn = function (fadeIn) { };
    GoogleMapsTileOverlay.prototype.getZIndex = function () { return; };
    GoogleMapsTileOverlay.prototype.setZIndex = function (zIndex) { };
    GoogleMapsTileOverlay.prototype.getOpacity = function () { return; };
    GoogleMapsTileOverlay.prototype.setOpacity = function (opacity) { };
    GoogleMapsTileOverlay.prototype.clearTileCache = function () { };
    GoogleMapsTileOverlay.prototype.remove = function () { };
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsTileOverlay.prototype, "getVisible", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsTileOverlay.prototype, "setVisible", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsTileOverlay.prototype, "getFadeIn", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsTileOverlay.prototype, "setFadeIn", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsTileOverlay.prototype, "getZIndex", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsTileOverlay.prototype, "setZIndex", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsTileOverlay.prototype, "getOpacity", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsTileOverlay.prototype, "setOpacity", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsTileOverlay.prototype, "clearTileCache", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsTileOverlay.prototype, "remove", null);
    return GoogleMapsTileOverlay;
}());
exports.GoogleMapsTileOverlay = GoogleMapsTileOverlay;
/**
 * @private
 */
var GoogleMapsGroundOverlay = (function () {
    function GoogleMapsGroundOverlay(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    GoogleMapsGroundOverlay.prototype.setBearing = function (bearing) { };
    GoogleMapsGroundOverlay.prototype.getBearing = function () { return; };
    GoogleMapsGroundOverlay.prototype.setOpacity = function (opacity) { };
    GoogleMapsGroundOverlay.prototype.getOpacity = function () { return; };
    GoogleMapsGroundOverlay.prototype.setVisible = function (visible) { };
    GoogleMapsGroundOverlay.prototype.getVisible = function () { return; };
    GoogleMapsGroundOverlay.prototype.setImage = function (image) { };
    ;
    GoogleMapsGroundOverlay.prototype.remove = function () { };
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsGroundOverlay.prototype, "setBearing", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsGroundOverlay.prototype, "getBearing", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsGroundOverlay.prototype, "setOpacity", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsGroundOverlay.prototype, "getOpacity", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsGroundOverlay.prototype, "setVisible", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsGroundOverlay.prototype, "getVisible", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsGroundOverlay.prototype, "setImage", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsGroundOverlay.prototype, "remove", null);
    return GoogleMapsGroundOverlay;
}());
exports.GoogleMapsGroundOverlay = GoogleMapsGroundOverlay;
/**
 * @private
 */
var GoogleMapsKmlOverlay = (function () {
    function GoogleMapsKmlOverlay(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    GoogleMapsKmlOverlay.prototype.remove = function () { };
    GoogleMapsKmlOverlay.prototype.getOverlays = function () { return; };
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsKmlOverlay.prototype, "remove", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsKmlOverlay.prototype, "getOverlays", null);
    return GoogleMapsKmlOverlay;
}());
exports.GoogleMapsKmlOverlay = GoogleMapsKmlOverlay;
/**
 * @private
 */
var GoogleMapsLatLngBounds = (function () {
    function GoogleMapsLatLngBounds(southwestOrArrayOfLatLng, northeast) {
        this.southwestOrArrayOfLatLng = southwestOrArrayOfLatLng;
        this.northeast = northeast;
        var args = !!northeast ? [southwestOrArrayOfLatLng, northeast] : southwestOrArrayOfLatLng;
        this._objectInstance = new plugin.google.maps.LatLngBounds(args);
    }
    GoogleMapsLatLngBounds.prototype.toString = function () { return; };
    GoogleMapsLatLngBounds.prototype.toUrlValue = function (precision) { return; };
    GoogleMapsLatLngBounds.prototype.extend = function (LatLng) { };
    GoogleMapsLatLngBounds.prototype.contains = function (LatLng) { return; };
    GoogleMapsLatLngBounds.prototype.getCenter = function () { return; };
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsLatLngBounds.prototype, "toString", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsLatLngBounds.prototype, "toUrlValue", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsLatLngBounds.prototype, "extend", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsLatLngBounds.prototype, "contains", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsLatLngBounds.prototype, "getCenter", null);
    return GoogleMapsLatLngBounds;
}());
exports.GoogleMapsLatLngBounds = GoogleMapsLatLngBounds;
/**
 * @private
 */
var GoogleMapsLatLng = (function () {
    function GoogleMapsLatLng(lat, lng) {
        this.lat = lat;
        this.lng = lng;
        this._objectInstance = new plugin.google.maps.LatLng(lat, lng);
    }
    GoogleMapsLatLng.prototype.equals = function (other) {
        return this.lat === other.lat && this.lng === other.lng;
    };
    GoogleMapsLatLng.prototype.toString = function () { return; };
    GoogleMapsLatLng.prototype.toUrlValue = function (precision) {
        precision = precision || 6;
        return this.lat.toFixed(precision) + ',' + this.lng.toFixed(precision);
    };
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsLatLng.prototype, "toString", null);
    return GoogleMapsLatLng;
}());
exports.GoogleMapsLatLng = GoogleMapsLatLng;
/**
 * @private
 */
var Geocoder = (function () {
    function Geocoder() {
    }
    /**
     * Converts position to address and vice versa
     * @param {GeocoderRequest} request Request object with either an address or a position
     * @returns {Promise<GeocoderResult[]>}
     */
    Geocoder.geocode = function (request) {
        return new Promise(function (resolve, reject) {
            if (!plugin || !plugin.google || !plugin.google.maps || !plugin.google.maps.Geocoder) {
                reject({ error: 'plugin_not_installed' });
            }
            else {
                plugin.google.maps.Geocoder.geocode(request, resolve);
            }
        });
    };
    return Geocoder;
}());
exports.Geocoder = Geocoder;
//# sourceMappingURL=googlemaps.js.map