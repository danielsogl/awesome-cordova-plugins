import { Injectable } from '@angular/core';
import { Cordova, CordovaInstance, Plugin, InstanceProperty, InstanceCheck, checkAvailability, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/observable/fromEvent';


export type MapType = 'MAP_TYPE_NORMAL' | 'MAP_TYPE_ROADMAP' | 'MAP_TYPE_SATELLITE' | 'MAP_TYPE_HYBRID' | 'MAP_TYPE_TERRAIN' | 'MAP_TYPE_NONE';

export interface GoogleMapOptions {
  mapType: MapType;
  controls: {
    compass: boolean;
    myLocationButton: boolean;
    indoorPicker: boolean;
    zoom: boolean;
  };
  gestures: {
    scroll: boolean;
    tilt: boolean;
    zoom: boolean;
    rotate: boolean;
  };
  styles: any[];
  camera: CameraPosition;
  preferences: {
    zoom: {
      minZoom: number;
      maxZoom: number;
    },
    building: boolean;
  };
}

export interface AnimateCameraOptions {
  target?: LatLng | Array<Marker> | LatLngBounds;
  tilt?: number;
  zoom?: number;
  bearing?: number;
  duration?: number;
}

export interface CameraPosition {
  /**
   * The center location of the camera view.
   */
  target?: LatLng | LatLngBounds | LatLng[];
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
  center?: LatLng;
  radius?: number;
  strokeColor?: string;
  strokeWidth?: number;
  fillColor?: string;
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
    url?: string
  };
  locale?: string;
  locality?: string;
  position?: { lat: number; lng: number };
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
   * Bounds, array of LatLng
   */
  bounds?: Array<LatLng>;
  /**
   * Set to false to hide
   */
  visible?: boolean;
  /**
   * Opacity. From 0 to 1.
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
  position?: LatLng;

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
   * Specify the options for title.
   */
  styles?: any;

  /**
   * Which animation to play when marker is added to a map.
   */
  animation?: string;

  /**
   * 	iOS only, Plugin Version >= 1.3.3 Higher zIndex value overlays will be drawn on top of lower zIndex value tile layers and overlays. (You're able to run this on Android, but it will have no effect)
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
  points?: Array<LatLng>;
  geodesic?: boolean;
  strokeColor?: string;
  strokeWidth?: number;
  fillColor?: string;
  visible?: boolean;
  zIndex?: number;
  addHole?: Array<LatLng>;
}

export interface PolylineOptions {
  points?: Array<LatLng>;
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

export interface VisibleRegion {
  northeast?: any;
  southwest?: any;
}

/**
 * @hidden
 * You can listen to these events where appropriate
 */
export const GoogleMapsEvent: { [eventName: string]: string; } = {
  MAP_READY: 'map_ready',
  MAP_CLICK: 'map_click',
  MAP_LONG_CLICK: 'map_long_click',
  MY_LOCATION_BUTTON_CLICK: 'my_location_button_click',
  INDOOR_BUILDING_FOCUSED: 'indoor_building_focused',
  INDOOR_LEVEL_ACTIVATED: 'indoor_level_activated',
  CAMERA_MOVE_START: 'camera_move_start',
  CAMERA_MOVE: 'camera_move',
  CAMERA_MOVE_END: 'camera_move_end',
  POLYGON_CLICK: 'polygon_click',
  POLYLINE_CLICK: 'polyline_click',
  CIRCLE_CLICK: 'circle_click',
  GROUND_OVERLAY_CLICK: 'ground_overlay_click',
  INFO_CLICK: 'info_click',
  INFO_LONG_CLICK: 'info_long_click',
  INFO_CLOSE: 'info_close',
  INFO_OPEN: 'info_open',
  MARKER_CLICK: 'marker_click',
  MARKER_DRAG: 'marker_drag',
  MARKER_DRAG_START: 'marker_drag_start',
  MARKER_DRAG_END: 'marker_drag_end'
};

/**
 * @hidden
 */
export const GoogleMapsAnimation: { [animationName: string]: string; } = {
  BOUNCE: 'BOUNCE',
  DROP: 'DROP'
};

/**
 * @hidden
 */
export const GoogleMapsMapTypeId: { [mapType: string]: MapType; } = {
  NORMAL: 'MAP_TYPE_NORMAL',
  ROADMAP: 'MAP_TYPE_ROADMAP',
  SATELLITE: 'MAP_TYPE_SATELLITE',
  HYBRID: 'MAP_TYPE_HYBRID',
  TERRAIN: 'MAP_TYPE_TERRAIN',
  NONE: 'MAP_TYPE_NONE'
};

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
 * Circle
 * Environment
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
@Plugin({
  pluginName: 'GoogleMaps',
  pluginRef: 'plugin.google.maps',
  plugin: 'cordova-plugin-googlemaps',
  repo: 'https://github.com/mapsplugin/cordova-plugin-googlemaps#multiple_maps',
  install: 'ionic cordova plugin add https://github.com/mapsplugin/cordova-plugin-googlemaps#multiple_maps --variable API_KEY_FOR_ANDROID="YOUR_ANDROID_API_KEY_IS_HERE" --variable API_KEY_FOR_IOS="YOUR_IOS_API_KEY_IS_HERE"',
  installVariables: ['API_KEY_FOR_ANDROID', 'API_KEY_FOR_IOS'],
  platforms: ['Android', 'iOS']
})
@Injectable()
export class GoogleMaps extends IonicNativePlugin {

  /**
   * @hidden
   */
  _environment: Environment = new Environment();

  /**
   * Checks if a map object has been created and is available.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova()
  isAvailable(): Promise<boolean> { return; }

  /**
   * Creates a new GoogleMap instance
   * @param element {string | HTMLElement} Element ID or reference to attach the map to
   * @param options {any} Options
   * @returns {GoogleMap}
   */
  create(element: string | HTMLElement, options?: GoogleMapOptions): GoogleMap {
    return new GoogleMap(element, options);
  }

  /**
   * Convenience method that returns an instance of Environment class
   * @return {Object}
   */
  environment(): Environment {
    return this._environment;
  }

}

/**
 * @hidden
 */
@Plugin({
  plugin: 'cordova-plugin-googlemaps',
  pluginName: 'GoogleMaps',
  pluginRef: 'plugin.google.maps.BaseArrayClass',
  repo: ''
})
export class BaseArrayClass<T> extends IonicNativePlugin {
  private _objectInstance: any;

  constructor(initialData: T[]) {
    super();
    if (checkAvailability(BaseArrayClass.getPluginRef(), null, BaseArrayClass.getPluginName()) === true) {
      this._objectInstance = new (BaseArrayClass.getPlugin())(initialData);
    }
  }

  /**
   * Add an event listener
   * @param event {string} name of the event. Can be `insert_at`, `remove_at`, `set_at`, or `finish`.
   * @returns {Observable<any>} returns an Observable
   */
  @InstanceCheck({ observable: true })
  on(event: 'insert_at' | 'remove_at' | 'set_at' | 'finish') {
    return new Observable<any>((observer: Observer<any>) => {
      this._objectInstance.on(event, observer.next.bind(observer));
      return () => this._objectInstance.off(event, observer.next.bind(observer));
    });
  }

  /**
   * Removes all elements from the array.
   */
  @CordovaInstance({ sync: true })
  empty(): void {}

  /**
   * Iterate over each element, calling the provided callback.
   * @param fn {Function}
   * @param callback {Function}
   */
  @CordovaInstance({ sync: true })
  forEach(fn: ((element: T, index?: number) => void) | ((element: T, callback: () => void) => void), callback?: () => void): void {}

  /**
   * Iterate over each element, calling the provided callback.
   * Then you can get the results of each callback.
   * @param fn {Function}
   * @param callback {Function}
   * @return {Array<Object>} returns a new array with the results
   */
  @CordovaInstance({ sync: true })
  map(fn: Function, callback?: ((element: T, index: number) => T) | ((element: T, callback: (newElement: T) => void) => void)): T[] { return; }

  /**
   * Returns a reference to the underlying Array.
   * @return {Array<Object>}
   */
  @CordovaInstance({ sync: true })
  getArray(): T[] { return; }

  /**
   * Returns the element at the specified index.
   * @param index {number}
   * @return {Object}
   */
  @CordovaInstance({ sync: true })
  getAt(index: number): any {}

  /**
   * Inserts an element at the specified index.
   * @param index {number}
   * @param element {Object}
   * @return {Object}
   */
  @CordovaInstance({ sync: true })
  insertAt(index: number, element: T) {}

  /**
   * Removes the last element of the array and returns that element.
   * @return {Object}
   */
  @CordovaInstance({ sync: true })
  pop(): T { return; }

  /**
   * Adds one element to the end of the array and returns the new length of the array.
   * @param element {object}
   */
  @CordovaInstance({ sync: true })
  push(element: T): void {}

  /**
   * Removes an element from the specified index.
   * @param index {number}
   */
  @CordovaInstance({ sync: true })
  removeAt(index: number): void {}

  /**
   * Sets an element at the specified index.
   * @param index {number}
   * @param element {object}
   */
  @CordovaInstance({ sync: true })
  setAt(index: number, element: T): void {}
}

/**
 * @hidden
 */
export class BaseClass {
  protected _objectInstance: any;

  /**
   * Adds an event listener.
   *
   * @returns {Observable<any>}
   */
  @InstanceCheck()
  addEventListener(eventName: string): Observable<any> {
    return Observable.fromEvent(this._objectInstance, eventName);
  }

  /**
   * Adds an event listener that works once.
   *
   * @returns {Promise<any>}
   */
  @InstanceCheck()
  addListenerOnce(eventName: string): Promise<any> {
    return new Promise<any>(resolve => this._objectInstance.addListenerOnce(eventName, resolve));
  }

  /**
   * Gets a value
   * @param key
   */
  @CordovaInstance({ sync: true })
  get(key: string): any { return; }

  /**
   * Sets a value
   * @param key
   * @param value
   */
  @CordovaInstance({ sync: true })
  set(key: string, value: any): void { }

  /**
   * Listen to a map event.
   *
   * @returns {Observable<any>}
   */
  @InstanceCheck({ observable: true })
  on(eventName: string): Observable<any> {
    return Observable.fromEvent(this._objectInstance, eventName);
  }

  /**
   * Listen to a map event only once.
   *
   * @returns {Promise<any>}
   */
  @InstanceCheck()
  one(eventName: string): Promise<any> {
    return new Promise<any>(resolve => this._objectInstance.one(eventName, resolve));
  }

  /**
   * Clears all stored values
   */
  @CordovaInstance({ sync: true })
  empty(): void { }

  @CordovaInstance({ sync: true })
  trigger(eventName: string, ...parameters: any[]): void {}
}

/**
 * @hidden
 */
export class Circle extends BaseClass {

  constructor(_objectInstance: any) {
    super();
    this._objectInstance = _objectInstance;
  }

  /**
   * Change the center position.
   * @param latLng {LatLng}
   */
  @CordovaInstance({ sync: true })
  setCenter(latLng: LatLng): void {}

  /**
   * Return the current center position
   * @return {LatLng}
   */
  @CordovaInstance({ sync: true })
  getCenter(): LatLng { return; }

  /**
   * Return the current circle radius.
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getRadius(): number { return; }

  /**
   * Change the circle radius.
   * @param radius {number}
   */
  @CordovaInstance({ sync: true })
  setRadius(radius: number): void {}

  /**
   * Change the filling color (inner color).
   * @param color {string}
   */
  @CordovaInstance({ sync: true })
  setFillColor(color: string): void {}

  /**
   * Return the current circle filling color (inner color).
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  getFillColor(): string { return; }

  /**
   * Change the stroke width.
   * @param strokeWidth {number}
   */
  @CordovaInstance({ sync: true })
  setStrokeWidth(strokeWidth: number): void {}

  /**
   * Return the current circle stroke width (unit: pixel).
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getStrokeWidth(): number { return; }

  /**
   * Change the stroke color (outter color).
   * @param strokeColor {string}
   */
  @CordovaInstance({ sync: true })
  setStrokeColor(strokeColor: string): void {}

  /**
   * Return the current circle stroke color (outer color).
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  getStrokeColor(): string { return; }

  /**
   * Change clickablity of the circle.
   * @param clickable {boolean}
   */
  @CordovaInstance({ sync: true })
  setClickable(clickable: boolean): void {}

  /**
   * Return true if the circle is clickable.
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getClickable(): boolean { return; }

  /**
   * Change the circle zIndex order.
   * @param zIndex {number}
   */
  @CordovaInstance({ sync: true })
  setZIndex(zIndex: number): void {}

  /**
   * Return the current circle zIndex.
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getZIndex(): number { return; }

  /**
   * Remove the circle.
   */
  @CordovaInstance({ sync: true })
  remove(): void {}

  /**
   * Return the latLngBounds (rectangle) that contains the circle.
   * @return {LatLngBounds}
   */
  @CordovaInstance({ sync: true })
  getBounds(): LatLngBounds { return; }

  /**
   * Set circle visibility
   * @param visible {boolean}
   */
  @CordovaInstance({ sync: true })
  setVisible(visible: boolean): void {}

  /**
   * Returns a boolean that indicates whether the circle is visible
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getVisible(): boolean { return; }
}

/**
 * @hidden
 */
@Plugin({
  plugin: 'cordova-plugin-googlemaps',
  pluginName: 'GoogleMaps',
  pluginRef: 'plugin.google.maps.environment',
  repo: ''
})
export class Environment extends IonicNativePlugin {

  /**
   * Get the open source software license information for Google Maps Android API v2 and Google Maps SDK for iOS.
   * @returns {Promise<any>}
   */
  @Cordova()
  getLicenseInfo(): Promise<any> { return; }

  /**
   * Specifies the background color of the app.
   * @param color
   */
  @Cordova({ sync: true })
  setBackgroundColor(color: string): void {}

}

/**
 * @hidden
 */
@Plugin({
  pluginName: 'GoogleMaps',
  pluginRef: 'plugin.google.maps.Geocoder',
  plugin: 'cordova-plugin-googlemaps',
  repo: ''
})
export class Geocoder {
  /**
   * Converts position to address and vice versa
   * @param {GeocoderRequest} request Request object with either an address or a position
   * @returns {Promise<GeocoderResult | BaseArrayClass<GeocoderResult>>}
   */
  @Cordova()
  geocode(request: GeocoderRequest): Promise<GeocoderResult | BaseArrayClass<GeocoderResult>> { return; }
}

/**
 * @hidden
 */
@Plugin({
  pluginName: 'GoogleMaps',
  plugin: 'cordova-plugin-googlemaps'
})
export class GoogleMap extends BaseClass {
  constructor(element: string | HTMLElement, options?: GoogleMapOptions) {
    super();
    if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
      if (typeof element === 'string') {
        element = document.getElementById(<string>element);
      }
      this._objectInstance = GoogleMaps.getPlugin().Map.getMap(element, options);
    }
  }

  /**
   * Changes the map div
   * @param domNode
   */
  @CordovaInstance({ sync: true })
  setDiv(domNode: HTMLElement): void { }

  /**
   * Returns the map HTML element
   * @return {HTMLElement}
   */
  @CordovaInstance({ sync: true })
  getDiv(): HTMLElement { return; }

  /**
   * Changes the map type id
   * @param mapTypeId {string}
   */
  @CordovaInstance({ sync: true })
  setMapTypeId(mapTypeId: MapType): void { }

  /**
   * Moves the camera with animation
   * @returns {Promise<any>}
   */
  @CordovaInstance()
  animateCamera(animateCameraOptions: AnimateCameraOptions): Promise<any> { return; }

  /**
   * Zooming in the camera with animation
   */
  @CordovaInstance()
  animateCameraZoomIn(): void {}

  /**
   * Zooming out the camera with animation
   */
  @CordovaInstance()
  animateCameraZoomOut(): void {}

  /**
   * Moves the camera without animation
   * @returns {Promise<any>}
   */
  @CordovaInstance()
  moveCamera(cameraPosition: CameraPosition): Promise<any> { return; }

  /**
   * Zooming in the camera without animation
   */
  @CordovaInstance()
  moveCameraZoomIn(): void {}

  /**
   * Zooming out the camera without animation
   */
  @CordovaInstance()
  moveCameraZoomOut(): void {}

  /**
   * Get the position of the camera.
   * @returns {Promise<CameraPosition>}
   */
  @CordovaInstance()
  getCameraPosition(): Promise<CameraPosition> { return; }

  /**
   * Get the current camera target position
   * @return {Promise<CameraPosition>}
   */
  @CordovaInstance()
  getCameraTarget(): Promise<CameraPosition> { return; }

  /**
   * Get the current camera zoom level
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getCameraZoom(): number { return; }

  /**
   * Get the current camera bearing
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getCameraBearing(): number { return; }

  /**
   * Get the current camera tilt (view angle)
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getCameraTilt(): number { return; }

  /**
   * Set the center position of the camera view
   * @param latLng {LatLng}
   */
  @CordovaInstance({ sync: true })
  setCameraTarget(latLng: LatLng): void { }

  /**
   * Set zoom level of the camera
   * @param zoomLevel {number} Zoom level
   */
  @CordovaInstance({ sync: true })
  setCameraZoom(zoomLevel: number): void {}

  /**
   * Set the camera view angle
   * @param tiltLevel {number} Tilt level
   */
  @CordovaInstance({ sync: true })
  setCameraTilt(tiltLevel: number): void {}

  /**
   * Set camera bearing
   * @param bearing {any}
   */
  @CordovaInstance({ sync: true })
  setCameraBearing(bearing: any): void {}

  /**
   * Change the center of the map by the given distance in pixels
   * @param x {any}
   * @param y {any}
   */
  @CordovaInstance({ sync: true })
  panBy(x: string | number, y: string | number): void { }

  /**
   * Get the current visible region (sw and ne)
   * @returns {Promise<VisibleRegion>}
   */
  @CordovaInstance()
  getVisibleRegion(): Promise<VisibleRegion> { return; }

  /**
   * Get the current device location
   * @returns {Promise<MyLocation>}
   */
  @CordovaInstance()
  getMyLocation(options?: MyLocationOptions): Promise<MyLocation> { return; }

  /**
   * Set false to ignore all clicks on the map
   * @param isClickable {boolean}
   */
  @CordovaInstance({ sync: true })
  setClickable(isClickable: boolean): void {}

  /**
   * Destroy a map completely
   */
  @CordovaInstance({ sync: true })
  remove(): void {}

  /**
   * Remove all overlays, such as marker
   */
  @CordovaInstance({ sync: true })
  clear(): void {}

  /**
   * Convert the unit from LatLng to the pixels from the left/top of the map div
   * @returns {Promise<any>}
   */
  @CordovaInstance()
  fromLatLngToPoint(latLng: LatLng): Promise<any> { return; }

  /**
   * Convert the unit from the pixels from the left/top to the LatLng
   * @returns {Promise<LatLng>}
   */
  @CordovaInstance()
  fromPointToLatLng(point: any): Promise<LatLng> { return; }

  /**
   * Set true if you want to show the MyLocation button
   * @param enabled {boolean}
   */
  @CordovaInstance({ sync: true })
  setMyLocationEnabled(enabled: boolean): void {}

  /**
   * Get the currently focused building
   * @return {Promise<any>}
   */
  @CordovaInstance()
  getFocusedBuilding(): Promise<any> { return; }

  /**
   * Set true if you want to show the indoor map
   * @param enabled {boolean}
   */
  @CordovaInstance({ sync: true })
  setIndoorEnabled(enabled: boolean): void {}

  /**
   * Set true if you want to show the traffic layer
   * @param enabled {boolean}
   */
  @CordovaInstance({ sync: true })
  setTrafficEnabled(enabled: boolean): void {}

  /**
   * Set true if you want to show the compass button
   * @param enabled {boolean}
   */
  @CordovaInstance({ sync: true })
  setCompassEnabled(enabled: boolean): void {}

  /**
   * Sets the preference for whether all gestures should be enabled or disabled
   * @param enabled {boolean}
   */
  @CordovaInstance({ sync: true })
  setAllGesturesEnabled(enabled: boolean): void {}

  /**
   * Set visiblity of the map
   * @param visible {boolean}
   */
  @CordovaInstance({ sync: true })
  setVisible(visible: boolean): void {}

  /**
   * Adjust the map padding
   * @param top {number}
   * @param right {number}
   * @param left {number}
   * @param bottom {number}
   */
  @CordovaInstance({ sync: true })
  setPadding(top?: number, right?: number, bottom?: number, left?: number): void { }

  /**
   * Set options
   * @param options
   */
  @CordovaInstance({ sync: true })
  setOptions(options: GoogleMapOptions): void {}

  /**
   * Adds a marker
   * @returns {Promise<Marker | any>}
   */
  @InstanceCheck()
  addMarker(options: MarkerOptions): Promise<Marker | any> {
    return new Promise<Marker>((resolve, reject) => {
      this._objectInstance.addMarker(options, (marker: any) => {
        if (marker) {
          resolve(new Marker(marker));
        } else {
          reject();
        }
      });
    });
  }

  /**
   * Adds a circle
   * @returns {Promise<Circle | any>}
   */
  @InstanceCheck()
  addCircle(options: CircleOptions): Promise<Circle | any> {
    return new Promise<Circle>((resolve, reject) => {
      this._objectInstance.addCircle(options, (circle: any) => {
        if (circle) {
          resolve(new Circle(circle));
        } else {
          reject();
        }
      });
    });
  }

  /**
   * Adds a polygon
   * @returns {Promise<Polygon | any>}
   */
  @InstanceCheck()
  addPolygon(options: PolygonOptions): Promise<Polygon | any> {
    return new Promise<Polygon>((resolve, reject) => {
      this._objectInstance.addPolygon(options, (polygon: any) => {
        if (polygon) {
          resolve(new Polygon(polygon));
        } else {
          reject();
        }
      });
    });
  }

  /**
   *
   * @returns {Promise<Polyline | any>}
   */
  @InstanceCheck()
  addPolyline(options: PolylineOptions): Promise<Polyline | any> {
    return new Promise<Polyline>((resolve, reject) => {
      this._objectInstance.addPolyline(options, (polyline: any) => {
        if (polyline) {
          resolve(new Polyline(polyline));
        } else {
          reject();
        }
      });
    });
  }

  /**
   * @returns {Promise<TileOverlay | any>}
   */
  @InstanceCheck()
  addTileOverlay(options: TileOverlayOptions): Promise<TileOverlay | any> {
    return new Promise<TileOverlay>((resolve, reject) => {
      this._objectInstance.addTileOverlay(options, (tileOverlay: any) => {
        if (tileOverlay) {
          resolve(new TileOverlay(tileOverlay));
        } else {
          reject();
        }
      });
    });
  }

  /**
   * @returns {Promise<GroundOverlay | any>}
   */
  @InstanceCheck()
  addGroundOverlay(options: GroundOverlayOptions): Promise<GroundOverlay | any> {
    return new Promise<GroundOverlay>((resolve, reject) => {
      this._objectInstance.addGroundOverlay(options, (groundOverlay: any) => {
        if (groundOverlay) {
          resolve(new GroundOverlay(groundOverlay));
        } else {
          reject();
        }
      });
    });
  }

  /**
   * Refreshes layout.
   * You can execute it, but you don't need to do that. The plugin does this automatically.
   */
  @CordovaInstance({ sync: true })
  refreshLayout(): void {}

  /**
   * @returns {Promise<any>}
   */
  @CordovaInstance()
  toDataURL(): Promise<any> { return; }

  // /**
  //  * @returns {Promise<KmlOverlay | any>}
  //  */
  // @InstanceCheck()
  // addKmlOverlay(options: KmlOverlayOptions): Promise<KmlOverlay | any> {
  //   return new Promise<KmlOverlay>((resolve, reject) => {
  //     this._objectInstance.addKmlOverlay(options, (kmlOverlay: any) => {
  //       if (kmlOverlay) {
  //         resolve(new KmlOverlay(kmlOverlay));
  //       } else {
  //         reject();
  //       }
  //     });
  //   });
  // }
}

/**
 * @hidden
 */
export class GroundOverlay extends BaseClass {

  constructor(_objectInstance: any) {
    super();
    this._objectInstance = _objectInstance;
  }

  /**
   * Change the bounds of the GroundOverlay
   * @param bounds {ILatLng[]}
   */
  @CordovaInstance({ sync: true })
  setBounds(bounds: ILatLng[]): void {}

  /**
   * Return the current center position
   * @return {ILatLng[]}
   */
  @CordovaInstance({ sync: true })
  getBounds(): ILatLng[] { return; }

  /**
   * Change the bearing of the ground overlay
   * @param bearing {number}
   */
  @CordovaInstance({ sync: true })
  setBearing(bearing: number): void { }

  /**
   * Return the current bearing value
   */
  @CordovaInstance({ sync: true })
  getBearing(): number { return; }

  /**
   * Change the image of the ground overlay
   * @param image {string} URL of image
   */
  @CordovaInstance({ sync: true })
  setImage(image: string): void {};

  /**
   * Change the opacity of the ground overlay
   * @param opacity {number}
   */
  @CordovaInstance({ sync: true })
  setOpacity(opacity: number): void { }

  /**
   * Return the current opacity
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getOpacity(): number { return; }

  /**
   * Change clickablity of the ground overlay
   * @param clickable {boolean}
   */
  @CordovaInstance({ sync: true })
  setClickable(clickable: boolean): void {}

  /**
   * Return true if the ground overlay is clickable
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getClickable(): boolean { return; }

  /**
   * Change visibility of the ground overlay
   * @param visible {boolean}
   */
  @CordovaInstance({ sync: true })
  setVisible(visible: boolean): void { }

  /**
   * Return true if the ground overlay is visible
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getVisible(): boolean { return; }

  /**
   * Change the ground overlay zIndex order
   * @param index {number}
   */
  @CordovaInstance({ sync: true })
  setZIndex(index: number): void {}

  /**
   * Return the current ground overlay zIndex
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getZIndex(): number { return; }

  /**
   * Remove the ground overlay
   */
  @CordovaInstance({ sync: true })
  remove(): void {}

}

/**
 * @hidden
 */
export class HtmlInfoWindow extends BaseClass {

  constructor() {
    super();
    if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
      this._objectInstance = new (GoogleMaps.getPlugin()).HtmlInfoWindow();
    }
  }

  /**
   * Change the backgroundColor
   * @param color {string}
   */
  @CordovaInstance()
  setBackgroundColor(color: string): void {}

  /**
   * Set your HTML contents.
   * @param content {any} String containing text or HTML element
   */
  @CordovaInstance()
  setContent(content: string | Element): void {}

  /**
   * Open the htmlInfoWindow
   * @param marker {Marker}
   */
  @CordovaInstance()
  open(marker: any): any {}

  /**
   * Close the htmlInfoWindow
   */
  @CordovaInstance()
  close(): void {}

}

/**
 * @hidden
 */
export class LatLng implements ILatLng {

  lat: number;
  lng: number;

  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }

  equals(other: ILatLng): boolean {
    return this.lat === other.lat && this.lng === other.lng;
  }

  toString(): string {
    return this.lat + ',' + this.lng;
  }

  toUrlValue(precision?: number): string {
    precision = precision || 6;

    return this.lat.toFixed(precision) + ',' + this.lng.toFixed(precision);
  }
}

/**
 * @hidden
 */
export class LatLngBounds {
  private _objectInstance: any;

  @InstanceProperty northeast: LatLng;
  @InstanceProperty southwest: LatLng;
  @InstanceProperty type: string;

  constructor(southwestOrArrayOfLatLng: LatLng | LatLng[], northeast?: LatLng) {
    let args = !!northeast ? [southwestOrArrayOfLatLng, northeast] : southwestOrArrayOfLatLng;
    this._objectInstance = new (GoogleMaps.getPlugin()).LatLngBounds(args);
  }

  /**
   * Converts to string
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  toString(): string { return; }

  /**
   * Returns a string of the form "lat_lo,lng_lo,lat_hi,lng_hi" for this bounds, where "lo" corresponds to the southwest corner of the bounding box, while "hi" corresponds to the northeast corner of that box.
   * @param precision {number}
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  toUrlValue(precision?: number): string { return; }

  /**
   * Extends this bounds to contain the given point.
   * @param LatLng {ILatLng}
   */
  @CordovaInstance({ sync: true })
  extend(LatLng: ILatLng): void {}

  /**
   * Returns true if the given lat/lng is in this bounds.
   * @param LatLng {ILatLng}
   */
  @CordovaInstance({ sync: true })
  contains(LatLng: ILatLng): boolean { return; }

  /**
   * Computes the center of this LatLngBounds
   * @return {ILatLng}
   */
  @CordovaInstance({ sync: true })
  getCenter(): LatLng { return; }
}

/**
 * @hidden
 */
export class Marker extends BaseClass {

  constructor(_objectInstance: any) {
    super();
    this._objectInstance = _objectInstance;
  }

  /**
   * Set the marker position.
   * @param latLng {LatLng}
   */
  @CordovaInstance({ sync: true })
  setPosition(latLng: LatLng): void { return; }

  /**
   * Return the marker position.
   * @return {Promise<LatLng>}
   */
  @CordovaInstance()
  getPosition(): Promise<LatLng> { return; }

  /**
   * Show the infoWindow of the marker.
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  showInfoWindow(): number { return; }

  /**
   * Hide the infoWindow of the marker.
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  hideInfoWindow(): number { return; }

  /**
   * Specify the animation either `DROP` or `BOUNCE`
   * @param animation {string}
   */
  @CordovaInstance({ sync: true })
  setAnimation(animation: string): void {}

  /**
   * Set true if you **do not want** to move the map when you click on the marker.
   * @param disableAutoPan {boolean}
   */
  @CordovaInstance({ sync: true })
  setDisableAutoPan(disableAutoPan: boolean): void {}

  /**
   * Set false if you want to hide the marker.
   * @param visible
   */
  @CordovaInstance()
  setVisible(visible: boolean): void {}

  /**
   * Return true if the marker is visible
   */
  @CordovaInstance({ sync: true })
  isVisible(): boolean { return; }

  /**
   * Change title of the infoWindow.
   * @param title {string}
   */
  @CordovaInstance({ sync: true })
  setTitle(title: string): void {}

  /**
   * Return the title strings.
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  getTitle(): string { return; }

  /**
   * Change snippet of the infoWindow.
   * @param snippet {string}
   */
  @CordovaInstance({ sync: true })
  setSnippet(snippet: string): void {}

  /**
   * Return the snippet strings.
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  getSnippet(): string { return; }

  /**
   * Change the marker opacity.
   * @param alpha {number} Opacity
   */
  @CordovaInstance({ sync: true })
  setOpacity(alpha: number): void {}

  /**
   * Return the marker opacity.
   * @return {number} Opacity
   */
  @CordovaInstance({ sync: true })
  getOpacity(): number { return; }

  /**
   * Remove the marker completely.
   */
  @CordovaInstance({ sync: true })
  remove(): void {}

  /**
   * Change the info window anchor. This defaults to 50% from the left of the image and at the bottom of the image.
   * @param x {number}
   * @param y {number}
   */
  @CordovaInstance({ sync: true })
  setIconAnchor(x: number, y: number): void {}

  /**
   * Change the info window anchor. This defaults to 50% from the left of the image and at the top of the image.
   * @param x {number}
   * @param y {number}
   */
  @CordovaInstance({ sync: true })
  setInfoWindowAnchor(x: number, y: number): void {}

  /**
   * Retrurn true if the infoWindow is shown on the marker
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  isInfoWindowShown(): boolean { return; }

  /**
   * Return the marker hash code.
   * @return {string} Marker hash code
   */
  @CordovaInstance({ sync: true })
  getHashCode(): string { return; }

  /**
   * iOS only, Plugin Version >= 1.3.3 Higher zIndex value overlays will be drawn on top of lower zIndex value tile layers and overlays. (You're able to run this on Android, but it will have no effect)
   */
  @CordovaInstance({ sync: true })
  setZIndex(): void {}

  /**
   * Get z-index
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getZIndex(): number { return; }

  /**
   * 	Set true if you allows all users to drag the marker.
   * @param draggable {boolean}
   */
  @CordovaInstance({ sync: true })
  setDraggable(draggable: boolean): void { }

  /**
   * Return true if the marker drag is enabled.
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  isDraggable(): boolean { return; }

  /**
   * Set true if you want to be flat marker.
   * @param flat {boolean}
   */
  @CordovaInstance({ sync: true })
  setFlat(flat: boolean): void { return; }

  /**
   * Change icon url and/or size
   * @param icon
   */
  @CordovaInstance({ sync: true })
  setIcon(icon: MarkerIcon): void { return; }

  /**
   * Set the marker rotation angle.
   * @param rotation {number}
   */
  @CordovaInstance({ sync: true })
  setRotation(rotation: number): void { }

  /**
   * Return the marker rotation angle.
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getRotation(): number { return; }

  /**
   * Return the map instance.
   * Note that this method returns the original Google Map object, and not the Ionic Native wrapper.
   * @return {Object}
   */
  @CordovaInstance({ sync: true })
  getMap(): any { return; }

}

/**
 * @hidden
 */
export class Polygon extends BaseClass {

  constructor(_objectInstance: any) {
    super();
    this._objectInstance = _objectInstance;
  }

  /**
   * Change the polygon points.
   * @param points {ILatLng[]}
   */
  @CordovaInstance({ sync: true })
  setPoints(points: ILatLng[]): void {}

  /**
   * Return an instance of the BaseArrayClass.
   * You can modify the points.
   * @return {BaseArrayClass<ILatLng>}
   */
  @CordovaInstance({ sync: true })
  getPoints(): BaseArrayClass<ILatLng> { return; }

  /**
   * Change the polygon holes.
   * @param holes {ILatLng[][]}
   */
  @CordovaInstance({ sync: true })
  setHoles(holes: ILatLng[][]): void {}

  /**
   * Return an instance of the BaseArrayClass.
   * You can modify the holes.
   * @return {BaseArrayClass<ILatLng[]>}
   */
  @CordovaInstance({ sync: true })
  getHoles(): BaseArrayClass<ILatLng[]> { return; }

  /**
   * Change the filling color (inner color)
   * @param fillColor {string}
   */
  @CordovaInstance({ sync: true })
  setFillColor(fillColor: string): void {}

  /**
   * Return the current polygon filling color (inner color).
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  getFillColor(): string { return; }

  /**
   * Change the stroke color (outter color)
   * @param strokeColor {string}
   */
  @CordovaInstance({ sync: true })
  setStrokeColor(strokeColor: string): void {}

  /**
   * Return the current polygon stroke color (outer color)
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  getStrokeColor(): string { return; }

  /**
   * Change clickablity of the polygon
   * @param clickable {boolean}
   */
  @CordovaInstance({ sync: true })
  setClickable(clickable: boolean): void {}

  /**
   * Return true if the polygon is clickable
   */
  @CordovaInstance({ sync: true })
  getClickable(): boolean { return; }

  /**
   * Change visibility of the polygon
   * @param visible {boolean}
   */
  @CordovaInstance({ sync: true })
  setVisible(visible: boolean): void {}

  /**
   * Return true if the polygon is visible
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getVisible(): boolean { return; }

  /**
   * Change the polygon zIndex order.
   * @param zIndex {number}
   */
  @CordovaInstance({ sync: true })
  setZIndex(zIndex: number): void {}

  /**
   * Return the current polygon zIndex
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getZIndex(): number { return; }

  @CordovaInstance({ sync: true })
  remove(): void {}

  @CordovaInstance({ sync: true })
  setStrokeWidth(strokeWidth: number): void {}

  @CordovaInstance({ sync: true })
  getStrokeWidth(): number { return; }

  /**
   * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of the Earth.
   * @param geodesic {boolean}
   */
  @CordovaInstance({ sync: true })
  setGeodesic(geodesic: boolean): void {}

  /**
   * Return true if the polylgon is geodesic.
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getGeodesic(): boolean { return; }
}

/**
 * @hidden
 */
export class Polyline extends BaseClass {

  constructor(_objectInstance: any) {
    super();
    this._objectInstance = _objectInstance;
  }

  /**
   * Change the polyline points.
   * @param points {ILatLng[]}
   */
  @CordovaInstance({ sync: true })
  setPoints(points: ILatLng[]): void {}

  /**
   * Return an instance of the BaseArrayClass
   * You can modify the points.
   */
  @CordovaInstance({ sync: true })
  getPoints(): BaseArrayClass<LatLng> { return; }

  /**
   * When true, edges of the polyline are interpreted as geodesic and will follow the curvature of the Earth.
   * @param geoDesic {boolean}
   */
  @CordovaInstance({ sync: true })
  setGeoDesic(geoDesic: boolean): void {}

  /**
   * Return true if the polyline is geodesic
   */
  @CordovaInstance({ sync: true })
  getGeodesic(): boolean { return; }

  /**
   * Change visibility of the polyline
   * @param visible {boolean}
   */
  @CordovaInstance({ sync: true })
  setVisible(visible: boolean): void {}

  /**
   * Return true if the polyline is visible
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getVisible(): boolean { return; }

  /**
   * Change clickablity of the polyline
   * @param clickable {boolean}
   */
  @CordovaInstance({ sync: true })
  setClickable(clickable: boolean): void {}

  /**
   * Return true if the polyline is clickable
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getClickable(): boolean { return; }

  /**
   * Change the polyline color
   * @param strokeColor {string}
   */
  @CordovaInstance({ sync: true })
  setStrokeColor(strokeColor: string): void {}

  /**
   * Return the current polyline color
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  getStrokeColor(): string { return; }

  /**
   * Change the polyline stroke width
   * @param strokeWidth {number}
   */
  @CordovaInstance({ sync: true })
  setStrokeWidth(strokeWidth: number): void {}

  /**
   * Return the current stroke width (unit: pixel).
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getStrokeWidth(): number { return; }

  /**
   * Change the polyline zIndex order.
   * @param index {number}
   */
  @CordovaInstance({ sync: true })
  setZIndex(index: number): void {}

  /**
   * Return the current polyline zIndex
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getZIndex(): number { return; }

  /**
   * Remove the polyline
   */
  @CordovaInstance({ sync: true })
  remove(): void {}

  @CordovaInstance({ sync: true })
  getMap(): any { return; }

}

/**
 * @hidden
 */
export class TileOverlay extends BaseClass {

  constructor(_objectInstance: any) {
    super();
    this._objectInstance = _objectInstance;
  }

  /**
   * Set whether the tiles should fade in.
   * @param fadeIn {boolean}
   */
  @CordovaInstance({ sync: true })
  setFadeIn(fadeIn: boolean): void {}

  /**
   * Get whether the tiles should fade in
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getFadeIn(): boolean { return; }

  /**
   * Set the zIndex of the tile overlay
   * @param zIndex {number}
   */
  @CordovaInstance({ sync: true })
  setZIndex(zIndex: number): void {}

  /**
   * Return the zIndex of the tile overlay
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getZIndex(): number { return; }

  /**
   * Set the opacity of the tile overlay
   * @param opacity {number}
   */
  @CordovaInstance({ sync: true })
  setOpacity(opacity: number): void {}

  /**
   * Return the opacity of the tile overlay
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getOpacity(): number { return; }

  /**
   * Set false if you want to hide
   * @param visible {boolean}
   */
  @CordovaInstance({ sync: true })
  setVisible(visible: boolean): void {}

  /**
   * Return true if the tile overlay is visible
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getVisible(): boolean { return; }

  /**
   * Get tile size
   */
  @CordovaInstance({ sync: true })
  getTileSize(): any { return; }

  /**
   * Remove the tile overlay
   */
  @CordovaInstance({ sync: true })
  remove(): void {}

}

// /**
//  * @hidden
//  */
// export interface KmlOverlayOptions {
//   url?: string;
//   preserveViewport?: boolean;
//   animation?: boolean;
// }
// /**
//  * @hidden
//  */
// export class KmlOverlay {
//
//   constructor(private _objectInstance: any) { }
//
//   /**
//    * Adds an event listener.
//    *
//    * @returns {Observable<any>}
//    */
//   addEventListener(eventName: string): Observable<any> {
//     return Observable.fromEvent(this._objectInstance, eventName);
//   }
//
//   /**
//    * Adds an event listener that works once.
//    *
//    * @returns {Promise<any>}
//    */
//   addListenerOnce(eventName: string): Promise<any> {
//     if (!this._objectInstance) {
//       return Promise.reject({ error: 'plugin_not_installed' });
//     }
//     return new Promise<any>(
//       resolve => this._objectInstance.addListenerOnce(eventName, resolve)
//     );
//   }
//
//   /**
//    * Gets a value
//    * @param key
//    */
//   @CordovaInstance({ sync: true })
//   get(key: string): any { return; }
//
//   /**
//    * Sets a value
//    * @param key
//    * @param value
//    */
//   @CordovaInstance({ sync: true })
//   set(key: string, value: any): void { }
//
//   /**
//    * Listen to a map event.
//    *
//    * @returns {Observable<any>}
//    */
//   on(eventName: string): Observable<any> {
//     if (!this._objectInstance) {
//       return new Observable((observer) => {
//         observer.error({ error: 'plugin_not_installed' });
//       });
//     }
//
//     return new Observable(
//       (observer) => {
//         this._objectInstance.on(eventName, observer.next.bind(observer));
//         return () => this._objectInstance.off(event);
//       }
//     );
//   }
//
//   /**
//    * Listen to a map event only once.
//    *
//    * @returns {Promise<any>}
//    */
//   one(eventName: string): Promise<any> {
//     if (!this._objectInstance) {
//       return Promise.reject({ error: 'plugin_not_installed' });
//     }
//     return new Promise<any>(
//       resolve => this._objectInstance.one(eventName, resolve)
//     );
//   }
//
//   /**
//    * Clears all stored values
//    */
//   @CordovaInstance({ sync: true })
//   empty(): void { }
//
//   @CordovaInstance({ sync: true })
//   remove(): void { }
//
//   @CordovaInstance({ sync: true })
//   getOverlays(): Array<Polyline | Polygon | Marker> { return; }
// }
