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
    if(pluginObject.name != 'Facebook') return console.log("Skipping plugin " + pluginObject.name);
    try {
        fs.readFile(pluginPath + 'plugin.xml', function (err, data) {
            var parser = new xml2js.Parser();
            parser.parseString(data, function (err, result) {
                try {
                    let pathToJS;
                    if(result['plugin'].hasOwnProperty('js-module')) pathToJS = pluginPath + result["plugin"]["js-module"][0]['$']['src'];
                    else {
                        result['plugin']['platform'].forEach(function(platform){
                            if(platform.$ && platform.$.name === 'browser') pathToJS = pluginPath + platform['js-module'][0]['$']['src'];
                        });
                        console.log("im here");
                        if(!pathToJS) pathToJS = pluginPath + result['plugin']['platform'][0]['js-module'][0]['$']['src'];
                    }

                    console.log(pathToJS);

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
                        // Plugin needs cleaning/processing

                        fs.readFile(pathToJS,'utf-8', function(err, data){
                            console.log();
                            console.log("Processing " + pluginObject.name);

                            let requirePattern = /(var(\s[a-zA-Z]*\s*=\srequire\W{2}(.*)\W{2}(.*))+(;|\n))/gm;
                            let requireCheck = data.match(requirePattern);
                            if(!requireCheck) {
                                //console.log(pluginObject.name + " isn't importing anything.");
                            }else{
                                //console.log(pluginObject.name + " is using import");

                                data += "\n function myvoidfunction(){}";

                                // remove all imports
                                requireCheck.forEach(function(str){
                                    data = data.replace(str, '');
                                    // Clean all functions used by imported modules
                                    str.match(/([a-zA-Z]+)(?=\s+=)/gm).forEach(function(aVar){
                                        // Remove method usage
                                        data = data
                                            .replace(new RegExp('(^'+aVar+'(.*);)', 'gm'), '')
                                            .replace(new RegExp(aVar+'(\\.[a-zA-Z])*\\(', 'gm'), 'myvoidfunction(')
                                            .replace(new RegExp('(\\s*:\\s*'+aVar+')', 'gm'), ': myvoidfunction')
                                    });
                                });
                            }

                            let cordovaCheck = data.match(/cordova.[a-zA-Z]*\W(.*)\W;\n/g);
                            if(cordovaCheck){
                                cordovaCheck.forEach(function(str) {
                                   data = data.replace(str, '');
                                });
                            }else console.log("### " + pluginObject.name + " ###");

                            let exportCheck = data.match(/((module\.)*exports(\.)*)/gm);

                            if(!exportCheck){
                                //console.warn("!! WARN : " + pluginObject.name + " doesn't export anything");
                                data = data.replace(/cordova\..*/,'');
                                data += "\nmodule.exports = new " + data.match(/(?:^function\s([a-zA-Z]+)\(\)\s*\{\n\}$)/m)[1] + "();"
                            }
                            fs.writeFileSync('./plugins/'+pluginObject.name+'.js', data, 'utf8');


                            //fs.writeFileSync('./file.js', data, 'utf8');
                                try {
                                    var x = require('./plugins/'+pluginObject.name+'.js');
                                    console.log("Succefully cleaned " + pluginObject.name);
                                }catch(e) {
                                    console.log(e);
                                    console.error("!!! ERROR !!! : Wasn't able to clean " + pluginObject.name);
                                }

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
    // TODO write a JavaScript file with the window object in it

    //functions.forEach(function(f) {
    //    f = f.split('.');
    //    if(!window.hasOwnProperty(f[0])){
    //        window[f[0]] = {}
    //    }
    //
    //    // TODO research a better way to do this
    //    switch(f.length){
    //        case 1 :
    //            window[f[0]] = function(){};
    //            break;
    //
    //        case 2 :
    //            window[f[0]][f[1]] = function(){};
    //            break;
    //
    //        case 3 :
    //            window[f[0]][f[1]] = {};
    //            window[f[0]][f[1]][f[2]] = function(){};
    //            break;
    //
    //        case 4 :
    //            window[f[0]][f[1]] = {};
    //            window[f[0]][f[1]][f[2]] = {};
    //            window[f[0]][f[1]][f[2]][f[3]] = function(){};
    //            break;
    //    }
    //});



}