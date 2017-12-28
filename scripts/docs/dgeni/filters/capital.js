"use strict";
module.exports = {
  name: 'capital',
  process: str => str? str.charAt(0).toUpperCase() + str.substring(1) : ''
};
