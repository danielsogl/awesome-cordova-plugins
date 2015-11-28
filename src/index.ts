export * from './plugins/camera';
export * from './plugins/statusbar';

/*
let wrappedPlugins = {}

let promised;

function newPluginClass(config) {
  let obj = {
    installed: () => {
      return !!obj.plugin();
    },

    // Get the plugin by checking the plugin ref path on window
    plugin: () => {
      return get(window, config.pluginRef)
    },

    pluginName: config.plugin
  };

  return obj;
}

// Go through each registered plugin
for(let i = 0; i < PluginConfig.length; i++) {
  let plugin = PluginConfig[i];

  // Create the wrapped class
  let cls = newPluginClass(plugin);

  promised = plugin.promise || [];

  for(let j = 0; j < promised.length; j++) {
    let method = promised[j];
    let p = promisifyCordova(cls, plugin.id, method)
    cls[method] = p;
  }

  // Save the plugin object
  wrappedPlugins[plugin.className] = cls;
}

export default wrappedPlugins;
*/

//window['Native'] = wrappedPlugins;
