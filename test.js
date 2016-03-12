'use strict';
var exec = require('child_process').execSync;
var fs = require('fs');
var xml2js = require('xml2js');
var plugin, property, functions = [], pluginCount = 0, completedPluginsCount = 0, window = {};
var stop = false;
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
    if(pluginObject.name != 'Badge') return;
    try {
        fs.readFile(pluginPath + 'plugin.xml', function (err, data) {
            var parser = new xml2js.Parser();
            parser.parseString(data, function (err, result) {
                try {
                    let pathToJS = (result['plugin'].hasOwnProperty('js-module')) ? pluginPath + result["plugin"]["js-module"][0]['$']['src'] : pluginPath + result['plugin']['platform'][0]['js-module'][0]['$']['src'];

                    try {
                        // Plugin uses module.exports, just use the exported methods to create mocks
                        if(stop) return;

                        let pluginJS = require(pathToJS);
                        //console.log(pluginObject.plugin + ' uses module.exports');

                        for(let property in pluginJS) {
                            functions.push(pluginObject.pluginRef + '.' + property);
                        }

                        completedPluginsCount++;
                        finalize();
                    }catch(e){
                        // Plugin needs cleaning
                        fs.readFile(pathToJS,'utf-8', function(err, data){
                            let requirePattern = /(var(\s[a-zA-Z]*\s*=\srequire\W{2}(.*)\W{2}(.*))+;)/gm;
                            let requireCheck = data.match(requirePattern);
                            if(!requireCheck) {
                                console.log("Plugin isn't importing anything.");
                            }else{
                                console.log("Plugin is using import");
                                // remove all imports
                                requireCheck.forEach(function(str){
                                    data = data.replace(str, '');
                                    // Clean all functions used by imported modules
                                    str.match(/([a-zA-Z]+)(?=\s+=)/gm).forEach(function(aVar){
                                        let regex = new RegExp('^('+aVar+'(\\W[a-zA-Z]+)+\\((.*\\s*\\n*\\t*)*\\);)', "gm");
                                        data = data.replace(regex, '');
                                    });
                                });
                            }

                            let cordovaPattern = /cordova.[a-zA-Z]*\W(.*)\W;\n/g;
                            let cordovaCheck = data.match(cordovaPattern);
                            if(!cordovaCheck){
                                console.log("Plugin isn't using cordova methods");
                            }else{
                                console.log("Plugin is using cordova methods");
                                console.dir(cordovaCheck);
                                // remove all cordova calls
                                cordovaCheck.forEach(function(str) {
                                    console.log("Removing method call: " + str);
                                   data = data.replace(str, '');
                                });
                            }

                            console.log("Writing file ...");
                            //fs.writeFileSync('./file.js', data, 'utf8');
                            var x = require('./file.js');
                            console.log(x);
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

    let jsfile = "var window = {};";

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