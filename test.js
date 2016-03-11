'use strict';
console.log("I'm alive");

var exec = require('child_process').exec;
var fs = require('fs');
var xml2js = require('xml2js');
var plugin, property;

// Read the compiled plugin files
fs.readdir('dist/plugins', function(err, files){
var found = false;
    // Loop through all compiled files
    files.forEach(function(file){
//if(found) return;
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
                found = true;
                // Ignore if it's a URL
                if (/^(https:\/\/(.*))$/.test(obj.plugin)) console.log("Found a url!", obj.plugin);
                // TODO report the error during the tests somehow
                else {
                    let pluginPath = "./node_modules/" + obj.plugin + '/';
                    fs.readFile(pluginPath + 'plugin.xml', function (err, data) {
                        var parser = new xml2js.Parser();

                        parser.parseString(data, function (err, result) {

                            try {

                                let pathToJS = pluginPath + result["plugin"]["js-module"][0]['$']['src'];

                                //console.log(pathToJS);

                                try {
                                    // Plugin uses module.exports
                                    let pluginJS = require(pathToJS);
                                    console.log('########## ' + obj.plugin + ' uses module.exports');

                                }catch(e){
                                    // Plugin calls cordova.addConstructor

                                    fs.readFile(pathToJS, function(err, data){

                                        //console.log(data);

                                    });

                                }

                            }catch (e){
                                console.log("@@ IM STILL HERE", obj.plugin, e);
                            }

                        })


                    });

                }

                //exec('npm install ' + obj.plugin, function(error, stdout, stderr){
                //    if(error) console.warn(error);
                //    if(stderr) console.warn(stderr);
                //    if(stdout) console.log(stdout);
                //});

            }
        }


    })
});