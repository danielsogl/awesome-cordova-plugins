"use strict";
module.exports = function parseOptional() {
  return {
    $runBefore: ['rendering-docs'],
    $process: docs => {
      docs.forEach(doc => {
        if (doc.members && doc.members.length) {
          for (let i in doc.members) {
            if (doc.members[i].params && doc.members[i].params.length) {
              for (let ii in doc.members[i].params) {
                if (doc.members[i].params[ii].optional) {
                  doc.members[i].params[ii].description += '<strong class="tag">Optional</strong>';
                }
              }
            }
          }
        }
      });
      return docs;
    }
  }
};
