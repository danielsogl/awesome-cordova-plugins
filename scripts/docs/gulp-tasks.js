'use strict';
const config = require('./config.json'),
  projectPackage = require('../../package.json'),
  path = require('path'),
  fs = require('fs-extra'),
  Dgeni = require('dgeni');

module.exports = gulp => {
  gulp.task('docs', () => {
    try {
      const ionicPackage = require('./dgeni/dgeni-config')(projectPackage.version),
        dgeni = new Dgeni([ionicPackage]);

      return dgeni.generate().then(docs => console.log(docs.length + ' docs generated'));
    } catch (err) {
      console.log(err.stack);
    }
  });

  gulp.task('readmes', () => {
    fs.copySync(
      path.resolve(__dirname, '..', '..', 'README.md'),
      path.resolve(__dirname, '..', '..', config.pluginDir, 'core', 'README.md')
    );

    try {
      const ionicPackage = require('./dgeni/dgeni-readmes-config')(projectPackage.version),
        dgeni = new Dgeni([ionicPackage]);
      return dgeni.generate().then(docs => console.log(docs.length + ' README files generated'));
    } catch (err) {
      console.log(err.stack);
    }
  });
};
