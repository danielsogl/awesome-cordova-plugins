import { Cordova, Plugin } from './plugin';

/**
 * @name Geofence
 * @description Monitors circular geofences around latitude/longitude coordinates, and sends a notification to the user when the boundary of a geofence is crossed. Notifications can be sent when the user enters and/or exits a geofence.
 * Geofences persist after device reboot. Geofences will be monitored even when the app is not running.
 * @usage
 * ```
 * import { Geofence } from 'ionic-native';
 * import { Platform } from  'ionic-angular'
 * ...
 *
 * constructor(private platform: Platform) {
 *   this.platform.ready().then(() => {
         // initialize the plugin
 *       Geofence.initialize().then(
 *         // resolved promise does not return a value
 *         () => console.log('Geofence Plugin Ready'),
 *         (err) => console.log(err)
 *       )
 *   })
 * }
 *  
 * private addGeofence() {
 *   //options describing geofence
 *   let fence = {
 *     id: "69ca1b88-6fbe-4e80-a4d4-ff4d3748acdb", //any unique ID
 *     latitude:       37.285951, //center of geofence radius
 *     longitude:      -121.936650,
 *     radius:         100, //radius to edge of geofence
 *     transitionType: 3, //see 'Transition Types' below
 *     notification: { //notification settings
 *         id:             1, //any unique ID
 *         title:          "You crossed a fence", //notification title
 *         text:           "You just arrived to Gliwice city center.", //notification body
 *         openAppOnClick: true //open app when notification is tapped
 *     }
 *   }
 *   
 *   Geofence.addOrUpdate(fence).then(
 *      () => console.log('Geofence added'),
 *      (err) => console.log('Geofence failed to add')
 *    ); 
 * }
 * 
 * ```
 * ### Transition Types ###
 * Transition type specifies whether the geofence should trigger when the user enters and/or leaves the geofence.
 *
 * #### Supported values ####
 * - 1: Enter
 * - 2: Leave
 * - 3: Both
 *
 * ### Defining a Geofence ###
 * Geofences are defined by an object that is passed to `addOrUpdate()`. Object properties are:
 * - id: Any unique ID for the geofence. This ID is used to remove and update a geofence
 * - latitude: Latitude coordinate of the center of the geofence radius
 * - longitude: Latitude coordinate of the center of the geofence radius
 * - radius: Radius from the center to the edge of the geofence
 * - transitionType: Type of geofence transition to monitor for. See 'Transition Types' above
 * - notification: Object. Options for defining the notification sent when a geofence is crossed
 *   - id: Any unique ID
 *   - title: Notification title
 *   - text: Notification body
 *   - openAppOnClick: Boolean. Whether to open the app when the notification is tapped by the user
 */
@Plugin({
  plugin: 'cordova-plugin-geofence',
  pluginRef: 'geofence',
  repo: 'https://github.com/cowbell/cordova-plugin-geofence/',
  platforms: ['Android', 'iOS', 'Windows Phone 8', 'Windows Phone']
})

export class Geofence {

  /**
   * Initializes the plugin. User will be prompted to allow the app to use location and notifications.
   *
   * @return {Promise<any>}
   */
  @Cordova()
  static initialize(): Promise<any> { return };
  
  /**
   * Adds a new geofence or array of geofences. For geofence object, see above.
   *
   * @return {Promise<any>}
   */
  @Cordova()
  static addOrUpdate(geofences: Object | Array<Object>): Promise<any> { return };
  
  /**
   * Removes a geofence or array of geofences. `geofenceID` corresponds to one or more IDs specified when the 
   * geofence was created.
   *
   * @return {Promise<any>}
   */
  @Cordova()
  static remove(geofenceId: string | Array<string>, onSuccess, onError): Promise<any> { return };
  
  /**
   * Removes all geofences.
   *
   * @return {Promise<any>}
   */
  @Cordova()
  static removeAll(): Promise<any> { return };
  
  /**
   * Returns an array of geofences currently being monitored.
   *
   * @return {Promise<Array<string>>}
   */
  @Cordova()
  static getWatched(): Promise<any> { return };

  /**
   * Called when a geofence is crossed in the direction specified by `TransitType`.
   *
   * @return {Promise<any>}
   */
  @Cordova()
  static onTrasitionReceived(geofences: string | Array<string>): Promise<any> { return };

  /**
   * Called when the user clicks a geofence notification. iOS and Android only.
   *
   * @return {Promise<Object>}
   */
  @Cordova()
  static onNotificationClicked(): Promise<Object> { return };

}