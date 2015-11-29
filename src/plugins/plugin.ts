import {get} from '../util';

declare var window;
declare var Promise;

export const wrap = function(pluginObj,  methodName, opts: any = {}) {
  return (...args) => {
    console.log('Trying', pluginObj.name, methodName, args);
    return new Promise((resolve, reject) => {

      if(typeof opts.successIndex !== 'undefined') {
        args[opts.successIndex] = resolve;
      }
      if(typeof opts.errorIndex !== 'undefined') {
        args[opts.errorIndex] = reject;
      }

      let pluginInstance = get(window, pluginObj.pluginRef);

      if(!pluginInstance) {
        console.warn('Native: tried calling ' + pluginObj.name + '.' + methodName + ', but the ' + pluginObj.name + ' plugin is not installed. Install the ' + pluginObj.plugin + ' plugin');
        reject({
          error: 'plugin_not_installed'
        });
        return;
      }

      get(window, pluginObj.pluginRef)[methodName].apply(pluginObj, args);
    })
  }
}

class PluginDecotor {
  cls: any;
  config: any;

  constructor(cls, config) {
    this.cls = cls;
    this.config = config;
  }
}
export function Plugin(config) {
  return function(cls) {

    // Add these fields to the class
    for(let k in config) {
      cls[k] = config[k];
    }

    return cls;
  }
}

export function Cordova(opts:any = {}) {
  return function(obj, methodName) {
    if(opts.promise) {
      console.log('TODO: Promise');
    }

    obj[methodName] = wrap(obj, methodName, opts);
  }
}
