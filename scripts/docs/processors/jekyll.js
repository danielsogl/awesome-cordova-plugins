module.exports = function jekyll(renderDocsProcessor) {
  return {
    name: 'jekyll',
    description: 'Create jekyll includes',
    $runAfter: ['paths-computed'],
    $runBefore: ['rendering-docs'],
    $process: function(docs) {
      var currentVersion = renderDocsProcessor.extraData.version.current.name;

      // pretty up and sort the docs object for menu generation
      docs = docs.filter(function(doc) {
        return (!!doc.name && !!doc.outputPath) || doc.docType === 'index-page';
      });
      docs.sort(function(a, b) {
        textA = a.name ? a.name.toUpperCase() : '';
        textB = b.name ? b.name.toUpperCase() : '';
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
      docs.forEach(function(doc, i) {
        doc.outputPath = doc.outputPath.toLowerCase().replace(' ', '-');
        docs[i].URL = doc.outputPath.replace('docs/v2//', 'docs/v2/')
                                    .replace('/index.md', '')
                                    .replace('content/', '');

        docs[i].demo = !!docs[i].demo;
      });

      docs.push({
        docType: 'native_menu-menu',
        id: 'native_menu-menu',
        template: 'native_menu.template.html',
        outputPath: 'content/_includes/v2_fluid/native_menu.html'
      });

      // returning docs will replace docs object in the next process
      return docs;
    }
  };
};
