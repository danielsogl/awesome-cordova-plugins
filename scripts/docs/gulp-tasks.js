var config = require('../config.json');
var projectPackage = require('../../package.json');
var path = require('path');
var fs = require('fs-extra-promise').useFs(require('fs-extra'));

module.exports = function(gulp) {
  gulp.task('docs', [], function() {
    var Dgeni = require('dgeni');
    var semver = require('semver');
    try {
      var ionicPackage = require('./dgeni-config')(projectPackage.version);
      var dgeni = new Dgeni([ionicPackage]);
      return dgeni.generate().then(function(docs) {
        console.log(docs.length + ' docs generated');
      });
    } catch (err) {
      console.log(err.stack);
    }
  });

  gulp.task('readmes', [], function() {
    var Dgeni = require('dgeni');
    var semver = require('semver');

    fs.copySync(path.resolve(__dirname, '..', '..', 'README.md'), path.resolve(__dirname, '..', '..', config.pluginDir, 'core', 'README.md'));

    try {
      var ionicPackage = require('./dgeni-readmes-config')(projectPackage.version);
      var dgeni = new Dgeni([ionicPackage]);
      return dgeni.generate().then(function(docs) {
        console.log(docs.length + ' README files generated');
      });
    } catch (err) {
      console.log(err.stack);
    }
  });
}
