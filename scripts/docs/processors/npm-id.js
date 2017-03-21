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
        doc.npmId = doc.outputPath.replace('/README.md', '') // for readmes
          .replace('@ionic-native/plugins/','') // for readmes
          .replace('content/docs/v2/native/', '') // for docs
          .replace('/index.md', ''); // for docs
      });

      // returning docs will replace docs object in the next process
      return docs;
    }
  };
};
