import { Injectable } from '@angular/core';
import { Cordova, CordovaInstance, CordovaCheck, Plugin, InstanceProperty, InstanceCheck, checkAvailability } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

declare var plugin: any;

/**
 * @hidden
 * You can listen to these events where appropriate
 */
export const GoogleMapsEvent = {
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
export const GoogleMapsAnimation = {
  BOUNCE: 'BOUNCE',
  DROP: 'DROP'
};

/**
 * @hidden
 */
export const GoogleMapsMapTypeId = {
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
@Plugin({
  pluginName: 'GoogleMaps',
  plugin: 'cordova-plugin-googlemaps'
})
export class GoogleMap {
  _objectInstance: any;

  constructor(element: string | HTMLElement, options?: any) {
    if (checkAvailability('plugin.google.maps.Map', null, 'GoogleMaps') === true) {
      if (typeof element === 'string') {
        element = document.getElementById(<string>element);
      }
      this._objectInstance = plugin.google.maps.Map.getMap(element, options);
    }
  }

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
  setDebuggable(isDebuggable: boolean): void { }

  @CordovaInstance({ sync: true })
  setClickable(isClickable: boolean): void { }

  /**
   * Get the position of the camera.
   *
   * @returns {Promise<CameraPosition>}
   */
  @CordovaInstance()
  getCameraPosition(): Promise<CameraPosition> { return; }

  /**
   * Get the location of the user.
   *
   * @returns {Promise<MyLocation>}
   */
  @CordovaInstance()
  getMyLocation(options?: MyLocationOptions): Promise<MyLocation> { return; }

  /**
   * Get the visible region.
   *
   * @returns {Promise<VisibleRegion>}
   */
  @CordovaInstance()
  getVisibleRegion(): Promise<VisibleRegion> { return; }

  @CordovaInstance({ sync: true })
  showDialog(): void { }

  @CordovaInstance({ sync: true })
  closeDialog(): void { }

  @CordovaInstance()
  getLicenseInfo(): Promise<string> { return; }

  @CordovaInstance({ sync: true })
  setCenter(latLng: LatLng): void { }

  @CordovaInstance({ sync: true })
  setZoom(zoomLevel: number): void { }

  @CordovaInstance({ sync: true })
  setMapTypeId(mapTypeId: string): void { }

  @CordovaInstance({ sync: true })
  setTilt(tiltLevel: number): void { }

  /**
   * @returns {Promise<any>}
   */
  @CordovaInstance()
  animateCamera(animateCameraOptions: AnimateCameraOptions): Promise<any> { return; }

  /**
   * @returns {Promise<any>}
   */
  @CordovaInstance()
  moveCamera(cameraPosition: CameraPosition): Promise<any> { return; }

  @CordovaInstance({ sync: true })
  setMyLocationEnabled(enabled: boolean): void { }

  @CordovaInstance({ sync: true })
  setIndoorEnabled(enabled: boolean): void { }

  @CordovaInstance({ sync: true })
  setTrafficEnabled(enabled: boolean): void { }

  @CordovaInstance({ sync: true })
  setCompassEnabled(enabled: boolean): void { }

  @CordovaInstance({ sync: true })
  setAllGesturesEnabled(enabled: boolean): void { }

  /**
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
   * @returns {Promise<KmlOverlay | any>}
   */
  @InstanceCheck()
  addKmlOverlay(options: KmlOverlayOptions): Promise<KmlOverlay | any> {
    return new Promise<KmlOverlay>((resolve, reject) => {
        this._objectInstance.addKmlOverlay(options, (kmlOverlay: any) => {
          if (kmlOverlay) {
            resolve(new KmlOverlay(kmlOverlay));
          } else {
            reject();
          }
        });
    });
  }

  @CordovaInstance({ sync: true })
  setDiv(domNode: HTMLElement): void { }

  @CordovaInstance({ sync: true })
  setVisible(visible: boolean): void { }

  @CordovaInstance({ sync: true })
  setOptions(options: any): void { }

  @CordovaInstance({ sync: true })
  setBackgroundColor(backgroundColor: string): void { }

  @CordovaInstance({ sync: true })
  setPadding(top?: number, right?: number, bottom?: number, left?: number): void { }

  @CordovaInstance({ sync: true })
  clear(): void { }

  @CordovaInstance({ sync: true })
  refreshLayout(): void { }

  /**
   * @returns {Promise<any>}
   */
  @CordovaInstance()
  fromLatLngToPoint(latLng: LatLng, point: any): Promise<any> { return; }

  /**
   * @returns {Promise<LatLng>}
   */
  @CordovaInstance()
  fromPointToLatLng(point: any, latLng: LatLng): Promise<LatLng> { return; }

  /**
   * @returns {Promise<any>}
   */
  @CordovaInstance()
  toDataURL(): Promise<any> { return; }

  @CordovaInstance({ sync: true })
  remove(): void { }

  @CordovaInstance({ sync: true })
  panBy(): void { }
}

/**
 * @name Google Maps
 * @description This plugin uses the native Google Maps SDK
 * @usage
 * ```
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
 *  map.one(GoogleMapsEvent.MAP_READY).then(() => console.log('Map is ready!'));
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
@Plugin({
  pluginName: 'GoogleMaps',
  pluginRef: 'plugin.google.maps.Map',
  plugin: 'cordova-plugin-googlemaps',
  repo: 'https://github.com/mapsplugin/cordova-plugin-googlemaps',
  install: 'ionic plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="YOUR_ANDROID_API_KEY_IS_HERE" --variable API_KEY_FOR_IOS="YOUR_IOS_API_KEY_IS_HERE"',
  installVariables: ['API_KEY_FOR_ANDROID', 'API_KEY_FOR_IOS'],
  platforms: ['Android', 'iOS']
})
@Injectable()
export class GoogleMaps {

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
  create(element: string | HTMLElement, options?: any): GoogleMap {
    return new GoogleMap(element, options);
  }

}

/**
 * @hidden
 */
export interface AnimateCameraOptions {
  target?: LatLng | Array<Marker> | LatLngBounds;
  tilt?: number;
  zoom?: number;
  bearing?: number;
  duration?: number;
}

/**
 * @hidden
 */
export interface CameraPosition {
  target?: LatLng | LatLngBounds | LatLng[];
  zoom?: number;
  tilt?: number;
  bearing?: number;
}

/**
 * @hidden
 */
export interface MyLocation {
  latLng?: LatLng;
  speed?: number;
  time?: string;
  bearing?: number;
}

/**
 * @hidden
 */
export interface MyLocationOptions {
  enableHighAccuracy?: boolean;
}

/**
 * @hidden
 */
export interface VisibleRegion {
  northeast?: any;
  southwest?: any;
}

/**
 * @hidden
 */
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

  /**
   * Function to be invoked when the user clicks on the marker
   */
  markerClick?: Function;

  /**
   * Function to be invoked when the user clicks on the info box
   */
  infoClick?: Function;
}

/**
 * @hidden
 */
export interface MarkerIcon {
  url?: string;
  size?: {
    width?: number;
    height?: number;
  };
}

/**
 * @hidden
 */
export class Marker {

  constructor(private _objectInstance: any) { }

  /**
   * Adds an event listener.
   *
   * @returns {Observable<any>}
   */
  addEventListener(eventName: string): Observable<any> {
    return Observable.fromEvent(this._objectInstance, eventName);
  }

  /**
   * Adds an event listener that works once.
   *
   * @returns {Promise<any>}
   */
  addListenerOnce(eventName: string): Promise<any> {
    if (!this._objectInstance) {
      return Promise.reject({ error: 'plugin_not_installed' });
    }
    return new Promise<any>(
      resolve => this._objectInstance.addListenerOnce(eventName, resolve)
    );
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
  on(eventName: string): Observable<any> {
    if (!this._objectInstance) {
      return new Observable((observer) => {
        observer.error({ error: 'plugin_not_installed' });
      });
    }

    return new Observable(
      (observer) => {
        this._objectInstance.on(eventName, observer.next.bind(observer));
        return () => this._objectInstance.off(event);
      }
    );
  }

  /**
   * Listen to a map event only once.
   *
   * @returns {Promise<any>}
   */
  one(eventName: string): Promise<any> {
    if (!this._objectInstance) {
      return Promise.reject({ error: 'plugin_not_installed' });
    }
    return new Promise<any>(
      resolve => this._objectInstance.one(eventName, resolve)
    );
  }

  /**
   * Clears all stored values
   */
  @CordovaInstance({ sync: true })
  empty(): void { }

  /**
   * Return true if the marker is visible
   */
  @CordovaInstance({ sync: true })
  isVisible(): boolean { return; }

  /**
   * Set false if you want to hide the marker.
   * @param visible
   */
  @CordovaInstance()
  setVisible(visible: boolean): void { }

  /**
   * Return the marker hash code.
   * @return {string} Marker hash code
   */
  @CordovaInstance({ sync: true })
  getHashCode(): string { return; }

  /**
   * Remove the marker completely.
   */
  @CordovaInstance({ sync: true })
  remove(): void { }

  /**
   * Change the marker opacity.
   * @param alpha {number} Opacity
   */
  @CordovaInstance({ sync: true })
  setOpacity(alpha: number): void { }

  /**
   * Return the marker opacity.
   * @return {number} Opacity
   */
  @CordovaInstance({ sync: true })
  getOpacity(): number { return; }

  /**
   * iOS only, Plugin Version >= 1.3.3 Higher zIndex value overlays will be drawn on top of lower zIndex value tile layers and overlays. (You're able to run this on Android, but it will have no effect)
   * @return {number}
   */
  @CordovaInstance({ sync: true })
  setZIndex(): number { return; }

  /**
   * Change the info window anchor. This defaults to 50% from the left of the image and at the bottom of the image.
   * @param x {number}
   * @param y {number}
   */
  @CordovaInstance({ sync: true })
  setIconAnchor(x: number, y: number): void { }

  /**
   * Change the info window anchor. This defaults to 50% from the left of the image and at the top of the image.
   * @param x {number}
   * @param y {number}
   */
  @CordovaInstance({ sync: true })
  setInfoWindowAnchor(x: number, y: number): void { }

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
   * Change title of the infoWindow.
   * @param title {string}
   */
  @CordovaInstance({ sync: true })
  setTitle(title: string): void { }

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
  setSnippet(snippet: string): void { }

  /**
   * Return the snippet strings.
   * @return {string}
   */
  @CordovaInstance({ sync: true })
  getSnippet(): string { return; }

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
   * Set the marker position.
   * @param latLng {GoogleMapLatLng}
   */
  @CordovaInstance({ sync: true })
  setPosition(latLng: LatLng): void { return; }

  /**
   * Return the marker position.
   * @return {Promise<GoogleMapLatLng>}
   */
  @CordovaInstance()
  getPosition(): Promise<LatLng> { return; }

  /**
   * Return the map instance.
   * @return {GoogleMap}
   */
  @CordovaInstance({ sync: true })
  getMap(): GoogleMap { return; }

  /**
   * Specify the animation either `DROP` or `BOUNCE`
   * @param animation {string}
   */
  @CordovaInstance({ sync: true })
  setAnimation(animation: string): void { }

}

/**
 * @hidden
 */
export interface CircleOptions {
  center?: LatLng;
  radius?: number;
  strokeColor?: string;
  strokeWidth?: number;
  fillColor?: string;
  visible?: boolean;
  zIndex?: number;
}

/**
 * @hidden
 */

export class Circle {

  constructor(private _objectInstance: any) { }

  /**
   * Adds an event listener.
   *
   * @returns {Observable<any>}
   */
  addEventListener(eventName: string): Observable<any> {
    return Observable.fromEvent(this._objectInstance, eventName);
  }

  /**
   * Adds an event listener that works once.
   *
   * @returns {Promise<any>}
   */
  addListenerOnce(eventName: string): Promise<any> {
    if (!this._objectInstance) {
      return Promise.reject({ error: 'plugin_not_installed' });
    }
    return new Promise<any>(
      resolve => this._objectInstance.addListenerOnce(eventName, resolve)
    );
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
  on(eventName: string): Observable<any> {
    if (!this._objectInstance) {
      return new Observable((observer) => {
        observer.error({ error: 'plugin_not_installed' });
      });
    }

    return new Observable(
      (observer) => {
        this._objectInstance.on(eventName, observer.next.bind(observer));
        return () => this._objectInstance.off(event);
      }
    );
  }

  /**
   * Listen to a map event only once.
   *
   * @returns {Promise<any>}
   */
  one(eventName: string): Promise<any> {
    if (!this._objectInstance) {
      return Promise.reject({ error: 'plugin_not_installed' });
    }
    return new Promise<any>(
      resolve => this._objectInstance.one(eventName, resolve)
    );
  }

  /**
   * Clears all stored values
   */
  @CordovaInstance({ sync: true })
  empty(): void { }

  @CordovaInstance({ sync: true })
  getCenter(): LatLng { return; }

  @CordovaInstance({ sync: true })
  getRadius(): number { return; }

  @CordovaInstance({ sync: true })
  getStrokeColor(): string { return; }

  @CordovaInstance({ sync: true })
  getVisible(): boolean { return; }

  @CordovaInstance({ sync: true })
  getZIndex(): number { return; }

  @CordovaInstance({ sync: true })
  remove(): void { }

  @CordovaInstance({ sync: true })
  setCenter(latLng: LatLng): void { }

  @CordovaInstance({ sync: true })
  setFillColor(fillColor: string): void { }

  @CordovaInstance({ sync: true })
  setStrokeColor(strokeColor: string): void { }

  @CordovaInstance({ sync: true })
  setStrokeWidth(strokeWidth: number): void { }

  @CordovaInstance({ sync: true })
  setVisible(visible: boolean): void { }

  @CordovaInstance({ sync: true })
  setZIndex(zIndex: number): void { }

  @CordovaInstance({ sync: true })
  setRadius(radius: number): void { }

  @CordovaInstance({ sync: true })
  getMap(): GoogleMap { return; }
}

/**
 * @hidden
 */
export interface PolylineOptions {
  points?: Array<LatLng>;
  visible?: boolean;
  geodesic?: boolean;
  color?: string;
  width?: number;
  zIndex?: number;
}

/**
 * @hidden
 */

export class Polyline {
  constructor(private _objectInstance: any) { }

  /**
   * Adds an event listener.
   *
   * @returns {Observable<any>}
   */
  addEventListener(eventName: string): Observable<any> {
    return Observable.fromEvent(this._objectInstance, eventName);
  }

  /**
   * Adds an event listener that works once.
   *
   * @returns {Promise<any>}
   */
  addListenerOnce(eventName: string): Promise<any> {
    if (!this._objectInstance) {
      return Promise.reject({ error: 'plugin_not_installed' });
    }
    return new Promise<any>(
      resolve => this._objectInstance.addListenerOnce(eventName, resolve)
    );
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
  on(eventName: string): Observable<any> {
    if (!this._objectInstance) {
      return new Observable((observer) => {
        observer.error({ error: 'plugin_not_installed' });
      });
    }

    return new Observable(
      (observer) => {
        this._objectInstance.on(eventName, observer.next.bind(observer));
        return () => this._objectInstance.off(event);
      }
    );
  }

  /**
   * Listen to a map event only once.
   *
   * @returns {Promise<any>}
   */
  one(eventName: string): Promise<any> {
    if (!this._objectInstance) {
      return Promise.reject({ error: 'plugin_not_installed' });
    }
    return new Promise<any>(
      resolve => this._objectInstance.one(eventName, resolve)
    );
  }

  /**
   * Clears all stored values
   */
  @CordovaInstance({ sync: true })
  empty(): void { }

  @CordovaInstance({ sync: true })
  getPoints(): Array<LatLng> { return; }

  @CordovaInstance({ sync: true })
  getCOlor(): string { return; }

  @CordovaInstance({ sync: true })
  getWidth(): number { return; }

  @CordovaInstance({ sync: true })
  getGeodesic(): boolean { return; }

  @CordovaInstance({ sync: true })
  getZIndex(): number { return; }

  @CordovaInstance({ sync: true })
  remove(): void { }

  @CordovaInstance({ sync: true })
  setPoints(points: Array<LatLng>): void { }

  @CordovaInstance({ sync: true })
  setColor(color: string): void { }

  @CordovaInstance({ sync: true })
  setWidth(width: number): void { }

  @CordovaInstance({ sync: true })
  setVisible(visible: boolean): void { }

  @CordovaInstance({ sync: true })
  setZIndex(zIndex: number): void { }

  @CordovaInstance({ sync: true })
  setGeoDesic(geoDesic: boolean): void { }

  @CordovaInstance({ sync: true })
  getMap(): GoogleMap { return; }

}

/**
 * @hidden
 */
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

/**
 * @hidden
 */

export class Polygon {

  constructor(private _objectInstance: any) { }

  /**
   * Adds an event listener.
   *
   * @returns {Observable<any>}
   */
  addEventListener(eventName: string): Observable<any> {
    return Observable.fromEvent(this._objectInstance, eventName);
  }

  /**
   * Adds an event listener that works once.
   *
   * @returns {Promise<any>}
   */
  addListenerOnce(eventName: string): Promise<any> {
    if (!this._objectInstance) {
      return Promise.reject({ error: 'plugin_not_installed' });
    }
    return new Promise<any>(
      resolve => this._objectInstance.addListenerOnce(eventName, resolve)
    );
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
  on(eventName: string): Observable<any> {
    if (!this._objectInstance) {
      return new Observable((observer) => {
        observer.error({ error: 'plugin_not_installed' });
      });
    }

    return new Observable(
      (observer) => {
        this._objectInstance.on(eventName, observer.next.bind(observer));
        return () => this._objectInstance.off(event);
      }
    );
  }

  /**
   * Listen to a map event only once.
   *
   * @returns {Promise<any>}
   */
  one(eventName: string): Promise<any> {
    if (!this._objectInstance) {
      return Promise.reject({ error: 'plugin_not_installed' });
    }
    return new Promise<any>(
      resolve => this._objectInstance.one(eventName, resolve)
    );
  }

  /**
   * Clears all stored values
   */
  @CordovaInstance({ sync: true })
  empty(): void { }

  @CordovaInstance({ sync: true })
  getPoints(): Array<LatLng> { return; }

  @CordovaInstance({ sync: true })
  getStrokeColor(): string { return; }

  @CordovaInstance({ sync: true })
  getFillColor(): string { return; }

  @CordovaInstance({ sync: true })
  getStrokeWidth(): number { return; }

  @CordovaInstance({ sync: true })
  getGeodesic(): boolean { return; }

  @CordovaInstance({ sync: true })
  getVisible(): boolean { return; }

  @CordovaInstance({ sync: true })
  getZIndex(): boolean { return; }

  @CordovaInstance({ sync: true })
  remove(): void { }

  @CordovaInstance({ sync: true })
  setPoints(points: Array<LatLng>): void { }

  @CordovaInstance({ sync: true })
  setStrokeColor(strokeColor: string): void { }

  @CordovaInstance({ sync: true })
  setFillColor(fillColor: string): void { }

  @CordovaInstance({ sync: true })
  setStrokeWidth(strokeWidth: number): void { }

  @CordovaInstance({ sync: true })
  setVisible(visible: boolean): void { }

  @CordovaInstance({ sync: true })
  setZIndex(zIndex: number): void { }

  @CordovaInstance({ sync: true })
  setGeodesic(geodesic: boolean): void { }
}

/**
 * @hidden
 */
export interface TileOverlayOptions {
  tileUrlFormat?: string;
  visible?: boolean;
  zIndex?: number;
  tileSize?: number;
  opacity?: number;
}

/**
 * @hidden
 */
export class TileOverlay {

  constructor(private _objectInstance: any) { }

  /**
   * Adds an event listener.
   *
   * @returns {Observable<any>}
   */
  addEventListener(eventName: string): Observable<any> {
    return Observable.fromEvent(this._objectInstance, eventName);
  }

  /**
   * Adds an event listener that works once.
   *
   * @returns {Promise<any>}
   */
  addListenerOnce(eventName: string): Promise<any> {
    if (!this._objectInstance) {
      return Promise.reject({ error: 'plugin_not_installed' });
    }
    return new Promise<any>(
      resolve => this._objectInstance.addListenerOnce(eventName, resolve)
    );
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
  on(eventName: string): Observable<any> {
    if (!this._objectInstance) {
      return new Observable((observer) => {
        observer.error({ error: 'plugin_not_installed' });
      });
    }

    return new Observable(
      (observer) => {
        this._objectInstance.on(eventName, observer.next.bind(observer));
        return () => this._objectInstance.off(event);
      }
    );
  }

  /**
   * Listen to a map event only once.
   *
   * @returns {Promise<any>}
   */
  one(eventName: string): Promise<any> {
    if (!this._objectInstance) {
      return Promise.reject({ error: 'plugin_not_installed' });
    }
    return new Promise<any>(
      resolve => this._objectInstance.one(eventName, resolve)
    );
  }

  /**
   * Clears all stored values
   */
  @CordovaInstance({ sync: true })
  empty(): void { }

  @CordovaInstance({ sync: true })
  getVisible(): boolean { return; }

  @CordovaInstance({ sync: true })
  setVisible(visible: boolean): void { }

  @CordovaInstance({ sync: true })
  getFadeIn(): boolean { return; }

  @CordovaInstance({ sync: true })
  setFadeIn(fadeIn: boolean): void { }

  @CordovaInstance({ sync: true })
  getZIndex(): number { return; }

  @CordovaInstance({ sync: true })
  setZIndex(zIndex: number): void { }

  @CordovaInstance({ sync: true })
  getOpacity(): number { return; }

  @CordovaInstance({ sync: true })
  setOpacity(opacity: number): void { }

  @CordovaInstance({ sync: true })
  clearTileCache(): void { }

  @CordovaInstance({ sync: true })
  remove(): void { }

}

/**
 * @hidden
 */
export interface GroundOverlayOptions {
  url?: string;
  bounds?: Array<LatLng>;
  visible?: boolean;
  opacity?: number;
  bearing?: number;
  zIndex?: number;
}

/**
 * @hidden
 */
export class GroundOverlay {

  constructor(private _objectInstance: any) { }

  /**
   * Adds an event listener.
   *
   * @returns {Observable<any>}
   */
  addEventListener(eventName: string): Observable<any> {
    return Observable.fromEvent(this._objectInstance, eventName);
  }

  /**
   * Adds an event listener that works once.
   *
   * @returns {Promise<any>}
   */
  addListenerOnce(eventName: string): Promise<any> {
    if (!this._objectInstance) {
      return Promise.reject({ error: 'plugin_not_installed' });
    }
    return new Promise<any>(
      resolve => this._objectInstance.addListenerOnce(eventName, resolve)
    );
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
  on(eventName: string): Observable<any> {
    if (!this._objectInstance) {
      return new Observable((observer) => {
        observer.error({ error: 'plugin_not_installed' });
      });
    }

    return new Observable(
      (observer) => {
        this._objectInstance.on(eventName, observer.next.bind(observer));
        return () => this._objectInstance.off(event);
      }
    );
  }

  /**
   * Listen to a map event only once.
   *
   * @returns {Promise<any>}
   */
  one(eventName: string): Promise<any> {
    if (!this._objectInstance) {
      return Promise.reject({ error: 'plugin_not_installed' });
    }
    return new Promise<any>(
      resolve => this._objectInstance.one(eventName, resolve)
    );
  }

  /**
   * Clears all stored values
   */
  @CordovaInstance({ sync: true })
  empty(): void { }

  @CordovaInstance({ sync: true })
  setBearing(bearing: number): void { }

  @CordovaInstance({ sync: true })
  getBearing(): number { return; }

  @CordovaInstance({ sync: true })
  setOpacity(opacity: number): void { }

  @CordovaInstance({ sync: true })
  getOpacity(): number { return; }

  @CordovaInstance({ sync: true })
  setVisible(visible: boolean): void { }

  @CordovaInstance({ sync: true })
  getVisible(): boolean { return; }

  @CordovaInstance({ sync: true })
  setImage(image: string): void { };

  @CordovaInstance({ sync: true })
  remove(): void { }

}

/**
 * @hidden
 */
export interface KmlOverlayOptions {
  url?: string;
  preserveViewport?: boolean;
  animation?: boolean;
}

/**
 * @hidden
 */
export class KmlOverlay {

  constructor(private _objectInstance: any) { }

  /**
   * Adds an event listener.
   *
   * @returns {Observable<any>}
   */
  addEventListener(eventName: string): Observable<any> {
    return Observable.fromEvent(this._objectInstance, eventName);
  }

  /**
   * Adds an event listener that works once.
   *
   * @returns {Promise<any>}
   */
  addListenerOnce(eventName: string): Promise<any> {
    if (!this._objectInstance) {
      return Promise.reject({ error: 'plugin_not_installed' });
    }
    return new Promise<any>(
      resolve => this._objectInstance.addListenerOnce(eventName, resolve)
    );
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
  on(eventName: string): Observable<any> {
    if (!this._objectInstance) {
      return new Observable((observer) => {
        observer.error({ error: 'plugin_not_installed' });
      });
    }

    return new Observable(
      (observer) => {
        this._objectInstance.on(eventName, observer.next.bind(observer));
        return () => this._objectInstance.off(event);
      }
    );
  }

  /**
   * Listen to a map event only once.
   *
   * @returns {Promise<any>}
   */
  one(eventName: string): Promise<any> {
    if (!this._objectInstance) {
      return Promise.reject({ error: 'plugin_not_installed' });
    }
    return new Promise<any>(
      resolve => this._objectInstance.one(eventName, resolve)
    );
  }

  /**
   * Clears all stored values
   */
  @CordovaInstance({ sync: true })
  empty(): void { }

  @CordovaInstance({ sync: true })
  remove(): void { }

  @CordovaInstance({ sync: true })
  getOverlays(): Array<Polyline | Polygon | Marker> { return; }
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
    this._objectInstance = new plugin.google.maps.LatLngBounds(args);
  }

  @CordovaInstance({ sync: true })
  toString(): string { return; }

  @CordovaInstance({ sync: true })
  toUrlValue(precision?: number): string { return; }

  @CordovaInstance({ sync: true })
  extend(LatLng: LatLng): void { }

  @CordovaInstance({ sync: true })
  contains(LatLng: LatLng): boolean { return; }

  @CordovaInstance({ sync: true })
  getCenter(): LatLng { return; }
}

/**
 * @hidden
 */

export class LatLng {

  lat: number;
  lng: number;

  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }

  equals(other: LatLng): boolean {
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
export interface GeocoderRequest {
  address?: string;
  bounds?: LatLng[];
  position?: { lat: number; lng: number };
}
/**
 * @hidden
 */
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
/**
 * @hidden
 */
@Plugin({
  pluginName: 'Geocoder',
  pluginRef: 'plugin.google.maps.Geocoder',
  plugin: 'cordova-plugin-googlemaps',
  repo: ''
})
export class Geocoder {
  /**
   * Converts position to address and vice versa
   * @param {GeocoderRequest} request Request object with either an address or a position
   * @returns {Promise<GeocoderResult[]>}
   */
  @CordovaCheck()
  geocode(request: GeocoderRequest): Promise<GeocoderResult[] | any> {
    return new Promise<GeocoderResult[]>(resolve => {
      plugin.google.maps.Geocoder.geocode(request, resolve);
    });
  }
}
