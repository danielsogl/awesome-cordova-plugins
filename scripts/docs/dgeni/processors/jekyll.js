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

      docs.push({
        docType: 'class',
        URL: 'https://github.com/ionic-team/ionic-native-google-maps/blob/master/documents/README.md',
        name: 'Google Maps',
      });

      docs.sort((a, b) => {
        const textA = a.name ? a.name.toUpperCase() : '',
          textB = b.name ? b.name.toUpperCase() : '';

        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });

      docs.forEach(doc => {
        if (!doc.outputPath) {
          return;
        }

        doc.outputPath = doc.outputPath.toLowerCase().replace(/\s/g, '-');
        doc.URL = doc.outputPath.replace('docs//', 'docs/')
          .replace('/index.md', '')
          .replace('content/', '');
        // add trailing slash to plugin pages
        if(!doc.URL.endsWith("/") && !doc.URL.endsWith(".html")) {
          doc.URL = doc.URL + '/';
        }

        doc.URL = '/' + doc.URL;
      });

      const betaDocs = [];

      docs = docs.filter(doc => {
        if (doc.beta === true) {
          betaDocs.push(doc);
          return false;
        }
        return true;
      });

      docs = docs.concat(betaDocs);

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
