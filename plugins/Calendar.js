"use strict";
function Calendar() {
}

Calendar.prototype.getCreateCalendarOptions = function () {
  return {
    calendarName: null,
    calendarColor: null // optional, the OS will choose one if left empty, example: pass "#FF0000" for red
  };
};

Calendar.prototype.hasReadPermission = function (callback) {
  };

Calendar.prototype.requestReadPermission = function (callback) {
  };

Calendar.prototype.hasWritePermission = function (callback) {
  };

Calendar.prototype.requestWritePermission = function (callback) {
  };

Calendar.prototype.hasReadWritePermission = function (callback) {
  };

Calendar.prototype.requestReadWritePermission = function (callback) {
  };

Calendar.prototype.createCalendar = function (calendarNameOrOptionsObject, successCallback, errorCallback) {
  var options;
  if (typeof calendarNameOrOptionsObject == "string") {
    options = {
      "calendarName": calendarNameOrOptionsObject
    };
  } else {
    options = calendarNameOrOptionsObject;
  }
  // merge passed options with defaults
  var mergedOptions = Calendar.prototype.getCreateCalendarOptions();
  for (var val in options) {
    if (options.hasOwnProperty(val)) {
      mergedOptions[val] = options[val];
    }
  }
  };

Calendar.prototype.deleteCalendar = function (calendarName, successCallback, errorCallback) {
  
    "calendarName": calendarName
  }]);
};

Calendar.prototype.openCalendar = function (date, successCallback, errorCallback) {
  // default: today
  if (!(date instanceof Date)) {
    date = new Date();
  }
  cordova.exec(successCallback, errorCallback, "Calendar", "openCalendar", [{
    "date": date.getTime()
  }]);
};

Calendar.prototype.getCalendarOptions = function () {
  return {
    firstReminderMinutes: 60,
    secondReminderMinutes: null,
    recurrence: null, // options are: 'daily', 'weekly', 'monthly', 'yearly'
    recurrenceInterval: 1, // only used when recurrence is set
    recurrenceEndDate: null,
    calendarName: null,
    calendarId: null,
    url: null
  };
};

/**
 * This method can be used if you want more control over the event details.
 * Pass in an options object which you can easily override as follow:
 *   var options = window.plugins.calendar.getCalendarOptions();
 *   options.firstReminderMinutes = 150;
 */
Calendar.prototype.createEventWithOptions = function (title, location, notes, startDate, endDate, options, successCallback, errorCallback) {
  if (!(startDate instanceof Date && endDate instanceof Date)) {
    errorCallback("startDate and endDate must be JavaScript Date Objects");
    return;
  }

  // merge passed options with defaults
  var mergedOptions = Calendar.prototype.getCalendarOptions();
  for (var val in options) {
    if (options.hasOwnProperty(val)) {
      mergedOptions[val] = options[val];
    }
  }
  if (options.recurrenceEndDate != null) {
    mergedOptions.recurrenceEndTime = options.recurrenceEndDate.getTime();
  }
  cordova.exec(successCallback, errorCallback, "Calendar", "createEventWithOptions", [{
    "title": title,
    "location": location,
    "notes": notes,
    "startTime": startDate instanceof Date ? startDate.getTime() : null,
    "endTime": endDate instanceof Date ? endDate.getTime() : null,
    "options": mergedOptions
  }]);
};

/**
 * @deprecated use createEventWithOptions instead
 */
Calendar.prototype.createEventInNamedCalendar = function (title, location, notes, startDate, endDate, calendarName, successCallback, errorCallback) {
  Calendar.prototype.createEventWithOptions(title, location, notes, startDate, endDate, {calendarName:calendarName}, successCallback, errorCallback);
};

Calendar.prototype.createEvent = function (title, location, notes, startDate, endDate, successCallback, errorCallback) {
  Calendar.prototype.createEventWithOptions(title, location, notes, startDate, endDate, {}, successCallback, errorCallback);
};

Calendar.prototype.createEventInteractively = function (title, location, notes, startDate, endDate, successCallback, errorCallback) {
  Calendar.prototype.createEventInteractivelyWithOptions(title, location, notes, startDate, endDate, {}, successCallback, errorCallback);
};

Calendar.prototype.createEventInteractivelyWithOptions = function (title, location, notes, startDate, endDate, options, successCallback, errorCallback) {
  // merge passed options with defaults
  var mergedOptions = Calendar.prototype.getCalendarOptions();
  for (var val in options) {
    if (options.hasOwnProperty(val)) {
      mergedOptions[val] = options[val];
    }
  }
  if (options.recurrenceEndDate != null) {
    mergedOptions.recurrenceEndTime = options.recurrenceEndDate.getTime();
  }
  cordova.exec(successCallback, errorCallback, "Calendar", "createEventInteractively", [{
    "title": title,
    "location": location,
    "notes": notes,
    "startTime": startDate instanceof Date ? startDate.getTime() : null,
    "endTime": endDate instanceof Date ? endDate.getTime() : null,
    "options": mergedOptions
  }])
};

Calendar.prototype.findEventWithOptions = function (title, location, notes, startDate, endDate, options, successCallback, errorCallback) {
  // merge passed options with defaults
  var mergedOptions = Calendar.prototype.getCalendarOptions();
  for (var val in options) {
    if (options.hasOwnProperty(val)) {
      mergedOptions[val] = options[val];
    }
  }
  if (options.recurrenceEndDate != null) {
    mergedOptions.recurrenceEndTime = options.recurrenceEndDate.getTime();
  }
  cordova.exec(successCallback, errorCallback, "Calendar", "findEventWithOptions", [{
    "title": title,
    "location": location,
    "notes": notes,
    "startTime": startDate instanceof Date ? startDate.getTime() : null,
    "endTime": endDate instanceof Date ? endDate.getTime() : null,
    "options": mergedOptions
  }])
};

Calendar.prototype.findEvent = function (title, location, notes, startDate, endDate, successCallback, errorCallback) {
  Calendar.prototype.findEventWithOptions(title, location, notes, startDate, endDate, {}, successCallback, errorCallback);
};

Calendar.prototype.findAllEventsInNamedCalendar = function (calendarName, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "Calendar", "findAllEventsInNamedCalendar", [{
    "calendarName": calendarName
  }]);
};

Calendar.prototype.deleteEvent = function (title, location, notes, startDate, endDate, successCallback, errorCallback) {
  if (!(startDate instanceof Date && endDate instanceof Date)) {
    errorCallback("startDate and endDate must be JavaScript Date Objects");
  }
  cordova.exec(successCallback, errorCallback, "Calendar", "deleteEvent", [{
    "title": title,
    "location": location,
    "notes": notes,
    "startTime": startDate instanceof Date ? startDate.getTime() : null,
    "endTime": endDate instanceof Date ? endDate.getTime() : null
  }])
};

Calendar.prototype.deleteEventFromNamedCalendar = function (title, location, notes, startDate, endDate, calendarName, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "Calendar", "deleteEventFromNamedCalendar", [{
    "title": title,
    "location": location,
    "notes": notes,
    "startTime": startDate instanceof Date ? startDate.getTime() : null,
    "endTime": endDate instanceof Date ? endDate.getTime() : null,
    "calendarName": calendarName
  }])
};

Calendar.prototype.modifyEventWithOptions = function (title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate, options, newOptions, successCallback, errorCallback) {
  if (!(newStartDate instanceof Date && newEndDate instanceof Date)) {
    errorCallback("newStartDate and newEndDate must be JavaScript Date Objects");
    return;
  }
  // merge passed options with defaults
  var mergedOptions = Calendar.prototype.getCalendarOptions();
  for (var val in options) {
    if (options.hasOwnProperty(val)) {
      mergedOptions[val] = options[val];
    }
  }
  if (options.recurrenceEndDate != null) {
    mergedOptions.recurrenceEndTime = options.recurrenceEndDate.getTime();
  }
  // and also merge passed newOptions with defaults
  var newMergedOptions = Calendar.prototype.getCalendarOptions();
  for (var val2 in newOptions) {
    if (newOptions.hasOwnProperty(val2)) {
      newMergedOptions[val2] = newOptions[val2];
    }
  }
  if (newOptions.recurrenceEndDate != null) {
    newMergedOptions.recurrenceEndTime = newOptions.recurrenceEndDate.getTime();
  }
  cordova.exec(successCallback, errorCallback, "Calendar", "modifyEventWithOptions", [{
    "title": title,
    "location": location,
    "notes": notes,
    "startTime": startDate instanceof Date ? startDate.getTime() : null,
    "endTime": endDate instanceof Date ? endDate.getTime() : null,
    "newTitle": newTitle,
    "newLocation": newLocation,
    "newNotes": newNotes,
    "newStartTime": newStartDate instanceof Date ? newStartDate.getTime() : null,
    "newEndTime": newEndDate instanceof Date ? newEndDate.getTime() : null,
    "options": mergedOptions,
    "newOptions": newMergedOptions
  }])
};

Calendar.prototype.modifyEvent = function (title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate, successCallback, errorCallback) {
  Calendar.prototype.modifyEventWithOptions(title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate, {}, successCallback, errorCallback);
};

Calendar.prototype.modifyEventInNamedCalendar = function (title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate, calendarName, successCallback, errorCallback) {
  var options = Calendar.prototype.getCalendarOptions();
  options.calendarName = calendarName;
  Calendar.prototype.modifyEventWithOptions(title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate, options, successCallback, errorCallback);
};

Calendar.prototype.listEventsInRange = function (startDate, endDate, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "Calendar", "listEventsInRange", [{
    "startTime": startDate instanceof Date ? startDate.getTime() : null,
    "endTime": endDate instanceof Date ? endDate.getTime() : null
  }])
};

Calendar.prototype.listCalendars = function (successCallback, errorCallback) {
  };

Calendar.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.calendar = new Calendar();
  return window.plugins.calendar;
};


module.exports = new Calendar();