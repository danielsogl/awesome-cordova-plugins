var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
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
    Object.defineProperty(Calendar, "createCalendar",
        __decorate([
            plugin_1.Cordova()
        ], Calendar, "createCalendar", Object.getOwnPropertyDescriptor(Calendar, "createCalendar")));
    Object.defineProperty(Calendar, "deleteCalendar",
        __decorate([
            plugin_1.Cordova()
        ], Calendar, "deleteCalendar", Object.getOwnPropertyDescriptor(Calendar, "deleteCalendar")));
    Object.defineProperty(Calendar, "getCalendarOptions",
        __decorate([
            plugin_1.Cordova()
        ], Calendar, "getCalendarOptions", Object.getOwnPropertyDescriptor(Calendar, "getCalendarOptions")));
    Object.defineProperty(Calendar, "createEvent",
        __decorate([
            plugin_1.Cordova()
        ], Calendar, "createEvent", Object.getOwnPropertyDescriptor(Calendar, "createEvent")));
    Object.defineProperty(Calendar, "createEventWithOptions",
        __decorate([
            plugin_1.Cordova()
        ], Calendar, "createEventWithOptions", Object.getOwnPropertyDescriptor(Calendar, "createEventWithOptions")));
    Object.defineProperty(Calendar, "createEventInteractively",
        __decorate([
            plugin_1.Cordova()
        ], Calendar, "createEventInteractively", Object.getOwnPropertyDescriptor(Calendar, "createEventInteractively")));
    Object.defineProperty(Calendar, "createEventInteractivelyWithOptions",
        __decorate([
            plugin_1.Cordova()
        ], Calendar, "createEventInteractivelyWithOptions", Object.getOwnPropertyDescriptor(Calendar, "createEventInteractivelyWithOptions")));
    Object.defineProperty(Calendar, "createEventInNamedCalendar",
        __decorate([
            plugin_1.Cordova()
        ], Calendar, "createEventInNamedCalendar", Object.getOwnPropertyDescriptor(Calendar, "createEventInNamedCalendar")));
    Object.defineProperty(Calendar, "findEvent",
        __decorate([
            plugin_1.Cordova()
        ], Calendar, "findEvent", Object.getOwnPropertyDescriptor(Calendar, "findEvent")));
    Object.defineProperty(Calendar, "listEventsInRange",
        __decorate([
            plugin_1.Cordova()
        ], Calendar, "listEventsInRange", Object.getOwnPropertyDescriptor(Calendar, "listEventsInRange")));
    Object.defineProperty(Calendar, "listCalendars",
        __decorate([
            plugin_1.Cordova()
        ], Calendar, "listCalendars", Object.getOwnPropertyDescriptor(Calendar, "listCalendars")));
    Object.defineProperty(Calendar, "findAllEventsInNamedCalendar",
        __decorate([
            plugin_1.Cordova()
        ], Calendar, "findAllEventsInNamedCalendar", Object.getOwnPropertyDescriptor(Calendar, "findAllEventsInNamedCalendar")));
    Object.defineProperty(Calendar, "modifyEvent",
        __decorate([
            plugin_1.Cordova()
        ], Calendar, "modifyEvent", Object.getOwnPropertyDescriptor(Calendar, "modifyEvent")));
    Object.defineProperty(Calendar, "modifyEventWithOptions",
        __decorate([
            plugin_1.Cordova()
        ], Calendar, "modifyEventWithOptions", Object.getOwnPropertyDescriptor(Calendar, "modifyEventWithOptions")));
    Object.defineProperty(Calendar, "deleteEvent",
        __decorate([
            plugin_1.Cordova()
        ], Calendar, "deleteEvent", Object.getOwnPropertyDescriptor(Calendar, "deleteEvent")));
    Object.defineProperty(Calendar, "deleteEventFromNamedCalendar",
        __decorate([
            plugin_1.Cordova()
        ], Calendar, "deleteEventFromNamedCalendar", Object.getOwnPropertyDescriptor(Calendar, "deleteEventFromNamedCalendar")));
    Object.defineProperty(Calendar, "openCalendar",
        __decorate([
            plugin_1.Cordova()
        ], Calendar, "openCalendar", Object.getOwnPropertyDescriptor(Calendar, "openCalendar")));
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