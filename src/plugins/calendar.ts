import {Plugin, Cordova} from './plugin';

export interface CalendarOptions {
  firstReminderMinutes?: number;
  secondReminderMinutes?: number;
  recurrence?: string, // options are: 'daily', 'weekly', 'monthly', 'yearly'
  recurrenceInterval?: number, // only used when recurrence is set
  recurrenceEndDate?: Date;
  calendarName?: string;
  calendarId?: number;
  url?: string;
}

export interface Calendar {
  id: number,
  name: string
}

/**
 * @name Calendar
 * @description
 * This plugin allows you to add events to the Calendar of the mobile device.
 *
 * Requires Cordova plugin: `cordova-plugin-calendar`. For more info, please see the [Calendar plugin docs](https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin).
 *
 */
@Plugin({
  name: 'Calendar',
  plugin: 'cordova-plugin-calendar',
  pluginRef: 'plugins.calendar',
  repo: 'https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin'
})
export class Calendar {
  /**
   * Create a calendar. (iOS only)
   *
   * @usage
   * ```
   * Calendar.createCalendar('MyCalendar').then(
   *   (msg) => { console.log(msg); },
   *   (err) => { console.log(err); }
   * );
   * ```
   *
   * @param {string | Object} nameOrOptions  either a string name or a options object.
   * options:
   *   calendarName: string  the name of the calendar
   *   calendarColor: string  the hex color of the calendar
   * @return Returns a Promise
   */
  @Cordova()
  static createCalendar(nameOrOptions: string | { calendarName: string, calendarColor: string }) {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  }

  /**
   * Delete a calendar. (iOS only)
   *
   * @usage
   * ```
   * Calendar.deleteCalendar('MyCalendar').then(
   *   (msg) => { console.log(msg); },
   *   (err) => { console.log(err); }
   * );
   * ```
   *
   * @param {string} name  Name of the calendar to delete.
   * @return Returns a Promise
   */
  @Cordova()
  static deleteCalendar(name: string) {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  }

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
    }
  }

  /**
   * Silently create an event.
   *
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
  ) {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  }

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
  ) {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  }

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
  ) {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  }

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
    title?:string,
    location?: string,
    notes?: string,
    startDate?: Date,
    endDate?: Date,
    options?: CalendarOptions
  ) {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  }

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
  ) {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  }

  /**
   * Find an event with additional options.
   *
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
  ) {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  }

  /**
   * Find a list of events within the specified date range. (Android only)
   *
   * @param {Date} [startDate]  The start date
   * @param {Date} [endDate]  The end date
   * @return Returns a Promise that resolves with the list of events, or rejects with an error.
   */
  @Cordova()
  static listEventsInRange(startDate: Date, endDate: Date) {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  }

  /**
   * Get a list of all calendars.
   * @return A Promise that resolves with the list of calendars, or rejects with an error.
   */
  @Cordova()
  static listCalendars(){
    return new Promise<any>((res, rej) => {});
  }

  /**
   * Get a list of all future events in the specified calendar. (iOS only)
   * @return Returns a Promise that resolves with the list of events, or rejects with an error.
   */
  @Cordova()
  static findAllEventsInNamedCalendar(calendarName: string) {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  }

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
  ) {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  }

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
   ) {
     // This Promise is replaced by one from the @Cordova decorator that wraps
     // the plugin's callbacks. We provide a dummy one here so TypeScript
     // knows that the correct return type is Promise, because there's no way
     // for it to know the return type from a decorator.
     // See https://github.com/Microsoft/TypeScript/issues/4881
     return new Promise<any>((res, rej) => {});
   }

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
  ) {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  }

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
 ) {
   // This Promise is replaced by one from the @Cordova decorator that wraps
   // the plugin's callbacks. We provide a dummy one here so TypeScript
   // knows that the correct return type is Promise, because there's no way
   // for it to know the return type from a decorator.
   // See https://github.com/Microsoft/TypeScript/issues/4881
   return new Promise<any>((res, rej) => {});
 }

  /**
   * Open the calendar at the specified date.
   * @return {Date} date
   */
  @Cordova()
  static openCalendar(date: Date) {
    // This Promise is replaced by one from the @Cordova decorator that wraps
    // the plugin's callbacks. We provide a dummy one here so TypeScript
    // knows that the correct return type is Promise, because there's no way
    // for it to know the return type from a decorator.
    // See https://github.com/Microsoft/TypeScript/issues/4881
    return new Promise<any>((res, rej) => {});
  }
}
