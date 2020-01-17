"use strict";
module.exports = function readmes(renderDocsProcessor) {
  return {
    name: 'readmes',
    description: 'Create jekyll includes',
    $runAfter: ['paths-computed'],
    $runBefore: ['rendering-docs'],
    $process: docs => {
      // pretty up and sort the docs object for menu generation
      docs = docs.filter(doc => (!!doc.name && !!doc.outputPath) || doc.docType === 'index-page');

      docs.forEach(doc => {
        doc.outputPath = doc.outputPath.replace('src/@ionic-native/', '');
      });

      return docs;
    }
  };
};
