import {PluginConfig} from './plugin-config'
import {promisifyCordova} from './cordova';

let wrappedPlugins = {}

let promised;

function newPluginClass(config) {
  let obj = {
    installed: () => {
      return config.pluginRef && window.hasOwnProperty(config.pluginRef);
    },

    plugin: config.plugin
  };

  return obj;
}

// Go through each registered plugin
for(let plugin of PluginConfig) {
  console.log('Plugin', plugin.className, plugin);

  // Create the wrapped class
  let cls = newPluginClass(plugin);

  promised = plugin.promise || [];

  for(let method of promised) {
    let p = promisifyCordova(cls, plugin.id, method)
    cls[method] = p;
  }

  // Save the plugin object
  wrappedPlugins[plugin.className] = cls;
}

export {wrappedPlugins};

window.Native = wrappedPlugins;
