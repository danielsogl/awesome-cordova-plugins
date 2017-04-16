"use strict";
module.exports = {
  name: 'dashify',
  process: str => str? str.replace(/\s/g, '-') : ''
};
