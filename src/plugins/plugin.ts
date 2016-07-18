import { get } from '../util';

declare var window;
declare var Promise;
declare var $q;

import {Observable} from 'rxjs/Observable';

/**
 * @private
 * @param pluginRef
 * @returns {null|*}
 */
export const getPlugin = function(pluginRef: string): any {
  return get(window, pluginRef);
};

/**
 * @private
 * @param pluginObj
 * @param method
 */
export const pluginWarn = function(pluginObj: any, method: string) {
  let pluginName = pluginObj.name, plugin = pluginObj.plugin;
  if (method) {
    console.warn('Native: tried calling ' + pluginName + '.' + method + ', but the ' + pluginName + ' plugin is not installed.');
  } else {
    console.warn('Native: tried accessing the ' + pluginName + ' plugin but it\'s not installed.');
  }
  console.warn('Install the ' + pluginName + ' plugin: \'ionic plugin add ' + plugin + '\'');
};

/**
 * @private
 * @param pluginName
 * @param method
 */
export const cordovaWarn = function(pluginName: string, method: string) {
  if (method) {
    console.warn('Native: tried calling ' + pluginName + '.' + method + ', but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
  } else {
    console.warn('Native: tried accessing the ' + pluginName + ' plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
  }
};
function setIndex(args: any[], opts: any = {}, resolve?: Function, reject?: Function): any {
  // If the plugin method expects myMethod(success, err, options)
  if (opts.callbackOrder === 'reverse') {
    // Get those arguments in the order [resolve, reject, ...restOfArgs]
    args.unshift(reject);
    args.unshift(resolve);
  } else if (typeof opts.successIndex !== 'undefined' || typeof opts.errorIndex !== 'undefined') {
    // If we've specified a success/error index
    args.splice(opts.successIndex, 0, resolve);
    args.splice(opts.errorIndex, 0, reject);
  } else {
    // Otherwise, let's tack them on to the end of the argument list
    // which is 90% of cases
    args.push(resolve);
    args.push(reject);
  }
  return args;
}

function callCordovaPlugin(pluginObj: any, methodName: string, args: any[], opts: any = {}, resolve?: Function, reject?: Function) {
  // Try to figure out where the success/error callbacks need to be bound
  // to our promise resolve/reject handlers.
  args = setIndex(args, opts, resolve, reject);

  let pluginInstance = getPlugin(pluginObj.pluginRef);

  if (!pluginInstance) {
    // Do this check in here in the case that the Web API for this plugin is available (for example, Geolocation).
    if (!window.cordova) {
      cordovaWarn(pluginObj.name, methodName);
      return {
        error: 'cordova_not_available'
      };
    }

    pluginWarn(pluginObj, methodName);
    return {
      error: 'plugin_not_installed'
    };
  }

  // TODO: Illegal invocation needs window context
  return get(window, pluginObj.pluginRef)[methodName].apply(pluginInstance, args);
}

function getPromise(cb) {
  if (window.Promise) {
    return new Promise((resolve, reject) => {
      cb(resolve, reject);
    });
  } else if (window.angular) {
    let $q = window.angular.injector(['ng']).get('$q');
    return $q((resolve, reject) => {
      cb(resolve, reject);
    });
  } else {
    console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular 1/2 or on a recent browser.');
  }
}

function wrapPromise(pluginObj: any, methodName: string, args: any[], opts: any = {}) {
  let pluginResult, rej;
  const p = getPromise((resolve, reject) => {
    pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject);
    rej = reject;
  });
  // Angular throws an error on unhandled rejection, but in this case we have already printed
  // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
  // to error
  if (pluginResult && pluginResult.error) {
    p.catch(() => { });
    rej(pluginResult.error);
  }
  return p;
}

function wrapOtherPromise(pluginObj: any, methodName: string, args: any[], opts: any= {}) {
  return getPromise((resolve, reject) => {
    let pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts);
    if (pluginResult && pluginResult.error) {
      reject(pluginResult.error);
    }
    pluginResult.then(resolve).catch(reject);
  });
}

function wrapObservable(pluginObj: any, methodName: string, args: any[], opts: any = {}) {
  return new Observable(observer => {
    let pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
    if (pluginResult && pluginResult.error) {
      observer.error(pluginResult.error);
    }
    return () => {
      try {
        if (opts.clearFunction) {
          if (opts.clearWithArgs) {
            return get(window, pluginObj.pluginRef)[opts.clearFunction].apply(pluginObj, args);
          }
          return get(window, pluginObj.pluginRef)[opts.clearFunction].call(pluginObj, pluginResult);
        }
      } catch (e) {
        console.warn('Unable to clear the previous observable watch for', pluginObj.name, methodName);
        console.error(e);
      }
    };
  });
}

function callInstance(pluginObj: any, methodName: string, args: any[], opts: any = {}, resolve?: Function, reject?: Function) {
  args = setIndex(args, opts, resolve, reject);
  return pluginObj._objectInstance[methodName].apply(pluginObj._objectInstance, args);
}

function wrapInstance(pluginObj: any, methodName: string, opts: any = {}) {
  return (...args) => {
    if (opts.sync) {
      // Sync doesn't wrap the plugin with a promise or observable, it returns the result as-is
      return callInstance(pluginObj, methodName, args, opts);
    } else if (opts.observable) {
      return new Observable(observer => {
        let pluginResult = callInstance(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
        return () => {
          try {
            if (opts.clearWithArgs) {
              return pluginObj._objectInstance[opts.clearFunction].apply(pluginObj._objectInstance, args);
            }
            return pluginObj._objectInstance[opts.clearFunction].call(pluginObj, pluginResult);
          } catch (e) {
            console.warn('Unable to clear the previous observable watch for', pluginObj.name, methodName);
            console.error(e);
          }
        };
      });
    } else if (opts.otherPromise) {
      return getPromise((resolve, reject) => {
        let result = callInstance(pluginObj, methodName, args, opts, resolve, reject);
        result.then(resolve, reject);
      });
    } else {
      return getPromise((resolve, reject) => {
        callInstance(pluginObj, methodName, args, opts, resolve, reject);
      });
    }
  };
}

/**
 * Wrap the event with an observable
 * @param event
 * @returns {Observable}
 */
function wrapEventObservable(event: string): Observable<any> {
  return new Observable(observer => {
    window.addEventListener(event, observer.next.bind(observer), false);
    return () => window.removeEventListener(event, observer.next.bind(observer), false);
  });
}

/**
 * @private
 * @param pluginObj
 * @param methodName
 * @param opts
 * @returns {function(...[any]): (undefined|*|Observable|*|*)}
 */
export const wrap = function(pluginObj: any, methodName: string, opts: any = {}) {
  return (...args) => {
    if (opts.sync) {
      // Sync doesn't wrap the plugin with a promise or observable, it returns the result as-is
      return callCordovaPlugin(pluginObj, methodName, args, opts);
    } else if (opts.observable) {
      return wrapObservable(pluginObj, methodName, args, opts);
    } else if (opts.eventObservable && opts.event) {
      return wrapEventObservable(opts.event);
    } else if (opts.otherPromise) {
      return wrapOtherPromise(pluginObj, methodName, args, opts);
    } else {
      return wrapPromise(pluginObj, methodName, args, opts);
    }
  };
};

/**
 * @private
 *
 * Class decorator specifying Plugin metadata. Required for all plugins.
 *
 * @usage
 * ```ts
 * @Plugin({
 *  name: 'MyPlugin',
 *  plugin: 'cordova-plugin-myplugin',
 *  pluginRef: 'window.myplugin'
 *  })
 *  export class MyPlugin {
 *
 *    // Plugin wrappers, properties, and functions go here ...
 *
 *  }
 * ```
 */
export function Plugin(config) {
  return function(cls) {

    // Add these fields to the class
    for (let k in config) {
      cls[k] = config[k];
    }

    cls['installed'] = function() {
      return !!getPlugin(config.pluginRef);
    };

    return cls;
  };
}

/**
 * @private
 *
 * Wrap a stub function in a call to a Cordova plugin, checking if both Cordova
 * and the required plugin are installed.
 */
export function Cordova(opts: any = {}) {
  return (target: Object, methodName: string, descriptor: TypedPropertyDescriptor<any>) => {
    return {
      value: function(...args: any[]) {
        return wrap(this, methodName, opts).apply(this, args);
      }
    };
  };
}

/**
 * @private
 *
 * Wrap an instance method
 */
export function CordovaInstance(opts: any = {}) {
  return (target: Object, methodName: string) => {
    return {
      value: function(...args: any[]) {
        return wrapInstance(this, methodName, opts).apply(this, args);
      }
    };
  };
}

/**
 * @private
 *
 *
 * Before calling the original method, ensure Cordova and the plugin are installed.
 */
export function CordovaProperty(target: Function, key: string, descriptor: TypedPropertyDescriptor<any>) {
  let originalMethod = descriptor.get;

  descriptor.get = function(...args: any[]) {
    if (!window.cordova) {
      cordovaWarn(this.name, null);
      return {};
    }
    let pluginObj: any = this;
    let pluginInstance = getPlugin(pluginObj.pluginRef);
    if (!pluginInstance) {
      pluginWarn(this, key);
      return {};
    }
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

/**
 * @private
 * @param target
 * @param key
 * @param descriptor
 * @constructor
 */
export function InstanceProperty(target: any, key: string, descriptor: TypedPropertyDescriptor<any>) {
  descriptor.get = function() {
    return this._objectInstance[key];
  };

  descriptor.set = function(...args: any[]) {
    this._objectInstance[key] = args[0];
  };

  return descriptor;
}
