import { get } from '../util';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

declare var window;
declare var Promise;

/**
 * @private
 */
export interface PluginConfig {
  /**
   * Plugin name, this should match the class name
   */
  pluginName: string;
  /**
   * Plugin NPM package name
   */
  plugin: string;
  /**
   * Plugin object reference
   */
  pluginRef: string;
  /**
   * Github repository URL
   */
  repo: string;
  /**
   * Custom install command
   */
  install?: string;
  /**
   * Supported platforms
   */
  platforms?: string[];
}

/**
 * @private
 */
export interface CordovaOptions {
  /**
   * Set to true if the wrapped method is a sync function
   */
  sync?: boolean;
  /**
   * Callback order. Set to reverse if the success/error callbacks are the first 2 arguments that the wrapped method takes.
   */
  callbackOrder?: 'reverse';
  /**
   * Callback style
   */
  callbackStyle?: 'node' | 'object';
  /**
   * Set a custom index for the success callback function. This doesn't work if callbackOrder or callbackStyle are set.
   */
  successIndex?: number;
  /**
   * Set a custom index for the error callback function. This doesn't work if callbackOrder or callbackStyle are set.
   */
  errorIndex?: number;
  /**
   * Success function property name. This must be set if callbackStyle is set to object.
   */
  successName?: string;
  /**
   * Error function property name. This must be set if callbackStyle is set to object.
   */
  errorName?: string;
  /**
   * Set to true to return an observable
   */
  observable?: boolean;
  /**
   * If observable is set to true, this can be set to a different function name that will cancel the observable.
   */
  clearFunction?: string;
  /**
   * This can be used if clearFunction is set. Set this to true to call the clearFunction with the same arguments used in the initial function.
   */
  clearWithArgs?: boolean;
  /**
   * Creates an observable that wraps a global event. Replaces document.addEventListener
   */
  eventObservable?: boolean;
  /**
   * Event name, this must be set if eventObservable is set to true
   */
  event?: string;
  /**
   * Element to attach the event listener to, this is optional, defaults to `window`
   */
  element?: any;
  /**
   * Set to true if the wrapped method returns a promise
   */
  otherPromise?: boolean;
  /**
   * Supported platforms
   */
  platforms?: string[];
}

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
export const pluginWarn = function(pluginObj: any, method?: string) {
  let pluginName = pluginObj.pluginName, plugin = pluginObj.plugin;
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
  // ignore resolve and reject in case sync
  if (opts.sync) {
    return args;
  }

  // If the plugin method expects myMethod(success, err, options)
  if (opts.callbackOrder === 'reverse') {
    // Get those arguments in the order [resolve, reject, ...restOfArgs]
    args.unshift(reject);
    args.unshift(resolve);
  } else if (opts.callbackStyle === 'node') {
    args.push((err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  } else if (opts.callbackStyle === 'object' && opts.successName && opts.errorName) {
    let obj: any = {};
    obj[opts.successName] = resolve;
    obj[opts.errorName] = reject;
    args.push(obj);
  } else if (typeof opts.successIndex !== 'undefined' || typeof opts.errorIndex !== 'undefined') {
    const setSuccessIndex = () => {
      // If we've specified a success/error index
      if (opts.successIndex > args.length) {
        args[opts.successIndex] = resolve;
      } else {
        args.splice(opts.successIndex, 0, resolve);
      }
    };

    const setErrorIndex = () => {
      // We don't want that the reject cb gets spliced into the position of an optional argument that has not been defined and thus causing non expected behaviour.
      if (opts.errorIndex > args.length) {
        args[opts.errorIndex] = reject; // insert the reject fn at the correct specific index
      } else {
        args.splice(opts.errorIndex, 0, reject); // otherwise just splice it into the array
      }
    };

    if (opts.successIndex > opts.errorIndex) {
      setErrorIndex();
      setSuccessIndex();
    } else {
      setSuccessIndex();
      setErrorIndex();
    }


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

  if (!pluginInstance || pluginInstance[methodName] === 'undefined') {
    // Do this check in here in the case that the Web API for this plugin is available (for example, Geolocation).
    if (!window.cordova) {
      cordovaWarn(pluginObj.pluginName, methodName);
      return {
        error: 'cordova_not_available'
      };
    }

    pluginWarn(pluginObj, methodName);
    return {
      error: 'plugin_not_installed'
    };
  }

  return pluginInstance[methodName].apply(pluginInstance, args);
}

/**
 * @private
 */
export function getPromise(cb) {

  const tryNativePromise = () => {
    if (window.Promise) {
      return new Promise((resolve, reject) => {
        cb(resolve, reject);
      });
    } else {
      console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular 1/2 or on a recent browser.');
    }
  };

  if (window.angular) {
    let injector = window.angular.element(document.querySelector('[ng-app]') || document.body).injector();
    if (injector) {
      let $q = injector.get('$q');
      return $q((resolve, reject) => {
        cb(resolve, reject);
      });
    } else {
      console.warn('Angular 1 was detected but $q couldn\'t be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won\'t trigger an automatic digest when promises resolve.');
      return tryNativePromise();
    }
  } else {
    return tryNativePromise();
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
            return callCordovaPlugin(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
          }
          return get(window, pluginObj.pluginRef)[opts.clearFunction].call(pluginObj, pluginResult);
        }
      } catch (e) {
        console.warn('Unable to clear the previous observable watch for', pluginObj.pluginName, methodName);
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
            console.warn('Unable to clear the previous observable watch for', pluginObj.pluginName, methodName);
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
 * @param event even name
 * @param element The element to attach the event listener to
 * @returns {Observable}
 */
function wrapEventObservable(event: string, element: any = window): Observable<any> {
  return Observable.fromEvent(element, event);
}

/**
 * Certain plugins expect the user to override methods in the plugin. For example,
 * window.cordova.plugins.backgroundMode.onactivate = function() { ... }.
 *
 * Unfortunately, this is brittle and would be better wrapped as an Observable. overrideFunction
 * does just this.
 */
function overrideFunction(pluginObj: any, methodName: string, args: any[], opts: any = {}): Observable<any> {
  return new Observable(observer => {

    let pluginInstance = getPlugin(pluginObj.pluginRef);

    if (!pluginInstance) {
      // Do this check in here in the case that the Web API for this plugin is available (for example, Geolocation).
      if (!window.cordova) {
        cordovaWarn(pluginObj.pluginName, methodName);
        observer.error({
          error: 'cordova_not_available'
        });
      }

      pluginWarn(pluginObj, methodName);
      observer.error({
        error: 'plugin_not_installed'
      });
      return;
    }

    pluginInstance[methodName] = observer.next.bind(observer);
  });
}


/**
 * @private
 * @param pluginObj
 * @param methodName
 * @param opts
 * @returns {function(...[any]): (undefined|*|Observable|*|*)}
 */
export const wrap = function(pluginObj: any, methodName: string, opts: CordovaOptions = {}) {
  return (...args) => {
    if (opts.sync) {
      // Sync doesn't wrap the plugin with a promise or observable, it returns the result as-is
      return callCordovaPlugin(pluginObj, methodName, args, opts);
    } else if (opts.observable) {
      return wrapObservable(pluginObj, methodName, args, opts);
    } else if (opts.eventObservable && opts.event) {
      return wrapEventObservable(opts.event, opts.element);
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
 * ```typescript
 * @Plugin({
 *  pluginName: 'MyPlugin',
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
export function Plugin(config: PluginConfig) {
  return function(cls) {

    // Add these fields to the class
    for (let k in config) {
      cls[k] = config[k];
    }

    cls['installed'] = function(printWarning?: boolean) {
      return !!getPlugin(config.pluginRef);
    };

    cls['getPlugin'] = function() {
      return getPlugin(config.pluginRef);
    };

    cls['checkInstall'] = function() {
      let pluginInstance = getPlugin(config.pluginRef);

      if (!pluginInstance) {
        pluginWarn(cls);
        return false;
      }
      return true;
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
export function Cordova(opts: CordovaOptions = {}) {
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
export function CordovaProperty(target: any, key: string) {
  const exists = () => {
    let pluginInstance = getPlugin(target.pluginRef);
    if (!pluginInstance || typeof pluginInstance[key] === 'undefined') {
      pluginWarn(target, key);
      return false;
    }
    return true;
  };

  Object.defineProperty(target, key, {
    get: () => {
      if (exists()) {
        return getPlugin(target.pluginRef)[key];
      } else {
        return null;
      }
    },
    set: (value) => {
      if (exists()) {
        getPlugin(target.pluginRef)[key] = value;
      }
    }
  });
}

/**
 * @private
 * @param target
 * @param key
 * @constructor
 */
export function InstanceProperty(target: any, key: string) {
  Object.defineProperty(target, key, {
    get: function(){
      return this._objectInstance[key];
    },
    set: function(value){
      this._objectInstance[key] = value;
    }
  });
}

/**
 * @private
 *
 * Wrap a stub function in a call to a Cordova plugin, checking if both Cordova
 * and the required plugin are installed.
 */
export function CordovaFunctionOverride(opts: any = {}) {
  return (target: Object, methodName: string, descriptor: TypedPropertyDescriptor<any>) => {
    return {
      value: function(...args: any[]) {
        return overrideFunction(this, methodName, opts);
      }
    };
  };
}

/**
 * @private
 */
export interface CordovaFiniteObservableOptions extends CordovaOptions {
  /**
   * Function that gets a result returned from plugin's success callback, and decides whether it is last value and observable should complete.
   */
  resultFinalPredicate?: (result: any) => boolean;
  /**
   * Function that gets called after resultFinalPredicate, and removes service data that indicates end of stream from the result.
   */
  resultTransform?: (result: any) => any;
}

/**
 * @private
 *
 * Wraps method that returns an observable that can be completed. Provided opts.resultFinalPredicate dictates when the observable completes.
 *
 */
export function CordovaFiniteObservable(opts: CordovaFiniteObservableOptions = {}) {
  if (opts.observable === false) {
    throw new Error('CordovaFiniteObservable decorator can only be used on methods that returns observable. Please provide correct option.');
  }
  opts.observable = true;
  return (target: Object, methodName: string, descriptor: TypedPropertyDescriptor<any>) => {
    return {
      value: function(...args: any[]) {
        let wrappedObservable: Observable<any> = wrap(this, methodName, opts).apply(this, args);
        return new Observable<any>((observer) => {
          let wrappedSubscription = wrappedObservable.subscribe({
            next: (x) => {
              observer.next(opts.resultTransform ? opts.resultTransform(x) : x);
              if (opts.resultFinalPredicate && opts.resultFinalPredicate(x)) {
                observer.complete();
              }
            },
            error: (err) => { observer.error(err); },
            complete: () => { observer.complete(); }
          });
          return () => {
            wrappedSubscription.unsubscribe();
          };
        });
      }
    };
  };
}
