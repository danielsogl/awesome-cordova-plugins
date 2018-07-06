var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Calendar
 * @description
 * This plugin allows you to add events to the Calendar of the mobile device.
 *
 * Requires Cordova plugin: `cordova-plugin-calendar`. For more info, please see the [Calendar plugin docs](https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin).
 *
 *
 * @usage
 * ```typescript
 * import { Calendar } from '@ionic-native/calendar';
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
var Calendar = (function (_super) {
    __extends(Calendar, _super);
    function Calendar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
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
    Calendar.prototype.hasReadWritePermission = function () { return; };
    /**
     * Check if we have read permission
     * @returns {Promise<boolean>}
     */
    Calendar.prototype.hasReadPermission = function () { return; };
    /**
     * Check if we have write permission
     * @returns {Promise<boolean>}
     */
    Calendar.prototype.hasWritePermission = function () { return; };
    /**
     * Request write permission
     * @returns {Promise<any>}
     */
    Calendar.prototype.requestWritePermission = function () { return; };
    /**
     * Request read permission
     * @returns {Promise<any>}
     */
    Calendar.prototype.requestReadPermission = function () { return; };
    /**
     * Requests read/write permissions
     * @returns {Promise<any>}
     */
    Calendar.prototype.requestReadWritePermission = function () { return; };
    /**
     * Create a calendar. (iOS only)
     *
     * @param {string | Object} nameOrOptions  either a string name or a options object. If string, provide the calendar name. IF an object, provide a calendar name as a string and a calendar color in hex format as a string
     * @returns {Promise<any>} Returns a Promise
     */
    Calendar.prototype.createCalendar = function (nameOrOptions) { return; };
    /**
     * Delete a calendar. (iOS only)
     * @param {string} name  Name of the calendar to delete.
     * @returns {Promise<any>} Returns a Promise
     */
    Calendar.prototype.deleteCalendar = function (name) { return; };
    /**
     * Returns the default calendar options.
     *
     * @return {CalendarOptions} Returns an object with the default calendar options
     */
    Calendar.prototype.getCalendarOptions = function () { return; };
    /**
     * Silently create an event.
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @returns {Promise<any>} Returns a Promise
     */
    Calendar.prototype.createEvent = function (title, location, notes, startDate, endDate) { return; };
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
    Calendar.prototype.createEventWithOptions = function (title, location, notes, startDate, endDate, options) { return; };
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
    Calendar.prototype.createEventInteractively = function (title, location, notes, startDate, endDate) { return; };
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
    Calendar.prototype.createEventInteractivelyWithOptions = function (title, location, notes, startDate, endDate, options) { return; };
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
    Calendar.prototype.findEvent = function (title, location, notes, startDate, endDate) { return; };
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
    Calendar.prototype.findEventWithOptions = function (title, location, notes, startDate, endDate, options) { return; };
    /**
     * Find a list of events within the specified date range. (Android only)
     *
     * @param {Date} [startDate]  The start date
     * @param {Date} [endDate]  The end date
     * @returns {Promise<any>} Returns a Promise that resolves with the list of events, or rejects with an error.
     */
    Calendar.prototype.listEventsInRange = function (startDate, endDate) { return; };
    /**
     * Get a list of all calendars.
     * @returns {Promise<any>} A Promise that resolves with the list of calendars, or rejects with an error.
     */
    Calendar.prototype.listCalendars = function () { return; };
    /**
     * Get a list of all future events in the specified calendar. (iOS only)
     * @returns {Promise<any>} Returns a Promise that resolves with the list of events, or rejects with an error.
     */
    Calendar.prototype.findAllEventsInNamedCalendar = function (calendarName) { return; };
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
    Calendar.prototype.modifyEvent = function (title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate) { return; };
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
    Calendar.prototype.modifyEventWithOptions = function (title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate, filterOptions, newOptions) { return; };
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
    Calendar.prototype.deleteEvent = function (title, location, notes, startDate, endDate) { return; };
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
    Calendar.prototype.deleteEventFromNamedCalendar = function (title, location, notes, startDate, endDate, calendarName) { return; };
    /**
     * Open the calendar at the specified date.
     * @param {Date} date The date you want to open the calendar on
     * @return {Promise<any>} Promise returns a promise
     */
    Calendar.prototype.openCalendar = function (date) { return; };
    return Calendar;
}(IonicNativePlugin));
Calendar.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Calendar.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Calendar.prototype, "hasReadWritePermission", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Calendar.prototype, "hasReadPermission", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Calendar.prototype, "hasWritePermission", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Calendar.prototype, "requestWritePermission", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Calendar.prototype, "requestReadPermission", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Calendar.prototype, "requestReadWritePermission", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Calendar.prototype, "createCalendar", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Calendar.prototype, "deleteCalendar", null);
__decorate([
    Cordova({
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], Calendar.prototype, "getCalendarOptions", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Date,
        Date]),
    __metadata("design:returntype", Promise)
], Calendar.prototype, "createEvent", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Date,
        Date, Object]),
    __metadata("design:returntype", Promise)
], Calendar.prototype, "createEventWithOptions", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Date,
        Date]),
    __metadata("design:returntype", Promise)
], Calendar.prototype, "createEventInteractively", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Date,
        Date, Object]),
    __metadata("design:returntype", Promise)
], Calendar.prototype, "createEventInteractivelyWithOptions", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Date,
        Date]),
    __metadata("design:returntype", Promise)
], Calendar.prototype, "findEvent", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Date,
        Date, Object]),
    __metadata("design:returntype", Promise)
], Calendar.prototype, "findEventWithOptions", null);
__decorate([
    Cordova({
        platforms: ['Android']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date, Date]),
    __metadata("design:returntype", Promise)
], Calendar.prototype, "listEventsInRange", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Calendar.prototype, "listCalendars", null);
__decorate([
    Cordova({
        platforms: ['iOS']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], Calendar.prototype, "findAllEventsInNamedCalendar", null);
__decorate([
    Cordova({
        platforms: ['iOS']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Date,
        Date, String, String, String, Date,
        Date]),
    __metadata("design:returntype", Promise)
], Calendar.prototype, "modifyEvent", null);
__decorate([
    Cordova({
        platforms: ['iOS']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Date,
        Date, String, String, String, Date,
        Date, Object, Object]),
    __metadata("design:returntype", Promise)
], Calendar.prototype, "modifyEventWithOptions", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Date,
        Date]),
    __metadata("design:returntype", Promise)
], Calendar.prototype, "deleteEvent", null);
__decorate([
    Cordova({
        platforms: ['iOS']
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Date,
        Date, String]),
    __metadata("design:returntype", Promise)
], Calendar.prototype, "deleteEventFromNamedCalendar", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", Promise)
], Calendar.prototype, "openCalendar", null);
Calendar = __decorate([
    Plugin({
        pluginName: 'Calendar',
        plugin: 'cordova-plugin-calendar',
        pluginRef: 'plugins.calendar',
        repo: 'https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin',
        platforms: ['Android', 'iOS']
    })
], Calendar);
export { Calendar };
//# sourceMappingURL=index.js.map