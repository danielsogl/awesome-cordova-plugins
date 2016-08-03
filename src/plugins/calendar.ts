import { Cordova, Plugin } from './plugin';


/**
 * @private
 */
export interface CalendarOptions {
  firstReminderMinutes?: number;
  secondReminderMinutes?: number;
  recurrence?: string; // options are: 'daily', 'weekly', 'monthly', 'yearly'
  recurrenceInterval?: number; // only used when recurrence is set
  recurrenceEndDate?: Date;
  calendarName?: string;
  calendarId?: number;
  url?: string;
}

/**
 * @name Calendar
 * @description
 * This plugin allows you to add events to the Calendar of the mobile device.
 *
 * Requires Cordova plugin: `cordova-plugin-calendar`. For more info, please see the [Calendar plugin docs](https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin).
 *
 *
 * @usage
 * ```
 * import {Calendar} from 'ionic-native';
 *
 *
 *
 * Calendar.createCalendar('MyCalendar').then(
 *   (msg) => { console.log(msg); },
 *   (err) => { console.log(err); }
 * );
 * ```
 *
 */
@Plugin({
  plugin: 'cordova-plugin-calendar',
  pluginRef: 'plugins.calendar',
  repo: 'https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin',
  platforms: ['Android', 'iOS']
})
export class Calendar {

  /**
   * This function checks if we have permission to read/write from/to the calendar.
   * The promise will resolve with `true` when:
   * - You're running on iOS, or
   * - You're targetting API level lower than 23, or
   * - You're using Android < 6, or
   * - You've already granted permission
   *
   * If this returns false, you should call `requestReadWritePermissions` function
   * @returns {Promise<boolean>}
   */
  @Cordova()
  static hasReadWritePermission(): Promise<boolean> { return; }

  /**
   * Check if we have read permission
   * @returns {Promise<boolean>}
   */
  @Cordova()
  static hasReadPermission(): Promise<boolean> { return; }

  /**
   * Check if we have write permission
   * @returns {Promise<boolean>}
   */
  @Cordova()
  static hasWritePermission(): Promise<boolean> { return; }

  /**
   * Request write permission
   * @returns {Promise<any>}
   */
  @Cordova()
  static requestWritePermission(): Promise<any> { return; }

  /**
   * Request read permission
   * @returns {Promise<any>}
   */
  @Cordova()
  static requestReadPermission(): Promise<any> { return; }

  /**
   * Requests read/write permissions
   * @returns {Promise<any>}
   */
  @Cordova()
  static requestReadWritePermission(): Promise<any> { return; }

  /**
   * Create a calendar. (iOS only)
   *
   * @param {string | Object} nameOrOptions  either a string name or a options object. If string, provide the calendar name. IF an object, provide a calendar name as a string and a calendar color in hex format as a string
   * @return {Promise} Returns a Promise
   */
  @Cordova()
  static createCalendar(
    nameOrOptions: string | { calendarName: string, calendarColor: string }
    ): Promise<any> { return; }

  /**
   * Delete a calendar. (iOS only)
   * @param {string} name  Name of the calendar to delete.
   * @return Returns a Promise
   */
  @Cordova()
  static deleteCalendar(name: string): Promise<any> { return; }

  /**
   * Returns the default calendar options.
   *
   * @return Returns an object with the default calendar options:
   *   firstReminderMinutes: 60,
   *   secondReminderMinutes: null,
   *   recurrence: null, // options are: 'daily', 'weekly', 'monthly', 'yearly'
   *   recurrenceInterval: 1, // only used when recurrence is set
   *   recurrenceEndDate: null,
   *   calendarName: null,
   *   calendarId: null,
   *   url: null
   */
  @Cordova({
    sync: true
  })
  static getCalendarOptions(): CalendarOptions {
    return {
      firstReminderMinutes: 60,
      secondReminderMinutes: null,
      recurrence: null,
      recurrenceInterval: 1,
      recurrenceEndDate: null,
      calendarName: null,
      calendarId: null,
      url: null
    };
  }

  /**
   * Silently create an event.
   * @param {string} [title]  The event title
   * @param {string} [location]  The event location
   * @param {string} [notes]  The event notes
   * @param {Date} [startDate]  The event start date
   * @param {Date} [endDate]  The event end date
   * @return Returns a Promise
   */
  @Cordova()
  static createEvent(
    title?: string,
    location?: string,
    notes?: string,
    startDate?: Date,
    endDate?: Date
    ): Promise<any> { return; }

  /**
   * Silently create an event with additional options.
   *
   * @param {string} [title]  The event title
   * @param {string} [location]  The event location
   * @param {string} [notes]  The event notes
   * @param {Date} [startDate]  The event start date
   * @param {Date} [endDate]  The event end date
   * @param {CalendarOptions} [options]  Additional options, see `getCalendarOptions`
   * @return Returns a Promise
   */
  @Cordova()
  static createEventWithOptions(
    title?: string,
    location?: string,
    notes?: string,
    startDate?: Date,
    endDate?: Date,
    options?: CalendarOptions
    ): Promise<any> { return; }

  /**
   * Interactively create an event.
   *
   * @param {string} [title]  The event title
   * @param {string} [location]  The event location
   * @param {string} [notes]  The event notes
   * @param {Date} [startDate]  The event start date
   * @param {Date} [endDate]  The event end date
   * @return Returns a Promise
   */
  @Cordova()
  static createEventInteractively(
    title?: string,
    location?: string,
    notes?: string,
    startDate?: Date,
    endDate?: Date
    ): Promise<any> { return; }

  /**
   * Interactively create an event with additional options.
   *
   * @param {string} [title]  The event title
   * @param {string} [location]  The event location
   * @param {string} [notes]  The event notes
   * @param {Date} [startDate]  The event start date
   * @param {Date} [endDate]  The event end date
   * @param {CalendarOptions} [options]  Additional options, see `getCalendarOptions`
   * @return Returns a Promise
   */
  @Cordova()
  static createEventInteractivelyWithOptions(
    title?: string,
    location?: string,
    notes?: string,
    startDate?: Date,
    endDate?: Date,
    options?: CalendarOptions
    ): Promise<any> { return; }

  // deprecated
  // @Cordova()
  // static createEventInNamedCalendar(
  //   title?: string,
  //   location?: string,
  //   notes?: string,
  //   startDate?: Date,
  //   endDate?: Date,
  //   calendarName?: string
  // ) {}

  /**
   * Find an event.
   *
   * @param {string} [title]  The event title
   * @param {string} [location]  The event location
   * @param {string} [notes]  The event notes
   * @param {Date} [startDate]  The event start date
   * @param {Date} [endDate]  The event end date
   * @return Returns a Promise
   */
  @Cordova()
  static findEvent(
    title?: string,
    location?: string,
    notes?: string,
    startDate?: Date,
    endDate?: Date
    ): Promise<any> { return; }

  /**
   * Find an event with additional options.
   * @param {string} [title]  The event title
   * @param {string} [location]  The event location
   * @param {string} [notes]  The event notes
   * @param {Date} [startDate]  The event start date
   * @param {Date} [endDate]  The event end date
   * @param {CalendarOptions} [options]  Additional options, see `getCalendarOptions`
   * @return Returns a Promise that resolves with the event, or rejects with an error.
   */
  @Cordova()
  static findEventWithOptions(
    title?: string,
    location?: string,
    notes?: string,
    startDate?: Date,
    endDate?: Date,
    options?: CalendarOptions
    ): Promise<any> { return; }

  /**
   * Find a list of events within the specified date range. (Android only)
   *
   * @param {Date} [startDate]  The start date
   * @param {Date} [endDate]  The end date
   * @return Returns a Promise that resolves with the list of events, or rejects with an error.
   */
  @Cordova()
  static listEventsInRange(startDate: Date, endDate: Date): Promise<any> { return; }

  /**
   * Get a list of all calendars.
   * @return A Promise that resolves with the list of calendars, or rejects with an error.
   */
  @Cordova()
  static listCalendars(): Promise<any> { return; }

  /**
   * Get a list of all future events in the specified calendar. (iOS only)
   * @return Returns a Promise that resolves with the list of events, or rejects with an error.
   */
  @Cordova()
  static findAllEventsInNamedCalendar(calendarName: string): Promise<any> { return; }

  /**
   * Modify an event. (iOS only)
   *
   * @param {string} [title]  The event title
   * @param {string} [location]  The event location
   * @param {string} [notes]  The event notes
   * @param {Date} [startDate]  The event start date
   * @param {Date} [endDate]  The event end date
   * @param {string} [newTitle]  The new event title
   * @param {string} [newLocation]  The new event location
   * @param {string} [newNotes]  The new event notes
   * @param {Date} [newStartDate]  The new event start date
   * @param {Date} [newEndDate]  The new event end date
   * @return Returns a Promise
   */
  @Cordova()
  static modifyEvent(
    title?: string,
    location?: string,
    notes?: string,
    startDate?: Date,
    endDate?: Date,
    newTitle?: string,
    newLocation?: string,
    newNotes?: string,
    newStartDate?: Date,
    newEndDate?: Date
    ): Promise<any> { return; }

  /**
   * Modify an event with additional options. (iOS only)
   *
   * @param {string} [title]  The event title
   * @param {string} [location]  The event location
   * @param {string} [notes]  The event notes
   * @param {Date} [startDate]  The event start date
   * @param {Date} [endDate]  The event end date
   * @param {string} [newTitle]  The new event title
   * @param {string} [newLocation]  The new event location
   * @param {string} [newNotes]  The new event notes
   * @param {Date} [newStartDate]  The new event start date
   * @param {Date} [newEndDate]  The new event end date
   * @param {CalendarOptions} [options]  Additional options, see `getCalendarOptions`
   * @return Returns a Promise
   */
  @Cordova()
  static modifyEventWithOptions(
    title?: string,
    location?: string,
    notes?: string,
    startDate?: Date,
    endDate?: Date,
    newTitle?: string,
    newLocation?: string,
    newNotes?: string,
    newStartDate?: Date,
    newEndDate?: Date,
    options?: CalendarOptions
    ) { return; }

  /**
   * Delete an event.
   *
   * @param {string} [title]  The event title
   * @param {string} [location]  The event location
   * @param {string} [notes]  The event notes
   * @param {Date} [startDate]  The event start date
   * @param {Date} [endDate]  The event end date
   * @return Returns a Promise
   */
  @Cordova()
  static deleteEvent(
    title?: string,
    location?: string,
    notes?: string,
    startDate?: Date,
    endDate?: Date
    ): Promise<any> { return; }

  /**
   * Delete an event from the specified Calendar. (iOS only)
   *
   * @param {string} [title]  The event title
   * @param {string} [location]  The event location
   * @param {string} [notes]  The event notes
   * @param {Date} [startDate]  The event start date
   * @param {Date} [endDate]  The event end date
   * @param {string} calendarName
   * @return Returns a Promise
   */
  @Cordova()
  static deleteEventFromNamedCalendar(
    title?: string,
    location?: string,
    notes?: string,
    startDate?: Date,
    endDate?: Date,
    calendarName?: string
    ): Promise<any> { return; }

  /**
   * Open the calendar at the specified date.
   * @param {Date} date The date you want to open the calendar on
   * @return {Promise<any>} Promise returns a promise
   */
  @Cordova()
  static openCalendar(date: Date): Promise<any> { return; }

}
