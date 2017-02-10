var prompt = require('prompt'),
  colors = require('colors'),
  exec = require('child_process').exec;

module.exports = (function(){

  var _self = this;
  this.varValues = null;

  this.install = function(pluginConfig) {
    this.pluginConfig = pluginConfig;
    console.log('\n\n-- Initializing Ionic Native plugin installer --'.gray);
    console.log('\nInstalling plugin: '.green + pluginConfig.name);

    if (!pluginConfig || !pluginConfig.name || !pluginConfig.locator) {
      console.log('\nInvalid configuration file. Exiting Ionic Native installer.'.red);
      return;
    }

    if (pluginConfig.variables) {
      this.processVariables();
    } else {
      this.execInstall();
    }
  };

  this.processVariables = function() {
    console.log('\nThis plugin requires variables to install. Please specify values for these variables to complete the process.'.green);

    prompt.message = null;
    prompt.delimiter = ': ';
    prompt.colors = false;

    prompt.get(this.pluginConfig.variables, function(err, result) {
      if (err) {
        console.log('\n\nAn error occurred while processing your input. Please try again.'.red);
      } else {
        _self.confirmValues(result);
      }
    });
  };

  this.confirmValues = function(values) {
    prompt.message = '';
    prompt.getInput('\nAre you sure you want to continue with the values you provided? (Y/n)'.green, function(err, result) {
      if (!result || result.toLowerCase() == 'y') {
        _self.varValues = values;
        _self.execInstall();
      } else {
        _self.processVariables();
      }
    });
  };

  this.parseValues = function() {
    if (!this.varValues) return '';
    var args = '';
    for (var prop in this.varValues) {
      args += ' --variable ';
      args += prop;
      args += '=';

      if (typeof this.varValues[prop] === 'string') {
        this.varValues[prop] = this.varValues[prop].trim();
      }

      if (/\s/g.test(this.varValues[prop]) && this.varValues[prop].substr(0,1).indexOf(['\'', '"']) === -1) {
        // has whitespace, and not quoted
        this.varValues[prop] = '"' + this.varValues[prop] + '"';
      }

      args += this.varValues[prop];
    }
    return args;
  };

  this.execInstall = function() {
    var installCommand = 'ionic plugin add ' + this.pluginConfig.locator;
    if (this.varValues) {
      installCommand += this.parseValues();
    }
    exec(installCommand, function(err, stdout, stderr) {
      if (err || stderr) {
        console.log('\nAn error occurred while trying to install the plugin. Please install the plugin manually or re-install this package to try again.'.red);
      } else {
        var message = '\n\n' + _self.pluginConfig.name + ' plugin was successfully installed! Happy coding!';
        console.log(message.green);
      }
    });
  };

  return this;

})();
