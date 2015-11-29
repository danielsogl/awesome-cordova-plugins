import {get} from '../util';

declare var window;
declare var Promise;


export const getPlugin = function(pluginRef: string): any {
  return get(window, pluginRef);
}
export const isInstalled = function(pluginRef: string): boolean {
  return !!getPlugin(pluginRef);
}
export const pluginWarn = function(pluginName: string, method: string, plugin: string) {
  if(method) {
    console.warn('Native: tried calling ' + pluginName + '.' + method +
      ', but the ' + pluginName + ' plugin is not installed. Install the ' +
      plugin + ' plugin');
  } else {
    console.warn('Native: tried accessing the ' + pluginName + ' plugin but it\'s not installed. Install the ' + plugin + ' plugin');
  }
}
export const cordovaWarn = function(pluginName: string, method: string) {
  if(method) {
    console.warn('Native: tried calling ' + pluginName + '.' + method + ', but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
  } else {
    console.warn('Native: tried accessing the ' + pluginName + ' plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
  }
}

export const wrap = function(pluginObj,  methodName, opts: any = {}) {
  return (...args) => {
    return new Promise((resolve, reject) => {

      if(!window.cordova) {
        cordovaWarn(pluginObj.name, methodName);
        reject({
          error: 'cordova_not_available'
        })
        return;
      }

      if(typeof opts.successIndex !== 'undefined') {
        args[opts.successIndex] = resolve;
      }
      if(typeof opts.errorIndex !== 'undefined') {
        args[opts.errorIndex] = reject;
      }

      let pluginInstance = getPlugin(pluginObj.pluginRef);

      if(!pluginInstance) {
        pluginWarn(pluginObj.name, methodName, pluginObj.name);
        reject({
          error: 'plugin_not_installed'
        });
        return;
      }

      get(window, pluginObj.pluginRef)[methodName].apply(pluginObj, args);
    })
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
    obj[methodName] = wrap(obj, methodName, opts).bind(obj);
  }
}

export function RequiresPlugin(target: Function, key: string, descriptor: TypedPropertyDescriptor<any>) {
  let originalMethod = descriptor.value;

  descriptor.value = function(...args: any[]) {
    console.log('Calling', this);
    if(!window.cordova) {
      cordovaWarn(this.name, null);
      return;
    }

    let pluginInstance = getPlugin(this.pluginRef);
    if(!pluginInstance) {
      pluginWarn(this.name, null, this.name);
      return;
    }
    originalMethod.apply(this, args);
  }

  return descriptor;
}
