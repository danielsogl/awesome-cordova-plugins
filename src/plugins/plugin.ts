import {get} from '../util';

declare var window;
declare var Promise;

import {Observable} from '@reactivex/rxjs/dist/cjs/Rx';


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

function callCordovaPlugin(pluginObj:any, methodName:string, args:any[], opts:any={}, resolve:any, reject:any) {
  if(!window.cordova) {
    cordovaWarn(pluginObj.name, methodName);
    /*
    reject({
      error: 'cordova_not_available'
    })
    return;
    */
  }

  // Try to figure out where the success/error callbacks need to be bound
  // to our promise resolve/reject handlers.

  // If the plugin method expects myMethod(success, err, options)
  if(opts.callbackOrder == 'reverse') {
    // Get those arguments in the order [reject, resolve, ...restOfArgs]
    args.unshift(reject);
    args.unshift(resolve);
  } else if(typeof opts.successIndex !== 'undefined' || typeof opts.errorIndex !== 'undefined') {
    // If we've specified a success/error index
    args.splice(opts.successIndex, 0, resolve);
    args.splice(opts.errorIndex, 0, reject);
  } else {
    // Otherwise, let's tack them on to the end of the argument list
    // which is 90% of cases
    args.push(resolve);
    args.push(reject);
  }

  let pluginInstance = getPlugin(pluginObj.pluginRef);

  if(!pluginInstance) {
    pluginWarn(pluginObj.name, methodName, pluginObj.name);
    reject({
      error: 'plugin_not_installed'
    });
    return;
  }

  console.log('Cordova calling', pluginObj.name, methodName, args);

  // TODO: Illegal invocation needs window context
  return get(window, pluginObj.pluginRef)[methodName].apply(pluginInstance, args);
}

function wrapPromise(pluginObj:any, methodName:string, args:any[], opts:any={}) {
  return new Promise((resolve, reject) => {
    callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject);
  })
}

function wrapObservable(pluginObj:any, methodName:string, args:any[], opts:any = {}) {
  return new Observable(observer => {
    console.log('Calling inside observable', observer);
    let pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, (d) => {
      console.log('WATCH RESP', d);
      observer.next(d)
    }, observer.error);

    return () => {
      return get(window, pluginObj.pluginRef)[opts.clearFunction].apply(pluginObj, pluginResult);
    }
  });
}

export const wrap = function(pluginObj:any,  methodName:string, opts:any = {}) {
  return (...args) => {

    if(opts.observable) {
      console.log("Wrapping observable");
      return wrapObservable(pluginObj, methodName, args, opts);
    } else {
      return wrapPromise(pluginObj, methodName, args, opts);
    }
  }
}

/**
 * Class decorator specifying Plugin metadata. Required for all plugins.
 */
export function Plugin(config) {
  return function(cls) {

    // Add these fields to the class
    for(let k in config) {
      cls[k] = config[k];
    }

    return cls;
  }
}

/**
 * Wrap a stub function in a call to a Cordova plugin, checking if both Cordova
 * and the required plugin are installed.
 */
export function Cordova(opts:any = {}) {
  return (target: Object, methodName: string, descriptor: TypedPropertyDescriptor<any>) => {
    let originalMethod = descriptor.value;

    return {
      value: function(...args: any[]) {
        return wrap(this, methodName, opts).apply(this, args);
      }
    }
  }
}

/**
 * Before calling the original method, ensure Cordova and the plugin are installed.
 */
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
