"use strict";
module.exports = function markProperties() {
  return {
    name: 'mark-properties',
    $runBefore: ['rendering-docs'],
    $process: docs => docs.map(doc => {
      for (let i in doc.members) {
        if (doc.members.hasOwnProperty(i) && typeof doc.members[i].parameters === 'undefined') {
          doc.members[i].isProperty = true;
        }
      }
      return doc;
    })
  }
};
