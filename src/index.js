import {Plugins} from './plugins';
import {PluginConfig} from './plugin-config'
import {promisifyCordova} from './cordova';

class IonicNative {
  constructor() {
    let pluginData, promised;
    for(let plugin in PluginConfig) {

      pluginData = PluginConfig[plugin];
      console.log('Plugin', plugin, pluginData);

      promised = pluginData.promise;

      for(let method of promised) {


        let p = promisifyCordova(plugin, method)
        p().then((resp) => {
          console.log('Thing');
        })
      }

    }
  }

}


let Native = new IonicNative;

export default Native;

// Because require isn't exporting properly, who the fuck knows
window.IonicNative = Native
