import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
export declare type MapType = 'MAP_TYPE_NORMAL' | 'MAP_TYPE_ROADMAP' | 'MAP_TYPE_SATELLITE' | 'MAP_TYPE_HYBRID' | 'MAP_TYPE_TERRAIN' | 'MAP_TYPE_NONE';
/**
 * @hidden
 */
export declare class LatLng implements ILatLng {
    lat: number;
    lng: number;
    constructor(lat: number, lng: number);
    equals(other: ILatLng): boolean;
    toString(): string;
    toUrlValue(precision?: number): string;
}
export interface ILatLngBounds {
    northeast: ILatLng;
    southwest: ILatLng;
}
/**
 * @hidden
 */
export declare class LatLngBounds implements ILatLngBounds {
    private _objectInstance;
    northeast: ILatLng;
    southwest: ILatLng;
    type: string;
    constructor(points?: ILatLng[]);
    /**
     * Converts to string
     * @return {string}
     */
    toString(): string;
    /**
     * Returns a string of the form "lat_sw,lng_sw,lat_ne,lng_ne" for this bounds, where "sw" corresponds to the southwest corner of the bounding box, while "ne" corresponds to the northeast corner of that box.
     * @param precision {number}
     * @return {string}
     */
    toUrlValue(precision?: number): string;
    /**
     * Extends this bounds to contain the given point.
     * @param LatLng {ILatLng}
     */
    extend(LatLng: ILatLng): void;
    /**
     * Returns true if the given lat/lng is in this bounds.
     * @param LatLng {ILatLng}
     */
    contains(LatLng: ILatLng): boolean;
    /**
     * Computes the center of this LatLngBounds
     * @return {LatLng}
     */
    getCenter(): LatLng;
}
export interface GoogleMapOptions {
    mapType?: MapType;
    controls?: {
        /**
         * Turns the compass on or off.
         */
        compass?: boolean;
        /**
         * Turns the myLocation picker on or off. If turns on this button, the application displays a permission dialog to obtain the geolocation data.
         */
        myLocationButton?: boolean;
        /**
         * Turns the indoor picker on or off.
         */
        indoorPicker?: boolean;
        /**
         * Turns the map toolbar on or off. This option is for Android only.
         */
        mapToolbar?: boolean;
    };
    gestures?: {
        scroll?: boolean;
        tilt?: boolean;
        zoom?: boolean;
        rotate?: boolean;
    };
    /**
     * Map styles
     * @ref https://developers.google.com/maps/documentation/javascript/style-reference
     */
    styles?: any[];
    /**
     * Initial camera position
     */
    camera?: CameraPosition;
    preferences?: {
        /**
         * Minimum and maximum zoom levels for zooming gestures.
         */
        zoom?: {
            minZoom?: number;
            maxZoom?: number;
        };
        /**
         * Paddings of controls.
         */
        padding?: {
            left?: number;
            top?: number;
            bottom?: number;
            right?: number;
        };
        /**
         * Turns the 3D buildings layer on or off.
         */
        building?: boolean;
    };
}
export interface AnimateCameraOptions {
    /**
     * Center position of the camera target.
     */
    target?: ILatLng | Array<ILatLng> | LatLngBounds;
    /**
     * View angle of camera from 0 to 90
     */
    tilt?: number;
    /**
     * Zoom level from 0 to 20
     */
    zoom?: number;
    /**
     * Heading from 0 to 359
     */
    bearing?: number;
    /**
     * Duration of camera animation in milli seconds
     */
    duration?: number;
    /**
     * Camera padding in pixel
     */
    padding?: number;
}
export interface CameraPosition {
    /**
     * The center location of the camera view.
     */
    target?: ILatLng | LatLngBounds | ILatLng[];
    /**
     * View angle
     */
    tilt?: number;
    /**
     * Zoom level
     */
    zoom?: number;
    /**
     * Map orientation
     */
    bearing?: number;
    /**
     * The duration of animation in milliseconds
     */
    duration?: number;
}
export interface CircleOptions {
    center?: ILatLng;
    radius?: number;
    strokeColor?: string;
    strokeWidth?: number;
    fillColor?: string;
    clickable?: boolean;
    visible?: boolean;
    zIndex?: number;
}
export interface GeocoderRequest {
    address?: string | string[];
    position?: ILatLng | ILatLng[];
}
export interface GeocoderResult {
    adminArea?: string;
    country?: string;
    countryCode?: string;
    extra?: {
        featureName?: string;
        lines?: Array<string>;
        permises?: string;
        phone?: string;
        url?: string;
    };
    locale?: string;
    locality?: string;
    position?: {
        lat: number;
        lng: number;
    };
    postalCode?: string;
    subAdminArea?: string;
    subLocality?: string;
    subThoroughfare?: string;
    thoroughfare?: string;
}
export interface GroundOverlayOptions {
    /**
     * URL of overlay
     */
    url?: string;
    /**
     * Bounds, array of ILatLng
     */
    bounds?: Array<ILatLng>;
    /**
     * Set to false to ignore click event
     */
    clickable?: boolean;
    /**
     * Set to false to hide
     */
    visible?: boolean;
    /**
     * Opacity. From 0.0 to 1.0 .
     */
    opacity?: number;
    /**
     * Bearing
     */
    bearing?: number;
    /**
     * Z-index
     */
    zIndex?: number;
}
export interface ILatLng {
    lat: number;
    lng: number;
}
export interface MarkerIcon {
    url?: string;
    size?: {
        width?: number;
        height?: number;
    };
}
export interface MarkerOptions {
    /**
     * The icon image url or properties. Also you can specify HTML Color values. Alternatively you can specify the image as Base64
     */
    icon?: any;
    /**
     * The content of the infoWindow.
     */
    title?: string;
    /**
     * The snippet of the infoWindow.
     */
    snippet?: string;
    /**
     * The position of the marker.
     */
    position?: ILatLng;
    /**
     * 	Specify the anchor of the InfoWindow
     */
    infoWindowAnchor?: number[];
    /**
     * Set true if you want to enable to drag the marker. (Default: false) Important! Drag starts after long pressed on the marker.
     */
    draggable?: boolean;
    /**
     * 	Set true if you want to use a flat marker. (Default: false)
     */
    flat?: boolean;
    /**
     * 	Set rotation angle. (Default: 0)
     */
    rotation?: number;
    /**
     * Set false if you want to hide. (Default: true)
     */
    visible?: boolean;
    /**
     * Specify the options for title. This property work for normal InfoWindow.
     */
    styles?: any;
    /**
     * Which animation to play when marker is added to a map.
     */
    animation?: string;
    /**
     * Higher zIndex value overlays will be drawn on top of lower zIndex value tile layers and overlays.
     */
    zIndex?: number;
    /**
     * Set to true to disable auto panning when the marker is clicked.
     */
    disableAutoPan?: boolean;
}
export interface MyLocation {
    latLng?: LatLng;
    elapsedRealtimeNanos?: any;
    time?: string;
    accuracy?: any;
    bearing?: number;
    altitude?: any;
    speed?: number;
    provider?: any;
    hashCode?: any;
}
export interface MyLocationOptions {
    enableHighAccuracy?: boolean;
}
export interface PolygonOptions {
    points?: Array<ILatLng>;
    geodesic?: boolean;
    strokeColor?: string;
    strokeWidth?: number;
    fillColor?: string;
    visible?: boolean;
    zIndex?: number;
    addHole?: Array<Array<LatLng>>;
}
export interface PolylineOptions {
    points?: Array<ILatLng>;
    visible?: boolean;
    geodesic?: boolean;
    color?: string;
    width?: number;
    zIndex?: number;
}
export interface TileOverlayOptions {
    getTile: (x: number, y: number, zoom: number) => string;
    visible?: boolean;
    zIndex?: number;
    tileSize?: number;
    opacity?: number;
}
/**
 * @hidden
 */
export declare class VisibleRegion implements ILatLngBounds {
    private _objectInstance;
    northeast: ILatLng;
    southwest: ILatLng;
    farLeft: ILatLng;
    farRight: ILatLng;
    nearLeft: ILatLng;
    nearRight: ILatLng;
    type: string;
    constructor(southwest: LatLngBounds, northeast: LatLngBounds, farLeft: ILatLng, farRight: ILatLng, nearLeft: ILatLng, nearRight: ILatLng);
    /**
     * Converts to string
     * @return {string}
     */
    toString(): string;
    /**
     * Returns a string of the form "lat_sw,lng_sw,lat_ne,lng_ne" for this bounds, where "sw" corresponds to the southwest corner of the bounding box, while "ne" corresponds to the northeast corner of that box.
     * @param precision {number}
     * @return {string}
     */
    toUrlValue(precision?: number): string;
    /**
     * Returns true if the given lat/lng is in this bounds.
     * @param LatLng {ILatLng}
     */
    contains(LatLng: ILatLng): boolean;
}
/**
 * @hidden
 * You can listen to these events where appropriate
 */
export declare const GoogleMapsEvent: {
    [eventName: string]: string;
};
/**
 * @hidden
 */
export declare const GoogleMapsAnimation: {
    [animationName: string]: string;
};
/**
 * @hidden
 */
export declare const GoogleMapsMapTypeId: {
    [mapType: string]: MapType;
};
/**
 * @name Google Maps
 * @description
 * This plugin uses the native Google Maps SDK
 * Note: As of Ionic native 4.0, this using the 2.0 version of the google maps plugin. Please make sure your plugin is updated
 * @usage
 * ```typescript
 * import {
 *  GoogleMaps,
 *  GoogleMap,
 *  GoogleMapsEvent,
 *  GoogleMapOptions,
 *  CameraPosition,
 *  MarkerOptions,
 *  Marker
 * } from '@ionic-native/google-maps';
 * import { Component } from "@angular/core/";
 *
 * @Component({
 *   selector: 'page-home',
 *   templateUrl: 'home.html'
 * })
 * export class HomePage {
 *   map: GoogleMap;
 *   mapElement: HTMLElement;
 *   constructor(private googleMaps: GoogleMaps) { }
 *
 *   ionViewDidLoad() {
 *    this.loadMap();
 *   }
 *
 *  loadMap() {
 *     this.mapElement = document.getElementById('map');
 *
 *     let mapOptions: GoogleMapOptions = {
 *       camera: {
 *         target: {
 *           lat: 43.0741904,
 *           lng: -89.3809802
 *         },
 *         zoom: 18,
 *         tilt: 30
 *       }
 *     };
 *
 *     this.map = this.googleMaps.create(this.mapElement, mapOptions);
 *
 *     // Wait the MAP_READY before using any methods.
 *     this.map.one(GoogleMapsEvent.MAP_READY)
 *       .then(() => {
 *         console.log('Map is ready!');
 *
 *         // Now you can use all methods safely.
 *         this.map.addMarker({
 *             title: 'Ionic',
 *             icon: 'blue',
 *             animation: 'DROP',
 *             position: {
 *               lat: 43.0741904,
 *               lng: -89.3809802
 *             }
 *           })
 *           .then(marker => {
 *             marker.on(GoogleMapsEvent.MARKER_CLICK)
 *               .subscribe(() => {
 *                 alert('clicked');
 *               });
 *           });
 *
 *       });
 *   }
 * }
 *
 * ```
 * @classes
 * GoogleMap
 * Circle
 * Encoding
 * Environment
 * Geocoder
 * GroundOverlay
 * HtmlInfoWindow
 * Geocoder
 * LatLng
 * LatLngBounds
 * Marker
 * Polygon
 * Polyline
 * Spherical
 * TileOverlay
 * BaseClass
 * BaseArrayClass
 * @interfaces
 * GoogleMapOptions
 * AnimateCameraOptions
 * CameraPosition
 * CircleOptions
 * GeocoderRequest
 * GeocoderResult
 * GroundOverlayOptions
 * ILatLng
 * MarkerIcon
 * MarkerOptions
 * MyLocation
 * MyLocationOptions
 * PolygonOptions
 * PolylineOptions
 * TileOverlayOptions
 * VisibleRegion
 */
export declare class GoogleMaps extends IonicNativePlugin {
    /**
     * Keep a single instance of Environment in memory
     * @hidden
     */
    _environment: Environment;
    /**
     * @hidden
     */
    _spherical: Spherical;
    /**
     * @hidden
     */
    _encoding: Encoding;
    /**
     * Creates a new GoogleMap instance
     * @param element {string | HTMLElement} Element ID or reference to attach the map to
     * @param options {any} Options
     * @return {GoogleMap}
     */
    create(element: string | HTMLElement, options?: GoogleMapOptions): GoogleMap;
    /**
     * Method that returns an instance of Environment class
     * @return {Environment}
     */
    environment(): Environment;
    /**
     * Method that returns an instance of Spherical class
     * @returns {Spherical}
     */
    spherical(): Spherical;
    /**
     * Method that returns an instance of Encoding class
     * @returns {Encoding}
     */
    encoding(): Encoding;
}
/**
 * @hidden
 * https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/class/BaseClass/README.md
 */
export declare class BaseClass {
    protected _objectInstance: any;
    /**
     * Adds an event listener.
     *
     * @return {Observable<any>}
     */
    addEventListener(eventName: string): Observable<any>;
    /**
     * Adds an event listener that works once.
     *
     * @return {Promise<any>}
     */
    addListenerOnce(eventName: string): Promise<any>;
    /**
     * Gets a value
     * @param key
     */
    get(key: string): any;
    /**
     * Sets a value
     * @param key
     * @param value
     */
    set(key: string, value: any, noNotify?: boolean): void;
    /**
     * Bind a key to another object
     * @param key {string}
     * @param target {any}
     * @param targetKey? {string}
     * @param noNotify? {boolean}
     */
    bindTo(key: string, target: any, targetKey?: string, noNotify?: boolean): void;
    /**
     * Listen to a map event.
     *
     * @return {Observable<any>}
     */
    on(eventName: string): Observable<any>;
    /**
     * Listen to a map event only once.
     *
     * @return {Promise<any>}
     */
    one(eventName: string): Promise<any>;
    /**
     * Clears all stored values
     */
    empty(): void;
    /**
     * Dispatch event.
     */
    trigger(eventName: string, ...parameters: any[]): void;
}
/**
 * @hidden
 * https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/class/BaseArrayClass/README.md
 */
export declare class BaseArrayClass<T> extends BaseClass {
    constructor(initialData?: T[] | any);
    /**
     * Removes all elements from the array.
     * @param noNotify? {boolean} Set true to prevent remove_at events.
     */
    empty(noNotify?: boolean): void;
    /**
     * Iterate over each element, calling the provided callback.
     * @param fn {Function}
     * @param callback? {Function}
     */
    forEach(fn: ((element: T, index?: number) => void) | ((element: T, callback: () => void) => void), callback?: () => void): void;
    /**
     * Iterate over each element, calling the provided callback.
     * Then you can get the results of each callback.
     * @param fn {Function}
     * @param callback? {Function}
     * @return {Array<Object>} returns a new array with the results
     */
    map(fn: Function, callback?: ((element: T, index: number) => T) | ((element: T, callback: (newElement: T) => void) => void)): T[];
    /**
     * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
     * @param fn {Function}
     * @param callback? {Function}
     * @return {Array<Object>} returns a new array with the results
     */
    filter(fn: Function, callback?: ((element: T, index: number) => T) | ((element: T, callback: (newElement: T) => void) => void)): T[];
    /**
     * Returns a reference to the underlying Array.
     * @return {Array<Object>}
     */
    getArray(): T[];
    /**
     * Returns the element at the specified index.
     * @param index {number}
     * @return {Object}
     */
    getAt(index: number): any;
    /**
     * Returns the number of the elements.
     * @return {number}
     */
    getLength(): number;
    /**
     * The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
     * @param element {Object}
     * @return {number}
     */
    indexOf(element: T): number;
    /**
     * The reverse() method reverses an array in place.
     */
    reverse(): void;
    /**
     * The sort() method sorts the elements of an array in place and returns the array.
     */
    sort(): void;
    /**
     * Inserts an element at the specified index.
     * @param index {number}
     * @param element {Object}
     * @param noNotify? {boolean} Set true to prevent insert_at events.
     * @return {Object}
     */
    insertAt(index: number, element: T, noNotify?: boolean): void;
    /**
     * Removes the last element of the array and returns that element.
     * @param noNotify? {boolean} Set true to prevent remove_at events.
     * @return {Object}
     */
    pop(noNotify?: boolean): T;
    /**
     * Adds one element to the end of the array and returns the new length of the array.
     * @param element {object}
     * @param noNotify? {boolean} Set true to prevent insert_at events.
     */
    push(element: T, noNotify?: boolean): void;
    /**
     * Removes an element from the specified index.
     * @param index {number}
     * @param noNotify? {boolean} Set true to prevent insert_at events.
     */
    removeAt(index: number, noNotify?: boolean): void;
    /**
     * Sets an element at the specified index.
     * @param index {number}
     * @param element {object}
     * @param noNotify? {boolean} Set true to prevent set_at events.
     */
    setAt(index: number, element: T, noNotify?: boolean): void;
}
/**
 * @hidden
 * https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/class/Circle/README.md
 */
export declare class Circle extends BaseClass {
    private _map;
    constructor(_map: GoogleMap, _objectInstance: any);
    /**
     * Return the map instance.
     * @return {GoogleMap}
     */
    getMap(): any;
    /**
     * Change the center position.
     * @param latLng {ILatLng}
     */
    setCenter(latLng: ILatLng): void;
    /**
     * Return the current center position
     * @return {ILatLng}
     */
    getCenter(): ILatLng;
    /**
     * Return the current circle radius.
     * @return {number}
     */
    getRadius(): number;
    /**
     * Change the circle radius.
     * @param radius {number}
     */
    setRadius(radius: number): void;
    /**
     * Change the filling color (inner color).
     * @param color {string}
     */
    setFillColor(color: string): void;
    /**
     * Return the current circle filling color (inner color).
     * @return {string}
     */
    getFillColor(): string;
    /**
     * Change the stroke width.
     * @param strokeWidth {number}
     */
    setStrokeWidth(strokeWidth: number): void;
    /**
     * Return the current circle stroke width (unit: pixel).
     * @return {number}
     */
    getStrokeWidth(): number;
    /**
     * Change the stroke color (outter color).
     * @param strokeColor {string}
     */
    setStrokeColor(strokeColor: string): void;
    /**
     * Return the current circle stroke color (outer color).
     * @return {string}
     */
    getStrokeColor(): string;
    /**
     * Change clickablity of the circle.
     * @param clickable {boolean}
     */
    setClickable(clickable: boolean): void;
    /**
     * Return true if the circle is clickable.
     * @return {boolean}
     */
    getClickable(): boolean;
    /**
     * Change the circle zIndex order.
     * @param zIndex {number}
     */
    setZIndex(zIndex: number): void;
    /**
     * Return the current circle zIndex.
     * @return {number}
     */
    getZIndex(): number;
    /**
     * Remove the circle.
     */
    remove(): void;
    /**
     * Return the latLngBounds (rectangle) that contains the circle.
     * @return {LatLngBounds}
     */
    getBounds(): LatLngBounds;
    /**
     * Set circle visibility
     * @param visible {boolean}
     */
    setVisible(visible: boolean): void;
    /**
     * Returns a boolean that indicates whether the circle is visible
     * @return {boolean}
     */
    getVisible(): boolean;
}
/**
 * @hidden
 */
export declare class Environment extends IonicNativePlugin {
    /**
     * Get the open source software license information for Google Maps Android API v2 and Google Maps SDK for iOS.
     * @return {Promise<any>}
     */
    getLicenseInfo(): Promise<any>;
    /**
     * Specifies the background color of the app.
     * @param color
     */
    setBackgroundColor(color: string): void;
}
/**
 * @hidden
 */
export declare class Geocoder {
    /**
     * Converts position to address and vice versa
     * @param {GeocoderRequest} request Request object with either an address or a position
     * @return {Promise<GeocoderResult[] | BaseArrayClass<GeocoderResult>>}
     */
    geocode(request: GeocoderRequest): Promise<GeocoderResult[] | BaseArrayClass<GeocoderResult>>;
}
/**
 * @hidden
 */
export declare class Encoding {
    /**
     * Decodes an encoded path string into a sequence of LatLngs.
     * @param encoded {string} an encoded path string
     * @param precision? {number} default: 5
     * @return {LatLng}
     */
    decodePath(encoded: string, precision?: number): LatLng;
    /**
     * Encodes a sequence of LatLngs into an encoded path string.
     * @param path {Array<ILatLng> | BaseArrayClass<ILatLng>} a sequence of LatLngs
     * @return {string}
     */
    encodePath(path: Array<ILatLng> | BaseArrayClass<ILatLng>): string;
}
/**
 * @hidden
 */
export declare class Spherical {
    /**
     * Returns the distance, in meters, between two LatLngs.
     * @param locationA {ILatLng}
     * @param locationB {ILatLng}
     * @return {number}
     */
    computeDistanceBetween(from: ILatLng, to: ILatLng): number;
    /**
     * Returns the LatLng resulting from moving a distance from an origin in the specified heading (expressed in degrees clockwise from north)
     * @param from {ILatLng}
     * @param distance {number}
     * @param heading {number}
     * @return {LatLng}
     */
    computeOffset(from: ILatLng, distance: number, heading: number): LatLng;
    /**
     * Returns the location of origin when provided with a LatLng destination, meters travelled and original heading. Headings are expressed in degrees clockwise from North. This function returns null when no solution is available.
     * @param to {ILatLng} The destination LatLng.
     * @param distance {number} The distance travelled, in meters.
     * @param heading {number} The heading in degrees clockwise from north.
     * @return {LatLng}
     */
    computeOffsetOrigin(to: ILatLng, distance: number, heading: number): LatLng;
    /**
     * Returns the length of the given path.
     * @param path {Array<ILatLng> | BaseArrayClass<ILatLng>}
     * @return {number}
     */
    computeLength(path: Array<ILatLng> | BaseArrayClass<ILatLng>): number;
    /**
     * Returns the area of a closed path. The computed area uses the same units as the radius.
     * @param path {Array<ILatLng> | BaseArrayClass<ILatLng>}.
     * @return {number}
     */
    computeArea(path: Array<ILatLng> | BaseArrayClass<ILatLng>): number;
    /**
     * Returns the signed area of a closed path. The signed area may be used to determine the orientation of the path.
     * @param path {Array<ILatLng> | BaseArrayClass<ILatLng>}.
     * @return {number}
     */
    computeSignedArea(path: Array<ILatLng> | BaseArrayClass<ILatLng>): number;
    /**
     * Returns the heading from one LatLng to another LatLng. Headings are expressed in degrees clockwise from North within the range (-180,180).
     * @param from {ILatLng}
     * @param to {ILatLng}
     * @return {number}
     */
    computeHeading(from: ILatLng, to: ILatLng): number;
    /**
     * Returns the LatLng which lies the given fraction of the way between the origin LatLng and the destination LatLng.
     * @param from {ILatLng}     The LatLng from which to start.
     * @param to {ILatLng}       The LatLng toward which to travel.
     * @param fraction {number}  A fraction of the distance to travel from 0.0 to 1.0 .
     * @return {LatLng}
     */
    interpolate(from: ILatLng, to: ILatLng, fraction: number): LatLng;
}
/**
 * @hidden
 */
export declare class GoogleMap extends BaseClass {
    constructor(element: string | HTMLElement, options?: GoogleMapOptions);
    /**
     * Changes the map div
     * @param domNode
     */
    setDiv(domNode?: HTMLElement): void;
    /**
     * Returns the map HTML element
     * @return {HTMLElement}
     */
    getDiv(): HTMLElement;
    /**
     * Changes the map type id
     * @param mapTypeId {string}
     */
    setMapTypeId(mapTypeId: MapType): void;
    /**
     * Moves the camera with animation
     * @return {Promise<any>}
     */
    animateCamera(animateCameraOptions: AnimateCameraOptions): Promise<any>;
    /**
     * Zooming in the camera with animation
     * @return {Promise<any>}
     */
    animateCameraZoomIn(): Promise<any>;
    /**
     * Zooming out the camera with animation
     * @return {Promise<any>}
     */
    animateCameraZoomOut(): Promise<any>;
    /**
     * Moves the camera without animation
     * @return {Promise<any>}
     */
    moveCamera(cameraPosition: CameraPosition): Promise<any>;
    /**
     * Zooming in the camera without animation
     * @return {Promise<any>}
     */
    moveCameraZoomIn(): Promise<any>;
    /**
     * Zooming out the camera without animation
     * @return {Promise<any>}
     */
    moveCameraZoomOut(): Promise<any>;
    /**
     * Get the position of the camera.
     * @return {CameraPosition}
     */
    getCameraPosition(): CameraPosition;
    /**
     * Get the current camera target position
     * @return {Promise<CameraPosition>}
     */
    getCameraTarget(): ILatLng;
    /**
     * Get the current camera zoom level
     * @return {number}
     */
    getCameraZoom(): number;
    /**
     * Get the current camera bearing
     * @return {number}
     */
    getCameraBearing(): number;
    /**
     * Get the current camera tilt (view angle)
     * @return {number}
     */
    getCameraTilt(): number;
    /**
     * Set the center position of the camera view
     * @param latLng {ILatLng | Array<ILatLng>}
     */
    setCameraTarget(latLng: ILatLng | Array<ILatLng>): void;
    /**
     * Set zoom level of the camera
     * @param zoomLevel {number} Zoom level
     */
    setCameraZoom(zoomLevel: number): void;
    /**
     * Set the camera view angle
     * @param tiltLevel {number} Tilt level
     */
    setCameraTilt(tiltLevel: number): void;
    /**
     * Set camera bearing
     * @param bearing {any}
     */
    setCameraBearing(bearing: any): void;
    /**
     * Change the center of the map by the given distance in pixels
     * @param x {any}
     * @param y {any}
     */
    panBy(x: string | number, y: string | number): void;
    /**
     * Get the current visible region (southWest and northEast)
     * @return {VisibleRegion}
     */
    getVisibleRegion(): VisibleRegion;
    /**
     * Get the current device location
     * @return {Promise<MyLocation>}
     */
    getMyLocation(options?: MyLocationOptions): Promise<MyLocation>;
    /**
     * Set false to ignore all clicks on the map
     * @param isClickable {boolean}
     */
    setClickable(isClickable: boolean): void;
    /**
     * Destroy a map completely
     */
    remove(): void;
    /**
     * Remove all overlays, such as marker
     * @return {Promise<any>}
     */
    clear(): Promise<any>;
    /**
     * Convert the unit from LatLng to the pixels from the left/top of the map div
     * @return {Promise<any>}
     */
    fromLatLngToPoint(latLng: ILatLng): Promise<any>;
    /**
     * Convert the unit from the pixels from the left/top to the LatLng
     * @return {Promise<LatLng>}
     */
    fromPointToLatLng(point: any): Promise<LatLng>;
    /**
     * Set true if you want to show the MyLocation button
     * @param enabled {boolean}
     */
    setMyLocationEnabled(enabled: boolean): void;
    /**
     * Get the currently focused building
     * @return {Promise<any>}
     */
    getFocusedBuilding(): Promise<any>;
    /**
     * Set true if you want to show the indoor map
     * @param enabled {boolean}
     */
    setIndoorEnabled(enabled: boolean): void;
    /**
     * Set true if you want to show the traffic layer
     * @param enabled {boolean}
     */
    setTrafficEnabled(enabled: boolean): void;
    /**
     * Set true if you want to show the compass button
     * @param enabled {boolean}
     */
    setCompassEnabled(enabled: boolean): void;
    /**
     * Sets the preference for whether all gestures should be enabled or disabled
     * @param enabled {boolean}
     */
    setAllGesturesEnabled(enabled: boolean): void;
    /**
     * Set visibility of the map
     * @param visible {boolean}
     */
    setVisible(visible: boolean): void;
    /**
     * Adjust the map padding (same as CSS padding rule)
     * @param top {number}
     * @param right {number}
     * @param left {number}
     * @param bottom {number}
     */
    setPadding(top?: number, right?: number, bottom?: number, left?: number): void;
    /**
     * Set options
     * @param options
     */
    setOptions(options: GoogleMapOptions): void;
    /**
     * Adds a marker
     * @return {Promise<Marker | any>}
     */
    addMarker(options: MarkerOptions): Promise<Marker | any>;
    /**
     * Adds a circle
     * @return {Promise<Circle | any>}
     */
    addCircle(options: CircleOptions): Promise<Circle | any>;
    /**
     * Adds a polygon
     * @return {Promise<Polygon | any>}
     */
    addPolygon(options: PolygonOptions): Promise<Polygon | any>;
    /**
     *
     * @return {Promise<Polyline | any>}
     */
    addPolyline(options: PolylineOptions): Promise<Polyline | any>;
    /**
     * @return {Promise<TileOverlay | any>}
     */
    addTileOverlay(options: TileOverlayOptions): Promise<TileOverlay | any>;
    /**
     * @return {Promise<GroundOverlay | any>}
     */
    addGroundOverlay(options: GroundOverlayOptions): Promise<GroundOverlay | any>;
    /**
     * Refreshes layout.
     * You can execute it, but you don't need to do that. The plugin does this automatically.
     */
    refreshLayout(): void;
    /**
     * @return {Promise<any>}
     */
    toDataURL(): Promise<any>;
}
/**
 * @hidden
 */
export declare class GroundOverlay extends BaseClass {
    private _map;
    constructor(_map: GoogleMap, _objectInstance: any);
    /**
     * Return the map instance.
     * @return {GoogleMap}
     */
    getMap(): any;
    /**
     * Change the bounds of the GroundOverlay
     * @param bounds { ILatLng[]}
     */
    setBounds(bounds: ILatLng[]): void;
    /**
     * Change the bearing of the ground overlay
     * @param bearing {number}
     */
    setBearing(bearing: number): void;
    /**
     * Return the current bearing value
     */
    getBearing(): number;
    /**
     * Change the image of the ground overlay
     * @param image {string} URL of image
     */
    setImage(image: string): void;
    /**
     * Change the opacity of the ground overlay from 0.0 to 1.0
     * @param opacity {number}
     */
    setOpacity(opacity: number): void;
    /**
     * Return the current opacity
     * @return {number}
     */
    getOpacity(): number;
    /**
     * Change clickablity of the ground overlay
     * @param clickable {boolean}
     */
    setClickable(clickable: boolean): void;
    /**
     * Return true if the ground overlay is clickable
     * @return {boolean}
     */
    getClickable(): boolean;
    /**
     * Change visibility of the ground overlay
     * @param visible {boolean}
     */
    setVisible(visible: boolean): void;
    /**
     * Return true if the ground overlay is visible
     * @return {boolean}
     */
    getVisible(): boolean;
    /**
     * Change the ground overlay zIndex order
     * @param index {number}
     */
    setZIndex(index: number): void;
    /**
     * Return the current ground overlay zIndex
     * @return {number}
     */
    getZIndex(): number;
    /**
     * Remove the ground overlay
     */
    remove(): void;
}
/**
 * @hidden
 */
export declare class HtmlInfoWindow<T> extends IonicNativePlugin {
    private _objectInstance;
    constructor();
    /**
     * Change the backgroundColor
     * @param color {string}
     */
    setBackgroundColor(color: string): void;
    /**
     * Set your HTML contents.
     * @param content {any} String containing text or HTML element
     */
    setContent(content: string | Element): void;
    /**
     * Open the htmlInfoWindow
     * @param marker {Marker}
     */
    open(marker: any): any;
    /**
     * Close the htmlInfoWindow
     */
    close(): void;
}
/**
 * @hidden
 */
export declare class Marker extends BaseClass {
    private _map;
    constructor(_map: GoogleMap, _objectInstance: any);
    /**
     * Return the ID of instance.
     * @return {string}
     */
    getId(): number;
    /**
     * Return the map instance.
     * @return {GoogleMap}
     */
    getMap(): any;
    /**
     * Set the marker position.
     * @param latLng {ILatLng}
     */
    setPosition(latLng: ILatLng): void;
    /**
     * Return the marker position.
     * @return {ILatLng}
     */
    getPosition(): ILatLng;
    /**
     * Show the normal infoWindow of the marker.
     */
    showInfoWindow(): void;
    /**
     * Hide the normal infoWindow of the marker.
     */
    hideInfoWindow(): void;
    /**
     * Specify the animation either `DROP` or `BOUNCE`
     * @param animation {string}
     */
    setAnimation(animation: string): void;
    /**
     * Set true if you **do not want** to move the map when you click on the marker.
     * @param disableAutoPan {boolean}
     */
    setDisableAutoPan(disableAutoPan: boolean): void;
    /**
     * Set false if you want to hide the marker.
     * @param visible
     */
    setVisible(visible: boolean): void;
    /**
     * Return true if the marker is visible
     */
    isVisible(): boolean;
    /**
     * Change title of the normal infoWindow.
     * @param title {string}
     */
    setTitle(title: string): void;
    /**
     * Return the title strings.
     * @return {string}
     */
    getTitle(): string;
    /**
     * Change snippet of the normal infoWindow.
     * @param snippet {string}
     */
    setSnippet(snippet: string): void;
    /**
     * Return the snippet strings.
     * @return {string}
     */
    getSnippet(): string;
    /**
     * Change the marker opacity from 0.0 to 1.0.
     * @param alpha {number} Opacity
     */
    setOpacity(alpha: number): void;
    /**
     * Return the marker opacity.
     * @return {number} Opacity
     */
    getOpacity(): number;
    /**
     * Remove the marker.
     */
    remove(): void;
    /**
     * Change the info window anchor. This defaults to 50% from the left of the image and at the bottom of the image.
     * @param x {number} Distance from left of the icon image in pixels.
     * @param y {number} Distance from top of the icon image in pixels.
     */
    setIconAnchor(x: number, y: number): void;
    /**
     * Change the info window anchor. This defaults to 50% from the left of the image and at the top of the image.
     * @param x {number} Distance from left of the icon image in pixels.
     * @param y {number} Distance from top of the icon image in pixels.
     */
    setInfoWindowAnchor(x: number, y: number): void;
    /**
     * Return true if the infoWindow is shown on the marker
     * @return {boolean}
     */
    isInfoWindowShown(): boolean;
    /**
     * Return the marker hash code.
     * @return {string} Marker hash code
     */
    getHashCode(): string;
    /**
     * Higher zIndex value overlays will be drawn on top of lower zIndex value tile layers and overlays.
     * @param y {number} z-index
     */
    setZIndex(zIndex: number): void;
    /**
     * Get z-index
     * @return {number}
     */
    getZIndex(): number;
    /**
     * Set true if you allow all users to drag the marker.
     * @param draggable {boolean}
     */
    setDraggable(draggable: boolean): void;
    /**
     * Return true if the marker drag is enabled.
     * @return {boolean}
     */
    isDraggable(): boolean;
    /**
     * Set true if you want to be flat marker.
     * @param flat {boolean}
     */
    setFlat(flat: boolean): void;
    /**
     * Change icon url and/or size
     * @param icon
     */
    setIcon(icon: MarkerIcon): void;
    /**
     * Set the marker rotation angle.
     * @param rotation {number}
     */
    setRotation(rotation: number): void;
    /**
     * Return the marker rotation angle.
     * @return {number}
     */
    getRotation(): number;
}
/**
 * @hidden
 */
export declare class Polygon extends BaseClass {
    private _map;
    constructor(_map: GoogleMap, _objectInstance: any);
    /**
     * Return the map instance.
     * @return {GoogleMap}
     */
    getMap(): any;
    /**
     * Change the polygon points.
     * @param points {ILatLng[]}
     */
    setPoints(points: ILatLng[]): void;
    /**
     * Return an instance of the BaseArrayClass.
     * You can modify the points.
     * @return {BaseArrayClass<ILatLng>}
     */
    getPoints(): BaseArrayClass<ILatLng>;
    /**
     * Change the polygon holes.
     * @param holes {ILatLng[][]}
     */
    setHoles(holes: ILatLng[][]): void;
    /**
     * Return an instance of the BaseArrayClass.
     * You can modify the holes.
     * @return {BaseArrayClass<ILatLng[]>}
     */
    getHoles(): BaseArrayClass<ILatLng[]>;
    /**
     * Change the filling color (inner color)
     * @param fillColor {string}
     */
    setFillColor(fillColor: string): void;
    /**
     * Return the current polygon filling color (inner color).
     * @return {string}
     */
    getFillColor(): string;
    /**
     * Change the stroke color (outer color)
     * @param strokeColor {string}
     */
    setStrokeColor(strokeColor: string): void;
    /**
     * Return the current polygon stroke color (outer color)
     * @return {string}
     */
    getStrokeColor(): string;
    /**
     * Change clickablity of the polygon
     * @param clickable {boolean}
     */
    setClickable(clickable: boolean): void;
    /**
     * Return true if the polygon is clickable
     */
    getClickable(): boolean;
    /**
     * Change visibility of the polygon
     * @param visible {boolean}
     */
    setVisible(visible: boolean): void;
    /**
     * Return true if the polygon is visible
     * @return {boolean}
     */
    getVisible(): boolean;
    /**
     * Change the polygon zIndex order.
     * @param zIndex {number}
     */
    setZIndex(zIndex: number): void;
    /**
     * Return the current polygon zIndex
     * @return {number}
     */
    getZIndex(): number;
    /**
     * Remove the polygon.
     */
    remove(): void;
    /**
     * Change the polygon stroke width
     */
    setStrokeWidth(strokeWidth: number): void;
    /**
     * Return the polygon stroke width
     */
    getStrokeWidth(): number;
    /**
     * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of the Earth.
     * @param geodesic {boolean}
     */
    setGeodesic(geodesic: boolean): void;
    /**
     * Return true if the polylgon is geodesic.
     * @return {boolean}
     */
    getGeodesic(): boolean;
}
/**
 * @hidden
 */
export declare class Polyline extends BaseClass {
    private _map;
    constructor(_map: GoogleMap, _objectInstance: any);
    /**
     * Return the map instance.
     * @return {GoogleMap}
     */
    getMap(): any;
    /**
     * Change the polyline points.
     * @param points {ILatLng[]}
     */
    setPoints(points: ILatLng[]): void;
    /**
     * Return an instance of the BaseArrayClass
     * You can modify the points.
     */
    getPoints(): BaseArrayClass<ILatLng>;
    /**
     * When true, edges of the polyline are interpreted as geodesic and will follow the curvature of the Earth.
     * @param geoDesic {boolean}
     */
    setGeoDesic(geoDesic: boolean): void;
    /**
     * Return true if the polyline is geodesic
     */
    getGeodesic(): boolean;
    /**
     * Change visibility of the polyline
     * @param visible {boolean}
     */
    setVisible(visible: boolean): void;
    /**
     * Return true if the polyline is visible
     * @return {boolean}
     */
    getVisible(): boolean;
    /**
     * Change clickablity of the polyline
     * @param clickable {boolean}
     */
    setClickable(clickable: boolean): void;
    /**
     * Return true if the polyline is clickable
     * @return {boolean}
     */
    getClickable(): boolean;
    /**
     * Change the polyline color
     * @param strokeColor {string}
     */
    setStrokeColor(strokeColor: string): void;
    /**
     * Return the current polyline color
     * @return {string}
     */
    getStrokeColor(): string;
    /**
     * Change the polyline stroke width
     * @param strokeWidth {number}
     */
    setStrokeWidth(strokeWidth: number): void;
    /**
     * Return the current stroke width (unit: pixel).
     * @return {number}
     */
    getStrokeWidth(): number;
    /**
     * Change the polyline zIndex order.
     * @param index {number}
     */
    setZIndex(index: number): void;
    /**
     * Return the current polyline zIndex
     * @return {number}
     */
    getZIndex(): number;
    /**
     * Remove the polyline
     */
    remove(): void;
}
/**
 * @hidden
 */
export declare class TileOverlay extends BaseClass {
    private _map;
    constructor(_map: GoogleMap, _objectInstance: any);
    /**
     * Return the map instance.
     * @return {GoogleMap}
     */
    getMap(): any;
    /**
     * Set whether the tiles should fade in.
     * @param fadeIn {boolean}
     */
    setFadeIn(fadeIn: boolean): void;
    /**
     * Get whether the tiles should fade in
     * @return {boolean}
     */
    getFadeIn(): boolean;
    /**
     * Set the zIndex of the tile overlay
     * @param zIndex {number}
     */
    setZIndex(zIndex: number): void;
    /**
     * Return the zIndex of the tile overlay
     * @return {number}
     */
    getZIndex(): number;
    /**
     * Set the opacity of the tile overlay
     * @param opacity {number}
     */
    setOpacity(opacity: number): void;
    /**
     * Return the opacity of the tile overlay
     * @return {number}
     */
    getOpacity(): number;
    /**
     * Set false if you want to hide
     * @param visible {boolean}
     */
    setVisible(visible: boolean): void;
    /**
     * Return true if the tile overlay is visible
     * @return {boolean}
     */
    getVisible(): boolean;
    /**
     * Get tile size
     */
    getTileSize(): any;
    /**
     * Remove the tile overlay
     */
    remove(): void;
}
