import {Plugin, Cordova} from './plugin';
/**
 * @name Local Notifications
 *
 * Usage:
 * ```ts
 * // Schedule a single notification
 * LocalNotifications.schedule({
 *   id: 1,
 *   text: "Single Notification",
 *   sound: isAndroid? 'file://sound.mp3' : 'file://beep.caf'
 *   data: { secret: key }
 * });
 *
 *
 * // Schedule multiple notifications
 * LocalNotifications.schedule([{
 *    id: 1,
 *    text: "Multi Notification 1",
 *    sound: isAndroid ? 'file://sound.mp3' : 'file://beep.caf',
 *    data: { secret:key }
 *   },{
 *    id: 2,
 *    title: "Local Notification Example",
 *    text: "Multi Notification 2",
 *    icon: "http://example.com/icon.png"
 * }]);
 *
 *
 * // Schedule delayed notification
 * LocalNotifications.schedule({
 *   t ext: "Delayed Notification",
 *    at: new Date(new Date() + 3600),
 *    led: "FF0000",
 *    sound: null
 * });
 *
 */
@Plugin({
  plugin: 'cordova-plugin-local-notifications',
  pluginRef: 'cordova.plugins.notification.local'
})
export class LocalNotifications {

  @Cordova({
    sync: true
  })
  static schedule(options? : ScheduleOptions) : void {}


}

interface ScheduleOptions {

  /**
   * A unique identifier required to clear, cancel, update or retrieve the local notification in the future
   * Default: 0
   */
  id : number,

  /**
   * First row of the notification
   * Default: Empty string (iOS) or the app name (Android)
   */
  title : string,

  /**
   * Second row of the notification
   * Default: Empty string
   */
  text : string,

  /**
   * The interval at which to reschedule the local notification. That can be a value of second, minute, hour, day, week, month or year
   * Default: 0 (which means that the system triggers the local notification once)
   */
  every : string,

  /**
   * The date and time when the system should deliver the local notification. If the specified value is nil or is a date in the past, the local notification is delivered immediately.
   * Default: now ~ new Date()
   */
  at : any,
  firstAt : any,

  /**
   * The number currently set as the badge of the app icon in Springboard (iOS) or at the right-hand side of the local notification (Android)
   * Default: 0 (which means don't show a number)
   */
  badge : number,

  /**
   * Uri of the file containing the sound to play when an alert is displayed
   * Default: res://platform_default
   */
  sound : string,

  /**
   * Arbitrary data, objects will be encoded to JSON string
   * Default: null
   */
  data : any,

  /**
   * ANDROID ONLY
   * Uri of the icon that is shown in the ticker and notification
   * Default: res://icon
   */
  icon : string,

  /**
   * ANDROID ONLY
   * Uri of the resource (only res://) to use in the notification layouts. Different classes of devices may return different sizes
   * Default: res://ic_popup_reminder
   */
  smallIcon : string,


  /**
   * ANDROID ONLY
   * Ongoing notifications differ from regular notifications in the following ways:
   * - They are sorted above the regular notifications in the notification panel
   * - They do not have an 'X' close button, and are not affected by the "Clear all" button
   * Default: false
   */
  ongoing : boolean,

  /**
   * ANDROID ONLY
   * ARGB value that you would like the LED on the device to blink
   * Default: FFFFFF
   */
  led : string


}