var config = require('../config.json');
var projectPackage = require('../../package.json');
module.exports = function(gulp) {
  gulp.task('docs', [], function() {
    var Dgeni = require('dgeni');
    var semver = require('semver');
    try {
      var ionicPackage = require('./dgeni-config')(projectPackage.version);
      var dgeni = new Dgeni([ionicPackage]);
      return dgeni.generate();
    } catch (err) {
      console.log(err.stack);
    }
  });
}
