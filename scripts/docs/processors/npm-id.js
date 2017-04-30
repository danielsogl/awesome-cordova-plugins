"use strict";
module.exports = function npmId(renderDocsProcessor) {
  return {
    name: 'npm-id',
    $runAfter: ['paths-computed'],
    $runBefore: ['rendering-docs'],
    $process: docs => {
      // pretty up and sort the docs object for menu generation
      docs = docs.filter(function(doc) {
        return (!!doc.name && !!doc.outputPath) || doc.docType === 'index-page';
      });

      docs.forEach(doc => {
        doc.npmId = doc.id.match(/plugins\/(.*)\/index/)[1];
      });

      return docs;
    }
  };
};
