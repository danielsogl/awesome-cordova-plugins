import { Cordova, CordovaInstance, Plugin, InstanceProperty, getPlugin, pluginWarn } from './plugin';
import { Observable } from 'rxjs/Observable';

declare var plugin: any;

/**
 * @private
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
 * @private
 */
export const GoogleMapsAnimation = {
  BOUNCE: 'BOUNCE',
  DROP: 'DROP'
};

/**
 * @name Google Maps
 * @description This plugin uses the native Google Maps SDK
 * @usage
 * ```
 * import {
 *  GoogleMap,
 *  GoogleMapsEvent,
 *  GoogleMapsLatLng,
 *  CameraPosition,
 *  GoogleMapsMarkerOptions,
 *  GoogleMapsMarker
 * } from 'ionic-native';
 *
 * export class MapPage {
 *  constructor() {}
 *
 * // Load map only after view is initialize
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
 *  let map = new GoogleMap(element);
 *
 *  // listen to MAP_READY event
 *  map.one(GoogleMapsEvent.MAP_READY).then(() => console.log('Map is ready!'));
 *
 *  // create LatLng object
 *  let ionic: GoogleMapsLatLng = new GoogleMapsLatLng(43.0741904,-89.3809802);
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
 *  let markerOptions: GoogleMapsMarkerOptions = {
 *    position: ionic,
 *    title: 'Ionic'
 *  };
 *
 *  map.addMarker(markerOptions)
 *    .then((marker: GoogleMapsMarker) => {
 *       marker.showInfoWindow();
 *     });
 *  }
 *
 * }
 * ```
 */
@Plugin({
  pluginName: 'GoogleMap',
  pluginRef: 'plugin.google.maps.Map',
  plugin: 'cordova-plugin-googlemaps',
  repo: 'https://github.com/mapsplugin/cordova-plugin-googlemaps',
  install: 'ionic plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="YOUR_ANDROID_API_KEY_IS_HERE" --variable API_KEY_FOR_IOS="YOUR_IOS_API_KEY_IS_HERE"'
})
export class GoogleMap {
  _objectInstance: any;

  /**
   * Checks if a map object has been created and is available.
   *
   * @returns {Promise<boolean>}
   */
  @Cordova()
  static isAvailable(): Promise<boolean> { return; }

  constructor(element: string | HTMLElement, options?: any) {
    if (!!getPlugin('plugin.google.maps.Map')) {
      if (typeof element === 'string') {
        element = document.getElementById(<string>element);
      }
      this._objectInstance = plugin.google.maps.Map.getMap(element, options);
    } else {
      pluginWarn({
        pluginName: 'GoogleMap',
        plugin: 'plugin.google.maps.Map'
      });
    }
  }

  /**
   * Adds an event listener.
   *
   * @returns {Observable<any>}
   */
  addEventListener(eventName: string): Observable<any> {
    return new Observable(
      (observer) => {
        this._objectInstance.addEventListener(eventName, observer.next.bind(observer));
        return () => this._objectInstance.removeEventListener(eventName, observer.next.bind(observer));
      }
    );
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
  setCenter(latLng: GoogleMapsLatLng): void { }

  @CordovaInstance({ sync: true })
  setZoom(zoomLevel: number): void { }

  @CordovaInstance({ sync: true })
  setMapTypeId(typeId: string): void { }

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
   * @returns {Promise<GoogleMapsMarker | any>}
   */
  addMarker(options: GoogleMapsMarkerOptions): Promise<GoogleMapsMarker | any> {
    if (!this._objectInstance) {
      return Promise.reject({ error: 'plugin_not_installed' });
    }
    return new Promise<GoogleMapsMarker>(
      (resolve, reject) => {
        this._objectInstance.addMarker(options, (marker: any) => {
          if (marker) {
            resolve(new GoogleMapsMarker(marker));
          } else {
            reject();
          }
        });
      }
    );
  }

  /**
   * @returns {Promise<GoogleMapsCircle | any>}
   */
  addCircle(options: GoogleMapsCircleOptions): Promise<GoogleMapsCircle | any> {
    if (!this._objectInstance) {
      return Promise.reject({ error: 'plugin_not_installed' });
    }
    return new Promise<GoogleMapsCircle>(
      (resolve, reject) => {
        this._objectInstance.addCircle(options, (circle: any) => {
          if (circle) {
            resolve(new GoogleMapsCircle(circle));
          } else {
            reject();
          }
        });
      }
    );
  }

  /**
   * @returns {Promise<GoogleMapsPolygon | any>}
   */
  addPolygon(options: GoogleMapsPolygonOptions): Promise<GoogleMapsPolygon | any> {
    if (!this._objectInstance) {
      return Promise.reject({ error: 'plugin_not_installed' });
    }
    return new Promise<GoogleMapsPolygon>(
      (resolve, reject) => {
        this._objectInstance.addPolygon(options, (polygon: any) => {
          if (polygon) {
            resolve(new GoogleMapsPolygon(polygon));
          } else {
            reject();
          }
        });
      }
    );
  }

  /**
   * @returns {Promise<GoogleMapsPolyline | any>}
   */
  addPolyline(options: GoogleMapsPolylineOptions): Promise<GoogleMapsPolyline | any> {
    if (!this._objectInstance) {
      return Promise.reject({ error: 'plugin_not_installed' });
    }
    return new Promise<GoogleMapsPolyline>(
      (resolve, reject) => {
        this._objectInstance.addPolyline(options, (polyline: any) => {
          if (polyline) {
            resolve(new GoogleMapsPolyline(polyline));
          } else {
            reject();
          }
        });
      }
    );
  }

  /**
   * @returns {Promise<GoogleMapsTileOverlay | any>}
   */
  addTileOverlay(options: GoogleMapsTileOverlayOptions): Promise<GoogleMapsTileOverlay | any> {
    if (!this._objectInstance) {
      return Promise.reject({ error: 'plugin_not_installed' });
    }
    return new Promise<GoogleMapsTileOverlay>(
      (resolve, reject) => {
        this._objectInstance.addTileOverlay(options, (tileOverlay: any) => {
          if (tileOverlay) {
            resolve(new GoogleMapsTileOverlay(tileOverlay));
          } else {
            reject();
          }
        });
      }
    );
  }

  /**
   * @returns {Promise<GoogleMapsGroundOverlay | any>}
   */
  addGroundOverlay(options: GoogleMapsGroundOverlayOptions): Promise<GoogleMapsGroundOverlay | any> {
    if (!this._objectInstance) {
      return Promise.reject({ error: 'plugin_not_installed' });
    }
    return new Promise<GoogleMapsGroundOverlay>(
      (resolve, reject) => {
        this._objectInstance.addGroundOverlay(options, (groundOverlay: any) => {
          if (groundOverlay) {
            resolve(new GoogleMapsGroundOverlay(groundOverlay));
          } else {
            reject();
          }
        });
      }
    );
  }

  /**
   * @returns {Promise<GoogleMapsKmlOverlay | any>}
   */
  addKmlOverlay(options: GoogleMapsKmlOverlayOptions): Promise<GoogleMapsKmlOverlay | any> {
    if (!this._objectInstance) {
      return Promise.reject({ error: 'plugin_not_installed' });
    }
    return new Promise<GoogleMapsKmlOverlay>(
      (resolve, reject) => {
        this._objectInstance.addKmlOverlay(options, (kmlOverlay: any) => {
          if (kmlOverlay) {
            resolve(new GoogleMapsKmlOverlay(kmlOverlay));
          } else {
            reject();
          }
        });
      }
    );
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
  fromLatLngToPoint(latLng: GoogleMapsLatLng, point: any): Promise<any> { return; }

  /**
   * @returns {Promise<GoogleMapsLatLng>}
   */
  @CordovaInstance()
  fromPointToLatLng(point: any, latLng: GoogleMapsLatLng): Promise<GoogleMapsLatLng> { return; }

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
 * @private
 */
export interface AnimateCameraOptions {
  target?: GoogleMapsLatLng | Array<GoogleMapsMarker> | GoogleMapsLatLngBounds;
  tilt?: number;
  zoom?: number;
  bearing?: number;
  duration?: number;
}

/**
 * @private
 */
export interface CameraPosition {
  target?: GoogleMapsLatLng | GoogleMapsLatLngBounds | GoogleMapsLatLng[];
  zoom?: number;
  tilt?: number;
  bearing?: number;
}

/**
 * @private
 */
export interface MyLocation {
  latLng?: GoogleMapsLatLng;
  speed?: number;
  time?: string;
  bearing?: number;
}

/**
 * @private
 */
export interface MyLocationOptions {
  enableHighAccuracy?: boolean;
}

/**
 * @private
 */
export interface VisibleRegion {
  northeast?: any;
  southwest?: any;
}

/**
 * @private
 */
export interface GoogleMapsMarkerOptions {
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
  position?: GoogleMapsLatLng;

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
 * @private
 */
export interface GoogleMapsMarkerIcon {
  url?: string;
  size?: {
    width?: number;
    height?: number;
  };
}

/**
 * @private
 */
export class GoogleMapsMarker {

  constructor(private _objectInstance: any) { }

  /**
   * Adds an event listener.
   *
   * @returns {Observable<any>}
   */
  addEventListener(eventName: string): Observable<any> {
    return new Observable(
      (observer) => {
        this._objectInstance.addEventListener(eventName, observer.next.bind(observer));
        return () => this._objectInstance.removeEventListener(eventName, observer.next.bind(observer));
      }
    );
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
  setIcon(icon: GoogleMapsMarkerIcon): void { return; }

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
  setPosition(latLng: GoogleMapsLatLng): void { return; }

  /**
   * Return the marker position.
   * @return {Promise<GoogleMapLatLng>}
   */
  @CordovaInstance()
  getPosition(): Promise<GoogleMapsLatLng> { return; }

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
 * @private
 */
export interface GoogleMapsCircleOptions {
  center?: GoogleMapsLatLng;
  radius?: number;
  strokeColor?: string;
  strokeWidth?: number;
  fillColor?: string;
  visible?: boolean;
  zIndex?: number;
}

/**
 * @private
 */
export class GoogleMapsCircle {

  constructor(private _objectInstance: any) { }

  /**
   * Adds an event listener.
   *
   * @returns {Observable<any>}
   */
  addEventListener(eventName: string): Observable<any> {
    return new Observable(
      (observer) => {
        this._objectInstance.addEventListener(eventName, observer.next.bind(observer));
        return () => this._objectInstance.removeEventListener(eventName, observer.next.bind(observer));
      }
    );
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
  getCenter(): GoogleMapsLatLng { return; }

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
  setCenter(latLng: GoogleMapsLatLng): void { }

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
 * @private
 */
export interface GoogleMapsPolylineOptions {
  points?: Array<GoogleMapsLatLng>;
  visible?: boolean;
  geodesic?: boolean;
  color?: string;
  width?: number;
  zIndex?: number;
}

/**
 * @private
 */
export class GoogleMapsPolyline {
  constructor(private _objectInstance: any) { }

  /**
   * Adds an event listener.
   *
   * @returns {Observable<any>}
   */
  addEventListener(eventName: string): Observable<any> {
    return new Observable(
      (observer) => {
        this._objectInstance.addEventListener(eventName, observer.next.bind(observer));
        return () => this._objectInstance.removeEventListener(eventName, observer.next.bind(observer));
      }
    );
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
  getPoints(): Array<GoogleMapsLatLng> { return; }

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
  setPoints(points: Array<GoogleMapsLatLng>): void { }

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
 * @private
 */
export interface GoogleMapsPolygonOptions {
  points?: Array<GoogleMapsLatLng>;
  geodesic?: boolean;
  strokeColor?: string;
  strokeWidth?: number;
  fillColor?: string;
  visible?: boolean;
  zIndex?: number;
  addHole?: Array<GoogleMapsLatLng>;
}

/**
 * @private
 */
export class GoogleMapsPolygon {

  constructor(private _objectInstance: any) { }

  /**
   * Adds an event listener.
   *
   * @returns {Observable<any>}
   */
  addEventListener(eventName: string): Observable<any> {
    return new Observable(
      (observer) => {
        this._objectInstance.addEventListener(eventName, observer.next.bind(observer));
        return () => this._objectInstance.removeEventListener(eventName, observer.next.bind(observer));
      }
    );
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
  getPoints(): Array<GoogleMapsLatLng> { return; }

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
  setPoints(points: Array<GoogleMapsLatLng>): void { }

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
 * @private
 */
export interface GoogleMapsTileOverlayOptions {
  tileUrlFormat?: string;
  visible?: boolean;
  zIndex?: number;
  tileSize?: number;
  opacity?: number;
}

/**
 * @private
 */
export class GoogleMapsTileOverlay {

  constructor(private _objectInstance: any) { }

  /**
   * Adds an event listener.
   *
   * @returns {Observable<any>}
   */
  addEventListener(eventName: string): Observable<any> {
    return new Observable(
      (observer) => {
        this._objectInstance.addEventListener(eventName, observer.next.bind(observer));
        return () => this._objectInstance.removeEventListener(eventName, observer.next.bind(observer));
      }
    );
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
 * @private
 */
export interface GoogleMapsGroundOverlayOptions {
  url?: string;
  bounds?: Array<GoogleMapsLatLng>;
  visible?: boolean;
  opacity?: number;
  bearing?: number;
  zIndex?: number;
}

/**
 * @private
 */
export class GoogleMapsGroundOverlay {

  constructor(private _objectInstance: any) { }

  /**
   * Adds an event listener.
   *
   * @returns {Observable<any>}
   */
  addEventListener(eventName: string): Observable<any> {
    return new Observable(
      (observer) => {
        this._objectInstance.addEventListener(eventName, observer.next.bind(observer));
        return () => this._objectInstance.removeEventListener(eventName, observer.next.bind(observer));
      }
    );
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
 * @private
 */
export interface GoogleMapsKmlOverlayOptions {
  url?: string;
  preserveViewport?: boolean;
  animation?: boolean;
}

/**
 * @private
 */
export class GoogleMapsKmlOverlay {

  constructor(private _objectInstance: any) { }

  /**
   * Adds an event listener.
   *
   * @returns {Observable<any>}
   */
  addEventListener(eventName: string): Observable<any> {
    return new Observable(
      (observer) => {
        this._objectInstance.addEventListener(eventName, observer.next.bind(observer));
        return () => this._objectInstance.removeEventListener(eventName, observer.next.bind(observer));
      }
    );
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
  getOverlays(): Array<GoogleMapsPolyline | GoogleMapsPolygon | GoogleMapsMarker> { return; }
}

/**
 * @private
 */
export class GoogleMapsLatLngBounds {
  private _objectInstance: any;

  @InstanceProperty northeast: GoogleMapsLatLng;
  @InstanceProperty southwest: GoogleMapsLatLng;
  @InstanceProperty type: string;

  constructor(southwestOrArrayOfLatLng: GoogleMapsLatLng | GoogleMapsLatLng[], northeast?: GoogleMapsLatLng) {
    let args = !!northeast ? [southwestOrArrayOfLatLng, northeast] : southwestOrArrayOfLatLng;
    this._objectInstance = new plugin.google.maps.LatLngBounds(args);
  }

  @CordovaInstance({ sync: true })
  toString(): string { return; }

  @CordovaInstance({ sync: true })
  toUrlValue(precision?: number): string { return; }

  @CordovaInstance({ sync: true })
  extend(LatLng: GoogleMapsLatLng): void { }

  @CordovaInstance({ sync: true })
  contains(LatLng: GoogleMapsLatLng): boolean { return; }

  @CordovaInstance({ sync: true })
  getCenter(): GoogleMapsLatLng { return; }
}

/**
 * @private
 */
export class GoogleMapsLatLng {

  lat: number;
  lng: number;

  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }

  equals(other: GoogleMapsLatLng): boolean {
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
 * @private
 */
export interface GeocoderRequest {
  address?: string;
  bounds?: GoogleMapsLatLng[];
  position?: { lat: number; lng: number };
}
/**
 * @private
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
 * @private
 */
export class Geocoder {
  /**
   * Converts position to address and vice versa
   * @param {GeocoderRequest} request Request object with either an address or a position
   * @returns {Promise<GeocoderResult[]>}
   */
  static geocode(request: GeocoderRequest): Promise<GeocoderResult[] | any> {
    return new Promise<GeocoderResult[]>((resolve, reject) => {
      if (!plugin || !plugin.google || !plugin.google.maps || !plugin.google.maps.Geocoder) {
        pluginWarn({
          pluginName: 'GoogleMap',
          plugin: 'plugin.google.maps.Map'
        });
        reject({ error: 'plugin_not_installed' });
      } else {
        plugin.google.maps.Geocoder.geocode(request, resolve);
      }
    });
  }
}
