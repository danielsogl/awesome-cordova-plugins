"use strict";
module.exports = [
  {'name': 'advanced'},
  {'name': 'demo'},
  {'name': 'beta', transforms: (doc, tag, value) => typeof value !== 'undefined'}, // make the value true or undefined instead of '' or undefined
  {'name': 'usage'},
  {'name': 'hidden'}, // hide from docs
  {'name': 'classes'}, // related classes
  {'name': 'interfaces'}, // related interfaces
  {'name': 'paid', transforms: (doc, tag, value) => typeof value !== 'undefined'} // paid plugin, set value to true
];
