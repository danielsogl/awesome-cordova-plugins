import {Plugins} from './plugins';
import {PluginConfig} from './plugin-config'
import {promisifyCordova} from './cordova';

let Wrapped = {
}

let promised;
for(let plugin of PluginConfig) {
  console.log('Plugin', plugin.name, plugin);

  Wrapped[plugin.className] = {};

  promised = plugin.promise;

  for(let method of promised) {
    let p = promisifyCordova(plugin.id, method)
    Wrapped[plugin.className][method] = p;
  }

}

export {Wrapped};

window.Native = Wrapped;
