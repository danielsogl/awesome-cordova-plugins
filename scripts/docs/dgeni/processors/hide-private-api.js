"use strict";
module.exports = function removePrivateApi() {
  return {
    name: 'remove-private-api',
    description: 'Prevent the private apis from being rendered',
    $runBefore: ['rendering-docs'],
    $process: docs => docs.filter(doc => !doc.private && (!doc.tags || !doc.tags.tagsByName.get('hidden')))
  };
};
