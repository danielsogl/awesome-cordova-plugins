import { Injectable } from '@angular/core';
import { Cordova, Plugin } from '@ionic-native/core';

export interface CalendarOptions {

  /**
   * Id
   */
  id?: string;

  /**
   *
   */
  firstReminderMinutes?: number;

  /**
   *
   */
  secondReminderMinutes?: number;

  /**
   * Recurrence. Can be set to `daily`, `weekly`, `monthly` or `yearly`
   */
  recurrence?: string;

  /**
   * Recurrence interval. Valid only when `recurrence` option is set.
   */
  recurrenceInterval?: number;

  /**
   * Recurrence end date. Valid only when `recurrence` option is set.
   */
  recurrenceEndDate?: Date;

  /**
   * Calendar name. Ths is supported by `iOS` only.
   */
  calendarName?: string;

  /**
   * Calendar id
   */
  calendarId?: number;

  /**
   * URL
   */
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
 * import {Calendar} from '@ionic-native/calendar';
 *
 * constructor(private calendar: Calendar) { }
 *
 *
 * this.calendar.createCalendar('MyCalendar').then(
 *   (msg) => { console.log(msg); },
 *   (err) => { console.log(err); }
 * );
 * ```
 * @interfaces
 * CalendarOptions
 */
@Plugin({
  pluginName: 'Calendar',
  plugin: 'cordova-plugin-calendar',
  pluginRef: 'plugins.calendar',
  repo: 'https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class Calendar {

  /**
   * This function checks if we have permission to read/write from/to the calendar.
   * The promise will resolve with `true` when:
   * - You're running on iOS, or
   * - You're targetting API level lower than 23, or
   * - You're using Android < 6, or
   * - You've already granted permission
   *
   * If this returns false, you should call the `requestReadWritePermission` function
   * @returns {Promise<boolean>}
   */
  @Cordova()
  hasReadWritePermission(): Promise<boolean> { return; }

  /**
   * Check if we have read permission
   * @returns {Promise<boolean>}
   */
  @Cordova()
  hasReadPermission(): Promise<boolean> { return; }

  /**
   * Check if we have write permission
   * @returns {Promise<boolean>}
   */
  @Cordova()
  hasWritePermission(): Promise<boolean> { return; }

  /**
   * Request write permission
   * @returns {Promise<any>}
   */
  @Cordova()
  requestWritePermission(): Promise<any> { return; }

  /**
   * Request read permission
   * @returns {Promise<any>}
   */
  @Cordova()
  requestReadPermission(): Promise<any> { return; }

  /**
   * Requests read/write permissions
   * @returns {Promise<any>}
   */
  @Cordova()
  requestReadWritePermission(): Promise<any> { return; }

  /**
   * Create a calendar. (iOS only)
   *
   * @param {string | Object} nameOrOptions  either a string name or a options object. If string, provide the calendar name. IF an object, provide a calendar name as a string and a calendar color in hex format as a string
   * @returns {Promise<any>} Returns a Promise
   */
  @Cordova()
  createCalendar(nameOrOptions: string | any): Promise<any> { return; }

  /**
   * Delete a calendar. (iOS only)
   * @param {string} name  Name of the calendar to delete.
   * @returns {Promise<any>} Returns a Promise
   */
  @Cordova()
  deleteCalendar(name: string): Promise<any> { return; }

  /**
   * Returns the default calendar options.
   *
   * @return {CalendarOptions} Returns an object with the default calendar options
   */
  @Cordova({
    sync: true
  })
  getCalendarOptions(): CalendarOptions { return; }

  /**
   * Silently create an event.
   * @param {string} [title]  The event title
   * @param {string} [location]  The event location
   * @param {string} [notes]  The event notes
   * @param {Date} [startDate]  The event start date
   * @param {Date} [endDate]  The event end date
   * @returns {Promise<any>} Returns a Promise
   */
  @Cordova()
  createEvent(
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
   * @returns {Promise<any>} Returns a Promise
   */
  @Cordova()
  createEventWithOptions(
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
   * @returns {Promise<any>} Returns a Promise
   */
  @Cordova()
  createEventInteractively(
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
   * @returns {Promise<any>}
   */
  @Cordova()
  createEventInteractivelyWithOptions(
    title?: string,
    location?: string,
    notes?: string,
    startDate?: Date,
    endDate?: Date,
    options?: CalendarOptions
    ): Promise<any> { return; }

  /**
   * Find an event.
   *
   * @param {string} [title]  The event title
   * @param {string} [location]  The event location
   * @param {string} [notes]  The event notes
   * @param {Date} [startDate]  The event start date
   * @param {Date} [endDate]  The event end date
   * @returns {Promise<any>}
   */
  @Cordova()
  findEvent(
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
   * @returns {Promise<any>} Returns a Promise that resolves with the event, or rejects with an error.
   */
  @Cordova()
  findEventWithOptions(
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
   * @returns {Promise<any>} Returns a Promise that resolves with the list of events, or rejects with an error.
   */
  @Cordova({
    platforms: ['Android']
  })
  listEventsInRange(startDate: Date, endDate: Date): Promise<any> { return; }

  /**
   * Get a list of all calendars.
   * @returns {Promise<any>} A Promise that resolves with the list of calendars, or rejects with an error.
   */
  @Cordova()
  listCalendars(): Promise<any> { return; }

  /**
   * Get a list of all future events in the specified calendar. (iOS only)
   * @returns {Promise<any>} Returns a Promise that resolves with the list of events, or rejects with an error.
   */
  @Cordova({
    platforms: ['iOS']
  })
  findAllEventsInNamedCalendar(calendarName: string): Promise<any> { return; }

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
  @Cordova({
    platforms: ['iOS']
  })
  modifyEvent(
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
   * @param {CalendarOptions} [filterOptions] Event Options, see `getCalendarOptions`
   * @param {CalendarOptions} [newOptions]  New event options, see `getCalendarOptions`
   * @return Returns a Promise
   */
  @Cordova({
    platforms: ['iOS']
  })
  modifyEventWithOptions(
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
    filterOptions?: CalendarOptions,
    newOptions?: CalendarOptions
    ): Promise<any> { return; }

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
  deleteEvent(
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
  @Cordova({
    platforms: ['iOS']
  })
  deleteEventFromNamedCalendar(
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
  openCalendar(date: Date): Promise<any> { return; }

}
