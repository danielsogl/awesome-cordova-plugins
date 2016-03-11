'use strict';
var exec = require('child_process').exec;
var fs = require('fs');
var xml2js = require('xml2js');
var plugin, property;

// Read the compiled plugin files
fs.readdir('dist/plugins', function(err, files){
    // Loop through all compiled files
    files.forEach(function(file){
        // Look for compiled JS files only
        if(/^((.*).js)$/.test(file)) {

            plugin = require('./dist/plugins/' + file);

            if (plugin.hasOwnProperty('plugin')) {
                processPlugin(plugin);
            } else {
                for (property in plugin) {
                    if (plugin[property].hasOwnProperty('plugin')) {
                        processPlugin(plugin[property]);
                    }
                }
            }

            function processPlugin(obj) {
                // Ignore if it's a URL
                if (/^(https:\/\/(.*))$/.test(obj.plugin)) console.log("Found a url!", obj.plugin);
                // TODO report the error during the tests somehow
                else {
                    let pluginPath = "./node_modules/" + obj.plugin + '/';

                    if(fs.lstatSync(pluginPath).isDirectory()) console.log("Plugin already installed at " + pluginPath);
                    else {
                        exec('npm install ' + obj.plugin, function(error, stdout, stderr){
                            if(error) console.warn(error);
                            if(stderr) console.warn(stderr);
                            if(stdout) console.log(stdout);
                        });
                    }
                    // TODO perhaps let everything wait till exec() is done ... to make sure that we have the files needed in node_modules



                    fs.readFile(pluginPath + 'plugin.xml', function (err, data) {
                        var parser = new xml2js.Parser();

                        parser.parseString(data, function (err, result) {

                            let pathToJS = (result['plugin'].hasOwnProperty('js-module')) ? pluginPath + result["plugin"]["js-module"][0]['$']['src'] : pluginPath + result['plugin']['platform'][0]['js-module'][0]['$']['src'];

                            try {
                                // Plugin uses module.exports, just use the exported methods to create mocks

                                let pluginJS = require(pathToJS);
                                console.log('########## ' + obj.plugin + ' uses module.exports');

                            }catch(e){
                                // Plugin calls cordova method, need to search for methods

                                fs.readFile(pathToJS, function(err, data){

                                    //console.log(data);

                                });
                            }
                        })
                    });
                }
            }
        }
    })
});