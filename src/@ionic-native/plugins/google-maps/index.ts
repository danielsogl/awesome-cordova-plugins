import { Injectable } from '@angular/core';
import { Cordova, CordovaCheck, CordovaInstance, Plugin, InstanceProperty, InstanceCheck, checkAvailability, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';


export type MapType = 'MAP_TYPE_NORMAL' | 'MAP_TYPE_ROADMAP' | 'MAP_TYPE_SATELLITE' | 'MAP_TYPE_HYBRID' | 'MAP_TYPE_TERRAIN' | 'MAP_TYPE_NONE';

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

export interface ILatLngBounds {
  northeast: ILatLng;
  southwest: ILatLng;
}

/**
 * @hidden
 */
export class LatLngBounds implements ILatLngBounds {

  private _objectInstance: any;

  @InstanceProperty northeast: ILatLng;
  @InstanceProperty southwest: ILatLng;
  @InstanceProperty type: string;

  constructor(points?: ILatLng[]) {
    this._objectInstance = new (GoogleMaps.getPlugin()).LatLngBounds(points);
  }

  /**
   * Converts to string
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  toString(): string { return; }

  /**
   * Returns a string of the form "lat_sw,lng_sw,lat_ne,lng_ne" for this bounds, where "sw" corresponds to the southwest corner of the bounding box, while "ne" corresponds to the northeast corner of that box.
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
   * @return {LatLng}
   */
  @CordovaInstance({ sync: true })
  getCenter(): LatLng { return; }
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

    /**
     * Turns the zoom controller on or off. This option is for Android only.
     */
    zoom?: boolean;
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
  camera?: CameraPosition<any>;

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
    building?: boolean
  };
}

export interface CameraPosition<T> {
  /**
   * The center location of the camera view.
   */
  target?: T;
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
  /**
   * Camera padding in pixel
   */
  padding?: number;
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
    url?: string
  };
  locale?: string;
  locality?: string;
  position?: ILatLng;
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

export interface MarkerClusterOptions {
  maxZoomLevel?: number;
  boundsDraw?: boolean;
  markers: MarkerOptions[];
  icons: any[];
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
  addHole?: Array<Array<ILatLng>>;
  clickable?: boolean;
}

export interface PolylineOptions {
  points?: Array<ILatLng>;
  visible?: boolean;
  geodesic?: boolean;
  color?: string;
  width?: number;
  zIndex?: number;
  clickable?: boolean;
}

export interface TileOverlayOptions {
  getTile: (x: number, y: number, zoom: number) => string;
  visible?: boolean;
  zIndex?: number;
  tileSize?: number;
  opacity?: number;
  debug?: boolean;
}


/**
 * @hidden
 */
export class VisibleRegion implements ILatLngBounds {
  private _objectInstance: any;

  @InstanceProperty northeast: ILatLng;
  @InstanceProperty southwest: ILatLng;
  @InstanceProperty farLeft: ILatLng;
  @InstanceProperty farRight: ILatLng;
  @InstanceProperty nearLeft: ILatLng;
  @InstanceProperty nearRight: ILatLng;
  @InstanceProperty type: string;

  constructor(southwest: LatLngBounds, northeast: LatLngBounds, farLeft: ILatLng, farRight: ILatLng, nearLeft: ILatLng, nearRight: ILatLng) {
    this._objectInstance = new (GoogleMaps.getPlugin()).VisibleRegion(southwest, northeast, farLeft, farRight, nearLeft, nearRight);
  }

  /**
   * Converts to string
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  toString(): string { return; }

  /**
   * Returns a string of the form "lat_sw,lng_sw,lat_ne,lng_ne" for this bounds, where "sw" corresponds to the southwest corner of the bounding box, while "ne" corresponds to the northeast corner of that box.
   * @param precision {number}
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  toUrlValue(precision?: number): string { return; }


  /**
   * Returns true if the given lat/lng is in this bounds.
   * @param LatLng {ILatLng}
   */
  @CordovaInstance({ sync: true })
  contains(LatLng: ILatLng): boolean { return; }

}

/**
 * @hidden
 * You can listen to these events where appropriate
 */
export const GoogleMapsEvent = {
  MAP_READY: 'map_ready',
  MAP_LOADED: 'map_loaded',
  MAP_CLICK: 'map_click',
  MAP_LONG_CLICK: 'map_long_click',
  MY_LOCATION_BUTTON_CLICK: 'my_location_button_click',
  INDOOR_BUILDING_FOCUSED: 'indoor_building_focused',
  INDOOR_LEVEL_ACTIVATED: 'indoor_level_activated',
  CAMERA_MOVE_START: 'camera_move_start',
  CAMERA_MOVE: 'camera_move',
  CAMERA_MOVE_END: 'camera_move_end',
  OVERLAY_CLICK: 'overlay_click',
  POLYGON_CLICK: 'polygon_click',
  POLYLINE_CLICK: 'polyline_click',
  CIRCLE_CLICK: 'circle_click',
  GROUND_OVERLAY_CLICK: 'groundoverlay_click',
  INFO_CLICK: 'info_click',
  INFO_LONG_CLICK: 'info_long_click',
  INFO_CLOSE: 'info_close',
  INFO_OPEN: 'info_open',
  CLUSTER_CLICK: 'cluster_click',
  MARKER_CLICK: 'marker_click',
  MARKER_DRAG: 'marker_drag',
  MARKER_DRAG_START: 'marker_drag_start',
  MARKER_DRAG_END: 'marker_drag_end',
  MAP_DRAG: 'map_drag',
  MAP_DRAG_START: 'map_drag_start',
  MAP_DRAG_END: 'map_drag_end'
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
 *   constructor(private googleMaps: GoogleMaps) { }
 *
 *   ionViewDidLoad() {
 *    this.loadMap();
 *   }
 *
 *  loadMap() {
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
 *     this.map = this.googleMaps.create('map_canvas', mapOptions);
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
 * MarkerCluster
 * Polygon
 * Polyline
 * Spherical
 * TileOverlay
 * BaseClass
 * BaseArrayClass
 * @interfaces
 * GoogleMapOptions
 * CameraPosition
 * CircleOptions
 * GeocoderRequest
 * GeocoderResult
 * GroundOverlayOptions
 * ILatLng
 * MarkerIcon
 * MarkerOptions
 * MarkerClusterIcon
 * MarkerClusterOptions
 * MyLocation
 * MyLocationOptions
 * PolygonOptions
 * PolylineOptions
 * TileOverlayOptions
 * VisibleRegion
 */
@Plugin({
  pluginName: 'GoogleMaps',
  pluginRef: 'plugin.google.maps',
  plugin: 'cordova-plugin-googlemaps',
  repo: 'https://github.com/mapsplugin/cordova-plugin-googlemaps',
  install: 'ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="YOUR_ANDROID_API_KEY_IS_HERE" --variable API_KEY_FOR_IOS="YOUR_IOS_API_KEY_IS_HERE"',
  installVariables: ['API_KEY_FOR_ANDROID', 'API_KEY_FOR_IOS'],
  platforms: ['Android', 'iOS']
})
@Injectable()
export class GoogleMaps extends IonicNativePlugin {

  /**
   * Creates a new GoogleMap instance
   * @param element {string | HTMLElement} Element ID or reference to attach the map to
   * @param options {any} Options
   * @return {GoogleMap}
   */
  create(element: string | HTMLElement | GoogleMapOptions, options?: GoogleMapOptions): GoogleMap {
    if (element instanceof HTMLElement) {
      if (element.getAttribute('__pluginMapId')) {
        console.error('GoogleMaps', element.tagName + '[__pluginMapId=\'' + element.getAttribute('__pluginMapId') +  '\'] has already map.');
        return;
      }
    } else if (typeof element === 'object') {
      options = <GoogleMapOptions>element;
      element = null;
    }
    let googleMap: GoogleMap = new GoogleMap(<HTMLElement>element, options);
    googleMap.set('_overlays', {});
    return googleMap;
  }

}

/**
 * @hidden
 * https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/class/BaseClass/README.md
 */
@Plugin({
  plugin: 'cordova-plugin-googlemaps',
  pluginName: 'GoogleMaps',
  pluginRef: 'plugin.google.maps.BaseClass',
  repo: ''
})
export class BaseClass {
  protected _objectInstance: any;

  /**
   * Adds an event listener.
   *
   * @return {Observable<any>}
   */
  @InstanceCheck({ observable: true })
  addEventListener(eventName: string): Observable<any> {
    return new Observable((observer) => {
      this._objectInstance.on(eventName, (...args: any[]) => {
        if (args[args.length - 1] instanceof GoogleMaps.getPlugin().BaseClass) {
          if (args[args.length - 1].type === 'Map') {
            args[args.length - 1] = this;
          } else if (this instanceof MarkerCluster) {
            let overlay: Marker = this.get(args[args.length - 1].getId());
            if (!overlay) {
              let markerJS: any = args[args.length - 1];
              let markerId: string = markerJS.getId();
              let markerCluster: MarkerCluster = <MarkerCluster>this;
              overlay = new Marker(markerCluster.getMap(), markerJS);
              this.get('_overlays')[markerId] = overlay;
              markerJS.one(markerJS.getId() + '_remove', () => {
                this.get('_overlays')[markerId] = null;
              });
            }
            args[args.length - 1] = overlay;
          } else {
            args[args.length - 1] = this._objectInstance.getMap().get('_overlays')[args[args.length - 1].getId()];
          }
        }
        observer.next(args);
      });
    });
  }

  /**
   * Adds an event listener that works once.
   *
   * @return {Promise<any>}
   */
  @InstanceCheck()
  addListenerOnce(eventName: string): Promise<any> {
    return new Promise<any>((resolve) => {
      this._objectInstance.one(eventName, (...args: any[]) => {
        if (args[args.length - 1] instanceof GoogleMaps.getPlugin().BaseClass) {
          if (args[args.length - 1].type === 'Map') {
            args[args.length - 1] = this;
          } else if (this instanceof MarkerCluster) {
            let overlay: Marker = this.get(args[args.length - 1].getId());
            if (!overlay) {
              let markerJS: any = args[args.length - 1];
              let markerId: string = markerJS.getId();
              let markerCluster: MarkerCluster = <MarkerCluster>this;
              overlay = new Marker(markerCluster.getMap(), markerJS);
              this.get('_overlays')[markerId] = overlay;
              markerJS.one(markerJS.getId() + '_remove', () => {
                this.get('_overlays')[markerId] = null;
              });
            }
            args[args.length - 1] = overlay;
          } else {
            args[args.length - 1] = this._objectInstance.getMap().get('_overlays')[args[args.length - 1].getId()];
          }
        }
        resolve(args);
      });
    });
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
  set(key: string, value: any, noNotify?: boolean): void { }

  /**
   * Bind a key to another object
   * @param key {string}
   * @param target {any}
   * @param targetKey? {string}
   * @param noNotify? {boolean}
   */
  @CordovaInstance({ sync: true })
  bindTo(key: string, target: any, targetKey?: string, noNotify?: boolean): void { }

  /**
   * Listen to a map event.
   *
   * @return {Observable<any>}
   */
  @InstanceCheck({ observable: true })
  on(eventName: string): Observable<any> {
    return new Observable((observer) => {
      this._objectInstance.on(eventName, (...args: any[]) => {
        if (args[args.length - 1] instanceof GoogleMaps.getPlugin().BaseClass) {
          if (args[args.length - 1].type === 'Map') {
            args[args.length - 1] = this;
          } else if (this instanceof MarkerCluster) {
            let overlay: Marker = this.get(args[args.length - 1].getId());
            if (!overlay) {
              let markerJS: any = args[args.length - 1];
              let markerId: string = markerJS.getId();
              let markerCluster: MarkerCluster = <MarkerCluster>this;
              overlay = new Marker(markerCluster.getMap(), markerJS);
              this.get('_overlays')[markerId] = overlay;
              markerJS.one(markerJS.getId() + '_remove', () => {
                this.get('_overlays')[markerId] = null;
              });
            }
            args[args.length - 1] = overlay;
          } else {
            args[args.length - 1] = this._objectInstance.getMap().get('_overlays')[args[args.length - 1].getId()];
          }
        }
        observer.next(args);
      });
    });
  }

  /**
   * Listen to a map event only once.
   *
   * @return {Promise<any>}
   */
  @InstanceCheck()
  one(eventName: string): Promise<any> {
    return new Promise<any>((resolve) => {
      this._objectInstance.one(eventName, (...args: any[]) => {
        if (args[args.length - 1] instanceof GoogleMaps.getPlugin().BaseClass) {
          if (args[args.length - 1].type === 'Map') {
            args[args.length - 1] = this;
          } else if (this instanceof MarkerCluster) {
            let overlay: Marker = this.get(args[args.length - 1].getId());
            if (!overlay) {
              let markerJS: any = args[args.length - 1];
              let markerId: string = markerJS.getId();
              let markerCluster: MarkerCluster = <MarkerCluster>this;
              overlay = new Marker(markerCluster.getMap(), markerJS);
              this.get('_overlays')[markerId] = overlay;
              markerJS.one(markerJS.getId() + '_remove', () => {
                this.get('_overlays')[markerId] = null;
              });
            }
            args[args.length - 1] = overlay;
          } else {
            args[args.length - 1] = this._objectInstance.getMap().get('_overlays')[args[args.length - 1].getId()];
          }
        }
        resolve(args);
      });
    });
  }

  /**
   * Clears all stored values
   */
  @CordovaInstance({ sync: true })
  empty(): void { }

  /**
   * Dispatch event.
   */
  @CordovaInstance({ sync: true })
  trigger(eventName: string, ...parameters: any[]): void {}


  /**
   * Executes off() and empty()
   */
  @CordovaCheck({ sync: true })
  destroy(): void {
    let map: GoogleMap = this._objectInstance.getMap();
    if (map) {
      delete this._objectInstance.getMap().get('_overlays')[this._objectInstance.getId()];
    }
    this._objectInstance.remove();
  }
}

/**
 * @hidden
 * https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/class/BaseArrayClass/README.md
 */
@Plugin({
  plugin: 'cordova-plugin-googlemaps',
  pluginName: 'GoogleMaps',
  pluginRef: 'plugin.google.maps.BaseArrayClass',
  repo: ''
})
export class BaseArrayClass<T> extends BaseClass {

  constructor(initialData?: T[] | any) {
    super();
    if (initialData instanceof GoogleMaps.getPlugin().BaseArrayClass) {
      this._objectInstance = initialData;
    } else {
      this._objectInstance = new (GoogleMaps.getPlugin().BaseArrayClass)(initialData);
    }
  }

  /**
   * Removes all elements from the array.
   * @param noNotify? {boolean} Set true to prevent remove_at events.
   */
  @CordovaInstance({ sync: true })
  empty(noNotify?: boolean): void {}

  /**
   * Iterate over each element, calling the provided callback.
   * @param fn {Function}
   * @param callback? {Function}
   */
  @CordovaInstance({ sync: true })
  forEach(fn: (element: T, index?: number) => void): void {}

  /**
   * Iterate over each element, calling the provided callback.
   * @param fn {Function}
   * @return {Promise<any>}
   */
  @CordovaCheck()
  forEachAsync(fn: ((element: T, callback: () => void) => void)): Promise<void> {
    return new Promise<void>((resolve) => {
      this._objectInstance.forEach(fn, resolve);
    });
  }

  /**
   * Iterate over each element, then return a new value.
   * Then you can get the results of each callback.
   * @param fn {Function}
   * @param callback? {Function}
   * @return {Array<Object>} returns a new array with the results
   */
  @CordovaInstance({ sync: true })
  map(fn: (element: T, index: number) => any): any[] { return; }

  /**
   * Iterate over each element, calling the provided callback.
   * Then you can get the results of each callback.
   * @param fn {Function}
   * @param callback? {Function}
   * @return {Promise<any>} returns a new array with the results
   */
  @CordovaCheck()
  mapAsync(fn: ((element: T, callback: (newElement: any) => void) => void)): Promise<any[]> {
    return new Promise<any[]>((resolve) => {
      this._objectInstance.map(fn, resolve);
    });
  }

  /**
   * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
   * @param fn {Function}
   * @param callback? {Function}
   * @return {Array<Object>} returns a new filtered array
   */
  @CordovaInstance({ sync: true })
  filter(fn: (element: T, index: number) => boolean): T[] { return; }

  /**
   * The filterAsync() method creates a new array with all elements that pass the test implemented by the provided function.
   * @param fn {Function}
   * @param callback? {Function}
   * @return {Promise<any>} returns a new filtered array
   */
  @CordovaCheck()
  filterAsync(fn: (element: T, callback: (result: boolean) => void) => void): Promise<T[]> {
    return new Promise<any[]>((resolve) => {
      this._objectInstance.filter(fn, resolve);
    });
  }

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
   * Returns the number of the elements.
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getLength(): number { return; }

  /**
   * The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
   * @param element {Object}
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  indexOf(element: T): number { return; }

  /**
   * The reverse() method reverses an array in place.
   */
  @CordovaInstance({ sync: true })
  reverse(): void {}

  /**
   * The sort() method sorts the elements of an array in place and returns the array.
   */
  @CordovaInstance({ sync: true })
  sort(): void {}

  /**
   * Inserts an element at the specified index.
   * @param index {number}
   * @param element {Object}
   * @param noNotify? {boolean} Set true to prevent insert_at events.
   * @return {Object}
   */
  @CordovaInstance({ sync: true })
  insertAt(index: number, element: T, noNotify?: boolean) {}

  /**
   * Removes the last element of the array and returns that element.
   * @param noNotify? {boolean} Set true to prevent remove_at events.
   * @return {Object}
   */
  @CordovaInstance({ sync: true })
  pop(noNotify?: boolean): T { return; }

  /**
   * Adds one element to the end of the array and returns the new length of the array.
   * @param element {object}
   * @param noNotify? {boolean} Set true to prevent insert_at events.
   */
  @CordovaInstance({ sync: true })
  push(element: T, noNotify?: boolean): void {}

  /**
   * Removes an element from the specified index.
   * @param index {number}
   * @param noNotify? {boolean} Set true to prevent insert_at events.
   */
  @CordovaInstance({ sync: true })
  removeAt(index: number, noNotify?: boolean): void {}

  /**
   * Sets an element at the specified index.
   * @param index {number}
   * @param element {object}
   * @param noNotify? {boolean} Set true to prevent set_at events.
   */
  @CordovaInstance({ sync: true })
  setAt(index: number, element: T, noNotify?: boolean): void {}
}

/**
 * @hidden
 * https://github.com/mapsplugin/cordova-plugin-googlemaps-doc/blob/master/v2.0.0/class/Circle/README.md
 */
export class Circle extends BaseClass {

  private _map: GoogleMap;

  constructor(_map: GoogleMap, _objectInstance: any) {
    super();
    this._map = _map;
    this._objectInstance = _objectInstance;
  }

  /**
   * Return the ID of instance.
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  getId(): string { return; }

  /**
   * Return the map instance.
   * @return {GoogleMap}
   */
  getMap(): any { return this._map; }

  /**
   * Change the center position.
   * @param latLng {ILatLng}
   */
  @CordovaInstance({ sync: true })
  setCenter(latLng: ILatLng): void {}

  /**
   * Return the current center position
   * @return {ILatLng}
   */
  @CordovaInstance({ sync: true })
  getCenter(): ILatLng { return; }

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
export class Environment {

  /**
   * Get the open source software license information for Google Maps SDK for iOS.
   * @return {Promise<any>}
   */
  getLicenseInfo(): Promise<any> {
    return new Promise<any>((resolve) => {
      GoogleMaps.getPlugin().environment.getLicenseInfo((text: string) => resolve(text));
    });
  }

  /**
   * Specifies the background color of the app.
   * @param color
   */
  setBackgroundColor(color: string): void {
    GoogleMaps.getPlugin().environment.setBackgroundColor(color);
  }

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
   * @return {Promise<GeocoderResult[] | BaseArrayClass<GeocoderResult>>}
   */
  geocode(request: GeocoderRequest): Promise<GeocoderResult[] | BaseArrayClass<GeocoderResult>> {

    if (request.address instanceof Array || Array.isArray(request.address) ||
      request.position instanceof Array || Array.isArray(request.position)) {
      // -------------------------
      // Geocoder.geocode({
      //   address: [
      //    "Kyoto, Japan",
      //    "Tokyo, Japan"
      //   ]
      // })
      // -------------------------
      return new Promise<BaseArrayClass<GeocoderResult>>((resolve, reject) => {
        GoogleMaps.getPlugin().Geocoder.geocode(request, (mvcArray: any) => {
          if (mvcArray) {
            resolve(new BaseArrayClass(mvcArray));
          } else {
            reject();
          }
        });
      });
    } else {
      // -------------------------
      // Geocoder.geocode({
      //   address: "Kyoto, Japan"
      // })
      // -------------------------
      return new Promise<GeocoderResult[]>((resolve, reject) => {
        GoogleMaps.getPlugin().Geocoder.geocode(request, (results: GeocoderResult[]) => {
          if (results) {
            resolve(results);
          } else {
            reject();
          }
        });
      });
    }
  }
}

/**
 * @hidden
 */
@Plugin({
  pluginName: 'GoogleMaps',
  pluginRef: 'plugin.google.maps.geometry.encoding',
  plugin: 'cordova-plugin-googlemaps',
  repo: ''
})
export class Encoding {
  /**
   * Decodes an encoded path string into a sequence of LatLngs.
   * @param encoded {string} an encoded path string
   * @param precision? {number} default: 5
   * @return {LatLng}
   */
  @Cordova({ sync: true })
  decodePath(encoded: string, precision?: number): LatLng { return; }

  /**
   * Encodes a sequence of LatLngs into an encoded path string.
   * @param path {Array<ILatLng> | BaseArrayClass<ILatLng>} a sequence of LatLngs
   * @return {string}
   */
  @Cordova({ sync: true })
  encodePath(path: Array<ILatLng> | BaseArrayClass<ILatLng>): string { return; }
}

/**
 * @hidden
 */
@Plugin({
  pluginName: 'GoogleMaps',
  pluginRef: 'plugin.google.maps.geometry.spherical',
  plugin: 'cordova-plugin-googlemaps',
  repo: ''
})
export class Spherical {
  /**
   * Returns the distance, in meters, between two LatLngs.
   * @param locationA {ILatLng}
   * @param locationB {ILatLng}
   * @return {number}
   */
  computeDistanceBetween(from: ILatLng, to: ILatLng): number {
    return GoogleMaps.getPlugin().geometry.spherical.computeDistanceBetween(from, to);
  }

  /**
   * Returns the LatLng resulting from moving a distance from an origin in the specified heading (expressed in degrees clockwise from north)
   * @param from {ILatLng}
   * @param distance {number}
   * @param heading {number}
   * @return {LatLng}
   */
  computeOffset(from: ILatLng, distance: number, heading: number): LatLng {
    return GoogleMaps.getPlugin().geometry.spherical.computeOffset(from, distance, heading);
  }

  /**
   * Returns the location of origin when provided with a LatLng destination, meters travelled and original heading. Headings are expressed in degrees clockwise from North. This function returns null when no solution is available.
   * @param to {ILatLng} The destination LatLng.
   * @param distance {number} The distance travelled, in meters.
   * @param heading {number} The heading in degrees clockwise from north.
   * @return {LatLng}
   */
  computeOffsetOrigin(to: ILatLng, distance: number, heading: number): LatLng {
    return GoogleMaps.getPlugin().geometry.spherical.computeOffsetOrigin(to, distance, heading);
  }

  /**
   * Returns the length of the given path.
   * @param path {Array<ILatLng> | BaseArrayClass<ILatLng>}
   * @return {number}
   */
  computeLength(path: Array<ILatLng> | BaseArrayClass<ILatLng>): number {
    return GoogleMaps.getPlugin().geometry.spherical.computeLength(path);
  }

  /**
   * Returns the area of a closed path. The computed area uses the same units as the radius.
   * @param path {Array<ILatLng> | BaseArrayClass<ILatLng>}.
   * @return {number}
   */
  computeArea(path: Array<ILatLng> | BaseArrayClass<ILatLng>): number {
    return GoogleMaps.getPlugin().geometry.spherical.computeArea(path);
  }

  /**
   * Returns the signed area of a closed path. The signed area may be used to determine the orientation of the path.
   * @param path {Array<ILatLng> | BaseArrayClass<ILatLng>}.
   * @return {number}
   */
  computeSignedArea(path: Array<ILatLng> | BaseArrayClass<ILatLng>): number {
    return GoogleMaps.getPlugin().geometry.spherical.computeSignedArea(path);
  }

  /**
   * Returns the heading from one LatLng to another LatLng. Headings are expressed in degrees clockwise from North within the range (-180,180).
   * @param from {ILatLng}
   * @param to {ILatLng}
   * @return {number}
   */
  computeHeading(from: ILatLng, to: ILatLng): number {
    return GoogleMaps.getPlugin().geometry.spherical.computeHeading(from, to);
  }

  /**
   * Returns the LatLng which lies the given fraction of the way between the origin LatLng and the destination LatLng.
   * @param from {ILatLng}     The LatLng from which to start.
   * @param to {ILatLng}       The LatLng toward which to travel.
   * @param fraction {number}  A fraction of the distance to travel from 0.0 to 1.0 .
   * @return {LatLng}
   */
  interpolate(from: ILatLng, to: ILatLng, fraction: number): LatLng {
    return GoogleMaps.getPlugin().geometry.spherical.interpolate(from, to, fraction);
  }
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
      if (element instanceof HTMLElement) {
        this._objectInstance = GoogleMaps.getPlugin().Map.getMap(element, options);
      } else if (typeof element === 'string') {
        let dummyObj: any = new (GoogleMaps.getPlugin().BaseClass)();
        this._objectInstance = dummyObj;
        let onListeners: any[] = [];
        let oneListeners: any[] = [];
        let _origAddEventListener: any = this._objectInstance.addEventListener;
        let _origAddEventListenerOnce: any = this._objectInstance.addEventListenerOnce;
        this._objectInstance.addEventListener = (eventName: string, fn: () => void) => {
          if (eventName === GoogleMapsEvent.MAP_READY) {
            _origAddEventListener.call(dummyObj, eventName, fn);
          } else {
            onListeners.push([dummyObj, fn]);
          }
        };
        this._objectInstance.on = this._objectInstance.addEventListener;

        this._objectInstance.addEventListenerOnce = (eventName: string, fn: () => void) => {
          if (eventName === GoogleMapsEvent.MAP_READY) {
            _origAddEventListenerOnce.call(dummyObj, eventName, fn);
          } else {
            oneListeners.push([dummyObj, fn]);
          }
        };
        this._objectInstance.one = this._objectInstance.addEventListenerOnce;
        (new Promise<any>((resolve, reject) => {
          let count: number = 0;
          let timer: any = setInterval(() => {
            let target = document.querySelector('.show-page #' + element);
            if (target) {
              clearInterval(timer);
              resolve(target);
            } else {
              if (count++ < 20) {
                return;
              }
              clearInterval(timer);
              this._objectInstance.remove();
              console.error('Can not find the element [#' + element + ']');
              reject();
            }
          }, 100);
        }))
        .then((target: any) => {
          this._objectInstance = GoogleMaps.getPlugin().Map.getMap(target, options);
          this._objectInstance.one(GoogleMapsEvent.MAP_READY, () => {
            this.set('_overlays', {});
            onListeners.forEach((args) => {
              this.on.apply(this, args);
            });
            oneListeners.forEach((args) => {
              this.one.apply(this, args);
            });
            dummyObj.trigger(GoogleMapsEvent.MAP_READY);
          });
        })
        .catch(() => {
          this._objectInstance = null;
        });
      } else if (element === null && options) {
        this._objectInstance = GoogleMaps.getPlugin().Map.getMap(null, options);
      }
    }
  }

  /**
   * Changes the map div
   * @param domNode
   */
  @InstanceCheck()
  setDiv(domNode?: HTMLElement | string): void {
    if (typeof domNode === 'string') {
      this._objectInstance.setDiv(document.querySelector('.show-page #' + domNode));
    } else {
      this._objectInstance.setDiv(domNode);
    }
  }

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
   * @return {Promise<any>}
   */
  @CordovaInstance()
  animateCamera(cameraPosition: CameraPosition<any>): Promise<any> { return; }

  /**
   * Zooming in the camera with animation
   * @return {Promise<any>}
   */
  @CordovaInstance()
  animateCameraZoomIn(): Promise<any> { return; }

  /**
   * Zooming out the camera with animation
   * @return {Promise<any>}
   */
  @CordovaInstance()
  animateCameraZoomOut(): Promise<any> { return; }

  /**
   * Moves the camera without animation
   * @return {Promise<any>}
   */
  @CordovaInstance()
  moveCamera(cameraPosition: CameraPosition<any>): Promise<any> { return; }

  /**
   * Zooming in the camera without animation
   * @return {Promise<any>}
   */
  @CordovaInstance()
  moveCameraZoomIn(): Promise<any> { return; }

  /**
   * Zooming out the camera without animation
   * @return {Promise<any>}
   */
  @CordovaInstance()
  moveCameraZoomOut(): Promise<any> { return; }

  /**
   * Get the position of the camera.
   * @return {CameraPosition}
   */
  @CordovaInstance({ sync: true })
  getCameraPosition(): CameraPosition<ILatLng> { return; }

  /**
   * Get the current camera target position
   * @return {Promise<CameraPosition>}
   */
  @CordovaInstance({ sync: true })
  getCameraTarget(): ILatLng { return; }

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
   * @param latLng {ILatLng | Array<ILatLng>}
   */
  @CordovaInstance({ sync: true })
  setCameraTarget(latLng: ILatLng | Array<ILatLng>): void { }

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
   * Get the current visible region (southWest and northEast)
   * @return {VisibleRegion}
   */
  @CordovaInstance({ sync: true })
  getVisibleRegion(): VisibleRegion { return; }

  /**
   * Get the current device location
   * @return {Promise<MyLocation>}
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
   * @return {Promise<any>}
   */
  @CordovaInstance()
  remove(): Promise<any> {
    if (this.get('_overlays')) {
      Object.keys(this.get('_overlays')).forEach((overlayId: string) => {
        this.get('_overlays')[overlayId] = null;
        delete this.get('_overlays')[overlayId];
      });
    }
    return new Promise<any>((resolve) => {
      this._objectInstance.remove(() => resolve());
    });
  }

  /**
   * Remove all overlays, such as marker
   * @return {Promise<any>}
   */
  @InstanceCheck()
  clear(): Promise<any> {
    if (this.get('_overlays')) {
      Object.keys(this.get('_overlays')).forEach((overlayId: string) => {
        this.get('_overlays')[overlayId] = null;
        delete this.get('_overlays')[overlayId];
      });
    }
    return new Promise<any>((resolve) => {
      this._objectInstance.clear(() => resolve());
    });
  }

  /**
   * Convert the unit from LatLng to the pixels from the left/top of the map div
   * @return {Promise<any>}
   */
  @CordovaInstance()
  fromLatLngToPoint(latLng: ILatLng): Promise<any[]> { return; }

  /**
   * Convert the unit from the pixels from the left/top to the LatLng
   * @return {Promise<LatLng>}
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
   * Set visibility of the map
   * @param visible {boolean}
   */
  @CordovaInstance({ sync: true })
  setVisible(visible: boolean): void {}

  /**
   * Adjust the map padding (same as CSS padding rule)
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
   * @return {Promise<Marker | any>}
   */
  @InstanceCheck()
  addMarker(options: MarkerOptions): Promise<Marker | any> {
    return new Promise<Marker>((resolve, reject) => {
      this._objectInstance.addMarker(options, (marker: any) => {
        if (marker) {
          let overlayId: string = marker.getId();
          const overlay: Marker = new Marker(this, marker);
          this.get('_overlays')[overlayId] = overlay;
          marker.one(overlayId + '_remove', () => {
            if (this.get('_overlays')) {
              this.get('_overlays')[overlayId] = null;
              overlay.destroy();
            }
          });
          resolve(overlay);
        } else {
          reject();
        }
      });
    });
  }

  @InstanceCheck()
  addMarkerCluster(options: MarkerClusterOptions): Promise<MarkerCluster | any> {
    return new Promise<MarkerCluster>((resolve, reject) => {
      this._objectInstance.addMarkerCluster(options, (markerCluster: any) => {
        if (markerCluster) {
          let overlayId = markerCluster.getId();
          const overlay = new MarkerCluster(this, markerCluster);
          this.get('_overlays')[overlayId] = overlay;
          markerCluster.one('remove', () => {
            if (this.get('_overlays')) {
              this.get('_overlays')[overlayId] = null;
              overlay.destroy();
            }
          });
          markerCluster.set('_overlays', new BaseArrayClass());
          resolve(overlay);
        } else {
          reject();
        }
      });
    });
  }

  /**
   * Adds a circle
   * @return {Promise<Circle | any>}
   */
  @InstanceCheck()
  addCircle(options: CircleOptions): Promise<Circle | any> {
    return new Promise<Circle>((resolve, reject) => {
      this._objectInstance.addCircle(options, (circle: any) => {
        if (circle) {
          let overlayId: string = circle.getId();
          const overlay = new Circle(this, circle);
          this.get('_overlays')[overlayId] = overlay;
          circle.one(overlayId + '_remove', () => {
            if (this.get('_overlays')) {
              this.get('_overlays')[overlayId] = null;
              overlay.destroy();
            }
          });
          resolve(overlay);
        } else {
          reject();
        }
      });
    });
  }

  /**
   * Adds a polygon
   * @return {Promise<Polygon | any>}
   */
  @InstanceCheck()
  addPolygon(options: PolygonOptions): Promise<Polygon | any> {
    return new Promise<Polygon>((resolve, reject) => {
      this._objectInstance.addPolygon(options, (polygon: any) => {
        if (polygon) {
          let overlayId: string = polygon.getId();
          const overlay = new Polygon(this, polygon);
          this.get('_overlays')[overlayId] = overlay;
          polygon.one(overlayId + '_remove', () => {
            if (this.get('_overlays')) {
              this.get('_overlays')[overlayId] = null;
              overlay.destroy();
            }
          });
          resolve(overlay);
        } else {
          reject();
        }
      });
    });
  }

  /**
   *
   * @return {Promise<Polyline | any>}
   */
  @InstanceCheck()
  addPolyline(options: PolylineOptions): Promise<Polyline | any> {
    return new Promise<Polyline>((resolve, reject) => {
      this._objectInstance.addPolyline(options, (polyline: any) => {
        if (polyline) {
          let overlayId: string = polyline.getId();
          const overlay = new Polyline(this, polyline);
          this.get('_overlays')[overlayId] = overlay;
          polyline.one(overlayId + '_remove', () => {
            if (this.get('_overlays')) {
              this.get('_overlays')[overlayId] = null;
              overlay.destroy();
            }
          });
          resolve(overlay);
        } else {
          reject();
        }
      });
    });
  }

  /**
   * @return {Promise<TileOverlay | any>}
   */
  @InstanceCheck()
  addTileOverlay(options: TileOverlayOptions): Promise<TileOverlay | any> {
    return new Promise<TileOverlay>((resolve, reject) => {
      this._objectInstance.addTileOverlay(options, (tileOverlay: any) => {
        if (tileOverlay) {
          let overlayId: string = tileOverlay.getId();
          const overlay = new TileOverlay(this, tileOverlay);
          this.get('_overlays')[overlayId] = overlay;
          tileOverlay.one(overlayId + '_remove', () => {
            if (this.get('_overlays')) {
              this.get('_overlays')[overlayId] = null;
              overlay.destroy();
            }
          });
          resolve(overlay);
        } else {
          reject();
        }
      });
    });
  }

  /**
   * @return {Promise<GroundOverlay | any>}
   */
  @InstanceCheck()
  addGroundOverlay(options: GroundOverlayOptions): Promise<GroundOverlay | any> {
    return new Promise<GroundOverlay>((resolve, reject) => {
      this._objectInstance.addGroundOverlay(options, (groundOverlay: any) => {
        if (groundOverlay) {
          let overlayId: string = groundOverlay.getId();
          const overlay = new GroundOverlay(this, groundOverlay);
          this.get('_overlays')[overlayId] = overlay;
          groundOverlay.one(overlayId + '_remove', () => {
            if (this.get('_overlays')) {
              this.get('_overlays')[overlayId] = null;
              overlay.destroy();
            }
          });
          resolve(overlay);
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
   * @return {Promise<any>}
   */
  @CordovaInstance()
  toDataURL(): Promise<any> { return; }

  // /**
  //  * @return {Promise<KmlOverlay | any>}
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

  private _map: GoogleMap;

  constructor(_map: GoogleMap, _objectInstance: any) {
    super();
    this._map = _map;
    this._objectInstance = _objectInstance;
  }

  /**
   * Return the ID of instance.
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  getId(): string { return; }

  /**
   * Return the map instance.
   * @return {GoogleMap}
   */
  getMap(): any { return this._map; }

  /**
   * Change the bounds of the GroundOverlay
   * @param bounds { ILatLng[]}
   */
  @CordovaInstance({ sync: true })
  setBounds(bounds: ILatLng[]): void {}

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
   * Change the opacity of the ground overlay from 0.0 to 1.0
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
  @CordovaCheck()
  remove(): void {
    delete this._objectInstance.getMap().get('_overlays')[this.getId()];
    this._objectInstance.remove();
    this.destroy();
  }
}

/**
 * @hidden
 */
@Plugin({
  plugin: 'cordova-plugin-googlemaps',
  pluginName: 'GoogleMaps',
  pluginRef: 'plugin.google.maps.HtmlInfoWindow',
  repo: ''
})
export class HtmlInfoWindow extends BaseClass {

  constructor() {
    super();
    this._objectInstance = new (GoogleMaps.getPlugin().HtmlInfoWindow)();
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
   * @param cssOptions? {any} CSS styles for the container element of HTMLInfoWindow
   */
  @CordovaInstance()
  setContent(content: string | Element, cssOptions?: any): void {}

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
export class Marker extends BaseClass {

  private _map: GoogleMap;

  constructor(_map: GoogleMap, _objectInstance: any) {
    super();
    this._map = _map;
    this._objectInstance = _objectInstance;
  }

  /**
   * Return the ID of instance.
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  getId(): string { return; }

  /**
   * Return the map instance.
   * @return {GoogleMap}
   */
  getMap(): any { return this._map; }

  /**
   * Set the marker position.
   * @param latLng {ILatLng}
   */
  @CordovaInstance({ sync: true })
  setPosition(latLng: ILatLng): void { return; }

  /**
   * Return the marker position.
   * @return {ILatLng}
   */
  @CordovaInstance({ sync: true })
  getPosition(): ILatLng { return; }

  /**
   * Show the normal infoWindow of the marker.
   */
  @CordovaInstance({ sync: true })
  showInfoWindow(): void {}

  /**
   * Hide the normal infoWindow of the marker.
   */
  @CordovaInstance({ sync: true })
  hideInfoWindow(): void {}

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
  @CordovaInstance({ sync: true })
  setVisible(visible: boolean): void {}

  /**
   * Return true if the marker is visible
   */
  @CordovaInstance({ sync: true })
  isVisible(): boolean { return; }

  /**
   * Change title of the normal infoWindow.
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
   * Change snippet of the normal infoWindow.
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
   * Change the marker opacity from 0.0 to 1.0.
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
   * Remove the marker.
   */
  @CordovaCheck()
  remove(): void {
    delete this._objectInstance.getMap().get('_overlays')[this.getId()];
    this._objectInstance.remove();
    this.destroy();
  }

  /**
   * Change the info window anchor. This defaults to 50% from the left of the image and at the bottom of the image.
   * @param x {number} Distance from left of the icon image in pixels.
   * @param y {number} Distance from top of the icon image in pixels.
   */
  @CordovaInstance({ sync: true })
  setIconAnchor(x: number, y: number): void {}

  /**
   * Change the info window anchor. This defaults to 50% from the left of the image and at the top of the image.
   * @param x {number} Distance from left of the icon image in pixels.
   * @param y {number} Distance from top of the icon image in pixels.
   */
  @CordovaInstance({ sync: true })
  setInfoWindowAnchor(x: number, y: number): void {}

  /**
   * Return true if the infoWindow is shown on the marker
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
   * Higher zIndex value overlays will be drawn on top of lower zIndex value tile layers and overlays.
   * @param y {number} z-index
   */
  @CordovaInstance({ sync: true })
  setZIndex(zIndex: number): void {}

  /**
   * Get z-index
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  getZIndex(): number { return; }

  /**
   * Set true if you allow all users to drag the marker.
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

}

/**
 * @hidden
 */
export class MarkerCluster extends BaseClass {

  private _map: GoogleMap;

  constructor(_map: GoogleMap, _objectInstance: any) {
    super();
    this._map = _map;
    this._objectInstance = _objectInstance;
  }

  /**
   * Return the ID of instance.
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  getId(): string { return; }

  @CordovaInstance({ sync: true })
  addMarker(marker: MarkerOptions): void {}

  @CordovaInstance({ sync: true })
  addMarkers(markers: MarkerOptions[]): void {}

  @InstanceCheck()
  remove(): void {
    this._objectInstance.set('_overlays', undefined);
    delete this._objectInstance.getMap().get('_overlays')[this.getId()];
    this._objectInstance.remove();
    this.destroy();
  }

  /**
   * Return the map instance.
   * @return {GoogleMap}
   */
  getMap(): any { return this._map; }

}

/**
 * @hidden
 */
export class Polygon extends BaseClass {

  private _map: GoogleMap;

  constructor(_map: GoogleMap, _objectInstance: any) {
    super();
    this._map = _map;
    this._objectInstance = _objectInstance;
  }

  /**
   * Return the ID of instance.
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  getId(): string { return; }

  /**
   * Return the map instance.
   * @return {GoogleMap}
   */
  getMap(): any { return this._map; }

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
  @CordovaCheck()
  getPoints(): BaseArrayClass<ILatLng> {
    return new BaseArrayClass<ILatLng>(this._objectInstance.getPoints());
  }

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
  @CordovaCheck()
  getHoles(): BaseArrayClass<ILatLng[]> {
    let holes: ILatLng[][] = this._objectInstance.getPoints();
    let results: BaseArrayClass<ILatLng[]> = new BaseArrayClass<ILatLng[]>();
    holes.forEach((hole: ILatLng[]) => {
      results.push(hole);
    });
    return results;
 }

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
   * Change the stroke color (outer color)
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

  /**
   * Remove the polygon.
   */
  @InstanceCheck()
  remove(): void {
    delete this._objectInstance.getMap().get('_overlays')[this.getId()];
    this._objectInstance.remove();
    this.destroy();
  }

  /**
   * Change the polygon stroke width
   */
  @CordovaInstance({ sync: true })
  setStrokeWidth(strokeWidth: number): void {}

  /**
   * Return the polygon stroke width
   */
  @CordovaInstance({ sync: true })
  getStrokeWidth(): number { return; }

  /**
   * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of the Earth.
   * @param geodesic {boolean}
   */
  @CordovaInstance({ sync: true })
  setGeodesic(geodesic: boolean): void {}

  /**
   * Return true if the polygon is geodesic.
   * @return {boolean}
   */
  @CordovaInstance({ sync: true })
  getGeodesic(): boolean { return; }

}

/**
 * @hidden
 */
export class Polyline extends BaseClass {

  private _map: GoogleMap;

  constructor(_map: GoogleMap, _objectInstance: any) {
    super();
    this._map = _map;
    this._objectInstance = _objectInstance;
  }

  /**
   * Return the ID of instance.
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  getId(): string { return; }

  /**
   * Return the map instance.
   * @return {GoogleMap}
   */
  getMap(): any { return this._map; }

  /**
   * Change the polyline points.
   * @param points {ILatLng[]}
   */
  @CordovaInstance({ sync: true })
  setPoints(points: ILatLng[]): void {}

  /**
   * Return an instance of the BaseArrayClass
   * You can modify the points.
   * @return {BaseArrayClass<ILatLng>}
   */
  @CordovaCheck()
  getPoints(): BaseArrayClass<ILatLng> {
    return new BaseArrayClass<ILatLng>(this._objectInstance.getPoints());
  }

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
  @InstanceCheck()
  remove(): void {
    delete this._objectInstance.getMap().get('_overlays')[this.getId()];
    this._objectInstance.remove();
    this.destroy();
  }
}

/**
 * @hidden
 */
export class TileOverlay extends BaseClass {

  private _map: GoogleMap;

  constructor(_map: GoogleMap, _objectInstance: any) {
    super();
    this._map = _map;
    this._objectInstance = _objectInstance;
  }

  /**
   * Return the ID of instance.
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  getId(): string { return; }

  /**
   * Return the map instance.
   * @return {GoogleMap}
   */
  getMap(): any { return this._map; }

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
  @CordovaCheck()
  remove(): void {
    delete this._objectInstance.getMap().get('_overlays')[this.getId()];
    this._objectInstance.remove();
    this.destroy();
  }
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
//    * @return {Observable<any>}
//    */
//   addEventListener(eventName: string): Observable<any> {
//     return Observable.fromEvent(this._objectInstance, eventName);
//   }
//
//   /**
//    * Adds an event listener that works once.
//    *
//    * @return {Promise<any>}
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
//    * @return {Observable<any>}
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
//    * @return {Promise<any>}
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
