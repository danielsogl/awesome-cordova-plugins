'use strict';
var exec = require('child_process').execSync;
var fs = require('fs');
var xml2js = require('xml2js');
var plugin, property, functions = [], pluginCount = 0, completedPluginsCount = 0, window = {};

// Read the compiled plugin files
fs.readdir('dist/plugins', function(err, files){
    // Loop through all compiled files
    files.forEach(function(file){
        // Look for compiled JS files only
        if(/^((.*).js)$/.test(file)) {

            plugin = require('./dist/plugins/' + file);

            if (plugin.hasOwnProperty('plugin')) {
                installPlugin(plugin);
            } else {
                for (property in plugin) {
                    if (plugin[property].hasOwnProperty('plugin')) {
                        installPlugin(plugin[property]);
                    }
                }
            }
        }
    })
});

function installPlugin(pluginObject) {
    // Ignore if it's a URL
    if (/^(https:\/\/(.*))$/.test(pluginObject.plugin)) console.log("Found a url!", pluginObject.plugin);
    // TODO report the error during the tests somehow
    else {
        pluginCount++;
        let pluginPath = "./node_modules/" + pluginObject.plugin + '/';
        fs.exists(pluginPath, function(exists){
            if(exists) processPlugin(pluginPath, pluginObject);
            else {
                //console.log("Plugin not installed, going to install it now");
                console.log(exec('npm install ' + pluginObject.plugin).toString());
            }
        });
    }
}

function processPlugin(pluginPath, pluginObject){
    try {
        fs.readFile(pluginPath + 'plugin.xml', function (err, data) {
            var parser = new xml2js.Parser();
            parser.parseString(data, function (err, result) {
                try {
                    let pathToJS = (result['plugin'].hasOwnProperty('js-module')) ? pluginPath + result["plugin"]["js-module"][0]['$']['src'] : pluginPath + result['plugin']['platform'][0]['js-module'][0]['$']['src'];

                    try {
                        // Plugin uses module.exports, just use the exported methods to create mocks

                        let pluginJS = require(pathToJS);
                        //console.log(pluginObject.plugin + ' uses module.exports');

                        for(let property in pluginJS) {
                            functions.push(pluginObject.pluginRef + '.' + property);
                        }

                        completedPluginsCount++;
                        finalize();

                    }catch(e){
                        // Plugin calls cordova method, need to search for methods
                        //console.log(pluginObject.plugin + ' uses cordova methods');
                        fs.readFile(pathToJS,'utf-8', function(err, data){
                            //console.log(data);
                            // TODO Extract the functions out of the JS file
                            completedPluginsCount++;
                            finalize();
                        });
                    }
                } catch (e) {
                    console.log("Error getting path to JS", result);
                }
            })
        });
    } catch (e){
        console.log("Error reading plugin.xml", e);
    }
}

function finalize() {

    if(pluginCount !== completedPluginsCount) return;

    functions.forEach(function(f) {
        f = f.split('.');
        if(!window.hasOwnProperty(f[0])){
            window[f[0]] = {}
        }

        // TODO research a better way to do this
        switch(f.length){
            case 1 :
                window[f[0]] = function(){};
                break;

            case 2 :
                window[f[0]][f[1]] = function(){};
                break;

            case 3 :
                window[f[0]][f[1]] = {};
                window[f[0]][f[1]][f[2]] = function(){};
                break;

            case 4 :
                window[f[0]][f[1]] = {};
                window[f[0]][f[1]][f[2]] = {};
                window[f[0]][f[1]][f[2]][f[3]] = function(){};
                break;
        }
    });


    // TODO write a JavaScript file with the window object in it

}