import {Plugins} from './plugins';
import {PluginConfig} from './plugin-config'
import {promisifyCordova} from './cordova';

let wrappedPlugins = {}

let promised;

// Go through each registered plugin
for(let plugin of PluginConfig) {
  console.log('Plugin', plugin.className, plugin);

  // Create the wrapped class
  let cls = newPluginClass(plugin);

  promised = plugin.promise || [];

  for(let method of promised) {
    let p = promisifyCordova(plugin.id, method)
    cls[method] = p;
  }

  // Save the plugin object
  wrappedPlugins[plugin.className] = cls;
}

function newPluginClass(config) {
  let obj = {
    installed: () => {
      return obj.pluginCheck();
    }
  }

  obj.pluginCheck = config.pluginCheck || function() { return false; };

  return obj;
}

export {wrappedPlugins};

window.Native = wrappedPlugins;
