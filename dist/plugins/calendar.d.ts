export interface CalendarOptions {
    firstReminderMinutes?: number;
    secondReminderMinutes?: number;
    recurrence?: string;
    recurrenceInterval?: number;
    recurrenceEndDate?: Date;
    calendarName?: string;
    calendarId?: number;
    url?: string;
}
export interface Calendar {
    id: number;
    name: string;
}
/**
 * This plugin allows you to add events to the Calendar of the mobile device.
 *
 * Requires Cordova plugin: `cordova-plugin-calendar`. For more info, please see the [Calendar plugin docs](https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin).
 *
 */
export declare class Calendar {
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
    static createCalendar(nameOrOptions: string | {
        calendarName: string;
        calendarColor: string;
    }): Promise<any>;
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
    static deleteCalendar(name: string): Promise<any>;
    /**
     * Returns the default calendar options.
     *
     * @return Returns an object with the default calendar options
     * ```
     * {
     *   firstReminderMinutes: 60,
     *   secondReminderMinutes: null,
     *   recurrence: null, // options are: 'daily', 'weekly', 'monthly', 'yearly'
     *   recurrenceInterval: 1, // only used when recurrence is set
     *   recurrenceEndDate: null,
     *   calendarName: null,
     *   calendarId: null,
     *   url: null
     * }
     * ```
     */
    static getCalendarOptions(): CalendarOptions;
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
    static createEvent(title?: string, location?: string, notes?: string, startDate?: Date, endDate?: Date): Promise<any>;
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
    static createEventWithOptions(title?: string, location?: string, notes?: string, startDate?: Date, endDate?: Date, options?: CalendarOptions): Promise<any>;
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
    static createEventInteractively(title?: string, location?: string, notes?: string, startDate?: Date, endDate?: Date): Promise<any>;
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
    static createEventInteractivelyWithOptions(title?: string, location?: string, notes?: string, startDate?: Date, endDate?: Date, options?: CalendarOptions): Promise<any>;
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
    static findEvent(title?: string, location?: string, notes?: string, startDate?: Date, endDate?: Date): Promise<any>;
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
    static findEventWithOptions(title?: string, location?: string, notes?: string, startDate?: Date, endDate?: Date, options?: CalendarOptions): Promise<any>;
    /**
     * Find a list of events within the specified date range. (Android only)
     *
     * @param {Date} [startDate]  The start date
     * @param {Date} [endDate]  The end date
     * @return Returns a Promise that resolves with the list of events, or rejects with an error.
     */
    static listEventsInRange(startDate: Date, endDate: Date): Promise<any>;
    /**
     * Get a list of all calendars.
     * @return A Promise that resolves with the list of calendars, or rejects with an error.
     */
    static listCalendars(): Promise<any>;
    /**
     * Get a list of all future events in the specified calendar. (iOS only)
     * @return Returns a Promise that resolves with the list of events, or rejects with an error.
     */
    static findAllEventsInNamedCalendar(calendarName: string): Promise<any>;
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
    static modifyEvent(title?: string, location?: string, notes?: string, startDate?: Date, endDate?: Date, newTitle?: string, newLocation?: string, newNotes?: string, newStartDate?: Date, newEndDate?: Date): Promise<any>;
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
    static modifyEventWithOptions(title?: string, location?: string, notes?: string, startDate?: Date, endDate?: Date, newTitle?: string, newLocation?: string, newNotes?: string, newStartDate?: Date, newEndDate?: Date, options?: CalendarOptions): Promise<any>;
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
    static deleteEvent(title?: string, location?: string, notes?: string, startDate?: Date, endDate?: Date): Promise<any>;
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
    static deleteEventFromNamedCalendar(title?: string, location?: string, notes?: string, startDate?: Date, endDate?: Date, calendarName?: string): Promise<any>;
    /**
     * Open the calendar at the specified date.
     * @return {Date} date
     */
    static openCalendar(date: Date): Promise<any>;
}
