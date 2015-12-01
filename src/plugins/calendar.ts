import {Plugin, Cordova} from './plugin';

@Plugin({
  name: 'Calendar',
  plugin: 'cordova-plugin-calendar',
  pluginRef: 'plugins.calendar'
})
export class Calendar {
  @Cordova()
  static createCalendar(options:any) {}

  @Cordova()
  static deleteCalendar(calendarName:string) {}

  @Cordova()
  static getCalendarOptions() {}

  @Cordova()
  static createEvent(title, location, notes, startDate, endDate) {}

  @Cordova()
  static createEventWithOptions(title, location, notes, startDate, endDate, options) {}

  @Cordova()
  static createEventInteractively(title, location, notes, startDate, endDate) {}

  @Cordova()
  static createEventInteractivelyWithOptions(title, location, notes, startDate, endDate, options) {}

  @Cordova()
  static createEventInNamedCalendar(title, location, notes, startDate, endDate, calendarName) {}

  @Cordova()
  static findEvent(title, location, notes, startDate, endDate) {}

  @Cordova()
  static listEventsInRange(startDate:any, endDate:any) {}

  @Cordova()
  static listCalendars(){}

  @Cordova()
  static findAllEventsInNamedCalendar(calendarName:string) {}

  @Cordova()
  static modifyEvent(title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate) {}

  @Cordova()
  static modifyEventWithOptions(title, location, notes, startDate, endDate, newTitle, newEventLocation, newNotes, newStartDate, newEndDate, options) {}

  @Cordova()
  static deleteEvent(title, location, notes, startDate, endDate) {}

  @Cordova()
  static deleteEventFromNamedCalendar(title, location, notes, startDate, endDate, calendarName) {}

  @Cordova()
  static openCalendar(date) {}
}
