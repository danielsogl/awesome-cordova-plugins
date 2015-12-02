var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
var Calendar = (function () {
    function Calendar() {
    }
    Calendar.createCalendar = function (options) { };
    Calendar.deleteCalendar = function (calendarName) { };
    Calendar.getCalendarOptions = function () { };
    Calendar.createEvent = function (title, location, notes, startDate, endDate) { };
    Calendar.createEventWithOptions = function (title, location, notes, startDate, endDate, options) { };
    Calendar.createEventInteractively = function (title, location, notes, startDate, endDate) { };
    Calendar.createEventInteractivelyWithOptions = function (title, location, notes, startDate, endDate, options) { };
    Calendar.createEventInNamedCalendar = function (title, location, notes, startDate, endDate, calendarName) { };
    Calendar.findEvent = function (title, location, notes, startDate, endDate) { };
    Calendar.listEventsInRange = function (startDate, endDate) { };
    Calendar.listCalendars = function () { };
    Calendar.findAllEventsInNamedCalendar = function (calendarName) { };
    Calendar.modifyEvent = function (title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate) { };
    Calendar.modifyEventWithOptions = function (title, location, notes, startDate, endDate, newTitle, newEventLocation, newNotes, newStartDate, newEndDate, options) { };
    Calendar.deleteEvent = function (title, location, notes, startDate, endDate) { };
    Calendar.deleteEventFromNamedCalendar = function (title, location, notes, startDate, endDate, calendarName) { };
    Calendar.openCalendar = function (date) { };
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "createCalendar", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "deleteCalendar", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "getCalendarOptions", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "createEvent", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "createEventWithOptions", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "createEventInteractively", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "createEventInteractivelyWithOptions", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "createEventInNamedCalendar", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "findEvent", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "listEventsInRange", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "listCalendars", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "findAllEventsInNamedCalendar", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "modifyEvent", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "modifyEventWithOptions", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "deleteEvent", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "deleteEventFromNamedCalendar", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "openCalendar", null);
    Calendar = __decorate([
        plugin_1.Plugin({
            name: 'Calendar',
            plugin: 'cordova-plugin-calendar',
            pluginRef: 'plugins.calendar'
        })
    ], Calendar);
    return Calendar;
})();
exports.Calendar = Calendar;
//# sourceMappingURL=calendar.js.map