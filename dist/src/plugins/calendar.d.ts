export declare class Calendar {
    static createCalendar(options: any): void;
    static deleteCalendar(calendarName: string): void;
    static getCalendarOptions(): void;
    static createEvent(title: any, location: any, notes: any, startDate: any, endDate: any): void;
    static createEventWithOptions(title: any, location: any, notes: any, startDate: any, endDate: any, options: any): void;
    static createEventInteractively(title: any, location: any, notes: any, startDate: any, endDate: any): void;
    static createEventInteractivelyWithOptions(title: any, location: any, notes: any, startDate: any, endDate: any, options: any): void;
    static createEventInNamedCalendar(title: any, location: any, notes: any, startDate: any, endDate: any, calendarName: any): void;
    static findEvent(title: any, location: any, notes: any, startDate: any, endDate: any): void;
    static listEventsInRange(startDate: any, endDate: any): void;
    static listCalendars(): void;
    static findAllEventsInNamedCalendar(calendarName: string): void;
    static modifyEvent(title: any, location: any, notes: any, startDate: any, endDate: any, newTitle: any, newLocation: any, newNotes: any, newStartDate: any, newEndDate: any): void;
    static modifyEventWithOptions(title: any, location: any, notes: any, startDate: any, endDate: any, newTitle: any, newEventLocation: any, newNotes: any, newStartDate: any, newEndDate: any, options: any): void;
    static deleteEvent(title: any, location: any, notes: any, startDate: any, endDate: any): void;
    static deleteEventFromNamedCalendar(title: any, location: any, notes: any, startDate: any, endDate: any, calendarName: any): void;
    static openCalendar(date: any): void;
}
