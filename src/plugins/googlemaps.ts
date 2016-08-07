import { Cordova, CordovaInstance, Plugin } from './plugin';
import { Observable } from 'rxjs/Observable';


/**
 * @private
 * Created by Ibrahim on 3/29/2016.
 */
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
 * import { GoogleMap, GoogleMapsEvent } from 'ionic-native';
 *
 * ...
 *
 * // somewhere in your component
 * let map = new GoogleMap('elementID', {
 *  // Map Options: https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapOptions
 });
 *
 * map.on(GoogleMapsEvent.MAP_READY).subscribe(() => console.log('Map is ready!'));
 * ```
 */
@Plugin({
  pluginRef: 'plugin.google.maps.Map',
  plugin: 'cordova-plugin-googlemaps',
  repo: 'https://github.com/mapsplugin/cordova-plugin-googlemaps'
})
export class GoogleMap {
  _objectInstance: any;

  /**
   * Checks if a map object has been created and is available.
   * 
   * @return {Promise<boolean>}
   */
  @Cordova()
  static isAvailable(): Promise<boolean> {
    return;
  }

  constructor(elementId: string, options?: any) {
    this._objectInstance = plugin.google.maps.Map.getMap(document.getElementById(elementId), options);
  }
  
  /**
   * Listen to a map event.
   * 
   * @return {Observable<any>}
   */
  on(event: any): Observable<any> {
    return new Observable(
      (observer) => {
        this._objectInstance.on(event, observer.next.bind(observer));
        return () => this._objectInstance.off(event);
      }
    );
  }
  
  /** 
   * Listen to a map event only once.
   * 
   * @return {Promise<any>}
   */
  one(event: any): Promise<any> {
    return new Promise<any>(
      resolve => this._objectInstance.one(event, resolve)
    );
  }

  @CordovaInstance({ sync: true })
  setDebuggable(isDebuggable: boolean): void {
  }

  @CordovaInstance({ sync: true })
  setClickable(isClickable: boolean): void {
  }

  /**
   * Get the position of the camera.
   * 
   * @return {Promise<CameraPosition>}
   */
  @CordovaInstance()
  getCameraPosition(): Promise<CameraPosition> {
    return;
  }

  /**
   * Get the location of the user.
   * 
   * @return {Promise<MyLocation>}
   */
  @CordovaInstance()
  getMyLocation(options?:MyLocationOptions): Promise<MyLocation> {
    return;
  }

  /**
   * Get the visible region.
   * 
   * @return {Promise<VisibleRegion>}
   */
  @CordovaInstance()
  getVisibleRegion(): Promise<VisibleRegion> {
    return;
  }

  @CordovaInstance({ sync: true })
  showDialog(): void {
  }

  @CordovaInstance({ sync: true })
  closeDialog(): void {
  }

  @CordovaInstance()
  getLicenseInfo(): Promise<string> {
    return;
  }

  @CordovaInstance({ sync: true })
  setCenter(latLng: GoogleMapsLatLng): void {
  }

  @CordovaInstance({ sync: true })
  setZoom(zoomLevel: number): void {
  }

  @CordovaInstance({ sync: true })
  setMapTypeId(typeId: string): void {
  }

  @CordovaInstance({ sync: true })
  setTilt(tiltLevel: number): void {
  }

  @CordovaInstance({ sync: true })
  animateCamera(animateCameraOptions: AnimateCameraOptions): void {
  }

  @CordovaInstance({ sync: true })
  moveCamera(cameraPosition: CameraPosition): void {
  }

  @CordovaInstance({ sync: true })
  setMyLocationEnabled(enabled: boolean): void {
  }

  @CordovaInstance({ sync: true })
  setIndoorEnabled(enabled: boolean): void {
  }

  @CordovaInstance({ sync: true })
  setTrafficEnabled(enabled: boolean): void {
  }

  @CordovaInstance({ sync: true })
  setCompassEnabled(enabled: boolean): void {
  }

  @CordovaInstance({ sync: true })
  setAllGesturesEnabled(enabled: boolean): void {
  }

  addMarker(options: GoogleMapsMarkerOptions): Promise<GoogleMapsMarker> {
    return new Promise<GoogleMapsMarker>(
      (resolve, reject) => {
        this._objectInstance.addMarker(options, (marker: any) => {
          if (marker) resolve(new GoogleMapsMarker(marker));
          else reject();
        });
      }
    );
  }

  addCircle(options: GoogleMapsCircleOptions): Promise<GoogleMapsCircle> {
    return new Promise<GoogleMapsCircle>(
      (resolve, reject) => {
        this._objectInstance.addCircle(options, (circle: any) => {
          if (circle) resolve(new GoogleMapsCircle(circle));
          else reject();
        });
      }
    );
  }

  addPolygon(options: GoogleMapsPolygonOptions): Promise<GoogleMapsPolygon> {
    return new Promise<GoogleMapsPolygon>(
      (resolve, reject) => {
        this._objectInstance.addPolygon(options, (polygon: any) => {
          if (polygon) resolve(new GoogleMapsPolygon(polygon));
          else reject();
        });
      }
    );
  }

  addPolyline(options: GoogleMapsPolylineOptions): Promise<GoogleMapsPolyline> {
    return new Promise<GoogleMapsPolyline>(
      (resolve, reject) => {
        this._objectInstance.addPolyline(options, (polyline: any) => {
          if (polyline) resolve(new GoogleMapsPolyline(polyline));
          else reject();
        });
      }
    );
  }

  addTileOverlay(options: GoogleMapsTileOverlayOptions): Promise<GoogleMapsTileOverlay> {
    return new Promise<GoogleMapsTileOverlay>(
      (resolve, reject) => {
        this._objectInstance.addTileOverlay(options, (tileOverlay: any) => {
          if (tileOverlay) resolve(new GoogleMapsTileOverlay(tileOverlay));
          else reject();
        });
      }
    );
  }

  addGroundOverlay(options: GoogleMapsGroundOverlayOptions): Promise<GoogleMapsGroundOverlay> {
    return new Promise<GoogleMapsGroundOverlay>(
      (resolve, reject) => {
        this._objectInstance.addGroundOverlay(options, (groundOverlay: any) => {
          if (groundOverlay) resolve(new GoogleMapsGroundOverlay(groundOverlay));
          else reject();
        });
      }
    );
  }

  addKmlOverlay(options: GoogleMapsKmlOverlayOptions): Promise<GoogleMapsKmlOverlay> {
    return new Promise<GoogleMapsKmlOverlay>(
      (resolve, reject) => {
        this._objectInstance.addKmlOverlay(options, (kmlOverlay: any) => {
          if (kmlOverlay) resolve(new GoogleMapsKmlOverlay(kmlOverlay));
          else reject();
        });
      }
    );
  }

  @CordovaInstance({ sync: true })
  setDiv(domNode: HTMLElement): void {
  }

  @CordovaInstance({ sync: true })
  setVisible(visible: boolean): void {
  }

  @CordovaInstance({ sync: true })
  setOptions(options: any): void {
  }

  @CordovaInstance({ sync: true })
  setBackgroundColor(backgroundColor: string): void {
  }

  @CordovaInstance({ sync: true })
  setPadding(top?: number, right?: number, bottom?: number, left?: number): void {
  }

  @CordovaInstance({ sync: true })
  clear(): void {
  }

  @CordovaInstance({ sync: true })
  refreshLayout(): void {
  }

  @CordovaInstance()
  fromLatLngToPoint(latLng: GoogleMapsLatLng, point: any): Promise<any> {
    return;
  }

  @CordovaInstance()
  fromPointToLatLng(point: any, latLng: GoogleMapsLatLng): Promise<GoogleMapsLatLng> {
    return;
  }

  @CordovaInstance()
  toDataURL(): Promise<any> {
    return;
  }

  @CordovaInstance({ sync: true })
  remove(): void {
  }

  @CordovaInstance({ sync: true })
  panBy(): void {
  }

}

/**
 * @private
 */
export interface AnimateCameraOptions {
  target?: GoogleMapsLatLng;
  tilt?: number;
  zoom?: number;
  bearing?: number;
  duration?: number;
}

/**
 * @private
 */
export interface CameraPosition {
  target?: GoogleMapsLatLng;
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
  icon?: any;
  title?: string;
  snippet?: string;
  position?: GoogleMapsLatLng;
  infoWindowAnchor?: number[];
  draggable?: boolean;
  flat?: boolean;
  rotation?: number;
  visible?: boolean;
  styles?: any;
  animation?: string;
  zIndex?: number;
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

  constructor(private _objectInstance: any) {
  }

  addEventListener(event: any): Observable<any> {
    return new Observable(
      (observer) => {
        this._objectInstance.addEventListener(event, observer.next.bind(observer));
        return () => this._objectInstance.removeEventListener(event, observer.next.bind(observer));
      }
    );
  }

  @CordovaInstance({ sync: true })
  isVisible(): boolean {
    return;
  }

  @CordovaInstance()
  setVisible(visible: boolean): void {
  }

  @CordovaInstance({ sync: true })
  getHashCode(): string {
    return;
  }

  @CordovaInstance({ sync: true })
  remove(): void {
  }

  @CordovaInstance({ sync: true })
  setOpacity(alpha: number): void {
  }

  @CordovaInstance({ sync: true })
  getOpacity(): number {
    return;
  }

  @CordovaInstance({ sync: true })
  setZIndex(): void {
  }

  @CordovaInstance({ sync: true })
  setIconAnchor(x: number, y: number): void {
  }

  @CordovaInstance({ sync: true })
  setInfoWindowAnchor(x: number, y: number): void {
  }

  @CordovaInstance({ sync: true })
  setDraggable(draggable: boolean): void {
  }

  @CordovaInstance({ sync: true })
  isDraggable(): boolean {
    return;
  }

  @CordovaInstance({ sync: true })
  setFlat(flat: boolean): void {
    return;
  }

  @CordovaInstance({ sync: true })
  setIcon(icon: GoogleMapsMarkerIcon): void {
  }

  @CordovaInstance({ sync: true })
  setTitle(title: string): void {
  }

  @CordovaInstance({ sync: true })
  getTitle(): string {
    return;
  }

  @CordovaInstance({ sync: true })
  setSnippet(snippet: string): void {
  }

  @CordovaInstance({ sync: true })
  getSnippet(): string {
    return;
  }

  @CordovaInstance({ sync: true })
  setRotation(rotation: number): void {
  }

  @CordovaInstance({ sync: true })
  getRotation(): number {
    return;
  }

  @CordovaInstance({ sync: true })
  showInfoWindow(): number {
    return;
  }

  @CordovaInstance({ sync: true })
  hideInfoWindow(): number {
    return;
  }

  @CordovaInstance({ sync: true })
  setPosition(latLng: GoogleMapsLatLng): void {
  }

  @CordovaInstance()
  getPosition(): Promise<GoogleMapsLatLng> {
    return;
  }

  @CordovaInstance({ sync: true })
  getMap(): GoogleMap {
    return;
  }

  @CordovaInstance({ sync: true })
  setAnimation(animation: string): void {
  }


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

  constructor(private _objectInstance: any) {
  }

  addEventListener(event: any): Observable<any> {
    return new Observable(
      (observer) => {
        this._objectInstance.addEventListener(event, observer.next.bind(observer));
        return () => this._objectInstance.removeEventListener(event, observer.next.bind(observer));
      }
    );
  }

  @CordovaInstance({ sync: true })
  getCenter(): GoogleMapsLatLng {
    return;
  }

  @CordovaInstance({ sync: true })
  getRadius(): number {
    return;
  }

  @CordovaInstance({ sync: true })
  getStrokeColor(): string {
    return;
  }

  @CordovaInstance({ sync: true })
  getVisible(): boolean {
    return;
  }

  @CordovaInstance({ sync: true })
  getZIndex(): number {
    return;
  }

  @CordovaInstance({ sync: true })
  remove(): void {
  }

  @CordovaInstance({ sync: true })
  setCenter(latLng: GoogleMapsLatLng): void {
  }

  @CordovaInstance({ sync: true })
  setFillColor(fillColor: string): void {
  }

  @CordovaInstance({ sync: true })
  setStrokeColor(strokeColor: string): void {
  }

  @CordovaInstance({ sync: true })
  setStrokeWidth(strokeWidth: number): void {
  }

  @CordovaInstance({ sync: true })
  setVisible(visible: boolean): void {
  }

  @CordovaInstance({ sync: true })
  setZIndex(zIndex: number): void {
  }

  @CordovaInstance({ sync: true })
  setRadius(radius: number): void {
  }

  @CordovaInstance({ sync: true })
  getMap(): GoogleMap {
    return;
  }
}

/**
 * @private
 */
export interface GoogleMapsPolylineOptions {
  points?: Array<GoogleMapsLatLng>;
  visible?: boolean;
  googledesic?: boolean;
  color?: string;
  width?: number;
  zIndex?: number;
}

/**
 * @private
 */
export class GoogleMapsPolyline {
  constructor(private _objectInstance: any) {
  }

  addEventListener(event: any): Observable<any> {
    return new Observable(
      (observer) => {
        this._objectInstance.addEventListener(event, observer.next.bind(observer));
        return () => this._objectInstance.removeEventListener(event, observer.next.bind(observer));
      }
    );
  }

  @CordovaInstance({ sync: true })
  getPoints(): Array<GoogleMapsLatLng> {
    return;
  }

  @CordovaInstance({ sync: true })
  getCOlor(): string {
    return;
  }

  @CordovaInstance({ sync: true })
  getWidth(): number {
    return;
  }

  @CordovaInstance({ sync: true })
  getGeodesic(): boolean {
    return;
  }

  @CordovaInstance({ sync: true })
  getZIndex(): number {
    return;
  }

  @CordovaInstance({ sync: true })
  remove(): void {
  }

  @CordovaInstance({ sync: true })
  setPoints(points: Array<GoogleMapsLatLng>): void {
  }

  @CordovaInstance({ sync: true })
  setColor(color: string): void {
  }

  @CordovaInstance({ sync: true })
  setWidth(width: number): void {
  }

  @CordovaInstance({ sync: true })
  setVisible(visible: boolean): void {
  }

  @CordovaInstance({ sync: true })
  setZIndex(zIndex: number): void {
  }

  @CordovaInstance({ sync: true })
  setGeoDesic(geoDesic: boolean): void {
  }

  @CordovaInstance({ sync: true })
  getMap(): GoogleMap {
    return;
  }

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

  constructor(private _objectInstance: any) {
  }

  addEventListener(event: any): Observable<any> {
    return new Observable(
      (observer) => {
        this._objectInstance.addEventListener(event, observer.next.bind(observer));
        return () => this._objectInstance.removeEventListener(event, observer.next.bind(observer));
      }
    );
  }

  @CordovaInstance({ sync: true })
  getPoints(): Array<GoogleMapsLatLng> {
    return;
  }

  @CordovaInstance({ sync: true })
  getStrokeColor(): string {
    return;
  }

  @CordovaInstance({ sync: true })
  getFillColor(): string {
    return;
  }

  @CordovaInstance({ sync: true })
  getStrokeWidth(): number {
    return;
  }

  @CordovaInstance({ sync: true })
  getGeodesic(): boolean {
    return;
  }

  @CordovaInstance({ sync: true })
  getVisible(): boolean {
    return;
  }

  @CordovaInstance({ sync: true })
  getZIndex(): boolean {
    return;
  }

  @CordovaInstance({ sync: true })
  remove(): void {
  }

  @CordovaInstance({ sync: true })
  setPoints(points: Array<GoogleMapsLatLng>): void {
  }

  @CordovaInstance({ sync: true })
  setStrokeColor(strokeColor: string): void {
  }

  @CordovaInstance({ sync: true })
  setFillColor(fillColor: string): void {
  }

  @CordovaInstance({ sync: true })
  setStrokeWidth(strokeWidth: number): void {
  }

  @CordovaInstance({ sync: true })
  setVisible(visible: boolean): void {
  }

  @CordovaInstance({ sync: true })
  setZIndex(zIndex: number): void {
  }

  @CordovaInstance({ sync: true })
  setGeodesic(geodesic: boolean): void {
  }
}

/**
 * @private
 */
export interface GoogleMapsTileOverlayOptions {
  titleUrilFormat?: string;
  visible?: boolean;
  zIndex?: number;
  tileSize?: number;
  opacity?: number;
}

/**
 * @private
 */
export class GoogleMapsTileOverlay {

  constructor(private _objectInstance: any) {
  }

  @CordovaInstance({ sync: true })
  getVisible(): boolean {
    return;
  }

  @CordovaInstance({ sync: true })
  setVisible(visible: boolean): void {
  }

  @CordovaInstance({ sync: true })
  getFadeIn(): boolean {
    return;
  }

  @CordovaInstance({ sync: true })
  setFadeIn(fadeIn: boolean): void {
  }

  @CordovaInstance({ sync: true })
  getZIndex(): number {
    return;
  }

  @CordovaInstance({ sync: true })
  setZIndex(zIndex: number): void {
  }

  @CordovaInstance({ sync: true })
  getOpacity(): number {
    return;
  }

  @CordovaInstance({ sync: true })
  setOpacity(opacity: number): void {
  }

  @CordovaInstance({ sync: true })
  clearTileCache(): void {
  }

  @CordovaInstance({ sync: true })
  remove(): void {
  }

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

  constructor(private _objectInstance: any) {
  }

  @CordovaInstance({ sync: true })
  setBearing(bearing: number): void {
  }

  @CordovaInstance({ sync: true })
  getBearing(): number {
    return;
  }

  @CordovaInstance({ sync: true })
  setOpacity(opacity: number): void {
  }

  @CordovaInstance({ sync: true })
  getOpacity(): number {
    return;
  }

  @CordovaInstance({ sync: true })
  setVisible(visible: boolean): void {
  }

  @CordovaInstance({ sync: true })
  getVisible(): boolean {
    return;
  }

  @CordovaInstance({ sync: true })
  setImage(image: string): void {
  };

  @CordovaInstance({ sync: true })
  remove(): void {
  }

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

  constructor(private _objectInstance: any) {
  }

  @CordovaInstance({ sync: true })
  remove(): void {
  }

  @CordovaInstance({ sync: true })
  getOverlays(): Array<GoogleMapsPolyline | GoogleMapsPolygon | GoogleMapsMarker> {
    return;
  }
}

/**
 * @private
 */
export class GoogleMapsLatLngBounds {
  private _objectInstance: any;

  constructor(public southwestOrArrayOfLatLng: GoogleMapsLatLng | GoogleMapsLatLng[], public northeast?: GoogleMapsLatLng) {
    let args = !!northeast ? [southwestOrArrayOfLatLng, northeast] : southwestOrArrayOfLatLng;
    this._objectInstance = new plugin.google.maps.LatLngBounds(args);
  }

  @CordovaInstance({ sync: true })
  toString(): string {
    return;
  }

  @CordovaInstance({ sync: true })
  toUrlValue(precision?: number): string {
    return;
  }

  @CordovaInstance({ sync: true })
  extend(LatLng: GoogleMapsLatLng): void {
  }

  @CordovaInstance({ sync: true })
  contains(LatLng: GoogleMapsLatLng): boolean {
    return;
  }

  @CordovaInstance({ sync: true })
  getCenter(): GoogleMapsLatLng {
    return;
  }
}

/**
 * @private
 */
export class GoogleMapsLatLng {
  private _objectInstance: any;

  constructor(public lat: number, public lng: number) {
    this._objectInstance = new plugin.google.maps.LatLng(lat, lng);
  }

  equals(other: GoogleMapsLatLng): boolean {
    return this.lat === other.lat && this.lng === other.lng;
  }

  @CordovaInstance({ sync: true })
  toString(): string {
    return;
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
  position?: { lat: number; lng: number };
}
/**
 * @private
 */
export interface GeocoderResult {
  position?: { lat: number; lng: number };
  subThoroughfare?: string;
  thoroughfare?: string;
  locality?: string;
  adminArea?: string;
  postalCode?: string;
  country?: string;
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
  static geocode(request: GeocoderRequest): Promise<GeocoderResult[]> {
    return new Promise<GeocoderResult[]>((resolve, reject) => {
      if (!plugin || !plugin.google || !plugin.google.maps || !plugin.google.maps.Geocoder) reject({ error: 'plugin_not_installed' });
      else plugin.google.maps.Geocoder.geocode(request, resolve);
    });
  }
}
