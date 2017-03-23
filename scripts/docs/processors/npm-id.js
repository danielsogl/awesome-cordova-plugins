module.exports = function npmId(renderDocsProcessor) {
  return {
    name: 'npm-id',
    $runAfter: ['paths-computed'],
    $runBefore: ['rendering-docs'],
    $process: function(docs) {
      var currentVersion = renderDocsProcessor.extraData.version.current.name;

      // pretty up and sort the docs object for menu generation
      docs = docs.filter(function(doc) {
        return (!!doc.name && !!doc.outputPath) || doc.docType === 'index-page';
      });

      docs.forEach(function(doc, i) {
        doc.npmId = doc.id.match(/plugins\/(.*)\/index/)[1];
        console.log('@ionic-native/' + doc.npmId);
      });

      // returning docs will replace docs object in the next process
      return docs;
    }
  };
};
