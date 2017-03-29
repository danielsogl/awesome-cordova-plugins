"use strict";
module.exports = function jekyll(renderDocsProcessor) {
  return {
    name: 'jekyll',
    description: 'Create jekyll includes',
    $runAfter: ['paths-computed'],
    $runBefore: ['rendering-docs'],
    $process: docs => {

      // pretty up and sort the docs object for menu generation
      docs = docs.filter(doc => (!!doc.name && !!doc.outputPath) || doc.docType === 'index-page');

      docs.sort((a, b) => {
        const textA = a.name ? a.name.toUpperCase() : '',
          textB = b.name ? b.name.toUpperCase() : '';

        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });

      docs.forEach(doc => {
        doc.outputPath = doc.outputPath.toLowerCase().replace(/\s/g, '-');
        doc.URL = doc.outputPath.replace('docs//', 'docs/')
          .replace('/index.md', '')
          .replace('content/', '');
      });

      // add side menu
      docs.push({
        docType: 'nativeMenu',
        id: 'native_menu',
        template: 'native_menu.template.html',
        outputPath: 'content/_includes/fluid/native_menu.html'
      });

      return docs;
    }
  };
};
