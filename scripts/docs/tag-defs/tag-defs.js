module.exports = [
  {'name': 'advanced'},
  {'name': 'demo'},
  {'name': 'beta', transforms: function(doc, tag, value) {
    // make the value true or undefined instead of '' or undefined
    return typeof value !== 'undefined';
  }},
  {'name': 'usage'},
  {'name': 'classes'}, // related classes
  {'name': 'interfaces'} // related interfaces
];
