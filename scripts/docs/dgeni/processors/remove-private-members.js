"use strict";
module.exports = function removePrivateMembers() {
  return {
    name: 'remove-private-members',
    description: 'Remove member docs with @private tags',
    $runAfter: ['tags-parsed'],
    $runBefore: ['rendering-docs'],
    $process: docs => {
      docs.forEach(doc => {

        if (doc.members) {
          doc.members = doc.members.filter(member => !member.tags.tagsByName.get('hidden'));
        }

        if (doc.statics) {
          doc.statics = doc.statics.filter(staticMethod => !staticMethod.tags.tagsByName.get('hidden'));
        }

      });

      return docs;
    }
  };
};
