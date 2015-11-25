var plugin_config_1 = require('./plugin-config');
var cordova_1 = require('./cordova');
var util_1 = require('./util');
var wrappedPlugins = {};
var promised;
function newPluginClass(config) {
    var obj = {
        installed: function () {
            return !!obj.plugin();
        },
        // Get the plugin by checking the plugin ref path on window
        plugin: function () {
            return util_1.get(window, config.pluginRef);
        },
        pluginName: config.plugin
    };
    return obj;
}
// Go through each registered plugin
for (var i = 0; i < plugin_config_1.PluginConfig.length; i++) {
    var plugin = plugin_config_1.PluginConfig[i];
    // Create the wrapped class
    var cls = newPluginClass(plugin);
    promised = plugin.promise || [];
    for (var j = 0; j < promised.length; j++) {
        var method = promised[j];
        var p = cordova_1.promisifyCordova(cls, plugin.id, method);
        cls[method] = p;
    }
    // Save the plugin object
    wrappedPlugins[plugin.className] = cls;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = wrappedPlugins;
window['Native'] = wrappedPlugins;
